/* t1-5.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-5.q', {
  questions: {

    // ── t1-5-q001 · mcq · foundation · SL · SL 1.6 · 2 marks
    "t1-5-q001": {
      // EN: To prove that <span class="chem">x^2 - 8x + 21 &gt;= 5</span> for all <span class="chem">x \in \mathbb{R}</span>, which completed-square form directly establishes the result?
      stem: "要證明對所有 <span class=\"chem\">x \\in \\mathbb{R}</span>，<span class=\"chem\">x^2 - 8x + 21 &gt;= 5</span>，下列哪個配方形式能直接確立結果？",
      options: [
        // EN: <span class="chem">(x - 4)^2 + 5</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x \in \mathbb{R}</span>, the expression is <span class="chem">&gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 5</span>，而因為對所有 <span class=\"chem\">x \\in \\mathbb{R}</span> 皆有 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>，故該表式 <span class=\"chem\">&gt;= 5</span>。",
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
      // EN: <p>Completing the square gives <span class="chem">x^2 - 8x + 21 == (x - 4)^2 + 5</span>. Since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x \in \mathbb{R}</span>, we have <span class="chem">(x - 4)^2 + 5 &gt;= 5</span>.</p>
      solution: "<p>配方得 <span class=\"chem\">x^2 - 8x + 21 == (x - 4)^2 + 5</span>。因為對所有 <span class=\"chem\">x \\in \\mathbb{R}</span> 皆有 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>，所以 <span class=\"chem\">(x - 4)^2 + 5 &gt;= 5</span>。</p>",
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
      // EN: The sum of the squares of any three consecutive integers <span class="chem">(n - 1)^2 + n^2 + (n + 1)^2</span> can be written in the form <span class="chem">A n^2 + B</span>, where <span class="chem">A, B \in \mathbb{Z}</span>. Find the value of <span class="chem">B</span>.
      stem: "任意三個連續整數的平方和 <span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2</span> 可寫成 <span class=\"chem\">A n^2 + B</span> 的形式，其中 <span class=\"chem\">A, B \\in \\mathbb{Z}</span>。求 (Find) <span class=\"chem\">B</span> 的值。",
      hints: [
        // EN: Expand <span class="chem">(n - 1)^2 = n^2 - 2n + 1</span> and <span class="chem">(n + 1)^2 = n^2 + 2n + 1</span>.
        "展開 <span class=\"chem\">(n - 1)^2 = n^2 - 2n + 1</span> 及 <span class=\"chem\">(n + 1)^2 = n^2 + 2n + 1</span>。",
        // EN: Add all three terms: the <span class="chem">-2n</span> and <span class="chem">+2n</span> cancel, leaving <span class="chem">3n^2 + 2</span>.
        "將三項相加：<span class=\"chem\">-2n</span> 與 <span class=\"chem\">+2n</span> 抵消，剩下 <span class=\"chem\">3n^2 + 2</span>。",
      ],
      // EN: <p><span class="chem">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>. Thus <span class="chem">A = 3</span> and <span class="chem">B = 2</span>.</p>
      solution: "<p><span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>。因此 <span class=\"chem\">A = 3</span>，<span class=\"chem\">B = 2</span>。</p>",
    },

    // ── t1-5-q003 · order · exam · SL · SL 1.6 · 3 marks
    "t1-5-q003": {
      // EN: Arrange the steps in logical <span class="chem">LHS -&gt; RHS</span> order to prove the algebraic identity <span class="chem">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> for <span class="chem">n \in \mathbb{Z}^+</span>.
      stem: "把下列步驟按合乎邏輯的 <span class=\"chem\">LHS -&gt; RHS</span> 順序排列，以證明對 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，代數恒等式 <span class=\"chem\">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> 成立。",
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
      // EN: <p>Using the same letter <span class="chem">n</span> for all three numbers (for example <span class="chem">2n + 1, 2n + 1, 2n</span>) only proves a special case in which the numbers are related. Using distinct <span class="chem">a, b, c \in \mathbb{Z}</span> gives <span class="chem">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>, which is odd.</p>
      solution: "<p>若對三個數都使用同一個字母 <span class=\"chem\">n</span>（例如 <span class=\"chem\">2n + 1, 2n + 1, 2n</span>），只會證明這些數互有關係的特殊情況。使用相異整數 <span class=\"chem\">a, b, c \\in \\mathbb{Z}</span> 得 <span class=\"chem\">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>，必為奇數。</p>",
      // EN: <p>Let the two odd integers be <span class="chem">2a + 1</span> and <span class="chem">2b + 1</span>, and the even integer be <span class="chem">2c</span>, where <span class="chem">a, b, c \in \mathbb{Z}</span>.<br><span class="chem">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br>Since <span class="chem">k = 2c^2 - 2ab - a - b - 1 \in \mathbb{Z}</span>, the expression is of the form <span class="chem">2k + 1</span>, which is always an odd integer.</p>
      answer: "<p>設該兩個奇數為 <span class=\"chem\">2a + 1</span> 及 <span class=\"chem\">2b + 1</span>，而該偶數為 <span class=\"chem\">2c</span>，其中 <span class=\"chem\">a, b, c \\in \\mathbb{Z}</span>。<br><span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>。<br>因為 <span class=\"chem\">k = 2c^2 - 2ab - a - b - 1 \\in \\mathbb{Z}</span>，該表式形如 <span class=\"chem\">2k + 1</span>，故恒為奇數。</p>",
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
      // EN: In a proof by mathematical induction for <span class="chem">n \in \mathbb{Z}^+</span>, which wording of the inductive hypothesis earns full IB reasoning credit?
      stem: "在對 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 進行的數學歸納法證明中，哪種歸納假設的措辭能取得 IB 滿分推理分？",
      options: [
        // EN: “Assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>.”
        "「假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立。」",
        // EN: “Assume <span class="chem">P(k)</span> is true for all <span class="chem">k \in \mathbb{Z}^+</span>.”
        "「假設對所有 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立。」",
        // EN: “Suppose <span class="chem">P(n)</span> is true for <span class="chem">n = k + 1</span>.”
        "「假設當 <span class=\"chem\">n = k + 1</span> 時，<span class=\"chem\">P(n)</span> 成立。」",
        // EN: “Since <span class="chem">P(1)</span> and <span class="chem">P(2)</span> are true, <span class="chem">P(k)</span> is true.”
        "「因為 <span class=\"chem\">P(1)</span> 與 <span class=\"chem\">P(2)</span> 成立，所以 <span class=\"chem\">P(k)</span> 成立。」",
      ],
      hints: [
        // EN: Remember the domino analogy: you only assume that one particular domino <span class="chem">k</span> falls, and show it knocks over <span class="chem">k + 1</span>.
        "回想骨牌比喻：你只假設某一塊骨牌 <span class=\"chem\">k</span> 倒下，再證明它會推倒第 <span class=\"chem\">k + 1</span> 塊。",
        // EN: Distinguish carefully between "for some <span class="chem">k \in \mathbb{Z}^+</span>" and "for all <span class="chem">k \in \mathbb{Z}^+</span>".
        "仔細分辨「對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>」與「對所有 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>」。",
      ],
      // EN: <p>IB markschemes require the inductive hypothesis to be stated for <strong>some</strong> (or a particular) positive integer <span class="chem">k \in \mathbb{Z}^+</span>, never for all <span class="chem">k</span>.</p>
      solution: "<p>IB 評分準則要求歸納假設必須針對<strong>某</strong>（或特定）正整數 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，絕不可寫「對所有 <span class=\"chem\">k</span>」。</p>",
      misconception: {
        // EN (option B): Assuming P(k) is true for ALL k ∈ ℤ⁺ assumes the very conclusion you are trying to prove, so on IB markschemes it loses the M1 for the inductive hypothesis and, with it, the final R1 mark.
        "1": "假設 P(k) 對所有 k ∈ ℤ⁺ 成立，等於假設了你要證明的結論，因此在 IB 評分準則中會失去歸納假設的 M1 分，連帶失去最後的 R1 分。",
        // EN (option C): P(k + 1) is what you must deduce from P(k), not what you assume.
        "2": "P(k + 1) 是你要從 P(k) 推導出來的結果，而不是假設。",
        // EN (option D): Checking P(1) and P(2) only verifies two base cases; it does not establish P(k).
        "3": "驗證 P(1) 與 P(2) 只是檢查了兩個初始情況，並不能確立 P(k)。",
      },
    },

    // ── t1-5-q006 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q006": {
      // EN: Consider the false statement: “For all real numbers <span class="chem">a, b \in \mathbb{R}</span>, if <span class="chem">a &lt; b</span>, then <span class="chem">a^2 &lt; b^2</span>.” Which pair <span class="chem">(a, b)</span> is a valid counterexample?
      stem: "考慮以下假命題：「對所有實數 <span class=\"chem\">a, b \\in \\mathbb{R}</span>，若 <span class=\"chem\">a &lt; b</span>，則 <span class=\"chem\">a^2 &lt; b^2</span>。」哪一對 <span class=\"chem\">(a, b)</span> 是有效的反例？",
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

    // ── t1-5-q007 · numeric · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q007": {
      // EN: In a proof by mathematical induction that <span class="chem">Sigma_{r=1}^n r(r!) = (n + 1)! - 1</span> for <span class="chem">n \in \mathbb{Z}^+</span>, the inductive step for <span class="chem">n = k + 1</span> combines the inductive hypothesis with the <span class="chem">(k + 1)</span>-th term:<br><span class="chem">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>Find the integer value of <span class="chem">A</span>.
      stem: "在用數學歸納法證明對 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">Sigma_{r=1}^n r(r!) = (n + 1)! - 1</span> 成立的過程中，<span class=\"chem\">n = k + 1</span> 的歸納步驟把歸納假設與第 <span class=\"chem\">(k + 1)</span> 項合併：<br><span class=\"chem\">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>。<br>求 (Find) 整數 <span class=\"chem\">A</span> 的值。",
      hints: [
        // EN: Factor <span class="chem">(k + 1)!</span> out of the two terms <span class="chem">1 · (k + 1)! + (k + 1)(k + 1)!</span>.
        "從兩項 <span class=\"chem\">1 · (k + 1)! + (k + 1)(k + 1)!</span> 中抽出公因式 <span class=\"chem\">(k + 1)!</span>。",
        // EN: <span class="chem">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.
        "<span class=\"chem\">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>。",
      ],
      // EN: <p>Factoring <span class="chem">(k + 1)!</span> gives <span class="chem">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>, so <span class="chem">A = 2</span>.</p>
      solution: "<p>抽出 <span class=\"chem\">(k + 1)!</span> 得 <span class=\"chem\">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>，故 <span class=\"chem\">A = 2</span>。</p>",
    },

    // ── t1-5-q008 · numeric · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q008": {
      // EN: We wish to prove by mathematical induction that <span class="chem">f(n) = 7^n + 2</span> is divisible by <span class="chem">3</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Assuming <span class="chem">7^k + 2 = 3A</span> (<span class="chem">A \in \mathbb{Z}</span>), we write <span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>. Find the integer value of <span class="chem">B</span>.
      stem: "我們欲用數學歸納法證明對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">f(n) = 7^n + 2</span> 可被 <span class=\"chem\">3</span> 整除。假設 <span class=\"chem\">7^k + 2 = 3A</span>（<span class=\"chem\">A \\in \\mathbb{Z}</span>），寫成 <span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>。求 (Find) 整數 <span class=\"chem\">B</span> 的值。",
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
        // EN: Assume, for a contradiction, that <span class="chem">log_3 7</span> is rational, so <span class="chem">log_3 7 = p / q</span> for some positive integers <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "反證假設 <span class=\"chem\">log_3 7</span> 是有理數，即存在正整數 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span> 使 <span class=\"chem\">log_3 7 = p / q</span>。",
        // EN: Rewrite the logarithmic equation in exponential form as <span class="chem">3^{p/q} = 7</span>, and raise both sides to the power <span class="chem">q</span> to obtain <span class="chem">3^p = 7^q</span>.
        "把對數方程改寫為指數形式 <span class=\"chem\">3^{p/q} = 7</span>，兩邊同取 <span class=\"chem\">q</span> 次方得 <span class=\"chem\">3^p = 7^q</span>。",
        // EN: Observe that for all <span class="chem">p, q \in \mathbb{Z}^+</span>, <span class="chem">3^p</span> is divisible by the prime <span class="chem">3</span>, whereas <span class="chem">7^q</span> has only <span class="chem">7</span> as a prime factor and is not divisible by <span class="chem">3</span>.
        "留意對所有 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>，<span class=\"chem\">3^p</span> 可被質數 <span class=\"chem\">3</span> 整除，而 <span class=\"chem\">7^q</span> 的質因數只有 <span class=\"chem\">7</span>，不能被 <span class=\"chem\">3</span> 整除。",
        // EN: This is a contradiction by the fundamental uniqueness of prime factorizations; hence <span class="chem">log_3 7</span> must be irrational.
        "根據質因數分解的唯一性，這構成矛盾；故 <span class=\"chem\">log_3 7</span> 必為無理數。",
      ],
      hints: [
        // EN: Begin by assuming the negation: <span class="chem">log_3 7 = p / q</span> with <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "先假設命題的反面：<span class=\"chem\">log_3 7 = p / q</span>，其中 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>。",
        // EN: Convert to integer powers <span class="chem">3^p = 7^q</span> and compare prime factors.
        "化為整數冪 <span class=\"chem\">3^p = 7^q</span> 並比較質因數。",
      ],
      // EN: <p>Assume <span class="chem">log_3 7 = p/q</span> (<span class="chem">p, q \in \mathbb{Z}^+</span>), deduce <span class="chem">3^p = 7^q</span>, note that <span class="chem">3</span> divides the LHS but not the RHS, and conclude by contradiction that <span class="chem">log_3 7</span> is irrational.</p>
      solution: "<p>假設 <span class=\"chem\">log_3 7 = p/q</span>（<span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>），推導出 <span class=\"chem\">3^p = 7^q</span>，指出 <span class=\"chem\">3</span> 整除左方但不整除右方，從而由反證法得出 <span class=\"chem\">log_3 7</span> 是無理數。</p>",
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
      // EN: Find the unique solution to the <span class="chem">3 × 3</span> linear system:<br><span class="chem">x + y + z = 6</span><br><span class="chem">2x - y + z = 3</span><br><span class="chem">x + 2y - z = 2</span>.<br>Find the value of <span class="chem">z</span>.
      stem: "求 (Find) 以下 <span class=\"chem\">3 × 3</span> 線性方程組的唯一解：<br><span class=\"chem\">x + y + z = 6</span><br><span class=\"chem\">2x - y + z = 3</span><br><span class=\"chem\">x + 2y - z = 2</span>。<br>求 <span class=\"chem\">z</span> 的值。",
      hints: [
        // EN: Add Equation 1 and Equation 3 to eliminate <span class="chem">z</span> immediately: <span class="chem">2x + 3y = 8</span>. Also subtract Equation 1 from Equation 2 to get <span class="chem">x - 2y = -3</span>.
        "把方程 1 與方程 3 相加即可立即消去 <span class=\"chem\">z</span>：<span class=\"chem\">2x + 3y = 8</span>。再把方程 2 減方程 1 得 <span class=\"chem\">x - 2y = -3</span>。",
        // EN: Solving <span class="chem">2x + 3y = 8</span> and <span class="chem">x - 2y = -3</span> gives <span class="chem">x = 1, y = 2</span>, and substituting into Equation 1 gives <span class="chem">z = 3</span>.
        "聯立解 <span class=\"chem\">2x + 3y = 8</span> 與 <span class=\"chem\">x - 2y = -3</span> 得 <span class=\"chem\">x = 1, y = 2</span>，代回方程 1 得 <span class=\"chem\">z = 3</span>。",
      ],
      // EN: <p>Eliminating <span class="chem">z</span> gives <span class="chem">x - 2y = -3</span> and <span class="chem">2x + 3y = 8</span>, so <span class="chem">7y = 14 =&gt; y = 2, x = 1, z = 3</span>. Check in Equation 3: <span class="chem">1 + 4 - 3 = 2</span>. Therefore <span class="chem">z = 3</span>.</p>
      solution: "<p>消去 <span class=\"chem\">z</span> 得 <span class=\"chem\">x - 2y = -3</span> 及 <span class=\"chem\">2x + 3y = 8</span>，故 <span class=\"chem\">7y = 14 =&gt; y = 2, x = 1, z = 3</span>。代入方程 3 驗算：<span class=\"chem\">1 + 4 - 3 = 2</span>。因此 <span class=\"chem\">z = 3</span>。</p>",
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
        // EN: When <span class="chem">a = -1</span>, the system has no solution.
        "當 <span class=\"chem\">a = -1</span> 時，方程組無解。",
        // EN: When <span class="chem">a = 1</span>, setting <span class="chem">z = lambda</span> gives <span class="chem">y = 1 + 2 lambda</span> and <span class="chem">x = 2 - 3 lambda</span>.
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

    // ── t1-5-q015 · numeric · exam · AHL · AHL 1.15 · 5 marks
    "t1-5-q015": {
      // EN: Let <span class="chem">f(x) = x e^{2x}</span>. It can be proved by mathematical induction that the <span class="chem">n</span>-th derivative is <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Evaluate <span class="chem">f^{(5)}(0)</span>.
      stem: "設 <span class=\"chem\">f(x) = x e^{2x}</span>。可用數學歸納法證明其 <span class=\"chem\">n</span> 階導數為 <span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>（對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>）。計算 (Evaluate) <span class=\"chem\">f^{(5)}(0)</span>。",
      hints: [
        // EN: Substitute <span class="chem">n = 5</span> and <span class="chem">x = 0</span> into <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>.
        "把 <span class=\"chem\">n = 5</span> 及 <span class=\"chem\">x = 0</span> 代入 <span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>。",
        // EN: <span class="chem">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.
        "<span class=\"chem\">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>。",
      ],
      // EN: <p>Substituting <span class="chem">n = 5</span> and <span class="chem">x = 0</span> gives <span class="chem">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>.</p>
      solution: "<p>代入 <span class=\"chem\">n = 5</span> 及 <span class=\"chem\">x = 0</span> 得 <span class=\"chem\">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>。</p>",
    },

    // ── t1-5-q016 · mcq · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q016": {
      // EN: Suppose a student attempts to prove by contradiction that <span class="chem">sqrt(4)</span> is irrational by writing <span class="chem">sqrt(4) = a / b</span> with <span class="chem">gcd(a, b) = 1</span>, squaring to get <span class="chem">a^2 = 4b^2</span>, and claiming: “Since <span class="chem">4</span> divides <span class="chem">a^2</span>, <span class="chem">4</span> must divide <span class="chem">a</span>.” Why does this step fail?
      stem: "假設一名學生嘗試用反證法證明 <span class=\"chem\">sqrt(4)</span> 是無理數：寫出 <span class=\"chem\">sqrt(4) = a / b</span>（其中 <span class=\"chem\">gcd(a, b) = 1</span>），兩邊平方得 <span class=\"chem\">a^2 = 4b^2</span>，並聲稱：「因為 <span class=\"chem\">4</span> 整除 <span class=\"chem\">a^2</span>，所以 <span class=\"chem\">4</span> 必整除 <span class=\"chem\">a</span>。」為何這一步不成立？",
      options: [
        // EN: Because <span class="chem">4</span> is composite (not prime): <span class="chem">4</span> divides <span class="chem">a^2</span> only implies <span class="chem">2</span> divides <span class="chem">a</span> (for example, <span class="chem">a = 2</span> has <span class="chem">4 | 2^2</span> but <span class="chem">4 \nmid 2</span>).
        "因為 <span class=\"chem\">4</span> 是合成數（非質數）：<span class=\"chem\">4</span> 整除 <span class=\"chem\">a^2</span> 只意味着 <span class=\"chem\">2</span> 整除 <span class=\"chem\">a</span>（例如 <span class=\"chem\">a = 2</span> 滿足 <span class=\"chem\">4 | 2^2</span>，但 <span class=\"chem\">4 \\nmid 2</span> 不成立）。",
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
      // EN: Prove by mathematical induction that for all <span class="chem">n \in \mathbb{Z}^+</span>,<br><span class="chem">Sigma_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]
      stem: "用數學歸納法證明 (Prove) 對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<br><span class=\"chem\">Sigma_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>。[7 marks]",
      hints: [
        // EN: After substituting the inductive hypothesis for <span class="chem">n = k</span>, add the <span class="chem">(k + 1)</span>-th term <span class="chem">(k + 1)2^k</span>.
        "代入 <span class=\"chem\">n = k</span> 的歸納假設後，加上第 <span class=\"chem\">(k + 1)</span> 項 <span class=\"chem\">(k + 1)2^k</span>。",
        // EN: Factor out <span class="chem">2^k</span> from <span class="chem">(k - 1)2^k + (k + 1)2^k</span> to get <span class="chem">2k · 2^k = k · 2^{k+1}</span>.
        "從 <span class=\"chem\">(k - 1)2^k + (k + 1)2^k</span> 中抽出 <span class=\"chem\">2^k</span>，得 <span class=\"chem\">2k · 2^k = k · 2^{k+1}</span>。",
      ],
      // EN: <p>Factoring <span class="chem">2^k</span> in the inductive step gives <span class="chem">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>, matching the <span class="chem">n = k + 1</span> formula.</p>
      solution: "<p>在歸納步驟中抽出 <span class=\"chem\">2^k</span> 得 <span class=\"chem\">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>，正與 <span class=\"chem\">n = k + 1</span> 的公式吻合。</p>",
      // EN: <p><strong>Base case (<span class="chem">n = 1</span>):</strong> <span class="chem">LHS = 1 · 2^0 = 1</span>; <span class="chem">RHS = (1 - 1)2^1 + 1 = 1</span>. Since <span class="chem">LHS = RHS</span>, <span class="chem">P(1)</span> is true.<br><strong>Inductive hypothesis:</strong> Assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>: <span class="chem">Sigma_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>Inductive step (<span class="chem">n = k + 1</span>):</strong><br><span class="chem">Sigma_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>Conclusion:</strong> Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>初始步驟（<span class=\"chem\">n = 1</span>）：</strong><span class=\"chem\">LHS = 1 · 2^0 = 1</span>；<span class=\"chem\">RHS = (1 - 1)2^1 + 1 = 1</span>。因為 <span class=\"chem\">LHS = RHS</span>，所以 <span class=\"chem\">P(1)</span> 成立。<br><strong>歸納假設：</strong>假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立：<span class=\"chem\">Sigma_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>。<br><strong>歸納步驟（<span class=\"chem\">n = k + 1</span>）：</strong><br><span class=\"chem\">Sigma_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>。<br><strong>結論：</strong>由於 <span class=\"chem\">P(1)</span> 成立且 <span class=\"chem\">P(k) =&gt; P(k + 1)</span>，根據數學歸納法原理，對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(n)</span> 均成立。</p>",
      markscheme: [
        // EN: A1: Base case n = 1: evaluates LHS = 1 and RHS = (0)2¹ + 1 = 1 and states P(1) is true.
        "A1：初始步驟 n = 1：計出 LHS = 1 及 RHS = (0)2¹ + 1 = 1，並寫明 P(1) 成立。",
        // EN: M1: States inductive hypothesis: assumes P(k) is true for some k ∈ ℤ⁺.
        "M1：寫出歸納假設：假設對某 k ∈ ℤ⁺，P(k) 成立。",
        // EN: M1: Considers n = k + 1 by adding the (k + 1)-th term (k + 1)2<sup>k</sup> to the assumed sum.
        "M1：考慮 n = k + 1，在假設的和加上第 (k + 1) 項 (k + 1)2<sup>k</sup>。",
        // EN: A1: Correctly writes the n = k + 1 sum as ((k − 1)2<sup>k</sup> + 1) + (k + 1)2<sup>k</sup>.
        "A1：正確寫出 n = k + 1 的和為 ((k − 1)2<sup>k</sup> + 1) + (k + 1)2<sup>k</sup>。",
        // EN: A1: Factors out 2<sup>k</sup> to get ((k − 1) + (k + 1))2<sup>k</sup> + 1 = 2k · 2<sup>k</sup> + 1.
        "A1：抽出公因式 2<sup>k</sup> 得 ((k − 1) + (k + 1))2<sup>k</sup> + 1 = 2k · 2<sup>k</sup> + 1。",
        // EN: A1: Simplifies 2k · 2<sup>k</sup> + 1 to k · 2<sup>k+1</sup> + 1 = ((k + 1) − 1)2<sup>k+1</sup> + 1.
        "A1：化簡 2k · 2<sup>k</sup> + 1 為 k · 2<sup>k+1</sup> + 1 = ((k + 1) − 1)2<sup>k+1</sup> + 1。",
        // EN: R1: States final induction conclusion sentence (awarded only if previous M marks earned).
        "R1：寫出完整的數學歸納法總結句（須已取得前述 M 分方予頒授）。",
      ],
    },

    // ── t1-5-q018 · short · exam · AHL · AHL 1.16 · 7 marks
    "t1-5-q018": {
      // EN: Consider the system of linear equations:<br><span class="chem">x - y + 2z = 1</span><br><span class="chem">2x - y + 5z = 4</span><br><span class="chem">3x - 2y + (k^2 - 2)z = k + 2</span>, where <span class="chem">k \in \mathbb{R}</span>.<br>(a) Reduce the system to row-echelon form and find the value of <span class="chem">k</span> for which the system has no solution, and the value of <span class="chem">k</span> for which it has infinitely many solutions. [4 marks]<br>(b) Find the general solution in parametric form when the system has infinitely many solutions. [3 marks]
      stem: "考慮以下線性方程組：<br><span class=\"chem\">x - y + 2z = 1</span><br><span class=\"chem\">2x - y + 5z = 4</span><br><span class=\"chem\">3x - 2y + (k^2 - 2)z = k + 2</span>，其中 <span class=\"chem\">k \\in \\mathbb{R}</span>。<br>(a) 把方程組化簡為列梯形形式，並求 (find) 使方程組無解的 <span class=\"chem\">k</span> 值及使方程組有無限多解的 <span class=\"chem\">k</span> 值。[4 marks]<br>(b) 當方程組有無限多解時，求 (Find) 其參數形式的通解。[3 marks]",
      hints: [
        // EN: Apply <span class="chem">R_2 - 2R_1</span> to get <span class="chem">y + z = 2</span>, and <span class="chem">R_3 - 3R_1</span> to get <span class="chem">y + (k^2 - 8)z = k - 1</span>.
        "進行 <span class=\"chem\">R_2 - 2R_1</span> 得 <span class=\"chem\">y + z = 2</span>，及 <span class=\"chem\">R_3 - 3R_1</span> 得 <span class=\"chem\">y + (k^2 - 8)z = k - 1</span>。",
        // EN: Subtract the new Row 2 from the new Row 3 to get <span class="chem">(k^2 - 9)z = k - 3</span>.
        "從新的第 3 行減去新的第 2 行，得 <span class=\"chem\">(k^2 - 9)z = k - 3</span>。",
      ],
      // EN: <p>(a) <span class="chem">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class="chem">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class="chem">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. Thus <span class="chem">k = -3</span> gives no solution and <span class="chem">k = 3</span> gives infinite solutions.<br>(b) With <span class="chem">z = lambda</span>, <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 1 + y - 2z = 3 - 3lambda</span>.</p>
      solution: "<p>(a) <span class=\"chem\">R_2 - 2R_1 =&gt; y + z = 2</span>；<span class=\"chem\">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>；<span class=\"chem\">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>。因此 <span class=\"chem\">k = -3</span> 時無解，<span class=\"chem\">k = 3</span> 時有無限多解。<br>(b) 設 <span class=\"chem\">z = lambda</span>，得 <span class=\"chem\">y = 2 - lambda</span> 及 <span class=\"chem\">x = 1 + y - 2z = 3 - 3lambda</span>。</p>",
      // EN: <p>(a) Row reduction gives <span class="chem">y + z = 2</span> and <span class="chem">(k^2 - 9)z = k - 3</span>. The system has <strong>no solution</strong> when <span class="chem">k = -3</span> and <strong>infinitely many solutions</strong> when <span class="chem">k = 3</span>.<br>(b) Letting <span class="chem">z = lambda</span> (<span class="chem">lambda \in \mathbb{R}</span>) gives <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 3 - 3lambda</span>.</p>
      answer: "<p>(a) 列簡化得 <span class=\"chem\">y + z = 2</span> 及 <span class=\"chem\">(k^2 - 9)z = k - 3</span>。當 <span class=\"chem\">k = -3</span> 時方程組<strong>無解</strong>，當 <span class=\"chem\">k = 3</span> 時有<strong>無限多解</strong>。<br>(b) 設 <span class=\"chem\">z = lambda</span>（<span class=\"chem\">lambda \\in \\mathbb{R}</span>），得 <span class=\"chem\">y = 2 - lambda</span> 及 <span class=\"chem\">x = 3 - 3lambda</span>。</p>",
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

    // ── t1-5-q019 · numeric · exam · AHL · AHL 1.16 · 3 marks
    "t1-5-q019": {
      // EN: Use your GDC (system solver or row reduction) to solve the system of equations:<br><span class="chem">2x + 3y - z = 4.7</span><br><span class="chem">x - 2y + 5z = -1.3</span><br><span class="chem">3x + y + 2z = 6.1</span><br>Find the value of <span class="chem">x</span>, correct to 3 significant figures.
      stem: "使用 GDC（方程組求解功能或列運算）解以下方程組：<br><span class=\"chem\">2x + 3y - z = 4.7</span><br><span class=\"chem\">x - 2y + 5z = -1.3</span><br><span class=\"chem\">3x + y + 2z = 6.1</span><br>求 (Find) <span class=\"chem\">x</span> 的值，答案準確至3 位有效數字。",
      hints: [
        // EN: Enter the augmented matrix with rows <span class="chem">[2, 3, -1 | 4.7]</span>, <span class="chem">[1, -2, 5 | -1.3]</span> and <span class="chem">[3, 1, 2 | 6.1]</span>, then use rref (or the simultaneous equation solver).
        "輸入各列為 <span class=\"chem\">[2, 3, -1 | 4.7]</span>、<span class=\"chem\">[1, -2, 5 | -1.3]</span> 及 <span class=\"chem\">[3, 1, 2 | 6.1]</span> 的增廣矩陣，然後使用 rref（或方程組求解功能）。",
        // EN: The GDC gives <span class="chem">z = -1.35</span> and <span class="chem">y ≈ -1.0786</span>. Check your values by substituting them into one of the equations.
        "GDC 給出 <span class=\"chem\">z = -1.35</span> 及 <span class=\"chem\">y ≈ -1.0786</span>。把數值代入其中一條方程以作驗算。",
      ],
      // EN: <p>The GDC gives the unique solution <span class="chem">x = 461/140 ≈ 3.29</span>, <span class="chem">y = -151/140 ≈ -1.08</span>, <span class="chem">z = -1.35</span>, so the three planes meet at one point. Check: <span class="chem">2(3.2929) + 3(-1.0786) - (-1.35) = 4.70</span>. So <span class="chem">x = 3.29</span> (3 s.f.).</p>
      solution: "<p>GDC 給出唯一解 <span class=\"chem\">x = 461/140 ≈ 3.29</span>、<span class=\"chem\">y = -151/140 ≈ -1.08</span>、<span class=\"chem\">z = -1.35</span>，故三個平面相交於一點。驗算：<span class=\"chem\">2(3.2929) + 3(-1.0786) - (-1.35) = 4.70</span>。所以 <span class=\"chem\">x = 3.29</span>（3 位有效數字）。</p>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't1-5.q', {
  questions: {

    // ── t1-5-q020 · mcq · foundation · SL · SL 1.6 · 1 mark
    "t1-5-q020": {
      // EN: The symbol <span class="chem">==</span> (“is identically equal to”) may only be used for a statement that is true for <strong>every</strong> value of the variable. Which of the following statements is an identity?
      stem: "符號 <span class=\"chem\">==</span>（「恒等於」）只可用於對變數的<strong>每一個</strong>值都成立的陳述。以下哪一個陳述是恒等式？",
      options: [
        // EN: <span class="chem">(x - 3)^2 = x^2 - 6x + 9</span>
        "<span class=\"chem\">(x - 3)^2 = x^2 - 6x + 9</span>",
        // EN: <span class="chem">x^2 - 6x + 9 = 0</span>
        "<span class=\"chem\">x^2 - 6x + 9 = 0</span>",
        // EN: <span class="chem">(x - 3)^2 = x^2 + 9</span>
        "<span class=\"chem\">(x - 3)^2 = x^2 + 9</span>",
        // EN: <span class="chem">2(x - 3) = x - 3</span>
        "<span class=\"chem\">2(x - 3) = x - 3</span>",
      ],
      hints: [
        // EN: Test each statement with two different values, for example <span class="chem">x = 0</span> and <span class="chem">x = 1</span>. An identity never fails.
        "用兩個不同的值測試每個陳述，例如 <span class=\"chem\">x = 0</span> 和 <span class=\"chem\">x = 1</span>。恒等式永遠不會不成立。",
        // EN: Expand <span class="chem">(x - 3)^2</span> fully: <span class="chem">(x - 3)(x - 3) = x^2 - 3x - 3x + 9</span>.
        "把 <span class=\"chem\">(x - 3)^2</span> 完全展開：<span class=\"chem\">(x - 3)(x - 3) = x^2 - 3x - 3x + 9</span>。",
      ],
      // EN: <p>Expanding gives <span class="chem">(x - 3)^2 = x^2 - 6x + 9</span> for every real <span class="chem">x</span>, so we may write <span class="chem">(x - 3)^2 == x^2 - 6x + 9</span>. The other three statements are equations that are true for at most one value of <span class="chem">x</span> (or are false).</p>
      solution: "<p>展開後，對每一個實數 <span class=\"chem\">x</span> 都有 <span class=\"chem\">(x - 3)^2 = x^2 - 6x + 9</span>，所以可以寫成 <span class=\"chem\">(x - 3)^2 == x^2 - 6x + 9</span>。其餘三個陳述都是方程，最多只對一個 <span class=\"chem\">x</span> 值成立（或根本不成立）。</p>",
      misconception: {
        // EN (option B): This is an equation: it is true only when x = 3, so it is not an identity and must be written with =, not ≡.
        "1": "這是一條方程：只在 x = 3 時成立，所以不是恒等式，必須用 = 而不是 ≡ 來寫。",
        // EN (option C): This statement is false for most x (try x = 1: 4 ≠ 10). Squaring a bracket gives the middle term −6x, so (x − 3)² ≢ x² + 9.
        "2": "這個陳述對大部分 x 都不成立（試 x = 1：4 ≠ 10）。把括號平方會產生中間項 −6x，所以 (x − 3)² ≢ x² + 9。",
        // EN (option D): This equation holds only for x = 3 (both sides are then 0). An identity must hold for every x.
        "3": "這條方程只在 x = 3 時成立（此時兩邊都是 0）。恒等式必須對每一個 x 都成立。",
      },
    },

    // ── t1-5-q021 · short · challenge · SL · SL 1.6 · 5 marks
    "t1-5-q021": {
      // EN: A student notices that <span class="chem">1 × 2 × 3 × 4 + 1 = 25</span> and <span class="chem">2 × 3 × 4 × 5 + 1 = 121</span>. Prove that one more than the product of any four consecutive integers is always a perfect square. [5 marks]
      stem: "一名學生注意到 <span class=\"chem\">1 × 2 × 3 × 4 + 1 = 25</span> 及 <span class=\"chem\">2 × 3 × 4 × 5 + 1 = 121</span>。證明 (Prove) 任意四個連續整數的積加 1 必定是完全平方數。[5 marks]",
      hints: [
        // EN: Decode: “prove … always” means a general algebraic proof, not more examples. Write the four integers with one letter, and aim to show the expression equals (some integer)<sup>2</sup>.
        "解碼：「證明……必定」表示需要一般的代數證明，而不是更多例子。用一個字母寫出這四個整數，目標是證明該式等於（某整數）<sup>2</sup>。",
        // EN: Multiply the outer pair and the inner pair: <span class="chem">n(n + 3) = n^2 + 3n</span> and <span class="chem">(n + 1)(n + 2) = n^2 + 3n + 2</span>.
        "把外側一對和內側一對分別相乘：<span class=\"chem\">n(n + 3) = n^2 + 3n</span> 及 <span class=\"chem\">(n + 1)(n + 2) = n^2 + 3n + 2</span>。",
        // EN: Substitute <span class="chem">m = n^2 + 3n</span>: you then need to simplify <span class="chem">m(m + 2) + 1</span>.
        "代入 <span class=\"chem\">m = n^2 + 3n</span>：接着只需化簡 <span class=\"chem\">m(m + 2) + 1</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the two numerical cases are only a pattern; the question wants a proof for every integer <span class="chem">n</span>. The hidden trick is to pair the factors so that the same quadratic <span class="chem">n^2 + 3n</span> appears twice.</p><p><span class="chem">n(n + 1)(n + 2)(n + 3) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>. With <span class="chem">m = n^2 + 3n</span> this is <span class="chem">m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>, the square of an integer. Check with <span class="chem">n = 1</span>: <span class="chem">(1 + 3 + 1)^2 = 25</span>.</p>
      solution: "<p><strong>解碼：</strong>兩個數值例子只是規律；題目要求對每一個整數 <span class=\"chem\">n</span> 作出證明。隱藏的技巧是把因式配對，使同一個二次式 <span class=\"chem\">n^2 + 3n</span> 出現兩次。</p><p><span class=\"chem\">n(n + 1)(n + 2)(n + 3) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>。設 <span class=\"chem\">m = n^2 + 3n</span>，此式為 <span class=\"chem\">m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>，是一個整數的平方。以 <span class=\"chem\">n = 1</span> 驗算：<span class=\"chem\">(1 + 3 + 1)^2 = 25</span>。</p>",
      // EN: <p>Let the integers be <span class="chem">n, n + 1, n + 2, n + 3</span> with <span class="chem">n \in \mathbb{Z}</span>. Pair the outer and inner factors:<br><span class="chem">n(n + 3) · (n + 1)(n + 2) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>.<br>Let <span class="chem">m = n^2 + 3n</span>. Then the expression is <span class="chem">m(m + 2) + 1 = m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>.<br>Since <span class="chem">n^2 + 3n + 1 \in \mathbb{Z}</span>, the expression is the square of an integer, i.e. a perfect square.</p>
      answer: "<p>設這些整數為 <span class=\"chem\">n, n + 1, n + 2, n + 3</span>，其中 <span class=\"chem\">n \\in \\mathbb{Z}</span>。把外側和內側的因式配對：<br><span class=\"chem\">n(n + 3) · (n + 1)(n + 2) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>。<br>設 <span class=\"chem\">m = n^2 + 3n</span>，則該式為 <span class=\"chem\">m(m + 2) + 1 = m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>。<br>由於 <span class=\"chem\">n^2 + 3n + 1 \\in \\mathbb{Z}</span>，該式是一個整數的平方，即完全平方數。</p>",
      markscheme: [
        // EN: M1: Represents four general consecutive integers as n, n + 1, n + 2, n + 3 with n ∈ ℤ.
        "M1：以 n, n + 1, n + 2, n + 3（n ∈ ℤ）表示四個一般的連續整數。",
        // EN: M1: Pairs the factors as n(n + 3) and (n + 1)(n + 2) (or expands fully to n⁴ + 6n³ + 11n² + 6n + 1).
        "M1：把因式配對為 n(n + 3) 及 (n + 1)(n + 2)（或完全展開為 n⁴ + 6n³ + 11n² + 6n + 1）。",
        // EN: A1: Obtains (n² + 3n)(n² + 3n + 2) + 1.
        "A1：得出 (n² + 3n)(n² + 3n + 2) + 1。",
        // EN: A1: Shows this equals (n² + 3n + 1)².
        "A1：證明此式等於 (n² + 3n + 1)²。",
        // EN: R1: States that n² + 3n + 1 is an integer, so the expression is a perfect square.
        "R1：指出 n² + 3n + 1 是整數，所以該式是完全平方數。",
      ],
    },

    // ── t1-5-q022 · numeric · exam · SL · SL 1.6 · 3 marks
    "t1-5-q022": {
      // EN: It is given that <span class="chem">x^3 + px^2 + qx + 6 == (x - 1)(x + 2)(x + r)</span>, where <span class="chem">p, q, r</span> are constants. Find the value of <span class="chem">q</span>.
      stem: "已知 <span class=\"chem\">x^3 + px^2 + qx + 6 == (x - 1)(x + 2)(x + r)</span>，其中 <span class=\"chem\">p, q, r</span> 為常數。求 (Find) <span class=\"chem\">q</span> 的值。",
      hints: [
        // EN: The symbol <span class="chem">==</span> means the two sides are equal for every <span class="chem">x</span>, so the coefficients of each power of <span class="chem">x</span> must match.
        "符號 <span class=\"chem\">==</span> 表示兩邊對每一個 <span class=\"chem\">x</span> 都相等，所以 <span class=\"chem\">x</span> 每個冪的係數都必須相同。",
        // EN: Expand the right-hand side: <span class="chem">(x - 1)(x + 2) = x^2 + x - 2</span>, then multiply by <span class="chem">(x + r)</span>.
        "展開右方：<span class=\"chem\">(x - 1)(x + 2) = x^2 + x - 2</span>，再乘以 <span class=\"chem\">(x + r)</span>。",
        // EN: Compare the constant terms first to find <span class="chem">r</span>, then compare the coefficients of <span class="chem">x</span>.
        "先比較常數項求 <span class=\"chem\">r</span>，再比較 <span class=\"chem\">x</span> 的係數。",
      ],
      // EN: <p><span class="chem">(x^2 + x - 2)(x + r) = x^3 + (r + 1)x^2 + (r - 2)x - 2r</span>.</p><p>Constant terms: <span class="chem">-2r = 6</span>, so <span class="chem">r = -3</span>. Coefficient of <span class="chem">x</span>: <span class="chem">q = r - 2 = -5</span>. (Also <span class="chem">p = r + 1 = -2</span>.)</p>
      solution: "<p><span class=\"chem\">(x^2 + x - 2)(x + r) = x^3 + (r + 1)x^2 + (r - 2)x - 2r</span>。</p><p>常數項：<span class=\"chem\">-2r = 6</span>，所以 <span class=\"chem\">r = -3</span>。<span class=\"chem\">x</span> 的係數：<span class=\"chem\">q = r - 2 = -5</span>。（另外 <span class=\"chem\">p = r + 1 = -2</span>。）</p>",
    },

    // ── t1-5-q023 · short · challenge · SL · SL 1.6 · 5 marks
    "t1-5-q023": {
      // EN: A puzzle website claims: “Pick any whole number, cube it, then subtract the number you started with. The answer can always be shared equally between six people.” Prove that the claim is true for every integer <span class="chem">n</span>. [5 marks]
      stem: "一個謎題網站聲稱：「任意選一個整數，把它立方，再減去你最初選的數。答案必定可以平均分給六個人。」證明 (Prove) 這個說法對每一個整數 <span class=\"chem\">n</span> 都成立。[5 marks]",
      hints: [
        // EN: Decode: “shared equally between six people” means “divisible by 6”. You must prove <span class="chem">6 | (n^3 - n)</span> for every integer <span class="chem">n</span>, by a direct proof.
        "解碼：「平均分給六個人」即「可被 6 整除」。你必須用直接證明，證明對每一個整數 <span class=\"chem\">n</span> 都有 <span class=\"chem\">6 | (n^3 - n)</span>。",
        // EN: Factorise <span class="chem">n^3 - n</span> completely. What do you notice about the three factors?
        "把 <span class=\"chem\">n^3 - n</span> 完全因式分解。你發現這三個因式有甚麼特點？",
        // EN: To show divisibility by <span class="chem">6</span>, show divisibility by <span class="chem">2</span> and by <span class="chem">3</span> separately.
        "要證明可被 <span class=\"chem\">6</span> 整除，可分別證明可被 <span class=\"chem\">2</span> 及 <span class=\"chem\">3</span> 整除。",
      ],
      // EN: <p><strong>Decode:</strong> the story hides the statement “<span class="chem">n^3 - n</span> is a multiple of 6”. The disguised technique is factorising into consecutive integers.</p><p><span class="chem">n^3 - n = (n - 1)n(n + 1)</span>. Three consecutive integers contain an even number and a multiple of 3, so the product is divisible by <span class="chem">2 × 3 = 6</span> (2 and 3 are coprime).</p>
      solution: "<p><strong>解碼：</strong>故事中隱藏的陳述是「<span class=\"chem\">n^3 - n</span> 是 6 的倍數」。所隱藏的技巧是因式分解成連續整數。</p><p><span class=\"chem\">n^3 - n = (n - 1)n(n + 1)</span>。三個連續整數中必有一個偶數及一個 3 的倍數，所以其積可被 <span class=\"chem\">2 × 3 = 6</span> 整除（2 與 3 互質）。</p>",
      // EN: <p>The claim is that <span class="chem">n^3 - n</span> is divisible by <span class="chem">6</span> for all <span class="chem">n \in \mathbb{Z}</span>.<br><span class="chem">n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)</span>, the product of three consecutive integers.<br>Among any two consecutive integers one is even, so the product is divisible by <span class="chem">2</span>.<br>Among any three consecutive integers one is a multiple of <span class="chem">3</span>, so the product is divisible by <span class="chem">3</span>.<br>Since <span class="chem">2</span> and <span class="chem">3</span> are coprime (distinct primes) and both divide the product, <span class="chem">6</span> divides <span class="chem">n^3 - n</span>.</p>
      answer: "<p>該說法即：對所有 <span class=\"chem\">n \\in \\mathbb{Z}</span>，<span class=\"chem\">n^3 - n</span> 可被 <span class=\"chem\">6</span> 整除。<br><span class=\"chem\">n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)</span>，是三個連續整數的積。<br>任意兩個連續整數中必有一個是偶數，所以該積可被 <span class=\"chem\">2</span> 整除。<br>任意三個連續整數中必有一個是 <span class=\"chem\">3</span> 的倍數，所以該積可被 <span class=\"chem\">3</span> 整除。<br>由於 <span class=\"chem\">2</span> 與 <span class=\"chem\">3</span> 互質（是不同的質數），且兩者都整除該積，所以 <span class=\"chem\">6</span> 整除 <span class=\"chem\">n^3 - n</span>。</p>",
      markscheme: [
        // EN: M1: Translates the claim to “n³ − n is divisible by 6” and factorises n(n² − 1).
        "M1：把說法轉化為「n³ − n 可被 6 整除」，並因式分解為 n(n² − 1)。",
        // EN: A1: Writes n³ − n = (n − 1)n(n + 1), a product of three consecutive integers.
        "A1：寫出 n³ − n = (n − 1)n(n + 1)，即三個連續整數的積。",
        // EN: R1: One of any two consecutive integers is even, so 2 divides the product.
        "R1：任意兩個連續整數中有一個是偶數，所以 2 整除該積。",
        // EN: R1: One of any three consecutive integers is a multiple of 3, so 3 divides the product.
        "R1：任意三個連續整數中有一個是 3 的倍數，所以 3 整除該積。",
        // EN: R1: Since 2 and 3 are coprime and both divide n³ − n, 6 divides n³ − n.
        "R1：由於 2 與 3 互質，且兩者都整除 n³ − n，所以 6 整除 n³ − n。",
      ],
    },

    // ── t1-5-q024 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q024": {
      // EN: Prove by mathematical induction that <span class="chem">11^n - 4^n</span> is divisible by <span class="chem">7</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]
      stem: "用數學歸納法證明 (Prove)：對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">11^n - 4^n</span> 可被 <span class=\"chem\">7</span> 整除。[6 marks]",
      hints: [
        // EN: Write the assumption as <span class="chem">11^k = 7A + 4^k</span> so that you can replace <span class="chem">11^k</span> in <span class="chem">11^{k+1} = 11 · 11^k</span>.
        "把假設寫成 <span class=\"chem\">11^k = 7A + 4^k</span>，這樣便可在 <span class=\"chem\">11^{k+1} = 11 · 11^k</span> 中替換 <span class=\"chem\">11^k</span>。",
        // EN: After substituting, collect the <span class="chem">4^k</span> terms: <span class="chem">11 · 4^k - 4 · 4^k = 7 · 4^k</span>.
        "代入後，合併 <span class=\"chem\">4^k</span> 的項：<span class=\"chem\">11 · 4^k - 4 · 4^k = 7 · 4^k</span>。",
      ],
      // EN: <p><span class="chem">11^{k+1} - 4^{k+1} = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>. With the base case <span class="chem">11 - 4 = 7</span> and the standard conclusion sentence, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      solution: "<p><span class=\"chem\">11^{k+1} - 4^{k+1} = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>。配合初始步驟 <span class=\"chem\">11 - 4 = 7</span> 及標準的總結句，結果對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。</p>",
      // EN: <p><strong>Base case:</strong> for <span class="chem">n = 1</span>, <span class="chem">11 - 4 = 7</span>, which is divisible by 7, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>, i.e. <span class="chem">11^k - 4^k = 7A</span> for some <span class="chem">A \in \mathbb{Z}</span>.<br><strong>Step:</strong> <span class="chem">11^{k+1} - 4^{k+1} = 11 · 11^k - 4 · 4^k = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>, which is divisible by 7 because <span class="chem">11A + 4^k \in \mathbb{Z}</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>初始步驟：</strong>當 <span class=\"chem\">n = 1</span>，<span class=\"chem\">11 - 4 = 7</span>，可被 7 整除，所以 <span class=\"chem\">P(1)</span> 成立。<br><strong>歸納假設：</strong>假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立，即對某 <span class=\"chem\">A \\in \\mathbb{Z}</span>，<span class=\"chem\">11^k - 4^k = 7A</span>。<br><strong>歸納步驟：</strong><span class=\"chem\">11^{k+1} - 4^{k+1} = 11 · 11^k - 4 · 4^k = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>，由於 <span class=\"chem\">11A + 4^k \\in \\mathbb{Z}</span>，此式可被 7 整除。<br><strong>結論：</strong>由於 <span class=\"chem\">P(1)</span> 成立，且若 <span class=\"chem\">P(k)</span> 成立則 <span class=\"chem\">P(k + 1)</span> 亦成立，根據數學歸納法原理，對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(n)</span> 均成立。</p>",
      markscheme: [
        // EN: A1: n = 1: 11 − 4 = 7, divisible by 7, so P(1) is true.
        "A1：n = 1：11 − 4 = 7，可被 7 整除，所以 P(1) 成立。",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺: 11<sup>k</sup> − 4<sup>k</sup> = 7A, A ∈ ℤ.
        "M1：假設對某 k ∈ ℤ⁺，P(k) 成立：11<sup>k</sup> − 4<sup>k</sup> = 7A，A ∈ ℤ。",
        // EN: M1: Writes 11<sup>k+1</sup> − 4<sup>k+1</sup> = 11 · 11<sup>k</sup> − 4 · 4<sup>k</sup>.
        "M1：寫出 11<sup>k+1</sup> − 4<sup>k+1</sup> = 11 · 11<sup>k</sup> − 4 · 4<sup>k</sup>。",
        // EN: M1: Substitutes 11<sup>k</sup> = 7A + 4<sup>k</sup> (or an equivalent use of the assumption).
        "M1：代入 11<sup>k</sup> = 7A + 4<sup>k</sup>（或以等價方式運用假設）。",
        // EN: A1: Obtains 77A + 7 · 4<sup>k</sup> = 7(11A + 4<sup>k</sup>), a multiple of 7.
        "A1：得出 77A + 7 · 4<sup>k</sup> = 7(11A + 4<sup>k</sup>)，是 7 的倍數。",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1：數學歸納法總結句（須已取得前述 M 分方予頒授）。",
      ],
    },

    // ── t1-5-q025 · short · exam · AHL · AHL 1.15, 1.14 · 7 marks
    "t1-5-q025": {
      // EN: Prove by mathematical induction that <span class="chem">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [7 marks]
      stem: "用數學歸納法證明 (Prove)：對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span>。[7 marks]",
      hints: [
        // EN: This is De Moivre’s theorem (AHL 1.14). You need the compound angle identities (topic 3.2): <span class="chem">cos(A + B) = cos A cos B - sin A sin B</span> and <span class="chem">sin(A + B) = sin A cos B + cos A sin B</span>.
        "這是棣美弗定理（AHL 1.14）。你需要用到複角公式（課題 3.2）：<span class=\"chem\">cos(A + B) = cos A cos B - sin A sin B</span> 及 <span class=\"chem\">sin(A + B) = sin A cos B + cos A sin B</span>。",
        // EN: In the step, split off one factor: <span class="chem">z^{k+1} = z^k · z</span>, replace <span class="chem">z^k</span> by the assumption and multiply out, remembering <span class="chem">i^2 = -1</span>.
        "在歸納步驟中，分出一個因子：<span class=\"chem\">z^{k+1} = z^k · z</span>，用假設替換 <span class=\"chem\">z^k</span> 並展開，記住 <span class=\"chem\">i^2 = -1</span>。",
      ],
      // EN: <p>Multiplying out <span class="chem">(cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> gives real part <span class="chem">cos(k theta)cos theta - sin(k theta)sin theta = cos((k + 1)theta)</span> and imaginary part <span class="chem">sin(k theta)cos theta + cos(k theta)sin theta = sin((k + 1)theta)</span>. Together with the base case and the conclusion sentence this completes the proof.</p>
      solution: "<p>展開 <span class=\"chem\">(cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span>，得實部 <span class=\"chem\">cos(k theta)cos theta - sin(k theta)sin theta = cos((k + 1)theta)</span> 及虛部 <span class=\"chem\">sin(k theta)cos theta + cos(k theta)sin theta = sin((k + 1)theta)</span>。配合初始步驟及總結句，證明完成。</p>",
      // EN: <p><strong>Base case:</strong> for <span class="chem">n = 1</span>, LHS <span class="chem">= cos theta + i sin theta =</span> RHS, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span><br><span class="chem">= cos(k theta)cos theta - sin(k theta)sin theta + i(sin(k theta)cos theta + cos(k theta)sin theta)</span><br><span class="chem">= cos((k + 1)theta) + i sin((k + 1)theta)</span>, using the compound angle identities.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by mathematical induction the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>初始步驟：</strong>當 <span class=\"chem\">n = 1</span>，LHS <span class=\"chem\">= cos theta + i sin theta =</span> RHS，所以 <span class=\"chem\">P(1)</span> 成立。<br><strong>歸納假設：</strong>假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span>。<br><strong>歸納步驟：</strong><span class=\"chem\">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span><br><span class=\"chem\">= cos(k theta)cos theta - sin(k theta)sin theta + i(sin(k theta)cos theta + cos(k theta)sin theta)</span><br><span class=\"chem\">= cos((k + 1)theta) + i sin((k + 1)theta)</span>（利用複角公式）。<br><strong>結論：</strong>由於 <span class=\"chem\">P(1)</span> 成立，且若 <span class=\"chem\">P(k)</span> 成立則 <span class=\"chem\">P(k + 1)</span> 亦成立，根據數學歸納法，結果對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。</p>",
      markscheme: [
        // EN: A1: n = 1: (cos θ + i sin θ)¹ = cos θ + i sin θ, so P(1) is true.
        "A1：n = 1：(cos θ + i sin θ)¹ = cos θ + i sin θ，所以 P(1) 成立。",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺.
        "M1：假設對某 k ∈ ℤ⁺，P(k) 成立。",
        // EN: M1: Writes (cos θ + i sin θ)<sup>k+1</sup> = (cos kθ + i sin kθ)(cos θ + i sin θ) using the assumption.
        "M1：利用假設寫出 (cos θ + i sin θ)<sup>k+1</sup> = (cos kθ + i sin kθ)(cos θ + i sin θ)。",
        // EN: A1: Expands correctly, using i² = −1: cos kθ cos θ − sin kθ sin θ + i(sin kθ cos θ + cos kθ sin θ).
        "A1：利用 i² = −1 正確展開：cos kθ cos θ − sin kθ sin θ + i(sin kθ cos θ + cos kθ sin θ)。",
        // EN: M1: Uses the compound angle identities for cos(A + B) and sin(A + B).
        "M1：運用 cos(A + B) 及 sin(A + B) 的複角公式。",
        // EN: A1: Obtains cos((k + 1)θ) + i sin((k + 1)θ).
        "A1：得出 cos((k + 1)θ) + i sin((k + 1)θ)。",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1：數學歸納法總結句（須已取得前述 M 分方予頒授）。",
      ],
    },

    // ── t1-5-q026 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q026": {
      // EN: Let <span class="chem">f(x) = 1 / (1 - 2x)</span>, <span class="chem">x != 1/2</span>. Prove by mathematical induction that <span class="chem">f^{(n)}(x) = (2^n n!) / (1 - 2x)^{n+1}</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]
      stem: "設 <span class=\"chem\">f(x) = 1 / (1 - 2x)</span>，<span class=\"chem\">x != 1/2</span>。用數學歸納法證明 (Prove)：對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">f^{(n)}(x) = (2^n n!) / (1 - 2x)^{n+1}</span>。[6 marks]",
      hints: [
        // EN: You need the chain rule (topic 5.1): <span class="chem">d/dx (1 - 2x)^m = m(1 - 2x)^{m-1} · (-2)</span>.
        "你需要用到鏈式法則（課題 5.1）：<span class=\"chem\">d/dx (1 - 2x)^m = m(1 - 2x)^{m-1} · (-2)</span>。",
        // EN: In the step, differentiate the formula for <span class="chem">n = k</span> once. The two minus signs cancel, and <span class="chem">(k + 1) · k! = (k + 1)!</span>.
        "在歸納步驟中，把 <span class=\"chem\">n = k</span> 的公式求導一次。兩個負號互相抵消，而且 <span class=\"chem\">(k + 1) · k! = (k + 1)!</span>。",
      ],
      // EN: <p>The key step is <span class="chem">d/dx (1 - 2x)^{-(k+1)} = 2(k + 1)(1 - 2x)^{-(k+2)}</span>, so <span class="chem">f^{(k+1)}(x) = 2^k k! · 2(k + 1)(1 - 2x)^{-(k+2)} = 2^{k+1}(k + 1)!/(1 - 2x)^{k+2}</span>.</p>
      solution: "<p>關鍵步驟是 <span class=\"chem\">d/dx (1 - 2x)^{-(k+1)} = 2(k + 1)(1 - 2x)^{-(k+2)}</span>，所以 <span class=\"chem\">f^{(k+1)}(x) = 2^k k! · 2(k + 1)(1 - 2x)^{-(k+2)} = 2^{k+1}(k + 1)!/(1 - 2x)^{k+2}</span>。</p>",
      // EN: <p><strong>Base case:</strong> <span class="chem">f(x) = (1 - 2x)^{-1}</span>, so <span class="chem">f'(x) = -(1 - 2x)^{-2} · (-2) = 2 / (1 - 2x)^2</span>, and the formula gives <span class="chem">(2^1 · 1!) / (1 - 2x)^2 = 2 / (1 - 2x)^2</span>. So <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">f^{(k)}(x) = 2^k k! (1 - 2x)^{-(k+1)}</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">f^{(k+1)}(x) = d/dx [2^k k! (1 - 2x)^{-(k+1)}] = 2^k k! · (-(k + 1))(1 - 2x)^{-(k+2)} · (-2)</span><br><span class="chem">= 2^{k+1}(k + 1)! (1 - 2x)^{-(k+2)} = (2^{k+1}(k + 1)!) / (1 - 2x)^{k+2}</span>, which is the formula with <span class="chem">n = k + 1</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span> by mathematical induction.</p>
      answer: "<p><strong>初始步驟：</strong><span class=\"chem\">f(x) = (1 - 2x)^{-1}</span>，所以 <span class=\"chem\">f'(x) = -(1 - 2x)^{-2} · (-2) = 2 / (1 - 2x)^2</span>，而公式給出 <span class=\"chem\">(2^1 · 1!) / (1 - 2x)^2 = 2 / (1 - 2x)^2</span>。所以 <span class=\"chem\">P(1)</span> 成立。<br><strong>歸納假設：</strong>假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">f^{(k)}(x) = 2^k k! (1 - 2x)^{-(k+1)}</span>。<br><strong>歸納步驟：</strong><span class=\"chem\">f^{(k+1)}(x) = d/dx [2^k k! (1 - 2x)^{-(k+1)}] = 2^k k! · (-(k + 1))(1 - 2x)^{-(k+2)} · (-2)</span><br><span class=\"chem\">= 2^{k+1}(k + 1)! (1 - 2x)^{-(k+2)} = (2^{k+1}(k + 1)!) / (1 - 2x)^{k+2}</span>，即 <span class=\"chem\">n = k + 1</span> 時的公式。<br><strong>結論：</strong>由於 <span class=\"chem\">P(1)</span> 成立，且若 <span class=\"chem\">P(k)</span> 成立則 <span class=\"chem\">P(k + 1)</span> 亦成立，根據數學歸納法，結果對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。</p>",
      markscheme: [
        // EN: A1: Shows f′(x) = 2/(1 − 2x)² and that this matches the formula for n = 1, so P(1) is true.
        "A1：證明 f′(x) = 2/(1 − 2x)²，並指出這與 n = 1 時的公式相符，所以 P(1) 成立。",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺.
        "M1：假設對某 k ∈ ℤ⁺，P(k) 成立。",
        // EN: M1: Differentiates the assumed f<sup>(k)</sup>(x) using the chain rule.
        "M1：利用鏈式法則對假設的 f<sup>(k)</sup>(x) 求導。",
        // EN: A1: Obtains 2<sup>k</sup> k! · (−(k + 1))(1 − 2x)<sup>−(k+2)</sup> · (−2).
        "A1：得出 2<sup>k</sup> k! · (−(k + 1))(1 − 2x)<sup>−(k+2)</sup> · (−2)。",
        // EN: A1: Simplifies to 2<sup>k+1</sup>(k + 1)!/(1 − 2x)<sup>k+2</sup>.
        "A1：化簡為 2<sup>k+1</sup>(k + 1)!/(1 − 2x)<sup>k+2</sup>。",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1：數學歸納法總結句（須已取得前述 M 分方予頒授）。",
      ],
    },

    // ── t1-5-q027 · short · challenge · AHL · AHL 1.15 · 7 marks
    "t1-5-q027": {
      // EN: A computer scientist compares two algorithms. One takes <span class="chem">n!</span> steps and the other <span class="chem">3^n</span> steps for an input of size <span class="chem">n \in \mathbb{Z}^+</span>.<br>(a) Find the smallest positive integer <span class="chem">n_0</span> such that <span class="chem">n! &gt; 3^n</span> for <span class="chem">n = n_0</span>, showing that the inequality fails for <span class="chem">n = n_0 - 1</span>. [2 marks]<br>(b) Prove by mathematical induction that <span class="chem">n! &gt; 3^n</span> for all integers <span class="chem">n &gt;= n_0</span>. [5 marks]
      stem: "一名電腦科學家比較兩個演算法。對大小為 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 的輸入，一個需要 <span class=\"chem\">n!</span> 步，另一個需要 <span class=\"chem\">3^n</span> 步。<br>(a) 求 (Find) 使 <span class=\"chem\">n = n_0</span> 時 <span class=\"chem\">n! &gt; 3^n</span> 的最小正整數 <span class=\"chem\">n_0</span>，並說明不等式在 <span class=\"chem\">n = n_0 - 1</span> 時不成立。[2 marks]<br>(b) 用數學歸納法證明 (Prove)：對所有整數 <span class=\"chem\">n &gt;= n_0</span>，<span class=\"chem\">n! &gt; 3^n</span>。[5 marks]",
      hints: [
        // EN: Decode: the algorithm story is just the inequality <span class="chem">n! &gt; 3^n</span>. The hidden condition is that the base case is not <span class="chem">n = 1</span>: you must first find where the inequality starts to hold.
        "解碼：演算法的故事其實只是不等式 <span class=\"chem\">n! &gt; 3^n</span>。隱藏的條件是初始步驟不是 <span class=\"chem\">n = 1</span>：你必須先找出不等式從哪裏開始成立。",
        // EN: Make a small table of <span class="chem">n!</span> and <span class="chem">3^n</span> for <span class="chem">n = 1, ..., 7</span>.
        "為 <span class=\"chem\">n = 1, ..., 7</span> 列出 <span class=\"chem\">n!</span> 及 <span class=\"chem\">3^n</span> 的小表。",
        // EN: In the inductive step use <span class="chem">(k + 1)! = (k + 1) · k!</span>, then the assumption, then the fact that <span class="chem">k + 1 &gt; 3</span>.
        "在歸納步驟中，先用 <span class=\"chem\">(k + 1)! = (k + 1) · k!</span>，再用假設，最後用 <span class=\"chem\">k + 1 &gt; 3</span> 這個事實。",
      ],
      // EN: <p><strong>Decode:</strong> this is an induction proof of an inequality with a base case <span class="chem">n_0 &gt; 1</span>, which you find by testing small values.</p><p>(a) <span class="chem">6! = 720 &lt; 729</span>, <span class="chem">7! = 5040 &gt; 2187</span>, so <span class="chem">n_0 = 7</span>.<br>(b) <span class="chem">(k + 1)! = (k + 1)k! &gt; (k + 1)3^k &gt; 3 · 3^k = 3^{k+1}</span>, using <span class="chem">k + 1 &gt;= 8 &gt; 3</span>.</p>
      solution: "<p><strong>解碼：</strong>這是一個不等式的歸納證明，其初始步驟 <span class=\"chem\">n_0 &gt; 1</span>，要透過測試細小的值來找出。</p><p>(a) <span class=\"chem\">6! = 720 &lt; 729</span>，<span class=\"chem\">7! = 5040 &gt; 2187</span>，所以 <span class=\"chem\">n_0 = 7</span>。<br>(b) 利用 <span class=\"chem\">k + 1 &gt;= 8 &gt; 3</span>，<span class=\"chem\">(k + 1)! = (k + 1)k! &gt; (k + 1)3^k &gt; 3 · 3^k = 3^{k+1}</span>。</p>",
      // EN: <p>(a) <span class="chem">6! = 720 &lt; 729 = 3^6</span>, but <span class="chem">7! = 5040 &gt; 2187 = 3^7</span> (and the inequality also fails for <span class="chem">n = 1, ..., 5</span>). So <span class="chem">n_0 = 7</span>.<br>(b) The base case <span class="chem">n = 7</span> is shown in (a). Assume <span class="chem">k! &gt; 3^k</span> for some integer <span class="chem">k &gt;= 7</span>. Then <span class="chem">(k + 1)! = (k + 1) · k! &gt; (k + 1) · 3^k</span>. Since <span class="chem">k &gt;= 7</span>, <span class="chem">k + 1 &gt; 3</span>, so <span class="chem">(k + 1) · 3^k &gt; 3 · 3^k = 3^{k+1}</span>. Hence <span class="chem">(k + 1)! &gt; 3^{k+1}</span>. Since the result is true for <span class="chem">n = 7</span>, and true for <span class="chem">n = k</span> implies true for <span class="chem">n = k + 1</span>, by mathematical induction it is true for all integers <span class="chem">n &gt;= 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">6! = 720 &lt; 729 = 3^6</span>，但 <span class=\"chem\">7! = 5040 &gt; 2187 = 3^7</span>（而不等式在 <span class=\"chem\">n = 1, ..., 5</span> 時亦不成立）。所以 <span class=\"chem\">n_0 = 7</span>。<br>(b) 初始步驟 <span class=\"chem\">n = 7</span> 已在 (a) 證明。假設對某整數 <span class=\"chem\">k &gt;= 7</span>，<span class=\"chem\">k! &gt; 3^k</span>。則 <span class=\"chem\">(k + 1)! = (k + 1) · k! &gt; (k + 1) · 3^k</span>。由於 <span class=\"chem\">k &gt;= 7</span>，<span class=\"chem\">k + 1 &gt; 3</span>，所以 <span class=\"chem\">(k + 1) · 3^k &gt; 3 · 3^k = 3^{k+1}</span>。因此 <span class=\"chem\">(k + 1)! &gt; 3^{k+1}</span>。由於結果在 <span class=\"chem\">n = 7</span> 時成立，且若在 <span class=\"chem\">n = k</span> 時成立則在 <span class=\"chem\">n = k + 1</span> 時亦成立，根據數學歸納法，結果對所有整數 <span class=\"chem\">n &gt;= 7</span> 成立。</p>",
      markscheme: [
        // EN: A1: (a) Evaluates 6! = 720 and 3⁶ = 729, so the inequality fails for n = 6.
        "A1：(a) 計出 6! = 720 及 3⁶ = 729，所以不等式在 n = 6 時不成立。",
        // EN: A1: (a) Evaluates 7! = 5040 > 2187 = 3⁷, so n₀ = 7.
        "A1：(a) 計出 7! = 5040 > 2187 = 3⁷，所以 n₀ = 7。",
        // EN: M1: (b) Assumes k! > 3<sup>k</sup> for some integer k ≥ 7 (base case n = 7 from part (a)).
        "M1：(b) 假設對某整數 k ≥ 7，k! > 3<sup>k</sup>（初始步驟 n = 7 來自 (a) 部）。",
        // EN: M1: (b) Writes (k + 1)! = (k + 1) · k! > (k + 1) · 3<sup>k</sup>.
        "M1：(b) 寫出 (k + 1)! = (k + 1) · k! > (k + 1) · 3<sup>k</sup>。",
        // EN: R1: (b) Uses k + 1 > 3 (because k ≥ 7) to deduce (k + 1) · 3<sup>k</sup> > 3 · 3<sup>k</sup>.
        "R1：(b) 利用 k + 1 > 3（因為 k ≥ 7）推出 (k + 1) · 3<sup>k</sup> > 3 · 3<sup>k</sup>。",
        // EN: A1: (b) Concludes (k + 1)! > 3<sup>k+1</sup>.
        "A1：(b) 總結得 (k + 1)! > 3<sup>k+1</sup>。",
        // EN: R1: (b) Induction conclusion sentence for all n ≥ 7 (only if the M marks above are earned).
        "R1：(b) 對所有 n ≥ 7 的數學歸納法總結句（須已取得前述 M 分方予頒授）。",
      ],
    },

    // ── t1-5-q028 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q028": {
      // EN: A sequence is defined by <span class="chem">u_1 = 1</span> and <span class="chem">u_{n+1} = 2u_n + 3</span> for <span class="chem">n \in \mathbb{Z}^+</span>. It can be proved by induction that <span class="chem">u_n = p · 2^n + q</span> for all <span class="chem">n \in \mathbb{Z}^+</span>, where <span class="chem">p</span> and <span class="chem">q</span> are constants. By first finding <span class="chem">p</span> and <span class="chem">q</span>, find the value of <span class="chem">u_{12}</span>.
      stem: "一個數列定義為 <span class=\"chem\">u_1 = 1</span> 及 <span class=\"chem\">u_{n+1} = 2u_n + 3</span>，其中 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>。可用歸納法證明對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">u_n = p · 2^n + q</span>，其中 <span class=\"chem\">p</span> 和 <span class=\"chem\">q</span> 為常數。先求出 <span class=\"chem\">p</span> 和 <span class=\"chem\">q</span>，然後求 (Find) <span class=\"chem\">u_{12}</span> 的值。",
      hints: [
        // EN: Decode: you do not need to iterate eleven times. Use two known terms to find <span class="chem">p</span> and <span class="chem">q</span>, then substitute <span class="chem">n = 12</span> into the closed form.
        "解碼：你不需要迭代十一次。用兩個已知項求出 <span class=\"chem\">p</span> 和 <span class=\"chem\">q</span>，再把 <span class=\"chem\">n = 12</span> 代入通項公式。",
        // EN: From the recurrence, <span class="chem">u_2 = 2(1) + 3 = 5</span>. So <span class="chem">2p + q = 1</span> and <span class="chem">4p + q = 5</span>.
        "由遞歸關係得 <span class=\"chem\">u_2 = 2(1) + 3 = 5</span>。所以 <span class=\"chem\">2p + q = 1</span> 及 <span class=\"chem\">4p + q = 5</span>。",
        // EN: Solving gives <span class="chem">p = 2</span>, <span class="chem">q = -3</span>, so <span class="chem">u_n = 2^{n+1} - 3</span>.
        "解得 <span class=\"chem\">p = 2</span>、<span class=\"chem\">q = -3</span>，所以 <span class=\"chem\">u_n = 2^{n+1} - 3</span>。",
      ],
      // EN: <p><span class="chem">u_1 = 2p + q = 1</span> and <span class="chem">u_2 = 4p + q = 5</span>, so <span class="chem">p = 2</span> and <span class="chem">q = -3</span>: <span class="chem">u_n = 2^{n+1} - 3</span>. Check: <span class="chem">u_3 = 2(5) + 3 = 13 = 2^4 - 3</span>. Then <span class="chem">u_{12} = 2^{13} - 3 = 8192 - 3 = 8189</span>.</p>
      solution: "<p><span class=\"chem\">u_1 = 2p + q = 1</span> 及 <span class=\"chem\">u_2 = 4p + q = 5</span>，所以 <span class=\"chem\">p = 2</span> 及 <span class=\"chem\">q = -3</span>：<span class=\"chem\">u_n = 2^{n+1} - 3</span>。驗算：<span class=\"chem\">u_3 = 2(5) + 3 = 13 = 2^4 - 3</span>。於是 <span class=\"chem\">u_{12} = 2^{13} - 3 = 8192 - 3 = 8189</span>。</p>",
    },

    // ── t1-5-q029 · short · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q029": {
      // EN: Prove by contradiction that there are no integers <span class="chem">a</span> and <span class="chem">b</span> such that <span class="chem">14a + 21b = 100</span>. [4 marks]
      stem: "用反證法證明 (Prove)：不存在整數 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 使得 <span class=\"chem\">14a + 21b = 100</span>。[4 marks]",
      hints: [
        // EN: Start with “Assume there exist integers <span class="chem">a</span> and <span class="chem">b</span> such that …”.
        "以「假設存在整數 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 使得……」開始。",
        // EN: Look for a common factor of <span class="chem">14</span> and <span class="chem">21</span>.
        "找出 <span class=\"chem\">14</span> 和 <span class=\"chem\">21</span> 的公因數。",
      ],
      // EN: <p>The left-hand side <span class="chem">14a + 21b = 7(2a + 3b)</span> is always a multiple of 7 when <span class="chem">a, b \in \mathbb{Z}</span>, but <span class="chem">100</span> leaves remainder 2 on division by 7. This contradiction shows no integer solution exists.</p>
      solution: "<p>當 <span class=\"chem\">a, b \\in \\mathbb{Z}</span>，左方 <span class=\"chem\">14a + 21b = 7(2a + 3b)</span> 必定是 7 的倍數，但 <span class=\"chem\">100</span> 除以 7 的餘數是 2。這個矛盾說明不存在整數解。</p>",
      // EN: <p>Assume, for a contradiction, that there exist integers <span class="chem">a, b</span> with <span class="chem">14a + 21b = 100</span>. Then <span class="chem">7(2a + 3b) = 100</span>. Since <span class="chem">2a + 3b \in \mathbb{Z}</span>, this means <span class="chem">7</span> divides <span class="chem">100</span>. But <span class="chem">100 = 7 × 14 + 2</span>, so <span class="chem">7</span> does not divide <span class="chem">100</span>: a contradiction. Hence no such integers exist.</p>
      answer: "<p>為導出矛盾，假設存在整數 <span class=\"chem\">a, b</span> 使得 <span class=\"chem\">14a + 21b = 100</span>。則 <span class=\"chem\">7(2a + 3b) = 100</span>。由於 <span class=\"chem\">2a + 3b \\in \\mathbb{Z}</span>，這表示 <span class=\"chem\">7</span> 整除 <span class=\"chem\">100</span>。但 <span class=\"chem\">100 = 7 × 14 + 2</span>，所以 <span class=\"chem\">7</span> 不整除 <span class=\"chem\">100</span>：矛盾。因此不存在這樣的整數。</p>",
      markscheme: [
        // EN: M1: Assumes (for a contradiction) that integers a and b exist with 14a + 21b = 100.
        "M1：（為導出矛盾）假設存在整數 a 和 b 使得 14a + 21b = 100。",
        // EN: A1: Factorises the left-hand side: 7(2a + 3b) = 100.
        "A1：把左方因式分解：7(2a + 3b) = 100。",
        // EN: R1: States that 2a + 3b is an integer, so 7 would divide 100.
        "R1：指出 2a + 3b 是整數，所以 7 會整除 100。",
        // EN: R1: 7 does not divide 100 (100 = 7 × 14 + 2), a contradiction, so no such integers exist.
        "R1：7 不整除 100（100 = 7 × 14 + 2），矛盾，所以不存在這樣的整數。",
      ],
    },

    // ── t1-5-q030 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q030": {
      // EN: Prove by contradiction that <span class="chem">∛2</span>, the real cube root of 2, is irrational. You may assume that the cube of an odd integer is odd. [6 marks]
      stem: "用反證法證明 (Prove) 2 的實數立方根 <span class=\"chem\">∛2</span> 是無理數。你可假設奇數的立方是奇數。[6 marks]",
      hints: [
        // EN: Assume the opposite: <span class="chem">∛2 = a/b</span> in lowest terms, then cube both sides.
        "假設相反的情況：<span class=\"chem\">∛2 = a/b</span>（最簡分數），然後把兩邊立方。",
        // EN: Show first that <span class="chem">a</span> must be even, write <span class="chem">a = 2c</span>, and substitute back.
        "先證明 <span class=\"chem\">a</span> 必須是偶數，寫成 <span class=\"chem\">a = 2c</span>，再代回去。",
      ],
      // EN: <p>From <span class="chem">a^3 = 2b^3</span>, <span class="chem">a</span> is even; writing <span class="chem">a = 2c</span> gives <span class="chem">b^3 = 4c^3</span>, so <span class="chem">b</span> is even too. A fraction in lowest terms cannot have both parts even, which is the contradiction.</p>
      solution: "<p>由 <span class=\"chem\">a^3 = 2b^3</span> 可知 <span class=\"chem\">a</span> 是偶數；寫成 <span class=\"chem\">a = 2c</span> 得 <span class=\"chem\">b^3 = 4c^3</span>，所以 <span class=\"chem\">b</span> 也是偶數。最簡分數的分子和分母不可能同時是偶數，這就是矛盾所在。</p>",
      // EN: <p>Assume <span class="chem">∛2</span> is rational, so <span class="chem">∛2 = a/b</span> with <span class="chem">a, b \in \mathbb{Z}^+</span> and <span class="chem">gcd(a, b) = 1</span>. Cubing gives <span class="chem">a^3 = 2b^3</span>, so <span class="chem">a^3</span> is even. If <span class="chem">a</span> were odd, <span class="chem">a^3</span> would be odd, so <span class="chem">a</span> is even: <span class="chem">a = 2c</span>, <span class="chem">c \in \mathbb{Z}^+</span>. Then <span class="chem">8c^3 = 2b^3</span>, so <span class="chem">b^3 = 4c^3</span> is even and therefore <span class="chem">b</span> is even. So <span class="chem">a</span> and <span class="chem">b</span> are both even, contradicting <span class="chem">gcd(a, b) = 1</span>. Hence <span class="chem">∛2</span> is irrational.</p>
      answer: "<p>假設 <span class=\"chem\">∛2</span> 是有理數，則 <span class=\"chem\">∛2 = a/b</span>，其中 <span class=\"chem\">a, b \\in \\mathbb{Z}^+</span> 且 <span class=\"chem\">gcd(a, b) = 1</span>。立方得 <span class=\"chem\">a^3 = 2b^3</span>，所以 <span class=\"chem\">a^3</span> 是偶數。若 <span class=\"chem\">a</span> 是奇數，<span class=\"chem\">a^3</span> 便會是奇數，所以 <span class=\"chem\">a</span> 是偶數：<span class=\"chem\">a = 2c</span>，<span class=\"chem\">c \\in \\mathbb{Z}^+</span>。則 <span class=\"chem\">8c^3 = 2b^3</span>，所以 <span class=\"chem\">b^3 = 4c^3</span> 是偶數，因此 <span class=\"chem\">b</span> 是偶數。於是 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 都是偶數，與 <span class=\"chem\">gcd(a, b) = 1</span> 矛盾。因此 <span class=\"chem\">∛2</span> 是無理數。</p>",
      markscheme: [
        // EN: M1: Assumes ∛2 = a/b with a, b ∈ ℤ⁺ and gcd(a, b) = 1.
        "M1：假設 ∛2 = a/b，其中 a, b ∈ ℤ⁺ 且 gcd(a, b) = 1。",
        // EN: A1: Cubes to obtain a³ = 2b³.
        "A1：立方得 a³ = 2b³。",
        // EN: R1: a³ is even, so a is even (since the cube of an odd integer is odd).
        "R1：a³ 是偶數，所以 a 是偶數（因為奇數的立方是奇數）。",
        // EN: A1: Substitutes a = 2c to obtain b³ = 4c³.
        "A1：代入 a = 2c 得 b³ = 4c³。",
        // EN: R1: Hence b³ is even, so b is even.
        "R1：因此 b³ 是偶數，所以 b 是偶數。",
        // EN: R1: Both a and b even contradicts gcd(a, b) = 1, so ∛2 is irrational.
        "R1：a 和 b 都是偶數與 gcd(a, b) = 1 矛盾，所以 ∛2 是無理數。",
      ],
    },

    // ── t1-5-q031 · numeric · exam · AHL · AHL 1.15 · 3 marks
    "t1-5-q031": {
      // EN: Consider the conjecture: “For every prime number <span class="chem">p</span>, the number <span class="chem">2^p - 1</span> is also prime.” Find the smallest prime <span class="chem">p</span> that is a counterexample to this conjecture. (You may use <span class="chem">2047 = 23 × 89</span>.)
      stem: "考慮以下猜想：「對每一個質數 <span class=\"chem\">p</span>，數 <span class=\"chem\">2^p - 1</span> 也是質數。」求 (Find) 這個猜想的最小質數反例 <span class=\"chem\">p</span>。（你可使用 <span class=\"chem\">2047 = 23 × 89</span>。）",
      hints: [
        // EN: A counterexample is a prime <span class="chem">p</span> for which <span class="chem">2^p - 1</span> is <strong>not</strong> prime. Test the primes in increasing order.
        "反例是一個使 <span class=\"chem\">2^p - 1</span> <strong>不是</strong>質數的質數 <span class=\"chem\">p</span>。由小至大逐一測試質數。",
        // EN: <span class="chem">2^2 - 1 = 3</span>, <span class="chem">2^3 - 1 = 7</span>, <span class="chem">2^5 - 1 = 31</span> and <span class="chem">2^7 - 1 = 127</span> are all prime. Which prime comes next?
        "<span class=\"chem\">2^2 - 1 = 3</span>、<span class=\"chem\">2^3 - 1 = 7</span>、<span class=\"chem\">2^5 - 1 = 31</span> 及 <span class=\"chem\">2^7 - 1 = 127</span> 全都是質數。下一個質數是甚麼？",
      ],
      // EN: <p>For <span class="chem">p = 2, 3, 5, 7</span> we get <span class="chem">3, 7, 31, 127</span>, all prime. For <span class="chem">p = 11</span>, <span class="chem">2^{11} - 1 = 2047 = 23 × 89</span>, which is composite. So the smallest counterexample is <span class="chem">p = 11</span>. One counterexample is enough to disprove the conjecture.</p>
      solution: "<p>當 <span class=\"chem\">p = 2, 3, 5, 7</span>，得 <span class=\"chem\">3, 7, 31, 127</span>，全都是質數。當 <span class=\"chem\">p = 11</span>，<span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span>，是合成數。所以最小的反例是 <span class=\"chem\">p = 11</span>。一個反例已足以推翻猜想。</p>",
    },

    // ── t1-5-q032 · mcq · foundation · AHL · AHL 1.15 · 1 mark
    "t1-5-q032": {
      // EN: A student wants to prove by contradiction that <span class="chem">sqrt(7)</span> is irrational. What should the first line of the proof assume?
      stem: "一名學生想用反證法證明 <span class=\"chem\">sqrt(7)</span> 是無理數。證明的第一行應假設甚麼？",
      options: [
        // EN: <span class="chem">sqrt(7) = p/q</span> for some <span class="chem">p, q \in \mathbb{Z}^+</span> with <span class="chem">gcd(p, q) = 1</span>.
        "對某 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>（<span class=\"chem\">gcd(p, q) = 1</span>），<span class=\"chem\">sqrt(7) = p/q</span>。",
        // EN: <span class="chem">sqrt(7)</span> is irrational.
        "<span class=\"chem\">sqrt(7)</span> 是無理數。",
        // EN: <span class="chem">sqrt(7) = p/q</span> where <span class="chem">p</span> and <span class="chem">q</span> are irrational numbers.
        "<span class=\"chem\">sqrt(7) = p/q</span>，其中 <span class=\"chem\">p</span> 和 <span class=\"chem\">q</span> 是無理數。",
        // EN: <span class="chem">7 = p^2 / q^2</span> for all <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "對所有 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>，<span class=\"chem\">7 = p^2 / q^2</span>。",
      ],
      hints: [
        // EN: Proof by contradiction: assume the <strong>opposite</strong> of what you want to prove.
        "反證法：假設你想證明的結論的<strong>相反</strong>。",
        // EN: What is the definition of a rational number?
        "有理數的定義是甚麼？",
      ],
      // EN: <p>The negation of “<span class="chem">sqrt(7)</span> is irrational” is “<span class="chem">sqrt(7)</span> is rational”, i.e. <span class="chem">sqrt(7) = p/q</span> for some positive integers with no common factor. The proof then derives a contradiction from this assumption.</p>
      solution: "<p>「<span class=\"chem\">sqrt(7)</span> 是無理數」的否定是「<span class=\"chem\">sqrt(7)</span> 是有理數」，即對某兩個沒有公因數的正整數，<span class=\"chem\">sqrt(7) = p/q</span>。然後證明會從這個假設推導出矛盾。</p>",
      misconception: {
        // EN (option B): This is the statement you want to prove. A proof by contradiction starts by assuming its negation (that √7 is rational).
        "1": "這是你想證明的陳述。反證法是從假設其否定（即 √7 是有理數）開始。",
        // EN (option C): A rational number is a ratio of integers. Allowing p and q to be irrational says nothing (√7 = √7/1 already).
        "2": "有理數是兩個整數之比。容許 p 和 q 是無理數沒有任何意義（√7 = √7/1 已經成立）。",
        // EN (option D): “For all p, q” is false and is not the negation of the statement. You assume the existence of one particular pair p, q.
        "3": "「對所有 p, q」是錯誤的，也不是該陳述的否定。你要假設的是存在一對特定的 p, q。",
      },
    },

    // ── t1-5-q033 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q033": {
      // EN: Solve the system of equations<br><span class="chem">x + 2y - z = 1</span><br><span class="chem">2x - y + 3z = 12</span><br><span class="chem">3x + y + z = 10</span><br>and hence find the value of <span class="chem">z</span>.
      stem: "解方程組<br><span class=\"chem\">x + 2y - z = 1</span><br><span class=\"chem\">2x - y + 3z = 12</span><br><span class=\"chem\">3x + y + z = 10</span><br>並由此 (Hence) 求 <span class=\"chem\">z</span> 的值。",
      hints: [
        // EN: Eliminate <span class="chem">x</span>: use <span class="chem">R_2 - 2R_1</span> and <span class="chem">R_3 - 3R_1</span>.
        "消去 <span class=\"chem\">x</span>：使用 <span class=\"chem\">R_2 - 2R_1</span> 及 <span class=\"chem\">R_3 - 3R_1</span>。",
        // EN: You should get <span class="chem">-5y + 5z = 10</span> and <span class="chem">-5y + 4z = 7</span>. Subtract these to find <span class="chem">z</span>.
        "你應得到 <span class=\"chem\">-5y + 5z = 10</span> 及 <span class=\"chem\">-5y + 4z = 7</span>。兩式相減便可求得 <span class=\"chem\">z</span>。",
      ],
      // EN: <p><span class="chem">R_2 - 2R_1: -5y + 5z = 10</span>, i.e. <span class="chem">-y + z = 2</span>. <span class="chem">R_3 - 3R_1: -5y + 4z = 7</span>. Subtracting: <span class="chem">z = 3</span>. Then <span class="chem">y = z - 2 = 1</span> and <span class="chem">x = 1 - 2y + z = 2</span>. Check in equation 3: <span class="chem">6 + 1 + 3 = 10</span>. So <span class="chem">z = 3</span>.</p>
      solution: "<p><span class=\"chem\">R_2 - 2R_1: -5y + 5z = 10</span>，即 <span class=\"chem\">-y + z = 2</span>。<span class=\"chem\">R_3 - 3R_1: -5y + 4z = 7</span>。相減：<span class=\"chem\">z = 3</span>。則 <span class=\"chem\">y = z - 2 = 1</span> 及 <span class=\"chem\">x = 1 - 2y + z = 2</span>。代入第 3 條方程驗算：<span class=\"chem\">6 + 1 + 3 = 10</span>。所以 <span class=\"chem\">z = 3</span>。</p>",
    },

    // ── t1-5-q034 · short · exam · AHL · AHL 1.16 · 8 marks
    "t1-5-q034": {
      // EN: Consider the system of equations<br><span class="chem">x + y + z = 2</span><br><span class="chem">x + 2y + 3z = 5</span><br><span class="chem">2x + 3y + az = b</span>, where <span class="chem">a, b \in \mathbb{R}</span>.<br>(a) Use row reduction to find the value of <span class="chem">a</span> for which the system does not have a unique solution. [3 marks]<br>(b) For this value of <span class="chem">a</span>, find the value of <span class="chem">b</span> for which the system has infinitely many solutions. [1 mark]<br>(c) For these values of <span class="chem">a</span> and <span class="chem">b</span>, find the general solution and describe the solution set geometrically. [3 marks]<br>(d) Describe the geometrical arrangement of the three planes when <span class="chem">a</span> takes the value in (a) and <span class="chem">b</span> does not take the value in (b). [1 mark]
      stem: "考慮以下方程組<br><span class=\"chem\">x + y + z = 2</span><br><span class=\"chem\">x + 2y + 3z = 5</span><br><span class=\"chem\">2x + 3y + az = b</span>，其中 <span class=\"chem\">a, b \\in \\mathbb{R}</span>。<br>(a) 利用列簡化，求 (Find) 使方程組沒有唯一解的 <span class=\"chem\">a</span> 值。[3 marks]<br>(b) 對這個 <span class=\"chem\">a</span> 值，求 (Find) 使方程組有無限多解的 <span class=\"chem\">b</span> 值。[1 mark]<br>(c) 對這些 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 值，求 (Find) 通解，並以幾何方式描述解集。[3 marks]<br>(d) 當 <span class=\"chem\">a</span> 取 (a) 的值而 <span class=\"chem\">b</span> 不取 (b) 的值時，描述 (Describe) 三個平面的幾何排列。[1 mark]",
      hints: [
        // EN: Eliminate <span class="chem">x</span> from rows 2 and 3, then eliminate <span class="chem">y</span> from row 3 to reach <span class="chem">g(a)z = h(b)</span>.
        "從第 2 行及第 3 行消去 <span class=\"chem\">x</span>，再從第 3 行消去 <span class=\"chem\">y</span>，得到 <span class=\"chem\">g(a)z = h(b)</span>。",
        // EN: For infinitely many solutions the final row must read <span class="chem">0z = 0</span>; for no solution it reads <span class="chem">0z = </span>(non-zero).
        "要有無限多解，最後一行必須是 <span class=\"chem\">0z = 0</span>；無解時則是 <span class=\"chem\">0z = </span>（非零數）。",
        // EN: For the geometry, check whether any two normal vectors are parallel (topic 3.3).
        "就幾何而言，檢查是否有任何兩個法向量互相平行（課題 3.3）。",
      ],
      // EN: <p>Row reduction gives <span class="chem">y + 2z = 3</span> and <span class="chem">(a - 4)z = b - 7</span>. With <span class="chem">a = 4, b = 7</span> the solution set is the line <span class="chem">(-1 + lambda, 3 - 2lambda, lambda)</span>. Check with <span class="chem">lambda = 1</span>: <span class="chem">(0, 1, 1)</span> satisfies all three equations (<span class="chem">2x + 3y + 4z = 7</span>). With <span class="chem">a = 4, b != 7</span> the system is inconsistent, and since no two planes are parallel they form a triangular prism.</p>
      solution: "<p>列簡化得 <span class=\"chem\">y + 2z = 3</span> 及 <span class=\"chem\">(a - 4)z = b - 7</span>。當 <span class=\"chem\">a = 4, b = 7</span>，解集是直線 <span class=\"chem\">(-1 + lambda, 3 - 2lambda, lambda)</span>。以 <span class=\"chem\">lambda = 1</span> 驗算：<span class=\"chem\">(0, 1, 1)</span> 滿足全部三條方程（<span class=\"chem\">2x + 3y + 4z = 7</span>）。當 <span class=\"chem\">a = 4, b != 7</span>，方程組不相容，而由於沒有兩個平面互相平行，三個平面構成一個三角柱。</p>",
      // EN: <p>(a) <span class="chem">R_2 - R_1: y + 2z = 3</span>; <span class="chem">R_3 - 2R_1: y + (a - 2)z = b - 4</span>; subtracting: <span class="chem">(a - 4)z = b - 7</span>. No unique solution when <span class="chem">a = 4</span>.<br>(b) <span class="chem">b = 7</span> (the last row becomes <span class="chem">0z = 0</span>).<br>(c) Let <span class="chem">z = lambda</span>: <span class="chem">y = 3 - 2lambda</span>, <span class="chem">x = 2 - y - z = -1 + lambda</span>, so <span class="chem">(x, y, z) = (-1 + lambda, 3 - 2lambda, lambda)</span>, <span class="chem">lambda \in \mathbb{R}</span>. The three planes meet in a common line (a sheaf).<br>(d) No two of the normals <span class="chem">(1, 1, 1), (1, 2, 3), (2, 3, 4)</span> are parallel, and there is no common point, so the planes form a triangular prism (each pair meets in a line, the three lines are parallel).</p>
      answer: "<p>(a) <span class=\"chem\">R_2 - R_1: y + 2z = 3</span>；<span class=\"chem\">R_3 - 2R_1: y + (a - 2)z = b - 4</span>；相減：<span class=\"chem\">(a - 4)z = b - 7</span>。當 <span class=\"chem\">a = 4</span> 時沒有唯一解。<br>(b) <span class=\"chem\">b = 7</span>（最後一行變成 <span class=\"chem\">0z = 0</span>）。<br>(c) 設 <span class=\"chem\">z = lambda</span>：<span class=\"chem\">y = 3 - 2lambda</span>，<span class=\"chem\">x = 2 - y - z = -1 + lambda</span>，所以 <span class=\"chem\">(x, y, z) = (-1 + lambda, 3 - 2lambda, lambda)</span>，<span class=\"chem\">lambda \\in \\mathbb{R}</span>。三個平面相交於一條公共直線（平面束）。<br>(d) 法向量 <span class=\"chem\">(1, 1, 1), (1, 2, 3), (2, 3, 4)</span> 中沒有任何兩個互相平行，而且沒有公共點，所以三個平面構成一個三角柱（每兩個平面相交於一條直線，而這三條直線互相平行）。</p>",
      markscheme: [
        // EN: M1: (a) Eliminates x with R₂ − R₁ and R₃ − 2R₁.
        "M1：(a) 以 R₂ − R₁ 及 R₃ − 2R₁ 消去 x。",
        // EN: A1: (a) Reaches (a − 4)z = b − 7 (or equivalent).
        "A1：(a) 得出 (a − 4)z = b − 7（或等價式）。",
        // EN: A1: (a) a = 4.
        "A1：(a) a = 4。",
        // EN: A1: (b) b = 7.
        "A1：(b) b = 7。",
        // EN: M1: (c) Sets z = λ and back-substitutes.
        "M1：(c) 設 z = λ 並回代。",
        // EN: A1: (c) (x, y, z) = (−1 + λ, 3 − 2λ, λ), λ ∈ ℝ (or equivalent).
        "A1：(c) (x, y, z) = (−1 + λ, 3 − 2λ, λ)，λ ∈ ℝ（或等價式）。",
        // EN: A1: (c) The three planes intersect in a line.
        "A1：(c) 三個平面相交於一條直線。",
        // EN: R1: (d) Triangular prism: no two planes are parallel and there is no point common to all three.
        "R1：(d) 三角柱：沒有兩個平面互相平行，且三個平面沒有公共點。",
      ],
    },

    // ── t1-5-q035 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q035": {
      // EN: A drone films a ball thrown upwards. The height of the ball, <span class="chem">h</span> metres, <span class="chem">t</span> seconds after the throw is modelled by <span class="chem">h(t) = at^2 + bt + c</span>. The drone records <span class="chem">h = 6.85</span> when <span class="chem">t = 0.5</span>, <span class="chem">h = 9.62</span> when <span class="chem">t = 1.2</span> and <span class="chem">h = 8.30</span> when <span class="chem">t = 2.0</span>. Find the maximum height of the ball predicted by the model.
      stem: "一部無人機拍攝一個向上拋出的球。拋出後 <span class=\"chem\">t</span> 秒，球的高度 <span class=\"chem\">h</span> 米以 <span class=\"chem\">h(t) = at^2 + bt + c</span> 作模型。無人機記錄到：<span class=\"chem\">t = 0.5</span> 時 <span class=\"chem\">h = 6.85</span>，<span class=\"chem\">t = 1.2</span> 時 <span class=\"chem\">h = 9.62</span>，<span class=\"chem\">t = 2.0</span> 時 <span class=\"chem\">h = 8.30</span>。求 (Find) 該模型預測的球的最大高度。",
      hints: [
        // EN: Decode: each data point gives one linear equation in the unknowns <span class="chem">a, b, c</span>. Solve the <span class="chem">3 × 3</span> system with your GDC, then find the vertex of the parabola.
        "解碼：每個數據點給出一條關於未知數 <span class=\"chem\">a, b, c</span> 的線性方程。用 GDC 解這個 <span class=\"chem\">3 × 3</span> 方程組，再求拋物線的頂點。",
        // EN: The equations are <span class="chem">0.25a + 0.5b + c = 6.85</span>, <span class="chem">1.44a + 1.2b + c = 9.62</span> and <span class="chem">4a + 2b + c = 8.30</span>.
        "方程為 <span class=\"chem\">0.25a + 0.5b + c = 6.85</span>、<span class=\"chem\">1.44a + 1.2b + c = 9.62</span> 及 <span class=\"chem\">4a + 2b + c = 8.30</span>。",
        // EN: With <span class="chem">a, b, c</span> stored, the maximum is at <span class="chem">t = -b/(2a)</span>; or graph <span class="chem">h(t)</span> and use the maximum feature.
        "儲存 <span class=\"chem\">a, b, c</span> 後，最大值出現在 <span class=\"chem\">t = -b/(2a)</span>；或繪畫 <span class=\"chem\">h(t)</span> 的圖像並使用求極大值功能。",
      ],
      // EN: <p>The GDC gives <span class="chem">a = -3.7381...</span>, <span class="chem">b = 10.3119...</span>, <span class="chem">c = 2.6286...</span>. The vertex is at <span class="chem">t = -b/(2a) = 1.3793...</span> s, so the maximum height is <span class="chem">h(1.3793...) = 9.74</span> m (3 s.f.). Keep the full stored values: rounding <span class="chem">a, b, c</span> early changes the third figure.</p>
      solution: "<p>GDC 給出 <span class=\"chem\">a = -3.7381...</span>、<span class=\"chem\">b = 10.3119...</span>、<span class=\"chem\">c = 2.6286...</span>。頂點在 <span class=\"chem\">t = -b/(2a) = 1.3793...</span> s，所以最大高度為 <span class=\"chem\">h(1.3793...) = 9.74</span> m（3 位有效數字）。請保留完整的儲存值：過早把 <span class=\"chem\">a, b, c</span> 捨入會改變第三位數字。</p>",
    },

    // ── t1-5-q036 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q036": {
      // EN: Mei invests a total of <span class="chem">$40 000</span> in three accounts, A, B and C, which pay simple interest at annual rates of <span class="chem">2.6%</span>, <span class="chem">3.4%</span> and <span class="chem">5.1%</span> respectively. After one year she has earned <span class="chem">$1437.51</span> in interest in total. The amount invested in account C is <span class="chem">$2000</span> less than the amount invested in account A. Find the amount invested in account B. Give your answer correct to 2 decimal places.
      stem: "Mei 把合共 <span class=\"chem\">$40 000</span> 投資於 A、B 和 C 三個戶口，它們分別按年利率 <span class=\"chem\">2.6%</span>、<span class=\"chem\">3.4%</span> 及 <span class=\"chem\">5.1%</span> 計算單利息。一年後，她共賺取利息 <span class=\"chem\">$1437.51</span>。投資於戶口 C 的金額比投資於戶口 A 的金額少 <span class=\"chem\">$2000</span>。求 (Find) 投資於戶口 B 的金額，答案須準確至 2 位小數。",
      hints: [
        // EN: Decode: three unknown amounts and three facts (total, total interest, the A–C relation) give a <span class="chem">3 × 3</span> linear system. Let the amounts be <span class="chem">x, y, z</span>.
        "解碼：三個未知金額及三項資料（總額、總利息、A 與 C 的關係）構成一個 <span class=\"chem\">3 × 3</span> 線性方程組。設金額為 <span class=\"chem\">x, y, z</span>。",
        // EN: The equations are <span class="chem">x + y + z = 40000</span>, <span class="chem">0.026x + 0.034y + 0.051z = 1437.51</span> and <span class="chem">x - z = 2000</span>.
        "方程為 <span class=\"chem\">x + y + z = 40000</span>、<span class=\"chem\">0.026x + 0.034y + 0.051z = 1437.51</span> 及 <span class=\"chem\">x - z = 2000</span>。",
        // EN: Enter the augmented matrix in your GDC (or use the simultaneous-equation solver) and read off <span class="chem">y</span>.
        "把增廣矩陣輸入 GDC（或使用聯立方程求解功能），讀出 <span class=\"chem\">y</span>。",
      ],
      // EN: <p>Solving <span class="chem">x + y + z = 40000</span>, <span class="chem">0.026x + 0.034y + 0.051z = 1437.51</span>, <span class="chem">x - z = 2000</span> with the GDC gives <span class="chem">x = 12390</span>, <span class="chem">y = 17220</span>, <span class="chem">z = 10390</span>. Check: <span class="chem">322.14 + 585.48 + 529.89 = 1437.51</span>. So <span class="chem">$17 220.00</span> is invested in account B.</p>
      solution: "<p>用 GDC 解 <span class=\"chem\">x + y + z = 40000</span>、<span class=\"chem\">0.026x + 0.034y + 0.051z = 1437.51</span>、<span class=\"chem\">x - z = 2000</span>，得 <span class=\"chem\">x = 12390</span>、<span class=\"chem\">y = 17220</span>、<span class=\"chem\">z = 10390</span>。驗算：<span class=\"chem\">322.14 + 585.48 + 529.89 = 1437.51</span>。所以投資於戶口 B 的金額為 <span class=\"chem\">$17 220.00</span>。</p>",
    },

    // ── t1-5-q037 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q037": {
      // EN: An archaeologist finds three fragments of a circular plate. On a coordinate grid (units: cm) the fragments lie at the points <span class="chem">(1.2, 3.5)</span>, <span class="chem">(-2.4, 1.1)</span> and <span class="chem">(4.0, -0.6)</span>, all on the rim of the plate. The rim has an equation of the form <span class="chem">x^2 + y^2 + Dx + Ey + F = 0</span>. Find the radius of the plate.
      stem: "一名考古學家找到一個圓形碟子的三塊碎片。在坐標網格上（單位：cm），碎片位於點 <span class=\"chem\">(1.2, 3.5)</span>、<span class=\"chem\">(-2.4, 1.1)</span> 及 <span class=\"chem\">(4.0, -0.6)</span>，全部都在碟子的邊緣上。邊緣的方程形式為 <span class=\"chem\">x^2 + y^2 + Dx + Ey + F = 0</span>。求 (Find) 碟子的半徑。",
      hints: [
        // EN: Decode: the equation is not linear in <span class="chem">x</span> and <span class="chem">y</span>, but it IS linear in the unknown constants <span class="chem">D, E, F</span>. Substituting each point gives one linear equation, so this is a hidden <span class="chem">3 × 3</span> system.
        "解碼：這條方程對 <span class=\"chem\">x</span> 和 <span class=\"chem\">y</span> 而言不是線性的，但對未知常數 <span class=\"chem\">D, E, F</span> 而言卻是線性的。代入每一點都得到一條線性方程，所以這是一個隱藏的 <span class=\"chem\">3 × 3</span> 方程組。",
        // EN: For <span class="chem">(1.2, 3.5)</span>: <span class="chem">1.2D + 3.5E + F = -(1.2^2 + 3.5^2) = -13.69</span>. Form the other two equations the same way and solve with your GDC.
        "對 <span class=\"chem\">(1.2, 3.5)</span>：<span class=\"chem\">1.2D + 3.5E + F = -(1.2^2 + 3.5^2) = -13.69</span>。用同樣方法列出另外兩條方程，再用 GDC 求解。",
        // EN: Complete the square: the centre is <span class="chem">(-D/2, -E/2)</span> and <span class="chem">r^2 = D^2/4 + E^2/4 - F</span>.
        "配方：圓心為 <span class=\"chem\">(-D/2, -E/2)</span>，而 <span class=\"chem\">r^2 = D^2/4 + E^2/4 - F</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the unknowns are the coefficients <span class="chem">D, E, F</span>, and each point gives a linear equation in them.</p><p><span class="chem">1.2D + 3.5E + F = -13.69</span>, <span class="chem">-2.4D + 1.1E + F = -6.97</span>, <span class="chem">4.0D - 0.6E + F = -16.36</span>. The GDC gives <span class="chem">D = -1.5810...</span>, <span class="chem">E = -0.42849...</span>, <span class="chem">F = -10.2931...</span>. Then <span class="chem">r = sqrt(D^2/4 + E^2/4 - F) = 3.31</span> cm (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>未知數是係數 <span class=\"chem\">D, E, F</span>，每一點都給出一條關於它們的線性方程。</p><p><span class=\"chem\">1.2D + 3.5E + F = -13.69</span>、<span class=\"chem\">-2.4D + 1.1E + F = -6.97</span>、<span class=\"chem\">4.0D - 0.6E + F = -16.36</span>。GDC 給出 <span class=\"chem\">D = -1.5810...</span>、<span class=\"chem\">E = -0.42849...</span>、<span class=\"chem\">F = -10.2931...</span>。於是 <span class=\"chem\">r = sqrt(D^2/4 + E^2/4 - F) = 3.31</span> cm（3 位有效數字）。</p>",
    },

    // ── t1-5-q038 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q038": {
      // EN: A sports nutritionist mixes three foods, P, Q and R. The table gives the mass in grams of protein, carbohydrate and fat in <strong>100 g</strong> of each food.<br><span class="mono">Food: protein | carbohydrate | fat</span><br><span class="mono">P: 12.5 | 8.2 | 3.1</span><br><span class="mono">Q: 3.4 | 22.6 | 1.2</span><br><span class="mono">R: 7.8 | 4.5 | 14.3</span><br>A meal must contain exactly 48 g of protein, 95 g of carbohydrate and 36 g of fat. Find the mass of food Q in the meal, in grams.
      stem: "一名運動營養師把 P、Q 和 R 三種食物混合。下表列出每種食物每 <strong>100 g</strong> 所含蛋白質、碳水化合物和脂肪的質量（以克計）。<br><span class=\"mono\">Food: protein | carbohydrate | fat</span><br><span class=\"mono\">P: 12.5 | 8.2 | 3.1</span><br><span class=\"mono\">Q: 3.4 | 22.6 | 1.2</span><br><span class=\"mono\">R: 7.8 | 4.5 | 14.3</span><br>一份餐必須恰好含 48 g 蛋白質、95 g 碳水化合物及 36 g 脂肪。求 (Find) 這份餐中食物 Q 的質量，以克為單位。",
      hints: [
        // EN: Decode: let <span class="chem">p, q, r</span> be the masses in units of 100 g. Each nutrient gives one linear equation.
        "解碼：設 <span class=\"chem\">p, q, r</span> 為以 100 g 為單位的質量。每種營養素給出一條線性方程。",
        // EN: Protein: <span class="chem">12.5p + 3.4q + 7.8r = 48</span>. Write the carbohydrate and fat equations, then solve with your GDC.
        "蛋白質：<span class=\"chem\">12.5p + 3.4q + 7.8r = 48</span>。寫出碳水化合物和脂肪的方程，再用 GDC 求解。",
        // EN: Remember to convert <span class="chem">q</span> back to grams by multiplying by 100.
        "記得把 <span class=\"chem\">q</span> 乘以 100 換回克。",
      ],
      // EN: <p><span class="chem">12.5p + 3.4q + 7.8r = 48</span>, <span class="chem">8.2p + 22.6q + 4.5r = 95</span>, <span class="chem">3.1p + 1.2q + 14.3r = 36</span>. The GDC gives <span class="chem">p = 1.8178...</span>, <span class="chem">q = 3.1742...</span>, <span class="chem">r = 1.8570...</span> (hundreds of grams). So the meal contains <span class="chem">317</span> g of food Q (3 s.f.).</p>
      solution: "<p><span class=\"chem\">12.5p + 3.4q + 7.8r = 48</span>、<span class=\"chem\">8.2p + 22.6q + 4.5r = 95</span>、<span class=\"chem\">3.1p + 1.2q + 14.3r = 36</span>。GDC 給出 <span class=\"chem\">p = 1.8178...</span>、<span class=\"chem\">q = 3.1742...</span>、<span class=\"chem\">r = 1.8570...</span>（以百克計）。所以這份餐含 <span class=\"chem\">317</span> g 食物 Q（3 位有效數字）。</p>",
    },

    // ── t1-5-q039 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q039": {
      // EN: The temperature <span class="chem">T</span> °C in a greenhouse <span class="chem">t</span> hours after midnight is modelled by <span class="chem">T(t) = a sin((pi t)/12) + b cos((pi t)/12) + d</span>, for <span class="chem">0 &lt;= t &lt;= 24</span>. Sensors record <span class="chem">14.2</span> °C at 03:00, <span class="chem">22.9</span> °C at 10:00 and <span class="chem">11.5</span> °C at 18:00. Find the maximum temperature predicted by the model.
      stem: "溫室在午夜後 <span class=\"chem\">t</span> 小時的溫度 <span class=\"chem\">T</span> °C 以 <span class=\"chem\">T(t) = a sin((pi t)/12) + b cos((pi t)/12) + d</span> 作模型，其中 <span class=\"chem\">0 &lt;= t &lt;= 24</span>。感應器在 03:00 記錄到 <span class=\"chem\">14.2</span> °C，在 10:00 記錄到 <span class=\"chem\">22.9</span> °C，在 18:00 記錄到 <span class=\"chem\">11.5</span> °C。求 (Find) 該模型預測的最高溫度。",
      hints: [
        // EN: Decode: for a fixed time <span class="chem">t</span>, the values <span class="chem">sin((pi t)/12)</span> and <span class="chem">cos((pi t)/12)</span> are just numbers, so each reading gives a LINEAR equation in <span class="chem">a, b, d</span>. Remember the times are <span class="chem">t = 3, 10, 18</span>, and use radians.
        "解碼：對固定的時間 <span class=\"chem\">t</span>，<span class=\"chem\">sin((pi t)/12)</span> 和 <span class=\"chem\">cos((pi t)/12)</span> 的值只是數字，所以每個讀數都給出一條關於 <span class=\"chem\">a, b, d</span> 的線性方程。記住時間是 <span class=\"chem\">t = 3, 10, 18</span>，並使用弧度。",
        // EN: At <span class="chem">t = 3</span>: <span class="chem">a sin(pi/4) + b cos(pi/4) + d = 14.2</span>. At <span class="chem">t = 18</span>: <span class="chem">sin(3pi/2) = -1</span> and <span class="chem">cos(3pi/2) = 0</span>, so <span class="chem">-a + d = 11.5</span>.
        "在 <span class=\"chem\">t = 3</span>：<span class=\"chem\">a sin(pi/4) + b cos(pi/4) + d = 14.2</span>。在 <span class=\"chem\">t = 18</span>：<span class=\"chem\">sin(3pi/2) = -1</span> 及 <span class=\"chem\">cos(3pi/2) = 0</span>，所以 <span class=\"chem\">-a + d = 11.5</span>。",
        // EN: Solve for <span class="chem">a, b, d</span> with your GDC, then graph <span class="chem">T(t)</span> on <span class="chem">0 &lt;= t &lt;= 24</span> and find its maximum.
        "用 GDC 解出 <span class=\"chem\">a, b, d</span>，再在 <span class=\"chem\">0 &lt;= t &lt;= 24</span> 繪畫 <span class=\"chem\">T(t)</span> 的圖像並求其最大值。",
      ],
      // EN: <p><strong>Decode:</strong> the model is not linear in <span class="chem">t</span>, but it is linear in the unknown coefficients, so three readings give a <span class="chem">3 × 3</span> system.</p><p>The GDC gives <span class="chem">a = 4.0957...</span>, <span class="chem">b = -6.0696...</span>, <span class="chem">d = 15.5957...</span>. Graphing <span class="chem">T(t)</span> gives a maximum of <span class="chem">22.9</span> °C (3 s.f.), at about <span class="chem">t = 10.2</span> (about 10:13). (Equivalently, <span class="chem">T_{max} = d + sqrt(a^2 + b^2)</span>.)</p>
      solution: "<p><strong>解碼：</strong>這個模型對 <span class=\"chem\">t</span> 而言不是線性的，但對未知係數而言是線性的，所以三個讀數給出一個 <span class=\"chem\">3 × 3</span> 方程組。</p><p>GDC 給出 <span class=\"chem\">a = 4.0957...</span>、<span class=\"chem\">b = -6.0696...</span>、<span class=\"chem\">d = 15.5957...</span>。繪畫 <span class=\"chem\">T(t)</span> 的圖像，得最大值 <span class=\"chem\">22.9</span> °C（3 位有效數字），出現在約 <span class=\"chem\">t = 10.2</span>（約 10:13）。（等價地，<span class=\"chem\">T_{max} = d + sqrt(a^2 + b^2)</span>。）</p>",
    },

    // ── t1-5-q040 · numeric · challenge · AHL · AHL 1.16 · 7 marks
    "t1-5-q040": {
      // EN: The concentration <span class="chem">C</span> mg L<sup>−1</sup> of a drug in a patient’s blood <span class="chem">t</span> hours after an injection is modelled by <span class="chem">C = A t^p e^{qt}</span>, <span class="chem">t &gt; 0</span>, where <span class="chem">A, p, q</span> are constants. Measurements give <span class="chem">C = 4.2</span> at <span class="chem">t = 1</span>, <span class="chem">C = 6.9</span> at <span class="chem">t = 3</span> and <span class="chem">C = 3.8</span> at <span class="chem">t = 6</span>. By taking natural logarithms, find the time at which the model predicts the maximum concentration.
      stem: "注射後 <span class=\"chem\">t</span> 小時，病人血液中藥物的濃度 <span class=\"chem\">C</span> mg L<sup>−1</sup> 以 <span class=\"chem\">C = A t^p e^{qt}</span>，<span class=\"chem\">t &gt; 0</span> 作模型，其中 <span class=\"chem\">A, p, q</span> 為常數。量度結果為：<span class=\"chem\">t = 1</span> 時 <span class=\"chem\">C = 4.2</span>，<span class=\"chem\">t = 3</span> 時 <span class=\"chem\">C = 6.9</span>，<span class=\"chem\">t = 6</span> 時 <span class=\"chem\">C = 3.8</span>。透過取自然對數，求 (Find) 該模型預測濃度達到最大值的時間。",
      hints: [
        // EN: Decode: <span class="chem">ln C = ln A + p ln t + qt</span> is linear in the three unknowns <span class="chem">ln A</span>, <span class="chem">p</span> and <span class="chem">q</span>. So the data give a <span class="chem">3 × 3</span> linear system.
        "解碼：<span class=\"chem\">ln C = ln A + p ln t + qt</span> 對三個未知數 <span class=\"chem\">ln A</span>、<span class=\"chem\">p</span> 和 <span class=\"chem\">q</span> 而言是線性的。所以數據給出一個 <span class=\"chem\">3 × 3</span> 線性方程組。",
        // EN: At <span class="chem">t = 1</span>, <span class="chem">ln 1 = 0</span>, so <span class="chem">ln A + q = ln 4.2</span>. Write the other two equations using <span class="chem">ln 3</span> and <span class="chem">ln 6</span>, and solve with your GDC.
        "在 <span class=\"chem\">t = 1</span>，<span class=\"chem\">ln 1 = 0</span>，所以 <span class=\"chem\">ln A + q = ln 4.2</span>。用 <span class=\"chem\">ln 3</span> 和 <span class=\"chem\">ln 6</span> 寫出另外兩條方程，再用 GDC 求解。",
        // EN: Then <span class="chem">dC/dt = A t^{p-1} e^{qt}(p + qt)</span>, which is zero when <span class="chem">t = -p/q</span>. (You can also graph <span class="chem">C</span> and use the maximum feature.)
        "然後 <span class=\"chem\">dC/dt = A t^{p-1} e^{qt}(p + qt)</span>，當 <span class=\"chem\">t = -p/q</span> 時為零。（你也可以繪畫 <span class=\"chem\">C</span> 的圖像並使用求極大值功能。）",
      ],
      // EN: <p><strong>Decode:</strong> logarithms turn the product model into a linear equation in <span class="chem">ln A, p, q</span>.</p><p><span class="chem">ln A + q = ln 4.2</span>, <span class="chem">ln A + p ln 3 + 3q = ln 6.9</span>, <span class="chem">ln A + p ln 6 + 6q = ln 3.8</span>. The GDC gives <span class="chem">p = 1.4047...</span>, <span class="chem">q = -0.52340...</span>, <span class="chem">A = 7.0886...</span>. The maximum is at <span class="chem">t = -p/q = 2.68</span> hours (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>取對數把乘積模型變成一條關於 <span class=\"chem\">ln A, p, q</span> 的線性方程。</p><p><span class=\"chem\">ln A + q = ln 4.2</span>、<span class=\"chem\">ln A + p ln 3 + 3q = ln 6.9</span>、<span class=\"chem\">ln A + p ln 6 + 6q = ln 3.8</span>。GDC 給出 <span class=\"chem\">p = 1.4047...</span>、<span class=\"chem\">q = -0.52340...</span>、<span class=\"chem\">A = 7.0886...</span>。最大值出現在 <span class=\"chem\">t = -p/q = 2.68</span> 小時（3 位有效數字）。</p>",
    },

    // ── t1-5-q041 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q041": {
      // EN: A country has three regions, A, B and C, with a total population of 2.4 million that stays constant. Each year:<br>• of the people in A, 85% stay, 10% move to B and 5% move to C;<br>• of the people in B, 75% stay, 15% move to A and 10% move to C;<br>• of the people in C, 80% stay, 12% move to A and 8% move to B.<br>In the long run the population of each region no longer changes from one year to the next. Find the long-run population of region B, in millions.
      stem: "某國有 A、B 和 C 三個地區，總人口為 2.4 百萬並保持不變。每年：<br>• A 的人口中，85% 留下，10% 遷往 B，5% 遷往 C；<br>• B 的人口中，75% 留下，15% 遷往 A，10% 遷往 C；<br>• C 的人口中，80% 留下，12% 遷往 A，8% 遷往 B。<br>長遠而言，每個地區的人口不再逐年改變。求 (Find) 地區 B 的長遠人口，以百萬為單位。",
      hints: [
        // EN: Decode: “no longer changes” means each region’s population next year equals its population this year. Write a balance equation for each region with unknowns <span class="chem">a, b, c</span> (millions).
        "解碼：「不再改變」表示每個地區明年的人口等於今年的人口。以未知數 <span class=\"chem\">a, b, c</span>（百萬）為每個地區寫出一條平衡方程。",
        // EN: Region A: <span class="chem">a = 0.85a + 0.15b + 0.12c</span>. Region B: <span class="chem">b = 0.10a + 0.75b + 0.08c</span>. The three balance equations are dependent (the GDC shows a row of zeros), so you must also use <span class="chem">a + b + c = 2.4</span>.
        "地區 A：<span class=\"chem\">a = 0.85a + 0.15b + 0.12c</span>。地區 B：<span class=\"chem\">b = 0.10a + 0.75b + 0.08c</span>。這三條平衡方程是相依的（GDC 會顯示一行全零），所以你還必須使用 <span class=\"chem\">a + b + c = 2.4</span>。",
        // EN: Solve two balance equations together with <span class="chem">a + b + c = 2.4</span> on your GDC.
        "在 GDC 上把兩條平衡方程連同 <span class=\"chem\">a + b + c = 2.4</span> 一併求解。",
      ],
      // EN: <p><strong>Decode:</strong> a steady state is a linear system. The three balance equations only have rank 2 (people are neither created nor lost), which is why the total-population equation is needed.</p><p><span class="chem">-0.15a + 0.15b + 0.12c = 0</span>, <span class="chem">0.10a - 0.25b + 0.08c = 0</span>, <span class="chem">a + b + c = 2.4</span>. The GDC gives <span class="chem">a = 1.139</span>, <span class="chem">b = 0.6508...</span>, <span class="chem">c = 0.6102</span>. So region B has about <span class="chem">0.651</span> million people (3 s.f.). Check with C: <span class="chem">0.05a + 0.10b + 0.80c = c</span> holds.</p>
      solution: "<p><strong>解碼：</strong>穩定狀態就是一個線性方程組。三條平衡方程的秩只有 2（人口既不增加也不流失），這就是為何需要總人口的方程。</p><p><span class=\"chem\">-0.15a + 0.15b + 0.12c = 0</span>、<span class=\"chem\">0.10a - 0.25b + 0.08c = 0</span>、<span class=\"chem\">a + b + c = 2.4</span>。GDC 給出 <span class=\"chem\">a = 1.139</span>、<span class=\"chem\">b = 0.6508...</span>、<span class=\"chem\">c = 0.6102</span>。所以地區 B 約有 <span class=\"chem\">0.651</span> 百萬人（3 位有效數字）。用 C 驗算：<span class=\"chem\">0.05a + 0.10b + 0.80c = c</span> 成立。</p>",
      // EN: million
      unit: "百萬",
    },

    // ── t1-5-q042 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q042": {
      // EN: Consider the system<br><span class="chem">x + 2y + z = 3</span><br><span class="chem">2x + ky + 3z = 1</span><br><span class="chem">x + y + kz = 2</span>, where <span class="chem">k \in \mathbb{R}</span>.<br>By eliminating <span class="chem">x</span>, find the larger value of <span class="chem">k</span> for which the system does not have a unique solution.
      stem: "考慮以下方程組<br><span class=\"chem\">x + 2y + z = 3</span><br><span class=\"chem\">2x + ky + 3z = 1</span><br><span class=\"chem\">x + y + kz = 2</span>，其中 <span class=\"chem\">k \\in \\mathbb{R}</span>。<br>透過消去 <span class=\"chem\">x</span>，求 (Find) 使方程組沒有唯一解的 <span class=\"chem\">k</span> 值中較大的一個。",
      hints: [
        // EN: <span class="chem">R_2 - 2R_1</span> gives <span class="chem">(k - 4)y + z = -5</span> and <span class="chem">R_3 - R_1</span> gives <span class="chem">-y + (k - 1)z = -1</span>.
        "<span class=\"chem\">R_2 - 2R_1</span> 得 <span class=\"chem\">(k - 4)y + z = -5</span>，而 <span class=\"chem\">R_3 - R_1</span> 得 <span class=\"chem\">-y + (k - 1)z = -1</span>。",
        // EN: Eliminate <span class="chem">z</span> (or <span class="chem">y</span>) from these two. The coefficient that remains is <span class="chem">(k - 4)(k - 1) + 1 = k^2 - 5k + 5</span>.
        "從這兩式消去 <span class=\"chem\">z</span>（或 <span class=\"chem\">y</span>）。剩下的係數是 <span class=\"chem\">(k - 4)(k - 1) + 1 = k^2 - 5k + 5</span>。",
        // EN: The system fails to have a unique solution when this coefficient is zero. Solve <span class="chem">k^2 - 5k + 5 = 0</span> with your GDC.
        "當這個係數為零時，方程組沒有唯一解。用 GDC 解 <span class=\"chem\">k^2 - 5k + 5 = 0</span>。",
      ],
      // EN: <p>From <span class="chem">(k - 4)y + z = -5</span> and <span class="chem">-y + (k - 1)z = -1</span>: multiply the first by <span class="chem">(k - 1)</span> and subtract the second to get <span class="chem">(k^2 - 5k + 5)y = -5k + 6</span>. No unique solution when <span class="chem">k^2 - 5k + 5 = 0</span>, so <span class="chem">k = (5 +- sqrt(5))/2</span>, i.e. <span class="chem">k = 1.38</span> or <span class="chem">k = 3.62</span>. The larger value is <span class="chem">k = 3.62</span> (3 s.f.). (At these values <span class="chem">-5k + 6 != 0</span>, so the system is in fact inconsistent.)</p>
      solution: "<p>由 <span class=\"chem\">(k - 4)y + z = -5</span> 及 <span class=\"chem\">-y + (k - 1)z = -1</span>：把第一式乘以 <span class=\"chem\">(k - 1)</span> 再減去第二式，得 <span class=\"chem\">(k^2 - 5k + 5)y = -5k + 6</span>。當 <span class=\"chem\">k^2 - 5k + 5 = 0</span> 時沒有唯一解，所以 <span class=\"chem\">k = (5 +- sqrt(5))/2</span>，即 <span class=\"chem\">k = 1.38</span> 或 <span class=\"chem\">k = 3.62</span>。較大的值為 <span class=\"chem\">k = 3.62</span>（3 位有效數字）。（在這些值下 <span class=\"chem\">-5k + 6 != 0</span>，所以方程組其實是不相容的。）</p>",
    },

    // ── t1-5-q043 · short · exam · AHL · AHL 1.16 · 9 marks
    "t1-5-q043": {
      // EN: Consider the system<br><span class="chem">x + y + z = 1</span><br><span class="chem">2x - y + 3z = 4</span><br><span class="chem">x + ky + 2z = c</span>, where <span class="chem">k, c \in \mathbb{R}</span>.<br>(a) Show that row reduction leads to the equation <span class="chem">(k + 2)y = c - 3</span>. [3 marks]<br>(b) Write down the value of <span class="chem">k</span> for which the system does not have a unique solution. [1 mark]<br>(c) For this value of <span class="chem">k</span>, state the value of <span class="chem">c</span> for which the system has infinitely many solutions, and find the general solution. [3 marks]<br>(d) Use your GDC to solve the system when <span class="chem">k = 0.35</span> and <span class="chem">c = -1.8</span>, giving each value correct to 3 significant figures. [2 marks]
      stem: "考慮以下方程組<br><span class=\"chem\">x + y + z = 1</span><br><span class=\"chem\">2x - y + 3z = 4</span><br><span class=\"chem\">x + ky + 2z = c</span>，其中 <span class=\"chem\">k, c \\in \\mathbb{R}</span>。<br>(a) 證明 (Show that) 列簡化會得出方程 <span class=\"chem\">(k + 2)y = c - 3</span>。[3 marks]<br>(b) 寫出 (Write down) 使方程組沒有唯一解的 <span class=\"chem\">k</span> 值。[1 mark]<br>(c) 對這個 <span class=\"chem\">k</span> 值，寫出 (State) 使方程組有無限多解的 <span class=\"chem\">c</span> 值，並求 (Find) 通解。[3 marks]<br>(d) 用 GDC 解 <span class=\"chem\">k = 0.35</span> 及 <span class=\"chem\">c = -1.8</span> 時的方程組，每個值須準確至 3 位有效數字。[2 marks]",
      hints: [
        // EN: In (a) eliminate <span class="chem">x</span> from rows 2 and 3 first, then eliminate <span class="chem">z</span>, which now has coefficient 1 in both rows.
        "在 (a)，先從第 2 行及第 3 行消去 <span class=\"chem\">x</span>，再消去 <span class=\"chem\">z</span>，此時它在兩行中的係數都是 1。",
        // EN: For (c), the final row must read <span class="chem">0y = 0</span>. Use <span class="chem">y</span> as the parameter because it is the variable whose equation vanished.
        "在 (c)，最後一行必須是 <span class=\"chem\">0y = 0</span>。用 <span class=\"chem\">y</span> 作參數，因為它的方程消失了。",
        // EN: For (d), enter the augmented matrix <span class="chem">[1, 1, 1 | 1; 2, -1, 3 | 4; 1, 0.35, 2 | -1.8]</span> and use rref or the system solver.
        "在 (d)，輸入增廣矩陣 <span class=\"chem\">[1, 1, 1 | 1; 2, -1, 3 | 4; 1, 0.35, 2 | -1.8]</span>，並使用 rref 或方程組求解功能。",
      ],
      // EN: <p>(a) The two reduced rows are <span class="chem">-3y + z = 2</span> and <span class="chem">(k - 1)y + z = c - 1</span>; their difference is <span class="chem">(k + 2)y = c - 3</span>.<br>(c) Check the general solution with <span class="chem">lambda = 0</span>: <span class="chem">(-1, 0, 2)</span> gives <span class="chem">1, 4, 3</span> in the three equations (with <span class="chem">k = -2</span>, <span class="chem">c = 3</span>).<br>(d) The GDC gives <span class="chem">(7.17, -2.04, -4.13)</span>; part (a) confirms <span class="chem">y = (-1.8 - 3)/(0.35 + 2) = -2.04</span>.</p>
      solution: "<p>(a) 化簡後的兩行是 <span class=\"chem\">-3y + z = 2</span> 及 <span class=\"chem\">(k - 1)y + z = c - 1</span>；兩者之差是 <span class=\"chem\">(k + 2)y = c - 3</span>。<br>(c) 以 <span class=\"chem\">lambda = 0</span> 驗算通解：<span class=\"chem\">(-1, 0, 2)</span> 在三條方程中分別給出 <span class=\"chem\">1, 4, 3</span>（其中 <span class=\"chem\">k = -2</span>、<span class=\"chem\">c = 3</span>）。<br>(d) GDC 給出 <span class=\"chem\">(7.17, -2.04, -4.13)</span>；(a) 部亦確認 <span class=\"chem\">y = (-1.8 - 3)/(0.35 + 2) = -2.04</span>。</p>",
      // EN: <p>(a) <span class="chem">R_2 - 2R_1: -3y + z = 2</span>. <span class="chem">R_3 - R_1: (k - 1)y + z = c - 1</span>. Subtracting: <span class="chem">(k - 1 + 3)y = c - 1 - 2</span>, i.e. <span class="chem">(k + 2)y = c - 3</span> (AG).<br>(b) <span class="chem">k = -2</span>.<br>(c) <span class="chem">c = 3</span>. Let <span class="chem">y = lambda</span>: <span class="chem">z = 2 + 3lambda</span> and <span class="chem">x = 1 - y - z = -1 - 4lambda</span>, so <span class="chem">(x, y, z) = (-1 - 4lambda, lambda, 2 + 3lambda)</span>, <span class="chem">lambda \in \mathbb{R}</span>.<br>(d) <span class="chem">x = 7.17</span>, <span class="chem">y = -2.04</span>, <span class="chem">z = -4.13</span> (exactly <span class="chem">y = -96/47</span>, <span class="chem">x = 337/47</span>, <span class="chem">z = -194/47</span>).</p>
      answer: "<p>(a) <span class=\"chem\">R_2 - 2R_1: -3y + z = 2</span>。<span class=\"chem\">R_3 - R_1: (k - 1)y + z = c - 1</span>。相減：<span class=\"chem\">(k - 1 + 3)y = c - 1 - 2</span>，即 <span class=\"chem\">(k + 2)y = c - 3</span>（AG）。<br>(b) <span class=\"chem\">k = -2</span>。<br>(c) <span class=\"chem\">c = 3</span>。設 <span class=\"chem\">y = lambda</span>：<span class=\"chem\">z = 2 + 3lambda</span> 及 <span class=\"chem\">x = 1 - y - z = -1 - 4lambda</span>，所以 <span class=\"chem\">(x, y, z) = (-1 - 4lambda, lambda, 2 + 3lambda)</span>，<span class=\"chem\">lambda \\in \\mathbb{R}</span>。<br>(d) <span class=\"chem\">x = 7.17</span>、<span class=\"chem\">y = -2.04</span>、<span class=\"chem\">z = -4.13</span>（準確值為 <span class=\"chem\">y = -96/47</span>、<span class=\"chem\">x = 337/47</span>、<span class=\"chem\">z = -194/47</span>）。</p>",
      markscheme: [
        // EN: M1: (a) Eliminates x using R₂ − 2R₁ and R₃ − R₁.
        "M1：(a) 利用 R₂ − 2R₁ 及 R₃ − R₁ 消去 x。",
        // EN: A1: (a) Obtains −3y + z = 2 and (k − 1)y + z = c − 1.
        "A1：(a) 得出 −3y + z = 2 及 (k − 1)y + z = c − 1。",
        // EN: A1: (a) Subtracts the two reduced rows correctly, leading to (k + 2)y = c − 3 AG (no mark for the given line).
        "A1：(a) 把化簡後的兩行正確相減，得出 (k + 2)y = c − 3 AG（題目所給的一行不予給分）。",
        // EN: A1: (b) k = −2.
        "A1：(b) k = −2。",
        // EN: A1: (c) c = 3.
        "A1：(c) c = 3。",
        // EN: M1: (c) Introduces a parameter (e.g. y = λ) and back-substitutes.
        "M1：(c) 引入參數（例如 y = λ）並回代。",
        // EN: A1: (c) (x, y, z) = (−1 − 4λ, λ, 2 + 3λ), λ ∈ ℝ (or equivalent).
        "A1：(c) (x, y, z) = (−1 − 4λ, λ, 2 + 3λ)，λ ∈ ℝ（或等價式）。",
        // EN: A1: (d) Correct use of technology: y = −2.04 (and either other value).
        "A1：(d) 正確使用科技：y = −2.04（及另一個值）。",
        // EN: A1: (d) x = 7.17, y = −2.04, z = −4.13.
        "A1：(d) x = 7.17、y = −2.04、z = −4.13。",
      ],
    },

    // ── t1-5-q044 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q044": {
      // EN: Three planes have equations<br><span class="chem">Π_1: 2.1x - 0.8y + 1.5z = 4.2</span><br><span class="chem">Π_2: 0.6x + 1.9y - 2.2z = -1.3</span><br><span class="chem">Π_3: 1.4x + 0.7y + 3.1z = 6.8</span>.<br>The three planes meet at a single point. Find the <span class="chem">z</span>-coordinate of this point.
      stem: "三個平面的方程為<br><span class=\"chem\">Π_1: 2.1x - 0.8y + 1.5z = 4.2</span><br><span class=\"chem\">Π_2: 0.6x + 1.9y - 2.2z = -1.3</span><br><span class=\"chem\">Π_3: 1.4x + 0.7y + 3.1z = 6.8</span>。<br>這三個平面相交於單一點。求 (Find) 這點的 <span class=\"chem\">z</span> 坐標。",
      hints: [
        // EN: The common point is the solution of the three equations taken together.
        "公共點就是三條方程聯立的解。",
        // EN: Enter the augmented matrix <span class="chem">[2.1, -0.8, 1.5 | 4.2; 0.6, 1.9, -2.2 | -1.3; 1.4, 0.7, 3.1 | 6.8]</span> and use rref or the simultaneous-equation solver.
        "輸入增廣矩陣 <span class=\"chem\">[2.1, -0.8, 1.5 | 4.2; 0.6, 1.9, -2.2 | -1.3; 1.4, 0.7, 3.1 | 6.8]</span>，並使用 rref 或聯立方程求解功能。",
      ],
      // EN: <p>The GDC gives the unique solution <span class="chem">x = 1.1859...</span>, <span class="chem">y = 0.68262...</span>, <span class="chem">z = 1.5039...</span>, so <span class="chem">z = 1.50</span> (3 s.f.). Check in <span class="chem">Π_1</span>: <span class="chem">2.1(1.1859) - 0.8(0.6826) + 1.5(1.5039) = 4.20</span>.</p>
      solution: "<p>GDC 給出唯一解 <span class=\"chem\">x = 1.1859...</span>、<span class=\"chem\">y = 0.68262...</span>、<span class=\"chem\">z = 1.5039...</span>，所以 <span class=\"chem\">z = 1.50</span>（3 位有效數字）。代入 <span class=\"chem\">Π_1</span> 驗算：<span class=\"chem\">2.1(1.1859) - 0.8(0.6826) + 1.5(1.5039) = 4.20</span>。</p>",
    },

    // ── t1-5-q045 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q045": {
      // EN: A foundry melts together three alloys to make 800 kg of a new bronze. By mass, alloy A is 62% copper, 28% zinc and 10% tin; alloy B is 48% copper, 35% zinc and 17% tin; alloy C is 70% copper, 12% zinc and 18% tin. The new bronze must be 58% copper, 26% zinc and 16% tin. Find the mass of alloy C that is used.
      stem: "一間鑄造廠把三種合金熔合，製成 800 kg 新青銅。按質量計，合金 A 含 62% 銅、28% 鋅及 10% 錫；合金 B 含 48% 銅、35% 鋅及 17% 錫；合金 C 含 70% 銅、12% 鋅及 18% 錫。新青銅必須含 58% 銅、26% 鋅及 16% 錫。求 (Find) 所用合金 C 的質量。",
      hints: [
        // EN: Decode: there are three unknown masses <span class="chem">a, b, c</span> but four facts (total mass, copper, zinc, tin). Because the percentages in each alloy add up to 100%, one of these facts is redundant.
        "解碼：有三個未知質量 <span class=\"chem\">a, b, c</span>，但有四項資料（總質量、銅、鋅、錫）。由於每種合金的百分比總和為 100%，其中一項資料是多餘的。",
        // EN: Use <span class="chem">a + b + c = 800</span>, copper <span class="chem">0.62a + 0.48b + 0.70c = 0.58 × 800</span> and zinc <span class="chem">0.28a + 0.35b + 0.12c = 0.26 × 800</span>.
        "使用 <span class=\"chem\">a + b + c = 800</span>、銅 <span class=\"chem\">0.62a + 0.48b + 0.70c = 0.58 × 800</span> 及鋅 <span class=\"chem\">0.28a + 0.35b + 0.12c = 0.26 × 800</span>。",
        // EN: Solve with your GDC, then check that the tin equation is also satisfied.
        "用 GDC 求解，然後檢查錫的方程是否也成立。",
      ],
      // EN: <p><strong>Decode:</strong> the tin condition follows from the other three (tin = total − copper − zinc), so we have exactly three independent equations.</p><p><span class="chem">a + b + c = 800</span>, <span class="chem">0.62a + 0.48b + 0.70c = 464</span>, <span class="chem">0.28a + 0.35b + 0.12c = 208</span>. The GDC gives <span class="chem">a = 152.4</span>, <span class="chem">b = 381.0</span>, <span class="chem">c = 266.7</span>. Tin check: <span class="chem">0.10(152.4) + 0.17(381.0) + 0.18(266.7) = 128 = 0.16 × 800</span>. So <span class="chem">267</span> kg of alloy C (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>錫的條件可由其他三項推出（錫 = 總量 − 銅 − 鋅），所以恰好有三條獨立方程。</p><p><span class=\"chem\">a + b + c = 800</span>、<span class=\"chem\">0.62a + 0.48b + 0.70c = 464</span>、<span class=\"chem\">0.28a + 0.35b + 0.12c = 208</span>。GDC 給出 <span class=\"chem\">a = 152.4</span>、<span class=\"chem\">b = 381.0</span>、<span class=\"chem\">c = 266.7</span>。檢查錫：<span class=\"chem\">0.10(152.4) + 0.17(381.0) + 0.18(266.7) = 128 = 0.16 × 800</span>。所以用了 <span class=\"chem\">267</span> kg 合金 C（3 位有效數字）。</p>",
    },

    // ── t1-5-q046 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q046": {
      // EN: In an electrical circuit, Kirchhoff’s laws give the following equations for the currents <span class="chem">I_1</span>, <span class="chem">I_2</span> and <span class="chem">I_3</span> (in amperes):<br><span class="chem">I_1 - I_2 - I_3 = 0</span><br><span class="chem">4.7I_1 + 2.2I_2 = 12</span><br><span class="chem">2.2I_2 - 3.3I_3 = 5</span>.<br>Find the value of <span class="chem">I_2</span>.
      stem: "在一個電路中，基爾霍夫定律給出以下關於電流 <span class=\"chem\">I_1</span>、<span class=\"chem\">I_2</span> 和 <span class=\"chem\">I_3</span>（單位為安培）的方程：<br><span class=\"chem\">I_1 - I_2 - I_3 = 0</span><br><span class=\"chem\">4.7I_1 + 2.2I_2 = 12</span><br><span class=\"chem\">2.2I_2 - 3.3I_3 = 5</span>。<br>求 (Find) <span class=\"chem\">I_2</span> 的值。",
      hints: [
        // EN: Write each equation with all three unknowns, using a coefficient of 0 where a current is missing: for example <span class="chem">4.7I_1 + 2.2I_2 + 0I_3 = 12</span>.
        "把每條方程寫成包含全部三個未知數的形式，缺少的電流以係數 0 表示：例如 <span class=\"chem\">4.7I_1 + 2.2I_2 + 0I_3 = 12</span>。",
        // EN: Solve the <span class="chem">3 × 3</span> system with your GDC.
        "用 GDC 解這個 <span class=\"chem\">3 × 3</span> 方程組。",
      ],
      // EN: <p>The augmented matrix is <span class="chem">[1, -1, -1 | 0; 4.7, 2.2, 0 | 12; 0, 2.2, -3.3 | 5]</span>. The GDC gives <span class="chem">I_1 = 1.6611</span>, <span class="chem">I_2 = 1.9058</span>, <span class="chem">I_3 = -0.24464</span>. So <span class="chem">I_2 = 1.91</span> A (3 s.f.). (The negative <span class="chem">I_3</span> means that current flows the opposite way to the arrow chosen.)</p>
      solution: "<p>增廣矩陣為 <span class=\"chem\">[1, -1, -1 | 0; 4.7, 2.2, 0 | 12; 0, 2.2, -3.3 | 5]</span>。GDC 給出 <span class=\"chem\">I_1 = 1.6611</span>、<span class=\"chem\">I_2 = 1.9058</span>、<span class=\"chem\">I_3 = -0.24464</span>。所以 <span class=\"chem\">I_2 = 1.91</span> A（3 位有效數字）。（<span class=\"chem\">I_3</span> 為負表示該電流的方向與所選箭頭相反。）</p>",
    },

    // ── t1-5-q047 · short · challenge · AHL · AHL 1.16 · 8 marks
    "t1-5-q047": {
      // EN: Consider the system<br><span class="chem">1.2x + 0.5y - z = 3.4</span><br><span class="chem">0.8x - 1.5y + 2z = 1.0</span><br><span class="chem">3.2x - 0.5y = 7.8</span>.<br>(a) A student enters the augmented matrix into a GDC and finds that rref gives a final row of zeros. Explain what this tells you about the solutions, and verify it by expressing the third equation in terms of the first two. [2 marks]<br>(b) Taking <span class="chem">z = lambda</span>, find <span class="chem">x</span> and <span class="chem">y</span> in terms of <span class="chem">lambda</span>. [4 marks]<br>(c) Find the solution of the system that also satisfies <span class="chem">x + y + z = 5</span>, giving each value correct to 3 significant figures. [2 marks]
      stem: "考慮以下方程組<br><span class=\"chem\">1.2x + 0.5y - z = 3.4</span><br><span class=\"chem\">0.8x - 1.5y + 2z = 1.0</span><br><span class=\"chem\">3.2x - 0.5y = 7.8</span>。<br>(a) 一名學生把增廣矩陣輸入 GDC，發現 rref 的最後一行全是零。解釋這告訴你解的甚麼情況，並透過把第三條方程以首兩條方程表示來驗證 (Verify)。[2 marks]<br>(b) 取 <span class=\"chem\">z = lambda</span>，求 (Find) 以 <span class=\"chem\">lambda</span> 表示的 <span class=\"chem\">x</span> 和 <span class=\"chem\">y</span>。[4 marks]<br>(c) 求 (Find) 方程組同時滿足 <span class=\"chem\">x + y + z = 5</span> 的解，每個值須準確至 3 位有效數字。[2 marks]",
      hints: [
        // EN: Decode: a zero row in rref is the technology’s way of saying “one equation is a combination of the others”. That means a line of solutions (if consistent), not a unique point.
        "解碼：rref 中的全零行是科技告訴你「其中一條方程是其他方程的組合」的方式。這表示解是一條直線（若相容），而不是唯一一點。",
        // EN: Look for numbers <span class="chem">alpha, beta</span> with <span class="chem">alpha R_1 + beta R_2 = R_3</span>; start with the <span class="chem">z</span>-coefficients, <span class="chem">-alpha + 2beta = 0</span>.
        "尋找數 <span class=\"chem\">alpha, beta</span> 使 <span class=\"chem\">alpha R_1 + beta R_2 = R_3</span>；從 <span class=\"chem\">z</span> 的係數開始，<span class=\"chem\">-alpha + 2beta = 0</span>。",
        // EN: In (c), adding the equation <span class="chem">x + y + z = 5</span> to the first two gives a new system with a unique solution, which your GDC can solve directly.
        "在 (c)，把方程 <span class=\"chem\">x + y + z = 5</span> 加入首兩條方程，便得到一個有唯一解的新方程組，可直接用 GDC 求解。",
      ],
      // EN: <p><strong>Decode:</strong> a GDC row of zeros means infinitely many solutions; the parametric form describes the line, and an extra condition picks one point on it.</p><p>(a) <span class="chem">R_3 = 2R_1 + R_2</span>. (b) <span class="chem">3R_1 + R_2</span> (with <span class="chem">z = lambda</span>): <span class="chem">4.4x = 11.2 + lambda</span>, so <span class="chem">x = (56 + 5lambda)/22</span>; then <span class="chem">y = (3.4 + lambda - 1.2x)/0.5 = (38 + 80lambda)/55</span>. (c) <span class="chem">(56 + 5lambda)/22 + (38 + 80lambda)/55 + lambda = 5</span> gives <span class="chem">lambda = 0.6576</span>, so <span class="chem">(x, y, z) = (2.69, 1.65, 0.658)</span>.</p>
      solution: "<p><strong>解碼：</strong>GDC 的全零行表示有無限多解；參數形式描述該直線，而額外條件則在直線上選出一點。</p><p>(a) <span class=\"chem\">R_3 = 2R_1 + R_2</span>。(b) <span class=\"chem\">3R_1 + R_2</span>（設 <span class=\"chem\">z = lambda</span>）：<span class=\"chem\">4.4x = 11.2 + lambda</span>，所以 <span class=\"chem\">x = (56 + 5lambda)/22</span>；然後 <span class=\"chem\">y = (3.4 + lambda - 1.2x)/0.5 = (38 + 80lambda)/55</span>。(c) <span class=\"chem\">(56 + 5lambda)/22 + (38 + 80lambda)/55 + lambda = 5</span> 給出 <span class=\"chem\">lambda = 0.6576</span>，所以 <span class=\"chem\">(x, y, z) = (2.69, 1.65, 0.658)</span>。</p>",
      // EN: <p>(a) A zero row <span class="chem">[0 0 0 | 0]</span> means one equation is redundant and the system is consistent, so there are infinitely many solutions (the planes meet in a line). Indeed <span class="chem">2R_1 + R_2 = R_3</span>: <span class="chem">2.4 + 0.8 = 3.2</span>, <span class="chem">1.0 - 1.5 = -0.5</span>, <span class="chem">-2 + 2 = 0</span>, <span class="chem">6.8 + 1.0 = 7.8</span>.<br>(b) From <span class="chem">1.2x + 0.5y = 3.4 + lambda</span> and <span class="chem">0.8x - 1.5y = 1.0 - 2lambda</span>: <span class="chem">x = (56 + 5lambda)/22 = 2.545... + 0.2273lambda</span> and <span class="chem">y = (38 + 80lambda)/55 = 0.6909... + 1.4545lambda</span>.<br>(c) <span class="chem">x + y + z = 5</span> gives <span class="chem">lambda = 194/295</span>, so <span class="chem">x = 2.69</span>, <span class="chem">y = 1.65</span>, <span class="chem">z = 0.658</span>.</p>
      answer: "<p>(a) 全零行 <span class=\"chem\">[0 0 0 | 0]</span> 表示其中一條方程是多餘的，而且方程組是相容的，所以有無限多解（平面相交於一條直線）。事實上 <span class=\"chem\">2R_1 + R_2 = R_3</span>：<span class=\"chem\">2.4 + 0.8 = 3.2</span>、<span class=\"chem\">1.0 - 1.5 = -0.5</span>、<span class=\"chem\">-2 + 2 = 0</span>、<span class=\"chem\">6.8 + 1.0 = 7.8</span>。<br>(b) 由 <span class=\"chem\">1.2x + 0.5y = 3.4 + lambda</span> 及 <span class=\"chem\">0.8x - 1.5y = 1.0 - 2lambda</span>：<span class=\"chem\">x = (56 + 5lambda)/22 = 2.545... + 0.2273lambda</span> 及 <span class=\"chem\">y = (38 + 80lambda)/55 = 0.6909... + 1.4545lambda</span>。<br>(c) <span class=\"chem\">x + y + z = 5</span> 給出 <span class=\"chem\">lambda = 194/295</span>，所以 <span class=\"chem\">x = 2.69</span>、<span class=\"chem\">y = 1.65</span>、<span class=\"chem\">z = 0.658</span>。</p>",
      markscheme: [
        // EN: R1: (a) A zero row means the equations are dependent and consistent, so there are infinitely many solutions.
        "R1：(a) 全零行表示方程相依且相容，所以有無限多解。",
        // EN: A1: (a) Shows R₃ = 2R₁ + R₂ (all four entries checked).
        "A1：(a) 證明 R₃ = 2R₁ + R₂（四個元素全部檢查）。",
        // EN: M1: (b) Rewrites the first two equations with z = λ as a 2 × 2 system in x and y.
        "M1：(b) 設 z = λ，把首兩條方程改寫為關於 x 和 y 的 2 × 2 方程組。",
        // EN: M1: (b) Eliminates one variable (e.g. 3R₁ + R₂ gives 4.4x = 11.2 + λ).
        "M1：(b) 消去一個變數（例如 3R₁ + R₂ 給出 4.4x = 11.2 + λ）。",
        // EN: A1: (b) x = (56 + 5λ)/22 (or 2.55 + 0.227λ).
        "A1：(b) x = (56 + 5λ)/22（或 2.55 + 0.227λ）。",
        // EN: A1: (b) y = (38 + 80λ)/55 (or 0.691 + 1.45λ).
        "A1：(b) y = (38 + 80λ)/55（或 0.691 + 1.45λ）。",
        // EN: M1: (c) Substitutes into x + y + z = 5 (or solves the new 3 × 3 system with the GDC).
        "M1：(c) 代入 x + y + z = 5（或用 GDC 解新的 3 × 3 方程組）。",
        // EN: A1: (c) x = 2.69, y = 1.65, z = 0.658.
        "A1：(c) x = 2.69、y = 1.65、z = 0.658。",
      ],
    },

    // ── t1-5-q048 · numeric · exam · AHL · AHL 1.16 · 6 marks
    "t1-5-q048": {
      // EN: The curve <span class="chem">y = ax^3 + bx^2 + cx + 2</span> passes through the points <span class="chem">(1, 3.4)</span>, <span class="chem">(2, 1.7)</span> and <span class="chem">(3, 5.9)</span>. Find the <span class="chem">x</span>-coordinate of the local minimum point of the curve.
      stem: "曲線 <span class=\"chem\">y = ax^3 + bx^2 + cx + 2</span> 通過點 <span class=\"chem\">(1, 3.4)</span>、<span class=\"chem\">(2, 1.7)</span> 及 <span class=\"chem\">(3, 5.9)</span>。求 (Find) 曲線局部極小點的 <span class=\"chem\">x</span> 坐標。",
      hints: [
        // EN: Substituting each point gives a linear equation in <span class="chem">a, b, c</span>. For example, <span class="chem">(1, 3.4)</span> gives <span class="chem">a + b + c + 2 = 3.4</span>.
        "代入每一點都給出一條關於 <span class=\"chem\">a, b, c</span> 的線性方程。例如 <span class=\"chem\">(1, 3.4)</span> 給出 <span class=\"chem\">a + b + c + 2 = 3.4</span>。",
        // EN: Solve the three equations with your GDC, then graph the cubic (or solve <span class="chem">3ax^2 + 2bx + c = 0</span>) to find the local minimum.
        "用 GDC 解這三條方程，再繪畫該三次曲線的圖像（或解 <span class=\"chem\">3ax^2 + 2bx + c = 0</span>）以求局部極小點。",
      ],
      // EN: <p><span class="chem">a + b + c = 1.4</span>, <span class="chem">8a + 4b + 2c = -0.3</span>, <span class="chem">27a + 9b + 3c = 3.9</span>. The GDC gives <span class="chem">a = 1.5</span>, <span class="chem">b = -6.05</span>, <span class="chem">c = 5.95</span>. Then <span class="chem">dy/dx = 4.5x^2 - 12.1x + 5.95 = 0</span> gives <span class="chem">x = 0.648</span> (local maximum) and <span class="chem">x = 2.04</span>. Since <span class="chem">a &gt; 0</span>, the larger root is the local minimum: <span class="chem">x = 2.04</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">a + b + c = 1.4</span>、<span class=\"chem\">8a + 4b + 2c = -0.3</span>、<span class=\"chem\">27a + 9b + 3c = 3.9</span>。GDC 給出 <span class=\"chem\">a = 1.5</span>、<span class=\"chem\">b = -6.05</span>、<span class=\"chem\">c = 5.95</span>。於是 <span class=\"chem\">dy/dx = 4.5x^2 - 12.1x + 5.95 = 0</span> 給出 <span class=\"chem\">x = 0.648</span>（局部極大）及 <span class=\"chem\">x = 2.04</span>。由於 <span class=\"chem\">a &gt; 0</span>，較大的根是局部極小點：<span class=\"chem\">x = 2.04</span>（3 位有效數字）。</p>",
    },

    // ── t1-5-q049 · numeric · exam · AHL · AHL 1.15 · 3 marks
    "t1-5-q049": {
      // EN: A student conjectures that <span class="chem">n^2 + n + 17</span> is a prime number for every positive integer <span class="chem">n</span>. Use your GDC to find the smallest positive integer <span class="chem">n</span> that is a counterexample to this conjecture.
      stem: "一名學生猜想對每一個正整數 <span class=\"chem\">n</span>，<span class=\"chem\">n^2 + n + 17</span> 都是質數。用 GDC 求 (Find) 這個猜想的最小正整數反例 <span class=\"chem\">n</span>。",
      hints: [
        // EN: Put <span class="chem">f(n) = n^2 + n + 17</span> into the table function of your GDC and look for the first value that is not prime.
        "把 <span class=\"chem\">f(n) = n^2 + n + 17</span> 輸入 GDC 的列表功能，找出第一個不是質數的值。",
        // EN: Watch for values that are perfect squares or multiples of 17. What happens when <span class="chem">n</span> is close to 17?
        "留意完全平方數或 17 的倍數。當 <span class=\"chem\">n</span> 接近 17 時會發生甚麼事？",
      ],
      // EN: <p>The table gives <span class="chem">19, 23, 29, 37, ..., 257</span> for <span class="chem">n = 1, ..., 15</span>, all prime. For <span class="chem">n = 16</span>: <span class="chem">16^2 + 16 + 17 = 289 = 17^2</span>, which is not prime. So <span class="chem">n = 16</span> is the smallest counterexample. (Algebra explains it: <span class="chem">n^2 + n + 17 = 16 × 17 + 17 = 17^2</span> when <span class="chem">n = 16</span>.)</p>
      solution: "<p>列表給出 <span class=\"chem\">n = 1, ..., 15</span> 時的值 <span class=\"chem\">19, 23, 29, 37, ..., 257</span>，全都是質數。當 <span class=\"chem\">n = 16</span>：<span class=\"chem\">16^2 + 16 + 17 = 289 = 17^2</span>，不是質數。所以 <span class=\"chem\">n = 16</span> 是最小的反例。（代數上的解釋：當 <span class=\"chem\">n = 16</span>，<span class=\"chem\">n^2 + n + 17 = 16 × 17 + 17 = 17^2</span>。）</p>",
    },

    // ── t1-5-q050 · numeric · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q050": {
      // EN: A student claims: “Exponentials always beat powers, so <span class="chem">e^x &gt;= x^3</span> for every <span class="chem">x &gt; 0</span>.” The claim is false: the set of positive values of <span class="chem">x</span> for which it fails is an interval <span class="chem">a &lt; x &lt; b</span>. Find the value of <span class="chem">b</span>.
      stem: "一名學生聲稱：「指數總是勝過冪，所以對每一個 <span class=\"chem\">x &gt; 0</span>，<span class=\"chem\">e^x &gt;= x^3</span>。」這個說法是錯誤的：使它不成立的正數 <span class=\"chem\">x</span> 值的集合是一個區間 <span class=\"chem\">a &lt; x &lt; b</span>。求 (Find) <span class=\"chem\">b</span> 的值。",
      hints: [
        // EN: Decode: the counterexamples are the values of <span class="chem">x</span> where <span class="chem">x^3 &gt; e^x</span>. The endpoints <span class="chem">a</span> and <span class="chem">b</span> are where the two graphs cross, and you want the larger crossing.
        "解碼：反例就是使 <span class=\"chem\">x^3 &gt; e^x</span> 的 <span class=\"chem\">x</span> 值。端點 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 是兩個圖像相交之處，而你要的是較大的交點。",
        // EN: Graph <span class="chem">y = e^x - x^3</span> for <span class="chem">0 &lt; x &lt; 6</span> and find its zeros.
        "在 <span class=\"chem\">0 &lt; x &lt; 6</span> 繪畫 <span class=\"chem\">y = e^x - x^3</span> 的圖像，並求其零點。",
        // EN: One counterexample, such as <span class="chem">x = 3</span> (<span class="chem">e^3 = 20.1 &lt; 27</span>), already disproves the claim.
        "一個反例，例如 <span class=\"chem\">x = 3</span>（<span class=\"chem\">e^3 = 20.1 &lt; 27</span>），已足以推翻這個說法。",
      ],
      // EN: <p><strong>Decode:</strong> “the set where it fails” is the solution set of <span class="chem">x^3 &gt; e^x</span>, so find where the curves intersect.</p><p>The zeros of <span class="chem">e^x - x^3</span> are <span class="chem">x = 1.857...</span> and <span class="chem">x = 4.536...</span>, and <span class="chem">e^x - x^3 &lt; 0</span> between them (e.g. at <span class="chem">x = 3</span>). So <span class="chem">a = 1.86</span> and <span class="chem">b = 4.54</span> (3 s.f.). For <span class="chem">x &gt; b</span> the exponential is larger again.</p>
      solution: "<p><strong>解碼：</strong>「使它不成立的集合」就是 <span class=\"chem\">x^3 &gt; e^x</span> 的解集，所以要找出曲線的交點。</p><p><span class=\"chem\">e^x - x^3</span> 的零點是 <span class=\"chem\">x = 1.857...</span> 及 <span class=\"chem\">x = 4.536...</span>，而在兩者之間 <span class=\"chem\">e^x - x^3 &lt; 0</span>（例如在 <span class=\"chem\">x = 3</span>）。所以 <span class=\"chem\">a = 1.86</span> 及 <span class=\"chem\">b = 4.54</span>（3 位有效數字）。當 <span class=\"chem\">x &gt; b</span>，指數函數又再較大。</p>",
    },

    // ── t1-5-q051 · numeric · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q051": {
      // EN: A proof by induction is to be written for the statement <span class="chem">2^n &gt; n^5</span> for all integers <span class="chem">n &gt;= n_0</span>. Use your GDC to find the smallest positive integer <span class="chem">n_0</span> for which the statement is true for <strong>every</strong> integer <span class="chem">n &gt;= n_0</span>.
      stem: "現要為陳述「對所有整數 <span class=\"chem\">n &gt;= n_0</span>，<span class=\"chem\">2^n &gt; n^5</span>」寫出歸納證明。用 GDC 求 (Find) 最小的正整數 <span class=\"chem\">n_0</span>，使該陳述對<strong>每一個</strong>整數 <span class=\"chem\">n &gt;= n_0</span> 都成立。",
      hints: [
        // EN: Decode: you need the point after which the inequality never fails again. Being true for one small value is not enough: check <span class="chem">n = 1</span> and then <span class="chem">n = 2</span>.
        "解碼：你需要的是不等式從此不再不成立的那一點。對一個細小的值成立並不足夠：檢查 <span class=\"chem\">n = 1</span>，再檢查 <span class=\"chem\">n = 2</span>。",
        // EN: Use the GDC table for <span class="chem">y = 2^x - x^5</span> with step 1 and look for the last integer where the value is negative.
        "以步長 1 使用 GDC 的 <span class=\"chem\">y = 2^x - x^5</span> 列表，找出最後一個使值為負的整數。",
        // EN: Once <span class="chem">n</span> is large, <span class="chem">2^{n+1}/2^n = 2</span> is bigger than <span class="chem">(n + 1)^5/n^5</span>, so the inequality stays true.
        "當 <span class=\"chem\">n</span> 足夠大時，<span class=\"chem\">2^{n+1}/2^n = 2</span> 大於 <span class=\"chem\">(n + 1)^5/n^5</span>，所以不等式保持成立。",
      ],
      // EN: <p><strong>Decode:</strong> “for every integer <span class="chem">n &gt;= n_0</span>” means you need the start of the final run of true values, not the first true value.</p><p><span class="chem">n = 1</span>: <span class="chem">2 &gt; 1</span> (true), but <span class="chem">n = 2</span>: <span class="chem">4 &lt; 32</span> (false), and the table shows it is false for every <span class="chem">n</span> from 2 to 22: <span class="chem">2^{22} = 4194304 &lt; 22^5 = 5153632</span>. For <span class="chem">n = 23</span>: <span class="chem">2^{23} = 8388608 &gt; 23^5 = 6436343</span>. For <span class="chem">n &gt;= 23</span>, <span class="chem">(1 + 1/n)^5 &lt; 2</span>, so the inequality stays true. Hence <span class="chem">n_0 = 23</span>.</p>
      solution: "<p><strong>解碼：</strong>「對每一個整數 <span class=\"chem\">n &gt;= n_0</span>」表示你需要最後一段連續成立的值的起點，而不是第一個成立的值。</p><p><span class=\"chem\">n = 1</span>：<span class=\"chem\">2 &gt; 1</span>（成立），但 <span class=\"chem\">n = 2</span>：<span class=\"chem\">4 &lt; 32</span>（不成立），而列表顯示由 2 至 22 的每一個 <span class=\"chem\">n</span> 都不成立：<span class=\"chem\">2^{22} = 4194304 &lt; 22^5 = 5153632</span>。當 <span class=\"chem\">n = 23</span>：<span class=\"chem\">2^{23} = 8388608 &gt; 23^5 = 6436343</span>。當 <span class=\"chem\">n &gt;= 23</span>，<span class=\"chem\">(1 + 1/n)^5 &lt; 2</span>，所以不等式保持成立。因此 <span class=\"chem\">n_0 = 23</span>。</p>",
    },

    // ── t1-5-q052 · short · exam · AHL · AHL 1.15 · 9 marks
    "t1-5-q052": {
      // EN: Let <span class="chem">S_n = Sigma_{r=1}^n r / 2^r</span>.<br>(a) Prove by mathematical induction that <span class="chem">S_n = 2 - (n + 2)/2^n</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [7 marks]<br>(b) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 1.999</span>. [2 marks]
      stem: "設 <span class=\"chem\">S_n = Sigma_{r=1}^n r / 2^r</span>。<br>(a) 用數學歸納法證明 (Prove)：對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">S_n = 2 - (n + 2)/2^n</span>。[7 marks]<br>(b) 求 (Find) 使 <span class=\"chem\">S_n &gt; 1.999</span> 的最小 <span class=\"chem\">n</span> 值。[2 marks]",
      hints: [
        // EN: In the step, the <span class="chem">(k + 1)</span>-th term is <span class="chem">(k + 1)/2^{k+1}</span>. Write <span class="chem">(k + 2)/2^k</span> as <span class="chem">2(k + 2)/2^{k+1}</span>.
        "在歸納步驟中，第 <span class=\"chem\">(k + 1)</span> 項是 <span class=\"chem\">(k + 1)/2^{k+1}</span>。把 <span class=\"chem\">(k + 2)/2^k</span> 寫成 <span class=\"chem\">2(k + 2)/2^{k+1}</span>。",
        // EN: In (b) the inequality cannot be rearranged to make <span class="chem">n</span> the subject, so use the table function of your GDC.
        "在 (b)，不等式無法重排成以 <span class=\"chem\">n</span> 為主項，所以要使用 GDC 的列表功能。",
      ],
      // EN: <p>(a) <span class="chem">S_{k+1} = 2 - (2k + 4)/2^{k+1} + (k + 1)/2^{k+1} = 2 - (k + 3)/2^{k+1}</span>, which is the formula with <span class="chem">n = k + 1</span>.<br>(b) <span class="chem">S_{13} = 1.99817</span> and <span class="chem">S_{14} = 1.99902</span>, so the smallest value is <span class="chem">n = 14</span>.</p>
      solution: "<p>(a) <span class=\"chem\">S_{k+1} = 2 - (2k + 4)/2^{k+1} + (k + 1)/2^{k+1} = 2 - (k + 3)/2^{k+1}</span>，即 <span class=\"chem\">n = k + 1</span> 時的公式。<br>(b) <span class=\"chem\">S_{13} = 1.99817</span> 及 <span class=\"chem\">S_{14} = 1.99902</span>，所以最小值為 <span class=\"chem\">n = 14</span>。</p>",
      // EN: <p>(a) <strong>Base case:</strong> <span class="chem">n = 1</span>: <span class="chem">S_1 = 1/2</span> and <span class="chem">2 - 3/2 = 1/2</span>, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">S_k = 2 - (k + 2)/2^k</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">S_{k+1} = 2 - (k + 2)/2^k + (k + 1)/2^{k+1} = 2 - (2(k + 2) - (k + 1))/2^{k+1} = 2 - (k + 3)/2^{k+1} = 2 - ((k + 1) + 2)/2^{k+1}</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by mathematical induction the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.<br>(b) We need <span class="chem">(n + 2)/2^n &lt; 0.001</span>. The GDC table gives <span class="chem">15/2^{13} = 0.00183</span> and <span class="chem">16/2^{14} = 0.000977</span>, so <span class="chem">n = 14</span>.</p>
      answer: "<p>(a) <strong>初始步驟：</strong><span class=\"chem\">n = 1</span>：<span class=\"chem\">S_1 = 1/2</span> 及 <span class=\"chem\">2 - 3/2 = 1/2</span>，所以 <span class=\"chem\">P(1)</span> 成立。<br><strong>歸納假設：</strong>假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">S_k = 2 - (k + 2)/2^k</span>。<br><strong>歸納步驟：</strong><span class=\"chem\">S_{k+1} = 2 - (k + 2)/2^k + (k + 1)/2^{k+1} = 2 - (2(k + 2) - (k + 1))/2^{k+1} = 2 - (k + 3)/2^{k+1} = 2 - ((k + 1) + 2)/2^{k+1}</span>。<br><strong>結論：</strong>由於 <span class=\"chem\">P(1)</span> 成立，且若 <span class=\"chem\">P(k)</span> 成立則 <span class=\"chem\">P(k + 1)</span> 亦成立，根據數學歸納法，公式對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。<br>(b) 我們需要 <span class=\"chem\">(n + 2)/2^n &lt; 0.001</span>。GDC 列表給出 <span class=\"chem\">15/2^{13} = 0.00183</span> 及 <span class=\"chem\">16/2^{14} = 0.000977</span>，所以 <span class=\"chem\">n = 14</span>。</p>",
      markscheme: [
        // EN: A1: (a) n = 1: S₁ = 1/2 and 2 − 3/2 = 1/2, so P(1) is true.
        "A1：(a) n = 1：S₁ = 1/2 及 2 − 3/2 = 1/2，所以 P(1) 成立。",
        // EN: M1: (a) Assumes P(k) true for some k ∈ ℤ⁺.
        "M1：(a) 假設對某 k ∈ ℤ⁺，P(k) 成立。",
        // EN: M1: (a) Adds the (k + 1)-th term: S<sub>k+1</sub> = 2 − (k + 2)/2<sup>k</sup> + (k + 1)/2<sup>k+1</sup>.
        "M1：(a) 加上第 (k + 1) 項：S<sub>k+1</sub> = 2 − (k + 2)/2<sup>k</sup> + (k + 1)/2<sup>k+1</sup>。",
        // EN: M1: (a) Uses the common denominator 2<sup>k+1</sup>.
        "M1：(a) 使用公分母 2<sup>k+1</sup>。",
        // EN: A1: (a) Obtains 2 − (2k + 4 − k − 1)/2<sup>k+1</sup>.
        "A1：(a) 得出 2 − (2k + 4 − k − 1)/2<sup>k+1</sup>。",
        // EN: A1: (a) Obtains 2 − (k + 3)/2<sup>k+1</sup> = 2 − ((k + 1) + 2)/2<sup>k+1</sup>.
        "A1：(a) 得出 2 − (k + 3)/2<sup>k+1</sup> = 2 − ((k + 1) + 2)/2<sup>k+1</sup>。",
        // EN: R1: (a) Induction conclusion sentence (only if the M marks above are earned).
        "R1：(a) 數學歸納法總結句（須已取得前述 M 分方予頒授）。",
        // EN: M1: (b) Sets up (n + 2)/2<sup>n</sup> < 0.001 (or 2 − (n + 2)/2<sup>n</sup> > 1.999) and uses a table or graph.
        "M1：(b) 列出 (n + 2)/2<sup>n</sup> < 0.001（或 2 − (n + 2)/2<sup>n</sup> > 1.999），並使用列表或圖像。",
        // EN: A1: (b) n = 14.
        "A1：(b) n = 14。",
      ],
    },

    // ── t1-5-q053 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q053": {
      // EN: A beekeeper starts season 1 with 100 hives. Each season the number of hives grows by 50%, after which 20 hives are sold. The number of hives is modelled by <span class="chem">u_1 = 100</span> and <span class="chem">u_{n+1} = 1.5u_n - 20</span>, where <span class="chem">u_n</span> is the modelled number of hives at the start of season <span class="chem">n</span>. It can be proved by induction that <span class="chem">u_n = 40 + 60(1.5)^{n-1}</span>. Find the first season in which the beekeeper starts with more than 10 000 hives.
      stem: "一名養蜂人在第 1 季開始時有 100 個蜂箱。每一季蜂箱數目增加 50%，之後賣出 20 個蜂箱。蜂箱數目以 <span class=\"chem\">u_1 = 100</span> 及 <span class=\"chem\">u_{n+1} = 1.5u_n - 20</span> 作模型，其中 <span class=\"chem\">u_n</span> 是第 <span class=\"chem\">n</span> 季開始時蜂箱數目的模型值。可用歸納法證明 <span class=\"chem\">u_n = 40 + 60(1.5)^{n-1}</span>。求 (Find) 養蜂人在開始時擁有多於 10 000 個蜂箱的第一季。",
      hints: [
        // EN: Decode: you want the smallest positive integer <span class="chem">n</span> with <span class="chem">u_n &gt; 10000</span>. The closed form (proved by induction) turns this into an exponential inequality.
        "解碼：你要找使 <span class=\"chem\">u_n &gt; 10000</span> 的最小正整數 <span class=\"chem\">n</span>。（以歸納法證明的）通項公式把這變成一個指數不等式。",
        // EN: Solve <span class="chem">40 + 60(1.5)^{n-1} &gt; 10000</span> with your GDC (graph or table), or rearrange to <span class="chem">1.5^{n-1} &gt; 166</span> and use logarithms.
        "用 GDC（圖像或列表）解 <span class=\"chem\">40 + 60(1.5)^{n-1} &gt; 10000</span>，或重排為 <span class=\"chem\">1.5^{n-1} &gt; 166</span> 並使用對數。",
        // EN: The answer must be a whole number of seasons: check the integers on either side of the boundary.
        "答案必須是整數個季度：檢查分界兩側的整數。",
      ],
      // EN: <p><strong>Decode:</strong> a recurrence plus a threshold: use the closed form, then find the least integer <span class="chem">n</span>.</p><p><span class="chem">60(1.5)^{n-1} &gt; 9960</span> gives <span class="chem">1.5^{n-1} &gt; 166</span>, so <span class="chem">n - 1 &gt; ln 166 / ln 1.5 = 12.6</span>. Table check: <span class="chem">u_{13} = 7824.8</span> and <span class="chem">u_{14} = 11717</span>. So the first such season is season <span class="chem">14</span>.</p>
      solution: "<p><strong>解碼：</strong>遞歸關係加上一個門檻：使用通項公式，再找出最小的整數 <span class=\"chem\">n</span>。</p><p><span class=\"chem\">60(1.5)^{n-1} &gt; 9960</span> 給出 <span class=\"chem\">1.5^{n-1} &gt; 166</span>，所以 <span class=\"chem\">n - 1 &gt; ln 166 / ln 1.5 = 12.6</span>。列表檢查：<span class=\"chem\">u_{13} = 7824.8</span> 及 <span class=\"chem\">u_{14} = 11717</span>。所以第一個這樣的季度是第 <span class=\"chem\">14</span> 季。</p>",
    },

    // ── t1-5-q054 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q054": {
      // EN: Let <span class="chem">f(x) = x^2 e^x</span>. It can be proved by induction that <span class="chem">f^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Find the minimum value of the function <span class="chem">g(x) = f^{(4)}(x)</span>, <span class="chem">x \in \mathbb{R}</span>.
      stem: "設 <span class=\"chem\">f(x) = x^2 e^x</span>。可用歸納法證明對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">f^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span>。求 (Find) 函數 <span class=\"chem\">g(x) = f^{(4)}(x)</span>，<span class=\"chem\">x \\in \\mathbb{R}</span> 的最小值。",
      hints: [
        // EN: Decode: <span class="chem">g = f^{(4)}</span>, so its derivative is <span class="chem">g'(x) = f^{(5)}(x)</span>, which the given formula provides. You need the stationary point of <span class="chem">g</span> that gives the least value.
        "解碼：<span class=\"chem\">g = f^{(4)}</span>，所以其導數為 <span class=\"chem\">g'(x) = f^{(5)}(x)</span>，可由所給公式得出。你需要 <span class=\"chem\">g</span> 給出最小值的那個駐點。",
        // EN: From the formula with <span class="chem">n = 4</span>: <span class="chem">g(x) = (x^2 + 8x + 12)e^x</span>; with <span class="chem">n = 5</span>: <span class="chem">g'(x) = (x^2 + 10x + 20)e^x</span>.
        "由公式取 <span class=\"chem\">n = 4</span>：<span class=\"chem\">g(x) = (x^2 + 8x + 12)e^x</span>；取 <span class=\"chem\">n = 5</span>：<span class=\"chem\">g'(x) = (x^2 + 10x + 20)e^x</span>。",
        // EN: Graph <span class="chem">g</span> on your GDC (e.g. for <span class="chem">-10 &lt;= x &lt;= 1</span>) and use the minimum feature, or solve <span class="chem">x^2 + 10x + 20 = 0</span>.
        "在 GDC 上繪畫 <span class=\"chem\">g</span> 的圖像（例如在 <span class=\"chem\">-10 &lt;= x &lt;= 1</span>）並使用求極小值功能，或解 <span class=\"chem\">x^2 + 10x + 20 = 0</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the induction formula gives both <span class="chem">g = f^{(4)}</span> and <span class="chem">g' = f^{(5)}</span>.</p><p><span class="chem">g'(x) = (x^2 + 10x + 20)e^x = 0</span> gives <span class="chem">x = -5 +- sqrt(5)</span>. At <span class="chem">x = -5 + sqrt(5) = -2.764</span>, <span class="chem">g = -0.156</span>; at <span class="chem">x = -5 - sqrt(5)</span>, <span class="chem">g = 0.00466</span> (a local maximum). As <span class="chem">x -&gt; −∞</span>, <span class="chem">g -&gt; 0</span>, so the minimum value is <span class="chem">-0.156</span> (3 s.f.).</p>
      solution: "<p><strong>解碼：</strong>歸納公式同時給出 <span class=\"chem\">g = f^{(4)}</span> 及 <span class=\"chem\">g' = f^{(5)}</span>。</p><p><span class=\"chem\">g'(x) = (x^2 + 10x + 20)e^x = 0</span> 給出 <span class=\"chem\">x = -5 +- sqrt(5)</span>。在 <span class=\"chem\">x = -5 + sqrt(5) = -2.764</span>，<span class=\"chem\">g = -0.156</span>；在 <span class=\"chem\">x = -5 - sqrt(5)</span>，<span class=\"chem\">g = 0.00466</span>（局部極大）。當 <span class=\"chem\">x -&gt; −∞</span>，<span class=\"chem\">g -&gt; 0</span>，所以最小值為 <span class=\"chem\">-0.156</span>（3 位有效數字）。</p>",
    },

    // ── t1-5-q055 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q055": {
      // EN: A school canteen sells three meals, A, B and C, each at a fixed price. The sales on three days were:<br><span class="mono">Monday: 112 A, 85 B, 64 C, takings $1777.00</span><br><span class="mono">Tuesday: 98 A, 102 B, 71 C, takings $1848.55</span><br><span class="mono">Wednesday: 120 A, 76 B, 90 C, takings $1919.90</span><br>Find the price of meal C. Give your answer correct to 2 decimal places.
      stem: "學校飯堂出售 A、B 和 C 三款餐，每款售價固定。三天的銷售情況如下：<br><span class=\"mono\">Monday: 112 A, 85 B, 64 C, takings $1777.00</span><br><span class=\"mono\">Tuesday: 98 A, 102 B, 71 C, takings $1848.55</span><br><span class=\"mono\">Wednesday: 120 A, 76 B, 90 C, takings $1919.90</span><br>求 (Find) C 餐的售價，答案須準確至 2 位小數。",
      hints: [
        // EN: Let the prices be <span class="chem">a, b, c</span> dollars. Each day gives one equation, for example <span class="chem">112a + 85b + 64c = 1777</span>.
        "設售價為 <span class=\"chem\">a, b, c</span> 元。每天給出一條方程，例如 <span class=\"chem\">112a + 85b + 64c = 1777</span>。",
        // EN: Solve the system with your GDC.
        "用 GDC 解這個方程組。",
      ],
      // EN: <p><span class="chem">112a + 85b + 64c = 1777</span>, <span class="chem">98a + 102b + 71c = 1848.55</span>, <span class="chem">120a + 76b + 90c = 1919.90</span>. The GDC gives <span class="chem">a = 6.85</span>, <span class="chem">b = 7.40</span>, <span class="chem">c = 5.95</span>. Check Monday: <span class="chem">767.20 + 629.00 + 380.80 = 1777.00</span>. Meal C costs <span class="chem">$5.95</span>.</p>
      solution: "<p><span class=\"chem\">112a + 85b + 64c = 1777</span>、<span class=\"chem\">98a + 102b + 71c = 1848.55</span>、<span class=\"chem\">120a + 76b + 90c = 1919.90</span>。GDC 給出 <span class=\"chem\">a = 6.85</span>、<span class=\"chem\">b = 7.40</span>、<span class=\"chem\">c = 5.95</span>。以星期一驗算：<span class=\"chem\">767.20 + 629.00 + 380.80 = 1777.00</span>。C 餐售價為 <span class=\"chem\">$5.95</span>。</p>",
    },

    // ── t1-5-q056 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q056": {
      // EN: Consider the system<br><span class="chem">0.4x + 1.2y - 0.7z = 2.6</span><br><span class="chem">1.5x - 0.3y + 0.9z = 1.8</span><br><span class="chem">1.58x + 1.86y + kz = m</span>, where <span class="chem">k, m \in \mathbb{R}</span>.<br>The system has infinitely many solutions. Find the value of <span class="chem">m</span>.
      stem: "考慮以下方程組<br><span class=\"chem\">0.4x + 1.2y - 0.7z = 2.6</span><br><span class=\"chem\">1.5x - 0.3y + 0.9z = 1.8</span><br><span class=\"chem\">1.58x + 1.86y + kz = m</span>，其中 <span class=\"chem\">k, m \\in \\mathbb{R}</span>。<br>方程組有無限多解。求 (Find) <span class=\"chem\">m</span> 的值。",
      hints: [
        // EN: Decode: the first two planes are not parallel, so they meet in a line. Infinitely many solutions means the third equation must be a combination <span class="chem">alpha R_1 + beta R_2</span> of the first two (all four entries).
        "解碼：首兩個平面並不平行，所以它們相交於一條直線。有無限多解表示第三條方程必須是首兩條方程的組合 <span class=\"chem\">alpha R_1 + beta R_2</span>（全部四個元素）。",
        // EN: Match the <span class="chem">x</span>- and <span class="chem">y</span>-coefficients: <span class="chem">0.4alpha + 1.5beta = 1.58</span> and <span class="chem">1.2alpha - 0.3beta = 1.86</span>. Solve this <span class="chem">2 × 2</span> system (GDC).
        "配對 <span class=\"chem\">x</span> 及 <span class=\"chem\">y</span> 的係數：<span class=\"chem\">0.4alpha + 1.5beta = 1.58</span> 及 <span class=\"chem\">1.2alpha - 0.3beta = 1.86</span>。解這個 <span class=\"chem\">2 × 2</span> 方程組（GDC）。",
        // EN: Then <span class="chem">k = -0.7alpha + 0.9beta</span> and <span class="chem">m = 2.6alpha + 1.8beta</span>. Check with rref that the system really has a zero row.
        "然後 <span class=\"chem\">k = -0.7alpha + 0.9beta</span> 及 <span class=\"chem\">m = 2.6alpha + 1.8beta</span>。用 rref 檢查方程組確實有一行全零。",
      ],
      // EN: <p><strong>Decode:</strong> “infinitely many solutions” for three planes through a common line means the third equation is a linear combination of the other two, including the constant term.</p><p><span class="chem">0.4alpha + 1.5beta = 1.58</span>, <span class="chem">1.2alpha - 0.3beta = 1.86</span> give <span class="chem">alpha = 1.7</span>, <span class="chem">beta = 0.6</span>. Then <span class="chem">k = -1.19 + 0.54 = -0.65</span> and <span class="chem">m = 4.42 + 1.08 = 5.5</span>. With <span class="chem">k = -0.65</span> and <span class="chem">m = 5.5</span>, rref on the GDC gives a row of zeros, confirming infinitely many solutions.</p>
      solution: "<p><strong>解碼：</strong>對於通過一條公共直線的三個平面，「無限多解」表示第三條方程是另外兩條方程的線性組合，包括常數項在內。</p><p><span class=\"chem\">0.4alpha + 1.5beta = 1.58</span>、<span class=\"chem\">1.2alpha - 0.3beta = 1.86</span> 給出 <span class=\"chem\">alpha = 1.7</span>、<span class=\"chem\">beta = 0.6</span>。於是 <span class=\"chem\">k = -1.19 + 0.54 = -0.65</span> 及 <span class=\"chem\">m = 4.42 + 1.08 = 5.5</span>。當 <span class=\"chem\">k = -0.65</span> 及 <span class=\"chem\">m = 5.5</span>，GDC 的 rref 給出一行全零，確認有無限多解。</p>",
    },

    // ── t1-5-q057 · short · challenge · AHL · AHL 1.15, 1.16 · 18 marks
    "t1-5-q057": {
      // EN: <strong>Investigation: finding a sum formula with a linear system.</strong> Let <span class="chem">S(n) = Sigma_{r=1}^n r(r + 2)</span>.<br>(a) Write down the values of <span class="chem">S(1)</span>, <span class="chem">S(2)</span> and <span class="chem">S(3)</span>. [2 marks]<br>It is suggested that <span class="chem">S(n) = an^3 + bn^2 + cn</span> for constants <span class="chem">a, b, c</span>.<br>(b) Use your answers to (a) to write down a system of three linear equations in <span class="chem">a, b, c</span>, and solve it. [4 marks]<br>(c) Verify that your formula gives the correct value of <span class="chem">S(4)</span>. [2 marks]<br>(d) Show that your formula can be written as <span class="chem">S(n) = n(n + 1)(2n + 7)/6</span>. [2 marks]<br>(e) Prove by mathematical induction that <span class="chem">S(n) = n(n + 1)(2n + 7)/6</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]<br>(f) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S(n) &gt; 10^6</span>. [2 marks]
      stem: "<strong>探究：用線性方程組求求和公式。</strong>設 <span class=\"chem\">S(n) = Sigma_{r=1}^n r(r + 2)</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">S(1)</span>、<span class=\"chem\">S(2)</span> 及 <span class=\"chem\">S(3)</span> 的值。[2 marks]<br>有人提出 <span class=\"chem\">S(n) = an^3 + bn^2 + cn</span>，其中 <span class=\"chem\">a, b, c</span> 為常數。<br>(b) 利用 (a) 的答案，寫出一個關於 <span class=\"chem\">a, b, c</span> 的三條線性方程的方程組，並解之。[4 marks]<br>(c) 驗證 (Verify) 你的公式給出正確的 <span class=\"chem\">S(4)</span> 值。[2 marks]<br>(d) 證明 (Show that) 你的公式可寫成 <span class=\"chem\">S(n) = n(n + 1)(2n + 7)/6</span>。[2 marks]<br>(e) 用數學歸納法證明 (Prove)：對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">S(n) = n(n + 1)(2n + 7)/6</span>。[6 marks]<br>(f) 求 (Find) 使 <span class=\"chem\">S(n) &gt; 10^6</span> 的最小 <span class=\"chem\">n</span> 值。[2 marks]",
      hints: [
        // EN: Decode: this is the standard Paper 3 route: compute small cases, fit a model with a linear system, test it on a new case, then prove it in general by induction and apply it.
        "解碼：這是 Paper 3 的標準路線：計算細小的情況，以線性方程組擬合模型，用新情況測試，再以歸納法作一般證明並加以應用。",
        // EN: In (b) each value of <span class="chem">n</span> gives one equation: for <span class="chem">n = 2</span>, <span class="chem">8a + 4b + 2c = 11</span>.
        "在 (b)，每個 <span class=\"chem\">n</span> 值給出一條方程：當 <span class=\"chem\">n = 2</span>，<span class=\"chem\">8a + 4b + 2c = 11</span>。",
        // EN: In (e) the <span class="chem">(k + 1)</span>-th term is <span class="chem">(k + 1)(k + 3)</span>. Take out the common factor <span class="chem">(k + 1)/6</span> before expanding anything.
        "在 (e)，第 <span class=\"chem\">(k + 1)</span> 項是 <span class=\"chem\">(k + 1)(k + 3)</span>。在展開任何式子之前，先抽出公因式 <span class=\"chem\">(k + 1)/6</span>。",
        // EN: In (f), solve <span class="chem">n(n + 1)(2n + 7)/6 = 10^6</span> on your GDC and round up to the next integer.
        "在 (f)，在 GDC 上解 <span class=\"chem\">n(n + 1)(2n + 7)/6 = 10^6</span>，再向上取至下一個整數。",
      ],
      // EN: <p><strong>Decode:</strong> parts (a)–(c) generate and test a conjecture (a linear system in <span class="chem">a, b, c</span>), (d)–(e) turn it into a proved theorem, and (f) uses it.</p><p>(b) The GDC (or elimination) gives <span class="chem">a = 1/3, b = 3/2, c = 7/6</span>. (e) The step <span class="chem">k(2k + 7) + 6(k + 3) = 2k^2 + 13k + 18 = (k + 2)(2k + 9)</span> is the heart of the induction. (f) The equation <span class="chem">S(n) = 10^6</span> has root <span class="chem">n = 142.7</span>, so the smallest integer is <span class="chem">143</span>.</p>
      solution: "<p><strong>解碼：</strong>(a)–(c) 部提出並測試一個猜想（一個關於 <span class=\"chem\">a, b, c</span> 的線性方程組），(d)–(e) 部把它變成已證明的定理，而 (f) 部則加以運用。</p><p>(b) GDC（或消元）給出 <span class=\"chem\">a = 1/3, b = 3/2, c = 7/6</span>。(e) 步驟 <span class=\"chem\">k(2k + 7) + 6(k + 3) = 2k^2 + 13k + 18 = (k + 2)(2k + 9)</span> 是歸納法的核心。(f) 方程 <span class=\"chem\">S(n) = 10^6</span> 的根是 <span class=\"chem\">n = 142.7</span>，所以最小的整數是 <span class=\"chem\">143</span>。</p>",
      // EN: <p>(a) <span class="chem">S(1) = 3</span>, <span class="chem">S(2) = 3 + 8 = 11</span>, <span class="chem">S(3) = 11 + 15 = 26</span>.<br>(b) <span class="chem">a + b + c = 3</span>, <span class="chem">8a + 4b + 2c = 11</span>, <span class="chem">27a + 9b + 3c = 26</span>, giving <span class="chem">a = 1/3</span>, <span class="chem">b = 3/2</span>, <span class="chem">c = 7/6</span>.<br>(c) Directly, <span class="chem">S(4) = 26 + 4 × 6 = 50</span>; the formula gives <span class="chem">64/3 + 24 + 14/3 = 50</span>.<br>(d) <span class="chem">S(n) = (2n^3 + 9n^2 + 7n)/6 = n(2n^2 + 9n + 7)/6 = n(n + 1)(2n + 7)/6</span>.<br>(e) <span class="chem">n = 1</span>: <span class="chem">1 × 3 = 3</span> and <span class="chem">(1 × 2 × 9)/6 = 3</span>. Assume <span class="chem">S(k) = k(k + 1)(2k + 7)/6</span> for some <span class="chem">k \in \mathbb{Z}^+</span>. Then <span class="chem">S(k + 1) = k(k + 1)(2k + 7)/6 + (k + 1)(k + 3) = (k + 1)(2k^2 + 7k + 6k + 18)/6 = (k + 1)(2k^2 + 13k + 18)/6 = (k + 1)(k + 2)(2k + 9)/6</span>, which is the formula for <span class="chem">n = k + 1</span> because <span class="chem">2(k + 1) + 7 = 2k + 9</span>. Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span> by mathematical induction.<br>(f) <span class="chem">S(142) = 984 841</span> and <span class="chem">S(143) = 1 005 576</span>, so <span class="chem">n = 143</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S(1) = 3</span>、<span class=\"chem\">S(2) = 3 + 8 = 11</span>、<span class=\"chem\">S(3) = 11 + 15 = 26</span>。<br>(b) <span class=\"chem\">a + b + c = 3</span>、<span class=\"chem\">8a + 4b + 2c = 11</span>、<span class=\"chem\">27a + 9b + 3c = 26</span>，解得 <span class=\"chem\">a = 1/3</span>、<span class=\"chem\">b = 3/2</span>、<span class=\"chem\">c = 7/6</span>。<br>(c) 直接計算，<span class=\"chem\">S(4) = 26 + 4 × 6 = 50</span>；公式給出 <span class=\"chem\">64/3 + 24 + 14/3 = 50</span>。<br>(d) <span class=\"chem\">S(n) = (2n^3 + 9n^2 + 7n)/6 = n(2n^2 + 9n + 7)/6 = n(n + 1)(2n + 7)/6</span>。<br>(e) <span class=\"chem\">n = 1</span>：<span class=\"chem\">1 × 3 = 3</span> 及 <span class=\"chem\">(1 × 2 × 9)/6 = 3</span>。假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">S(k) = k(k + 1)(2k + 7)/6</span>。則 <span class=\"chem\">S(k + 1) = k(k + 1)(2k + 7)/6 + (k + 1)(k + 3) = (k + 1)(2k^2 + 7k + 6k + 18)/6 = (k + 1)(2k^2 + 13k + 18)/6 = (k + 1)(k + 2)(2k + 9)/6</span>，由於 <span class=\"chem\">2(k + 1) + 7 = 2k + 9</span>，這就是 <span class=\"chem\">n = k + 1</span> 時的公式。由於 <span class=\"chem\">P(1)</span> 成立且 <span class=\"chem\">P(k) =&gt; P(k + 1)</span>，根據數學歸納法，結果對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。<br>(f) <span class=\"chem\">S(142) = 984 841</span> 及 <span class=\"chem\">S(143) = 1 005 576</span>，所以 <span class=\"chem\">n = 143</span>。</p>",
      markscheme: [
        // EN: A1: (a) S(1) = 3 and S(2) = 11.
        "A1：(a) S(1) = 3 及 S(2) = 11。",
        // EN: A1: (a) S(3) = 26.
        "A1：(a) S(3) = 26。",
        // EN: M1: (b) Substitutes n = 1, 2, 3 into an³ + bn² + cn.
        "M1：(b) 把 n = 1, 2, 3 代入 an³ + bn² + cn。",
        // EN: A1: (b) a + b + c = 3, 8a + 4b + 2c = 11, 27a + 9b + 3c = 26.
        "A1：(b) a + b + c = 3、8a + 4b + 2c = 11、27a + 9b + 3c = 26。",
        // EN: M1: (b) Solves the system (GDC or elimination).
        "M1：(b) 解方程組（GDC 或消元）。",
        // EN: A1: (b) a = 1/3, b = 3/2, c = 7/6.
        "A1：(b) a = 1/3、b = 3/2、c = 7/6。",
        // EN: A1: (c) Finds S(4) = 50 directly from the sum.
        "A1：(c) 直接由求和求得 S(4) = 50。",
        // EN: A1: (c) Shows the formula gives 64/3 + 24 + 14/3 = 50.
        "A1：(c) 證明公式給出 64/3 + 24 + 14/3 = 50。",
        // EN: M1: (d) Writes S(n) = (2n³ + 9n² + 7n)/6 = n(2n² + 9n + 7)/6.
        "M1：(d) 寫出 S(n) = (2n³ + 9n² + 7n)/6 = n(2n² + 9n + 7)/6。",
        // EN: A1: (d) Factorises 2n² + 9n + 7 = (n + 1)(2n + 7), giving the result AG (no mark for the given line).
        "A1：(d) 因式分解 2n² + 9n + 7 = (n + 1)(2n + 7)，得出結果 AG（題目所給的一行不予給分）。",
        // EN: A1: (e) Base case n = 1: both sides equal 3, so P(1) is true.
        "A1：(e) 初始步驟 n = 1：兩邊都等於 3，所以 P(1) 成立。",
        // EN: M1: (e) Assumes P(k) true for some k ∈ ℤ⁺.
        "M1：(e) 假設對某 k ∈ ℤ⁺，P(k) 成立。",
        // EN: M1: (e) Adds the (k + 1)-th term (k + 1)(k + 3) to S(k).
        "M1：(e) 在 S(k) 加上第 (k + 1) 項 (k + 1)(k + 3)。",
        // EN: A1: (e) Takes out the factor (k + 1)/6 to get (k + 1)(2k² + 13k + 18)/6.
        "A1：(e) 抽出因式 (k + 1)/6，得 (k + 1)(2k² + 13k + 18)/6。",
        // EN: A1: (e) Factorises to (k + 1)(k + 2)(2k + 9)/6 = (k + 1)(k + 2)(2(k + 1) + 7)/6.
        "A1：(e) 因式分解為 (k + 1)(k + 2)(2k + 9)/6 = (k + 1)(k + 2)(2(k + 1) + 7)/6。",
        // EN: R1: (e) Induction conclusion sentence (only if the M marks above are earned).
        "R1：(e) 數學歸納法總結句（須已取得前述 M 分方予頒授）。",
        // EN: M1: (f) Uses the formula with a GDC table, graph or solver for S(n) > 10⁶.
        "M1：(f) 對 S(n) > 10⁶ 使用公式配合 GDC 列表、圖像或求解功能。",
        // EN: A1: (f) n = 143.
        "A1：(f) n = 143。",
      ],
    },

    // ── t1-5-q058 · short · challenge · AHL · AHL 1.15 · 17 marks
    "t1-5-q058": {
      // EN: <strong>Investigation: closed forms for a recurrence.</strong> A sequence is defined by <span class="chem">u_1 = 2</span> and <span class="chem">u_{n+1} = 3u_n - 2</span> for <span class="chem">n \in \mathbb{Z}^+</span>.<br>(a) Write down <span class="chem">u_2</span>, <span class="chem">u_3</span>, <span class="chem">u_4</span> and <span class="chem">u_5</span>. [2 marks]<br>(b) Let <span class="chem">v_n = u_n - 1</span>. Write down <span class="chem">v_1, ..., v_5</span> and hence conjecture a formula for <span class="chem">u_n</span> in terms of <span class="chem">n</span>. [2 marks]<br>(c) Prove your conjecture by mathematical induction. [5 marks]<br>(d) Find an expression for <span class="chem">Sigma_{r=1}^n u_r</span> in terms of <span class="chem">n</span>. [3 marks]<br>(e) Find the smallest <span class="chem">n</span> for which <span class="chem">Sigma_{r=1}^n u_r &gt; 10^9</span>. [2 marks]<br>(f) Now consider the general recurrence <span class="chem">u_{n+1} = au_n + b</span> with <span class="chem">a != 1</span>, and let <span class="chem">L = b/(1 - a)</span>. Show that <span class="chem">u_{n+1} - L = a(u_n - L)</span>, deduce a formula for <span class="chem">u_n</span> in terms of <span class="chem">u_1</span>, <span class="chem">a</span>, <span class="chem">L</span> and <span class="chem">n</span>, and check it against part (b). [3 marks]
      stem: "<strong>探究：遞歸關係的通項公式。</strong>一個數列定義為 <span class=\"chem\">u_1 = 2</span> 及 <span class=\"chem\">u_{n+1} = 3u_n - 2</span>，其中 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">u_2</span>、<span class=\"chem\">u_3</span>、<span class=\"chem\">u_4</span> 及 <span class=\"chem\">u_5</span>。[2 marks]<br>(b) 設 <span class=\"chem\">v_n = u_n - 1</span>。寫出 <span class=\"chem\">v_1, ..., v_5</span>，並由此 (Hence) 猜想以 <span class=\"chem\">n</span> 表示 <span class=\"chem\">u_n</span> 的公式。[2 marks]<br>(c) 用數學歸納法證明 (Prove) 你的猜想。[5 marks]<br>(d) 求 (Find) 以 <span class=\"chem\">n</span> 表示 <span class=\"chem\">Sigma_{r=1}^n u_r</span> 的式子。[3 marks]<br>(e) 求 (Find) 使 <span class=\"chem\">Sigma_{r=1}^n u_r &gt; 10^9</span> 的最小 <span class=\"chem\">n</span>。[2 marks]<br>(f) 現考慮一般的遞歸關係 <span class=\"chem\">u_{n+1} = au_n + b</span>，其中 <span class=\"chem\">a != 1</span>，並設 <span class=\"chem\">L = b/(1 - a)</span>。證明 (Show that) <span class=\"chem\">u_{n+1} - L = a(u_n - L)</span>，推斷 (Deduce) 以 <span class=\"chem\">u_1</span>、<span class=\"chem\">a</span>、<span class=\"chem\">L</span> 及 <span class=\"chem\">n</span> 表示 <span class=\"chem\">u_n</span> 的公式，並與 (b) 部核對。[3 marks]",
      hints: [
        // EN: Decode: the substitution <span class="chem">v_n = u_n - 1</span> is the key idea. It turns the recurrence into a geometric sequence; part (f) asks you to explain why this works in general.
        "解碼：代換 <span class=\"chem\">v_n = u_n - 1</span> 是關鍵的想法。它把遞歸關係變成等比數列；(f) 部要求你解釋為何這方法普遍適用。",
        // EN: In (c), substitute the assumption into the recurrence <span class="chem">u_{k+1} = 3u_k - 2</span>.
        "在 (c)，把假設代入遞歸關係 <span class=\"chem\">u_{k+1} = 3u_k - 2</span>。",
        // EN: In (d), split the sum into a geometric series with first term 1 and ratio 3, plus <span class="chem">n</span> ones.
        "在 (d)，把總和拆成首項為 1、公比為 3 的等比級數，加上 <span class=\"chem\">n</span> 個 1。",
        // EN: In (f), replace <span class="chem">b</span> by <span class="chem">L(1 - a)</span> in <span class="chem">au_n + b - L</span>.
        "在 (f)，在 <span class=\"chem\">au_n + b - L</span> 中以 <span class=\"chem\">L(1 - a)</span> 代替 <span class=\"chem\">b</span>。",
      ],
      // EN: <p><strong>Decode:</strong> “a fixed amount added after multiplying” hides a geometric sequence. Shifting by the fixed point <span class="chem">L</span> removes the constant term.</p><p>The closed form <span class="chem">u_n = 3^{n-1} + 1</span> is proved in one line of algebra in the inductive step. Summing gives <span class="chem">(3^n - 1)/2 + n</span>, which first exceeds <span class="chem">10^9</span> at <span class="chem">n = 20</span>. In general <span class="chem">u_n = L + (u_1 - L)a^{n-1}</span>.</p>
      solution: "<p><strong>解碼：</strong>「乘以一個數後再加上固定的量」隱藏着一個等比數列。以不動點 <span class=\"chem\">L</span> 作平移便可消去常數項。</p><p>通項公式 <span class=\"chem\">u_n = 3^{n-1} + 1</span> 在歸納步驟中只需一行代數便可證明。求和得 <span class=\"chem\">(3^n - 1)/2 + n</span>，它在 <span class=\"chem\">n = 20</span> 時首次超過 <span class=\"chem\">10^9</span>。一般而言 <span class=\"chem\">u_n = L + (u_1 - L)a^{n-1}</span>。</p>",
      // EN: <p>(a) <span class="chem">u_2 = 4</span>, <span class="chem">u_3 = 10</span>, <span class="chem">u_4 = 28</span>, <span class="chem">u_5 = 82</span>.<br>(b) <span class="chem">v_n = 1, 3, 9, 27, 81</span>: powers of 3, so <span class="chem">u_n = 3^{n-1} + 1</span>.<br>(c) <span class="chem">n = 1</span>: <span class="chem">3^0 + 1 = 2 = u_1</span>. Assume <span class="chem">u_k = 3^{k-1} + 1</span> for some <span class="chem">k \in \mathbb{Z}^+</span>. Then <span class="chem">u_{k+1} = 3(3^{k-1} + 1) - 2 = 3^k + 1</span>, the formula for <span class="chem">n = k + 1</span>. By induction the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.<br>(d) <span class="chem">Sigma_{r=1}^n (3^{r-1} + 1) = (3^n - 1)/2 + n</span>.<br>(e) <span class="chem">n = 19</span> gives <span class="chem">581 130 752</span>; <span class="chem">n = 20</span> gives <span class="chem">1 743 392 220</span>. So <span class="chem">n = 20</span>.<br>(f) Since <span class="chem">b = L(1 - a)</span>, <span class="chem">u_{n+1} - L = au_n + L - aL - L = a(u_n - L)</span>. So <span class="chem">u_n - L</span> is geometric with ratio <span class="chem">a</span>: <span class="chem">u_n = L + (u_1 - L)a^{n-1}</span>. For <span class="chem">a = 3, b = -2</span>: <span class="chem">L = 1</span> and <span class="chem">u_n = 1 + (2 - 1)3^{n-1}</span>, as in (b).</p>
      answer: "<p>(a) <span class=\"chem\">u_2 = 4</span>、<span class=\"chem\">u_3 = 10</span>、<span class=\"chem\">u_4 = 28</span>、<span class=\"chem\">u_5 = 82</span>。<br>(b) <span class=\"chem\">v_n = 1, 3, 9, 27, 81</span>：3 的冪，所以 <span class=\"chem\">u_n = 3^{n-1} + 1</span>。<br>(c) <span class=\"chem\">n = 1</span>：<span class=\"chem\">3^0 + 1 = 2 = u_1</span>。假設對某 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">u_k = 3^{k-1} + 1</span>。則 <span class=\"chem\">u_{k+1} = 3(3^{k-1} + 1) - 2 = 3^k + 1</span>，即 <span class=\"chem\">n = k + 1</span> 時的公式。根據數學歸納法，公式對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。<br>(d) <span class=\"chem\">Sigma_{r=1}^n (3^{r-1} + 1) = (3^n - 1)/2 + n</span>。<br>(e) <span class=\"chem\">n = 19</span> 給出 <span class=\"chem\">581 130 752</span>；<span class=\"chem\">n = 20</span> 給出 <span class=\"chem\">1 743 392 220</span>。所以 <span class=\"chem\">n = 20</span>。<br>(f) 由於 <span class=\"chem\">b = L(1 - a)</span>，<span class=\"chem\">u_{n+1} - L = au_n + L - aL - L = a(u_n - L)</span>。所以 <span class=\"chem\">u_n - L</span> 是公比為 <span class=\"chem\">a</span> 的等比數列：<span class=\"chem\">u_n = L + (u_1 - L)a^{n-1}</span>。當 <span class=\"chem\">a = 3, b = -2</span>：<span class=\"chem\">L = 1</span> 及 <span class=\"chem\">u_n = 1 + (2 - 1)3^{n-1}</span>，與 (b) 相同。</p>",
      markscheme: [
        // EN: A1: (a) u₂ = 4, u₃ = 10.
        "A1：(a) u₂ = 4、u₃ = 10。",
        // EN: A1: (a) u₄ = 28, u₅ = 82.
        "A1：(a) u₄ = 28、u₅ = 82。",
        // EN: A1: (b) v₁, …, v₅ = 1, 3, 9, 27, 81.
        "A1：(b) v₁, …, v₅ = 1, 3, 9, 27, 81。",
        // EN: A1: (b) Conjecture u<sub>n</sub> = 3<sup>n−1</sup> + 1.
        "A1：(b) 猜想 u<sub>n</sub> = 3<sup>n−1</sup> + 1。",
        // EN: A1: (c) Base case: 3⁰ + 1 = 2 = u₁, so P(1) is true.
        "A1：(c) 初始步驟：3⁰ + 1 = 2 = u₁，所以 P(1) 成立。",
        // EN: M1: (c) Assumes u<sub>k</sub> = 3<sup>k−1</sup> + 1 for some k ∈ ℤ⁺.
        "M1：(c) 假設對某 k ∈ ℤ⁺，u<sub>k</sub> = 3<sup>k−1</sup> + 1。",
        // EN: M1: (c) Uses the recurrence: u<sub>k+1</sub> = 3(3<sup>k−1</sup> + 1) − 2.
        "M1：(c) 使用遞歸關係：u<sub>k+1</sub> = 3(3<sup>k−1</sup> + 1) − 2。",
        // EN: A1: (c) Simplifies to 3<sup>k</sup> + 1 = 3<sup>(k+1)−1</sup> + 1.
        "A1：(c) 化簡為 3<sup>k</sup> + 1 = 3<sup>(k+1)−1</sup> + 1。",
        // EN: R1: (c) Induction conclusion sentence (only if the M marks above are earned).
        "R1：(c) 數學歸納法總結句（須已取得前述 M 分方予頒授）。",
        // EN: M1: (d) Splits the sum into Σ3<sup>r−1</sup> + Σ1.
        "M1：(d) 把總和拆成 Σ3<sup>r−1</sup> + Σ1。",
        // EN: A1: (d) Geometric part (3<sup>n</sup> − 1)/2.
        "A1：(d) 等比部分 (3<sup>n</sup> − 1)/2。",
        // EN: A1: (d) Total (3<sup>n</sup> − 1)/2 + n.
        "A1：(d) 總和 (3<sup>n</sup> − 1)/2 + n。",
        // EN: M1: (e) Uses a GDC table, graph or solver on (3<sup>n</sup> − 1)/2 + n > 10⁹.
        "M1：(e) 對 (3<sup>n</sup> − 1)/2 + n > 10⁹ 使用 GDC 列表、圖像或求解功能。",
        // EN: A1: (e) n = 20.
        "A1：(e) n = 20。",
        // EN: M1: (f) Uses b = L(1 − a) to show u<sub>n+1</sub> − L = a(u<sub>n</sub> − L).
        "M1：(f) 利用 b = L(1 − a) 證明 u<sub>n+1</sub> − L = a(u<sub>n</sub> − L)。",
        // EN: A1: (f) Deduces u<sub>n</sub> = L + (u₁ − L)a<sup>n−1</sup>.
        "A1：(f) 推斷 u<sub>n</sub> = L + (u₁ − L)a<sup>n−1</sup>。",
        // EN: R1: (f) Checks a = 3, b = −2: L = 1 gives u<sub>n</sub> = 1 + 3<sup>n−1</sup>, agreeing with (b).
        "R1：(f) 以 a = 3, b = −2 核對：L = 1 給出 u<sub>n</sub> = 1 + 3<sup>n−1</sup>，與 (b) 相符。",
      ],
    },

    // ── t1-5-q059 · short · challenge · AHL · AHL 1.16 · 15 marks
    "t1-5-q059": {
      // EN: <strong>Investigation: when does a quadratic fit three points?</strong> We look for a quadratic <span class="chem">y = ax^2 + bx + c</span> whose graph passes through the points <span class="chem">(1, p)</span>, <span class="chem">(2, q)</span> and <span class="chem">(t, r)</span>.<br>(a) For <span class="chem">t = 3</span>, <span class="chem">p = 2</span>, <span class="chem">q = 3</span> and <span class="chem">r = 6</span>, write down the system of equations for <span class="chem">a, b, c</span> and solve it. [3 marks]<br>(b) For <span class="chem">t = 3.7</span>, <span class="chem">p = 2</span>, <span class="chem">q = 3</span>, <span class="chem">r = 6</span>, use your GDC to find <span class="chem">a</span>. [2 marks]<br>(c) For general values, show that row reduction gives <span class="chem">(t - 1)(t - 2)a = (r - p) - (t - 1)(q - p)</span>. [4 marks]<br>(d) Hence state the values of <span class="chem">t</span> for which there is a unique quadratic. For <span class="chem">t = 2</span>, state the condition for infinitely many solutions and the condition for no solution, and explain each case in terms of the points. [3 marks]<br>(e) For <span class="chem">t = 2</span> and <span class="chem">r = q</span>, let <span class="chem">a = lambda</span> and find <span class="chem">b</span> and <span class="chem">c</span> in terms of <span class="chem">lambda</span>, <span class="chem">p</span> and <span class="chem">q</span>. [2 marks]<br>(f) State what happens when <span class="chem">t = 1</span>. [1 mark]
      stem: "<strong>探究：二次函數何時能擬合三點？</strong>我們尋找一個二次函數 <span class=\"chem\">y = ax^2 + bx + c</span>，其圖像通過點 <span class=\"chem\">(1, p)</span>、<span class=\"chem\">(2, q)</span> 及 <span class=\"chem\">(t, r)</span>。<br>(a) 當 <span class=\"chem\">t = 3</span>、<span class=\"chem\">p = 2</span>、<span class=\"chem\">q = 3</span> 及 <span class=\"chem\">r = 6</span>，寫出 (Write down) 關於 <span class=\"chem\">a, b, c</span> 的方程組並解之。[3 marks]<br>(b) 當 <span class=\"chem\">t = 3.7</span>、<span class=\"chem\">p = 2</span>、<span class=\"chem\">q = 3</span>、<span class=\"chem\">r = 6</span>，用 GDC 求 (Find) <span class=\"chem\">a</span>。[2 marks]<br>(c) 對一般的值，證明 (Show that) 列簡化給出 <span class=\"chem\">(t - 1)(t - 2)a = (r - p) - (t - 1)(q - p)</span>。[4 marks]<br>(d) 由此 (Hence) 寫出有唯一二次函數的 <span class=\"chem\">t</span> 值。當 <span class=\"chem\">t = 2</span>，寫出有無限多解的條件及無解的條件，並以這些點解釋每種情況。[3 marks]<br>(e) 當 <span class=\"chem\">t = 2</span> 及 <span class=\"chem\">r = q</span>，設 <span class=\"chem\">a = lambda</span>，求 (Find) 以 <span class=\"chem\">lambda</span>、<span class=\"chem\">p</span> 及 <span class=\"chem\">q</span> 表示的 <span class=\"chem\">b</span> 和 <span class=\"chem\">c</span>。[2 marks]<br>(f) 寫出 (State) 當 <span class=\"chem\">t = 1</span> 時的情況。[1 mark]",
      hints: [
        // EN: Decode: this investigation links the algebra of the final row <span class="chem">g(t)a = h</span> to a picture. Ask yourself in each case: how many DIFFERENT points are there, and do any two share an <span class="chem">x</span>-coordinate?
        "解碼：這個探究把最後一行 <span class=\"chem\">g(t)a = h</span> 的代數與圖像聯繫起來。在每種情況中問自己：有多少個「不同」的點？有沒有兩點的 <span class=\"chem\">x</span> 坐標相同？",
        // EN: In (c), eliminate <span class="chem">c</span> first (subtract row 1 from rows 2 and 3), then eliminate <span class="chem">b</span>.
        "在 (c)，先消去 <span class=\"chem\">c</span>（從第 2 行及第 3 行減去第 1 行），再消去 <span class=\"chem\">b</span>。",
        // EN: Factorise <span class="chem">t^2 - 3t + 2</span>. The system has a unique solution exactly when this coefficient is non-zero.
        "因式分解 <span class=\"chem\">t^2 - 3t + 2</span>。當且僅當這個係數不為零時，方程組有唯一解。",
      ],
      // EN: <p><strong>Decode:</strong> the coefficient <span class="chem">(t - 1)(t - 2)</span> vanishes exactly when the third point shares an <span class="chem">x</span>-coordinate with one of the first two, which is when a parabola (a function) may fail to exist or fail to be unique.</p><p>(b) From (c): <span class="chem">(2.7)(1.7)a = 4 - 2.7</span>, so <span class="chem">a = 1.3/4.59 = 0.283</span>, agreeing with the GDC. (e) From <span class="chem">3lambda + b = q - p</span> and <span class="chem">lambda + b + c = p</span>.</p>
      solution: "<p><strong>解碼：</strong>係數 <span class=\"chem\">(t - 1)(t - 2)</span> 恰好在第三點與首兩點之一有相同的 <span class=\"chem\">x</span> 坐標時為零，這正是拋物線（一個函數）可能不存在或不唯一的時候。</p><p>(b) 由 (c)：<span class=\"chem\">(2.7)(1.7)a = 4 - 2.7</span>，所以 <span class=\"chem\">a = 1.3/4.59 = 0.283</span>，與 GDC 相符。(e) 由 <span class=\"chem\">3lambda + b = q - p</span> 及 <span class=\"chem\">lambda + b + c = p</span> 得出。</p>",
      // EN: <p>(a) <span class="chem">a + b + c = 2</span>, <span class="chem">4a + 2b + c = 3</span>, <span class="chem">9a + 3b + c = 6</span>. Subtracting: <span class="chem">3a + b = 1</span> and <span class="chem">5a + b = 3</span>, so <span class="chem">a = 1</span>, <span class="chem">b = -2</span>, <span class="chem">c = 3</span>.<br>(b) With <span class="chem">13.69a + 3.7b + c = 6</span>, the GDC gives <span class="chem">a = 0.283</span> (3 s.f.).<br>(c) <span class="chem">R_2 - R_1: 3a + b = q - p</span>. <span class="chem">R_3 - R_1: (t^2 - 1)a + (t - 1)b = r - p</span>. Subtract <span class="chem">(t - 1)</span> times the first: <span class="chem">(t^2 - 1 - 3(t - 1))a = (r - p) - (t - 1)(q - p)</span>, and <span class="chem">t^2 - 3t + 2 = (t - 1)(t - 2)</span>.<br>(d) Unique for <span class="chem">t != 1</span> and <span class="chem">t != 2</span> (if the three points happen to be collinear, this unique solution has <span class="chem">a = 0</span>, a straight line rather than a true quadratic). For <span class="chem">t = 2</span> the last row is <span class="chem">0a = r - q</span>: infinitely many if <span class="chem">r = q</span> (only two distinct points, and infinitely many parabolas pass through two points); none if <span class="chem">r != q</span> (two points with the same <span class="chem">x</span> and different <span class="chem">y</span>; no function can pass through both).<br>(e) <span class="chem">b = q - p - 3lambda</span>, <span class="chem">c = 2p - q + 2lambda</span>.<br>(f) For <span class="chem">t = 1</span> the last row is <span class="chem">0a = r - p</span>: infinitely many solutions if <span class="chem">r = p</span>, no solution if <span class="chem">r != p</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a + b + c = 2</span>、<span class=\"chem\">4a + 2b + c = 3</span>、<span class=\"chem\">9a + 3b + c = 6</span>。相減：<span class=\"chem\">3a + b = 1</span> 及 <span class=\"chem\">5a + b = 3</span>，所以 <span class=\"chem\">a = 1</span>、<span class=\"chem\">b = -2</span>、<span class=\"chem\">c = 3</span>。<br>(b) 以 <span class=\"chem\">13.69a + 3.7b + c = 6</span>，GDC 給出 <span class=\"chem\">a = 0.283</span>（3 位有效數字）。<br>(c) <span class=\"chem\">R_2 - R_1: 3a + b = q - p</span>。<span class=\"chem\">R_3 - R_1: (t^2 - 1)a + (t - 1)b = r - p</span>。減去第一式的 <span class=\"chem\">(t - 1)</span> 倍：<span class=\"chem\">(t^2 - 1 - 3(t - 1))a = (r - p) - (t - 1)(q - p)</span>，而 <span class=\"chem\">t^2 - 3t + 2 = (t - 1)(t - 2)</span>。<br>(d) 當 <span class=\"chem\">t != 1</span> 及 <span class=\"chem\">t != 2</span> 時有唯一解（若三點剛好共線，這個唯一解有 <span class=\"chem\">a = 0</span>，是一條直線而非真正的二次函數）。當 <span class=\"chem\">t = 2</span>，最後一行是 <span class=\"chem\">0a = r - q</span>：若 <span class=\"chem\">r = q</span> 則有無限多解（只有兩個不同的點，而通過兩點的拋物線有無限多條）；若 <span class=\"chem\">r != q</span> 則無解（兩點有相同的 <span class=\"chem\">x</span> 但不同的 <span class=\"chem\">y</span>；沒有函數能同時通過兩點）。<br>(e) <span class=\"chem\">b = q - p - 3lambda</span>、<span class=\"chem\">c = 2p - q + 2lambda</span>。<br>(f) 當 <span class=\"chem\">t = 1</span>，最後一行是 <span class=\"chem\">0a = r - p</span>：若 <span class=\"chem\">r = p</span> 則有無限多解，若 <span class=\"chem\">r != p</span> 則無解。</p>",
      markscheme: [
        // EN: M1: (a) Substitutes the three points into y = ax² + bx + c.
        "M1：(a) 把三點代入 y = ax² + bx + c。",
        // EN: A1: (a) a + b + c = 2, 4a + 2b + c = 3, 9a + 3b + c = 6.
        "A1：(a) a + b + c = 2、4a + 2b + c = 3、9a + 3b + c = 6。",
        // EN: A1: (a) a = 1, b = −2, c = 3.
        "A1：(a) a = 1、b = −2、c = 3。",
        // EN: M1: (b) Sets up the system with the third equation 13.69a + 3.7b + c = 6 and uses technology.
        "M1：(b) 以第三條方程 13.69a + 3.7b + c = 6 列出方程組，並使用科技。",
        // EN: A1: (b) a = 0.283.
        "A1：(b) a = 0.283。",
        // EN: M1: (c) R₂ − R₁ gives 3a + b = q − p.
        "M1：(c) R₂ − R₁ 給出 3a + b = q − p。",
        // EN: M1: (c) R₃ − R₁ gives (t² − 1)a + (t − 1)b = r − p.
        "M1：(c) R₃ − R₁ 給出 (t² − 1)a + (t − 1)b = r − p。",
        // EN: M1: (c) Subtracts (t − 1) × (3a + b = q − p) to eliminate b.
        "M1：(c) 減去 (t − 1) × (3a + b = q − p) 以消去 b。",
        // EN: A1: (c) Coefficient t² − 1 − 3(t − 1) = (t − 1)(t − 2), giving the result AG (no mark for the given line).
        "A1：(c) 係數 t² − 1 − 3(t − 1) = (t − 1)(t − 2)，得出結果 AG（題目所給的一行不予給分）。",
        // EN: A1: (d) Unique quadratic for all t except t = 1 and t = 2.
        "A1：(d) 除 t = 1 及 t = 2 外，對所有 t 都有唯一的二次函數。",
        // EN: A1: (d) t = 2: infinitely many if r = q, none if r ≠ q.
        "A1：(d) t = 2：若 r = q 則有無限多解，若 r ≠ q 則無解。",
        // EN: R1: (d) Explains: r = q means only two distinct points (infinitely many parabolas fit); r ≠ q means one x-value with two y-values (no function).
        "R1：(d) 解釋：r = q 表示只有兩個不同的點（有無限多條拋物線通過）；r ≠ q 表示一個 x 值對應兩個 y 值（不是函數）。",
        // EN: M1: (e) Back-substitutes a = λ into 3a + b = q − p and a + b + c = p.
        "M1：(e) 把 a = λ 回代至 3a + b = q − p 及 a + b + c = p。",
        // EN: A1: (e) b = q − p − 3λ and c = 2p − q + 2λ.
        "A1：(e) b = q − p − 3λ 及 c = 2p − q + 2λ。",
        // EN: A1: (f) t = 1: infinitely many solutions if r = p, otherwise no solution.
        "A1：(f) t = 1：若 r = p 則有無限多解，否則無解。",
      ],
    },

  }
});
