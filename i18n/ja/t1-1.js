/* t1-1 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-1', {
  strings: {

    // page title (browser tab)
    "1.1 Sequences, series and financial models | Analysis Lab": "1.1 数列・級数と金融モデル | Analysis Lab",

    // Sequences, series and financial models > page header > p
    "Topic 1.1 · SL 1.1–1.4, 1.8": "Topic 1.1 · SL 1.1–1.4, 1.8",

    // Sequences, series and financial models > page header > h1
    "Sequences, series and financial models": "数列・級数と金融モデル",

    // Sequences, series and financial models > page header > span
    "How do we model patterns that grow by a fixed step versus a fixed percentage, and when does an infinite sum reach a finite limit?": "一定の差で増えるパターンと一定の割合で増えるパターンをどのようにモデル化し、無限和はいつ有限の値に収束するのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Tick each skill when you can do it confidently without looking at your notes. Everything on this page is SL core, examined on both SL and HL papers.": "ノートを見ずに自信をもって解けるようになったら、各項目にチェックを入れましょう。このページの学習内容はすべて SL 共通範囲であり、SL・HL の両方で出題されます。",

    // What you need to be able to do > checklist > span
    "Perform operations with numbers in standard form <span class=\"chem\">a × 10^k</span> where <span class=\"chem\">1 &lt;= a &lt; 10</span> and <span class=\"chem\">k</span> is an integer.": "指数表記 <span class=\"chem\">a × 10^k</span>（<span class=\"chem\">1 &lt;= a &lt; 10</span>、<span class=\"chem\">k</span> は整数）で表された数の四則演算ができる。",

    // What you need to be able to do > checklist > span
    "Find the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> and sum of the first <span class=\"chem\">n</span> terms <span class=\"chem\">S_n</span> of an arithmetic sequence.": "等差数列の第 <span class=\"chem\">n</span> 項（一般項）<span class=\"chem\">u_n</span> と、初項から第 <span class=\"chem\">n</span> 項までの和 <span class=\"chem\">S_n</span> を求められる。",

    // What you need to be able to do > checklist > span
    "Evaluate and interpret sigma notation <span class=\"chem\">Σ_{r=a}^b u_r</span>, counting <span class=\"chem\">b - a + 1</span> terms accurately.": "シグマ記号 <span class=\"chem\">Σ_{r=a}^b u_r</span> の意味を理解して計算でき、項数 <span class=\"chem\">b - a + 1</span> を正確に数えられる。",

    // What you need to be able to do > checklist > span
    "Find the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> and finite sum <span class=\"chem\">S_n</span> of a geometric sequence, and solve threshold inequalities <span class=\"chem\">S_n &gt; K</span>.": "等比数列の第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span> と有限和 <span class=\"chem\">S_n</span> を求められ、不等式 <span class=\"chem\">S_n &gt; K</span> を解ける。",

    // What you need to be able to do > checklist > span
    "Test for convergence (<span class=\"chem\">|r| &lt; 1</span>) and calculate the sum to infinity <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "収束条件（<span class=\"chem\">|r| &lt; 1</span>）を判定し、無限等比級数の和 <span class=\"chem\">S_infty = u_1 / (1 - r)</span> を計算できる。",

    // What you need to be able to do > checklist > span
    "Calculate compound interest, annual depreciation, and regular savings using the formula booklet and GDC Finance Solver.": "公式集（Formula booklet）とグラフ電卓 (GDC) の Finance Solver を使って、複利、減価償却、積立貯蓄を計算できる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：どの解法を使うか見抜くコツ",

    // Question decoder: spotting which technique to use > p
    "Sequence and financial problems often hide the mathematical formula behind everyday wording. Use this table to translate exam phrases directly into equations.": "数列や金融の問題では、日常的な表現の裏に数式が隠れていることがよくあります。この表を使って、試験問題のフレーズをそのまま数式に翻訳しましょう。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Sequences, series and finance": "問題デコーダー — 数列・級数・金融",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "“Increases by a fixed amount each year / month”": "「毎年 / 毎月、一定の額ずつ増える」（Increases by a fixed amount）",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Arithmetic sequence</strong> with constant difference <span class=\"chem\">d = u_2 - u_1</span>.": "公差 <span class=\"chem\">d = u_2 - u_1</span> の<strong>等差数列</strong>です。",

    // Question decoder: spotting which technique to use > table > td
    "Substitute <span class=\"chem\">u_1</span> and <span class=\"chem\">d</span> into <span class=\"chem\">u_n = u_1 + (n - 1)d</span>.": "<span class=\"chem\">u_1</span> と <span class=\"chem\">d</span> を <span class=\"chem\">u_n = u_1 + (n - 1)d</span> に代入します。",

    // Question decoder: spotting which technique to use > table > th
    "“Increases by <i>p</i>% each year” / “Loses <i>p</i>% of its value each year”": "「毎年 <i>p</i>% ずつ増える」/「毎年 <i>p</i>% ずつ価値が減少する」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Geometric sequence</strong> with <span class=\"chem\">r = 1 + p/100</span> (growth) or <span class=\"chem\">r = 1 - p/100</span> (decay).": "<span class=\"chem\">r = 1 + p/100</span>（増加）または <span class=\"chem\">r = 1 - p/100</span>（減少）の<strong>等比数列</strong>です。",

    // Question decoder: spotting which technique to use > table > td
    "Watch the timeline! Value after <span class=\"chem\">t</span> full years is <span class=\"chem\">PV × r^t</span> (which is <span class=\"chem\">u_{t+1}</span> if <span class=\"chem\">u_1</span> is at <span class=\"chem\">t = 0</span>).": "時間のずれに注意しましょう。<span class=\"chem\">t</span> 年後の価値は <span class=\"chem\">PV × r^t</span> です（<span class=\"chem\">t = 0</span> を <span class=\"chem\">u_1</span> とすると <span class=\"chem\">u_{t+1}</span> になります）。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the value in the <i>n</i>-th year” vs “Find the total over the first <i>n</i> years”": "「第 <i>n</i> 年の値を求めよ」vs「最初の <i>n</i> 年間の合計を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Single year/step <span class=\"chem\">-&gt;</span> term <span class=\"chem\">u_n</span>.<br>Cumulative total <span class=\"chem\">-&gt;</span> series sum <span class=\"chem\">S_n</span>.": "特定の 1 年・1 段階 <span class=\"chem\">-&gt;</span> 一般項 <span class=\"chem\">u_n</span>。<br>累計の合計 <span class=\"chem\">-&gt;</span> 級数の和 <span class=\"chem\">S_n</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Underline “in the <i>n</i>-th” (<span class=\"chem\">u_n</span>) vs “total / altogether / over <i>n</i>” (<span class=\"chem\">S_n</span>) before writing a formula.": "式を書く前に、“in the <i>n</i>-th”（<span class=\"chem\">u_n</span>）か、“total / altogether / over <i>n</i>”（<span class=\"chem\">S_n</span>）かに下線を引きましょう。",

    // Question decoder: spotting which technique to use > table > th
    "“<i>a</i>, <i>b</i>, <i>c</i> are consecutive terms of an arithmetic / geometric sequence”": "「<i>a</i>, <i>b</i>, <i>c</i> は等差数列 / 等比数列の連続する 3 項である」",

    // Question decoder: spotting which technique to use > table > td
    "Arithmetic: <span class=\"chem\">b - a = c - b &lt;=&gt; 2b = a + c</span>.<br>Geometric: <span class=\"chem\">b / a = c / b &lt;=&gt; b^2 = ac</span>.": "等差数列：<span class=\"chem\">b - a = c - b &lt;=&gt; 2b = a + c</span>。<br>等比数列：<span class=\"chem\">b / a = c / b &lt;=&gt; b^2 = ac</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Solve the resulting quadratic and check whether any root violates “distinct terms” or “convergent series”.": "得られた二次方程式を解き、「異なる項（distinct terms）」や「収束する級数（convergent series）」の条件に反する解がないか確認します。",

    // Question decoder: spotting which technique to use > table > th
    "“Given that <span class=\"chem\">S_n = 3n^2 + 5n</span>, find <span class=\"chem\">u_n</span>”": "「<span class=\"chem\">S_n = 3n^2 + 5n</span> のとき、<span class=\"chem\">u_n</span> を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Recover terms from cumulative sums using <span class=\"chem\">u_1 = S_1</span> and <span class=\"chem\">u_n = S_n - S_{n-1}</span> for <span class=\"chem\">n &gt;= 2</span>.": "和から各項を求めるには、<span class=\"chem\">u_1 = S_1</span> および <span class=\"chem\">n &gt;= 2</span> に対して <span class=\"chem\">u_n = S_n - S_{n-1}</span> を使います。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1 shortcut</strong>: Find <span class=\"chem\">u_1 = S_1</span> and <span class=\"chem\">u_2 = S_2 - S_1</span>; if <span class=\"chem\">S_n</span> is a quadratic with zero constant term, <span class=\"chem\">d = u_2 - u_1</span>.": "<strong>Paper 1 の近道</strong>：<span class=\"chem\">u_1 = S_1</span> と <span class=\"chem\">u_2 = S_2 - S_1</span> を求めます。<span class=\"chem\">S_n</span> が定数項 0 の二次式なら、<span class=\"chem\">d = u_2 - u_1</span> です。",

    // Question decoder: spotting which technique to use > table > th
    "“The infinite series converges” / “Find the sum to infinity”": "「この無限級数は収束する（converges）」/「無限和（sum to infinity）を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Geometric series with <span class=\"chem\">|r| &lt; 1</span> (<span class=\"chem\">-1 &lt; r &lt; 1</span>) and <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "<span class=\"chem\">|r| &lt; 1</span>（<span class=\"chem\">-1 &lt; r &lt; 1</span>）を満たす等比級数であり、<span class=\"chem\">S_infty = u_1 / (1 - r)</span> を使います。",

    // Question decoder: spotting which technique to use > table > td
    "Use <span class=\"chem\">|r| &lt; 1</span> to reject extraneous roots of <span class=\"chem\">r</span>, then substitute into <span class=\"chem\">S_infty</span>.": "<span class=\"chem\">|r| &lt; 1</span> を使って不適な <span class=\"chem\">r</span> の解を除外してから、<span class=\"chem\">S_infty</span> に代入します。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the least number of terms for which the sum exceeds <i>K</i>”": "「和が <i>K</i> を超える最小の項数を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Inequality <span class=\"chem\">S_n &gt; K</span> where <span class=\"chem\">n</span> is a positive integer.": "<span class=\"chem\">n</span> を正の整数として不等式 <span class=\"chem\">S_n &gt; K</span> を立てます。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Isolate <span class=\"chem\">r^n</span> and take logs (flip inequality if <span class=\"chem\">0 &lt; r &lt; 1</span> since <span class=\"chem\">ln r &lt; 0</span>).<br><strong>P2</strong>: Use GDC table or graph intersection, then round <strong>up</strong> to the next integer.": "<strong>Paper 1</strong>：<span class=\"chem\">r^n</span> を孤立させて対数をとります（<span class=\"chem\">0 &lt; r &lt; 1</span> のときは <span class=\"chem\">ln r &lt; 0</span> なので不等号の向きが逆になります）。<br><strong>Paper 2</strong>：GDC の表（Table）またはグラフの交点を使い、次の整数へ<strong>切り上げ</strong>ます。",

    // Numbers in standard form > data-toc attribute
    "Standard form": "指数表記",

    // Numbers in standard form > h2
    "Numbers in standard form": "指数表記（科学表記）の数",

    // Numbers in standard form > p
    "In scientific and mathematical work, very large and very small numbers are written in <dfn data-def=\"Writing a number in the form a × 10^k where 1 ≤ a &lt; 10 and k is an integer (also called scientific notation).\">standard form</dfn> (scientific notation):": "科学や数学では、非常に大きい数や非常に小さい数を<dfn data-def=\"1 ≤ a &lt; 10、k を整数として a × 10^k の形で表す表記法（科学表記ともいう）。\">指数表記 <span class=\"en-term\">(standard form)</span></dfn>（科学表記）で表します：",

    // Numbers in standard form > data-def attribute
    "Writing a number in the form a × 10^k where 1 ≤ a < 10 and k is an integer (also called scientific notation).": "1 ≤ a < 10、k を整数として a × 10^k の形で表す表記法（科学表記ともいう）。",

    // Numbers in standard form > equation > maths line
    "<i>a</i> × 10<sup><i>k</i></sup> where 1 ≤ <i>a</i> &lt; 10 and <i>k</i> ∈ ℤ": "<i>a</i> × 10<sup><i>k</i></sup> （ただし 1 ≤ <i>a</i> &lt; 10、<i>k</i> ∈ ℤ）",

    // Numbers in standard form > equation > dd
    "coefficient (mantissa), strictly at least 1 and less than 10 (for positive numbers)": "仮数（係数）。正の数の場合、1 以上 10 未満",

    // Numbers in standard form > equation > dd
    "integer exponent indicating the power of 10": "10 の累乗を表す整数の指数",

    // Numbers in standard form > p
    "On Paper 1 (no calculator), handle the coefficients <span class=\"chem\">a</span> and powers of 10 separately:": "電卓使用不可の Paper 1 では、係数 <span class=\"chem\">a</span> と 10 の累乗を分けて計算します：",

    // Numbers in standard form > li
    "<strong>Multiplication and division</strong>: Multiply or divide the coefficients, add or subtract the exponents (<span class=\"chem\">10^m × 10^n = 10^{m+n}</span>, <span class=\"chem\">10^m / 10^n = 10^{m-n}</span>), and adjust if the new coefficient falls outside <span class=\"chem\">[1, 10)</span>.": "<strong>乗法と除法</strong>：係数どうしを掛けたり割ったりし、指数どうしを足したり引いたりします（<span class=\"chem\">10^m × 10^n = 10^{m+n}</span>、<span class=\"chem\">10^m / 10^n = 10^{m-n}</span>）。新しい係数が <span class=\"chem\">[1, 10)</span> の範囲外になった場合は調整します。",

    // Numbers in standard form > li
    "<strong>Addition and subtraction</strong>: Rewrite both numbers with the <strong>same power of 10</strong> first, add or subtract the coefficients, then normalize back to <span class=\"chem\">1 &lt;= a &lt; 10</span>.": "<strong>加法と減法</strong>：まず両方の数を<strong>同じ 10 の累乗</strong>にそろえてから係数を足し引きし、最後に <span class=\"chem\">1 &lt;= a &lt; 10</span> の形に直します。",

    // Numbers in standard form > common mistake > p
    "Never leave a final answer as <span class=\"chem\">14.2 × 10^5</span> or <span class=\"chem\">0.65 × 10^{-3}</span> when a question asks for the form <span class=\"chem\">a × 10^k</span>. You will lose the final accuracy mark unless <span class=\"chem\">1 &lt;= a &lt; 10</span> (<span class=\"chem\">1.42 × 10^6</span> and <span class=\"chem\">6.5 × 10^{-4}</span>). Also never write calculator shorthand like <span class=\"mono\">6.5E-4</span> on an exam paper.": "<span class=\"chem\">a × 10^k</span> の形で答えるよう指示された問題では、最終解答を <span class=\"chem\">14.2 × 10^5</span> や <span class=\"chem\">0.65 × 10^{-3}</span> のままにしないでください。<span class=\"chem\">1 &lt;= a &lt; 10</span> を満たす形（<span class=\"chem\">1.42 × 10^6</span> や <span class=\"chem\">6.5 × 10^{-4}</span>）に直さないと正確点（A1）を失います。また、<span class=\"mono\">6.5E-4</span> のような電卓の省略表記を解答用紙に書かないでください。",

    // Arithmetic sequences, series and sigma notation > data-toc attribute
    "Arithmetic": "等差数列",

    // Arithmetic sequences, series and sigma notation > h2
    "Arithmetic sequences, series and sigma notation": "等差数列・等差級数とシグマ記号",

    // Arithmetic sequences, series and sigma notation > p
    "An <dfn data-def=\"A sequence in which the difference between any term and its preceding term is a constant d, called the common difference.\">arithmetic sequence</dfn> changes by adding a fixed step <span class=\"chem\">d</span>, called the <dfn data-def=\"The constant difference d = u_{n} - u_{n-1} between consecutive terms of an arithmetic sequence.\">common difference</dfn>, from one term to the next. Jumping from the first term <span class=\"chem\">u_1</span> to the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> takes <span class=\"chem\">(n - 1)</span> steps of size <span class=\"chem\">d</span>.": "<dfn data-def=\"隣り合う項の差が一定の定数 d（公差）である数列。\">等差数列 <span class=\"en-term\">(arithmetic sequence)</span></dfn> は、前の項に一定の値 <span class=\"chem\">d</span>（<dfn data-def=\"等差数列の連続する項の間の一定の差 d = u_{n} - u_{n-1}。\">公差 <span class=\"en-term\">(common difference)</span></dfn>）を足すことで変化する数列です。初項 <span class=\"chem\">u_1</span> から第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span> へ進むには、幅 <span class=\"chem\">d</span> のステップが <span class=\"chem\">(n - 1)</span> 回必要になります。",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "A sequence in which the difference between any term and its preceding term is a constant d, called the common difference.": "隣り合う項の差が一定の定数 d（公差）である数列。",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "The constant difference d = u_{n} - u_{n-1} between consecutive terms of an arithmetic sequence.": "等差数列の連続する項の間の一定の差 d = u_{n} - u_{n-1}。",

    // Arithmetic sequences, series and sigma notation > formula booklet note > p
    "<strong>Section 1.2 of your Formula Booklet</strong> gives both the <span class=\"chem\">n</span>-th term and the two equivalent sum formulas for an arithmetic sequence:": "<strong>公式集（Formula booklet）の Section 1.2</strong> には、等差数列の第 <span class=\"chem\">n</span> 項と、同値な 2 つの和の公式が掲載されています：",

    // Arithmetic sequences, series and sigma notation > equation > dd
    // Geometric sequences, finite series and sum to infinity > equation > dd
    "first term": "初項",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "common difference (<span class=\"chem\">d = u_2 - u_1 = u_{n} - u_{n-1}</span>)": "公差（<span class=\"chem\">d = u_2 - u_1 = u_{n} - u_{n-1}</span>）",

    // Arithmetic sequences, series and sigma notation > equation > dt
    "u<sub>n</sub>": "u<sub>n</sub>",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "<span class=\"chem\">n</span>-th term": "第 <span class=\"chem\">n</span> 項（一般項）",

    // Arithmetic sequences, series and sigma notation > equation > dt
    // Geometric sequences, finite series and sum to infinity > equation > dt
    "S<sub>n</sub>": "S<sub>n</sub>",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "sum of the first <span class=\"chem\">n</span> terms (<span class=\"chem\">u_1 + u_2 + ... + u_n</span>)": "初項から第 <span class=\"chem\">n</span> 項までの和（<span class=\"chem\">u_1 + u_2 + ... + u_n</span>）",

    // Arithmetic sequences, series and sigma notation > h3
    "Sigma notation <span class=\"chem\">Σ</span>": "シグマ記号 <span class=\"chem\">Σ</span>",

    // Arithmetic sequences, series and sigma notation > p
    "A <dfn data-def=\"The sum of the terms of a sequence: u_1 + u_2 + ... + u_n.\">series</dfn> is the sum of the terms of a sequence. We write series compactly using <dfn data-def=\"Summation notation Σ_{r=a}^{b} f(r), which means the sum of f(r) as the integer index r steps from a to b inclusive.\">sigma notation</dfn>:": "<dfn data-def=\"数列の各項を足し合わせた和：u_1 + u_2 + ... + u_n。\">級数 <span class=\"en-term\">(series)</span></dfn> とは数列の項の和のことです。級数は<dfn data-def=\"和の記号 Σ_{r=a}^{b} f(r)。整数の添字 r を a から b まで 1 ずつ増やしながら f(r) を足し合わせることを表す。\">シグマ記号 <span class=\"en-term\">(sigma notation)</span></dfn> を使って簡潔に表します：",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "The sum of the terms of a sequence: u_1 + u_2 + ... + u_n.": "数列の各項を足し合わせた和：u_1 + u_2 + ... + u_n。",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "Summation notation Σ_{r=a}^{b} f(r), which means the sum of f(r) as the integer index r steps from a to b inclusive.": "和の記号 Σ_{r=a}^{b} f(r)。整数の添字 r を a から b まで 1 ずつ増やしながら f(r) を足し合わせることを表す。",

    // Arithmetic sequences, series and sigma notation > equation > maths line
    "∑<sub><i>r</i> = <i>a</i></sub><sup><i>b</i></sup> <i>f</i>(<i>r</i>) = <i>f</i>(<i>a</i>) + <i>f</i>(<i>a</i> + 1) + … + <i>f</i>(<i>b</i>) (number of terms = <i>b</i> − <i>a</i> + 1)": "∑<sub><i>r</i> = <i>a</i></sub><sup><i>b</i></sup> <i>f</i>(<i>r</i>) = <i>f</i>(<i>a</i>) + <i>f</i>(<i>a</i> + 1) + … + <i>f</i>(<i>b</i>) （項数 = <i>b</i> − <i>a</i> + 1）",

    // Arithmetic sequences, series and sigma notation > p
    "Whenever <span class=\"chem\">f(r)</span> is a linear expression in <span class=\"chem\">r</span> (such as <span class=\"chem\">4r - 3</span>), the terms form an arithmetic series with common difference equal to the coefficient of <span class=\"chem\">r</span>.": "<span class=\"chem\">f(r)</span> が <span class=\"chem\">r</span> の 1 次式（<span class=\"chem\">4r - 3</span> など）であるとき、各項は <span class=\"chem\">r</span> の係数を公差とする等差級数になります。",

    // Arithmetic sequences, series and sigma notation > common mistake > p
    "<strong>Two classic sigma-notation traps:</strong><br> 1. In <span class=\"chem\">Σ_{r=4}^{15} u_r</span>, there are <span class=\"chem\">15 - 4 + 1 = 12</span> terms, <strong>not</strong> <span class=\"chem\">15 - 4 = 11</span>.<br> 2. The “first term” of that sum is evaluated at the lower limit <span class=\"chem\">r = 4</span>, not at <span class=\"chem\">r = 1</span>.": "<strong>シグマ記号でよくある 2 つの落とし穴：</strong><br> 1. <span class=\"chem\">Σ_{r=4}^{15} u_r</span> の項数は <span class=\"chem\">15 - 4 + 1 = 12</span> 項であり、<span class=\"chem\">15 - 4 = 11</span> 項では<strong>ありません</strong>。<br> 2. この和の「初項」は下端 <span class=\"chem\">r = 4</span> を代入した値であり、<span class=\"chem\">r = 1</span> ではありません。",

    // Arithmetic sequences, series and sigma notation > worked example > h3
    "Finding an arithmetic series sum from two given terms": "与えられた 2 つの項から等差級数の和を求める",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "In an arithmetic sequence, the third term is <span class=\"chem\">u_3 = 22</span> and the eleventh term is <span class=\"chem\">u_{11} = -10</span>. Find the value of <span class=\"chem\">k</span> given that the sum of the first <span class=\"chem\">k</span> terms is <span class=\"chem\">S_k = 0</span> (where <span class=\"chem\">k &gt; 0</span>). <strong>[5 marks]</strong>": "ある等差数列において、第 3 項が <span class=\"chem\">u_3 = 22</span>、第 11 項が <span class=\"chem\">u_{11} = -10</span> である。初項から第 <span class=\"chem\">k</span> 項までの和が <span class=\"chem\">S_k = 0</span>（ただし <span class=\"chem\">k &gt; 0</span>）となるとき、<span class=\"chem\">k</span> の値を求めなさい (Find)。<strong>[5 marks]</strong>",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Set up equations for u₃ and u₁₁ to find d": "u₃ と u₁₁ の式を立てて公差 d を求める",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Jumping from term 3 to term 11 takes 8 steps of size d.": "第 3 項から第 11 項へ進むには、幅 d のステップが 8 回あります。",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Back-substitute d to find the first term u₁": "d を代入して初項 u₁ を求める",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Use u₃ = u₁ + 2d = 22 to find u₁.": "u₃ = u₁ + 2d = 22 を使って u₁ を求めます。",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Solve S_k = 0 for k > 0": "k > 0 に対して S_k = 0 を解く",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Substitute u₁ = 30 and d = −4 into the Formula Booklet arithmetic sum formula.": "公式集の等差級数の和の公式に u₁ = 30 と d = −4 を代入します。",

    // Arithmetic sequences, series and sigma notation > worked example > maths line
    "Since <i>k</i> &gt; 0, 60 − 4<i>k</i> + 4 = 0 ⇒ 4<i>k</i> = 64 ⇒ <b><i>k</i> = 16</b> <b>[A1]</b>": "<i>k</i> &gt; 0 より、60 − 4<i>k</i> + 4 = 0 ⇒ 4<i>k</i> = 64 ⇒ <b><i>k</i> = 16</b> <b>[A1]</b>",

    // Arithmetic sequences, series and sigma notation > try it > p
    "In an arithmetic sequence, the first term is <span class=\"chem\">u_1 = 45</span> and the sixth term is <span class=\"chem\">u_6 = 15</span>. Find the positive integer <span class=\"chem\">k</span> for which the sum of the first <span class=\"chem\">k</span> terms is <span class=\"chem\">S_k = 0</span>.": "ある等差数列において、初項が <span class=\"chem\">u_1 = 45</span>、第 6 項が <span class=\"chem\">u_6 = 15</span> である。初項から第 <span class=\"chem\">k</span> 項までの和が <span class=\"chem\">S_k = 0</span> となる正の整数 <span class=\"chem\">k</span> を求めなさい (Find)。",

    // Arithmetic sequences, series and sigma notation > try it > li
    "Use <span class=\"chem\">u_6 - u_1 = 5d</span> to find the common difference <span class=\"chem\">d = -6</span>.": "<span class=\"chem\">u_6 - u_1 = 5d</span> を使って公差 <span class=\"chem\">d = -6</span> を求めます。",

    // Arithmetic sequences, series and sigma notation > try it > li
    "Set <span class=\"chem\">S_k = (k/2)(2(45) + (k - 1)(-6)) = 0</span> and solve <span class=\"chem\">90 - 6k + 6 = 0</span>.": "<span class=\"chem\">S_k = (k/2)(2(45) + (k - 1)(-6)) = 0</span> とおき、<span class=\"chem\">90 - 6k + 6 = 0</span> を解きます。",

    // Arithmetic sequences, series and sigma notation > data-title attribute
    "Standard form & arithmetic series: quick check": "指数表記と等差級数：確認問題",

    // Geometric sequences, finite series and sum to infinity > data-toc attribute
    "Geometric & S∞": "等比数列と無限和 S∞",

    // Geometric sequences, finite series and sum to infinity > h2
    "Geometric sequences, finite series and sum to infinity": "等比数列・有限和と無限等比級数の和",

    // Geometric sequences, finite series and sum to infinity > p
    "In a <dfn data-def=\"A sequence in which each term divided by the previous term is a non-zero constant r, called the common ratio.\">geometric sequence</dfn>, each term is obtained by multiplying the previous term by a non-zero constant <span class=\"chem\">r</span>, called the <dfn data-def=\"The constant ratio r = u_{n} / u_{n-1} between consecutive terms of a geometric sequence.\">common ratio</dfn>. When <span class=\"chem\">r &lt; 0</span>, the terms alternate in sign (<span class=\"chem\">+ - + - ...</span>).": "<dfn data-def=\"各項を前の項で割った比が 0 でない一定の定数 r（公比）である数列。\">等比数列 <span class=\"en-term\">(geometric sequence)</span></dfn> では、前の項に 0 でない一定の定数 <span class=\"chem\">r</span>（<dfn data-def=\"等比数列の連続する項の間の一定の比 r = u_{n} / u_{n-1}。\">公比 <span class=\"en-term\">(common ratio)</span></dfn>）を掛けて次の項を作ります。<span class=\"chem\">r &lt; 0</span> のとき、項の符号は交互に変わります（<span class=\"chem\">+ - + - ...</span>）。",

    // Geometric sequences, finite series and sum to infinity > data-def attribute
    "A sequence in which each term divided by the previous term is a non-zero constant r, called the common ratio.": "各項を前の項で割った比が 0 でない一定の定数 r（公比）である数列。",

    // Geometric sequences, finite series and sum to infinity > data-def attribute
    "The constant ratio r = u_{n} / u_{n-1} between consecutive terms of a geometric sequence.": "等比数列の連続する項の間の一定の比 r = u_{n} / u_{n-1}。",

    // Geometric sequences, finite series and sum to infinity > formula booklet note > p
    "<strong>Sections 1.3 and 1.8 of your Formula Booklet</strong> provide the <span class=\"chem\">n</span>-th term, finite sum, and infinite sum formulas:": "<strong>公式集（Formula booklet）の Sections 1.3 と 1.8</strong> には、等比数列の第 <span class=\"chem\">n</span> 項、有限和、無限等比級数の和の公式が掲載されています：",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "common ratio (<span class=\"chem\">r = u_2 / u_1</span>)": "公比（<span class=\"chem\">r = u_2 / u_1</span>）",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "sum of the first <span class=\"chem\">n</span> terms": "初項から第 <span class=\"chem\">n</span> 項までの和",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "sum to infinity (exists if and only if <span class=\"chem\">-1 &lt; r &lt; 1</span>)": "無限等比級数の和（<span class=\"chem\">-1 &lt; r &lt; 1</span> のときに限り存在する）",

    // Geometric sequences, finite series and sum to infinity > key idea > p
    "<strong>Why does <span class=\"chem\">|r| &lt; 1</span> give a finite sum to infinity?</strong> In the finite sum formula <span class=\"chem\">S_n = u_1(1 - r^n)/(1 - r)</span>, if <span class=\"chem\">-1 &lt; r &lt; 1</span>, then raising <span class=\"chem\">r</span> to larger and larger powers shrinks <span class=\"chem\">r^n -&gt; 0</span> as <span class=\"chem\">n -&gt; infty</span>. The factor <span class=\"chem\">(1 - r^n)</span> approaches <span class=\"chem\">1</span>, leaving <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "<strong>なぜ <span class=\"chem\">|r| &lt; 1</span> のとき無限和が有限の値に収束するのでしょうか？</strong> 有限和の公式 <span class=\"chem\">S_n = u_1(1 - r^n)/(1 - r)</span> において、<span class=\"chem\">-1 &lt; r &lt; 1</span> ならば、<span class=\"chem\">r</span> を何乗もしていくと <span class=\"chem\">n -&gt; infty</span> に伴い <span class=\"chem\">r^n -&gt; 0</span> と小さくなります。その結果 <span class=\"chem\">(1 - r^n)</span> が <span class=\"chem\">1</span> に近づき、<span class=\"chem\">S_infty = u_1 / (1 - r)</span> が残ります。",

    // Geometric sequences, finite series and sum to infinity > widget > data-title attribute
    "Arithmetic vs geometric growth & infinite series convergence": "等差・等比の増加と無限級数の収束",

    // Geometric sequences, finite series and sum to infinity > widget > figcaption
    "Switch between geometric and arithmetic sequences, and drag the common ratio <i>r</i> across the interval (−1, 1). Notice how for |<i>r</i>| &lt; 1 the terms <i>u<sub>k</sub></i> decay toward 0 and the partial sums <i>S<sub>k</sub></i> level off at the dashed horizontal limit <i>S</i><sub>∞</sub>.": "等比数列と等差数列を切り替え、公比 <i>r</i> を区間 (−1, 1) で動かしてみましょう。|<i>r</i>| &lt; 1 のとき、各項 <i>u<sub>k</sub></i> が 0 に近づき、部分和 <i>S<sub>k</sub></i> が破線の水平線 <i>S</i><sub>∞</sub> に収束する様子が確認できます。",

    // Geometric sequences, finite series and sum to infinity > worked example > h3
    "Finding the first term and common ratio from two non-consecutive terms": "連続しない 2 つの項から初項と公比を求める",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "In a convergent geometric series with positive terms, the second term is 18 and the fourth term is 8. Find the sum to infinity <span class=\"chem\">S_infty</span>. <strong>[5 marks]</strong>": "すべての項が正である収束する等比級数において、第 2 項が 18、第 4 項が 8 である。無限等比級数の和 <span class=\"chem\">S_infty</span> を求めなさい (Find)。<strong>[5 marks]</strong>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Write both given terms using the n-th term formula": "第 n 項の公式を使って 2 つの項を表す",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Translating words into equations with u₁ and r gives a system we can divide to eliminate u₁.": "文章を u₁ と r の連立方程式で表すと、辺々を割ることで u₁ を消去できます。",

    // Geometric sequences, finite series and sum to infinity > worked example > maths line
    "<i>u</i><sub>2</sub> = <i>u</i><sub>1</sub><i>r</i> = 18 and <i>u</i><sub>4</sub> = <i>u</i><sub>1</sub><i>r</i><sup>3</sup> = 8 <b>[M1]</b>": "<i>u</i><sub>2</sub> = <i>u</i><sub>1</sub><i>r</i> = 18 かつ <i>u</i><sub>4</sub> = <i>u</i><sub>1</sub><i>r</i><sup>3</sup> = 8 <b>[M1]</b>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Divide u₄ by u₂ to solve for r": "u₄ を u₂ で割って r を求める",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Dividing cancels u₁ and leaves r². Since all terms are positive, reject the negative root.": "割り算により u₁ が約分され、r² が残ります。すべての項が正であるため、負の解は不適として除きます。",

    // Geometric sequences, finite series and sum to infinity > worked example > maths line
    "<i>r</i><sup>2</sup> = <span class=\"frac\"><span>8</span><span>18</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span> (since <i>r</i> &gt; 0, |<i>r</i>| &lt; 1) <b>[A1 R1]</b>": "<i>r</i><sup>2</sup> = <span class=\"frac\"><span>8</span><span>18</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span> （<i>r</i> &gt; 0、|<i>r</i>| &lt; 1 より） <b>[A1 R1]</b>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Back-substitute r to find u₁ and compute S∞": "r を代入して u₁ を求め、S∞ を計算する",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Now that we have both u₁ and r, substitute into the Formula Booklet sum to infinity formula.": "u₁ と r の両方がわかったので、公式集の無限等比級数の和の公式に代入します。",

    // Geometric sequences, finite series and sum to infinity > try it > p
    "A convergent geometric series has first term <span class=\"chem\">u_1 = 54</span> and third term <span class=\"chem\">u_3 = 24</span>, with all terms positive. Calculate <span class=\"chem\">S_infty</span>.": "すべての項が正である収束する等比級数において、初項が <span class=\"chem\">u_1 = 54</span>、第 3 項が <span class=\"chem\">u_3 = 24</span> である。<span class=\"chem\">S_infty</span> を計算しなさい (Calculate)。",

    // Geometric sequences, finite series and sum to infinity > try it > li
    "Use <span class=\"chem\">u_3 / u_1 = r^2</span> to find the positive common ratio <span class=\"chem\">r</span>.": "<span class=\"chem\">u_3 / u_1 = r^2</span> を使って正の公比 <span class=\"chem\">r</span> を求めます。",

    // Geometric sequences, finite series and sum to infinity > try it > li
    "You should get <span class=\"chem\">r = 2/3</span>. Now substitute <span class=\"chem\">u_1 = 54</span> and <span class=\"chem\">r = 2/3</span> into <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "<span class=\"chem\">r = 2/3</span> となるはずです。次に <span class=\"chem\">u_1 = 54</span> と <span class=\"chem\">r = 2/3</span> を <span class=\"chem\">S_infty = u_1 / (1 - r)</span> に代入します。",

    // Geometric sequences, finite series and sum to infinity > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> You do <strong>not</strong> need the Ratio Test, Root Test, Integral Test, Comparison Test, or Alternating Series Test from university calculus. In IB Math AA HL Topic 1, infinite series convergence is tested solely via geometric series (<span class=\"chem\">|r| &lt; 1</span>) (and later via Maclaurin power series in Topic 5.19).": "<strong>IB の範囲外：</strong> 大学の微分積分で学ぶダランベールの判定法（Ratio Test）、コーシーの冪根判定法（Root Test）、積分判定法、比較判定法、交代級数判定法は<strong>不要</strong>です。IB Math AA HL Topic 1 では、無限級数の収束は等比級数（<span class=\"chem\">|r| &lt; 1</span>）のみで判定します（後に Topic 5.19 でマクローリン級数も扱います）。",

    // Geometric sequences, finite series and sum to infinity > data-title attribute
    "Geometric sequences & infinite series: quick check": "等比数列と無限級数：確認問題",

    // Financial applications: compound interest and depreciation > data-toc attribute
    "Financial models": "金融モデル",

    // Financial applications: compound interest and depreciation > h2
    "Financial applications: compound interest and depreciation": "金融への応用：複利と減価償却",

    // Financial applications: compound interest and depreciation > p
    "When an investment earns <dfn data-def=\"Interest calculated on both the initial principal and the accumulated interest from previous periods.\">compound interest</dfn> at a nominal annual rate of <span class=\"chem\">r%</span> compounded <span class=\"chem\">k</span> times per year, each compounding period adds <span class=\"chem\">(r / k)%</span> interest. Over <span class=\"chem\">n</span> years there are <span class=\"chem\">k × n</span> compounding periods, forming a geometric sequence.": "名目年利率 <span class=\"chem\">r%</span>、年 <span class=\"chem\">k</span> 回複利の<dfn data-def=\"元本だけでなく、過去の期間に蓄積された利息に対しても計算される利息。\">複利 <span class=\"en-term\">(compound interest)</span></dfn> で運用すると、1 回の複利計算ごとに <span class=\"chem\">(r / k)%</span> の利息が加わります。<span class=\"chem\">n</span> 年間では <span class=\"chem\">k × n</span> 回の複利計算が行われ、等比数列をなします。",

    // Financial applications: compound interest and depreciation > data-def attribute
    "Interest calculated on both the initial principal and the accumulated interest from previous periods.": "元本だけでなく、過去の期間に蓄積された利息に対しても計算される利息。",

    // Financial applications: compound interest and depreciation > formula booklet note > p
    "<strong>Section 1.4 of your Formula Booklet</strong> gives the compound interest formula:": "<strong>公式集（Formula booklet）の Section 1.4</strong> には、複利の公式が掲載されています：",

    // Financial applications: compound interest and depreciation > equation > dt
    "FV": "FV",

    // Financial applications: compound interest and depreciation > equation > dd
    "future value after <span class=\"chem\">n</span> years": "<span class=\"chem\">n</span> 年後の将来価値",

    // Financial applications: compound interest and depreciation > equation > dt
    "PV": "PV",

    // Financial applications: compound interest and depreciation > equation > dd
    "present value (initial principal at <span class=\"chem\">t = 0</span>)": "現在価値（<span class=\"chem\">t = 0</span> における初期元本）",

    // Financial applications: compound interest and depreciation > equation > dd
    "nominal annual rate of interest": "名目年利率",

    // Financial applications: compound interest and depreciation > equation > dd
    "number of compounding periods per year (1 = annual, 2 = half-yearly, 4 = quarterly, 12 = monthly)": "1 年あたりの複利計算回数（1 = 年 1 回、2 = 半年ごと、4 = 四半期ごと、12 = 毎月）",

    // Financial applications: compound interest and depreciation > equation > dd
    "number of years": "年数",

    // Financial applications: compound interest and depreciation > p
    "For <strong>annual depreciation</strong> (an asset losing <span class=\"chem\">r%</span> of its value each year with <span class=\"chem\">k = 1</span>) or <strong>inflation</strong> adjustment, replace the plus sign with a minus sign: <span class=\"chem\">FV = PV × (1 - r / 100)^n</span>.": "<strong>年次減価償却</strong>（<span class=\"chem\">k = 1</span> で毎年 <span class=\"chem\">r%</span> ずつ価値が減少する場合）や<strong>インフレ</strong>調整では、プラス符号をマイナス符号に置き換えて <span class=\"chem\">FV = PV × (1 - r / 100)^n</span> とします。",

    // Financial applications: compound interest and depreciation > widget > data-title attribute
    "Compound interest & annual depreciation simulator": "複利・減価償却シミュレーター",

    // Financial applications: compound interest and depreciation > widget > figcaption
    "Adjust the present value <i>PV</i>, annual rate <i>r</i>% (positive for compound interest, negative for depreciation), and compounding frequency <i>k</i> to compare compounded growth against the annual baseline.": "現在価値 <i>PV</i>、年利率 <i>r</i>%（複利は正、減価償却は負）、複利計算回数 <i>k</i> を調整して、複利による増加と年 1 回複利の基準線を比較してみましょう。",

    // Financial applications: compound interest and depreciation > exam tip (shown in English + translation) > p
    "<strong>Showing working with the GDC Finance (TVM) Solver on Paper 2:</strong> Whenever you use your calculator’s Finance Solver (for compound interest, regular savings annuities, or loan amortization), <strong>write down the list of TVM inputs</strong> in your answer box (<span class=\"mono\">N = …, I% = …, PV = …, PMT = …, FV = …, P/Y = …, C/Y = …</span>). If you make a rounding slip, listing those inputs secures the method mark <strong>[M1]</strong>! Remember that cash outflows (money you invest or pay) and cash inflows (money you receive back) must have <strong>opposite signs</strong> (<span class=\"mono\">PV &lt; 0, FV &gt; 0</span>).": "<strong>Paper 2 で GDC の Finance (TVM) Solver を使うときの途中式の書き方：</strong> 複利計算、定期積立、ローンの返済などで電卓の Finance Solver を使うときは、必ず <strong>TVM への入力一覧を解答欄に書き出しましょう</strong>（<span class=\"mono\">N = …, I% = …, PV = …, PMT = …, FV = …, P/Y = …, C/Y = …</span>）。四捨五入のミスをしても、入力値を書いておけば方法点 <strong>[M1]</strong> を確保できます。また、支出（預け入れや支払い）と収入（受け取り）は<strong>逆の符号</strong>にする点に注意してください（<span class=\"mono\">PV &lt; 0, FV &gt; 0</span>）。",

    // Financial applications: compound interest and depreciation > not needed for IB > p
    "<strong>May 2028 syllabus note:</strong> Financial mathematics (SL 1.4) <strong>is examined in full in May 2028</strong> (it is only retiring in the 2029 syllabus revision). However, you do <strong>not</strong> need to memorize closed-form annuity or mortgage amortization formulas—use either the sum of a geometric series or your GDC Finance Solver on Paper 2.": "<strong>2028 年 5 月試験のシラバス注記：</strong> 金融数学（SL 1.4）は <strong>2028 年 5 月試験ではすべて出題範囲</strong>です（2029 年のシラバス改定でのみ削除されます）。ただし、年金や住宅ローンの閉じた一般式を暗記する必要は<strong>ありません</strong>。等比級数の和を使うか、Paper 2 では GDC の Finance Solver を使ってください。",

    // Financial applications: compound interest and depreciation > data-title attribute
    "Financial models & synthesis: exam practice": "金融モデルと総合：実践演習",

    // widget string (assets/js/widgets-t1-1.js)
    "Pattern type": "数列の種類",

    // widget string (assets/js/widgets-t1-1.js)
    "Geometric (constant ratio r)": "等比数列（公比 r）",

    // widget string (assets/js/widgets-t1-1.js)
    "Arithmetic (constant difference d)": "等差数列（公差 d）",

    // widget string (assets/js/widgets-t1-1.js)
    "First term u₁": "初項 u₁",

    // widget string (assets/js/widgets-t1-1.js)
    "Step parameter (r or d)": "公比 r または公差 d",

    // widget string (assets/js/widgets-t1-1.js)
    "Number of terms n": "項数 n",

    // widget string (assets/js/widgets-t1-1.js)
    "n-th term uₙ": "第 n 項 uₙ",

    // widget string (assets/js/widgets-t1-1.js)
    "Partial sum Sₙ": "部分和 Sₙ",

    // widget string (assets/js/widgets-t1-1.js)
    "Sum to infinity S∞": "無限和 S∞",

    // widget string (assets/js/widgets-t1-1.js)
    "Term u_k": "項 u_k",

    // widget string (assets/js/widgets-t1-1.js)
    "Partial sum S_k": "部分和 S_k",

    // widget string (assets/js/widgets-t1-1.js)
    "converges, |r| < 1": "収束（|r| < 1）",

    // widget string (assets/js/widgets-t1-1.js)
    "Limit S∞": "極限 S∞",

    // widget string (assets/js/widgets-t1-1.js)
    "Diverges (no finite limit)": "発散（有限の極限なし）",

    // widget string (assets/js/widgets-t1-1.js)
    "Terms u_k and cumulative partial sums S_k": "項 u_k と累積部分和 S_k",

    // widget string (assets/js/widgets-t1-1.js)
    "Term index k": "項の番号 k",

    // widget string (assets/js/widgets-t1-1.js)
    "Value": "値",

    // widget string (assets/js/widgets-t1-1.js)
    "Present value PV": "現在価値 PV",

    // widget string (assets/js/widgets-t1-1.js)
    "Annual rate r% (+ growth / − depreciation)": "年率 r%（+ 増加 / − 減価償却）",

    // widget string (assets/js/widgets-t1-1.js)
    "Compounding periods k / yr": "年間の複利計算回数 k",

    // widget string (assets/js/widgets-t1-1.js)
    "Annually (k = 1)": "年 1 回 (k = 1)",

    // widget string (assets/js/widgets-t1-1.js)
    "Half-yearly (k = 2)": "半年ごと (k = 2)",

    // widget string (assets/js/widgets-t1-1.js)
    "Quarterly (k = 4)": "四半期ごと (k = 4)",

    // widget string (assets/js/widgets-t1-1.js)
    "Monthly (k = 12)": "毎月 (k = 12)",

    // widget string (assets/js/widgets-t1-1.js)
    "Years n": "年数 n",

    // widget string (assets/js/widgets-t1-1.js)
    "FV (k = 1 annual)": "FV（k = 1 年 1 回）",

    // widget string (assets/js/widgets-t1-1.js)
    "FV (chosen k)": "FV（選択した k）",

    // widget string (assets/js/widgets-t1-1.js)
    "Extra from compounding k": "複利回数 k による増加分",

    // widget string (assets/js/widgets-t1-1.js)
    "Future value FV over time": "将来価値 FV の時間変化",

    // widget string (assets/js/widgets-t1-1.js)
    "Time t (years)": "時間 t（年）",

    // widget string (assets/js/widgets-t1-1.js)
    "Value (USD)": "価値（USD）",

    // widget string (assets/js/widgets-t1-1.js)
    "Selected compounding (k = {k})": "選択した複利（k = {k}）",

    // widget string (assets/js/widgets-t1-1.js)
    "Annual baseline (k = 1)": "年 1 回の基準線（k = 1）",

  }
});
