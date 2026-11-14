/* t1-3.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-3.q', {
  questions: {

    // ── t1-3-q001 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q001": {
      // EN: <p>Evaluate <span class="chem">7P3</span>.</p>
      stem: "<p>計算 (Evaluate) <span class=\"chem\">7P3</span>。</p>",
      hints: [
        // EN: Use <span class="chem">nPr = n! / (n - r)!</span>.
        "使用 <span class=\"chem\">nPr = n! / (n - r)!</span>。",
        // EN: Compute <span class="chem">7 × 6 × 5</span>.
        "計算 <span class=\"chem\">7 × 6 × 5</span>。",
      ],
      // EN: <div class="worked__math"><sup>7</sup>P<sub>3</sub> = <span class="frac"><span>7!</span><span>4!</span></span> = 7 × 6 × 5 = <b>210</b></div>
      solution: "<div class=\"worked__math\"><sup>7</sup>P<sub>3</sub> = <span class=\"frac\"><span>7!</span><span>4!</span></span> = 7 × 6 × 5 = <b>210</b></div>",
    },

    // ── t1-3-q002 · mcq · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q002": {
      // EN: <p>A committee of 4 students is to be chosen from 9 volunteers. How many different committees can be formed?</p>
      stem: "<p>從 9 名義工中選出一個由 4 名學生組成的委員會。可以組成多少個不同的委員會？</p>",
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
        "選出委員會成員時，選取的順序是否重要？",
        // EN: Compute <span class="chem">9C4 = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)</span>.
        "計算 <span class=\"chem\">9C4 = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)</span>。",
      ],
      // EN: <div class="worked__math"><sup>9</sup>C<sub>4</sub> = <span class="frac"><span>9 × 8 × 7 × 6</span><span>24</span></span> = <b>126</b></div>
      solution: "<div class=\"worked__math\"><sup>9</sup>C<sub>4</sub> = <span class=\"frac\"><span>9 × 8 × 7 × 6</span><span>24</span></span> = <b>126</b></div>",
      misconception: {
        // EN (option B): 3024 is <span class="chem">9P4</span>, which counts ordered arrangements. In a committee, order does not matter, so use <span class="chem">9C4</span>.
        "1": "3024 是 <span class=\"chem\">9P4</span>，計算的是有序排列。在委員會中順序並不重要，因此應使用組合 <span class=\"chem\">9C4</span>。",
        // EN (option C): Multiplying <span class="chem">9 × 4</span> does not count subsets of size 4.
        "2": "將 <span class=\"chem\">9 × 4</span> 相乘並不能點算 4 人子集的數目。",
        // EN (option D): 504 is <span class="chem">9P3</span>, which neither matches the size nor the unordered nature of the committee.
        "3": "504 是 <span class=\"chem\">9P3</span>，既不符合人數，也不是無序的組合。",
      },
    },

    // ── t1-3-q003 · numeric · foundation · AHL · AHL 1.11 · 3 marks
    "t1-3-q003": {
      // EN: <p>Given that <span class="chem">(5x + 4) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class="chem">A</span>.</p>
      stem: "<p>已知 <span class=\"chem\">(5x + 4) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>，求 (Find) <span class=\"chem\">A</span> 的值。</p>",
      hints: [
        // EN: Multiply both sides by <span class="chem">(x - 1)(x + 2)</span> to get <span class="chem">5x + 4 = A(x + 2) + B(x - 1)</span>.
        "兩邊同乘以 <span class=\"chem\">(x - 1)(x + 2)</span>，得 <span class=\"chem\">5x + 4 = A(x + 2) + B(x - 1)</span>。",
        // EN: Substitute <span class="chem">x = 1</span> so the <span class="chem">B</span> term becomes zero.
        "代入 <span class=\"chem\">x = 1</span> 使 <span class=\"chem\">B</span> 項變為零。",
      ],
      // EN: <div class="worked__math">5<i>x</i> + 4 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math">Set <i>x</i> = 1:  9 = 3<i>A</i>  ⇒  <b><i>A</i> = 3</b></div>
      solution: "<div class=\"worked__math\">5<i>x</i> + 4 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class=\"worked__math\">設 <i>x</i> = 1：9 = 3<i>A</i>  ⇒  <b><i>A</i> = 3</b></div>",
    },

    // ── t1-3-q004 · mcq · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q004": {
      // EN: <p>State the set of values of <span class="chem">x</span> for which the binomial expansion of <span class="chem">(3 + 2x)^{-1}</span> is valid.</p>
      stem: "<p>寫出 (State) <span class=\"chem\">(3 + 2x)^{-1}</span> 二項式展開式有效的 <span class=\"chem\">x</span> 值範圍。</p>",
      options: [
        // EN: <span class="chem">|x| &lt; 3/2</span>
        "<span class=\"chem\">|x| &lt; 3/2</span>",
        // EN: <span class="chem">|x| &lt; 1</span>
        "<span class=\"chem\">|x| &lt; 1</span>",
        // EN: <span class="chem">|x| &lt; 2/3</span>
        "<span class=\"chem\">|x| &lt; 2/3</span>",
        // EN: <span class="chem">|x| &lt; 3</span>
        "<span class=\"chem\">|x| &lt; 3</span>",
      ],
      hints: [
        // EN: Factor out <span class="chem">3^{-1}</span> to write <span class="chem">(1/3)(1 + (2/3)x)^{-1}</span>.
        "抽出因子 <span class=\"chem\">3^{-1}</span>，寫成 <span class=\"chem\">(1/3)(1 + (2/3)x)^{-1}</span>。",
        // EN: Solve <span class="chem">|(2/3)x| &lt; 1</span>.
        "解 <span class=\"chem\">|(2/3)x| &lt; 1</span>。",
      ],
      // EN: <div class="worked__math">(3 + 2<i>x</i>)<sup>−1</sup> = <span class="frac"><span>1</span><span>3</span></span>(1 + <span class="frac"><span>2</span><span>3</span></span><i>x</i>)<sup>−1</sup>, valid for |<span class="frac"><span>2</span><span>3</span></span><i>x</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class="frac"><span>3</span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">(3 + 2<i>x</i>)<sup>−1</sup> = <span class=\"frac\"><span>1</span><span>3</span></span>(1 + <span class=\"frac\"><span>2</span><span>3</span></span><i>x</i>)<sup>−1</sup>，於 |<span class=\"frac\"><span>2</span><span>3</span></span><i>x</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class=\"frac\"><span>3</span><span>2</span></span></b> 有效</div>",
      misconception: {
        // EN (option B): <span class="chem">|x| &lt; 1</span> applies to <span class="chem">(1 + x)^n</span>. Here you must first factor out 3 to get <span class="chem">(1 + (2/3)x)^{-1}</span>.
        "1": "<span class=\"chem\">|x| &lt; 1</span> 僅適用於 <span class=\"chem\">(1 + x)^n</span>。此處必須先抽出 3，得到 <span class=\"chem\">(1 + (2/3)x)^{-1}</span>。",
        // EN (option C): You inverted the fraction! Set <span class="chem">|(2/3)x| &lt; 1</span>, which gives <span class="chem">|x| &lt; 3/2</span>, not <span class="chem">2/3</span>.
        "2": "你把分數倒轉了！設 <span class=\"chem\">|(2/3)x| &lt; 1</span>，應得出 <span class=\"chem\">|x| &lt; 3/2</span>，而非 <span class=\"chem\">2/3</span>。",
        // EN (option D): You forgot the factor of 2 in <span class="chem">2x</span>.
        "3": "你忘記了 <span class=\"chem\">2x</span> 中的係數 2。",
      },
    },

    // ── t1-3-q005 · multi · foundation · AHL · AHL 1.10 & 1.11 · 3 marks
    "t1-3-q005": {
      // EN: <p>Which of the following statements are true? Select all that apply.</p>
      stem: "<p>下列哪些陳述正確？選出所有適用選項。</p>",
      options: [
        // EN: <span class="chem">nCr = nPr / r!</span> for all integers <span class="chem">0 &lt;= r &lt;= n</span>.
        "對於所有整數 <span class=\"chem\">0 &lt;= r &lt;= n</span>，<span class=\"chem\">nCr = nPr / r!</span>。",
        // EN: The binomial expansion of <span class="chem">(1 - 4x)^{1/2}</span> is valid for <span class="chem">|x| &lt; 4</span>.
        "<span class=\"chem\">(1 - 4x)^{1/2}</span> 的二項式展開式在 <span class=\"chem\">|x| &lt; 4</span> 時有效。",
        // EN: <span class="chem">2x / ((x - 1)(x + 1)) = 1 / (x - 1) + 1 / (x + 1)</span>.
        "<span class=\"chem\">2x / ((x - 1)(x + 1)) = 1 / (x - 1) + 1 / (x + 1)</span>。",
        // EN: The number of ways to seat 5 people in a row with 2 specific people separated is <span class="chem">5! - 4!</span>.
        "將 5 人排成一列且指定 2 人分開就坐的方法數為 <span class=\"chem\">5! - 4!</span>。",
      ],
      hints: [
        // EN: Check the radius of convergence of <span class="chem">(1 - 4x)^{1/2}</span> using <span class="chem">|u| &lt; 1</span>.
        "利用 <span class=\"chem\">|u| &lt; 1</span> 檢查 <span class=\"chem\">(1 - 4x)^{1/2}</span> 的收斂半徑。",
        // EN: Add <span class="chem">1/(x - 1) + 1/(x + 1)</span> over a common denominator to verify option C.
        "把 <span class=\"chem\">1/(x - 1) + 1/(x + 1)</span> 通分相加，以驗證選項 C。",
      ],
      // EN: <p>Option A is the definition relating combinations and permutations. Option C combines to <span class="chem">((x + 1) + (x - 1)) / ((x - 1)(x + 1)) = 2x / ((x - 1)(x + 1))</span>.</p>
      solution: "<p>選項 A 是聯繫組合與排列的定義。選項 C 通分後得 <span class=\"chem\">((x + 1) + (x - 1)) / ((x - 1)(x + 1)) = 2x / ((x - 1)(x + 1))</span>。</p>",
      misconception: {
        // EN (option B): <span class="chem">(1 - 4x)^{1/2}</span> is valid for <span class="chem">|-4x| &lt; 1</span>, which is <span class="chem">|x| &lt; 1/4</span>, not <span class="chem">|x| &lt; 4</span>.
        "1": "<span class=\"chem\">(1 - 4x)^{1/2}</span> 的有效條件為 <span class=\"chem\">|-4x| &lt; 1</span>，即 <span class=\"chem\">|x| &lt; 1/4</span>，而不是 <span class=\"chem\">|x| &lt; 4</span>。",
        // EN (option D): When 2 people sit together as a block, they can swap in <span class="chem">2!</span> ways, so the separated count is <span class="chem">5! - 4! × 2!</span>.
        "3": "當 2 人綁在一起坐時，兩人之間可互換位置（<span class=\"chem\">2!</span> 種），因此分開坐的方法數為 <span class=\"chem\">5! - 4! × 2!</span>。",
      },
    },

    // ── t1-3-q006 · order · foundation · AHL · AHL 1.10 · 3 marks
    "t1-3-q006": {
      // EN: <p>Arrange the steps in the correct logical order to find the first three terms of <span class="chem">(4 + x)^{-1/2}</span>.</p>
      stem: "<p>把下列步驟按正確的邏輯順序排列，以求 <span class=\"chem\">(4 + x)^{-1/2}</span> 展開式的首三項。</p>",
      options: [
        // EN: Factor out <span class="chem">4^{-1/2} = 1/2</span> to write <span class="chem">(1/2)(1 + x/4)^{-1/2}</span>.
        "抽出因子 <span class=\"chem\">4^{-1/2} = 1/2</span>，寫成 <span class=\"chem\">(1/2)(1 + x/4)^{-1/2}</span>。",
        // EN: Substitute <span class="chem">n = -1/2</span> and <span class="chem">u = x/4</span> into <span class="chem">1 + nu + (n(n - 1)/2!)u^2</span>.
        "把 <span class=\"chem\">n = -1/2</span> 及 <span class=\"chem\">u = x/4</span> 代入 <span class=\"chem\">1 + nu + (n(n - 1)/2!)u^2</span>。",
        // EN: Simplify inside the bracket to get <span class="chem">(1/2)(1 - (1/8)x + (3/128)x^2 - ...)</span>.
        "化簡括號內的各項，得 <span class=\"chem\">(1/2)(1 - (1/8)x + (3/128)x^2 - ...)</span>。",
        // EN: Multiply through by <span class="chem">1/2</span> to obtain <span class="chem">1/2 - (1/16)x + (3/256)x^2 - ...</span>, valid for <span class="chem">|x| &lt; 4</span>.
        "全式乘以 <span class=\"chem\">1/2</span>，得 <span class=\"chem\">1/2 - (1/16)x + (3/256)x^2 - ...</span>，有效條件為 <span class=\"chem\">|x| &lt; 4</span>。",
      ],
      hints: [
        // EN: You cannot apply the <span class="chem">(1 + u)^n</span> formula until the constant inside the bracket is 1.
        "在括號內的常數項變成 1 之前，不能應用 <span class=\"chem\">(1 + u)^n</span> 公式。",
        // EN: Multiply by the factored-out <span class="chem">4^{-1/2} = 1/2</span> at the end.
        "最後才乘回先前抽出的 <span class=\"chem\">4^{-1/2} = 1/2</span>。",
      ],
      // EN: <p>Factor out <span class="chem">4^{-1/2}</span> first, apply the <span class="chem">(1 + u)^n</span> series, simplify powers of <span class="chem">u</span>, and finally distribute <span class="chem">1/2</span>.</p>
      solution: "<p>先抽出 <span class=\"chem\">4^{-1/2}</span>，應用 <span class=\"chem\">(1 + u)^n</span> 級數，化簡 <span class=\"chem\">u</span> 的冪，最後乘入 <span class=\"chem\">1/2</span>。</p>",
    },

    // ── t1-3-q007 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q007": {
      // EN: <p>Solve the equation <span class="chem">nP2 + nC2 = 45</span> for the positive integer <span class="chem">n</span>.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">nP2 + nC2 = 45</span> 求正整數 <span class=\"chem\">n</span>。</p>",
      hints: [
        // EN: Write <span class="chem">nP2 = n(n - 1)</span> and <span class="chem">nC2 = n(n - 1) / 2</span>.
        "寫出 <span class=\"chem\">nP2 = n(n - 1)</span> 及 <span class=\"chem\">nC2 = n(n - 1) / 2</span>。",
        // EN: Combine to get <span class="chem">(3/2) n(n - 1) = 45</span>, so <span class="chem">n(n - 1) = 30</span>.
        "合併得 <span class=\"chem\">(3/2) n(n - 1) = 45</span>，因此 <span class=\"chem\">n(n - 1) = 30</span>。",
      ],
      // EN: <div class="worked__math"><i>n</i>(<i>n</i> − 1) + <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 45 ⇒ <span class="frac"><span>3</span><span>2</span></span><i>n</i>(<i>n</i> − 1) = 45 ⇒ <i>n</i>(<i>n</i> − 1) = 30</div><div class="worked__math"><i>n</i><sup>2</sup> − <i>n</i> − 30 = 0 ⇒ (<i>n</i> − 6)(<i>n</i> + 5) = 0 ⇒ <b><i>n</i> = 6</b> (since <i>n</i> ≥ 2)</div>
      solution: "<div class=\"worked__math\"><i>n</i>(<i>n</i> − 1) + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 45 ⇒ <span class=\"frac\"><span>3</span><span>2</span></span><i>n</i>(<i>n</i> − 1) = 45 ⇒ <i>n</i>(<i>n</i> − 1) = 30</div><div class=\"worked__math\"><i>n</i><sup>2</sup> − <i>n</i> − 30 = 0 ⇒ (<i>n</i> − 6)(<i>n</i> + 5) = 0 ⇒ <b><i>n</i> = 6</b>（因為 <i>n</i> ≥ 2）</div>",
    },

    // ── t1-3-q008 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q008": {
      // EN: <p>A 6-member robotics team is selected from 5 engineers and 4 programmers. How many different teams contain <strong>at least 4 engineers</strong>?</p>
      stem: "<p>從 5 名工程師及 4 名程式員中選出一個 6 人機械人團隊。有多少個不同的團隊包含<strong>至少 4 名工程師</strong>？</p>",
      hints: [
        // EN: Split into mutually exclusive cases: 4 engineers + 2 programmers, or 5 engineers + 1 programmer.
        "拆分為互斥情況：4 名工程師 + 2 名程式員，或 5 名工程師 + 1 名程式員。",
        // EN: Compute <span class="chem">5C4 × 4C2 + 5C5 × 4C1</span>.
        "計算 <span class=\"chem\">5C4 × 4C2 + 5C5 × 4C1</span>。",
      ],
      // EN: <div class="worked__math"><sup>5</sup>C<sub>4</sub><sup>4</sup>C<sub>2</sub> + <sup>5</sup>C<sub>5</sub><sup>4</sup>C<sub>1</sub> = (5 × 6) + (1 × 4) = 30 + 4 = <b>34</b></div>
      solution: "<div class=\"worked__math\"><sup>5</sup>C<sub>4</sub><sup>4</sup>C<sub>2</sub> + <sup>5</sup>C<sub>5</sub><sup>4</sup>C<sub>1</sub> = (5 × 6) + (1 × 4) = 30 + 4 = <b>34</b></div>",
    },

    // ── t1-3-q009 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q009": {
      // EN: <p>Eight distinct books—5 mathematics books and 3 physics books—are arranged on a shelf. In how many ways can they be arranged if no two physics books are next to each other?</p>
      stem: "<p>把 8 本不同的書（5 本數學書及 3 本物理書）排列在書架上。若沒有兩本物理書相鄰，共有多少種排列方法？</p>",
      hints: [
        // EN: Use the Gap method: arrange the 5 mathematics books first in <span class="chem">5!</span> ways.
        "使用插空法：先排列 5 本數學書，有 <span class=\"chem\">5!</span> 種方法。",
        // EN: There are 6 gaps around the 5 math books. Place the 3 distinct physics books in <span class="chem">^6P_3</span> ways.
        "5 本數學書周圍有 6 個空位。把 3 本不同的物理書放入其中，有 <span class=\"chem\">^6P_3</span> 種方法。",
      ],
      // EN: <div class="worked__math">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>
      solution: "<div class=\"worked__math\">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>",
    },

    // ── t1-3-q010 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q010": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 - 2x)^{-3}</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(1 - 2x)^{-3}</span> 二項式展開式中 <span class=\"chem\">x^2</span> 的係數。</p>",
      hints: [
        // EN: Use the <span class="chem">x^2</span> term formula: <span class="chem">(n(n - 1)/2!) u^2</span> with <span class="chem">n = -3</span> and <span class="chem">u = -2x</span>.
        "使用 <span class=\"chem\">x^2</span> 項公式：<span class=\"chem\">(n(n - 1)/2!) u^2</span>，其中 <span class=\"chem\">n = -3</span> 及 <span class=\"chem\">u = -2x</span>。",
        // EN: Remember <span class="chem">(-2x)^2 = +4x^2</span>.
        "緊記 <span class=\"chem\">(-2x)^2 = +4x^2</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−3)(−4)</span><span>2!</span></span> (−2<i>x</i>)<sup>2</sup> = 6 × 4<i>x</i><sup>2</sup> = <b>24</b><i>x</i><sup>2</sup></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−3)(−4)</span><span>2!</span></span> (−2<i>x</i>)<sup>2</sup> = 6 × 4<i>x</i><sup>2</sup> = <b>24</b><i>x</i><sup>2</sup></div>",
    },

    // ── t1-3-q011 · numeric · exam · AHL · AHL 1.11 · 4 marks
    "t1-3-q011": {
      // EN: <p>Given that <span class="chem">(4x + 13) / ((x - 2)(2x + 3)) = A / (x - 2) + B / (2x + 3)</span>, find the value of <span class="chem">B</span>.</p>
      stem: "<p>已知 <span class=\"chem\">(4x + 13) / ((x - 2)(2x + 3)) = A / (x - 2) + B / (2x + 3)</span>，求 (Find) <span class=\"chem\">B</span> 的值。</p>",
      hints: [
        // EN: Clear the denominator: <span class="chem">4x + 13 = A(2x + 3) + B(x - 2)</span>.
        "去分母：<span class=\"chem\">4x + 13 = A(2x + 3) + B(x - 2)</span>。",
        // EN: Substitute the root of <span class="chem">2x + 3 = 0</span>, that is <span class="chem">x = -3/2</span>, so the <span class="chem">A</span> term vanishes.
        "代入 <span class=\"chem\">2x + 3 = 0</span> 的根，即 <span class=\"chem\">x = -3/2</span>，使 <span class=\"chem\">A</span> 項消失。",
      ],
      // EN: <div class="worked__math">4<i>x</i> + 13 ≡ <i>A</i>(2<i>x</i> + 3) + <i>B</i>(<i>x</i> − 2)   <b>[M1]</b></div><div class="worked__math"><i>x</i> = 2 ⇒ 21 = 7<i>A</i> ⇒ <i>A</i> = 3   <b>[A1]</b></div><div class="worked__math"><i>x</i> = −<span class="frac"><span>3</span><span>2</span></span> ⇒ 7 = −<span class="frac"><span>7</span><span>2</span></span><i>B</i>   <b>[M1]</b>  ⇒  <b><i>B</i> = −2</b>   <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">4<i>x</i> + 13 ≡ <i>A</i>(2<i>x</i> + 3) + <i>B</i>(<i>x</i> − 2)   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 2 ⇒ 21 = 7<i>A</i> ⇒ <i>A</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = −<span class=\"frac\"><span>3</span><span>2</span></span> ⇒ 7 = −<span class=\"frac\"><span>7</span><span>2</span></span><i>B</i>   <b>[M1]</b>  ⇒  <b><i>B</i> = −2</b>   <b>[A1]</b></div>",
    },

    // ── t1-3-q012 · numeric · exam · AHL · AHL 1.10 & 1.11 · 5 marks
    "t1-3-q012": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(2 + x) / ((1 - x)(1 + 2x))</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(2 + x) / ((1 - x)(1 + 2x))</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式中 <span class=\"chem\">x^2</span> 的係數。</p>",
      hints: [
        // EN: Decompose into partial fractions first: <span class="chem">A / (1 - x) + B / (1 + 2x)</span>.
        "先作部分分式分解：<span class=\"chem\">A / (1 - x) + B / (1 + 2x)</span>。",
        // EN: You should get <span class="chem">A = 1</span> and <span class="chem">B = 1</span>. Now expand <span class="chem">(1 - x)^{-1} + (1 + 2x)^{-1}</span> up to <span class="chem">x^2</span>.
        "你應求得 <span class=\"chem\">A = 1</span> 及 <span class=\"chem\">B = 1</span>。現在把 <span class=\"chem\">(1 - x)^{-1} + (1 + 2x)^{-1}</span> 展開至 <span class=\"chem\">x^2</span> 項。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>",
    },

    // ── t1-3-q013 · short · exam · AHL · AHL 1.10 & 1.11 · 6 marks
    "t1-3-q013": {
      // EN: <p>(a) Express <span class="chem">f(x) = (x + 4) / ((1 + x)(2 - x))</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the first three terms in the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, and state the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[3 marks]</strong></p>
      stem: "<p>(a) 把 <span class=\"chem\">f(x) = (x + 4) / ((1 + x)(2 - x))</span> 表示為 (Express) 部分分式。<strong>[3 marks]</strong><br>(b) 由此求 (Hence find) <span class=\"chem\">f(x)</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式首三項，並寫出 (state) 該展開式有效的 <span class=\"chem\">x</span> 值範圍。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use <span class="chem">x = -1</span> and <span class="chem">x = 2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.
        "代入 <span class=\"chem\">x = -1</span> 及 <span class=\"chem\">x = 2</span> 以求 <span class=\"chem\">A</span> 和 <span class=\"chem\">B</span>。",
        // EN: Factor out <span class="chem">2^{-1} = 1/2</span> from <span class="chem">(2 - x)^{-1}</span> before expanding.
        "展開前先從 <span class=\"chem\">(2 - x)^{-1}</span> 中抽出 <span class=\"chem\">2^{-1} = 1/2</span>。",
      ],
      // EN: <div class="worked__math">(a)  <i>f</i>(<i>x</i>) = <span class="frac"><span>1</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 − <i>x</i></span></span></div><div class="worked__math">(b)  <i>f</i>(<i>x</i>) ≈ <b>2 − <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>
      solution: "<div class=\"worked__math\">(a)  <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>1</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 − <i>x</i></span></span></div><div class=\"worked__math\">(b)  <i>f</i>(<i>x</i>) ≈ <b>2 − <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>，有效範圍為 <b>|<i>x</i>| &lt; 1</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">x + 4 = A(2 - x) + B(1 + x)</span>.
        "M1：列出 <span class=\"chem\">x + 4 = A(2 - x) + B(1 + x)</span>。",
        // EN: A1: Obtains <span class="chem">A = 1</span>.
        "A1：求得 <span class=\"chem\">A = 1</span>。",
        // EN: A1: Obtains <span class="chem">B = 2</span>, giving <span class="chem">1/(1 + x) + 2/(2 - x)</span>.
        "A1：求得 <span class=\"chem\">B = 2</span>，得 <span class=\"chem\">1/(1 + x) + 2/(2 - x)</span>。",
        // EN: M1: Expands <span class="chem">(1 + x)^{-1} = 1 - x + x^2 - ...</span> and <span class="chem">2(2 - x)^{-1} = (1 - x/2)^{-1} = 1 + x/2 + x^2/4 + ...</span>.
        "M1：展開 <span class=\"chem\">(1 + x)^{-1} = 1 - x + x^2 - ...</span> 及 <span class=\"chem\">2(2 - x)^{-1} = (1 - x/2)^{-1} = 1 + x/2 + x^2/4 + ...</span>。",
        // EN: A1: Combines like terms to get <span class="chem">2 - (1/2)x + (5/4)x^2</span>.
        "A1：合併同類項得 <span class=\"chem\">2 - (1/2)x + (5/4)x^2</span>。",
        // EN: A1: States validity <span class="chem">|x| &lt; 1</span> (intersection of <span class="chem">|x| &lt; 1</span> and <span class="chem">|x| &lt; 2</span>).
        "A1：寫出有效範圍 <span class=\"chem\">|x| &lt; 1</span>（<span class=\"chem\">|x| &lt; 1</span> 與 <span class=\"chem\">|x| &lt; 2</span> 的交集）。",
      ],
      // EN: <div class="worked__math">(a)  <i>x</i> + 4 ≡ <i>A</i>(2 − <i>x</i>) + <i>B</i>(1 + <i>x</i>):  <i>x</i> = −1 ⇒ 3 = 3<i>A</i> ⇒ <i>A</i> = 1;  <i>x</i> = 2 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2</div><div class="worked__math"><i>f</i>(<i>x</i>) = <span class="frac"><span>1</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 − <i>x</i></span></span></div><div class="worked__math">(b)  (1 + <i>x</i>)<sup>−1</sup> = 1 − <i>x</i> + <i>x</i><sup>2</sup> − …   and   2(2 − <i>x</i>)<sup>−1</sup> = (1 − <span class="frac"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = 1 + <span class="frac"><span><i>x</i></span><span>2</span></span> + <span class="frac"><span><i>x</i><sup>2</sup></span><span>4</span></span> + …</div><div class="worked__math"><i>f</i>(<i>x</i>) ≈ <b>2 − <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>
      answer: "<div class=\"worked__math\">(a)  <i>x</i> + 4 ≡ <i>A</i>(2 − <i>x</i>) + <i>B</i>(1 + <i>x</i>):  <i>x</i> = −1 ⇒ 3 = 3<i>A</i> ⇒ <i>A</i> = 1;  <i>x</i> = 2 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><i>f</i>(<i>x</i>) = <span class=\"frac\"><span>1</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 − <i>x</i></span></span></div><div class=\"worked__math\">(b)  (1 + <i>x</i>)<sup>−1</sup> = 1 − <i>x</i> + <i>x</i><sup>2</sup> − …   及   2(2 − <i>x</i>)<sup>−1</sup> = (1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = 1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> + …</div><div class=\"worked__math\"><i>f</i>(<i>x</i>) ≈ <b>2 − <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>，有效範圍為 <b>|<i>x</i>| &lt; 1</b></div>",
    },

    // ── t1-3-q014 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q014": {
      // EN: <p>In the binomial expansion of <span class="chem">(1 + kx)^{-2}</span>, the coefficient of <span class="chem">x^2</span> is 48. Given that <span class="chem">k &gt; 0</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p>在 <span class=\"chem\">(1 + kx)^{-2}</span> 的二項式展開式中，<span class=\"chem\">x^2</span> 的係數為 48。已知 <span class=\"chem\">k &gt; 0</span>，求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Write the <span class="chem">x^2</span> term: <span class="chem">((-2)(-3)/2!)(kx)^2 = 3k^2 x^2</span>.
        "寫出 <span class=\"chem\">x^2</span> 項：<span class=\"chem\">((-2)(-3)/2!)(kx)^2 = 3k^2 x^2</span>。",
        // EN: Solve <span class="chem">3k^2 = 48</span> with <span class="chem">k &gt; 0</span>.
        "解 <span class=\"chem\">3k^2 = 48</span>，其中 <span class=\"chem\">k &gt; 0</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−2)(−3)</span><span>2!</span></span>(<i>kx</i>)<sup>2</sup> = 3<i>k</i><sup>2</sup><i>x</i><sup>2</sup> ⇒ 3<i>k</i><sup>2</sup> = 48 ⇒ <i>k</i><sup>2</sup> = 16 ⇒ <b><i>k</i> = 4</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−2)(−3)</span><span>2!</span></span>(<i>kx</i>)<sup>2</sup> = 3<i>k</i><sup>2</sup><i>x</i><sup>2</sup> ⇒ 3<i>k</i><sup>2</sup> = 48 ⇒ <i>k</i><sup>2</sup> = 16 ⇒ <b><i>k</i> = 4</b></div>",
    },

    // ── t1-3-q015 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q015": {
      // EN: <p>How many 4-digit even integers greater than 3000 can be formed using the digits <span class="chem">{1, 2, 3, 4, 5, 6}</span> if no digit may be repeated?</p>
      stem: "<p>利用數字 <span class=\"chem\">{1, 2, 3, 4, 5, 6}</span>（數字不可重複）可以組成多少個大於 3000 的 4 位偶數？</p>",
      hints: [
        // EN: Decode: two places are restricted. “Greater than 3000” means the thousands digit is 3, 4, 5 or 6, and “even” means the units digit is 2, 4 or 6. Fill these restricted places first, then the two free middle places.
        "解碼：有兩個位置受到限制。「大於 3000」表示千位是 3、4、5 或 6，「偶數」表示個位是 2、4 或 6。先填這些受限制的位置，再填中間兩個不受限制的位置。",
        // EN: The thousands digit must be in <span class="chem">{3, 4, 5, 6}</span> and the units digit must be in <span class="chem">{2, 4, 6}</span>. Because 4 and 6 appear in both sets, split into two cases!
        "千位數字必須屬於 <span class=\"chem\">{3, 4, 5, 6}</span>，而個位數字必須屬於 <span class=\"chem\">{2, 4, 6}</span>。由於 4 和 6 同時出現在兩個集合中，應拆分為兩種情況！",
        // EN: Case 1: thousands digit is odd (<span class="chem">{3, 5}</span>) → <span class="chem">2 × 3 × 4 × 3</span>. Case 2: thousands digit is even (<span class="chem">{4, 6}</span>) → <span class="chem">2 × 2 × 4 × 3</span>.
        "情況 1：千位數字為奇數（<span class=\"chem\">{3, 5}</span>）→ <span class=\"chem\">2 × 3 × 4 × 3</span>。情況 2：千位數字為偶數（<span class=\"chem\">{4, 6}</span>）→ <span class=\"chem\">2 × 2 × 4 × 3</span>。",
      ],
      // EN: <div class="worked__math">Case 1 (thousands ∈ {3, 5}): 2 × 4 × 3 × 3 = 72</div><div class="worked__math">Case 2 (thousands ∈ {4, 6}): 2 × 4 × 3 × 2 = 48</div><div class="worked__math">Total = 72 + 48 = <b>120</b></div>
      solution: "<div class=\"worked__math\">情況 1（千位 ∈ {3, 5}）：2 × 4 × 3 × 3 = 72</div><div class=\"worked__math\">情況 2（千位 ∈ {4, 6}）：2 × 4 × 3 × 2 = 48</div><div class=\"worked__math\">總數 = 72 + 48 = <b>120</b></div>",
    },

    // ── t1-3-q016 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q016": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 + 2x) / sqrt(1 - 3x)</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(1 + 2x) / sqrt(1 - 3x)</span> 二項式展開式中 <span class=\"chem\">x^2</span> 的係數。</p>",
      hints: [
        // EN: Decode: a square root in the denominator is a negative fractional power, <span class="chem">1/sqrt(1 - 3x) = (1 - 3x)^{-1/2}</span>, so the expression is a linear factor times an extended binomial series. Only two products of terms give <span class="chem">x^2</span>.
        "解碼：分母中的平方根是一個負分數指數，<span class=\"chem\">1/sqrt(1 - 3x) = (1 - 3x)^{-1/2}</span>，所以這個式子是一個一次因式乘以一個推廣二項式級數。只有兩組項的乘積會得到 <span class=\"chem\">x^2</span>。",
        // EN: Rewrite as <span class="chem">(1 + 2x)(1 - 3x)^{-1/2}</span> and expand <span class="chem">(1 - 3x)^{-1/2}</span> up to <span class="chem">x^2</span>.
        "改寫為 <span class=\"chem\">(1 + 2x)(1 - 3x)^{-1/2}</span>，並把 <span class=\"chem\">(1 - 3x)^{-1/2}</span> 展開至 <span class=\"chem\">x^2</span> 項。",
        // EN: Multiply <span class="chem">(1 + 2x)</span> by <span class="chem">(1 + (3/2)x + (27/8)x^2 + ...)</span> and collect the <span class="chem">x^2</span> terms.
        "把 <span class=\"chem\">(1 + 2x)</span> 乘以 <span class=\"chem\">(1 + (3/2)x + (27/8)x^2 + ...)</span>，並收集 <span class=\"chem\">x^2</span> 項。",
      ],
      // EN: <div class="worked__math">(1 − 3<i>x</i>)<sup>−1/2</sup> = 1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup> + …</div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> in (1 + 2<i>x</i>)(1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup>) = <span class="frac"><span>27</span><span>8</span></span> + 2(<span class="frac"><span>3</span><span>2</span></span>) = <b><span class="frac"><span>51</span><span>8</span></span></b> (6.375)</div>
      solution: "<div class=\"worked__math\">(1 − 3<i>x</i>)<sup>−1/2</sup> = 1 + <span class=\"frac\"><span>3</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>27</span><span>8</span></span><i>x</i><sup>2</sup> + …</div><div class=\"worked__math\">(1 + 2<i>x</i>)(1 + <span class=\"frac\"><span>3</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>27</span><span>8</span></span><i>x</i><sup>2</sup>) 中 <i>x</i><sup>2</sup> 的係數 = <span class=\"frac\"><span>27</span><span>8</span></span> + 2(<span class=\"frac\"><span>3</span><span>2</span></span>) = <b><span class=\"frac\"><span>51</span><span>8</span></span></b> (6.375)</div>",
      // EN: 51/8 (or 6.375)
      answerDisplay: "51/8（或 6.375）",
    },

    // ── t1-3-q017 · short · challenge · AHL · AHL 1.11; SL 1.2 · 7 marks
    "t1-3-q017": {
      // EN: <p>Let <span class="chem">S_n = Σ_{r=1}^n 1 / (r(r + 1))</span>.</p><p>(a) Express <span class="chem">1 / (r(r + 1))</span> in partial fractions. <strong>[2 marks]</strong><br>(b) Find <span class="chem">S_1</span>, <span class="chem">S_2</span>, <span class="chem">S_3</span> and <span class="chem">S_4</span>, and hence conjecture a formula for <span class="chem">S_n</span> in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(c) Use your answer to (a) to prove your conjecture. <strong>[2 marks]</strong><br>(d) Find the least value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 0.99</span>. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">S_n = Σ_{r=1}^n 1 / (r(r + 1))</span>。</p><p>(a) 把 <span class=\"chem\">1 / (r(r + 1))</span> 表示為 (Express) 部分分式。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">S_1</span>、<span class=\"chem\">S_2</span>、<span class=\"chem\">S_3</span> 及 <span class=\"chem\">S_4</span>，並由此 (hence) 猜想以 <span class=\"chem\">n</span> 表示 <span class=\"chem\">S_n</span> 的公式。<strong>[2 marks]</strong><br>(c) 利用 (a) 的答案證明 (prove) 你的猜想。<strong>[2 marks]</strong><br>(d) 求使 <span class=\"chem\">S_n &gt; 0.99</span> 的 <span class=\"chem\">n</span> 的最小值。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: the question builds one argument. Partial fractions turn each term into a difference, the first few sums suggest a pattern, and the same differences then make the whole sum collapse (“telescope”).
        "解碼：本題建立一個完整的論證。部分分式把每一項化為兩項之差，首幾個和顯示出規律，而同樣的差又令整個和式逐項對消（裂項相消，“telescope”）。",
        // EN: For (a), put <span class="chem">r = 0</span> and <span class="chem">r = -1</span> into <span class="chem">1 ≡ A(r + 1) + Br</span>.
        "在 (a) 部中，把 <span class=\"chem\">r = 0</span> 及 <span class=\"chem\">r = -1</span> 代入 <span class=\"chem\">1 ≡ A(r + 1) + Br</span>。",
        // EN: For (c), write out the first and last few brackets of <span class="chem">Σ(1/r - 1/(r + 1))</span> and see which parts survive.
        "在 (c) 部中，寫出 <span class=\"chem\">Σ(1/r - 1/(r + 1))</span> 的首幾個及最後幾個括號，觀察哪些部分沒有被消去。",
        // EN: For (d), solve <span class="chem">n/(n + 1) &gt; 0.99</span>; take care with “greater than”.
        "在 (d) 部中，解 <span class=\"chem\">n/(n + 1) &gt; 0.99</span>；留意「大於」不包括等於。",
      ],
      // EN: <p><b>Decode:</b> partial fractions → pattern → telescoping proof → use the formula.</p><div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>2</span><span>3</span></span>, <span class="frac"><span>3</span><span>4</span></span>, <span class="frac"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  ∑ = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>
      solution: "<p><b>解碼：</b>部分分式 → 規律 → 裂項相消證明 → 應用公式。</p><div class=\"worked__math\">(a)  <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class=\"frac\"><span>1</span><span>2</span></span>, <span class=\"frac\"><span>2</span><span>3</span></span>, <span class=\"frac\"><span>3</span><span>4</span></span>, <span class=\"frac\"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(c)  ∑ = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">1 = A(r + 1) + Br</span> (or uses cover-up).
        "M1：列出 <span class=\"chem\">1 = A(r + 1) + Br</span>（或用掩蓋法）。",
        // EN: A1: <span class="chem">1/(r(r + 1)) = 1/r - 1/(r + 1)</span>.
        "A1：<span class=\"chem\">1/(r(r + 1)) = 1/r - 1/(r + 1)</span>。",
        // EN: A1: <span class="chem">S_1 = 1/2</span>, <span class="chem">S_2 = 2/3</span>, <span class="chem">S_3 = 3/4</span>, <span class="chem">S_4 = 4/5</span>.
        "A1：<span class=\"chem\">S_1 = 1/2</span>、<span class=\"chem\">S_2 = 2/3</span>、<span class=\"chem\">S_3 = 3/4</span>、<span class=\"chem\">S_4 = 4/5</span>。",
        // EN: A1: Conjecture <span class="chem">S_n = n/(n + 1)</span>.
        "A1：猜想 <span class=\"chem\">S_n = n/(n + 1)</span>。",
        // EN: M1: Writes the sum as <span class="chem">(1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n + 1))</span>, showing the cancellation.
        "M1：把和式寫成 <span class=\"chem\">(1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n + 1))</span>，顯示各項對消。",
        // EN: A1: <span class="chem">1 - 1/(n + 1) = n/(n + 1)</span>, which proves the conjecture.
        "A1：<span class=\"chem\">1 - 1/(n + 1) = n/(n + 1)</span>，從而證明猜想。",
        // EN: A1: <span class="chem">n = 100</span>.
        "A1：<span class=\"chem\">n = 100</span>。",
      ],
      // EN: <div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span></div><div class="worked__math">(b)  <i>S</i><sub>1</sub> = <span class="frac"><span>1</span><span>2</span></span>, <i>S</i><sub>2</sub> = <span class="frac"><span>2</span><span>3</span></span>, <i>S</i><sub>3</sub> = <span class="frac"><span>3</span><span>4</span></span>, <i>S</i><sub>4</sub> = <span class="frac"><span>4</span><span>5</span></span>;  conjecture <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  <i>S</i><sub><i>n</i></sub> = (1 − <span class="frac"><span>1</span><span>2</span></span>) + (<span class="frac"><span>1</span><span>2</span></span> − <span class="frac"><span>1</span><span>3</span></span>) + … + (<span class="frac"><span>1</span><span><i>n</i></span></span> − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span>) = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(d)  <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span> &gt; 0.99 ⇔ <i>n</i> &gt; 99, so <b><i>n</i> = 100</b></div>
      answer: "<div class=\"worked__math\">(a)  <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span></div><div class=\"worked__math\">(b)  <i>S</i><sub>1</sub> = <span class=\"frac\"><span>1</span><span>2</span></span>, <i>S</i><sub>2</sub> = <span class=\"frac\"><span>2</span><span>3</span></span>, <i>S</i><sub>3</sub> = <span class=\"frac\"><span>3</span><span>4</span></span>, <i>S</i><sub>4</sub> = <span class=\"frac\"><span>4</span><span>5</span></span>;  猜想 <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(c)  <i>S</i><sub><i>n</i></sub> = (1 − <span class=\"frac\"><span>1</span><span>2</span></span>) + (<span class=\"frac\"><span>1</span><span>2</span></span> − <span class=\"frac\"><span>1</span><span>3</span></span>) + … + (<span class=\"frac\"><span>1</span><span><i>n</i></span></span> − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span>) = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(d)  <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span> &gt; 0.99 ⇔ <i>n</i> &gt; 99，所以 <b><i>n</i> = 100</b></div>",
    },

    // ── t1-3-q018 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q018": {
      // EN: <p>Four couples (8 people) sit in a row of 8 chairs. In how many ways can they be seated if each couple must sit together?</p>
      stem: "<p>四對情侶（共 8 人）排成一列坐在 8 張椅子上。若每對情侶必須坐在一起，共有多少種就坐方法？</p>",
      hints: [
        // EN: Glue each of the 4 couples into a single block. How many ways can you arrange the 4 blocks?
        "把每對情侶捆綁成一個單位（共 4 個單位）。排列這 4 個單位有多少種方法？",
        // EN: Multiply by <span class="chem">2!</span> for each of the 4 couples: <span class="chem">4! × (2!)^4</span>.
        "每對情侶內部均可互換位置（<span class=\"chem\">2!</span>），共 4 對，故乘以 <span class=\"chem\">4! × (2!)^4</span>。",
      ],
      // EN: <div class="worked__math">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>
      solution: "<div class=\"worked__math\">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't1-3.q', {
  questions: {

    // ── t1-3-q019 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q019": {
      // EN: <p>In a national lottery, a player chooses 6 different main numbers from 1 to 40 and, separately, one power number from 1 to 15. The draw then selects 6 different main numbers and one power number at random.</p><p>Find the probability that a single ticket matches <strong>exactly 4</strong> of the 6 main numbers <strong>and</strong> the power number. Give your answer to 3 significant figures.</p>
      stem: "<p>在某全國彩票中，參加者從 1 至 40 中選出 6 個不同的主號碼，另外再從 1 至 15 中選出一個強力號碼。開獎時隨機抽出 6 個不同的主號碼及一個強力號碼。</p><p>求 (Find) 一張彩票的 6 個主號碼中<strong>恰好有 4 個</strong>猜中，<strong>並且</strong>猜中強力號碼的概率。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this is a counting question in disguise. Probability = (number of draws that give this result) ÷ (number of possible draws), and the order of the main numbers does not matter, so use combinations.
        "解碼：這其實是一道計數題。概率 =（得出此結果的開獎方式數目）÷（所有可能的開獎方式數目），而主號碼的次序並不重要，因此使用組合。",
        // EN: The number of possible draws is <span class="chem">40C6 × 15</span>.
        "所有可能的開獎方式數目為 <span class=\"chem\">40C6 × 15</span>。",
        // EN: A favourable draw contains 4 of your 6 numbers and 2 of the 34 numbers you did not choose, and exactly 1 power number: <span class="chem">6C4 × 34C2 × 1</span>.
        "有利的開獎結果包含你所選 6 個號碼中的 4 個、你沒有選的 34 個號碼中的 2 個，以及恰好 1 個強力號碼：<span class=\"chem\">6C4 × 34C2 × 1</span>。",
      ],
      // EN: <p><b>Decode:</b> count equally likely draws; main numbers form an unordered selection.</p><div class="worked__math">Possible draws = <sup>40</sup>C<sub>6</sub> × 15 = 3 838 380 × 15 = 57 575 700</div><div class="worked__math">Favourable = <sup>6</sup>C<sub>4</sub> × <sup>34</sup>C<sub>2</sub> × 1 = 15 × 561 = 8415</div><div class="worked__math">P = <span class="frac"><span>8415</span><span>57 575 700</span></span> = 1.4616… × 10<sup>−4</sup> ≈ <b>1.46 × 10<sup>−4</sup></b></div>
      solution: "<p><b>解碼：</b>點算等可能的開獎結果；主號碼是無序的選取。</p><div class=\"worked__math\">可能的開獎結果 = <sup>40</sup>C<sub>6</sub> × 15 = 3 838 380 × 15 = 57 575 700</div><div class=\"worked__math\">有利結果 = <sup>6</sup>C<sub>4</sub> × <sup>34</sup>C<sub>2</sub> × 1 = 15 × 561 = 8415</div><div class=\"worked__math\">P = <span class=\"frac\"><span>8415</span><span>57 575 700</span></span> = 1.4616… × 10<sup>−4</sup> ≈ <b>1.46 × 10<sup>−4</sup></b></div>",
    },

    // ── t1-3-q020 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q020": {
      // EN: <p>A coach chooses 4 players from a squad of <span class="chem">n</span> players to form a relay team; the order in which they are chosen does not matter. There are exactly 27 405 possible teams. Use your GDC to find <span class="chem">n</span>.</p>
      stem: "<p>教練從 <span class=\"chem\">n</span> 名隊員中選出 4 人組成接力隊，選出的次序並不重要。可組成的隊伍恰好有 27 405 種。利用 GDC 求 (Find) <span class=\"chem\">n</span>。</p>",
      hints: [
        // EN: Decode: “order does not matter” means combinations, so the condition is <span class="chem">nC4 = 27405</span>, an equation in the positive integer <span class="chem">n</span>.
        "解碼：「次序並不重要」表示使用組合，因此條件是 <span class=\"chem\">nC4 = 27405</span>，這是一條關於正整數 <span class=\"chem\">n</span> 的方程。",
        // EN: Enter <span class="chem">y = xC4</span> (nCr on your GDC) as a function and scroll through its table of values, or solve <span class="chem">x(x - 1)(x - 2)(x - 3)/24 = 27405</span> graphically.
        "把 <span class=\"chem\">y = xC4</span>（GDC 上的 nCr）輸入為函數並查看其數值表，或用圖像法解 <span class=\"chem\">x(x - 1)(x - 2)(x - 3)/24 = 27405</span>。",
        // EN: Only a positive integer <span class="chem">n &gt;= 4</span> makes sense.
        "只有正整數 <span class=\"chem\">n &gt;= 4</span> 才合理。",
      ],
      // EN: <div class="worked__math"><sup><i>n</i></sup>C<sub>4</sub> = <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)(<i>n</i> − 3)</span><span>24</span></span> = 27 405 <b>[M1]</b></div><div class="worked__math">GDC table: <sup>29</sup>C<sub>4</sub> = 23 751, <sup>30</sup>C<sub>4</sub> = 27 405, <sup>31</sup>C<sub>4</sub> = 31 465 <b>[M1 A1]</b></div><div class="worked__math"><b><i>n</i> = 30</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup><i>n</i></sup>C<sub>4</sub> = <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)(<i>n</i> − 3)</span><span>24</span></span> = 27 405 <b>[M1]</b></div><div class=\"worked__math\">GDC 數值表：<sup>29</sup>C<sub>4</sub> = 23 751, <sup>30</sup>C<sub>4</sub> = 27 405, <sup>31</sup>C<sub>4</sub> = 31 465 <b>[M1 A1]</b></div><div class=\"worked__math\"><b><i>n</i> = 30</b> <b>[A1]</b></div>",
    },

    // ── t1-3-q021 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q021": {
      // EN: <p>A security firm sends inspection panels of 5 staff to each site. Every different panel that could be formed from its staff must be given its own six-digit code, from 000000 to 999999. As the firm takes on more staff, it will eventually run out of codes.</p><p>Find the least number of staff for which there are more possible panels than codes.</p>
      stem: "<p>某保安公司向每個地點派出由 5 名職員組成的巡查小組。由其職員可組成的每一個不同小組，都必須獲分配一個專屬的六位數編碼，由 000000 至 999999。隨着公司聘請更多職員，編碼最終會不敷應用。</p><p>求 (Find) 使可組成的小組數目多於編碼數目的最少職員人數。</p>",
      hints: [
        // EN: Decode: a panel is an unordered group of 5 people, so with <span class="chem">n</span> staff there are <span class="chem">nC5</span> panels. There are <span class="chem">10^6</span> six-digit codes (000000 counts). You want the least integer <span class="chem">n</span> with <span class="chem">nC5 &gt; 10^6</span>.
        "解碼：小組是 5 人的無序組合，因此有 <span class=\"chem\">n</span> 名職員時共有 <span class=\"chem\">nC5</span> 個小組。六位數編碼共有 <span class=\"chem\">10^6</span> 個（000000 也計算在內）。你要找出滿足 <span class=\"chem\">nC5 &gt; 10^6</span> 的最小整數 <span class=\"chem\">n</span>。",
        // EN: Put <span class="chem">y = xC5</span> in your GDC table and look for where it first passes 1 000 000.
        "把 <span class=\"chem\">y = xC5</span> 輸入 GDC 的數值表，找出它首次超過 1 000 000 的位置。",
        // EN: Check the value just below as well as the value just above the cut-off.
        "除了檢查剛高於臨界值的值，也要檢查剛低於臨界值的值。",
      ],
      // EN: <p><b>Decode:</b> panels = <sup><i>n</i></sup>C<sub>5</sub>; codes = 10<sup>6</sup>; find the least <i>n</i> with <sup><i>n</i></sup>C<sub>5</sub> &gt; 10<sup>6</sup>.</p><div class="worked__math">GDC table: <sup>43</sup>C<sub>5</sub> = 962 598 &lt; 10<sup>6</sup>, <sup>44</sup>C<sub>5</sub> = 1 086 008 &gt; 10<sup>6</sup></div><div class="worked__math">Least number of staff = <b>44</b></div>
      solution: "<p><b>解碼：</b>小組數目 = <sup><i>n</i></sup>C<sub>5</sub>；編碼數目 = 10<sup>6</sup>；求滿足 <sup><i>n</i></sup>C<sub>5</sub> &gt; 10<sup>6</sup> 的最小 <i>n</i>。</p><div class=\"worked__math\">GDC 數值表：<sup>43</sup>C<sub>5</sub> = 962 598 &lt; 10<sup>6</sup>, <sup>44</sup>C<sub>5</sub> = 1 086 008 &gt; 10<sup>6</sup></div><div class=\"worked__math\">最少職員人數 = <b>44</b></div>",
    },

    // ── t1-3-q022 · short · exam · AHL · AHL 1.10 · 10 marks
    "t1-3-q022": {
      // EN: <p>A council of 8 members is to be chosen from 12 men and 15 women.</p><p>(a) Find the number of different councils that can be chosen. <strong>[2 marks]</strong><br>(b) Find the number of councils that contain exactly 4 women. <strong>[2 marks]</strong><br>(c) Find the number of councils that contain at least 3 women. <strong>[3 marks]</strong><br>(d) One of the men, Marco, and one of the women, Wen, refuse to serve together. Find the number of councils with exactly 4 men and 4 women that do not contain both Marco and Wen. <strong>[3 marks]</strong></p>
      stem: "<p>從 12 名男士及 15 名女士中選出一個 8 人委員會。</p><p>(a) 求 (Find) 可選出的不同委員會數目。<strong>[2 marks]</strong><br>(b) 求恰好包含 4 名女士的委員會數目。<strong>[2 marks]</strong><br>(c) 求至少包含 3 名女士的委員會數目。<strong>[3 marks]</strong><br>(d) 男士之一 Marco 與女士之一 Wen 拒絕同時參與。求恰好有 4 名男士及 4 名女士、且不同時包含 Marco 和 Wen 的委員會數目。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a council is an unordered selection, so every part is combinations. “At least 3 women” has six cases, but its complement (0, 1 or 2 women) has only three.
        "解碼：委員會是無序的選取，因此每部分都使用組合。「至少 3 名女士」有六種情況，但其補集（0、1 或 2 名女士）只有三種。",
        // EN: In (d), count the 4-men-4-women councils that DO contain both Marco and Wen (fix them, then choose 3 more men from 11 and 3 more women from 14) and subtract from (b).
        "在 (d) 中，先點算確實同時包含 Marco 和 Wen 的「4 男 4 女」委員會（先固定二人，再從 11 名男士中選 3 名、從 14 名女士中選 3 名），然後從 (b) 的答案中減去。",
        // EN: Your GDC nCr key handles the large numbers; write down each term you use.
        "GDC 的 nCr 鍵可處理大數目；寫出你所用的每一項。",
      ],
      // EN: <div class="worked__math">(a) 2 220 075 (b) 675 675 (c) 2 220 075 − 109 395 = 2 110 680 (d) 675 675 − 165 × 364 = 615 615</div>
      solution: "<div class=\"worked__math\">(a) 2 220 075 (b) 675 675 (c) 2 220 075 − 109 395 = 2 110 680 (d) 675 675 − 165 × 364 = 615 615</div>",
      // EN: <div class="worked__math">(a) <sup>27</sup>C<sub>8</sub> = <b>2 220 075</b></div><div class="worked__math">(b) <sup>15</sup>C<sub>4</sub> × <sup>12</sup>C<sub>4</sub> = 1365 × 495 = <b>675 675</b></div><div class="worked__math">(c) 0, 1 or 2 women: <sup>12</sup>C<sub>8</sub> + <sup>15</sup>C<sub>1</sub><sup>12</sup>C<sub>7</sub> + <sup>15</sup>C<sub>2</sub><sup>12</sup>C<sub>6</sub> = 495 + 11 880 + 97 020 = 109 395; 2 220 075 − 109 395 = <b>2 110 680</b></div><div class="worked__math">(d) councils with both: <sup>11</sup>C<sub>3</sub> × <sup>14</sup>C<sub>3</sub> = 165 × 364 = 60 060; 675 675 − 60 060 = <b>615 615</b></div>
      answer: "<div class=\"worked__math\">(a) <sup>27</sup>C<sub>8</sub> = <b>2 220 075</b></div><div class=\"worked__math\">(b) <sup>15</sup>C<sub>4</sub> × <sup>12</sup>C<sub>4</sub> = 1365 × 495 = <b>675 675</b></div><div class=\"worked__math\">(c) 0、1 或 2 名女士： <sup>12</sup>C<sub>8</sub> + <sup>15</sup>C<sub>1</sub><sup>12</sup>C<sub>7</sub> + <sup>15</sup>C<sub>2</sub><sup>12</sup>C<sub>6</sub> = 495 + 11 880 + 97 020 = 109 395; 2 220 075 − 109 395 = <b>2 110 680</b></div><div class=\"worked__math\">(d) 同時包含二人的委員會： <sup>11</sup>C<sub>3</sub> × <sup>14</sup>C<sub>3</sub> = 165 × 364 = 60 060; 675 675 − 60 060 = <b>615 615</b></div>",
      markscheme: [
        // EN: M1: Uses <span class="chem">27C8</span> (selection from all 27 people, order irrelevant).
        "M1：使用 <span class=\"chem\">27C8</span>（從全部 27 人中選取，次序無關）。",
        // EN: A1: 2 220 075.
        "A1：2 220 075。",
        // EN: M1: Multiplies <span class="chem">15C4 × 12C4</span>.
        "M1：計算乘積 <span class=\"chem\">15C4 × 12C4</span>。",
        // EN: A1: 675 675.
        "A1：675 675。",
        // EN: M1: Uses the complement (or adds the cases with 3, 4, …, 8 women).
        "M1：使用補集（或把含 3、4、…、8 名女士的情況相加）。",
        // EN: M1: Correct terms for 0, 1 and 2 women: <span class="chem">12C8 + 15C1 × 12C7 + 15C2 × 12C6 = 109395</span>.
        "M1：0、1 及 2 名女士的各項正確：<span class=\"chem\">12C8 + 15C1 × 12C7 + 15C2 × 12C6 = 109395</span>。",
        // EN: A1: 2 110 680.
        "A1：2 110 680。",
        // EN: M1: Counts councils containing both Marco and Wen by fixing them: <span class="chem">11C3 × 14C3</span>.
        "M1：固定 Marco 和 Wen，點算同時包含二人的委員會：<span class=\"chem\">11C3 × 14C3</span>。",
        // EN: A1: 60 060.
        "A1：60 060。",
        // EN: A1: 675 675 − 60 060 = 615 615.
        "A1：675 675 − 60 060 = 615 615。",
      ],
    },

    // ── t1-3-q023 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q023": {
      // EN: <p>A website password has exactly 8 characters. Each character is one of the 26 lower-case letters or one of the 10 digits 0–9, and no character may be used more than once.</p><p>Find the number of passwords that contain <strong>at least one digit</strong>. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> ∈ ℤ, with <span class="chem">a</span> correct to 3 significant figures.</p>
      stem: "<p>某網站密碼恰好有 8 個字元。每個字元是 26 個小寫英文字母之一或 10 個數字 0–9 之一，且每個字元最多只可使用一次。</p><p>求 (Find) <strong>至少包含一個數字</strong>的密碼數目。答案以 <span class=\"chem\">a × 10^k</span> 的形式表示，其中 <span class=\"chem\">1 &lt;= a &lt; 10</span> 且 <span class=\"chem\">k</span> ∈ ℤ，<span class=\"chem\">a</span> 須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the order of characters matters and there is no repetition, so these are permutations. “At least one digit” is easiest as (all passwords) − (passwords with no digit).
        "解碼：字元的次序重要且不可重複，因此這些是排列。「至少一個數字」最容易用（所有密碼）−（不含數字的密碼）計算。",
        // EN: All passwords: <span class="chem">36P8</span>. Passwords with letters only: <span class="chem">26P8</span>.
        "所有密碼：<span class=\"chem\">36P8</span>。只含字母的密碼：<span class=\"chem\">26P8</span>。",
        // EN: Use the nPr key on your GDC and subtract.
        "使用 GDC 的 nPr 鍵，然後相減。",
      ],
      // EN: <div class="worked__math"><sup>36</sup>P<sub>8</sub> − <sup>26</sup>P<sub>8</sub> = 1 220 096 908 800 − 62 990 928 000 = 1 157 105 980 800 ≈ <b>1.16 × 10<sup>12</sup></b></div>
      solution: "<div class=\"worked__math\"><sup>36</sup>P<sub>8</sub> − <sup>26</sup>P<sub>8</sub> = 1 220 096 908 800 − 62 990 928 000 = 1 157 105 980 800 ≈ <b>1.16 × 10<sup>12</sup></b></div>",
    },

    // ── t1-3-q024 · numeric · challenge · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q024": {
      // EN: <p>A librarian puts 10 different novels and 4 different dictionaries back on an empty shelf, placing all 14 books in a random order. The dictionaries are heavy: the shelf bends if any two dictionaries stand side by side.</p><p>Find the probability that the shelf does not bend. Give your answer to 3 significant figures.</p>
      stem: "<p>圖書館管理員把 10 本不同的小說及 4 本不同的字典放回一個空書架上，14 本書以隨機次序排列。字典很重：若任何兩本字典並排相鄰，書架就會彎曲。</p><p>求 (Find) 書架不會彎曲的概率。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “the shelf does not bend” means no two dictionaries are adjacent. All 14! orders are equally likely, so P = (orders with no two dictionaries adjacent) ÷ 14!. This is the gap method.
        "解碼：「書架不會彎曲」表示沒有兩本字典相鄰。全部 14! 種次序的可能性相等，因此 P =（沒有兩本字典相鄰的次序數目）÷ 14!。這就是插空法。",
        // EN: Arrange the 10 novels first: <span class="chem">10!</span> ways. They create 11 gaps (including both ends).
        "先排列 10 本小說：<span class=\"chem\">10!</span> 種方法。它們形成 11 個空位（包括兩端）。",
        // EN: Place the 4 different dictionaries in 4 different gaps: <span class="chem">11P4</span> ways. Then divide by <span class="chem">14!</span>.
        "把 4 本不同的字典放入 4 個不同的空位：<span class=\"chem\">11P4</span> 種方法。然後除以 <span class=\"chem\">14!</span>。",
      ],
      // EN: <p><b>Decode:</b> “does not bend” = no two dictionaries adjacent → gap method, then divide by the total number of orders.</p><div class="worked__math">Favourable = 10! × <sup>11</sup>P<sub>4</sub> = 3 628 800 × 7920 = 28 740 096 000</div><div class="worked__math">P = <span class="frac"><span>28 740 096 000</span><span>14!</span></span> = <span class="frac"><span>30</span><span>91</span></span> ≈ <b>0.330</b></div>
      solution: "<p><b>解碼：</b>「不會彎曲」= 沒有兩本字典相鄰 → 插空法，然後除以次序的總數。</p><div class=\"worked__math\">有利結果 = 10! × <sup>11</sup>P<sub>4</sub> = 3 628 800 × 7920 = 28 740 096 000</div><div class=\"worked__math\">P = <span class=\"frac\"><span>28 740 096 000</span><span>14!</span></span> = <span class=\"frac\"><span>30</span><span>91</span></span> ≈ <b>0.330</b></div>",
    },

    // ── t1-3-q025 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q025": {
      // EN: <p>A bag holds 60 tiles: 12 red and 48 blue. A player takes 7 tiles at random, without replacement. Using counting methods, find the probability that at least 2 of the 7 tiles are red. Give your answer to 3 significant figures.</p>
      stem: "<p>袋中有 60 塊牌：12 塊紅色、48 塊藍色。玩家隨機取出 7 塊牌，取後不放回。利用計數方法，求 (Find) 7 塊牌中至少有 2 塊是紅色的概率。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: every hand of 7 tiles is equally likely, and there are <span class="chem">60C7</span> of them. “At least 2 red” is quicker by the complement: subtract the hands with 0 or 1 red tile.
        "解碼：每一手 7 塊牌的可能性相等，共有 <span class=\"chem\">60C7</span> 種。「至少 2 塊紅色」用補集較快：減去含 0 或 1 塊紅色牌的情況。",
        // EN: Hands with 0 red: <span class="chem">48C7</span>. Hands with exactly 1 red: <span class="chem">12C1 × 48C6</span>.
        "0 塊紅色：<span class=\"chem\">48C7</span>。恰好 1 塊紅色：<span class=\"chem\">12C1 × 48C6</span>。",
        // EN: P = 1 − (48C7 + 12 × 48C6) / 60C7.
        "P = 1 − (48C7 + 12 × 48C6) / 60C7。",
      ],
      // EN: <div class="worked__math">P(0 or 1 red) = <span class="frac"><span><sup>48</sup>C<sub>7</sub> + <sup>12</sup>C<sub>1</sub><sup>48</sup>C<sub>6</sub></span><span><sup>60</sup>C<sub>7</sub></span></span> = <span class="frac"><span>73 629 072 + 12 × 12 271 512</span><span>386 206 920</span></span> = 0.57194…</div><div class="worked__math">P(at least 2 red) = 1 − 0.57194… ≈ <b>0.428</b></div>
      solution: "<div class=\"worked__math\">P(0 或 1 塊紅色) = <span class=\"frac\"><span><sup>48</sup>C<sub>7</sub> + <sup>12</sup>C<sub>1</sub><sup>48</sup>C<sub>6</sub></span><span><sup>60</sup>C<sub>7</sub></span></span> = <span class=\"frac\"><span>73 629 072 + 12 × 12 271 512</span><span>386 206 920</span></span> = 0.57194…</div><div class=\"worked__math\">P(至少 2 塊紅色) = 1 − 0.57194… ≈ <b>0.428</b></div>",
    },

    // ── t1-3-q026 · short · exam · AHL · AHL 1.10 · 8 marks
    "t1-3-q026": {
      // EN: <p>(a) Find the first four terms of the expansion of <span class="chem">sqrt(1 + 4x)</span> in ascending powers of <span class="chem">x</span>. <strong>[3 marks]</strong><br>(b) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(c) By writing <span class="chem">26 = 25 × 1.04</span>, use your answer to (a) with a suitable value of <span class="chem">x</span> to estimate <span class="chem">sqrt(26)</span>. <strong>[2 marks]</strong><br>(d) Find the percentage error of your estimate, compared with the value of <span class="chem">sqrt(26)</span> given by your GDC. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 求 (Find) <span class=\"chem\">sqrt(1 + 4x)</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式的首四項。<strong>[3 marks]</strong><br>(b) 寫出 (State) 展開式有效的 <span class=\"chem\">x</span> 值範圍。<strong>[1 mark]</strong><br>(c) 寫出 <span class=\"chem\">26 = 25 × 1.04</span>，再利用 (a) 的答案及適當的 <span class=\"chem\">x</span> 值估計 <span class=\"chem\">sqrt(26)</span>。<strong>[2 marks]</strong><br>(d) 與 GDC 給出的 <span class=\"chem\">sqrt(26)</span> 值比較，求你的估計值的百分誤差。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: In (a) use <span class="chem">n = 1/2</span> and <span class="chem">u = 4x</span>; the <span class="chem">x^3</span> coefficient is <span class="chem">(n(n - 1)(n - 2)/3!) × 4^3</span>.
        "在 (a) 中使用 <span class=\"chem\">n = 1/2</span> 及 <span class=\"chem\">u = 4x</span>；<span class=\"chem\">x^3</span> 的係數為 <span class=\"chem\">(n(n - 1)(n - 2)/3!) × 4^3</span>。",
        // EN: In (c), <span class="chem">sqrt(26) = sqrt(25)sqrt(1.04) = 5sqrt(1 + 4x)</span> with <span class="chem">4x = 0.04</span>.
        "在 (c) 中，<span class=\"chem\">sqrt(26) = sqrt(25)sqrt(1.04) = 5sqrt(1 + 4x)</span>，其中 <span class=\"chem\">4x = 0.04</span>。",
        // EN: The estimate is extremely close: keep at least 7 significant figures from your GDC before finding the error.
        "估計值極為接近：求誤差前，GDC 的數值至少要保留 7 位有效數字。",
      ],
      // EN: <div class="worked__math">(a) 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> (b) |<i>x</i>| &lt; 1/4 (c) 5.09902 (d) ≈ 9.54 × 10<sup>−6</sup> %</div>
      solution: "<div class=\"worked__math\">(a) 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> (b) |<i>x</i>| &lt; 1/4 (c) 5.09902 (d) ≈ 9.54 × 10<sup>−6</sup> %</div>",
      // EN: <div class="worked__math">(a) (1 + 4<i>x</i>)<sup>1/2</sup> = 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> − …</div><div class="worked__math">(b) |4<i>x</i>| &lt; 1 ⇔ |<i>x</i>| &lt; <span class="frac"><span>1</span><span>4</span></span></div><div class="worked__math">(c) √26 = 5√1.04, so <i>x</i> = 0.01: 5(1 + 0.02 − 0.0002 + 0.000004) = 5 × 1.019804 = <b>5.09902</b></div><div class="worked__math">(d) GDC: √26 = 5.0990195…; percentage error = <span class="frac"><span>5.09902 − 5.0990195…</span><span>5.0990195…</span></span> × 100% ≈ <b>9.54 × 10<sup>−6</sup> %</b></div>
      answer: "<div class=\"worked__math\">(a) (1 + 4<i>x</i>)<sup>1/2</sup> = 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> − …</div><div class=\"worked__math\">(b) |4<i>x</i>| &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>4</span></span></div><div class=\"worked__math\">(c) √26 = 5√1.04，因此 <i>x</i> = 0.01： 5(1 + 0.02 − 0.0002 + 0.000004) = 5 × 1.019804 = <b>5.09902</b></div><div class=\"worked__math\">(d) GDC: √26 = 5.0990195…; 百分誤差 = <span class=\"frac\"><span>5.09902 − 5.0990195…</span><span>5.0990195…</span></span> × 100% ≈ <b>9.54 × 10<sup>−6</sup> %</b></div>",
      markscheme: [
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/2</span> and <span class="chem">u = 4x</span>.
        "M1：使用廣義二項式展開，其中 <span class=\"chem\">n = 1/2</span> 及 <span class=\"chem\">u = 4x</span>。",
        // EN: A1: <span class="chem">1 + 2x - 2x^2</span>.
        "A1：<span class=\"chem\">1 + 2x - 2x^2</span>。",
        // EN: A1: <span class="chem">+ 4x^3</span>.
        "A1：<span class=\"chem\">+ 4x^3</span>。",
        // EN: A1: <span class="chem">|x| &lt; 1/4</span>.
        "A1：<span class=\"chem\">|x| &lt; 1/4</span>。",
        // EN: M1: Uses <span class="chem">sqrt(26) = 5sqrt(1 + 4x)</span> with <span class="chem">x = 0.01</span>.
        "M1：使用 <span class=\"chem\">sqrt(26) = 5sqrt(1 + 4x)</span>，其中 <span class=\"chem\">x = 0.01</span>。",
        // EN: A1: 5.09902.
        "A1：5.09902。",
        // EN: M1: Uses |estimate − GDC value| ÷ GDC value × 100.
        "M1：使用 |估計值 − GDC 值| ÷ GDC 值 × 100。",
        // EN: A1: <span class="chem">9.54 × 10^{-6}</span> % (accept 0.00000954 %).
        "A1：<span class=\"chem\">9.54 × 10^{-6}</span> %（接受 0.00000954 %）。",
      ],
    },

    // ── t1-3-q027 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q027": {
      // EN: <p>The first three terms of the binomial expansion of <span class="chem">(1 + x)^{-1/2}</span> are used to estimate <span class="chem">1 / sqrt(1.3)</span>.</p><p>Find the percentage error of this estimate, compared with the value given by your GDC. Give your answer to 3 significant figures.</p>
      stem: "<p>利用 <span class=\"chem\">(1 + x)^{-1/2}</span> 的二項式展開式首三項估計 <span class=\"chem\">1 / sqrt(1.3)</span>。</p><p>與 GDC 給出的值比較，求 (Find) 此估計值的百分誤差。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: <span class="chem">1/sqrt(1.3) = (1 + 0.3)^{-1/2}</span>, so put <span class="chem">x = 0.3</span> into the first three terms. Then compare with the GDC value.
        "解碼：<span class=\"chem\">1/sqrt(1.3) = (1 + 0.3)^{-1/2}</span>，因此把 <span class=\"chem\">x = 0.3</span> 代入首三項，然後與 GDC 的值比較。",
        // EN: <span class="chem">(1 + x)^{-1/2} ≈ 1 - (1/2)x + (3/8)x^2</span>.
        "<span class=\"chem\">(1 + x)^{-1/2} ≈ 1 - (1/2)x + (3/8)x^2</span>。",
        // EN: Percentage error = |estimate − exact| ÷ exact × 100.
        "百分誤差 = |估計值 − 準確值| ÷ 準確值 × 100。",
      ],
      // EN: <div class="worked__math">Estimate = 1 − 0.15 + <span class="frac"><span>3</span><span>8</span></span>(0.09) = 0.88375</div><div class="worked__math">GDC: 1/√1.3 = 0.877058…</div><div class="worked__math">Percentage error = <span class="frac"><span>0.88375 − 0.877058…</span><span>0.877058…</span></span> × 100 ≈ <b>0.763 %</b></div>
      solution: "<div class=\"worked__math\">估計值 = 1 − 0.15 + <span class=\"frac\"><span>3</span><span>8</span></span>(0.09) = 0.88375</div><div class=\"worked__math\">GDC: 1/√1.3 = 0.877058…</div><div class=\"worked__math\">百分誤差 = <span class=\"frac\"><span>0.88375 − 0.877058…</span><span>0.877058…</span></span> × 100 ≈ <b>0.763 %</b></div>",
    },

    // ── t1-3-q028 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q028": {
      // EN: <p>A low-power sensor chip cannot calculate square roots, so its firmware replaces <span class="chem">sqrt(1 + x)</span> by the quadratic made from the first three terms of its binomial expansion. A reading is trusted only while the absolute error of this replacement is less than <span class="chem">5 × 10^{-4}</span>.</p><p>Given that <span class="chem">x &gt;= 0</span>, find the largest value of <span class="chem">x</span> for which readings are trusted. Give your answer to 3 significant figures.</p>
      stem: "<p>某低功耗感應器晶片無法計算平方根，因此其韌體以一個二次式代替 <span class=\"chem\">sqrt(1 + x)</span>，該二次式由其二項式展開式的首三項組成。只有當此代替的絕對誤差小於 <span class=\"chem\">5 × 10^{-4}</span> 時，讀數才可信。</p><p>已知 <span class=\"chem\">x &gt;= 0</span>，求 (Find) 讀數可信時 <span class=\"chem\">x</span> 的最大值。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: first find the quadratic <span class="chem">p(x)</span> (the first three terms of <span class="chem">(1 + x)^{1/2}</span>). Then the question asks where <span class="chem">|sqrt(1 + x) - p(x)| = 5 × 10^{-4}</span> for <span class="chem">x &gt;= 0</span>: an equation you solve on the GDC.
        "解碼：先求二次式 <span class=\"chem\">p(x)</span>（即 <span class=\"chem\">(1 + x)^{1/2}</span> 的首三項）。然後題目要求的是在 <span class=\"chem\">x &gt;= 0</span> 時 <span class=\"chem\">|sqrt(1 + x) - p(x)| = 5 × 10^{-4}</span> 的位置：這是一條用 GDC 解的方程。",
        // EN: <span class="chem">p(x) = 1 + x/2 - x^2/8</span>.
        "<span class=\"chem\">p(x) = 1 + x/2 - x^2/8</span>。",
        // EN: Graph <span class="chem">y = sqrt(1 + x) - (1 + x/2 - x^2/8)</span> and <span class="chem">y = 0.0005</span> for <span class="chem">x &gt;= 0</span>; the error increases with <span class="chem">x</span>, so the intersection is the boundary.
        "在 <span class=\"chem\">x &gt;= 0</span> 時繪畫 <span class=\"chem\">y = sqrt(1 + x) - (1 + x/2 - x^2/8)</span> 及 <span class=\"chem\">y = 0.0005</span> 的圖像；誤差隨 <span class=\"chem\">x</span> 增加，因此交點就是邊界。",
      ],
      // EN: <p><b>Decode:</b> “trusted” means |exact − quadratic| &lt; 5 × 10<sup>−4</sup>; find the boundary of this inequality for <i>x</i> ≥ 0.</p><div class="worked__math"><i>p</i>(<i>x</i>) = 1 + <span class="frac"><span><i>x</i></span><span>2</span></span> − <span class="frac"><span><i>x</i><sup>2</sup></span><span>8</span></span></div><div class="worked__math">GDC: √(1 + <i>x</i>) − <i>p</i>(<i>x</i>) = 0.0005 at <i>x</i> = 0.20821…; the error is increasing for <i>x</i> ≥ 0</div><div class="worked__math">Largest trusted value ≈ <b>0.208</b></div>
      solution: "<p><b>解碼：</b>「可信」表示 |準確值 − 二次式| &lt; 5 × 10<sup>−4</sup>；求此不等式在 <i>x</i> ≥ 0 時的邊界。</p><div class=\"worked__math\"><i>p</i>(<i>x</i>) = 1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span> − <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>8</span></span></div><div class=\"worked__math\">GDC：<i>x</i> = 0.20821… 時 √(1 + <i>x</i>) − <i>p</i>(<i>x</i>) = 0.0005；誤差在 <i>x</i> ≥ 0 時遞增</div><div class=\"worked__math\">最大可信值 ≈ <b>0.208</b></div>",
    },

    // ── t1-3-q029 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q029": {
      // EN: <p>In special relativity, an object moving at speed <span class="chem">v</span> has Lorentz factor <span class="chem">gamma = 1 / sqrt(1 - beta^2)</span>, where <span class="chem">beta = v / c</span> and <span class="chem">c</span> is the speed of light. At everyday speeds engineers replace <span class="chem">gamma</span> by the first two terms of its binomial expansion in powers of <span class="chem">beta</span>.</p><p>Find the value of <span class="chem">beta</span>, where <span class="chem">0 &lt; beta &lt; 1</span>, for which this approximation is exactly 1% smaller than the true value of <span class="chem">gamma</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>在狹義相對論中，以速率 <span class=\"chem\">v</span> 運動的物體的洛倫茲因子為 <span class=\"chem\">gamma = 1 / sqrt(1 - beta^2)</span>，其中 <span class=\"chem\">beta = v / c</span>，而 <span class=\"chem\">c</span> 為光速。在日常速率下，工程師把 <span class=\"chem\">gamma</span> 按 <span class=\"chem\">beta</span> 的冪作二項式展開，並以首兩項代替它。</p><p>求 (Find) 使此近似值恰好比 <span class=\"chem\">gamma</span> 的真實值小 1% 的 <span class=\"chem\">beta</span> 值，其中 <span class=\"chem\">0 &lt; beta &lt; 1</span>。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: write <span class="chem">gamma = (1 + u)^{-1/2}</span> with <span class="chem">u = -beta^2</span>, find its first two terms, then “1% smaller” means approximation = <span class="chem">0.99 gamma</span>. Solve that equation for <span class="chem">beta</span> on your GDC.
        "解碼：寫出 <span class=\"chem\">gamma = (1 + u)^{-1/2}</span>，其中 <span class=\"chem\">u = -beta^2</span>，並求其首兩項；「小 1%」表示近似值 = <span class=\"chem\">0.99 gamma</span>。用 GDC 解此方程求 <span class=\"chem\">beta</span>。",
        // EN: The first two terms are <span class="chem">1 + beta^2 / 2</span>.
        "首兩項為 <span class=\"chem\">1 + beta^2 / 2</span>。",
        // EN: Solve <span class="chem">1 + beta^2/2 = 0.99 / sqrt(1 - beta^2)</span> for <span class="chem">0 &lt; beta &lt; 1</span>.
        "在 <span class=\"chem\">0 &lt; beta &lt; 1</span> 的範圍內解 <span class=\"chem\">1 + beta^2/2 = 0.99 / sqrt(1 - beta^2)</span>。",
      ],
      // EN: <p><b>Decode:</b> binomial with <i>u</i> = −β<sup>2</sup>, then an equation “approximation = 0.99 × exact”.</p><div class="worked__math">γ = (1 − β<sup>2</sup>)<sup>−1/2</sup> = 1 + <span class="frac"><span>1</span><span>2</span></span>β<sup>2</sup> + … (valid for β<sup>2</sup> &lt; 1)</div><div class="worked__math">1 + <span class="frac"><span>β<sup>2</sup></span><span>2</span></span> = <span class="frac"><span>0.99</span><span>√(1 − β<sup>2</sup>)</span></span> ⇒ (GDC) β = 0.39842…</div><div class="worked__math">β ≈ <b>0.398</b></div>
      solution: "<p><b>解碼：</b>以 <i>u</i> = −β<sup>2</sup> 作二項式展開，然後解方程「近似值 = 0.99 × 準確值」。</p><div class=\"worked__math\">γ = (1 − β<sup>2</sup>)<sup>−1/2</sup> = 1 + <span class=\"frac\"><span>1</span><span>2</span></span>β<sup>2</sup> + … （於 β<sup>2</sup> &lt; 1 時有效）</div><div class=\"worked__math\">1 + <span class=\"frac\"><span>β<sup>2</sup></span><span>2</span></span> = <span class=\"frac\"><span>0.99</span><span>√(1 − β<sup>2</sup>)</span></span> ⇒ (GDC) β = 0.39842…</div><div class=\"worked__math\">β ≈ <b>0.398</b></div>",
    },

    // ── t1-3-q030 · short · exam · AHL · AHL 1.10 · 8 marks
    "t1-3-q030": {
      // EN: <p>At height <span class="chem">h</span> km above the surface of a planet of radius <span class="chem">R</span> km, the gravitational field strength is <span class="chem">g = g_0 R^2 / (R + h)^2</span>, where <span class="chem">g_0</span> is its value at the surface.</p><p>(a) Show that <span class="chem">g = g_0(1 + h/R)^{-2}</span>. <strong>[1 mark]</strong><br>(b) Hence show that, for small values of <span class="chem">h</span>, <span class="chem">g ≈ g_0(1 - 2h/R + 3h^2/R^2)</span>. <strong>[3 marks]</strong><br>(c) Given that <span class="chem">h &gt;= 0</span>, state the condition on <span class="chem">h</span> for which the full binomial series converges. <strong>[1 mark]</strong><br>(d) For the Earth take <span class="chem">R = 6371</span> and <span class="chem">g_0 = 9.81</span> <span class="unit">m s-2</span>. A satellite orbits at <span class="chem">h = 420</span>. Use the approximation in (b) to estimate <span class="chem">g</span>, and find its percentage error compared with the exact formula. <strong>[3 marks]</strong></p>
      stem: "<p>在半徑為 <span class=\"chem\">R</span> km 的行星表面以上 <span class=\"chem\">h</span> km 的高度，重力場強度為 <span class=\"chem\">g = g_0 R^2 / (R + h)^2</span>，其中 <span class=\"chem\">g_0</span> 為其在表面的值。</p><p>(a) 證明 (Show that) <span class=\"chem\">g = g_0(1 + h/R)^{-2}</span>。<strong>[1 mark]</strong><br>(b) 由此證明 (Hence show that)，當 <span class=\"chem\">h</span> 很小時，<span class=\"chem\">g ≈ g_0(1 - 2h/R + 3h^2/R^2)</span>。<strong>[3 marks]</strong><br>(c) 已知 <span class=\"chem\">h &gt;= 0</span>，寫出 (State) 使整個二項式級數收斂的 <span class=\"chem\">h</span> 的條件。<strong>[1 mark]</strong><br>(d) 對於地球，取 <span class=\"chem\">R = 6371</span> 及 <span class=\"chem\">g_0 = 9.81</span> <span class=\"unit\">m s-2</span>。某人造衞星在 <span class=\"chem\">h = 420</span> 的高度運行。利用 (b) 的近似式估計 <span class=\"chem\">g</span>，並求其與準確公式相比的百分誤差。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a rearrangement; (b) is the extended binomial with <span class="chem">n = -2</span>; (c) is the validity condition <span class="chem">|u| &lt; 1</span>; (d) is a GDC comparison.
        "解碼：(a) 是移項變形；(b) 是 <span class=\"chem\">n = -2</span> 的廣義二項式展開；(c) 是有效條件 <span class=\"chem\">|u| &lt; 1</span>；(d) 是用 GDC 作比較。",
        // EN: Divide the top and bottom of <span class="chem">R^2/(R + h)^2</span> by <span class="chem">R^2</span>.
        "把 <span class=\"chem\">R^2/(R + h)^2</span> 的分子和分母同除以 <span class=\"chem\">R^2</span>。",
        // EN: Keep full GDC accuracy for both values in (d) before finding the percentage error.
        "在 (d) 中求百分誤差前，兩個值都要保留 GDC 的全部精確度。",
      ],
      // EN: <div class="worked__math">(b) <i>g</i> ≈ <i>g</i><sub>0</sub>(1 − 2<i>h</i>/<i>R</i> + 3<i>h</i><sup>2</sup>/<i>R</i><sup>2</sup>) (c) <i>h</i> &lt; <i>R</i> (d) 8.64 m s<sup>−2</sup>, error ≈ 0.120 %</div>
      solution: "<div class=\"worked__math\">(b) <i>g</i> ≈ <i>g</i><sub>0</sub>(1 − 2<i>h</i>/<i>R</i> + 3<i>h</i><sup>2</sup>/<i>R</i><sup>2</sup>) (c) <i>h</i> &lt; <i>R</i> (d) 8.64 m s<sup>−2</sup>, 誤差 ≈ 0.120 %</div>",
      // EN: <div class="worked__math">(a) <span class="frac"><span><i>R</i><sup>2</sup></span><span>(<i>R</i> + <i>h</i>)<sup>2</sup></span></span> = <span class="frac"><span>1</span><span>(1 + <i>h</i>/<i>R</i>)<sup>2</sup></span></span>, so <i>g</i> = <i>g</i><sub>0</sub>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup></div><div class="worked__math">(b) (1 + <i>u</i>)<sup>−2</sup> = 1 − 2<i>u</i> + <span class="frac"><span>(−2)(−3)</span><span>2</span></span><i>u</i><sup>2</sup> + … = 1 − 2<i>u</i> + 3<i>u</i><sup>2</sup> + … with <i>u</i> = <i>h</i>/<i>R</i></div><div class="worked__math">(c) |<i>h</i>/<i>R</i>| &lt; 1, i.e. 0 ≤ <i>h</i> &lt; <i>R</i></div><div class="worked__math">(d) <i>u</i> = 420/6371: estimate = 9.81(1 − 2<i>u</i> + 3<i>u</i><sup>2</sup>) ≈ <b>8.64</b> m s<sup>−2</sup> (8.6445…); exact = 9.81/(1 + <i>u</i>)<sup>2</sup> = 8.6341…; percentage error ≈ <b>0.120 %</b></div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span><i>R</i><sup>2</sup></span><span>(<i>R</i> + <i>h</i>)<sup>2</sup></span></span> = <span class=\"frac\"><span>1</span><span>(1 + <i>h</i>/<i>R</i>)<sup>2</sup></span></span>，因此 <i>g</i> = <i>g</i><sub>0</sub>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup></div><div class=\"worked__math\">(b) (1 + <i>u</i>)<sup>−2</sup> = 1 − 2<i>u</i> + <span class=\"frac\"><span>(−2)(−3)</span><span>2</span></span><i>u</i><sup>2</sup> + … = 1 − 2<i>u</i> + 3<i>u</i><sup>2</sup> + …，其中 <i>u</i> = <i>h</i>/<i>R</i></div><div class=\"worked__math\">(c) |<i>h</i>/<i>R</i>| &lt; 1，即 0 ≤ <i>h</i> &lt; <i>R</i></div><div class=\"worked__math\">(d) <i>u</i> = 420/6371: 估計值 = 9.81(1 − 2<i>u</i> + 3<i>u</i><sup>2</sup>) ≈ <b>8.64</b> m s<sup>−2</sup> (8.6445…); 準確值 = 9.81/(1 + <i>u</i>)<sup>2</sup> = 8.6341…; 百分誤差 ≈ <b>0.120 %</b></div>",
      markscheme: [
        // EN: A1: Divides numerator and denominator by <span class="chem">R^2</span> to obtain <span class="chem">g_0 / (1 + h/R)^2</span>. AG: <span class="chem">g = g_0(1 + h/R)^{-2}</span>; the given line itself earns no mark.
        "A1：把分子和分母同除以 <span class=\"chem\">R^2</span>，得 <span class=\"chem\">g_0 / (1 + h/R)^2</span>。AG：<span class=\"chem\">g = g_0(1 + h/R)^{-2}</span>；寫出題目已給的結果本身不得分。",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = -2</span> and <span class="chem">u = h/R</span>.
        "M1：使用廣義二項式展開，其中 <span class=\"chem\">n = -2</span> 及 <span class=\"chem\">u = h/R</span>。",
        // EN: A1: Linear term <span class="chem">-2h/R</span>.
        "A1：一次項 <span class=\"chem\">-2h/R</span>。",
        // EN: A1: Quadratic coefficient <span class="chem">(-2)(-3)/2! = 3</span>, giving <span class="chem">3h^2/R^2</span>. AG: the given approximation follows.
        "A1：二次項係數 <span class=\"chem\">(-2)(-3)/2! = 3</span>，得 <span class=\"chem\">3h^2/R^2</span>。AG：由此得出題目所給的近似式。",
        // EN: A1: <span class="chem">h &lt; R</span> (from <span class="chem">|h/R| &lt; 1</span>).
        "A1：<span class=\"chem\">h &lt; R</span>（由 <span class=\"chem\">|h/R| &lt; 1</span> 得出）。",
        // EN: M1: Substitutes <span class="chem">h/R = 420/6371</span> into the approximation (and the exact formula).
        "M1：把 <span class=\"chem\">h/R = 420/6371</span> 代入近似式（及準確公式）。",
        // EN: A1: Estimate 8.64 m s⁻² (8.6445…).
        "A1：估計值 8.64 m s⁻²（8.6445…）。",
        // EN: A1: Percentage error 0.120 % (exact value 8.6341…).
        "A1：百分誤差 0.120 %（準確值 8.6341…）。",
      ],
    },

    // ── t1-3-q031 · numeric · challenge · AHL · AHL 1.10, 1.11 · 6 marks
    "t1-3-q031": {
      // EN: <p>Let <span class="chem">f(x) = 3 / ((1 - x)(1 + 2x))</span>. A student writes <span class="chem">f(x)</span> in partial fractions, expands each one, and keeps only the terms up to <span class="chem">x^2</span>, obtaining a quadratic <span class="chem">p(x)</span>. She accepts the replacement of <span class="chem">f</span> by <span class="chem">p</span> wherever <span class="chem">|f(x) - p(x)| &lt; 0.02</span>.</p><p>Find the greatest value of <span class="chem">c</span> such that the replacement is accepted for all <span class="chem">0 &lt;= x &lt; c</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 3 / ((1 - x)(1 + 2x))</span>。某學生把 <span class=\"chem\">f(x)</span> 表示為部分分式，把每一項展開，並只保留至 <span class=\"chem\">x^2</span> 的項，得到二次式 <span class=\"chem\">p(x)</span>。凡 <span class=\"chem\">|f(x) - p(x)| &lt; 0.02</span> 之處，她都接受以 <span class=\"chem\">p</span> 代替 <span class=\"chem\">f</span>。</p><p>求 (Find) 使所有 <span class=\"chem\">0 &lt;= x &lt; c</span> 都接受此代替的 <span class=\"chem\">c</span> 的最大值。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: two jobs. First build <span class="chem">p(x)</span> by partial fractions and extended binomials. Then solve <span class="chem">|f(x) - p(x)| = 0.02</span> on the GDC for the first positive solution (inside the validity interval).
        "解碼：兩項工作。先以部分分式及廣義二項式展開建立 <span class=\"chem\">p(x)</span>。然後用 GDC 解 <span class=\"chem\">|f(x) - p(x)| = 0.02</span>，求第一個正解（在有效區間內）。",
        // EN: Partial fractions: <span class="chem">f(x) = 1/(1 - x) + 2/(1 + 2x)</span>.
        "部分分式：<span class=\"chem\">f(x) = 1/(1 - x) + 2/(1 + 2x)</span>。",
        // EN: Expanding: <span class="chem">p(x) = (1 + x + x^2) + 2(1 - 2x + 4x^2) = 3 - 3x + 9x^2</span>, valid for <span class="chem">|x| &lt; 1/2</span>.
        "展開：<span class=\"chem\">p(x) = (1 + x + x^2) + 2(1 - 2x + 4x^2) = 3 - 3x + 9x^2</span>，於 <span class=\"chem\">|x| &lt; 1/2</span> 時有效。",
        // EN: Graph <span class="chem">y = |f(x) - p(x)|</span> and <span class="chem">y = 0.02</span> on <span class="chem">0 &lt;= x &lt; 0.5</span>.
        "在 <span class=\"chem\">0 &lt;= x &lt; 0.5</span> 上繪畫 <span class=\"chem\">y = |f(x) - p(x)|</span> 及 <span class=\"chem\">y = 0.02</span> 的圖像。",
      ],
      // EN: <p><b>Decode:</b> make <i>p</i> from partial fractions, then find where the error first reaches 0.02.</p><div class="worked__math">3 ≡ <i>A</i>(1 + 2<i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 1; <i>x</i> = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <i>B</i> = 2</div><div class="worked__math"><i>p</i>(<i>x</i>) = 3 − 3<i>x</i> + 9<i>x</i><sup>2</sup> (series valid for |<i>x</i>| &lt; <span class="frac"><span>1</span><span>2</span></span>)</div><div class="worked__math">The error |<i>f</i>(<i>x</i>) − <i>p</i>(<i>x</i>)| increases from 0 on 0 ≤ <i>x</i> &lt; 0.5; GDC: it equals 0.02 at <i>x</i> = 0.11928…</div><div class="worked__math"><i>c</i> ≈ <b>0.119</b></div>
      solution: "<p><b>解碼：</b>由部分分式得出 <i>p</i>，然後求誤差首次達到 0.02 的位置。</p><div class=\"worked__math\">3 ≡ <i>A</i>(1 + 2<i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 1; <i>x</i> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><i>p</i>(<i>x</i>) = 3 − 3<i>x</i> + 9<i>x</i><sup>2</sup>（級數有效範圍：|<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>2</span></span>）</div><div class=\"worked__math\">誤差 |<i>f</i>(<i>x</i>) − <i>p</i>(<i>x</i>)| 在 0 ≤ <i>x</i> &lt; 0.5 上由 0 開始遞增；GDC：在 <i>x</i> = 0.11928… 時等於 0.02</div><div class=\"worked__math\"><i>c</i> ≈ <b>0.119</b></div>",
    },

    // ── t1-3-q032 · numeric · challenge · AHL · AHL 1.11; SL 5.10, 5.11 · 6 marks
    "t1-3-q032": {
      // EN: <p>Let <span class="chem">f(x) = (x + 7) / ((x - 1)(x + 3))</span>, for <span class="chem">x &gt; 1</span>. The region enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the lines <span class="chem">x = 2</span> and <span class="chem">x = k</span>, where <span class="chem">k &gt; 2</span>, has area 1.</p><p>Find the value of <span class="chem">k</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = (x + 7) / ((x - 1)(x + 3))</span>，其中 <span class=\"chem\">x &gt; 1</span>。由 <span class=\"chem\">f</span> 的圖像、<span class=\"chem\">x</span> 軸及直線 <span class=\"chem\">x = 2</span> 和 <span class=\"chem\">x = k</span>（其中 <span class=\"chem\">k &gt; 2</span>）所圍成的區域面積為 1。</p><p>求 (Find) <span class=\"chem\">k</span> 的值。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “area of the region” means <span class="chem">int_2^k f(x) dx = 1</span> (here <span class="chem">f(x) &gt; 0</span> for <span class="chem">x &gt; 1</span>). Partial fractions turn <span class="chem">f</span> into two logarithm integrals, giving an equation in <span class="chem">k</span>.
        "解碼：「區域的面積」表示 <span class=\"chem\">int_2^k f(x) dx = 1</span>（此處當 <span class=\"chem\">x &gt; 1</span> 時 <span class=\"chem\">f(x) &gt; 0</span>）。部分分式把 <span class=\"chem\">f</span> 化為兩個對數積分，從而得到關於 <span class=\"chem\">k</span> 的方程。",
        // EN: Partial fractions: <span class="chem">f(x) = 2/(x - 1) - 1/(x + 3)</span>.
        "部分分式：<span class=\"chem\">f(x) = 2/(x - 1) - 1/(x + 3)</span>。",
        // EN: So <span class="chem">2ln(k - 1) - ln(k + 3) + ln 5 = 1</span>. Solve this on your GDC (or solve <span class="chem">int_2^k f(x) dx = 1</span> numerically).
        "因此 <span class=\"chem\">2ln(k - 1) - ln(k + 3) + ln 5 = 1</span>。用 GDC 解此方程（或以數值方法解 <span class=\"chem\">int_2^k f(x) dx = 1</span>）。",
      ],
      // EN: <p><b>Decode:</b> area → definite integral; partial fractions make it integrable; GDC solves the resulting equation.</p><div class="worked__math"><i>x</i> + 7 ≡ <i>A</i>(<i>x</i> + 3) + <i>B</i>(<i>x</i> − 1): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −3 ⇒ <i>B</i> = −1</div><div class="worked__math">∫<sub>2</sub><sup><i>k</i></sup> <i>f</i>(<i>x</i>) d<i>x</i> = [2 ln(<i>x</i> − 1) − ln(<i>x</i> + 3)]<sub>2</sub><sup><i>k</i></sup> = 2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5</div><div class="worked__math">2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5 = 1 ⇒ (GDC) <i>k</i> = 2.7713… ≈ <b>2.77</b></div>
      solution: "<p><b>解碼：</b>面積 → 定積分；部分分式使其可積；GDC 解出所得的方程。</p><div class=\"worked__math\"><i>x</i> + 7 ≡ <i>A</i>(<i>x</i> + 3) + <i>B</i>(<i>x</i> − 1): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −3 ⇒ <i>B</i> = −1</div><div class=\"worked__math\">∫<sub>2</sub><sup><i>k</i></sup> <i>f</i>(<i>x</i>) d<i>x</i> = [2 ln(<i>x</i> − 1) − ln(<i>x</i> + 3)]<sub>2</sub><sup><i>k</i></sup> = 2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5</div><div class=\"worked__math\">2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5 = 1 ⇒ (GDC) <i>k</i> = 2.7713… ≈ <b>2.77</b></div>",
    },

    // ── t1-3-q033 · numeric · exam · AHL · AHL 1.11 · 5 marks
    "t1-3-q033": {
      // EN: <p>The denominator of <span class="chem">f(x) = (2x + 1) / (x^2 - 4x + 1)</span> has two distinct real roots <span class="chem">alpha</span> and <span class="chem">beta</span>, where <span class="chem">alpha &gt; beta</span>. Given that <span class="chem">f(x) = A / (x - alpha) + B / (x - beta)</span>, find the value of <span class="chem">A</span>. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = (2x + 1) / (x^2 - 4x + 1)</span> 的分母有兩個相異實根 <span class=\"chem\">alpha</span> 及 <span class=\"chem\">beta</span>，其中 <span class=\"chem\">alpha &gt; beta</span>。已知 <span class=\"chem\">f(x) = A / (x - alpha) + B / (x - beta)</span>，求 (Find) <span class=\"chem\">A</span> 的值。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the method is the usual cover-up, but the roots are not integers. Find <span class="chem">alpha</span> and <span class="chem">beta</span> on the GDC first.
        "解碼：方法仍是常用的蓋住法，但根不是整數。先用 GDC 求 <span class=\"chem\">alpha</span> 及 <span class=\"chem\">beta</span>。",
        // EN: GDC: <span class="chem">alpha ≈ 3.732</span>, <span class="chem">beta ≈ 0.2679</span>. Then <span class="chem">2x + 1 ≡ A(x - beta) + B(x - alpha)</span>.
        "GDC：<span class=\"chem\">alpha ≈ 3.732</span>，<span class=\"chem\">beta ≈ 0.2679</span>。然後 <span class=\"chem\">2x + 1 ≡ A(x - beta) + B(x - alpha)</span>。",
        // EN: Substitute <span class="chem">x = alpha</span>: <span class="chem">A = (2alpha + 1)/(alpha - beta)</span>.
        "代入 <span class=\"chem\">x = alpha</span>：<span class=\"chem\">A = (2alpha + 1)/(alpha - beta)</span>。",
      ],
      // EN: <div class="worked__math"><i>x</i><sup>2</sup> − 4<i>x</i> + 1 = 0 ⇒ α = 3.7320…, β = 0.26794… (α = 2 + √3, β = 2 − √3)</div><div class="worked__math">2<i>x</i> + 1 ≡ <i>A</i>(<i>x</i> − β) + <i>B</i>(<i>x</i> − α); <i>x</i> = α: <i>A</i> = <span class="frac"><span>2α + 1</span><span>α − β</span></span> = <span class="frac"><span>8.4641…</span><span>3.4641…</span></span> ≈ <b>2.44</b></div>
      solution: "<div class=\"worked__math\"><i>x</i><sup>2</sup> − 4<i>x</i> + 1 = 0 ⇒ α = 3.7320…, β = 0.26794… (α = 2 + √3, β = 2 − √3)</div><div class=\"worked__math\">2<i>x</i> + 1 ≡ <i>A</i>(<i>x</i> − β) + <i>B</i>(<i>x</i> − α); <i>x</i> = α: <i>A</i> = <span class=\"frac\"><span>2α + 1</span><span>α − β</span></span> = <span class=\"frac\"><span>8.4641…</span><span>3.4641…</span></span> ≈ <b>2.44</b></div>",
    },

    // ── t1-3-q034 · short · exam · AHL · AHL 1.10, 1.11 · 10 marks
    "t1-3-q034": {
      // EN: <p>Let <span class="chem">f(x) = (x + 5) / ((1 - x)(2 + x))</span>.</p><p>(a) Express <span class="chem">f(x)</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, up to and including the term in <span class="chem">x^2</span>. <strong>[3 marks]</strong><br>(c) State the set of values of <span class="chem">x</span> for which the full expansion is valid. <strong>[1 mark]</strong><br>(d) Use your answer to (b) to estimate <span class="chem">f(0.1)</span>, and find the percentage error of this estimate. <strong>[3 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = (x + 5) / ((1 - x)(2 + x))</span>。</p><p>(a) 把 <span class=\"chem\">f(x)</span> 表示為 (Express) 部分分式。<strong>[3 marks]</strong><br>(b) 由此求 (Hence find) <span class=\"chem\">f(x)</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式，直至並包括 <span class=\"chem\">x^2</span> 項。<strong>[3 marks]</strong><br>(c) 寫出 (State) 整個展開式有效的 <span class=\"chem\">x</span> 值範圍。<strong>[1 mark]</strong><br>(d) 利用 (b) 的答案估計 <span class=\"chem\">f(0.1)</span>，並求此估計值的百分誤差。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use the roots <span class="chem">x = 1</span> and <span class="chem">x = -2</span> to find the numerators.
        "利用根 <span class=\"chem\">x = 1</span> 及 <span class=\"chem\">x = -2</span> 求分子。",
        // EN: Before expanding <span class="chem">1/(2 + x)</span>, take out the factor <span class="chem">2^{-1}</span>.
        "展開 <span class=\"chem\">1/(2 + x)</span> 之前，先抽出因子 <span class=\"chem\">2^{-1}</span>。",
        // EN: The whole series is valid only where both parts converge.
        "只有在兩部分都收斂時，整個級數才有效。",
      ],
      // EN: <div class="worked__math">(a) 2/(1 − <i>x</i>) + 1/(2 + <i>x</i>) (b) 5/2 + (7/4)<i>x</i> + (17/8)<i>x</i><sup>2</sup> (c) |<i>x</i>| &lt; 1 (d) 2.69625, ≈ 0.0801 %</div>
      solution: "<div class=\"worked__math\">(a) 2/(1 − <i>x</i>) + 1/(2 + <i>x</i>) (b) 5/2 + (7/4)<i>x</i> + (17/8)<i>x</i><sup>2</sup> (c) |<i>x</i>| &lt; 1 (d) 2.69625, ≈ 0.0801 %</div>",
      // EN: <div class="worked__math">(a) <i>x</i> + 5 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 1; <i>f</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 − <i>x</i></span></span> + <span class="frac"><span>1</span><span>2 + <i>x</i></span></span></div><div class="worked__math">(b) 2(1 + <i>x</i> + <i>x</i><sup>2</sup>) + <span class="frac"><span>1</span><span>2</span></span>(1 − <span class="frac"><span><i>x</i></span><span>2</span></span> + <span class="frac"><span><i>x</i><sup>2</sup></span><span>4</span></span>) = <b><span class="frac"><span>5</span><span>2</span></span> + <span class="frac"><span>7</span><span>4</span></span><i>x</i> + <span class="frac"><span>17</span><span>8</span></span><i>x</i><sup>2</sup></b></div><div class="worked__math">(c) |<i>x</i>| &lt; 1 (intersection of |<i>x</i>| &lt; 1 and |<i>x</i>| &lt; 2)</div><div class="worked__math">(d) estimate = 2.5 + 0.175 + 0.02125 = <b>2.69625</b>; exact <i>f</i>(0.1) = 5.1/1.89 = 2.69841…; percentage error ≈ <b>0.0801 %</b></div>
      answer: "<div class=\"worked__math\">(a) <i>x</i> + 5 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 1; <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span>1 − <i>x</i></span></span> + <span class=\"frac\"><span>1</span><span>2 + <i>x</i></span></span></div><div class=\"worked__math\">(b) 2(1 + <i>x</i> + <i>x</i><sup>2</sup>) + <span class=\"frac\"><span>1</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span>) = <b><span class=\"frac\"><span>5</span><span>2</span></span> + <span class=\"frac\"><span>7</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>17</span><span>8</span></span><i>x</i><sup>2</sup></b></div><div class=\"worked__math\">(c) |<i>x</i>| &lt; 1 （|<i>x</i>| &lt; 1 與 |<i>x</i>| &lt; 2 的交集）</div><div class=\"worked__math\">(d) 估計值 = 2.5 + 0.175 + 0.02125 = <b>2.69625</b>; 準確值 <i>f</i>(0.1) = 5.1/1.89 = 2.69841…; 百分誤差 ≈ <b>0.0801 %</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">x + 5 = A(2 + x) + B(1 - x)</span> (or cover-up).
        "M1：列出 <span class=\"chem\">x + 5 = A(2 + x) + B(1 - x)</span>（或使用蓋住法）。",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1：<span class=\"chem\">A = 2</span>。",
        // EN: A1: <span class="chem">B = 1</span>.
        "A1：<span class=\"chem\">B = 1</span>。",
        // EN: M1: Writes <span class="chem">1/(2 + x) = (1/2)(1 + x/2)^{-1}</span>.
        "M1：寫出 <span class=\"chem\">1/(2 + x) = (1/2)(1 + x/2)^{-1}</span>。",
        // EN: A1: Correct expansions <span class="chem">2(1 + x + x^2)</span> and <span class="chem">(1/2)(1 - x/2 + x^2/4)</span>.
        "A1：正確展開 <span class=\"chem\">2(1 + x + x^2)</span> 及 <span class=\"chem\">(1/2)(1 - x/2 + x^2/4)</span>。",
        // EN: A1: <span class="chem">5/2 + (7/4)x + (17/8)x^2</span>.
        "A1：<span class=\"chem\">5/2 + (7/4)x + (17/8)x^2</span>。",
        // EN: A1: <span class="chem">|x| &lt; 1</span>.
        "A1：<span class=\"chem\">|x| &lt; 1</span>。",
        // EN: A1: Estimate 2.69625.
        "A1：估計值 2.69625。",
        // EN: M1: Uses the exact value from the GDC, 2.69841…, in |estimate − exact| ÷ exact × 100.
        "M1：在 |估計值 − 準確值| ÷ 準確值 × 100 中使用 GDC 給出的準確值 2.69841…。",
        // EN: A1: 0.0801 %.
        "A1：0.0801 %。",
      ],
    },

    // ── t1-3-q035 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q035": {
      // EN: <p>The <span class="chem">n</span> vertices of a regular polygon are marked on a circle. A designer wants to shade every triangle whose three corners are vertices of the polygon, each triangle in a different colour. Her software offers 10 000 colours.</p><p>Find the greatest value of <span class="chem">n</span> for which she has enough colours.</p>
      stem: "<p>某正多邊形的 <span class=\"chem\">n</span> 個頂點標示在一個圓上。一名設計師想為每一個三個頂點都是該多邊形頂點的三角形塗色，每個三角形用不同的顏色。她的軟件提供 10 000 種顏色。</p><p>求 (Find) 使她有足夠顏色的 <span class=\"chem\">n</span> 的最大值。</p>",
      hints: [
        // EN: Decode: a triangle is fixed by choosing 3 of the <span class="chem">n</span> vertices (order irrelevant), so there are <span class="chem">nC3</span> triangles. “Enough colours” means <span class="chem">nC3 &lt;= 10000</span>; you want the GREATEST such <span class="chem">n</span>.
        "解碼：選出 <span class=\"chem\">n</span> 個頂點中的 3 個（次序無關）就確定一個三角形，因此共有 <span class=\"chem\">nC3</span> 個三角形。「足夠顏色」表示 <span class=\"chem\">nC3 &lt;= 10000</span>；你要求這樣的 <span class=\"chem\">n</span> 的「最大」值。",
        // EN: No three vertices of a polygon on a circle are collinear, so every choice of 3 vertices really is a triangle.
        "圓上正多邊形的任何三個頂點都不共線，因此每選出 3 個頂點都確實組成一個三角形。",
        // EN: Use the GDC table of <span class="chem">y = xC3</span>.
        "使用 <span class=\"chem\">y = xC3</span> 的 GDC 數值表。",
      ],
      // EN: <p><b>Decode:</b> triangles = <sup><i>n</i></sup>C<sub>3</sub>; need <sup><i>n</i></sup>C<sub>3</sub> ≤ 10 000 and the largest such <i>n</i>.</p><div class="worked__math">GDC: <sup>40</sup>C<sub>3</sub> = 9880 ≤ 10 000, <sup>41</sup>C<sub>3</sub> = 10 660 &gt; 10 000</div><div class="worked__math">Greatest <i>n</i> = <b>40</b></div>
      solution: "<p><b>解碼：</b>三角形數目 = <sup><i>n</i></sup>C<sub>3</sub>；需要 <sup><i>n</i></sup>C<sub>3</sub> ≤ 10 000，並求最大的 <i>n</i>。</p><div class=\"worked__math\">GDC: <sup>40</sup>C<sub>3</sub> = 9880 ≤ 10 000, <sup>41</sup>C<sub>3</sub> = 10 660 &gt; 10 000</div><div class=\"worked__math\">最大的 <i>n</i> = <b>40</b></div>",
    },

    // ── t1-3-q036 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 4 marks
    "t1-3-q036": {
      // EN: <p>A teacher chooses 5 students at random from a class of 28 to present their projects. Find the probability that two friends, Ana and Ben, are both chosen. Give your answer to 3 significant figures.</p>
      stem: "<p>老師從 28 人的班中隨機選出 5 名學生匯報專題研習。求 (Find) Ana 和 Ben 兩位朋友同時被選中的概率。答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: every group of 5 is equally likely; count the groups that contain both Ana and Ben.
        "解碼：每組 5 人的可能性相等；點算同時包含 Ana 和 Ben 的組數。",
        // EN: If Ana and Ben are both in, the other 3 come from the remaining 26 students: <span class="chem">26C3</span>.
        "若 Ana 和 Ben 都被選中，其餘 3 人從餘下的 26 名學生中選出：<span class=\"chem\">26C3</span>。",
        // EN: Divide by the total number of groups, <span class="chem">28C5</span>.
        "除以組別總數 <span class=\"chem\">28C5</span>。",
      ],
      // EN: <div class="worked__math">P = <span class="frac"><span><sup>26</sup>C<sub>3</sub></span><span><sup>28</sup>C<sub>5</sub></span></span> = <span class="frac"><span>2600</span><span>98 280</span></span> ≈ <b>0.0265</b></div>
      solution: "<div class=\"worked__math\">P = <span class=\"frac\"><span><sup>26</sup>C<sub>3</sub></span><span><sup>28</sup>C<sub>5</sub></span></span> = <span class=\"frac\"><span>2600</span><span>98 280</span></span> ≈ <b>0.0265</b></div>",
    },

    // ── t1-3-q037 · short · exam · AHL · AHL 1.10 · 6 marks
    "t1-3-q037": {
      // EN: <p>In the expansion of <span class="chem">(1 + ax)^{1/3}</span> in ascending powers of <span class="chem">x</span>, where <span class="chem">a &gt; 0</span>, the coefficient of <span class="chem">x</span> plus the coefficient of <span class="chem">x^3</span> equals 2.</p><p>(a) Show that <span class="chem">5a^3 + 27a - 162 = 0</span>. <strong>[3 marks]</strong><br>(b) Hence find the value of <span class="chem">a</span>. <strong>[1 mark]</strong><br>(c) Find the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[2 marks]</strong></p>
      stem: "<p>在 <span class=\"chem\">(1 + ax)^{1/3}</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式中（其中 <span class=\"chem\">a &gt; 0</span>），<span class=\"chem\">x</span> 的係數加上 <span class=\"chem\">x^3</span> 的係數等於 2。</p><p>(a) 證明 (Show that) <span class=\"chem\">5a^3 + 27a - 162 = 0</span>。<strong>[3 marks]</strong><br>(b) 由此求 (Hence find) <span class=\"chem\">a</span> 的值。<strong>[1 mark]</strong><br>(c) 求 (Find) 展開式有效的 <span class=\"chem\">x</span> 值範圍。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use <span class="chem">n = 1/3</span> and <span class="chem">u = ax</span>; the <span class="chem">x^3</span> term is <span class="chem">(n(n - 1)(n - 2)/3!)(ax)^3</span>.
        "使用 <span class=\"chem\">n = 1/3</span> 及 <span class=\"chem\">u = ax</span>；<span class=\"chem\">x^3</span> 項為 <span class=\"chem\">(n(n - 1)(n - 2)/3!)(ax)^3</span>。",
        // EN: The cubic in (b) has no rational root: solve it with your GDC polynomial solver.
        "(b) 中的三次方程沒有有理根：用 GDC 的多項式解算功能求解。",
        // EN: For (c) use <span class="chem">|ax| &lt; 1</span> with your value of <span class="chem">a</span>.
        "在 (c) 中，以你求得的 <span class=\"chem\">a</span> 值代入 <span class=\"chem\">|ax| &lt; 1</span>。",
      ],
      // EN: <div class="worked__math">(a) <i>a</i>/3 + 5<i>a</i><sup>3</sup>/81 = 2 ⇒ 5<i>a</i><sup>3</sup> + 27<i>a</i> − 162 = 0 (b) <i>a</i> ≈ 2.63 (c) |<i>x</i>| &lt; 0.380</div>
      solution: "<div class=\"worked__math\">(a) <i>a</i>/3 + 5<i>a</i><sup>3</sup>/81 = 2 ⇒ 5<i>a</i><sup>3</sup> + 27<i>a</i> − 162 = 0 (b) <i>a</i> ≈ 2.63 (c) |<i>x</i>| &lt; 0.380</div>",
      // EN: <div class="worked__math">(a) coefficient of <i>x</i>: <span class="frac"><span><i>a</i></span><span>3</span></span>; coefficient of <i>x</i><sup>3</sup>: <span class="frac"><span>(1/3)(−2/3)(−5/3)</span><span>3!</span></span><i>a</i><sup>3</sup> = <span class="frac"><span>5<i>a</i><sup>3</sup></span><span>81</span></span>; <span class="frac"><span><i>a</i></span><span>3</span></span> + <span class="frac"><span>5<i>a</i><sup>3</sup></span><span>81</span></span> = 2 ⇒ 27<i>a</i> + 5<i>a</i><sup>3</sup> = 162</div><div class="worked__math">(b) GDC: <b><i>a</i> = 2.63</b> (2.6302…)</div><div class="worked__math">(c) |<i>ax</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; 0.380</b> (1/<i>a</i> = 0.38019…)</div>
      answer: "<div class=\"worked__math\">(a) <i>x</i> 的係數： <span class=\"frac\"><span><i>a</i></span><span>3</span></span>; <i>x</i><sup>3</sup> 的係數： <span class=\"frac\"><span>(1/3)(−2/3)(−5/3)</span><span>3!</span></span><i>a</i><sup>3</sup> = <span class=\"frac\"><span>5<i>a</i><sup>3</sup></span><span>81</span></span>; <span class=\"frac\"><span><i>a</i></span><span>3</span></span> + <span class=\"frac\"><span>5<i>a</i><sup>3</sup></span><span>81</span></span> = 2 ⇒ 27<i>a</i> + 5<i>a</i><sup>3</sup> = 162</div><div class=\"worked__math\">(b) GDC: <b><i>a</i> = 2.63</b> (2.6302…)</div><div class=\"worked__math\">(c) |<i>ax</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; 0.380</b> (1/<i>a</i> = 0.38019…)</div>",
      markscheme: [
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/3</span> and <span class="chem">u = ax</span>, including <span class="chem">n(n - 1)(n - 2)/3!</span> for the <span class="chem">x^3</span> term.
        "M1：使用廣義二項式展開，其中 <span class=\"chem\">n = 1/3</span> 及 <span class=\"chem\">u = ax</span>，包括 <span class=\"chem\">x^3</span> 項的 <span class=\"chem\">n(n - 1)(n - 2)/3!</span>。",
        // EN: A1: Coefficient of <span class="chem">x</span> is <span class="chem">a/3</span>.
        "A1：<span class=\"chem\">x</span> 的係數為 <span class=\"chem\">a/3</span>。",
        // EN: A1: Coefficient of <span class="chem">x^3</span> is <span class="chem">5a^3/81</span>, and multiplies <span class="chem">a/3 + 5a^3/81 = 2</span> by 81. AG: <span class="chem">5a^3 + 27a - 162 = 0</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">x^3</span> 的係數為 <span class=\"chem\">5a^3/81</span>，並把 <span class=\"chem\">a/3 + 5a^3/81 = 2</span> 乘以 81。AG：<span class=\"chem\">5a^3 + 27a - 162 = 0</span>；寫出題目已給的結果本身不得分。",
        // EN: A1: <span class="chem">a = 2.63</span> (the only real root).
        "A1：<span class=\"chem\">a = 2.63</span>（唯一實根）。",
        // EN: M1: Uses <span class="chem">|ax| &lt; 1</span>.
        "M1：使用 <span class=\"chem\">|ax| &lt; 1</span>。",
        // EN: A1: <span class="chem">|x| &lt; 0.380</span> (accept <span class="chem">|x| &lt; 1/a</span> with <span class="chem">1/a = 0.380</span>).
        "A1：<span class=\"chem\">|x| &lt; 0.380</span>（接受 <span class=\"chem\">|x| &lt; 1/a</span>，其中 <span class=\"chem\">1/a = 0.380</span>）。",
      ],
    },

    // ── t1-3-q038 · short · challenge · AHL · AHL 1.10; SL 1.4 · 9 marks
    "t1-3-q038": {
      // EN: <p>A savings account pays an annual interest rate <span class="chem">r</span> (as a decimal), compounded once a year. A customer wants the equivalent monthly rate <span class="chem">m</span>: the rate that, compounded every month for 12 months, gives the same final amount.</p><p>(a) Show that <span class="chem">m = (1 + r)^{1/12} - 1</span>. <strong>[2 marks]</strong><br>(b) Use the extended binomial theorem to show that <span class="chem">m ≈ r/12 - 11r^2/288</span>. <strong>[3 marks]</strong><br>(c) State the condition on <span class="chem">r</span> for which the full series for <span class="chem">m</span> converges. <strong>[1 mark]</strong><br>(d) For an annual rate of 6%, find the exact value of the approximation in (b) and the value of <span class="chem">m</span> given by your GDC to 4 significant figures, and find the percentage error of the approximation, using the unrounded GDC value of <span class="chem">m</span>. <strong>[3 marks]</strong></p>
      stem: "<p>某儲蓄戶口的年利率為 <span class=\"chem\">r</span>（以小數表示），每年複利計算一次。一名客戶想求出等值的月利率 <span class=\"chem\">m</span>：即每月複利計算、為期 12 個月後得出相同最終金額的利率。</p><p>(a) 證明 (Show that) <span class=\"chem\">m = (1 + r)^{1/12} - 1</span>。<strong>[2 marks]</strong><br>(b) 利用廣義二項式定理證明 <span class=\"chem\">m ≈ r/12 - 11r^2/288</span>。<strong>[3 marks]</strong><br>(c) 寫出 (State) 使 <span class=\"chem\">m</span> 的整個級數收斂的 <span class=\"chem\">r</span> 的條件。<strong>[1 mark]</strong><br>(d) 對於 6% 的年利率，求 (Find) (b) 中近似式的準確值，以及 GDC 給出的 <span class=\"chem\">m</span> 值（準確至 4 位有效數字），並以未經捨入的 GDC <span class=\"chem\">m</span> 值求此近似式的百分誤差。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “equivalent” means equal amounts after one year, so <span class="chem">(1 + m)^{12} = 1 + r</span>. Part (b) is then the extended binomial with the fractional index <span class="chem">1/12</span>.
        "解碼：「等值」表示一年後的金額相等，因此 <span class=\"chem\">(1 + m)^{12} = 1 + r</span>。(b) 部分就是分數指數為 <span class=\"chem\">1/12</span> 的廣義二項式展開。",
        // EN: In (b), <span class="chem">n = 1/12</span>, so <span class="chem">n - 1 = -11/12</span>.
        "在 (b) 中，<span class=\"chem\">n = 1/12</span>，因此 <span class=\"chem\">n - 1 = -11/12</span>。",
        // EN: In (d) use <span class="chem">r = 0.06</span>, not 6.
        "在 (d) 中使用 <span class=\"chem\">r = 0.06</span>，而不是 6。",
      ],
      // EN: <p><b>Decode:</b> “equivalent monthly rate” → (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i>; then a binomial series with <i>n</i> = 1/12.</p><div class="worked__math">(b) <i>m</i> ≈ <i>r</i>/12 − 11<i>r</i><sup>2</sup>/288 (c) |<i>r</i>| &lt; 1 (d) 0.0048625 vs 0.004868, error ≈ 0.104 %</div>
      solution: "<p><b>解碼：</b>「等值月利率」→ (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i>；然後使用 <i>n</i> = 1/12 的二項式級數。</p><div class=\"worked__math\">(b) <i>m</i> ≈ <i>r</i>/12 − 11<i>r</i><sup>2</sup>/288 (c) |<i>r</i>| &lt; 1 (d) 0.0048625，對比 0.004868, 誤差 ≈ 0.104 %</div>",
      // EN: <div class="worked__math">(a) (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i> ⇒ <i>m</i> = (1 + <i>r</i>)<sup>1/12</sup> − 1</div><div class="worked__math">(b) (1 + <i>r</i>)<sup>1/12</sup> = 1 + <span class="frac"><span><i>r</i></span><span>12</span></span> + <span class="frac"><span>(1/12)(−11/12)</span><span>2</span></span><i>r</i><sup>2</sup> + … = 1 + <span class="frac"><span><i>r</i></span><span>12</span></span> − <span class="frac"><span>11<i>r</i><sup>2</sup></span><span>288</span></span> + …</div><div class="worked__math">(c) |<i>r</i>| &lt; 1 (for a positive rate, 0 &lt; <i>r</i> &lt; 1)</div><div class="worked__math">(d) <i>r</i> = 0.06: approximation = 0.005 − 0.0001375 = <b>0.0048625</b>; GDC: <i>m</i> = 1.06<sup>1/12</sup> − 1 = <b>0.004868</b> (0.0048675…); percentage error ≈ <b>0.104 %</b> (an underestimate)</div>
      answer: "<div class=\"worked__math\">(a) (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i> ⇒ <i>m</i> = (1 + <i>r</i>)<sup>1/12</sup> − 1</div><div class=\"worked__math\">(b) (1 + <i>r</i>)<sup>1/12</sup> = 1 + <span class=\"frac\"><span><i>r</i></span><span>12</span></span> + <span class=\"frac\"><span>(1/12)(−11/12)</span><span>2</span></span><i>r</i><sup>2</sup> + … = 1 + <span class=\"frac\"><span><i>r</i></span><span>12</span></span> − <span class=\"frac\"><span>11<i>r</i><sup>2</sup></span><span>288</span></span> + …</div><div class=\"worked__math\">(c) |<i>r</i>| &lt; 1 （正利率時 0 &lt; <i>r</i> &lt; 1）</div><div class=\"worked__math\">(d) <i>r</i> = 0.06: 近似值 = 0.005 − 0.0001375 = <b>0.0048625</b>; GDC: <i>m</i> = 1.06<sup>1/12</sup> − 1 = <b>0.004868</b> (0.0048675…); 百分誤差 ≈ <b>0.104 %</b> （偏低估計）</div>",
      markscheme: [
        // EN: M1: Equates the amounts: <span class="chem">P(1 + m)^{12} = P(1 + r)</span>.
        "M1：令兩者金額相等：<span class=\"chem\">P(1 + m)^{12} = P(1 + r)</span>。",
        // EN: A1: Takes the 12th root and rearranges. AG: <span class="chem">m = (1 + r)^{1/12} - 1</span>; the given line itself earns no mark.
        "A1：開 12 次方根並移項。AG：<span class=\"chem\">m = (1 + r)^{1/12} - 1</span>；寫出題目已給的結果本身不得分。",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/12</span> and <span class="chem">u = r</span>.
        "M1：使用廣義二項式展開，其中 <span class=\"chem\">n = 1/12</span> 及 <span class=\"chem\">u = r</span>。",
        // EN: A1: Linear term <span class="chem">r/12</span>.
        "A1：一次項 <span class=\"chem\">r/12</span>。",
        // EN: A1: Quadratic coefficient <span class="chem">(1/12)(-11/12)/2 = -11/288</span>, and subtracts 1. AG: <span class="chem">m ≈ r/12 - 11r^2/288</span>.
        "A1：二次項係數 <span class=\"chem\">(1/12)(-11/12)/2 = -11/288</span>，並減去 1。AG：<span class=\"chem\">m ≈ r/12 - 11r^2/288</span>。",
        // EN: A1: <span class="chem">|r| &lt; 1</span>.
        "A1：<span class=\"chem\">|r| &lt; 1</span>。",
        // EN: A1: Approximation 0.0048625.
        "A1：近似值 0.0048625。",
        // EN: A1: GDC value 0.004868 (0.0048675…).
        "A1：GDC 值 0.004868（0.0048675…）。",
        // EN: A1: Percentage error 0.104 %.
        "A1：百分誤差 0.104 %。",
      ],
    },

    // ── t1-3-q039 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q039": {
      // EN: <p>A hockey squad has 18 players. For a match, the coach names a captain, a vice-captain and 9 further players, whose roles are not distinguished. Find the number of different ways in which the coach can do this.</p>
      stem: "<p>某曲棍球隊有 18 名球員。比賽時，教練要指定一名隊長、一名副隊長，以及另外 9 名不分角色的球員。求 (Find) 教練有多少種不同的安排方法。</p>",
      hints: [
        // EN: Decode: two different kinds of choice. Captain and vice-captain are different roles (order matters); the other 9 are just a group (order does not matter).
        "解碼：兩種不同的選擇。隊長和副隊長是不同的角色（次序重要）；其餘 9 人只是一組（次序不重要）。",
        // EN: Captain then vice-captain: <span class="chem">18P2</span> ways. Then choose 9 of the remaining 16 players.
        "先選隊長再選副隊長：<span class=\"chem\">18P2</span> 種方法。然後從餘下的 16 名球員中選出 9 名。",
        // EN: Multiply: <span class="chem">18P2 × 16C9</span>.
        "相乘：<span class=\"chem\">18P2 × 16C9</span>。",
      ],
      // EN: <div class="worked__math"><sup>18</sup>P<sub>2</sub> × <sup>16</sup>C<sub>9</sub> = 306 × 11 440 = <b>3 500 640</b></div>
      solution: "<div class=\"worked__math\"><sup>18</sup>P<sub>2</sub> × <sup>16</sup>C<sub>9</sub> = 306 × 11 440 = <b>3 500 640</b></div>",
    },

    // ── t1-3-q040 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q040": {
      // EN: <p>A city has a rectangular grid of streets. A courier starts at junction P and must reach junction Q, which is 9 blocks east and 7 blocks north of P, by a shortest route (so she only ever travels east or north along the streets). Today the junction that is 4 blocks east and 3 blocks north of P is closed.</p><p>Find the number of shortest routes from P to Q that the courier can still use.</p>
      stem: "<p>某城市的街道呈長方形網格。一名速遞員從路口 P 出發，須以最短路線到達位於 P 以東 9 個街段、以北 7 個街段的路口 Q（因此她只會沿街道向東或向北走）。今天，位於 P 以東 4 個街段、以北 3 個街段的路口封閉了。</p><p>求 (Find) 速遞員仍可使用的由 P 至 Q 的最短路線數目。</p>",
      hints: [
        // EN: Decode: every shortest route is a string of 9 E-moves and 7 N-moves in some order, so choosing which 7 of the 16 moves are N fixes the route: <span class="chem">16C7</span> routes. Then remove the routes through the closed junction (complement).
        "解碼：每條最短路線都是 9 個 E 步和 7 個 N 步按某種次序排成的序列，因此選定 16 步中哪 7 步是 N，就確定了路線：共 <span class=\"chem\">16C7</span> 條路線。然後減去經過封閉路口的路線（補集）。",
        // EN: Routes through the closed junction: (routes P → junction) × (routes junction → Q) = <span class="chem">7C3 × 9C4</span>.
        "經過封閉路口的路線：（P → 該路口的路線數）×（該路口 → Q 的路線數）= <span class=\"chem\">7C3 × 9C4</span>。",
        // EN: Subtract from the total.
        "從總數中減去。",
      ],
      // EN: <p><b>Decode:</b> a shortest route = an ordering of 9 E and 7 N moves = a choice of positions for the N moves.</p><div class="worked__math">All routes: <sup>16</sup>C<sub>7</sub> = 11 440</div><div class="worked__math">Through the closed junction (4 E, 3 N, then 5 E, 4 N): <sup>7</sup>C<sub>3</sub> × <sup>9</sup>C<sub>4</sub> = 35 × 126 = 4410</div><div class="worked__math">Available routes = 11 440 − 4410 = <b>7030</b></div>
      solution: "<p><b>解碼：</b>一條最短路線 = 9 個 E 步和 7 個 N 步的一種排列 = 為 N 步選擇位置。</p><div class=\"worked__math\">所有路線：<sup>16</sup>C<sub>7</sub> = 11 440</div><div class=\"worked__math\">經過封閉路口（4 E、3 N，然後 5 E、4 N）：<sup>7</sup>C<sub>3</sub> × <sup>9</sup>C<sub>4</sub> = 35 × 126 = 4410</div><div class=\"worked__math\">可用路線 = 11 440 − 4410 = <b>7030</b></div>",
    },

    // ── t1-3-q041 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q041": {
      // EN: <p>In a chess tournament, every player plays every other player exactly once. A total of 28 games are played. Find the number of players.</p>
      stem: "<p>在一場國際象棋比賽中，每名棋手與其他每名棋手恰好對賽一次。共進行了 28 局比賽。求 (Find) 棋手人數。</p>",
      hints: [
        // EN: Each game is fixed by choosing 2 of the <span class="chem">n</span> players, so the number of games is <span class="chem">nC2 = n(n - 1)/2</span>.
        "每局比賽由選出 <span class=\"chem\">n</span> 名棋手中的 2 名確定，因此比賽局數為 <span class=\"chem\">nC2 = n(n - 1)/2</span>。",
        // EN: Solve <span class="chem">n(n - 1) = 56</span> for a positive integer <span class="chem">n</span>.
        "解 <span class=\"chem\">n(n - 1) = 56</span>，求正整數 <span class=\"chem\">n</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 28 ⇒ <i>n</i><sup>2</sup> − <i>n</i> − 56 = 0 ⇒ (<i>n</i> − 8)(<i>n</i> + 7) = 0 ⇒ <b><i>n</i> = 8</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 28 ⇒ <i>n</i><sup>2</sup> − <i>n</i> − 56 = 0 ⇒ (<i>n</i> − 8)(<i>n</i> + 7) = 0 ⇒ <b><i>n</i> = 8</b></div>",
    },

    // ── t1-3-q042 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q042": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(1 - x)^{-2}</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(1 - x)^{-2}</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式中 <span class=\"chem\">x^2</span> 的係數。</p>",
      hints: [
        // EN: Use <span class="chem">(1 + u)^n = 1 + nu + (n(n - 1)/2!)u^2 + ...</span> with <span class="chem">n = -2</span> and <span class="chem">u = -x</span>.
        "使用 <span class=\"chem\">(1 + u)^n = 1 + nu + (n(n - 1)/2!)u^2 + ...</span>，其中 <span class=\"chem\">n = -2</span> 及 <span class=\"chem\">u = -x</span>。",
        // EN: <span class="chem">(-x)^2 = x^2</span>, so the sign comes only from <span class="chem">n(n - 1)</span>.
        "<span class=\"chem\">(-x)^2 = x^2</span>，因此正負號只來自 <span class=\"chem\">n(n - 1)</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−2)(−3)</span><span>2!</span></span>(−<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup> ⇒ coefficient <b>3</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−2)(−3)</span><span>2!</span></span>(−<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup> ⇒ 係數 <b>3</b></div>",
    },

    // ── t1-3-q043 · numeric · foundation · AHL · AHL 1.11 · 3 marks
    "t1-3-q043": {
      // EN: <p>Given that <span class="chem">(x + 8) / ((x + 3)(x - 2)) = A / (x + 3) + B / (x - 2)</span>, find the value of <span class="chem">A</span>.</p>
      stem: "<p>已知 <span class=\"chem\">(x + 8) / ((x + 3)(x - 2)) = A / (x + 3) + B / (x - 2)</span>，求 (Find) <span class=\"chem\">A</span> 的值。</p>",
      hints: [
        // EN: Multiply through by <span class="chem">(x + 3)(x - 2)</span>: <span class="chem">x + 8 ≡ A(x - 2) + B(x + 3)</span>.
        "兩邊同乘以 <span class=\"chem\">(x + 3)(x - 2)</span>：<span class=\"chem\">x + 8 ≡ A(x - 2) + B(x + 3)</span>。",
        // EN: Choose the value of <span class="chem">x</span> that makes the <span class="chem">B</span> term zero.
        "選取使 <span class=\"chem\">B</span> 項變為零的 <span class=\"chem\">x</span> 值。",
      ],
      // EN: <div class="worked__math"><i>x</i> + 8 ≡ <i>A</i>(<i>x</i> − 2) + <i>B</i>(<i>x</i> + 3); <i>x</i> = −3: 5 = −5<i>A</i> ⇒ <b><i>A</i> = −1</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> + 8 ≡ <i>A</i>(<i>x</i> − 2) + <i>B</i>(<i>x</i> + 3); <i>x</i> = −3: 5 = −5<i>A</i> ⇒ <b><i>A</i> = −1</b></div>",
    },

    // ── t1-3-q044 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q044": {
      // EN: <p>Four-digit numbers are formed from the digits 0, 1, 2, 3, 4, 5, 6, with no digit used more than once. A four-digit number cannot start with 0. Find how many of these numbers are odd.</p>
      stem: "<p>用數字 0、1、2、3、4、5、6 組成四位數，每個數字最多使用一次。四位數不可以 0 開首。求 (Find) 這些數中有多少個是奇數。</p>",
      hints: [
        // EN: Decode: two restricted positions. The units digit must be odd (1, 3 or 5) and the thousands digit cannot be 0. Fill the most restricted slots first.
        "解碼：有兩個受限制的位置。個位必須是奇數（1、3 或 5），而千位不可以是 0。先填受限制最多的位置。",
        // EN: Units digit: 3 choices. Thousands digit: not 0 and not the units digit, so 5 choices.
        "個位：3 個選擇。千位：不可以是 0，也不可以是個位的數字，因此有 5 個選擇。",
        // EN: The remaining two slots are filled from the 5 digits left, then 4.
        "其餘兩個位置分別從剩下的 5 個數字中選，然後是 4 個。",
      ],
      // EN: <div class="worked__math">units (odd): 3; thousands (not 0, not the units digit): 5; hundreds: 5; tens: 4</div><div class="worked__math">3 × 5 × 5 × 4 = <b>300</b></div>
      solution: "<div class=\"worked__math\">個位（奇數）：3；千位（非 0，且不是個位的數字）：5；百位：5；十位：4</div><div class=\"worked__math\">3 × 5 × 5 × 4 = <b>300</b></div>",
    },

    // ── t1-3-q045 · short · exam · AHL · AHL 1.10 · 6 marks
    "t1-3-q045": {
      // EN: <p>A team of 4 is chosen from 6 boys and 5 girls.</p><p>(a) Write down the number of different teams that can be chosen. <strong>[1 mark]</strong><br>(b) Find the number of teams that contain at least one girl. <strong>[2 marks]</strong><br>(c) The team must contain exactly 2 boys and 2 girls. One of the boys, Raj, and one of the girls, Sofia, cannot both be in the team. Find the number of possible teams. <strong>[3 marks]</strong></p>
      stem: "<p>從 6 名男生及 5 名女生中選出一隊 4 人隊伍。</p><p>(a) 寫出 (Write down) 可選出的不同隊伍數目。<strong>[1 mark]</strong><br>(b) 求 (Find) 至少包含一名女生的隊伍數目。<strong>[2 marks]</strong><br>(c) 隊伍必須恰好包含 2 名男生及 2 名女生。男生之一 Raj 與女生之一 Sofia 不可同時入隊。求可組成的隊伍數目。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “at least one girl” is best done by the complement (no girls at all).
        "解碼：「至少一名女生」最好用補集（完全沒有女生）計算。",
        // EN: In (c), first count all 2-boy-2-girl teams, then subtract those that contain both Raj and Sofia (fix them, then choose 1 more boy and 1 more girl).
        "在 (c) 中，先點算所有「2 男 2 女」的隊伍，然後減去同時包含 Raj 和 Sofia 的隊伍（先固定二人，再多選 1 名男生及 1 名女生）。",
      ],
      // EN: <div class="worked__math">(a) 330 (b) 330 − 15 = 315 (c) 150 − 20 = 130</div>
      solution: "<div class=\"worked__math\">(a) 330 (b) 330 − 15 = 315 (c) 150 − 20 = 130</div>",
      // EN: <div class="worked__math">(a) <sup>11</sup>C<sub>4</sub> = <b>330</b></div><div class="worked__math">(b) 330 − <sup>6</sup>C<sub>4</sub> = 330 − 15 = <b>315</b></div><div class="worked__math">(c) <sup>6</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> = 15 × 10 = 150; teams with both Raj and Sofia: <sup>5</sup>C<sub>1</sub> × <sup>4</sup>C<sub>1</sub> = 20; 150 − 20 = <b>130</b></div>
      answer: "<div class=\"worked__math\">(a) <sup>11</sup>C<sub>4</sub> = <b>330</b></div><div class=\"worked__math\">(b) 330 − <sup>6</sup>C<sub>4</sub> = 330 − 15 = <b>315</b></div><div class=\"worked__math\">(c) <sup>6</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> = 15 × 10 = 150; 同時包含 Raj 和 Sofia 的隊伍：<sup>5</sup>C<sub>1</sub> × <sup>4</sup>C<sub>1</sub> = 20; 150 − 20 = <b>130</b></div>",
      markscheme: [
        // EN: A1: 330.
        "A1：330。",
        // EN: M1: Uses the complement: total minus all-boy teams, <span class="chem">330 - 6C4</span>.
        "M1：使用補集：總數減去全男生隊伍，<span class=\"chem\">330 - 6C4</span>。",
        // EN: A1: 315.
        "A1：315。",
        // EN: M1: Counts 2 boys and 2 girls: <span class="chem">6C2 × 5C2 = 150</span>.
        "M1：點算 2 名男生及 2 名女生：<span class=\"chem\">6C2 × 5C2 = 150</span>。",
        // EN: M1: Counts teams containing both Raj and Sofia: <span class="chem">5C1 × 4C1 = 20</span>.
        "M1：點算同時包含 Raj 和 Sofia 的隊伍：<span class=\"chem\">5C1 × 4C1 = 20</span>。",
        // EN: A1: 130.
        "A1：130。",
      ],
    },

    // ── t1-3-q046 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q046": {
      // EN: <p>Seven different people, including Ali, Bea and Cal, stand in a row for a photograph. Ali and Bea must stand next to each other, and Cal must not stand at either end of the row. Find the number of possible arrangements.</p>
      stem: "<p>七個不同的人（包括 Ali、Bea 和 Cal）排成一行拍照。Ali 和 Bea 必須相鄰，而 Cal 不可站在該行的任何一端。求 (Find) 可能的排列數目。</p>",
      hints: [
        // EN: Decode: “next to each other” → glue Ali and Bea into one block; “not at either end” → count the arrangements with Cal at an end and subtract (complement).
        "解碼：「相鄰」→ 把 Ali 和 Bea 捆綁成一個整體；「不在任何一端」→ 點算 Cal 站在一端的排列並減去（補集）。",
        // EN: With the block there are 6 units: <span class="chem">6! × 2!</span> arrangements in total.
        "捆綁後共有 6 個單位：總共有 <span class=\"chem\">6! × 2!</span> 種排列。",
        // EN: Cal at an end: 2 choices of end, then arrange the other 5 units (including the block) in <span class="chem">5! × 2!</span> ways.
        "Cal 在一端：一端有 2 個選擇，然後把其餘 5 個單位（包括捆綁的整體）以 <span class=\"chem\">5! × 2!</span> 種方法排列。",
      ],
      // EN: <div class="worked__math">Ali and Bea together: 6! × 2! = 1440</div><div class="worked__math">…with Cal at an end: 2 × 5! × 2! = 480</div><div class="worked__math">1440 − 480 = <b>960</b></div>
      solution: "<div class=\"worked__math\">Ali 和 Bea 相鄰：6! × 2! = 1440</div><div class=\"worked__math\">……其中 Cal 在一端：2 × 5! × 2! = 480</div><div class=\"worked__math\">1440 − 480 = <b>960</b></div>",
    },

    // ── t1-3-q047 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q047": {
      // EN: <p>Find the exact value of the coefficient of <span class="chem">x^3</span> in the expansion of <span class="chem">(1 + 3x)^{-1/3}</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(1 + 3x)^{-1/3}</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式中 <span class=\"chem\">x^3</span> 係數的準確值。</p>",
      hints: [
        // EN: The <span class="chem">x^3</span> term is <span class="chem">(n(n - 1)(n - 2)/3!)u^3</span> with <span class="chem">n = -1/3</span> and <span class="chem">u = 3x</span>.
        "<span class=\"chem\">x^3</span> 項為 <span class=\"chem\">(n(n - 1)(n - 2)/3!)u^3</span>，其中 <span class=\"chem\">n = -1/3</span> 及 <span class=\"chem\">u = 3x</span>。",
        // EN: <span class="chem">n - 1 = -4/3</span> and <span class="chem">n - 2 = -7/3</span>; three negative factors give a negative product.
        "<span class=\"chem\">n - 1 = -4/3</span> 及 <span class=\"chem\">n - 2 = -7/3</span>；三個負因數的乘積為負。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−1/3)(−4/3)(−7/3)</span><span>3!</span></span>(3<i>x</i>)<sup>3</sup> = <span class="frac"><span>−28/27</span><span>6</span></span> × 27<i>x</i><sup>3</sup> = −<span class="frac"><span>28</span><span>6</span></span><i>x</i><sup>3</sup></div><div class="worked__math">Coefficient = <b>−<span class="frac"><span>14</span><span>3</span></span></b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−1/3)(−4/3)(−7/3)</span><span>3!</span></span>(3<i>x</i>)<sup>3</sup> = <span class=\"frac\"><span>−28/27</span><span>6</span></span> × 27<i>x</i><sup>3</sup> = −<span class=\"frac\"><span>28</span><span>6</span></span><i>x</i><sup>3</sup></div><div class=\"worked__math\">係數 = <b>−<span class=\"frac\"><span>14</span><span>3</span></span></b></div>",
    },

    // ── t1-3-q048 · short · exam · AHL · AHL 1.10 · 7 marks
    "t1-3-q048": {
      // EN: <p>(a) Find the first three terms of the expansion of <span class="chem">(8 - 3x)^{1/3}</span> in ascending powers of <span class="chem">x</span>. <strong>[4 marks]</strong><br>(b) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(c) Hence find an approximation for the cube root of 7.97, giving your answer to 6 decimal places. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 求 (Find) <span class=\"chem\">(8 - 3x)^{1/3}</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式的首三項。<strong>[4 marks]</strong><br>(b) 寫出 (State) 展開式有效的 <span class=\"chem\">x</span> 值範圍。<strong>[1 mark]</strong><br>(c) 由此求 (Hence find) 7.97 的立方根的近似值，答案須準確至 6 位小數。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Take out <span class="chem">8^{1/3}</span> first so the bracket starts with 1.
        "先抽出 <span class=\"chem\">8^{1/3}</span>，使括號以 1 開首。",
        // EN: For (c), solve <span class="chem">8 - 3x = 7.97</span> to find the value of <span class="chem">x</span> to substitute.
        "在 (c) 中，解 <span class=\"chem\">8 - 3x = 7.97</span> 以求出要代入的 <span class=\"chem\">x</span> 值。",
      ],
      // EN: <div class="worked__math">(a) 2 − <i>x</i>/4 − <i>x</i><sup>2</sup>/32 (b) |<i>x</i>| &lt; 8/3 (c) <i>x</i> = 0.01 ⇒ 1.997497</div>
      solution: "<div class=\"worked__math\">(a) 2 − <i>x</i>/4 − <i>x</i><sup>2</sup>/32 (b) |<i>x</i>| &lt; 8/3 (c) <i>x</i> = 0.01 ⇒ 1.997497</div>",
      // EN: <div class="worked__math">(a) (8 − 3<i>x</i>)<sup>1/3</sup> = 2(1 − <span class="frac"><span>3<i>x</i></span><span>8</span></span>)<sup>1/3</sup> = 2[1 + <span class="frac"><span>1</span><span>3</span></span>(−<span class="frac"><span>3<i>x</i></span><span>8</span></span>) + <span class="frac"><span>(1/3)(−2/3)</span><span>2</span></span>(−<span class="frac"><span>3<i>x</i></span><span>8</span></span>)<sup>2</sup> + …] = <b>2 − <span class="frac"><span><i>x</i></span><span>4</span></span> − <span class="frac"><span><i>x</i><sup>2</sup></span><span>32</span></span></b> + …</div><div class="worked__math">(b) |3<i>x</i>/8| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class="frac"><span>8</span><span>3</span></span></b></div><div class="worked__math">(c) 8 − 3<i>x</i> = 7.97 ⇒ <i>x</i> = 0.01: 2 − 0.0025 − 0.000003125 = 1.997496875 ≈ <b>1.997497</b></div>
      answer: "<div class=\"worked__math\">(a) (8 − 3<i>x</i>)<sup>1/3</sup> = 2(1 − <span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>)<sup>1/3</sup> = 2[1 + <span class=\"frac\"><span>1</span><span>3</span></span>(−<span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>) + <span class=\"frac\"><span>(1/3)(−2/3)</span><span>2</span></span>(−<span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>)<sup>2</sup> + …] = <b>2 − <span class=\"frac\"><span><i>x</i></span><span>4</span></span> − <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>32</span></span></b> + …</div><div class=\"worked__math\">(b) |3<i>x</i>/8| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class=\"frac\"><span>8</span><span>3</span></span></b></div><div class=\"worked__math\">(c) 8 − 3<i>x</i> = 7.97 ⇒ <i>x</i> = 0.01: 2 − 0.0025 − 0.000003125 = 1.997496875 ≈ <b>1.997497</b></div>",
      markscheme: [
        // EN: M1: Takes out the factor <span class="chem">8^{1/3} = 2</span>.
        "M1：抽出因子 <span class=\"chem\">8^{1/3} = 2</span>。",
        // EN: M1: Uses <span class="chem">n = 1/3</span> with <span class="chem">u = -3x/8</span>.
        "M1：使用 <span class=\"chem\">n = 1/3</span>，其中 <span class=\"chem\">u = -3x/8</span>。",
        // EN: A1: <span class="chem">2 - x/4</span>.
        "A1：<span class=\"chem\">2 - x/4</span>。",
        // EN: A1: <span class="chem">- x^2/32</span>.
        "A1：<span class=\"chem\">- x^2/32</span>。",
        // EN: A1: <span class="chem">|x| &lt; 8/3</span>.
        "A1：<span class=\"chem\">|x| &lt; 8/3</span>。",
        // EN: M1: Uses <span class="chem">x = 0.01</span> (from <span class="chem">8 - 3x = 7.97</span>).
        "M1：使用 <span class=\"chem\">x = 0.01</span>（由 <span class=\"chem\">8 - 3x = 7.97</span> 得出）。",
        // EN: A1: 1.997497.
        "A1：1.997497。",
      ],
    },

    // ── t1-3-q049 · numeric · exam · AHL · AHL 1.10, 1.11 · 6 marks
    "t1-3-q049": {
      // EN: <p>By first expressing <span class="chem">6 / ((1 - x)(2 + x))</span> in partial fractions, find the exact value of the coefficient of <span class="chem">x^3</span> in its expansion in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p>先把 <span class=\"chem\">6 / ((1 - x)(2 + x))</span> 表示為部分分式，然後求 (Find) 其按 <span class=\"chem\">x</span> 升冪排列的展開式中 <span class=\"chem\">x^3</span> 係數的準確值。</p>",
      hints: [
        // EN: <span class="chem">6 ≡ A(2 + x) + B(1 - x)</span>; substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span>.
        "<span class=\"chem\">6 ≡ A(2 + x) + B(1 - x)</span>；代入 <span class=\"chem\">x = 1</span> 及 <span class=\"chem\">x = -2</span>。",
        // EN: You should get <span class="chem">2/(1 - x) + 2/(2 + x)</span>. Write <span class="chem">2/(2 + x) = (1 + x/2)^{-1}</span>.
        "你應得出 <span class=\"chem\">2/(1 - x) + 2/(2 + x)</span>。寫出 <span class=\"chem\">2/(2 + x) = (1 + x/2)^{-1}</span>。",
        // EN: The <span class="chem">x^3</span> coefficients are 2 from <span class="chem">2(1 - x)^{-1}</span> and <span class="chem">(-1/2)^3</span> from <span class="chem">(1 + x/2)^{-1}</span>.
        "<span class=\"chem\">x^3</span> 的係數分別是來自 <span class=\"chem\">2(1 - x)^{-1}</span> 的 2 及來自 <span class=\"chem\">(1 + x/2)^{-1}</span> 的 <span class=\"chem\">(-1/2)^3</span>。",
      ],
      // EN: <div class="worked__math">6 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 2</div><div class="worked__math"><span class="frac"><span>2</span><span>1 − <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 + <i>x</i></span></span> = 2(1 − <i>x</i>)<sup>−1</sup> + (1 + <span class="frac"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup></div><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = 2 + (−<span class="frac"><span>1</span><span>2</span></span>)<sup>3</sup> = 2 − <span class="frac"><span>1</span><span>8</span></span> = <b><span class="frac"><span>15</span><span>8</span></span></b></div>
      solution: "<div class=\"worked__math\">6 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><span class=\"frac\"><span>2</span><span>1 − <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 + <i>x</i></span></span> = 2(1 − <i>x</i>)<sup>−1</sup> + (1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup></div><div class=\"worked__math\"><i>x</i><sup>3</sup> 的係數 = 2 + (−<span class=\"frac\"><span>1</span><span>2</span></span>)<sup>3</sup> = 2 − <span class=\"frac\"><span>1</span><span>8</span></span> = <b><span class=\"frac\"><span>15</span><span>8</span></span></b></div>",
    },

    // ── t1-3-q050 · short · exam · AHL · AHL 1.10, 1.11 · 7 marks
    "t1-3-q050": {
      // EN: <p>Let <span class="chem">g(x) = (5 - x) / ((1 + x)(1 - 2x))</span>.</p><p>(a) Express <span class="chem">g(x)</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence show that the coefficient of <span class="chem">x^n</span> in the expansion of <span class="chem">g(x)</span> in ascending powers of <span class="chem">x</span> is <span class="chem">2(-1)^n + 3 × 2^n</span>. <strong>[2 marks]</strong><br>(c) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(d) Write down the coefficient of <span class="chem">x^5</span>. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">g(x) = (5 - x) / ((1 + x)(1 - 2x))</span>。</p><p>(a) 把 <span class=\"chem\">g(x)</span> 表示為 (Express) 部分分式。<strong>[3 marks]</strong><br>(b) 由此證明 (Hence show that) <span class=\"chem\">g(x)</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式中 <span class=\"chem\">x^n</span> 的係數為 <span class=\"chem\">2(-1)^n + 3 × 2^n</span>。<strong>[2 marks]</strong><br>(c) 寫出 (State) 展開式有效的 <span class=\"chem\">x</span> 值範圍。<strong>[1 mark]</strong><br>(d) 寫出 (Write down) <span class=\"chem\">x^5</span> 的係數。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Use <span class="chem">x = -1</span> and <span class="chem">x = 1/2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.
        "利用 <span class=\"chem\">x = -1</span> 及 <span class=\"chem\">x = 1/2</span> 求 <span class=\"chem\">A</span> 和 <span class=\"chem\">B</span>。",
        // EN: <span class="chem">(1 + u)^{-1} = 1 - u + u^2 - u^3 + ...</span>, so the coefficient of <span class="chem">u^n</span> is <span class="chem">(-1)^n</span>.
        "<span class=\"chem\">(1 + u)^{-1} = 1 - u + u^2 - u^3 + ...</span>，因此 <span class=\"chem\">u^n</span> 的係數為 <span class=\"chem\">(-1)^n</span>。",
        // EN: Validity needs both <span class="chem">|x| &lt; 1</span> and <span class="chem">|2x| &lt; 1</span>.
        "有效範圍須同時滿足 <span class=\"chem\">|x| &lt; 1</span> 及 <span class=\"chem\">|2x| &lt; 1</span>。",
      ],
      // EN: <div class="worked__math">(a) 2/(1 + <i>x</i>) + 3/(1 − 2<i>x</i>) (c) |<i>x</i>| &lt; 1/2 (d) 2(−1) + 3(32) = 94</div>
      solution: "<div class=\"worked__math\">(a) 2/(1 + <i>x</i>) + 3/(1 − 2<i>x</i>) (c) |<i>x</i>| &lt; 1/2 (d) 2(−1) + 3(32) = 94</div>",
      // EN: <div class="worked__math">(a) 5 − <i>x</i> ≡ <i>A</i>(1 − 2<i>x</i>) + <i>B</i>(1 + <i>x</i>): <i>x</i> = −1 ⇒ 6 = 3<i>A</i> ⇒ <i>A</i> = 2; <i>x</i> = <span class="frac"><span>1</span><span>2</span></span> ⇒ <span class="frac"><span>9</span><span>2</span></span> = <span class="frac"><span>3</span><span>2</span></span><i>B</i> ⇒ <i>B</i> = 3; <i>g</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>3</span><span>1 − 2<i>x</i></span></span></div><div class="worked__math">(b) 2(1 + <i>x</i>)<sup>−1</sup> = 2∑(−1)<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, 3(1 − 2<i>x</i>)<sup>−1</sup> = 3∑2<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, so the coefficient is 2(−1)<sup><i>n</i></sup> + 3 × 2<sup><i>n</i></sup></div><div class="worked__math">(c) |<i>x</i>| &lt; <span class="frac"><span>1</span><span>2</span></span></div><div class="worked__math">(d) −2 + 96 = <b>94</b></div>
      answer: "<div class=\"worked__math\">(a) 5 − <i>x</i> ≡ <i>A</i>(1 − 2<i>x</i>) + <i>B</i>(1 + <i>x</i>): <i>x</i> = −1 ⇒ 6 = 3<i>A</i> ⇒ <i>A</i> = 2; <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <span class=\"frac\"><span>9</span><span>2</span></span> = <span class=\"frac\"><span>3</span><span>2</span></span><i>B</i> ⇒ <i>B</i> = 3; <i>g</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>3</span><span>1 − 2<i>x</i></span></span></div><div class=\"worked__math\">(b) 2(1 + <i>x</i>)<sup>−1</sup> = 2∑(−1)<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, 3(1 − 2<i>x</i>)<sup>−1</sup> = 3∑2<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>，因此係數為 2(−1)<sup><i>n</i></sup> + 3 × 2<sup><i>n</i></sup></div><div class=\"worked__math\">(c) |<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>2</span></span></div><div class=\"worked__math\">(d) −2 + 96 = <b>94</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">5 - x = A(1 - 2x) + B(1 + x)</span> (or cover-up).
        "M1：列出 <span class=\"chem\">5 - x = A(1 - 2x) + B(1 + x)</span>（或使用蓋住法）。",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1：<span class=\"chem\">A = 2</span>。",
        // EN: A1: <span class="chem">B = 3</span>.
        "A1：<span class=\"chem\">B = 3</span>。",
        // EN: M1: Writes the general terms <span class="chem">(1 + x)^{-1} = Σ(-1)^n x^n</span> and <span class="chem">(1 - 2x)^{-1} = Σ(2x)^n</span>.
        "M1：寫出通項 <span class=\"chem\">(1 + x)^{-1} = Σ(-1)^n x^n</span> 及 <span class=\"chem\">(1 - 2x)^{-1} = Σ(2x)^n</span>。",
        // EN: A1: Combines <span class="chem">2(-1)^n + 3(2^n)</span>. AG: the given coefficient; the given line itself earns no mark.
        "A1：合併得 <span class=\"chem\">2(-1)^n + 3(2^n)</span>。AG：題目所給的係數；寫出題目已給的結果本身不得分。",
        // EN: A1: <span class="chem">|x| &lt; 1/2</span>.
        "A1：<span class=\"chem\">|x| &lt; 1/2</span>。",
        // EN: A1: 94.
        "A1：94。",
      ],
    },

    // ── t1-3-q051 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q051": {
      // EN: <p>A student packing for a revision camp may take exactly 5 of her 9 different revision books: 4 on mathematics, 3 on physics and 2 on chemistry. Her teacher insists that every subject is represented among the books she takes. How many different selections of books can she make?</p>
      stem: "<p>一名學生為溫習營收拾行裝，她可從 9 本不同的溫習書中恰好帶 5 本：4 本數學、3 本物理及 2 本化學。老師堅持她所帶的書必須涵蓋每一個科目。她可以有多少種不同的選書方法？</p>",
      hints: [
        // EN: Decode: an unordered selection of 5 from 9 with the hidden condition “at least one book from each subject”. Listing cases is slow; use the complement: total − (selections missing a subject).
        "解碼：從 9 本中無序地選出 5 本，並附有隱含條件「每個科目至少一本」。逐一列出情況很慢；應使用補集：總數 −（缺少某科目的選法）。",
        // EN: Total: <span class="chem">9C5</span>. With no mathematics book, all 5 come from the other 5 books; with no physics, from 6; with no chemistry, from 7.
        "總數：<span class=\"chem\">9C5</span>。若沒有數學書，5 本都來自其餘 5 本書；若沒有物理書，則來自 6 本；若沒有化學書，則來自 7 本。",
        // EN: A selection of 5 cannot miss two subjects at once (at most 4 books would be left), so nothing is subtracted twice.
        "選出的 5 本書不可能同時缺少兩個科目（剩下的書最多只有 4 本），因此沒有任何選法被減去兩次。",
      ],
      // EN: <p><b>Decode:</b> “every subject represented” = complement of “some subject missing”.</p><div class="worked__math">Total: <sup>9</sup>C<sub>5</sub> = 126</div><div class="worked__math">No maths: <sup>5</sup>C<sub>5</sub> = 1; no physics: <sup>6</sup>C<sub>5</sub> = 6; no chemistry: <sup>7</sup>C<sub>5</sub> = 21</div><div class="worked__math">No selection misses two subjects (that leaves at most 4 books)</div><div class="worked__math">126 − (1 + 6 + 21) = <b>98</b></div>
      solution: "<p><b>解碼：</b>「涵蓋每個科目」=「缺少某科目」的補集。</p><div class=\"worked__math\">總數：<sup>9</sup>C<sub>5</sub> = 126</div><div class=\"worked__math\">沒有數學書：<sup>5</sup>C<sub>5</sub> = 1；沒有物理書：<sup>6</sup>C<sub>5</sub> = 6；沒有化學書：<sup>7</sup>C<sub>5</sub> = 21</div><div class=\"worked__math\">沒有選法會同時缺少兩個科目（否則最多只剩 4 本書）</div><div class=\"worked__math\">126 − (1 + 6 + 21) = <b>98</b></div>",
    },

    // ── t1-3-q052 · short · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q052": {
      // EN: <p>Let <span class="chem">n</span> and <span class="chem">r</span> be integers with <span class="chem">1 &lt;= r &lt;= n</span>.</p><p>(a) Prove that <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = <sup><i>n</i></sup>P<sub><i>r</i></sub> + <i>r</i> × <sup><i>n</i></sup>P<sub><i>r</i>−1</sub>. <strong>[4 marks]</strong><br>(b) By considering arrangements of <span class="chem">r</span> objects chosen from <span class="chem">n + 1</span> different objects, one of which is labelled X, explain why this identity is true. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">n</span> 和 <span class=\"chem\">r</span> 為整數，且 <span class=\"chem\">1 &lt;= r &lt;= n</span>。</p><p>(a) 證明 (Prove) <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = <sup><i>n</i></sup>P<sub><i>r</i></sub> + <i>r</i> × <sup><i>n</i></sup>P<sub><i>r</i>−1</sub>。<strong>[4 marks]</strong><br>(b) 考慮從 <span class=\"chem\">n + 1</span> 件不同物件（其中一件標記為 X）中選出 <span class=\"chem\">r</span> 件的排列，解釋 (Explain) 此恆等式為何成立。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is pure factorial algebra: write every term as a fraction of factorials and put them over one denominator. (b) asks for a counting argument: split the arrangements into two cases.
        "解碼：(a) 純粹是階乘的代數運算：把每一項寫成階乘的分數，並通分。(b) 要求一個計數論證：把排列分成兩種情況。",
        // EN: The common denominator is <span class="chem">(n - r + 1)!</span>, because <span class="chem">(n - r + 1)! = (n - r + 1) × (n - r)!</span>.
        "公分母是 <span class=\"chem\">(n - r + 1)!</span>，因為 <span class=\"chem\">(n - r + 1)! = (n - r + 1) × (n - r)!</span>。",
        // EN: In (b), the two cases are “X is not used” and “X is used”.
        "在 (b) 中，兩種情況是「沒有使用 X」及「使用了 X」。",
      ],
      // EN: <p><b>Decode:</b> “Prove” = algebra with factorials; “explain” = a two-case counting argument.</p><div class="worked__math">RHS = <span class="frac"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1 + <i>r</i>)</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = LHS</div>
      solution: "<p><b>解碼：</b>「證明」= 階乘的代數運算；「解釋」= 分兩種情況的計數論證。</p><div class=\"worked__math\">右方 = <span class=\"frac\"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1 + <i>r</i>)</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = 左方</div>",
      // EN: <div class="worked__math">(a) RHS = <span class="frac"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i>)!</span></span> + <i>r</i> <span class="frac"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1) + <i>r</i> <i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span><i>n</i>!(<i>n</i> + 1)</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <span class="frac"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = LHS</div><div class="worked__math">(b) Arrangements without X: <sup><i>n</i></sup>P<sub><i>r</i></sub>. Arrangements with X: choose X’s position (<i>r</i> ways), then arrange <i>r</i> − 1 of the other <i>n</i> objects in the remaining places (<sup><i>n</i></sup>P<sub><i>r</i>−1</sub> ways). These two cases cover all <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> arrangements exactly once.</div>
      answer: "<div class=\"worked__math\">(a) 右方 = <span class=\"frac\"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i>)!</span></span> + <i>r</i> <span class=\"frac\"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1) + <i>r</i> <i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span><i>n</i>!(<i>n</i> + 1)</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <span class=\"frac\"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = 左方</div><div class=\"worked__math\">(b) 不含 X 的排列：<sup><i>n</i></sup>P<sub><i>r</i></sub>. 含 X 的排列：選擇 X 的位置（<i>r</i> 種方法），然後把其他 <i>n</i> 件物件中的 <i>r</i> − 1 件排在餘下的位置（<sup><i>n</i></sup>P<sub><i>r</i>−1</sub> 種方法）。這兩種情況涵蓋全部 <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> 種排列，且每種恰好只計算一次。</div>",
      markscheme: [
        // EN: M1: Writes both terms on the right with factorials: <span class="chem">n!/(n - r)! + r × n!/(n - r + 1)!</span>.
        "M1：把右方兩項都以階乘寫出：<span class=\"chem\">n!/(n - r)! + r × n!/(n - r + 1)!</span>。",
        // EN: M1: Uses the common denominator <span class="chem">(n - r + 1)!</span>, using <span class="chem">(n - r + 1)! = (n - r + 1)(n - r)!</span>.
        "M1：使用公分母 <span class=\"chem\">(n - r + 1)!</span>，並利用 <span class=\"chem\">(n - r + 1)! = (n - r + 1)(n - r)!</span>。",
        // EN: A1: Simplifies the numerator to <span class="chem">n!(n + 1)</span>.
        "A1：把分子化簡為 <span class=\"chem\">n!(n + 1)</span>。",
        // EN: A1: Writes <span class="chem">(n + 1)!/(n + 1 - r)!</span> and identifies it as the left-hand side. AG: the identity; the given line itself earns no mark.
        "A1：寫出 <span class=\"chem\">(n + 1)!/(n + 1 - r)!</span>，並確認它就是左方。AG：該恆等式；寫出題目已給的結果本身不得分。",
        // EN: R1: Splits the arrangements into those that do not contain X, counted by <sup><i>n</i></sup>P<sub><i>r</i></sub>.
        "R1：把排列分成兩類，其中不含 X 的排列數目為 <sup><i>n</i></sup>P<sub><i>r</i></sub>。",
        // EN: R1: Explains that those containing X have <span class="chem">r</span> positions for X and <sup><i>n</i></sup>P<sub><i>r</i>−1</sub> ways to fill the rest.
        "R1：解釋含 X 的排列中，X 有 <span class=\"chem\">r</span> 個可能位置，而其餘位置有 <sup><i>n</i></sup>P<sub><i>r</i>−1</sub> 種填法。",
      ],
    },

    // ── t1-3-q053 · numeric · challenge · AHL · AHL 1.11 · 5 marks
    "t1-3-q053": {
      // EN: <p>A puzzle setter wants the expression <span class="chem">(ax + 7) / ((x - 1)(x + 2))</span>, where <span class="chem">a</span> is a constant, to split into partial fractions <span class="chem">A / (x - 1) + B / (x + 2)</span> whose two numerators are equal. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>一名謎題設計者希望表達式 <span class=\"chem\">(ax + 7) / ((x - 1)(x + 2))</span>（其中 <span class=\"chem\">a</span> 為常數）可分解為部分分式 <span class=\"chem\">A / (x - 1) + B / (x + 2)</span>，且兩個分子相等。求 (Find) <span class=\"chem\">a</span> 的值。</p>",
      hints: [
        // EN: Decode: the unknown is <span class="chem">a</span>, not <span class="chem">A</span> or <span class="chem">B</span>. Find <span class="chem">A</span> and <span class="chem">B</span> in terms of <span class="chem">a</span>, then impose the hidden condition <span class="chem">A = B</span>.
        "解碼：未知數是 <span class=\"chem\">a</span>，而不是 <span class=\"chem\">A</span> 或 <span class=\"chem\">B</span>。先以 <span class=\"chem\">a</span> 表示 <span class=\"chem\">A</span> 和 <span class=\"chem\">B</span>，然後加上隱含條件 <span class=\"chem\">A = B</span>。",
        // EN: <span class="chem">ax + 7 ≡ A(x + 2) + B(x - 1)</span>. Put <span class="chem">x = 1</span> and <span class="chem">x = -2</span>.
        "<span class=\"chem\">ax + 7 ≡ A(x + 2) + B(x - 1)</span>。代入 <span class=\"chem\">x = 1</span> 及 <span class=\"chem\">x = -2</span>。",
        // EN: You should get <span class="chem">3A = a + 7</span> and <span class="chem">3B = 2a - 7</span>.
        "你應得出 <span class=\"chem\">3A = a + 7</span> 及 <span class=\"chem\">3B = 2a - 7</span>。",
      ],
      // EN: <p><b>Decode:</b> express <i>A</i> and <i>B</i> in terms of <i>a</i>, then set <i>A</i> = <i>B</i>.</p><div class="worked__math"><i>ax</i> + 7 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math"><i>x</i> = 1: 3<i>A</i> = <i>a</i> + 7; <i>x</i> = −2: −3<i>B</i> = −2<i>a</i> + 7 ⇒ 3<i>B</i> = 2<i>a</i> − 7</div><div class="worked__math"><i>A</i> = <i>B</i> ⇒ <i>a</i> + 7 = 2<i>a</i> − 7 ⇒ <b><i>a</i> = 14</b> (then <i>A</i> = <i>B</i> = 7)</div>
      solution: "<p><b>解碼：</b>以 <i>a</i> 表示 <i>A</i> 和 <i>B</i>，然後令 <i>A</i> = <i>B</i>。</p><div class=\"worked__math\"><i>ax</i> + 7 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class=\"worked__math\"><i>x</i> = 1: 3<i>A</i> = <i>a</i> + 7; <i>x</i> = −2: −3<i>B</i> = −2<i>a</i> + 7 ⇒ 3<i>B</i> = 2<i>a</i> − 7</div><div class=\"worked__math\"><i>A</i> = <i>B</i> ⇒ <i>a</i> + 7 = 2<i>a</i> − 7 ⇒ <b><i>a</i> = 14</b> （此時 <i>A</i> = <i>B</i> = 7）</div>",
    },

    // ── t1-3-q054 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q054": {
      // EN: <p>When <span class="chem">(1 + ax)^n</span>, where <span class="chem">a</span> is a constant and <span class="chem">n</span> ∈ ℚ, <span class="chem">n != 0</span>, is expanded in ascending powers of <span class="chem">x</span>, the first three terms are <span class="chem">1 - 6x + 27x^2</span>. Find the coefficient of <span class="chem">x^3</span>.</p>
      stem: "<p>當 <span class=\"chem\">(1 + ax)^n</span>（其中 <span class=\"chem\">a</span> 為常數，<span class=\"chem\">n</span> ∈ ℚ，<span class=\"chem\">n != 0</span>）按 <span class=\"chem\">x</span> 升冪展開時，首三項為 <span class=\"chem\">1 - 6x + 27x^2</span>。求 (Find) <span class=\"chem\">x^3</span> 的係數。</p>",
      hints: [
        // EN: Decode: there are two unknowns, <span class="chem">a</span> and <span class="chem">n</span>, and two pieces of information (the <span class="chem">x</span> and <span class="chem">x^2</span> coefficients). Find both, then build the <span class="chem">x^3</span> term.
        "解碼：有兩個未知數 <span class=\"chem\">a</span> 和 <span class=\"chem\">n</span>，以及兩項資料（<span class=\"chem\">x</span> 和 <span class=\"chem\">x^2</span> 的係數）。先求出兩者，再建立 <span class=\"chem\">x^3</span> 項。",
        // EN: <span class="chem">na = -6</span> and <span class="chem">n(n - 1)a^2 / 2 = 27</span>. Divide the second by the square of the first to remove <span class="chem">a</span>.
        "<span class=\"chem\">na = -6</span> 及 <span class=\"chem\">n(n - 1)a^2 / 2 = 27</span>。把第二式除以第一式的平方以消去 <span class=\"chem\">a</span>。",
        // EN: <span class="chem">(n - 1)/n = 54/36</span> gives <span class="chem">n = -2</span>, so <span class="chem">a = 3</span>.
        "由 <span class=\"chem\">(n - 1)/n = 54/36</span> 得 <span class=\"chem\">n = -2</span>，因此 <span class=\"chem\">a = 3</span>。",
      ],
      // EN: <p><b>Decode:</b> two equations for two unknowns (<i>n</i>, <i>a</i>), then a third coefficient.</p><div class="worked__math"><i>na</i> = −6, <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 27 ⇒ <i>n</i>(<i>n</i> − 1)<i>a</i><sup>2</sup> = 54</div><div class="worked__math">Divide by <i>n</i><sup>2</sup><i>a</i><sup>2</sup> = 36: <span class="frac"><span><i>n</i> − 1</span><span><i>n</i></span></span> = <span class="frac"><span>3</span><span>2</span></span> ⇒ <i>n</i> = −2, <i>a</i> = 3</div><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <span class="frac"><span>(−2)(−3)(−4)</span><span>3!</span></span> × 3<sup>3</sup> = −4 × 27 = <b>−108</b></div>
      solution: "<p><b>解碼：</b>兩個未知數（<i>n</i>、<i>a</i>）的兩條方程，然後求第三個係數。</p><div class=\"worked__math\"><i>na</i> = −6, <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 27 ⇒ <i>n</i>(<i>n</i> − 1)<i>a</i><sup>2</sup> = 54</div><div class=\"worked__math\">除以 <i>n</i><sup>2</sup><i>a</i><sup>2</sup> = 36: <span class=\"frac\"><span><i>n</i> − 1</span><span><i>n</i></span></span> = <span class=\"frac\"><span>3</span><span>2</span></span> ⇒ <i>n</i> = −2, <i>a</i> = 3</div><div class=\"worked__math\"><i>x</i><sup>3</sup> 的係數 = <span class=\"frac\"><span>(−2)(−3)(−4)</span><span>3!</span></span> × 3<sup>3</sup> = −4 × 27 = <b>−108</b></div>",
    },

    // ── t1-3-q055 · short · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q055": {
      // EN: <p>(a) Show that <span class="chem">sqrt(2) = (7/5)(1 - 1/50)^{-1/2}</span>. <strong>[2 marks]</strong><br>(b) Hence, using the first three terms of the expansion of <span class="chem">(1 - x)^{-1/2}</span>, find an approximation for <span class="chem">sqrt(2)</span>, giving your answer to 5 decimal places. <strong>[4 marks]</strong></p>
      stem: "<p>(a) 證明 (Show that) <span class=\"chem\">sqrt(2) = (7/5)(1 - 1/50)^{-1/2}</span>。<strong>[2 marks]</strong><br>(b) 由此利用 <span class=\"chem\">(1 - x)^{-1/2}</span> 展開式的首三項，求 (Hence find) <span class=\"chem\">sqrt(2)</span> 的近似值，答案須準確至 5 位小數。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is surd manipulation; (b) asks why the strange-looking 1/50 is used: it is small, so the series with <span class="chem">x = 1/50</span> converges fast and three terms are enough.
        "解碼：(a) 是根式運算；(b) 解釋為何使用看似奇怪的 1/50：它很小，因此 <span class=\"chem\">x = 1/50</span> 的級數收斂得很快，三項便已足夠。",
        // EN: For (a), <span class="chem">(49/50)^{-1/2} = (50/49)^{1/2} = sqrt(50)/7</span>.
        "在 (a) 中，<span class=\"chem\">(49/50)^{-1/2} = (50/49)^{1/2} = sqrt(50)/7</span>。",
        // EN: For (b), <span class="chem">(1 - x)^{-1/2} = 1 + (-1/2)(-x) + ((-1/2)(-3/2)/2!)(-x)^2 + ...</span>
        "在 (b) 中，<span class=\"chem\">(1 - x)^{-1/2} = 1 + (-1/2)(-x) + ((-1/2)(-3/2)/2!)(-x)^2 + ...</span>",
      ],
      // EN: <p><b>Decode:</b> rewrite √2 as a constant times (1 + small number)<sup><i>n</i></sup>, then use a short series.</p><div class="worked__math">√2 = (7/5)(1 − 1/50)<sup>−1/2</sup> ≈ 1.4(1 + 0.01 + 0.00015) = 1.4 × 1.01015 = <b>1.41421</b></div>
      solution: "<p><b>解碼：</b>把 √2 改寫為常數乘以 (1 + 很小的數)<sup><i>n</i></sup>，然後使用一個短級數。</p><div class=\"worked__math\">√2 = (7/5)(1 − 1/50)<sup>−1/2</sup> ≈ 1.4(1 + 0.01 + 0.00015) = 1.4 × 1.01015 = <b>1.41421</b></div>",
      // EN: <div class="worked__math">(a) (1 − <span class="frac"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = (<span class="frac"><span>49</span><span>50</span></span>)<sup>−1/2</sup> = √(<span class="frac"><span>50</span><span>49</span></span>) = <span class="frac"><span>5√2</span><span>7</span></span>, so <span class="frac"><span>7</span><span>5</span></span>(1 − <span class="frac"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = √2</div><div class="worked__math">(b) (1 − <i>x</i>)<sup>−1/2</sup> ≈ 1 + <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>3</span><span>8</span></span><i>x</i><sup>2</sup>; <i>x</i> = 0.02: 1 + 0.01 + 0.00015 = 1.01015; √2 ≈ 1.4 × 1.01015 = <b>1.41421</b></div>
      answer: "<div class=\"worked__math\">(a) (1 − <span class=\"frac\"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = (<span class=\"frac\"><span>49</span><span>50</span></span>)<sup>−1/2</sup> = √(<span class=\"frac\"><span>50</span><span>49</span></span>) = <span class=\"frac\"><span>5√2</span><span>7</span></span>，因此 <span class=\"frac\"><span>7</span><span>5</span></span>(1 − <span class=\"frac\"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = √2</div><div class=\"worked__math\">(b) (1 − <i>x</i>)<sup>−1/2</sup> ≈ 1 + <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup>; <i>x</i> = 0.02: 1 + 0.01 + 0.00015 = 1.01015; √2 ≈ 1.4 × 1.01015 = <b>1.41421</b></div>",
      markscheme: [
        // EN: M1: Writes <span class="chem">1 - 1/50 = 49/50</span> and <span class="chem">(49/50)^{-1/2} = sqrt(50)/7</span>.
        "M1：寫出 <span class=\"chem\">1 - 1/50 = 49/50</span> 及 <span class=\"chem\">(49/50)^{-1/2} = sqrt(50)/7</span>。",
        // EN: A1: <span class="chem">sqrt(50) = 5sqrt(2)</span>, so <span class="chem">(7/5) × 5sqrt(2)/7 = sqrt(2)</span>. AG: the given result; the given line itself earns no mark.
        "A1：<span class=\"chem\">sqrt(50) = 5sqrt(2)</span>，因此 <span class=\"chem\">(7/5) × 5sqrt(2)/7 = sqrt(2)</span>。AG：題目所給的結果；寫出題目已給的結果本身不得分。",
        // EN: M1: Uses <span class="chem">n = -1/2</span> with <span class="chem">u = -x</span>.
        "M1：使用 <span class=\"chem\">n = -1/2</span>，其中 <span class=\"chem\">u = -x</span>。",
        // EN: A1: <span class="chem">1 + x/2 + 3x^2/8</span>.
        "A1：<span class=\"chem\">1 + x/2 + 3x^2/8</span>。",
        // EN: M1: Substitutes <span class="chem">x = 1/50 = 0.02</span> and multiplies by <span class="chem">7/5</span>.
        "M1：代入 <span class=\"chem\">x = 1/50 = 0.02</span> 並乘以 <span class=\"chem\">7/5</span>。",
        // EN: A1: 1.41421.
        "A1：1.41421。",
      ],
    },

    // ── t1-3-q056 · short · exam · AHL · AHL 1.10 · 16 marks
    "t1-3-q056": {
      // EN: <p>This question investigates the coefficients in the expansion of <span class="chem">(1 - x)^{-k}</span>, where <span class="chem">k</span> is a positive integer and <span class="chem">|x| &lt; 1</span>.</p><p>(a) Write down the expansion of <span class="chem">(1 - x)^{-1}</span> up to and including the term in <span class="chem">x^4</span>. <strong>[1 mark]</strong><br>(b) Find the expansions of <span class="chem">(1 - x)^{-2}</span> and <span class="chem">(1 - x)^{-3}</span>, each up to and including the term in <span class="chem">x^4</span>. <strong>[4 marks]</strong><br>(c) By comparing your coefficients with the entries of Pascal’s triangle, conjecture an expression, in the form <sup><i>p</i></sup>C<sub><i>q</i></sub>, for the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-3}</span>. <strong>[2 marks]</strong><br>(d) Prove that the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-k}</span> is <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>. <strong>[4 marks]</strong><br>(e) Hence find the coefficient of <span class="chem">x^{10}</span> in <span class="chem">(1 - x)^{-4}</span>. <strong>[2 marks]</strong><br>(f) Use your GDC to find the least value of <span class="chem">r</span> for which the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-4}</span> exceeds 10 000. <strong>[3 marks]</strong></p>
      stem: "<p>本題探究 <span class=\"chem\">(1 - x)^{-k}</span> 展開式中的係數，其中 <span class=\"chem\">k</span> 為正整數，且 <span class=\"chem\">|x| &lt; 1</span>。</p><p>(a) 寫出 (Write down) <span class=\"chem\">(1 - x)^{-1}</span> 的展開式，直至並包括 <span class=\"chem\">x^4</span> 項。<strong>[1 mark]</strong><br>(b) 求 (Find) <span class=\"chem\">(1 - x)^{-2}</span> 及 <span class=\"chem\">(1 - x)^{-3}</span> 的展開式，各自直至並包括 <span class=\"chem\">x^4</span> 項。<strong>[4 marks]</strong><br>(c) 把你的係數與帕斯卡三角形中的數比較，以 <sup><i>p</i></sup>C<sub><i>q</i></sub> 的形式猜想 (Conjecture) <span class=\"chem\">(1 - x)^{-3}</span> 中 <span class=\"chem\">x^r</span> 的係數的表達式。<strong>[2 marks]</strong><br>(d) 證明 (Prove) <span class=\"chem\">(1 - x)^{-k}</span> 中 <span class=\"chem\">x^r</span> 的係數為 <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>。<strong>[4 marks]</strong><br>(e) 由此求 (Hence find) <span class=\"chem\">(1 - x)^{-4}</span> 中 <span class=\"chem\">x^{10}</span> 的係數。<strong>[2 marks]</strong><br>(f) 利用 GDC 求 (Find) 使 <span class=\"chem\">(1 - x)^{-4}</span> 中 <span class=\"chem\">x^r</span> 的係數超過 10 000 的 <span class=\"chem\">r</span> 的最小值。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: In (b), write <span class="chem">(1 - x)^{-2}</span> as <span class="chem">(1 + u)^{-2}</span> with <span class="chem">u = -x</span>. Every term turns out positive.
        "在 (b) 中，把 <span class=\"chem\">(1 - x)^{-2}</span> 寫成 <span class=\"chem\">(1 + u)^{-2}</span>，其中 <span class=\"chem\">u = -x</span>。結果每一項都是正數。",
        // EN: In (c), the numbers 1, 3, 6, 10, 15 are the triangular numbers. Where do they sit in Pascal’s triangle?
        "在 (c) 中，數字 1、3、6、10、15 是三角形數。它們位於帕斯卡三角形的甚麼位置？",
        // EN: In (d), there are <span class="chem">r</span> negative factors in <span class="chem">(-k)(-k - 1)…</span> and another <span class="chem">(-1)^r</span> from <span class="chem">(-x)^r</span>.
        "在 (d) 中，<span class=\"chem\">(-k)(-k - 1)…</span> 有 <span class=\"chem\">r</span> 個負因數，另外 <span class=\"chem\">(-x)^r</span> 還帶來一個 <span class=\"chem\">(-1)^r</span>。",
        // EN: In (f), with <span class="chem">k = 4</span> the coefficient is <span class="chem">(r + 3)C3</span>. Tabulate it on your GDC.
        "在 (f) 中，當 <span class=\"chem\">k = 4</span> 時係數為 <span class=\"chem\">(r + 3)C3</span>。在 GDC 上把它列表。",
      ],
      // EN: <div class="worked__math">(b) 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup> (c) <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (e) 286 (f) <i>r</i> = 38</div>
      solution: "<div class=\"worked__math\">(b) 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup> (c) <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (e) 286 (f) <i>r</i> = 38</div>",
      // EN: <div class="worked__math">(a) 1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup> + <i>x</i><sup>4</sup></div><div class="worked__math">(b) (1 − <i>x</i>)<sup>−2</sup> = 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; (1 − <i>x</i>)<sup>−3</sup> = 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup></div><div class="worked__math">(c) 1, 3, 6, 10, 15 are <sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …: coefficient of <i>x</i><sup><i>r</i></sup> = <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (= <sup><i>r</i>+2</sup>C<sub>2</sub>)</div><div class="worked__math">(d) coefficient = <span class="frac"><span>(−<i>k</i>)(−<i>k</i> − 1)…(−<i>k</i> − <i>r</i> + 1)</span><span><i>r</i>!</span></span>(−1)<sup><i>r</i></sup> = <span class="frac"><span><i>k</i>(<i>k</i> + 1)…(<i>k</i> + <i>r</i> − 1)</span><span><i>r</i>!</span></span> = <span class="frac"><span>(<i>k</i> + <i>r</i> − 1)!</span><span><i>r</i>!(<i>k</i> − 1)!</span></span> = <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub></div><div class="worked__math">(e) <sup>13</sup>C<sub>10</sub> = <b>286</b></div><div class="worked__math">(f) need <sup><i>r</i>+3</sup>C<sub>3</sub> &gt; 10 000: <sup>40</sup>C<sub>3</sub> = 9880, <sup>41</sup>C<sub>3</sub> = 10 660 ⇒ <i>r</i> + 3 = 41 ⇒ <b><i>r</i> = 38</b></div>
      answer: "<div class=\"worked__math\">(a) 1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup> + <i>x</i><sup>4</sup></div><div class=\"worked__math\">(b) (1 − <i>x</i>)<sup>−2</sup> = 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; (1 − <i>x</i>)<sup>−3</sup> = 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup></div><div class=\"worked__math\">(c) 1, 3, 6, 10, 15 分別是 <sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>、…：<i>x</i><sup><i>r</i></sup> 的係數 = <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (= <sup><i>r</i>+2</sup>C<sub>2</sub>)</div><div class=\"worked__math\">(d) 係數 = <span class=\"frac\"><span>(−<i>k</i>)(−<i>k</i> − 1)…(−<i>k</i> − <i>r</i> + 1)</span><span><i>r</i>!</span></span>(−1)<sup><i>r</i></sup> = <span class=\"frac\"><span><i>k</i>(<i>k</i> + 1)…(<i>k</i> + <i>r</i> − 1)</span><span><i>r</i>!</span></span> = <span class=\"frac\"><span>(<i>k</i> + <i>r</i> − 1)!</span><span><i>r</i>!(<i>k</i> − 1)!</span></span> = <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub></div><div class=\"worked__math\">(e) <sup>13</sup>C<sub>10</sub> = <b>286</b></div><div class=\"worked__math\">(f) 需要 <sup><i>r</i>+3</sup>C<sub>3</sub> &gt; 10 000: <sup>40</sup>C<sub>3</sub> = 9880, <sup>41</sup>C<sub>3</sub> = 10 660 ⇒ <i>r</i> + 3 = 41 ⇒ <b><i>r</i> = 38</b></div>",
      markscheme: [
        // EN: A1: <span class="chem">1 + x + x^2 + x^3 + x^4</span>.
        "A1：<span class=\"chem\">1 + x + x^2 + x^3 + x^4</span>。",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = -2</span> and <span class="chem">u = -x</span>.
        "M1：使用廣義二項式展開，其中 <span class=\"chem\">n = -2</span> 及 <span class=\"chem\">u = -x</span>。",
        // EN: A1: <span class="chem">1 + 2x + 3x^2 + 4x^3 + 5x^4</span>.
        "A1：<span class=\"chem\">1 + 2x + 3x^2 + 4x^3 + 5x^4</span>。",
        // EN: M1: Uses <span class="chem">n = -3</span> and <span class="chem">u = -x</span>.
        "M1：使用 <span class=\"chem\">n = -3</span> 及 <span class=\"chem\">u = -x</span>。",
        // EN: A1: <span class="chem">1 + 3x + 6x^2 + 10x^3 + 15x^4</span>.
        "A1：<span class=\"chem\">1 + 3x + 6x^2 + 10x^3 + 15x^4</span>。",
        // EN: R1: Recognises 1, 3, 6, 10, 15 as a diagonal of Pascal’s triangle (<sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …).
        "R1：辨認出 1、3、6、10、15 是帕斯卡三角形的一條對角線（<sup>2</sup>C<sub>0</sub>、<sup>3</sup>C<sub>1</sub>、<sup>4</sup>C<sub>2</sub>、…）。",
        // EN: A1: Conjecture: coefficient of <span class="chem">x^r</span> is <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (or <sup><i>r</i>+2</sup>C<sub>2</sub>).
        "A1：猜想：<span class=\"chem\">x^r</span> 的係數為 <sup><i>r</i>+2</sup>C<sub><i>r</i></sub>（或 <sup><i>r</i>+2</sup>C<sub>2</sub>）。",
        // EN: M1: Writes the general term with <span class="chem">n = -k</span>: <span class="chem">((-k)(-k - 1)...(-k - r + 1)/r!)(-x)^r</span>.
        "M1：以 <span class=\"chem\">n = -k</span> 寫出通項：<span class=\"chem\">((-k)(-k - 1)...(-k - r + 1)/r!)(-x)^r</span>。",
        // EN: A1: The <span class="chem">r</span> negative signs cancel with <span class="chem">(-1)^r</span>, giving <span class="chem">k(k + 1)...(k + r - 1)/r!</span>.
        "A1：<span class=\"chem\">r</span> 個負號與 <span class=\"chem\">(-1)^r</span> 相消，得 <span class=\"chem\">k(k + 1)...(k + r - 1)/r!</span>。",
        // EN: M1: Multiplies numerator and denominator by <span class="chem">(k - 1)!</span>.
        "M1：分子和分母同乘以 <span class=\"chem\">(k - 1)!</span>。",
        // EN: A1: Obtains <span class="chem">(k + r - 1)!/(r!(k - 1)!)</span>. AG: <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>; the given line itself earns no mark.
        "A1：得出 <span class=\"chem\">(k + r - 1)!/(r!(k - 1)!)</span>。AG：<sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>；寫出題目已給的結果本身不得分。",
        // EN: M1: Uses <span class="chem">k = 4</span>, <span class="chem">r = 10</span>: <sup>13</sup>C<sub>10</sub>.
        "M1：使用 <span class=\"chem\">k = 4</span>、<span class=\"chem\">r = 10</span>：<sup>13</sup>C<sub>10</sub>。",
        // EN: A1: 286.
        "A1：286。",
        // EN: M1: Sets up <sup><i>r</i>+3</sup>C<sub><i>r</i></sub> &gt; 10 000 (or <span class="chem">(r + 1)(r + 2)(r + 3)/6 &gt; 10000</span>).
        "M1：列出 <sup><i>r</i>+3</sup>C<sub><i>r</i></sub> &gt; 10 000（或 <span class=\"chem\">(r + 1)(r + 2)(r + 3)/6 &gt; 10000</span>）。",
        // EN: A1: GDC values either side: 9880 at <span class="chem">r = 37</span> and 10 660 at <span class="chem">r = 38</span>.
        "A1：GDC 在兩側的值：<span class=\"chem\">r = 37</span> 時為 9880，<span class=\"chem\">r = 38</span> 時為 10 660。",
        // EN: A1: <span class="chem">r = 38</span>.
        "A1：<span class=\"chem\">r = 38</span>。",
      ],
    },

    // ── t1-3-q057 · short · challenge · AHL · AHL 1.11; SL 1.2 · 15 marks
    "t1-3-q057": {
      // EN: <p>This question uses partial fractions to investigate sums of the form <span class="chem">S_n = Σ_{r=1}^n 1/(r(r + k))</span>, where <span class="chem">k</span> is a positive integer. Start with <span class="chem">k = 2</span>.</p><p>(a) Express <span class="chem">1/(r(r + 2))</span> in partial fractions. <strong>[2 marks]</strong><br>(b) Use your GDC to find <span class="chem">S_1</span>, <span class="chem">S_2</span>, <span class="chem">S_3</span> and <span class="chem">S_4</span> for <span class="chem">k = 2</span>, as fractions. <strong>[2 marks]</strong><br>(c) Show that, for <span class="chem">k = 2</span>, <span class="chem">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>. <strong>[4 marks]</strong><br>(d) Hence write down the value of <span class="chem">S_∞</span> for <span class="chem">k = 2</span>. <strong>[1 mark]</strong><br>(e) Find the least value of <span class="chem">n</span> for which <span class="chem">S_n</span> is within 0.001 of <span class="chem">S_∞</span>, for <span class="chem">k = 2</span>. <strong>[3 marks]</strong><br>(f) By considering the partial fractions of <span class="chem">1/(r(r + 3))</span>, find the exact value of <span class="chem">S_∞</span> for <span class="chem">k = 3</span>. <strong>[3 marks]</strong></p>
      stem: "<p>本題利用部分分式探究形如 <span class=\"chem\">S_n = Σ_{r=1}^n 1/(r(r + k))</span> 的和，其中 <span class=\"chem\">k</span> 為正整數。先考慮 <span class=\"chem\">k = 2</span>。</p><p>(a) 把 <span class=\"chem\">1/(r(r + 2))</span> 表示為 (Express) 部分分式。<strong>[2 marks]</strong><br>(b) 對於 <span class=\"chem\">k = 2</span>，利用 GDC 求 (Find) <span class=\"chem\">S_1</span>、<span class=\"chem\">S_2</span>、<span class=\"chem\">S_3</span> 及 <span class=\"chem\">S_4</span>，以分數表示。<strong>[2 marks]</strong><br>(c) 證明 (Show that) 對於 <span class=\"chem\">k = 2</span>，<span class=\"chem\">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>。<strong>[4 marks]</strong><br>(d) 由此寫出 (Hence write down) <span class=\"chem\">k = 2</span> 時 <span class=\"chem\">S_∞</span> 的值。<strong>[1 mark]</strong><br>(e) 對於 <span class=\"chem\">k = 2</span>，求 (Find) 使 <span class=\"chem\">S_n</span> 與 <span class=\"chem\">S_∞</span> 相差在 0.001 以內的 <span class=\"chem\">n</span> 的最小值。<strong>[3 marks]</strong><br>(f) 考慮 <span class=\"chem\">1/(r(r + 3))</span> 的部分分式，求 (Find) <span class=\"chem\">k = 3</span> 時 <span class=\"chem\">S_∞</span> 的準確值。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: partial fractions turn each term into a difference, so most terms cancel (the sum “telescopes”). The investigation asks you to see which terms survive, and how that depends on <span class="chem">k</span>.
        "解碼：部分分式把每一項化為一個差，因此大部分項會互相抵消（和式「裂項相消」）。這個探究要求你看出哪些項保留下來，以及這與 <span class=\"chem\">k</span> 有何關係。",
        // EN: For (a), <span class="chem">1 ≡ A(r + 2) + Br</span>; put <span class="chem">r = 0</span> and <span class="chem">r = -2</span>.
        "在 (a) 中，<span class=\"chem\">1 ≡ A(r + 2) + Br</span>；代入 <span class=\"chem\">r = 0</span> 及 <span class=\"chem\">r = -2</span>。",
        // EN: For (c), list the brackets <span class="chem">(1 - 1/3), (1/2 - 1/4), (1/3 - 1/5), …</span>; the positive part of each bracket cancels a negative part two brackets earlier.
        "在 (c) 中，列出括號 <span class=\"chem\">(1 - 1/3), (1/2 - 1/4), (1/3 - 1/5), …</span>；每個括號的正數部分會與兩個括號之前的負數部分相消。",
        // EN: For (e), <span class="chem">S_∞ - S_n = (2n + 3)/(2(n + 1)(n + 2))</span>; tabulate it on your GDC near <span class="chem">n = 1000</span>.
        "在 (e) 中，<span class=\"chem\">S_∞ - S_n = (2n + 3)/(2(n + 1)(n + 2))</span>；在 GDC 上於 <span class=\"chem\">n = 1000</span> 附近列表。",
      ],
      // EN: <p><b>Decode:</b> each step uses the partial-fraction difference so that a sum of <i>n</i> terms collapses to a few surviving terms.</p><div class="worked__math">(a) ½(1/<i>r</i> − 1/(<i>r</i> + 2)) (b) 1/3, 11/24, 21/40, 17/30 (d) 3/4 (e) <i>n</i> = 999 (f) 11/18</div>
      solution: "<p><b>解碼：</b>每一步都利用部分分式得出的差，使 <i>n</i> 項之和收縮為少數保留下來的項。</p><div class=\"worked__math\">(a) ½(1/<i>r</i> − 1/(<i>r</i> + 2)) (b) 1/3, 11/24, 21/40, 17/30 (d) 3/4 (e) <i>n</i> = 999 (f) 11/18</div>",
      // EN: <div class="worked__math">(a) <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 2)</span></span> = <span class="frac"><span>1</span><span>2</span></span>(<span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 2</span></span>)</div><div class="worked__math">(b) <i>S</i><sub>1</sub> = <span class="frac"><span>1</span><span>3</span></span>, <i>S</i><sub>2</sub> = <span class="frac"><span>11</span><span>24</span></span>, <i>S</i><sub>3</sub> = <span class="frac"><span>21</span><span>40</span></span>, <i>S</i><sub>4</sub> = <span class="frac"><span>17</span><span>30</span></span></div><div class="worked__math">(c) the sum telescopes: everything cancels except 1 + <span class="frac"><span>1</span><span>2</span></span> at the start and −<span class="frac"><span>1</span><span><i>n</i> + 1</span></span> − <span class="frac"><span>1</span><span><i>n</i> + 2</span></span> at the end, so <i>S</i><sub><i>n</i></sub> = <span class="frac"><span>1</span><span>2</span></span>(<span class="frac"><span>3</span><span>2</span></span> − <span class="frac"><span>2<i>n</i> + 3</span><span>(<i>n</i> + 1)(<i>n</i> + 2)</span></span>)</div><div class="worked__math">(d) <i>S</i><sub>∞</sub> = <span class="frac"><span>3</span><span>4</span></span></div><div class="worked__math">(e) <span class="frac"><span>2<i>n</i> + 3</span><span>2(<i>n</i> + 1)(<i>n</i> + 2)</span></span> &lt; 0.001; GDC: <i>n</i> = 998 gives 0.0010005…, <i>n</i> = 999 gives 0.00099950… ⇒ <b><i>n</i> = 999</b></div><div class="worked__math">(f) <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 3)</span></span> = <span class="frac"><span>1</span><span>3</span></span>(<span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 3</span></span>); the terms 1, <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>1</span><span>3</span></span> survive: <i>S</i><sub>∞</sub> = <span class="frac"><span>1</span><span>3</span></span>(1 + <span class="frac"><span>1</span><span>2</span></span> + <span class="frac"><span>1</span><span>3</span></span>) = <b><span class="frac"><span>11</span><span>18</span></span></b></div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 2)</span></span> = <span class=\"frac\"><span>1</span><span>2</span></span>(<span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 2</span></span>)</div><div class=\"worked__math\">(b) <i>S</i><sub>1</sub> = <span class=\"frac\"><span>1</span><span>3</span></span>, <i>S</i><sub>2</sub> = <span class=\"frac\"><span>11</span><span>24</span></span>, <i>S</i><sub>3</sub> = <span class=\"frac\"><span>21</span><span>40</span></span>, <i>S</i><sub>4</sub> = <span class=\"frac\"><span>17</span><span>30</span></span></div><div class=\"worked__math\">(c) 和式裂項相消：除了開首的 1 + <span class=\"frac\"><span>1</span><span>2</span></span> 及末尾的 −<span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> − <span class=\"frac\"><span>1</span><span><i>n</i> + 2</span></span> 之外，其餘全部相消，因此 <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span>1</span><span>2</span></span>(<span class=\"frac\"><span>3</span><span>2</span></span> − <span class=\"frac\"><span>2<i>n</i> + 3</span><span>(<i>n</i> + 1)(<i>n</i> + 2)</span></span>)</div><div class=\"worked__math\">(d) <i>S</i><sub>∞</sub> = <span class=\"frac\"><span>3</span><span>4</span></span></div><div class=\"worked__math\">(e) <span class=\"frac\"><span>2<i>n</i> + 3</span><span>2(<i>n</i> + 1)(<i>n</i> + 2)</span></span> &lt; 0.001；GDC：<i>n</i> = 998 時為 0.0010005…，<i>n</i> = 999 時為 0.00099950… ⇒ <b><i>n</i> = 999</b></div><div class=\"worked__math\">(f) <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 3)</span></span> = <span class=\"frac\"><span>1</span><span>3</span></span>(<span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 3</span></span>)；項 1、<span class=\"frac\"><span>1</span><span>2</span></span>, <span class=\"frac\"><span>1</span><span>3</span></span> 保留下來：<i>S</i><sub>∞</sub> = <span class=\"frac\"><span>1</span><span>3</span></span>(1 + <span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>1</span><span>3</span></span>) = <b><span class=\"frac\"><span>11</span><span>18</span></span></b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">1 = A(r + 2) + Br</span> (or cover-up).
        "M1：列出 <span class=\"chem\">1 = A(r + 2) + Br</span>（或使用蓋住法）。",
        // EN: A1: <span class="chem">1/(2r) - 1/(2(r + 2))</span>.
        "A1：<span class=\"chem\">1/(2r) - 1/(2(r + 2))</span>。",
        // EN: A1: Any two of <span class="chem">1/3, 11/24, 21/40, 17/30</span> correct.
        "A1：<span class=\"chem\">1/3, 11/24, 21/40, 17/30</span> 中任意兩個正確。",
        // EN: A1: All four correct.
        "A1：四個全部正確。",
        // EN: M1: Writes out the first few and last few terms of <span class="chem">(1/2)Σ(1/r - 1/(r + 2))</span>.
        "M1：寫出 <span class=\"chem\">(1/2)Σ(1/r - 1/(r + 2))</span> 的首數項及末數項。",
        // EN: R1: Identifies the surviving terms <span class="chem">1 + 1/2</span> and <span class="chem">-1/(n + 1) - 1/(n + 2)</span>.
        "R1：找出保留下來的項 <span class=\"chem\">1 + 1/2</span> 及 <span class=\"chem\">-1/(n + 1) - 1/(n + 2)</span>。",
        // EN: M1: Combines <span class="chem">1/(n + 1) + 1/(n + 2) = (2n + 3)/((n + 1)(n + 2))</span>.
        "M1：合併 <span class=\"chem\">1/(n + 1) + 1/(n + 2) = (2n + 3)/((n + 1)(n + 2))</span>。",
        // EN: A1: Multiplies by <span class="chem">1/2</span>. AG: <span class="chem">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>; the given line itself earns no mark.
        "A1：乘以 <span class=\"chem\">1/2</span>。AG：<span class=\"chem\">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>；寫出題目已給的結果本身不得分。",
        // EN: A1: <span class="chem">S_∞ = 3/4</span>.
        "A1：<span class=\"chem\">S_∞ = 3/4</span>。",
        // EN: M1: Sets up <span class="chem">(2n + 3)/(2(n + 1)(n + 2)) &lt; 0.001</span>.
        "M1：列出 <span class=\"chem\">(2n + 3)/(2(n + 1)(n + 2)) &lt; 0.001</span>。",
        // EN: A1: GDC values either side of 0.001 (at <span class="chem">n = 998</span> and <span class="chem">n = 999</span>).
        "A1：GDC 在 0.001 兩側的值（於 <span class=\"chem\">n = 998</span> 及 <span class=\"chem\">n = 999</span>）。",
        // EN: A1: <span class="chem">n = 999</span>.
        "A1：<span class=\"chem\">n = 999</span>。",
        // EN: A1: <span class="chem">1/(r(r + 3)) = (1/3)(1/r - 1/(r + 3))</span>.
        "A1：<span class=\"chem\">1/(r(r + 3)) = (1/3)(1/r - 1/(r + 3))</span>。",
        // EN: R1: Explains that the first three positive terms <span class="chem">1, 1/2, 1/3</span> do not cancel and the remaining tail tends to 0.
        "R1：解釋首三個正數項 <span class=\"chem\">1, 1/2, 1/3</span> 不會相消，而餘下的尾項趨向 0。",
        // EN: A1: <span class="chem">S_∞ = 11/18</span>.
        "A1：<span class=\"chem\">S_∞ = 11/18</span>。",
      ],
    },

    // ── t1-3-q058 · short · challenge · AHL · AHL 1.10 · 14 marks
    "t1-3-q058": {
      // EN: <p>This question investigates how accurately the extended binomial theorem approximates square roots. Let <span class="chem">a</span> be a positive integer and <span class="chem">b</span> a real number.</p><p>(a) Show that <span class="chem">sqrt(a^2 + b) ≈ a + b/(2a) - b^2/(8a^3)</span>, using the first three terms of a binomial expansion. <strong>[3 marks]</strong><br>(b) State the condition on <span class="chem">b</span> for the full expansion to be valid. <strong>[1 mark]</strong><br>(c) Take <span class="chem">b = 1</span>. For <span class="chem">a = 4, 5, 6</span>, use (a) to approximate <span class="chem">sqrt(a^2 + 1)</span>, and use your GDC to find the error <span class="chem">E = sqrt(a^2 + 1) - (a + 1/(2a) - 1/(8a^3))</span> to 3 significant figures. <strong>[3 marks]</strong><br>(d) For each value of <span class="chem">a</span> in (c), calculate <span class="chem">a^5 E</span>. Hence suggest an approximate formula for <span class="chem">E</span> in terms of <span class="chem">a</span>. <strong>[2 marks]</strong><br>(e) By considering the next term of the expansion, justify your formula and generalise it to give an approximation for the error in terms of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[3 marks]</strong><br>(f) Use your GDC to find the least value of <span class="chem">a</span> for which the approximation in (a) of <span class="chem">sqrt(a^2 + 1)</span> has an error less than <span class="chem">10^{-8}</span>. <strong>[2 marks]</strong></p>
      stem: "<p>本題探究廣義二項式定理近似平方根的準確程度。設 <span class=\"chem\">a</span> 為正整數，<span class=\"chem\">b</span> 為實數。</p><p>(a) 利用二項式展開式的首三項，證明 (Show that) <span class=\"chem\">sqrt(a^2 + b) ≈ a + b/(2a) - b^2/(8a^3)</span>。<strong>[3 marks]</strong><br>(b) 寫出 (State) 使整個展開式有效的 <span class=\"chem\">b</span> 的條件。<strong>[1 mark]</strong><br>(c) 取 <span class=\"chem\">b = 1</span>。對於 <span class=\"chem\">a = 4, 5, 6</span>，利用 (a) 求 <span class=\"chem\">sqrt(a^2 + 1)</span> 的近似值，並利用 GDC 求誤差 <span class=\"chem\">E = sqrt(a^2 + 1) - (a + 1/(2a) - 1/(8a^3))</span>，答案準確至 3 位有效數字。<strong>[3 marks]</strong><br>(d) 對於 (c) 中 <span class=\"chem\">a</span> 的每個值，計算 <span class=\"chem\">a^5 E</span>。由此提出 (Hence suggest) 一條以 <span class=\"chem\">a</span> 表示 <span class=\"chem\">E</span> 的近似公式。<strong>[2 marks]</strong><br>(e) 考慮展開式的下一項，就你的公式提出理據 (Justify)，並把它推廣，得出以 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 表示的誤差近似式。<strong>[3 marks]</strong><br>(f) 利用 GDC 求 (Find) 使 (a) 中 <span class=\"chem\">sqrt(a^2 + 1)</span> 的近似值誤差小於 <span class=\"chem\">10^{-8}</span> 的 <span class=\"chem\">a</span> 的最小值。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the investigation compares a three-term binomial approximation with the GDC value, looks for a pattern in the errors, and then explains the pattern with the fourth term of the series.
        "解碼：這個探究把三項二項式近似值與 GDC 的值比較，找出誤差的規律，然後以級數的第四項解釋此規律。",
        // EN: In (a), write <span class="chem">a^2 + b = a^2(1 + b/a^2)</span>.
        "在 (a) 中，寫出 <span class=\"chem\">a^2 + b = a^2(1 + b/a^2)</span>。",
        // EN: In (c) and (d), keep full GDC precision: the errors are tiny.
        "在 (c) 和 (d) 中，保留 GDC 的全部精確度：誤差非常小。",
        // EN: In (e), the <span class="chem">u^3</span> coefficient of <span class="chem">(1 + u)^{1/2}</span> is <span class="chem">(1/2)(-1/2)(-3/2)/3!</span>.
        "在 (e) 中，<span class=\"chem\">(1 + u)^{1/2}</span> 的 <span class=\"chem\">u^3</span> 係數為 <span class=\"chem\">(1/2)(-1/2)(-3/2)/3!</span>。",
      ],
      // EN: <div class="worked__math">(a) <i>a</i> + <i>b</i>/(2<i>a</i>) − <i>b</i><sup>2</sup>/(8<i>a</i><sup>3</sup>) (b) |<i>b</i>| &lt; <i>a</i><sup>2</sup> (d) <i>E</i> ≈ 1/(16<i>a</i><sup>5</sup>) (e) <i>E</i> ≈ <i>b</i><sup>3</sup>/(16<i>a</i><sup>5</sup>) (f) <i>a</i> = 23</div>
      solution: "<div class=\"worked__math\">(a) <i>a</i> + <i>b</i>/(2<i>a</i>) − <i>b</i><sup>2</sup>/(8<i>a</i><sup>3</sup>) (b) |<i>b</i>| &lt; <i>a</i><sup>2</sup> (d) <i>E</i> ≈ 1/(16<i>a</i><sup>5</sup>) (e) <i>E</i> ≈ <i>b</i><sup>3</sup>/(16<i>a</i><sup>5</sup>) (f) <i>a</i> = 23</div>",
      // EN: <div class="worked__math">(a) √(<i>a</i><sup>2</sup> + <i>b</i>) = <i>a</i>(1 + <span class="frac"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>1/2</sup> ≈ <i>a</i>(1 + <span class="frac"><span><i>b</i></span><span>2<i>a</i><sup>2</sup></span></span> − <span class="frac"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>4</sup></span></span>) = <i>a</i> + <span class="frac"><span><i>b</i></span><span>2<i>a</i></span></span> − <span class="frac"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>3</sup></span></span></div><div class="worked__math">(b) |<i>b</i>/<i>a</i><sup>2</sup>| &lt; 1 ⇔ |<i>b</i>| &lt; <i>a</i><sup>2</sup></div><div class="worked__math">(c) <i>a</i> = 4: 4.123046875, <i>E</i> = 5.88 × 10<sup>−5</sup>; <i>a</i> = 5: 5.099, <i>E</i> = 1.95 × 10<sup>−5</sup>; <i>a</i> = 6: 6.0827546…, <i>E</i> = 7.90 × 10<sup>−6</sup></div><div class="worked__math">(d) <i>a</i><sup>5</sup><i>E</i> ≈ 0.0602, 0.0610, 0.0614: close to <span class="frac"><span>1</span><span>16</span></span> = 0.0625, so <i>E</i> ≈ <span class="frac"><span>1</span><span>16<i>a</i><sup>5</sup></span></span></div><div class="worked__math">(e) next term: <i>a</i> × <span class="frac"><span>(1/2)(−1/2)(−3/2)</span><span>3!</span></span>(<span class="frac"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>3</sup> = <span class="frac"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span>; the later terms are much smaller, so <i>E</i> ≈ <span class="frac"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span></div><div class="worked__math">(f) GDC: <i>a</i> = 22 gives <i>E</i> = 1.21 × 10<sup>−8</sup>, <i>a</i> = 23 gives <i>E</i> = 9.70 × 10<sup>−9</sup> ⇒ <b><i>a</i> = 23</b></div>
      answer: "<div class=\"worked__math\">(a) √(<i>a</i><sup>2</sup> + <i>b</i>) = <i>a</i>(1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>1/2</sup> ≈ <i>a</i>(1 + <span class=\"frac\"><span><i>b</i></span><span>2<i>a</i><sup>2</sup></span></span> − <span class=\"frac\"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>4</sup></span></span>) = <i>a</i> + <span class=\"frac\"><span><i>b</i></span><span>2<i>a</i></span></span> − <span class=\"frac\"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>3</sup></span></span></div><div class=\"worked__math\">(b) |<i>b</i>/<i>a</i><sup>2</sup>| &lt; 1 ⇔ |<i>b</i>| &lt; <i>a</i><sup>2</sup></div><div class=\"worked__math\">(c) <i>a</i> = 4: 4.123046875, <i>E</i> = 5.88 × 10<sup>−5</sup>; <i>a</i> = 5: 5.099, <i>E</i> = 1.95 × 10<sup>−5</sup>; <i>a</i> = 6: 6.0827546…, <i>E</i> = 7.90 × 10<sup>−6</sup></div><div class=\"worked__math\">(d) <i>a</i><sup>5</sup><i>E</i> ≈ 0.0602, 0.0610, 0.0614：接近 <span class=\"frac\"><span>1</span><span>16</span></span> = 0.0625，因此 <i>E</i> ≈ <span class=\"frac\"><span>1</span><span>16<i>a</i><sup>5</sup></span></span></div><div class=\"worked__math\">(e) 下一項：<i>a</i> × <span class=\"frac\"><span>(1/2)(−1/2)(−3/2)</span><span>3!</span></span>(<span class=\"frac\"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>3</sup> = <span class=\"frac\"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span>；之後的項小得多，因此 <i>E</i> ≈ <span class=\"frac\"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span></div><div class=\"worked__math\">(f) GDC: <i>a</i> = 22 時 <i>E</i> = 1.21 × 10<sup>−8</sup>, <i>a</i> = 23 時 <i>E</i> = 9.70 × 10<sup>−9</sup> ⇒ <b><i>a</i> = 23</b></div>",
      markscheme: [
        // EN: M1: Takes out the factor <span class="chem">a</span>: <span class="chem">sqrt(a^2 + b) = a(1 + b/a^2)^{1/2}</span>.
        "M1：抽出因子 <span class=\"chem\">a</span>：<span class=\"chem\">sqrt(a^2 + b) = a(1 + b/a^2)^{1/2}</span>。",
        // EN: M1: Uses <span class="chem">n = 1/2</span> with <span class="chem">u = b/a^2</span>.
        "M1：使用 <span class=\"chem\">n = 1/2</span>，其中 <span class=\"chem\">u = b/a^2</span>。",
        // EN: A1: Expands and multiplies by <span class="chem">a</span>. AG: <span class="chem">a + b/(2a) - b^2/(8a^3)</span>; the given line itself earns no mark.
        "A1：展開並乘以 <span class=\"chem\">a</span>。AG：<span class=\"chem\">a + b/(2a) - b^2/(8a^3)</span>；寫出題目已給的結果本身不得分。",
        // EN: A1: <span class="chem">|b| &lt; a^2</span>.
        "A1：<span class=\"chem\">|b| &lt; a^2</span>。",
        // EN: A1: Approximations 4.123046875, 5.099 and 6.0827546…
        "A1：近似值 4.123046875、5.099 及 6.0827546…",
        // EN: A1: Any two errors correct.
        "A1：任意兩個誤差正確。",
        // EN: A1: All three errors correct: <span class="chem">5.88 × 10^{-5}</span>, <span class="chem">1.95 × 10^{-5}</span>, <span class="chem">7.90 × 10^{-6}</span>.
        "A1：三個誤差全部正確：<span class=\"chem\">5.88 × 10^{-5}</span>、<span class=\"chem\">1.95 × 10^{-5}</span>、<span class=\"chem\">7.90 × 10^{-6}</span>。",
        // EN: A1: <span class="chem">a^5 E</span> values 0.0602, 0.0610, 0.0614.
        "A1：<span class=\"chem\">a^5 E</span> 的值為 0.0602、0.0610、0.0614。",
        // EN: R1: Suggests <span class="chem">E ≈ 1/(16a^5)</span> (or <span class="chem">E ≈ 0.06/a^5</span>).
        "R1：提出 <span class=\"chem\">E ≈ 1/(16a^5)</span>（或 <span class=\"chem\">E ≈ 0.06/a^5</span>）。",
        // EN: M1: Finds the coefficient of the <span class="chem">u^3</span> term: <span class="chem">(1/2)(-1/2)(-3/2)/3! = 1/16</span>.
        "M1：求 <span class=\"chem\">u^3</span> 項的係數：<span class=\"chem\">(1/2)(-1/2)(-3/2)/3! = 1/16</span>。",
        // EN: A1: Next term <span class="chem">b^3/(16a^5)</span>.
        "A1：下一項 <span class=\"chem\">b^3/(16a^5)</span>。",
        // EN: R1: States that the error is approximately this next term because the later terms are much smaller, so <span class="chem">E ≈ b^3/(16a^5)</span>.
        "R1：指出由於之後的項小得多，誤差約等於這下一項，因此 <span class=\"chem\">E ≈ b^3/(16a^5)</span>。",
        // EN: M1: Uses the GDC error values (or <span class="chem">1/(16a^5) &lt; 10^{-8}</span>) for consecutive values of <span class="chem">a</span>.
        "M1：對連續的 <span class=\"chem\">a</span> 值使用 GDC 的誤差值（或 <span class=\"chem\">1/(16a^5) &lt; 10^{-8}</span>）。",
        // EN: A1: <span class="chem">a = 23</span>.
        "A1：<span class=\"chem\">a = 23</span>。",
      ],
    },

    // ── t1-3-q059 · short · exam · AHL · AHL 1.10; SL 4.5 · 14 marks
    "t1-3-q059": {
      // EN: <p>This question investigates the number of ways to choose <span class="chem">k</span> seats from a row of <span class="chem">n</span> seats so that no two chosen seats are next to each other. Call this number <span class="chem">N(n, k)</span>.</p><p>(a) By listing, show that <span class="chem">N(5, 2) = 6</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">N(4, 2)</span>, <span class="chem">N(6, 2)</span> and <span class="chem">N(7, 2)</span>, and conjecture a formula for <span class="chem">N(n, 2)</span> in the form <sup><i>p</i></sup>C<sub>2</sub>. <strong>[2 marks]</strong><br>(c) By thinking of the <span class="chem">n - k</span> seats that are <strong>not</strong> chosen, explain why <span class="chem">N(n, k)</span> = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>. <strong>[3 marks]</strong><br>(d) Hence find <span class="chem">N(20, 4)</span>. <strong>[1 mark]</strong><br>(e) Four friends sit down at random in 4 of the 20 seats of an empty row. Find the probability that no two of them sit next to each other. <strong>[3 marks]</strong><br>(f) Four people sit at random in a row of <span class="chem">n</span> empty seats. Use your GDC to find the least value of <span class="chem">n</span> for which the probability that no two of them are next to each other exceeds 0.9. <strong>[3 marks]</strong></p>
      stem: "<p>本題探究從一行 <span class=\"chem\">n</span> 個座位中選出 <span class=\"chem\">k</span> 個座位、且任何兩個被選座位都不相鄰的方法數目。把這個數目記為 <span class=\"chem\">N(n, k)</span>。</p><p>(a) 以列舉的方法證明 (Show that) <span class=\"chem\">N(5, 2) = 6</span>。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">N(4, 2)</span>、<span class=\"chem\">N(6, 2)</span> 及 <span class=\"chem\">N(7, 2)</span>，並以 <sup><i>p</i></sup>C<sub>2</sub> 的形式猜想 (Conjecture) <span class=\"chem\">N(n, 2)</span> 的公式。<strong>[2 marks]</strong><br>(c) 考慮<strong>沒有</strong>被選中的 <span class=\"chem\">n - k</span> 個座位，解釋 (Explain) 為何 <span class=\"chem\">N(n, k)</span> = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>。<strong>[3 marks]</strong><br>(d) 由此求 (Hence find) <span class=\"chem\">N(20, 4)</span>。<strong>[1 mark]</strong><br>(e) 四位朋友隨機坐在一行 20 個空座位中的 4 個上。求 (Find) 他們之中沒有任何兩人相鄰而坐的概率。<strong>[3 marks]</strong><br>(f) 四個人隨機坐在一行 <span class=\"chem\">n</span> 個空座位上。利用 GDC 求 (Find) 使他們之中沒有任何兩人相鄰的概率超過 0.9 的 <span class=\"chem\">n</span> 的最小值。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: In (a), list the pairs in order: {1,3}, {1,4}, … and stop when you reach {3,5}.
        "在 (a) 中，按次序列出各對：{1,3}、{1,4}、…，直至 {3,5} 為止。",
        // EN: In (c), this is the gap method: draw the unchosen seats as <code>O _ O _ O</code> and place the chosen seats into the gaps.
        "在 (c) 中，這就是插空法：把未被選中的座位畫成 <code>O _ O _ O</code>，再把被選中的座位放入空位。",
        // EN: In (e), the seats chosen are an unordered set of 4 seats, all <span class="chem">20C4</span> sets equally likely.
        "在 (e) 中，被選中的座位是 4 個座位的無序集合，全部 <span class=\"chem\">20C4</span> 個集合的可能性相等。",
        // EN: In (f), tabulate <span class="chem">y = (x - 3)C4 / xC4</span> on your GDC; it increases with <span class="chem">x</span>.
        "在 (f) 中，在 GDC 上把 <span class=\"chem\">y = (x - 3)C4 / xC4</span> 列表；它隨 <span class=\"chem\">x</span> 遞增。",
      ],
      // EN: <div class="worked__math">(b) <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub> (d) 2380 (e) 2380/4845 ≈ 0.491 (f) <i>n</i> = 117</div>
      solution: "<div class=\"worked__math\">(b) <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub> (d) 2380 (e) 2380/4845 ≈ 0.491 (f) <i>n</i> = 117</div>",
      // EN: <div class="worked__math">(a) seats 1–5: {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}: 6 ways</div><div class="worked__math">(b) <i>N</i>(4, 2) = 3, <i>N</i>(6, 2) = 10, <i>N</i>(7, 2) = 15: these are <sup>3</sup>C<sub>2</sub>, <sup>5</sup>C<sub>2</sub>, <sup>6</sup>C<sub>2</sub>, so <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub></div><div class="worked__math">(c) the <i>n</i> − <i>k</i> unchosen seats form a row with <i>n</i> − <i>k</i> + 1 gaps (including both ends); putting at most one chosen seat in each gap keeps chosen seats apart, and every valid choice arises once, so <i>N</i>(<i>n</i>, <i>k</i>) = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub></div><div class="worked__math">(d) <sup>17</sup>C<sub>4</sub> = <b>2380</b></div><div class="worked__math">(e) P = <span class="frac"><span>2380</span><span><sup>20</sup>C<sub>4</sub></span></span> = <span class="frac"><span>2380</span><span>4845</span></span> ≈ <b>0.491</b> (the order of the friends cancels: 4! × 2380 / <sup>20</sup>P<sub>4</sub>)</div><div class="worked__math">(f) <span class="frac"><span><sup><i>n</i>−3</sup>C<sub>4</sub></span><span><sup><i>n</i></sup>C<sub>4</sub></span></span> &gt; 0.9; GDC: 0.8992… at <i>n</i> = 116, 0.9000… at <i>n</i> = 117 ⇒ <b><i>n</i> = 117</b></div>
      answer: "<div class=\"worked__math\">(a) 座位 1–5：{1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}：6 種方法</div><div class=\"worked__math\">(b) <i>N</i>(4, 2) = 3, <i>N</i>(6, 2) = 10, <i>N</i>(7, 2) = 15：它們分別是 <sup>3</sup>C<sub>2</sub>, <sup>5</sup>C<sub>2</sub>, <sup>6</sup>C<sub>2</sub>，因此 <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub></div><div class=\"worked__math\">(c) <i>n</i> − <i>k</i> 個未被選中的座位排成一行，形成 <i>n</i> − <i>k</i> + 1 個空位（包括兩端）；每個空位最多放一個被選中的座位，就能使被選中的座位互不相鄰，而每種符合條件的選法恰好出現一次，因此 <i>N</i>(<i>n</i>, <i>k</i>) = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub></div><div class=\"worked__math\">(d) <sup>17</sup>C<sub>4</sub> = <b>2380</b></div><div class=\"worked__math\">(e) P = <span class=\"frac\"><span>2380</span><span><sup>20</sup>C<sub>4</sub></span></span> = <span class=\"frac\"><span>2380</span><span>4845</span></span> ≈ <b>0.491</b>（朋友之間的次序會相消：4! × 2380 / <sup>20</sup>P<sub>4</sub>）</div><div class=\"worked__math\">(f) <span class=\"frac\"><span><sup><i>n</i>−3</sup>C<sub>4</sub></span><span><sup><i>n</i></sup>C<sub>4</sub></span></span> &gt; 0.9；GDC：<i>n</i> = 116 時為 0.8992…，<i>n</i> = 117 時為 0.9000… ⇒ <b><i>n</i> = 117</b></div>",
      markscheme: [
        // EN: M1: Systematic list of pairs from seats 1 to 5.
        "M1：有系統地列出座位 1 至 5 中的各對。",
        // EN: A1: The six pairs {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}. AG: <span class="chem">N(5, 2) = 6</span>.
        "A1：六對 {1,3}、{1,4}、{1,5}、{2,4}、{2,5}、{3,5}。AG：<span class=\"chem\">N(5, 2) = 6</span>。",
        // EN: A1: 3, 10, 15.
        "A1：3、10、15。",
        // EN: A1: Conjecture <sup><i>n</i>−1</sup>C<sub>2</sub>.
        "A1：猜想 <sup><i>n</i>−1</sup>C<sub>2</sub>。",
        // EN: R1: The <span class="chem">n - k</span> unchosen seats create <span class="chem">n - k + 1</span> gaps, including both ends.
        "R1：<span class=\"chem\">n - k</span> 個未被選中的座位形成 <span class=\"chem\">n - k + 1</span> 個空位，包括兩端。",
        // EN: R1: Chosen seats are non-adjacent exactly when each gap holds at most one chosen seat.
        "R1：被選中的座位互不相鄰，當且僅當每個空位最多容納一個被選中的座位。",
        // EN: R1: So a valid choice corresponds to choosing <span class="chem">k</span> of the <span class="chem">n - k + 1</span> gaps, giving <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>.
        "R1：因此每種符合條件的選法對應於從 <span class=\"chem\">n - k + 1</span> 個空位中選出 <span class=\"chem\">k</span> 個，得 <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>。",
        // EN: A1: 2380.
        "A1：2380。",
        // EN: M1: Uses <sup>20</sup>C<sub>4</sub> = 4845 as the number of equally likely sets of seats (or <sup>20</sup>P<sub>4</sub> with 4! × 2380).
        "M1：使用 <sup>20</sup>C<sub>4</sub> = 4845 作為等可能的座位集合數目（或使用 <sup>20</sup>P<sub>4</sub> 配合 4! × 2380）。",
        // EN: A1: <span class="chem">2380/4845</span>.
        "A1：<span class=\"chem\">2380/4845</span>。",
        // EN: A1: 0.491.
        "A1：0.491。",
        // EN: M1: Sets up <sup><i>n</i>−3</sup>C<sub>4</sub> / <sup><i>n</i></sup>C<sub>4</sub> &gt; 0.9.
        "M1：列出 <sup><i>n</i>−3</sup>C<sub>4</sub> / <sup><i>n</i></sup>C<sub>4</sub> &gt; 0.9。",
        // EN: A1: GDC values either side of 0.9 (at <span class="chem">n = 116</span> and <span class="chem">n = 117</span>).
        "A1：GDC 在 0.9 兩側的值（於 <span class=\"chem\">n = 116</span> 及 <span class=\"chem\">n = 117</span>）。",
        // EN: A1: <span class="chem">n = 117</span>.
        "A1：<span class=\"chem\">n = 117</span>。",
      ],
    },

  }
});
