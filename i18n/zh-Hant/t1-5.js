/* t1-5 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-5', {
  strings: {

    // page title (browser tab)
    "1.5 Mathematical proof and systems of linear equations | Analysis Lab": "1.5 數學證明與線性方程組 | Analysis Lab",

    // Mathematical proof and systems of linear equations > page header > p
    "Topic 1.5 · SL 1.6 + AHL 1.15–1.16": "課題 1.5 · SL 1.6 + AHL 1.15–1.16",

    // Mathematical proof and systems of linear equations > page header > h1
    "Mathematical proof and systems of linear equations": "數學證明與線性方程組",

    // Mathematical proof and systems of linear equations > page header > span
    "How do we establish beyond doubt that a mathematical statement holds for infinitely many cases—or determine exactly when a system of equations has one, none, or infinitely many solutions?": "我們如何毫無疑問地證明一個數學命題對無窮多個情況都成立？又如何準確判斷線性方程組何時有唯一解、無解或無限多解？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > span
    "Construct a rigorous left-hand-side to right-hand-side (<span class=\"chem\">LHS -&gt; RHS</span>) algebraic proof for identities, parity properties, and positivity (by completing the square).": "建構嚴謹的由左方推導至右方（<span class=\"chem\">LHS -&gt; RHS</span>）代數證明，涵蓋恒等式、奇偶性質及正定性（透過配方法）。",

    // What you need to be able to do > checklist > Additional HL > span
    "Prove statements involving series, divisibility, derivatives, and inequalities by mathematical induction using the full IB four-step structure and conclusion sentence.": "運用完整的 IB 四步結構及總結句，以數學歸納法證明涉及級數、整除性、導數與不等式的命題。",

    // What you need to be able to do > checklist > Additional HL > span
    "Use proof by contradiction to establish irrationality (such as <span class=\"chem\">sqrt(2)</span> or <span class=\"chem\">log_2 5</span>) and parity/divisibility results.": "運用反證法證明無理數（例如 <span class=\"chem\">sqrt(2)</span> 或 <span class=\"chem\">log_2 5</span>）及奇偶性／整除性結論。",

    // What you need to be able to do > checklist > Additional HL > span
    "Disprove a universal conjecture by providing a single explicit counterexample.": "透過舉出單一明確的反例，推翻全稱猜想。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve up to <span class=\"chem\">3 × 3</span> systems of linear equations both algebraically (Gaussian elimination) and with technology (GDC solver or row reduction), and determine conditions on a parameter <span class=\"chem\">k</span> for a unique solution, no solution, or infinitely many solutions.": "以代數方法（高斯消去法）及科技方法（GDC 求解功能或列運算）解最多 <span class=\"chem\">3 × 3</span> 的線性方程組，並求參數 <span class=\"chem\">k</span> 滿足唯一解、無解或無限多解的條件。",

    // Question decoder: spotting which proof or system method to u > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which proof or system method to u > h2
    "Question decoder: spotting which proof or system method to use": "題型解碼：如何辨識應用的證明或方程組方法",

    // Question decoder: spotting which proof or system method to u > p
    "Proof and linear system questions use strict IB command terms. Use this decoder to match the exact exam wording to the required layout and markscheme checkpoints.": "證明題與線性方程組題目採用嚴格的 IB 指令詞。使用此解碼表把試題字眼對應至所需的作答格式與評分要點。",

    // Question decoder: spotting which proof or system method to u > table > caption
    "Question decoder — Proof and linear systems": "題型解碼 — 數學證明與線性方程組",

    // Question decoder: spotting which proof or system method to u > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which proof or system method to u > table > th
    "What it means (method &amp; setup)": "實際含義（方法與列式）",

    // Question decoder: spotting which proof or system method to u > table > th
    "Markscheme rules (Paper 1 &amp; Paper 2)": "評分準則（Paper 1 與 Paper 2）",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Show that…” or “Prove that <span class=\"chem\">f(x) == g(x)</span>” (SL 1.6)": "「證明（Show that）……」或「證明 <span class=\"chem\">f(x) == g(x)</span>」（SL 1.6）",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Direct deductive proof</strong>. Start with the more complicated side (usually <span class=\"chem\">LHS</span>) and transform it step-by-step into the other side (<span class=\"chem\">RHS</span>).": "<strong>直接演繹證明</strong>。從較複雜的一方（通常是 <span class=\"chem\">LHS</span>）出發，逐步化簡至另一方（<span class=\"chem\">RHS</span>）。",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Never start by writing <span class=\"chem\">LHS = RHS</span></strong> and working on both sides! In an Answer Given (<strong>AG</strong>) question, every intermediate algebraic step must be shown.": "<strong>切勿一開始就寫 <span class=\"chem\">LHS = RHS</span></strong> 並同時對兩邊運算！在「答案已給」（<strong>AG</strong>）題型中，必須寫出每一步中間代數步驟。",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Prove that <span class=\"chem\">x^2 - 6x + 13 &gt; 0</span> for all <span class=\"chem\">x \\in \\mathbb{R}</span>” (SL 1.6)": "「證明對所有 <span class=\"chem\">x \\in \\mathbb{R}</span>，<span class=\"chem\">x^2 - 6x + 13 &gt; 0</span>」（SL 1.6）",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Complete the square</strong>: rewrite as <span class=\"chem\">(x - 3)^2 + 4</span> and use the fact that <span class=\"chem\">(x - 3)^2 &gt;= 0</span> for all real <span class=\"chem\">x</span>.": "<strong>配方法</strong>：改寫為 <span class=\"chem\">(x - 3)^2 + 4</span>，並利用對所有實數 <span class=\"chem\">x</span> 皆有 <span class=\"chem\">(x - 3)^2 &gt;= 0</span>。",

    // Question decoder: spotting which proof or system method to u > table > td
    "State explicitly: “Since <span class=\"chem\">(x - 3)^2 &gt;= 0</span> for all <span class=\"chem\">x \\in \\mathbb{R}</span>, <span class=\"chem\">(x - 3)^2 + 4 &gt;= 4 &gt; 0</span>” to earn the reasoning mark <strong>[R1]</strong>.": "必須明確寫出：「因為對所有 <span class=\"chem\">x \\in \\mathbb{R}</span> 皆有 <span class=\"chem\">(x - 3)^2 &gt;= 0</span>，所以 <span class=\"chem\">(x - 3)^2 + 4 &gt;= 4 &gt; 0</span>」，以取得推理分 <strong>[R1]</strong>。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > th
    "“Prove by mathematical induction that…, for <span class=\"chem\">n \\in \\mathbb{Z}^+</span>” (AHL 1.15)": "「用數學歸納法證明對於 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，……」（AHL 1.15）",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "<strong>4-step induction template</strong>:<br>1. Base case <span class=\"chem\">n = 1</span>.<br>2. Assume <span class=\"chem\">P(k)</span> is true for <em>some</em> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>.<br>3. Prove <span class=\"chem\">P(k + 1)</span> using <span class=\"chem\">P(k)</span>.<br>4. Final induction conclusion sentence.": "<strong>4 步數學歸納法範本</strong>：<br>1. 初始步驟 <span class=\"chem\">n = 1</span>。<br>2. 假設對<em>某</em> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立。<br>3. 利用 <span class=\"chem\">P(k)</span> 證明 <span class=\"chem\">P(k + 1)</span> 成立。<br>4. 寫出完整的歸納法總結句。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "Writing “Assume true for <em>all</em> <span class=\"chem\">k</span>” or omitting the final conclusion sentence loses the final <strong>[R1]</strong> mark even if all algebra is right!": "寫成「假設對<em>所有</em> <span class=\"chem\">k</span> 成立」或遺漏最後的總結句，即使所有代數運算正確，仍會失去最後的 <strong>[R1]</strong> 分數！",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > th
    "“Prove by contradiction that <span class=\"chem\">sqrt(p)</span> (or <span class=\"chem\">log_a b</span>) is irrational” (AHL 1.15)": "「用反證法證明 <span class=\"chem\">sqrt(p)</span>（或 <span class=\"chem\">log_a b</span>）是無理數」（AHL 1.15）",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "<strong>Negate the statement</strong>: Assume <span class=\"chem\">sqrt(p) = a / b</span> where <span class=\"chem\">a, b \\in \\mathbb{Z}, b != 0</span> and <strong><span class=\"chem\">gcd(a, b) = 1</span> (coprime)</strong>. Deduce that <span class=\"chem\">p</span> divides both <span class=\"chem\">a</span> and <span class=\"chem\">b</span>.": "<strong>假設命題的反面</strong>：假設 <span class=\"chem\">sqrt(p) = a / b</span>，其中 <span class=\"chem\">a, b \\in \\mathbb{Z}, b != 0</span> 且 <strong><span class=\"chem\">gcd(a, b) = 1</span>（互質）</strong>。推導出 <span class=\"chem\">p</span> 同時整除 <span class=\"chem\">a</span> 與 <span class=\"chem\">b</span>。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "Forgetting to state that <span class=\"chem\">a</span> and <span class=\"chem\">b</span> have <strong>no common factors</strong> (<span class=\"chem\">gcd(a, b) = 1</span>) at the start means there is no contradiction at the end!": "若一開始忘記寫明 <span class=\"chem\">a</span> 與 <span class=\"chem\">b</span> <strong>沒有公因數</strong>（<span class=\"chem\">gcd(a, b) = 1</span>），結尾便不會構成矛盾！",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > th
    "“Disprove the statement…” or “Determine whether the statement is always true” (AHL 1.15)": "「推翻陳述……」或「判斷該陳述是否恒成立」（AHL 1.15）",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "<strong>Counterexample</strong>: test small boundary cases (<span class=\"chem\">0, 1, -1, 1/2</span>, negative numbers, non-primes) and exhibit <strong>one explicit example</strong> where the hypothesis holds but the conclusion fails.": "<strong>反例</strong>：測試細小邊界值（<span class=\"chem\">0, 1, -1, 1/2</span>、負數、非質數），並舉出<strong>一個明確例子</strong>使前提成立但結論不成立。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "Do not write a general algebraic argument to disprove a statement—state the specific numerical value(s) and evaluate both sides explicitly.": "推翻陳述時不要寫一般代數論證——直接寫出具體數值並明確計算兩邊的值。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > th
    "“Find the value(s) of <span class=\"chem\">k</span> for which the <span class=\"chem\">3 × 3</span> system has a unique solution / no solution / infinitely many solutions” (AHL 1.16)": "「求使該 <span class=\"chem\">3 × 3</span> 方程組有唯一解／無解／無限多解的 <span class=\"chem\">k</span> 值」（AHL 1.16）",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "<strong>Gaussian elimination</strong> (row reduction) to upper-triangular form where Row 3 is <span class=\"chem\">0x + 0y + g(k)z = h(k)</span>.": "<strong>高斯消去法</strong>（列簡化）至上三角形式，使第 3 行成為 <span class=\"chem\">0x + 0y + g(k)z = h(k)</span>。",

    // Question decoder: spotting which proof or system method to u > table > Additional HL > td
    "• Unique: <span class=\"chem\">g(k) != 0</span>.<br>• No solution: <span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) != 0</span>.<br>• Infinite solutions: <span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) = 0</span> (set <span class=\"chem\">z = lambda \\in \\mathbb{R}</span>).": "• 唯一解：<span class=\"chem\">g(k) != 0</span>。<br>• 無解：<span class=\"chem\">g(k) = 0</span> 且 <span class=\"chem\">h(k) != 0</span>。<br>• 無限多解：<span class=\"chem\">g(k) = 0</span> 且 <span class=\"chem\">h(k) = 0</span>（設 <span class=\"chem\">z = lambda \\in \\mathbb{R}</span>）。",

    // Deductive algebraic proof and identities > data-toc attribute
    "Direct proof": "直接證明",

    // Deductive algebraic proof and identities > h2
    "Deductive algebraic proof and identities": "演繹代數證明與恒等式",

    // Deductive algebraic proof and identities > p
    "A <dfn data-def=\"A logical sequence of algebraic steps starting from known definitions or one side of an identity and arriving at the required result.\">direct deductive proof</dfn> uses general algebraic symbols—never just a few numerical examples—to show that a statement is true for every value in its domain. An <dfn data-def=\"An equality that holds true for all permissible values of its variables, often written with the symbol ≡.\">identity</dfn> (<span class=\"chem\">LHS == RHS</span>) holds for all values of the variable, whereas a conditional equation holds only for specific roots.": "<dfn data-def=\"從已知定義或恒等式的其中一方出發，透過合乎邏輯的代數步驟推導出所需結果的方法。\">直接演繹證明 <span class=\"en-term\">(direct deductive proof)</span></dfn>使用一般代數符號（而非僅舉幾個數字例子）來證明命題對定義域內所有值皆成立。<dfn data-def=\"對變數的所有容許值均成立的等式，常以符號 ≡ 表示。\">恒等式 <span class=\"en-term\">(identity)</span></dfn>（<span class=\"chem\">LHS == RHS</span>）對變數的所有值皆成立，而條件方程則只對特定的根成立。",

    // Deductive algebraic proof and identities > data-def attribute
    "A logical sequence of algebraic steps starting from known definitions or one side of an identity and arriving at the required result.": "從已知定義或恒等式的其中一方出發，透過合乎邏輯的代數步驟推導出所需結果的方法。",

    // Deductive algebraic proof and identities > data-def attribute
    "An equality that holds true for all permissible values of its variables, often written with the symbol ≡.": "對變數的所有容許值均成立的等式，常以符號 ≡ 表示。",

    // Deductive algebraic proof and identities > p
    "The symbol <span class=\"chem\">==</span> means “is identically equal to”: <span class=\"chem\">(x + 1)^2 == x^2 + 2x + 1</span> is true for every <span class=\"chem\">x</span>. The symbol <span class=\"chem\">=</span> in an equation such as <span class=\"chem\">x^2 = 4</span> is true only for particular values (here <span class=\"chem\">x = +- 2</span>).": "符號 <span class=\"chem\">==</span> 表示「恒等於」：<span class=\"chem\">(x + 1)^2 == x^2 + 2x + 1</span> 對每一個 <span class=\"chem\">x</span> 都成立。而方程 <span class=\"chem\">x^2 = 4</span> 中的符號 <span class=\"chem\">=</span> 只對特定的值成立（此處為 <span class=\"chem\">x = +- 2</span>）。",

    // Deductive algebraic proof and identities > h3
    "Three golden rules for SL 1.6 “Show that / Prove that” questions": "SL 1.6「證明（Show that / Prove that）」題型的三大黃金法則",

    // Deductive algebraic proof and identities > li
    "<strong>Work in one direction (<span class=\"chem\">LHS -&gt; RHS</span>)</strong>: Pick one side (almost always the side with more terms or fractions) and simplify it step by step until it matches the other side. Never start by assuming the conclusion <span class=\"chem\">LHS = RHS</span> and cross-multiplying!": "<strong>單方向推導（<span class=\"chem\">LHS -&gt; RHS</span>）</strong>：選取其中一方（幾乎總是項數較多或含分式的一方），逐步化簡直至與另一方完全相同。切勿一開始就假設結論 <span class=\"chem\">LHS = RHS</span> 並交叉相乘！",

    // Deductive algebraic proof and identities > li
    "Any <strong>even integer</strong>: <span class=\"chem\">2n</span> (<span class=\"chem\">n \\in \\mathbb{Z}</span>); any <strong>odd integer</strong>: <span class=\"chem\">2n + 1</span>.": "任意<strong>偶數</strong>：<span class=\"chem\">2n</span>（<span class=\"chem\">n \\in \\mathbb{Z}</span>）；任意<strong>奇數</strong>：<span class=\"chem\">2n + 1</span>。",

    // Deductive algebraic proof and identities > li
    "<strong>Consecutive integers</strong>: <span class=\"chem\">n, n + 1, n + 2</span> (or <span class=\"chem\">n - 1, n, n + 1</span> so symmetric terms cancel!).": "<strong>連續整數</strong>：<span class=\"chem\">n, n + 1, n + 2</span>（或設為 <span class=\"chem\">n - 1, n, n + 1</span>，使對稱項互相抵消！）。",

    // Deductive algebraic proof and identities > li
    "A <strong>multiple of <span class=\"chem\">m</span></strong>: <span class=\"chem\">m k</span> where <span class=\"chem\">k \\in \\mathbb{Z}</span>.": "<strong><span class=\"chem\">m</span> 的倍數</strong>：<span class=\"chem\">m k</span>，其中 <span class=\"chem\">k \\in \\mathbb{Z}</span>。",

    // Deductive algebraic proof and identities > li
    "A <strong>two-digit integer</strong> with tens digit <span class=\"chem\">a</span> and units digit <span class=\"chem\">b</span>: <span class=\"chem\">10a + b</span> (reversed: <span class=\"chem\">10b + a</span>).": "十位數字為 <span class=\"chem\">a</span>、個位數字為 <span class=\"chem\">b</span> 的<strong>兩位整數</strong>：<span class=\"chem\">10a + b</span>（數字對調後：<span class=\"chem\">10b + a</span>）。",

    // Deductive algebraic proof and identities > li
    "<strong>Complete the square to prove inequalities (<span class=\"chem\">&gt;= 0</span> or <span class=\"chem\">&gt; 0</span>)</strong>: Every real square satisfies <span class=\"chem\">A^2 &gt;= 0</span>. Rewriting a quadratic as <span class=\"chem\">a(x - h)^2 + k</span> with <span class=\"chem\">a &gt; 0, k &gt; 0</span> immediately proves it is strictly positive for all real <span class=\"chem\">x</span>.": "<strong>以配方法證明不等式（<span class=\"chem\">&gt;= 0</span> 或 <span class=\"chem\">&gt; 0</span>）</strong>：任何實數的平方都滿足 <span class=\"chem\">A^2 &gt;= 0</span>。把二次式改寫為 <span class=\"chem\">a(x - h)^2 + k</span>（其中 <span class=\"chem\">a &gt; 0, k &gt; 0</span>），即可立即證明它對所有實數 <span class=\"chem\">x</span> 嚴格大於零。",

    // Deductive algebraic proof and identities > exam tip (shown in English + translation) > p
    "<strong>Exam tip (AG = Answer Given):</strong> In any “Show that…” question, the target expression is printed on the exam paper. Examiners will award <strong>zero marks</strong> for the final step if you jump over the unsimplified expansion right before the given answer. Show one extra line of working!": "<strong>考試貼士（AG = 答案已給）：</strong>在任何「證明（Show that）……」題目中，目標表式已印在試卷上。如果你跳過緊接在目標答案前的未化簡展開式，閱卷員將給最後一步<strong>零分</strong>。務必多寫一行步驟！",

    // Deductive algebraic proof and identities > worked example > h3
    "Direct algebraic proof with consecutive odd integers and completing the square": "連續奇數與配方法的直接代數證明",

    // Deductive algebraic proof and identities > worked example > p
    "(a) Prove algebraically that the difference between the squares of any two consecutive odd integers is always a multiple of <span class=\"chem\">8</span>. <strong>[3 marks]</strong>": "(a) 用代數方法證明 (Prove) 任意兩個連續奇數的平方差恒為 <span class=\"chem\">8</span> 的倍數。<strong>[3 marks]</strong>",

    // Deductive algebraic proof and identities > worked example > p
    "(b) Prove that <span class=\"chem\">a^2 + b^2 + 2c^2 - 2ac - 2bc &gt;= 0</span> for all real numbers <span class=\"chem\">a, b, c \\in \\mathbb{R}</span>. <strong>[3 marks]</strong>": "(b) 證明 (Prove) 對所有實數 <span class=\"chem\">a, b, c \\in \\mathbb{R}</span>，<span class=\"chem\">a^2 + b^2 + 2c^2 - 2ac - 2bc &gt;= 0</span>。<strong>[3 marks]</strong>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Represent two consecutive odd integers in terms of n ∈ ℤ": "以 n ∈ ℤ 表示兩個連續奇數",

    // Deductive algebraic proof and identities > worked example > p
    "Any odd integer can be written as 2n − 1, so the next consecutive odd integer is 2n + 1 (for n ∈ ℤ).": "任何奇數皆可寫成 2n − 1，因此下一個連續奇數為 2n + 1（其中 n ∈ ℤ）。",

    // Deductive algebraic proof and identities > worked example > maths line
    "Let the two consecutive odd integers be 2<i>n</i> − 1 and 2<i>n</i> + 1 (<i>n</i> ∈ ℤ). <b>[M1]</b>": "設該兩個連續奇數為 2<i>n</i> − 1 與 2<i>n</i> + 1（<i>n</i> ∈ ℤ）。<b>[M1]</b>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Expand the difference of their squares and factor out 8": "展開兩者的平方差並抽出公因數 8",

    // Deductive algebraic proof and identities > worked example > p
    "Expanding (2n + 1)² − (2n − 1)² cancels 4n² and 1, leaving 8n.": "展開 (2n + 1)² − (2n − 1)² 後，4n² 與 1 抵消，剩下 8n。",

    // Deductive algebraic proof and identities > worked example > maths line
    "Since <i>n</i> ∈ ℤ, 8<i>n</i> is a multiple of 8. <b>[R1]</b>": "因為 <i>n</i> ∈ ℤ，所以 8<i>n</i> 是 8 的倍數。<b>[R1]</b>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Split 2c² into c² + c² and group into two completed squares": "把 2c² 拆成 c² + c² 並分組為兩個完全平方",

    // Deductive algebraic proof and identities > worked example > p
    "Grouping a² − 2ac + c² and b² − 2bc + c² turns the expression into the sum of two squares of real numbers.": "把 a² − 2ac + c² 與 b² − 2bc + c² 分組後，原式化為兩個實數平方之和。",

    // Deductive algebraic proof and identities > worked example > maths line
    "Since (<i>a</i> − <i>c</i>)<sup>2</sup> ≥ 0 and (<i>b</i> − <i>c</i>)<sup>2</sup> ≥ 0 for all <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ, their sum is ≥ 0. <b>[R1]</b>": "因為對所有 <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ 皆有 (<i>a</i> − <i>c</i>)<sup>2</sup> ≥ 0 及 (<i>b</i> − <i>c</i>)<sup>2</sup> ≥ 0，所以兩者之和 ≥ 0。<b>[R1]</b>",

    // Deductive algebraic proof and identities > try it > p
    "A three-digit integer has hundreds digit <span class=\"chem\">a</span>, tens digit <span class=\"chem\">b</span>, and units digit <span class=\"chem\">c</span> (with <span class=\"chem\">a &gt; c</span>), so its value is <span class=\"chem\">100a + 10b + c</span>. When its digits are reversed, the new number is <span class=\"chem\">100c + 10b + a</span>. The difference between the original number and the reversed number is always divisible by a largest positive integer <span class=\"chem\">M</span> regardless of <span class=\"chem\">a, b, c</span>. Enter the value of <span class=\"chem\">M</span>.": "一個三位數的百位數字為 <span class=\"chem\">a</span>、十位數字為 <span class=\"chem\">b</span>、個位數字為 <span class=\"chem\">c</span>（其中 <span class=\"chem\">a &gt; c</span>），故其值為 <span class=\"chem\">100a + 10b + c</span>。把數字倒序排列後的新數為 <span class=\"chem\">100c + 10b + a</span>。無論 <span class=\"chem\">a, b, c</span> 為何值，原數與倒序數之差恒可被某個最大正整數 <span class=\"chem\">M</span> 整除。輸入 <span class=\"chem\">M</span> 的值。",

    // Deductive algebraic proof and identities > try it > li
    "Subtract the reversed number from the original: <span class=\"chem\">(100a + 10b + c) - (100c + 10b + a)</span>.": "以原數減去倒序數：<span class=\"chem\">(100a + 10b + c) - (100c + 10b + a)</span>。",

    // Deductive algebraic proof and identities > try it > li
    "Notice that <span class=\"chem\">10b</span> cancels completely, leaving <span class=\"chem\">99a - 99c = 99(a - c)</span>.": "留意 <span class=\"chem\">10b</span> 完全抵消，剩下 <span class=\"chem\">99a - 99c = 99(a - c)</span>。",

    // Proof by mathematical induction > Additional HL > data-toc attribute
    "Induction": "數學歸納法",

    // Proof by mathematical induction > Additional HL > h2
    "Proof by mathematical induction": "數學歸納法證明",

    // Proof by mathematical induction > Additional HL > p
    "<dfn data-def=\"A method of proving a statement P(n) for all integers n ≥ n₀ by proving a base case P(n₀) and proving the inductive step that P(k) ⇒ P(k+1).\">Mathematical induction</dfn> proves an infinite sequence of statements <span class=\"chem\">P(1), P(2), P(3), ...</span> in the same way an infinite line of dominoes falls: if you knock over the <strong>first domino</strong> (<span class=\"chem\">P(1)</span> is true), and you prove that <strong>any domino falling knocks over the very next domino</strong> (<span class=\"chem\">P(k) =&gt; P(k + 1)</span>), then every domino <span class=\"chem\">P(n)</span> for <span class=\"chem\">n \\in \\mathbb{Z}^+</span> must fall.": "<dfn data-def=\"透過證明初始步驟 P(n₀) 成立及歸納步驟 P(k) ⇒ P(k+1) 成立，從而證明命題 P(n) 對所有整數 n ≥ n₀ 成立的方法。\">數學歸納法 <span class=\"en-term\">(mathematical induction)</span></dfn>能證明無窮多條命題 <span class=\"chem\">P(1), P(2), P(3), ...</span> 成立，原理就像推倒一列無限長的骨牌：只要推倒<strong>第一塊骨牌</strong>（<span class=\"chem\">P(1)</span> 成立），並證明<strong>任何一塊骨牌倒下都會推倒下一塊骨牌</strong>（<span class=\"chem\">P(k) =&gt; P(k + 1)</span>），那麼對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，每塊骨牌 <span class=\"chem\">P(n)</span> 都必定倒下。",

    // Proof by mathematical induction > Additional HL > data-def attribute
    "A method of proving a statement P(n) for all integers n ≥ n₀ by proving a base case P(n₀) and proving the inductive step that P(k) ⇒ P(k+1).": "透過證明初始步驟 P(n₀) 成立及歸納步驟 P(k) ⇒ P(k+1) 成立，從而證明命題 P(n) 對所有整數 n ≥ n₀ 成立的方法。",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > p
    "<strong>The mandatory 4-step IB markscheme template (memorize word-for-word):</strong>": "<strong>必須嚴格遵守的 4 步 IB 評分範本（務必逐字熟記）：</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Base case (<span class=\"chem\">n = 1</span>, or initial <span class=\"chem\">n_0</span>)</strong>: Compute <span class=\"chem\">LHS</span> and <span class=\"chem\">RHS</span> separately (or evaluate <span class=\"chem\">f(1)</span>) and write: <em>“Therefore <span class=\"chem\">P(1)</span> is true.”</em> <strong>[A1]</strong>": "<strong>初始步驟（<span class=\"chem\">n = 1</span> 或起始值 <span class=\"chem\">n_0</span>）</strong>：分別計算 <span class=\"chem\">LHS</span> 與 <span class=\"chem\">RHS</span>（或計算 <span class=\"chem\">f(1)</span>），並寫上：<em>「因此 <span class=\"chem\">P(1)</span> 成立。」</em> <strong>[A1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Inductive hypothesis (<span class=\"chem\">n = k</span>)</strong>: Write: <em>“Assume <span class=\"chem\">P(k)</span> is true for <strong>some</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>”</em> and state the <span class=\"chem\">n = k</span> equation explicitly. <strong>[M1]</strong>": "<strong>歸納假設（<span class=\"chem\">n = k</span>）</strong>：寫上：<em>「假設對<strong>某</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(k)</span> 成立」</em>，並明確寫出 <span class=\"chem\">n = k</span> 的等式。<strong>[M1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Inductive step (<span class=\"chem\">n = k + 1</span>)</strong>: Start from the <span class=\"chem\">n = k + 1</span> expression, <strong>explicitly substitute your inductive hypothesis</strong>, and factor/simplify to the exact <span class=\"chem\">(k + 1)</span> target form. <strong>[M1 A1 A1]</strong>": "<strong>歸納步驟（<span class=\"chem\">n = k + 1</span>）</strong>：從 <span class=\"chem\">n = k + 1</span> 的表式出發，<strong>明確代入歸納假設</strong>，再因式分解／化簡至準確的 <span class=\"chem\">(k + 1)</span> 目標形式。<strong>[M1 A1 A1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Conclusion sentence</strong>: <em>“Since <span class=\"chem\">P(1)</span> is true, and <span class=\"chem\">P(k)</span> being true implies <span class=\"chem\">P(k + 1)</span> is true, by the principle of mathematical induction, <span class=\"chem\">P(n)</span> is true for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.”</em> <strong>[R1]</strong>": "<strong>總結句</strong>：<em>「由於 <span class=\"chem\">P(1)</span> 成立，且當 <span class=\"chem\">P(k)</span> 成立時 <span class=\"chem\">P(k + 1)</span> 亦成立，根據數學歸納法原理，對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">P(n)</span> 均成立。」</em> <strong>[R1]</strong>",

    // Proof by mathematical induction > common mistake > Additional HL > p
    "<strong>Never write “Assume <span class=\"chem\">P(k)</span> is true for all <span class=\"chem\">k</span>”!</strong> If you assume it is true for <em>all</em> <span class=\"chem\">k</span>, you have assumed what you are trying to prove. Always write <em>“for <strong>some</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>”</em>. Also note that the final <strong>[R1]</strong> mark for the conclusion sentence is only awarded if at least the base case and inductive hypothesis substitution were attempted.": "<strong>切勿寫成「假設 <span class=\"chem\">P(k)</span> 對所有 <span class=\"chem\">k</span> 成立」！</strong>若假設它對<em>所有</em> <span class=\"chem\">k</span> 成立，即等於假設了你要證明的結論。務必寫成<em>「對<strong>某</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>」</em>。此外，總結句的最後 <strong>[R1]</strong> 分數，必須在已嘗試初始步驟及代入歸納假設的情況下才會頒授。",

    // Proof by mathematical induction > Additional HL > h3
    "How to execute the inductive step (<span class=\"chem\">n = k + 1</span>) across all 4 IB question types": "如何在 4 類 IB 題型中執行歸納步驟（<span class=\"chem\">n = k + 1</span>）",

    // Proof by mathematical induction > Additional HL > li
    "<strong>1. Series summations (<span class=\"chem\">Sigma_{r=1}^n u_r = S(n)</span>)</strong>: Split off the last term: <span class=\"chem\">Sigma_{r=1}^{k+1} u_r = (Sigma_{r=1}^k u_r) + u_{k+1} = S(k) + u_{k+1}</span>. <strong>Factor out common factors</strong> like <span class=\"chem\">(k + 1)</span> or <span class=\"chem\">k!</span> or <span class=\"chem\">2^k</span> immediately instead of expanding everything into a giant polynomial!": "<strong>1. 級數求和（<span class=\"chem\">Sigma_{r=1}^n u_r = S(n)</span>）</strong>：拆出最後一項：<span class=\"chem\">Sigma_{r=1}^{k+1} u_r = (Sigma_{r=1}^k u_r) + u_{k+1} = S(k) + u_{k+1}</span>。立即<strong>抽出公因式</strong>（例如 <span class=\"chem\">(k + 1)</span>、<span class=\"chem\">k!</span> 或 <span class=\"chem\">2^k</span>），切勿把所有東西硬展開成龐大的多項式！",

    // Proof by mathematical induction > Additional HL > li
    "<strong>2. Divisibility (“<span class=\"chem\">f(n)</span> is divisible by <span class=\"chem\">m</span>”)</strong>: In your hypothesis, write <span class=\"chem\">f(k) = m A</span> for some <span class=\"chem\">A \\in \\mathbb{Z}</span>, <strong>isolate the highest exponential term</strong> (e.g. <span class=\"chem\">7^k = 6A + 1</span> or <span class=\"chem\">5^{2k} = 24A + 1</span>), and substitute it straight into <span class=\"chem\">f(k + 1)</span>.": "<strong>2. 整除性（「<span class=\"chem\">f(n)</span> 可被 <span class=\"chem\">m</span> 整除」）</strong>：在假設中寫出 <span class=\"chem\">f(k) = m A</span>（其中 <span class=\"chem\">A \\in \\mathbb{Z}</span>），<strong>分離出最高次的指數項</strong>（例如 <span class=\"chem\">7^k = 6A + 1</span> 或 <span class=\"chem\">5^{2k} = 24A + 1</span>），再直接代入 <span class=\"chem\">f(k + 1)</span>。",

    // Proof by mathematical induction > Additional HL > li
    "<strong>3. Higher derivatives (<span class=\"chem\">f^{(n)}(x)</span>)</strong>: Differentiate your <span class=\"chem\">n = k</span> formula once with respect to <span class=\"chem\">x</span> using the product, quotient, or chain rule: <span class=\"chem\">f^{(k+1)}(x) = d/dx [f^{(k)}(x)]</span>.": "<strong>3. 高階導數（<span class=\"chem\">f^{(n)}(x)</span>）</strong>：利用積法則、商法則或鏈式法則，把 <span class=\"chem\">n = k</span> 的公式對 <span class=\"chem\">x</span> 求導一次：<span class=\"chem\">f^{(k+1)}(x) = d/dx [f^{(k)}(x)]</span>。",

    // Proof by mathematical induction > Additional HL > li
    "<strong>4. Inequalities (<span class=\"chem\">L(n) &gt; R(n)</span>)</strong>: Start with <span class=\"chem\">L(k + 1)</span>, apply the inductive hypothesis inequality to replace <span class=\"chem\">L(k)</span> with <span class=\"chem\">R(k)</span>, and show that the resulting expression is <span class=\"chem\">&gt; R(k + 1)</span>.": "<strong>4. 不等式（<span class=\"chem\">L(n) &gt; R(n)</span>）</strong>：從 <span class=\"chem\">L(k + 1)</span> 出發，應用歸納假設不等式把 <span class=\"chem\">L(k)</span> 替換為 <span class=\"chem\">R(k)</span>，並證明所得表式 <span class=\"chem\">&gt; R(k + 1)</span>。",

    // Proof by mathematical induction > widget > Additional HL > data-title attribute
    "Mathematical induction domino & step verifier": "數學歸納法骨牌與步驟驗證器",

    // Proof by mathematical induction > widget > Additional HL > figcaption
    "Select a proposition <span class=\"chem\">P(n)</span> and step through the domino chain from <span class=\"chem\">n = 1</span> up to <span class=\"chem\">n = 7</span> to see how the inductive hypothesis <span class=\"chem\">P(k)</span> algebraically locks into <span class=\"chem\">P(k + 1)</span> at every step.": "選擇一個命題 <span class=\"chem\">P(n)</span>，並由 <span class=\"chem\">n = 1</span> 逐步推進至 <span class=\"chem\">n = 7</span>，觀察歸納假設 <span class=\"chem\">P(k)</span> 如何在每一步以代數方式緊扣 <span class=\"chem\">P(k + 1)</span>。",

    // Proof by mathematical induction > worked example > Additional HL > h3
    "Proving divisibility by mathematical induction": "用數學歸納法證明整除性",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Prove by mathematical induction that <span class=\"chem\">f(n) = 5^{2n} - 1</span> is divisible by <span class=\"chem\">24</span> for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>. <strong>[6 marks]</strong>": "用數學歸納法證明 (Prove) 對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">f(n) = 5^{2n} - 1</span> 可被 <span class=\"chem\">24</span> 整除。<strong>[6 marks]</strong>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 1: Base case n = 1": "步驟 1：初始步驟 n = 1",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Evaluate f(1) explicitly and show it is an integer multiple of 24.": "明確計算 f(1) 並證明它是 24 的整數倍。",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "For <i>n</i> = 1: <i>f</i>(1) = 5<sup>2(1)</sup> − 1 = 25 − 1 = 24 = 24(1), which is divisible by 24. Hence <i>P</i>(1) is true. <b>[A1]</b>": "當 <i>n</i> = 1：<i>f</i>(1) = 5<sup>2(1)</sup> − 1 = 25 − 1 = 24 = 24(1)，可被 24 整除。故 <i>P</i>(1) 成立。<b>[A1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 2: Inductive hypothesis n = k": "步驟 2：歸納假設 n = k",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Assume P(k) holds for some positive integer k, and isolate 5<sup>2k</sup> so we can substitute it cleanly into f(k+1).": "假設 P(k) 對某正整數 k 成立，並分離出 5<sup>2k</sup> 以便代入 f(k+1)。",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "Assume <i>P</i>(<i>k</i>) is true for some <i>k</i> ∈ ℤ<sup>+</sup>: 5<sup>2<i>k</i></sup> − 1 = 24<i>A</i> for some <i>A</i> ∈ ℤ ⇒ 5<sup>2<i>k</i></sup> = 24<i>A</i> + 1. <b>[M1]</b>": "假設對某 <i>k</i> ∈ ℤ<sup>+</sup>，<i>P</i>(<i>k</i>) 成立：5<sup>2<i>k</i></sup> − 1 = 24<i>A</i>（其中 <i>A</i> ∈ ℤ）⇒ 5<sup>2<i>k</i></sup> = 24<i>A</i> + 1。<b>[M1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 3: Inductive step n = k + 1": "步驟 3：歸納步驟 n = k + 1",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Rewrite 5<sup>2(k+1)</sup> as 5² · 5<sup>2k</sup> = 25 · 5<sup>2k</sup>, substitute 5<sup>2k</sup> = 24A + 1, and factor out 24.": "把 5<sup>2(k+1)</sup> 改寫為 5² · 5<sup>2k</sup> = 25 · 5<sup>2k</sup>，代入 5<sup>2k</sup> = 24A + 1，並抽出公因數 24。",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "For <i>n</i> = <i>k</i> + 1: <i>f</i>(<i>k</i> + 1) = 5<sup>2(<i>k</i>+1)</sup> − 1 = 5<sup>2</sup> · 5<sup>2<i>k</i></sup> − 1 = 25(24<i>A</i> + 1) − 1 <b>[M1 A1]</b>": "當 <i>n</i> = <i>k</i> + 1：<i>f</i>(<i>k</i> + 1) = 5<sup>2(<i>k</i>+1)</sup> − 1 = 5<sup>2</sup> · 5<sup>2<i>k</i></sup> − 1 = 25(24<i>A</i> + 1) − 1 <b>[M1 A1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "<i>f</i>(<i>k</i> + 1) = 25(24<i>A</i>) + 25 − 1 = 24(25<i>A</i> + 1), which is divisible by 24 since 25<i>A</i> + 1 ∈ ℤ. <b>[A1]</b>": "<i>f</i>(<i>k</i> + 1) = 25(24<i>A</i>) + 25 − 1 = 24(25<i>A</i> + 1)，因為 25<i>A</i> + 1 ∈ ℤ，所以可被 24 整除。<b>[A1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 4: Mandatory conclusion sentence": "步驟 4：必須寫出的總結句",

    // Proof by mathematical induction > worked example > Additional HL > p
    "State the principle of mathematical induction linking the base case and the inductive step.": "寫出數學歸納法原理，連結初始步驟與歸納步驟。",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "Since <i>P</i>(1) is true, and <i>P</i>(<i>k</i>) being true implies <i>P</i>(<i>k</i> + 1) is true, by the principle of mathematical induction <i>P</i>(<i>n</i>) is true for all <i>n</i> ∈ ℤ<sup>+</sup>. <b>[R1]</b>": "由於 <i>P</i>(1) 成立，且當 <i>P</i>(<i>k</i>) 成立時 <i>P</i>(<i>k</i> + 1) 亦成立，根據數學歸納法原理，對所有 <i>n</i> ∈ ℤ<sup>+</sup>，<i>P</i>(<i>n</i>) 均成立。<b>[R1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > p
    "f(k+1) = 24(25A + 1), divisible by 24 for all n ∈ ℤ⁺": "f(k+1) = 24(25A + 1)，對所有 n ∈ ℤ⁺ 皆可被 24 整除",

    // Proof by mathematical induction > try it > Additional HL > p
    "Consider the proposition that <span class=\"chem\">f(n) = 3^{2n} + 7</span> is divisible by <span class=\"chem\">m</span> for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>. By testing <span class=\"chem\">n = 1</span> and <span class=\"chem\">n = 2</span> (or setting up the inductive step <span class=\"chem\">f(k+1) = 9(3^{2k} + 7) - 56</span>), find the largest positive integer <span class=\"chem\">m</span> for which this statement holds for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.": "考慮命題：「對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">f(n) = 3^{2n} + 7</span> 可被 <span class=\"chem\">m</span> 整除。」透過測試 <span class=\"chem\">n = 1</span> 與 <span class=\"chem\">n = 2</span>（或列出歸納步驟 <span class=\"chem\">f(k+1) = 9(3^{2k} + 7) - 56</span>），求 (find) 使此命題對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立的最大正整數 <span class=\"chem\">m</span>。",

    // Proof by mathematical induction > try it > Additional HL > li
    "Evaluate <span class=\"chem\">f(1) = 3^2 + 7 = 16</span> and <span class=\"chem\">f(2) = 3^4 + 7 = 88</span>.": "計算 <span class=\"chem\">f(1) = 3^2 + 7 = 16</span> 及 <span class=\"chem\">f(2) = 3^4 + 7 = 88</span>。",

    // Proof by mathematical induction > try it > Additional HL > li
    "Find <span class=\"chem\">gcd(16, 88)</span>, and notice in the inductive step that <span class=\"chem\">f(k+1) = 9 f(k) - 56 = 8(9A - 7)</span>.": "求 <span class=\"chem\">gcd(16, 88)</span>，並留意在歸納步驟中有 <span class=\"chem\">f(k+1) = 9 f(k) - 56 = 8(9A - 7)</span>。",

    // Proof by mathematical induction > try it > Additional HL > maths line
    "<i>f</i>(1) = 16, <i>f</i>(2) = 88 ⇒ gcd(16, 88) = <b>8</b>": "<i>f</i>(1) = 16, <i>f</i>(2) = 88 ⇒ gcd(16, 88) = <b>8</b>",

    // Proof by mathematical induction > try it > Additional HL > maths line
    "Inductive step: 3<sup>2(<i>k</i>+1)</sup> + 7 = 9(8<i>A</i> − 7) + 7 = 72<i>A</i> − 56 = 8(9<i>A</i> − 7)": "歸納步驟：3<sup>2(<i>k</i>+1)</sup> + 7 = 9(8<i>A</i> − 7) + 7 = 72<i>A</i> − 56 = 8(9<i>A</i> − 7)",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-toc attribute
    "Contradiction & counterexamples": "反證法與反例",

    // Proof by contradiction and disproof by counterexample > Additional HL > h2
    "Proof by contradiction and disproof by counterexample": "反證法與以反例推翻命題",

    // Proof by contradiction and disproof by counterexample > Additional HL > h3
    "Proof by contradiction": "反證法",

    // Proof by contradiction and disproof by counterexample > Additional HL > p
    "In a <dfn data-def=\"A proof technique that assumes the negation of the desired statement and deduces a logical impossibility (contradiction), proving the original statement must be true.\">proof by contradiction</dfn>, to prove a statement <span class=\"chem\">P</span> is true, we begin by <strong>assuming <span class=\"chem\">P</span> is false</strong> (its logical negation <span class=\"chem\">not P</span> is true). We then follow valid algebraic steps until we reach a statement that contradicts either our initial assumption or a known mathematical fact.": "在<dfn data-def=\"先假設目標命題的反面成立，再推導出邏輯上不可能的矛盾，從而證明原命題必為真的證明技巧。\">反證法 <span class=\"en-term\">(proof by contradiction)</span></dfn>中，要證明命題 <span class=\"chem\">P</span> 為真，我們先<strong>假設 <span class=\"chem\">P</span> 為假</strong>（即其邏輯否定 <span class=\"chem\">not P</span> 為真），然後透過正確的代數推演，直至得出與初始假設或已知數學事實相矛盾的結論。",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-def attribute
    "A proof technique that assumes the negation of the desired statement and deduces a logical impossibility (contradiction), proving the original statement must be true.": "先假設目標命題的反面成立，再推導出邏輯上不可能的矛盾，從而證明原命題必為真的證明技巧。",

    // Proof by contradiction and disproof by counterexample > Additional HL > h4
    "Two classic IB contradiction proofs": "兩個經典 IB 反證法證明",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<strong>Irrationality of <span class=\"chem\">sqrt(p)</span> (for prime <span class=\"chem\">p</span>, e.g. <span class=\"chem\">sqrt(2), sqrt(3), sqrt(5)</span>)</strong>: Assume <span class=\"chem\">sqrt(p)</span> is rational, so <span class=\"chem\">sqrt(p) = a / b</span> where <span class=\"chem\">a, b \\in \\mathbb{Z}^+</span> and <strong><span class=\"chem\">gcd(a, b) = 1</span> (no common factors)</strong>. Squaring gives <span class=\"chem\">a^2 = p b^2</span>, so <span class=\"chem\">p</span> divides <span class=\"chem\">a^2</span>, which (since <span class=\"chem\">p</span> is prime) implies <span class=\"chem\">p</span> divides <span class=\"chem\">a</span>. Write <span class=\"chem\">a = p k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>); substituting gives <span class=\"chem\">p^2 k^2 = p b^2 =&gt; b^2 = p k^2</span>, so <span class=\"chem\">p</span> also divides <span class=\"chem\">b</span>. Thus <span class=\"chem\">p</span> is a common factor of <span class=\"chem\">a</span> and <span class=\"chem\">b</span>, contradicting <span class=\"chem\">gcd(a, b) = 1</span>!": "<strong><span class=\"chem\">sqrt(p)</span> 的無理性（對於質數 <span class=\"chem\">p</span>，如 <span class=\"chem\">sqrt(2), sqrt(3), sqrt(5)</span>）</strong>：假設 <span class=\"chem\">sqrt(p)</span> 是有理數，則 <span class=\"chem\">sqrt(p) = a / b</span>，其中 <span class=\"chem\">a, b \\in \\mathbb{Z}^+</span> 且 <strong><span class=\"chem\">gcd(a, b) = 1</span>（沒有公因數）</strong>。兩邊平方得 <span class=\"chem\">a^2 = p b^2</span>，故 <span class=\"chem\">p</span> 整除 <span class=\"chem\">a^2</span>，因 <span class=\"chem\">p</span> 為質數，故 <span class=\"chem\">p</span> 整除 <span class=\"chem\">a</span>。設 <span class=\"chem\">a = p k</span>（<span class=\"chem\">k \\in \\mathbb{Z}</span>），代入得 <span class=\"chem\">p^2 k^2 = p b^2 =&gt; b^2 = p k^2</span>，故 <span class=\"chem\">p</span> 亦整除 <span class=\"chem\">b</span>。於是 <span class=\"chem\">p</span> 是 <span class=\"chem\">a</span> 與 <span class=\"chem\">b</span> 的公因數，與 <span class=\"chem\">gcd(a, b) = 1</span> 矛盾！",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<strong>Irrationality of <span class=\"chem\">log_a b</span> (when <span class=\"chem\">a, b</span> have different prime factors, e.g. <span class=\"chem\">log_2 5</span>)</strong>: Assume <span class=\"chem\">log_2 5 = p / q</span> where <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>. Rewriting in exponential form gives <span class=\"chem\">2^{p/q} = 5 =&gt; 2^p = 5^q</span>. However, for any <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>, <span class=\"chem\">2^p</span> is always <strong>even</strong> while <span class=\"chem\">5^q</span> is always <strong>odd</strong>—a contradiction!": "<strong><span class=\"chem\">log_a b</span> 的無理性（當 <span class=\"chem\">a, b</span> 含不同質因數時，如 <span class=\"chem\">log_2 5</span>）</strong>：假設 <span class=\"chem\">log_2 5 = p / q</span>，其中 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>。改寫為指數形式得 <span class=\"chem\">2^{p/q} = 5 =&gt; 2^p = 5^q</span>。然而對任何 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>，<span class=\"chem\">2^p</span> 恒為<strong>偶數</strong>，而 <span class=\"chem\">5^q</span> 恒為<strong>奇數</strong>——構成矛盾！",

    // Proof by contradiction and disproof by counterexample > Additional HL > h3
    "Disproof by counterexample": "以反例推翻命題",

    // Proof by contradiction and disproof by counterexample > Additional HL > p
    "To prove a universal statement (“For all <span class=\"chem\">x \\in S</span>, property <span class=\"chem\">Q(x)</span> holds”) is <strong>false</strong>, you only need to exhibit <strong>one single <dfn data-def=\"A specific example that satisfies the hypothesis of a general statement but makes its conclusion false.\">counterexample</dfn></strong> <span class=\"chem\">x_0 \\in S</span> for which <span class=\"chem\">Q(x_0)</span> is false. (Disproof by counterexample is examinable in May 2028.)": "要證明全稱命題（「對所有 <span class=\"chem\">x \\in S</span>，性質 <span class=\"chem\">Q(x)</span> 成立」）為<strong>假</strong>，只需舉出<strong>單一個<dfn data-def=\"滿足一般命題的前提但使其結論為假的具體例子。\">反例 <span class=\"en-term\">(counterexample)</span></dfn></strong> <span class=\"chem\">x_0 \\in S</span> 使 <span class=\"chem\">Q(x_0)</span> 為假即可。（以反例推翻命題屬 2028 年 5 月考試範圍。）",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-def attribute
    "A specific example that satisfies the hypothesis of a general statement but makes its conclusion false.": "滿足一般命題的前提但使其結論為假的具體例子。",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<em>Conjecture:</em> “For all real numbers <span class=\"chem\">x, y</span>, if <span class=\"chem\">x^2 &gt; y^2</span>, then <span class=\"chem\">x &gt; y</span>.” → <strong>False</strong>: take <span class=\"chem\">x = -3, y = 1</span>. Then <span class=\"chem\">x^2 = 9 &gt; 1 = y^2</span>, but <span class=\"chem\">-3 &lt; 1</span>.": "<em>猜想：</em>「對所有實數 <span class=\"chem\">x, y</span>，若 <span class=\"chem\">x^2 &gt; y^2</span>，則 <span class=\"chem\">x &gt; y</span>。」→ <strong>假</strong>：取 <span class=\"chem\">x = -3, y = 1</span>。此時 <span class=\"chem\">x^2 = 9 &gt; 1 = y^2</span>，但 <span class=\"chem\">-3 &lt; 1</span>。",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<em>Conjecture:</em> “<span class=\"chem\">n^2 + n + 41</span> is prime for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.” → <strong>False</strong>: take <span class=\"chem\">n = 41</span>. Then <span class=\"chem\">41^2 + 41 + 41 = 41(41 + 1 + 1) = 41 × 43</span>, which is composite.": "<em>猜想：</em>「對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>，<span class=\"chem\">n^2 + n + 41</span> 均為質數。」→ <strong>假</strong>：取 <span class=\"chem\">n = 41</span>。此時 <span class=\"chem\">41^2 + 41 + 41 = 41(41 + 1 + 1) = 41 × 43</span>，為合成數。",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > h3
    "Proving irrationality by contradiction": "用反證法證明無理數",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Prove by contradiction that <span class=\"chem\">sqrt(3)</span> is irrational. <strong>[5 marks]</strong>": "用反證法證明 (Prove by contradiction) <span class=\"chem\">sqrt(3)</span> 是無理數。<strong>[5 marks]</strong>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Assume the negation in lowest terms (coprime integers)": "假設命題的反面，並設為最簡分數（互質整數）",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Assume √3 is rational and write it as a fraction a/b where a and b share no common factors other than 1.": "假設 √3 是有理數，並寫成分數 a/b，其中 a 與 b 除 1 以外沒有其他公因數。",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Assume, for a contradiction, that √3 is rational, so √3 = <span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span> where <i>a</i>, <i>b</i> ∈ ℤ<sup>+</sup> and gcd(<i>a</i>, <i>b</i>) = 1. <b>[M1]</b>": "反證假設 √3 為有理數，即 √3 = <span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span>，其中 <i>a</i>, <i>b</i> ∈ ℤ<sup>+</sup> 且 gcd(<i>a</i>, <i>b</i>) = 1。<b>[M1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Square both sides and deduce that 3 divides a": "兩邊平方並推斷 3 整除 a",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Since 3 is prime, if 3 divides a², then 3 must divide a itself.": "因為 3 是質數，若 3 整除 a²，則 3 必整除 a 本身。",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "3 = <span class=\"frac\"><span><i>a</i><sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> ⇒ <i>a</i><sup>2</sup> = 3<i>b</i><sup>2</sup>. Hence 3 divides <i>a</i><sup>2</sup>, and since 3 is prime, 3 divides <i>a</i>. <b>[M1 A1]</b>": "3 = <span class=\"frac\"><span><i>a</i><sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> ⇒ <i>a</i><sup>2</sup> = 3<i>b</i><sup>2</sup>。故 3 整除 <i>a</i><sup>2</sup>，又因 3 為質數，故 3 整除 <i>a</i>。<b>[M1 A1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Substitute a = 3k to deduce that 3 also divides b, giving a contradiction": "代入 a = 3k 推斷 3 亦整除 b，從而構成矛盾",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Showing 3 divides both a and b contradicts gcd(a, b) = 1.": "證明 3 同時整除 a 與 b，與 gcd(a, b) = 1 矛盾。",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Let <i>a</i> = 3<i>k</i> (<i>k</i> ∈ ℤ). Then (3<i>k</i>)<sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ 9<i>k</i><sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ <i>b</i><sup>2</sup> = 3<i>k</i><sup>2</sup>. <b>[M1]</b>": "設 <i>a</i> = 3<i>k</i>（<i>k</i> ∈ ℤ）。則 (3<i>k</i>)<sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ 9<i>k</i><sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ <i>b</i><sup>2</sup> = 3<i>k</i><sup>2</sup>。<b>[M1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Thus 3 also divides <i>b</i><sup>2</sup> and hence 3 divides <i>b</i>. This contradicts gcd(<i>a</i>, <i>b</i>) = 1; therefore √3 is irrational. <b>[R1]</b>": "因此 3 亦整除 <i>b</i><sup>2</sup>，從而 3 整除 <i>b</i>。這與 gcd(<i>a</i>, <i>b</i>) = 1 矛盾；故 √3 是無理數。<b>[R1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "3 divides both a and b, contradicting gcd(a, b) = 1 ⇒ √3 is irrational": "3 同時整除 a 與 b，與 gcd(a, b) = 1 矛盾 ⇒ √3 是無理數",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > p
    "A student claims that the number <span class=\"chem\">f(n) = 2^n - 1</span> is prime for every prime number <span class=\"chem\">n</span>. While this is true for <span class=\"chem\">n = 2, 3, 5, 7</span>, it fails at the next prime <span class=\"chem\">n = 11</span> because <span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span>. Now consider a simpler claim: “<span class=\"chem\">n^2 - n + 5</span> is prime for all positive integers <span class=\"chem\">n</span>.” Find the smallest integer <span class=\"chem\">n &gt;= 2</span> that serves as a counterexample.": "一名學生聲稱對每個質數 <span class=\"chem\">n</span>，<span class=\"chem\">f(n) = 2^n - 1</span> 都是質數。雖然這對 <span class=\"chem\">n = 2, 3, 5, 7</span> 成立，但在下一個質數 <span class=\"chem\">n = 11</span> 時便不成立，因為 <span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span>。現考慮一個較簡單的聲稱：「對所有正整數 <span class=\"chem\">n</span>，<span class=\"chem\">n^2 - n + 5</span> 均為質數。」求 (Find) 可作為反例的最小整數 <span class=\"chem\">n &gt;= 2</span>。",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > li
    "Test <span class=\"chem\">n = 2, 3, 4, 5</span> in <span class=\"chem\">n^2 - n + 5</span>.": "把 <span class=\"chem\">n = 2, 3, 4, 5</span> 代入 <span class=\"chem\">n^2 - n + 5</span> 測試。",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > li
    "For <span class=\"chem\">n = 2</span>: <span class=\"chem\">7</span> (prime). For <span class=\"chem\">n = 3</span>: <span class=\"chem\">11</span> (prime). For <span class=\"chem\">n = 4</span>: <span class=\"chem\">17</span> (prime). What happens at <span class=\"chem\">n = 5</span>?": "當 <span class=\"chem\">n = 2</span>：<span class=\"chem\">7</span>（質數）。當 <span class=\"chem\">n = 3</span>：<span class=\"chem\">11</span>（質數）。當 <span class=\"chem\">n = 4</span>：<span class=\"chem\">17</span>（質數）。當 <span class=\"chem\">n = 5</span> 時會怎樣？",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > maths line
    "For <i>n</i> = <b>5</b>: 5<sup>2</sup> − 5 + 5 = 25 = 5 × 5, which is composite (not prime).": "當 <i>n</i> = <b>5</b>：5<sup>2</sup> − 5 + 5 = 25 = 5 × 5，這是合成數（非質數）。",

    // Systems of linear equations (up to 3 variables) > Additional HL > data-toc attribute
    "3×3 linear systems": "3×3 線性方程組",

    // Systems of linear equations (up to 3 variables) > Additional HL > h2
    "Systems of linear equations (up to 3 variables)": "線性方程組（最多 3 個未知數）",

    // Systems of linear equations (up to 3 variables) > Additional HL > p
    "A system of three linear equations in three unknowns <span class=\"chem\">x, y, z</span> represents three planes in 3D space (AHL 3.18, site page 3.3). We solve and classify the system algebraically using <dfn data-def=\"The systematic use of elementary row operations (swapping rows, scaling a row by a non-zero constant, adding a multiple of one row to another) to reduce a system to upper-triangular (echelon) form.\">Gaussian elimination</dfn>: use the first equation to eliminate <span class=\"chem\">x</span> from equations 2 and 3, then use the new second equation to eliminate <span class=\"chem\">y</span> from equation 3, arriving at an upper-triangular (row-echelon) system:": "含三個未知數 <span class=\"chem\">x, y, z</span> 的三元線性方程組代表 3D 空間中的三個平面（AHL 3.18，本網站第 3.3 頁）。我們利用<dfn data-def=\"有系統地運用初等列運算（對調兩列、把一列乘以非零常數、把一列的倍數加到另一列）把方程組化為上三角（梯形）形式的方法。\">高斯消去法 <span class=\"en-term\">(Gaussian elimination)</span></dfn>從代數上求解並分類：先用第一條方程消去第 2 與第 3 條方程中的 <span class=\"chem\">x</span>，再用新的第二條方程消去第 3 條方程中的 <span class=\"chem\">y</span>，得出上三角（列梯形）方程組：",

    // Systems of linear equations (up to 3 variables) > Additional HL > data-def attribute
    "The systematic use of elementary row operations (swapping rows, scaling a row by a non-zero constant, adding a multiple of one row to another) to reduce a system to upper-triangular (echelon) form.": "有系統地運用初等列運算（對調兩列、把一列乘以非零常數、把一列的倍數加到另一列）把方程組化為上三角（梯形）形式的方法。",

    // Systems of linear equations (up to 3 variables) > Additional HL > h3
    "Classifying the 3 outcomes from the final reduced row <span class=\"chem\">g(k) z = h(k)</span>": "從化簡後的最後一行 <span class=\"chem\">g(k) z = h(k)</span> 分類 3 種結果",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > caption
    "Classification of a 3 × 3 linear system after Gaussian elimination": "高斯消去法後 3 × 3 線性方程組的分類",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "Condition on Row 3: <span class=\"chem\">g(k) z = h(k)</span>": "第 3 行的條件：<span class=\"chem\">g(k) z = h(k)</span>",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "Algebraic outcome": "代數結果",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "3D geometric meaning (AHL 3.18, site page 3.3)": "3D 幾何意義（AHL 3.18，本網站第 3.3 頁）",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>Unique solution</strong> (consistent): <span class=\"chem\">z = h(k) / g(k)</span>, then back-substitute to find unique <span class=\"chem\">y</span> and <span class=\"chem\">x</span>.": "<strong>唯一解</strong>（相容）：<span class=\"chem\">z = h(k) / g(k)</span>，然後回代求唯一的 <span class=\"chem\">y</span> 與 <span class=\"chem\">x</span>。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The three planes intersect at a <strong>single point</strong> <span class=\"chem\">(x, y, z)</span>.": "三個平面相交於<strong>單一點</strong> <span class=\"chem\">(x, y, z)</span>。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "<strong><span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) != 0</span></strong>": "<strong><span class=\"chem\">g(k) = 0</span> 且 <span class=\"chem\">h(k) != 0</span></strong>",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>No solution</strong> (inconsistent): Row 3 reads <span class=\"chem\">0 = h(k) != 0</span>, which is impossible.": "<strong>無解</strong>（不相容）：第 3 行變成 <span class=\"chem\">0 = h(k) != 0</span>，這是不可能的。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The planes form a <strong>triangular prism</strong> (pairwise intersecting in 3 parallel lines) or two/three planes are parallel and distinct.": "三個平面形成一個<strong>三角柱</strong>（兩兩相交於 3 條平行線），或有兩個／三個平面互相平行且不相交。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "<strong><span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) = 0</span></strong>": "<strong><span class=\"chem\">g(k) = 0</span> 且 <span class=\"chem\">h(k) = 0</span></strong>",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>Infinitely many solutions</strong> (dependent): Row 3 reads <span class=\"chem\">0 = 0</span>. Let <span class=\"chem\">z = lambda</span> (<span class=\"chem\">lambda \\in \\mathbb{R}</span>) and back-substitute into Row 2 and Row 1.": "<strong>無限多解</strong>（相依）：第 3 行變成 <span class=\"chem\">0 = 0</span>。設 <span class=\"chem\">z = lambda</span>（<span class=\"chem\">lambda \\in \\mathbb{R}</span>）並回代至第 2 行與第 1 行。",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The three planes meet along a common <strong>line of intersection</strong> <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + \\lambda \\mathbf{b}</span> (a sheaf of planes) or are coincident.": "三個平面相交於同一條<strong>交線</strong> <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + \\lambda \\mathbf{b}</span>（平面束），或完全重合。",

    // Systems of linear equations (up to 3 variables) > not needed for IB > Additional HL > p
    "<strong>Not needed for IB Math AA HL:</strong> Matrix algebra, <span class=\"chem\">3 × 3</span> determinants (<span class=\"chem\">det(A) = 0</span>), inverse matrices <span class=\"chem\">A^{-1}</span>, Cramer's rule and eigenvalues are <strong>not in the IB Math AA HL syllabus</strong>.": "<strong>IB Math AA HL 不要求的內容：</strong>矩陣代數、<span class=\"chem\">3 × 3</span> 行列式（<span class=\"chem\">det(A) = 0</span>）、逆矩陣 <span class=\"chem\">A^{-1}</span>、克萊默法則（Cramer's rule）及特徵值均<strong>不在 IB Math AA HL 課程內</strong>。",

    // Systems of linear equations (up to 3 variables) > exam tip (shown in English + translation) > Additional HL > p
    "<strong>Row reduction is examinable (AHL 1.16):</strong> you may write the row operations on an augmented matrix, and on Paper 2 you should use your GDC's system solver or rref to solve or check a system with numerical coefficients. With a parameter <span class=\"chem\">k</span>, use elimination (row reduction) to reach <span class=\"chem\">g(k)z = h(k)</span>: a zero coefficient alone cannot tell <em>no solution</em> from <em>infinitely many solutions</em>, so check the consistency of the right-hand side.": "<strong>列運算（row reduction）屬考試範圍 (AHL 1.16)：</strong>你可以在增廣矩陣上寫出列運算；在 Paper 2 中，應使用 GDC 的方程組求解功能或 rref 求解或驗算數值係數的方程組。若含參數 <span class=\"chem\">k</span>，須用消去法（列運算）化簡至 <span class=\"chem\">g(k)z = h(k)</span>：單憑係數為零並不能區分<em>無解</em>與<em>無限多解</em>，必須檢查右方是否一致。",

    // Systems of linear equations (up to 3 variables) > common mistake > Additional HL > p
    "<strong>Never divide a row by an expression containing the parameter <span class=\"chem\">k</span>!</strong> Dividing Row 2 by <span class=\"chem\">(k - 2)</span> silently assumes <span class=\"chem\">k != 2</span>, which destroys the exact singular value the question is asking you to investigate. Multiply rows by constants or expressions only when keeping track of zero factors.": "<strong>切勿將某一行除以含有參數 <span class=\"chem\">k</span> 的代數式！</strong>把第 2 行除以 <span class=\"chem\">(k - 2)</span> 會暗中假設了 <span class=\"chem\">k != 2</span>，正好抹去了題目要你探究的奇異值。只有在妥善記錄零因子的情況下，才可把行乘以常數或代數式。",

    // Systems of linear equations (up to 3 variables) > widget > Additional HL > data-title attribute
    "3D planes & 3×3 linear system classifier": "3D 平面與 3×3 線性方程組分類器",

    // Systems of linear equations (up to 3 variables) > widget > Additional HL > figcaption
    "Explore the three geometric configurations of a <span class=\"chem\">3 × 3</span> linear system in 3D space—a unique point of intersection, a sheaf of planes meeting along a line (infinitely many solutions), and a triangular prism of planes (no solution)—alongside their reduced echelon rows.": "探索 3D 空間中 <span class=\"chem\">3 × 3</span> 線性方程組的三種幾何構形——交於唯一一點、平面束交於一直線（無限多解）及構成三角柱（無解）——並對照其簡化後的梯形方程。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > h3
    "Finding parameter values for no solution and infinitely many solutions": "求無解與無限多解的參數值",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Consider the system of linear equations:": "考慮以下線性方程組：",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "<span class=\"chem\">x + y + z = 2</span><br> <span class=\"chem\">2x + 3y + 4z = 5</span><br> <span class=\"chem\">3x + 4y + (k^2 - 4)z = k + 4</span>, &nbsp; where <span class=\"chem\">k \\in \\mathbb{R}</span>.": "<span class=\"chem\">x + y + z = 2</span><br> <span class=\"chem\">2x + 3y + 4z = 5</span><br> <span class=\"chem\">3x + 4y + (k^2 - 4)z = k + 4</span>, &nbsp; 其中 <span class=\"chem\">k \\in \\mathbb{R}</span>。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(a) Find the value(s) of <span class=\"chem\">k</span> for which the system has: (i) a unique solution, (ii) no solution, (iii) infinitely many solutions. <strong>[6 marks]</strong>": "(a) 求 (Find) 使方程組有以下情況的 <span class=\"chem\">k</span> 值：(i) 唯一解，(ii) 無解，(iii) 無限多解。<strong>[6 marks]</strong>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(b) For the value of <span class=\"chem\">k</span> that gives infinitely many solutions, find the general solution in terms of a real parameter <span class=\"chem\">lambda</span>. <strong>[2 marks]</strong>": "(b) 對於使方程組有無限多解的 <span class=\"chem\">k</span> 值，求 (find) 以實參數 <span class=\"chem\">lambda</span> 表示的通解。<strong>[2 marks]</strong>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Eliminate x from equations 2 and 3 using R₂ → R₂ − 2R₁ and R₃ → R₃ − 3R₁": "利用 R₂ → R₂ − 2R₁ 及 R₃ → R₃ − 3R₁ 消去第 2 與第 3 條方程中的 x",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Subtracting 2×(Row 1) from Row 2 and 3×(Row 1) from Row 3 zeroes out the x-column below Row 1.": "從第 2 行減去 2×(第 1 行) 及從第 3 行減去 3×(第 1 行)，把第 1 行以下的 x 項消去。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Eliminate y from equation 3 using R₃ → R₃ − R₂ and classify by k": "利用 R₃ → R₃ − R₂ 消去第 3 條方程中的 y 並按 k 分類",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Subtracting the new Row 2 from the new Row 3 isolates z in the form g(k)z = h(k).": "從新的第 3 行減去新的第 2 行，將 z 分離為 g(k)z = h(k) 的形式。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "(i) <b>Unique solution</b>: <i>k</i><sup>2</sup> − 9 ≠ 0 ⇒ <b><i>k</i> ≠ 3 and <i>k</i> ≠ −3</b>.<br>(ii) <b>No solution</b>: <i>k</i> = −3 gives 0<i>z</i> = −6 (inconsistent), so <b><i>k</i> = −3</b>.<br>(iii) <b>Infinite solutions</b>: <i>k</i> = 3 gives 0<i>z</i> = 0, so <b><i>k</i> = 3</b>. <b>[A1]</b>": "(i) <b>唯一解</b>：<i>k</i><sup>2</sup> − 9 ≠ 0 ⇒ <b><i>k</i> ≠ 3 且 <i>k</i> ≠ −3</b>。<br>(ii) <b>無解</b>：<i>k</i> = −3 得 0<i>z</i> = −6（不相容），故 <b><i>k</i> = −3</b>。<br>(iii) <b>無限多解</b>：<i>k</i> = 3 得 0<i>z</i> = 0，故 <b><i>k</i> = 3</b>。<b>[A1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Set z = λ for k = 3 and back-substitute into Row 2 and Row 1": "對 k = 3 設 z = λ 並回代至第 2 行與第 1 行",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "With Row 3 reduced to 0 = 0, z is a free parameter λ ∈ ℝ.": "第 3 行化簡為 0 = 0 後，z 是自由參數 λ ∈ ℝ。",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "Let <i>z</i> = <i>λ</i> (<i>λ</i> ∈ ℝ). From <i>R</i><sub>2</sub>: <i>y</i> = 1 − 2<i>z</i> = <b>1 − 2<i>λ</i></b> <b>[M1]</b>": "設 <i>z</i> = <i>λ</i>（<i>λ</i> ∈ ℝ）。由 <i>R</i><sub>2</sub>：<i>y</i> = 1 − 2<i>z</i> = <b>1 − 2<i>λ</i></b> <b>[M1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "From <i>R</i><sub>1</sub>: <i>x</i> = 2 − <i>y</i> − <i>z</i> = 2 − (1 − 2<i>λ</i>) − <i>λ</i> = <b>1 + <i>λ</i></b> <b>[A1]</b>": "由 <i>R</i><sub>1</sub>：<i>x</i> = 2 − <i>y</i> − <i>z</i> = 2 − (1 − 2<i>λ</i>) − <i>λ</i> = <b>1 + <i>λ</i></b> <b>[A1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(a) Unique: k ≠ ±3; No solution: k = −3; Infinite: k = 3 &nbsp;&nbsp; (b) (x, y, z) = (1 + λ, 1 − 2λ, λ)": "(a) 唯一解：k ≠ ±3；無解：k = −3；無限多解：k = 3 &nbsp;&nbsp; (b) (x, y, z) = (1 + λ, 1 − 2λ, λ)",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > p
    "The system of equations <span class=\"chem\">x + 2y - z = 3</span>, <span class=\"chem\">2x + 5y + z = 8</span>, and <span class=\"chem\">3x + 7y + kz = 11</span> has <strong>infinitely many solutions</strong> for a specific real constant <span class=\"chem\">k</span>. When <span class=\"chem\">z = 2</span>, find the value of <span class=\"chem\">x + y + k</span>.": "方程組 <span class=\"chem\">x + 2y - z = 3</span>、<span class=\"chem\">2x + 5y + z = 8</span> 與 <span class=\"chem\">3x + 7y + kz = 11</span> 對某個實常數 <span class=\"chem\">k</span> 有<strong>無限多解</strong>。當 <span class=\"chem\">z = 2</span> 時，求 (find) <span class=\"chem\">x + y + k</span> 的值。",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > li
    "Notice that <span class=\"chem\">R_1 + R_2</span> on the left-hand side has <span class=\"chem\">(1+2)x + (2+5)y = 3x + 7y</span>, which matches <span class=\"chem\">R_3</span>! Also <span class=\"chem\">3 + 8 = 11</span>. Thus for infinite solutions we need <span class=\"chem\">k = -1 + 1 = 0</span>.": "留意左方的 <span class=\"chem\">R_1 + R_2</span> 得出 <span class=\"chem\">(1+2)x + (2+5)y = 3x + 7y</span>，正與 <span class=\"chem\">R_3</span> 相同！而且 <span class=\"chem\">3 + 8 = 11</span>。因此要有無限多解，必須滿足 <span class=\"chem\">k = -1 + 1 = 0</span>。",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > li
    "Now set <span class=\"chem\">z = 2</span> in <span class=\"chem\">x + 2y = 3 + z = 5</span> and <span class=\"chem\">2x + 5y = 8 - z = 6</span> to find <span class=\"chem\">x = 13, y = -4</span>, and compute <span class=\"chem\">x + y + k</span>.": "現把 <span class=\"chem\">z = 2</span> 代入 <span class=\"chem\">x + 2y = 3 + z = 5</span> 與 <span class=\"chem\">2x + 5y = 8 - z = 6</span>，求得 <span class=\"chem\">x = 13, y = -4</span>，並計算 <span class=\"chem\">x + y + k</span>。",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > maths line
    "For <i>z</i> = 2: <i>y</i> = 2 − 3(2) = −4, <i>x</i> = 3 − 2(−4) + 2 = 13 ⇒ <i>x</i> + <i>y</i> + <i>k</i> = 13 − 4 + 0 = <b>9</b>": "當 <i>z</i> = 2：<i>y</i> = 2 − 3(2) = −4，<i>x</i> = 3 − 2(−4) + 2 = 13 ⇒ <i>x</i> + <i>y</i> + <i>k</i> = 13 − 4 + 0 = <b>9</b>",

    // Check your understanding > data-toc attribute
    "Practice": "練習",

    // Check your understanding > h2
    "Check your understanding": "檢查你的理解",

    // Check your understanding > data-title attribute
    "Topic 1.5 practice check": "課題 1.5 練習小測",

    // widget string (assets/js/widgets-t1-5.js)
    "Proposition P(n)": "命題 P(n)",

    // widget string (assets/js/widgets-t1-5.js)
    "Sum of squares: Σ r² = n(n+1)(2n+1)/6": "平方和：Σ r² = n(n+1)(2n+1)/6",

    // widget string (assets/js/widgets-t1-5.js)
    "Sum of odd integers: Σ (2r − 1) = n²": "奇數之和：Σ (2r − 1) = n²",

    // widget string (assets/js/widgets-t1-5.js)
    "Divisibility: 5²ⁿ − 1 is divisible by 24": "整除性：5²ⁿ − 1 可被 24 整除",

    // widget string (assets/js/widgets-t1-5.js)
    "Inductive step index k (proving P(k) ⇒ P(k+1))": "歸納步驟指標 k（證明 P(k) ⇒ P(k+1)）",

    // widget string (assets/js/widgets-t1-5.js)
    "Step k → k + 1": "步驟 k → k + 1",

    // widget string (assets/js/widgets-t1-5.js)
    "1. Base case P(1)": "1. 初始步驟 P(1)",

    // widget string (assets/js/widgets-t1-5.js)
    "2. Inductive hypothesis P(k)": "2. 歸納假設 P(k)",

    // widget string (assets/js/widgets-t1-5.js)
    "3. Inductive step P(k + 1)": "3. 歸納步驟 P(k + 1)",

    // widget string (assets/js/widgets-t1-5.js)
    "Numerical check at n = k + 1": "n = k + 1 時的數值驗證",

    // widget string (assets/js/widgets-t1-5.js)
    "Domino chain showing P(1) through P(7) falling by mathematical induction": "顯示 P(1) 至 P(7) 依數學歸納法順次倒下的骨牌鏈",

    // widget string (assets/js/widgets-t1-5.js)
    "Base": "初始",

    // widget string (assets/js/widgets-t1-5.js)
    "3 × 3 System Configuration": "3 × 3 方程組構形",

    // widget string (assets/js/widgets-t1-5.js)
    "Unique solution (k = 1): 3 planes meet at 1 point": "唯一解 (k = 1)：3 個平面相交於 1 點",

    // widget string (assets/js/widgets-t1-5.js)
    "Infinite solutions (k = 3): sheaf of 3 planes meeting on a line": "無限多解 (k = 3)：3 個平面構成平面束交於一直線",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (k = −3): 3 planes form a triangular prism": "無解 (k = −3)：3 個平面形成三角柱",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution: parallel planes": "無解：平行平面",

    // widget string (assets/js/widgets-t1-5.js)
    "System used (worked example below)": "所用的方程組（見下方例題）",

    // widget string (assets/js/widgets-t1-5.js)
    "x + y + z = 2, 2x + 3y + 4z = 5, 3x + 4y + (k² − 4)z = k + 4. The plane drawings are schematic.": "x + y + z = 2, 2x + 3y + 4z = 5, 3x + 4y + (k² − 4)z = k + 4。平面的圖像只是示意圖。",

    // widget string (assets/js/widgets-t1-5.js)
    "Reduced Row 3: g(k)z = h(k)": "化簡第 3 行：g(k)z = h(k)",

    // widget string (assets/js/widgets-t1-5.js)
    "Algebraic classification": "代數分類",

    // widget string (assets/js/widgets-t1-5.js)
    "3D geometric intersection": "3D 幾何相交情況",

    // widget string (assets/js/widgets-t1-5.js)
    "Unique solution: (x, y, z) = (5/4, 1/2, 1/4)": "唯一解：(x, y, z) = (5/4, 1/2, 1/4)",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes intersect at a single point P": "三個平面相交於單一點 P",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes intersecting at a single unique point in 3D space": "三個平面在 3D 空間中相交於唯一一點",

    // widget string (assets/js/widgets-t1-5.js)
    "Infinitely many solutions: (x, y, z) = (1 + λ, 1 − 2λ, λ), λ ∈ ℝ": "無限多解：(x, y, z) = (1 + λ, 1 − 2λ, λ), λ ∈ ℝ",

    // widget string (assets/js/widgets-t1-5.js)
    "Sheaf of 3 planes sharing a common line of intersection": "共享同一條交線的 3 個平面束",

    // widget string (assets/js/widgets-t1-5.js)
    "Sheaf of three planes intersecting along a single common line": "三個平面沿單一共同直線相交而成的平面束",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (inconsistent system: 0 = −6)": "無解（不相容方程組：0 = −6）",

    // widget string (assets/js/widgets-t1-5.js)
    "Triangular prism: pairs of planes meet in 3 parallel lines": "三角柱：兩兩平面相交於 3 條平行線",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes forming a triangular prism with no common intersection": "三個平面形成三角柱而沒有共同交點",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (inconsistent: parallel planes never meet)": "無解（不相容：平行平面永不相交）",

    // widget string (assets/js/widgets-t1-5.js)
    "At least two planes are strictly parallel and distinct": "至少有兩個平面嚴格平行且不重合",

    // widget string (assets/js/widgets-t1-5.js)
    "Three parallel distinct planes with no common intersection": "三個互相平行且不重合的平面，沒有共同交點",

    // Proof by mathematical induction > p
    "<strong>Before you start:</strong> induction proofs of series use sigma notation from <a href=\"t1-1.html\">1.1 Sequences, series and financial models</a>; proofs about <span class=\"chem\">f^{(n)}(x)</span> use the product and chain rules from <a href=\"t5-1.html\">5.1 Differentiation, curve analysis and optimization</a>; and the induction proof of De Moivre’s theorem (<a href=\"t1-4.html\">1.4 Complex numbers and De Moivre’s theorem</a>) uses the compound-angle identities from <a href=\"t3-2.html\">3.2 The unit circle, trig identities and periodic models</a>.": "<strong>開始之前：</strong>級數的歸納法證明要用到 <a href=\"t1-1.html\">1.1 數列、級數與財務模型</a> 的 Σ 記號；關於 <span class=\"chem\">f^{(n)}(x)</span> 的證明要用到 <a href=\"t5-1.html\">5.1 微分、曲線分析與最佳化</a> 的乘積法則和連鎖法則；而棣美弗定理（<a href=\"t1-4.html\">1.4 複數與棣美弗定理</a>）的歸納法證明要用到 <a href=\"t3-2.html\">3.2 單位圓、三角恆等式與週期模型</a> 的複角公式。",

    // Systems of linear equations (up to 3 variables) > p
    "<strong>Before you start:</strong> the geometric meaning of each case (three planes meeting at a point, in a line, or not at all) uses planes and normal vectors from <a href=\"t3-3.html\">3.3 Vectors, lines and planes in 3D space</a>.": "<strong>開始之前：</strong>每種情況的幾何意義（三個平面相交於一點、相交於一條直線，或沒有公共點）要用到 <a href=\"t3-3.html\">3.3 3D 空間中的向量、直線與平面</a> 的平面與法向量。",

    // Check your understanding > h3
    "Foundation: proof vocabulary and first systems": "基礎：證明用語與入門方程組",

    // Check your understanding > data-title attribute
    "1.5 foundation": "1.5 基礎練習",

    // Check your understanding > h3
    "Exam standard: Paper 1 and Paper 2": "考試標準：Paper 1 與 Paper 2",

    // Check your understanding > data-title attribute
    "1.5 exam standard": "1.5 考試標準",

    // Check your understanding > h3
    "Challenge and Paper 3: decoding and investigations": "挑戰題與 Paper 3：拆解題意與探究題",

    // Check your understanding > data-title attribute
    "1.5 challenge": "1.5 挑戰題",
  }
});
