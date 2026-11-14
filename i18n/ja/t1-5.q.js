/* t1-5.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-5.q', {
  questions: {

    // ── t1-5-q001 · mcq · foundation · SL · SL 1.6 · 2 marks
    "t1-5-q001": {
      // EN: To prove that <span class="chem">x^2 - 8x + 21 &gt;= 5</span> for all <span class="chem">x in mathbb{R}</span>, which completed-square form directly establishes the result?
      stem: "すべての <span class=\"chem\">x in mathbb{R}</span> に対して <span class=\"chem\">x^2 - 8x + 21 &gt;= 5</span> であることを証明するとき、この結果を直接導ける平方完成の形はどれですか？",
      options: [
        // EN: <span class="chem">(x - 4)^2 + 5</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x in mathbb{R}</span>, the expression is <span class="chem">&gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 5</span>。すべての <span class=\"chem\">x in mathbb{R}</span> に対して <span class=\"chem\">(x - 4)^2 &gt;= 0</span> なので、この式は <span class=\"chem\">&gt;= 5</span> である。",
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
      // EN: <p>Completing the square gives <span class="chem">x^2 - 8x + 21 == (x - 4)^2 + 5</span>. Since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x in mathbb{R}</span>, we have <span class="chem">(x - 4)^2 + 5 &gt;= 5</span>.</p>
      solution: "<p>平方完成すると <span class=\"chem\">x^2 - 8x + 21 == (x - 4)^2 + 5</span> となります。すべての <span class=\"chem\">x in mathbb{R}</span> に対して <span class=\"chem\">(x - 4)^2 &gt;= 0</span> なので、<span class=\"chem\">(x - 4)^2 + 5 &gt;= 5</span> が成り立ちます。</p>",
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
      // EN: The sum of the squares of any three consecutive integers <span class="chem">(n - 1)^2 + n^2 + (n + 1)^2</span> can be written in the form <span class="chem">A n^2 + B</span>, where <span class="chem">A, B in mathbb{Z}</span>. Find the value of <span class="chem">A + B</span>.
      stem: "連続する 3 つの整数の平方の和 <span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2</span> は、<span class=\"chem\">A, B in mathbb{Z}</span> として <span class=\"chem\">A n^2 + B</span> の形で表せる。<span class=\"chem\">A + B</span> の値を求めなさい (Find)。",
      hints: [
        // EN: Expand <span class="chem">(n - 1)^2 = n^2 - 2n + 1</span> and <span class="chem">(n + 1)^2 = n^2 + 2n + 1</span>.
        "<span class=\"chem\">(n - 1)^2 = n^2 - 2n + 1</span> と <span class=\"chem\">(n + 1)^2 = n^2 + 2n + 1</span> を展開します。",
        // EN: Add all three terms: the <span class="chem">-2n</span> and <span class="chem">+2n</span> cancel, leaving <span class="chem">3n^2 + 2</span>.
        "3 つの項をすべて足すと <span class=\"chem\">-2n</span> と <span class=\"chem\">+2n</span> が打ち消し合い、<span class=\"chem\">3n^2 + 2</span> が残ります。",
      ],
      // EN: <p><span class="chem">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>. Thus <span class="chem">A = 3, B = 2</span> and <span class="chem">A + B = 5</span>.</p>
      solution: "<p><span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span> となります。よって <span class=\"chem\">A = 3, B = 2</span> であり、<span class=\"chem\">A + B = 5</span> です。</p>",
    },

    // ── t1-5-q003 · order · exam · SL · SL 1.6 · 3 marks
    "t1-5-q003": {
      // EN: Arrange the steps in logical <span class="chem">LHS -&gt; RHS</span> order to prove the algebraic identity <span class="chem">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> for <span class="chem">n in mathbb{Z}^+</span>.
      stem: "<span class=\"chem\">n in mathbb{Z}^+</span> に対して恒等式 <span class=\"chem\">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> を証明する (Prove) ために、<span class=\"chem\">LHS -&gt; RHS</span> の論理的順序に手順を並べ替えなさい。",
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
      // EN: <p>Using <span class="chem">2n + 1</span> for all three numbers only proves the special case where the integers are consecutive! Using distinct <span class="chem">a, b, c in mathbb{Z}</span> gives <span class="chem">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>, which is odd.</p>
      solution: "<p>3 つすべてに <span class=\"chem\">2n + 1</span> を使うと連続する整数など特別な場合しか証明できません！異なる <span class=\"chem\">a, b, c in mathbb{Z}</span> を使うと <span class=\"chem\">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span> となり、奇数であることが示せます。</p>",
      // EN: <p>Let the two odd integers be <span class="chem">2a + 1</span> and <span class="chem">2b + 1</span>, and the even integer be <span class="chem">2c</span>, where <span class="chem">a, b, c in mathbb{Z}</span>.<br><span class="chem">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br>Since <span class="chem">k = 2c^2 - 2ab - a - b - 1 in mathbb{Z}</span>, the expression is of the form <span class="chem">2k + 1</span>, which is always an odd integer.</p>
      answer: "<p><span class=\"chem\">a, b, c in mathbb{Z}</span> として、2 つの奇数を <span class=\"chem\">2a + 1</span>、<span class=\"chem\">2b + 1</span>、偶数を <span class=\"chem\">2c</span> とおく。<br><span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>。<br><span class=\"chem\">k = 2c^2 - 2ab - a - b - 1 in mathbb{Z}</span> なので、この式は <span class=\"chem\">2k + 1</span> の形となり、常に奇数である。</p>",
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
      // EN: In a proof by mathematical induction for <span class="chem">n in mathbb{Z}^+</span>, which wording of the inductive hypothesis earns full IB reasoning credit?
      stem: "<span class=\"chem\">n in mathbb{Z}^+</span> に対する数学的帰納法の証明において、帰納法の仮定の書き方として IB の理由点（R1）を満点得られるのはどれですか？",
      options: [
        // EN: “Assume <span class="chem">P(k)</span> is true for some <span class="chem">k in mathbb{Z}^+</span>.”
        "「ある <span class=\"chem\">k in mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する。」",
        // EN: “Assume <span class="chem">P(k)</span> is true for all <span class="chem">k in mathbb{Z}^+</span>.”
        "「すべての <span class=\"chem\">k in mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する。」",
        // EN: “Suppose <span class="chem">P(n)</span> is true for <span class="chem">n = k + 1</span>.”
        "「<span class=\"chem\">n = k + 1</span> のとき <span class=\"chem\">P(n)</span> が成り立つと仮定する。」",
        // EN: “Since <span class="chem">P(1)</span> and <span class="chem">P(2)</span> are true, <span class="chem">P(k)</span> is true.”
        "「<span class=\"chem\">P(1)</span> と <span class=\"chem\">P(2)</span> が成り立つので、<span class=\"chem\">P(k)</span> は成り立つ。」",
      ],
      hints: [
        // EN: Remember the domino analogy: you only assume that one particular domino <span class="chem">k</span> falls, and show it knocks over <span class="chem">k + 1</span>.
        "ドミノの例えを思い出しましょう：特定の 1 つのドミノ <span class=\"chem\">k</span> が倒れると仮定して、それが <span class=\"chem\">k + 1</span> を倒すことを示します。",
        // EN: Distinguish carefully between "for some <span class="chem">k in mathbb{Z}^+</span>" and "for all <span class="chem">k in mathbb{Z}^+</span>".
        "「ある <span class=\"chem\">k in mathbb{Z}^+</span> に対して（for some）」と「すべての <span class=\"chem\">k in mathbb{Z}^+</span> に対して（for all）」を正確に区別しましょう。",
      ],
      // EN: <p>IB markschemes require the inductive hypothesis to be stated for <strong>some</strong> (or a particular) positive integer <span class="chem">k in mathbb{Z}^+</span>, never for all <span class="chem">k</span>.</p>
      solution: "<p>IB の採点基準では、帰納法の仮定は<strong>ある</strong>（特定の）正の整数 <span class=\"chem\">k in mathbb{Z}^+</span> に対して述べる必要があり、すべての <span class=\"chem\">k</span> に対してと書いてはいけません。</p>",
      misconception: {
        // EN (option B): Assuming P(k) is true for ALL k ∈ ℤ⁺ assumes the very conclusion you are trying to prove, which forfeits the final R1 mark on IB markschemes.
        "1": "すべての k ∈ ℤ⁺ に対して P(k) が成り立つと仮定すると、証明したい結論そのものを仮定したことになり、IB の採点基準で最後の R1 点を失います。",
        // EN (option C): P(k + 1) is what you must deduce from P(k), not what you assume.
        "2": "P(k + 1) は仮定するものではなく、P(k) から導くべきものです。",
        // EN (option D): Checking P(1) and P(2) only verifies two base cases; it does not establish P(k).
        "3": "P(1) と P(2) を確かめても 2 つの初期条件を確認しただけであり、P(k) を示したことにはなりません。",
      },
    },

    // ── t1-5-q006 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q006": {
      // EN: Consider the false statement: “For all real numbers <span class="chem">a, b in mathbb{R}</span>, if <span class="chem">a &lt; b</span>, then <span class="chem">a^2 &lt; b^2</span>.” Which pair <span class="chem">(a, b)</span> is a valid counterexample?
      stem: "偽である命題「すべての実数 <span class=\"chem\">a, b in mathbb{R}</span> に対して、<span class=\"chem\">a &lt; b</span> ならば <span class=\"chem\">a^2 &lt; b^2</span> である」を考える。反例として正しい組 <span class=\"chem\">(a, b)</span> はどれですか？",
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

    // ── t1-5-q007 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q007": {
      // EN: In a proof by mathematical induction that <span class="chem">sum_{r=1}^n r(r!) = (n + 1)! - 1</span> for <span class="chem">n in mathbb{Z}^+</span>, the inductive step for <span class="chem">n = k + 1</span> combines the inductive hypothesis with the <span class="chem">(k + 1)</span>-th term:<br><span class="chem">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>State the integer value of <span class="chem">A</span>.
      stem: "<span class=\"chem\">n in mathbb{Z}^+</span> に対して <span class=\"chem\">sum_{r=1}^n r(r!) = (n + 1)! - 1</span> を数学的帰納法で証明するとき、<span class=\"chem\">n = k + 1</span> の帰納段階では帰納法の仮定と第 <span class=\"chem\">(k + 1)</span> 項を次のようにまとめる：<br><span class=\"chem\">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>。<br>整数 <span class=\"chem\">A</span> の値を述べなさい (State)。",
      hints: [
        // EN: Factor <span class="chem">(k + 1)!</span> out of the two terms <span class="chem">1 · (k + 1)! + (k + 1)(k + 1)!</span>.
        "2 つの項 <span class=\"chem\">1 · (k + 1)! + (k + 1)(k + 1)!</span> から <span class=\"chem\">(k + 1)!</span> をくくり出します。",
        // EN: <span class="chem">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.
        "<span class=\"chem\">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>。",
      ],
      // EN: <p>Factoring <span class="chem">(k + 1)!</span> gives <span class="chem">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>, so <span class="chem">A = 2</span>.</p>
      solution: "<p><span class=\"chem\">(k + 1)!</span> をくくり出すと <span class=\"chem\">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span> となるため、<span class=\"chem\">A = 2</span> です。</p>",
    },

    // ── t1-5-q008 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q008": {
      // EN: We wish to prove by mathematical induction that <span class="chem">f(n) = 7^n + 2</span> is divisible by <span class="chem">3</span> for all <span class="chem">n in mathbb{Z}^+</span>. Assuming <span class="chem">7^k + 2 = 3A</span> (<span class="chem">A in mathbb{Z}</span>), we write <span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>. Enter the integer value of <span class="chem">B</span>.
      stem: "すべての <span class=\"chem\">n in mathbb{Z}^+</span> に対して <span class=\"chem\">f(n) = 7^n + 2</span> が <span class=\"chem\">3</span> で割り切れることを数学的帰納法で証明したい。<span class=\"chem\">7^k + 2 = 3A</span>（<span class=\"chem\">A in mathbb{Z}</span>）と仮定すると、<span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span> と変形できる。整数 <span class=\"chem\">B</span> の値を入力しなさい。",
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
        // EN: Assume, for a contradiction, that <span class="chem">log_3 7</span> is rational, so <span class="chem">log_3 7 = p / q</span> for some positive integers <span class="chem">p, q in mathbb{Z}^+</span>.
        "矛盾を導くため、<span class=\"chem\">log_3 7</span> が有理数であると仮定し、ある正の整数 <span class=\"chem\">p, q in mathbb{Z}^+</span> に対して <span class=\"chem\">log_3 7 = p / q</span> とおく。",
        // EN: Rewrite the logarithmic equation in exponential form as <span class="chem">3^{p/q} = 7</span>, and raise both sides to the power <span class="chem">q</span> to obtain <span class="chem">3^p = 7^q</span>.
        "対数方程式を指数の形 <span class=\"chem\">3^{p/q} = 7</span> に書き換え、両辺を <span class=\"chem\">q</span> 乗して <span class=\"chem\">3^p = 7^q</span> を得る。",
        // EN: Observe that for all <span class="chem">p, q in mathbb{Z}^+</span>, <span class="chem">3^p</span> is divisible by the prime <span class="chem">3</span>, whereas <span class="chem">7^q</span> has only <span class="chem">7</span> as a prime factor and is not divisible by <span class=\"chem">3</span>.
        "すべての <span class=\"chem\">p, q in mathbb{Z}^+</span> に対して、<span class=\"chem\">3^p</span> は素数 <span class=\"chem\">3</span> で割り切れる一方、<span class=\"chem\">7^q</span> は素因数として <span class=\"chem\">7</span> しかもたず <span class=\"chem\">3</span> で割り切れないことに注目する。",
        // EN: This is a contradiction by the fundamental uniqueness of prime factorizations; hence <span class="chem">log_3 7</span> must be irrational.
        "これは素因数分解の一意性に矛盾する。したがって <span class=\"chem\">log_3 7</span> は無理数でなければならない。",
      ],
      hints: [
        // EN: Begin by assuming the negation: <span class="chem">log_3 7 = p / q</span> with <span class="chem">p, q in mathbb{Z}^+</span>.
        "まず命題の否定を仮定することから始めます：<span class=\"chem\">p, q in mathbb{Z}^+</span> として <span class=\"chem\">log_3 7 = p / q</span>。",
        // EN: Convert to integer powers <span class="chem">3^p = 7^q</span> and compare prime factors.
        "整数の累乗 <span class=\"chem\">3^p = 7^q</span> に変換し、素因数を比較します。",
      ],
      // EN: <p>Assume <span class="chem">log_3 7 = p/q</span> (<span class="chem">p, q in mathbb{Z}^+</span>), deduce <span class="chem">3^p = 7^q</span>, note that <span class="chem">3</span> divides the LHS but not the RHS, and conclude by contradiction that <span class="chem">log_3 7</span> is irrational.</p>
      solution: "<p><span class=\"chem\">log_3 7 = p/q</span>（<span class=\"chem\">p, q in mathbb{Z}^+</span>）と仮定し、<span class=\"chem\">3^p = 7^q</span> を導き、<span class=\"chem\">3</span> が左辺を割り切るが右辺を割り切らないことから矛盾を導いて <span class=\"chem\">log_3 7</span> が無理数であると結論づけます。</p>",
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
      // EN: Find the unique solution to the <span class="chem">3 × 3</span> linear system:<br><span class="chem">x + y + z = 6</span><br><span class="chem">2x - y + z = 3</span><br><span class="chem">x + 2y - z = 2</span>.<br>Enter the value of <span class="chem">x + 2y + 3z</span>.
      stem: "次の <span class=\"chem\">3 × 3</span> 連立一次方程式の唯一の解を求めなさい (Find)：<br><span class=\"chem\">x + y + z = 6</span><br><span class=\"chem\">2x - y + z = 3</span><br><span class=\"chem\">x + 2y - z = 2</span>。<br><span class=\"chem\">x + 2y + 3z</span> の値を入力しなさい。",
      hints: [
        // EN: Add Equation 1 and Equation 3 to eliminate <span class="chem">z</span> immediately: <span class="chem">2x + 3y = 8</span>. Also subtract Equation 1 from Equation 2 to get <span class="chem">x - 2y = -3</span>.
        "第 1 式と第 3 式を足すとすぐに <span class=\"chem\">z</span> が消去できます：<span class=\"chem\">2x + 3y = 8</span>。また第 2 式から第 1 式を引くと <span class=\"chem\">x - 2y = -3</span> になります。",
        // EN: Solving <span class="chem">2x + 3y = 8</span> and <span class="chem">x - 2y = -3</span> gives <span class="chem">x = 1, y = 2</span>, and substituting into Equation 1 gives <span class="chem">z = 3</span>.
        "<span class=\"chem\">2x + 3y = 8</span> と <span class=\"chem\">x - 2y = -3</span> を解くと <span class=\"chem\">x = 1, y = 2</span> となり、第 1 式に代入すると <span class=\"chem\">z = 3</span> が得られます。",
      ],
      // EN: <p>Eliminating <span class="chem">z</span> gives <span class="chem">x - 2y = -3</span> and <span class="chem">2x + 3y = 8</span>, so <span class="chem">7y = 14 =&gt; y = 2, x = 1, z = 3</span>. Therefore <span class="chem">x + 2y + 3z = 1 + 4 + 9 = 14</span>.</p>
      solution: "<p><span class=\"chem\">z</span> を消去すると <span class=\"chem\">x - 2y = -3</span> と <span class=\"chem\">2x + 3y = 8</span> が得られ、<span class=\"chem\">7y = 14 =&gt; y = 2, x = 1, z = 3</span> となります。よって <span class=\"chem\">x + 2y + 3z = 1 + 4 + 9 = 14</span> です。</p>",
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

    // ── t1-5-q015 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q015": {
      // EN: Let <span class="chem">f(x) = x e^{2x}</span>. It can be proved by mathematical induction that the <span class="chem">n</span>-th derivative is <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> for all <span class="chem">n in mathbb{Z}^+</span>. Evaluate <span class="chem">f^{(5)}(0)</span>.
      stem: "<span class=\"chem\">f(x) = x e^{2x}</span> とする。すべての <span class=\"chem\">n in mathbb{Z}^+</span> に対して第 <span class=\"chem\">n</span> 次導関数が <span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> となることが数学的帰納法で証明できる。<span class=\"chem\">f^{(5)}(0)</span> を計算しなさい。",
      hints: [
        // EN: Substitute <span class="chem">n = 5</span> and <span class="chem">x = 0</span> into <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>.
        "<span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> に <span class=\"chem\">n = 5</span> と <span class=\"chem\">x = 0</span> を代入します。",
        // EN: <span class="chem">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.
        "<span class=\"chem\">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>。",
      ],
      // EN: <p>Substituting <span class="chem">n = 5</span> and <span class="chem">x = 0</span> gives <span class="chem">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>.</p>
      solution: "<p><span class=\"chem\">n = 5</span> と <span class=\"chem\">x = 0</span> を代入すると、<span class=\"chem\">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span> となります。</p>",
    },

    // ── t1-5-q016 · mcq · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q016": {
      // EN: Suppose a student attempts to prove by contradiction that <span class="chem">sqrt(4)</span> is irrational by writing <span class="chem">sqrt(4) = a / b</span> with <span class="chem">gcd(a, b) = 1</span>, squaring to get <span class="chem">a^2 = 4b^2</span>, and claiming: “Since <span class="chem">4</span> divides <span class="chem">a^2</span>, <span class="chem">4</span> must divide <span class="chem">a</span>.” Why does this step fail?
      stem: "ある生徒が <span class=\"chem\">sqrt(4)</span> が無理数であることを背理法で証明しようとして、<span class=\"chem\">gcd(a, b) = 1</span> を満たす整数で <span class=\"chem\">sqrt(4) = a / b</span> とおき、両辺を 2 乗して <span class=\"chem\">a^2 = 4b^2</span> を得たあと、「<span class=\"chem\">4</span> が <span class=\"chem\">a^2</span> を割り切るので、<span class=\"chem\">4</span> は <span class=\"chem\">a</span> も割り切らなければならない」と主張した。この推論が誤りである理由はどれですか？",
      options: [
        // EN: Because <span class="chem">4</span> is composite (not prime): <span class="chem">4</span> divides <span class="chem">a^2</span> only implies <span class="chem">2</span> divides <span class="chem">a</span> (for example, <span class="chem">a = 2</span> has <span class="chem">4 | 2^2</span> but <span class="chem">4 mid 2</span>).
        "<span class=\"chem\">4</span> は合成数（素数ではない）だから：<span class=\"chem\">4</span> が <span class=\"chem\">a^2</span> を割り切っても <span class=\"chem\">2</span> が <span class=\"chem\">a</span> を割り切ることしか言えない（例えば <span class=\"chem\">a = 2</span> は <span class=\"chem\">4 | 2^2</span> だが <span class=\"chem\">4 mid 2</span>）。",
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
        // EN: Test <span class="chem">a = 2, b = 1</span>: does <span class="chem">4</span> divide <span class=\"chem">a^2 = 4</span>? Does <span class="chem">4</span> divide <span class=\"chem\">a = 2</span>?
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
      // EN: Prove by mathematical induction that for all <span class="chem">n in mathbb{Z}^+</span>,<br><span class="chem">sum_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]
      stem: "すべての <span class=\"chem\">n in mathbb{Z}^+</span> に対して、<br><span class=\"chem\">sum_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span> が成り立つことを数学的帰納法で証明しなさい (Prove)。 [7 marks]",
      hints: [
        // EN: After substituting the inductive hypothesis for <span class="chem">n = k</span>, add the <span class="chem">(k + 1)</span>-th term <span class="chem">(k + 1)2^k</span>.
        "<span class=\"chem\">n = k</span> の帰納法の仮定を代入したあと、第 <span class=\"chem\">(k + 1)</span> 項 <span class=\"chem\">(k + 1)2^k</span> を足します。",
        // EN: Factor out <span class="chem">2^k</span> from <span class="chem">(k - 1)2^k + (k + 1)2^k</span> to get <span class="chem">2k · 2^k = k · 2^{k+1}</span>.
        "<span class=\"chem\">(k - 1)2^k + (k + 1)2^k</span> から <span class=\"chem\">2^k</span> をくくり出して <span class=\"chem\">2k · 2^k = k · 2^{k+1}</span> を得ます。",
      ],
      // EN: <p>Factoring <span class="chem">2^k</span> in the inductive step gives <span class="chem">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>, matching the <span class="chem">n = k + 1</span> formula.</p>
      solution: "<p>帰納段階で <span class=\"chem\">2^k</span> をくくり出すと <span class=\"chem\">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span> となり、<span class=\"chem\">n = k + 1</span> の式と一致します。</p>",
      // EN: <p><strong>Base case (<span class="chem">n = 1</span>):</strong> <span class="chem">LHS = 1 · 2^0 = 1</span>; <span class="chem">RHS = (1 - 1)2^1 + 1 = 1</span>. Since <span class="chem">LHS = RHS</span>, <span class="chem">P(1)</span> is true.<br><strong>Inductive hypothesis:</strong> Assume <span class="chem">P(k)</span> is true for some <span class="chem">k in mathbb{Z}^+</span>: <span class="chem">sum_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>Inductive step (<span class="chem">n = k + 1</span>):</strong><br><span class="chem">sum_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>Conclusion:</strong> Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n in mathbb{Z}^+</span>.</p>
      answer: "<p><strong>初期条件 (<span class=\"chem\">n = 1</span>)：</strong> <span class=\"chem\">LHS = 1 · 2^0 = 1</span>、<span class=\"chem\">RHS = (1 - 1)2^1 + 1 = 1</span>。<span class=\"chem\">LHS = RHS</span> なので <span class=\"chem\">P(1)</span> は成り立つ。<br><strong>帰納法の仮定：</strong> ある <span class=\"chem\">k in mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する：<span class=\"chem\">sum_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>。<br><strong>帰納段階 (<span class=\"chem\">n = k + 1</span>)：</strong><br><span class=\"chem\">sum_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>。<br><strong>結論：</strong> <span class=\"chem\">P(1)</span> が成り立ち、かつ <span class=\"chem\">P(k) =&gt; P(k + 1)</span> であるから、数学的帰納法によりすべての <span class=\"chem\">n in mathbb{Z}^+</span> に対して <span class=\"chem\">P(n)</span> が成り立つ。</p>",
      markscheme: [
        // EN: R1: Base case n = 1: evaluates LHS = 1 and RHS = (0)2¹ + 1 = 1 and states P(1) is true.
        "R1：初期条件 n = 1：LHS = 1 と RHS = (0)2¹ + 1 = 1 を計算し、P(1) が成り立つと述べる。",
        // EN: M1: States inductive hypothesis: assumes P(k) is true for some k ∈ ℤ⁺.
        "M1：帰納法の仮定を述べる：ある k ∈ ℤ⁺ に対して P(k) が成り立つと仮定する。",
        // EN: M1: Considers n = k + 1 by adding the (k + 1)-th term (k + 1)2^k to the assumed sum.
        "M1：n = k + 1 を考え、仮定した和に第 (k + 1) 項 (k + 1)2^k を加える。",
        // EN: A1: Factors out 2^k to get ((k − 1) + (k + 1))2^k + 1 = 2k · 2^k + 1.
        "A1：2^k をくくり出して ((k − 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 を得る。",
        // EN: A1: Simplifies 2k · 2^k + 1 to k · 2^{k+1} + 1 = ((k + 1) − 1)2^{k+1} + 1.
        "A1：2k · 2^k + 1 を k · 2^{k+1} + 1 = ((k + 1) − 1)2^{k+1} + 1 に整理する。",
        // EN: R1: States final induction conclusion sentence (awarded only if previous M marks earned).
        "R1：最後の数学的帰納法の結びの文を述べる（前の M 点を獲得している場合のみ付与）。",
      ],
    },

    // ── t1-5-q018 · short · exam · AHL · AHL 1.16 · 7 marks
    "t1-5-q018": {
      // EN: Consider the system of linear equations:<br><span class="chem">x - y + 2z = 1</span><br><span class="chem">2x - y + 5z = 4</span><br><span class="chem">3x - 2y + (k^2 - 2)z = k + 2</span>, where <span class="chem">k in mathbb{R}</span>.<br>(a) Reduce the system to row-echelon form and find the value of <span class="chem">k</span> for which the system has no solution, and the value of <span class="chem">k</span> for which it has infinitely many solutions. [4 marks]<br>(b) Find the general solution in parametric form when the system has infinitely many solutions. [3 marks]
      stem: "次の連立一次方程式を考える：<br><span class=\"chem\">x - y + 2z = 1</span><br><span class=\"chem\">2x - y + 5z = 4</span><br><span class=\"chem\">3x - 2y + (k^2 - 2)z = k + 2</span>（ただし <span class=\"chem\">k in mathbb{R}</span>）。<br>(a) この連立方程式を階段形に変形し、解なしとなる <span class=\"chem\">k</span> の値と、無数の解をもつ <span class=\"chem\">k</span> の値を求めなさい (Find)。 [4 marks]<br>(b) 無数の解をもつときの一般解を媒介変数表示で求めなさい (Find)。 [3 marks]",
      hints: [
        // EN: Apply <span class="chem">R_2 - 2R_1</span> to get <span class="chem">y + z = 2</span>, and <span class="chem">R_3 - 3R_1</span> to get <span class="chem">y + (k^2 - 8)z = k - 1</span>.
        "<span class=\"chem\">R_2 - 2R_1</span> を適用して <span class=\"chem\">y + z = 2</span> を、<span class=\"chem\">R_3 - 3R_1</span> を適用して <span class=\"chem\">y + (k^2 - 8)z = k - 1</span> を得ます。",
        // EN: Subtract the new Row 2 from the new Row 3 to get <span class="chem">(k^2 - 9)z = k - 3</span>.
        "新しい第 3 行から新しい第 2 行を引くと <span class=\"chem\">(k^2 - 9)z = k - 3</span> になります。",
      ],
      // EN: <p>(a) <span class="chem">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class="chem">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class="chem">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. Thus <span class="chem">k = -3</span> gives no solution and <span class="chem">k = 3</span> gives infinite solutions.<br>(b) With <span class="chem">z = lambda</span>, <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 1 + y - 2z = 3 - 3lambda</span>.</p>
      solution: "<p>(a) <span class=\"chem\">R_2 - 2R_1 =&gt; y + z = 2</span>、<span class=\"chem\">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>、<span class=\"chem\">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span> となります。よって <span class=\"chem\">k = -3</span> で解なし、<span class=\"chem\">k = 3</span> で無数の解となります。<br>(b) <span class=\"chem\">z = lambda</span> とおくと <span class=\"chem\">y = 2 - lambda</span>、<span class=\"chem\">x = 1 + y - 2z = 3 - 3lambda</span> です。</p>",
      // EN: <p>(a) Row reduction gives <span class="chem">y + z = 2</span> and <span class="chem">(k^2 - 9)z = k - 3</span>. The system has <strong>no solution</strong> when <span class="chem">k = -3</span> and <strong>infinitely many solutions</strong> when <span class="chem">k = 3</span>.<br>(b) Letting <span class="chem">z = lambda</span> (<span class="chem">lambda in mathbb{R}</span>) gives <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 3 - 3lambda</span>.</p>
      answer: "<p>(a) 行基本変形により <span class=\"chem\">y + z = 2</span> および <span class=\"chem\">(k^2 - 9)z = k - 3</span> が得られる。<span class=\"chem\">k = -3</span> のとき<strong>解なし</strong>、<span class=\"chem\">k = 3</span> のとき<strong>無数の解</strong>となる。<br>(b) <span class=\"chem\">z = lambda</span>（<span class=\"chem\">lambda in mathbb{R}</span>）とおくと、<span class=\"chem\">y = 2 - lambda</span>、<span class=\"chem\">x = 3 - 3lambda</span> となる。</p>",
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

  }
});
