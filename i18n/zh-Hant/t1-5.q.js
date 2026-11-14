/* t1-5.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-5.q', {
  questions: {

    // ── t1-5-q001 · mcq · foundation · SL · SL 1.6 · 2 marks
    "t1-5-q001": {
      // EN: To prove that <span class="chem">x^2 - 8x + 21 &gt;= 5</span> for all <span class="chem">x in mathbb{R}</span>, which completed-square form directly establishes the result?
      stem: "要證明對所有 <span class=\"chem\">x in mathbb{R}</span>，<span class=\"chem\">x^2 - 8x + 21 &gt;= 5</span>，下列哪個配方形式能直接確立結果？",
      options: [
        // EN: <span class="chem">(x - 4)^2 + 5</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x in mathbb{R}</span>, the expression is <span class="chem">&gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 5</span>，而因為對所有 <span class=\"chem\">x in mathbb{R}</span> 皆有 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>，故該表式 <span class=\"chem\">&gt;= 5</span>。",
        // EN: <span class="chem">(x - 4)^2 + 21</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span>, the expression is <span class="chem">&gt;= 21 &gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 21</span>，而因為 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>，故該表式 <span class=\"chem\">&gt;= 21 &gt;= 5</span>。",
        // EN: <span class="chem">(x - 8)^2 - 43</span>, which has minimum value <span class="chem">5</span>.
        "<span class=\"chem\">(x - 8)^2 - 43</span>，其最小值為 <span class=\"chem\">5</span>。",
        // EN: Substitute <span class="chem">x = 0, 1, 2, 3, 4</span> and observe that every output is at least <span class="chem">5</span>.
        "代入 <span class=\"chem\">x = 0, 1, 2, 3, 4</span>，並觀察到每個輸出值皆不少於 <span class=\"chem\">5</span>。",
      ],
      hints: [
        // EN: Complete the square on <span class="chem">x^2 - 8x + 21</span> by halving the coefficient of <span class="chem">x</span>.
        "把 <span class=\"chem\">x</span> 的係數減半，對 <span class=\"chem\">x^2 - 8x + 21</span> 進行配方。",
        // EN: <span class="chem">x^2 - 8x + 21 = (x - 4)^2 - 16 + 21 = (x - 4)^2 + 5</span>.
        "<span class=\"chem\">x^2 - 8x + 21 = (x - 4)^2 - 16 + 21 = (x - 4)^2 + 5</span>。",
      ],
      // EN: <p>Completing the square gives <span class="chem">x^2 - 8x + 21 == (x - 4)^2 + 5</span>. Since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x in mathbb{R}</span>, we have <span class="chem">(x - 4)^2 + 5 &gt;= 5</span>.</p>
      solution: "<p>配方得 <span class=\"chem\">x^2 - 8x + 21 == (x - 4)^2 + 5</span>。因為對所有 <span class=\"chem\">x in mathbb{R}</span> 皆有 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>，所以 <span class=\"chem\">(x - 4)^2 + 5 &gt;= 5</span>。</p>",
      misconception: {
        // EN (option B): When completing the square on x² − 8x + 21, you must subtract (−4)² = 16: (x − 4)² − 16 + 21 = (x − 4)² + 5.
        "1": "對 x² − 8x + 21 配方時，必須減去 (−4)² = 16：(x − 4)² − 16 + 21 = (x − 4)² + 5。",
        // EN (option C): Half of the coefficient of x is −8/2 = −4, not −8.
        "2": "x 係數的一半是 −8/2 = −4，而不是 −8。",
        // EN (option D): Testing a finite list of numerical values never constitutes a deductive proof for all real numbers x ∈ ℝ.
        "3": "測試有限個數值絕不能構成對所有實數 x ∈ ℝ 成立的演繹證明。",
      },
    },

    // ── t1-5-q002 · numeric · foundation · SL · SL 1.6 · 3 marks
    "t1-5-q002": {
      // EN: The sum of the squares of any three consecutive integers <span class="chem">(n - 1)^2 + n^2 + (n + 1)^2</span> can be written in the form <span class="chem">A n^2 + B</span>, where <span class="chem">A, B in mathbb{Z}</span>. Find the value of <span class="chem">A + B</span>.
      stem: "任意三個連續整數的平方和 <span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2</span> 可寫成 <span class=\"chem\">A n^2 + B</span> 的形式，其中 <span class=\"chem\">A, B in mathbb{Z}</span>。求 (Find) <span class=\"chem\">A + B</span> 的值。",
      hints: [
        // EN: Expand <span class="chem">(n - 1)^2 = n^2 - 2n + 1</span> and <span class="chem">(n + 1)^2 = n^2 + 2n + 1</span>.
        "展開 <span class=\"chem\">(n - 1)^2 = n^2 - 2n + 1</span> 及 <span class=\"chem\">(n + 1)^2 = n^2 + 2n + 1</span>。",
        // EN: Add all three terms: the <span class="chem">-2n</span> and <span class="chem">+2n</span> cancel, leaving <span class="chem">3n^2 + 2</span>.
        "將三項相加：<span class=\"chem\">-2n</span> 與 <span class=\"chem\">+2n</span> 抵消，剩下 <span class=\"chem\">3n^2 + 2</span>。",
      ],
      // EN: <p><span class="chem">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>. Thus <span class="chem">A = 3, B = 2</span> and <span class="chem">A + B = 5</span>.</p>
      solution: "<p><span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>。因此 <span class=\"chem\">A = 3, B = 2</span>，故 <span class=\"chem\">A + B = 5</span>。</p>",
    },

    // ── t1-5-q003 · order · exam · SL · SL 1.6 · 3 marks
    "t1-5-q003": {
      // EN: Arrange the steps in logical <span class="chem">LHS -&gt; RHS</span> order to prove the algebraic identity <span class="chem">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> for <span class="chem">n in mathbb{Z}^+</span>.
      stem: "把下列步驟按合乎邏輯的 <span class=\"chem\">LHS -&gt; RHS</span> 順序排列，以證明對 <span class=\"chem\">n in mathbb{Z}^+</span>，代數恒等式 <span class=\"chem\">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> 成立。",
      options: [
        // EN: Start with the left-hand side: <span class="chem">LHS = 1 / (n(n + 1)) + 1 / ((n + 1)(n + 2))</span>.
        "從左方出發：<span class=\"chem\">LHS = 1 / (n(n + 1)) + 1 / ((n + 1)(n + 2))</span>。",
        // EN: Rewrite over the common denominator <span class="chem">n(n + 1)(n + 2)</span>: <span class="chem">= ((n + 2) + n) / (n(n + 1)(n + 2))</span>.
        "通分至公分母 <span class=\"chem\">n(n + 1)(n + 2)</span>：<span class=\"chem\">= ((n + 2) + n) / (n(n + 1)(n + 2))</span>。",
        // EN: Collect like terms in the numerator and factor out 2: <span class="chem">= (2n + 2) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2))</span>.
        "合併分子同類項並抽出公因數 2：<span class=\"chem\">= (2n + 2) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2))</span>。",
        // EN: Cancel the non-zero common factor <span class="chem">(n + 1)</span> to obtain <span class="chem">2 / (n(n + 2)) = RHS</span>.
        "約去非零公因式 <span class=\"chem\">(n + 1)</span> 得 <span class=\"chem\">2 / (n(n + 2)) = RHS</span>。",
      ],
      hints: [
        // EN: In a direct proof of an identity, always state <span class="chem">LHS</span> first rather than assuming <span class="chem">LHS = RHS</span>.
        "在直接證明恒等式時，務必先寫出 <span class=\"chem\">LHS</span>，切勿假設 <span class=\"chem\">LHS = RHS</span>。",
        // EN: Put the two fractions over a common denominator, factor the numerator as <span class="chem">2(n + 1)</span>, and cancel <span class="chem">(n + 1)</span>.
        "把兩個分式通分，把分子因式分解為 <span class=\"chem\">2(n + 1)</span>，然後約去 <span class=\"chem\">(n + 1)</span>。",
      ],
      // EN: <p><span class="chem">LHS = ((n + 2) + n) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2)) = 2 / (n(n + 2)) = RHS</span>.</p>
      solution: "<p><span class=\"chem\">LHS = ((n + 2) + n) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2)) = 2 / (n(n + 2)) = RHS</span>。</p>",
    },

    // ── t1-5-q004 · short · exam · SL · SL 1.6 · 4 marks
    "t1-5-q004": {
      // EN: Prove algebraically that the product of any two odd integers subtracted from the square of an even integer is always an odd integer. [4 marks]
      stem: "用代數方法證明 (Prove) 一個偶數的平方減去任意兩個奇數之積，結果恒為一個奇數。[4 marks]",
      hints: [
        // EN: Be careful to use <strong>different letters</strong> (<span class="chem">2a + 1, 2b + 1, 2c</span>) because the question says "any two odd integers" and "an even integer" (not necessarily related to the same <span class="chem">n</span>!).
        "小心必須使用<strong>不同字母</strong>（<span class=\"chem\">2a + 1, 2b + 1, 2c</span>），因為題目說的是「任意兩個奇數」與「一個偶數」（不一定與同一個 <span class=\"chem\">n</span> 有關！）。",
        // EN: Expand <span class="chem">(2c)^2 - (2a + 1)(2b + 1)</span> and rewrite it in the form <span class="chem">2k + 1</span> (or <span class="chem">2k - 1</span>).
        "展開 <span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1)</span> 並改寫為 <span class=\"chem\">2k + 1</span>（或 <span class=\"chem\">2k - 1</span>）的形式。",
      ],
      // EN: <p>Using <span class="chem">2n + 1</span> for all three numbers only proves the special case where the integers are consecutive! Using distinct <span class="chem">a, b, c in mathbb{Z}</span> gives <span class="chem">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>, which is odd.</p>
      solution: "<p>若對三個數都使用同一個 <span class=\"chem\">2n + 1</span>，只會證明連續整數的特殊情況！使用相異整數 <span class=\"chem\">a, b, c in mathbb{Z}</span> 得 <span class=\"chem\">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>，必為奇數。</p>",
      // EN: <p>Let the two odd integers be <span class="chem">2a + 1</span> and <span class="chem">2b + 1</span>, and the even integer be <span class="chem">2c</span>, where <span class="chem">a, b, c in mathbb{Z}</span>.<br><span class="chem">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br>Since <span class="chem">k = 2c^2 - 2ab - a - b - 1 in mathbb{Z}</span>, the expression is of the form <span class="chem">2k + 1</span>, which is always an odd integer.</p>
      answer: "<p>設該兩個奇數為 <span class=\"chem\">2a + 1</span> 及 <span class=\"chem\">2b + 1</span>，而該偶數為 <span class=\"chem\">2c</span>，其中 <span class=\"chem\">a, b, c in mathbb{Z}</span>。<br><span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>。<br>因為 <span class=\"chem\">k = 2c^2 - 2ab - a - b - 1 in mathbb{Z}</span>，該表式形如 <span class=\"chem\">2k + 1</span>，故恒為奇數。</p>",
      markscheme: [
        // EN: M1: Represents two general odd integers using distinct variables (e.g. 2a + 1 and 2b + 1) and an even integer (2c) for a, b, c ∈ ℤ.
        "M1：使用相異變數表示兩個一般奇數（例如 2a + 1 與 2b + 1）及一個偶數（2c），其中 a, b, c ∈ ℤ。",
        // EN: A1: Correctly expands (2c)² − (2a + 1)(2b + 1) = 4c² − 4ab − 2a − 2b − 1.
        "A1：正確展開 (2c)² − (2a + 1)(2b + 1) = 4c² − 4ab − 2a − 2b − 1。",
        // EN: M1: Factors into the form 2(integer) − 1 or 2(integer) + 1.
        "M1：因式分解為 2(整數) − 1 或 2(整數) + 1 的形式。",
        // EN: R1: Concludes that since 2c² − 2ab − a − b − 1 ∈ ℤ, the result is an odd integer.
        "R1：總結因為 2c² − 2ab − a − b − 1 ∈ ℤ，所以結果為奇數。",
      ],
    },

    // ── t1-5-q005 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q005": {
      // EN: In a proof by mathematical induction for <span class="chem">n in mathbb{Z}^+</span>, which wording of the inductive hypothesis earns full IB reasoning credit?
      stem: "在對 <span class=\"chem\">n in mathbb{Z}^+</span> 進行的數學歸納法證明中，哪種歸納假設的措辭能取得 IB 滿分推理分？",
      options: [
        // EN: “Assume <span class="chem">P(k)</span> is true for some <span class="chem">k in mathbb{Z}^+</span>.”
        "「假設對某 <span class=\"chem\">k in mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立。」",
        // EN: “Assume <span class="chem">P(k)</span> is true for all <span class="chem">k in mathbb{Z}^+</span>.”
        "「假設對所有 <span class=\"chem\">k in mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立。」",
        // EN: “Suppose <span class="chem">P(n)</span> is true for <span class="chem">n = k + 1</span>.”
        "「假設當 <span class=\"chem\">n = k + 1</span> 時，<span class=\"chem\">P(n)</span> 成立。」",
        // EN: “Since <span class="chem">P(1)</span> and <span class="chem">P(2)</span> are true, <span class="chem">P(k)</span> is true.”
        "「因為 <span class=\"chem\">P(1)</span> 與 <span class=\"chem\">P(2)</span> 成立，所以 <span class=\"chem\">P(k)</span> 成立。」",
      ],
      hints: [
        // EN: Remember the domino analogy: you only assume that one particular domino <span class="chem">k</span> falls, and show it knocks over <span class="chem">k + 1</span>.
        "回想骨牌比喻：你只假設某一塊骨牌 <span class=\"chem\">k</span> 倒下，再證明它會推倒第 <span class=\"chem\">k + 1</span> 塊。",
        // EN: Distinguish carefully between "for some <span class="chem">k in mathbb{Z}^+</span>" and "for all <span class="chem">k in mathbb{Z}^+</span>".
        "仔細分辨「對某 <span class=\"chem\">k in mathbb{Z}^+</span>」與「對所有 <span class=\"chem\">k in mathbb{Z}^+</span>」。",
      ],
      // EN: <p>IB markschemes require the inductive hypothesis to be stated for <strong>some</strong> (or a particular) positive integer <span class="chem">k in mathbb{Z}^+</span>, never for all <span class="chem">k</span>.</p>
      solution: "<p>IB 評分準則要求歸納假設必須針對<strong>某</strong>（或特定）正整數 <span class=\"chem\">k in mathbb{Z}^+</span>，絕不可寫「對所有 <span class=\"chem\">k</span>」。</p>",
      misconception: {
        // EN (option B): Assuming P(k) is true for ALL k ∈ ℤ⁺ assumes the very conclusion you are trying to prove, which forfeits the final R1 mark on IB markschemes.
        "1": "假設 P(k) 對所有 k ∈ ℤ⁺ 成立，等於假設了你要證明的結論，會失去 IB 評分準則中的最後 R1 分。",
        // EN (option C): P(k + 1) is what you must deduce from P(k), not what you assume.
        "2": "P(k + 1) 是你要從 P(k) 推導出來的結果，而不是假設。",
        // EN (option D): Checking P(1) and P(2) only verifies two base cases; it does not establish P(k).
        "3": "驗證 P(1) 與 P(2) 只是檢查了兩個初始情況，並不能確立 P(k)。",
      },
    },

    // ── t1-5-q006 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q006": {
      // EN: Consider the false statement: “For all real numbers <span class="chem">a, b in mathbb{R}</span>, if <span class="chem">a &lt; b</span>, then <span class="chem">a^2 &lt; b^2</span>.” Which pair <span class="chem">(a, b)</span> is a valid counterexample?
      stem: "考慮以下假命題：「對所有實數 <span class=\"chem\">a, b in mathbb{R}</span>，若 <span class=\"chem\">a &lt; b</span>，則 <span class=\"chem\">a^2 &lt; b^2</span>。」哪一對 <span class=\"chem\">(a, b)</span> 是有效的反例？",
      options: [
        // EN: <span class="chem">a = -3, b = 1</span>
        "<span class=\"chem\">a = -3, b = 1</span>",
        // EN: <span class="chem">a = 1, b = 3</span>
        "<span class=\"chem\">a = 1, b = 3</span>",
        // EN: <span class="chem">a = 3, b = -1</span>
        "<span class=\"chem\">a = 3, b = -1</span>",
        // EN: <span class="chem">a = 0, b = 2</span>
        "<span class=\"chem\">a = 0, b = 2</span>",
      ],
      hints: [
        // EN: A counterexample must make the hypothesis <span class="chem">a &lt; b</span> <strong>true</strong> and the conclusion <span class="chem">a^2 &lt; b^2</span> <strong>false</strong>.
        "反例必須使前提 <span class=\"chem\">a &lt; b</span> 為<strong>真</strong>，而結論 <span class=\"chem\">a^2 &lt; b^2</span> 為<strong>假</strong>。",
        // EN: Choose a negative number <span class="chem">a</span> with a larger absolute value than <span class="chem">b</span>.
        "選一個絕對值比 <span class=\"chem\">b</span> 大的負數 <span class=\"chem\">a</span>。",
      ],
      // EN: <p>With <span class="chem">a = -3</span> and <span class="chem">b = 1</span>, the hypothesis <span class="chem">-3 &lt; 1</span> is true, but <span class="chem">a^2 = 9</span> and <span class="chem">b^2 = 1</span> so <span class="chem">a^2 &lt; b^2</span> is false.</p>
      solution: "<p>當 <span class=\"chem\">a = -3</span> 且 <span class=\"chem\">b = 1</span> 時，前提 <span class=\"chem\">-3 &lt; 1</span> 為真，但 <span class=\"chem\">a^2 = 9</span> 且 <span class=\"chem\">b^2 = 1</span>，故 <span class=\"chem\">a^2 &lt; b^2</span> 為假。</p>",
      misconception: {
        // EN (option B): For a = 1, b = 3, both the hypothesis (1 < 3) and the conclusion (1 < 9) are true, so it does not disprove the statement.
        "1": "當 a = 1, b = 3 時，前提 (1 < 3) 與結論 (1 < 9) 皆為真，因此無法推翻該陳述。",
        // EN (option C): A counterexample must satisfy the hypothesis a < b; here 3 < −1 is false.
        "2": "反例必須滿足前提 a < b；此處 3 < −1 為假。",
        // EN (option D): For a = 0, b = 2, 0 < 4 holds, so this is a supporting example, not a counterexample.
        "3": "當 a = 0, b = 2 時，0 < 4 成立，故這是支持例子而非反例。",
      },
    },

    // ── t1-5-q007 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q007": {
      // EN: In a proof by mathematical induction that <span class="chem">sum_{r=1}^n r(r!) = (n + 1)! - 1</span> for <span class="chem">n in mathbb{Z}^+</span>, the inductive step for <span class="chem">n = k + 1</span> combines the inductive hypothesis with the <span class="chem">(k + 1)</span>-th term:<br><span class="chem">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>State the integer value of <span class="chem">A</span>.
      stem: "在用數學歸納法證明對 <span class=\"chem\">n in mathbb{Z}^+</span>，<span class=\"chem\">sum_{r=1}^n r(r!) = (n + 1)! - 1</span> 成立的過程中，<span class=\"chem\">n = k + 1</span> 的歸納步驟把歸納假設與第 <span class=\"chem\">(k + 1)</span> 項合併：<br><span class=\"chem\">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>。<br>寫出 (State) 整數 <span class=\"chem\">A</span> 的值。",
      hints: [
        // EN: Factor <span class="chem">(k + 1)!</span> out of the two terms <span class="chem">1 · (k + 1)! + (k + 1)(k + 1)!</span>.
        "從兩項 <span class=\"chem\">1 · (k + 1)! + (k + 1)(k + 1)!</span> 中抽出公因式 <span class=\"chem\">(k + 1)!</span>。",
        // EN: <span class="chem">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.
        "<span class=\"chem\">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>。",
      ],
      // EN: <p>Factoring <span class="chem">(k + 1)!</span> gives <span class="chem">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>, so <span class="chem">A = 2</span>.</p>
      solution: "<p>抽出 <span class=\"chem\">(k + 1)!</span> 得 <span class=\"chem\">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>，故 <span class=\"chem\">A = 2</span>。</p>",
    },

    // ── t1-5-q008 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q008": {
      // EN: We wish to prove by mathematical induction that <span class="chem">f(n) = 7^n + 2</span> is divisible by <span class="chem">3</span> for all <span class="chem">n in mathbb{Z}^+</span>. Assuming <span class="chem">7^k + 2 = 3A</span> (<span class="chem">A in mathbb{Z}</span>), we write <span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>. Enter the integer value of <span class="chem">B</span>.
      stem: "我們欲用數學歸納法證明對所有 <span class=\"chem\">n in mathbb{Z}^+</span>，<span class=\"chem\">f(n) = 7^n + 2</span> 可被 <span class=\"chem\">3</span> 整除。假設 <span class=\"chem\">7^k + 2 = 3A</span>（<span class=\"chem\">A in mathbb{Z}</span>），寫成 <span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>。輸入整數 <span class=\"chem\">B</span> 的值。",
      hints: [
        // EN: Expand <span class="chem">7(3A - 2) + 2 = 21A - 14 + 2 = 21A - 12</span>.
        "展開 <span class=\"chem\">7(3A - 2) + 2 = 21A - 14 + 2 = 21A - 12</span>。",
        // EN: Factor out <span class="chem">3</span> from <span class="chem">21A - 12</span>.
        "從 <span class=\"chem\">21A - 12</span> 中抽出公因數 <span class=\"chem\">3</span>。",
      ],
      // EN: <p><span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - 4)</span>, so <span class="chem">B = 4</span>.</p>
      solution: "<p><span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - 4)</span>，因此 <span class=\"chem\">B = 4</span>。</p>",
    },

    // ── t1-5-q009 · order · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q009": {
      // EN: Arrange the steps in logical order to prove by contradiction that <span class="chem">log_3 7</span> is an irrational number.
      stem: "把下列步驟按邏輯順序排列，以用反證法證明 <span class=\"chem\">log_3 7</span> 是無理數。",
      options: [
        // EN: Assume, for a contradiction, that <span class="chem">log_3 7</span> is rational, so <span class="chem">log_3 7 = p / q</span> for some positive integers <span class="chem">p, q in mathbb{Z}^+</span>.
        "反證假設 <span class=\"chem\">log_3 7</span> 是有理數，即存在正整數 <span class=\"chem\">p, q in mathbb{Z}^+</span> 使 <span class=\"chem\">log_3 7 = p / q</span>。",
        // EN: Rewrite the logarithmic equation in exponential form as <span class="chem">3^{p/q} = 7</span>, and raise both sides to the power <span class="chem">q</span> to obtain <span class="chem">3^p = 7^q</span>.
        "把對數方程改寫為指數形式 <span class=\"chem\">3^{p/q} = 7</span>，兩邊同取 <span class=\"chem\">q</span> 次方得 <span class=\"chem\">3^p = 7^q</span>。",
        // EN: Observe that for all <span class="chem">p, q in mathbb{Z}^+</span>, <span class="chem">3^p</span> is divisible by the prime <span class="chem">3</span>, whereas <span class="chem">7^q</span> has only <span class="chem">7</span> as a prime factor and is not divisible by <span class="chem">3</span>.
        "留意對所有 <span class=\"chem\">p, q in mathbb{Z}^+</span>，<span class=\"chem\">3^p</span> 可被質數 <span class=\"chem\">3</span> 整除，而 <span class=\"chem\">7^q</span> 的質因數只有 <span class=\"chem\">7</span>，不能被 <span class=\"chem\">3</span> 整除。",
        // EN: This is a contradiction by the fundamental uniqueness of prime factorizations; hence <span class="chem">log_3 7</span> must be irrational.
        "根據質因數分解的唯一性，這構成矛盾；故 <span class=\"chem\">log_3 7</span> 必為無理數。",
      ],
      hints: [
        // EN: Begin by assuming the negation: <span class="chem">log_3 7 = p / q</span> with <span class="chem">p, q in mathbb{Z}^+</span>.
        "先假設命題的反面：<span class=\"chem\">log_3 7 = p / q</span>，其中 <span class=\"chem\">p, q in mathbb{Z}^+</span>。",
        // EN: Convert to integer powers <span class="chem">3^p = 7^q</span> and compare prime factors.
        "化為整數冪 <span class=\"chem\">3^p = 7^q</span> 並比較質因數。",
      ],
      // EN: <p>Assume <span class="chem">log_3 7 = p/q</span> (<span class="chem">p, q in mathbb{Z}^+</span>), deduce <span class="chem">3^p = 7^q</span>, note that <span class="chem">3</span> divides the LHS but not the RHS, and conclude by contradiction that <span class="chem">log_3 7</span> is irrational.</p>
      solution: "<p>假設 <span class=\"chem\">log_3 7 = p/q</span>（<span class=\"chem\">p, q in mathbb{Z}^+</span>），推導出 <span class=\"chem\">3^p = 7^q</span>，指出 <span class=\"chem\">3</span> 整除左方但不整除右方，從而由反證法得出 <span class=\"chem\">log_3 7</span> 是無理數。</p>",
    },

    // ── t1-5-q010 · mcq · foundation · AHL · AHL 1.16 · 2 marks
    "t1-5-q010": {
      // EN: After Gaussian elimination on a <span class="chem">3 × 3</span> linear system in <span class="chem">x, y, z</span>, the third row of the augmented matrix is <span class="mono">[ 0 0 k−4 | k²−16 ]</span>. For which value of <span class="chem">k</span> does the system have <strong>infinitely many solutions</strong>?
      stem: "對關於 <span class=\"chem\">x, y, z</span> 的 <span class=\"chem\">3 × 3</span> 線性方程組進行高斯消去法後，增廣矩陣的第三行為 <span class=\"mono\">[ 0 0 k−4 | k²−16 ]</span>。當 <span class=\"chem\">k</span> 為哪個值時，方程組有<strong>無限多解</strong>？",
      options: [
        // EN: <span class="chem">k = 4</span>
        "<span class=\"chem\">k = 4</span>",
        // EN: <span class="chem">k = -4</span>
        "<span class=\"chem\">k = -4</span>",
        // EN: <span class="chem">k = 4</span> or <span class="chem">k = -4</span>
        "<span class=\"chem\">k = 4</span> 或 <span class=\"chem\">k = -4</span>",
        // EN: All real values of <span class="chem">k != 4</span>
        "所有實數 <span class=\"chem\">k != 4</span>",
      ],
      hints: [
        // EN: Infinitely many solutions require Row 3 to become <span class="chem">0z = 0</span>.
        "無限多解要求第 3 行變成 <span class=\"chem\">0z = 0</span>。",
        // EN: Set both <span class="chem">k - 4 = 0</span> AND <span class="chem">k^2 - 16 = 0</span>.
        "同時令 <span class=\"chem\">k - 4 = 0</span> 及 <span class=\"chem\">k^2 - 16 = 0</span>。",
      ],
      // EN: <p>For infinitely many solutions, we need both the coefficient of <span class="chem">z</span> and the RHS to be zero: <span class="chem">k - 4 = 0</span> and <span class="chem">k^2 - 16 = 0</span>, which gives <span class="chem">k = 4</span>.</p>
      solution: "<p>要有無限多解，<span class=\"chem\">z</span> 的係數與右方常數必須同時為零：<span class=\"chem\">k - 4 = 0</span> 且 <span class=\"chem\">k^2 - 16 = 0</span>，故 <span class=\"chem\">k = 4</span>。</p>",
      misconception: {
        // EN (option B): At k = −4, the right-hand side is 0 but the z-coefficient is −4 − 4 = −8 ≠ 0, giving the unique value z = 0 / (−8) = 0!
        "1": "當 k = −4 時，右方為 0 但 z 的係數為 −4 − 4 = −8 ≠ 0，會給出唯一解 z = 0 / (−8) = 0！",
        // EN (option C): Only k = 4 makes the z-coefficient k − 4 equal to 0; at k = −4 the system has a unique solution with z = 0.
        "2": "只有 k = 4 能使 z 的係數 k − 4 等於 0；當 k = −4 時方程組有唯一解（z = 0）。",
        // EN (option D): k ≠ 4 is the condition for a unique solution, not infinitely many solutions.
        "3": "k ≠ 4 是唯一解的條件，而不是無限多解的條件。",
      },
    },

    // ── t1-5-q011 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q011": {
      // EN: Find the unique solution to the <span class="chem">3 × 3</span> linear system:<br><span class="chem">x + y + z = 6</span><br><span class="chem">2x - y + z = 3</span><br><span class="chem">x + 2y - z = 2</span>.<br>Enter the value of <span class="chem">x + 2y + 3z</span>.
      stem: "求 (Find) 以下 <span class=\"chem\">3 × 3</span> 線性方程組的唯一解：<br><span class=\"chem\">x + y + z = 6</span><br><span class=\"chem\">2x - y + z = 3</span><br><span class=\"chem\">x + 2y - z = 2</span>。<br>輸入 <span class=\"chem\">x + 2y + 3z</span> 的值。",
      hints: [
        // EN: Add Equation 1 and Equation 3 to eliminate <span class="chem">z</span> immediately: <span class="chem">2x + 3y = 8</span>. Also subtract Equation 1 from Equation 2 to get <span class="chem">x - 2y = -3</span>.
        "把方程 1 與方程 3 相加即可立即消去 <span class=\"chem\">z</span>：<span class=\"chem\">2x + 3y = 8</span>。再把方程 2 減方程 1 得 <span class=\"chem\">x - 2y = -3</span>。",
        // EN: Solving <span class="chem">2x + 3y = 8</span> and <span class="chem">x - 2y = -3</span> gives <span class="chem">x = 1, y = 2</span>, and substituting into Equation 1 gives <span class="chem">z = 3</span>.
        "聯立解 <span class=\"chem\">2x + 3y = 8</span> 與 <span class=\"chem\">x - 2y = -3</span> 得 <span class=\"chem\">x = 1, y = 2</span>，代回方程 1 得 <span class=\"chem\">z = 3</span>。",
      ],
      // EN: <p>Eliminating <span class="chem">z</span> gives <span class="chem">x - 2y = -3</span> and <span class="chem">2x + 3y = 8</span>, so <span class="chem">7y = 14 =&gt; y = 2, x = 1, z = 3</span>. Therefore <span class="chem">x + 2y + 3z = 1 + 4 + 9 = 14</span>.</p>
      solution: "<p>消去 <span class=\"chem\">z</span> 得 <span class=\"chem\">x - 2y = -3</span> 及 <span class=\"chem\">2x + 3y = 8</span>，故 <span class=\"chem\">7y = 14 =&gt; y = 2, x = 1, z = 3</span>。因此 <span class=\"chem\">x + 2y + 3z = 1 + 4 + 9 = 14</span>。</p>",
    },

    // ── t1-5-q012 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q012": {
      // EN: Find the value of the real constant <span class="chem">k</span> for which the following system of equations is <strong>inconsistent</strong> (has no solution):<br><span class="chem">x + 2y + z = 4</span><br><span class="chem">2x + 5y + 3z = 9</span><br><span class="chem">3x + 7y + kz = 10</span>.
      stem: "求 (Find) 使以下方程組<strong>不相容</strong>（無解）的實常數 <span class=\"chem\">k</span> 的值：<br><span class=\"chem\">x + 2y + z = 4</span><br><span class=\"chem\">2x + 5y + 3z = 9</span><br><span class=\"chem\">3x + 7y + kz = 10</span>。",
      hints: [
        // EN: Use Gaussian elimination: <span class="chem">R_2 -&gt; R_2 - 2R_1</span> gives <span class="chem">y + z = 1</span>, and <span class="chem">R_3 -&gt; R_3 - 3R_1</span> gives <span class="chem">y + (k - 3)z = -2</span>.
        "使用高斯消去法：<span class=\"chem\">R_2 -&gt; R_2 - 2R_1</span> 得 <span class=\"chem\">y + z = 1</span>，而 <span class=\"chem\">R_3 -&gt; R_3 - 3R_1</span> 得 <span class=\"chem\">y + (k - 3)z = -2</span>。",
        // EN: Now compute <span class="chem">R_3 - R_2</span>: <span class="chem">(k - 4)z = -3</span>. For no solution, the coefficient of <span class="chem">z</span> must be <span class="chem">0</span>.
        "現在計算 <span class=\"chem\">R_3 - R_2</span>：<span class=\"chem\">(k - 4)z = -3</span>。若要無解，<span class=\"chem\">z</span> 的係數必須為 <span class=\"chem\">0</span>。",
      ],
      // EN: <p>Row reduction gives <span class="chem">R_2 - 2R_1: y + z = 1</span> and <span class="chem">R_3 - 3R_1: y + (k - 3)z = -2</span>. Subtracting gives <span class="chem">(k - 4)z = -3</span>, which has no solution when <span class="chem">k = 4</span>.</p>
      solution: "<p>列簡化得 <span class=\"chem\">R_2 - 2R_1: y + z = 1</span> 及 <span class=\"chem\">R_3 - 3R_1: y + (k - 3)z = -2</span>。相減得 <span class=\"chem\">(k - 4)z = -3</span>，當 <span class=\"chem\">k = 4</span> 時無解。</p>",
    },

    // ── t1-5-q013 · multi · exam · AHL · AHL 1.16 · 3 marks
    "t1-5-q013": {
      // EN: A <span class="chem">3 × 3</span> linear system reduces under Gaussian elimination to:<br><span class="mono">[ 1 1 1 | 3 ]</span><br><span class="mono">[ 0 1 −2 | 1 ]</span><br><span class="mono">[ 0 0 a²−1 | a−1 ]</span>.<br>Select <strong>all</strong> correct statements.
      stem: "一個 <span class=\"chem\">3 × 3</span> 線性方程組經高斯消去法化簡為：<br><span class=\"mono\">[ 1 1 1 | 3 ]</span><br><span class=\"mono\">[ 0 1 −2 | 1 ]</span><br><span class=\"mono\">[ 0 0 a²−1 | a−1 ]</span>。<br>選出<strong>所有</strong>正確的陳述。",
      options: [
        // EN: When <span class="chem">a = 1</span>, the system has infinitely many solutions lying on a line in 3D space.
        "當 <span class=\"chem\">a = 1</span> 時，方程組有無窮多個解，且位於 3D 空間中的一條直線上。",
        // EN: When <span class=\"chem">a = -1</span>, the system has no solution.
        "當 <span class=\"chem\">a = -1</span> 時，方程組無解。",
        // EN: When <span class=\"chem">a = 1</span>, setting <span class="chem">z = lambda</span> gives <span class="chem">y = 1 + 2 lambda</span> and <span class="chem">x = 2 - 3 lambda</span>.
        "當 <span class=\"chem\">a = 1</span> 時，設 <span class=\"chem\">z = lambda</span> 得 <span class=\"chem\">y = 1 + 2 lambda</span> 及 <span class=\"chem\">x = 2 - 3 lambda</span>。",
        // EN: When <span class="chem">a = 0</span>, the system has no solution.
        "當 <span class=\"chem\">a = 0</span> 時，方程組無解。",
      ],
      hints: [
        // EN: Factor the third row as <span class="chem">(a - 1)(a + 1)z = a - 1</span>.
        "把第三行因式分解為 <span class=\"chem\">(a - 1)(a + 1)z = a - 1</span>。",
        // EN: Check <span class="chem">a = 1</span> (<span class="chem">0z = 0</span>), <span class="chem">a = -1</span> (<span class="chem">0z = -2</span>), and <span class="chem">a = 0</span> (<span class="chem">-z = -1</span>).
        "分別檢查 <span class=\"chem\">a = 1</span>（<span class=\"chem\">0z = 0</span>）、<span class=\"chem\">a = -1</span>（<span class=\"chem\">0z = -2</span>）及 <span class=\"chem\">a = 0</span>（<span class=\"chem\">-z = -1</span>）。",
      ],
      // EN: <p>Row 3 is <span class="chem">(a - 1)(a + 1)z = a - 1</span>. For <span class="chem">a = 1</span>, <span class="chem">0z = 0</span> (infinite solutions with <span class="chem">z = lambda, y = 1 + 2lambda, x = 3 - (1 + 2lambda) - lambda = 2 - 3lambda</span>). For <span class="chem">a = -1</span>, <span class="chem">0z = -2</span> (no solution).</p>
      solution: "<p>第 3 行為 <span class=\"chem\">(a - 1)(a + 1)z = a - 1</span>。當 <span class=\"chem\">a = 1</span> 時，<span class=\"chem\">0z = 0</span>（無限多解：<span class=\"chem\">z = lambda, y = 1 + 2lambda, x = 3 - (1 + 2lambda) - lambda = 2 - 3lambda</span>）。當 <span class=\"chem\">a = -1</span> 時，<span class=\"chem\">0z = -2</span>（無解）。</p>",
      misconception: {
        // EN (option D): When a = 0, Row 3 becomes −1z = −1 ⇒ z = 1, which gives a unique solution (x, y, z) = (−1, 3, 1), not no solution.
        "3": "當 a = 0 時，第 3 行變成 −1z = −1 ⇒ z = 1，給出唯一解 (x, y, z) = (−1, 3, 1)，而非無解。",
      },
    },

    // ── t1-5-q014 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q014": {
      // EN: Find the smallest positive integer <span class="chem">n_0</span> such that the inequality <span class="chem">2^n &gt; 2n + 1</span> holds for all integers <span class="chem">n &gt;= n_0</span>.
      stem: "求 (Find) 使不等式 <span class=\"chem\">2^n &gt; 2n + 1</span> 對所有整數 <span class=\"chem\">n &gt;= n_0</span> 成立的最小正整數 <span class=\"chem\">n_0</span>。",
      hints: [
        // EN: Test <span class="chem">n = 1, 2, 3, 4</span> in <span class="chem">2^n &gt; 2n + 1</span>.
        "把 <span class=\"chem\">n = 1, 2, 3, 4</span> 代入 <span class=\"chem\">2^n &gt; 2n + 1</span> 測試。",
        // EN: For <span class="chem">n = 1</span>: <span class="chem">2 &gt; 3</span> (false). For <span class="chem">n = 2</span>: <span class="chem">4 &gt; 5</span> (false). For <span class="chem">n = 3</span>: <span class="chem">8 &gt; 7</span> (true).
        "當 <span class=\"chem\">n = 1</span>：<span class=\"chem\">2 &gt; 3</span>（假）。當 <span class=\"chem\">n = 2</span>：<span class=\"chem\">4 &gt; 5</span>（假）。當 <span class=\"chem\">n = 3</span>：<span class=\"chem\">8 &gt; 7</span>（真）。",
      ],
      // EN: <p>Testing small positive integers: <span class="chem">n = 1</span> gives <span class="chem">2 &gt; 3</span> (false); <span class="chem">n = 2</span> gives <span class="chem">4 &gt; 5</span> (false); <span class="chem">n = 3</span> gives <span class="chem">8 &gt; 7</span> (true). By induction, it holds for all <span class="chem">n &gt;= 3</span>, so the base case is <span class="chem">n_0 = 3</span>.</p>
      solution: "<p>測試細小正整數：<span class=\"chem\">n = 1</span> 得 <span class=\"chem\">2 &gt; 3</span>（假）；<span class=\"chem\">n = 2</span> 得 <span class=\"chem\">4 &gt; 5</span>（假）；<span class=\"chem\">n = 3</span> 得 <span class=\"chem\">8 &gt; 7</span>（真）。由數學歸納法可知，對所有 <span class=\"chem\">n &gt;= 3</span> 皆成立，故初始值為 <span class=\"chem\">n_0 = 3</span>。</p>",
    },

    // ── t1-5-q015 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q015": {
      // EN: Let <span class="chem">f(x) = x e^{2x}</span>. It can be proved by mathematical induction that the <span class="chem">n</span>-th derivative is <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> for all <span class="chem">n in mathbb{Z}^+</span>. Evaluate <span class="chem">f^{(5)}(0)</span>.
      stem: "設 <span class=\"chem\">f(x) = x e^{2x}</span>。可用數學歸納法證明其 <span class=\"chem\">n</span> 階導數為 <span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>（對所有 <span class=\"chem\">n in mathbb{Z}^+</span>）。計算 (Evaluate) <span class=\"chem\">f^{(5)}(0)</span>。",
      hints: [
        // EN: Substitute <span class="chem">n = 5</span> and <span class="chem">x = 0</span> into <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>.
        "把 <span class=\"chem\">n = 5</span> 及 <span class=\"chem\">x = 0</span> 代入 <span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>。",
        // EN: <span class="chem">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.
        "<span class=\"chem\">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>。",
      ],
      // EN: <p>Substituting <span class="chem">n = 5</span> and <span class="chem">x = 0</span> gives <span class="chem">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>.</p>
      solution: "<p>代入 <span class=\"chem\">n = 5</span> 及 <span class=\"chem\">x = 0</span> 得 <span class=\"chem\">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>。</p>",
    },

    // ── t1-5-q016 · mcq · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q016": {
      // EN: Suppose a student attempts to prove by contradiction that <span class="chem">sqrt(4)</span> is irrational by writing <span class="chem">sqrt(4) = a / b</span> with <span class="chem">gcd(a, b) = 1</span>, squaring to get <span class="chem">a^2 = 4b^2</span>, and claiming: “Since <span class="chem">4</span> divides <span class="chem">a^2</span>, <span class="chem">4</span> must divide <span class="chem">a</span>.” Why does this step fail?
      stem: "假設一名學生嘗試用反證法證明 <span class=\"chem\">sqrt(4)</span> 是無理數：寫出 <span class=\"chem\">sqrt(4) = a / b</span>（其中 <span class=\"chem\">gcd(a, b) = 1</span>），兩邊平方得 <span class=\"chem\">a^2 = 4b^2</span>，並聲稱：「因為 <span class=\"chem\">4</span> 整除 <span class=\"chem\">a^2</span>，所以 <span class=\"chem\">4</span> 必整除 <span class=\"chem\">a</span>。」為何這一步不成立？",
      options: [
        // EN: Because <span class="chem">4</span> is composite (not prime): <span class="chem">4</span> divides <span class="chem">a^2</span> only implies <span class="chem">2</span> divides <span class="chem">a</span> (for example, <span class="chem">a = 2</span> has <span class="chem">4 | 2^2</span> but <span class="chem">4 mid 2</span>).
        "因為 <span class=\"chem\">4</span> 是合成數（非質數）：<span class=\"chem\">4</span> 整除 <span class=\"chem\">a^2</span> 只意味著 <span class=\"chem\">2</span> 整除 <span class=\"chem\">a</span>（例如 <span class=\"chem\">a = 2</span> 滿足 <span class=\"chem\">4 | 2^2</span>，但 <span class=\"chem\">4 mid 2</span> 不成立）。",
        // EN: Because <span class="chem">a</span> and <span class="chem">b</span> cannot be chosen with <span class="chem">gcd(a, b) = 1</span> for rational numbers.
        "因為有理數不能寫成滿足 <span class=\"chem\">gcd(a, b) = 1</span> 的 <span class=\"chem\">a</span> 與 <span class=\"chem\">b</span>。",
        // EN: Because squaring both sides of an equation is not allowed in a proof by contradiction.
        "因為在反證法中不允許把方程兩邊平方。",
        // EN: Because <span class="chem">4b^2</span> is an odd integer whenever <span class="chem">b</span> is odd.
        "因為每當 <span class=\"chem\">b</span> 是奇數時，<span class=\"chem\">4b^2</span> 也是奇數。",
      ],
      hints: [
        // EN: Compare <span class="chem">p | a^2 =&gt; p | a</span> when <span class="chem">p</span> is prime versus when <span class="chem">p = 4</span> is a square composite number.
        "比較當 <span class=\"chem\">p</span> 為質數與當 <span class=\"chem\">p = 4</span> 為平方合成數時，<span class=\"chem\">p | a^2 =&gt; p | a</span> 是否成立。",
        // EN: Test <span class="chem">a = 2, b = 1</span>: does <span class="chem">4</span> divide <span class="chem">a^2 = 4</span>? Does <span class="chem">4</span> divide <span class="chem">a = 2</span>?
        "測試 <span class=\"chem\">a = 2, b = 1</span>：<span class=\"chem\">4</span> 是否整除 <span class=\"chem\">a^2 = 4</span>？<span class=\"chem\">4</span> 是否整除 <span class=\"chem\">a = 2</span>？",
      ],
      // EN: <p>Euclid's lemma (<span class="chem">p | a^2 =&gt; p | a</span>) requires <span class="chem">p</span> to be prime (or square-free). Since <span class="chem">4 = 2^2</span> is composite, <span class="chem">4 | a^2</span> only implies <span class="chem">2 | a</span> (specifically <span class="chem">a = 2, b = 1</span> satisfies <span class="chem">a^2 = 4b^2</span> with <span class="chem">gcd(2, 1) = 1</span>).</p>
      solution: "<p>歐幾里得引理（<span class=\"chem\">p | a^2 =&gt; p | a</span>）要求 <span class=\"chem\">p</span> 為質數（或無平方因子數）。因為 <span class=\"chem\">4 = 2^2</span> 是合成數，<span class=\"chem\">4 | a^2</span> 只推出 <span class=\"chem\">2 | a</span>（具體而言，<span class=\"chem\">a = 2, b = 1</span> 滿足 <span class=\"chem\">a^2 = 4b^2</span> 且 <span class=\"chem\">gcd(2, 1) = 1</span>）。</p>",
      misconception: {
        // EN (option B): Every rational number can be written in lowest terms a/b with gcd(a, b) = 1 (for √4 = 2, a = 2 and b = 1).
        "1": "每個有理數都可以寫成最簡分數 a/b（gcd(a, b) = 1）（對於 √4 = 2，a = 2 且 b = 1）。",
        // EN (option C): Squaring both sides is a valid implication (A = B ⇒ A² = B²).
        "2": "兩邊平方是合法的推論（A = B ⇒ A² = B²）。",
        // EN (option D): 4b² is always a multiple of 4, so it is always even.
        "3": "4b² 恒為 4 的倍數，故它恒為偶數。",
      },
    },

    // ── t1-5-q017 · short · exam · AHL · AHL 1.15 · 7 marks
    "t1-5-q017": {
      // EN: Prove by mathematical induction that for all <span class="chem">n in mathbb{Z}^+</span>,<br><span class="chem">sum_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]
      stem: "用數學歸納法證明 (Prove) 對所有 <span class=\"chem\">n in mathbb{Z}^+</span>，<br><span class=\"chem\">sum_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>。[7 marks]",
      hints: [
        // EN: After substituting the inductive hypothesis for <span class="chem">n = k</span>, add the <span class="chem">(k + 1)</span>-th term <span class="chem">(k + 1)2^k</span>.
        "代入 <span class=\"chem\">n = k</span> 的歸納假設後，加上第 <span class=\"chem\">(k + 1)</span> 項 <span class=\"chem\">(k + 1)2^k</span>。",
        // EN: Factor out <span class="chem">2^k</span> from <span class="chem">(k - 1)2^k + (k + 1)2^k</span> to get <span class="chem">2k · 2^k = k · 2^{k+1}</span>.
        "從 <span class=\"chem\">(k - 1)2^k + (k + 1)2^k</span> 中抽出 <span class=\"chem\">2^k</span>，得 <span class=\"chem\">2k · 2^k = k · 2^{k+1}</span>。",
      ],
      // EN: <p>Factoring <span class="chem">2^k</span> in the inductive step gives <span class="chem">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>, matching the <span class="chem">n = k + 1</span> formula.</p>
      solution: "<p>在歸納步驟中抽出 <span class=\"chem\">2^k</span> 得 <span class=\"chem\">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>，正與 <span class=\"chem\">n = k + 1</span> 的公式吻合。</p>",
      // EN: <p><strong>Base case (<span class="chem">n = 1</span>):</strong> <span class="chem">LHS = 1 · 2^0 = 1</span>; <span class="chem">RHS = (1 - 1)2^1 + 1 = 1</span>. Since <span class="chem">LHS = RHS</span>, <span class="chem">P(1)</span> is true.<br><strong>Inductive hypothesis:</strong> Assume <span class="chem">P(k)</span> is true for some <span class="chem">k in mathbb{Z}^+</span>: <span class="chem">sum_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>Inductive step (<span class="chem">n = k + 1</span>):</strong><br><span class="chem">sum_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>Conclusion:</strong> Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n in mathbb{Z}^+</span>.</p>
      answer: "<p><strong>初始步驟（<span class=\"chem\">n = 1</span>）：</strong><span class=\"chem\">LHS = 1 · 2^0 = 1</span>；<span class=\"chem\">RHS = (1 - 1)2^1 + 1 = 1</span>。因為 <span class=\"chem\">LHS = RHS</span>，所以 <span class=\"chem\">P(1)</span> 成立。<br><strong>歸納假設：</strong>假設對某 <span class=\"chem\">k in mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立：<span class=\"chem\">sum_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>。<br><strong>歸納步驟（<span class=\"chem\">n = k + 1</span>）：</strong><br><span class=\"chem\">sum_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>。<br><strong>結論：</strong>由於 <span class=\"chem\">P(1)</span> 成立且 <span class=\"chem\">P(k) =&gt; P(k + 1)</span>，根據數學歸納法原理，對所有 <span class=\"chem\">n in mathbb{Z}^+</span>，<span class=\"chem\">P(n)</span> 均成立。</p>",
      markscheme: [
        // EN: R1: Base case n = 1: evaluates LHS = 1 and RHS = (0)2¹ + 1 = 1 and states P(1) is true.
        "R1：初始步驟 n = 1：計出 LHS = 1 及 RHS = (0)2¹ + 1 = 1，並寫明 P(1) 成立。",
        // EN: M1: States inductive hypothesis: assumes P(k) is true for some k ∈ ℤ⁺.
        "M1：寫出歸納假設：假設對某 k ∈ ℤ⁺，P(k) 成立。",
        // EN: M1: Considers n = k + 1 by adding the (k + 1)-th term (k + 1)2^k to the assumed sum.
        "M1：考慮 n = k + 1，在假設的和加上第 (k + 1) 項 (k + 1)2^k。",
        // EN: A1: Factors out 2^k to get ((k − 1) + (k + 1))2^k + 1 = 2k · 2^k + 1.
        "A1：抽出公因式 2^k 得 ((k − 1) + (k + 1))2^k + 1 = 2k · 2^k + 1。",
        // EN: A1: Simplifies 2k · 2^k + 1 to k · 2^{k+1} + 1 = ((k + 1) − 1)2^{k+1} + 1.
        "A1：化簡 2k · 2^k + 1 為 k · 2^{k+1} + 1 = ((k + 1) − 1)2^{k+1} + 1。",
        // EN: R1: States final induction conclusion sentence (awarded only if previous M marks earned).
        "R1：寫出完整的數學歸納法總結句（須已取得前述 M 分方予頒授）。",
      ],
    },

    // ── t1-5-q018 · short · exam · AHL · AHL 1.16 · 7 marks
    "t1-5-q018": {
      // EN: Consider the system of linear equations:<br><span class="chem">x - y + 2z = 1</span><br><span class="chem">2x - y + 5z = 4</span><br><span class="chem">3x - 2y + (k^2 - 2)z = k + 2</span>, where <span class="chem">k in mathbb{R}</span>.<br>(a) Reduce the system to row-echelon form and find the value of <span class="chem">k</span> for which the system has no solution, and the value of <span class="chem">k</span> for which it has infinitely many solutions. [4 marks]<br>(b) Find the general solution in parametric form when the system has infinitely many solutions. [3 marks]
      stem: "考慮以下線性方程組：<br><span class=\"chem\">x - y + 2z = 1</span><br><span class=\"chem\">2x - y + 5z = 4</span><br><span class=\"chem\">3x - 2y + (k^2 - 2)z = k + 2</span>，其中 <span class=\"chem\">k in mathbb{R}</span>。<br>(a) 把方程組化簡為列梯形形式，並求 (find) 使方程組無解的 <span class=\"chem\">k</span> 值及使方程組有無限多解的 <span class=\"chem\">k</span> 值。[4 marks]<br>(b) 當方程組有無限多解時，求 (Find) 其參數形式的通解。[3 marks]",
      hints: [
        // EN: Apply <span class="chem">R_2 - 2R_1</span> to get <span class="chem">y + z = 2</span>, and <span class="chem">R_3 - 3R_1</span> to get <span class="chem">y + (k^2 - 8)z = k - 1</span>.
        "進行 <span class=\"chem\">R_2 - 2R_1</span> 得 <span class=\"chem\">y + z = 2</span>，及 <span class=\"chem\">R_3 - 3R_1</span> 得 <span class=\"chem\">y + (k^2 - 8)z = k - 1</span>。",
        // EN: Subtract the new Row 2 from the new Row 3 to get <span class="chem">(k^2 - 9)z = k - 3</span>.
        "從新的第 3 行減去新的第 2 行，得 <span class=\"chem\">(k^2 - 9)z = k - 3</span>。",
      ],
      // EN: <p>(a) <span class="chem">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class="chem">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class="chem">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. Thus <span class="chem">k = -3</span> gives no solution and <span class="chem">k = 3</span> gives infinite solutions.<br>(b) With <span class="chem">z = lambda</span>, <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 1 + y - 2z = 3 - 3lambda</span>.</p>
      solution: "<p>(a) <span class=\"chem\">R_2 - 2R_1 =&gt; y + z = 2</span>；<span class=\"chem\">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>；<span class=\"chem\">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>。因此 <span class=\"chem\">k = -3</span> 時無解，<span class=\"chem\">k = 3</span> 時有無限多解。<br>(b) 設 <span class=\"chem\">z = lambda</span>，得 <span class=\"chem\">y = 2 - lambda</span> 及 <span class=\"chem\">x = 1 + y - 2z = 3 - 3lambda</span>。</p>",
      // EN: <p>(a) Row reduction gives <span class="chem">y + z = 2</span> and <span class="chem">(k^2 - 9)z = k - 3</span>. The system has <strong>no solution</strong> when <span class="chem">k = -3</span> and <strong>infinitely many solutions</strong> when <span class="chem">k = 3</span>.<br>(b) Letting <span class="chem">z = lambda</span> (<span class="chem">lambda in mathbb{R}</span>) gives <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 3 - 3lambda</span>.</p>
      answer: "<p>(a) 列簡化得 <span class=\"chem\">y + z = 2</span> 及 <span class=\"chem\">(k^2 - 9)z = k - 3</span>。當 <span class=\"chem\">k = -3</span> 時方程組<strong>無解</strong>，當 <span class=\"chem\">k = 3</span> 時有<strong>無限多解</strong>。<br>(b) 設 <span class=\"chem\">z = lambda</span>（<span class=\"chem\">lambda in mathbb{R}</span>），得 <span class=\"chem\">y = 2 - lambda</span> 及 <span class=\"chem\">x = 3 - 3lambda</span>。</p>",
      markscheme: [
        // EN: M1: Eliminates x using R₂ → R₂ − 2R₁ and R₃ → R₃ − 3R₁.
        "M1：利用 R₂ → R₂ − 2R₁ 及 R₃ → R₃ − 3R₁ 消去 x。",
        // EN: A1: Obtains y + z = 2 and y + (k² − 8)z = k − 1.
        "A1：求得 y + z = 2 及 y + (k² − 8)z = k − 1。",
        // EN: A1: Eliminates y using R₃ → R₃ − R₂ to obtain (k² − 9)z = k − 3.
        "A1：利用 R₃ → R₃ − R₂ 消去 y 得 (k² − 9)z = k − 3。",
        // EN: A1: Identifies k = −3 for no solution and k = 3 for infinitely many solutions.
        "A1：指出 k = −3 時無解及 k = 3 時有無限多解。",
        // EN: M1: Sets z = λ (λ ∈ ℝ) and back-substitutes into Row 2 to find y = 2 − λ.
        "M1：設 z = λ (λ ∈ ℝ) 並回代至第 2 行求得 y = 2 − λ。",
        // EN: A1: Back-substitutes into Row 1 to find x = 1 + (2 − λ) − 2λ = 3 − 3λ.
        "A1：回代至第 1 行求得 x = 1 + (2 − λ) − 2λ = 3 − 3λ。",
        // EN: A1: Writes the complete parametric solution (x, y, z) = (3 − 3λ, 2 − λ, λ) for λ ∈ ℝ.
        "A1：寫出完整的參數通解 (x, y, z) = (3 − 3λ, 2 − λ, λ)，其中 λ ∈ ℝ。",
      ],
    },

  }
});
