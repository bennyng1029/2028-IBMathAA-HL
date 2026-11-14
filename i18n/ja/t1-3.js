/* t1-3 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-3', {
  strings: {

    // page title (browser tab)
    "1.3 Counting, partial fractions and extended binomials | Analysis Lab": "1.3 順列・組合せ、部分分数分解と二項定理の拡張 | Analysis Lab",

    // Counting, partial fractions and extended binomials > page header > p
    "Topic 1.3 · AHL 1.10–1.11 · Additional HL": "Topic 1.3 · AHL 1.10–1.11 · Additional HL",

    // Counting, partial fractions and extended binomials > page header > h1
    "Counting, partial fractions and extended binomials": "順列・組合せ、部分分数分解と二項定理の拡張",

    // Counting, partial fractions and extended binomials > page header > span
    "When does order change a count, how can we split a rational expression into simpler fractions, and when does an infinite binomial series converge?": "順序が関係するときとしないときの違いは何か、有理式をどのように簡単な分数に分解できるか、そして無限二項級数はいつ収束するのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > p
    "Everything on this page is Additional HL (AHL 1.10–1.11). Tick each skill when you can do it cleanly without looking at your notes.": "このページの学習内容はすべて Additional HL（AHL 1.10–1.11）です。ノートを見ずに正確に解けるようになったら、各項目にチェックを入れましょう。",

    // What you need to be able to do > checklist > Additional HL > span
    "Distinguish between ordered arrangements (<span class=\"chem\">nPr</span>) and unordered selections (<span class=\"chem\">nCr</span>), and solve algebraic equations involving factorials.": "順序を区別する順列（<span class=\"chem\">nPr</span>）と順序を区別しない組合せ（<span class=\"chem\">nCr</span>）を見分け、階乗を含む方程式を解ける。",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve constrained counting problems using the glue/block method (“together”), gap or complement method (“never together”), and complement (“at least one”).": "隣り合う場合（ブロック法）、隣り合わない場合（間に入れる方法・余事象）、および「少なくとも 1 つ」（余事象）など条件付きの場合の数を求められる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Decompose rational expressions with at most two distinct linear factors in the denominator (numerator of lower degree) into partial fractions.": "分母が最大 2 つの異なる 1 次式の積で、分子の次数が分母より低い有理式を部分分数分解できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Expand <span class=\"chem\">(1 + x)^n</span> and <span class=\"chem\">(a + bx)^n</span> for negative or fractional indices <span class=\"chem\">n</span> ∈ ℚ by factoring out <span class=\"chem\">a^n</span> first.": "負の数や分数の指数 <span class=\"chem\">n</span> ∈ ℚ に対して、まず <span class=\"chem\">a^n</span> をくくり出して <span class=\"chem\">(1 + x)^n</span> や <span class=\"chem\">(a + bx)^n</span> を展開できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "State the exact interval of validity <span class=\"chem\">|x| &lt; |a / b|</span>, and take the intersection of intervals when combining partial fractions.": "収束範囲 <span class=\"chem\">|x| &lt; |a / b|</span> を正確に述べられ、部分分数分解と組み合わせたときは共通範囲をとれる。",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "問題デコーダー：どの解法を使うか見抜くコツ",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Counting, partial fractions and extended binomials": "問題デコーダー — 順列・組合せ、部分分数分解、二項定理の拡張",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which technique to use > table > th
    "“Arrangement / row / digits / password / seating” (order matters)": "「並び方 / 列 / 数字 / パスワード / 座席」（順序を区別する）",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Permutations</strong> <span class=\"chem\">nPr = n! / (n - r)!</span> or slot-filling.": "<strong>順列</strong> <span class=\"chem\">nPr = n! / (n - r)!</span>、または枠を埋める積の法則を使います。",

    // Question decoder: spotting which technique to use > table > td
    "Draw slots <code>[ ][ ][ ]</code> and fill the most restricted slot first (e.g. units digit or leading digit).": "枠 <code>[ ][ ][ ]</code> を描き、最も制限の厳しい枠（一の位や先頭の桁など）から埋めます。",

    // Question decoder: spotting which technique to use > table > th
    "“Committee / group / team / hand of cards” (order does not matter)": "「委員会 / グループ / チーム / 手札」（順序を区別しない）",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Combinations</strong> <span class=\"chem\">nCr = n! / (r!(n - r)!)</span>.": "<strong>組合せ</strong> <span class=\"chem\">nCr = n! / (r!(n - r)!)</span> を使います。",

    // Question decoder: spotting which technique to use > table > td
    "Multiply across independent choices (AND) and add across mutually exclusive cases (OR).": "独立した選択（かつ：AND）は掛け算し、互いに排反な場合分け（または：OR）は足し算します。",

    // Question decoder: spotting which technique to use > table > th
    "“Items A and B must sit together”": "「A と B は隣り合わなければならない」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Glue / Block method</strong>: tie the <span class=\"chem\">k</span> items into 1 super-item.": "<strong>ブロック法（ひとまとめ）</strong>：<span class=\"chem\">k</span> 個を 1 つの大きなかたまりにまとめます。",

    // Question decoder: spotting which technique to use > table > td
    "Arrange the <span class=\"chem\">(n - k + 1)</span> items, then multiply by <span class=\"chem\">k!</span> for internal arrangements inside the block.": "<span class=\"chem\">(n - k + 1)</span> 個を並べたあと、かたまり内部の並び方 <span class=\"chem\">k!</span> を掛けます。",

    // Question decoder: spotting which technique to use > table > th
    "“Items A and B must never be together”": "「A と B は隣り合ってはいけない」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Complement</strong> (for 2 items) or <strong>Gap method</strong> (for <span class=\"chem\">k &gt;= 3</span> items).": "<strong>余事象</strong>（2 個のとき）または<strong>間に入れる方法</strong>（<span class=\"chem\">k &gt;= 3</span> 個のとき）を使います。",

    // Question decoder: spotting which technique to use > table > td
    "For 2 items: <span class=\"chem\">n! - (n - 1)! × 2!</span>. For <span class=\"chem\">k &gt;= 3</span> items: arrange the other <span class=\"chem\">n - k</span> items first, then place the <span class=\"chem\">k</span> items into the <span class=\"chem\">n - k + 1</span> gaps.": "2 個のときは <span class=\"chem\">n! - (n - 1)! × 2!</span>。<span class=\"chem\">k &gt;= 3</span> 個のときは、まず他の <span class=\"chem\">n - k</span> 個を並べ、できた <span class=\"chem\">n - k + 1</span> 個のすき間に <span class=\"chem\">k</span> 個を入れます。",

    // Question decoder: spotting which technique to use > table > th
    "“At least one…”": "「少なくとも 1 つ…（At least one）」",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Complement method</strong>: <span class=\"chem\">Total unconstrained - Forbidden cases</span>.": "<strong>余事象の考え方</strong>：<span class=\"chem\">Total unconstrained - Forbidden cases</span>（全体 − 条件を満たさない場合）。",

    // Question decoder: spotting which technique to use > table > td
    "Faster and avoids double-counting errors compared to listing every valid case.": "すべての場合を書き出すよりも速く、重複して数えるミスを防げます。",

    // Question decoder: spotting which technique to use > table > th
    "“Express rational function in partial fractions, hence find its binomial expansion”": "「有理式を部分分数分解し、これを用いて二項展開を求めよ」",

    // Question decoder: spotting which technique to use > table > td
    "Split into partial fractions <strong>first</strong>, then factor out <span class=\"chem\">a</span> to write each term as <span class=\"chem\">(1 + u)^{-1}</span> with <span class=\"chem\">|u| &lt; 1</span>.": "<strong>まず</strong>部分分数に分け、次に <span class=\"chem\">a</span> をくくり出して各項を <span class=\"chem\">|u| &lt; 1</span> の <span class=\"chem\">(1 + u)^{-1}</span> の形にします。",

    // Question decoder: spotting which technique to use > table > td
    "Use Heaviside cover-up to find <span class=\"chem\">A</span> and <span class=\"chem\">B</span> quickly. The overall validity interval is the <strong>intersection</strong> (smaller radius) of the two intervals.": "ヘヴィサイドの代入法（数値代入法）で <span class=\"chem\">A</span> と <span class=\"chem\">B</span> を素早く求めます。全体の収束範囲は 2 つの範囲の<strong>共通部分</strong>（狭い方の範囲）になります。",

    // Counting principles, permutations and combinations > data-toc attribute
    "Counting & permutations": "場合の数と順列",

    // Counting principles, permutations and combinations > h2
    "Counting principles, permutations and combinations": "場合の数・順列・組合せ",

    // Counting principles, permutations and combinations > p
    "Every counting question starts with one decision: <strong>does order matter?</strong> If swapping two chosen items creates a different outcome (like a 4-digit PIN or a seating plan), you are counting <dfn data-def=\"An ordered arrangement of r items chosen from n distinct items: nPr = n! / (n - r)!.\">permutations</dfn>. If swapping them leaves the outcome unchanged (like a committee or a hand of cards), you are counting <dfn data-def=\"An unordered selection of r items chosen from n distinct items: nCr = n! / (r!(n - r)!).\">combinations</dfn>.": "場合の数の問題はすべて、<strong>「順序を区別するか？」</strong>の判断から始まります。選んだ 2 つを入れ替えると別の結果になるなら（4 桁の暗証番号や座席表など）、<dfn data-def=\"異なる n 個のものから r 個を選んで順序をつけて並べる並び方：nPr = n! / (n - r)!。\">順列 <span class=\"en-term\">(permutations)</span></dfn> です。入れ替えても同じ結果になるなら（委員会のメンバーやトランプの手札など）、<dfn data-def=\"異なる n 個のものから順序を考えずに r 個を選ぶ選び方：nCr = n! / (r!(n - r)!)。\">組合せ <span class=\"en-term\">(combinations)</span></dfn> です。",

    // Counting principles, permutations and combinations > data-def attribute
    "An ordered arrangement of r items chosen from n distinct items: nPr = n! / (n - r)!.": "異なる n 個のものから r 個を選んで順序をつけて並べる並び方：nPr = n! / (n - r)!。",

    // Counting principles, permutations and combinations > data-def attribute
    "An unordered selection of r items chosen from n distinct items: nCr = n! / (r!(n - r)!).": "異なる n 個のものから順序を考えずに r 個を選ぶ選び方：nCr = n! / (r!(n - r)!)。",

    // Counting principles, permutations and combinations > formula booklet note > p
    "<strong>Section 1.10 of your Formula Booklet</strong> gives the permutation formula alongside the combination formula from Section 1.9:": "<strong>公式集（Formula booklet）の Section 1.10</strong> には、Section 1.9 の組合せの公式と並んで順列の公式が掲載されています：",

    // Counting principles, permutations and combinations > equation > dd
    "total number of distinct items available": "選べる異なるものの総数",

    // Counting principles, permutations and combinations > equation > dd
    "number of items chosen or arranged (<span class=\"chem\">0 &lt;= r &lt;= n</span>)": "選ぶ、または並べる個数（<span class=\"chem\">0 &lt;= r &lt;= n</span>）",

    // Counting principles, permutations and combinations > equation > dd
    "number of ways to order those <span class=\"chem\">r</span> chosen items": "選んだ <span class=\"chem\">r</span> 個の並べ方の総数",

    // Counting principles, permutations and combinations > p
    "When problems add constraints, use the three core IB strategies:": "問題に条件がついているときは、IB で頻出の 3 つの基本戦略を使います：",

    // Counting principles, permutations and combinations > li
    "<strong>Glue (Block) method</strong> for <em>“must be together”</em>: wrap the <span class=\"chem\">k</span> items into one super-item, arrange the reduced set of objects, and multiply by <span class=\"chem\">k!</span> for arrangements inside the block.": "<em>「隣り合う（must be together）」</em>に対する<strong>ブロック法</strong>：<span class=\"chem\">k</span> 個を 1 つのまとまりとみなして全体を並べ、そのまとまり内部の並べ方 <span class=\"chem\">k!</span> を掛けます。",

    // Counting principles, permutations and combinations > li
    "<strong>Gap (Insertion) method</strong> for <em>“never together”</em>: arrange the <span class=\"chem\">m</span> unrestricted items first in <span class=\"chem\">m!</span> ways. This creates <span class=\"chem\">m + 1</span> gaps (including both ends). Place the <span class=\"chem\">k</span> separated items into <span class=\"chem\">k</span> distinct gaps in <sup><i>m</i>+1</sup>P<sub><i>k</i></sub> ways.": "<em>「隣り合わない（never together）」</em>に対する<strong>間に入れる方法</strong>：まず制限のない <span class=\"chem\">m</span> 個を <span class=\"chem\">m!</span> 通りで並べます。すると両端を含めて <span class=\"chem\">m + 1</span> 個のすき間ができます。その中から異なる <span class=\"chem\">k</span> 個のすき間を選んで <span class=\"chem\">k</span> 個を <sup><i>m</i>+1</sup>P<sub><i>k</i></sub> 通りで配置します。",

    // Counting principles, permutations and combinations > li
    "<strong>Complement method</strong> for <em>“at least one”</em> or <em>“2 items not together”</em>: subtract the forbidden count from the unconstrained total.": "<em>「少なくとも 1 つ（at least one）」</em>や<em>「2 個が隣り合わない」</em>に対する<strong>余事象の方法</strong>：制限なしの総数から、条件に反する場合の数を引きます。",

    // Counting principles, permutations and combinations > widget > data-title attribute
    "Arrangement & committee builder": "順列・組合せビルダー",

    // Counting principles, permutations and combinations > widget > figcaption
    "Switch between comparing <sup><i>n</i></sup>P<sub><i>r</i></sub> vs <sup><i>n</i></sup>C<sub><i>r</i></sub>, the glue method (A and B together), and the gap/complement method (A and B separated).": "<sup><i>n</i></sup>P<sub><i>r</i></sub> と <sup><i>n</i></sup>C<sub><i>r</i></sub> の比較、ブロック法（A と B が隣り合う）、間に入れる方法・余事象（A と B が離れる）を切り替えて確認しましょう。",

    // Counting principles, permutations and combinations > common mistake > p
    "<strong>Two classic counting traps:</strong><br> 1. <strong>Never use <span class=\"chem\">Total - (all k together)</span> when <span class=\"chem\">k &gt;= 3</span> items must be separated!</strong> If 3 vowels must not be adjacent, subtracting “all 3 together” still leaves arrangements where 2 vowels sit side by side. Always use the <strong>Gap method</strong> for 3 or more separated items.<br> 2. <strong>Never double-count in “at least” selections:</strong> picking 1 required engineer in <span class=\"chem\">5C1</span> ways and then picking 2 more people from the remaining 8 candidates counts pairs of engineers twice. Split into mutually exclusive exact counts (or use the complement).": "<strong>場合の数でよくある 2 つの落とし穴：</strong><br> 1. <strong><span class=\"chem\">k &gt;= 3</span> 個を離すときに <span class=\"chem\">Total - (all k together)</span> を使わないでください。</strong> 例えば 3 つの母音がどれも隣り合わないようにするとき、「3 つすべてが隣り合う」を引いただけでは「2 つだけが隣り合う」並び方が残ってしまいます。3 個以上を離すときは必ず<strong>間に入れる方法</strong>を使いましょう。<br> 2. <strong>「少なくとも〜」の選び方で重複カウントをしないこと：</strong> 例えば必要なエンジニア 1 人を <span class=\"chem\">5C1</span> 通りで選び、残り 8 人から 2 人を選ぶと、エンジニア 2 人のペアを 2 回数えてしまいます。正確な人数ごとに排反に場合分けするか、余事象を使いましょう。",

    // Counting principles, permutations and combinations > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> Permutations of indistinct objects (<span class=\"chem\">n! / (n_1! n_2!)</span>), Stars-and-Bars (<span class=\"chem\">(n+k-1)C(k-1)</span>), circular arrangements (seating round a table) and derangements are <strong>not</strong> required formulas in the IB AA HL syllabus.": "<strong>IB の範囲外：</strong> 同じものを含む順列（<span class=\"chem\">n! / (n_1! n_2!)</span>）、重複組合せ（仕切りと玉、<span class=\"chem\">(n+k-1)C(k-1)</span>）、円順列（円卓に座る並べ方）、完全順列（攪乱順列）の公式は IB AA HL のシラバスでは<strong>不要</strong>です。",

    // Counting principles, permutations and combinations > worked example > h3
    "Arranging books with a separation constraint (Gap method)": "隣り合わない条件で本を並べる（間に入れる方法）",

    // Counting principles, permutations and combinations > worked example > p
    "Four distinct mathematics books and three distinct physics books are placed on a shelf. Find the number of arrangements in which no two physics books are adjacent. <strong>[5 marks]</strong>": "異なる 4 冊の数学の本と異なる 3 冊の物理の本を本棚に 1 列に並べる。どの 2 冊の物理の本も隣り合わない並べ方の総数を求めなさい (Find)。<strong>[5 marks]</strong>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Arrange the 4 unrestricted mathematics books first": "まず制限のない 4 冊の数学の本を並べる",

    // Counting principles, permutations and combinations > worked example > p
    "Arranging the 4 mathematics books creates fixed slots around them where physics books can sit safely.": "4 冊の数学の本を並べることで、物理の本を安全に入れられるすき間ができます。",

    // Counting principles, permutations and combinations > worked example > maths line
    "4! = 24 ways <b>[M1]</b>": "4! = 24 通り <b>[M1]</b>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Count the gaps and place the 3 distinct physics books": "すき間の数を数え、異なる 3 冊の物理の本を配置する",

    // Counting principles, permutations and combinations > worked example > p
    "4 books create 5 gaps: <code>_ M _ M _ M _ M _</code>. Since the physics books are distinct, order matters when filling 3 of the 5 gaps.": "4 冊の本により 5 個のすき間ができます：<code>_ M _ M _ M _ M _</code>。物理の本はすべて異なるため、5 個のすき間から 3 個を選んで入れるときは順序を区別します。",

    // Counting principles, permutations and combinations > worked example > maths line
    "<sup>5</sup>P<sub>3</sub> = 5 × 4 × 3 = 60 ways <b>[M1 A1]</b>": "<sup>5</sup>P<sub>3</sub> = 5 × 4 × 3 = 60 通り <b>[M1 A1]</b>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Multiply the two independent stages": "2 つの独立した段階の数を掛ける",

    // Counting principles, permutations and combinations > worked example > p
    "By the multiplication principle, combine the math arrangements with the gap placements.": "積の法則により、数学の本の並べ方とすき間への配置を掛け合わせます。",

    // Counting principles, permutations and combinations > try it > p
    "A 5-person committee is chosen from 6 physicists and 4 mathematicians. How many different committees contain <strong>at least 3 physicists</strong>?": "6 人の物理学者と 4 人の数学者から 5 人の委員会を選ぶ。<strong>少なくとも 3 人の物理学者</strong>が含まれる委員会は何通りありますか？",

    // Counting principles, permutations and combinations > try it > li
    "Split into mutually exclusive exact cases: (3 physicists, 2 mathematicians), (4 physicists, 1 mathematician), and (5 physicists, 0 mathematicians).": "互いに排反な場合分けをします：(物理学者 3 人, 数学者 2 人)、(物理学者 4 人, 数学者 1 人)、(物理学者 5 人, 数学者 0 人)。",

    // Counting principles, permutations and combinations > try it > li
    "Compute <span class=\"chem\">6C3 × 4C2 + 6C4 × 4C1 + 6C5 × 4C0</span>.": "<span class=\"chem\">6C3 × 4C2 + 6C4 × 4C1 + 6C5 × 4C0</span> を計算します。",

    // Counting principles, permutations and combinations > data-title attribute
    "Counting, permutations & combinations: quick check": "場合の数・順列・組合せ：確認問題",

    // Partial fractions > data-toc attribute
    // Partial fractions > h2
    "Partial fractions": "部分分数分解",

    // Partial fractions > p
    "Before you can integrate a rational function or expand it as a binomial series, you often need to split a single fraction with a factored denominator into a sum of simpler fractions. This reverse-addition process is called <dfn data-def=\"Splitting a rational expression P(x)/((ax+b)(cx+d)) into a sum of simpler fractions with linear denominators.\">partial fraction decomposition</dfn>.": "有理関数を積分したり二項級数として展開したりする前に、因数分解された分母をもつ 1 つの分数を、より簡単な分数の和に分解する必要がよくあります。この通分の逆の操作を<dfn data-def=\"有理式 P(x)/((ax+b)(cx+d)) を、1 次式を分母とする簡単な分数の和に分解すること。\">部分分数分解 <span class=\"en-term\">(partial fraction decomposition)</span></dfn> といいます。",

    // Partial fractions > data-def attribute
    "Splitting a rational expression P(x)/((ax+b)(cx+d)) into a sum of simpler fractions with linear denominators.": "有理式 P(x)/((ax+b)(cx+d)) を、1 次式を分母とする簡単な分数の和に分解すること。",

    // Partial fractions > equation > maths line
    "<span class=\"frac\"><span><i>px</i><sup>2</sup> + <i>qx</i> + <i>r</i></span><span>(<i>x</i> − <i>a</i>)(<i>x</i> − <i>b</i>)</span></span> = <i>K</i> + <span class=\"frac\"><span><i>A</i></span><span><i>x</i> − <i>a</i></span></span> + <span class=\"frac\"><span><i>B</i></span><span><i>x</i> − <i>b</i></span></span> (improper: an extension beyond the guide; divide first)": "<span class=\"frac\"><span><i>px</i><sup>2</sup> + <i>qx</i> + <i>r</i></span><span>(<i>x</i> − <i>a</i>)(<i>x</i> − <i>b</i>)</span></span> = <i>K</i> + <span class=\"frac\"><span><i>A</i></span><span><i>x</i> − <i>a</i></span></span> + <span class=\"frac\"><span><i>B</i></span><span><i>x</i> − <i>b</i></span></span> （仮分数式：ガイドの範囲を超える発展内容。まず割り算）",

    // Partial fractions > key idea > p
    "<strong>Always check the degree first!</strong><br> The syllabus only requires proper fractions (numerator of lower degree than the denominator). If an improper fraction does appear (an extension, normally with the division step guided), check this first: if the numerator’s degree is <strong>greater than or equal to</strong> the denominator’s degree (e.g. quadratic over quadratic), you <strong>must</strong> do polynomial division (or split off the leading constant <span class=\"chem\">K = p / (ac)</span>) before writing <span class=\"chem\">A / (ax + b) + B / (cx + d)</span>.": "<strong>最初に必ず次数を確認しましょう！</strong><br> シラバスで必要なのは真分数式（分子の次数が分母より低いもの）だけです。仮分数式が出る場合（発展内容で、通常は割り算の手順が誘導されます）は、まず確認しましょう。分子の次数が分母の次数<strong>以上</strong>（例：2 次式 / 2 次式）のときは、<span class=\"chem\">A / (ax + b) + B / (cx + d)</span> と書く前に<strong>必ず</strong>整式の割り算を行うか、定数項 <span class=\"chem\">K = p / (ac)</span> を取り出さなければなりません。",

    // Partial fractions > exam tip (shown in English + translation) > p
    "<strong>Fastest Paper 1 method (Heaviside substitution):</strong> Multiply both sides by the denominator to get <span class=\"chem\">px + q ≡ A(cx + d) + B(ax + b)</span>, then substitute the root of each linear factor (<span class=\"chem\">x = -b/a</span> and <span class=\"chem\">x = -d/c</span>). One bracket vanishes each time, giving <span class=\"chem\">A</span> and <span class=\"chem\">B</span> in two lines.": "<strong>Paper 1 で最速の方法（ヘヴィサイドの代入法）：</strong> 両辺に分母を掛けて <span class=\"chem\">px + q ≡ A(cx + d) + B(ax + b)</span> とし、各 1 次因数の解（<span class=\"chem\">x = -b/a</span> と <span class=\"chem\">x = -d/c</span>）を代入します。毎回片方の括弧が 0 になるため、2 行で <span class=\"chem\">A</span> と <span class=\"chem\">B</span> が求まります。",

    // Partial fractions > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> In IB Math AA HL (1.11), partial fractions are restricted to denominators with <strong>at most two distinct linear factors</strong>. You do <strong>not</strong> need repeated linear factors (<span class=\"chem\">A/(x-a) + B/(x-a)^2</span>) or irreducible quadratic factors (<span class=\"chem\">(Ax+B)/(x^2+c^2)</span>), even though AI tools often include them. Improper fractions (numerator degree ≥ denominator degree) are also beyond the guide; they would only appear with the division step given. The improper worked example below is an extension.": "<strong>IB の範囲外：</strong> IB Math AA HL (1.11) の部分分数分解では、分母は<strong>最大 2 つの異なる 1 次式の積</strong>に限られます。AI ツールなどにはよく出てきますが、重解の 1 次因数（<span class=\"chem\">A/(x-a) + B/(x-a)^2</span>）や既約な 2 次因数（<span class=\"chem\">(Ax+B)/(x^2+c^2)</span>）は<strong>不要</strong>です。仮分数式（分子の次数 ≥ 分母の次数）もガイドの範囲外で、出題されるとしても割り算の手順が与えられます。下の仮分数式の例題は発展内容です。",

    // Partial fractions > worked example > h3
    "Extension: decomposing an improper rational expression into partial fractions": "発展：仮分数の有理式を部分分数分解する",

    // Partial fractions > worked example > p
    "Express <span class=\"chem\">(x^2 + 6x - 1) / ((x - 1)(x + 2))</span> in the form <span class=\"chem\">A + B / (x - 1) + C / (x + 2)</span>. <strong>[5 marks]</strong>": "<span class=\"chem\">(x^2 + 6x - 1) / ((x - 1)(x + 2))</span> を <span class=\"chem\">A + B / (x - 1) + C / (x + 2)</span> の形で表しなさい。<strong>[5 marks]</strong>",

    // Partial fractions > worked example > data-title attribute
    "Clear the denominator into an identity": "分母を払って恒等式にする",

    // Partial fractions > worked example > p
    "Multiply both sides by (x − 1)(x + 2) so we can find A, B, and C cleanly.": "両辺に (x − 1)(x + 2) を掛けて、A、B、C を求めやすくします。",

    // Partial fractions > worked example > data-title attribute
    "Match the x² coefficient to find A": "x² の係数を比較して A を求める",

    // Partial fractions > worked example > p
    "Only A(x − 1)(x + 2) produces an x² term on the right-hand side.": "右辺で x² の項を作るのは A(x − 1)(x + 2) だけです。",

    // Partial fractions > worked example > data-title attribute
    "Substitute x = 1 and x = −2 to find B and C": "x = 1 と x = −2 を代入して B と C を求める",

    // Partial fractions > worked example > p
    "Choosing the roots of the linear factors eliminates the other unknowns immediately.": "1 次因数の解を代入すると、他の未知数がすぐに消えます。",

    // Partial fractions > try it > p
    "Given that <span class=\"chem\">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class=\"chem\">A</span>.": "<span class=\"chem\">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span> が成り立つとき、<span class=\"chem\">A</span> の値を求めなさい (Find)。",

    // Partial fractions > try it > li
    "Write <span class=\"chem\">7x - 1 = A(x + 2) + B(x - 1)</span>.": "<span class=\"chem\">7x - 1 = A(x + 2) + B(x - 1)</span> と書きます。",

    // Partial fractions > try it > li
    "Substitute <span class=\"chem\">x = 1</span> so the <span class=\"chem\">B</span> term vanishes.": "<span class=\"chem\">x = 1</span> を代入して <span class=\"chem\">B</span> の項を消します。",

    // The extended binomial theorem for rational indices > data-toc attribute
    "Extended binomials": "二項定理の拡張",

    // The extended binomial theorem for rational indices > h2
    "The extended binomial theorem for rational indices": "有理数指数に対する二項定理の拡張",

    // The extended binomial theorem for rational indices > p
    "In Topic 1.2, <span class=\"chem\">(a + b)^n</span> with <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> always stopped after <span class=\"chem\">n + 1</span> terms. When <span class=\"chem\">n</span> is negative or fractional (<span class=\"chem\">n</span> ∈ ℚ), the expansion <strong>never terminates</strong>—it becomes an infinite series that only converges when the variable term has magnitude strictly less than <span class=\"chem\">1</span>.": "Topic 1.2 では、<span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> のときの <span class=\"chem\">(a + b)^n</span> は常に <span class=\"chem\">n + 1</span> 項で終わりました。しかし <span class=\"chem\">n</span> が負の数や分数（<span class=\"chem\">n</span> ∈ ℚ）になると、展開は<strong>無限に続き</strong>、変数の項の絶対値が <span class=\"chem\">1</span> より真に小さいときにのみ収束する無限級数になります。",

    // The extended binomial theorem for rational indices > formula booklet note > p
    "<strong>Section 1.10 of your Formula Booklet</strong> gives the extended binomial series for <span class=\"chem\">n</span> ∈ ℚ in the form <span class=\"chem\">(a + b)^n = a^n(1 + n(b/a) + (n(n - 1)/2!)(b/a)^2 + ...)</span>. The <span class=\"chem\">(1 + x)^n</span> version below, valid for <span class=\"chem\">|x| &lt; 1</span>, is the special case <span class=\"chem\">a = 1</span>, <span class=\"chem\">b = x</span>; the validity condition is not printed, so learn it:": "<strong>公式集（Formula booklet）の Section 1.10</strong> には、<span class=\"chem\">n</span> ∈ ℚ に対する拡張二項級数が <span class=\"chem\">(a + b)^n = a^n(1 + n(b/a) + (n(n - 1)/2!)(b/a)^2 + ...)</span> の形で載っています。下の <span class=\"chem\">(1 + x)^n</span> の形（<span class=\"chem\">|x| &lt; 1</span> で成り立つ）は <span class=\"chem\">a = 1</span>、<span class=\"chem\">b = x</span> の特別な場合です。成り立つ範囲の条件は載っていないので覚えておきましょう：",

    // The extended binomial theorem for rational indices > equation > maths line
    "(<i>a</i> + <i>bx</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><span class=\"big\">(</span>1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">)</span><sup><i>n</i></sup> valid for <span class=\"big\">|</span><span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">|</span> &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"big\">|</span><span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span><span class=\"big\">|</span>": "(<i>a</i> + <i>bx</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><span class=\"big\">(</span>1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">)</span><sup><i>n</i></sup> 収束範囲：<span class=\"big\">|</span><span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">|</span> &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"big\">|</span><span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span><span class=\"big\">|</span>",

    // The extended binomial theorem for rational indices > widget > data-title attribute
    "Extended binomial approximation & validity interval": "拡張二項近似と収束範囲",

    // The extended binomial theorem for rational indices > widget > figcaption
    "Compare the exact curve with its linear (<i>N</i> = 1), quadratic (<i>N</i> = 2), and cubic (<i>N</i> = 3) binomial approximations. Notice how the polynomial hugs the curve inside the validity interval (−<i>R</i>, <i>R</i>) and diverges outside it.": "元の正確な曲線と、1 次 (<i>N</i> = 1)・2 次 (<i>N</i> = 2)・3 次 (<i>N</i> = 3) の二項近似を比較してみましょう。収束範囲 (−<i>R</i>, <i>R</i>) の内側では多項式が曲線にぴったり寄り添い、外側では発散する様子がわかります。",

    // The extended binomial theorem for rational indices > common mistake > p
    "<strong>Three common extended-binomial mistakes:</strong><br> 1. <strong>Forgetting <span class=\"chem\">a^n</span> when factoring:</strong> <span class=\"chem\">(4 - x)^{-1/2} = 4^{-1/2}(1 - x/4)^{-1/2} = (1/2)(1 - x/4)^{-1/2}</span>, not <span class=\"chem\">4(1 - x/4)^{-1/2}</span>.<br> 2. <strong>Dropping negative signs inside <span class=\"chem\">u</span>:</strong> in <span class=\"chem\">(1 - 3x)^{-2}</span>, <span class=\"chem\">u = -3x</span>, so <span class=\"chem\">u^2 = +9x^2</span>.<br> 3. <strong>Taking the union instead of the intersection of validity intervals:</strong> if one partial fraction is valid for <span class=\"chem\">|x| &lt; 1</span> and the other for <span class=\"chem\">|x| &lt; 2</span>, their sum is only valid where <em>both</em> converge: <span class=\"chem\">|x| &lt; 1</span>.": "<strong>拡張二項展開でよくある 3 つのミス：</strong><br> 1. <strong>くくり出すときに <span class=\"chem\">a^n</span> を忘れる：</strong> <span class=\"chem\">(4 - x)^{-1/2} = 4^{-1/2}(1 - x/4)^{-1/2} = (1/2)(1 - x/4)^{-1/2}</span> であり、<span class=\"chem\">4(1 - x/4)^{-1/2}</span> ではありません。<br> 2. <strong><span class=\"chem\">u</span> の中のマイナス符号を落とす：</strong> <span class=\"chem\">(1 - 3x)^{-2}</span> では <span class=\"chem\">u = -3x</span> なので <span class=\"chem\">u^2 = +9x^2</span> となります。<br> 3. <strong>収束範囲の共通部分ではなく和集合をとってしまう：</strong> 一方の部分分数が <span class=\"chem\">|x| &lt; 1</span>、もう一方が <span class=\"chem\">|x| &lt; 2</span> で収束するとき、その和が有効なのは<em>両方</em>が収束する <span class=\"chem\">|x| &lt; 1</span> の範囲だけです。",

    // The extended binomial theorem for rational indices > worked example > h3
    "Partial fractions followed by an extended binomial expansion": "部分分数分解からの拡張二項展開",

    // The extended binomial theorem for rational indices > worked example > p
    "Express <span class=\"chem\">f(x) = (5x + 1) / ((1 - x)(2 + x))</span> in partial fractions, and hence find the first three terms of its expansion in ascending powers of <span class=\"chem\">x</span>. State the set of values of <span class=\"chem\">x</span> for which the expansion is valid. <strong>[6 marks]</strong>": "<span class=\"chem\">f(x) = (5x + 1) / ((1 - x)(2 + x))</span> を部分分数分解し、これを用いて (hence) <span class=\"chem\">x</span> の昇べきの順の展開式の最初の 3 項を求めなさい (Find)。また、この展開が有効となる <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。<strong>[6 marks]</strong>",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Decompose f(x) into partial fractions": "f(x) を部分分数分解する",

    // The extended binomial theorem for rational indices > worked example > p
    "Splitting into two linear denominators turns f(x) into two (a + bx)⁻¹ terms we can expand separately.": "2 つの 1 次式の分母に分けることで、f(x) を別々に展開できる 2 つの (a + bx)⁻¹ の形にできます。",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Expand each term up to x²": "各項を x² の項まで展開する",

    // The extended binomial theorem for rational indices > worked example > p
    "Factor 2⁻¹ = 1/2 out of (2 + x)⁻¹ before applying the (1 + u)⁻¹ formula.": "(1 + u)⁻¹ の公式を使う前に、(2 + x)⁻¹ から 2⁻¹ = 1/2 をくくり出します。",

    // The extended binomial theorem for rational indices > worked example > maths line
    "2(1 − <i>x</i>)<sup>−1</sup> = 2(1 + <i>x</i> + <i>x</i><sup>2</sup> + …) = 2 + 2<i>x</i> + 2<i>x</i><sup>2</sup> + … (valid for |<i>x</i>| &lt; 1)": "2(1 − <i>x</i>)<sup>−1</sup> = 2(1 + <i>x</i> + <i>x</i><sup>2</sup> + …) = 2 + 2<i>x</i> + 2<i>x</i><sup>2</sup> + … （|<i>x</i>| &lt; 1 で有効）",

    // The extended binomial theorem for rational indices > worked example > maths line
    "−3(2 + <i>x</i>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> − …) = −<span class=\"frac\"><span>3</span><span>2</span></span> + <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i> − <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup> + … (valid for |<i>x</i>| &lt; 2) <b>[M1]</b>": "−3(2 + <i>x</i>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> − …) = −<span class=\"frac\"><span>3</span><span>2</span></span> + <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i> − <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup> + … （|<i>x</i>| &lt; 2 で有効） <b>[M1]</b>",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Combine like powers and take the intersection of validity intervals": "同類項をまとめ、収束範囲の共通部分をとる",

    // The extended binomial theorem for rational indices > worked example > p
    "Add the coefficients term by term, and choose the stricter convergence condition.": "項ごとに係数を足し合わせ、より厳しい収束条件を選びます。",

    // The extended binomial theorem for rational indices > worked example > maths line
    "<i>f</i>(<i>x</i>) ≈ <b><span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>11</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b> <b>[A1 R1]</b>": "<i>f</i>(<i>x</i>) ≈ <b><span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>11</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>、<b>|<i>x</i>| &lt; 1</b> で有効 <b>[A1 R1]</b>",

    // The extended binomial theorem for rational indices > worked example > p
    "1/2 + (11/4)x + (13/8)x², valid for |x| &lt; 1": "1/2 + (11/4)x + (13/8)x²（|x| &lt; 1 で有効）",

    // The extended binomial theorem for rational indices > try it > p
    "Find the coefficient of <span class=\"chem\">x^2</span> in the binomial expansion of <span class=\"chem\">(4 - x)^{-1/2}</span> (enter an exact fraction like <code>5/128</code> or a 3 s.f. decimal).": "<span class=\"chem\">(4 - x)^{-1/2}</span> の二項展開における <span class=\"chem\">x^2</span> の係数を求めなさい (Find)（<code>5/128</code> のような厳密な分数、または有効数字 3 桁の小数で入力してください）。",

    // The extended binomial theorem for rational indices > try it > li
    "Factor out <span class=\"chem\">4^{-1/2} = 1/2</span> first: <span class=\"chem\">(1/2)(1 - x/4)^{-1/2}</span>.": "まず <span class=\"chem\">4^{-1/2} = 1/2</span> をくくり出します：<span class=\"chem\">(1/2)(1 - x/4)^{-1/2}</span>。",

    // The extended binomial theorem for rational indices > try it > li
    "The <span class=\"chem\">x^2</span> term inside the bracket is <span class=\"chem\">((-1/2)(-3/2)/2)(-x/4)^2 = (3/8)(x^2/16) = (3/128)x^2</span>. Multiply by <span class=\"chem\">1/2</span>.": "括弧内の <span class=\"chem\">x^2</span> の項は <span class=\"chem\">((-1/2)(-3/2)/2)(-x/4)^2 = (3/8)(x^2/16) = (3/128)x^2</span> です。これに <span class=\"chem\">1/2</span> を掛けます。",

    // The extended binomial theorem for rational indices > data-title attribute
    "Partial fractions & extended binomials: mixed exam practice": "部分分数分解と二項定理の拡張：総合演習",

    // widget string (assets/js/widgets-t1-3.js)
    "Counting mode": "数え方のモード",

    // widget string (assets/js/widgets-t1-3.js)
    "Compare nPr vs nCr (why divide by r!)": "nPr と nCr の比較（なぜ r! で割るのか）",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue method: A and B must sit together": "ブロック法：A と B が隣り合う",

    // widget string (assets/js/widgets-t1-3.js)
    "Gap method: A and B must NOT sit together": "間に入れる方法：A と B が隣り合わない",

    // widget string (assets/js/widgets-t1-3.js)
    "Total items n": "全体の個数 n",

    // widget string (assets/js/widgets-t1-3.js)
    "Chosen items r": "選ぶ個数 r",

    // widget string (assets/js/widgets-t1-3.js)
    "Ordered count": "順列の総数",

    // widget string (assets/js/widgets-t1-3.js)
    "Comparison / formula": "比較・公式",

    // widget string (assets/js/widgets-t1-3.js)
    "Key takeaway": "ポイント",

    // widget string (assets/js/widgets-t1-3.js)
    "Each committee of {r} collapses {rf} orderings into 1.": "{r} 人の各委員会では、{rf} 通りの並び順が 1 通りにまとまります。",

    // widget string (assets/js/widgets-t1-3.js)
    "Sample subset of {r} items from {n}:": "{n} 個から {r} 個を選んだ部分集合の例：",

    // widget string (assets/js/widgets-t1-3.js)

    // widget string (assets/js/widgets-t1-3.js)

    // widget string (assets/js/widgets-t1-3.js)
    "orderings": "通りの並び順",

    // widget string (assets/js/widgets-t1-3.js)
    "Unconstrained": "制限なし",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue A & B into 1 super-item → {m} items to arrange, then × 2! inside.": "A と B を 1 つにまとめる → {m} 個を並べ、内部の並び替え × 2!。",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue method: treat (AB) as a single super-item:": "ブロック法：(AB) を 1 つのまとまりとみなす：",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {m} blocks ({m}!) × internal swaps (AB or BA, 2!) = {ans}": "{m} 個のブロックの並び ({m}!) × 内部の入れ替え (AB または BA, 2!) = {ans}",

    // widget string (assets/js/widgets-t1-3.js)
    "Complement": "余事象",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {k} other items first → {g} gaps available for A and B.": "まず他の {k} 個を並べる → A と B が入れるすき間は {g} 個。",

    // widget string (assets/js/widgets-t1-3.js)
    "Gap method: arrange the {k} other items first to create {g} gaps:": "間に入れる方法：まず他の {k} 個を並べて {g} 個のすき間を作る：",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {k} items ({k}!) × place A & B into 2 of {g} gaps ({g}P2) = {ans}": "{k} 個の並び ({k}!) × {g} 個のすき間のうち 2 箇所に A と B を配置 ({g}P2) = {ans}",

    // widget string (assets/js/widgets-t1-3.js)
    "Function f(x)": "関数 f(x)",

    // widget string (assets/js/widgets-t1-3.js)
    "Approximation degree N": "近似次数 N",

    // widget string (assets/js/widgets-t1-3.js)
    "Test point x₀": "評価点 x₀",

    // widget string (assets/js/widgets-t1-3.js)
    "Exact f(x₀)": "厳密値 f(x₀)",

    // widget string (assets/js/widgets-t1-3.js)
    "Binomial P<sub>N</sub>(x₀)": "二項近似 P<sub>N</sub>(x₀)",

    // widget string (assets/js/widgets-t1-3.js)
    "Error & validity": "誤差と収束範囲",

    // widget string (assets/js/widgets-t1-3.js)
    "Undefined": "未定義",

    // widget string (assets/js/widgets-t1-3.js)
    "Inside (−R, R)": "(−R, R) の内側",

    // widget string (assets/js/widgets-t1-3.js)
    "Outside (−R, R)!": "(−R, R) の外側！",

    // widget string (assets/js/widgets-t1-3.js)
    "Outside domain / asymptote": "定義域外 / 漸近線",

    // widget string (assets/js/widgets-t1-3.js)
    "Extended binomial approximation vs exact rational/radical function": "拡張二項近似と元の有理関数・無理関数の比較",

    // widget string (assets/js/widgets-t1-3.js)
    "Exact f(x)": "厳密値 f(x)",

    // widget string (assets/js/widgets-t1-3.js)
    "Degree N = {n} polynomial": "{n} 次近似多項式",

    "One unordered selection {set} corresponds to {rf} ordered arrangements:": "1 つの組合せ {set} は {rf} 通りの順列に対応します：",
    "One unordered selection {set} corresponds to 1 ordered arrangement:": "1 つの組合せ {set} は 1 通りの順列に対応します：",

    // What you need to be able to do > p
    "Before you start: this page builds on <sup><i>n</i></sup>C<sub><i>r</i></sub> and the binomial theorem for positive integer powers from <a href=\"t1-2.html\">1.2 Exponents, logarithms and the binomial theorem</a>. Partial fractions are used again to integrate rational functions in <a href=\"t5-3.html\">5.3 First principles, L’Hôpital, implicit, parts and volumes</a>.": "始める前に：このページは <a href=\"t1-2.html\">1.2 指数・対数と二項定理</a> の <sup><i>n</i></sup>C<sub><i>r</i></sub> と正の整数乗の二項定理を前提にしています。部分分数分解は <a href=\"t5-3.html\">5.3 微分の定義・ロピタルの定理・陰関数・部分積分と回転体の体積</a> で有理関数の積分に再び使います。",

    // Exam-style practice > h2
    "Exam-style practice": "実戦形式の演習",

    // Exam-style practice > p
    "Three sets of original AHL questions on counting, partial fractions and extended binomial series, including Paper 2 (GDC) problems and Paper 3 investigations.": "場合の数、部分分数分解、二項定理の拡張に関するオリジナルの AHL 演習 3 セットです。Paper 2 (GDC) の問題と Paper 3 の探究問題も含みます。",

    // Exam-style practice > h3
    "Foundation: nPr, nCr, simple expansions and partial fractions": "基礎：nPr・nCr、簡単な展開と部分分数分解",

    // Exam-style practice > data-title attribute
    "1.3 foundation": "1.3 基礎",

    // Exam-style practice > h3
    "Exam standard: Paper 1, Paper 2 and Paper 3": "試験標準：Paper 1・Paper 2・Paper 3",

    // Exam-style practice > data-title attribute
    "1.3 exam standard": "1.3 試験標準",

    // Exam-style practice > h3
    "Challenge: decoding unfamiliar counting and series problems": "発展：見慣れない場合の数・級数の問題を読み解く",

    // Exam-style practice > data-title attribute
    "1.3 challenge": "1.3 発展",
  }
});
