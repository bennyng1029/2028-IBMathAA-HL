/* t1-5.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-5.q', {
  questions: {

    // ── t1-5-q001 · mcq · foundation · SL · SL 1.6 · 2 marks
    "t1-5-q001": {
      // EN: To prove that <span class="chem">x^2 - 8x + 21 &gt;= 5</span> for all <span class="chem">x \in \mathbb{R}</span>, which completed-square form directly establishes the result?
      stem: "すべての <span class=\"chem\">x \\in \\mathbb{R}</span> に対して <span class=\"chem\">x^2 - 8x + 21 &gt;= 5</span> であることを証明するとき、この結果を直接導ける平方完成の形はどれですか？",
      options: [
        // EN: <span class="chem">(x - 4)^2 + 5</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x \in \mathbb{R}</span>, the expression is <span class="chem">&gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 5</span>。すべての <span class=\"chem\">x \\in \\mathbb{R}</span> に対して <span class=\"chem\">(x - 4)^2 &gt;= 0</span> なので、この式は <span class=\"chem\">&gt;= 5</span> である。",
        // EN: <span class="chem">(x - 4)^2 + 21</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span>, the expression is <span class="chem">&gt;= 21 &gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 21</span>。<span class=\"chem\">(x - 4)^2 &gt;= 0</span> なので、この式は <span class=\"chem\">&gt;= 21 &gt;= 5</span> である。",
        // EN: <span class="chem">(x - 8)^2 - 43</span>, which has minimum value <span class="chem">5</span>.
        "<span class=\"chem\">(x - 8)^2 - 43</span>。最小値は <span class=\"chem\">5</span> である。",
        // EN: Substitute <span class="chem">x = 0, 1, 2, 3, 4</span> and observe that every output is at least <span class="chem">5</span>.
        "<span class=\"chem\">x = 0, 1, 2, 3, 4</span> を代入し、どの出力も <span class=\"chem\">5</span> 以上になることを確かめる。",
      ],
      hints: [
        // EN: Complete the square on <span class="chem">x^2 - 8x + 21</span> by halving the coefficient of <span class="chem">x</span>.
        "<span class=\"chem\">x</span> の係数の半分を使って <span class=\"chem\">x^2 - 8x + 21</span> を平方完成します。",
        // EN: <span class="chem">x^2 - 8x + 21 = (x - 4)^2 - 16 + 21 = (x - 4)^2 + 5</span>.
        "<span class=\"chem\">x^2 - 8x + 21 = (x - 4)^2 - 16 + 21 = (x - 4)^2 + 5</span>。",
      ],
      // EN: <p>Completing the square gives <span class="chem">x^2 - 8x + 21 == (x - 4)^2 + 5</span>. Since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x \in \mathbb{R}</span>, we have <span class="chem">(x - 4)^2 + 5 &gt;= 5</span>.</p>
      solution: "<p>平方完成すると <span class=\"chem\">x^2 - 8x + 21 == (x - 4)^2 + 5</span> となります。すべての <span class=\"chem\">x \\in \\mathbb{R}</span> に対して <span class=\"chem\">(x - 4)^2 &gt;= 0</span> なので、<span class=\"chem\">(x - 4)^2 + 5 &gt;= 5</span> が成り立ちます。</p>",
      misconception: {
        // EN (option B): When completing the square on x² − 8x + 21, you must subtract (−4)² = 16: (x − 4)² − 16 + 21 = (x − 4)² + 5.
        "1": "x² − 8x + 21 を平方完成するときは、(−4)² = 16 を引く必要があります：(x − 4)² − 16 + 21 = (x − 4)² + 5。",
        // EN (option C): Half of the coefficient of x is −8/2 = −4, not −8.
        "2": "x の係数の半分は −8 ではなく −8/2 = −4 です。",
        // EN (option D): Testing a finite list of numerical values never constitutes a deductive proof for all real numbers x ∈ ℝ.
        "3": "有限個の具体的な数値を調べても、すべての実数 x ∈ ℝ に対する演繹的な証明にはなりません。",
      },
    },

    // ── t1-5-q002 · numeric · foundation · SL · SL 1.6 · 3 marks
    "t1-5-q002": {
      // EN: The sum of the squares of any three consecutive integers <span class="chem">(n - 1)^2 + n^2 + (n + 1)^2</span> can be written in the form <span class="chem">A n^2 + B</span>, where <span class="chem">A, B \in \mathbb{Z}</span>. Find the value of <span class="chem">B</span>.
      stem: "連続する 3 つの整数の平方の和 <span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2</span> は、<span class=\"chem\">A, B \\in \\mathbb{Z}</span> として <span class=\"chem\">A n^2 + B</span> の形で表せる。<span class=\"chem\">B</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Expand <span class="chem">(n - 1)^2 = n^2 - 2n + 1</span> and <span class="chem">(n + 1)^2 = n^2 + 2n + 1</span>.
        "<span class=\"chem\">(n - 1)^2 = n^2 - 2n + 1</span> と <span class=\"chem\">(n + 1)^2 = n^2 + 2n + 1</span> を展開します。",
        // EN: Add all three terms: the <span class="chem">-2n</span> and <span class="chem">+2n</span> cancel, leaving <span class="chem">3n^2 + 2</span>.
        "3 つの項をすべて足すと <span class=\"chem\">-2n</span> と <span class=\"chem\">+2n</span> が打ち消し合い、<span class=\"chem\">3n^2 + 2</span> が残ります。",
      ],
      // EN: <p><span class="chem">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>. Thus <span class="chem">A = 3</span> and <span class="chem">B = 2</span>.</p>
      solution: "<p><span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span> となります。よって <span class=\"chem\">A = 3</span>、<span class=\"chem\">B = 2</span> です。</p>",
    },

    // ── t1-5-q003 · order · exam · SL · SL 1.6 · 3 marks
    "t1-5-q003": {
      // EN: Arrange the steps in logical <span class="chem">LHS -&gt; RHS</span> order to prove the algebraic identity <span class="chem">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> for <span class="chem">n \in \mathbb{Z}^+</span>.
      stem: "<span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して恒等式 <span class=\"chem\">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> を証明する (Prove) ために、<span class=\"chem\">LHS -&gt; RHS</span> の論理的順序に手順を並べ替えなさい。",
      options: [
        // EN: Start with the left-hand side: <span class="chem">LHS = 1 / (n(n + 1)) + 1 / ((n + 1)(n + 2))</span>.
        "左辺から始める：<span class=\"chem\">LHS = 1 / (n(n + 1)) + 1 / ((n + 1)(n + 2))</span>。",
        // EN: Rewrite over the common denominator <span class="chem">n(n + 1)(n + 2)</span>: <span class="chem">= ((n + 2) + n) / (n(n + 1)(n + 2))</span>.
        "共通の分母 <span class=\"chem\">n(n + 1)(n + 2)</span> で通分する：<span class=\"chem\">= ((n + 2) + n) / (n(n + 1)(n + 2))</span>。",
        // EN: Collect like terms in the numerator and factor out 2: <span class="chem">= (2n + 2) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2))</span>.
        "分子の同類項をまとめて 2 をくくり出す：<span class=\"chem\">= (2n + 2) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2))</span>。",
        // EN: Cancel the non-zero common factor <span class="chem">(n + 1)</span> to obtain <span class="chem">2 / (n(n + 2)) = RHS</span>.
        "0 でない共通因数 <span class=\"chem\">(n + 1)</span> を約分し、<span class=\"chem\">2 / (n(n + 2)) = RHS</span> を得る。",
      ],
      hints: [
        // EN: In a direct proof of an identity, always state <span class="chem">LHS</span> first rather than assuming <span class="chem">LHS = RHS</span>.
        "恒等式の直接証明では、<span class=\"chem\">LHS = RHS</span> を仮定するのではなく、必ず最初に <span class=\"chem\">LHS</span> を書きます。",
        // EN: Put the two fractions over a common denominator, factor the numerator as <span class="chem">2(n + 1)</span>, and cancel <span class="chem">(n + 1)</span>.
        "2 つの分数を共通の分母で通分し、分子を <span class=\"chem\">2(n + 1)</span> と因数分解して <span class=\"chem\">(n + 1)</span> を約分します。",
      ],
      // EN: <p><span class="chem">LHS = ((n + 2) + n) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2)) = 2 / (n(n + 2)) = RHS</span>.</p>
      solution: "<p><span class=\"chem\">LHS = ((n + 2) + n) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2)) = 2 / (n(n + 2)) = RHS</span>。</p>",
    },

    // ── t1-5-q004 · short · exam · SL · SL 1.6 · 4 marks
    "t1-5-q004": {
      // EN: Prove algebraically that the product of any two odd integers subtracted from the square of an even integer is always an odd integer. [4 marks]
      stem: "任意の偶数の平方から任意の 2 つの奇数の積を引いた数は、常に奇数であることを代数的に証明しなさい (Prove)。 [4 marks]",
      hints: [
        // EN: Be careful to use <strong>different letters</strong> (<span class="chem">2a + 1, 2b + 1, 2c</span>) because the question says "any two odd integers" and "an even integer" (not necessarily related to the same <span class="chem">n</span>!).
        "問題文が「任意の 2 つの奇数」と「任意の偶数」としているので（同じ <span class=\"chem\">n</span> とは限らないため）、必ず<strong>異なる文字</strong>（<span class=\"chem\">2a + 1, 2b + 1, 2c</span>）を使いましょう。",
        // EN: Expand <span class="chem">(2c)^2 - (2a + 1)(2b + 1)</span> and rewrite it in the form <span class="chem">2k + 1</span> (or <span class="chem">2k - 1</span>).
        "<span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1)</span> を展開し、<span class=\"chem\">2k + 1</span>（または <span class=\"chem\">2k - 1</span>）の形に変形します。",
      ],
      // EN: <p>Using the same letter <span class="chem">n</span> for all three numbers (for example <span class="chem">2n + 1, 2n + 1, 2n</span>) only proves a special case in which the numbers are related. Using distinct <span class="chem">a, b, c \in \mathbb{Z}</span> gives <span class="chem">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>, which is odd.</p>
      solution: "<p>3 つすべてに同じ文字 <span class=\"chem\">n</span> を使う（例えば <span class=\"chem\">2n + 1, 2n + 1, 2n</span>）と、数どうしに関係がある特別な場合しか証明できません。異なる <span class=\"chem\">a, b, c \\in \\mathbb{Z}</span> を使うと <span class=\"chem\">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span> となり、奇数であることが示せます。</p>",
      // EN: <p>Let the two odd integers be <span class="chem">2a + 1</span> and <span class="chem">2b + 1</span>, and the even integer be <span class="chem">2c</span>, where <span class="chem">a, b, c \in \mathbb{Z}</span>.<br><span class="chem">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br>Since <span class="chem">k = 2c^2 - 2ab - a - b - 1 \in \mathbb{Z}</span>, the expression is of the form <span class="chem">2k + 1</span>, which is always an odd integer.</p>
      answer: "<p><span class=\"chem\">a, b, c \\in \\mathbb{Z}</span> として、2 つの奇数を <span class=\"chem\">2a + 1</span>、<span class=\"chem\">2b + 1</span>、偶数を <span class=\"chem\">2c</span> とおく。<br><span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>。<br><span class=\"chem\">k = 2c^2 - 2ab - a - b - 1 \\in \\mathbb{Z}</span> なので、この式は <span class=\"chem\">2k + 1</span> の形となり、常に奇数である。</p>",
      markscheme: [
        // EN: M1: Represents two general odd integers using distinct variables (e.g. 2a + 1 and 2b + 1) and an even integer (2c) for a, b, c ∈ ℤ.
        "M1：a, b, c ∈ ℤ に対して異なる文字を用いて一般的な 2 つの奇数（例：2a + 1 と 2b + 1）および偶数（2c）を表す。",
        // EN: A1: Correctly expands (2c)² − (2a + 1)(2b + 1) = 4c² − 4ab − 2a − 2b − 1.
        "A1：(2c)² − (2a + 1)(2b + 1) = 4c² − 4ab − 2a − 2b − 1 を正しく展開する。",
        // EN: M1: Factors into the form 2(integer) − 1 or 2(integer) + 1.
        "M1：2(整数) − 1 または 2(整数) + 1 の形にくくる。",
        // EN: R1: Concludes that since 2c² − 2ab − a − b − 1 ∈ ℤ, the result is an odd integer.
        "R1：2c² − 2ab − a − b − 1 ∈ ℤ であるため、結果が奇数であると結論づける。",
      ],
    },

    // ── t1-5-q005 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q005": {
      // EN: In a proof by mathematical induction for <span class="chem">n \in \mathbb{Z}^+</span>, which wording of the inductive hypothesis earns full IB reasoning credit?
      stem: "<span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対する数学的帰納法の証明において、帰納法の仮定の書き方として IB の理由点（R1）を満点得られるのはどれですか？",
      options: [
        // EN: “Assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>.”
        "「ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する。」",
        // EN: “Assume <span class="chem">P(k)</span> is true for all <span class="chem">k \in \mathbb{Z}^+</span>.”
        "「すべての <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する。」",
        // EN: “Suppose <span class="chem">P(n)</span> is true for <span class="chem">n = k + 1</span>.”
        "「<span class=\"chem\">n = k + 1</span> のとき <span class=\"chem\">P(n)</span> が成り立つと仮定する。」",
        // EN: “Since <span class="chem">P(1)</span> and <span class="chem">P(2)</span> are true, <span class="chem">P(k)</span> is true.”
        "「<span class=\"chem\">P(1)</span> と <span class=\"chem\">P(2)</span> が成り立つので、<span class=\"chem\">P(k)</span> は成り立つ。」",
      ],
      hints: [
        // EN: Remember the domino analogy: you only assume that one particular domino <span class="chem">k</span> falls, and show it knocks over <span class="chem">k + 1</span>.
        "ドミノの例えを思い出しましょう：特定の 1 つのドミノ <span class=\"chem\">k</span> が倒れると仮定して、それが <span class=\"chem\">k + 1</span> を倒すことを示します。",
        // EN: Distinguish carefully between "for some <span class="chem">k \in \mathbb{Z}^+</span>" and "for all <span class="chem">k \in \mathbb{Z}^+</span>".
        "「ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して（for some）」と「すべての <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して（for all）」を正確に区別しましょう。",
      ],
      // EN: <p>IB markschemes require the inductive hypothesis to be stated for <strong>some</strong> (or a particular) positive integer <span class="chem">k \in \mathbb{Z}^+</span>, never for all <span class="chem">k</span>.</p>
      solution: "<p>IB の採点基準では、帰納法の仮定は<strong>ある</strong>（特定の）正の整数 <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して述べる必要があり、すべての <span class=\"chem\">k</span> に対してと書いてはいけません。</p>",
      misconception: {
        // EN (option B): Assuming P(k) is true for ALL k ∈ ℤ⁺ assumes the very conclusion you are trying to prove, so on IB markschemes it loses the M1 for the inductive hypothesis and, with it, the final R1 mark.
        "1": "すべての k ∈ ℤ⁺ に対して P(k) が成り立つと仮定すると、証明したい結論そのものを仮定したことになり、IB の採点基準では帰納法の仮定の M1 点を失い、それに伴って最後の R1 点も失います。",
        // EN (option C): P(k + 1) is what you must deduce from P(k), not what you assume.
        "2": "P(k + 1) は仮定するものではなく、P(k) から導くべきものです。",
        // EN (option D): Checking P(1) and P(2) only verifies two base cases; it does not establish P(k).
        "3": "P(1) と P(2) を確かめても 2 つの初期条件を確認しただけであり、P(k) を示したことにはなりません。",
      },
    },

    // ── t1-5-q006 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q006": {
      // EN: Consider the false statement: “For all real numbers <span class="chem">a, b \in \mathbb{R}</span>, if <span class="chem">a &lt; b</span>, then <span class="chem">a^2 &lt; b^2</span>.” Which pair <span class="chem">(a, b)</span> is a valid counterexample?
      stem: "偽である命題「すべての実数 <span class=\"chem\">a, b \\in \\mathbb{R}</span> に対して、<span class=\"chem\">a &lt; b</span> ならば <span class=\"chem\">a^2 &lt; b^2</span> である」を考える。反例として正しい組 <span class=\"chem\">(a, b)</span> はどれですか？",
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
        "反例は、仮定 <span class=\"chem\">a &lt; b</span> を<strong>真</strong>にし、結論 <span class=\"chem\">a^2 &lt; b^2</span> を<strong>偽</strong>にする必要があります。",
        // EN: Choose a negative number <span class="chem">a</span> with a larger absolute value than <span class="chem">b</span>.
        "<span class=\"chem\">b</span> よりも絶対値が大きい負の数 <span class=\"chem\">a</span> を選びます。",
      ],
      // EN: <p>With <span class="chem">a = -3</span> and <span class="chem">b = 1</span>, the hypothesis <span class="chem">-3 &lt; 1</span> is true, but <span class="chem">a^2 = 9</span> and <span class="chem">b^2 = 1</span> so <span class="chem">a^2 &lt; b^2</span> is false.</p>
      solution: "<p><span class=\"chem\">a = -3</span>、<span class=\"chem\">b = 1</span> のとき、仮定 <span class=\"chem\">-3 &lt; 1</span> は成り立ちますが、<span class=\"chem\">a^2 = 9</span>、<span class=\"chem\">b^2 = 1</span> なので結論 <span class=\"chem\">a^2 &lt; b^2</span> は偽になります。</p>",
      misconception: {
        // EN (option B): For a = 1, b = 3, both the hypothesis (1 < 3) and the conclusion (1 < 9) are true, so it does not disprove the statement.
        "1": "a = 1, b = 3 では仮定 (1 < 3) も結論 (1 < 9) もともに真になるため、反証にはなりません。",
        // EN (option C): A counterexample must satisfy the hypothesis a < b; here 3 < −1 is false.
        "2": "反例は仮定 a < b を満たさなければなりません；ここでは 3 < −1 が偽です。",
        // EN (option D): For a = 0, b = 2, 0 < 4 holds, so this is a supporting example, not a counterexample.
        "3": "a = 0, b = 2 では 0 < 4 が成り立つため、反例ではなく成り立つ例です。",
      },
    },

    // ── t1-5-q007 · numeric · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q007": {
      // EN: In a proof by mathematical induction that <span class="chem">Sigma_{r=1}^n r(r!) = (n + 1)! - 1</span> for <span class="chem">n \in \mathbb{Z}^+</span>, the inductive step for <span class="chem">n = k + 1</span> combines the inductive hypothesis with the <span class="chem">(k + 1)</span>-th term:<br><span class="chem">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>Find the integer value of <span class="chem">A</span>.
      stem: "<span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">Sigma_{r=1}^n r(r!) = (n + 1)! - 1</span> を数学的帰納法で証明するとき、<span class=\"chem\">n = k + 1</span> の帰納段階では帰納法の仮定と第 <span class=\"chem\">(k + 1)</span> 項を次のようにまとめる：<br><span class=\"chem\">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>。<br>整数 <span class=\"chem\">A</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Factor <span class="chem">(k + 1)!</span> out of the two terms <span class="chem">1 · (k + 1)! + (k + 1)(k + 1)!</span>.
        "2 つの項 <span class=\"chem\">1 · (k + 1)! + (k + 1)(k + 1)!</span> から <span class=\"chem\">(k + 1)!</span> をくくり出します。",
        // EN: <span class="chem">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.
        "<span class=\"chem\">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>。",
      ],
      // EN: <p>Factoring <span class="chem">(k + 1)!</span> gives <span class="chem">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>, so <span class="chem">A = 2</span>.</p>
      solution: "<p><span class=\"chem\">(k + 1)!</span> をくくり出すと <span class=\"chem\">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span> となるため、<span class=\"chem\">A = 2</span> です。</p>",
    },

    // ── t1-5-q008 · numeric · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q008": {
      // EN: We wish to prove by mathematical induction that <span class="chem">f(n) = 7^n + 2</span> is divisible by <span class="chem">3</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Assuming <span class="chem">7^k + 2 = 3A</span> (<span class="chem">A \in \mathbb{Z}</span>), we write <span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>. Find the integer value of <span class="chem">B</span>.
      stem: "すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">f(n) = 7^n + 2</span> が <span class=\"chem\">3</span> で割り切れることを数学的帰納法で証明したい。<span class=\"chem\">7^k + 2 = 3A</span>（<span class=\"chem\">A \\in \\mathbb{Z}</span>）と仮定すると、<span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span> と変形できる。整数 <span class=\"chem\">B</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Expand <span class="chem">7(3A - 2) + 2 = 21A - 14 + 2 = 21A - 12</span>.
        "<span class=\"chem\">7(3A - 2) + 2 = 21A - 14 + 2 = 21A - 12</span> と展開します。",
        // EN: Factor out <span class="chem">3</span> from <span class="chem">21A - 12</span>.
        "<span class=\"chem\">21A - 12</span> から <span class=\"chem\">3</span> をくくり出します。",
      ],
      // EN: <p><span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - 4)</span>, so <span class="chem">B = 4</span>.</p>
      solution: "<p><span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - 4)</span> となるため、<span class=\"chem\">B = 4</span> です。</p>",
    },

    // ── t1-5-q009 · order · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q009": {
      // EN: Arrange the steps in logical order to prove by contradiction that <span class="chem">log_3 7</span> is an irrational number.
      stem: "<span class=\"chem\">log_3 7</span> が無理数であることを背理法で証明する (Prove) 手順を正しい論理的順序に並べ替えなさい。",
      options: [
        // EN: Assume, for a contradiction, that <span class="chem">log_3 7</span> is rational, so <span class="chem">log_3 7 = p / q</span> for some positive integers <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "矛盾を導くため、<span class=\"chem\">log_3 7</span> が有理数であると仮定し、ある正の整数 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">log_3 7 = p / q</span> とおく。",
        // EN: Rewrite the logarithmic equation in exponential form as <span class="chem">3^{p/q} = 7</span>, and raise both sides to the power <span class="chem">q</span> to obtain <span class="chem">3^p = 7^q</span>.
        "対数方程式を指数の形 <span class=\"chem\">3^{p/q} = 7</span> に書き換え、両辺を <span class=\"chem\">q</span> 乗して <span class=\"chem\">3^p = 7^q</span> を得る。",
        // EN: Observe that for all <span class="chem">p, q \in \mathbb{Z}^+</span>, <span class="chem">3^p</span> is divisible by the prime <span class="chem">3</span>, whereas <span class="chem">7^q</span> has only <span class="chem">7</span> as a prime factor and is not divisible by <span class="chem">3</span>.
        "すべての <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span> に対して、<span class=\"chem\">3^p</span> は素数 <span class=\"chem\">3</span> で割り切れる一方、<span class=\"chem\">7^q</span> は素因数として <span class=\"chem\">7</span> しかもたず <span class=\"chem\">3</span> で割り切れないことに注目する。",
        // EN: This is a contradiction by the fundamental uniqueness of prime factorizations; hence <span class="chem">log_3 7</span> must be irrational.
        "これは素因数分解の一意性に矛盾する。したがって <span class=\"chem\">log_3 7</span> は無理数でなければならない。",
      ],
      hints: [
        // EN: Begin by assuming the negation: <span class="chem">log_3 7 = p / q</span> with <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "まず命題の否定を仮定することから始めます：<span class=\"chem\">p, q \\in \\mathbb{Z}^+</span> として <span class=\"chem\">log_3 7 = p / q</span>。",
        // EN: Convert to integer powers <span class="chem">3^p = 7^q</span> and compare prime factors.
        "整数の累乗 <span class=\"chem\">3^p = 7^q</span> に変換し、素因数を比較します。",
      ],
      // EN: <p>Assume <span class="chem">log_3 7 = p/q</span> (<span class="chem">p, q \in \mathbb{Z}^+</span>), deduce <span class="chem">3^p = 7^q</span>, note that <span class="chem">3</span> divides the LHS but not the RHS, and conclude by contradiction that <span class="chem">log_3 7</span> is irrational.</p>
      solution: "<p><span class=\"chem\">log_3 7 = p/q</span>（<span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>）と仮定し、<span class=\"chem\">3^p = 7^q</span> を導き、<span class=\"chem\">3</span> が左辺を割り切るが右辺を割り切らないことから矛盾を導いて <span class=\"chem\">log_3 7</span> が無理数であると結論づけます。</p>",
    },

    // ── t1-5-q010 · mcq · foundation · AHL · AHL 1.16 · 2 marks
    "t1-5-q010": {
      // EN: After Gaussian elimination on a <span class="chem">3 × 3</span> linear system in <span class="chem">x, y, z</span>, the third row of the augmented matrix is <span class="mono">[ 0 0 k−4 | k²−16 ]</span>. For which value of <span class="chem">k</span> does the system have <strong>infinitely many solutions</strong>?
      stem: "<span class=\"chem\">x, y, z</span> に関する <span class=\"chem\">3 × 3</span> 連立一次方程式にガウスの消去法を適用したところ、拡大係数行列の第 3 行が <span class=\"mono\">[ 0 0 k−4 | k²−16 ]</span> となった。この連立方程式が<strong>無数の解</strong>をもつ <span class=\"chem\">k</span> の値はどれですか？",
      options: [
        // EN: <span class="chem">k = 4</span>
        "<span class=\"chem\">k = 4</span>",
        // EN: <span class="chem">k = -4</span>
        "<span class=\"chem\">k = -4</span>",
        // EN: <span class="chem">k = 4</span> or <span class="chem">k = -4</span>
        "<span class=\"chem\">k = 4</span> または <span class=\"chem\">k = -4</span>",
        // EN: All real values of <span class="chem">k != 4</span>
        "<span class=\"chem\">k != 4</span> を満たすすべての実数",
      ],
      hints: [
        // EN: Infinitely many solutions require Row 3 to become <span class="chem">0z = 0</span>.
        "無数の解をもつには、第 3 行が <span class=\"chem\">0z = 0</span> になる必要があります。",
        // EN: Set both <span class="chem">k - 4 = 0</span> AND <span class="chem">k^2 - 16 = 0</span>.
        "<span class=\"chem\">k - 4 = 0</span> かつ <span class=\"chem\">k^2 - 16 = 0</span> とおきます。",
      ],
      // EN: <p>For infinitely many solutions, we need both the coefficient of <span class="chem">z</span> and the RHS to be zero: <span class="chem">k - 4 = 0</span> and <span class="chem">k^2 - 16 = 0</span>, which gives <span class="chem">k = 4</span>.</p>
      solution: "<p>無数の解をもつには、<span class=\"chem\">z</span> の係数と右辺の両方が 0 である必要があります：<span class=\"chem\">k - 4 = 0</span> かつ <span class=\"chem\">k^2 - 16 = 0</span> より、<span class=\"chem\">k = 4</span> が得られます。</p>",
      misconception: {
        // EN (option B): At k = −4, the right-hand side is 0 but the z-coefficient is −4 − 4 = −8 ≠ 0, giving the unique value z = 0 / (−8) = 0!
        "1": "k = −4 のとき右辺は 0 ですが、z の係数は −4 − 4 = −8 ≠ 0 なので、z = 0 / (−8) = 0 と一意に決まってしまいます。",
        // EN (option C): Only k = 4 makes the z-coefficient k − 4 equal to 0; at k = −4 the system has a unique solution with z = 0.
        "2": "z の係数 k − 4 を 0 にするのは k = 4 だけです。k = −4 のときは z = 0 の唯一の解をもちます。",
        // EN (option D): k ≠ 4 is the condition for a unique solution, not infinitely many solutions.
        "3": "k ≠ 4 は無数の解ではなく、唯一の解をもつ条件です。",
      },
    },

    // ── t1-5-q011 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q011": {
      // EN: Find the unique solution to the <span class="chem">3 × 3</span> linear system:<br><span class="chem">x + y + z = 6</span><br><span class="chem">2x - y + z = 3</span><br><span class="chem">x + 2y - z = 2</span>.<br>Find the value of <span class="chem">z</span>.
      stem: "次の <span class=\"chem\">3 × 3</span> 連立一次方程式の唯一の解を求めなさい (Find)：<br><span class=\"chem\">x + y + z = 6</span><br><span class=\"chem\">2x - y + z = 3</span><br><span class=\"chem\">x + 2y - z = 2</span>。<br><span class=\"chem\">z</span> の値を求めなさい。",
      hints: [
        // EN: Add Equation 1 and Equation 3 to eliminate <span class="chem">z</span> immediately: <span class="chem">2x + 3y = 8</span>. Also subtract Equation 1 from Equation 2 to get <span class="chem">x - 2y = -3</span>.
        "第 1 式と第 3 式を足すとすぐに <span class=\"chem\">z</span> が消去できます：<span class=\"chem\">2x + 3y = 8</span>。また第 2 式から第 1 式を引くと <span class=\"chem\">x - 2y = -3</span> になります。",
        // EN: Solving <span class="chem">2x + 3y = 8</span> and <span class="chem">x - 2y = -3</span> gives <span class="chem">x = 1, y = 2</span>, and substituting into Equation 1 gives <span class="chem">z = 3</span>.
        "<span class=\"chem\">2x + 3y = 8</span> と <span class=\"chem\">x - 2y = -3</span> を解くと <span class=\"chem\">x = 1, y = 2</span> となり、第 1 式に代入すると <span class=\"chem\">z = 3</span> が得られます。",
      ],
      // EN: <p>Eliminating <span class="chem">z</span> gives <span class="chem">x - 2y = -3</span> and <span class="chem">2x + 3y = 8</span>, so <span class="chem">7y = 14 =&gt; y = 2, x = 1, z = 3</span>. Check in Equation 3: <span class="chem">1 + 4 - 3 = 2</span>. Therefore <span class="chem">z = 3</span>.</p>
      solution: "<p><span class=\"chem\">z</span> を消去すると <span class=\"chem\">x - 2y = -3</span> と <span class=\"chem\">2x + 3y = 8</span> が得られ、<span class=\"chem\">7y = 14 =&gt; y = 2, x = 1, z = 3</span> となります。方程式 3 で検算すると <span class=\"chem\">1 + 4 - 3 = 2</span> です。よって <span class=\"chem\">z = 3</span> です。</p>",
    },

    // ── t1-5-q012 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q012": {
      // EN: Find the value of the real constant <span class="chem">k</span> for which the following system of equations is <strong>inconsistent</strong> (has no solution):<br><span class="chem">x + 2y + z = 4</span><br><span class="chem">2x + 5y + 3z = 9</span><br><span class="chem">3x + 7y + kz = 10</span>.
      stem: "次の連立方程式が<strong>不整合</strong>（解なし）となる実定数 <span class=\"chem\">k</span> の値を求めなさい (Find)：<br><span class=\"chem\">x + 2y + z = 4</span><br><span class=\"chem\">2x + 5y + 3z = 9</span><br><span class=\"chem\">3x + 7y + kz = 10</span>。",
      hints: [
        // EN: Use Gaussian elimination: <span class="chem">R_2 -&gt; R_2 - 2R_1</span> gives <span class="chem">y + z = 1</span>, and <span class="chem">R_3 -&gt; R_3 - 3R_1</span> gives <span class="chem">y + (k - 3)z = -2</span>.
        "ガウスの消去法を使います：<span class=\"chem\">R_2 -&gt; R_2 - 2R_1</span> で <span class=\"chem\">y + z = 1</span>、<span class=\"chem\">R_3 -&gt; R_3 - 3R_1</span> で <span class=\"chem\">y + (k - 3)z = -2</span> となります。",
        // EN: Now compute <span class="chem">R_3 - R_2</span>: <span class="chem">(k - 4)z = -3</span>. For no solution, the coefficient of <span class="chem">z</span> must be <span class="chem">0</span>.
        "次に <span class=\"chem\">R_3 - R_2</span> を計算すると <span class=\"chem\">(k - 4)z = -3</span> となります。解なしとなるには <span class=\"chem\">z</span> の係数が <span class=\"chem\">0</span> でなければなりません。",
      ],
      // EN: <p>Row reduction gives <span class="chem">R_2 - 2R_1: y + z = 1</span> and <span class="chem">R_3 - 3R_1: y + (k - 3)z = -2</span>. Subtracting gives <span class="chem">(k - 4)z = -3</span>, which has no solution when <span class="chem">k = 4</span>.</p>
      solution: "<p>行基本変形により <span class=\"chem\">R_2 - 2R_1: y + z = 1</span>、<span class=\"chem\">R_3 - 3R_1: y + (k - 3)z = -2</span> となります。引き算すると <span class=\"chem\">(k - 4)z = -3</span> となり、<span class=\"chem\">k = 4</span> のとき解なしになります。</p>",
    },

    // ── t1-5-q013 · multi · exam · AHL · AHL 1.16 · 3 marks
    "t1-5-q013": {
      // EN: A <span class="chem">3 × 3</span> linear system reduces under Gaussian elimination to:<br><span class="mono">[ 1 1 1 | 3 ]</span><br><span class="mono">[ 0 1 −2 | 1 ]</span><br><span class="mono">[ 0 0 a²−1 | a−1 ]</span>.<br>Select <strong>all</strong> correct statements.
      stem: "ある <span class=\"chem\">3 × 3</span> 連立一次方程式がガウスの消去法によって次のように変形された：<br><span class=\"mono\">[ 1 1 1 | 3 ]</span><br><span class=\"mono\">[ 0 1 −2 | 1 ]</span><br><span class=\"mono\">[ 0 0 a²−1 | a−1 ]</span>。<br>正しい記述を<strong>すべて</strong>選びなさい。",
      options: [
        // EN: When <span class="chem">a = 1</span>, the system has infinitely many solutions lying on a line in 3D space.
        "<span class=\"chem\">a = 1</span> のとき、この連立方程式は 3 次元空間内の 1 本の直線上に無数の解をもつ。",
        // EN: When <span class="chem">a = -1</span>, the system has no solution.
        "<span class=\"chem\">a = -1</span> のとき、この連立方程式は解をもたない。",
        // EN: When <span class="chem">a = 1</span>, setting <span class="chem">z = lambda</span> gives <span class="chem">y = 1 + 2 lambda</span> and <span class="chem">x = 2 - 3 lambda</span>.
        "<span class=\"chem\">a = 1</span> のとき、<span class=\"chem\">z = lambda</span> とおくと <span class=\"chem\">y = 1 + 2 lambda</span> かつ <span class=\"chem\">x = 2 - 3 lambda</span> となる。",
        // EN: When <span class="chem">a = 0</span>, the system has no solution.
        "<span class=\"chem\">a = 0</span> のとき、この連立方程式は解をもたない。",
      ],
      hints: [
        // EN: Factor the third row as <span class="chem">(a - 1)(a + 1)z = a - 1</span>.
        "第 3 行を <span class=\"chem\">(a - 1)(a + 1)z = a - 1</span> と因数分解します。",
        // EN: Check <span class="chem">a = 1</span> (<span class="chem">0z = 0</span>), <span class="chem">a = -1</span> (<span class="chem">0z = -2</span>), and <span class="chem">a = 0</span> (<span class="chem">-z = -1</span>).
        "<span class=\"chem\">a = 1</span>（<span class=\"chem\">0z = 0</span>）、<span class=\"chem\">a = -1</span>（<span class=\"chem\">0z = -2</span>）、<span class=\"chem\">a = 0</span>（<span class=\"chem\">-z = -1</span>）のそれぞれを調べます。",
      ],
      // EN: <p>Row 3 is <span class="chem">(a - 1)(a + 1)z = a - 1</span>. For <span class="chem">a = 1</span>, <span class="chem">0z = 0</span> (infinite solutions with <span class="chem">z = lambda, y = 1 + 2lambda, x = 3 - (1 + 2lambda) - lambda = 2 - 3lambda</span>). For <span class="chem">a = -1</span>, <span class="chem">0z = -2</span> (no solution).</p>
      solution: "<p>第 3 行は <span class=\"chem\">(a - 1)(a + 1)z = a - 1</span> です。<span class=\"chem\">a = 1</span> のときは <span class=\"chem\">0z = 0</span>（無数の解となり、<span class=\"chem\">z = lambda, y = 1 + 2lambda, x = 3 - (1 + 2lambda) - lambda = 2 - 3lambda</span>）、<span class=\"chem\">a = -1</span> のときは <span class=\"chem\">0z = -2</span>（解なし）になります。</p>",
      misconception: {
        // EN (option D): When a = 0, Row 3 becomes −1z = −1 ⇒ z = 1, which gives a unique solution (x, y, z) = (−1, 3, 1), not no solution.
        "3": "a = 0 のとき、第 3 行は −1z = −1 ⇒ z = 1 となるため、解なしではなく唯一の解 (x, y, z) = (−1, 3, 1) をもちます。",
      },
    },

    // ── t1-5-q014 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q014": {
      // EN: Find the smallest positive integer <span class="chem">n_0</span> such that the inequality <span class="chem">2^n &gt; 2n + 1</span> holds for all integers <span class="chem">n &gt;= n_0</span>.
      stem: "すべての整数 <span class=\"chem\">n &gt;= n_0</span> に対して不等式 <span class=\"chem\">2^n &gt; 2n + 1</span> が成り立つような最小の正の整数 <span class=\"chem\">n_0</span> を求めなさい (Find)。",
      hints: [
        // EN: Test <span class="chem">n = 1, 2, 3, 4</span> in <span class="chem">2^n &gt; 2n + 1</span>.
        "<span class=\"chem\">2^n &gt; 2n + 1</span> に <span class=\"chem\">n = 1, 2, 3, 4</span> を代入して調べます。",
        // EN: For <span class="chem">n = 1</span>: <span class="chem">2 &gt; 3</span> (false). For <span class="chem">n = 2</span>: <span class="chem">4 &gt; 5</span> (false). For <span class="chem">n = 3</span>: <span class="chem">8 &gt; 7</span> (true).
        "<span class=\"chem\">n = 1</span> では <span class=\"chem\">2 &gt; 3</span>（偽）、<span class=\"chem\">n = 2</span> では <span class=\"chem\">4 &gt; 5</span>（偽）、<span class=\"chem\">n = 3</span> では <span class=\"chem\">8 &gt; 7</span>（真）となります。",
      ],
      // EN: <p>Testing small positive integers: <span class="chem">n = 1</span> gives <span class="chem">2 &gt; 3</span> (false); <span class="chem">n = 2</span> gives <span class="chem">4 &gt; 5</span> (false); <span class="chem">n = 3</span> gives <span class="chem">8 &gt; 7</span> (true). By induction, it holds for all <span class="chem">n &gt;= 3</span>, so the base case is <span class="chem">n_0 = 3</span>.</p>
      solution: "<p>小さい正の整数から調べると、<span class=\"chem\">n = 1</span> では <span class=\"chem\">2 &gt; 3</span>（偽）、<span class=\"chem\">n = 2</span> では <span class=\"chem\">4 &gt; 5</span>（偽）、<span class=\"chem\">n = 3</span> では <span class=\"chem\">8 &gt; 7</span>（真）です。帰納法によりすべての <span class=\"chem\">n &gt;= 3</span> で成り立つため、最小の値は <span class=\"chem\">n_0 = 3</span> です。</p>",
    },

    // ── t1-5-q015 · numeric · exam · AHL · AHL 1.15 · 5 marks
    "t1-5-q015": {
      // EN: Let <span class="chem">f(x) = x e^{2x}</span>. It can be proved by mathematical induction that the <span class="chem">n</span>-th derivative is <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Evaluate <span class="chem">f^{(5)}(0)</span>.
      stem: "<span class=\"chem\">f(x) = x e^{2x}</span> とする。すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して第 <span class=\"chem\">n</span> 次導関数が <span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> となることが数学的帰納法で証明できる。<span class=\"chem\">f^{(5)}(0)</span> を計算しなさい。",
      hints: [
        // EN: Substitute <span class="chem">n = 5</span> and <span class="chem">x = 0</span> into <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>.
        "<span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> に <span class=\"chem\">n = 5</span> と <span class=\"chem\">x = 0</span> を代入します。",
        // EN: <span class="chem">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.
        "<span class=\"chem\">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>。",
      ],
      // EN: <p>Substituting <span class="chem">n = 5</span> and <span class="chem">x = 0</span> gives <span class="chem">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>.</p>
      solution: "<p><span class=\"chem\">n = 5</span> と <span class=\"chem\">x = 0</span> を代入すると、<span class=\"chem\">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span> となります。</p>",
    },

    // ── t1-5-q016 · mcq · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q016": {
      // EN: Suppose a student attempts to prove by contradiction that <span class="chem">sqrt(4)</span> is irrational by writing <span class="chem">sqrt(4) = a / b</span> with <span class="chem">gcd(a, b) = 1</span>, squaring to get <span class="chem">a^2 = 4b^2</span>, and claiming: “Since <span class="chem">4</span> divides <span class="chem">a^2</span>, <span class="chem">4</span> must divide <span class="chem">a</span>.” Why does this step fail?
      stem: "ある生徒が <span class=\"chem\">sqrt(4)</span> が無理数であることを背理法で証明しようとして、<span class=\"chem\">gcd(a, b) = 1</span> を満たす整数で <span class=\"chem\">sqrt(4) = a / b</span> とおき、両辺を 2 乗して <span class=\"chem\">a^2 = 4b^2</span> を得たあと、「<span class=\"chem\">4</span> が <span class=\"chem\">a^2</span> を割り切るので、<span class=\"chem\">4</span> は <span class=\"chem\">a</span> も割り切らなければならない」と主張した。この推論が誤りである理由はどれですか？",
      options: [
        // EN: Because <span class="chem">4</span> is composite (not prime): <span class="chem">4</span> divides <span class="chem">a^2</span> only implies <span class="chem">2</span> divides <span class="chem">a</span> (for example, <span class="chem">a = 2</span> has <span class="chem">4 | 2^2</span> but <span class="chem">4 \nmid 2</span>).
        "<span class=\"chem\">4</span> は合成数（素数ではない）だから：<span class=\"chem\">4</span> が <span class=\"chem\">a^2</span> を割り切っても <span class=\"chem\">2</span> が <span class=\"chem\">a</span> を割り切ることしか言えない（例えば <span class=\"chem\">a = 2</span> は <span class=\"chem\">4 | 2^2</span> だが <span class=\"chem\">4 \\nmid 2</span>）。",
        // EN: Because <span class="chem">a</span> and <span class="chem">b</span> cannot be chosen with <span class="chem">gcd(a, b) = 1</span> for rational numbers.
        "有理数に対して <span class=\"chem\">gcd(a, b) = 1</span> となる <span class=\"chem\">a</span> と <span class=\"chem\">b</span> を選ぶことができないから。",
        // EN: Because squaring both sides of an equation is not allowed in a proof by contradiction.
        "背理法では等式の両辺を 2 乗することが許されていないから。",
        // EN: Because <span class="chem">4b^2</span> is an odd integer whenever <span class="chem">b</span> is odd.
        "<span class=\"chem\">b</span> が奇数のとき <span class=\"chem\">4b^2</span> は常に奇数になるから。",
      ],
      hints: [
        // EN: Compare <span class="chem">p | a^2 =&gt; p | a</span> when <span class="chem">p</span> is prime versus when <span class="chem">p = 4</span> is a square composite number.
        "<span class=\"chem\">p</span> が素数の場合の <span class=\"chem\">p | a^2 =&gt; p | a</span> と、<span class=\"chem\">p = 4</span> が平方数の合成数である場合を比較しましょう。",
        // EN: Test <span class="chem">a = 2, b = 1</span>: does <span class="chem">4</span> divide <span class="chem">a^2 = 4</span>? Does <span class="chem">4</span> divide <span class="chem">a = 2</span>?
        "<span class=\"chem\">a = 2, b = 1</span> を試してみましょう：<span class=\"chem\">4</span> は <span class=\"chem\">a^2 = 4</span> を割り切りますか？では <span class=\"chem\">4</span> は <span class=\"chem\">a = 2</span> を割り切りますか？",
      ],
      // EN: <p>Euclid's lemma (<span class="chem">p | a^2 =&gt; p | a</span>) requires <span class="chem">p</span> to be prime (or square-free). Since <span class="chem">4 = 2^2</span> is composite, <span class="chem">4 | a^2</span> only implies <span class="chem">2 | a</span> (specifically <span class="chem">a = 2, b = 1</span> satisfies <span class="chem">a^2 = 4b^2</span> with <span class="chem">gcd(2, 1) = 1</span>).</p>
      solution: "<p>ユークリッドの補題（<span class=\"chem\">p | a^2 =&gt; p | a</span>）は <span class=\"chem\">p</span> が素数（または平方因子をもたない数）であることを必要とします。<span class=\"chem\">4 = 2^2</span> は合成数なので、<span class=\"chem\">4 | a^2</span> からは <span class=\"chem\">2 | a</span> しか導けません（実際 <span class=\"chem\">a = 2, b = 1</span> は <span class=\"chem\">gcd(2, 1) = 1</span> で <span class=\"chem\">a^2 = 4b^2</span> を満たします）。</p>",
      misconception: {
        // EN (option B): Every rational number can be written in lowest terms a/b with gcd(a, b) = 1 (for √4 = 2, a = 2 and b = 1).
        "1": "すべての有理数は gcd(a, b) = 1 の既約分数 a/b で表せます（√4 = 2 なら a = 2, b = 1）。",
        // EN (option C): Squaring both sides is a valid implication (A = B ⇒ A² = B²).
        "2": "両辺を 2 乗する操作は正しい推論です（A = B ⇒ A² = B²）。",
        // EN (option D): 4b² is always a multiple of 4, so it is always even.
        "3": "4b² は常に 4 の倍数なので、常に偶数です。",
      },
    },

    // ── t1-5-q017 · short · exam · AHL · AHL 1.15 · 7 marks
    "t1-5-q017": {
      // EN: Prove by mathematical induction that for all <span class="chem">n \in \mathbb{Z}^+</span>,<br><span class="chem">Sigma_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]
      stem: "すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して、<br><span class=\"chem\">Sigma_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span> が成り立つことを数学的帰納法で証明しなさい (Prove)。 [7 marks]",
      hints: [
        // EN: After substituting the inductive hypothesis for <span class="chem">n = k</span>, add the <span class="chem">(k + 1)</span>-th term <span class="chem">(k + 1)2^k</span>.
        "<span class=\"chem\">n = k</span> の帰納法の仮定を代入したあと、第 <span class=\"chem\">(k + 1)</span> 項 <span class=\"chem\">(k + 1)2^k</span> を足します。",
        // EN: Factor out <span class="chem">2^k</span> from <span class="chem">(k - 1)2^k + (k + 1)2^k</span> to get <span class="chem">2k · 2^k = k · 2^{k+1}</span>.
        "<span class=\"chem\">(k - 1)2^k + (k + 1)2^k</span> から <span class=\"chem\">2^k</span> をくくり出して <span class=\"chem\">2k · 2^k = k · 2^{k+1}</span> を得ます。",
      ],
      // EN: <p>Factoring <span class="chem">2^k</span> in the inductive step gives <span class="chem">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>, matching the <span class="chem">n = k + 1</span> formula.</p>
      solution: "<p>帰納段階で <span class=\"chem\">2^k</span> をくくり出すと <span class=\"chem\">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span> となり、<span class=\"chem\">n = k + 1</span> の式と一致します。</p>",
      // EN: <p><strong>Base case (<span class="chem">n = 1</span>):</strong> <span class="chem">LHS = 1 · 2^0 = 1</span>; <span class="chem">RHS = (1 - 1)2^1 + 1 = 1</span>. Since <span class="chem">LHS = RHS</span>, <span class="chem">P(1)</span> is true.<br><strong>Inductive hypothesis:</strong> Assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>: <span class="chem">Sigma_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>Inductive step (<span class="chem">n = k + 1</span>):</strong><br><span class="chem">Sigma_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>Conclusion:</strong> Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>初期条件 (<span class=\"chem\">n = 1</span>)：</strong> <span class=\"chem\">LHS = 1 · 2^0 = 1</span>、<span class=\"chem\">RHS = (1 - 1)2^1 + 1 = 1</span>。<span class=\"chem\">LHS = RHS</span> なので <span class=\"chem\">P(1)</span> は成り立つ。<br><strong>帰納法の仮定：</strong> ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する：<span class=\"chem\">Sigma_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>。<br><strong>帰納段階 (<span class=\"chem\">n = k + 1</span>)：</strong><br><span class=\"chem\">Sigma_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>。<br><strong>結論：</strong> <span class=\"chem\">P(1)</span> が成り立ち、かつ <span class=\"chem\">P(k) =&gt; P(k + 1)</span> であるから、数学的帰納法によりすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(n)</span> が成り立つ。</p>",
      markscheme: [
        // EN: A1: Base case n = 1: evaluates LHS = 1 and RHS = (0)2¹ + 1 = 1 and states P(1) is true.
        "A1：初期条件 n = 1：LHS = 1 と RHS = (0)2¹ + 1 = 1 を計算し、P(1) が成り立つと述べる。",
        // EN: M1: States inductive hypothesis: assumes P(k) is true for some k ∈ ℤ⁺.
        "M1：帰納法の仮定を述べる：ある k ∈ ℤ⁺ に対して P(k) が成り立つと仮定する。",
        // EN: M1: Considers n = k + 1 by adding the (k + 1)-th term (k + 1)2<sup>k</sup> to the assumed sum.
        "M1：n = k + 1 を考え、仮定した和に第 (k + 1) 項 (k + 1)2<sup>k</sup> を加える。",
        // EN: A1: Correctly writes the n = k + 1 sum as ((k − 1)2<sup>k</sup> + 1) + (k + 1)2<sup>k</sup>.
        "A1：n = k + 1 の和を ((k − 1)2<sup>k</sup> + 1) + (k + 1)2<sup>k</sup> と正しく書く。",
        // EN: A1: Factors out 2<sup>k</sup> to get ((k − 1) + (k + 1))2<sup>k</sup> + 1 = 2k · 2<sup>k</sup> + 1.
        "A1：2<sup>k</sup> をくくり出して ((k − 1) + (k + 1))2<sup>k</sup> + 1 = 2k · 2<sup>k</sup> + 1 を得る。",
        // EN: A1: Simplifies 2k · 2<sup>k</sup> + 1 to k · 2<sup>k+1</sup> + 1 = ((k + 1) − 1)2<sup>k+1</sup> + 1.
        "A1：2k · 2<sup>k</sup> + 1 を k · 2<sup>k+1</sup> + 1 = ((k + 1) − 1)2<sup>k+1</sup> + 1 に整理する。",
        // EN: R1: States final induction conclusion sentence (awarded only if previous M marks earned).
        "R1：最後の数学的帰納法の結びの文を述べる（前の M 点を獲得している場合のみ付与）。",
      ],
    },

    // ── t1-5-q018 · short · exam · AHL · AHL 1.16 · 7 marks
    "t1-5-q018": {
      // EN: Consider the system of linear equations:<br><span class="chem">x - y + 2z = 1</span><br><span class="chem">2x - y + 5z = 4</span><br><span class="chem">3x - 2y + (k^2 - 2)z = k + 2</span>, where <span class="chem">k \in \mathbb{R}</span>.<br>(a) Reduce the system to row-echelon form and find the value of <span class="chem">k</span> for which the system has no solution, and the value of <span class="chem">k</span> for which it has infinitely many solutions. [4 marks]<br>(b) Find the general solution in parametric form when the system has infinitely many solutions. [3 marks]
      stem: "次の連立一次方程式を考える：<br><span class=\"chem\">x - y + 2z = 1</span><br><span class=\"chem\">2x - y + 5z = 4</span><br><span class=\"chem\">3x - 2y + (k^2 - 2)z = k + 2</span>（ただし <span class=\"chem\">k \\in \\mathbb{R}</span>）。<br>(a) この連立方程式を階段形に変形し、解なしとなる <span class=\"chem\">k</span> の値と、無数の解をもつ <span class=\"chem\">k</span> の値を求めなさい (Find)。 [4 marks]<br>(b) 無数の解をもつときの一般解を媒介変数表示で求めなさい (Find)。 [3 marks]",
      hints: [
        // EN: Apply <span class="chem">R_2 - 2R_1</span> to get <span class="chem">y + z = 2</span>, and <span class="chem">R_3 - 3R_1</span> to get <span class="chem">y + (k^2 - 8)z = k - 1</span>.
        "<span class=\"chem\">R_2 - 2R_1</span> を適用して <span class=\"chem\">y + z = 2</span> を、<span class=\"chem\">R_3 - 3R_1</span> を適用して <span class=\"chem\">y + (k^2 - 8)z = k - 1</span> を得ます。",
        // EN: Subtract the new Row 2 from the new Row 3 to get <span class="chem">(k^2 - 9)z = k - 3</span>.
        "新しい第 3 行から新しい第 2 行を引くと <span class=\"chem\">(k^2 - 9)z = k - 3</span> になります。",
      ],
      // EN: <p>(a) <span class="chem">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class="chem">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class="chem">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. Thus <span class="chem">k = -3</span> gives no solution and <span class="chem">k = 3</span> gives infinite solutions.<br>(b) With <span class="chem">z = lambda</span>, <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 1 + y - 2z = 3 - 3lambda</span>.</p>
      solution: "<p>(a) <span class=\"chem\">R_2 - 2R_1 =&gt; y + z = 2</span>、<span class=\"chem\">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>、<span class=\"chem\">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span> となります。よって <span class=\"chem\">k = -3</span> で解なし、<span class=\"chem\">k = 3</span> で無数の解となります。<br>(b) <span class=\"chem\">z = lambda</span> とおくと <span class=\"chem\">y = 2 - lambda</span>、<span class=\"chem\">x = 1 + y - 2z = 3 - 3lambda</span> です。</p>",
      // EN: <p>(a) Row reduction gives <span class="chem">y + z = 2</span> and <span class="chem">(k^2 - 9)z = k - 3</span>. The system has <strong>no solution</strong> when <span class="chem">k = -3</span> and <strong>infinitely many solutions</strong> when <span class="chem">k = 3</span>.<br>(b) Letting <span class="chem">z = lambda</span> (<span class="chem">lambda \in \mathbb{R}</span>) gives <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 3 - 3lambda</span>.</p>
      answer: "<p>(a) 行基本変形により <span class=\"chem\">y + z = 2</span> および <span class=\"chem\">(k^2 - 9)z = k - 3</span> が得られる。<span class=\"chem\">k = -3</span> のとき<strong>解なし</strong>、<span class=\"chem\">k = 3</span> のとき<strong>無数の解</strong>となる。<br>(b) <span class=\"chem\">z = lambda</span>（<span class=\"chem\">lambda \\in \\mathbb{R}</span>）とおくと、<span class=\"chem\">y = 2 - lambda</span>、<span class=\"chem\">x = 3 - 3lambda</span> となる。</p>",
      markscheme: [
        // EN: M1: Eliminates x using R₂ → R₂ − 2R₁ and R₃ → R₃ − 3R₁.
        "M1：R₂ → R₂ − 2R₁ および R₃ → R₃ − 3R₁ を使って x を消去する。",
        // EN: A1: Obtains y + z = 2 and y + (k² − 8)z = k − 1.
        "A1：y + z = 2 および y + (k² − 8)z = k − 1 を得る。",
        // EN: A1: Eliminates y using R₃ → R₃ − R₂ to obtain (k² − 9)z = k − 3.
        "A1：R₃ → R₃ − R₂ を使って y を消去し、(k² − 9)z = k − 3 を得る。",
        // EN: A1: Identifies k = −3 for no solution and k = 3 for infinitely many solutions.
        "A1：解なしが k = −3、無数の解が k = 3 であることを求める。",
        // EN: M1: Sets z = λ (λ ∈ ℝ) and back-substitutes into Row 2 to find y = 2 − λ.
        "M1：z = λ（λ ∈ ℝ）とおき、第 2 行に後退代入して y = 2 − λ を求める。",
        // EN: A1: Back-substitutes into Row 1 to find x = 1 + (2 − λ) − 2λ = 3 − 3λ.
        "A1：第 1 行に後退代入して x = 1 + (2 − λ) − 2λ = 3 − 3λ を求める。",
        // EN: A1: Writes the complete parametric solution (x, y, z) = (3 − 3λ, 2 − λ, λ) for λ ∈ ℝ.
        "A1：完全な媒介変数表示の解 (x, y, z) = (3 − 3λ, 2 − λ, λ)（λ ∈ ℝ）を書く。",
      ],
    },

    // ── t1-5-q019 · numeric · exam · AHL · AHL 1.16 · 3 marks
    "t1-5-q019": {
      // EN: Use your GDC (system solver or row reduction) to solve the system of equations:<br><span class="chem">2x + 3y - z = 4.7</span><br><span class="chem">x - 2y + 5z = -1.3</span><br><span class="chem">3x + y + 2z = 6.1</span><br>Find the value of <span class="chem">x</span>, correct to 3 significant figures.
      stem: "GDC（連立方程式ソルバーまたは行基本変形）を使って、次の連立方程式を解きなさい：<br><span class=\"chem\">2x + 3y - z = 4.7</span><br><span class=\"chem\">x - 2y + 5z = -1.3</span><br><span class=\"chem\">3x + y + 2z = 6.1</span><br><span class=\"chem\">x</span> の値を有効数字 3 桁で求めなさい (Find)。",
      hints: [
        // EN: Enter the augmented matrix with rows <span class="chem">[2, 3, -1 | 4.7]</span>, <span class="chem">[1, -2, 5 | -1.3]</span> and <span class="chem">[3, 1, 2 | 6.1]</span>, then use rref (or the simultaneous equation solver).
        "行が <span class=\"chem\">[2, 3, -1 | 4.7]</span>、<span class=\"chem\">[1, -2, 5 | -1.3]</span>、<span class=\"chem\">[3, 1, 2 | 6.1]</span> の拡大係数行列を入力し、rref（または連立方程式ソルバー）を使います。",
        // EN: The GDC gives <span class="chem">z = -1.35</span> and <span class="chem">y ≈ -1.0786</span>. Check your values by substituting them into one of the equations.
        "GDC からは <span class=\"chem\">z = -1.35</span> と <span class=\"chem\">y ≈ -1.0786</span> が得られます。どれか 1 つの式に代入して値を確かめましょう。",
      ],
      // EN: <p>The GDC gives the unique solution <span class="chem">x = 461/140 ≈ 3.29</span>, <span class="chem">y = -151/140 ≈ -1.08</span>, <span class="chem">z = -1.35</span>, so the three planes meet at one point. Check: <span class="chem">2(3.2929) + 3(-1.0786) - (-1.35) = 4.70</span>. So <span class="chem">x = 3.29</span> (3 s.f.).</p>
      solution: "<p>GDC から唯一の解 <span class=\"chem\">x = 461/140 ≈ 3.29</span>、<span class=\"chem\">y = -151/140 ≈ -1.08</span>、<span class=\"chem\">z = -1.35</span> が得られるので、3 つの平面は 1 点で交わります。検算：<span class=\"chem\">2(3.2929) + 3(-1.0786) - (-1.35) = 4.70</span>。よって <span class=\"chem\">x = 3.29</span>（有効数字 3 桁）です。</p>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't1-5.q', {
  questions: {

    // ── t1-5-q020 · mcq · foundation · SL · SL 1.6 · 1 mark
    "t1-5-q020": {
      // EN: The symbol <span class="chem">==</span> (“is identically equal to”) may only be used for a statement that is true for <strong>every</strong> value of the variable. Which of the following statements is an identity?
      stem: "記号 <span class=\"chem\">==</span>（「恒等的に等しい」）は、変数の<strong>すべての</strong>値に対して成り立つ式にしか使えません。次のうち恒等式はどれですか？",
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
        "それぞれの式を 2 つの異なる値、例えば <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 1</span> で確かめます。恒等式が成り立たなくなることはありません。",
        // EN: Expand <span class="chem">(x - 3)^2</span> fully: <span class="chem">(x - 3)(x - 3) = x^2 - 3x - 3x + 9</span>.
        "<span class=\"chem\">(x - 3)^2</span> を完全に展開します：<span class=\"chem\">(x - 3)(x - 3) = x^2 - 3x - 3x + 9</span>。",
      ],
      // EN: <p>Expanding gives <span class="chem">(x - 3)^2 = x^2 - 6x + 9</span> for every real <span class="chem">x</span>, so we may write <span class="chem">(x - 3)^2 == x^2 - 6x + 9</span>. The other three statements are equations that are true for at most one value of <span class="chem">x</span> (or are false).</p>
      solution: "<p>展開すると、すべての実数 <span class=\"chem\">x</span> に対して <span class=\"chem\">(x - 3)^2 = x^2 - 6x + 9</span> となるので、<span class=\"chem\">(x - 3)^2 == x^2 - 6x + 9</span> と書けます。他の 3 つは、成り立つ <span class=\"chem\">x</span> の値が高々 1 つしかない方程式（または偽の式）です。</p>",
      misconception: {
        // EN (option B): This is an equation: it is true only when x = 3, so it is not an identity and must be written with =, not ≡.
        "1": "これは方程式です。x = 3 のときにしか成り立たないので恒等式ではなく、≡ ではなく = で書かなければなりません。",
        // EN (option C): This statement is false for most x (try x = 1: 4 ≠ 10). Squaring a bracket gives the middle term −6x, so (x − 3)² ≢ x² + 9.
        "2": "この式はほとんどの x で偽です（x = 1 を試すと 4 ≠ 10）。かっこを 2 乗すると中央の項 −6x が現れるので、(x − 3)² ≢ x² + 9 です。",
        // EN (option D): This equation holds only for x = 3 (both sides are then 0). An identity must hold for every x.
        "3": "この方程式は x = 3 のときにしか成り立ちません（そのとき両辺はともに 0）。恒等式はすべての x で成り立たなければなりません。",
      },
    },

    // ── t1-5-q021 · short · challenge · SL · SL 1.6 · 5 marks
    "t1-5-q021": {
      // EN: A student notices that <span class="chem">1 × 2 × 3 × 4 + 1 = 25</span> and <span class="chem">2 × 3 × 4 × 5 + 1 = 121</span>. Prove that one more than the product of any four consecutive integers is always a perfect square. [5 marks]
      stem: "ある生徒が <span class=\"chem\">1 × 2 × 3 × 4 + 1 = 25</span> と <span class=\"chem\">2 × 3 × 4 × 5 + 1 = 121</span> に気づいた。任意の連続する 4 つの整数の積に 1 を加えた数は、常に平方数であることを証明しなさい (Prove)。 [5 marks]",
      hints: [
        // EN: Decode: “prove … always” means a general algebraic proof, not more examples. Write the four integers with one letter, and aim to show the expression equals (some integer)<sup>2</sup>.
        "解読：「常に…を証明する」とは、例を増やすことではなく一般的な代数的証明を求めています。4 つの整数を 1 つの文字で表し、式が（ある整数）<sup>2</sup> に等しいことを示すことを目指しましょう。",
        // EN: Multiply the outer pair and the inner pair: <span class="chem">n(n + 3) = n^2 + 3n</span> and <span class="chem">(n + 1)(n + 2) = n^2 + 3n + 2</span>.
        "外側の 2 つと内側の 2 つをそれぞれ掛けます：<span class=\"chem\">n(n + 3) = n^2 + 3n</span>、<span class=\"chem\">(n + 1)(n + 2) = n^2 + 3n + 2</span>。",
        // EN: Substitute <span class="chem">m = n^2 + 3n</span>: you then need to simplify <span class="chem">m(m + 2) + 1</span>.
        "<span class=\"chem\">m = n^2 + 3n</span> とおくと、<span class=\"chem\">m(m + 2) + 1</span> を整理すればよくなります。",
      ],
      // EN: <p><strong>Decode:</strong> the two numerical cases are only a pattern; the question wants a proof for every integer <span class="chem">n</span>. The hidden trick is to pair the factors so that the same quadratic <span class="chem">n^2 + 3n</span> appears twice.</p><p><span class="chem">n(n + 1)(n + 2)(n + 3) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>. With <span class="chem">m = n^2 + 3n</span> this is <span class="chem">m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>, the square of an integer. Check with <span class="chem">n = 1</span>: <span class="chem">(1 + 3 + 1)^2 = 25</span>.</p>
      solution: "<p><strong>解読：</strong>2 つの数値例はパターンにすぎず、問題はすべての整数 <span class=\"chem\">n</span> に対する証明を求めています。隠れた工夫は、同じ 2 次式 <span class=\"chem\">n^2 + 3n</span> が 2 回現れるように因数を組み合わせることです。</p><p><span class=\"chem\">n(n + 1)(n + 2)(n + 3) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>。<span class=\"chem\">m = n^2 + 3n</span> とおくと、これは <span class=\"chem\">m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span> となり、整数の平方です。<span class=\"chem\">n = 1</span> で確認：<span class=\"chem\">(1 + 3 + 1)^2 = 25</span>。</p>",
      // EN: <p>Let the integers be <span class="chem">n, n + 1, n + 2, n + 3</span> with <span class="chem">n \in \mathbb{Z}</span>. Pair the outer and inner factors:<br><span class="chem">n(n + 3) · (n + 1)(n + 2) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>.<br>Let <span class="chem">m = n^2 + 3n</span>. Then the expression is <span class="chem">m(m + 2) + 1 = m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>.<br>Since <span class="chem">n^2 + 3n + 1 \in \mathbb{Z}</span>, the expression is the square of an integer, i.e. a perfect square.</p>
      answer: "<p><span class=\"chem\">n \\in \\mathbb{Z}</span> として、4 つの整数を <span class=\"chem\">n, n + 1, n + 2, n + 3</span> とおく。外側と内側の因数を組にする：<br><span class=\"chem\">n(n + 3) · (n + 1)(n + 2) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>。<br><span class=\"chem\">m = n^2 + 3n</span> とおく。このとき式は <span class=\"chem\">m(m + 2) + 1 = m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span> となる。<br><span class=\"chem\">n^2 + 3n + 1 \\in \\mathbb{Z}</span> であるから、この式は整数の平方、すなわち平方数である。</p>",
      markscheme: [
        // EN: M1: Represents four general consecutive integers as n, n + 1, n + 2, n + 3 with n ∈ ℤ.
        "M1：n ∈ ℤ として、一般的な連続する 4 つの整数を n, n + 1, n + 2, n + 3 と表す。",
        // EN: M1: Pairs the factors as n(n + 3) and (n + 1)(n + 2) (or expands fully to n⁴ + 6n³ + 11n² + 6n + 1).
        "M1：因数を n(n + 3) と (n + 1)(n + 2) に組み合わせる（または n⁴ + 6n³ + 11n² + 6n + 1 と完全に展開する）。",
        // EN: A1: Obtains (n² + 3n)(n² + 3n + 2) + 1.
        "A1：(n² + 3n)(n² + 3n + 2) + 1 を得る。",
        // EN: A1: Shows this equals (n² + 3n + 1)².
        "A1：これが (n² + 3n + 1)² に等しいことを示す。",
        // EN: R1: States that n² + 3n + 1 is an integer, so the expression is a perfect square.
        "R1：n² + 3n + 1 は整数であるから、この式は平方数であると述べる。",
      ],
    },

    // ── t1-5-q022 · numeric · exam · SL · SL 1.6 · 3 marks
    "t1-5-q022": {
      // EN: It is given that <span class="chem">x^3 + px^2 + qx + 6 == (x - 1)(x + 2)(x + r)</span>, where <span class="chem">p, q, r</span> are constants. Find the value of <span class="chem">q</span>.
      stem: "<span class=\"chem\">p, q, r</span> を定数として、<span class=\"chem\">x^3 + px^2 + qx + 6 == (x - 1)(x + 2)(x + r)</span> が与えられている。<span class=\"chem\">q</span> の値を求めなさい (Find)。",
      hints: [
        // EN: The symbol <span class="chem">==</span> means the two sides are equal for every <span class="chem">x</span>, so the coefficients of each power of <span class="chem">x</span> must match.
        "記号 <span class=\"chem\">==</span> は両辺がすべての <span class=\"chem\">x</span> で等しいことを意味するので、<span class=\"chem\">x</span> の各累乗の係数が一致しなければなりません。",
        // EN: Expand the right-hand side: <span class="chem">(x - 1)(x + 2) = x^2 + x - 2</span>, then multiply by <span class="chem">(x + r)</span>.
        "右辺を展開します：<span class=\"chem\">(x - 1)(x + 2) = x^2 + x - 2</span>、これに <span class=\"chem\">(x + r)</span> を掛けます。",
        // EN: Compare the constant terms first to find <span class="chem">r</span>, then compare the coefficients of <span class="chem">x</span>.
        "まず定数項を比較して <span class=\"chem\">r</span> を求め、次に <span class=\"chem\">x</span> の係数を比較します。",
      ],
      // EN: <p><span class="chem">(x^2 + x - 2)(x + r) = x^3 + (r + 1)x^2 + (r - 2)x - 2r</span>.</p><p>Constant terms: <span class="chem">-2r = 6</span>, so <span class="chem">r = -3</span>. Coefficient of <span class="chem">x</span>: <span class="chem">q = r - 2 = -5</span>. (Also <span class="chem">p = r + 1 = -2</span>.)</p>
      solution: "<p><span class=\"chem\">(x^2 + x - 2)(x + r) = x^3 + (r + 1)x^2 + (r - 2)x - 2r</span>。</p><p>定数項：<span class=\"chem\">-2r = 6</span> より <span class=\"chem\">r = -3</span>。<span class=\"chem\">x</span> の係数：<span class=\"chem\">q = r - 2 = -5</span>。（また <span class=\"chem\">p = r + 1 = -2</span>。）</p>",
    },

    // ── t1-5-q023 · short · challenge · SL · SL 1.6 · 5 marks
    "t1-5-q023": {
      // EN: A puzzle website claims: “Pick any whole number, cube it, then subtract the number you started with. The answer can always be shared equally between six people.” Prove that the claim is true for every integer <span class="chem">n</span>. [5 marks]
      stem: "あるパズルサイトが次のように主張している：「好きな整数を選んで 3 乗し、最初の数を引きなさい。答えは必ず 6 人で等しく分けられる。」この主張がすべての整数 <span class=\"chem\">n</span> に対して正しいことを証明しなさい (Prove)。 [5 marks]",
      hints: [
        // EN: Decode: “shared equally between six people” means “divisible by 6”. You must prove <span class="chem">6 | (n^3 - n)</span> for every integer <span class="chem">n</span>, by a direct proof.
        "解読：「6 人で等しく分けられる」とは「6 で割り切れる」という意味です。すべての整数 <span class=\"chem\">n</span> に対して <span class=\"chem\">6 | (n^3 - n)</span> を直接証明で示す必要があります。",
        // EN: Factorise <span class="chem">n^3 - n</span> completely. What do you notice about the three factors?
        "<span class=\"chem\">n^3 - n</span> を完全に因数分解します。3 つの因数について何に気づきますか？",
        // EN: To show divisibility by <span class="chem">6</span>, show divisibility by <span class="chem">2</span> and by <span class="chem">3</span> separately.
        "<span class=\"chem\">6</span> で割り切れることを示すには、<span class=\"chem\">2</span> で割り切れることと <span class=\"chem\">3</span> で割り切れることを別々に示します。",
      ],
      // EN: <p><strong>Decode:</strong> the story hides the statement “<span class="chem">n^3 - n</span> is a multiple of 6”. The disguised technique is factorising into consecutive integers.</p><p><span class="chem">n^3 - n = (n - 1)n(n + 1)</span>. Three consecutive integers contain an even number and a multiple of 3, so the product is divisible by <span class="chem">2 × 3 = 6</span> (2 and 3 are coprime).</p>
      solution: "<p><strong>解読：</strong>この話には「<span class=\"chem\">n^3 - n</span> は 6 の倍数である」という命題が隠れています。隠された手法は、連続する整数の積に因数分解することです。</p><p><span class=\"chem\">n^3 - n = (n - 1)n(n + 1)</span>。連続する 3 つの整数には偶数と 3 の倍数が含まれるので、積は <span class=\"chem\">2 × 3 = 6</span> で割り切れます（2 と 3 は互いに素）。</p>",
      // EN: <p>The claim is that <span class="chem">n^3 - n</span> is divisible by <span class="chem">6</span> for all <span class="chem">n \in \mathbb{Z}</span>.<br><span class="chem">n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)</span>, the product of three consecutive integers.<br>Among any two consecutive integers one is even, so the product is divisible by <span class="chem">2</span>.<br>Among any three consecutive integers one is a multiple of <span class="chem">3</span>, so the product is divisible by <span class="chem">3</span>.<br>Since <span class="chem">2</span> and <span class="chem">3</span> are coprime (distinct primes) and both divide the product, <span class="chem">6</span> divides <span class="chem">n^3 - n</span>.</p>
      answer: "<p>主張は、すべての <span class=\"chem\">n \\in \\mathbb{Z}</span> に対して <span class=\"chem\">n^3 - n</span> が <span class=\"chem\">6</span> で割り切れるということである。<br><span class=\"chem\">n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)</span> は連続する 3 つの整数の積である。<br>連続する 2 つの整数のうち 1 つは偶数であるから、積は <span class=\"chem\">2</span> で割り切れる。<br>連続する 3 つの整数のうち 1 つは <span class=\"chem\">3</span> の倍数であるから、積は <span class=\"chem\">3</span> で割り切れる。<br><span class=\"chem\">2</span> と <span class=\"chem\">3</span> は互いに素（異なる素数）であり、どちらも積を割り切るから、<span class=\"chem\">6</span> は <span class=\"chem\">n^3 - n</span> を割り切る。</p>",
      markscheme: [
        // EN: M1: Translates the claim to “n³ − n is divisible by 6” and factorises n(n² − 1).
        "M1：主張を「n³ − n は 6 で割り切れる」と言い換え、n(n² − 1) と因数分解する。",
        // EN: A1: Writes n³ − n = (n − 1)n(n + 1), a product of three consecutive integers.
        "A1：n³ − n = (n − 1)n(n + 1) と、連続する 3 つの整数の積で表す。",
        // EN: R1: One of any two consecutive integers is even, so 2 divides the product.
        "R1：連続する 2 つの整数のうち 1 つは偶数なので、2 は積を割り切る。",
        // EN: R1: One of any three consecutive integers is a multiple of 3, so 3 divides the product.
        "R1：連続する 3 つの整数のうち 1 つは 3 の倍数なので、3 は積を割り切る。",
        // EN: R1: Since 2 and 3 are coprime and both divide n³ − n, 6 divides n³ − n.
        "R1：2 と 3 は互いに素で、どちらも n³ − n を割り切るから、6 は n³ − n を割り切る。",
      ],
    },

    // ── t1-5-q024 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q024": {
      // EN: Prove by mathematical induction that <span class="chem">11^n - 4^n</span> is divisible by <span class="chem">7</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]
      stem: "すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">11^n - 4^n</span> が <span class=\"chem\">7</span> で割り切れることを、数学的帰納法によって証明しなさい (Prove)。 [6 marks]",
      hints: [
        // EN: Write the assumption as <span class="chem">11^k = 7A + 4^k</span> so that you can replace <span class="chem">11^k</span> in <span class="chem">11^{k+1} = 11 · 11^k</span>.
        "仮定を <span class=\"chem\">11^k = 7A + 4^k</span> の形で書くと、<span class=\"chem\">11^{k+1} = 11 · 11^k</span> の中の <span class=\"chem\">11^k</span> を置き換えられます。",
        // EN: After substituting, collect the <span class="chem">4^k</span> terms: <span class="chem">11 · 4^k - 4 · 4^k = 7 · 4^k</span>.
        "代入したら <span class=\"chem\">4^k</span> の項をまとめます：<span class=\"chem\">11 · 4^k - 4 · 4^k = 7 · 4^k</span>。",
      ],
      // EN: <p><span class="chem">11^{k+1} - 4^{k+1} = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>. With the base case <span class="chem">11 - 4 = 7</span> and the standard conclusion sentence, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      solution: "<p><span class=\"chem\">11^{k+1} - 4^{k+1} = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>。初期条件 <span class=\"chem\">11 - 4 = 7</span> と標準的な結びの文を合わせれば、すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して結果が成り立ちます。</p>",
      // EN: <p><strong>Base case:</strong> for <span class="chem">n = 1</span>, <span class="chem">11 - 4 = 7</span>, which is divisible by 7, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>, i.e. <span class="chem">11^k - 4^k = 7A</span> for some <span class="chem">A \in \mathbb{Z}</span>.<br><strong>Step:</strong> <span class="chem">11^{k+1} - 4^{k+1} = 11 · 11^k - 4 · 4^k = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>, which is divisible by 7 because <span class="chem">11A + 4^k \in \mathbb{Z}</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>初期条件：</strong> <span class=\"chem\">n = 1</span> のとき <span class=\"chem\">11 - 4 = 7</span> であり、7 で割り切れるから <span class=\"chem\">P(1)</span> は成り立つ。<br><strong>帰納法の仮定：</strong> ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する。すなわち、ある <span class=\"chem\">A \\in \\mathbb{Z}</span> に対して <span class=\"chem\">11^k - 4^k = 7A</span>。<br><strong>帰納段階：</strong> <span class=\"chem\">11^{k+1} - 4^{k+1} = 11 · 11^k - 4 · 4^k = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>。<span class=\"chem\">11A + 4^k \\in \\mathbb{Z}</span> であるから、これは 7 で割り切れる。<br><strong>結論：</strong> <span class=\"chem\">P(1)</span> が成り立ち、<span class=\"chem\">P(k)</span> が成り立てば <span class=\"chem\">P(k + 1)</span> も成り立つから、数学的帰納法によりすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(n)</span> が成り立つ。</p>",
      markscheme: [
        // EN: A1: n = 1: 11 − 4 = 7, divisible by 7, so P(1) is true.
        "A1：n = 1：11 − 4 = 7 は 7 で割り切れるので、P(1) は成り立つ。",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺: 11<sup>k</sup> − 4<sup>k</sup> = 7A, A ∈ ℤ.
        "M1：ある k ∈ ℤ⁺ に対して P(k) が成り立つと仮定する：11<sup>k</sup> − 4<sup>k</sup> = 7A、A ∈ ℤ。",
        // EN: M1: Writes 11<sup>k+1</sup> − 4<sup>k+1</sup> = 11 · 11<sup>k</sup> − 4 · 4<sup>k</sup>.
        "M1：11<sup>k+1</sup> − 4<sup>k+1</sup> = 11 · 11<sup>k</sup> − 4 · 4<sup>k</sup> と書く。",
        // EN: M1: Substitutes 11<sup>k</sup> = 7A + 4<sup>k</sup> (or an equivalent use of the assumption).
        "M1：11<sup>k</sup> = 7A + 4<sup>k</sup> を代入する（または同等な方法で仮定を用いる）。",
        // EN: A1: Obtains 77A + 7 · 4<sup>k</sup> = 7(11A + 4<sup>k</sup>), a multiple of 7.
        "A1：77A + 7 · 4<sup>k</sup> = 7(11A + 4<sup>k</sup>) を得て、7 の倍数であることを示す。",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1：数学的帰納法の結びの文（上の M 点を獲得している場合のみ）。",
      ],
    },

    // ── t1-5-q025 · short · exam · AHL · AHL 1.15, 1.14 · 7 marks
    "t1-5-q025": {
      // EN: Prove by mathematical induction that <span class="chem">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [7 marks]
      stem: "すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> が成り立つことを、数学的帰納法によって証明しなさい (Prove)。 [7 marks]",
      hints: [
        // EN: This is De Moivre’s theorem (AHL 1.14). You need the compound angle identities (topic 3.2): <span class="chem">cos(A + B) = cos A cos B - sin A sin B</span> and <span class="chem">sin(A + B) = sin A cos B + cos A sin B</span>.
        "これはド・モアブルの定理（AHL 1.14）です。加法定理（トピック 3.2）が必要です：<span class=\"chem\">cos(A + B) = cos A cos B - sin A sin B</span>、<span class=\"chem\">sin(A + B) = sin A cos B + cos A sin B</span>。",
        // EN: In the step, split off one factor: <span class="chem">z^{k+1} = z^k · z</span>, replace <span class="chem">z^k</span> by the assumption and multiply out, remembering <span class="chem">i^2 = -1</span>.
        "帰納段階では因数を 1 つ切り離します：<span class=\"chem\">z^{k+1} = z^k · z</span>。<span class=\"chem\">z^k</span> を仮定で置き換えて展開し、<span class=\"chem\">i^2 = -1</span> を忘れないようにしましょう。",
      ],
      // EN: <p>Multiplying out <span class="chem">(cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> gives real part <span class="chem">cos(k theta)cos theta - sin(k theta)sin theta = cos((k + 1)theta)</span> and imaginary part <span class="chem">sin(k theta)cos theta + cos(k theta)sin theta = sin((k + 1)theta)</span>. Together with the base case and the conclusion sentence this completes the proof.</p>
      solution: "<p><span class=\"chem\">(cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> を展開すると、実部は <span class=\"chem\">cos(k theta)cos theta - sin(k theta)sin theta = cos((k + 1)theta)</span>、虚部は <span class=\"chem\">sin(k theta)cos theta + cos(k theta)sin theta = sin((k + 1)theta)</span> となります。初期条件と結びの文を合わせて証明が完成します。</p>",
      // EN: <p><strong>Base case:</strong> for <span class="chem">n = 1</span>, LHS <span class="chem">= cos theta + i sin theta =</span> RHS, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span><br><span class="chem">= cos(k theta)cos theta - sin(k theta)sin theta + i(sin(k theta)cos theta + cos(k theta)sin theta)</span><br><span class="chem">= cos((k + 1)theta) + i sin((k + 1)theta)</span>, using the compound angle identities.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by mathematical induction the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>初期条件：</strong> <span class=\"chem\">n = 1</span> のとき LHS <span class=\"chem\">= cos theta + i sin theta =</span> RHS であるから、<span class=\"chem\">P(1)</span> は成り立つ。<br><strong>帰納法の仮定：</strong> ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> が成り立つと仮定する。<br><strong>帰納段階：</strong> <span class=\"chem\">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span><br><span class=\"chem\">= cos(k theta)cos theta - sin(k theta)sin theta + i(sin(k theta)cos theta + cos(k theta)sin theta)</span><br><span class=\"chem\">= cos((k + 1)theta) + i sin((k + 1)theta)</span>（加法定理を用いた）。<br><strong>結論：</strong> <span class=\"chem\">P(1)</span> が成り立ち、<span class=\"chem\">P(k)</span> が成り立てば <span class=\"chem\">P(k + 1)</span> も成り立つから、数学的帰納法によりすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して結果が成り立つ。</p>",
      markscheme: [
        // EN: A1: n = 1: (cos θ + i sin θ)¹ = cos θ + i sin θ, so P(1) is true.
        "A1：n = 1：(cos θ + i sin θ)¹ = cos θ + i sin θ なので、P(1) は成り立つ。",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺.
        "M1：ある k ∈ ℤ⁺ に対して P(k) が成り立つと仮定する。",
        // EN: M1: Writes (cos θ + i sin θ)<sup>k+1</sup> = (cos kθ + i sin kθ)(cos θ + i sin θ) using the assumption.
        "M1：仮定を用いて (cos θ + i sin θ)<sup>k+1</sup> = (cos kθ + i sin kθ)(cos θ + i sin θ) と書く。",
        // EN: A1: Expands correctly, using i² = −1: cos kθ cos θ − sin kθ sin θ + i(sin kθ cos θ + cos kθ sin θ).
        "A1：i² = −1 を用いて正しく展開する：cos kθ cos θ − sin kθ sin θ + i(sin kθ cos θ + cos kθ sin θ)。",
        // EN: M1: Uses the compound angle identities for cos(A + B) and sin(A + B).
        "M1：cos(A + B) と sin(A + B) の加法定理を用いる。",
        // EN: A1: Obtains cos((k + 1)θ) + i sin((k + 1)θ).
        "A1：cos((k + 1)θ) + i sin((k + 1)θ) を得る。",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1：数学的帰納法の結びの文（上の M 点を獲得している場合のみ）。",
      ],
    },

    // ── t1-5-q026 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q026": {
      // EN: Let <span class="chem">f(x) = 1 / (1 - 2x)</span>, <span class="chem">x != 1/2</span>. Prove by mathematical induction that <span class="chem">f^{(n)}(x) = (2^n n!) / (1 - 2x)^{n+1}</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]
      stem: "<span class=\"chem\">f(x) = 1 / (1 - 2x)</span>、<span class=\"chem\">x != 1/2</span> とする。すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">f^{(n)}(x) = (2^n n!) / (1 - 2x)^{n+1}</span> が成り立つことを、数学的帰納法によって証明しなさい (Prove)。 [6 marks]",
      hints: [
        // EN: You need the chain rule (topic 5.1): <span class="chem">d/dx (1 - 2x)^m = m(1 - 2x)^{m-1} · (-2)</span>.
        "合成関数の微分法（トピック 5.1）が必要です：<span class=\"chem\">d/dx (1 - 2x)^m = m(1 - 2x)^{m-1} · (-2)</span>。",
        // EN: In the step, differentiate the formula for <span class="chem">n = k</span> once. The two minus signs cancel, and <span class="chem">(k + 1) · k! = (k + 1)!</span>.
        "帰納段階では、<span class=\"chem\">n = k</span> の式を 1 回微分します。2 つのマイナス符号は打ち消し合い、<span class=\"chem\">(k + 1) · k! = (k + 1)!</span> となります。",
      ],
      // EN: <p>The key step is <span class="chem">d/dx (1 - 2x)^{-(k+1)} = 2(k + 1)(1 - 2x)^{-(k+2)}</span>, so <span class="chem">f^{(k+1)}(x) = 2^k k! · 2(k + 1)(1 - 2x)^{-(k+2)} = 2^{k+1}(k + 1)!/(1 - 2x)^{k+2}</span>.</p>
      solution: "<p>鍵となる段階は <span class=\"chem\">d/dx (1 - 2x)^{-(k+1)} = 2(k + 1)(1 - 2x)^{-(k+2)}</span> であり、したがって <span class=\"chem\">f^{(k+1)}(x) = 2^k k! · 2(k + 1)(1 - 2x)^{-(k+2)} = 2^{k+1}(k + 1)!/(1 - 2x)^{k+2}</span> です。</p>",
      // EN: <p><strong>Base case:</strong> <span class="chem">f(x) = (1 - 2x)^{-1}</span>, so <span class="chem">f'(x) = -(1 - 2x)^{-2} · (-2) = 2 / (1 - 2x)^2</span>, and the formula gives <span class="chem">(2^1 · 1!) / (1 - 2x)^2 = 2 / (1 - 2x)^2</span>. So <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">f^{(k)}(x) = 2^k k! (1 - 2x)^{-(k+1)}</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">f^{(k+1)}(x) = d/dx [2^k k! (1 - 2x)^{-(k+1)}] = 2^k k! · (-(k + 1))(1 - 2x)^{-(k+2)} · (-2)</span><br><span class="chem">= 2^{k+1}(k + 1)! (1 - 2x)^{-(k+2)} = (2^{k+1}(k + 1)!) / (1 - 2x)^{k+2}</span>, which is the formula with <span class="chem">n = k + 1</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span> by mathematical induction.</p>
      answer: "<p><strong>初期条件：</strong> <span class=\"chem\">f(x) = (1 - 2x)^{-1}</span> より <span class=\"chem\">f'(x) = -(1 - 2x)^{-2} · (-2) = 2 / (1 - 2x)^2</span> であり、公式は <span class=\"chem\">(2^1 · 1!) / (1 - 2x)^2 = 2 / (1 - 2x)^2</span> を与える。よって <span class=\"chem\">P(1)</span> は成り立つ。<br><strong>帰納法の仮定：</strong> ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">f^{(k)}(x) = 2^k k! (1 - 2x)^{-(k+1)}</span> が成り立つと仮定する。<br><strong>帰納段階：</strong> <span class=\"chem\">f^{(k+1)}(x) = d/dx [2^k k! (1 - 2x)^{-(k+1)}] = 2^k k! · (-(k + 1))(1 - 2x)^{-(k+2)} · (-2)</span><br><span class=\"chem\">= 2^{k+1}(k + 1)! (1 - 2x)^{-(k+2)} = (2^{k+1}(k + 1)!) / (1 - 2x)^{k+2}</span>。これは <span class=\"chem\">n = k + 1</span> のときの公式である。<br><strong>結論：</strong> <span class=\"chem\">P(1)</span> が成り立ち、<span class=\"chem\">P(k)</span> が成り立てば <span class=\"chem\">P(k + 1)</span> も成り立つから、数学的帰納法によりすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して結果が成り立つ。</p>",
      markscheme: [
        // EN: A1: Shows f′(x) = 2/(1 − 2x)² and that this matches the formula for n = 1, so P(1) is true.
        "A1：f′(x) = 2/(1 − 2x)² を示し、これが n = 1 のときの公式と一致することから P(1) が成り立つことを示す。",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺.
        "M1：ある k ∈ ℤ⁺ に対して P(k) が成り立つと仮定する。",
        // EN: M1: Differentiates the assumed f<sup>(k)</sup>(x) using the chain rule.
        "M1：仮定した f<sup>(k)</sup>(x) を合成関数の微分法を用いて微分する。",
        // EN: A1: Obtains 2<sup>k</sup> k! · (−(k + 1))(1 − 2x)<sup>−(k+2)</sup> · (−2).
        "A1：2<sup>k</sup> k! · (−(k + 1))(1 − 2x)<sup>−(k+2)</sup> · (−2) を得る。",
        // EN: A1: Simplifies to 2<sup>k+1</sup>(k + 1)!/(1 − 2x)<sup>k+2</sup>.
        "A1：2<sup>k+1</sup>(k + 1)!/(1 − 2x)<sup>k+2</sup> に整理する。",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1：数学的帰納法の結びの文（上の M 点を獲得している場合のみ）。",
      ],
    },

    // ── t1-5-q027 · short · challenge · AHL · AHL 1.15 · 7 marks
    "t1-5-q027": {
      // EN: A computer scientist compares two algorithms. One takes <span class="chem">n!</span> steps and the other <span class="chem">3^n</span> steps for an input of size <span class="chem">n \in \mathbb{Z}^+</span>.<br>(a) Find the smallest positive integer <span class="chem">n_0</span> such that <span class="chem">n! &gt; 3^n</span> for <span class="chem">n = n_0</span>, showing that the inequality fails for <span class="chem">n = n_0 - 1</span>. [2 marks]<br>(b) Prove by mathematical induction that <span class="chem">n! &gt; 3^n</span> for all integers <span class="chem">n &gt;= n_0</span>. [5 marks]
      stem: "あるコンピューター科学者が 2 つのアルゴリズムを比較している。サイズ <span class=\"chem\">n \\in \\mathbb{Z}^+</span> の入力に対して、一方は <span class=\"chem\">n!</span> ステップ、もう一方は <span class=\"chem\">3^n</span> ステップかかる。<br>(a) <span class=\"chem\">n = n_0</span> のとき <span class=\"chem\">n! &gt; 3^n</span> となる最小の正の整数 <span class=\"chem\">n_0</span> を求め (Find)、<span class=\"chem\">n = n_0 - 1</span> のときにはこの不等式が成り立たないことを示しなさい。 [2 marks]<br>(b) <span class=\"chem\">n &gt;= n_0</span> を満たすすべての整数に対して <span class=\"chem\">n! &gt; 3^n</span> が成り立つことを、数学的帰納法によって証明しなさい (Prove)。 [5 marks]",
      hints: [
        // EN: Decode: the algorithm story is just the inequality <span class="chem">n! &gt; 3^n</span>. The hidden condition is that the base case is not <span class="chem">n = 1</span>: you must first find where the inequality starts to hold.
        "解読：アルゴリズムの話は不等式 <span class=\"chem\">n! &gt; 3^n</span> にすぎません。隠れた条件は、初期条件が <span class=\"chem\">n = 1</span> ではないことです。まず不等式が成り立ち始める位置を見つける必要があります。",
        // EN: Make a small table of <span class="chem">n!</span> and <span class="chem">3^n</span> for <span class="chem">n = 1, ..., 7</span>.
        "<span class=\"chem\">n = 1, ..., 7</span> について <span class=\"chem\">n!</span> と <span class=\"chem\">3^n</span> の小さな表を作ります。",
        // EN: In the inductive step use <span class="chem">(k + 1)! = (k + 1) · k!</span>, then the assumption, then the fact that <span class="chem">k + 1 &gt; 3</span>.
        "帰納段階では <span class=\"chem\">(k + 1)! = (k + 1) · k!</span> を使い、次に仮定を使い、最後に <span class=\"chem\">k + 1 &gt; 3</span> であることを使います。",
      ],
      // EN: <p><strong>Decode:</strong> this is an induction proof of an inequality with a base case <span class="chem">n_0 &gt; 1</span>, which you find by testing small values.</p><p>(a) <span class="chem">6! = 720 &lt; 729</span>, <span class="chem">7! = 5040 &gt; 2187</span>, so <span class="chem">n_0 = 7</span>.<br>(b) <span class="chem">(k + 1)! = (k + 1)k! &gt; (k + 1)3^k &gt; 3 · 3^k = 3^{k+1}</span>, using <span class="chem">k + 1 &gt;= 8 &gt; 3</span>.</p>
      solution: "<p><strong>解読：</strong>これは初期条件が <span class=\"chem\">n_0 &gt; 1</span> である不等式の帰納法による証明で、初期条件は小さな値を試して見つけます。</p><p>(a) <span class=\"chem\">6! = 720 &lt; 729</span>、<span class=\"chem\">7! = 5040 &gt; 2187</span> より <span class=\"chem\">n_0 = 7</span>。<br>(b) <span class=\"chem\">k + 1 &gt;= 8 &gt; 3</span> を用いると、<span class=\"chem\">(k + 1)! = (k + 1)k! &gt; (k + 1)3^k &gt; 3 · 3^k = 3^{k+1}</span>。</p>",
      // EN: <p>(a) <span class="chem">6! = 720 &lt; 729 = 3^6</span>, but <span class="chem">7! = 5040 &gt; 2187 = 3^7</span> (and the inequality also fails for <span class="chem">n = 1, ..., 5</span>). So <span class="chem">n_0 = 7</span>.<br>(b) The base case <span class="chem">n = 7</span> is shown in (a). Assume <span class="chem">k! &gt; 3^k</span> for some integer <span class="chem">k &gt;= 7</span>. Then <span class="chem">(k + 1)! = (k + 1) · k! &gt; (k + 1) · 3^k</span>. Since <span class="chem">k &gt;= 7</span>, <span class="chem">k + 1 &gt; 3</span>, so <span class="chem">(k + 1) · 3^k &gt; 3 · 3^k = 3^{k+1}</span>. Hence <span class="chem">(k + 1)! &gt; 3^{k+1}</span>. Since the result is true for <span class="chem">n = 7</span>, and true for <span class="chem">n = k</span> implies true for <span class="chem">n = k + 1</span>, by mathematical induction it is true for all integers <span class="chem">n &gt;= 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">6! = 720 &lt; 729 = 3^6</span> であるが、<span class=\"chem\">7! = 5040 &gt; 2187 = 3^7</span>（<span class=\"chem\">n = 1, ..., 5</span> でも不等式は成り立たない）。よって <span class=\"chem\">n_0 = 7</span>。<br>(b) 初期条件 <span class=\"chem\">n = 7</span> は (a) で示した。ある整数 <span class=\"chem\">k &gt;= 7</span> に対して <span class=\"chem\">k! &gt; 3^k</span> が成り立つと仮定する。このとき <span class=\"chem\">(k + 1)! = (k + 1) · k! &gt; (k + 1) · 3^k</span>。<span class=\"chem\">k &gt;= 7</span> より <span class=\"chem\">k + 1 &gt; 3</span> であるから、<span class=\"chem\">(k + 1) · 3^k &gt; 3 · 3^k = 3^{k+1}</span>。したがって <span class=\"chem\">(k + 1)! &gt; 3^{k+1}</span>。<span class=\"chem\">n = 7</span> のとき成り立ち、<span class=\"chem\">n = k</span> のとき成り立てば <span class=\"chem\">n = k + 1</span> のときも成り立つから、数学的帰納法により <span class=\"chem\">n &gt;= 7</span> を満たすすべての整数に対して成り立つ。</p>",
      markscheme: [
        // EN: A1: (a) Evaluates 6! = 720 and 3⁶ = 729, so the inequality fails for n = 6.
        "A1：(a) 6! = 720 と 3⁶ = 729 を計算し、n = 6 では不等式が成り立たないことを示す。",
        // EN: A1: (a) Evaluates 7! = 5040 > 2187 = 3⁷, so n₀ = 7.
        "A1：(a) 7! = 5040 > 2187 = 3⁷ を計算し、n₀ = 7 とする。",
        // EN: M1: (b) Assumes k! > 3<sup>k</sup> for some integer k ≥ 7 (base case n = 7 from part (a)).
        "M1：(b) ある整数 k ≥ 7 に対して k! > 3<sup>k</sup> が成り立つと仮定する（初期条件 n = 7 は (a) による）。",
        // EN: M1: (b) Writes (k + 1)! = (k + 1) · k! > (k + 1) · 3<sup>k</sup>.
        "M1：(b) (k + 1)! = (k + 1) · k! > (k + 1) · 3<sup>k</sup> と書く。",
        // EN: R1: (b) Uses k + 1 > 3 (because k ≥ 7) to deduce (k + 1) · 3<sup>k</sup> > 3 · 3<sup>k</sup>.
        "R1：(b) k + 1 > 3（k ≥ 7 であるから）を用いて (k + 1) · 3<sup>k</sup> > 3 · 3<sup>k</sup> を導く。",
        // EN: A1: (b) Concludes (k + 1)! > 3<sup>k+1</sup>.
        "A1：(b) (k + 1)! > 3<sup>k+1</sup> と結論づける。",
        // EN: R1: (b) Induction conclusion sentence for all n ≥ 7 (only if the M marks above are earned).
        "R1：(b) すべての n ≥ 7 に対する数学的帰納法の結びの文（上の M 点を獲得している場合のみ）。",
      ],
    },

    // ── t1-5-q028 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q028": {
      // EN: A sequence is defined by <span class="chem">u_1 = 1</span> and <span class="chem">u_{n+1} = 2u_n + 3</span> for <span class="chem">n \in \mathbb{Z}^+</span>. It can be proved by induction that <span class="chem">u_n = p · 2^n + q</span> for all <span class="chem">n \in \mathbb{Z}^+</span>, where <span class="chem">p</span> and <span class="chem">q</span> are constants. By first finding <span class="chem">p</span> and <span class="chem">q</span>, find the value of <span class="chem">u_{12}</span>.
      stem: "数列が <span class=\"chem\">u_1 = 1</span> および <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">u_{n+1} = 2u_n + 3</span> で定義されている。<span class=\"chem\">p</span> と <span class=\"chem\">q</span> を定数として、すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">u_n = p · 2^n + q</span> が成り立つことが帰納法で証明できる。まず <span class=\"chem\">p</span> と <span class=\"chem\">q</span> を求め、<span class=\"chem\">u_{12}</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Decode: you do not need to iterate eleven times. Use two known terms to find <span class="chem">p</span> and <span class="chem">q</span>, then substitute <span class="chem">n = 12</span> into the closed form.
        "解読：11 回繰り返し計算する必要はありません。既知の 2 つの項を使って <span class=\"chem\">p</span> と <span class=\"chem\">q</span> を求め、一般項の式に <span class=\"chem\">n = 12</span> を代入します。",
        // EN: From the recurrence, <span class="chem">u_2 = 2(1) + 3 = 5</span>. So <span class="chem">2p + q = 1</span> and <span class="chem">4p + q = 5</span>.
        "漸化式より <span class=\"chem\">u_2 = 2(1) + 3 = 5</span>。よって <span class=\"chem\">2p + q = 1</span>、<span class=\"chem\">4p + q = 5</span> です。",
        // EN: Solving gives <span class="chem">p = 2</span>, <span class="chem">q = -3</span>, so <span class="chem">u_n = 2^{n+1} - 3</span>.
        "これを解くと <span class=\"chem\">p = 2</span>、<span class=\"chem\">q = -3</span> となり、<span class=\"chem\">u_n = 2^{n+1} - 3</span> です。",
      ],
      // EN: <p><span class="chem">u_1 = 2p + q = 1</span> and <span class="chem">u_2 = 4p + q = 5</span>, so <span class="chem">p = 2</span> and <span class="chem">q = -3</span>: <span class="chem">u_n = 2^{n+1} - 3</span>. Check: <span class="chem">u_3 = 2(5) + 3 = 13 = 2^4 - 3</span>. Then <span class="chem">u_{12} = 2^{13} - 3 = 8192 - 3 = 8189</span>.</p>
      solution: "<p><span class=\"chem\">u_1 = 2p + q = 1</span>、<span class=\"chem\">u_2 = 4p + q = 5</span> より <span class=\"chem\">p = 2</span>、<span class=\"chem\">q = -3</span>：<span class=\"chem\">u_n = 2^{n+1} - 3</span>。確認：<span class=\"chem\">u_3 = 2(5) + 3 = 13 = 2^4 - 3</span>。よって <span class=\"chem\">u_{12} = 2^{13} - 3 = 8192 - 3 = 8189</span> です。</p>",
    },

    // ── t1-5-q029 · short · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q029": {
      // EN: Prove by contradiction that there are no integers <span class="chem">a</span> and <span class="chem">b</span> such that <span class="chem">14a + 21b = 100</span>. [4 marks]
      stem: "<span class=\"chem\">14a + 21b = 100</span> を満たす整数 <span class=\"chem\">a</span> と <span class=\"chem\">b</span> は存在しないことを、背理法によって証明しなさい (Prove)。 [4 marks]",
      hints: [
        // EN: Start with “Assume there exist integers <span class="chem">a</span> and <span class="chem">b</span> such that …”.
        "「…を満たす整数 <span class=\"chem\">a</span> と <span class=\"chem\">b</span> が存在すると仮定する」から始めます。",
        // EN: Look for a common factor of <span class="chem">14</span> and <span class="chem">21</span>.
        "<span class=\"chem\">14</span> と <span class=\"chem\">21</span> の公約数を探しましょう。",
      ],
      // EN: <p>The left-hand side <span class="chem">14a + 21b = 7(2a + 3b)</span> is always a multiple of 7 when <span class="chem">a, b \in \mathbb{Z}</span>, but <span class="chem">100</span> leaves remainder 2 on division by 7. This contradiction shows no integer solution exists.</p>
      solution: "<p><span class=\"chem\">a, b \\in \\mathbb{Z}</span> のとき、左辺 <span class=\"chem\">14a + 21b = 7(2a + 3b)</span> は常に 7 の倍数ですが、<span class=\"chem\">100</span> を 7 で割った余りは 2 です。この矛盾から、整数解が存在しないことがわかります。</p>",
      // EN: <p>Assume, for a contradiction, that there exist integers <span class="chem">a, b</span> with <span class="chem">14a + 21b = 100</span>. Then <span class="chem">7(2a + 3b) = 100</span>. Since <span class="chem">2a + 3b \in \mathbb{Z}</span>, this means <span class="chem">7</span> divides <span class="chem">100</span>. But <span class="chem">100 = 7 × 14 + 2</span>, so <span class="chem">7</span> does not divide <span class="chem">100</span>: a contradiction. Hence no such integers exist.</p>
      answer: "<p>矛盾を導くため、<span class=\"chem\">14a + 21b = 100</span> を満たす整数 <span class=\"chem\">a, b</span> が存在すると仮定する。このとき <span class=\"chem\">7(2a + 3b) = 100</span>。<span class=\"chem\">2a + 3b \\in \\mathbb{Z}</span> であるから、<span class=\"chem\">7</span> は <span class=\"chem\">100</span> を割り切ることになる。しかし <span class=\"chem\">100 = 7 × 14 + 2</span> であるから、<span class=\"chem\">7</span> は <span class=\"chem\">100</span> を割り切らない。これは矛盾である。したがって、そのような整数は存在しない。</p>",
      markscheme: [
        // EN: M1: Assumes (for a contradiction) that integers a and b exist with 14a + 21b = 100.
        "M1：（矛盾を導くため）14a + 21b = 100 を満たす整数 a と b が存在すると仮定する。",
        // EN: A1: Factorises the left-hand side: 7(2a + 3b) = 100.
        "A1：左辺を因数分解する：7(2a + 3b) = 100。",
        // EN: R1: States that 2a + 3b is an integer, so 7 would divide 100.
        "R1：2a + 3b は整数であるから、7 が 100 を割り切ることになると述べる。",
        // EN: R1: 7 does not divide 100 (100 = 7 × 14 + 2), a contradiction, so no such integers exist.
        "R1：7 は 100 を割り切らない（100 = 7 × 14 + 2）ので矛盾であり、そのような整数は存在しない。",
      ],
    },

    // ── t1-5-q030 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q030": {
      // EN: Prove by contradiction that <span class="chem">∛2</span>, the real cube root of 2, is irrational. You may assume that the cube of an odd integer is odd. [6 marks]
      stem: "2 の実数の 3 乗根 <span class=\"chem\">∛2</span> が無理数であることを、背理法によって証明しなさい (Prove)。奇数の 3 乗は奇数であることを用いてよい。 [6 marks]",
      hints: [
        // EN: Assume the opposite: <span class="chem">∛2 = a/b</span> in lowest terms, then cube both sides.
        "逆を仮定します：既約分数で <span class=\"chem\">∛2 = a/b</span> とおき、両辺を 3 乗します。",
        // EN: Show first that <span class="chem">a</span> must be even, write <span class="chem">a = 2c</span>, and substitute back.
        "まず <span class=\"chem\">a</span> が偶数でなければならないことを示し、<span class=\"chem\">a = 2c</span> とおいて代入し直します。",
      ],
      // EN: <p>From <span class="chem">a^3 = 2b^3</span>, <span class="chem">a</span> is even; writing <span class="chem">a = 2c</span> gives <span class="chem">b^3 = 4c^3</span>, so <span class="chem">b</span> is even too. A fraction in lowest terms cannot have both parts even, which is the contradiction.</p>
      solution: "<p><span class=\"chem\">a^3 = 2b^3</span> より <span class=\"chem\">a</span> は偶数です。<span class=\"chem\">a = 2c</span> とおくと <span class=\"chem\">b^3 = 4c^3</span> となり、<span class=\"chem\">b</span> も偶数です。既約分数の分子と分母がともに偶数になることはないので、これが矛盾です。</p>",
      // EN: <p>Assume <span class="chem">∛2</span> is rational, so <span class="chem">∛2 = a/b</span> with <span class="chem">a, b \in \mathbb{Z}^+</span> and <span class="chem">gcd(a, b) = 1</span>. Cubing gives <span class="chem">a^3 = 2b^3</span>, so <span class="chem">a^3</span> is even. If <span class="chem">a</span> were odd, <span class="chem">a^3</span> would be odd, so <span class="chem">a</span> is even: <span class="chem">a = 2c</span>, <span class="chem">c \in \mathbb{Z}^+</span>. Then <span class="chem">8c^3 = 2b^3</span>, so <span class="chem">b^3 = 4c^3</span> is even and therefore <span class="chem">b</span> is even. So <span class="chem">a</span> and <span class="chem">b</span> are both even, contradicting <span class="chem">gcd(a, b) = 1</span>. Hence <span class="chem">∛2</span> is irrational.</p>
      answer: "<p><span class=\"chem\">∛2</span> が有理数であると仮定すると、<span class=\"chem\">a, b \\in \\mathbb{Z}^+</span>、<span class=\"chem\">gcd(a, b) = 1</span> として <span class=\"chem\">∛2 = a/b</span> と書ける。3 乗すると <span class=\"chem\">a^3 = 2b^3</span> となるので、<span class=\"chem\">a^3</span> は偶数である。もし <span class=\"chem\">a</span> が奇数なら <span class=\"chem\">a^3</span> も奇数になるから、<span class=\"chem\">a</span> は偶数である：<span class=\"chem\">a = 2c</span>、<span class=\"chem\">c \\in \\mathbb{Z}^+</span>。このとき <span class=\"chem\">8c^3 = 2b^3</span> より <span class=\"chem\">b^3 = 4c^3</span> は偶数であり、したがって <span class=\"chem\">b</span> は偶数である。よって <span class=\"chem\">a</span> と <span class=\"chem\">b</span> はともに偶数となり、<span class=\"chem\">gcd(a, b) = 1</span> に矛盾する。したがって <span class=\"chem\">∛2</span> は無理数である。</p>",
      markscheme: [
        // EN: M1: Assumes ∛2 = a/b with a, b ∈ ℤ⁺ and gcd(a, b) = 1.
        "M1：a, b ∈ ℤ⁺、gcd(a, b) = 1 として ∛2 = a/b と仮定する。",
        // EN: A1: Cubes to obtain a³ = 2b³.
        "A1：3 乗して a³ = 2b³ を得る。",
        // EN: R1: a³ is even, so a is even (since the cube of an odd integer is odd).
        "R1：a³ は偶数なので a は偶数である（奇数の 3 乗は奇数であるから）。",
        // EN: A1: Substitutes a = 2c to obtain b³ = 4c³.
        "A1：a = 2c を代入して b³ = 4c³ を得る。",
        // EN: R1: Hence b³ is even, so b is even.
        "R1：したがって b³ は偶数なので b は偶数である。",
        // EN: R1: Both a and b even contradicts gcd(a, b) = 1, so ∛2 is irrational.
        "R1：a と b がともに偶数であることは gcd(a, b) = 1 に矛盾するので、∛2 は無理数である。",
      ],
    },

    // ── t1-5-q031 · numeric · exam · AHL · AHL 1.15 · 3 marks
    "t1-5-q031": {
      // EN: Consider the conjecture: “For every prime number <span class="chem">p</span>, the number <span class="chem">2^p - 1</span> is also prime.” Find the smallest prime <span class="chem">p</span> that is a counterexample to this conjecture. (You may use <span class="chem">2047 = 23 × 89</span>.)
      stem: "予想「すべての素数 <span class=\"chem\">p</span> に対して、数 <span class=\"chem\">2^p - 1</span> も素数である」を考える。この予想の反例となる最小の素数 <span class=\"chem\">p</span> を求めなさい (Find)。（<span class=\"chem\">2047 = 23 × 89</span> を用いてよい。）",
      hints: [
        // EN: A counterexample is a prime <span class="chem">p</span> for which <span class="chem">2^p - 1</span> is <strong>not</strong> prime. Test the primes in increasing order.
        "反例とは、<span class=\"chem\">2^p - 1</span> が素数<strong>ではない</strong>ような素数 <span class=\"chem\">p</span> のことです。素数を小さい順に調べます。",
        // EN: <span class="chem">2^2 - 1 = 3</span>, <span class="chem">2^3 - 1 = 7</span>, <span class="chem">2^5 - 1 = 31</span> and <span class="chem">2^7 - 1 = 127</span> are all prime. Which prime comes next?
        "<span class=\"chem\">2^2 - 1 = 3</span>、<span class=\"chem\">2^3 - 1 = 7</span>、<span class=\"chem\">2^5 - 1 = 31</span>、<span class=\"chem\">2^7 - 1 = 127</span> はすべて素数です。次の素数は何ですか？",
      ],
      // EN: <p>For <span class="chem">p = 2, 3, 5, 7</span> we get <span class="chem">3, 7, 31, 127</span>, all prime. For <span class="chem">p = 11</span>, <span class="chem">2^{11} - 1 = 2047 = 23 × 89</span>, which is composite. So the smallest counterexample is <span class="chem">p = 11</span>. One counterexample is enough to disprove the conjecture.</p>
      solution: "<p><span class=\"chem\">p = 2, 3, 5, 7</span> に対しては <span class=\"chem\">3, 7, 31, 127</span> となり、すべて素数です。<span class=\"chem\">p = 11</span> のとき <span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span> となり、合成数です。よって最小の反例は <span class=\"chem\">p = 11</span> です。予想を否定するには反例が 1 つあれば十分です。</p>",
    },

    // ── t1-5-q032 · mcq · foundation · AHL · AHL 1.15 · 1 mark
    "t1-5-q032": {
      // EN: A student wants to prove by contradiction that <span class="chem">sqrt(7)</span> is irrational. What should the first line of the proof assume?
      stem: "ある生徒が、<span class=\"chem\">sqrt(7)</span> が無理数であることを背理法で証明しようとしている。証明の最初の行では何を仮定すべきですか？",
      options: [
        // EN: <span class="chem">sqrt(7) = p/q</span> for some <span class="chem">p, q \in \mathbb{Z}^+</span> with <span class="chem">gcd(p, q) = 1</span>.
        "ある <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>（<span class=\"chem\">gcd(p, q) = 1</span>）に対して <span class=\"chem\">sqrt(7) = p/q</span>。",
        // EN: <span class="chem">sqrt(7)</span> is irrational.
        "<span class=\"chem\">sqrt(7)</span> は無理数である。",
        // EN: <span class="chem">sqrt(7) = p/q</span> where <span class="chem">p</span> and <span class="chem">q</span> are irrational numbers.
        "<span class=\"chem\">p</span> と <span class=\"chem\">q</span> を無理数として <span class=\"chem\">sqrt(7) = p/q</span>。",
        // EN: <span class="chem">7 = p^2 / q^2</span> for all <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "すべての <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">7 = p^2 / q^2</span>。",
      ],
      hints: [
        // EN: Proof by contradiction: assume the <strong>opposite</strong> of what you want to prove.
        "背理法：証明したいことの<strong>否定</strong>を仮定します。",
        // EN: What is the definition of a rational number?
        "有理数の定義は何ですか？",
      ],
      // EN: <p>The negation of “<span class="chem">sqrt(7)</span> is irrational” is “<span class="chem">sqrt(7)</span> is rational”, i.e. <span class="chem">sqrt(7) = p/q</span> for some positive integers with no common factor. The proof then derives a contradiction from this assumption.</p>
      solution: "<p>「<span class=\"chem\">sqrt(7)</span> は無理数である」の否定は「<span class=\"chem\">sqrt(7)</span> は有理数である」、すなわち公約数をもたないある正の整数を用いて <span class=\"chem\">sqrt(7) = p/q</span> と表せる、ということです。証明ではこの仮定から矛盾を導きます。</p>",
      misconception: {
        // EN (option B): This is the statement you want to prove. A proof by contradiction starts by assuming its negation (that √7 is rational).
        "1": "これは証明したい命題そのものです。背理法はその否定（√7 が有理数であること）を仮定することから始めます。",
        // EN (option C): A rational number is a ratio of integers. Allowing p and q to be irrational says nothing (√7 = √7/1 already).
        "2": "有理数とは整数の比です。p と q に無理数を許すと何の意味もありません（すでに √7 = √7/1 です）。",
        // EN (option D): “For all p, q” is false and is not the negation of the statement. You assume the existence of one particular pair p, q.
        "3": "「すべての p, q に対して」は偽であり、命題の否定でもありません。仮定するのは、特定の 1 組の p, q が存在することです。",
      },
    },

    // ── t1-5-q033 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q033": {
      // EN: Solve the system of equations<br><span class="chem">x + 2y - z = 1</span><br><span class="chem">2x - y + 3z = 12</span><br><span class="chem">3x + y + z = 10</span><br>and hence find the value of <span class="chem">z</span>.
      stem: "連立方程式<br><span class=\"chem\">x + 2y - z = 1</span><br><span class=\"chem\">2x - y + 3z = 12</span><br><span class=\"chem\">3x + y + z = 10</span><br>を解き、これを用いて (Hence) <span class=\"chem\">z</span> の値を求めなさい。",
      hints: [
        // EN: Eliminate <span class="chem">x</span>: use <span class="chem">R_2 - 2R_1</span> and <span class="chem">R_3 - 3R_1</span>.
        "<span class=\"chem\">x</span> を消去します：<span class=\"chem\">R_2 - 2R_1</span> と <span class=\"chem\">R_3 - 3R_1</span> を使います。",
        // EN: You should get <span class="chem">-5y + 5z = 10</span> and <span class="chem">-5y + 4z = 7</span>. Subtract these to find <span class="chem">z</span>.
        "<span class=\"chem\">-5y + 5z = 10</span> と <span class=\"chem\">-5y + 4z = 7</span> が得られるはずです。これらを引いて <span class=\"chem\">z</span> を求めます。",
      ],
      // EN: <p><span class="chem">R_2 - 2R_1: -5y + 5z = 10</span>, i.e. <span class="chem">-y + z = 2</span>. <span class="chem">R_3 - 3R_1: -5y + 4z = 7</span>. Subtracting: <span class="chem">z = 3</span>. Then <span class="chem">y = z - 2 = 1</span> and <span class="chem">x = 1 - 2y + z = 2</span>. Check in equation 3: <span class="chem">6 + 1 + 3 = 10</span>. So <span class="chem">z = 3</span>.</p>
      solution: "<p><span class=\"chem\">R_2 - 2R_1: -5y + 5z = 10</span>、すなわち <span class=\"chem\">-y + z = 2</span>。<span class=\"chem\">R_3 - 3R_1: -5y + 4z = 7</span>。引くと <span class=\"chem\">z = 3</span>。すると <span class=\"chem\">y = z - 2 = 1</span>、<span class=\"chem\">x = 1 - 2y + z = 2</span>。第 3 式で確認：<span class=\"chem\">6 + 1 + 3 = 10</span>。よって <span class=\"chem\">z = 3</span> です。</p>",
    },

    // ── t1-5-q034 · short · exam · AHL · AHL 1.16 · 8 marks
    "t1-5-q034": {
      // EN: Consider the system of equations<br><span class="chem">x + y + z = 2</span><br><span class="chem">x + 2y + 3z = 5</span><br><span class="chem">2x + 3y + az = b</span>, where <span class="chem">a, b \in \mathbb{R}</span>.<br>(a) Use row reduction to find the value of <span class="chem">a</span> for which the system does not have a unique solution. [3 marks]<br>(b) For this value of <span class="chem">a</span>, find the value of <span class="chem">b</span> for which the system has infinitely many solutions. [1 mark]<br>(c) For these values of <span class="chem">a</span> and <span class="chem">b</span>, find the general solution and describe the solution set geometrically. [3 marks]<br>(d) Describe the geometrical arrangement of the three planes when <span class="chem">a</span> takes the value in (a) and <span class="chem">b</span> does not take the value in (b). [1 mark]
      stem: "連立方程式<br><span class=\"chem\">x + y + z = 2</span><br><span class=\"chem\">x + 2y + 3z = 5</span><br><span class=\"chem\">2x + 3y + az = b</span>（ただし <span class=\"chem\">a, b \\in \\mathbb{R}</span>）を考える。<br>(a) 行基本変形を用いて、この連立方程式がただ 1 組の解をもたないような <span class=\"chem\">a</span> の値を求めなさい (Find)。 [3 marks]<br>(b) この <span class=\"chem\">a</span> の値に対して、連立方程式が無数の解をもつような <span class=\"chem\">b</span> の値を求めなさい (Find)。 [1 mark]<br>(c) これらの <span class=\"chem\">a</span> と <span class=\"chem\">b</span> の値に対して、一般解を求め (Find)、解の集合を幾何的に説明しなさい。 [3 marks]<br>(d) <span class=\"chem\">a</span> が (a) の値をとり、<span class=\"chem\">b</span> が (b) の値をとらないとき、3 つの平面の幾何的な位置関係を説明しなさい (Describe)。 [1 mark]",
      hints: [
        // EN: Eliminate <span class="chem">x</span> from rows 2 and 3, then eliminate <span class="chem">y</span> from row 3 to reach <span class="chem">g(a)z = h(b)</span>.
        "第 2 行と第 3 行から <span class=\"chem\">x</span> を消去し、次に第 3 行から <span class=\"chem\">y</span> を消去して <span class=\"chem\">g(a)z = h(b)</span> の形にします。",
        // EN: For infinitely many solutions the final row must read <span class="chem">0z = 0</span>; for no solution it reads <span class="chem">0z = </span>(non-zero).
        "無数の解をもつには最後の行が <span class=\"chem\">0z = 0</span> でなければならず、解なしのときは <span class=\"chem\">0z = </span>（0 でない数）となります。",
        // EN: For the geometry, check whether any two normal vectors are parallel (topic 3.3).
        "幾何的な考察では、どれか 2 つの法線ベクトルが平行かどうかを確かめます（トピック 3.3）。",
      ],
      // EN: <p>Row reduction gives <span class="chem">y + 2z = 3</span> and <span class="chem">(a - 4)z = b - 7</span>. With <span class="chem">a = 4, b = 7</span> the solution set is the line <span class="chem">(-1 + lambda, 3 - 2lambda, lambda)</span>. Check with <span class="chem">lambda = 1</span>: <span class="chem">(0, 1, 1)</span> satisfies all three equations (<span class="chem">2x + 3y + 4z = 7</span>). With <span class="chem">a = 4, b != 7</span> the system is inconsistent, and since no two planes are parallel they form a triangular prism.</p>
      solution: "<p>行基本変形により <span class=\"chem\">y + 2z = 3</span> と <span class=\"chem\">(a - 4)z = b - 7</span> が得られます。<span class=\"chem\">a = 4, b = 7</span> のとき、解の集合は直線 <span class=\"chem\">(-1 + lambda, 3 - 2lambda, lambda)</span> です。<span class=\"chem\">lambda = 1</span> で確認：<span class=\"chem\">(0, 1, 1)</span> は 3 つの式すべてを満たします（<span class=\"chem\">2x + 3y + 4z = 7</span>）。<span class=\"chem\">a = 4, b != 7</span> のとき連立方程式は不整合で、どの 2 平面も平行ではないので、3 平面は三角柱をつくります。</p>",
      // EN: <p>(a) <span class="chem">R_2 - R_1: y + 2z = 3</span>; <span class="chem">R_3 - 2R_1: y + (a - 2)z = b - 4</span>; subtracting: <span class="chem">(a - 4)z = b - 7</span>. No unique solution when <span class="chem">a = 4</span>.<br>(b) <span class="chem">b = 7</span> (the last row becomes <span class="chem">0z = 0</span>).<br>(c) Let <span class="chem">z = lambda</span>: <span class="chem">y = 3 - 2lambda</span>, <span class="chem">x = 2 - y - z = -1 + lambda</span>, so <span class="chem">(x, y, z) = (-1 + lambda, 3 - 2lambda, lambda)</span>, <span class="chem">lambda \in \mathbb{R}</span>. The three planes meet in a common line (a sheaf).<br>(d) No two of the normals <span class="chem">(1, 1, 1), (1, 2, 3), (2, 3, 4)</span> are parallel, and there is no common point, so the planes form a triangular prism (each pair meets in a line, the three lines are parallel).</p>
      answer: "<p>(a) <span class=\"chem\">R_2 - R_1: y + 2z = 3</span>、<span class=\"chem\">R_3 - 2R_1: y + (a - 2)z = b - 4</span>。引くと <span class=\"chem\">(a - 4)z = b - 7</span>。<span class=\"chem\">a = 4</span> のとき、ただ 1 組の解をもたない。<br>(b) <span class=\"chem\">b = 7</span>（最後の行が <span class=\"chem\">0z = 0</span> になる）。<br>(c) <span class=\"chem\">z = lambda</span> とおくと <span class=\"chem\">y = 3 - 2lambda</span>、<span class=\"chem\">x = 2 - y - z = -1 + lambda</span>。よって <span class=\"chem\">(x, y, z) = (-1 + lambda, 3 - 2lambda, lambda)</span>、<span class=\"chem\">lambda \\in \\mathbb{R}</span>。3 つの平面は共通の 1 本の直線で交わる（平面束）。<br>(d) 法線 <span class=\"chem\">(1, 1, 1), (1, 2, 3), (2, 3, 4)</span> のどの 2 つも平行ではなく、共通の点もないので、3 平面は三角柱をつくる（どの 2 平面も直線で交わり、その 3 本の直線は平行である）。</p>",
      markscheme: [
        // EN: M1: (a) Eliminates x with R₂ − R₁ and R₃ − 2R₁.
        "M1：(a) R₂ − R₁ と R₃ − 2R₁ で x を消去する。",
        // EN: A1: (a) Reaches (a − 4)z = b − 7 (or equivalent).
        "A1：(a) (a − 4)z = b − 7（または同等な式）に到達する。",
        // EN: A1: (a) a = 4.
        "A1：(a) a = 4。",
        // EN: A1: (b) b = 7.
        "A1：(b) b = 7。",
        // EN: M1: (c) Sets z = λ and back-substitutes.
        "M1：(c) z = λ とおいて後退代入する。",
        // EN: A1: (c) (x, y, z) = (−1 + λ, 3 − 2λ, λ), λ ∈ ℝ (or equivalent).
        "A1：(c) (x, y, z) = (−1 + λ, 3 − 2λ, λ)、λ ∈ ℝ（または同等な式）。",
        // EN: A1: (c) The three planes intersect in a line.
        "A1：(c) 3 つの平面は 1 本の直線で交わる。",
        // EN: R1: (d) Triangular prism: no two planes are parallel and there is no point common to all three.
        "R1：(d) 三角柱：どの 2 平面も平行ではなく、3 平面すべてに共通な点は存在しない。",
      ],
    },

    // ── t1-5-q035 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q035": {
      // EN: A drone films a ball thrown upwards. The height of the ball, <span class="chem">h</span> metres, <span class="chem">t</span> seconds after the throw is modelled by <span class="chem">h(t) = at^2 + bt + c</span>. The drone records <span class="chem">h = 6.85</span> when <span class="chem">t = 0.5</span>, <span class="chem">h = 9.62</span> when <span class="chem">t = 1.2</span> and <span class="chem">h = 8.30</span> when <span class="chem">t = 2.0</span>. Find the maximum height of the ball predicted by the model.
      stem: "ドローンが上向きに投げられたボールを撮影している。投げてから <span class=\"chem\">t</span> 秒後のボールの高さ <span class=\"chem\">h</span> メートルは <span class=\"chem\">h(t) = at^2 + bt + c</span> でモデル化される。ドローンは <span class=\"chem\">t = 0.5</span> のとき <span class=\"chem\">h = 6.85</span>、<span class=\"chem\">t = 1.2</span> のとき <span class=\"chem\">h = 9.62</span>、<span class=\"chem\">t = 2.0</span> のとき <span class=\"chem\">h = 8.30</span> を記録した。このモデルが予測するボールの最高の高さを求めなさい (Find)。",
      hints: [
        // EN: Decode: each data point gives one linear equation in the unknowns <span class="chem">a, b, c</span>. Solve the <span class="chem">3 × 3</span> system with your GDC, then find the vertex of the parabola.
        "解読：各データ点から未知数 <span class=\"chem\">a, b, c</span> についての一次方程式が 1 つずつ得られます。GDC で <span class=\"chem\">3 × 3</span> の連立方程式を解き、放物線の頂点を求めます。",
        // EN: The equations are <span class="chem">0.25a + 0.5b + c = 6.85</span>, <span class="chem">1.44a + 1.2b + c = 9.62</span> and <span class="chem">4a + 2b + c = 8.30</span>.
        "方程式は <span class=\"chem\">0.25a + 0.5b + c = 6.85</span>、<span class=\"chem\">1.44a + 1.2b + c = 9.62</span>、<span class=\"chem\">4a + 2b + c = 8.30</span> です。",
        // EN: With <span class="chem">a, b, c</span> stored, the maximum is at <span class="chem">t = -b/(2a)</span>; or graph <span class="chem">h(t)</span> and use the maximum feature.
        "<span class=\"chem\">a, b, c</span> を保存しておけば、最大値は <span class=\"chem\">t = -b/(2a)</span> でとります。または <span class=\"chem\">h(t)</span> のグラフを描いて最大値機能を使います。",
      ],
      // EN: <p>The GDC gives <span class="chem">a = -3.7381...</span>, <span class="chem">b = 10.3119...</span>, <span class="chem">c = 2.6286...</span>. The vertex is at <span class="chem">t = -b/(2a) = 1.3793...</span> s, so the maximum height is <span class="chem">h(1.3793...) = 9.74</span> m (3 s.f.). Keep the full stored values: rounding <span class="chem">a, b, c</span> early changes the third figure.</p>
      solution: "<p>GDC により <span class=\"chem\">a = -3.7381...</span>、<span class=\"chem\">b = 10.3119...</span>、<span class=\"chem\">c = 2.6286...</span>。頂点は <span class=\"chem\">t = -b/(2a) = 1.3793...</span> s なので、最高の高さは <span class=\"chem\">h(1.3793...) = 9.74</span> m（有効数字 3 桁）です。保存した値をそのまま使いましょう：<span class=\"chem\">a, b, c</span> を途中で丸めると 3 桁目が変わります。</p>",
    },

    // ── t1-5-q036 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q036": {
      // EN: Mei invests a total of <span class="chem">$40 000</span> in three accounts, A, B and C, which pay simple interest at annual rates of <span class="chem">2.6%</span>, <span class="chem">3.4%</span> and <span class="chem">5.1%</span> respectively. After one year she has earned <span class="chem">$1437.51</span> in interest in total. The amount invested in account C is <span class="chem">$2000</span> less than the amount invested in account A. Find the amount invested in account B. Give your answer correct to 2 decimal places.
      stem: "メイは合計 <span class=\"chem\">$40 000</span> を 3 つの口座 A, B, C に投資した。これらの口座はそれぞれ年利 <span class=\"chem\">2.6%</span>、<span class=\"chem\">3.4%</span>、<span class=\"chem\">5.1%</span> の単利で利息がつく。1 年後、利息の合計は <span class=\"chem\">$1437.51</span> であった。口座 C への投資額は口座 A への投資額より <span class=\"chem\">$2000</span> 少ない。口座 B への投資額を求めなさい (Find)。答えは小数第 2 位まで求めなさい。",
      hints: [
        // EN: Decode: three unknown amounts and three facts (total, total interest, the A–C relation) give a <span class="chem">3 × 3</span> linear system. Let the amounts be <span class="chem">x, y, z</span>.
        "解読：3 つの未知の金額と 3 つの事実（合計、利息の合計、A と C の関係）から <span class=\"chem\">3 × 3</span> の連立一次方程式ができます。金額を <span class=\"chem\">x, y, z</span> とおきます。",
        // EN: The equations are <span class="chem">x + y + z = 40000</span>, <span class="chem">0.026x + 0.034y + 0.051z = 1437.51</span> and <span class="chem">x - z = 2000</span>.
        "方程式は <span class=\"chem\">x + y + z = 40000</span>、<span class=\"chem\">0.026x + 0.034y + 0.051z = 1437.51</span>、<span class=\"chem\">x - z = 2000</span> です。",
        // EN: Enter the augmented matrix in your GDC (or use the simultaneous-equation solver) and read off <span class="chem">y</span>.
        "拡大係数行列を GDC に入力し（または連立方程式ソルバーを使い）、<span class=\"chem\">y</span> を読み取ります。",
      ],
      // EN: <p>Solving <span class="chem">x + y + z = 40000</span>, <span class="chem">0.026x + 0.034y + 0.051z = 1437.51</span>, <span class="chem">x - z = 2000</span> with the GDC gives <span class="chem">x = 12390</span>, <span class="chem">y = 17220</span>, <span class="chem">z = 10390</span>. Check: <span class="chem">322.14 + 585.48 + 529.89 = 1437.51</span>. So <span class="chem">$17 220.00</span> is invested in account B.</p>
      solution: "<p><span class=\"chem\">x + y + z = 40000</span>、<span class=\"chem\">0.026x + 0.034y + 0.051z = 1437.51</span>、<span class=\"chem\">x - z = 2000</span> を GDC で解くと <span class=\"chem\">x = 12390</span>、<span class=\"chem\">y = 17220</span>、<span class=\"chem\">z = 10390</span>。確認：<span class=\"chem\">322.14 + 585.48 + 529.89 = 1437.51</span>。よって口座 B には <span class=\"chem\">$17 220.00</span> が投資されています。</p>",
    },

    // ── t1-5-q037 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q037": {
      // EN: An archaeologist finds three fragments of a circular plate. On a coordinate grid (units: cm) the fragments lie at the points <span class="chem">(1.2, 3.5)</span>, <span class="chem">(-2.4, 1.1)</span> and <span class="chem">(4.0, -0.6)</span>, all on the rim of the plate. The rim has an equation of the form <span class="chem">x^2 + y^2 + Dx + Ey + F = 0</span>. Find the radius of the plate.
      stem: "考古学者が円形の皿の破片を 3 つ発見した。座標平面（単位：cm）上で、破片は点 <span class=\"chem\">(1.2, 3.5)</span>、<span class=\"chem\">(-2.4, 1.1)</span>、<span class=\"chem\">(4.0, -0.6)</span> にあり、いずれも皿のふち上にある。ふちの方程式は <span class=\"chem\">x^2 + y^2 + Dx + Ey + F = 0</span> の形で表される。皿の半径を求めなさい (Find)。",
      hints: [
        // EN: Decode: the equation is not linear in <span class="chem">x</span> and <span class="chem">y</span>, but it IS linear in the unknown constants <span class="chem">D, E, F</span>. Substituting each point gives one linear equation, so this is a hidden <span class="chem">3 × 3</span> system.
        "解読：この方程式は <span class=\"chem\">x</span> と <span class=\"chem\">y</span> については一次ではありませんが、未知の定数 <span class=\"chem\">D, E, F</span> については一次です。各点を代入すると一次方程式が 1 つずつ得られるので、これは隠れた <span class=\"chem\">3 × 3</span> の連立方程式です。",
        // EN: For <span class="chem">(1.2, 3.5)</span>: <span class="chem">1.2D + 3.5E + F = -(1.2^2 + 3.5^2) = -13.69</span>. Form the other two equations the same way and solve with your GDC.
        "<span class=\"chem\">(1.2, 3.5)</span> の場合：<span class=\"chem\">1.2D + 3.5E + F = -(1.2^2 + 3.5^2) = -13.69</span>。他の 2 つの方程式も同様に作り、GDC で解きます。",
        // EN: Complete the square: the centre is <span class="chem">(-D/2, -E/2)</span> and <span class="chem">r^2 = D^2/4 + E^2/4 - F</span>.
        "平方完成します：中心は <span class=\"chem\">(-D/2, -E/2)</span>、<span class=\"chem\">r^2 = D^2/4 + E^2/4 - F</span> です。",
      ],
      // EN: <p><strong>Decode:</strong> the unknowns are the coefficients <span class="chem">D, E, F</span>, and each point gives a linear equation in them.</p><p><span class="chem">1.2D + 3.5E + F = -13.69</span>, <span class="chem">-2.4D + 1.1E + F = -6.97</span>, <span class="chem">4.0D - 0.6E + F = -16.36</span>. The GDC gives <span class="chem">D = -1.5810...</span>, <span class="chem">E = -0.42849...</span>, <span class="chem">F = -10.2931...</span>. Then <span class="chem">r = sqrt(D^2/4 + E^2/4 - F) = 3.31</span> cm (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>未知数は係数 <span class=\"chem\">D, E, F</span> であり、各点からそれらについての一次方程式が得られます。</p><p><span class=\"chem\">1.2D + 3.5E + F = -13.69</span>、<span class=\"chem\">-2.4D + 1.1E + F = -6.97</span>、<span class=\"chem\">4.0D - 0.6E + F = -16.36</span>。GDC により <span class=\"chem\">D = -1.5810...</span>、<span class=\"chem\">E = -0.42849...</span>、<span class=\"chem\">F = -10.2931...</span>。よって <span class=\"chem\">r = sqrt(D^2/4 + E^2/4 - F) = 3.31</span> cm（有効数字 3 桁）です。</p>",
    },

    // ── t1-5-q038 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q038": {
      // EN: A sports nutritionist mixes three foods, P, Q and R. The table gives the mass in grams of protein, carbohydrate and fat in <strong>100 g</strong> of each food.<br><span class="mono">Food: protein | carbohydrate | fat</span><br><span class="mono">P: 12.5 | 8.2 | 3.1</span><br><span class="mono">Q: 3.4 | 22.6 | 1.2</span><br><span class="mono">R: 7.8 | 4.5 | 14.3</span><br>A meal must contain exactly 48 g of protein, 95 g of carbohydrate and 36 g of fat. Find the mass of food Q in the meal, in grams.
      stem: "スポーツ栄養士が 3 つの食品 P, Q, R を混ぜる。表は各食品 <strong>100 g</strong> に含まれるたんぱく質、炭水化物、脂質の質量（グラム）を示している。<br><span class=\"mono\">Food: protein | carbohydrate | fat</span><br><span class=\"mono\">P: 12.5 | 8.2 | 3.1</span><br><span class=\"mono\">Q: 3.4 | 22.6 | 1.2</span><br><span class=\"mono\">R: 7.8 | 4.5 | 14.3</span><br>食事にはちょうど 48 g のたんぱく質、95 g の炭水化物、36 g の脂質が含まれなければならない。食事に含まれる食品 Q の質量をグラム単位で求めなさい (Find)。",
      hints: [
        // EN: Decode: let <span class="chem">p, q, r</span> be the masses in units of 100 g. Each nutrient gives one linear equation.
        "解読：<span class=\"chem\">p, q, r</span> を 100 g 単位の質量とします。各栄養素から一次方程式が 1 つずつ得られます。",
        // EN: Protein: <span class="chem">12.5p + 3.4q + 7.8r = 48</span>. Write the carbohydrate and fat equations, then solve with your GDC.
        "たんぱく質：<span class=\"chem\">12.5p + 3.4q + 7.8r = 48</span>。炭水化物と脂質の方程式を書き、GDC で解きます。",
        // EN: Remember to convert <span class="chem">q</span> back to grams by multiplying by 100.
        "<span class=\"chem\">q</span> に 100 を掛けてグラムに戻すことを忘れないようにしましょう。",
      ],
      // EN: <p><span class="chem">12.5p + 3.4q + 7.8r = 48</span>, <span class="chem">8.2p + 22.6q + 4.5r = 95</span>, <span class="chem">3.1p + 1.2q + 14.3r = 36</span>. The GDC gives <span class="chem">p = 1.8178...</span>, <span class="chem">q = 3.1742...</span>, <span class="chem">r = 1.8570...</span> (hundreds of grams). So the meal contains <span class="chem">317</span> g of food Q (3 s.f.).</p>
      solution: "<p><span class=\"chem\">12.5p + 3.4q + 7.8r = 48</span>、<span class=\"chem\">8.2p + 22.6q + 4.5r = 95</span>、<span class=\"chem\">3.1p + 1.2q + 14.3r = 36</span>。GDC により <span class=\"chem\">p = 1.8178...</span>、<span class=\"chem\">q = 3.1742...</span>、<span class=\"chem\">r = 1.8570...</span>（百グラム単位）。よって食事には食品 Q が <span class=\"chem\">317</span> g 含まれます（有効数字 3 桁）。</p>",
    },

    // ── t1-5-q039 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q039": {
      // EN: The temperature <span class="chem">T</span> °C in a greenhouse <span class="chem">t</span> hours after midnight is modelled by <span class="chem">T(t) = a sin((pi t)/12) + b cos((pi t)/12) + d</span>, for <span class="chem">0 &lt;= t &lt;= 24</span>. Sensors record <span class="chem">14.2</span> °C at 03:00, <span class="chem">22.9</span> °C at 10:00 and <span class="chem">11.5</span> °C at 18:00. Find the maximum temperature predicted by the model.
      stem: "温室内の午前 0 時から <span class=\"chem\">t</span> 時間後の温度 <span class=\"chem\">T</span> °C は、<span class=\"chem\">0 &lt;= t &lt;= 24</span> において <span class=\"chem\">T(t) = a sin((pi t)/12) + b cos((pi t)/12) + d</span> でモデル化される。センサーは 03:00 に <span class=\"chem\">14.2</span> °C、10:00 に <span class=\"chem\">22.9</span> °C、18:00 に <span class=\"chem\">11.5</span> °C を記録した。このモデルが予測する最高温度を求めなさい (Find)。",
      hints: [
        // EN: Decode: for a fixed time <span class="chem">t</span>, the values <span class="chem">sin((pi t)/12)</span> and <span class="chem">cos((pi t)/12)</span> are just numbers, so each reading gives a LINEAR equation in <span class="chem">a, b, d</span>. Remember the times are <span class="chem">t = 3, 10, 18</span>, and use radians.
        "解読：時刻 <span class=\"chem\">t</span> を固定すると、<span class=\"chem\">sin((pi t)/12)</span> と <span class=\"chem\">cos((pi t)/12)</span> はただの数なので、各測定値から <span class=\"chem\">a, b, d</span> についての一次方程式が得られます。時刻は <span class=\"chem\">t = 3, 10, 18</span> であること、ラジアンを使うことに注意しましょう。",
        // EN: At <span class="chem">t = 3</span>: <span class="chem">a sin(pi/4) + b cos(pi/4) + d = 14.2</span>. At <span class="chem">t = 18</span>: <span class="chem">sin(3pi/2) = -1</span> and <span class="chem">cos(3pi/2) = 0</span>, so <span class="chem">-a + d = 11.5</span>.
        "<span class=\"chem\">t = 3</span> のとき：<span class=\"chem\">a sin(pi/4) + b cos(pi/4) + d = 14.2</span>。<span class=\"chem\">t = 18</span> のとき：<span class=\"chem\">sin(3pi/2) = -1</span>、<span class=\"chem\">cos(3pi/2) = 0</span> なので <span class=\"chem\">-a + d = 11.5</span>。",
        // EN: Solve for <span class="chem">a, b, d</span> with your GDC, then graph <span class="chem">T(t)</span> on <span class="chem">0 &lt;= t &lt;= 24</span> and find its maximum.
        "GDC で <span class=\"chem\">a, b, d</span> を求め、<span class=\"chem\">0 &lt;= t &lt;= 24</span> で <span class=\"chem\">T(t)</span> のグラフを描いて最大値を求めます。",
      ],
      // EN: <p><strong>Decode:</strong> the model is not linear in <span class="chem">t</span>, but it is linear in the unknown coefficients, so three readings give a <span class="chem">3 × 3</span> system.</p><p>The GDC gives <span class="chem">a = 4.0957...</span>, <span class="chem">b = -6.0696...</span>, <span class="chem">d = 15.5957...</span>. Graphing <span class="chem">T(t)</span> gives a maximum of <span class="chem">22.9</span> °C (3 s.f.), at about <span class="chem">t = 10.2</span> (about 10:13). (Equivalently, <span class="chem">T_{max} = d + sqrt(a^2 + b^2)</span>.)</p>
      solution: "<p><strong>解読：</strong>このモデルは <span class=\"chem\">t</span> については一次ではありませんが、未知の係数については一次なので、3 つの測定値から <span class=\"chem\">3 × 3</span> の連立方程式が得られます。</p><p>GDC により <span class=\"chem\">a = 4.0957...</span>、<span class=\"chem\">b = -6.0696...</span>、<span class=\"chem\">d = 15.5957...</span>。<span class=\"chem\">T(t)</span> のグラフから、最大値は <span class=\"chem\">22.9</span> °C（有効数字 3 桁）で、約 <span class=\"chem\">t = 10.2</span>（約 10:13）のときです。（同値な式として <span class=\"chem\">T_{max} = d + sqrt(a^2 + b^2)</span>。）</p>",
    },

    // ── t1-5-q040 · numeric · challenge · AHL · AHL 1.16 · 7 marks
    "t1-5-q040": {
      // EN: The concentration <span class="chem">C</span> mg L<sup>−1</sup> of a drug in a patient’s blood <span class="chem">t</span> hours after an injection is modelled by <span class="chem">C = A t^p e^{qt}</span>, <span class="chem">t &gt; 0</span>, where <span class="chem">A, p, q</span> are constants. Measurements give <span class="chem">C = 4.2</span> at <span class="chem">t = 1</span>, <span class="chem">C = 6.9</span> at <span class="chem">t = 3</span> and <span class="chem">C = 3.8</span> at <span class="chem">t = 6</span>. By taking natural logarithms, find the time at which the model predicts the maximum concentration.
      stem: "注射から <span class=\"chem\">t</span> 時間後の患者の血中薬物濃度 <span class=\"chem\">C</span> mg L<sup>−1</sup> は、<span class=\"chem\">A, p, q</span> を定数として <span class=\"chem\">C = A t^p e^{qt}</span>、<span class=\"chem\">t &gt; 0</span> でモデル化される。測定により、<span class=\"chem\">t = 1</span> で <span class=\"chem\">C = 4.2</span>、<span class=\"chem\">t = 3</span> で <span class=\"chem\">C = 6.9</span>、<span class=\"chem\">t = 6</span> で <span class=\"chem\">C = 3.8</span> が得られた。自然対数をとることにより、このモデルが濃度の最大値を予測する時刻を求めなさい (Find)。",
      hints: [
        // EN: Decode: <span class="chem">ln C = ln A + p ln t + qt</span> is linear in the three unknowns <span class="chem">ln A</span>, <span class="chem">p</span> and <span class="chem">q</span>. So the data give a <span class="chem">3 × 3</span> linear system.
        "解読：<span class=\"chem\">ln C = ln A + p ln t + qt</span> は 3 つの未知数 <span class=\"chem\">ln A</span>、<span class=\"chem\">p</span>、<span class=\"chem\">q</span> について一次です。したがってデータから <span class=\"chem\">3 × 3</span> の連立一次方程式が得られます。",
        // EN: At <span class="chem">t = 1</span>, <span class="chem">ln 1 = 0</span>, so <span class="chem">ln A + q = ln 4.2</span>. Write the other two equations using <span class="chem">ln 3</span> and <span class="chem">ln 6</span>, and solve with your GDC.
        "<span class=\"chem\">t = 1</span> のとき <span class=\"chem\">ln 1 = 0</span> なので <span class=\"chem\">ln A + q = ln 4.2</span>。<span class=\"chem\">ln 3</span> と <span class=\"chem\">ln 6</span> を使って他の 2 つの方程式を書き、GDC で解きます。",
        // EN: Then <span class="chem">dC/dt = A t^{p-1} e^{qt}(p + qt)</span>, which is zero when <span class="chem">t = -p/q</span>. (You can also graph <span class="chem">C</span> and use the maximum feature.)
        "すると <span class=\"chem\">dC/dt = A t^{p-1} e^{qt}(p + qt)</span> となり、<span class=\"chem\">t = -p/q</span> のとき 0 になります。（<span class=\"chem\">C</span> のグラフを描いて最大値機能を使うこともできます。）",
      ],
      // EN: <p><strong>Decode:</strong> logarithms turn the product model into a linear equation in <span class="chem">ln A, p, q</span>.</p><p><span class="chem">ln A + q = ln 4.2</span>, <span class="chem">ln A + p ln 3 + 3q = ln 6.9</span>, <span class="chem">ln A + p ln 6 + 6q = ln 3.8</span>. The GDC gives <span class="chem">p = 1.4047...</span>, <span class="chem">q = -0.52340...</span>, <span class="chem">A = 7.0886...</span>. The maximum is at <span class="chem">t = -p/q = 2.68</span> hours (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>対数をとると、積の形のモデルが <span class=\"chem\">ln A, p, q</span> についての一次方程式になります。</p><p><span class=\"chem\">ln A + q = ln 4.2</span>、<span class=\"chem\">ln A + p ln 3 + 3q = ln 6.9</span>、<span class=\"chem\">ln A + p ln 6 + 6q = ln 3.8</span>。GDC により <span class=\"chem\">p = 1.4047...</span>、<span class=\"chem\">q = -0.52340...</span>、<span class=\"chem\">A = 7.0886...</span>。最大値をとるのは <span class=\"chem\">t = -p/q = 2.68</span> 時間（有効数字 3 桁）です。</p>",
    },

    // ── t1-5-q041 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q041": {
      // EN: A country has three regions, A, B and C, with a total population of 2.4 million that stays constant. Each year:<br>• of the people in A, 85% stay, 10% move to B and 5% move to C;<br>• of the people in B, 75% stay, 15% move to A and 10% move to C;<br>• of the people in C, 80% stay, 12% move to A and 8% move to B.<br>In the long run the population of each region no longer changes from one year to the next. Find the long-run population of region B, in millions.
      stem: "ある国には 3 つの地域 A, B, C があり、総人口は 2.4 百万人で一定である。毎年：<br>• A の人々のうち 85% はとどまり、10% は B へ、5% は C へ移る；<br>• B の人々のうち 75% はとどまり、15% は A へ、10% は C へ移る；<br>• C の人々のうち 80% はとどまり、12% は A へ、8% は B へ移る。<br>長期的には、各地域の人口は年ごとに変化しなくなる。地域 B の長期的な人口を百万人単位で求めなさい (Find)。",
      hints: [
        // EN: Decode: “no longer changes” means each region’s population next year equals its population this year. Write a balance equation for each region with unknowns <span class="chem">a, b, c</span> (millions).
        "解読：「変化しなくなる」とは、各地域の翌年の人口が今年の人口に等しいという意味です。未知数 <span class=\"chem\">a, b, c</span>（百万人単位）を用いて、各地域の収支の式を書きます。",
        // EN: Region A: <span class="chem">a = 0.85a + 0.15b + 0.12c</span>. Region B: <span class="chem">b = 0.10a + 0.75b + 0.08c</span>. The three balance equations are dependent (the GDC shows a row of zeros), so you must also use <span class="chem">a + b + c = 2.4</span>.
        "地域 A：<span class=\"chem\">a = 0.85a + 0.15b + 0.12c</span>。地域 B：<span class=\"chem\">b = 0.10a + 0.75b + 0.08c</span>。3 つの収支の式は従属している（GDC ではすべて 0 の行が現れる）ので、<span class=\"chem\">a + b + c = 2.4</span> も使う必要があります。",
        // EN: Solve two balance equations together with <span class="chem">a + b + c = 2.4</span> on your GDC.
        "収支の式 2 つと <span class=\"chem\">a + b + c = 2.4</span> を GDC で連立させて解きます。",
      ],
      // EN: <p><strong>Decode:</strong> a steady state is a linear system. The three balance equations only have rank 2 (people are neither created nor lost), which is why the total-population equation is needed.</p><p><span class="chem">-0.15a + 0.15b + 0.12c = 0</span>, <span class="chem">0.10a - 0.25b + 0.08c = 0</span>, <span class="chem">a + b + c = 2.4</span>. The GDC gives <span class="chem">a = 1.139</span>, <span class="chem">b = 0.6508...</span>, <span class="chem">c = 0.6102</span>. So region B has about <span class="chem">0.651</span> million people (3 s.f.). Check with C: <span class="chem">0.05a + 0.10b + 0.80c = c</span> holds.</p>
      solution: "<p><strong>解読：</strong>定常状態は連立一次方程式です。3 つの収支の式は階数が 2 しかない（人は生まれも消えもしない）ので、総人口の式が必要になります。</p><p><span class=\"chem\">-0.15a + 0.15b + 0.12c = 0</span>、<span class=\"chem\">0.10a - 0.25b + 0.08c = 0</span>、<span class=\"chem\">a + b + c = 2.4</span>。GDC により <span class=\"chem\">a = 1.139</span>、<span class=\"chem\">b = 0.6508...</span>、<span class=\"chem\">c = 0.6102</span>。よって地域 B の人口は約 <span class=\"chem\">0.651</span> 百万人（有効数字 3 桁）です。C で確認：<span class=\"chem\">0.05a + 0.10b + 0.80c = c</span> が成り立ちます。</p>",
      // EN: million
      unit: "百万人",
    },

    // ── t1-5-q042 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q042": {
      // EN: Consider the system<br><span class="chem">x + 2y + z = 3</span><br><span class="chem">2x + ky + 3z = 1</span><br><span class="chem">x + y + kz = 2</span>, where <span class="chem">k \in \mathbb{R}</span>.<br>By eliminating <span class="chem">x</span>, find the larger value of <span class="chem">k</span> for which the system does not have a unique solution.
      stem: "連立方程式<br><span class=\"chem\">x + 2y + z = 3</span><br><span class=\"chem\">2x + ky + 3z = 1</span><br><span class=\"chem\">x + y + kz = 2</span>（ただし <span class=\"chem\">k \\in \\mathbb{R}</span>）を考える。<br><span class=\"chem\">x</span> を消去することにより、この連立方程式がただ 1 組の解をもたないような <span class=\"chem\">k</span> の値のうち大きいほうを求めなさい (Find)。",
      hints: [
        // EN: <span class="chem">R_2 - 2R_1</span> gives <span class="chem">(k - 4)y + z = -5</span> and <span class="chem">R_3 - R_1</span> gives <span class="chem">-y + (k - 1)z = -1</span>.
        "<span class=\"chem\">R_2 - 2R_1</span> から <span class=\"chem\">(k - 4)y + z = -5</span>、<span class=\"chem\">R_3 - R_1</span> から <span class=\"chem\">-y + (k - 1)z = -1</span> が得られます。",
        // EN: Eliminate <span class="chem">z</span> (or <span class="chem">y</span>) from these two. The coefficient that remains is <span class="chem">(k - 4)(k - 1) + 1 = k^2 - 5k + 5</span>.
        "この 2 式から <span class=\"chem\">z</span>（または <span class=\"chem\">y</span>）を消去します。残る係数は <span class=\"chem\">(k - 4)(k - 1) + 1 = k^2 - 5k + 5</span> です。",
        // EN: The system fails to have a unique solution when this coefficient is zero. Solve <span class="chem">k^2 - 5k + 5 = 0</span> with your GDC.
        "この係数が 0 のとき、連立方程式はただ 1 組の解をもちません。GDC で <span class=\"chem\">k^2 - 5k + 5 = 0</span> を解きます。",
      ],
      // EN: <p>From <span class="chem">(k - 4)y + z = -5</span> and <span class="chem">-y + (k - 1)z = -1</span>: multiply the first by <span class="chem">(k - 1)</span> and subtract the second to get <span class="chem">(k^2 - 5k + 5)y = -5k + 6</span>. No unique solution when <span class="chem">k^2 - 5k + 5 = 0</span>, so <span class="chem">k = (5 +- sqrt(5))/2</span>, i.e. <span class="chem">k = 1.38</span> or <span class="chem">k = 3.62</span>. The larger value is <span class="chem">k = 3.62</span> (3 s.f.). (At these values <span class="chem">-5k + 6 != 0</span>, so the system is in fact inconsistent.)</p>
      solution: "<p><span class=\"chem\">(k - 4)y + z = -5</span> と <span class=\"chem\">-y + (k - 1)z = -1</span> から：1 つ目に <span class=\"chem\">(k - 1)</span> を掛けて 2 つ目を引くと <span class=\"chem\">(k^2 - 5k + 5)y = -5k + 6</span>。<span class=\"chem\">k^2 - 5k + 5 = 0</span> のときただ 1 組の解をもたないので、<span class=\"chem\">k = (5 +- sqrt(5))/2</span>、すなわち <span class=\"chem\">k = 1.38</span> または <span class=\"chem\">k = 3.62</span>。大きいほうは <span class=\"chem\">k = 3.62</span>（有効数字 3 桁）です。（これらの値では <span class=\"chem\">-5k + 6 != 0</span> なので、実際には連立方程式は不整合です。）</p>",
    },

    // ── t1-5-q043 · short · exam · AHL · AHL 1.16 · 9 marks
    "t1-5-q043": {
      // EN: Consider the system<br><span class="chem">x + y + z = 1</span><br><span class="chem">2x - y + 3z = 4</span><br><span class="chem">x + ky + 2z = c</span>, where <span class="chem">k, c \in \mathbb{R}</span>.<br>(a) Show that row reduction leads to the equation <span class="chem">(k + 2)y = c - 3</span>. [3 marks]<br>(b) Write down the value of <span class="chem">k</span> for which the system does not have a unique solution. [1 mark]<br>(c) For this value of <span class="chem">k</span>, state the value of <span class="chem">c</span> for which the system has infinitely many solutions, and find the general solution. [3 marks]<br>(d) Use your GDC to solve the system when <span class="chem">k = 0.35</span> and <span class="chem">c = -1.8</span>, giving each value correct to 3 significant figures. [2 marks]
      stem: "連立方程式<br><span class=\"chem\">x + y + z = 1</span><br><span class=\"chem\">2x - y + 3z = 4</span><br><span class=\"chem\">x + ky + 2z = c</span>（ただし <span class=\"chem\">k, c \\in \\mathbb{R}</span>）を考える。<br>(a) 行基本変形により方程式 <span class=\"chem\">(k + 2)y = c - 3</span> が導かれることを示しなさい (Show that)。 [3 marks]<br>(b) この連立方程式がただ 1 組の解をもたないような <span class=\"chem\">k</span> の値を書きなさい (Write down)。 [1 mark]<br>(c) この <span class=\"chem\">k</span> の値に対して、連立方程式が無数の解をもつような <span class=\"chem\">c</span> の値を述べ (State)、一般解を求めなさい (Find)。 [3 marks]<br>(d) GDC を用いて、<span class=\"chem\">k = 0.35</span>、<span class=\"chem\">c = -1.8</span> のときの連立方程式を解き、各値を有効数字 3 桁で答えなさい。 [2 marks]",
      hints: [
        // EN: In (a) eliminate <span class="chem">x</span> from rows 2 and 3 first, then eliminate <span class="chem">z</span>, which now has coefficient 1 in both rows.
        "(a) では、まず第 2 行と第 3 行から <span class=\"chem\">x</span> を消去し、次に両方の行で係数が 1 になった <span class=\"chem\">z</span> を消去します。",
        // EN: For (c), the final row must read <span class="chem">0y = 0</span>. Use <span class="chem">y</span> as the parameter because it is the variable whose equation vanished.
        "(c) では、最後の行が <span class=\"chem\">0y = 0</span> でなければなりません。式が消えた変数である <span class=\"chem\">y</span> を媒介変数にします。",
        // EN: For (d), enter the augmented matrix <span class="chem">[1, 1, 1 | 1; 2, -1, 3 | 4; 1, 0.35, 2 | -1.8]</span> and use rref or the system solver.
        "(d) では、拡大係数行列 <span class=\"chem\">[1, 1, 1 | 1; 2, -1, 3 | 4; 1, 0.35, 2 | -1.8]</span> を入力し、rref または連立方程式ソルバーを使います。",
      ],
      // EN: <p>(a) The two reduced rows are <span class="chem">-3y + z = 2</span> and <span class="chem">(k - 1)y + z = c - 1</span>; their difference is <span class="chem">(k + 2)y = c - 3</span>.<br>(c) Check the general solution with <span class="chem">lambda = 0</span>: <span class="chem">(-1, 0, 2)</span> gives <span class="chem">1, 4, 3</span> in the three equations (with <span class="chem">k = -2</span>, <span class="chem">c = 3</span>).<br>(d) The GDC gives <span class="chem">(7.17, -2.04, -4.13)</span>; part (a) confirms <span class="chem">y = (-1.8 - 3)/(0.35 + 2) = -2.04</span>.</p>
      solution: "<p>(a) 変形後の 2 つの行は <span class=\"chem\">-3y + z = 2</span> と <span class=\"chem\">(k - 1)y + z = c - 1</span> で、その差が <span class=\"chem\">(k + 2)y = c - 3</span> です。<br>(c) <span class=\"chem\">lambda = 0</span> で一般解を確認：<span class=\"chem\">(-1, 0, 2)</span> は 3 つの式で <span class=\"chem\">1, 4, 3</span> を与えます（<span class=\"chem\">k = -2</span>、<span class=\"chem\">c = 3</span>）。<br>(d) GDC により <span class=\"chem\">(7.17, -2.04, -4.13)</span>。(a) からも <span class=\"chem\">y = (-1.8 - 3)/(0.35 + 2) = -2.04</span> が確かめられます。</p>",
      // EN: <p>(a) <span class="chem">R_2 - 2R_1: -3y + z = 2</span>. <span class="chem">R_3 - R_1: (k - 1)y + z = c - 1</span>. Subtracting: <span class="chem">(k - 1 + 3)y = c - 1 - 2</span>, i.e. <span class="chem">(k + 2)y = c - 3</span> (AG).<br>(b) <span class="chem">k = -2</span>.<br>(c) <span class="chem">c = 3</span>. Let <span class="chem">y = lambda</span>: <span class="chem">z = 2 + 3lambda</span> and <span class="chem">x = 1 - y - z = -1 - 4lambda</span>, so <span class="chem">(x, y, z) = (-1 - 4lambda, lambda, 2 + 3lambda)</span>, <span class="chem">lambda \in \mathbb{R}</span>.<br>(d) <span class="chem">x = 7.17</span>, <span class="chem">y = -2.04</span>, <span class="chem">z = -4.13</span> (exactly <span class="chem">y = -96/47</span>, <span class="chem">x = 337/47</span>, <span class="chem">z = -194/47</span>).</p>
      answer: "<p>(a) <span class=\"chem\">R_2 - 2R_1: -3y + z = 2</span>。<span class=\"chem\">R_3 - R_1: (k - 1)y + z = c - 1</span>。引くと <span class=\"chem\">(k - 1 + 3)y = c - 1 - 2</span>、すなわち <span class=\"chem\">(k + 2)y = c - 3</span> (AG)。<br>(b) <span class=\"chem\">k = -2</span>。<br>(c) <span class=\"chem\">c = 3</span>。<span class=\"chem\">y = lambda</span> とおくと <span class=\"chem\">z = 2 + 3lambda</span>、<span class=\"chem\">x = 1 - y - z = -1 - 4lambda</span>。よって <span class=\"chem\">(x, y, z) = (-1 - 4lambda, lambda, 2 + 3lambda)</span>、<span class=\"chem\">lambda \\in \\mathbb{R}</span>。<br>(d) <span class=\"chem\">x = 7.17</span>、<span class=\"chem\">y = -2.04</span>、<span class=\"chem\">z = -4.13</span>（正確には <span class=\"chem\">y = -96/47</span>、<span class=\"chem\">x = 337/47</span>、<span class=\"chem\">z = -194/47</span>）。</p>",
      markscheme: [
        // EN: M1: (a) Eliminates x using R₂ − 2R₁ and R₃ − R₁.
        "M1：(a) R₂ − 2R₁ と R₃ − R₁ を用いて x を消去する。",
        // EN: A1: (a) Obtains −3y + z = 2 and (k − 1)y + z = c − 1.
        "A1：(a) −3y + z = 2 と (k − 1)y + z = c − 1 を得る。",
        // EN: A1: (a) Subtracts the two reduced rows correctly, leading to (k + 2)y = c − 3 AG (no mark for the given line).
        "A1：(a) 変形後の 2 つの行を正しく引き、(k + 2)y = c − 3 を導く AG（与えられた行自体には点を与えない）。",
        // EN: A1: (b) k = −2.
        "A1：(b) k = −2。",
        // EN: A1: (c) c = 3.
        "A1：(c) c = 3。",
        // EN: M1: (c) Introduces a parameter (e.g. y = λ) and back-substitutes.
        "M1：(c) 媒介変数を導入し（例：y = λ）、後退代入する。",
        // EN: A1: (c) (x, y, z) = (−1 − 4λ, λ, 2 + 3λ), λ ∈ ℝ (or equivalent).
        "A1：(c) (x, y, z) = (−1 − 4λ, λ, 2 + 3λ)、λ ∈ ℝ（または同等な式）。",
        // EN: A1: (d) Correct use of technology: y = −2.04 (and either other value).
        "A1：(d) テクノロジーを正しく使う：y = −2.04（および他のいずれか 1 つの値）。",
        // EN: A1: (d) x = 7.17, y = −2.04, z = −4.13.
        "A1：(d) x = 7.17、y = −2.04、z = −4.13。",
      ],
    },

    // ── t1-5-q044 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q044": {
      // EN: Three planes have equations<br><span class="chem">Π_1: 2.1x - 0.8y + 1.5z = 4.2</span><br><span class="chem">Π_2: 0.6x + 1.9y - 2.2z = -1.3</span><br><span class="chem">Π_3: 1.4x + 0.7y + 3.1z = 6.8</span>.<br>The three planes meet at a single point. Find the <span class="chem">z</span>-coordinate of this point.
      stem: "3 つの平面の方程式が<br><span class=\"chem\">Π_1: 2.1x - 0.8y + 1.5z = 4.2</span><br><span class=\"chem\">Π_2: 0.6x + 1.9y - 2.2z = -1.3</span><br><span class=\"chem\">Π_3: 1.4x + 0.7y + 3.1z = 6.8</span> で与えられている。<br>3 つの平面はただ 1 点で交わる。この点の <span class=\"chem\">z</span> 座標を求めなさい (Find)。",
      hints: [
        // EN: The common point is the solution of the three equations taken together.
        "共通の点は、3 つの方程式を連立させたときの解です。",
        // EN: Enter the augmented matrix <span class="chem">[2.1, -0.8, 1.5 | 4.2; 0.6, 1.9, -2.2 | -1.3; 1.4, 0.7, 3.1 | 6.8]</span> and use rref or the simultaneous-equation solver.
        "拡大係数行列 <span class=\"chem\">[2.1, -0.8, 1.5 | 4.2; 0.6, 1.9, -2.2 | -1.3; 1.4, 0.7, 3.1 | 6.8]</span> を入力し、rref または連立方程式ソルバーを使います。",
      ],
      // EN: <p>The GDC gives the unique solution <span class="chem">x = 1.1859...</span>, <span class="chem">y = 0.68262...</span>, <span class="chem">z = 1.5039...</span>, so <span class="chem">z = 1.50</span> (3 s.f.). Check in <span class="chem">Π_1</span>: <span class="chem">2.1(1.1859) - 0.8(0.6826) + 1.5(1.5039) = 4.20</span>.</p>
      solution: "<p>GDC によりただ 1 組の解 <span class=\"chem\">x = 1.1859...</span>、<span class=\"chem\">y = 0.68262...</span>、<span class=\"chem\">z = 1.5039...</span> が得られるので、<span class=\"chem\">z = 1.50</span>（有効数字 3 桁）です。<span class=\"chem\">Π_1</span> で確認：<span class=\"chem\">2.1(1.1859) - 0.8(0.6826) + 1.5(1.5039) = 4.20</span>。</p>",
    },

    // ── t1-5-q045 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q045": {
      // EN: A foundry melts together three alloys to make 800 kg of a new bronze. By mass, alloy A is 62% copper, 28% zinc and 10% tin; alloy B is 48% copper, 35% zinc and 17% tin; alloy C is 70% copper, 12% zinc and 18% tin. The new bronze must be 58% copper, 26% zinc and 16% tin. Find the mass of alloy C that is used.
      stem: "ある鋳造所が 3 種類の合金を溶かし合わせて、800 kg の新しい青銅をつくる。質量比で、合金 A は銅 62%、亜鉛 28%、スズ 10%；合金 B は銅 48%、亜鉛 35%、スズ 17%；合金 C は銅 70%、亜鉛 12%、スズ 18% である。新しい青銅は銅 58%、亜鉛 26%、スズ 16% でなければならない。使用する合金 C の質量を求めなさい (Find)。",
      hints: [
        // EN: Decode: there are three unknown masses <span class="chem">a, b, c</span> but four facts (total mass, copper, zinc, tin). Because the percentages in each alloy add up to 100%, one of these facts is redundant.
        "解読：未知の質量は <span class=\"chem\">a, b, c</span> の 3 つですが、事実は 4 つ（総質量、銅、亜鉛、スズ）あります。各合金の割合の合計は 100% なので、これらの事実のうち 1 つは余分です。",
        // EN: Use <span class="chem">a + b + c = 800</span>, copper <span class="chem">0.62a + 0.48b + 0.70c = 0.58 × 800</span> and zinc <span class="chem">0.28a + 0.35b + 0.12c = 0.26 × 800</span>.
        "<span class=\"chem\">a + b + c = 800</span>、銅 <span class=\"chem\">0.62a + 0.48b + 0.70c = 0.58 × 800</span>、亜鉛 <span class=\"chem\">0.28a + 0.35b + 0.12c = 0.26 × 800</span> を使います。",
        // EN: Solve with your GDC, then check that the tin equation is also satisfied.
        "GDC で解き、スズの式も満たされることを確認します。",
      ],
      // EN: <p><strong>Decode:</strong> the tin condition follows from the other three (tin = total − copper − zinc), so we have exactly three independent equations.</p><p><span class="chem">a + b + c = 800</span>, <span class="chem">0.62a + 0.48b + 0.70c = 464</span>, <span class="chem">0.28a + 0.35b + 0.12c = 208</span>. The GDC gives <span class="chem">a = 152.4</span>, <span class="chem">b = 381.0</span>, <span class="chem">c = 266.7</span>. Tin check: <span class="chem">0.10(152.4) + 0.17(381.0) + 0.18(266.7) = 128 = 0.16 × 800</span>. So <span class="chem">267</span> kg of alloy C (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>スズの条件は他の 3 つから導かれる（スズ = 合計 − 銅 − 亜鉛）ので、独立な方程式はちょうど 3 つです。</p><p><span class=\"chem\">a + b + c = 800</span>、<span class=\"chem\">0.62a + 0.48b + 0.70c = 464</span>、<span class=\"chem\">0.28a + 0.35b + 0.12c = 208</span>。GDC により <span class=\"chem\">a = 152.4</span>、<span class=\"chem\">b = 381.0</span>、<span class=\"chem\">c = 266.7</span>。スズの確認：<span class=\"chem\">0.10(152.4) + 0.17(381.0) + 0.18(266.7) = 128 = 0.16 × 800</span>。よって合金 C は <span class=\"chem\">267</span> kg（有効数字 3 桁）です。</p>",
    },

    // ── t1-5-q046 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q046": {
      // EN: In an electrical circuit, Kirchhoff’s laws give the following equations for the currents <span class="chem">I_1</span>, <span class="chem">I_2</span> and <span class="chem">I_3</span> (in amperes):<br><span class="chem">I_1 - I_2 - I_3 = 0</span><br><span class="chem">4.7I_1 + 2.2I_2 = 12</span><br><span class="chem">2.2I_2 - 3.3I_3 = 5</span>.<br>Find the value of <span class="chem">I_2</span>.
      stem: "ある電気回路で、キルヒホッフの法則により電流 <span class=\"chem\">I_1</span>、<span class=\"chem\">I_2</span>、<span class=\"chem\">I_3</span>（単位：アンペア）について次の方程式が得られる：<br><span class=\"chem\">I_1 - I_2 - I_3 = 0</span><br><span class=\"chem\">4.7I_1 + 2.2I_2 = 12</span><br><span class=\"chem\">2.2I_2 - 3.3I_3 = 5</span>。<br><span class=\"chem\">I_2</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Write each equation with all three unknowns, using a coefficient of 0 where a current is missing: for example <span class="chem">4.7I_1 + 2.2I_2 + 0I_3 = 12</span>.
        "各方程式を 3 つの未知数すべてを使って書き、含まれない電流の係数は 0 とします。例えば <span class=\"chem\">4.7I_1 + 2.2I_2 + 0I_3 = 12</span>。",
        // EN: Solve the <span class="chem">3 × 3</span> system with your GDC.
        "GDC で <span class=\"chem\">3 × 3</span> の連立方程式を解きます。",
      ],
      // EN: <p>The augmented matrix is <span class="chem">[1, -1, -1 | 0; 4.7, 2.2, 0 | 12; 0, 2.2, -3.3 | 5]</span>. The GDC gives <span class="chem">I_1 = 1.6611</span>, <span class="chem">I_2 = 1.9058</span>, <span class="chem">I_3 = -0.24464</span>. So <span class="chem">I_2 = 1.91</span> A (3 s.f.). (The negative <span class="chem">I_3</span> means that current flows the opposite way to the arrow chosen.)</p>
      solution: "<p>拡大係数行列は <span class=\"chem\">[1, -1, -1 | 0; 4.7, 2.2, 0 | 12; 0, 2.2, -3.3 | 5]</span> です。GDC により <span class=\"chem\">I_1 = 1.6611</span>、<span class=\"chem\">I_2 = 1.9058</span>、<span class=\"chem\">I_3 = -0.24464</span>。よって <span class=\"chem\">I_2 = 1.91</span> A（有効数字 3 桁）です。（<span class=\"chem\">I_3</span> が負であることは、その電流が選んだ矢印と逆向きに流れることを意味します。）</p>",
    },

    // ── t1-5-q047 · short · challenge · AHL · AHL 1.16 · 8 marks
    "t1-5-q047": {
      // EN: Consider the system<br><span class="chem">1.2x + 0.5y - z = 3.4</span><br><span class="chem">0.8x - 1.5y + 2z = 1.0</span><br><span class="chem">3.2x - 0.5y = 7.8</span>.<br>(a) A student enters the augmented matrix into a GDC and finds that rref gives a final row of zeros. Explain what this tells you about the solutions, and verify it by expressing the third equation in terms of the first two. [2 marks]<br>(b) Taking <span class="chem">z = lambda</span>, find <span class="chem">x</span> and <span class="chem">y</span> in terms of <span class="chem">lambda</span>. [4 marks]<br>(c) Find the solution of the system that also satisfies <span class="chem">x + y + z = 5</span>, giving each value correct to 3 significant figures. [2 marks]
      stem: "連立方程式<br><span class=\"chem\">1.2x + 0.5y - z = 3.4</span><br><span class=\"chem\">0.8x - 1.5y + 2z = 1.0</span><br><span class=\"chem\">3.2x - 0.5y = 7.8</span> を考える。<br>(a) ある生徒が拡大係数行列を GDC に入力したところ、rref の最後の行がすべて 0 になった。これが解について何を意味するかを説明し、第 3 式を最初の 2 式で表すことによってそれを確かめなさい (Verify)。 [2 marks]<br>(b) <span class=\"chem\">z = lambda</span> として、<span class=\"chem\">x</span> と <span class=\"chem\">y</span> を <span class=\"chem\">lambda</span> で表しなさい (Find)。 [4 marks]<br>(c) <span class=\"chem\">x + y + z = 5</span> も満たすこの連立方程式の解を求め (Find)、各値を有効数字 3 桁で答えなさい。 [2 marks]",
      hints: [
        // EN: Decode: a zero row in rref is the technology’s way of saying “one equation is a combination of the others”. That means a line of solutions (if consistent), not a unique point.
        "解読：rref のすべて 0 の行は、テクノロジーが「ある式は他の式の組み合わせである」と伝える方法です。つまり、ただ 1 点ではなく（整合的であれば）直線上の解をもちます。",
        // EN: Look for numbers <span class="chem">alpha, beta</span> with <span class="chem">alpha R_1 + beta R_2 = R_3</span>; start with the <span class="chem">z</span>-coefficients, <span class="chem">-alpha + 2beta = 0</span>.
        "<span class=\"chem\">alpha R_1 + beta R_2 = R_3</span> となる数 <span class=\"chem\">alpha, beta</span> を探します。まず <span class=\"chem\">z</span> の係数 <span class=\"chem\">-alpha + 2beta = 0</span> から始めましょう。",
        // EN: In (c), adding the equation <span class="chem">x + y + z = 5</span> to the first two gives a new system with a unique solution, which your GDC can solve directly.
        "(c) では、方程式 <span class=\"chem\">x + y + z = 5</span> を最初の 2 式に加えると、ただ 1 組の解をもつ新しい連立方程式になり、GDC で直接解けます。",
      ],
      // EN: <p><strong>Decode:</strong> a GDC row of zeros means infinitely many solutions; the parametric form describes the line, and an extra condition picks one point on it.</p><p>(a) <span class="chem">R_3 = 2R_1 + R_2</span>. (b) <span class="chem">3R_1 + R_2</span> (with <span class="chem">z = lambda</span>): <span class="chem">4.4x = 11.2 + lambda</span>, so <span class="chem">x = (56 + 5lambda)/22</span>; then <span class="chem">y = (3.4 + lambda - 1.2x)/0.5 = (38 + 80lambda)/55</span>. (c) <span class="chem">(56 + 5lambda)/22 + (38 + 80lambda)/55 + lambda = 5</span> gives <span class="chem">lambda = 0.6576</span>, so <span class="chem">(x, y, z) = (2.69, 1.65, 0.658)</span>.</p>
      solution: "<p><strong>解読：</strong>GDC のすべて 0 の行は無数の解を意味します。媒介変数表示がその直線を表し、追加の条件がその上の 1 点を選びます。</p><p>(a) <span class=\"chem\">R_3 = 2R_1 + R_2</span>。(b) <span class=\"chem\">3R_1 + R_2</span>（<span class=\"chem\">z = lambda</span> として）：<span class=\"chem\">4.4x = 11.2 + lambda</span> より <span class=\"chem\">x = (56 + 5lambda)/22</span>。すると <span class=\"chem\">y = (3.4 + lambda - 1.2x)/0.5 = (38 + 80lambda)/55</span>。(c) <span class=\"chem\">(56 + 5lambda)/22 + (38 + 80lambda)/55 + lambda = 5</span> から <span class=\"chem\">lambda = 0.6576</span> となり、<span class=\"chem\">(x, y, z) = (2.69, 1.65, 0.658)</span> です。</p>",
      // EN: <p>(a) A zero row <span class="chem">[0 0 0 | 0]</span> means one equation is redundant and the system is consistent, so there are infinitely many solutions (the planes meet in a line). Indeed <span class="chem">2R_1 + R_2 = R_3</span>: <span class="chem">2.4 + 0.8 = 3.2</span>, <span class="chem">1.0 - 1.5 = -0.5</span>, <span class="chem">-2 + 2 = 0</span>, <span class="chem">6.8 + 1.0 = 7.8</span>.<br>(b) From <span class="chem">1.2x + 0.5y = 3.4 + lambda</span> and <span class="chem">0.8x - 1.5y = 1.0 - 2lambda</span>: <span class="chem">x = (56 + 5lambda)/22 = 2.545... + 0.2273lambda</span> and <span class="chem">y = (38 + 80lambda)/55 = 0.6909... + 1.4545lambda</span>.<br>(c) <span class="chem">x + y + z = 5</span> gives <span class="chem">lambda = 194/295</span>, so <span class="chem">x = 2.69</span>, <span class="chem">y = 1.65</span>, <span class="chem">z = 0.658</span>.</p>
      answer: "<p>(a) すべて 0 の行 <span class=\"chem\">[0 0 0 | 0]</span> は、1 つの式が余分であり、連立方程式が整合的であることを意味する。よって無数の解をもつ（平面は 1 本の直線で交わる）。実際 <span class=\"chem\">2R_1 + R_2 = R_3</span>：<span class=\"chem\">2.4 + 0.8 = 3.2</span>、<span class=\"chem\">1.0 - 1.5 = -0.5</span>、<span class=\"chem\">-2 + 2 = 0</span>、<span class=\"chem\">6.8 + 1.0 = 7.8</span>。<br>(b) <span class=\"chem\">1.2x + 0.5y = 3.4 + lambda</span> と <span class=\"chem\">0.8x - 1.5y = 1.0 - 2lambda</span> から：<span class=\"chem\">x = (56 + 5lambda)/22 = 2.545... + 0.2273lambda</span>、<span class=\"chem\">y = (38 + 80lambda)/55 = 0.6909... + 1.4545lambda</span>。<br>(c) <span class=\"chem\">x + y + z = 5</span> より <span class=\"chem\">lambda = 194/295</span>。よって <span class=\"chem\">x = 2.69</span>、<span class=\"chem\">y = 1.65</span>、<span class=\"chem\">z = 0.658</span>。</p>",
      markscheme: [
        // EN: R1: (a) A zero row means the equations are dependent and consistent, so there are infinitely many solutions.
        "R1：(a) すべて 0 の行は、方程式が従属かつ整合的であることを意味するので、無数の解をもつ。",
        // EN: A1: (a) Shows R₃ = 2R₁ + R₂ (all four entries checked).
        "A1：(a) R₃ = 2R₁ + R₂ を示す（4 つの成分すべてを確認する）。",
        // EN: M1: (b) Rewrites the first two equations with z = λ as a 2 × 2 system in x and y.
        "M1：(b) z = λ として最初の 2 式を x と y についての 2 × 2 の連立方程式に書き直す。",
        // EN: M1: (b) Eliminates one variable (e.g. 3R₁ + R₂ gives 4.4x = 11.2 + λ).
        "M1：(b) 変数を 1 つ消去する（例：3R₁ + R₂ から 4.4x = 11.2 + λ）。",
        // EN: A1: (b) x = (56 + 5λ)/22 (or 2.55 + 0.227λ).
        "A1：(b) x = (56 + 5λ)/22（または 2.55 + 0.227λ）。",
        // EN: A1: (b) y = (38 + 80λ)/55 (or 0.691 + 1.45λ).
        "A1：(b) y = (38 + 80λ)/55（または 0.691 + 1.45λ）。",
        // EN: M1: (c) Substitutes into x + y + z = 5 (or solves the new 3 × 3 system with the GDC).
        "M1：(c) x + y + z = 5 に代入する（または新しい 3 × 3 の連立方程式を GDC で解く）。",
        // EN: A1: (c) x = 2.69, y = 1.65, z = 0.658.
        "A1：(c) x = 2.69、y = 1.65、z = 0.658。",
      ],
    },

    // ── t1-5-q048 · numeric · exam · AHL · AHL 1.16 · 6 marks
    "t1-5-q048": {
      // EN: The curve <span class="chem">y = ax^3 + bx^2 + cx + 2</span> passes through the points <span class="chem">(1, 3.4)</span>, <span class="chem">(2, 1.7)</span> and <span class="chem">(3, 5.9)</span>. Find the <span class="chem">x</span>-coordinate of the local minimum point of the curve.
      stem: "曲線 <span class=\"chem\">y = ax^3 + bx^2 + cx + 2</span> は点 <span class=\"chem\">(1, 3.4)</span>、<span class=\"chem\">(2, 1.7)</span>、<span class=\"chem\">(3, 5.9)</span> を通る。この曲線の極小点の <span class=\"chem\">x</span> 座標を求めなさい (Find)。",
      hints: [
        // EN: Substituting each point gives a linear equation in <span class="chem">a, b, c</span>. For example, <span class="chem">(1, 3.4)</span> gives <span class="chem">a + b + c + 2 = 3.4</span>.
        "各点を代入すると <span class=\"chem\">a, b, c</span> についての一次方程式が得られます。例えば <span class=\"chem\">(1, 3.4)</span> からは <span class=\"chem\">a + b + c + 2 = 3.4</span>。",
        // EN: Solve the three equations with your GDC, then graph the cubic (or solve <span class="chem">3ax^2 + 2bx + c = 0</span>) to find the local minimum.
        "3 つの方程式を GDC で解き、3 次関数のグラフを描いて（または <span class=\"chem\">3ax^2 + 2bx + c = 0</span> を解いて）極小値を求めます。",
      ],
      // EN: <p><span class="chem">a + b + c = 1.4</span>, <span class="chem">8a + 4b + 2c = -0.3</span>, <span class="chem">27a + 9b + 3c = 3.9</span>. The GDC gives <span class="chem">a = 1.5</span>, <span class="chem">b = -6.05</span>, <span class="chem">c = 5.95</span>. Then <span class="chem">dy/dx = 4.5x^2 - 12.1x + 5.95 = 0</span> gives <span class="chem">x = 0.648</span> (local maximum) and <span class="chem">x = 2.04</span>. Since <span class="chem">a &gt; 0</span>, the larger root is the local minimum: <span class="chem">x = 2.04</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">a + b + c = 1.4</span>、<span class=\"chem\">8a + 4b + 2c = -0.3</span>、<span class=\"chem\">27a + 9b + 3c = 3.9</span>。GDC により <span class=\"chem\">a = 1.5</span>、<span class=\"chem\">b = -6.05</span>、<span class=\"chem\">c = 5.95</span>。すると <span class=\"chem\">dy/dx = 4.5x^2 - 12.1x + 5.95 = 0</span> から <span class=\"chem\">x = 0.648</span>（極大）と <span class=\"chem\">x = 2.04</span>。<span class=\"chem\">a &gt; 0</span> なので大きいほうの解が極小です：<span class=\"chem\">x = 2.04</span>（有効数字 3 桁）。</p>",
    },

    // ── t1-5-q049 · numeric · exam · AHL · AHL 1.15 · 3 marks
    "t1-5-q049": {
      // EN: A student conjectures that <span class="chem">n^2 + n + 17</span> is a prime number for every positive integer <span class="chem">n</span>. Use your GDC to find the smallest positive integer <span class="chem">n</span> that is a counterexample to this conjecture.
      stem: "ある生徒は、すべての正の整数 <span class=\"chem\">n</span> に対して <span class=\"chem\">n^2 + n + 17</span> は素数であると予想している。GDC を用いて、この予想の反例となる最小の正の整数 <span class=\"chem\">n</span> を求めなさい (Find)。",
      hints: [
        // EN: Put <span class="chem">f(n) = n^2 + n + 17</span> into the table function of your GDC and look for the first value that is not prime.
        "GDC の表機能に <span class=\"chem\">f(n) = n^2 + n + 17</span> を入力し、素数でない最初の値を探します。",
        // EN: Watch for values that are perfect squares or multiples of 17. What happens when <span class="chem">n</span> is close to 17?
        "平方数や 17 の倍数になる値に注意しましょう。<span class=\"chem\">n</span> が 17 に近いとき何が起こりますか？",
      ],
      // EN: <p>The table gives <span class="chem">19, 23, 29, 37, ..., 257</span> for <span class="chem">n = 1, ..., 15</span>, all prime. For <span class="chem">n = 16</span>: <span class="chem">16^2 + 16 + 17 = 289 = 17^2</span>, which is not prime. So <span class="chem">n = 16</span> is the smallest counterexample. (Algebra explains it: <span class="chem">n^2 + n + 17 = 16 × 17 + 17 = 17^2</span> when <span class="chem">n = 16</span>.)</p>
      solution: "<p>表から <span class=\"chem\">n = 1, ..., 15</span> に対しては <span class=\"chem\">19, 23, 29, 37, ..., 257</span> となり、すべて素数です。<span class=\"chem\">n = 16</span> のとき <span class=\"chem\">16^2 + 16 + 17 = 289 = 17^2</span> となり、素数ではありません。よって <span class=\"chem\">n = 16</span> が最小の反例です。（代数的には、<span class=\"chem\">n = 16</span> のとき <span class=\"chem\">n^2 + n + 17 = 16 × 17 + 17 = 17^2</span> と説明できます。）</p>",
    },

    // ── t1-5-q050 · numeric · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q050": {
      // EN: A student claims: “Exponentials always beat powers, so <span class="chem">e^x &gt;= x^3</span> for every <span class="chem">x &gt; 0</span>.” The claim is false: the set of positive values of <span class="chem">x</span> for which it fails is an interval <span class="chem">a &lt; x &lt; b</span>. Find the value of <span class="chem">b</span>.
      stem: "ある生徒が「指数関数は常にべき関数に勝つので、すべての <span class=\"chem\">x &gt; 0</span> に対して <span class=\"chem\">e^x &gt;= x^3</span> である」と主張している。この主張は偽であり、それが成り立たない正の <span class=\"chem\">x</span> の値の集合は区間 <span class=\"chem\">a &lt; x &lt; b</span> である。<span class=\"chem\">b</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Decode: the counterexamples are the values of <span class="chem">x</span> where <span class="chem">x^3 &gt; e^x</span>. The endpoints <span class="chem">a</span> and <span class="chem">b</span> are where the two graphs cross, and you want the larger crossing.
        "解読：反例は <span class=\"chem\">x^3 &gt; e^x</span> となる <span class=\"chem\">x</span> の値です。端点 <span class=\"chem\">a</span> と <span class=\"chem\">b</span> は 2 つのグラフが交わる点であり、求めたいのは大きいほうの交点です。",
        // EN: Graph <span class="chem">y = e^x - x^3</span> for <span class="chem">0 &lt; x &lt; 6</span> and find its zeros.
        "<span class=\"chem\">0 &lt; x &lt; 6</span> で <span class=\"chem\">y = e^x - x^3</span> のグラフを描き、その零点を求めます。",
        // EN: One counterexample, such as <span class="chem">x = 3</span> (<span class="chem">e^3 = 20.1 &lt; 27</span>), already disproves the claim.
        "<span class=\"chem\">x = 3</span>（<span class=\"chem\">e^3 = 20.1 &lt; 27</span>）のような反例が 1 つあれば、それだけで主張は否定されます。",
      ],
      // EN: <p><strong>Decode:</strong> “the set where it fails” is the solution set of <span class="chem">x^3 &gt; e^x</span>, so find where the curves intersect.</p><p>The zeros of <span class="chem">e^x - x^3</span> are <span class="chem">x = 1.857...</span> and <span class="chem">x = 4.536...</span>, and <span class="chem">e^x - x^3 &lt; 0</span> between them (e.g. at <span class="chem">x = 3</span>). So <span class="chem">a = 1.86</span> and <span class="chem">b = 4.54</span> (3 s.f.). For <span class="chem">x &gt; b</span> the exponential is larger again.</p>
      solution: "<p><strong>解読：</strong>「成り立たない集合」とは <span class=\"chem\">x^3 &gt; e^x</span> の解の集合なので、曲線どうしの交点を求めます。</p><p><span class=\"chem\">e^x - x^3</span> の零点は <span class=\"chem\">x = 1.857...</span> と <span class=\"chem\">x = 4.536...</span> で、その間では <span class=\"chem\">e^x - x^3 &lt; 0</span> です（例えば <span class=\"chem\">x = 3</span>）。よって <span class=\"chem\">a = 1.86</span>、<span class=\"chem\">b = 4.54</span>（有効数字 3 桁）。<span class=\"chem\">x &gt; b</span> では再び指数関数のほうが大きくなります。</p>",
    },

    // ── t1-5-q051 · numeric · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q051": {
      // EN: A proof by induction is to be written for the statement <span class="chem">2^n &gt; n^5</span> for all integers <span class="chem">n &gt;= n_0</span>. Use your GDC to find the smallest positive integer <span class="chem">n_0</span> for which the statement is true for <strong>every</strong> integer <span class="chem">n &gt;= n_0</span>.
      stem: "<span class=\"chem\">n &gt;= n_0</span> を満たすすべての整数に対して <span class=\"chem\">2^n &gt; n^5</span> であるという命題について、帰納法による証明を書くことにする。GDC を用いて、<span class=\"chem\">n &gt;= n_0</span> を満たす<strong>すべての</strong>整数に対してこの命題が成り立つような最小の正の整数 <span class=\"chem\">n_0</span> を求めなさい (Find)。",
      hints: [
        // EN: Decode: you need the point after which the inequality never fails again. Being true for one small value is not enough: check <span class="chem">n = 1</span> and then <span class="chem">n = 2</span>.
        "解読：それ以降は不等式が二度と成り立たなくならない点が必要です。1 つの小さな値で成り立つだけでは不十分です：<span class=\"chem\">n = 1</span> と、次に <span class=\"chem\">n = 2</span> を確かめましょう。",
        // EN: Use the GDC table for <span class="chem">y = 2^x - x^5</span> with step 1 and look for the last integer where the value is negative.
        "<span class=\"chem\">y = 2^x - x^5</span> について刻み幅 1 で GDC の表を使い、値が負になる最後の整数を探します。",
        // EN: Once <span class="chem">n</span> is large, <span class="chem">2^{n+1}/2^n = 2</span> is bigger than <span class="chem">(n + 1)^5/n^5</span>, so the inequality stays true.
        "<span class=\"chem\">n</span> が大きくなると <span class=\"chem\">2^{n+1}/2^n = 2</span> は <span class=\"chem\">(n + 1)^5/n^5</span> より大きくなるので、不等式は成り立ち続けます。",
      ],
      // EN: <p><strong>Decode:</strong> “for every integer <span class="chem">n &gt;= n_0</span>” means you need the start of the final run of true values, not the first true value.</p><p><span class="chem">n = 1</span>: <span class="chem">2 &gt; 1</span> (true), but <span class="chem">n = 2</span>: <span class="chem">4 &lt; 32</span> (false), and the table shows it is false for every <span class="chem">n</span> from 2 to 22: <span class="chem">2^{22} = 4194304 &lt; 22^5 = 5153632</span>. For <span class="chem">n = 23</span>: <span class="chem">2^{23} = 8388608 &gt; 23^5 = 6436343</span>. For <span class="chem">n &gt;= 23</span>, <span class="chem">(1 + 1/n)^5 &lt; 2</span>, so the inequality stays true. Hence <span class="chem">n_0 = 23</span>.</p>
      solution: "<p><strong>解読：</strong>「<span class=\"chem\">n &gt;= n_0</span> を満たすすべての整数に対して」とは、最初に成り立つ値ではなく、最後に続く成り立つ値の並びの始まりが必要だということです。</p><p><span class=\"chem\">n = 1</span>：<span class=\"chem\">2 &gt; 1</span>（真）ですが、<span class=\"chem\">n = 2</span>：<span class=\"chem\">4 &lt; 32</span>（偽）であり、表から 2 から 22 までのすべての <span class=\"chem\">n</span> で偽です：<span class=\"chem\">2^{22} = 4194304 &lt; 22^5 = 5153632</span>。<span class=\"chem\">n = 23</span> のとき：<span class=\"chem\">2^{23} = 8388608 &gt; 23^5 = 6436343</span>。<span class=\"chem\">n &gt;= 23</span> では <span class=\"chem\">(1 + 1/n)^5 &lt; 2</span> なので、不等式は成り立ち続けます。したがって <span class=\"chem\">n_0 = 23</span> です。</p>",
    },

    // ── t1-5-q052 · short · exam · AHL · AHL 1.15 · 9 marks
    "t1-5-q052": {
      // EN: Let <span class="chem">S_n = Sigma_{r=1}^n r / 2^r</span>.<br>(a) Prove by mathematical induction that <span class="chem">S_n = 2 - (n + 2)/2^n</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [7 marks]<br>(b) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 1.999</span>. [2 marks]
      stem: "<span class=\"chem\">S_n = Sigma_{r=1}^n r / 2^r</span> とする。<br>(a) すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">S_n = 2 - (n + 2)/2^n</span> が成り立つことを、数学的帰納法によって証明しなさい (Prove)。 [7 marks]<br>(b) <span class=\"chem\">S_n &gt; 1.999</span> となる最小の <span class=\"chem\">n</span> の値を求めなさい (Find)。 [2 marks]",
      hints: [
        // EN: In the step, the <span class="chem">(k + 1)</span>-th term is <span class="chem">(k + 1)/2^{k+1}</span>. Write <span class="chem">(k + 2)/2^k</span> as <span class="chem">2(k + 2)/2^{k+1}</span>.
        "帰納段階では、第 <span class=\"chem\">(k + 1)</span> 項は <span class=\"chem\">(k + 1)/2^{k+1}</span> です。<span class=\"chem\">(k + 2)/2^k</span> を <span class=\"chem\">2(k + 2)/2^{k+1}</span> と書き直します。",
        // EN: In (b) the inequality cannot be rearranged to make <span class="chem">n</span> the subject, so use the table function of your GDC.
        "(b) の不等式は <span class=\"chem\">n</span> について解く形に変形できないので、GDC の表機能を使います。",
      ],
      // EN: <p>(a) <span class="chem">S_{k+1} = 2 - (2k + 4)/2^{k+1} + (k + 1)/2^{k+1} = 2 - (k + 3)/2^{k+1}</span>, which is the formula with <span class="chem">n = k + 1</span>.<br>(b) <span class="chem">S_{13} = 1.99817</span> and <span class="chem">S_{14} = 1.99902</span>, so the smallest value is <span class="chem">n = 14</span>.</p>
      solution: "<p>(a) <span class=\"chem\">S_{k+1} = 2 - (2k + 4)/2^{k+1} + (k + 1)/2^{k+1} = 2 - (k + 3)/2^{k+1}</span> であり、これは <span class=\"chem\">n = k + 1</span> のときの公式です。<br>(b) <span class=\"chem\">S_{13} = 1.99817</span>、<span class=\"chem\">S_{14} = 1.99902</span> なので、最小の値は <span class=\"chem\">n = 14</span> です。</p>",
      // EN: <p>(a) <strong>Base case:</strong> <span class="chem">n = 1</span>: <span class="chem">S_1 = 1/2</span> and <span class="chem">2 - 3/2 = 1/2</span>, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">S_k = 2 - (k + 2)/2^k</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">S_{k+1} = 2 - (k + 2)/2^k + (k + 1)/2^{k+1} = 2 - (2(k + 2) - (k + 1))/2^{k+1} = 2 - (k + 3)/2^{k+1} = 2 - ((k + 1) + 2)/2^{k+1}</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by mathematical induction the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.<br>(b) We need <span class="chem">(n + 2)/2^n &lt; 0.001</span>. The GDC table gives <span class="chem">15/2^{13} = 0.00183</span> and <span class="chem">16/2^{14} = 0.000977</span>, so <span class="chem">n = 14</span>.</p>
      answer: "<p>(a) <strong>初期条件：</strong> <span class=\"chem\">n = 1</span>：<span class=\"chem\">S_1 = 1/2</span>、<span class=\"chem\">2 - 3/2 = 1/2</span> であるから、<span class=\"chem\">P(1)</span> は成り立つ。<br><strong>帰納法の仮定：</strong> ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">S_k = 2 - (k + 2)/2^k</span> が成り立つと仮定する。<br><strong>帰納段階：</strong> <span class=\"chem\">S_{k+1} = 2 - (k + 2)/2^k + (k + 1)/2^{k+1} = 2 - (2(k + 2) - (k + 1))/2^{k+1} = 2 - (k + 3)/2^{k+1} = 2 - ((k + 1) + 2)/2^{k+1}</span>。<br><strong>結論：</strong> <span class=\"chem\">P(1)</span> が成り立ち、<span class=\"chem\">P(k)</span> が成り立てば <span class=\"chem\">P(k + 1)</span> も成り立つから、数学的帰納法によりすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して公式が成り立つ。<br>(b) <span class=\"chem\">(n + 2)/2^n &lt; 0.001</span> となればよい。GDC の表から <span class=\"chem\">15/2^{13} = 0.00183</span>、<span class=\"chem\">16/2^{14} = 0.000977</span> であるから、<span class=\"chem\">n = 14</span>。</p>",
      markscheme: [
        // EN: A1: (a) n = 1: S₁ = 1/2 and 2 − 3/2 = 1/2, so P(1) is true.
        "A1：(a) n = 1：S₁ = 1/2、2 − 3/2 = 1/2 なので、P(1) は成り立つ。",
        // EN: M1: (a) Assumes P(k) true for some k ∈ ℤ⁺.
        "M1：(a) ある k ∈ ℤ⁺ に対して P(k) が成り立つと仮定する。",
        // EN: M1: (a) Adds the (k + 1)-th term: S<sub>k+1</sub> = 2 − (k + 2)/2<sup>k</sup> + (k + 1)/2<sup>k+1</sup>.
        "M1：(a) 第 (k + 1) 項を加える：S<sub>k+1</sub> = 2 − (k + 2)/2<sup>k</sup> + (k + 1)/2<sup>k+1</sup>。",
        // EN: M1: (a) Uses the common denominator 2<sup>k+1</sup>.
        "M1：(a) 共通の分母 2<sup>k+1</sup> を用いる。",
        // EN: A1: (a) Obtains 2 − (2k + 4 − k − 1)/2<sup>k+1</sup>.
        "A1：(a) 2 − (2k + 4 − k − 1)/2<sup>k+1</sup> を得る。",
        // EN: A1: (a) Obtains 2 − (k + 3)/2<sup>k+1</sup> = 2 − ((k + 1) + 2)/2<sup>k+1</sup>.
        "A1：(a) 2 − (k + 3)/2<sup>k+1</sup> = 2 − ((k + 1) + 2)/2<sup>k+1</sup> を得る。",
        // EN: R1: (a) Induction conclusion sentence (only if the M marks above are earned).
        "R1：(a) 数学的帰納法の結びの文（上の M 点を獲得している場合のみ）。",
        // EN: M1: (b) Sets up (n + 2)/2<sup>n</sup> < 0.001 (or 2 − (n + 2)/2<sup>n</sup> > 1.999) and uses a table or graph.
        "M1：(b) (n + 2)/2<sup>n</sup> < 0.001（または 2 − (n + 2)/2<sup>n</sup> > 1.999）を立て、表またはグラフを用いる。",
        // EN: A1: (b) n = 14.
        "A1：(b) n = 14。",
      ],
    },

    // ── t1-5-q053 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q053": {
      // EN: A beekeeper starts season 1 with 100 hives. Each season the number of hives grows by 50%, after which 20 hives are sold. The number of hives is modelled by <span class="chem">u_1 = 100</span> and <span class="chem">u_{n+1} = 1.5u_n - 20</span>, where <span class="chem">u_n</span> is the modelled number of hives at the start of season <span class="chem">n</span>. It can be proved by induction that <span class="chem">u_n = 40 + 60(1.5)^{n-1}</span>. Find the first season in which the beekeeper starts with more than 10 000 hives.
      stem: "ある養蜂家は第 1 シーズンを 100 箱の巣箱で始める。各シーズンに巣箱の数は 50% 増え、その後 20 箱が売られる。巣箱の数は <span class=\"chem\">u_1 = 100</span>、<span class=\"chem\">u_{n+1} = 1.5u_n - 20</span> でモデル化される。ここで <span class=\"chem\">u_n</span> は第 <span class=\"chem\">n</span> シーズンの開始時の巣箱の数のモデル値である。<span class=\"chem\">u_n = 40 + 60(1.5)^{n-1}</span> であることが帰納法で証明できる。養蜂家が 10 000 箱より多い巣箱で始める最初のシーズンを求めなさい (Find)。",
      hints: [
        // EN: Decode: you want the smallest positive integer <span class="chem">n</span> with <span class="chem">u_n &gt; 10000</span>. The closed form (proved by induction) turns this into an exponential inequality.
        "解読：<span class=\"chem\">u_n &gt; 10000</span> を満たす最小の正の整数 <span class=\"chem\">n</span> を求めます。（帰納法で証明された）一般項の式により、これは指数の不等式になります。",
        // EN: Solve <span class="chem">40 + 60(1.5)^{n-1} &gt; 10000</span> with your GDC (graph or table), or rearrange to <span class="chem">1.5^{n-1} &gt; 166</span> and use logarithms.
        "GDC（グラフまたは表）で <span class=\"chem\">40 + 60(1.5)^{n-1} &gt; 10000</span> を解くか、<span class=\"chem\">1.5^{n-1} &gt; 166</span> に変形して対数を使います。",
        // EN: The answer must be a whole number of seasons: check the integers on either side of the boundary.
        "答えはシーズンの数なので整数でなければなりません：境界の両側の整数を確かめましょう。",
      ],
      // EN: <p><strong>Decode:</strong> a recurrence plus a threshold: use the closed form, then find the least integer <span class="chem">n</span>.</p><p><span class="chem">60(1.5)^{n-1} &gt; 9960</span> gives <span class="chem">1.5^{n-1} &gt; 166</span>, so <span class="chem">n - 1 &gt; ln 166 / ln 1.5 = 12.6</span>. Table check: <span class="chem">u_{13} = 7824.8</span> and <span class="chem">u_{14} = 11717</span>. So the first such season is season <span class="chem">14</span>.</p>
      solution: "<p><strong>解読：</strong>漸化式としきい値の問題です：一般項の式を使い、最小の整数 <span class=\"chem\">n</span> を求めます。</p><p><span class=\"chem\">60(1.5)^{n-1} &gt; 9960</span> より <span class=\"chem\">1.5^{n-1} &gt; 166</span>、したがって <span class=\"chem\">n - 1 &gt; ln 166 / ln 1.5 = 12.6</span>。表で確認：<span class=\"chem\">u_{13} = 7824.8</span>、<span class=\"chem\">u_{14} = 11717</span>。よって最初のシーズンは第 <span class=\"chem\">14</span> シーズンです。</p>",
    },

    // ── t1-5-q054 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q054": {
      // EN: Let <span class="chem">f(x) = x^2 e^x</span>. It can be proved by induction that <span class="chem">f^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Find the minimum value of the function <span class="chem">g(x) = f^{(4)}(x)</span>, <span class="chem">x \in \mathbb{R}</span>.
      stem: "<span class=\"chem\">f(x) = x^2 e^x</span> とする。すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">f^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span> であることが帰納法で証明できる。関数 <span class=\"chem\">g(x) = f^{(4)}(x)</span>、<span class=\"chem\">x \\in \\mathbb{R}</span> の最小値を求めなさい (Find)。",
      hints: [
        // EN: Decode: <span class="chem">g = f^{(4)}</span>, so its derivative is <span class="chem">g'(x) = f^{(5)}(x)</span>, which the given formula provides. You need the stationary point of <span class="chem">g</span> that gives the least value.
        "解読：<span class=\"chem\">g = f^{(4)}</span> なので、その導関数は <span class=\"chem\">g'(x) = f^{(5)}(x)</span> であり、与えられた公式から得られます。最小の値を与える <span class=\"chem\">g</span> の停留点が必要です。",
        // EN: From the formula with <span class="chem">n = 4</span>: <span class="chem">g(x) = (x^2 + 8x + 12)e^x</span>; with <span class="chem">n = 5</span>: <span class="chem">g'(x) = (x^2 + 10x + 20)e^x</span>.
        "公式で <span class=\"chem\">n = 4</span> とすると <span class=\"chem\">g(x) = (x^2 + 8x + 12)e^x</span>、<span class=\"chem\">n = 5</span> とすると <span class=\"chem\">g'(x) = (x^2 + 10x + 20)e^x</span>。",
        // EN: Graph <span class="chem">g</span> on your GDC (e.g. for <span class="chem">-10 &lt;= x &lt;= 1</span>) and use the minimum feature, or solve <span class="chem">x^2 + 10x + 20 = 0</span>.
        "GDC で <span class=\"chem\">g</span> のグラフを描き（例えば <span class=\"chem\">-10 &lt;= x &lt;= 1</span>）、最小値機能を使うか、<span class=\"chem\">x^2 + 10x + 20 = 0</span> を解きます。",
      ],
      // EN: <p><strong>Decode:</strong> the induction formula gives both <span class="chem">g = f^{(4)}</span> and <span class="chem">g' = f^{(5)}</span>.</p><p><span class="chem">g'(x) = (x^2 + 10x + 20)e^x = 0</span> gives <span class="chem">x = -5 +- sqrt(5)</span>. At <span class="chem">x = -5 + sqrt(5) = -2.764</span>, <span class="chem">g = -0.156</span>; at <span class="chem">x = -5 - sqrt(5)</span>, <span class="chem">g = 0.00466</span> (a local maximum). As <span class="chem">x -&gt; −∞</span>, <span class="chem">g -&gt; 0</span>, so the minimum value is <span class="chem">-0.156</span> (3 s.f.).</p>
      solution: "<p><strong>解読：</strong>帰納法の公式から <span class=\"chem\">g = f^{(4)}</span> と <span class=\"chem\">g' = f^{(5)}</span> の両方が得られます。</p><p><span class=\"chem\">g'(x) = (x^2 + 10x + 20)e^x = 0</span> より <span class=\"chem\">x = -5 +- sqrt(5)</span>。<span class=\"chem\">x = -5 + sqrt(5) = -2.764</span> では <span class=\"chem\">g = -0.156</span>、<span class=\"chem\">x = -5 - sqrt(5)</span> では <span class=\"chem\">g = 0.00466</span>（極大値）。<span class=\"chem\">x -&gt; −∞</span> のとき <span class=\"chem\">g -&gt; 0</span> なので、最小値は <span class=\"chem\">-0.156</span>（有効数字 3 桁）です。</p>",
    },

    // ── t1-5-q055 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q055": {
      // EN: A school canteen sells three meals, A, B and C, each at a fixed price. The sales on three days were:<br><span class="mono">Monday: 112 A, 85 B, 64 C, takings $1777.00</span><br><span class="mono">Tuesday: 98 A, 102 B, 71 C, takings $1848.55</span><br><span class="mono">Wednesday: 120 A, 76 B, 90 C, takings $1919.90</span><br>Find the price of meal C. Give your answer correct to 2 decimal places.
      stem: "学校の食堂は 3 種類の定食 A, B, C をそれぞれ決まった価格で販売している。3 日間の売上は次のとおりであった：<br><span class=\"mono\">Monday: 112 A, 85 B, 64 C, takings $1777.00</span><br><span class=\"mono\">Tuesday: 98 A, 102 B, 71 C, takings $1848.55</span><br><span class=\"mono\">Wednesday: 120 A, 76 B, 90 C, takings $1919.90</span><br>定食 C の価格を求めなさい (Find)。答えは小数第 2 位まで求めなさい。",
      hints: [
        // EN: Let the prices be <span class="chem">a, b, c</span> dollars. Each day gives one equation, for example <span class="chem">112a + 85b + 64c = 1777</span>.
        "価格を <span class=\"chem\">a, b, c</span> ドルとします。各日から方程式が 1 つずつ得られます。例えば <span class=\"chem\">112a + 85b + 64c = 1777</span>。",
        // EN: Solve the system with your GDC.
        "GDC で連立方程式を解きます。",
      ],
      // EN: <p><span class="chem">112a + 85b + 64c = 1777</span>, <span class="chem">98a + 102b + 71c = 1848.55</span>, <span class="chem">120a + 76b + 90c = 1919.90</span>. The GDC gives <span class="chem">a = 6.85</span>, <span class="chem">b = 7.40</span>, <span class="chem">c = 5.95</span>. Check Monday: <span class="chem">767.20 + 629.00 + 380.80 = 1777.00</span>. Meal C costs <span class="chem">$5.95</span>.</p>
      solution: "<p><span class=\"chem\">112a + 85b + 64c = 1777</span>、<span class=\"chem\">98a + 102b + 71c = 1848.55</span>、<span class=\"chem\">120a + 76b + 90c = 1919.90</span>。GDC により <span class=\"chem\">a = 6.85</span>、<span class=\"chem\">b = 7.40</span>、<span class=\"chem\">c = 5.95</span>。月曜日で確認：<span class=\"chem\">767.20 + 629.00 + 380.80 = 1777.00</span>。定食 C の価格は <span class=\"chem\">$5.95</span> です。</p>",
    },

    // ── t1-5-q056 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q056": {
      // EN: Consider the system<br><span class="chem">0.4x + 1.2y - 0.7z = 2.6</span><br><span class="chem">1.5x - 0.3y + 0.9z = 1.8</span><br><span class="chem">1.58x + 1.86y + kz = m</span>, where <span class="chem">k, m \in \mathbb{R}</span>.<br>The system has infinitely many solutions. Find the value of <span class="chem">m</span>.
      stem: "連立方程式<br><span class=\"chem\">0.4x + 1.2y - 0.7z = 2.6</span><br><span class=\"chem\">1.5x - 0.3y + 0.9z = 1.8</span><br><span class=\"chem\">1.58x + 1.86y + kz = m</span>（ただし <span class=\"chem\">k, m \\in \\mathbb{R}</span>）を考える。<br>この連立方程式は無数の解をもつ。<span class=\"chem\">m</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Decode: the first two planes are not parallel, so they meet in a line. Infinitely many solutions means the third equation must be a combination <span class="chem">alpha R_1 + beta R_2</span> of the first two (all four entries).
        "解読：最初の 2 平面は平行ではないので 1 本の直線で交わります。無数の解をもつとは、第 3 式が最初の 2 式の組み合わせ <span class=\"chem\">alpha R_1 + beta R_2</span>（4 つの成分すべて）でなければならないということです。",
        // EN: Match the <span class="chem">x</span>- and <span class="chem">y</span>-coefficients: <span class="chem">0.4alpha + 1.5beta = 1.58</span> and <span class="chem">1.2alpha - 0.3beta = 1.86</span>. Solve this <span class="chem">2 × 2</span> system (GDC).
        "<span class=\"chem\">x</span> と <span class=\"chem\">y</span> の係数を一致させます：<span class=\"chem\">0.4alpha + 1.5beta = 1.58</span>、<span class=\"chem\">1.2alpha - 0.3beta = 1.86</span>。この <span class=\"chem\">2 × 2</span> の連立方程式を解きます（GDC）。",
        // EN: Then <span class="chem">k = -0.7alpha + 0.9beta</span> and <span class="chem">m = 2.6alpha + 1.8beta</span>. Check with rref that the system really has a zero row.
        "すると <span class=\"chem\">k = -0.7alpha + 0.9beta</span>、<span class=\"chem\">m = 2.6alpha + 1.8beta</span>。rref で連立方程式に本当にすべて 0 の行が現れることを確かめましょう。",
      ],
      // EN: <p><strong>Decode:</strong> “infinitely many solutions” for three planes through a common line means the third equation is a linear combination of the other two, including the constant term.</p><p><span class="chem">0.4alpha + 1.5beta = 1.58</span>, <span class="chem">1.2alpha - 0.3beta = 1.86</span> give <span class="chem">alpha = 1.7</span>, <span class="chem">beta = 0.6</span>. Then <span class="chem">k = -1.19 + 0.54 = -0.65</span> and <span class="chem">m = 4.42 + 1.08 = 5.5</span>. With <span class="chem">k = -0.65</span> and <span class="chem">m = 5.5</span>, rref on the GDC gives a row of zeros, confirming infinitely many solutions.</p>
      solution: "<p><strong>解読：</strong>共通の直線を通る 3 平面に対する「無数の解」とは、第 3 式が定数項も含めて他の 2 式の一次結合であることを意味します。</p><p><span class=\"chem\">0.4alpha + 1.5beta = 1.58</span>、<span class=\"chem\">1.2alpha - 0.3beta = 1.86</span> より <span class=\"chem\">alpha = 1.7</span>、<span class=\"chem\">beta = 0.6</span>。すると <span class=\"chem\">k = -1.19 + 0.54 = -0.65</span>、<span class=\"chem\">m = 4.42 + 1.08 = 5.5</span>。<span class=\"chem\">k = -0.65</span>、<span class=\"chem\">m = 5.5</span> のとき GDC の rref ではすべて 0 の行が現れ、無数の解をもつことが確かめられます。</p>",
    },

    // ── t1-5-q057 · short · challenge · AHL · AHL 1.15, 1.16 · 18 marks
    "t1-5-q057": {
      // EN: <strong>Investigation: finding a sum formula with a linear system.</strong> Let <span class="chem">S(n) = Sigma_{r=1}^n r(r + 2)</span>.<br>(a) Write down the values of <span class="chem">S(1)</span>, <span class="chem">S(2)</span> and <span class="chem">S(3)</span>. [2 marks]<br>It is suggested that <span class="chem">S(n) = an^3 + bn^2 + cn</span> for constants <span class="chem">a, b, c</span>.<br>(b) Use your answers to (a) to write down a system of three linear equations in <span class="chem">a, b, c</span>, and solve it. [4 marks]<br>(c) Verify that your formula gives the correct value of <span class="chem">S(4)</span>. [2 marks]<br>(d) Show that your formula can be written as <span class="chem">S(n) = n(n + 1)(2n + 7)/6</span>. [2 marks]<br>(e) Prove by mathematical induction that <span class="chem">S(n) = n(n + 1)(2n + 7)/6</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]<br>(f) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S(n) &gt; 10^6</span>. [2 marks]
      stem: "<strong>探究：連立一次方程式を使って和の公式を求める。</strong> <span class=\"chem\">S(n) = Sigma_{r=1}^n r(r + 2)</span> とする。<br>(a) <span class=\"chem\">S(1)</span>、<span class=\"chem\">S(2)</span>、<span class=\"chem\">S(3)</span> の値を書きなさい (Write down)。 [2 marks]<br>定数 <span class=\"chem\">a, b, c</span> を用いて <span class=\"chem\">S(n) = an^3 + bn^2 + cn</span> と表せると推測されている。<br>(b) (a) の答えを用いて <span class=\"chem\">a, b, c</span> についての 3 つの一次方程式からなる連立方程式を書き、それを解きなさい。 [4 marks]<br>(c) あなたの公式が <span class=\"chem\">S(4)</span> の正しい値を与えることを確かめなさい (Verify)。 [2 marks]<br>(d) あなたの公式が <span class=\"chem\">S(n) = n(n + 1)(2n + 7)/6</span> と書けることを示しなさい (Show that)。 [2 marks]<br>(e) すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">S(n) = n(n + 1)(2n + 7)/6</span> が成り立つことを、数学的帰納法によって証明しなさい (Prove)。 [6 marks]<br>(f) <span class=\"chem\">S(n) &gt; 10^6</span> となる最小の <span class=\"chem\">n</span> の値を求めなさい (Find)。 [2 marks]",
      hints: [
        // EN: Decode: this is the standard Paper 3 route: compute small cases, fit a model with a linear system, test it on a new case, then prove it in general by induction and apply it.
        "解読：これは Paper 3 の典型的な流れです：小さな場合を計算し、連立一次方程式でモデルを当てはめ、新しい場合で検証し、帰納法で一般に証明して応用します。",
        // EN: In (b) each value of <span class="chem">n</span> gives one equation: for <span class="chem">n = 2</span>, <span class="chem">8a + 4b + 2c = 11</span>.
        "(b) では <span class=\"chem\">n</span> の各値から方程式が 1 つ得られます：<span class=\"chem\">n = 2</span> のとき <span class=\"chem\">8a + 4b + 2c = 11</span>。",
        // EN: In (e) the <span class="chem">(k + 1)</span>-th term is <span class="chem">(k + 1)(k + 3)</span>. Take out the common factor <span class="chem">(k + 1)/6</span> before expanding anything.
        "(e) では第 <span class=\"chem\">(k + 1)</span> 項は <span class=\"chem\">(k + 1)(k + 3)</span> です。何かを展開する前に、共通因数 <span class=\"chem\">(k + 1)/6</span> をくくり出しましょう。",
        // EN: In (f), solve <span class="chem">n(n + 1)(2n + 7)/6 = 10^6</span> on your GDC and round up to the next integer.
        "(f) では GDC で <span class=\"chem\">n(n + 1)(2n + 7)/6 = 10^6</span> を解き、次の整数に切り上げます。",
      ],
      // EN: <p><strong>Decode:</strong> parts (a)–(c) generate and test a conjecture (a linear system in <span class="chem">a, b, c</span>), (d)–(e) turn it into a proved theorem, and (f) uses it.</p><p>(b) The GDC (or elimination) gives <span class="chem">a = 1/3, b = 3/2, c = 7/6</span>. (e) The step <span class="chem">k(2k + 7) + 6(k + 3) = 2k^2 + 13k + 18 = (k + 2)(2k + 9)</span> is the heart of the induction. (f) The equation <span class="chem">S(n) = 10^6</span> has root <span class="chem">n = 142.7</span>, so the smallest integer is <span class="chem">143</span>.</p>
      solution: "<p><strong>解読：</strong>(a)–(c) で予想（<span class=\"chem\">a, b, c</span> についての連立一次方程式）をつくって検証し、(d)–(e) でそれを証明された定理にし、(f) でそれを使います。</p><p>(b) GDC（または消去法）により <span class=\"chem\">a = 1/3, b = 3/2, c = 7/6</span>。(e) 段階 <span class=\"chem\">k(2k + 7) + 6(k + 3) = 2k^2 + 13k + 18 = (k + 2)(2k + 9)</span> が帰納法の核心です。(f) 方程式 <span class=\"chem\">S(n) = 10^6</span> の解は <span class=\"chem\">n = 142.7</span> なので、最小の整数は <span class=\"chem\">143</span> です。</p>",
      // EN: <p>(a) <span class="chem">S(1) = 3</span>, <span class="chem">S(2) = 3 + 8 = 11</span>, <span class="chem">S(3) = 11 + 15 = 26</span>.<br>(b) <span class="chem">a + b + c = 3</span>, <span class="chem">8a + 4b + 2c = 11</span>, <span class="chem">27a + 9b + 3c = 26</span>, giving <span class="chem">a = 1/3</span>, <span class="chem">b = 3/2</span>, <span class="chem">c = 7/6</span>.<br>(c) Directly, <span class="chem">S(4) = 26 + 4 × 6 = 50</span>; the formula gives <span class="chem">64/3 + 24 + 14/3 = 50</span>.<br>(d) <span class="chem">S(n) = (2n^3 + 9n^2 + 7n)/6 = n(2n^2 + 9n + 7)/6 = n(n + 1)(2n + 7)/6</span>.<br>(e) <span class="chem">n = 1</span>: <span class="chem">1 × 3 = 3</span> and <span class="chem">(1 × 2 × 9)/6 = 3</span>. Assume <span class="chem">S(k) = k(k + 1)(2k + 7)/6</span> for some <span class="chem">k \in \mathbb{Z}^+</span>. Then <span class="chem">S(k + 1) = k(k + 1)(2k + 7)/6 + (k + 1)(k + 3) = (k + 1)(2k^2 + 7k + 6k + 18)/6 = (k + 1)(2k^2 + 13k + 18)/6 = (k + 1)(k + 2)(2k + 9)/6</span>, which is the formula for <span class="chem">n = k + 1</span> because <span class="chem">2(k + 1) + 7 = 2k + 9</span>. Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span> by mathematical induction.<br>(f) <span class="chem">S(142) = 984 841</span> and <span class="chem">S(143) = 1 005 576</span>, so <span class="chem">n = 143</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S(1) = 3</span>、<span class=\"chem\">S(2) = 3 + 8 = 11</span>、<span class=\"chem\">S(3) = 11 + 15 = 26</span>。<br>(b) <span class=\"chem\">a + b + c = 3</span>、<span class=\"chem\">8a + 4b + 2c = 11</span>、<span class=\"chem\">27a + 9b + 3c = 26</span> より、<span class=\"chem\">a = 1/3</span>、<span class=\"chem\">b = 3/2</span>、<span class=\"chem\">c = 7/6</span>。<br>(c) 直接計算すると <span class=\"chem\">S(4) = 26 + 4 × 6 = 50</span>。公式は <span class=\"chem\">64/3 + 24 + 14/3 = 50</span> を与える。<br>(d) <span class=\"chem\">S(n) = (2n^3 + 9n^2 + 7n)/6 = n(2n^2 + 9n + 7)/6 = n(n + 1)(2n + 7)/6</span>。<br>(e) <span class=\"chem\">n = 1</span>：<span class=\"chem\">1 × 3 = 3</span>、<span class=\"chem\">(1 × 2 × 9)/6 = 3</span>。ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">S(k) = k(k + 1)(2k + 7)/6</span> が成り立つと仮定する。このとき <span class=\"chem\">S(k + 1) = k(k + 1)(2k + 7)/6 + (k + 1)(k + 3) = (k + 1)(2k^2 + 7k + 6k + 18)/6 = (k + 1)(2k^2 + 13k + 18)/6 = (k + 1)(k + 2)(2k + 9)/6</span>。<span class=\"chem\">2(k + 1) + 7 = 2k + 9</span> であるから、これは <span class=\"chem\">n = k + 1</span> のときの公式である。<span class=\"chem\">P(1)</span> が成り立ち、<span class=\"chem\">P(k) =&gt; P(k + 1)</span> であるから、数学的帰納法によりすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して結果が成り立つ。<br>(f) <span class=\"chem\">S(142) = 984 841</span>、<span class=\"chem\">S(143) = 1 005 576</span> であるから、<span class=\"chem\">n = 143</span>。</p>",
      markscheme: [
        // EN: A1: (a) S(1) = 3 and S(2) = 11.
        "A1：(a) S(1) = 3 と S(2) = 11。",
        // EN: A1: (a) S(3) = 26.
        "A1：(a) S(3) = 26。",
        // EN: M1: (b) Substitutes n = 1, 2, 3 into an³ + bn² + cn.
        "M1：(b) an³ + bn² + cn に n = 1, 2, 3 を代入する。",
        // EN: A1: (b) a + b + c = 3, 8a + 4b + 2c = 11, 27a + 9b + 3c = 26.
        "A1：(b) a + b + c = 3、8a + 4b + 2c = 11、27a + 9b + 3c = 26。",
        // EN: M1: (b) Solves the system (GDC or elimination).
        "M1：(b) 連立方程式を解く（GDC または消去法）。",
        // EN: A1: (b) a = 1/3, b = 3/2, c = 7/6.
        "A1：(b) a = 1/3、b = 3/2、c = 7/6。",
        // EN: A1: (c) Finds S(4) = 50 directly from the sum.
        "A1：(c) 和から直接 S(4) = 50 を求める。",
        // EN: A1: (c) Shows the formula gives 64/3 + 24 + 14/3 = 50.
        "A1：(c) 公式が 64/3 + 24 + 14/3 = 50 を与えることを示す。",
        // EN: M1: (d) Writes S(n) = (2n³ + 9n² + 7n)/6 = n(2n² + 9n + 7)/6.
        "M1：(d) S(n) = (2n³ + 9n² + 7n)/6 = n(2n² + 9n + 7)/6 と書く。",
        // EN: A1: (d) Factorises 2n² + 9n + 7 = (n + 1)(2n + 7), giving the result AG (no mark for the given line).
        "A1：(d) 2n² + 9n + 7 = (n + 1)(2n + 7) と因数分解し、結果を導く AG（与えられた行自体には点を与えない）。",
        // EN: A1: (e) Base case n = 1: both sides equal 3, so P(1) is true.
        "A1：(e) 初期条件 n = 1：両辺とも 3 に等しいので、P(1) は成り立つ。",
        // EN: M1: (e) Assumes P(k) true for some k ∈ ℤ⁺.
        "M1：(e) ある k ∈ ℤ⁺ に対して P(k) が成り立つと仮定する。",
        // EN: M1: (e) Adds the (k + 1)-th term (k + 1)(k + 3) to S(k).
        "M1：(e) S(k) に第 (k + 1) 項 (k + 1)(k + 3) を加える。",
        // EN: A1: (e) Takes out the factor (k + 1)/6 to get (k + 1)(2k² + 13k + 18)/6.
        "A1：(e) 因数 (k + 1)/6 をくくり出して (k + 1)(2k² + 13k + 18)/6 を得る。",
        // EN: A1: (e) Factorises to (k + 1)(k + 2)(2k + 9)/6 = (k + 1)(k + 2)(2(k + 1) + 7)/6.
        "A1：(e) (k + 1)(k + 2)(2k + 9)/6 = (k + 1)(k + 2)(2(k + 1) + 7)/6 と因数分解する。",
        // EN: R1: (e) Induction conclusion sentence (only if the M marks above are earned).
        "R1：(e) 数学的帰納法の結びの文（上の M 点を獲得している場合のみ）。",
        // EN: M1: (f) Uses the formula with a GDC table, graph or solver for S(n) > 10⁶.
        "M1：(f) S(n) > 10⁶ について、公式と GDC の表、グラフまたはソルバーを用いる。",
        // EN: A1: (f) n = 143.
        "A1：(f) n = 143。",
      ],
    },

    // ── t1-5-q058 · short · challenge · AHL · AHL 1.15 · 17 marks
    "t1-5-q058": {
      // EN: <strong>Investigation: closed forms for a recurrence.</strong> A sequence is defined by <span class="chem">u_1 = 2</span> and <span class="chem">u_{n+1} = 3u_n - 2</span> for <span class="chem">n \in \mathbb{Z}^+</span>.<br>(a) Write down <span class="chem">u_2</span>, <span class="chem">u_3</span>, <span class="chem">u_4</span> and <span class="chem">u_5</span>. [2 marks]<br>(b) Let <span class="chem">v_n = u_n - 1</span>. Write down <span class="chem">v_1, ..., v_5</span> and hence conjecture a formula for <span class="chem">u_n</span> in terms of <span class="chem">n</span>. [2 marks]<br>(c) Prove your conjecture by mathematical induction. [5 marks]<br>(d) Find an expression for <span class="chem">Sigma_{r=1}^n u_r</span> in terms of <span class="chem">n</span>. [3 marks]<br>(e) Find the smallest <span class="chem">n</span> for which <span class="chem">Sigma_{r=1}^n u_r &gt; 10^9</span>. [2 marks]<br>(f) Now consider the general recurrence <span class="chem">u_{n+1} = au_n + b</span> with <span class="chem">a != 1</span>, and let <span class="chem">L = b/(1 - a)</span>. Show that <span class="chem">u_{n+1} - L = a(u_n - L)</span>, deduce a formula for <span class="chem">u_n</span> in terms of <span class="chem">u_1</span>, <span class="chem">a</span>, <span class="chem">L</span> and <span class="chem">n</span>, and check it against part (b). [3 marks]
      stem: "<strong>探究：漸化式の一般項。</strong> 数列が <span class=\"chem\">u_1 = 2</span> および <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">u_{n+1} = 3u_n - 2</span> で定義されている。<br>(a) <span class=\"chem\">u_2</span>、<span class=\"chem\">u_3</span>、<span class=\"chem\">u_4</span>、<span class=\"chem\">u_5</span> を書きなさい (Write down)。 [2 marks]<br>(b) <span class=\"chem\">v_n = u_n - 1</span> とする。<span class=\"chem\">v_1, ..., v_5</span> を書き、これを用いて (Hence) <span class=\"chem\">u_n</span> を <span class=\"chem\">n</span> で表す公式を予想しなさい。 [2 marks]<br>(c) あなたの予想を数学的帰納法によって証明しなさい (Prove)。 [5 marks]<br>(d) <span class=\"chem\">Sigma_{r=1}^n u_r</span> を <span class=\"chem\">n</span> で表す式を求めなさい (Find)。 [3 marks]<br>(e) <span class=\"chem\">Sigma_{r=1}^n u_r &gt; 10^9</span> となる最小の <span class=\"chem\">n</span> を求めなさい (Find)。 [2 marks]<br>(f) 次に、<span class=\"chem\">a != 1</span> である一般の漸化式 <span class=\"chem\">u_{n+1} = au_n + b</span> を考え、<span class=\"chem\">L = b/(1 - a)</span> とする。<span class=\"chem\">u_{n+1} - L = a(u_n - L)</span> を示し (Show that)、<span class=\"chem\">u_n</span> を <span class=\"chem\">u_1</span>、<span class=\"chem\">a</span>、<span class=\"chem\">L</span>、<span class=\"chem\">n</span> で表す公式を導き (Deduce)、(b) の結果と照らし合わせて確かめなさい。 [3 marks]",
      hints: [
        // EN: Decode: the substitution <span class="chem">v_n = u_n - 1</span> is the key idea. It turns the recurrence into a geometric sequence; part (f) asks you to explain why this works in general.
        "解読：置き換え <span class=\"chem\">v_n = u_n - 1</span> が鍵となる考え方です。これにより漸化式が等比数列に変わります。(f) では、なぜこれが一般にうまくいくのかを説明することが求められています。",
        // EN: In (c), substitute the assumption into the recurrence <span class="chem">u_{k+1} = 3u_k - 2</span>.
        "(c) では、仮定を漸化式 <span class=\"chem\">u_{k+1} = 3u_k - 2</span> に代入します。",
        // EN: In (d), split the sum into a geometric series with first term 1 and ratio 3, plus <span class="chem">n</span> ones.
        "(d) では、和を初項 1、公比 3 の等比級数と、<span class=\"chem\">n</span> 個の 1 の和に分けます。",
        // EN: In (f), replace <span class="chem">b</span> by <span class="chem">L(1 - a)</span> in <span class="chem">au_n + b - L</span>.
        "(f) では、<span class=\"chem\">au_n + b - L</span> の <span class=\"chem\">b</span> を <span class=\"chem\">L(1 - a)</span> で置き換えます。",
      ],
      // EN: <p><strong>Decode:</strong> “a fixed amount added after multiplying” hides a geometric sequence. Shifting by the fixed point <span class="chem">L</span> removes the constant term.</p><p>The closed form <span class="chem">u_n = 3^{n-1} + 1</span> is proved in one line of algebra in the inductive step. Summing gives <span class="chem">(3^n - 1)/2 + n</span>, which first exceeds <span class="chem">10^9</span> at <span class="chem">n = 20</span>. In general <span class="chem">u_n = L + (u_1 - L)a^{n-1}</span>.</p>
      solution: "<p><strong>解読：</strong>「掛けた後に一定の量を加える」形には等比数列が隠れています。不動点 <span class=\"chem\">L</span> だけずらすと定数項が消えます。</p><p>一般項 <span class=\"chem\">u_n = 3^{n-1} + 1</span> は、帰納段階の 1 行の計算で証明されます。和をとると <span class=\"chem\">(3^n - 1)/2 + n</span> となり、これが初めて <span class=\"chem\">10^9</span> を超えるのは <span class=\"chem\">n = 20</span> のときです。一般には <span class=\"chem\">u_n = L + (u_1 - L)a^{n-1}</span> です。</p>",
      // EN: <p>(a) <span class="chem">u_2 = 4</span>, <span class="chem">u_3 = 10</span>, <span class="chem">u_4 = 28</span>, <span class="chem">u_5 = 82</span>.<br>(b) <span class="chem">v_n = 1, 3, 9, 27, 81</span>: powers of 3, so <span class="chem">u_n = 3^{n-1} + 1</span>.<br>(c) <span class="chem">n = 1</span>: <span class="chem">3^0 + 1 = 2 = u_1</span>. Assume <span class="chem">u_k = 3^{k-1} + 1</span> for some <span class="chem">k \in \mathbb{Z}^+</span>. Then <span class="chem">u_{k+1} = 3(3^{k-1} + 1) - 2 = 3^k + 1</span>, the formula for <span class="chem">n = k + 1</span>. By induction the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.<br>(d) <span class="chem">Sigma_{r=1}^n (3^{r-1} + 1) = (3^n - 1)/2 + n</span>.<br>(e) <span class="chem">n = 19</span> gives <span class="chem">581 130 752</span>; <span class="chem">n = 20</span> gives <span class="chem">1 743 392 220</span>. So <span class="chem">n = 20</span>.<br>(f) Since <span class="chem">b = L(1 - a)</span>, <span class="chem">u_{n+1} - L = au_n + L - aL - L = a(u_n - L)</span>. So <span class="chem">u_n - L</span> is geometric with ratio <span class="chem">a</span>: <span class="chem">u_n = L + (u_1 - L)a^{n-1}</span>. For <span class="chem">a = 3, b = -2</span>: <span class="chem">L = 1</span> and <span class="chem">u_n = 1 + (2 - 1)3^{n-1}</span>, as in (b).</p>
      answer: "<p>(a) <span class=\"chem\">u_2 = 4</span>、<span class=\"chem\">u_3 = 10</span>、<span class=\"chem\">u_4 = 28</span>、<span class=\"chem\">u_5 = 82</span>。<br>(b) <span class=\"chem\">v_n = 1, 3, 9, 27, 81</span>：3 の累乗であるから、<span class=\"chem\">u_n = 3^{n-1} + 1</span>。<br>(c) <span class=\"chem\">n = 1</span>：<span class=\"chem\">3^0 + 1 = 2 = u_1</span>。ある <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">u_k = 3^{k-1} + 1</span> が成り立つと仮定する。このとき <span class=\"chem\">u_{k+1} = 3(3^{k-1} + 1) - 2 = 3^k + 1</span> であり、これは <span class=\"chem\">n = k + 1</span> のときの公式である。数学的帰納法により、すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して公式が成り立つ。<br>(d) <span class=\"chem\">Sigma_{r=1}^n (3^{r-1} + 1) = (3^n - 1)/2 + n</span>。<br>(e) <span class=\"chem\">n = 19</span> のとき <span class=\"chem\">581 130 752</span>、<span class=\"chem\">n = 20</span> のとき <span class=\"chem\">1 743 392 220</span>。よって <span class=\"chem\">n = 20</span>。<br>(f) <span class=\"chem\">b = L(1 - a)</span> であるから、<span class=\"chem\">u_{n+1} - L = au_n + L - aL - L = a(u_n - L)</span>。よって <span class=\"chem\">u_n - L</span> は公比 <span class=\"chem\">a</span> の等比数列であり、<span class=\"chem\">u_n = L + (u_1 - L)a^{n-1}</span>。<span class=\"chem\">a = 3, b = -2</span> のとき：<span class=\"chem\">L = 1</span>、<span class=\"chem\">u_n = 1 + (2 - 1)3^{n-1}</span> となり、(b) と一致する。</p>",
      markscheme: [
        // EN: A1: (a) u₂ = 4, u₃ = 10.
        "A1：(a) u₂ = 4、u₃ = 10。",
        // EN: A1: (a) u₄ = 28, u₅ = 82.
        "A1：(a) u₄ = 28、u₅ = 82。",
        // EN: A1: (b) v₁, …, v₅ = 1, 3, 9, 27, 81.
        "A1：(b) v₁, …, v₅ = 1, 3, 9, 27, 81。",
        // EN: A1: (b) Conjecture u<sub>n</sub> = 3<sup>n−1</sup> + 1.
        "A1：(b) u<sub>n</sub> = 3<sup>n−1</sup> + 1 と予想する。",
        // EN: A1: (c) Base case: 3⁰ + 1 = 2 = u₁, so P(1) is true.
        "A1：(c) 初期条件：3⁰ + 1 = 2 = u₁ なので、P(1) は成り立つ。",
        // EN: M1: (c) Assumes u<sub>k</sub> = 3<sup>k−1</sup> + 1 for some k ∈ ℤ⁺.
        "M1：(c) ある k ∈ ℤ⁺ に対して u<sub>k</sub> = 3<sup>k−1</sup> + 1 が成り立つと仮定する。",
        // EN: M1: (c) Uses the recurrence: u<sub>k+1</sub> = 3(3<sup>k−1</sup> + 1) − 2.
        "M1：(c) 漸化式を用いる：u<sub>k+1</sub> = 3(3<sup>k−1</sup> + 1) − 2。",
        // EN: A1: (c) Simplifies to 3<sup>k</sup> + 1 = 3<sup>(k+1)−1</sup> + 1.
        "A1：(c) 3<sup>k</sup> + 1 = 3<sup>(k+1)−1</sup> + 1 に整理する。",
        // EN: R1: (c) Induction conclusion sentence (only if the M marks above are earned).
        "R1：(c) 数学的帰納法の結びの文（上の M 点を獲得している場合のみ）。",
        // EN: M1: (d) Splits the sum into Σ3<sup>r−1</sup> + Σ1.
        "M1：(d) 和を Σ3<sup>r−1</sup> + Σ1 に分ける。",
        // EN: A1: (d) Geometric part (3<sup>n</sup> − 1)/2.
        "A1：(d) 等比数列の部分 (3<sup>n</sup> − 1)/2。",
        // EN: A1: (d) Total (3<sup>n</sup> − 1)/2 + n.
        "A1：(d) 合計 (3<sup>n</sup> − 1)/2 + n。",
        // EN: M1: (e) Uses a GDC table, graph or solver on (3<sup>n</sup> − 1)/2 + n > 10⁹.
        "M1：(e) (3<sup>n</sup> − 1)/2 + n > 10⁹ について GDC の表、グラフまたはソルバーを用いる。",
        // EN: A1: (e) n = 20.
        "A1：(e) n = 20。",
        // EN: M1: (f) Uses b = L(1 − a) to show u<sub>n+1</sub> − L = a(u<sub>n</sub> − L).
        "M1：(f) b = L(1 − a) を用いて u<sub>n+1</sub> − L = a(u<sub>n</sub> − L) を示す。",
        // EN: A1: (f) Deduces u<sub>n</sub> = L + (u₁ − L)a<sup>n−1</sup>.
        "A1：(f) u<sub>n</sub> = L + (u₁ − L)a<sup>n−1</sup> を導く。",
        // EN: R1: (f) Checks a = 3, b = −2: L = 1 gives u<sub>n</sub> = 1 + 3<sup>n−1</sup>, agreeing with (b).
        "R1：(f) a = 3, b = −2 で確かめる：L = 1 から u<sub>n</sub> = 1 + 3<sup>n−1</sup> となり、(b) と一致する。",
      ],
    },

    // ── t1-5-q059 · short · challenge · AHL · AHL 1.16 · 15 marks
    "t1-5-q059": {
      // EN: <strong>Investigation: when does a quadratic fit three points?</strong> We look for a quadratic <span class="chem">y = ax^2 + bx + c</span> whose graph passes through the points <span class="chem">(1, p)</span>, <span class="chem">(2, q)</span> and <span class="chem">(t, r)</span>.<br>(a) For <span class="chem">t = 3</span>, <span class="chem">p = 2</span>, <span class="chem">q = 3</span> and <span class="chem">r = 6</span>, write down the system of equations for <span class="chem">a, b, c</span> and solve it. [3 marks]<br>(b) For <span class="chem">t = 3.7</span>, <span class="chem">p = 2</span>, <span class="chem">q = 3</span>, <span class="chem">r = 6</span>, use your GDC to find <span class="chem">a</span>. [2 marks]<br>(c) For general values, show that row reduction gives <span class="chem">(t - 1)(t - 2)a = (r - p) - (t - 1)(q - p)</span>. [4 marks]<br>(d) Hence state the values of <span class="chem">t</span> for which there is a unique quadratic. For <span class="chem">t = 2</span>, state the condition for infinitely many solutions and the condition for no solution, and explain each case in terms of the points. [3 marks]<br>(e) For <span class="chem">t = 2</span> and <span class="chem">r = q</span>, let <span class="chem">a = lambda</span> and find <span class="chem">b</span> and <span class="chem">c</span> in terms of <span class="chem">lambda</span>, <span class="chem">p</span> and <span class="chem">q</span>. [2 marks]<br>(f) State what happens when <span class="chem">t = 1</span>. [1 mark]
      stem: "<strong>探究：2 次関数が 3 点に当てはまるのはいつか？</strong> グラフが点 <span class=\"chem\">(1, p)</span>、<span class=\"chem\">(2, q)</span>、<span class=\"chem\">(t, r)</span> を通る 2 次関数 <span class=\"chem\">y = ax^2 + bx + c</span> を求める。<br>(a) <span class=\"chem\">t = 3</span>、<span class=\"chem\">p = 2</span>、<span class=\"chem\">q = 3</span>、<span class=\"chem\">r = 6</span> のとき、<span class=\"chem\">a, b, c</span> についての連立方程式を書き (Write down)、それを解きなさい。 [3 marks]<br>(b) <span class=\"chem\">t = 3.7</span>、<span class=\"chem\">p = 2</span>、<span class=\"chem\">q = 3</span>、<span class=\"chem\">r = 6</span> のとき、GDC を用いて <span class=\"chem\">a</span> を求めなさい (Find)。 [2 marks]<br>(c) 一般の値に対して、行基本変形により <span class=\"chem\">(t - 1)(t - 2)a = (r - p) - (t - 1)(q - p)</span> が得られることを示しなさい (Show that)。 [4 marks]<br>(d) これを用いて (Hence)、2 次関数がただ 1 つに定まる <span class=\"chem\">t</span> の値を述べなさい (State)。<span class=\"chem\">t = 2</span> のとき、無数の解をもつ条件と解をもたない条件を述べ、それぞれの場合を点の配置の観点から説明しなさい。 [3 marks]<br>(e) <span class=\"chem\">t = 2</span>、<span class=\"chem\">r = q</span> のとき、<span class=\"chem\">a = lambda</span> として <span class=\"chem\">b</span> と <span class=\"chem\">c</span> を <span class=\"chem\">lambda</span>、<span class=\"chem\">p</span>、<span class=\"chem\">q</span> で表しなさい (Find)。 [2 marks]<br>(f) <span class=\"chem\">t = 1</span> のとき何が起こるかを述べなさい (State)。 [1 mark]",
      hints: [
        // EN: Decode: this investigation links the algebra of the final row <span class="chem">g(t)a = h</span> to a picture. Ask yourself in each case: how many DIFFERENT points are there, and do any two share an <span class="chem">x</span>-coordinate?
        "解読：この探究では、最後の行 <span class=\"chem\">g(t)a = h</span> の代数を図と結びつけます。それぞれの場合について自問しましょう：「異なる」点はいくつあるか、また <span class=\"chem\">x</span> 座標が等しい 2 点はあるか？",
        // EN: In (c), eliminate <span class="chem">c</span> first (subtract row 1 from rows 2 and 3), then eliminate <span class="chem">b</span>.
        "(c) では、まず <span class=\"chem\">c</span> を消去し（第 2 行と第 3 行から第 1 行を引く）、次に <span class=\"chem\">b</span> を消去します。",
        // EN: Factorise <span class="chem">t^2 - 3t + 2</span>. The system has a unique solution exactly when this coefficient is non-zero.
        "<span class=\"chem\">t^2 - 3t + 2</span> を因数分解します。この係数が 0 でないときに限り、連立方程式はただ 1 組の解をもちます。",
      ],
      // EN: <p><strong>Decode:</strong> the coefficient <span class="chem">(t - 1)(t - 2)</span> vanishes exactly when the third point shares an <span class="chem">x</span>-coordinate with one of the first two, which is when a parabola (a function) may fail to exist or fail to be unique.</p><p>(b) From (c): <span class="chem">(2.7)(1.7)a = 4 - 2.7</span>, so <span class="chem">a = 1.3/4.59 = 0.283</span>, agreeing with the GDC. (e) From <span class="chem">3lambda + b = q - p</span> and <span class="chem">lambda + b + c = p</span>.</p>
      solution: "<p><strong>解読：</strong>係数 <span class=\"chem\">(t - 1)(t - 2)</span> が 0 になるのは、ちょうど 3 番目の点が最初の 2 点のどちらかと <span class=\"chem\">x</span> 座標を共有するときであり、それは放物線（関数）が存在しないか、ただ 1 つに定まらない可能性があるときです。</p><p>(b) (c) より <span class=\"chem\">(2.7)(1.7)a = 4 - 2.7</span>、よって <span class=\"chem\">a = 1.3/4.59 = 0.283</span> となり、GDC と一致します。(e) <span class=\"chem\">3lambda + b = q - p</span> と <span class=\"chem\">lambda + b + c = p</span> から求めます。</p>",
      // EN: <p>(a) <span class="chem">a + b + c = 2</span>, <span class="chem">4a + 2b + c = 3</span>, <span class="chem">9a + 3b + c = 6</span>. Subtracting: <span class="chem">3a + b = 1</span> and <span class="chem">5a + b = 3</span>, so <span class="chem">a = 1</span>, <span class="chem">b = -2</span>, <span class="chem">c = 3</span>.<br>(b) With <span class="chem">13.69a + 3.7b + c = 6</span>, the GDC gives <span class="chem">a = 0.283</span> (3 s.f.).<br>(c) <span class="chem">R_2 - R_1: 3a + b = q - p</span>. <span class="chem">R_3 - R_1: (t^2 - 1)a + (t - 1)b = r - p</span>. Subtract <span class="chem">(t - 1)</span> times the first: <span class="chem">(t^2 - 1 - 3(t - 1))a = (r - p) - (t - 1)(q - p)</span>, and <span class="chem">t^2 - 3t + 2 = (t - 1)(t - 2)</span>.<br>(d) Unique for <span class="chem">t != 1</span> and <span class="chem">t != 2</span> (if the three points happen to be collinear, this unique solution has <span class="chem">a = 0</span>, a straight line rather than a true quadratic). For <span class="chem">t = 2</span> the last row is <span class="chem">0a = r - q</span>: infinitely many if <span class="chem">r = q</span> (only two distinct points, and infinitely many parabolas pass through two points); none if <span class="chem">r != q</span> (two points with the same <span class="chem">x</span> and different <span class="chem">y</span>; no function can pass through both).<br>(e) <span class="chem">b = q - p - 3lambda</span>, <span class="chem">c = 2p - q + 2lambda</span>.<br>(f) For <span class="chem">t = 1</span> the last row is <span class="chem">0a = r - p</span>: infinitely many solutions if <span class="chem">r = p</span>, no solution if <span class="chem">r != p</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a + b + c = 2</span>、<span class=\"chem\">4a + 2b + c = 3</span>、<span class=\"chem\">9a + 3b + c = 6</span>。引き算により <span class=\"chem\">3a + b = 1</span>、<span class=\"chem\">5a + b = 3</span> であるから、<span class=\"chem\">a = 1</span>、<span class=\"chem\">b = -2</span>、<span class=\"chem\">c = 3</span>。<br>(b) <span class=\"chem\">13.69a + 3.7b + c = 6</span> を用いると、GDC により <span class=\"chem\">a = 0.283</span>（有効数字 3 桁）。<br>(c) <span class=\"chem\">R_2 - R_1: 3a + b = q - p</span>。<span class=\"chem\">R_3 - R_1: (t^2 - 1)a + (t - 1)b = r - p</span>。1 つ目の <span class=\"chem\">(t - 1)</span> 倍を引くと <span class=\"chem\">(t^2 - 1 - 3(t - 1))a = (r - p) - (t - 1)(q - p)</span>。また <span class=\"chem\">t^2 - 3t + 2 = (t - 1)(t - 2)</span>。<br>(d) <span class=\"chem\">t != 1</span> かつ <span class=\"chem\">t != 2</span> のときただ 1 つに定まる（3 点がたまたま一直線上にある場合、このただ 1 組の解は <span class=\"chem\">a = 0</span> となり、真の 2 次関数ではなく直線になる）。<span class=\"chem\">t = 2</span> のとき最後の行は <span class=\"chem\">0a = r - q</span>：<span class=\"chem\">r = q</span> なら無数の解（異なる点は 2 つだけで、2 点を通る放物線は無数にある）；<span class=\"chem\">r != q</span> なら解なし（<span class=\"chem\">x</span> が等しく <span class=\"chem\">y</span> が異なる 2 点であり、両方を通る関数は存在しない）。<br>(e) <span class=\"chem\">b = q - p - 3lambda</span>、<span class=\"chem\">c = 2p - q + 2lambda</span>。<br>(f) <span class=\"chem\">t = 1</span> のとき最後の行は <span class=\"chem\">0a = r - p</span>：<span class=\"chem\">r = p</span> なら無数の解、<span class=\"chem\">r != p</span> なら解なし。</p>",
      markscheme: [
        // EN: M1: (a) Substitutes the three points into y = ax² + bx + c.
        "M1：(a) 3 点を y = ax² + bx + c に代入する。",
        // EN: A1: (a) a + b + c = 2, 4a + 2b + c = 3, 9a + 3b + c = 6.
        "A1：(a) a + b + c = 2、4a + 2b + c = 3、9a + 3b + c = 6。",
        // EN: A1: (a) a = 1, b = −2, c = 3.
        "A1：(a) a = 1、b = −2、c = 3。",
        // EN: M1: (b) Sets up the system with the third equation 13.69a + 3.7b + c = 6 and uses technology.
        "M1：(b) 第 3 式を 13.69a + 3.7b + c = 6 とする連立方程式を立て、テクノロジーを用いる。",
        // EN: A1: (b) a = 0.283.
        "A1：(b) a = 0.283。",
        // EN: M1: (c) R₂ − R₁ gives 3a + b = q − p.
        "M1：(c) R₂ − R₁ から 3a + b = q − p。",
        // EN: M1: (c) R₃ − R₁ gives (t² − 1)a + (t − 1)b = r − p.
        "M1：(c) R₃ − R₁ から (t² − 1)a + (t − 1)b = r − p。",
        // EN: M1: (c) Subtracts (t − 1) × (3a + b = q − p) to eliminate b.
        "M1：(c) b を消去するため (t − 1) × (3a + b = q − p) を引く。",
        // EN: A1: (c) Coefficient t² − 1 − 3(t − 1) = (t − 1)(t − 2), giving the result AG (no mark for the given line).
        "A1：(c) 係数 t² − 1 − 3(t − 1) = (t − 1)(t − 2) となり、結果を導く AG（与えられた行自体には点を与えない）。",
        // EN: A1: (d) Unique quadratic for all t except t = 1 and t = 2.
        "A1：(d) t = 1 と t = 2 を除くすべての t でただ 1 つの 2 次関数。",
        // EN: A1: (d) t = 2: infinitely many if r = q, none if r ≠ q.
        "A1：(d) t = 2：r = q なら無数、r ≠ q なら解なし。",
        // EN: R1: (d) Explains: r = q means only two distinct points (infinitely many parabolas fit); r ≠ q means one x-value with two y-values (no function).
        "R1：(d) 説明：r = q は異なる点が 2 つしかないことを意味し（当てはまる放物線は無数）、r ≠ q は 1 つの x の値に 2 つの y の値があることを意味する（関数にならない）。",
        // EN: M1: (e) Back-substitutes a = λ into 3a + b = q − p and a + b + c = p.
        "M1：(e) a = λ を 3a + b = q − p と a + b + c = p に後退代入する。",
        // EN: A1: (e) b = q − p − 3λ and c = 2p − q + 2λ.
        "A1：(e) b = q − p − 3λ、c = 2p − q + 2λ。",
        // EN: A1: (f) t = 1: infinitely many solutions if r = p, otherwise no solution.
        "A1：(f) t = 1：r = p なら無数の解、そうでなければ解なし。",
      ],
    },

  }
});
