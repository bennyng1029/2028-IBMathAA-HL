/* t1-3 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-3', {
  strings: {

    // page title (browser tab)
    "1.3 Counting, partial fractions and extended binomials | Analysis Lab": "1.3 경우의 수, 부분분수 분해 및 확장된 이항정리 | Analysis Lab",

    // Counting, partial fractions and extended binomials > page header > p
    "Topic 1.3 · AHL 1.10–1.11 · Additional HL": "Topic 1.3 · AHL 1.10–1.11 · 추가 HL",

    // Counting, partial fractions and extended binomials > page header > h1
    "Counting, partial fractions and extended binomials": "경우의 수, 부분분수 분해와 확장된 이항정리",

    // Counting, partial fractions and extended binomials > page header > span
    "When does order change a count, how can we split a rational expression into simpler fractions, and when does an infinite binomial series converge?": "순서가 경우의 수를 바꾸는 때는 언제일까요? 유리식을 더 간단한 분수로 어떻게 쪼갤 수 있으며, 무한 이항급수가 수렴하는 조건은 무엇일까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > p
    "Everything on this page is Additional HL (AHL 1.10–1.11). Tick each skill when you can do it cleanly without looking at your notes.": "이 페이지의 모든 내용은 추가 HL(AHL 1.10–1.11) 범위예요. 노트를 보지 않고 깔끔하게 풀 수 있는 항목에 체크하세요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Distinguish between ordered arrangements (<span class=\"chem\">nPr</span>) and unordered selections (<span class=\"chem\">nCr</span>), and solve algebraic equations involving factorials.": "순서를 고려한 배열(순열, <span class=\"chem\">nPr</span>)과 순서를 고려하지 않은 선택(조합, <span class=\"chem\">nCr</span>)을 구분하고, 계승(팩토리얼)이 포함된 대수 방정식을 풀 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve constrained counting problems using the glue/block method (“together”), gap or complement method (“never together”), and complement (“at least one”).": "이웃하는 경우(묶기/블록 방법), 이웃하지 않는 경우(끼워 넣기/여사건), 그리고 “적어도 하나” 조건(여사건)을 이용해 제한 조건이 있는 경우의 수 문제를 풀 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Decompose rational expressions with at most two distinct linear factors in the denominator (numerator of lower degree) into partial fractions.": "분모가 최대 두 개의 서로 다른 일차식으로 이루어지고 분자의 차수가 더 낮은 유리식을 부분분수로 분해할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Expand <span class=\"chem\">(1 + x)^n</span> and <span class=\"chem\">(a + bx)^n</span> for negative or fractional indices <span class=\"chem\">n</span> ∈ ℚ by factoring out <span class=\"chem\">a^n</span> first.": "음수나 분수 지수 <span class=\"chem\">n</span> ∈ ℚ에 대하여 <span class=\"chem\">a^n</span>을 먼저 묶어 내어 <span class=\"chem\">(1 + x)^n</span>과 <span class=\"chem\">(a + bx)^n</span>을 전개할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "State the exact interval of validity <span class=\"chem\">|x| &lt; |a / b|</span>, and take the intersection of intervals when combining partial fractions.": "유효 수렴 구간 <span class=\"chem\">|x| &lt; |a / b|</span>을 정확히 답하고, 부분분수를 결합할 때 두 구간의 교집합을 구할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 해법을 쓸지 파악하기",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Counting, partial fractions and extended binomials": "문제 디코더 — 경우의 수, 부분분수 분해 및 확장된 이항정리",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "“Arrangement / row / digits / password / seating” (order matters)": "“배열 / 일렬로 세우기 / 자릿수 / 비밀번호 / 좌석 배치” (순서가 중요함)",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Permutations</strong> <span class=\"chem\">nPr = n! / (n - r)!</span> or slot-filling.": "<strong>순열</strong> <span class=\"chem\">nPr = n! / (n - r)!</span> 또는 빈칸 채우기(곱의 법칙).",

    // Question decoder: spotting which technique to use > table > td
    "Draw slots <code>[ ][ ][ ]</code> and fill the most restricted slot first (e.g. units digit or leading digit).": "빈칸 <code>[ ][ ][ ]</code>을 그리고 제한 조건이 가장 까다로운 자리(예: 일의 자리나 맨 앞 자리)부터 채우세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Committee / group / team / hand of cards” (order does not matter)": "“위원회 / 모둠 / 팀 / 카드 뽑기” (순서가 중요하지 않음)",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Combinations</strong> <span class=\"chem\">nCr = n! / (r!(n - r)!)</span>.": "<strong>조합</strong> <span class=\"chem\">nCr = n! / (r!(n - r)!)</span>.",

    // Question decoder: spotting which technique to use > table > td
    "Multiply across independent choices (AND) and add across mutually exclusive cases (OR).": "독립적인 선택(그리고, AND)은 곱하고, 서로 배반인 경우(또는, OR)는 더하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Items A and B must sit together”": "“A와 B가 반드시 이웃하여 앉아야 한다”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Glue / Block method</strong>: tie the <span class=\"chem\">k</span> items into 1 super-item.": "<strong>묶기 (블록) 방법</strong>: <span class=\"chem\">k</span>개의 대상을 1개의 큰 묶음으로 취급해요.",

    // Question decoder: spotting which technique to use > table > td
    "Arrange the <span class=\"chem\">(n - k + 1)</span> items, then multiply by <span class=\"chem\">k!</span> for internal arrangements inside the block.": "<span class=\"chem\">(n - k + 1)</span>개를 배열한 뒤, 묶음 내부의 배열 수 <span class=\"chem\">k!</span>을 곱하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Items A and B must never be together”": "“A와 B가 절대 이웃하지 않아야 한다”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Complement</strong> (for 2 items) or <strong>Gap method</strong> (for <span class=\"chem\">k &gt;= 3</span> items).": "<strong>여사건</strong> (2개일 때) 또는 <strong>끼워 넣기 (빈자리) 방법</strong> (<span class=\"chem\">k &gt;= 3</span>개일 때).",

    // Question decoder: spotting which technique to use > table > td
    "For 2 items: <span class=\"chem\">n! - (n - 1)! × 2!</span>. For <span class=\"chem\">k &gt;= 3</span> items: arrange the other <span class=\"chem\">n - k</span> items first, then place the <span class=\"chem\">k</span> items into the <span class=\"chem\">n - k + 1</span> gaps.": "2개일 때: <span class=\"chem\">n! - (n - 1)! × 2!</span>. <span class=\"chem\">k &gt;= 3</span>개일 때: 나머지 <span class=\"chem\">n - k</span>개를 먼저 배열한 뒤, <span class=\"chem\">n - k + 1</span>개의 빈자리(양끝 포함)에 <span class=\"chem\">k</span>개를 끼워 넣으세요.",

    // Question decoder: spotting which technique to use > table > th
    "“At least one…”": "“적어도 하나(At least one)…”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Complement method</strong>: <span class=\"chem\">Total unconstrained - Forbidden cases</span>.": "<strong>여사건 이용</strong>: <span class=\"chem\">Total unconstrained - Forbidden cases</span> (전체 경우 − 모두 안 되는 경우).",

    // Question decoder: spotting which technique to use > table > td
    "Faster and avoids double-counting errors compared to listing every valid case.": "가능한 모든 경우를 일일이 나열하는 것보다 빠르고 중복 계산 실수를 막아 줘요.",

    // Question decoder: spotting which technique to use > table > th
    "“Express rational function in partial fractions, hence find its binomial expansion”": "“유리함수를 부분분수로 나타낸 뒤, 이를 이용하여 이항전개를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Split into partial fractions <strong>first</strong>, then factor out <span class=\"chem\">a</span> to write each term as <span class=\"chem\">(1 + u)^{-1}</span> with <span class=\"chem\">|u| &lt; 1</span>.": "<strong>먼저</strong> 부분분수로 분해한 다음, <span class=\"chem\">a</span>를 묶어 내어 각 항을 <span class=\"chem\">|u| &lt; 1</span>인 <span class=\"chem\">(1 + u)^{-1}</span> 꼴로 바꾸세요.",

    // Question decoder: spotting which technique to use > table > td
    "Use Heaviside cover-up to find <span class=\"chem\">A</span> and <span class=\"chem\">B</span> quickly. The overall validity interval is the <strong>intersection</strong> (smaller radius) of the two intervals.": "인수의 근을 대입하는 방법(Heaviside cover-up)으로 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>를 빠르게 구하세요. 전체 유효 구간은 두 구간의 <strong>교집합</strong>(더 좁은 반경)이에요.",

    // Counting principles, permutations and combinations > data-toc attribute
    "Counting & permutations": "경우의 수와 순열",

    // Counting principles, permutations and combinations > h2
    "Counting principles, permutations and combinations": "경우의 수, 순열과 조합",

    // Counting principles, permutations and combinations > p
    "Every counting question starts with one decision: <strong>does order matter?</strong> If swapping two chosen items creates a different outcome (like a 4-digit PIN or a seating plan), you are counting <dfn data-def=\"An ordered arrangement of r items chosen from n distinct items: nPr = n! / (n - r)!.\">permutations</dfn>. If swapping them leaves the outcome unchanged (like a committee or a hand of cards), you are counting <dfn data-def=\"An unordered selection of r items chosen from n distinct items: nCr = n! / (r!(n - r)!).\">combinations</dfn>.": "모든 경우의 수 문제는 하나의 질문에서 시작해요: <strong>순서가 중요한가요?</strong> 뽑은 두 개의 순서를 바꿨을 때 다른 결과가 된다면(예: 4자리 비밀번호, 좌석 배치) <dfn data-def=\"An ordered arrangement of r items chosen from n distinct items: nPr = n! / (n - r)!.\">순열 <span class=\"en-term\">(permutations)</span></dfn>을 세는 것이고, 순서를 바꿔도 같은 결과라면(예: 위원회, 카드 패) <dfn data-def=\"An unordered selection of r items chosen from n distinct items: nCr = n! / (r!(n - r)!).\">조합 <span class=\"en-term\">(combinations)</span></dfn>을 세는 거예요.",

    // Counting principles, permutations and combinations > data-def attribute
    "An ordered arrangement of r items chosen from n distinct items: nPr = n! / (n - r)!.": "서로 다른 n개에서 r개를 택하여 일렬로 배열하는 경우의 수: nPr = n! / (n - r)!.",

    // Counting principles, permutations and combinations > data-def attribute
    "An unordered selection of r items chosen from n distinct items: nCr = n! / (r!(n - r)!).": "서로 다른 n개에서 순서를 고려하지 않고 r개를 택하는 경우의 수: nCr = n! / (r!(n - r)!).",

    // Counting principles, permutations and combinations > formula booklet note > p
    "<strong>Section 1.10 of your Formula Booklet</strong> gives the permutation formula alongside the combination formula from Section 1.9:": "<strong>공식집(Formula Booklet) Section 1.10</strong>에는 Section 1.9의 조합 공식과 함께 순열 공식이 수록되어 있어요:",

    // Counting principles, permutations and combinations > equation > dd
    "total number of distinct items available": "전체 서로 다른 대상의 개수",

    // Counting principles, permutations and combinations > equation > dd
    "number of items chosen or arranged (<span class=\"chem\">0 &lt;= r &lt;= n</span>)": "선택하거나 배열할 대상의 개수 (<span class=\"chem\">0 &lt;= r &lt;= n</span>)",

    // Counting principles, permutations and combinations > equation > dd
    "number of ways to order those <span class=\"chem\">r</span> chosen items": "선택한 <span class=\"chem\">r</span>개를 일렬로 나열하는 방법의 수",

    // Counting principles, permutations and combinations > p
    "When problems add constraints, use the three core IB strategies:": "문제에 제한 조건이 붙을 때는 세 가지 핵심 IB 전략을 사용하세요:",

    // Counting principles, permutations and combinations > li
    "<strong>Glue (Block) method</strong> for <em>“must be together”</em>: wrap the <span class=\"chem\">k</span> items into one super-item, arrange the reduced set of objects, and multiply by <span class=\"chem\">k!</span> for arrangements inside the block.": "<em>“반드시 이웃해야 한다”</em>일 때는 <strong>묶기 (블록) 방법</strong>: <span class=\"chem\">k</span>개의 대상을 하나의 큰 묶음으로 묶어 전체를 배열한 뒤, 묶음 내부의 배열 수 <span class=\"chem\">k!</span>을 곱해요.",

    // Counting principles, permutations and combinations > li
    "<strong>Gap (Insertion) method</strong> for <em>“never together”</em>: arrange the <span class=\"chem\">m</span> unrestricted items first in <span class=\"chem\">m!</span> ways. This creates <span class=\"chem\">m + 1</span> gaps (including both ends). Place the <span class=\"chem\">k</span> separated items into <span class=\"chem\">k</span> distinct gaps in <sup><i>m</i>+1</sup>P<sub><i>k</i></sub> ways.": "<em>“이웃하지 않아야 한다”</em>일 때는 <strong>끼워 넣기 (빈자리) 방법</strong>: 제한이 없는 <span class=\"chem\">m</span>개를 먼저 <span class=\"chem\">m!</span>가지로 배열해요. 그러면 양끝을 포함해 <span class=\"chem\">m + 1</span>개의 빈자리가 생겨요. 이 중 <span class=\"chem\">k</span>개의 서로 다른 빈자리에 <span class=\"chem\">k</span>개를 <sup><i>m</i>+1</sup>P<sub><i>k</i></sub>가지로 배치하세요.",

    // Counting principles, permutations and combinations > li
    "<strong>Complement method</strong> for <em>“at least one”</em> or <em>“2 items not together”</em>: subtract the forbidden count from the unconstrained total.": "<em>“적어도 하나”</em> 또는 <em>“2개가 이웃하지 않음”</em>일 때는 <strong>여사건 방법</strong>: 전체 경우의 수에서 금지된 경우의 수를 빼세요.",

    // Counting principles, permutations and combinations > widget > data-title attribute
    "Arrangement & committee builder": "배열(순열) 및 위원회(조합) 탐색기",

    // Counting principles, permutations and combinations > widget > figcaption
    "Switch between comparing <sup><i>n</i></sup>P<sub><i>r</i></sub> vs <sup><i>n</i></sup>C<sub><i>r</i></sub>, the glue method (A and B together), and the gap/complement method (A and B separated).": "<sup><i>n</i></sup>P<sub><i>r</i></sub>과 <sup><i>n</i></sup>C<sub><i>r</i></sub> 비교, 묶기 방법(A와 B 이웃), 끼워 넣기/여사건 방법(A와 B 분리) 모드를 전환하며 확인해 보세요.",

    // Counting principles, permutations and combinations > common mistake > p
    "<strong>Two classic counting traps:</strong><br> 1. <strong>Never use <span class=\"chem\">Total - (all k together)</span> when <span class=\"chem\">k &gt;= 3</span> items must be separated!</strong> If 3 vowels must not be adjacent, subtracting “all 3 together” still leaves arrangements where 2 vowels sit side by side. Always use the <strong>Gap method</strong> for 3 or more separated items.<br> 2. <strong>Never double-count in “at least” selections:</strong> picking 1 required engineer in <span class=\"chem\">5C1</span> ways and then picking 2 more people from the remaining 8 candidates counts pairs of engineers twice. Split into mutually exclusive exact counts (or use the complement).": "<strong>경우의 수에서 자주 빠지는 두 가지 함정:</strong><br> 1. <strong><span class=\"chem\">k &gt;= 3</span>개가 이웃하지 않아야 할 때 절대 <span class=\"chem\">Total - (all k together)</span>를 쓰지 마세요!</strong> 모음 3개가 모두 이웃하지 않아야 할 때 “3개가 모두 붙어 있는 경우”만 빼면, 2개만 이웃한 경우가 그대로 남아요. 3개 이상을 떨어뜨릴 때는 항상 <strong>끼워 넣기 방법</strong>을 쓰세요.<br> 2. <strong>“적어도 ~” 문제에서 중복 계산하지 마세요:</strong> 필수 엔지니어 1명을 <span class=\"chem\">5C1</span>로 먼저 뽑고 나머지 8명에서 2명을 더 뽑으면 엔지니어가 2명 뽑히는 경우가 중복으로 세어져요. 정확한 인원수별 배반사건으로 나누어 더하거나 여사건을 이용하세요.",

    // Counting principles, permutations and combinations > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> Permutations of indistinct objects (<span class=\"chem\">n! / (n_1! n_2!)</span>), Stars-and-Bars (<span class=\"chem\">(n+k-1)C(k-1)</span>), circular arrangements (seating round a table) and derangements are <strong>not</strong> required formulas in the IB AA HL syllabus.": "<strong>IB 시험 범위 외 내용:</strong> 같은 것이 있는 순열(<span class=\"chem\">n! / (n_1! n_2!)</span>), 중복조합(<span class=\"chem\">(n+k-1)C(k-1)</span>), 원순열(원탁에 앉히기), 교란순열(완전순열)은 IB AA HL 교육과정에서 필수 공식이 <strong>아니에요</strong>.",

    // Counting principles, permutations and combinations > worked example > h3
    "Arranging books with a separation constraint (Gap method)": "이웃하지 않도록 책 배열하기 (끼워 넣기 방법)",

    // Counting principles, permutations and combinations > worked example > p
    "Four distinct mathematics books and three distinct physics books are placed on a shelf. Find the number of arrangements in which no two physics books are adjacent. <strong>[5 marks]</strong>": "서로 다른 수학책 4권과 서로 다른 물리책 3권을 책장에 일렬로 꽂으려고 해요. 어느 물리책 2권도 서로 이웃하지 않도록 배열하는 방법의 수를 구하시오 (Find). <strong>[5 marks]</strong>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Arrange the 4 unrestricted mathematics books first": "제한이 없는 수학책 4권 먼저 배열하기",

    // Counting principles, permutations and combinations > worked example > p
    "Arranging the 4 mathematics books creates fixed slots around them where physics books can sit safely.": "수학책 4권을 먼저 배열하면 물리책이 안전하게 들어갈 수 있는 고정된 자리가 생겨요.",

    // Counting principles, permutations and combinations > worked example > maths line
    "4! = 24 ways <b>[M1]</b>": "4! = 24가지 <b>[M1]</b>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Count the gaps and place the 3 distinct physics books": "빈자리 개수를 세고 서로 다른 물리책 3권 배치하기",

    // Counting principles, permutations and combinations > worked example > p
    "4 books create 5 gaps: <code>_ M _ M _ M _ M _</code>. Since the physics books are distinct, order matters when filling 3 of the 5 gaps.": "책 4권 사이와 양끝에 5개의 빈자리가 생겨요: <code>_ M _ M _ M _ M _</code>. 물리책이 서로 다르므로 5개의 빈자리 중 3개를 택해 배열할 때 순서가 중요해요.",

    // Counting principles, permutations and combinations > worked example > maths line
    "<sup>5</sup>P<sub>3</sub> = 5 × 4 × 3 = 60 ways <b>[M1 A1]</b>": "<sup>5</sup>P<sub>3</sub> = 5 × 4 × 3 = 60가지 <b>[M1 A1]</b>",

    // Counting principles, permutations and combinations > worked example > data-title attribute
    "Multiply the two independent stages": "두 독립적인 단계를 곱하기",

    // Counting principles, permutations and combinations > worked example > p
    "By the multiplication principle, combine the math arrangements with the gap placements.": "곱의 법칙에 의해 수학책 배열 수와 물리책 배치 수를 곱해요.",

    // Counting principles, permutations and combinations > try it > p
    "A 5-person committee is chosen from 6 physicists and 4 mathematicians. How many different committees contain <strong>at least 3 physicists</strong>?": "물리학자 6명과 수학자 4명 중에서 5명의 위원회를 구성하려고 해요. <strong>물리학자가 적어도 3명</strong> 포함되는 위원회는 몇 가지인가요?",

    // Counting principles, permutations and combinations > try it > li
    "Split into mutually exclusive exact cases: (3 physicists, 2 mathematicians), (4 physicists, 1 mathematician), and (5 physicists, 0 mathematicians).": "서로 배반인 정확한 경우로 나누세요: (물리학자 3명, 수학자 2명), (물리학자 4명, 수학자 1명), (물리학자 5명, 수학자 0명).",

    // Counting principles, permutations and combinations > try it > li
    "Compute <span class=\"chem\">6C3 × 4C2 + 6C4 × 4C1 + 6C5 × 4C0</span>.": "<span class=\"chem\">6C3 × 4C2 + 6C4 × 4C1 + 6C5 × 4C0</span>을 계산하세요.",

    // Counting principles, permutations and combinations > data-title attribute
    "Counting, permutations & combinations: quick check": "경우의 수, 순열과 조합: 빠른 확인",

    // Partial fractions > data-toc attribute
    // Partial fractions > h2
    "Partial fractions": "부분분수 분해",

    // Partial fractions > p
    "Before you can integrate a rational function or expand it as a binomial series, you often need to split a single fraction with a factored denominator into a sum of simpler fractions. This reverse-addition process is called <dfn data-def=\"Splitting a rational expression P(x)/((ax+b)(cx+d)) into a sum of simpler fractions with linear denominators.\">partial fraction decomposition</dfn>.": "유리함수를 적분하거나 이항급수로 전개하기 전에, 인수분해된 분모를 가진 하나의 분수를 더 간단한 분수들의 합으로 쪼개야 할 때가 많아요. 통분의 역과정인 이 작업을 <dfn data-def=\"Splitting a rational expression P(x)/((ax+b)(cx+d)) into a sum of simpler fractions with linear denominators.\">부분분수 분해 <span class=\"en-term\">(partial fraction decomposition)</span></dfn>라고 해요.",

    // Partial fractions > data-def attribute
    "Splitting a rational expression P(x)/((ax+b)(cx+d)) into a sum of simpler fractions with linear denominators.": "유리식 P(x)/((ax+b)(cx+d))을 일차식 분모를 가진 더 간단한 분수들의 합으로 분해하는 것.",

    // Partial fractions > equation > maths line
    "<span class=\"frac\"><span><i>px</i><sup>2</sup> + <i>qx</i> + <i>r</i></span><span>(<i>x</i> − <i>a</i>)(<i>x</i> − <i>b</i>)</span></span> = <i>K</i> + <span class=\"frac\"><span><i>A</i></span><span><i>x</i> − <i>a</i></span></span> + <span class=\"frac\"><span><i>B</i></span><span><i>x</i> − <i>b</i></span></span> (improper: an extension beyond the guide; divide first)": "<span class=\"frac\"><span><i>px</i><sup>2</sup> + <i>qx</i> + <i>r</i></span><span>(<i>x</i> − <i>a</i>)(<i>x</i> − <i>b</i>)</span></span> = <i>K</i> + <span class=\"frac\"><span><i>A</i></span><span><i>x</i> − <i>a</i></span></span> + <span class=\"frac\"><span><i>B</i></span><span><i>x</i> − <i>b</i></span></span> (가분수식: 가이드 범위를 넘는 심화 내용, 먼저 나누기)",

    // Partial fractions > key idea > p
    "<strong>Always check the degree first!</strong><br> The syllabus only requires proper fractions (numerator of lower degree than the denominator). If an improper fraction does appear (an extension, normally with the division step guided), check this first: if the numerator’s degree is <strong>greater than or equal to</strong> the denominator’s degree (e.g. quadratic over quadratic), you <strong>must</strong> do polynomial division (or split off the leading constant <span class=\"chem\">K = p / (ac)</span>) before writing <span class=\"chem\">A / (ax + b) + B / (cx + d)</span>.": "<strong>항상 차수를 먼저 확인하세요!</strong><br> 교육과정에서는 진분수식(분자의 차수가 분모보다 낮은 경우)만 요구해요. 가분수식이 나온다면(심화 내용이며 보통 나눗셈 단계를 안내해 줘요) 먼저 확인하세요. 분자의 차수가 분모의 차수보다 <strong>크거나 같으면</strong>(예: 이차식/이차식), <span class=\"chem\">A / (ax + b) + B / (cx + d)</span> 꼴로 쓰기 전에 <strong>반드시</strong> 다항식의 나눗셈을 하거나 상수항 <span class=\"chem\">K = p / (ac)</span>를 먼저 분리해야 해요.",

    // Partial fractions > exam tip (shown in English + translation) > p
    "<strong>Fastest Paper 1 method (Heaviside substitution):</strong> Multiply both sides by the denominator to get <span class=\"chem\">px + q ≡ A(cx + d) + B(ax + b)</span>, then substitute the root of each linear factor (<span class=\"chem\">x = -b/a</span> and <span class=\"chem\">x = -d/c</span>). One bracket vanishes each time, giving <span class=\"chem\">A</span> and <span class=\"chem\">B</span> in two lines.": "<strong>Paper 1 최단 풀이법 (수치대입법 / Heaviside 방법):</strong> 양변에 분모를 곱해 항등식 <span class=\"chem\">px + q ≡ A(cx + d) + B(ax + b)</span>을 만든 뒤, 각 일차 인수를 0으로 만드는 값(<span class=\"chem\">x = -b/a</span>, <span class=\"chem\">x = -d/c</span>)을 대입하세요. 한쪽 괄호가 바로 0이 되므로 두 줄 만에 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>를 구할 수 있어요.",

    // Partial fractions > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> In IB Math AA HL (1.11), partial fractions are restricted to denominators with <strong>at most two distinct linear factors</strong>. You do <strong>not</strong> need repeated linear factors (<span class=\"chem\">A/(x-a) + B/(x-a)^2</span>) or irreducible quadratic factors (<span class=\"chem\">(Ax+B)/(x^2+c^2)</span>), even though AI tools often include them. Improper fractions (numerator degree ≥ denominator degree) are also beyond the guide; they would only appear with the division step given. The improper worked example below is an extension.": "<strong>IB 시험 범위 외 내용:</strong> IB Math AA HL (1.11)에서 부분분수 분해는 분모가 <strong>최대 두 개의 서로 다른 일차식</strong>으로 된 경우로 제한돼요. AI 도구가 자주 포함시키는 거듭제곱 일차 인수(<span class=\"chem\">A/(x-a) + B/(x-a)^2</span>)나 인수분해되지 않는 이차 인수(<span class=\"chem\">(Ax+B)/(x^2+c^2)</span>)는 <strong>필요하지 않아요</strong>. 가분수식(분자의 차수 ≥ 분모의 차수)도 가이드 범위 밖이며, 나온다면 나눗셈 단계가 주어져요. 아래의 가분수식 예제는 심화 내용이에요.",

    // Partial fractions > worked example > h3
    "Extension: decomposing an improper rational expression into partial fractions": "심화: 가분수 유리식을 부분분수로 분해하기",

    // Partial fractions > worked example > p
    "Express <span class=\"chem\">(x^2 + 6x - 1) / ((x - 1)(x + 2))</span> in the form <span class=\"chem\">A + B / (x - 1) + C / (x + 2)</span>. <strong>[5 marks]</strong>": "<span class=\"chem\">(x^2 + 6x - 1) / ((x - 1)(x + 2))</span>를 <span class=\"chem\">A + B / (x - 1) + C / (x + 2)</span> 꼴로 나타내시오. <strong>[5 marks]</strong>",

    // Partial fractions > worked example > data-title attribute
    "Clear the denominator into an identity": "양변에 분모를 곱해 항등식 만들기",

    // Partial fractions > worked example > p
    "Multiply both sides by (x − 1)(x + 2) so we can find A, B, and C cleanly.": "A, B, C를 깔끔하게 구하기 위해 양변에 (x − 1)(x + 2)를 곱해요.",

    // Partial fractions > worked example > data-title attribute
    "Match the x² coefficient to find A": "x²의 계수를 비교해 A 구하기",

    // Partial fractions > worked example > p
    "Only A(x − 1)(x + 2) produces an x² term on the right-hand side.": "우변에서 x² 항을 만들어 내는 것은 A(x − 1)(x + 2)뿐이에요.",

    // Partial fractions > worked example > data-title attribute
    "Substitute x = 1 and x = −2 to find B and C": "x = 1과 x = −2를 대입해 B와 C 구하기",

    // Partial fractions > worked example > p
    "Choosing the roots of the linear factors eliminates the other unknowns immediately.": "일차 인수를 0으로 만드는 값을 대입하면 다른 미지수가 바로 사라져요.",

    // Partial fractions > try it > p
    "Given that <span class=\"chem\">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class=\"chem\">A</span>.": "<span class=\"chem\">(7x - 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>일 때, <span class=\"chem\">A</span>의 값을 구하시오 (Find).",

    // Partial fractions > try it > li
    "Write <span class=\"chem\">7x - 1 = A(x + 2) + B(x - 1)</span>.": "<span class=\"chem\">7x - 1 = A(x + 2) + B(x - 1)</span>을 적으세요.",

    // Partial fractions > try it > li
    "Substitute <span class=\"chem\">x = 1</span> so the <span class=\"chem\">B</span> term vanishes.": "<span class=\"chem\">B</span> 항이 사라지도록 <span class=\"chem\">x = 1</span>을 대입하세요.",

    // The extended binomial theorem for rational indices > data-toc attribute
    "Extended binomials": "확장된 이항정리",

    // The extended binomial theorem for rational indices > h2
    "The extended binomial theorem for rational indices": "유리수 지수에 대한 확장된 이항정리",

    // The extended binomial theorem for rational indices > p
    "In Topic 1.2, <span class=\"chem\">(a + b)^n</span> with <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> always stopped after <span class=\"chem\">n + 1</span> terms. When <span class=\"chem\">n</span> is negative or fractional (<span class=\"chem\">n</span> ∈ ℚ), the expansion <strong>never terminates</strong>—it becomes an infinite series that only converges when the variable term has magnitude strictly less than <span class=\"chem\">1</span>.": "Topic 1.2에서 <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>일 때 <span class=\"chem\">(a + b)^n</span>의 전개는 항상 <span class=\"chem\">n + 1</span>개의 항에서 끝났어요. 하지만 <span class=\"chem\">n</span>이 음수나 분수(<span class=\"chem\">n</span> ∈ ℚ)이면 전개식이 <strong>끝나지 않고 무한급수</strong>가 되며, 변수 항의 절댓값이 <span class=\"chem\">1</span>보다 엄밀히 작을 때만 수렴해요.",

    // The extended binomial theorem for rational indices > formula booklet note > p
    "<strong>Section 1.10 of your Formula Booklet</strong> gives the extended binomial series for <span class=\"chem\">n</span> ∈ ℚ in the form <span class=\"chem\">(a + b)^n = a^n(1 + n(b/a) + (n(n - 1)/2!)(b/a)^2 + ...)</span>. The <span class=\"chem\">(1 + x)^n</span> version below, valid for <span class=\"chem\">|x| &lt; 1</span>, is the special case <span class=\"chem\">a = 1</span>, <span class=\"chem\">b = x</span>; the validity condition is not printed, so learn it:": "<strong>공식집(Formula Booklet) Section 1.10</strong>에는 <span class=\"chem\">n</span> ∈ ℚ일 때의 확장된 이항급수가 <span class=\"chem\">(a + b)^n = a^n(1 + n(b/a) + (n(n - 1)/2!)(b/a)^2 + ...)</span> 꼴로 수록되어 있어요. 아래의 <span class=\"chem\">(1 + x)^n</span> 꼴(<span class=\"chem\">|x| &lt; 1</span>일 때 성립)은 <span class=\"chem\">a = 1</span>, <span class=\"chem\">b = x</span>인 특수한 경우예요. 성립 조건은 공식집에 없으므로 외워 두세요:",

    // The extended binomial theorem for rational indices > equation > maths line
    "(<i>a</i> + <i>bx</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><span class=\"big\">(</span>1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">)</span><sup><i>n</i></sup> valid for <span class=\"big\">|</span><span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">|</span> &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"big\">|</span><span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span><span class=\"big\">|</span>": "(<i>a</i> + <i>bx</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><span class=\"big\">(</span>1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">)</span><sup><i>n</i></sup> (유효 조건: <span class=\"big\">|</span><span class=\"frac\"><span><i>b</i></span><span><i>a</i></span></span><i>x</i><span class=\"big\">|</span> &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"big\">|</span><span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span><span class=\"big\">|</span>)",

    // The extended binomial theorem for rational indices > widget > data-title attribute
    "Extended binomial approximation & validity interval": "확장된 이항근사 및 유효 구간",

    // The extended binomial theorem for rational indices > widget > figcaption
    "Compare the exact curve with its linear (<i>N</i> = 1), quadratic (<i>N</i> = 2), and cubic (<i>N</i> = 3) binomial approximations. Notice how the polynomial hugs the curve inside the validity interval (−<i>R</i>, <i>R</i>) and diverges outside it.": "정확한 곡선과 일차(<i>N</i> = 1), 이차(<i>N</i> = 2), 삼차(<i>N</i> = 3) 이항근사 다항식을 비교해 보세요. 유효 구간 (−<i>R</i>, <i>R</i>) 안에서는 다항식이 곡선에 밀착하고, 구간 밖에서는 발산하는 모습을 볼 수 있어요.",

    // The extended binomial theorem for rational indices > common mistake > p
    "<strong>Three common extended-binomial mistakes:</strong><br> 1. <strong>Forgetting <span class=\"chem\">a^n</span> when factoring:</strong> <span class=\"chem\">(4 - x)^{-1/2} = 4^{-1/2}(1 - x/4)^{-1/2} = (1/2)(1 - x/4)^{-1/2}</span>, not <span class=\"chem\">4(1 - x/4)^{-1/2}</span>.<br> 2. <strong>Dropping negative signs inside <span class=\"chem\">u</span>:</strong> in <span class=\"chem\">(1 - 3x)^{-2}</span>, <span class=\"chem\">u = -3x</span>, so <span class=\"chem\">u^2 = +9x^2</span>.<br> 3. <strong>Taking the union instead of the intersection of validity intervals:</strong> if one partial fraction is valid for <span class=\"chem\">|x| &lt; 1</span> and the other for <span class=\"chem\">|x| &lt; 2</span>, their sum is only valid where <em>both</em> converge: <span class=\"chem\">|x| &lt; 1</span>.": "<strong>확장된 이항정리에서 자주 하는 세 가지 실수:</strong><br> 1. <strong>앞으로 묶어 낼 때 <span class=\"chem\">a^n</span>을 빠뜨리는 실수:</strong> <span class=\"chem\">(4 - x)^{-1/2} = 4^{-1/2}(1 - x/4)^{-1/2} = (1/2)(1 - x/4)^{-1/2}</span>이지 <span class=\"chem\">4(1 - x/4)^{-1/2}</span>가 아니에요.<br> 2. <strong><span class=\"chem\">u</span> 안의 음수 부호를 빼먹는 실수:</strong> <span class=\"chem\">(1 - 3x)^{-2}</span>에서 <span class=\"chem\">u = -3x</span>이므로 <span class=\"chem\">u^2 = +9x^2</span>이에요.<br> 3. <strong>유효 구간의 교집합 대신 합집합을 구하는 실수:</strong> 한 부분분수가 <span class=\"chem\">|x| &lt; 1</span>에서 유효하고 다른 하나가 <span class=\"chem\">|x| &lt; 2</span>에서 유효하면, 두 식의 합은 <em>둘 다</em> 수렴하는 <span class=\"chem\">|x| &lt; 1</span>에서만 유효해요.",

    // The extended binomial theorem for rational indices > worked example > h3
    "Partial fractions followed by an extended binomial expansion": "부분분수 분해 후 확장된 이항전개 구하기",

    // The extended binomial theorem for rational indices > worked example > p
    "Express <span class=\"chem\">f(x) = (5x + 1) / ((1 - x)(2 + x))</span> in partial fractions, and hence find the first three terms of its expansion in ascending powers of <span class=\"chem\">x</span>. State the set of values of <span class=\"chem\">x</span> for which the expansion is valid. <strong>[6 marks]</strong>": "<span class=\"chem\">f(x) = (5x + 1) / ((1 - x)(2 + x))</span>를 부분분수로 나타낸 뒤, 이를 이용하여 (hence) <span class=\"chem\">x</span>의 오름차순 전개식에서 처음 세 항을 구하시오 (Find). 또한 이 전개가 유효한 <span class=\"chem\">x</span>의 값의 집합을 답하시오 (State). <strong>[6 marks]</strong>",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Decompose f(x) into partial fractions": "f(x)를 부분분수로 분해하기",

    // The extended binomial theorem for rational indices > worked example > p
    "Splitting into two linear denominators turns f(x) into two (a + bx)⁻¹ terms we can expand separately.": "두 개의 일차식 분모로 쪼개면 f(x)가 각각 전개할 수 있는 두 개의 (a + bx)⁻¹ 항이 돼요.",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Expand each term up to x²": "각 항을 x²까지 전개하기",

    // The extended binomial theorem for rational indices > worked example > p
    "Factor 2⁻¹ = 1/2 out of (2 + x)⁻¹ before applying the (1 + u)⁻¹ formula.": "(1 + u)⁻¹ 공식을 적용하기 전에 (2 + x)⁻¹에서 2⁻¹ = 1/2을 먼저 묶어 내세요.",

    // The extended binomial theorem for rational indices > worked example > maths line
    "2(1 − <i>x</i>)<sup>−1</sup> = 2(1 + <i>x</i> + <i>x</i><sup>2</sup> + …) = 2 + 2<i>x</i> + 2<i>x</i><sup>2</sup> + … (valid for |<i>x</i>| &lt; 1)": "2(1 − <i>x</i>)<sup>−1</sup> = 2(1 + <i>x</i> + <i>x</i><sup>2</sup> + …) = 2 + 2<i>x</i> + 2<i>x</i><sup>2</sup> + … (유효 조건: |<i>x</i>| &lt; 1)",

    // The extended binomial theorem for rational indices > worked example > maths line
    "−3(2 + <i>x</i>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> − …) = −<span class=\"frac\"><span>3</span><span>2</span></span> + <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i> − <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup> + … (valid for |<i>x</i>| &lt; 2) <b>[M1]</b>": "−3(2 + <i>x</i>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = −<span class=\"frac\"><span>3</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> − …) = −<span class=\"frac\"><span>3</span><span>2</span></span> + <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i> − <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup> + … (유효 조건: |<i>x</i>| &lt; 2) <b>[M1]</b>",

    // The extended binomial theorem for rational indices > worked example > data-title attribute
    "Combine like powers and take the intersection of validity intervals": "동류항끼리 모으고 유효 구간의 교집합 구하기",

    // The extended binomial theorem for rational indices > worked example > p
    "Add the coefficients term by term, and choose the stricter convergence condition.": "항별로 계수를 더하고, 더 엄격한 수렴 조건을 선택하세요.",

    // The extended binomial theorem for rational indices > worked example > maths line
    "<i>f</i>(<i>x</i>) ≈ <b><span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>11</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b> <b>[A1 R1]</b>": "<i>f</i>(<i>x</i>) ≈ <b><span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>11</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>13</span><span>8</span></span><i>x</i><sup>2</sup></b>, 유효 조건: <b>|<i>x</i>| &lt; 1</b> <b>[A1 R1]</b>",

    // The extended binomial theorem for rational indices > worked example > p
    "1/2 + (11/4)x + (13/8)x², valid for |x| &lt; 1": "1/2 + (11/4)x + (13/8)x², 유효 조건: |x| &lt; 1",

    // The extended binomial theorem for rational indices > try it > p
    "Find the coefficient of <span class=\"chem\">x^2</span> in the binomial expansion of <span class=\"chem\">(4 - x)^{-1/2}</span> (enter an exact fraction like <code>5/128</code> or a 3 s.f. decimal).": "<span class=\"chem\">(4 - x)^{-1/2}</span>의 이항전개식에서 <span class=\"chem\">x^2</span>의 계수를 구하시오 (Find). (<code>5/128</code> 같은 정확한 분수 또는 유효숫자 3자리 소수로 입력하세요.)",

    // The extended binomial theorem for rational indices > try it > li
    "Factor out <span class=\"chem\">4^{-1/2} = 1/2</span> first: <span class=\"chem\">(1/2)(1 - x/4)^{-1/2}</span>.": "먼저 <span class=\"chem\">4^{-1/2} = 1/2</span>을 묶어 내세요: <span class=\"chem\">(1/2)(1 - x/4)^{-1/2}</span>.",

    // The extended binomial theorem for rational indices > try it > li
    "The <span class=\"chem\">x^2</span> term inside the bracket is <span class=\"chem\">((-1/2)(-3/2)/2)(-x/4)^2 = (3/8)(x^2/16) = (3/128)x^2</span>. Multiply by <span class=\"chem\">1/2</span>.": "괄호 안의 <span class=\"chem\">x^2</span> 항은 <span class=\"chem\">((-1/2)(-3/2)/2)(-x/4)^2 = (3/8)(x^2/16) = (3/128)x^2</span>이에요. 여기에 <span class=\"chem\">1/2</span>을 곱하세요.",

    // The extended binomial theorem for rational indices > data-title attribute
    "Partial fractions & extended binomials: mixed exam practice": "부분분수 분해와 확장된 이항정리: 종합 시험 연습",

    // widget string (assets/js/widgets-t1-3.js)
    "Counting mode": "경우의 수 모드",

    // widget string (assets/js/widgets-t1-3.js)
    "Compare nPr vs nCr (why divide by r!)": "nPr vs nCr 비교 (왜 r!로 나눌까?)",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue method: A and B must sit together": "묶기 방법: A와 B가 이웃해야 함",

    // widget string (assets/js/widgets-t1-3.js)
    "Gap method: A and B must NOT sit together": "끼워 넣기 방법: A와 B가 이웃하면 안 됨",

    // widget string (assets/js/widgets-t1-3.js)
    "Total items n": "전체 개수 n",

    // widget string (assets/js/widgets-t1-3.js)
    "Chosen items r": "선택 개수 r",

    // widget string (assets/js/widgets-t1-3.js)
    "Ordered count": "순열 (순서 있음)",

    // widget string (assets/js/widgets-t1-3.js)
    "Comparison / formula": "비교 / 공식",

    // widget string (assets/js/widgets-t1-3.js)
    "Key takeaway": "핵심 요약",

    // widget string (assets/js/widgets-t1-3.js)
    "Each committee of {r} collapses {rf} orderings into 1.": "{r}명으로 된 각 조합은 {rf}가지의 순서를 1가지로 합쳐요.",

    // widget string (assets/js/widgets-t1-3.js)
    "Sample subset of {r} items from {n}:": "{n}개 중 {r}개를 뽑은 예시:",

    // widget string (assets/js/widgets-t1-3.js)

    // widget string (assets/js/widgets-t1-3.js)

    // widget string (assets/js/widgets-t1-3.js)
    "orderings": "가지 배열",

    // widget string (assets/js/widgets-t1-3.js)
    "Unconstrained": "제한 없음",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue A & B into 1 super-item → {m} items to arrange, then × 2! inside.": "A와 B를 1개로 묶음 → {m}개 배열 후 내부 × 2!.",

    // widget string (assets/js/widgets-t1-3.js)
    "Glue method: treat (AB) as a single super-item:": "묶기 방법: (AB)를 하나의 묶음으로 취급:",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {m} blocks ({m}!) × internal swaps (AB or BA, 2!) = {ans}": "{m}개 묶음 배열 ({m}!) × 내부 자리 바꿈 (AB 또는 BA, 2!) = {ans}",

    // widget string (assets/js/widgets-t1-3.js)
    "Complement": "여사건",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {k} other items first → {g} gaps available for A and B.": "나머지 {k}개를 먼저 배열 → A와 B가 들어갈 빈자리 {g}개.",

    // widget string (assets/js/widgets-t1-3.js)
    "Gap method: arrange the {k} other items first to create {g} gaps:": "끼워 넣기 방법: 나머지 {k}개를 먼저 배열해 {g}개의 빈자리 만들기:",

    // widget string (assets/js/widgets-t1-3.js)
    "Arrange {k} items ({k}!) × place A & B into 2 of {g} gaps ({g}P2) = {ans}": "{k}개 배열 ({k}!) × {g}개 빈자리 중 2곳에 A, B 배치 ({g}P2) = {ans}",

    // widget string (assets/js/widgets-t1-3.js)
    "Function f(x)": "함수 f(x)",

    // widget string (assets/js/widgets-t1-3.js)
    "Approximation degree N": "근사 차수 N",

    // widget string (assets/js/widgets-t1-3.js)
    "Test point x₀": "확인할 점 x₀",

    // widget string (assets/js/widgets-t1-3.js)
    "Exact f(x₀)": "정확한 값 f(x₀)",

    // widget string (assets/js/widgets-t1-3.js)
    "Binomial P<sub>N</sub>(x₀)": "이항근사 P<sub>N</sub>(x₀)",

    // widget string (assets/js/widgets-t1-3.js)
    "Error & validity": "오차 및 유효성",

    // widget string (assets/js/widgets-t1-3.js)
    "Undefined": "정의되지 않음",

    // widget string (assets/js/widgets-t1-3.js)
    "Inside (−R, R)": "(−R, R) 구간 안",

    // widget string (assets/js/widgets-t1-3.js)
    "Outside (−R, R)!": "(−R, R) 구간 밖!",

    // widget string (assets/js/widgets-t1-3.js)
    "Outside domain / asymptote": "정의역 밖 / 점근선",

    // widget string (assets/js/widgets-t1-3.js)
    "Extended binomial approximation vs exact rational/radical function": "확장된 이항근사 vs 정확한 유리/무리함수",

    // widget string (assets/js/widgets-t1-3.js)
    "Exact f(x)": "정확한 f(x)",

    // widget string (assets/js/widgets-t1-3.js)
    "Degree N = {n} polynomial": "{n}차 근사 다항식",

    "One unordered selection {set} corresponds to {rf} ordered arrangements:": "순서 없는 선택 1가지 {set}는 {rf}가지의 순서 있는 배열에 대응해요:",
    "One unordered selection {set} corresponds to 1 ordered arrangement:": "순서 없는 선택 1가지 {set}는 1가지의 순서 있는 배열에 대응해요:",

    // What you need to be able to do > p
    "Before you start: this page builds on <sup><i>n</i></sup>C<sub><i>r</i></sub> and the binomial theorem for positive integer powers from <a href=\"t1-2.html\">1.2 Exponents, logarithms and the binomial theorem</a>. Partial fractions are used again to integrate rational functions in <a href=\"t5-3.html\">5.3 First principles, L’Hôpital, implicit, parts and volumes</a>.": "시작하기 전에: 이 페이지는 <a href=\"t1-2.html\">1.2 지수, 로그와 이항정리</a>의 <sup><i>n</i></sup>C<sub><i>r</i></sub>와 양의 정수 지수의 이항정리를 바탕으로 해요. 부분분수는 <a href=\"t5-3.html\">5.3 도함수의 정의, 로피탈의 정리, 음함수 미분, 부분적분과 회전체의 부피</a>에서 유리함수를 적분할 때 다시 써요.",

    // Exam-style practice > h2
    "Exam-style practice": "실전 연습 문제",

    // Exam-style practice > p
    "Three sets of original AHL questions on counting, partial fractions and extended binomial series, including Paper 2 (GDC) problems and Paper 3 investigations.": "경우의 수, 부분분수, 확장된 이항급수를 다루는 자체 제작 AHL 문제 3개 세트예요. Paper 2 (GDC) 문제와 Paper 3 탐구 문제도 들어 있어요.",

    // Exam-style practice > h3
    "Foundation: nPr, nCr, simple expansions and partial fractions": "기초: nPr, nCr, 간단한 전개와 부분분수",

    // Exam-style practice > data-title attribute
    "1.3 foundation": "1.3 기초",

    // Exam-style practice > h3
    "Exam standard: Paper 1, Paper 2 and Paper 3": "실전 수준: Paper 1, Paper 2 및 Paper 3",

    // Exam-style practice > data-title attribute
    "1.3 exam standard": "1.3 실전",

    // Exam-style practice > h3
    "Challenge: decoding unfamiliar counting and series problems": "심화: 낯선 경우의 수·급수 문제 해석하기",

    // Exam-style practice > data-title attribute
    "1.3 challenge": "1.3 심화",
  }
});
