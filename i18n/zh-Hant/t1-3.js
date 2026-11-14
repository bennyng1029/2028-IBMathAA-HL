/* t1-3 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-3', {
  strings: {

    // page title (browser tab)
    "1.3 Counting, partial fractions and extended binomials | Analysis Lab": "1.3 計數原理、部分分式與廣義二項式定理 | Analysis Lab",

    // Counting, partial fractions and extended binomials > page header > p
    "Topic 1.3 · AHL 1.10–1.11": "課題 1.3 · AHL 1.10–1.11",

    // Counting, partial fractions and extended binomials > page header > h1
    "Counting, partial fractions and extended binomials": "計數原理、部分分式與廣義二項式定理",

    // Counting, partial fractions and extended binomials > page header > span
    "When does order change a count, how can we split a rational expression into simpler fractions, and when does an infinite binomial series converge?": "排列順序何時會影響計數結果？我們如何把有理式拆分為較簡單的分式？無限二項式級數又在甚麼條件下收斂？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > p
    "Everything on this page is Additional HL (AHL 1.10–1.11). Tick each skill when you can do it cleanly without looking at your notes.": "本頁所有內容均為 Additional HL（AHL 1.10–1.11）。當你可以不看筆記便流暢完成以下各項技能時，請逐項剔選。",

    // What you need to be able to do > checklist > Additional HL > span
    "Distinguish between ordered arrangements (<span class=\"chem\">nPr</span>) and unordered selections (<span class=\"chem\">nCr</span>), and solve algebraic equations involving factorials.": "分辨有序排列（<span class=\"chem\">nPr</span>）與無序組合（<span class=\"chem\">nCr</span>），並解含階乘的代數方程。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve constrained counting problems using the glue/block method (“together”), gap or complement method (“never together”), and complement (“at least one”).": "運用捆綁法（「相鄰」）、插空法或補集法（「不相鄰」）及補集法（「至少一個」）解有限制條件的計數問題。",

    // What you need to be able to do > checklist > Additional HL > span
    "Decompose rational expressions with at most two distinct linear factors into partial fractions, including improper quadratics over two linear factors.": "把分母最多包含兩個相異線性因式的有理式進行部分分式分解，包括分子為二次式的假分式。",

    // What you need to be able to do > checklist > Additional HL > span
    "Expand <span class=\"chem\">(1 + x)^n</span> and <span class=\"chem\">(a + bx)^n</span> for negative or fractional indices <span class=\"chem\">n</span> ∈ ℚ by factoring out <span class=\"chem\">a^n</span> first.": "對於負數或分數指數 <span class=\"chem\">n</span> ∈ ℚ，先抽出因子 <span class=\"chem\">a^n</span>，再展開 <span class=\"chem\">(1 + x)^n</span> 及 <span class=\"chem\">(a + bx)^n</span>。",

    // What you need to be able to do > checklist > Additional HL > span
    "State the exact interval of validity <span class=\"chem\">|x| &lt; |a / b|</span>, and take the intersection of intervals when combining partial fractions.": "寫出準確的有效區間 <span class=\"chem\">|x| &lt; |a / b|</span>，並在合併部分分式時取各區間的交集。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "題型解碼：如何辨識應用的方法",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Counting, partial fractions and extended binomials": "題型解碼 — 計數原理、部分分式與廣義二項式定理",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which technique to use > table > th
    "“Arrangement / row / digits / password / seating” (order matters)": "「排列／排成一列／數字／密碼／座位」（順序有關）",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Permutations</strong> <span class=\"chem\">nPr = n! / (n - r)!</span> or slot-filling.": "<strong>排列</strong> <span class=\"chem\">nPr = n! / (n - r)!</span> 或填位法。",

    // Question decoder: spotting which technique to use > table > td
    "Draw slots <code>[ ][ ][ ]</code> and fill the most restricted slot first (e.g. units digit or leading digit).": "畫出空位 <code>[ ][ ][ ]</code>，並先填寫限制最多的位置（例如個位數或首位數）。",

    // Question decoder: spotting which technique to use > table > th
    "“Committee / group / team / hand of cards” (order does not matter)": "「委員會／小組／隊伍／手牌」（順序無關）",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Combinations</strong> <span class=\"chem\">nCr = n! / (r!(n - r)!)</span>.": "<strong>組合</strong> <span class=\"chem\">nCr = n! / (r!(n - r)!)</span>。",

    // Question decoder: spotting which technique to use > table > td
    "Multiply across independent choices (AND) and add across mutually exclusive cases (OR).": "獨立步驟的選擇用乘法法則（AND），互斥情況用加法法則（OR）。",

    // Question decoder: spotting which technique to use > table > th
    "“Items A and B must sit together”": "「物件 A 與 B 必須相鄰」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Glue / Block method</strong>: tie the <span class=\"chem\">k</span> items into 1 super-item.": "<strong>捆綁法</strong>：把該 <span class=\"chem\">k</span> 件物件綁成 1 個大物件。",

    // Question decoder: spotting which technique to use > table > td
    "Arrange the <span class=\"chem\">(n - k + 1)</span> items, then multiply by <span class=\"chem\">k!</span> for internal arrangements inside the block.": "先排列 <span class=\"chem\">(n - k + 1)</span> 個物件，再乘以內部排列數 <span class=\"chem\">k!</span>。",

    // Question decoder: spotting which technique to use > table > th
    "“Items A and B must never be together”": "「物件 A 與 B 絕不能相鄰」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Complement</strong> (for 2 items) or <strong>Gap method</strong> (for <span class=\"chem\">k &gt;= 3</span> items).": "<strong>補集法</strong>（適用於 2 件物件）或<strong>插空法</strong>（適用於 <span class=\"chem\">k &gt;= 3</span> 件物件）。",

    // Question decoder: spotting which technique to use > table > td
    "For 2 items: <span class=\"chem\">n! - (n - 1)! × 2!</span>. For <span class=\"chem\">k &gt;= 3</span> items: arrange the other <span class=\"chem\">n - k</span> items first, then place the <span class=\"chem\">k</span> items into the <span class=\"chem\">n - k + 1</span> gaps.": "2 件物件：<span class=\"chem\">n! - (n - 1)! × 2!</span>。<span class=\"chem\">k &gt;= 3</span> 件物件：先排列其餘 <span class=\"chem\">n - k</span> 件物件，再把該 <span class=\"chem\">k</span> 件物件放入 <span class=\"chem\">n - k + 1</span> 個空位中。",

    // Question decoder: spotting which technique to use > table > th
    "“At least one…”": "「至少一個……」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Complement method</strong>: <span class=\"chem\">Total unconstrained - Forbidden cases</span>.": "<strong>補集法</strong>：<span class=\"chem\">Total unconstrained - Forbidden cases</span>（無限制總數減去不容許的情況）。",

    // Question decoder: spotting which technique to use > table > td
    "Faster and avoids double-counting errors compared to listing every valid case.": "比逐一列出所有合條件的情況更快，且能避免重複計算。",

    // Question decoder: spotting which technique to use > table > th
    "“Express rational function in partial fractions, hence find its binomial expansion”": "「把有理函數寫成部分分式，由此求其二項式展開式」",

    // Question decoder: spotting which technique to use > table > td
    "Split into partial fractions <strong>first</strong>, then factor out <span class=\"chem\">a</span> to write each term as <span class=\"chem\">(1 + u)^{-1}</span> with <span class=\"chem\">|u| &lt; 1</span>.": "<strong>先</strong>拆分為部分分式，再抽出因子 <span class=\"chem\">a</span>，把每一項寫成 <span class=\"chem\">(1 + u)^{-1}</span>（其中 <span class=\"chem\">|u| &lt; 1</span>）。",

    // Question decoder: spotting which technique to use > table > td
    "Use Heaviside cover-up to find <span class=\"chem\">A</span> and <span class=\"chem\">B</span> quickly. The overall validity interval is the <strong>intersection</strong> (smaller radius) of the two intervals.": "利用蓋住法（Heaviside cover-up）快速求 <span class=\"chem\">A</span> 和 <span class=\"chem\">B</span>。整體的有效區間為兩個區間的<strong>交集</strong>（取較小的半徑）。",

    // Counting principles, permutations and combinations > data-toc attribute
    "Counting & permutations": "計數原理與排列",

    // Counting principles, permutations and combinations > h2
    "Counting principles, permutations and combinations": "計數原理、排列與組合",

    // Counting principles, permutations and combinations > p
    "Every counting question starts with one decision: <strong>does order matter?</strong> If swapping two chosen items creates a different outcome (like a 4-digit PIN or a seating plan), you are counting <dfn data-def=\"An ordered arrangement of r items chosen from n distinct items: nPr = n! / (n - r)!.\">permutations</dfn>. If swapping them leaves the outcome unchanged (like a committee or a hand of cards), you are counting <dfn data-def=\"An unordered selection of r items chosen from n distinct items: nCr = n! / (r!(n - r)!).\">combinations</dfn>.": "每道計數問題都由一個判斷開始：<strong>順序是否重要？</strong>若交換兩個已選物件會產生不同結果（例如 4 位密碼或座位安排），你在計算<dfn data-def=\"從 n 個相異物件中選出 r 個作有序排列：nPr = n! / (n - r)!。\">排列 <span class=\"en-term\">(permutations)</span></dfn>。若交換它們不影響結果（例如委員會或一手撲克牌），你在計算<dfn data-def=\"從 n 個相異物件中選出 r 個的無序選取：nCr = n! / (r!(n - r)!)。\">組合 <span class=\"en-term\">(combinations)</span></dfn>。",

    // Counting principles, permutations and combinations > data-def attribute
    "An ordered arrangement of r items chosen from n distinct items: nPr = n! / (n - r)!.": "從 n 個相異物件中選出 r 個作有序排列：nPr = n! / (n - r)!。",

    // Counting principles, permutations and combinations > data-def attribute
    "An unordered selection of r items chosen from n distinct items: nCr = n! / (r!(n - r)!).": "從 n 個相異物件中選出 r 個的無序選取：nCr = n! / (r!(n - r)!)。",

    // Counting principles, permutations and combinations > formula booklet note > p
    "<strong>Section 1.10 of your Formula Booklet</strong> gives the permutation formula alongside the combination formula from Section 1.9:": "<strong>公式手冊第 1.10 節</strong>列出了排列公式，連同第 1.9 節的組合公式：",

    // Counting principles, permutations and combinations > equation > dd
    "total number of distinct items available": "可供選擇的相異物件總數",

    // Counting principles, permutations and combinations > equation > dd
    "number of items chosen or arranged (<span class=\"chem\">0 &lt;= r &lt;= n</span>)": "選出或排列的物件數目（<span class=\"chem\">0 &lt;= r &lt;= n</span>）",

    // Counting principles, permutations and combinations > equation > dd
    "number of ways to order those <span class=\"chem\">r</span> chosen items": "把該 <span class=\"chem\">r</span> 個已選物件排序的方法數目",

    // Counting principles, permutations and combinations > p
    "When problems add constraints, use the three core IB strategies:": "當題目加入限制條件時，可使用三個核心 IB 策略：",

    // Counting principles, permutations and combinations > li
    "<strong>Glue (Block) method</strong> for <em>“must be together”</em>: wrap the <span class=\"chem\">k</span> items into one super-item, arrange the reduced set of objects, and multiply by <span class=\"chem\">k!</span> for arrangements inside the block.": "<strong>捆綁法</strong>（適用於<em>「必須相鄰」</em>）：把該 <span class=\"chem\">k</span> 件物件捆綁成一個大物件，排列餘下與大物件的組合，再乘以內部排列數 <span class=\"chem\">k!</span>。",

    // Counting principles, permutations and combinations > li
    "<strong>Gap (Insertion) method</strong> for <em>“never together”</em>: arrange the <span class=\"chem\">m</span> unrestricted items first in <span class=\"chem\">m!</span> ways. This creates <span class=\"chem\">m + 1</span> gaps (including both ends). Place the <span class=\"chem\">k</span> separated items into <span class=\"chem\">k</span> distinct gaps in <span class=\"chem\">{}^{m+1}P_k</span> ways.": "<strong>插空法</strong>（適用於<em>「絕不相鄰」</em>）：先把 <span class=\"chem\">m</span> 件無限制物件排列，共 <span class=\"chem\">m!</span> 種方法，從而產生 <span class=\"chem\">m + 1</span> 個空位（包括兩端）。再把須分開的 <span class=\"chem\">k</span> 件物件放入其中 <span class=\"chem\">k</span> 個空位，共 <span class=\"chem\">{}^{m+1}P_k</span> 種方法。",

    // Counting principles, permutations and combinations > li
    "<strong>Complement method</strong> for <em>“at least one”</em> or <em>“2 items not together”</em>: subtract the forbidden count from the unconstrained total.": "<strong>補集法</strong>（適用於<em>「至少一個」</em>或<em>「2 件物件不相鄰」</em>）：從無限制總數中減去不容許的情況數目。",

    // Counting principles, permutations and combinations > widget > data-title attribute
    "Arrangement & committee builder": "排列與組合建構器",

    // Counting principles, permutations and combinations > widget > figcaption
    "Switch between comparing <sup><i>n</i></sup>P<sub><i>r</i></sub> vs <sup><i>n</i></sup>C<sub><i>r</i></sub>, the glue method (A and B together), and the gap/complement method (A and B separated).": "切換比較 <sup><i>n</i></sup>P<sub><i>r</i></sub> 與 <sup><i>n</i></sup>C<sub><i>r</i></sub>、捆綁法（A 與 B 相鄰）及插空／補集法（A 與 B 分開）。",

    // Counting principles, permutations and combinations > common mistake > p
    "<strong>Two classic counting traps:</strong><br> 1. <strong>Never use <span class=\"chem\">Total - (all k together)</span> when <span class=\"chem\">k &gt;= 3</span> items must be separated!</strong> If 3 vowels must not be adjacent, subtracting “all 3 together” still leaves arrangements where 2 vowels sit side by side. Always use the <strong>Gap method</strong> for 3 or more separated items.<br> 2. <strong>Never double-count in “at least” selections:</strong> picking 1 required engineer in <span class=\"chem\">5C1</span> ways and then picking 2 more people from the remaining 8 candidates counts pairs of engineers twice. Split into mutually exclusive exact counts (or use the complement).": "<strong>兩個經典計數陷阱：</strong><br> 1. <strong>當 <span class=\"chem\">k &gt;= 3</span> 件物件必須分開時，切勿使用 <span class=\"chem\">Total - (all k together)</span>（總數減全部相鄰）！</strong>若 3 個元音不能相鄰，減去「全部 3 個相鄰」仍會遺留「2 個元音相鄰」的排列。3 件或以上物件須分開時，務必使用<strong>插空法</strong>。<br> 2. <strong>切勿在「至少」選取題中重複計算：</strong>先以 <span class=\"chem\">5C1</span> 種方法選出 1 名工程師，再從餘下 8 人中選 2 人，會把兩名工程師的組合重複計算兩次。應拆分為互斥的準確人數情況（或使用補集法）。",

    // Counting principles, permutations and combinations > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> Permutations of indistinct objects (<span class=\"chem\">n! / (n_1! n_2!)</span>), Stars-and-Bars (<span class=\"chem\">(n+k-1)C(k-1)</span>), and derangements are <strong>not</strong> required formulas in the IB AA HL syllabus.": "<strong>IB 不要求的內容：</strong>不全相異物件的排列（<span class=\"chem\">n! / (n_1! n_2!)</span>）、隔板法（<span class=\"chem\">(n+k-1)C(k-1)</span>）及錯排（derangements）均<strong>不</strong>在 IB AA HL 課程要求之內。",

    // Counting principles, permutations and combinations > worked example > h3
    "Arranging books with a separation constraint (Gap method)": "具分隔限制的排書問題（插空法）",

    // Counting principles, permutations and combinations > worked example > p
    "Four distinct mathematics books and three distinct physics books are placed on a shelf. Find the number of arrangements in which no two physics books are adjacent. <strong>[5 marks]</strong>": "四本不同的數學書與三本不同的物理書放在書架上。求 (Find) 沒有兩本物理書相鄰的排列方法數目。<strong>[5 marks]</strong>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Arrange the 4 unrestricted mathematics books first": "先排列 4 本無限制的數學書",

    // Counting principles, permutations and combinations > worked example > p
    "Arranging the 4 mathematics books creates fixed slots around them where physics books can sit safely.": "排列 4 本數學書會在它們周圍產生固定空位，讓物理書安全放入。",

    // Counting principles, permutations and combinations > worked example > maths line
    "4! = 24 ways <b>[M1]</b>": "4! = 24 種方法 <b>[M1]</b>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Count the gaps and place the 3 distinct physics books": "點算空位並放入 3 本不同的物理書",

    // Counting principles, permutations and combinations > worked example > p
    "4 books create 5 gaps: <code>_ M _ M _ M _ M _</code>. Since the physics books are distinct, order matters when filling 3 of the 5 gaps.": "4 本書製造出 5 個空位：<code>_ M _ M _ M _ M _</code>。由於物理書各不相同，填寫 5 個空位中的 3 個時順序是重要的。",

    // Counting principles, permutations and combinations > worked example > maths line
    "<sup>5</sup>P<sub>3</sub> = 5 × 4 × 3 = 60 ways <b>[M1 A1]</b>": "<sup>5</sup>P<sub>3</sub> = 5 × 4 × 3 = 60 種方法 <b>[M1 A1]</b>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Multiply the two independent stages": "把兩個獨立步驟的方法數目相乘",

    // Counting principles, permutations and combinations > worked example > p
    "By the multiplication principle, combine the math arrangements with the gap placements.": "根據乘法法則，把數學書的排列數與插空方法數相乘。",

    // Counting principles, permutations and combinations > try it > p
    "A 5-person committee is chosen from 6 physicists and 4 mathematicians. How many different committees contain <strong>at least 3 physicists</strong>?": "從 6 名物理學家及 4 名數學家中選出一個 5 人委員會。有多少個不同的委員會包含<strong>至少 3 名物理學家</strong>？",

    // Counting principles, permutations and combinations > try it > li
    "Split into mutually exclusive exact cases: (3 physicists, 2 mathematicians), (4 physicists, 1 mathematician), and (5 physicists, 0 mathematicians).": "拆分為互斥的準確人數情況：（3 名物理學家、2 名數學家）、（4 名物理學家、1 名數學家）及（5 名物理學家、0 名數學家）。",

    // Counting principles, permutations and combinations > try it > li
    "Compute <span class=\"chem\">6C3 × 4C2 + 6C4 × 4C1 + 6C5 × 4C0</span>.": "計算 <span class=\"chem\">6C3 × 4C2 + 6C4 × 4C1 + 6C5 × 4C0</span>。",

    // Counting principles, permutations and combinations > data-title attribute
    "Counting, permutations & combinations: quick check": "計數原理、排列與組合：小測",

    // Partial fractions > data-toc attribute
    // Partial fractions > h2
    "Partial fractions": "部分分式",

    // Partial fractions > p
    "Before you can integrate a rational function or expand it as a binomial series, you often need to split a single fraction with a factored denominator into a sum of simpler fractions. This reverse-addition process is called <dfn data-def=\"Splitting a rational expression P(x)/((ax+b)(cx+d)) into a sum of simpler fractions with linear denominators.\">partial fraction decomposition</dfn>.": "在對有理函數進行積分或作二項式展開前，我們常需要把分母已因式分解的單一分式拆分為較簡單分式之和。這個逆向通分的過程稱為<dfn data-def=\"將有理式 P(x)/((ax+b)(cx+d)) 拆分為分母為線性式的較簡單分式之和。\">部分分式分解 <span class=\"en-term\">(partial fraction decomposition)</span></dfn>。",

    // Partial fractions > data-def attribute
    "Splitting a rational expression P(x)/((ax+b)(cx+d)) into a sum of simpler fractions with linear denominators.": "將有理式 P(x)/((ax+b)(cx+d)) 拆分為分母為線性式的較簡單分式之和。",

    // Partial fractions > equation > maths line
    "<span class=\"frac\"><span><i>px</i><sup>2</sup> + <i>qx</i> + <i>r</i></span><span>(<i>x</i> − <i>a</i>)(<i>x</i> − <i>b</i>)</span></span> = <i>K</i> + <span class=\"frac\"><span><i>A</i></span><span><i>x</i> − <i>a</i></span></span> + <span class=\"frac\"><span><i>B</i></span><span><i>x</i> − <i>b</i></span></span> (improper: divide first!)": "<span class=\"frac\"><span><i>px</i><sup>2</sup> + <i>qx</i> + <i>r</i></span><span>(<i>x</i> − <i>a</i>)(<i>x</i> − <i>b</i>)</span></span> = <i>K</i> + <span class=\"frac\"><span><i>A</i></span><span><i>x</i> − <i>a</i></span></span> + <span class=\"frac\"><span><i>B</i></span><span><i>x</i> − <i>b</i></span></span> （假分式：先做除法！）",

    // Partial fractions > key idea > p
    "<strong>Always check the degree first!</strong><br> If the numerator’s degree is <strong>greater than or equal to</strong> the denominator’s degree (e.g. quadratic over quadratic), you <strong>must</strong> do polynomial division (or split off the leading constant <span class=\"chem\">K = p / (ac)</span>) before writing <span class=\"chem\">A / (ax + b) + B / (cx + d)</span>.": "<strong>務必先檢查次數！</strong><br> 若分子的次數<strong>大於或等於</strong>分母的次數（例如二次式除以二次式），你<strong>必須</strong>先進行多項式長除法（或分出首項常數 <span class=\"chem\">K = p / (ac)</span>），才可寫成 <span class=\"chem\">A / (ax + b) + B / (cx + d)</span>。",

    // Partial fractions > exam tip (shown in English + translation) > p
    "<strong>Fastest Paper 1 method (Heaviside substitution):</strong> Multiply both sides by the denominator to get <span class=\"chem\">px + q ≡ A(cx + d) + B(ax + b)</span>, then substitute the root of each linear factor (<span class=\"chem\">x = -b/a</span> and <span class=\"chem\">x = -d/c</span>). One bracket vanishes each time, giving <span class=\"chem\">A</span> and <span class=\"chem\">B</span> in two lines.": "<strong>Paper 1 最快方法（Heaviside 代入法）：</strong>兩邊同乘分母得 <span class=\"chem\">px + q ≡ A(cx + d) + B(ax + b)</span>，然後代入每個線性因式的根（<span class=\"chem\">x = -b/a</span> 及 <span class=\"chem\">x = -d/c</span>）。每次會有一個括號變為零，兩行即可求得 <span class=\"chem\">A</span> 和 <span class=\"chem\">B</span>。",

    // Partial fractions > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> In IB Math AA HL (1.11), partial fractions are restricted to denominators with <strong>at most two distinct linear factors</strong>. You do <strong>not</strong> need repeated linear factors (<span class=\"chem\">A/(x-a) + B/(x-a)^2</span>) or irreducible quadratic factors (<span class=\"chem\">(Ax+B)/(x^2+c^2)</span>), even though AI tools often include them.": "<strong>IB 不要求的內容：</strong>在 IB Math AA HL (1.11) 中，部分分式只限於分母最多有<strong>兩個相異線性因式</strong>。你<strong>不需要</strong>處理重複線性因式（<span class=\"chem\">A/(x-a) + B/(x-a)^2</span>）或不可約二次因式（<span class=\"chem\">(Ax+B)/(x^2+c^2)</span>），即使 AI 工具常會包含它們。",

    // Partial fractions > worked example > h3
    "Decomposing an improper rational expression into partial fractions": "把假有理分式分解為部分分式",

    // Partial fractions > worked example > p
    "Express <span class=\"chem\">(x^2 + 6x - 1) / ((x - 1)(x + 2))</span> in the form <span class=\"chem\">A + B / (x - 1) + C / (x + 2)</span>. <strong>[5 marks]</strong>": "把 <span class=\"chem\">(x^2 + 6x - 1) / ((x - 1)(x + 2))</span> 表示成 (Express ... in the form) <span class=\"chem\">A + B / (x - 1) + C / (x + 2)</span> 的形式。<strong>[5 marks]</strong>",

    // Partial fractions > worked example > data-title attribute
    "Clear the denominator into an identity": "去分母轉化為恒等式",

    // Partial fractions > worked example > p
    "Multiply both sides by (x − 1)(x + 2) so we can find A, B, and C cleanly.": "兩邊同乘以 (x − 1)(x + 2)，以便清晰求得 A、B 及 C。",

    // Partial fractions > worked example > data-title attribute
    "Match the x² coefficient to find A": "比較 x² 項係數以求 A",

    // Partial fractions > worked example > p
    "Only A(x − 1)(x + 2) produces an x² term on the right-hand side.": "右方只有 A(x − 1)(x + 2) 會產生 x² 項。",

    // Partial fractions > worked example > data-title attribute
    "Substitute x = 1 and x = −2 to find B and C": "代入 x = 1 及 x = −2 以求 B 與 C",

    // Partial fractions > worked example > p
    "Choosing the roots of the linear factors eliminates the other unknowns immediately.": "選取線性因式的根可立即消去其他未知數。",

    // Partial fractions > try it > p
    "Given that <span class=\"chem\">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class=\"chem\">A</span>.": "已知 <span class=\"chem\">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>，求 (Find) <span class=\"chem\">A</span> 的值。",

    // Partial fractions > try it > li
    "Write <span class=\"chem\">7x - 1 = A(x + 2) + B(x - 1)</span>.": "寫出 <span class=\"chem\">7x - 1 = A(x + 2) + B(x - 1)</span>。",

    // Partial fractions > try it > li
    "Substitute <span class=\"chem\">x = 1</span> so the <span class=\"chem\">B</span> term vanishes.": "代入 <span class=\"chem\">x = 1</span> 使 <span class=\"chem\">B</span> 項消去。",

    // The extended binomial theorem for rational indices > data-toc attribute
    "Extended binomials": "廣義二項式定理",

    // The extended binomial theorem for rational indices > h2
    "The extended binomial theorem for rational indices": "有理數指數的廣義二項式定理",

    // The extended binomial theorem for rational indices > p
    "In Topic 1.2, <span class=\"chem\">(a + b)^n</span> with <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> always stopped after <span class=\"chem\">n + 1</span> terms. When <span class=\"chem\">n</span> is negative or fractional (<span class=\"chem\">n</span> ∈ ℚ), the expansion <strong>never terminates</strong>—it becomes an infinite series that only converges when the variable term has magnitude strictly less than <span class=\"chem\">1</span>.": "在課題 1.2 中，當 <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> 時，<span class=\"chem\">(a + b)^n</span> 總會在 <span class=\"chem\">n + 1</span> 項後終止。但當 <span class=\"chem\">n</span> 為負數或分數（<span class=\"chem\">n</span> ∈ ℚ）時，展開式<strong>永不終止</strong>——它成為一個無限級數，且只在變數項的絕對值嚴格小於 <span class=\"chem\">1</span> 時才收斂。",

    // The extended binomial theorem for rational indices > formula booklet note > p
    "<strong>Section 1.10 of your Formula Booklet</strong> gives the extended binomial series for <span class=\"chem\">n</span> ∈ ℚ and <span class=\"chem\">|x| &lt; 1</span>:": "<strong>公式手冊第 1.10 節</strong>列出了當 <span class=\"chem\">n</span> ∈ ℚ 且 <span class=\"chem\">|x| &lt; 1</span> 時的廣義二項式級數：",

    // The extended binomial theorem for rational indices > equation > maths line
    "(<i>a</i> + <i>bx</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><span class=\"big\">(</span>1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">)</span><sup><i>n</i></sup> valid for <span class=\"big\">|</span><span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">|</span> &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"big\">|</span><span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span><span class=\"big\">|</span>": "(<i>a</i> + <i>bx</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><span class=\"big\">(</span>1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">)</span><sup><i>n</i></sup> ，有效條件為 <span class=\"big\">|</span><span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">|</span> &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"big\">|</span><span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span><span class=\"big\">|</span>",

    // The extended binomial theorem for rational indices > widget > data-title attribute
    "Extended binomial approximation & validity interval": "廣義二項式近似與有效區間",

    // The extended binomial theorem for rational indices > widget > figcaption
    "Compare the exact curve with its linear (<i>N</i> = 1), quadratic (<i>N</i> = 2), and cubic (<i>N</i> = 3) binomial approximations. Notice how the polynomial hugs the curve inside the validity interval (−<i>R</i>, <i>R</i>) and diverges outside it.": "比較精確曲線與其線性 (<i>N</i> = 1)、二次 (<i>N</i> = 2) 及三次 (<i>N</i> = 3) 二項式近似。留意多項式在有效區間 (−<i>R</i>, <i>R</i>) 內貼近曲線，而在區間外發散。",

    // The extended binomial theorem for rational indices > common mistake > p
    "<strong>Three common extended-binomial mistakes:</strong><br> 1. <strong>Forgetting <span class=\"chem\">a^n</span> when factoring:</strong> <span class=\"chem\">(4 - x)^{-1/2} = 4^{-1/2}(1 - x/4)^{-1/2} = (1/2)(1 - x/4)^{-1/2}</span>, not <span class=\"chem\">4(1 - x/4)^{-1/2}</span>.<br> 2. <strong>Dropping negative signs inside <span class=\"chem\">u</span>:</strong> in <span class=\"chem\">(1 - 3x)^{-2}</span>, <span class=\"chem\">u = -3x</span>, so <span class=\"chem\">u^2 = +9x^2</span>.<br> 3. <strong>Taking the union instead of the intersection of validity intervals:</strong> if one partial fraction is valid for <span class=\"chem\">|x| &lt; 1</span> and the other for <span class=\"chem\">|x| &lt; 2</span>, their sum is only valid where <em>both</em> converge: <span class=\"chem\">|x| &lt; 1</span>.": "<strong>三個常見的廣義二項式錯誤：</strong><br> 1. <strong>抽公因式時忘記 <span class=\"chem\">a^n</span>：</strong> <span class=\"chem\">(4 - x)^{-1/2} = 4^{-1/2}(1 - x/4)^{-1/2} = (1/2)(1 - x/4)^{-1/2}</span>，而不是 <span class=\"chem\">4(1 - x/4)^{-1/2}</span>。<br> 2. <strong>遺漏 <span class=\"chem\">u</span> 內的負號：</strong>在 <span class=\"chem\">(1 - 3x)^{-2}</span> 中，<span class=\"chem\">u = -3x</span>，因此 <span class=\"chem\">u^2 = +9x^2</span>。<br> 3. <strong>誤取有效區間的聯集而非交集：</strong>若一個部分分式在 <span class=\"chem\">|x| &lt; 1</span> 有效，另一個在 <span class=\"chem\">|x| &lt; 2</span> 有效，則兩者之和只在<em>兩者同時</em>收斂處有效，即 <span class=\"chem\">|x| &lt; 1</span>。",

    // The extended binomial theorem for rational indices > worked example > h3
    "Partial fractions followed by an extended binomial expansion": "先作部分分式分解再進行廣義二項式展開",

    // The extended binomial theorem for rational indices > worked example > p
    "Express <span class=\"chem\">f(x) = (5x + 1) / ((1 - x)(2 + x))</span> in partial fractions, and hence find the first three terms of its expansion in ascending powers of <span class=\"chem\">x</span>. State the set of values of <span class=\"chem\">x</span> for which the expansion is valid. <strong>[6 marks]</strong>": "把 <span class=\"chem\">f(x) = (5x + 1) / ((1 - x)(2 + x))</span> 表示為 (Express) 部分分式，由此求 (hence find) 其按 <span class=\"chem\">x</span> 升冪排列的展開式首三項，並寫出 (State) 該展開式有效的 <span class=\"chem\">x</span> 值範圍。<strong>[6 marks]</strong>",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Decompose f(x) into partial fractions": "把 f(x) 分解為部分分式",

    // The extended binomial theorem for rational indices > worked example > p
    "Splitting into two linear denominators turns f(x) into two (a + bx)⁻¹ terms we can expand separately.": "拆分為兩個線性分母後，f(x) 變成兩個可分開展開的 (a + bx)⁻¹ 項。",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Expand each term up to x²": "把各項展開至 x² 項",

    // The extended binomial theorem for rational indices > worked example > p
    "Factor 2⁻¹ = 1/2 out of (2 + x)⁻¹ before applying the (1 + u)⁻¹ formula.": "應用 (1 + u)⁻¹ 公式前，先從 (2 + x)⁻¹ 中抽出 2⁻¹ = 1/2。",

    // The extended binomial theorem for rational indices > worked example > maths line
    "2(1 − <i>x</i>)<sup>−1</sup> = 2(1 + <i>x</i> + <i>x</i><sup>2</sup> + …) = 2 + 2<i>x</i> + 2<i>x</i><sup>2</sup> + … (valid for |<i>x</i>| &lt; 1)": "2(1 − <i>x</i>)<sup>−1</sup> = 2(1 + <i>x</i> + <i>x</i><sup>2</sup> + …) = 2 + 2<i>x</i> + 2<i>x</i><sup>2</sup> + … （於 |<i>x</i>| &lt; 1 有效）",

    // The extended binomial theorem for rational indices > worked example > maths line
    "−3(2 + <i>x</i>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> − …) = −<span class=\"frac\"><span>3</span><span>2</span></span> + <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i> − <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup> + … (valid for |<i>x</i>| &lt; 2) <b>[M1]</b>": "−3(2 + <i>x</i>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> − …) = −<span class=\"frac\"><span>3</span><span>2</span></span> + <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i> − <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup> + … （於 |<i>x</i>| &lt; 2 有效）<b>[M1]</b>",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Combine like powers and take the intersection of validity intervals": "合併同次項並取有效區間的交集",

    // The extended binomial theorem for rational indices > worked example > p
    "Add the coefficients term by term, and choose the stricter convergence condition.": "逐項相加係數，並選取較嚴格的收斂條件。",

    // The extended binomial theorem for rational indices > worked example > maths line
    "<i>f</i>(<i>x</i>) ≈ <b><span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>11</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b> <b>[A1 R1]</b>": "<i>f</i>(<i>x</i>) ≈ <b><span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>11</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>，有效範圍為 <b>|<i>x</i>| &lt; 1</b> <b>[A1 R1]</b>",

    // The extended binomial theorem for rational indices > worked example > p
    "1/2 + (11/4)x + (13/8)x², valid for |x| &lt; 1": "1/2 + (11/4)x + (13/8)x²，有效範圍為 |x| &lt; 1",

    // The extended binomial theorem for rational indices > try it > p
    "Find the coefficient of <span class=\"chem\">x^2</span> in the binomial expansion of <span class=\"chem\">(4 - x)^{-1/2}</span> (enter an exact fraction like <code>3/256</code> or a 3 s.f. decimal).": "求 (Find) <span class=\"chem\">(4 - x)^{-1/2}</span> 二項式展開式中 <span class=\"chem\">x^2</span> 的係數（輸入準確分數如 <code>3/256</code> 或 3 位有效數字的小數）。",

    // The extended binomial theorem for rational indices > try it > li
    "Factor out <span class=\"chem\">4^{-1/2} = 1/2</span> first: <span class=\"chem\">(1/2)(1 - x/4)^{-1/2}</span>.": "先抽出 <span class=\"chem\">4^{-1/2} = 1/2</span>：<span class=\"chem\">(1/2)(1 - x/4)^{-1/2}</span>。",

    // The extended binomial theorem for rational indices > try it > li
    "The <span class=\"chem\">x^2</span> term inside the bracket is <span class=\"chem\">((-1/2)(-3/2)/2)(-x/4)^2 = (3/8)(x^2/16) = (3/128)x^2</span>. Multiply by <span class=\"chem\">1/2</span>.": "括號內的 <span class=\"chem\">x^2</span> 項為 <span class=\"chem\">((-1/2)(-3/2)/2)(-x/4)^2 = (3/8)(x^2/16) = (3/128)x^2</span>，再乘以 <span class=\"chem\">1/2</span>。",

    // The extended binomial theorem for rational indices > data-title attribute
    "Partial fractions & extended binomials: mixed exam practice": "部分分式與廣義二項式定理：綜合考試練習",

    // widget string (assets/js/widgets-t1-3.js)
    "Counting mode": "計數模式",

    // widget string (assets/js/widgets-t1-3.js)
    "Compare nPr vs nCr (why divide by r!)": "比較 nPr 與 nCr（為何要除以 r!）",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue method: A and B must sit together": "捆綁法：A 與 B 必須相鄰",

    // widget string (assets/js/widgets-t1-3.js)
    "Gap method: A and B must NOT sit together": "插空法：A 與 B 絕不能相鄰",

    // widget string (assets/js/widgets-t1-3.js)
    "Total items n": "物件總數 n",

    // widget string (assets/js/widgets-t1-3.js)
    "Chosen items r": "選取數目 r",

    // widget string (assets/js/widgets-t1-3.js)
    "Ordered count": "有序排列數",

    // widget string (assets/js/widgets-t1-3.js)
    "Comparison / formula": "比較／公式",

    // widget string (assets/js/widgets-t1-3.js)
    "Key takeaway": "核心重點",

    // widget string (assets/js/widgets-t1-3.js)
    "Each committee of {r} collapses {rf} orderings into 1.": "每個 {r} 人組合會把 {rf} 種排序合併為 1 種。",

    // widget string (assets/js/widgets-t1-3.js)
    "Sample subset of {r} items from {n}:": "從 {n} 個中選出 {r} 個的樣本子集：",

    // widget string (assets/js/widgets-t1-3.js)
    "One unordered selection {": "一個無序選取 {",

    // widget string (assets/js/widgets-t1-3.js)
    "} corresponds to {rf} ordered arrangements:": "} 對應 {rf} 種有序排列：",

    // widget string (assets/js/widgets-t1-3.js)
    "orderings": "種排序",

    // widget string (assets/js/widgets-t1-3.js)
    "Unconstrained": "無限制",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue A & B into 1 super-item → {m} items to arrange, then × 2! inside.": "把 A 與 B 綁成 1 個大物件 → 排列 {m} 個物件，再乘以內部 2!。",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue method: treat (AB) as a single super-item:": "捆綁法：把 (AB) 視為單一大物件：",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {m} blocks ({m}!) × internal swaps (AB or BA, 2!) = {ans}": "排列 {m} 個區塊 ({m}!) × 內部互換 (AB 或 BA，2!) = {ans}",

    // widget string (assets/js/widgets-t1-3.js)
    "Complement": "補集法",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {k} other items first → {g} gaps available for A and B.": "先排列其餘 {k} 件物件 → 產生 {g} 個空位供 A 與 B 放入。",

    // widget string (assets/js/widgets-t1-3.js)
    "Gap method: arrange the {k} other items first to create {g} gaps:": "插空法：先排列其餘 {k} 件物件以製造 {g} 個空位：",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {k} items ({k}!) × place A & B into 2 of {g} gaps ({g}P2) = {ans}": "排列 {k} 件物件 ({k}!) × 把 A 與 B 放入 {g} 個空位中的 2 個 ({g}P2) = {ans}",

    // widget string (assets/js/widgets-t1-3.js)
    "Function f(x)": "函數 f(x)",

    // widget string (assets/js/widgets-t1-3.js)
    "Approximation degree N": "近似次數 N",

    // widget string (assets/js/widgets-t1-3.js)
    "Test point x₀": "測試點 x₀",

    // widget string (assets/js/widgets-t1-3.js)
    "Exact f(x₀)": "精確值 f(x₀)",

    // widget string (assets/js/widgets-t1-3.js)
    "Binomial P_N(x₀)": "二項式近似 P_N(x₀)",

    // widget string (assets/js/widgets-t1-3.js)
    "Error & validity": "誤差與有效性",

    // widget string (assets/js/widgets-t1-3.js)
    "Undefined": "未定義",

    // widget string (assets/js/widgets-t1-3.js)
    "Inside (−R, R)": "位於 (−R, R) 內",

    // widget string (assets/js/widgets-t1-3.js)
    "Outside (−R, R)!": "位於 (−R, R) 外！",

    // widget string (assets/js/widgets-t1-3.js)
    "Outside domain / asymptote": "超出定義域／漸近線",

    // widget string (assets/js/widgets-t1-3.js)
    "Extended binomial approximation vs exact rational/radical function": "廣義二項式近似與精確有理／根式函數比較",

    // widget string (assets/js/widgets-t1-3.js)
    "Exact f(x)": "精確 f(x)",

    // widget string (assets/js/widgets-t1-3.js)
    "Degree N = {n} polynomial": "{n} 次多項式"

  }
});
