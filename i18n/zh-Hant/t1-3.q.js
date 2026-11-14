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

    // ── t1-3-q004 · mcq · foundation · AHL · AHL 1.10 · 3 marks
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

    // ── t1-3-q009 · mcq · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q009": {
      // EN: <p>Eight distinct books—5 mathematics books and 3 physics books—are arranged on a shelf. In how many ways can they be arranged if no two physics books are next to each other?</p>
      stem: "<p>把 8 本不同的書（5 本數學書及 3 本物理書）排列在書架上。若沒有兩本物理書相鄰，共有多少種排列方法？</p>",
      options: [
        // EN: 14400
        "14400",
        // EN: 36000
        "36000",
        // EN: 2400
        "2400",
        // EN: 720
        "720",
      ],
      hints: [
        // EN: Use the Gap method: arrange the 5 mathematics books first in <span class="chem">5!</span> ways.
        "使用插空法：先排列 5 本數學書，有 <span class=\"chem\">5!</span> 種方法。",
        // EN: There are 6 gaps around the 5 math books. Place the 3 distinct physics books in <span class="chem">^6P_3</span> ways.
        "5 本數學書周圍有 6 個空位。把 3 本不同的物理書放入其中，有 <span class=\"chem\">^6P_3</span> 種方法。",
      ],
      // EN: <div class="worked__math">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>
      solution: "<div class=\"worked__math\">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>",
      misconception: {
        // EN (option B): 36000 comes from <span class="chem">8! - 6!3!</span>, which only subtracts arrangements where all 3 physics books are together, leaving cases where 2 physics books are adjacent.
        "1": "36000 來自 <span class=\"chem\">8! - 6!3!</span>，這只減去了 3 本物理書全部相鄰的排列，仍遺留了只有 2 本物理書相鄰的情況。",
        // EN (option C): 2400 uses <span class="chem">5! × ^6C_3</span> instead of <span class="chem">5! × ^6P_3</span>; the 3 physics books are distinct so their order in the gaps matters.
        "2": "2400 誤用了 <span class=\"chem\">5! × ^6C_3</span> 而非 <span class=\"chem\">5! × ^6P_3</span>；3 本物理書各不相同，它們在空位中的排列順序是重要的。",
        // EN (option D): 720 is <span class="chem">5! × 3!</span>, which forgets to choose 3 gaps out of the 6 available gaps.
        "3": "720 是 <span class=\"chem\">5! × 3!</span>，忘記了從 6 個可用空位中選出 3 個空位。",
      },
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

    // ── t1-3-q012 · mcq · exam · AHL · AHL 1.11 · 5 marks
    "t1-3-q012": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(2 + x) / ((1 - x)(1 + 2x))</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(2 + x) / ((1 - x)(1 + 2x))</span> 按 <span class=\"chem\">x</span> 升冪排列的展開式中 <span class=\"chem\">x^2</span> 的係數。</p>",
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
        "先作部分分式分解：<span class=\"chem\">A / (1 - x) + B / (1 + 2x)</span>。",
        // EN: You should get <span class="chem">A = 1</span> and <span class="chem">B = 1</span>. Now expand <span class="chem">(1 - x)^{-1} + (1 + 2x)^{-1}</span> up to <span class="chem">x^2</span>.
        "你應求得 <span class=\"chem\">A = 1</span> 及 <span class=\"chem\">B = 1</span>。現在把 <span class=\"chem\">(1 - x)^{-1} + (1 + 2x)^{-1}</span> 展開至 <span class=\"chem\">x^2</span> 項。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>",
      misconception: {
        // EN (option B): −3 comes from writing <span class="chem">(1 + 2x)^{-1} = 1 - 2x - 4x^2 + ...</span> instead of <span class="chem">1 - 2x + 4x^2 - ...</span>.
        "1": "−3 是由於誤把 <span class=\"chem\">(1 + 2x)^{-1} = 1 - 2x - 4x^2 + ...</span> 寫錯正負號，正確應為 <span class=\"chem\">1 - 2x + 4x^2 - ...</span>。",
        // EN (option C): 3 comes from forgetting to square the 2 in <span class="chem">(-2x)^2</span> or making a sign error on <span class="chem">B</span>.
        "2": "3 是由於在計算 <span class=\"chem\">(-2x)^2</span> 時忘記將 2 平方，或求 <span class=\"chem\">B</span> 時出現正負號錯誤。",
        // EN (option D): 1 is only the <span class="chem">x^2</span> coefficient from <span class="chem">(1 - x)^{-1}</span>. You still need to add the <span class="chem">4x^2</span> term from <span class="chem">(1 + 2x)^{-1}</span>, giving <span class="chem">1 + 4 = 5</span>.
        "3": "1 只是 <span class=\"chem\">(1 - x)^{-1}</span> 中 <span class=\"chem\">x^2</span> 的係數。你還要加上 <span class=\"chem\">(1 + 2x)^{-1}</span> 的 <span class=\"chem\">4x^2</span> 項，得 <span class=\"chem\">1 + 4 = 5</span>。",
      },
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

    // ── t1-3-q017 · short · challenge · AHL · AHL 1.10 & 1.11 · 7 marks
    "t1-3-q017": {
      // EN: <p>(a) Express <span class="chem">1 / (r(r + 1))</span> in partial fractions, and hence find a simplified expression for <span class="chem">Σ_{r=1}^n 1 / (r(r + 1))</span>. <strong>[3 marks]</strong><br>(b) Using the first three terms of the binomial expansion of <span class="chem">(1 + x)^{1/2}</span>, estimate <span class="chem">sqrt(0.98)</span> to 5 decimal places. <strong>[4 marks]</strong></p>
      stem: "<p>(a) 把 <span class=\"chem\">1 / (r(r + 1))</span> 表示為 (Express) 部分分式，由此求 (hence find) <span class=\"chem\">Σ_{r=1}^n 1 / (r(r + 1))</span> 的化簡表式。<strong>[3 marks]</strong><br>(b) 利用 <span class=\"chem\">(1 + x)^{1/2}</span> 二項式展開式的首三項，估算 <span class=\"chem\">sqrt(0.98)</span> 至小數點後 5 位。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: In (a), write out the first few terms of <span class="chem">(1/r - 1/(r+1))</span> to see the telescoping cancellation.
        "在 (a) 部中，寫出 <span class=\"chem\">(1/r - 1/(r+1))</span> 的首幾項以觀察對消（裂項相消）。",
        // EN: In (b), write <span class="chem">0.98 = 1 - 0.02</span> so <span class="chem">x = -0.02</span>.
        "在 (b) 部中，寫成 <span class=\"chem\">0.98 = 1 - 0.02</span>，即 <span class=\"chem\">x = -0.02</span>。",
      ],
      // EN: <div class="worked__math">(a) <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span> ⇒ ∑ = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <b><span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></b></div><div class="worked__math">(b) (1 − 0.02)<sup>1/2</sup> ≈ 1 + <span class="frac"><span>1</span><span>2</span></span>(−0.02) − <span class="frac"><span>1</span><span>8</span></span>(−0.02)<sup>2</sup> = 1 − 0.01 − 0.00005 = <b>0.98995</b></div>
      solution: "<div class=\"worked__math\">(a) <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span> ⇒ ∑ = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <b><span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></b></div><div class=\"worked__math\">(b) (1 − 0.02)<sup>1/2</sup> ≈ 1 + <span class=\"frac\"><span>1</span><span>2</span></span>(−0.02) − <span class=\"frac\"><span>1</span><span>8</span></span>(−0.02)<sup>2</sup> = 1 − 0.01 − 0.00005 = <b>0.98995</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">1 = A(r + 1) + Br</span> (or uses cover-up) to find the partial fractions.
        "M1：列出 <span class=\"chem\">1 = A(r + 1) + Br</span>（或用掩蓋法）求部分分式。",
        // EN: A1: <span class="chem">1/(r(r+1)) = 1/r - 1/(r+1)</span>.
        "A1：<span class=\"chem\">1/(r(r+1)) = 1/r - 1/(r+1)</span>。",
        // EN: A1: The telescoping sum collapses to <span class="chem">1 - 1/(n+1) = n / (n + 1)</span>.
        "A1：裂項相消後化簡為 <span class=\"chem\">1 - 1/(n+1) = n / (n + 1)</span>。",
        // EN: M1: Uses the binomial expansion with <span class="chem">n = 1/2</span>.
        "M1：使用 <span class=\"chem\">n = 1/2</span> 的二項式展開。",
        // EN: A1: <span class="chem">(1 + x)^{1/2} = 1 + (1/2)x - (1/8)x^2 + ...</span>.
        "A1：<span class=\"chem\">(1 + x)^{1/2} = 1 + (1/2)x - (1/8)x^2 + ...</span>。",
        // EN: M1: Substitutes <span class="chem">x = -0.02</span>.
        "M1：代入 <span class=\"chem\">x = -0.02</span>。",
        // EN: A1: <span class="chem">1 - 0.01 - 0.00005 = 0.98995</span>.
        "A1：<span class=\"chem\">1 - 0.01 - 0.00005 = 0.98995</span>。",
      ],
      // EN: <div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span>, so the sum telescopes: (1 − <span class="frac"><span>1</span><span>2</span></span>) + (<span class="frac"><span>1</span><span>2</span></span> − <span class="frac"><span>1</span><span>3</span></span>) + … + (<span class="frac"><span>1</span><span><i>n</i></span></span> − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span>) = <b><span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></b></div><div class="worked__math">(b)  (1 + <i>x</i>)<sup>1/2</sup> = 1 + <span class="frac"><span>1</span><span>2</span></span><i>x</i> − <span class="frac"><span>1</span><span>8</span></span><i>x</i><sup>2</sup> + …;  with <i>x</i> = −0.02:  √0.98 ≈ 1 − 0.01 − 0.00005 = <b>0.98995</b></div>
      answer: "<div class=\"worked__math\">(a)  <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span>，所以和式裂項相消： (1 − <span class=\"frac\"><span>1</span><span>2</span></span>) + (<span class=\"frac\"><span>1</span><span>2</span></span> − <span class=\"frac\"><span>1</span><span>3</span></span>) + … + (<span class=\"frac\"><span>1</span><span><i>n</i></span></span> − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span>) = <b><span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></b></div><div class=\"worked__math\">(b)  (1 + <i>x</i>)<sup>1/2</sup> = 1 + <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> − <span class=\"frac\"><span>1</span><span>8</span></span><i>x</i><sup>2</sup> + …；代入 <i>x</i> = −0.02:  √0.98 ≈ 1 − 0.01 − 0.00005 = <b>0.98995</b></div>",
    },

    // ── t1-3-q018 · mcq · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q018": {
      // EN: <p>Four couples (8 people) sit in a row of 8 chairs. In how many ways can they be seated if each couple must sit together?</p>
      stem: "<p>四對情侶（共 8 人）排成一列坐在 8 張椅子上。若每對情侶必須坐在一起，共有多少種就坐方法？</p>",
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
        "把每對情侶捆綁成一個單位（共 4 個單位）。排列這 4 個單位有多少種方法？",
        // EN: Multiply by <span class="chem">2!</span> for each of the 4 couples: <span class="chem">4! × (2!)^4</span>.
        "每對情侶內部均可互換位置（<span class=\"chem\">2!</span>），共 4 對，故乘以 <span class=\"chem\">4! × (2!)^4</span>。",
      ],
      // EN: <div class="worked__math">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>
      solution: "<div class=\"worked__math\">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>",
      misconception: {
        // EN (option B): 48 is <span class="chem">4! × 2</span>, which only multiplies by 2 once instead of <span class="chem">2!</span> for each of the 4 couples (<span class="chem">2^4</span>).
        "1": "48 是 <span class=\"chem\">4! × 2</span>，只乘了一次 2，而沒有為 4 對情侶各自乘以 <span class=\"chem\">2!</span>（即 <span class=\"chem\">2^4</span>）。",
        // EN (option C): 24 is <span class="chem">4!</span>, which arranges the 4 couples but forgets that the two people inside each couple can swap seats.
        "2": "24 是 <span class=\"chem\">4!</span>，只排列了 4 對情侶，卻忘記每對情侶內的兩人可以互換座位。",
        // EN (option D): 1152 is <span class="chem">4! × 4! × 2</span>, mixing up the internal swap factor.
        "3": "1152 是 <span class=\"chem\">4! × 4! × 2</span>，混淆了內部互換的因子。",
      },
    },

  }
});
