/* t1-1 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-1', {
  strings: {

    // page title (browser tab)
    "1.1 Sequences, series and financial models | Analysis Lab": "1.1 數列、級數與金融模型 | Analysis Lab",

    // Sequences, series and financial models > page header > p
    "Topic 1.1 · SL 1.1–1.4, 1.8": "課題 1.1 · SL 1.1–1.4, 1.8",

    // Sequences, series and financial models > page header > h1
    "Sequences, series and financial models": "數列、級數與金融模型",

    // Sequences, series and financial models > page header > span
    "How do we model patterns that grow by a fixed step versus a fixed percentage, and when does an infinite sum reach a finite limit?": "我們如何為固定差額增長與固定百分比增長的規律建立模型？無限項之和又在甚麼情況下會收斂到有限極限？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > p
    "Tick each skill when you can do it confidently without looking at your notes. Everything on this page is SL core, examined on both SL and HL papers.": "當你可以不看筆記便有信心完成以下各項技能時，請逐項剔選。本頁所有內容均為 SL 核心課程，會在 SL 及 HL 試卷中考核。",

    // What you need to be able to do > checklist > span
    "Perform operations with numbers in standard form <span class=\"chem\">a × 10^k</span> where <span class=\"chem\">1 &lt;= a &lt; 10</span> and <span class=\"chem\">k</span> is an integer.": "對以科學記數法 <span class=\"chem\">a × 10^k</span>（其中 <span class=\"chem\">1 &lt;= a &lt; 10</span> 且 <span class=\"chem\">k</span> 為整數）表示的數進行運算。",

    // What you need to be able to do > checklist > span
    "Find the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> and sum of the first <span class=\"chem\">n</span> terms <span class=\"chem\">S_n</span> of an arithmetic sequence.": "求等差數列的第 <span class=\"chem\">n</span> 項（通項）<span class=\"chem\">u_n</span> 及首 <span class=\"chem\">n</span> 項之和 <span class=\"chem\">S_n</span>。",

    // What you need to be able to do > checklist > span
    "Evaluate and interpret sigma notation <span class=\"chem\">Σ_{r=a}^b u_r</span>, counting <span class=\"chem\">b - a + 1</span> terms accurately.": "計算並解讀求和記號 <span class=\"chem\">Σ_{r=a}^b u_r</span>，並準確點算共 <span class=\"chem\">b - a + 1</span> 項。",

    // What you need to be able to do > checklist > span
    "Find the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> and finite sum <span class=\"chem\">S_n</span> of a geometric sequence, and solve threshold inequalities <span class=\"chem\">S_n &gt; K</span>.": "求等比數列的第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span> 及首 n 項之和 <span class=\"chem\">S_n</span>，並解門檻不等式 <span class=\"chem\">S_n &gt; K</span>。",

    // What you need to be able to do > checklist > span
    "Test for convergence (<span class=\"chem\">|r| &lt; 1</span>) and calculate the sum to infinity <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "檢驗收斂性（<span class=\"chem\">|r| &lt; 1</span>），並計算無限項之和 <span class=\"chem\">S_infty = u_1 / (1 - r)</span>。",

    // What you need to be able to do > checklist > span
    "Calculate compound interest, annual depreciation and the real (inflation-adjusted) value of an investment using the formula booklet and GDC Finance Solver.": "利用公式手冊及圖像顯示計算機 (GDC) 財務求解器（Finance Solver）計算複利息、每年折舊，以及投資的實質價值（已扣除通脹影響）。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：如何辨識應用的方法",

    // Question decoder: spotting which technique to use > p
    "Sequence and financial problems often hide the mathematical formula behind everyday wording. Use this table to translate exam phrases directly into equations.": "數列與金融應用題常把數學公式隱藏在日常用語背後。利用下表把試題字眼直接轉化為方程。",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Sequences, series and finance": "題型解碼 — 數列、級數與金融模型",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "“Increases by a fixed amount each year / month”": "「每年／每月增加一個固定數額」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Arithmetic sequence</strong> with constant difference <span class=\"chem\">d = u_2 - u_1</span>.": "<strong>等差數列</strong>，公差為常數 <span class=\"chem\">d = u_2 - u_1</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Substitute <span class=\"chem\">u_1</span> and <span class=\"chem\">d</span> into <span class=\"chem\">u_n = u_1 + (n - 1)d</span>.": "把 <span class=\"chem\">u_1</span> 和 <span class=\"chem\">d</span> 代入 <span class=\"chem\">u_n = u_1 + (n - 1)d</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Increases by <i>p</i>% each year” / “Loses <i>p</i>% of its value each year”": "「每年增加 <i>p</i>%」／「每年損失其價值的 <i>p</i>%」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Geometric sequence</strong> with <span class=\"chem\">r = 1 + p/100</span> (growth) or <span class=\"chem\">r = 1 - p/100</span> (decay).": "<strong>等比數列</strong>，其中公比 <span class=\"chem\">r = 1 + p/100</span>（增長）或 <span class=\"chem\">r = 1 - p/100</span>（衰減／折舊）。",

    // Question decoder: spotting which technique to use > table > td
    "Watch the timeline! Value after <span class=\"chem\">t</span> full years is <span class=\"chem\">PV × r^t</span> (which is <span class=\"chem\">u_{t+1}</span> if <span class=\"chem\">u_1</span> is at <span class=\"chem\">t = 0</span>).": "留意時間線！經過 <span class=\"chem\">t</span> 個完整年度後的價值為 <span class=\"chem\">PV × r^t</span>（若 <span class=\"chem\">u_1</span> 代表 <span class=\"chem\">t = 0</span>，則該值為 <span class=\"chem\">u_{t+1}</span>）。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the value in the <i>n</i>-th year” vs “Find the total over the first <i>n</i> years”": "「求第 <i>n</i> 年的數值」對比「求首 <i>n</i> 年的總和」",

    // Question decoder: spotting which technique to use > table > td
    "Single year/step <span class=\"chem\">-&gt;</span> term <span class=\"chem\">u_n</span>.<br>Cumulative total <span class=\"chem\">-&gt;</span> series sum <span class=\"chem\">S_n</span>.": "單一年度／步驟 <span class=\"chem\">-&gt;</span> 第 n 項 <span class=\"chem\">u_n</span>。<br>累積總和 <span class=\"chem\">-&gt;</span> 首 n 項之和 <span class=\"chem\">S_n</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Underline “in the <i>n</i>-th” (<span class=\"chem\">u_n</span>) vs “total / altogether / over <i>n</i>” (<span class=\"chem\">S_n</span>) before writing a formula.": "列寫公式前先畫出關鍵字：「第 <i>n</i> 個／年」（<span class=\"chem\">u_n</span>）還是「總共／合計／首 <i>n</i> 年內」（<span class=\"chem\">S_n</span>）。",

    // Question decoder: spotting which technique to use > table > th
    "“<i>a</i>, <i>b</i>, <i>c</i> are consecutive terms of an arithmetic / geometric sequence”": "「<i>a</i>, <i>b</i>, <i>c</i> 是等差／等比數列的連續三項」",

    // Question decoder: spotting which technique to use > table > td
    "Arithmetic: <span class=\"chem\">b - a = c - b &lt;=&gt; 2b = a + c</span>.<br>Geometric: <span class=\"chem\">b / a = c / b &lt;=&gt; b^2 = ac</span>.": "等差：<span class=\"chem\">b - a = c - b &lt;=&gt; 2b = a + c</span>。<br>等比：<span class=\"chem\">b / a = c / b &lt;=&gt; b^2 = ac</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Solve the resulting quadratic and check whether any root violates “distinct terms” or “convergent series”.": "解出所得的二次方程，並檢查是否有根違反「相異項」（distinct terms）或「收斂級數」（convergent series）的條件。",

    // Question decoder: spotting which technique to use > table > th
    "“Given that <span class=\"chem\">S_n = 3n^2 + 5n</span>, find <span class=\"chem\">u_n</span>”": "「已知 <span class=\"chem\">S_n = 3n^2 + 5n</span>，求 <span class=\"chem\">u_n</span>」",

    // Question decoder: spotting which technique to use > table > td
    "Recover terms from cumulative sums using <span class=\"chem\">u_1 = S_1</span> and <span class=\"chem\">u_n = S_n - S_{n-1}</span> for <span class=\"chem\">n &gt;= 2</span>.": "利用 <span class=\"chem\">u_1 = S_1</span> 及當 <span class=\"chem\">n &gt;= 2</span> 時 <span class=\"chem\">u_n = S_n - S_{n-1}</span>，從累積和還原通項。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1 shortcut</strong>: Find <span class=\"chem\">u_1 = S_1</span> and <span class=\"chem\">u_2 = S_2 - S_1</span>; if <span class=\"chem\">S_n</span> is a quadratic with zero constant term, <span class=\"chem\">d = u_2 - u_1</span>.": "<strong>Paper 1 捷徑</strong>：先求 <span class=\"chem\">u_1 = S_1</span> 和 <span class=\"chem\">u_2 = S_2 - S_1</span>；若 <span class=\"chem\">S_n</span> 是沒有常數項的二次式，則 <span class=\"chem\">d = u_2 - u_1</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“The infinite series converges” / “Find the sum to infinity”": "「無限級數收斂」／「求無限項之和」",

    // Question decoder: spotting which technique to use > table > td
    "Geometric series with <span class=\"chem\">|r| &lt; 1</span> (<span class=\"chem\">-1 &lt; r &lt; 1</span>) and <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "等比級數符合 <span class=\"chem\">|r| &lt; 1</span>（<span class=\"chem\">-1 &lt; r &lt; 1</span>），且 <span class=\"chem\">S_infty = u_1 / (1 - r)</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Use <span class=\"chem\">|r| &lt; 1</span> to reject extraneous roots of <span class=\"chem\">r</span>, then substitute into <span class=\"chem\">S_infty</span>.": "利用 <span class=\"chem\">|r| &lt; 1</span> 捨去不合題意的 <span class=\"chem\">r</span> 值，再代入 <span class=\"chem\">S_infty</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Find the least number of terms for which the sum exceeds <i>K</i>”": "「求使總和超過 <i>K</i> 所需的最少項數」",

    // Question decoder: spotting which technique to use > table > td
    "Inequality <span class=\"chem\">S_n &gt; K</span> where <span class=\"chem\">n</span> is a positive integer.": "列出不等式 <span class=\"chem\">S_n &gt; K</span>，其中 <span class=\"chem\">n</span> 為正整數。",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Isolate <span class=\"chem\">r^n</span> and take logs (flip inequality if <span class=\"chem\">0 &lt; r &lt; 1</span> since <span class=\"chem\">ln r &lt; 0</span>).<br><strong>P2</strong>: Use GDC table or graph intersection, then round <strong>up</strong> to the next integer.": "<strong>Paper 1</strong>：先分離 <span class=\"chem\">r^n</span> 再取對數（若 <span class=\"chem\">0 &lt; r &lt; 1</span>，因 <span class=\"chem\">ln r &lt; 0</span>，不等號須反轉）。<br><strong>Paper 2</strong>：利用 GDC 數值表或圖像求交點，再<strong>向上</strong>捨入至下一個整數。",

    // Numbers in standard form > data-toc attribute
    "Standard form": "科學記數法",

    // Numbers in standard form > h2
    "Numbers in standard form": "科學記數法表示數",

    // Numbers in standard form > p
    "In scientific and mathematical work, very large and very small numbers are written in <dfn data-def=\"Writing a number in the form a × 10^k where 1 ≤ a &lt; 10 and k is an integer (also called scientific notation).\">standard form</dfn> (scientific notation):": "在科學和數學運算中，極大或極小的數會以<dfn data-def=\"將數寫成 a × 10^k 的形式，其中 1 ≤ a &lt; 10 且 k 為整數（又稱科學記數法）。\">科學記數法 <span class=\"en-term\">(standard form / scientific notation)</span></dfn>表示：",

    // Numbers in standard form > data-def attribute
    "Writing a number in the form a × 10^k where 1 ≤ a < 10 and k is an integer (also called scientific notation).": "將數寫成 a × 10^k 的形式，其中 1 ≤ a < 10 且 k 為整數（又稱科學記數法）。",

    // Numbers in standard form > equation > maths line
    "<i>a</i> × 10<sup><i>k</i></sup> where 1 ≤ <i>a</i> &lt; 10 and <i>k</i> ∈ ℤ": "<i>a</i> × 10<sup><i>k</i></sup>，其中 1 ≤ <i>a</i> &lt; 10 且 <i>k</i> ∈ ℤ",

    // Numbers in standard form > equation > dd
    "coefficient (mantissa), at least 1 and strictly less than 10 (for positive numbers)": "係數（尾數），對於正數而言必須大於或等於 1 且嚴格小於 10",

    // Numbers in standard form > equation > dd
    "integer exponent indicating the power of 10": "表示 10 的冪的整數指數",

    // Numbers in standard form > p
    "On Paper 1 (no calculator), handle the coefficients <span class=\"chem\">a</span> and powers of 10 separately:": "在 Paper 1（不可使用計算機）中，把係數 <span class=\"chem\">a</span> 與 10 的冪分開處理：",

    // Numbers in standard form > li
    "<strong>Multiplication and division</strong>: Multiply or divide the coefficients, add or subtract the exponents (<span class=\"chem\">10^m × 10^n = 10^{m+n}</span>, <span class=\"chem\">10^m / 10^n = 10^{m-n}</span>), and adjust if the new coefficient falls outside <span class=\"chem\">[1, 10)</span>.": "<strong>乘法與除法</strong>：把係數相乘或相除，並把指數相加或相減（<span class=\"chem\">10^m × 10^n = 10^{m+n}</span>，<span class=\"chem\">10^m / 10^n = 10^{m-n}</span>）；若新係數不在 <span class=\"chem\">[1, 10)</span> 範圍內，再作調整。",

    // Numbers in standard form > li
    "<strong>Addition and subtraction</strong>: Rewrite both numbers with the <strong>same power of 10</strong> first, add or subtract the coefficients, then normalize back to <span class=\"chem\">1 &lt;= a &lt; 10</span>.": "<strong>加法與減法</strong>：先把兩個數改寫為<strong>相同的 10 的冪</strong>，再把係數相加或相減，最後調整回 <span class=\"chem\">1 &lt;= a &lt; 10</span>。",

    // Numbers in standard form > common mistake > p
    "Never leave a final answer as <span class=\"chem\">14.2 × 10^5</span> or <span class=\"chem\">0.65 × 10^{-3}</span> when a question asks for the form <span class=\"chem\">a × 10^k</span>. You will lose the final accuracy mark unless <span class=\"chem\">1 &lt;= a &lt; 10</span> (<span class=\"chem\">1.42 × 10^6</span> and <span class=\"chem\">6.5 × 10^{-4}</span>). Also never write calculator shorthand like <span class=\"mono\">6.5E-4</span> on an exam paper.": "當題目要求寫成 <span class=\"chem\">a × 10^k</span> 形式時，切勿把最終答案留作 <span class=\"chem\">14.2 × 10^5</span> 或 <span class=\"chem\">0.65 × 10^{-3}</span>。除非滿足 <span class=\"chem\">1 &lt;= a &lt; 10</span>（即 <span class=\"chem\">1.42 × 10^6</span> 和 <span class=\"chem\">6.5 × 10^{-4}</span>），否則會失去最後的準確分。此外，切勿在試卷上寫出計算機簡寫 <span class=\"mono\">6.5E-4</span>。",

    // Arithmetic sequences, series and sigma notation > data-toc attribute
    "Arithmetic": "等差數列與級數",

    // Arithmetic sequences, series and sigma notation > h2
    "Arithmetic sequences, series and sigma notation": "等差數列、等差級數與求和記號",

    // Arithmetic sequences, series and sigma notation > p
    "An <dfn data-def=\"A sequence in which the difference between any term and its preceding term is a constant d, called the common difference.\">arithmetic sequence</dfn> changes by adding a fixed step <span class=\"chem\">d</span>, called the <dfn data-def=\"The constant difference d = u_{n} - u_{n-1} between consecutive terms of an arithmetic sequence.\">common difference</dfn>, from one term to the next. Jumping from the first term <span class=\"chem\">u_1</span> to the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> takes <span class=\"chem\">(n - 1)</span> steps of size <span class=\"chem\">d</span>.": "<dfn data-def=\"任何一項減去其前一項的差均為常數 d（稱為公差）的數列。\">等差數列 <span class=\"en-term\">(arithmetic sequence)</span></dfn>中，每一項都是由前一項加上一個固定數值 <span class=\"chem\">d</span>（稱為<dfn data-def=\"等差數列相鄰兩項之間的常數差 d = u_{n} - u_{n-1}。\">公差 <span class=\"en-term\">(common difference)</span></dfn>）而得。由首項 <span class=\"chem\">u_1</span> 跳到第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span>，共需經過 <span class=\"chem\">(n - 1)</span> 個步長為 <span class=\"chem\">d</span> 的步驟。",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "A sequence in which the difference between any term and its preceding term is a constant d, called the common difference.": "任何一項減去其前一項的差均為常數 d（稱為公差）的數列。",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "The constant difference d = u_{n} - u_{n-1} between consecutive terms of an arithmetic sequence.": "等差數列相鄰兩項之間的常數差 d = u_{n} - u_{n-1}。",

    // Arithmetic sequences, series and sigma notation > formula booklet note > p
    "<strong>Section 1.2 of your Formula Booklet</strong> gives both the <span class=\"chem\">n</span>-th term and the two equivalent sum formulas for an arithmetic sequence:": "<strong>公式手冊第 1.2 節</strong>列出了等差數列的通項（第 <span class=\"chem\">n</span> 項）公式及兩條等價的首 n 項之和公式：",

    // Arithmetic sequences, series and sigma notation > equation > dd
    // Geometric sequences, finite series and sum to infinity > equation > dd
    "first term": "首項",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "common difference (<span class=\"chem\">d = u_2 - u_1 = u_{n} - u_{n-1}</span>)": "公差（<span class=\"chem\">d = u_2 - u_1 = u_{n} - u_{n-1}</span>）",

    // Arithmetic sequences, series and sigma notation > equation > dt
    "u<sub>n</sub>": "u<sub>n</sub>",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "<span class=\"chem\">n</span>-th term": "第 <span class=\"chem\">n</span> 項（通項）",

    // Arithmetic sequences, series and sigma notation > equation > dt
    // Geometric sequences, finite series and sum to infinity > equation > dt
    "S<sub>n</sub>": "S<sub>n</sub>",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "sum of the first <span class=\"chem\">n</span> terms (<span class=\"chem\">u_1 + u_2 + ... + u_n</span>)": "首 <span class=\"chem\">n</span> 項之和（<span class=\"chem\">u_1 + u_2 + ... + u_n</span>）",

    // Arithmetic sequences, series and sigma notation > h3
    "Sigma notation <span class=\"chem\">Σ</span>": "求和記號 <span class=\"chem\">Σ</span>",

    // Arithmetic sequences, series and sigma notation > p
    "A <dfn data-def=\"The sum of the terms of a sequence: u_1 + u_2 + ... + u_n.\">series</dfn> is the sum of the terms of a sequence. We write series compactly using <dfn data-def=\"Summation notation Σ_{r=a}^{b} f(r), which means the sum of f(r) as the integer index r steps from a to b inclusive.\">sigma notation</dfn>:": "<dfn data-def=\"數列各項之和：u_1 + u_2 + ... + u_n。\">級數 <span class=\"en-term\">(series)</span></dfn>是數列各項之和。我們可用<dfn data-def=\"求和記號 Σ_{r=a}^{b} f(r)，表示整數指標 r 由 a 逐一遞增至 b（包括兩端）時所有 f(r) 之和。\">求和記號 <span class=\"en-term\">(sigma notation)</span></dfn>簡潔地表示級數：",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "The sum of the terms of a sequence: u_1 + u_2 + ... + u_n.": "數列各項之和：u_1 + u_2 + ... + u_n。",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "Summation notation Σ_{r=a}^{b} f(r), which means the sum of f(r) as the integer index r steps from a to b inclusive.": "求和記號 Σ_{r=a}^{b} f(r)，表示整數指標 r 由 a 逐一遞增至 b（包括兩端）時所有 f(r) 之和。",

    // Arithmetic sequences, series and sigma notation > equation > maths line
    "∑<sub><i>r</i> = <i>a</i></sub><sup><i>b</i></sup> <i>f</i>(<i>r</i>) = <i>f</i>(<i>a</i>) + <i>f</i>(<i>a</i> + 1) + … + <i>f</i>(<i>b</i>) (number of terms = <i>b</i> − <i>a</i> + 1)": "∑<sub><i>r</i> = <i>a</i></sub><sup><i>b</i></sup> <i>f</i>(<i>r</i>) = <i>f</i>(<i>a</i>) + <i>f</i>(<i>a</i> + 1) + … + <i>f</i>(<i>b</i>) （項數 = <i>b</i> − <i>a</i> + 1）",

    // Arithmetic sequences, series and sigma notation > p
    "Whenever <span class=\"chem\">f(r)</span> is a linear expression in <span class=\"chem\">r</span> (such as <span class=\"chem\">4r - 3</span>), the terms form an arithmetic series with common difference equal to the coefficient of <span class=\"chem\">r</span>.": "每當 <span class=\"chem\">f(r)</span> 是關於 <span class=\"chem\">r</span> 的線性表式（例如 <span class=\"chem\">4r - 3</span>）時，各項便構成一個等差級數，其公差等於 <span class=\"chem\">r</span> 的係數。",

    // Arithmetic sequences, series and sigma notation > common mistake > p
    "<strong>Two classic sigma-notation traps:</strong><br> 1. In <span class=\"chem\">Σ_{r=4}^{15} u_r</span>, there are <span class=\"chem\">15 - 4 + 1 = 12</span> terms, <strong>not</strong> <span class=\"chem\">15 - 4 = 11</span>.<br> 2. The “first term” of that sum is evaluated at the lower limit <span class=\"chem\">r = 4</span>, not at <span class=\"chem\">r = 1</span>.": "<strong>兩個經典的求和記號陷阱：</strong><br> 1. 在 <span class=\"chem\">Σ_{r=4}^{15} u_r</span> 中，共有 <span class=\"chem\">15 - 4 + 1 = 12</span> 項，而<strong>不是</strong> <span class=\"chem\">15 - 4 = 11</span> 項。<br> 2. 該級數的「首項」是代入下限 <span class=\"chem\">r = 4</span> 計出的項，而不是 <span class=\"chem\">r = 1</span>。",

    // Arithmetic sequences, series and sigma notation > worked example > h3
    "Finding an arithmetic series sum from two given terms": "從已知兩項求等差級數之和",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "In an arithmetic sequence, the third term is <span class=\"chem\">u_3 = 22</span> and the eleventh term is <span class=\"chem\">u_{11} = -10</span>. Find the value of <span class=\"chem\">k</span> given that the sum of the first <span class=\"chem\">k</span> terms is <span class=\"chem\">S_k = 0</span> (where <span class=\"chem\">k &gt; 0</span>). <strong>[5 marks]</strong>": "在一個等差數列中，第三項為 <span class=\"chem\">u_3 = 22</span>，第十一項為 <span class=\"chem\">u_{11} = -10</span>。已知首 <span class=\"chem\">k</span> 項之和 <span class=\"chem\">S_k = 0</span>（其中 <span class=\"chem\">k &gt; 0</span>），求 (Find) <span class=\"chem\">k</span> 的值。<strong>[5 marks]</strong>",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Set up equations for u₃ and u₁₁ to find d": "為 u₃ 與 u₁₁ 建立方程以求 d",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Jumping from term 3 to term 11 takes 8 steps of size d.": "由第 3 項跳到第 11 項，共經過 8 個步長為 d 的步驟。",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Back-substitute d to find the first term u₁": "代回 d 以求首項 u₁",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Use u₃ = u₁ + 2d = 22 to find u₁.": "利用 u₃ = u₁ + 2d = 22 求 u₁。",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Solve S_k = 0 for k > 0": "解 S_k = 0（其中 k > 0）",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Substitute u₁ = 30 and d = −4 into the Formula Booklet arithmetic sum formula.": "把 u₁ = 30 和 d = −4 代入公式手冊的等差數列求和公式。",

    // Arithmetic sequences, series and sigma notation > worked example > maths line
    "Since <i>k</i> &gt; 0, 60 − 4<i>k</i> + 4 = 0 ⇒ 4<i>k</i> = 64 ⇒ <b><i>k</i> = 16</b> <b>[A1]</b>": "因為 <i>k</i> &gt; 0，所以 60 − 4<i>k</i> + 4 = 0 ⇒ 4<i>k</i> = 64 ⇒ <b><i>k</i> = 16</b> <b>[A1]</b>",

    // Arithmetic sequences, series and sigma notation > try it > p
    "In an arithmetic sequence, the first term is <span class=\"chem\">u_1 = 45</span> and the sixth term is <span class=\"chem\">u_6 = 15</span>. Find the positive integer <span class=\"chem\">k</span> for which the sum of the first <span class=\"chem\">k</span> terms is <span class=\"chem\">S_k = 0</span>.": "在一個等差數列中，首項為 <span class=\"chem\">u_1 = 45</span>，第六項為 <span class=\"chem\">u_6 = 15</span>。求 (Find) 使首 <span class=\"chem\">k</span> 項之和 <span class=\"chem\">S_k = 0</span> 的正整數 <span class=\"chem\">k</span>。",

    // Arithmetic sequences, series and sigma notation > try it > li
    "Use <span class=\"chem\">u_6 - u_1 = 5d</span> to find the common difference <span class=\"chem\">d = -6</span>.": "利用 <span class=\"chem\">u_6 - u_1 = 5d</span> 求得公差 <span class=\"chem\">d = -6</span>。",

    // Arithmetic sequences, series and sigma notation > try it > li
    "Set <span class=\"chem\">S_k = (k/2)(2(45) + (k - 1)(-6)) = 0</span> and solve <span class=\"chem\">90 - 6k + 6 = 0</span>.": "設 <span class=\"chem\">S_k = (k/2)(2(45) + (k - 1)(-6)) = 0</span>，並解 <span class=\"chem\">90 - 6k + 6 = 0</span>。",

    // Arithmetic sequences, series and sigma notation > data-title attribute
    "Standard form & arithmetic series: quick check": "科學記數法與等差級數：小測",

    // Geometric sequences, finite series and sum to infinity > data-toc attribute
    "Geometric & S∞": "等比數列與 S∞",

    // Geometric sequences, finite series and sum to infinity > h2
    "Geometric sequences, finite series and sum to infinity": "等比數列、有限項之和與無限項之和",

    // Geometric sequences, finite series and sum to infinity > p
    "In a <dfn data-def=\"A sequence in which each term divided by the previous term is a non-zero constant r, called the common ratio.\">geometric sequence</dfn>, each term is obtained by multiplying the previous term by a non-zero constant <span class=\"chem\">r</span>, called the <dfn data-def=\"The constant ratio r = u_{n} / u_{n-1} between consecutive terms of a geometric sequence.\">common ratio</dfn>. When <span class=\"chem\">r &lt; 0</span>, the terms alternate in sign (<span class=\"chem\">+ - + - ...</span>).": "在<dfn data-def=\"每一項除以其前一項皆為非零常數 r（稱為公比）的數列。\">等比數列 <span class=\"en-term\">(geometric sequence)</span></dfn>中，每一項都是由前一項乘以一個非零常數 <span class=\"chem\">r</span>（稱為<dfn data-def=\"等比數列相鄰兩項之間的常數比 r = u_{n} / u_{n-1}。\">公比 <span class=\"en-term\">(common ratio)</span></dfn>）而得。當 <span class=\"chem\">r &lt; 0</span> 時，數列各項的正負號會交替出現（<span class=\"chem\">+ - + - ...</span>）。",

    // Geometric sequences, finite series and sum to infinity > data-def attribute
    "A sequence in which each term divided by the previous term is a non-zero constant r, called the common ratio.": "每一項除以其前一項皆為非零常數 r（稱為公比）的數列。",

    // Geometric sequences, finite series and sum to infinity > data-def attribute
    "The constant ratio r = u_{n} / u_{n-1} between consecutive terms of a geometric sequence.": "等比數列相鄰兩項之間的常數比 r = u_{n} / u_{n-1}。",

    // Geometric sequences, finite series and sum to infinity > formula booklet note > p
    "<strong>Sections 1.3 and 1.8 of your Formula Booklet</strong> provide the <span class=\"chem\">n</span>-th term, finite sum, and infinite sum formulas:": "<strong>公式手冊第 1.3 及 1.8 節</strong>提供了等比數列的通項、首 <span class=\"chem\">n</span> 項之和及無限項之和公式：",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "common ratio (<span class=\"chem\">r = u_2 / u_1</span>)": "公比（<span class=\"chem\">r = u_2 / u_1</span>）",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "sum of the first <span class=\"chem\">n</span> terms": "首 <span class=\"chem\">n</span> 項之和",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "sum to infinity (exists if and only if <span class=\"chem\">-1 &lt; r &lt; 1</span>)": "無限項之和（當且僅當 <span class=\"chem\">-1 &lt; r &lt; 1</span> 時存在）",

    // Geometric sequences, finite series and sum to infinity > key idea > p
    "<strong>Why does <span class=\"chem\">|r| &lt; 1</span> give a finite sum to infinity?</strong> In the finite sum formula <span class=\"chem\">S_n = u_1(1 - r^n)/(1 - r)</span>, if <span class=\"chem\">-1 &lt; r &lt; 1</span>, then raising <span class=\"chem\">r</span> to larger and larger powers shrinks <span class=\"chem\">r^n -&gt; 0</span> as <span class=\"chem\">n -&gt; infty</span>. The factor <span class=\"chem\">(1 - r^n)</span> approaches <span class=\"chem\">1</span>, leaving <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "<strong>為甚麼 <span class=\"chem\">|r| &lt; 1</span> 時會有有限的無限項之和？</strong>在有限項求和公式 <span class=\"chem\">S_n = u_1(1 - r^n)/(1 - r)</span> 中，若 <span class=\"chem\">-1 &lt; r &lt; 1</span>，把 <span class=\"chem\">r</span> 取越來越高次方會使 <span class=\"chem\">r^n -&gt; 0</span>（隨 <span class=\"chem\">n -&gt; infty</span>）。因子 <span class=\"chem\">(1 - r^n)</span> 趨向 <span class=\"chem\">1</span>，因此剩下 <span class=\"chem\">S_infty = u_1 / (1 - r)</span>。",

    // Geometric sequences, finite series and sum to infinity > widget > data-title attribute
    "Arithmetic vs geometric growth & infinite series convergence": "等差與等比增長及無限級數的收斂性",

    // Geometric sequences, finite series and sum to infinity > widget > figcaption
    "Switch between geometric and arithmetic sequences, and drag the common ratio <i>r</i> across the interval (−1, 1). Notice how for |<i>r</i>| &lt; 1 the terms <i>u<sub>k</sub></i> decay toward 0 and the partial sums <i>S<sub>k</sub></i> level off at the dashed horizontal limit <i>S</i><sub>∞</sub>.": "切換等比數列與等差數列，並拖動公比 <i>r</i> 橫跨區間 (−1, 1)。留意當 |<i>r</i>| &lt; 1 時，各項 <i>u<sub>k</sub></i> 會衰減至 0，而部分和 <i>S<sub>k</sub></i> 會趨於虛線所示的水平極限 <i>S</i><sub>∞</sub>。",

    // Geometric sequences, finite series and sum to infinity > worked example > h3
    "Finding the first term and common ratio from two non-consecutive terms": "從兩個不相鄰的項求首項與公比",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "In a convergent geometric series with positive terms, the second term is 18 and the fourth term is 8. Find the sum to infinity <span class=\"chem\">S_infty</span>. <strong>[5 marks]</strong>": "在一個各項均為正數的收斂等比級數中，第二項為 18，第四項為 8。求 (Find) 其無限項之和 <span class=\"chem\">S_infty</span>。<strong>[5 marks]</strong>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Write both given terms using the n-th term formula": "利用通項公式寫出已知兩項",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Translating words into equations with u₁ and r gives a system we can divide to eliminate u₁.": "把文字轉化為含 u₁ 與 r 的方程組，透過相除即可消去 u₁。",

    // Geometric sequences, finite series and sum to infinity > worked example > maths line
    "<i>u</i><sub>2</sub> = <i>u</i><sub>1</sub><i>r</i> = 18 and <i>u</i><sub>4</sub> = <i>u</i><sub>1</sub><i>r</i><sup>3</sup> = 8 <b>[M1]</b>": "<i>u</i><sub>2</sub> = <i>u</i><sub>1</sub><i>r</i> = 18 且 <i>u</i><sub>4</sub> = <i>u</i><sub>1</sub><i>r</i><sup>3</sup> = 8 <b>[M1]</b>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Divide u₄ by u₂ to solve for r": "把 u₄ 除以 u₂ 以求 r",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Dividing cancels u₁ and leaves r². Since all terms are positive, reject the negative root.": "相除會消去 u₁ 並剩下 r²。由於所有項皆為正數，捨去負根。",

    // Geometric sequences, finite series and sum to infinity > worked example > maths line
    "<i>r</i><sup>2</sup> = <span class=\"frac\"><span>8</span><span>18</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span> (since <i>r</i> &gt; 0, |<i>r</i>| &lt; 1) <b>[A1 R1]</b>": "<i>r</i><sup>2</sup> = <span class=\"frac\"><span>8</span><span>18</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span>（因為 <i>r</i> &gt; 0，|<i>r</i>| &lt; 1）<b>[A1 R1]</b>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Back-substitute r to find u₁ and compute S∞": "代回 r 以求 u₁ 並計算 S∞",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Now that we have both u₁ and r, substitute into the Formula Booklet sum to infinity formula.": "求得 u₁ 與 r 後，代入公式手冊的無限項之和公式。",

    // Geometric sequences, finite series and sum to infinity > try it > p
    "A convergent geometric series has first term <span class=\"chem\">u_1 = 54</span> and third term <span class=\"chem\">u_3 = 24</span>, with all terms positive. Calculate <span class=\"chem\">S_infty</span>.": "一個收斂等比級數的首項為 <span class=\"chem\">u_1 = 54</span>，第三項為 <span class=\"chem\">u_3 = 24</span>，且所有項皆為正數。計算 (Calculate) <span class=\"chem\">S_infty</span>。",

    // Geometric sequences, finite series and sum to infinity > try it > li
    "Use <span class=\"chem\">u_3 / u_1 = r^2</span> to find the positive common ratio <span class=\"chem\">r</span>.": "利用 <span class=\"chem\">u_3 / u_1 = r^2</span> 求正公比 <span class=\"chem\">r</span>。",

    // Geometric sequences, finite series and sum to infinity > try it > li
    "You should get <span class=\"chem\">r = 2/3</span>. Now substitute <span class=\"chem\">u_1 = 54</span> and <span class=\"chem\">r = 2/3</span> into <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "你應得出 <span class=\"chem\">r = 2/3</span>。現在把 <span class=\"chem\">u_1 = 54</span> 和 <span class=\"chem\">r = 2/3</span> 代入 <span class=\"chem\">S_infty = u_1 / (1 - r)</span>。",

    // Geometric sequences, finite series and sum to infinity > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> You do <strong>not</strong> need the Ratio Test, Root Test, Integral Test, Comparison Test, or Alternating Series Test from university calculus. In IB Math AA HL Topic 1, infinite series convergence is tested solely via geometric series (<span class=\"chem\">|r| &lt; 1</span>) (and later via Maclaurin power series in AHL 5.19, on <a href=\"t5-4.html\">site page 5.4</a>).": "<strong>IB 不要求的內容：</strong>你<strong>不需要</strong>學習大學微積分中的比值檢驗法（Ratio Test）、根值檢驗法（Root Test）、積分檢驗法（Integral Test）、比較檢驗法（Comparison Test）或交錯級數檢驗法（Alternating Series Test）。在 IB Math AA HL 課題 1 中，無限級數的收斂性只透過等比級數（<span class=\"chem\">|r| &lt; 1</span>）考核（之後會在AHL 5.19（<a href=\"t5-4.html\">本網站第 5.4 頁</a>） 透過麥克勞林級數考核）。",

    // Geometric sequences, finite series and sum to infinity > data-title attribute
    "Geometric sequences & infinite series: quick check": "等比數列與無限級數：小測",

    // Financial applications: compound interest and depreciation > data-toc attribute
    "Financial models": "金融模型",

    // Financial applications: compound interest and depreciation > h2
    "Financial applications: compound interest and depreciation": "金融應用：複利息與折舊",

    // Financial applications: compound interest and depreciation > p
    "When an investment earns <dfn data-def=\"Interest calculated on both the initial principal and the accumulated interest from previous periods.\">compound interest</dfn> at a nominal annual rate of <span class=\"chem\">r%</span> compounded <span class=\"chem\">k</span> times per year, each compounding period adds <span class=\"chem\">(r / k)%</span> interest. Over <span class=\"chem\">n</span> years there are <span class=\"chem\">k × n</span> compounding periods, forming a geometric sequence.": "當一項投資以名義年利率 <span class=\"chem\">r%</span> 賺取<dfn data-def=\"同時根據本金及過往各期累積利息所計算的利息。\">複利息 <span class=\"en-term\">(compound interest)</span></dfn>，並每年計算複利 <span class=\"chem\">k</span> 次時，每個計算複利期會增加 <span class=\"chem\">(r / k)%</span> 的利息。經過 <span class=\"chem\">n</span> 年共有 <span class=\"chem\">k × n</span> 個計算複利期，形成一個等比數列。",

    // Financial applications: compound interest and depreciation > data-def attribute
    "Interest calculated on both the initial principal and the accumulated interest from previous periods.": "同時根據本金及過往各期累積利息所計算的利息。",

    // Financial applications: compound interest and depreciation > formula booklet note > p
    "<strong>Section 1.4 of your Formula Booklet</strong> gives the compound interest formula:": "<strong>公式手冊第 1.4 節</strong>列出了複利息公式：",

    // Financial applications: compound interest and depreciation > equation > dt
    "FV": "FV",

    // Financial applications: compound interest and depreciation > equation > dd
    "future value after <span class=\"chem\">n</span> years": "<span class=\"chem\">n</span> 年後的未來值（本利和）",

    // Financial applications: compound interest and depreciation > equation > dt
    "PV": "PV",

    // Financial applications: compound interest and depreciation > equation > dd
    "present value (initial principal at <span class=\"chem\">t = 0</span>)": "現值（<span class=\"chem\">t = 0</span> 時的初始本金）",

    // Financial applications: compound interest and depreciation > equation > dd
    "nominal annual rate of interest": "名義年利率",

    // Financial applications: compound interest and depreciation > equation > dd
    "number of compounding periods per year (1 = annual, 2 = half-yearly, 4 = quarterly, 12 = monthly)": "每年的計算複利期數（1 = 每年、2 = 每半年、4 = 每季、12 = 每月）",

    // Financial applications: compound interest and depreciation > equation > dd
    "number of years": "年數",

    // Financial applications: compound interest and depreciation > p
    "For <strong>annual depreciation</strong> (an asset losing <span class=\"chem\">r%</span> of its value each year with <span class=\"chem\">k = 1</span>), replace the plus sign with a minus sign: <span class=\"chem\">FV = PV × (1 - r / 100)^n</span>. For <strong>inflation</strong>, prices grow by the factor <span class=\"chem\">(1 + i / 100)^n</span>; to find the <strong>real value</strong> of an investment, use the interest rate minus the inflation rate, <span class=\"chem\">(r - i)%</span>, as the rate in the formula or the Finance Solver.": "對於<strong>每年折舊</strong>（資產每年損失其價值的 <span class=\"chem\">r%</span>，且 <span class=\"chem\">k = 1</span>），把加號改為減號：<span class=\"chem\">FV = PV × (1 - r / 100)^n</span>。至於<strong>通脹</strong>，物價會按因子 <span class=\"chem\">(1 + i / 100)^n</span> 上升；要求投資的<strong>實質價值</strong>，就以利率減通脹率，即 <span class=\"chem\">(r - i)%</span>，作為公式或 Finance Solver 中的利率。",

    // Financial applications: compound interest and depreciation > widget > data-title attribute
    "Compound interest & annual depreciation simulator": "複利息與每年折舊模擬器",

    // Financial applications: compound interest and depreciation > widget > figcaption
    "Adjust the present value <i>PV</i>, annual rate <i>r</i>% (positive for compound interest, negative for depreciation), and compounding frequency <i>k</i> to compare compounded growth against the annual baseline.": "調校現值 <i>PV</i>、年利率 <i>r</i>%（正數代表複利息，負數代表折舊）及每年計算複利次數 <i>k</i>，以比較不同複利期下的增長與每年複利基準線的差異。",

    // Financial applications: compound interest and depreciation > exam tip (shown in English + translation) > p
    "<strong>Showing working with the GDC Finance (TVM) Solver on Paper 2:</strong> Whenever you use your calculator’s Finance Solver (for compound interest, depreciation or real-value problems), <strong>write down the list of TVM inputs</strong> in your answer box (<span class=\"mono\">N = …, I% = …, PV = …, PMT = …, FV = …, P/Y = …, C/Y = …</span>). If you make a rounding slip, listing those inputs secures the method mark <strong>[M1]</strong>! Remember that cash outflows (money you invest or pay) and cash inflows (money you receive back) must have <strong>opposite signs</strong> (<span class=\"mono\">PV &lt; 0, FV &gt; 0</span>).": "<strong>在 Paper 2 使用 GDC 財務 (TVM) 求解器時展示步驟：</strong>每當使用計算機的 Finance Solver（計算複利息、折舊或實質價值問題）時，務必在答題欄<strong>寫出所有 TVM 輸入值</strong>（<span class=\"mono\">N = …, I% = …, PV = …, PMT = …, FV = …, P/Y = …, C/Y = …</span>）。即使計算時出現捨入誤差，列出這些輸入值仍可取得方法分 <strong>[M1]</strong>！緊記現金流出（你投資或支付的款項）與現金流入（你收回的款項）必須使用<strong>相反的正負號</strong>（<span class=\"mono\">PV &lt; 0, FV &gt; 0</span>）。",

    // Financial applications: compound interest and depreciation > not needed for IB > p
    "<strong>May 2028 syllabus note:</strong> Financial applications (SL 1.4) <strong>are examinable in May 2028</strong>; the 2029 course may change, but that does not affect your exam. In Math AA, SL 1.4 covers compound interest, annual depreciation and real value with inflation, solved with the formula or the Finance Solver. A regular-deposit problem can still appear, but only as an application of the sum of a geometric series (SL 1.3).": "<strong>2028 年 5 月課程備註：</strong>金融應用（SL 1.4）<strong>屬 2028 年 5 月的考核範圍</strong>；2029 年的新課程或會改動，但不影響你的考試。在 Math AA 中，SL 1.4 包括複利息、每年折舊及計入通脹的實質價值，可用公式或 Finance Solver 求解。定期存款題目仍可能出現，但只會作為等比級數求和（SL 1.3）的應用。",
    "<strong>What is NOT needed for IB:</strong> Annuity and loan amortization formulas (and loan-repayment problems on the Finance Solver) are Math AI topics, not Math AA.": "<strong>IB 不要求的內容：</strong>年金及貸款攤還公式（以及用 Finance Solver 解的貸款還款題）屬 Math AI 的課題，不屬 Math AA。",

    // Financial applications: compound interest and depreciation > data-title attribute
    "Financial models & synthesis: exam practice": "金融模型與綜合應用：考試練習",

    // Geometric sequences, finite series and sum to infinity > p
    "<strong>Before you start:</strong> to solve for <span class=\"chem\">n</span> in a geometric or financial question on Paper 1, you take logarithms of both sides. You need the laws of logarithms from <a href=\"t1-2.html\">1.2 Exponents, logarithms and the binomial theorem</a>.": "<strong>開始之前：</strong>在 Paper 1 的等比數列或金融題目中求 <span class=\"chem\">n</span> 時，要對兩邊取對數。你需要 <a href=\"t1-2.html\">1.2 指數、對數與二項式定理</a> 中的對數定律。",

    // Exam-style practice > data-toc attribute
    // Exam-style practice > h2
    "Exam-style practice": "考試題型練習",

    // Exam-style practice > p
    "Three sets of original questions on standard form, arithmetic and geometric series, sums to infinity and financial models. Each set draws 10 questions at a time; reload it for a new selection. Questions tagged Paper 2 need your GDC.": "三組原創題目，涵蓋科學記數法、等差與等比級數、無窮級數和以及金融模型。每組每次抽出 10 題；重新載入即可換一組題目。標示為 Paper 2 的題目需要使用 GDC。",

    // Exam-style practice > h3
    "Foundation: the core formulas": "基礎：核心公式",

    // Exam-style practice > data-title attribute
    "1.1 foundation": "1.1 基礎練習",

    // Exam-style practice > h3
    "Exam standard: Paper 1 and Paper 2": "考試標準：Paper 1 與 Paper 2",

    // Exam-style practice > data-title attribute
    "1.1 exam standard": "1.1 考試標準",

    // Exam-style practice > h3
    "Challenge: decoding wordy and unfamiliar questions": "挑戰：解讀冗長或陌生的題目",

    // Exam-style practice > data-title attribute
    "1.1 challenge": "1.1 挑戰題",

    // widget string (assets/js/widgets-t1-1.js)
    "Pattern type": "規律類型",

    // widget string (assets/js/widgets-t1-1.js)
    "Geometric (constant ratio r)": "等比（常數公比 r）",

    // widget string (assets/js/widgets-t1-1.js)
    "Arithmetic (constant difference d)": "等差（常數公差 d）",

    // widget string (assets/js/widgets-t1-1.js)
    "First term u₁": "首項 u₁",

    // widget string (assets/js/widgets-t1-1.js)
    "Step parameter (r or d)": "步長參數（r 或 d）",

    // widget string (assets/js/widgets-t1-1.js)
    "Number of terms n": "項數 n",

    // widget string (assets/js/widgets-t1-1.js)
    "n-th term uₙ": "第 n 項 uₙ",

    // widget string (assets/js/widgets-t1-1.js)
    "Partial sum Sₙ": "首 n 項之和 Sₙ",

    // widget string (assets/js/widgets-t1-1.js)
    "Sum to infinity S∞": "無限項之和 S∞",

    // widget string (assets/js/widgets-t1-1.js)
    "Term u_k": "第 k 項 u_k",

    // widget string (assets/js/widgets-t1-1.js)
    "Partial sum S_k": "部分和 S_k",

    // widget string (assets/js/widgets-t1-1.js)
    "converges, |r| < 1": "收斂，|r| < 1",

    // widget string (assets/js/widgets-t1-1.js)
    "Limit S∞": "極限 S∞",

    // widget string (assets/js/widgets-t1-1.js)
    "Diverges (no finite limit)": "發散（沒有有限極限）",

    // widget string (assets/js/widgets-t1-1.js)
    "Terms u_k and cumulative partial sums S_k": "各項 u_k 與累積部分和 S_k",

    // widget string (assets/js/widgets-t1-1.js)
    "Term index k": "項數指標 k",

    // widget string (assets/js/widgets-t1-1.js)
    "Value": "數值",

    // widget string (assets/js/widgets-t1-1.js)
    "Present value PV": "現值 PV",

    // widget string (assets/js/widgets-t1-1.js)
    "Annual rate r% (+ growth / − depreciation)": "年利率 r%（+ 增長 / − 折舊）",

    // widget string (assets/js/widgets-t1-1.js)
    "Compounding periods k / yr": "每年計算複利次數 k",

    // widget string (assets/js/widgets-t1-1.js)
    "Annually (k = 1)": "每年 (k = 1)",

    // widget string (assets/js/widgets-t1-1.js)
    "Half-yearly (k = 2)": "每半年 (k = 2)",

    // widget string (assets/js/widgets-t1-1.js)
    "Quarterly (k = 4)": "每季 (k = 4)",

    // widget string (assets/js/widgets-t1-1.js)
    "Monthly (k = 12)": "每月 (k = 12)",

    // widget string (assets/js/widgets-t1-1.js)
    "Years n": "年數 n",

    // widget string (assets/js/widgets-t1-1.js)
    "FV (k = 1 annual)": "FV（k = 1 每年）",

    // widget string (assets/js/widgets-t1-1.js)
    "FV (chosen k)": "FV（所選 k）",

    // widget string (assets/js/widgets-t1-1.js)
    "Extra from compounding k": "因較頻密計算複利 k 而額外獲得",

    // widget string (assets/js/widgets-t1-1.js)
    "Future value FV over time": "隨時間變化的未來值 FV",

    // widget string (assets/js/widgets-t1-1.js)
    "Time t (years)": "時間 t（年）",

    // widget string (assets/js/widgets-t1-1.js)
    "Value (USD)": "金額 (USD)",

    // widget string (assets/js/widgets-t1-1.js)
    "Selected compounding (k = {k})": "所選複利期數 (k = {k})",

    // widget string (assets/js/widgets-t1-1.js)
    "Annual baseline (k = 1)": "每年複利基準線 (k = 1)"

  }
});
