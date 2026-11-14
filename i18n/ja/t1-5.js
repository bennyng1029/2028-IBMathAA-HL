/* t1-5 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-5', {
  strings: {

    // page title (browser tab)
    "1.5 Mathematical proof and systems of linear equations | Analysis Lab": "1.5 数学的証明と連立一次方程式 | Analysis Lab",

    // Mathematical proof and systems of linear equations > page header > p
    "Topic 1.5 · SL 1.6 + AHL 1.15–1.16": "Topic 1.5 · SL 1.6 + AHL 1.15–1.16",

    // Mathematical proof and systems of linear equations > page header > h1
    "Mathematical proof and systems of linear equations": "数学的証明と連立一次方程式",

    // Mathematical proof and systems of linear equations > page header > span
    "How do we establish beyond doubt that a mathematical statement holds for infinitely many cases—or determine exactly when a system of equations has one, none, or infinitely many solutions?": "無限にあるすべてのケースについて命題が成り立つことを疑いの余地なく示すにはどうすればよいのか、また連立方程式が唯一の解・解なし・無数の解をもつ条件をどうやって厳密に判定するのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > span
    "Construct a rigorous left-hand-side to right-hand-side (<span class=\"chem\">LHS -&gt; RHS</span>) algebraic proof for identities, parity properties, and positivity (by completing the square).": "恒等式・偶奇性・正値性（平方完成による）について、左辺から右辺へ（<span class=\"chem\">LHS -&gt; RHS</span>）厳密な代数的証明を構成できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Prove statements involving series, divisibility, derivatives, and inequalities by mathematical induction using the full IB four-step structure and conclusion sentence.": "級数・整除性・導関数・不等式に関する命題を、IB 形式の 4 段階と結びの文を含む数学的帰納法で証明できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use proof by contradiction to establish irrationality (such as <span class=\"chem\">sqrt(2)</span> or <span class=\"chem\">log_2 5</span>) and parity/divisibility results.": "背理法を用いて無理数性（<span class=\"chem\">sqrt(2)</span> や <span class=\"chem\">log_2 5</span> など）や偶奇性・整除性を証明できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Disprove a universal conjecture by providing a single explicit counterexample.": "全称命題（すべての〜で成り立つという予想）を、具体的な反例を 1 つ挙げて反証できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve up to <span class=\"chem\">3 × 3</span> systems of linear equations both algebraically (Gaussian elimination) and with technology (GDC solver or row reduction), and determine conditions on a parameter <span class=\"chem\">k</span> for a unique solution, no solution, or infinitely many solutions.": "最大 <span class=\"chem\">3 × 3</span> の連立一次方程式を、代数的な方法（ガウスの消去法）とテクノロジー（GDC のソルバーや行基本変形）の両方で解き、唯一の解・解なし・無数の解をもつためのパラメーター <span class=\"chem\">k</span> の条件を求められる。",

    // Question decoder: spotting which proof or system method to u > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which proof or system method to u > h2
    "Question decoder: spotting which proof or system method to use": "問題デコーダー：どの証明法・解法を使うか見抜くコツ",

    // Question decoder: spotting which proof or system method to u > p
    "Proof and linear system questions use strict IB command terms. Use this decoder to match the exact exam wording to the required layout and markscheme checkpoints.": "証明や連立一次方程式の問題では、IB 独自の厳格な指示語（コマンドターム）が使われます。問題文の表現と、求められる答案構成・採点基準のポイントを対応させましょう。",

    // Question decoder: spotting which proof or system method to u > table > caption
    "Question decoder — Proof and linear systems": "問題デコーダー — 証明と連立一次方程式",

    // Question decoder: spotting which proof or system method to u > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which proof or system method to u > table > th
    "What it means (method &amp; setup)": "数学的な意味（手法と立式）",

    // Question decoder: spotting which proof or system method to u > table > th
    "Markscheme rules (Paper 1 &amp; Paper 2)": "採点基準のルール（Paper 1 &amp; Paper 2）",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Show that…” or “Prove that <span class=\"chem\">f(x) == g(x)</span>” (SL 1.6)": "「Show that…（示せ）」または「Prove that <span class=\"chem\">f(x) == g(x)</span>（証明せよ）」(SL 1.6)",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Direct deductive proof</strong>. Start with the more complicated side (usually <span class=\"chem\">LHS</span>) and transform it step-by-step into the other side (<span class=\"chem\">RHS</span>).": "<strong>直接証明（演繹的証明）</strong>。より複雑な方の辺（通常は左辺 <span class=\"chem\">LHS</span>）から始め、1 段階ずつ変形してもう一方の辺（右辺 <span class=\"chem\">RHS</span>）に一致させます。",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Never start by writing <span class=\"chem\">LHS = RHS</span></strong> and working on both sides! In an Answer Given (<strong>AG</strong>) question, every intermediate algebraic step must be shown.": "<strong>最初から <span class=\"chem\">LHS = RHS</span> と書いて両辺を同時に変形してはいけません！</strong> 結論が与えられている（<strong>AG</strong>）問題では、途中の式変形をすべて書く必要があります。",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Prove that <span class=\"chem\">x^2 - 6x + 13 &gt; 0</span> for all <span class=\"chem\">x \\in \\mathbb{R}</span>” (SL 1.6)": "「すべての <span class=\"chem\">x \\in \\mathbb{R}</span> に対して <span class=\"chem\">x^2 - 6x + 13 &gt; 0</span> であることを証明せよ」(SL 1.6)",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Complete the square</strong>: rewrite as <span class=\"chem\">(x - 3)^2 + 4</span> and use the fact that <span class=\"chem\">(x - 3)^2 &gt;= 0</span> for all real <span class=\"chem\">x</span>.": "<strong>平方完成</strong>：<span class=\"chem\">(x - 3)^2 + 4</span> と変形し、すべての実数 <span class=\"chem\">x</span> に対して <span class=\"chem\">(x - 3)^2 &gt;= 0</span> であることを使います。",

    // Question decoder: spotting which proof or system method to u > table > td
    "State explicitly: “Since <span class=\"chem\">(x - 3)^2 &gt;= 0</span> for all <span class=\"chem\">x \\in \\mathbb{R}</span>, <span class=\"chem\">(x - 3)^2 + 4 &gt;= 4 &gt; 0</span>” to earn the reasoning mark <strong>[R1]</strong>.": "理由点 <strong>[R1]</strong> を得るために、「すべての <span class=\"chem\">x \\in \\mathbb{R}</span> に対して <span class=\"chem\">(x - 3)^2 &gt;= 0</span> なので <span class=\"chem\">(x - 3)^2 + 4 &gt;= 4 &gt; 0</span>」と明記します。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > th
    "“Prove by mathematical induction that…, for <span class=\"chem\">n \\in \\mathbb{Z}^+</span>” (AHL 1.15)": "「<span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して…であることを数学的帰納法で証明せよ」(AHL 1.15)",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "<strong>4-step induction template</strong>:<br>1. Base case <span class=\"chem\">n = 1</span>.<br>2. Assume <span class=\"chem\">P(k)</span> is true for <em>some</em> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>.<br>3. Prove <span class=\"chem\">P(k + 1)</span> using <span class=\"chem\">P(k)</span>.<br>4. Final induction conclusion sentence.": "<strong>帰納法 4 段階テンプレート</strong>：<br>1. 初期条件 <span class=\"chem\">n = 1</span>。<br>2. <em>ある</em> <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定。<br>3. <span class=\"chem\">P(k)</span> を用いて <span class=\"chem\">P(k + 1)</span> を証明。<br>4. 最後の帰納法の結びの文。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "Writing “Assume true for <em>all</em> <span class=\"chem\">k</span>” or omitting the final conclusion sentence loses the final <strong>[R1]</strong> mark even if all algebra is right!": "「<em>すべての</em> <span class=\"chem\">k</span> で成り立つと仮定する」と書いたり結びの文を省略したりすると、計算がすべて正しくても最後の <strong>[R1]</strong> 点を失います。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > th
    "“Prove by contradiction that <span class=\"chem\">sqrt(p)</span> (or <span class=\"chem\">log_a b</span>) is irrational” (AHL 1.15)": "「<span class=\"chem\">sqrt(p)</span>（または <span class=\"chem\">log_a b</span>）が無理数であることを背理法で証明せよ」(AHL 1.15)",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "<strong>Negate the statement</strong>: Assume <span class=\"chem\">sqrt(p) = a / b</span> where <span class=\"chem\">a, b \\in \\mathbb{Z}, b != 0</span> and <strong><span class=\"chem\">gcd(a, b) = 1</span> (coprime)</strong>. Deduce that <span class=\"chem\">p</span> divides both <span class=\"chem\">a</span> and <span class=\"chem\">b</span>.": "<strong>命題を否定する</strong>：<span class=\"chem\">a, b \\in \\mathbb{Z}, b != 0</span> かつ <strong><span class=\"chem\">gcd(a, b) = 1</span>（互いに素）</strong>として <span class=\"chem\">sqrt(p) = a / b</span> と仮定し、<span class=\"chem\">p</span> が <span class=\"chem\">a</span> と <span class=\"chem\">b</span> の両方を割り切ることを導きます。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "Forgetting to state that <span class=\"chem\">a</span> and <span class=\"chem\">b</span> have <strong>no common factors</strong> (<span class=\"chem\">gcd(a, b) = 1</span>) at the start means there is no contradiction at the end!": "最初に <span class=\"chem\">a</span> と <span class=\"chem\">b</span> が<strong>公約数をもたない</strong>（<span class=\"chem\">gcd(a, b) = 1</span>）と書き忘れると、最後に矛盾が導けません。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > th
    "“Disprove the statement…” or “Determine whether the statement is always true” (AHL 1.15)": "「命題を反証せよ…」または「命題が常に成り立つか判定せよ」(AHL 1.15)",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "<strong>Counterexample</strong>: test small boundary cases (<span class=\"chem\">0, 1, -1, 1/2</span>, negative numbers, non-primes) and exhibit <strong>one explicit example</strong> where the hypothesis holds but the conclusion fails.": "<strong>反例</strong>：小さな境界値（<span class=\"chem\">0, 1, -1, 1/2</span>、負の数、合成数など）を試し、仮定は満たすが結論が成り立たない<strong>具体的な例を 1 つ</strong>示します。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "Do not write a general algebraic argument to disprove a statement—state the specific numerical value(s) and evaluate both sides explicitly.": "反証するときに一般的な文字式で議論してはいけません。具体的な数値を挙げて両辺を実際に計算して示します。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > th
    "“Find the value(s) of <span class=\"chem\">k</span> for which the <span class=\"chem\">3 × 3</span> system has a unique solution / no solution / infinitely many solutions” (AHL 1.16)": "「<span class=\"chem\">3 × 3</span> 連立方程式が唯一の解 / 解なし / 無数の解をもつような <span class=\"chem\">k</span> の値を求めよ」(AHL 1.16)",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "<strong>Gaussian elimination</strong> (row reduction) to upper-triangular form where Row 3 is <span class=\"chem\">0x + 0y + g(k)z = h(k)</span>.": "<strong>ガウスの消去法</strong>（行基本変形）で上三角型にし、第 3 行を <span class=\"chem\">0x + 0y + g(k)z = h(k)</span> の形にします。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "• Unique: <span class=\"chem\">g(k) != 0</span>.<br>• No solution: <span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) != 0</span>.<br>• Infinite solutions: <span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) = 0</span> (set <span class=\"chem\">z = lambda \\in \\mathbb{R}</span>).": "• 唯一の解：<span class=\"chem\">g(k) != 0</span>。<br>• 解なし：<span class=\"chem\">g(k) = 0</span> かつ <span class=\"chem\">h(k) != 0</span>。<br>• 無数の解：<span class=\"chem\">g(k) = 0</span> かつ <span class=\"chem\">h(k) = 0</span>（<span class=\"chem\">z = lambda \\in \\mathbb{R}</span> とおく）。",

    // Deductive algebraic proof and identities > data-toc attribute
    "Direct proof": "直接証明",

    // Deductive algebraic proof and identities > h2
    "Deductive algebraic proof and identities": "演繹的な代数的証明と恒等式",

    // Deductive algebraic proof and identities > p
    "A <dfn data-def=\"A logical sequence of algebraic steps starting from known definitions or one side of an identity and arriving at the required result.\">direct deductive proof</dfn> uses general algebraic symbols—never just a few numerical examples—to show that a statement is true for every value in its domain. An <dfn data-def=\"An equality that holds true for all permissible values of its variables, often written with the symbol ≡.\">identity</dfn> (<span class=\"chem\">LHS == RHS</span>) holds for all values of the variable, whereas a conditional equation holds only for specific roots.": "<dfn data-def=\"既知の定義や恒等式の片辺から出発し、論理的な式変形の連鎖によって求める結論へ到達する証明法。\">直接証明（演繹的証明） <span class=\"en-term\">(direct deductive proof)</span></dfn> は、いくつかの数値例ではなく一般的な文字式を用いて、定義域のすべての値に対して命題が成り立つことを示します。<dfn data-def=\"変数に代入できるすべての値に対して成り立つ等式。記号 ≡ で表されることが多い。\">恒等式 <span class=\"en-term\">(identity)</span></dfn>（<span class=\"chem\">LHS == RHS</span>）は変数のすべての値で成り立ちますが、方程式は特定の解に対してのみ成り立ちます。",

    // Deductive algebraic proof and identities > data-def attribute
    "A logical sequence of algebraic steps starting from known definitions or one side of an identity and arriving at the required result.": "既知の定義や恒等式の片辺から出発し、論理的な式変形の連鎖によって求める結論へ到達する証明法。",

    // Deductive algebraic proof and identities > data-def attribute
    "An equality that holds true for all permissible values of its variables, often written with the symbol ≡.": "変数に代入できるすべての値に対して成り立つ等式。記号 ≡ で表されることが多い。",

    // Deductive algebraic proof and identities > p
    "The symbol <span class=\"chem\">==</span> means “is identically equal to”: <span class=\"chem\">(x + 1)^2 == x^2 + 2x + 1</span> is true for every <span class=\"chem\">x</span>. The symbol <span class=\"chem\">=</span> in an equation such as <span class=\"chem\">x^2 = 4</span> is true only for particular values (here <span class=\"chem\">x = +- 2</span>).": "記号 <span class=\"chem\">==</span> は「恒等的に等しい」という意味です：<span class=\"chem\">(x + 1)^2 == x^2 + 2x + 1</span> はすべての <span class=\"chem\">x</span> について成り立ちます。一方、<span class=\"chem\">x^2 = 4</span> のような方程式の記号 <span class=\"chem\">=</span> は、特定の値（ここでは <span class=\"chem\">x = +- 2</span>）でしか成り立ちません。",

    // Deductive algebraic proof and identities > h3
    "Three golden rules for SL 1.6 “Show that / Prove that” questions": "SL 1.6「示せ / 証明せよ」問題の 3 つの鉄則",

    // Deductive algebraic proof and identities > li
    "<strong>Work in one direction (<span class=\"chem\">LHS -&gt; RHS</span>)</strong>: Pick one side (almost always the side with more terms or fractions) and simplify it step by step until it matches the other side. Never start by assuming the conclusion <span class=\"chem\">LHS = RHS</span> and cross-multiplying!": "<strong>一方向に変形する（<span class=\"chem\">LHS -&gt; RHS</span>）</strong>：片方の辺（ほとんどの場合、項が多い方や分数を含む方）を選び、もう一方の辺に一致するまで 1 段階ずつ整理します。最初から結論 <span class=\"chem\">LHS = RHS</span> を仮定して分母を払ってはいけません。",

    // Deductive algebraic proof and identities > li
    "Any <strong>even integer</strong>: <span class=\"chem\">2n</span> (<span class=\"chem\">n \\in \\mathbb{Z}</span>); any <strong>odd integer</strong>: <span class=\"chem\">2n + 1</span>.": "任意の<strong>偶数</strong>：<span class=\"chem\">2n</span>（<span class=\"chem\">n \\in \\mathbb{Z}</span>）；任意の<strong>奇数</strong>：<span class=\"chem\">2n + 1</span>。",

    // Deductive algebraic proof and identities > li
    "<strong>Consecutive integers</strong>: <span class=\"chem\">n, n + 1, n + 2</span> (or <span class=\"chem\">n - 1, n, n + 1</span> so symmetric terms cancel!).": "<strong>連続する整数</strong>：<span class=\"chem\">n, n + 1, n + 2</span>（または対称な項が消えるように <span class=\"chem\">n - 1, n, n + 1</span>）。",

    // Deductive algebraic proof and identities > li
    "A <strong>multiple of <span class=\"chem\">m</span></strong>: <span class=\"chem\">m k</span> where <span class=\"chem\">k \\in \\mathbb{Z}</span>.": "<strong><span class=\"chem\">m</span> の倍数</strong>：<span class=\"chem\">k \\in \\mathbb{Z}</span> を用いて <span class=\"chem\">m k</span>。",

    // Deductive algebraic proof and identities > li
    "A <strong>two-digit integer</strong> with tens digit <span class=\"chem\">a</span> and units digit <span class=\"chem\">b</span>: <span class=\"chem\">10a + b</span> (reversed: <span class=\"chem\">10b + a</span>).": "十の位が <span class=\"chem\">a</span>、一の位が <span class=\"chem\">b</span> の<strong>2 桁の整数</strong>：<span class=\"chem\">10a + b</span>（逆順は <span class=\"chem\">10b + a</span>）。",

    // Deductive algebraic proof and identities > li
    "<strong>Complete the square to prove inequalities (<span class=\"chem\">&gt;= 0</span> or <span class=\"chem\">&gt; 0</span>)</strong>: Every real square satisfies <span class=\"chem\">A^2 &gt;= 0</span>. Rewriting a quadratic as <span class=\"chem\">a(x - h)^2 + k</span> with <span class=\"chem\">a &gt; 0, k &gt; 0</span> immediately proves it is strictly positive for all real <span class=\"chem\">x</span>.": "<strong>不等式（<span class=\"chem\">&gt;= 0</span> や <span class=\"chem\">&gt; 0</span>）の証明には平方完成</strong>：実数の平方は常に <span class=\"chem\">A^2 &gt;= 0</span> です。2 次式を <span class=\"chem\">a &gt; 0, k &gt; 0</span> の <span class=\"chem\">a(x - h)^2 + k</span> に変形すれば、すべての実数 <span class=\"chem\">x</span> で正であることが直ちに示せます。",

    // Deductive algebraic proof and identities > exam tip (shown in English + translation) > p
    "<strong>Exam tip (AG = Answer Given):</strong> In any “Show that…” question, the target expression is printed on the exam paper. Examiners will award <strong>zero marks</strong> for the final step if you jump over the unsimplified expansion right before the given answer. Show one extra line of working!": "<strong>試験のコツ（AG = 答えが問題文に与えられている問題）：</strong> 「Show that…」の問題では、目標の式が問題用紙に書かれています。与えられた答えの直前の整理されていない展開式を飛ばして答えだけ書くと、最後のステップが<strong>0 点</strong>になります。途中の式をもう 1 行丁寧に書きましょう。",

    // Deductive algebraic proof and identities > worked example > h3
    "Direct algebraic proof with consecutive odd integers and completing the square": "連続する奇数の直接証明と平方完成による不等式の証明",

    // Deductive algebraic proof and identities > worked example > p
    "(a) Prove algebraically that the difference between the squares of any two consecutive odd integers is always a multiple of <span class=\"chem\">8</span>. <strong>[3 marks]</strong>": "(a) 連続する任意の 2 つの奇数の平方の差が常に <span class=\"chem\">8</span> の倍数であることを代数的に証明しなさい (Prove)。 <strong>[3 marks]</strong>",

    // Deductive algebraic proof and identities > worked example > p
    "(b) Prove that <span class=\"chem\">a^2 + b^2 + 2c^2 - 2ac - 2bc &gt;= 0</span> for all real numbers <span class=\"chem\">a, b, c \\in \\mathbb{R}</span>. <strong>[3 marks]</strong>": "(b) すべての実数 <span class=\"chem\">a, b, c \\in \\mathbb{R}</span> に対して <span class=\"chem\">a^2 + b^2 + 2c^2 - 2ac - 2bc &gt;= 0</span> であることを証明しなさい (Prove)。 <strong>[3 marks]</strong>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Represent two consecutive odd integers in terms of n ∈ ℤ": "連続する 2 つの奇数を n ∈ ℤ で表す",

    // Deductive algebraic proof and identities > worked example > p
    "Any odd integer can be written as 2n − 1, so the next consecutive odd integer is 2n + 1 (for n ∈ ℤ).": "任意の奇数は 2n − 1 と書けるので、その次の連続する奇数は 2n + 1（n ∈ ℤ）となります。",

    // Deductive algebraic proof and identities > worked example > maths line
    "Let the two consecutive odd integers be 2<i>n</i> − 1 and 2<i>n</i> + 1 (<i>n</i> ∈ ℤ). <b>[M1]</b>": "連続する二つの奇数を 2<i>n</i> − 1 と 2<i>n</i> + 1（<i>n</i> ∈ ℤ）とおく。 <b>[M1]</b>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Expand the difference of their squares and factor out 8": "平方の差を展開して 8 をくくり出す",

    // Deductive algebraic proof and identities > worked example > p
    "Expanding (2n + 1)² − (2n − 1)² cancels 4n² and 1, leaving 8n.": "(2n + 1)² − (2n − 1)² を展開すると 4n² と 1 が打ち消し合い、8n が残ります。",

    // Deductive algebraic proof and identities > worked example > maths line
    "Since <i>n</i> ∈ ℤ, 8<i>n</i> is a multiple of 8. <b>[R1]</b>": "<i>n</i> ∈ ℤ より、8<i>n</i> は 8 の倍数である。 <b>[R1]</b>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Split 2c² into c² + c² and group into two completed squares": "2c² を c² + c² に分け、2 つの平方の形にまとめる",

    // Deductive algebraic proof and identities > worked example > p
    "Grouping a² − 2ac + c² and b² − 2bc + c² turns the expression into the sum of two squares of real numbers.": "a² − 2ac + c² と b² − 2bc + c² にまとめることで、式を実数の平方の和に変形できます。",

    // Deductive algebraic proof and identities > worked example > maths line
    "Since (<i>a</i> − <i>c</i>)<sup>2</sup> ≥ 0 and (<i>b</i> − <i>c</i>)<sup>2</sup> ≥ 0 for all <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ, their sum is ≥ 0. <b>[R1]</b>": "すべての <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ に対して (<i>a</i> − <i>c</i>)<sup>2</sup> ≥ 0 かつ (<i>b</i> − <i>c</i>)<sup>2</sup> ≥ 0 なので、その和も ≥ 0 である。 <b>[R1]</b>",

    // Deductive algebraic proof and identities > try it > p
    "A three-digit integer has hundreds digit <span class=\"chem\">a</span>, tens digit <span class=\"chem\">b</span>, and units digit <span class=\"chem\">c</span> (with <span class=\"chem\">a &gt; c</span>), so its value is <span class=\"chem\">100a + 10b + c</span>. When its digits are reversed, the new number is <span class=\"chem\">100c + 10b + a</span>. The difference between the original number and the reversed number is always divisible by a largest positive integer <span class=\"chem\">M</span> regardless of <span class=\"chem\">a, b, c</span>. Enter the value of <span class=\"chem\">M</span>.": "3 桁の整数の百の位が <span class=\"chem\">a</span>、十の位が <span class=\"chem\">b</span>、一の位が <span class=\"chem\">c</span>（<span class=\"chem\">a &gt; c</span>）であり、その値は <span class=\"chem\">100a + 10b + c</span> である。各位の数字を逆順に並べた新しい数は <span class=\"chem\">100c + 10b + a</span> となる。元の数と逆順の数の差は、<span class=\"chem\">a, b, c</span> の値によらず常に最大の正の整数 <span class=\"chem\">M</span> で割り切れる。<span class=\"chem\">M</span> の値を入力しなさい。",

    // Deductive algebraic proof and identities > try it > li
    "Subtract the reversed number from the original: <span class=\"chem\">(100a + 10b + c) - (100c + 10b + a)</span>.": "元の数から逆順の数を引きます：<span class=\"chem\">(100a + 10b + c) - (100c + 10b + a)</span>。",

    // Deductive algebraic proof and identities > try it > li
    "Notice that <span class=\"chem\">10b</span> cancels completely, leaving <span class=\"chem\">99a - 99c = 99(a - c)</span>.": "<span class=\"chem\">10b</span> が完全に消えて、<span class=\"chem\">99a - 99c = 99(a - c)</span> が残ります。",

    // Proof by mathematical induction > Additional HL > data-toc attribute
    "Induction": "数学的帰納法",

    // Proof by mathematical induction > Additional HL > h2
    "Proof by mathematical induction": "数学的帰納法による証明",

    // Proof by mathematical induction > Additional HL > p
    "<dfn data-def=\"A method of proving a statement P(n) for all integers n ≥ n₀ by proving a base case P(n₀) and proving the inductive step that P(k) ⇒ P(k+1).\">Mathematical induction</dfn> proves an infinite sequence of statements <span class=\"chem\">P(1), P(2), P(3), ...</span> in the same way an infinite line of dominoes falls: if you knock over the <strong>first domino</strong> (<span class=\"chem\">P(1)</span> is true), and you prove that <strong>any domino falling knocks over the very next domino</strong> (<span class=\"chem\">P(k) =&gt; P(k + 1)</span>), then every domino <span class=\"chem\">P(n)</span> for <span class=\"chem\">n \\in \\mathbb{Z}^+</span> must fall.": "<dfn data-def=\"初期条件 P(n₀) を示し、P(k) ⇒ P(k+1) の帰納段階を示すことで、すべての整数 n ≥ n₀ に対して命題 P(n) を証明する方法。\">数学的帰納法 <span class=\"en-term\">(mathematical induction)</span></dfn> は、無限に並んだドミノが倒れるのと同じ仕組みで無限個の命題 <span class=\"chem\">P(1), P(2), P(3), ...</span> を証明します。<strong>最初のドミノ</strong>を倒し（<span class=\"chem\">P(1)</span> が真）、<strong>どのドミノも倒れれば必ずすぐ次のドミノを倒す</strong>（<span class=\"chem\">P(k) =&gt; P(k + 1)</span>）ことを示せば、<span class=\"chem\">n \\in \\mathbb{Z}^+</span> のすべてのドミノ <span class=\"chem\">P(n)</span> が倒れることになります。",

    // Proof by mathematical induction > Additional HL > data-def attribute
    "A method of proving a statement P(n) for all integers n ≥ n₀ by proving a base case P(n₀) and proving the inductive step that P(k) ⇒ P(k+1).": "初期条件 P(n₀) を示し、P(k) ⇒ P(k+1) の帰納段階を示すことで、すべての整数 n ≥ n₀ に対して命題 P(n) を証明する方法。",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > p
    "<strong>The mandatory 4-step IB markscheme template (memorize word-for-word):</strong>": "<strong>IB 採点基準で必須の 4 段階テンプレート（一言一句そのまま覚えましょう）：</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Base case (<span class=\"chem\">n = 1</span>, or initial <span class=\"chem\">n_0</span>)</strong>: Compute <span class=\"chem\">LHS</span> and <span class=\"chem\">RHS</span> separately (or evaluate <span class=\"chem\">f(1)</span>) and write: <em>“Therefore <span class=\"chem\">P(1)</span> is true.”</em> <strong>[R1]</strong>": "<strong>初期条件（<span class=\"chem\">n = 1</span> または最初の <span class=\"chem\">n_0</span>）</strong>：<span class=\"chem\">LHS</span> と <span class=\"chem\">RHS</span> を別々に計算し（または <span class=\"chem\">f(1)</span> を計算し）、<em>「よって <span class=\"chem\">P(1)</span> は成り立つ。」</em>と書きます。 <strong>[R1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Inductive hypothesis (<span class=\"chem\">n = k</span>)</strong>: Write: <em>“Assume <span class=\"chem\">P(k)</span> is true for <strong>some</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>”</em> and state the <span class=\"chem\">n = k</span> equation explicitly. <strong>[M1]</strong>": "<strong>帰納法の仮定（<span class=\"chem\">n = k</span>）</strong>：<em>「<strong>ある</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する」</em>と書き、<span class=\"chem\">n = k</span> の等式を明記します。 <strong>[M1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Inductive step (<span class=\"chem\">n = k + 1</span>)</strong>: Start from the <span class=\"chem\">n = k + 1</span> expression, <strong>explicitly substitute your inductive hypothesis</strong>, and factor/simplify to the exact <span class=\"chem\">(k + 1)</span> target form. <strong>[M1 A1 A1]</strong>": "<strong>帰納段階（<span class=\"chem\">n = k + 1</span>）</strong>：<span class=\"chem\">n = k + 1</span> の式から出発し、<strong>帰納法の仮定を明示的に代入して</strong>、因数分解・整理により目標の <span class=\"chem\">(k + 1)</span> の形に導きます。 <strong>[M1 A1 A1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Conclusion sentence</strong>: <em>“Since <span class=\"chem\">P(1)</span> is true, and <span class=\"chem\">P(k)</span> being true implies <span class=\"chem\">P(k + 1)</span> is true, by the principle of mathematical induction, <span class=\"chem\">P(n)</span> is true for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.”</em> <strong>[R1]</strong>": "<strong>結びの文</strong>：<em>「<span class=\"chem\">P(1)</span> が成り立ち、かつ <span class=\"chem\">P(k)</span> が成り立つとき <span class=\"chem\">P(k + 1)</span> も成り立つので、数学的帰納法により、すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">P(n)</span> が成り立つ。」</em> <strong>[R1]</strong>",

    // Proof by mathematical induction > common mistake > Additional HL > p
    "<strong>Never write “Assume <span class=\"chem\">P(k)</span> is true for all <span class=\"chem\">k</span>”!</strong> If you assume it is true for <em>all</em> <span class=\"chem\">k</span>, you have assumed what you are trying to prove. Always write <em>“for <strong>some</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>”</em>. Also note that the final <strong>[R1]</strong> mark for the conclusion sentence is only awarded if at least the base case and inductive hypothesis substitution were attempted.": "<strong>「すべての <span class=\"chem\">k</span> に対して <span class=\"chem\">P(k)</span> が成り立つと仮定する」と書いてはいけません！</strong> <em>すべての</em> <span class=\"chem\">k</span> で成り立つと仮定したら、証明したい結論そのものを仮定したことになります。必ず<em>「<strong>ある</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span> に対して」</em>と書きましょう。なお、最後の結びの文の <strong>[R1]</strong> 点は、初期条件と帰納法の仮定の代入が少なくとも試みられている場合にのみ与えられます。",

    // Proof by mathematical induction > Additional HL > h3
    "How to execute the inductive step (<span class=\"chem\">n = k + 1</span>) across all 4 IB question types": "IB で出題される 4 タイプ別の帰納段階（<span class=\"chem\">n = k + 1</span>）の進め方",

    // Proof by mathematical induction > Additional HL > li
    "<strong>1. Series summations (<span class=\"chem\">Sigma_{r=1}^n u_r = S(n)</span>)</strong>: Split off the last term: <span class=\"chem\">Sigma_{r=1}^{k+1} u_r = (Sigma_{r=1}^k u_r) + u_{k+1} = S(k) + u_{k+1}</span>. <strong>Factor out common factors</strong> like <span class=\"chem\">(k + 1)</span> or <span class=\"chem\">k!</span> or <span class=\"chem\">2^k</span> immediately instead of expanding everything into a giant polynomial!": "<strong>1. 級数の和（<span class=\"chem\">Sigma_{r=1}^n u_r = S(n)</span>）</strong>：最後の項を分けます：<span class=\"chem\">Sigma_{r=1}^{k+1} u_r = (Sigma_{r=1}^k u_r) + u_{k+1} = S(k) + u_{k+1}</span>。すべてを巨大な多項式に展開せず、<span class=\"chem\">(k + 1)</span> や <span class=\"chem\">k!</span>、<span class=\"chem\">2^k</span> などの<strong>共通因数をすぐにくくり出す</strong>のがコツです。",

    // Proof by mathematical induction > Additional HL > li
    "<strong>2. Divisibility (“<span class=\"chem\">f(n)</span> is divisible by <span class=\"chem\">m</span>”)</strong>: In your hypothesis, write <span class=\"chem\">f(k) = m A</span> for some <span class=\"chem\">A \\in \\mathbb{Z}</span>, <strong>isolate the highest exponential term</strong> (e.g. <span class=\"chem\">7^k = 6A + 1</span> or <span class=\"chem\">5^{2k} = 24A + 1</span>), and substitute it straight into <span class=\"chem\">f(k + 1)</span>.": "<strong>2. 整除性（「<span class=\"chem\">f(n)</span> は <span class=\"chem\">m</span> で割り切れる」）</strong>：仮定で <span class=\"chem\">A \\in \\mathbb{Z}</span> を用いて <span class=\"chem\">f(k) = m A</span> とおき、<strong>最も高い指数の項を孤立させて</strong>（例：<span class=\"chem\">7^k = 6A + 1</span> や <span class=\"chem\">5^{2k} = 24A + 1</span>）、<span class=\"chem\">f(k + 1)</span> にそのまま代入します。",

    // Proof by mathematical induction > Additional HL > li
    "<strong>3. Higher derivatives (<span class=\"chem\">f^{(n)}(x)</span>)</strong>: Differentiate your <span class=\"chem\">n = k</span> formula once with respect to <span class=\"chem\">x</span> using the product, quotient, or chain rule: <span class=\"chem\">f^{(k+1)}(x) = d/dx [f^{(k)}(x)]</span>.": "<strong>3. 高次導関数（<span class=\"chem\">f^{(n)}(x)</span>）</strong>：<span class=\"chem\">n = k</span> の式を積・商・合成関数の微分法で <span class=\"chem\">x</span> について 1 回微分します：<span class=\"chem\">f^{(k+1)}(x) = d/dx [f^{(k)}(x)]</span>。",

    // Proof by mathematical induction > Additional HL > li
    "<strong>4. Inequalities (<span class=\"chem\">L(n) &gt; R(n)</span>)</strong>: Start with <span class=\"chem\">L(k + 1)</span>, apply the inductive hypothesis inequality to replace <span class=\"chem\">L(k)</span> with <span class=\"chem\">R(k)</span>, and show that the resulting expression is <span class=\"chem\">&gt; R(k + 1)</span>.": "<strong>4. 不等式（<span class=\"chem\">L(n) &gt; R(n)</span>）</strong>：<span class=\"chem\">L(k + 1)</span> から出発し、帰納法の仮定の不等式を使って <span class=\"chem\">L(k)</span> を <span class=\"chem\">R(k)</span> に置き換え、得られた式が <span class=\"chem\">&gt; R(k + 1)</span> であることを示します。",

    // Proof by mathematical induction > widget > Additional HL > data-title attribute
    "Mathematical induction domino & step verifier": "数学的帰納法ドミノ＆ステップ検証",

    // Proof by mathematical induction > widget > Additional HL > figcaption
    "Select a proposition <span class=\"chem\">P(n)</span> and step through the domino chain from <span class=\"chem\">n = 1</span> up to <span class=\"chem\">n = 7</span> to see how the inductive hypothesis <span class=\"chem\">P(k)</span> algebraically locks into <span class=\"chem\">P(k + 1)</span> at every step.": "命題 <span class=\"chem\">P(n)</span> を選び、<span class=\"chem\">n = 1</span> から <span class=\"chem\">n = 7</span> までのドミノの連鎖を 1 段階ずつ進めて、帰納法の仮定 <span class=\"chem\">P(k)</span> が各段階でどのように <span class=\"chem\">P(k + 1)</span> につながるかを確認しましょう。",

    // Proof by mathematical induction > worked example > Additional HL > h3
    "Proving divisibility by mathematical induction": "数学的帰納法による整除性の証明",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Prove by mathematical induction that <span class=\"chem\">f(n) = 5^{2n} - 1</span> is divisible by <span class=\"chem\">24</span> for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>. <strong>[6 marks]</strong>": "すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">f(n) = 5^{2n} - 1</span> が <span class=\"chem\">24</span> で割り切れることを数学的帰納法で証明しなさい (Prove)。 <strong>[6 marks]</strong>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 1: Base case n = 1": "ステップ 1：初期条件 n = 1",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Evaluate f(1) explicitly and show it is an integer multiple of 24.": "f(1) を実際に計算し、24 の整数倍であることを示します。",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "For <i>n</i> = 1: <i>f</i>(1) = 5<sup>2(1)</sup> − 1 = 25 − 1 = 24 = 24(1), which is divisible by 24. Hence <i>P</i>(1) is true. <b>[R1]</b>": "<i>n</i> = 1 のとき：<i>f</i>(1) = 5<sup>2(1)</sup> − 1 = 25 − 1 = 24 = 24(1) となり、24 で割り切れる。よって <i>P</i>(1) は成り立つ。 <b>[R1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 2: Inductive hypothesis n = k": "ステップ 2：帰納法の仮定 n = k",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Assume P(k) holds for some positive integer k, and isolate 5<sup>2k</sup> so we can substitute it cleanly into f(k+1).": "ある正の整数 k に対して P(k) が成り立つと仮定し、f(k+1) に代入しやすいように 5<sup>2k</sup> を孤立させます。",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "Assume <i>P</i>(<i>k</i>) is true for some <i>k</i> ∈ ℤ<sup>+</sup>: 5<sup>2<i>k</i></sup> − 1 = 24<i>A</i> for some <i>A</i> ∈ ℤ ⇒ 5<sup>2<i>k</i></sup> = 24<i>A</i> + 1. <b>[M1]</b>": "ある <i>k</i> ∈ ℤ<sup>+</sup> に対して <i>P</i>(<i>k</i>) が成り立つと仮定する：ある <i>A</i> ∈ ℤ に対して 5<sup>2<i>k</i></sup> − 1 = 24<i>A</i> ⇒ 5<sup>2<i>k</i></sup> = 24<i>A</i> + 1。 <b>[M1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 3: Inductive step n = k + 1": "ステップ 3：帰納段階 n = k + 1",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Rewrite 5<sup>2(k+1)</sup> as 5² · 5<sup>2k</sup> = 25 · 5<sup>2k</sup>, substitute 5<sup>2k</sup> = 24A + 1, and factor out 24.": "5<sup>2(k+1)</sup> を 5² · 5<sup>2k</sup> = 25 · 5<sup>2k</sup> と書き直し、5<sup>2k</sup> = 24A + 1 を代入して 24 をくくり出します。",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "For <i>n</i> = <i>k</i> + 1: <i>f</i>(<i>k</i> + 1) = 5<sup>2(<i>k</i>+1)</sup> − 1 = 5<sup>2</sup> · 5<sup>2<i>k</i></sup> − 1 = 25(24<i>A</i> + 1) − 1 <b>[M1 A1]</b>": "<i>n</i> = <i>k</i> + 1 のとき：<i>f</i>(<i>k</i> + 1) = 5<sup>2(<i>k</i>+1)</sup> − 1 = 5<sup>2</sup> · 5<sup>2<i>k</i></sup> − 1 = 25(24<i>A</i> + 1) − 1 <b>[M1 A1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "<i>f</i>(<i>k</i> + 1) = 25(24<i>A</i>) + 25 − 1 = 24(25<i>A</i> + 1), which is divisible by 24 since 25<i>A</i> + 1 ∈ ℤ. <b>[A1]</b>": "<i>f</i>(<i>k</i> + 1) = 25(24<i>A</i>) + 25 − 1 = 24(25<i>A</i> + 1)。25<i>A</i> + 1 ∈ ℤ より、これは 24 で割り切れる。 <b>[A1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 4: Mandatory conclusion sentence": "ステップ 4：必須の結びの文",

    // Proof by mathematical induction > worked example > Additional HL > p
    "State the principle of mathematical induction linking the base case and the inductive step.": "初期条件と帰納段階を結びつけて数学的帰納法の原理を述べます。",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "Since <i>P</i>(1) is true, and <i>P</i>(<i>k</i>) being true implies <i>P</i>(<i>k</i> + 1) is true, by the principle of mathematical induction <i>P</i>(<i>n</i>) is true for all <i>n</i> ∈ ℤ<sup>+</sup>. <b>[R1]</b>": "<i>P</i>(1) が成り立ち、かつ <i>P</i>(<i>k</i>) が成り立つとき <i>P</i>(<i>k</i> + 1) も成り立つので、数学的帰納法により、すべての <i>n</i> ∈ ℤ<sup>+</sup> に対して <i>P</i>(<i>n</i>) が成り立つ。 <b>[R1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > p
    "f(k+1) = 24(25A + 1), divisible by 24 for all n ∈ ℤ⁺": "f(k+1) = 24(25A + 1)、すべての n ∈ ℤ⁺ に対して 24 で割り切れる",

    // Proof by mathematical induction > try it > Additional HL > p
    "Consider the proposition that <span class=\"chem\">f(n) = 3^{2n} + 7</span> is divisible by <span class=\"chem\">m</span> for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>. By testing <span class=\"chem\">n = 1</span> and <span class=\"chem\">n = 2</span> (or setting up the inductive step <span class=\"chem\">f(k+1) = 9(3^{2k} + 7) - 56</span>), find the largest positive integer <span class=\"chem\">m</span> for which this statement holds for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.": "すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">f(n) = 3^{2n} + 7</span> が <span class=\"chem\">m</span> で割り切れるという命題を考える。<span class=\"chem\">n = 1</span> と <span class=\"chem\">n = 2</span> を調べる（または帰納段階 <span class=\"chem\">f(k+1) = 9(3^{2k} + 7) - 56</span> を立てる）ことにより、すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対してこの命題が成り立つ最大の正の整数 <span class=\"chem\">m</span> を求めなさい (Find)。",

    // Proof by mathematical induction > try it > Additional HL > li
    "Evaluate <span class=\"chem\">f(1) = 3^2 + 7 = 16</span> and <span class=\"chem\">f(2) = 3^4 + 7 = 88</span>.": "<span class=\"chem\">f(1) = 3^2 + 7 = 16</span> と <span class=\"chem\">f(2) = 3^4 + 7 = 88</span> を計算します。",

    // Proof by mathematical induction > try it > Additional HL > li
    "Find <span class=\"chem\">gcd(16, 88)</span>, and notice in the inductive step that <span class=\"chem\">f(k+1) = 9 f(k) - 56 = 8(9A - 7)</span>.": "<span class=\"chem\">gcd(16, 88)</span> を求め、帰納段階で <span class=\"chem\">f(k+1) = 9 f(k) - 56 = 8(9A - 7)</span> となることに注目します。",

    // Proof by mathematical induction > try it > Additional HL > maths line
    "<i>f</i>(1) = 16, <i>f</i>(2) = 88 ⇒ gcd(16, 88) = <b>8</b>": "<i>f</i>(1) = 16, <i>f</i>(2) = 88 ⇒ gcd(16, 88) = <b>8</b>",

    // Proof by mathematical induction > try it > Additional HL > maths line
    "Inductive step: 3<sup>2(<i>k</i>+1)</sup> + 7 = 9(8<i>A</i> − 7) + 7 = 72<i>A</i> − 56 = 8(9<i>A</i> − 7)": "帰納段階：3<sup>2(<i>k</i>+1)</sup> + 7 = 9(8<i>A</i> − 7) + 7 = 72<i>A</i> − 56 = 8(9<i>A</i> − 7)",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-toc attribute
    "Contradiction & counterexamples": "背理法と反例",

    // Proof by contradiction and disproof by counterexample > Additional HL > h2
    "Proof by contradiction and disproof by counterexample": "背理法による証明と反例による反証",

    // Proof by contradiction and disproof by counterexample > Additional HL > h3
    "Proof by contradiction": "背理法による証明",

    // Proof by contradiction and disproof by counterexample > Additional HL > p
    "In a <dfn data-def=\"A proof technique that assumes the negation of the desired statement and deduces a logical impossibility (contradiction), proving the original statement must be true.\">proof by contradiction</dfn>, to prove a statement <span class=\"chem\">P</span> is true, we begin by <strong>assuming <span class=\"chem\">P</span> is false</strong> (its logical negation <span class=\"chem\">not P</span> is true). We then follow valid algebraic steps until we reach a statement that contradicts either our initial assumption or a known mathematical fact.": "<dfn data-def=\"証明したい命題の否定を仮定し、論理的な矛盾を導くことで元の命題が真であることを示す証明法。\">背理法 <span class=\"en-term\">(proof by contradiction)</span></dfn> では、命題 <span class=\"chem\">P</span> が真であることを証明するために、まず<strong><span class=\"chem\">P</span> が偽である</strong>（その否定 <span class=\"chem\">not P</span> が真である）と仮定します。そこから正しい式変形を進めて、最初の仮定または既知の数学的事実と矛盾する結果に到達します。",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-def attribute
    "A proof technique that assumes the negation of the desired statement and deduces a logical impossibility (contradiction), proving the original statement must be true.": "証明したい命題の否定を仮定し、論理的な矛盾を導くことで元の命題が真であることを示す証明法。",

    // Proof by contradiction and disproof by counterexample > Additional HL > h4
    "Two classic IB contradiction proofs": "IB で定番の 2 つの背理法",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<strong>Irrationality of <span class=\"chem\">sqrt(p)</span> (for prime <span class=\"chem\">p</span>, e.g. <span class=\"chem\">sqrt(2), sqrt(3), sqrt(5)</span>)</strong>: Assume <span class=\"chem\">sqrt(p)</span> is rational, so <span class=\"chem\">sqrt(p) = a / b</span> where <span class=\"chem\">a, b \\in \\mathbb{Z}^+</span> and <strong><span class=\"chem\">gcd(a, b) = 1</span> (no common factors)</strong>. Squaring gives <span class=\"chem\">a^2 = p b^2</span>, so <span class=\"chem\">p</span> divides <span class=\"chem\">a^2</span>, which (since <span class=\"chem\">p</span> is prime) implies <span class=\"chem\">p</span> divides <span class=\"chem\">a</span>. Write <span class=\"chem\">a = p k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>); substituting gives <span class=\"chem\">p^2 k^2 = p b^2 =&gt; b^2 = p k^2</span>, so <span class=\"chem\">p</span> also divides <span class=\"chem\">b</span>. Thus <span class=\"chem\">p</span> is a common factor of <span class=\"chem\">a</span> and <span class=\"chem\">b</span>, contradicting <span class=\"chem\">gcd(a, b) = 1</span>!": "<strong><span class=\"chem\">sqrt(p)</span> の無理数性（素数 <span class=\"chem\">p</span>、例：<span class=\"chem\">sqrt(2), sqrt(3), sqrt(5)</span>）</strong>：<span class=\"chem\">sqrt(p)</span> が有理数であると仮定し、<span class=\"chem\">a, b \\in \\mathbb{Z}^+</span> かつ <strong><span class=\"chem\">gcd(a, b) = 1</span>（公約数なし）</strong>として <span class=\"chem\">sqrt(p) = a / b</span> とおきます。両辺を 2 乗すると <span class=\"chem\">a^2 = p b^2</span> となるので <span class=\"chem\">p</span> は <span class=\"chem\">a^2</span> を割り切り、（<span class=\"chem\">p</span> は素数なので）<span class=\"chem\">p</span> は <span class=\"chem\">a</span> を割り切ります。<span class=\"chem\">a = p k</span>（<span class=\"chem\">k \\in \\mathbb{Z}</span>）とおいて代入すると <span class=\"chem\">p^2 k^2 = p b^2 =&gt; b^2 = p k^2</span> となり、<span class=\"chem\">p</span> は <span class=\"chem\">b</span> も割り切ります。よって <span class=\"chem\">p</span> は <span class=\"chem\">a</span> と <span class=\"chem\">b</span> の公約数となり、<span class=\"chem\">gcd(a, b) = 1</span> に矛盾します。",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<strong>Irrationality of <span class=\"chem\">log_a b</span> (when <span class=\"chem\">a, b</span> have different prime factors, e.g. <span class=\"chem\">log_2 5</span>)</strong>: Assume <span class=\"chem\">log_2 5 = p / q</span> where <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>. Rewriting in exponential form gives <span class=\"chem\">2^{p/q} = 5 =&gt; 2^p = 5^q</span>. However, for any <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>, <span class=\"chem\">2^p</span> is always <strong>even</strong> while <span class=\"chem\">5^q</span> is always <strong>odd</strong>—a contradiction!": "<strong><span class=\"chem\">log_a b</span> の無理数性（<span class=\"chem\">a, b</span> が異なる素因数をもつとき、例：<span class=\"chem\">log_2 5</span>）</strong>：<span class=\"chem\">p, q \\in \\mathbb{Z}^+</span> として <span class=\"chem\">log_2 5 = p / q</span> と仮定します。指数の形に直すと <span class=\"chem\">2^{p/q} = 5 =&gt; 2^p = 5^q</span> となります。しかし任意の <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">2^p</span> は常に<strong>偶数</strong>、一方 <span class=\"chem\">5^q</span> は常に<strong>奇数</strong>であるため矛盾します。",

    // Proof by contradiction and disproof by counterexample > Additional HL > h3
    "Disproof by counterexample": "反例による反証",

    // Proof by contradiction and disproof by counterexample > Additional HL > p
    "To prove a universal statement (“For all <span class=\"chem\">x \\in S</span>, property <span class=\"chem\">Q(x)</span> holds”) is <strong>false</strong>, you only need to exhibit <strong>one single <dfn data-def=\"A specific example that satisfies the hypothesis of a general statement but makes its conclusion false.\">counterexample</dfn></strong> <span class=\"chem\">x_0 \\in S</span> for which <span class=\"chem\">Q(x_0)</span> is false. (Disproof by counterexample is examinable in May 2028.)": "全称命題（「すべての <span class=\"chem\">x \\in S</span> に対して性質 <span class=\"chem\">Q(x)</span> が成り立つ」）が<strong>偽</strong>であることを示すには、<span class=\"chem\">Q(x_0)</span> が成り立たない<strong>たった 1 つの<dfn data-def=\"一般的な命題の仮定を満たしながら、その結論を偽にする具体的な例。\">反例 <span class=\"en-term\">(counterexample)</span></dfn></strong> <span class=\"chem\">x_0 \\in S</span> を挙げるだけで十分です。（反例による反証は 2028 年 5 月の試験の出題範囲です。）",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-def attribute
    "A specific example that satisfies the hypothesis of a general statement but makes its conclusion false.": "一般的な命題の仮定を満たしながら、その結論を偽にする具体的な例。",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<em>Conjecture:</em> “For all real numbers <span class=\"chem\">x, y</span>, if <span class=\"chem\">x^2 &gt; y^2</span>, then <span class=\"chem\">x &gt; y</span>.” → <strong>False</strong>: take <span class=\"chem\">x = -3, y = 1</span>. Then <span class=\"chem\">x^2 = 9 &gt; 1 = y^2</span>, but <span class=\"chem\">-3 &lt; 1</span>.": "<em>予想：</em>「すべての実数 <span class=\"chem\">x, y</span> に対して、<span class=\"chem\">x^2 &gt; y^2</span> ならば <span class=\"chem\">x &gt; y</span> である。」→ <strong>偽</strong>：<span class=\"chem\">x = -3, y = 1</span> とすると、<span class=\"chem\">x^2 = 9 &gt; 1 = y^2</span> ですが <span class=\"chem\">-3 &lt; 1</span> です。",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<em>Conjecture:</em> “<span class=\"chem\">n^2 + n + 41</span> is prime for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.” → <strong>False</strong>: take <span class=\"chem\">n = 41</span>. Then <span class=\"chem\">41^2 + 41 + 41 = 41(41 + 1 + 1) = 41 × 43</span>, which is composite.": "<em>予想：</em>「すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> に対して <span class=\"chem\">n^2 + n + 41</span> は素数である。」→ <strong>偽</strong>：<span class=\"chem\">n = 41</span> とすると、<span class=\"chem\">41^2 + 41 + 41 = 41(41 + 1 + 1) = 41 × 43</span> となり合成数です。",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > h3
    "Proving irrationality by contradiction": "背理法による無理数性の証明",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Prove by contradiction that <span class=\"chem\">sqrt(3)</span> is irrational. <strong>[5 marks]</strong>": "<span class=\"chem\">sqrt(3)</span> が無理数であることを背理法で証明しなさい (Prove)。 <strong>[5 marks]</strong>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Assume the negation in lowest terms (coprime integers)": "命題の否定を既約分数（互いに素な整数）として仮定する",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Assume √3 is rational and write it as a fraction a/b where a and b share no common factors other than 1.": "√3 が有理数であると仮定し、1 以外に公約数をもたない整数 a, b の分数 a/b として表します。",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Assume, for a contradiction, that √3 is rational, so √3 = <span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span> where <i>a</i>, <i>b</i> ∈ ℤ<sup>+</sup> and gcd(<i>a</i>, <i>b</i>) = 1. <b>[M1]</b>": "矛盾を導くため、√3 が有理数であると仮定する。すなわち、√3 = <span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span>（<i>a</i>, <i>b</i> ∈ ℤ<sup>+</sup> かつ gcd(<i>a</i>, <i>b</i>) = 1）と表せる。 <b>[M1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Square both sides and deduce that 3 divides a": "両辺を 2 乗して 3 が a を割り切ることを導く",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Since 3 is prime, if 3 divides a², then 3 must divide a itself.": "3 は素数なので、3 が a² を割り切るならば、3 は a 自身も割り切ります。",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "3 = <span class=\"frac\"><span><i>a</i><sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> ⇒ <i>a</i><sup>2</sup> = 3<i>b</i><sup>2</sup>. Hence 3 divides <i>a</i><sup>2</sup>, and since 3 is prime, 3 divides <i>a</i>. <b>[M1 A1]</b>": "3 = <span class=\"frac\"><span><i>a</i><sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> ⇒ <i>a</i><sup>2</sup> = 3<i>b</i><sup>2</sup>。よって 3 は <i>a</i><sup>2</sup> を割り切り、3 は素数なので 3 は <i>a</i> を割り切る。 <b>[M1 A1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Substitute a = 3k to deduce that 3 also divides b, giving a contradiction": "a = 3k を代入して 3 が b も割り切ることを導き、矛盾を得る",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Showing 3 divides both a and b contradicts gcd(a, b) = 1.": "3 が a と b の両方を割り切ることは gcd(a, b) = 1 に矛盾します。",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Let <i>a</i> = 3<i>k</i> (<i>k</i> ∈ ℤ). Then (3<i>k</i>)<sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ 9<i>k</i><sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ <i>b</i><sup>2</sup> = 3<i>k</i><sup>2</sup>. <b>[M1]</b>": "<i>a</i> = 3<i>k</i>（<i>k</i> ∈ ℤ）とおくと、(3<i>k</i>)<sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ 9<i>k</i><sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ <i>b</i><sup>2</sup> = 3<i>k</i><sup>2</sup>。 <b>[M1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Thus 3 also divides <i>b</i><sup>2</sup> and hence 3 divides <i>b</i>. This contradicts gcd(<i>a</i>, <i>b</i>) = 1; therefore √3 is irrational. <b>[R1]</b>": "よって 3 は <i>b</i><sup>2</sup> も割り切り、したがって 3 は <i>b</i> を割り切る。これは gcd(<i>a</i>, <i>b</i>) = 1 に矛盾するため、√3 は無理数である。 <b>[R1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "3 divides both a and b, contradicting gcd(a, b) = 1 ⇒ √3 is irrational": "3 は a と b の両方を割り切り、gcd(a, b) = 1 に矛盾 ⇒ √3 は無理数",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > p
    "A student claims that the number <span class=\"chem\">f(n) = 2^n - 1</span> is prime for every prime number <span class=\"chem\">n</span>. While this is true for <span class=\"chem\">n = 2, 3, 5, 7</span>, it fails at the next prime <span class=\"chem\">n = 11</span> because <span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span>. Now consider a simpler claim: “<span class=\"chem\">n^2 - n + 5</span> is prime for all positive integers <span class=\"chem\">n</span>.” Find the smallest integer <span class=\"chem\">n &gt;= 2</span> that serves as a counterexample.": "ある生徒が「すべての素数 <span class=\"chem\">n</span> に対して <span class=\"chem\">f(n) = 2^n - 1</span> は素数である」と主張した。これは <span class=\"chem\">n = 2, 3, 5, 7</span> では成り立つが、次の素数 <span class=\"chem\">n = 11</span> では <span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span> となり成り立たない。では、より簡単な主張「すべての正の整数 <span class=\"chem\">n</span> に対して <span class=\"chem\">n^2 - n + 5</span> は素数である」を考えよう。反例となる最小の整数 <span class=\"chem\">n &gt;= 2</span> を求めなさい (Find)。",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > li
    "Test <span class=\"chem\">n = 2, 3, 4, 5</span> in <span class=\"chem\">n^2 - n + 5</span>.": "<span class=\"chem\">n^2 - n + 5</span> に <span class=\"chem\">n = 2, 3, 4, 5</span> を代入して調べます。",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > li
    "For <span class=\"chem\">n = 2</span>: <span class=\"chem\">7</span> (prime). For <span class=\"chem\">n = 3</span>: <span class=\"chem\">11</span> (prime). For <span class=\"chem\">n = 4</span>: <span class=\"chem\">17</span> (prime). What happens at <span class=\"chem\">n = 5</span>?": "<span class=\"chem\">n = 2</span> で <span class=\"chem\">7</span>（素数）、<span class=\"chem\">n = 3</span> で <span class=\"chem\">11</span>（素数）、<span class=\"chem\">n = 4</span> で <span class=\"chem\">17</span>（素数）です。<span class=\"chem\">n = 5</span> ではどうなりますか？",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > maths line
    "For <i>n</i> = <b>5</b>: 5<sup>2</sup> − 5 + 5 = 25 = 5 × 5, which is composite (not prime).": "<i>n</i> = <b>5</b> のとき：5<sup>2</sup> − 5 + 5 = 25 = 5 × 5 となり、合成数（素数ではない）になります。",

    // Systems of linear equations (up to 3 variables) > Additional HL > data-toc attribute
    "3×3 linear systems": "3×3 連立一次方程式",

    // Systems of linear equations (up to 3 variables) > Additional HL > h2
    "Systems of linear equations (up to 3 variables)": "連立一次方程式（最大 3 変数）",

    // Systems of linear equations (up to 3 variables) > Additional HL > p
    "A system of three linear equations in three unknowns <span class=\"chem\">x, y, z</span> represents three planes in 3D space (AHL 3.18, site page 3.3). We solve and classify the system algebraically using <dfn data-def=\"The systematic use of elementary row operations (swapping rows, scaling a row by a non-zero constant, adding a multiple of one row to another) to reduce a system to upper-triangular (echelon) form.\">Gaussian elimination</dfn>: use the first equation to eliminate <span class=\"chem\">x</span> from equations 2 and 3, then use the new second equation to eliminate <span class=\"chem\">y</span> from equation 3, arriving at an upper-triangular (row-echelon) system:": "3 つの未知数 <span class=\"chem\">x, y, z</span> をもつ 3 元連立一次方程式は、3 次元空間における 3 つの平面を表します（AHL 3.18、サイトのページ 3.3）。これを代数的に解いて分類するには<dfn data-def=\"行基本変形（行の入れ替え、0 でない定数倍、ある行の定数倍を別の行に加える）を体系的に使い、連立方程式を上三角型（階段形）に変形する方法。\">ガウスの消去法 <span class=\"en-term\">(Gaussian elimination)</span></dfn> を使います：第 1 式を使って第 2 式と第 3 式から <span class=\"chem\">x</span> を消去し、次に新しい第 2 式を使って第 3 式から <span class=\"chem\">y</span> を消去して上三角型に変形します：",

    // Systems of linear equations (up to 3 variables) > Additional HL > data-def attribute
    "The systematic use of elementary row operations (swapping rows, scaling a row by a non-zero constant, adding a multiple of one row to another) to reduce a system to upper-triangular (echelon) form.": "行基本変形（行の入れ替え、0 でない定数倍、ある行の定数倍を別の行に加える）を体系的に使い、連立方程式を上三角型（階段形）に変形する方法。",

    // Systems of linear equations (up to 3 variables) > Additional HL > h3
    "Classifying the 3 outcomes from the final reduced row <span class=\"chem\">g(k) z = h(k)</span>": "最終行 <span class=\"chem\">g(k) z = h(k)</span> による 3 つの解の分類",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > caption
    "Classification of a 3 × 3 linear system after Gaussian elimination": "ガウスの消去法後の 3 × 3 連立一次方程式の分類",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "Condition on Row 3: <span class=\"chem\">g(k) z = h(k)</span>": "第 3 行 <span class=\"chem\">g(k) z = h(k)</span> の条件",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "Algebraic outcome": "代数的な解の型",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "3D geometric meaning (AHL 3.18, site page 3.3)": "3 次元空間での幾何学的意味 (AHL 3.18、サイトのページ 3.3)",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>Unique solution</strong> (consistent): <span class=\"chem\">z = h(k) / g(k)</span>, then back-substitute to find unique <span class=\"chem\">y</span> and <span class=\"chem\">x</span>.": "<strong>唯一の解</strong>（整合）：<span class=\"chem\">z = h(k) / g(k)</span> と決まり、後退代入によって <span class=\"chem\">y</span> と <span class=\"chem\">x</span> も一意に定まります。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The three planes intersect at a <strong>single point</strong> <span class=\"chem\">(x, y, z)</span>.": "3 つの平面が<strong>1 点</strong> <span class=\"chem\">(x, y, z)</span> で交わります。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "<strong><span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) != 0</span></strong>": "<strong><span class=\"chem\">g(k) = 0</span> かつ <span class=\"chem\">h(k) != 0</span></strong>",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>No solution</strong> (inconsistent): Row 3 reads <span class=\"chem\">0 = h(k) != 0</span>, which is impossible.": "<strong>解なし</strong>（不整合）：第 3 行が <span class=\"chem\">0 = h(k) != 0</span> となり矛盾します。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The planes form a <strong>triangular prism</strong> (pairwise intersecting in 3 parallel lines) or two/three planes are parallel and distinct.": "3 つの平面が<strong>三角柱</strong>（2 枚ずつ 3 本の平行な交線で交わる）を作るか、2 枚または 3 枚の平面が平行で一致しません。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "<strong><span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) = 0</span></strong>": "<strong><span class=\"chem\">g(k) = 0</span> かつ <span class=\"chem\">h(k) = 0</span></strong>",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>Infinitely many solutions</strong> (dependent): Row 3 reads <span class=\"chem\">0 = 0</span>. Let <span class=\"chem\">z = lambda</span> (<span class=\"chem\">lambda \\in \\mathbb{R}</span>) and back-substitute into Row 2 and Row 1.": "<strong>無数の解</strong>（従属）：第 3 行が <span class=\"chem\">0 = 0</span> となります。<span class=\"chem\">z = lambda</span>（<span class=\"chem\">lambda \\in \\mathbb{R}</span>）とおいて第 2 行・第 1 行に後退代入します。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The three planes meet along a common <strong>line of intersection</strong> <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + \\lambda \\mathbf{b}</span> (a sheaf of planes) or are coincident.": "3 つの平面が 1 本の共通の<strong>交線</strong> <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + \\lambda \\mathbf{b}</span> で交わる（平面束）か、または一致します。",

    // Systems of linear equations (up to 3 variables) > not needed for IB > Additional HL > p
    "<strong>Not needed for IB Math AA HL:</strong> Matrix algebra, <span class=\"chem\">3 × 3</span> determinants (<span class=\"chem\">det(A) = 0</span>), inverse matrices <span class=\"chem\">A^{-1}</span>, Cramer's rule and eigenvalues are <strong>not in the IB Math AA HL syllabus</strong>.": "<strong>IB Math AA HL の範囲外：</strong> 行列の演算、<span class=\"chem\">3 × 3</span> 行列式（<span class=\"chem\">det(A) = 0</span>）、逆行列 <span class=\"chem\">A^{-1}</span>、クラメルの公式、固有値は <strong>IB Math AA HL のシラバスには含まれません</strong>。",

    // Systems of linear equations (up to 3 variables) > exam tip (shown in English + translation) > Additional HL > p
    "<strong>Row reduction is examinable (AHL 1.16):</strong> you may write the row operations on an augmented matrix, and on Paper 2 you should use your GDC's system solver or rref to solve or check a system with numerical coefficients. With a parameter <span class=\"chem\">k</span>, use elimination (row reduction) to reach <span class=\"chem\">g(k)z = h(k)</span>: a zero coefficient alone cannot tell <em>no solution</em> from <em>infinitely many solutions</em>, so check the consistency of the right-hand side.": "<strong>行基本変形は出題範囲です (AHL 1.16)：</strong>行基本変形を拡大係数行列で書いてもよく、Paper 2 では数値係数の連立方程式を GDC の連立方程式ソルバーや rref で解いたり検算したりしましょう。パラメーター <span class=\"chem\">k</span> を含む場合は、消去法（行基本変形）で <span class=\"chem\">g(k)z = h(k)</span> の形に持ち込みます。係数が 0 になるだけでは<em>解なし</em>と<em>無数の解</em>を区別できないので、右辺が矛盾しないかを確認しましょう。",

    // Systems of linear equations (up to 3 variables) > common mistake > Additional HL > p
    "<strong>Never divide a row by an expression containing the parameter <span class=\"chem\">k</span>!</strong> Dividing Row 2 by <span class=\"chem\">(k - 2)</span> silently assumes <span class=\"chem\">k != 2</span>, which destroys the exact singular value the question is asking you to investigate. Multiply rows by constants or expressions only when keeping track of zero factors.": "<strong>パラメーター <span class=\"chem\">k</span> を含む式で行を割ってはいけません！</strong> 第 2 行を <span class=\"chem\">(k - 2)</span> で割ると暗黙のうちに <span class=\"chem\">k != 2</span> を仮定してしまい、問題が調べさせようとしているまさにその特異な値が失われます。行を定数倍するときは 0 になる因数を常に意識しましょう。",

    // Systems of linear equations (up to 3 variables) > widget > Additional HL > data-title attribute
    "3D planes & 3×3 linear system classifier": "3 次元の平面＆3×3 連立一次方程式の分類",

    // Systems of linear equations (up to 3 variables) > widget > Additional HL > figcaption
    "Explore the three geometric configurations of a <span class=\"chem\">3 × 3</span> linear system in 3D space—a unique point of intersection, a sheaf of planes meeting along a line (infinitely many solutions), and a triangular prism of planes (no solution)—alongside their reduced echelon rows.": "3 次元空間における <span class=\"chem\">3 × 3</span> 連立一次方程式の 3 つの幾何学的配置（1 点で交わる、1 本の交線を共有する平面束＝無数の解、三角柱をなす＝解なし）と、変形後の階段形を見比べてみましょう。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > h3
    "Finding parameter values for no solution and infinitely many solutions": "解なし・無数の解となるパラメーターの値を求める",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Consider the system of linear equations:": "次の連立一次方程式を考える：",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "<span class=\"chem\">x + y + z = 2</span><br> <span class=\"chem\">2x + 3y + 4z = 5</span><br> <span class=\"chem\">3x + 4y + (k^2 - 4)z = k + 4</span>, &nbsp; where <span class=\"chem\">k \\in \\mathbb{R}</span>.": "<span class=\"chem\">x + y + z = 2</span><br> <span class=\"chem\">2x + 3y + 4z = 5</span><br> <span class=\"chem\">3x + 4y + (k^2 - 4)z = k + 4</span>, &nbsp; （ただし <span class=\"chem\">k \\in \\mathbb{R}</span>）。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(a) Find the value(s) of <span class=\"chem\">k</span> for which the system has: (i) a unique solution, (ii) no solution, (iii) infinitely many solutions. <strong>[6 marks]</strong>": "(a) この連立方程式が (i) 唯一の解、(ii) 解なし、(iii) 無数の解をもつような <span class=\"chem\">k</span> の値を求めなさい (Find)。 <strong>[6 marks]</strong>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(b) For the value of <span class=\"chem\">k</span> that gives infinitely many solutions, find the general solution in terms of a real parameter <span class=\"chem\">lambda</span>. <strong>[2 marks]</strong>": "(b) 無数の解をもつ <span class=\"chem\">k</span> の値に対して、実数パラメーター <span class=\"chem\">lambda</span> を用いて一般解を求めなさい (Find)。 <strong>[2 marks]</strong>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Eliminate x from equations 2 and 3 using R₂ → R₂ − 2R₁ and R₃ → R₃ − 3R₁": "R₂ → R₂ − 2R₁ と R₃ → R₃ − 3R₁ を使って第 2 式・第 3 式から x を消去する",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Subtracting 2×(Row 1) from Row 2 and 3×(Row 1) from Row 3 zeroes out the x-column below Row 1.": "第 2 行から 2×(第 1 行)、第 3 行から 3×(第 1 行) を引いて、第 1 行より下の x の係数を 0 にします。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Eliminate y from equation 3 using R₃ → R₃ − R₂ and classify by k": "R₃ → R₃ − R₂ を使って第 3 式から y を消去し、k で分類する",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Subtracting the new Row 2 from the new Row 3 isolates z in the form g(k)z = h(k).": "新しい第 3 行から新しい第 2 行を引いて、z を g(k)z = h(k) の形にまとめます。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "(i) <b>Unique solution</b>: <i>k</i><sup>2</sup> − 9 ≠ 0 ⇒ <b><i>k</i> ≠ 3 and <i>k</i> ≠ −3</b>.<br>(ii) <b>No solution</b>: <i>k</i> = −3 gives 0<i>z</i> = −6 (inconsistent), so <b><i>k</i> = −3</b>.<br>(iii) <b>Infinite solutions</b>: <i>k</i> = 3 gives 0<i>z</i> = 0, so <b><i>k</i> = 3</b>. <b>[A1]</b>": "(i) <b>唯一の解</b>：<i>k</i><sup>2</sup> − 9 ≠ 0 ⇒ <b><i>k</i> ≠ 3 かつ <i>k</i> ≠ −3</b>。<br>(ii) <b>解なし</b>：<i>k</i> = −3 のとき 0<i>z</i> = −6（矛盾）となるので <b><i>k</i> = −3</b>。<br>(iii) <b>無数の解</b>：<i>k</i> = 3 のとき 0<i>z</i> = 0 となるので <b><i>k</i> = 3</b>。 <b>[A1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Set z = λ for k = 3 and back-substitute into Row 2 and Row 1": "k = 3 のとき z = λ とおき、第 2 行と第 1 行に後退代入する",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "With Row 3 reduced to 0 = 0, z is a free parameter λ ∈ ℝ.": "第 3 行が 0 = 0 になったため、z は自由なパラメーター λ ∈ ℝ になります。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "Let <i>z</i> = <i>λ</i> (<i>λ</i> ∈ ℝ). From <i>R</i><sub>2</sub>: <i>y</i> = 1 − 2<i>z</i> = <b>1 − 2<i>λ</i></b> <b>[M1]</b>": "<i>z</i> = <i>λ</i>（<i>λ</i> ∈ ℝ）とおく。<i>R</i><sub>2</sub> より：<i>y</i> = 1 − 2<i>z</i> = <b>1 − 2<i>λ</i></b> <b>[M1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "From <i>R</i><sub>1</sub>: <i>x</i> = 2 − <i>y</i> − <i>z</i> = 2 − (1 − 2<i>λ</i>) − <i>λ</i> = <b>1 + <i>λ</i></b> <b>[A1]</b>": "<i>R</i><sub>1</sub> より：<i>x</i> = 2 − <i>y</i> − <i>z</i> = 2 − (1 − 2<i>λ</i>) − <i>λ</i> = <b>1 + <i>λ</i></b> <b>[A1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(a) Unique: k ≠ ±3; No solution: k = −3; Infinite: k = 3 &nbsp;&nbsp; (b) (x, y, z) = (1 + λ, 1 − 2λ, λ)": "(a) 唯一の解：k ≠ ±3；解なし：k = −3；無数の解：k = 3 &nbsp;&nbsp; (b) (x, y, z) = (1 + λ, 1 − 2λ, λ)",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > p
    "The system of equations <span class=\"chem\">x + 2y - z = 3</span>, <span class=\"chem\">2x + 5y + z = 8</span>, and <span class=\"chem\">3x + 7y + kz = 11</span> has <strong>infinitely many solutions</strong> for a specific real constant <span class=\"chem\">k</span>. When <span class=\"chem\">z = 2</span>, find the value of <span class=\"chem\">x + y + k</span>.": "連立方程式 <span class=\"chem\">x + 2y - z = 3</span>、<span class=\"chem\">2x + 5y + z = 8</span>、<span class=\"chem\">3x + 7y + kz = 11</span> が、ある実定数 <span class=\"chem\">k</span> に対して<strong>無数の解</strong>をもつ。<span class=\"chem\">z = 2</span> のとき、<span class=\"chem\">x + y + k</span> の値を求めなさい (Find)。",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > li
    "Notice that <span class=\"chem\">R_1 + R_2</span> on the left-hand side has <span class=\"chem\">(1+2)x + (2+5)y = 3x + 7y</span>, which matches <span class=\"chem\">R_3</span>! Also <span class=\"chem\">3 + 8 = 11</span>. Thus for infinite solutions we need <span class=\"chem\">k = -1 + 1 = 0</span>.": "左辺で <span class=\"chem\">R_1 + R_2</span> を計算すると <span class=\"chem\">(1+2)x + (2+5)y = 3x + 7y</span> となり、<span class=\"chem\">R_3</span> と一致します！また右辺も <span class=\"chem\">3 + 8 = 11</span> です。よって無数の解をもつには <span class=\"chem\">k = -1 + 1 = 0</span> が必要です。",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > li
    "Now set <span class=\"chem\">z = 2</span> in <span class=\"chem\">x + 2y = 3 + z = 5</span> and <span class=\"chem\">2x + 5y = 8 - z = 6</span> to find <span class=\"chem\">x = 13, y = -4</span>, and compute <span class=\"chem\">x + y + k</span>.": "次に <span class=\"chem\">x + 2y = 3 + z = 5</span> と <span class=\"chem\">2x + 5y = 8 - z = 6</span> に <span class=\"chem\">z = 2</span> を代入して <span class=\"chem\">x = 13, y = -4</span> を求め、<span class=\"chem\">x + y + k</span> を計算します。",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > maths line
    "For <i>z</i> = 2: <i>y</i> = 2 − 3(2) = −4, <i>x</i> = 3 − 2(−4) + 2 = 13 ⇒ <i>x</i> + <i>y</i> + <i>k</i> = 13 − 4 + 0 = <b>9</b>": "<i>z</i> = 2 のとき：<i>y</i> = 2 − 3(2) = −4, <i>x</i> = 3 − 2(−4) + 2 = 13 ⇒ <i>x</i> + <i>y</i> + <i>k</i> = 13 − 4 + 0 = <b>9</b>",

    // Check your understanding > data-toc attribute
    "Practice": "演習問題",

    // Check your understanding > h2
    "Check your understanding": "理解度チェック",

    // Check your understanding > data-title attribute
    "Topic 1.5 practice check": "Topic 1.5 確認問題",

    // widget string (assets/js/widgets-t1-5.js)
    "Proposition P(n)": "命題 P(n)",

    // widget string (assets/js/widgets-t1-5.js)
    "Sum of squares: Σ r² = n(n+1)(2n+1)/6": "平方の和：Σ r² = n(n+1)(2n+1)/6",

    // widget string (assets/js/widgets-t1-5.js)
    "Sum of odd integers: Σ (2r − 1) = n²": "奇数の和：Σ (2r − 1) = n²",

    // widget string (assets/js/widgets-t1-5.js)
    "Divisibility: 5²ⁿ − 1 is divisible by 24": "整除性：5²ⁿ − 1 は 24 で割り切れる",

    // widget string (assets/js/widgets-t1-5.js)
    "Inductive step index k (proving P(k) ⇒ P(k+1))": "帰納段階の番号 k（P(k) ⇒ P(k+1) を証明）",

    // widget string (assets/js/widgets-t1-5.js)
    "Step k → k + 1": "ステップ k → k + 1",

    // widget string (assets/js/widgets-t1-5.js)
    "1. Base case P(1)": "1. 初期条件 P(1)",

    // widget string (assets/js/widgets-t1-5.js)
    "2. Inductive hypothesis P(k)": "2. 帰納法の仮定 P(k)",

    // widget string (assets/js/widgets-t1-5.js)
    "3. Inductive step P(k + 1)": "3. 帰納段階 P(k + 1)",

    // widget string (assets/js/widgets-t1-5.js)
    "Numerical check at n = k + 1": "n = k + 1 での数値確認",

    // widget string (assets/js/widgets-t1-5.js)
    "Domino chain showing P(1) through P(7) falling by mathematical induction": "数学的帰納法によって P(1) から P(7) まで倒れるドミノの連鎖",

    // widget string (assets/js/widgets-t1-5.js)
    "Base": "初期条件",

    // widget string (assets/js/widgets-t1-5.js)
    "3 × 3 System Configuration": "3 × 3 連立方程式の配置",

    // widget string (assets/js/widgets-t1-5.js)
    "Unique solution (k = 1): 3 planes meet at 1 point": "唯一の解 (k = 1)：3 平面が 1 点で交わる",

    // widget string (assets/js/widgets-t1-5.js)
    "Infinite solutions (k = 3): sheaf of 3 planes meeting on a line": "無数の解 (k = 3)：3 平面が 1 本の直線で交わる（平面束）",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (k = −3): 3 planes form a triangular prism": "解なし (k = −3)：3 平面が三角柱を作る",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution: parallel planes": "解なし：平行な平面",

    // widget string (assets/js/widgets-t1-5.js)
    "System used (worked example below)": "使用する連立方程式（下の例題）",

    // widget string (assets/js/widgets-t1-5.js)
    "x + y + z = 2, 2x + 3y + 4z = 5, 3x + 4y + (k² − 4)z = k + 4. The plane drawings are schematic.": "x + y + z = 2, 2x + 3y + 4z = 5, 3x + 4y + (k² − 4)z = k + 4。平面の図は模式図です。",

    // widget string (assets/js/widgets-t1-5.js)
    "Reduced Row 3: g(k)z = h(k)": "変形後の第 3 行：g(k)z = h(k)",

    // widget string (assets/js/widgets-t1-5.js)
    "Algebraic classification": "代数的な分類",

    // widget string (assets/js/widgets-t1-5.js)
    "3D geometric intersection": "3 次元の幾何学的交わり",

    // widget string (assets/js/widgets-t1-5.js)
    "Unique solution: (x, y, z) = (5/4, 1/2, 1/4)": "唯一の解：(x, y, z) = (5/4, 1/2, 1/4)",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes intersect at a single point P": "3 つの平面が 1 点 P で交わる",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes intersecting at a single unique point in 3D space": "3 次元空間内のただ 1 つの点で交わる 3 つの平面",

    // widget string (assets/js/widgets-t1-5.js)
    "Infinitely many solutions: (x, y, z) = (1 + λ, 1 − 2λ, λ), λ ∈ ℝ": "無数の解：(x, y, z) = (1 + λ, 1 − 2λ, λ), λ ∈ ℝ",

    // widget string (assets/js/widgets-t1-5.js)
    "Sheaf of 3 planes sharing a common line of intersection": "共通の交線を共有する 3 平面の束",

    // widget string (assets/js/widgets-t1-5.js)
    "Sheaf of three planes intersecting along a single common line": "1 本の共通の直線に沿って交わる 3 つの平面の束",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (inconsistent system: 0 = −6)": "解なし（不整合な連立方程式：0 = −6）",

    // widget string (assets/js/widgets-t1-5.js)
    "Triangular prism: pairs of planes meet in 3 parallel lines": "三角柱：2 平面ずつの交線が 3 本の平行線になる",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes forming a triangular prism with no common intersection": "共通の交点をもたず三角柱をなす 3 つの平面",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (inconsistent: parallel planes never meet)": "解なし（不整合：平行な平面は交わらない）",

    // widget string (assets/js/widgets-t1-5.js)
    "At least two planes are strictly parallel and distinct": "少なくとも 2 つの平面が平行で異なる",

    // widget string (assets/js/widgets-t1-5.js)
    "Three parallel distinct planes with no common intersection": "共通の交点をもたない 3 つの互いに平行な平面",

  }
});
