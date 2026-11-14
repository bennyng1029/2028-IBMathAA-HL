/* t1-1.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't1-1.q', {
  questions: {

    // ── t1-1-q001 · mcq · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q001": {
      // EN: <p>Let <span class="chem">A = 3.2 × 10^5</span> and <span class="chem">B = 8.0 × 10^{-3}</span>. Find the value of <span class="chem">A / B</span> in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>
      stem: "<p>設 <span class=\"chem\">A = 3.2 × 10^5</span> 及 <span class=\"chem\">B = 8.0 × 10^{-3}</span>。求 (Find) <span class=\"chem\">A / B</span> 的值，並以科學記數法 <span class=\"chem\">a × 10^k</span> 表示，其中 <span class=\"chem\">1 &lt;= a &lt; 10</span> 且 <span class=\"chem\">k</span> 為整數。</p>",
      options: [
        // EN: <span class="chem">4.0 × 10^7</span>
        "<span class=\"chem\">4.0 × 10^7</span>",
        // EN: <span class="chem">0.4 × 10^8</span>
        "<span class=\"chem\">0.4 × 10^8</span>",
        // EN: <span class="chem">4.0 × 10^2</span>
        "<span class=\"chem\">4.0 × 10^2</span>",
        // EN: <span class="chem">4.0 × 10^8</span>
        "<span class=\"chem\">4.0 × 10^8</span>",
      ],
      hints: [
        // EN: Divide the coefficients and subtract the powers of 10 separately: <span class="chem">(3.2 / 8.0) × 10^{5 - (-3)}</span>.
        "把係數相除，並把 10 的指數分開相減：<span class=\"chem\">(3.2 / 8.0) × 10^{5 - (-3)}</span>。",
        // EN: Adjust <span class="chem">0.4 × 10^8</span> so the leading number lies between 1 and 10.
        "調整 <span class=\"chem\">0.4 × 10^8</span>，使首個數介乎 1 與 10 之間。",
      ],
      // EN: <div class="worked__math"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>",
      misconception: {
        // EN (option B): In standard form <span class="chem">a × 10^k</span>, the coefficient must satisfy <span class="chem">1 &lt;= a &lt; 10</span>. Write <span class="chem">0.4 × 10^8</span> as <span class="chem">4.0 × 10^7</span>.
        "1": "在科學記數法 <span class=\"chem\">a × 10^k</span> 中，係數必須滿足 <span class=\"chem\">1 &lt;= a &lt; 10</span>。應把 <span class=\"chem\">0.4 × 10^8</span> 寫成 <span class=\"chem\">4.0 × 10^7</span>。",
        // EN (option C): When dividing powers of 10, subtract the bottom exponent: <span class="chem">5 - (-3) = 8</span>, not <span class="chem">5 - 3 = 2</span>.
        "2": "把 10 的冪相除時，應減去分母的指數：<span class=\"chem\">5 - (-3) = 8</span>，而不是 <span class=\"chem\">5 - 3 = 2</span>。",
        // EN (option D): Since <span class="chem">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span>, the exponent decreases from 8 to 7, not 8.
        "3": "因為 <span class=\"chem\">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span>，指數會由 8 減至 7，而不是保持 8。",
      },
    },

    // ── t1-1-q002 · numeric · foundation · SL · SL 1.2 · 3 marks
    "t1-1-q002": {
      // EN: <p>In an arithmetic sequence, the fourth term is <span class="chem">u_4 = 19</span> and the tenth term is <span class="chem">u_{10} = 43</span>. Find the first term <span class="chem">u_1</span>.</p>
      stem: "<p>在一個等差數列中，第四項為 <span class=\"chem\">u_4 = 19</span>，第十項為 <span class=\"chem\">u_{10} = 43</span>。求 (Find) 首項 <span class=\"chem\">u_1</span>。</p>",
      hints: [
        // EN: From <span class="chem">u_4</span> to <span class="chem">u_{10}</span> there are <span class="chem">10 - 4 = 6</span> steps of size <span class="chem">d</span>.
        "由 <span class=\"chem\">u_4</span> 到 <span class=\"chem\">u_{10}</span> 共有 <span class=\"chem\">10 - 4 = 6</span> 個步長為 <span class=\"chem\">d</span>（公差）的步驟。",
        // EN: Once you find <span class="chem">d</span>, use <span class="chem">u_4 = u_1 + 3d = 19</span> to solve for <span class=\"chem\">u_1</span>.
        "求得 <span class=\"chem\">d</span> 後，利用 <span class=\"chem\">u_4 = u_1 + 3d = 19</span> 解出 <span class=\"chem\">u_1</span>。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24 ⇒ <i>d</i> = 4</div><div class="worked__math"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24 ⇒ <i>d</i> = 4</div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>",
    },

    // ── t1-1-q003 · mcq · foundation · SL · SL 1.2 · 2 marks
    "t1-1-q003": {
      // EN: <p>How many terms are in the sum <span class="chem">Σ_{k=4}^{19} (5k - 2)</span>, and what is the first term of this sum?</p>
      stem: "<p>級數 <span class=\"chem\">Σ_{k=4}^{19} (5k - 2)</span> 共有多少項？該級數的首項是甚麼？</p>",
      options: [
        // EN: 15 terms, first term is 18
        "15 項，首項為 18",
        // EN: 16 terms, first term is 18
        "16 項，首項為 18",
        // EN: 16 terms, first term is 3
        "16 項，首項為 3",
        // EN: 19 terms, first term is 18
        "19 項，首項為 18",
      ],
      hints: [
        // EN: The number of integers from <span class="chem">a</span> to <span class="chem">b</span> inclusive is <span class="chem">b - a + 1</span>.
        "由 <span class=\"chem\">a</span> 至 <span class=\"chem\">b</span>（包括兩端）的整數個數為 <span class=\"chem\">b - a + 1</span>。",
        // EN: Substitute the bottom index <span class="chem">k = 4</span> into <span class="chem">5k - 2</span> to find the first term.
        "把下標 <span class=\"chem\">k = 4</span> 代入 <span class=\"chem\">5k - 2</span> 以求首項。",
      ],
      // EN: <p>There are <span class="chem">19 - 4 + 1 = 16</span> terms. Substituting <span class="chem">k = 4</span> gives the first term <span class="chem">5(4) - 2 = 18</span>.</p>
      solution: "<p>共有 <span class=\"chem\">19 - 4 + 1 = 16</span> 項。代入 <span class=\"chem\">k = 4</span> 得首項為 <span class=\"chem\">5(4) - 2 = 18</span>。</p>",
      misconception: {
        // EN (option A): Counting from <span class="chem">k = 4</span> to <span class="chem">k = 19</span> inclusive gives <span class="chem">19 - 4 + 1 = 16</span> terms, not <span class="chem">19 - 4 = 15</span>.
        "0": "由 <span class=\"chem\">k = 4</span> 點算至 <span class=\"chem\">k = 19</span>（包括兩端）共有 <span class=\"chem\">19 - 4 + 1 = 16</span> 項，而不是 <span class=\"chem\">19 - 4 = 15</span> 項。",
        // EN (option C): The lower limit of the sigma notation is <span class="chem">k = 4</span>, not <span class="chem">k = 1</span>. Substitute <span class="chem">k = 4</span> to get <span class="chem">5(4) - 2 = 18</span>.
        "2": "求和記號的下限是 <span class=\"chem\">k = 4</span>，不是 <span class=\"chem\">k = 1</span>。代入 <span class=\"chem\">k = 4</span> 得 <span class=\"chem\">5(4) - 2 = 18</span>。",
        // EN (option D): The sum starts at <span class="chem">k = 4</span>, so the terms for <span class="chem">k = 1, 2, 3</span> are not included.
        "3": "級數由 <span class=\"chem\">k = 4</span> 開始，因此不包括 <span class=\"chem\">k = 1, 2, 3</span> 的項。",
      },
    },

    // ── t1-1-q004 · numeric · foundation · SL · SL 1.8 · 3 marks
    "t1-1-q004": {
      // EN: <p>A convergent geometric series has first term <span class="chem">u_1 = 36</span> and common ratio <span class="chem">r = -1/3</span>. Calculate the sum to infinity <span class="chem">S_infty</span>.</p>
      stem: "<p>一個收斂等比級數的首項為 <span class=\"chem\">u_1 = 36</span>，公比為 <span class=\"chem\">r = -1/3</span>。計算 (Calculate) 其無限項之和 <span class=\"chem\">S_infty</span>。</p>",
      hints: [
        // EN: Since <span class="chem">|r| = 1/3 &lt; 1</span>, the infinite series converges.
        "因為 <span class=\"chem\">|r| = 1/3 &lt; 1</span>，該無限級數收斂。",
        // EN: Use <span class="chem">S_infty = u_1 / (1 - r)</span> and watch the double negative in <span class="chem">1 - (-1/3)</span>.
        "使用 <span class=\"chem\">S_infty = u_1 / (1 - r)</span>，並留意 <span class=\"chem\">1 - (-1/3)</span> 中的負負得正。",
      ],
      // EN: <div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>36</span><span>1 − (−1/3)</span></span> = <span class="frac"><span>36</span><span>4/3</span></span> = <b>27</b></div>
      solution: "<div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>36</span><span>1 − (−1/3)</span></span> = <span class=\"frac\"><span>36</span><span>4/3</span></span> = <b>27</b></div>",
    },

    // ── t1-1-q005 · numeric · foundation · SL · SL 1.4 · 3 marks
    "t1-1-q005": {
      // EN: <p>Maya invests 4500 USD in an account paying a nominal annual interest rate of 4.8%, compounded quarterly. Calculate the value of her investment after 6 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Maya 把 4500 USD 存入一個名義年利率為 4.8%、每季計算複利一次的帳戶。計算 (Calculate) 6 年後該筆投資的價值，答案須準確至小數點後 2 位。</p>",
      hints: [
        // EN: Quarterly compounding means <span class="chem">k = 4</span> compounding periods per year.
        "每季計算複利一次表示每年有 <span class=\"chem\">k = 4</span> 個計算複利期。",
        // EN: Substitute <span class="chem">PV = 4500</span>, <span class="chem">r = 4.8</span>, <span class="chem">k = 4</span>, <span class="chem">n = 6</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>.
        "把 <span class=\"chem\">PV = 4500</span>、<span class=\"chem\">r = 4.8</span>、<span class=\"chem\">k = 4</span>、<span class=\"chem\">n = 6</span> 代入 <span class=\"chem\">FV = PV(1 + r/(100k))^{kn}</span>。",
      ],
      // EN: <div class="worked__math"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>Correct to 2 decimal places, this is <strong>5991.63 USD</strong>.</p>
      solution: "<div class=\"worked__math\"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>準確至小數點後 2 位為 <strong>5991.63 USD</strong>。</p>",
    },

    // ── t1-1-q006 · multi · foundation · SL · SL 1.8 · 2 marks
    "t1-1-q006": {
      // EN: <p>For which of the following geometric sequences does the sum to infinity <span class="chem">S_infty</span> exist? Select all that apply.</p>
      stem: "<p>以下哪些等比數列的無限項之和 <span class=\"chem\">S_infty</span> 存在？選出所有適用選項。</p>",
      options: [
        // EN: <span class="chem">100, -60, 36, -21.6, ...</span>
        "<span class=\"chem\">100, -60, 36, -21.6, ...</span>",
        // EN: <span class="chem">1, 1.05, 1.1025, ...</span>
        "<span class=\"chem\">1, 1.05, 1.1025, ...</span>",
        // EN: <span class="chem">u_n = 12 × (3/4)^{n-1}</span>
        "<span class=\"chem\">u_n = 12 × (3/4)^{n-1}</span>",
        // EN: <span class="chem">8, -8, 8, -8, ...</span>
        "<span class=\"chem\">8, -8, 8, -8, ...</span>",
      ],
      hints: [
        // EN: A geometric series converges to a finite sum to infinity if and only if <span class="chem">|r| &lt; 1</span> (that is, <span class="chem">-1 &lt; r &lt; 1</span>).
        "等比級數收斂至有限的無限項之和，當且僅當 <span class=\"chem\">|r| &lt; 1</span>（即 <span class=\"chem\">-1 &lt; r &lt; 1</span>）。",
        // EN: Find <span class="chem">r = u_2 / u_1</span> for each sequence and check whether <span class="chem">|r| &lt; 1</span>.
        "求出每個數列的公比 <span class=\"chem\">r = u_2 / u_1</span>，並檢查是否滿足 <span class=\"chem\">|r| &lt; 1</span>。",
      ],
      // EN: <p>The first sequence has <span class="chem">r = -60/100 = -0.6</span> (<span class="chem">|r| = 0.6 &lt; 1</span>) and the third has <span class="chem">r = 3/4</span> (<span class="chem">|r| = 0.75 &lt; 1</span>). Both converge.</p>
      solution: "<p>第一個數列的公比為 <span class=\"chem\">r = -60/100 = -0.6</span>（<span class=\"chem\">|r| = 0.6 &lt; 1</span>），第三個的公比為 <span class=\"chem\">r = 3/4</span>（<span class=\"chem\">|r| = 0.75 &lt; 1</span>）。兩者均收斂。</p>",
      misconception: {
        // EN (option B): Here <span class="chem">r = 1.05</span>. Since <span class="chem">|r| &gt; 1</span>, the terms grow without bound and the sum diverges.
        "1": "此處 <span class=\"chem\">r = 1.05</span>。由於 <span class=\"chem\">|r| &gt; 1</span>，各項無限增大，級數發散。",
        // EN (option D): Here <span class="chem">r = -1</span>. For convergence we strictly need <span class="chem">|r| &lt; 1</span>; when <span class="chem">r = -1</span> the partial sums oscillate between 8 and 0 without approaching a single limit.
        "3": "此處 <span class=\"chem\">r = -1</span>。收斂必須嚴格滿足 <span class=\"chem\">|r| &lt; 1</span>；當 <span class=\"chem\">r = -1</span> 時，部分和會在 8 與 0 之間擺動，不會趨近單一極限。",
      },
    },

    // ── t1-1-q007 · numeric · exam · SL · SL 1.2 · 4 marks
    "t1-1-q007": {
      // EN: <p>Calculate the exact value of the arithmetic series <span class="chem">Σ_{k=5}^{24} (3k - 7)</span>.</p>
      stem: "<p>計算 (Calculate) 等差級數 <span class=\"chem\">Σ_{k=5}^{24} (3k - 7)</span> 的準確值。</p>",
      hints: [
        // EN: First count the number of terms: from <span class="chem">k = 5</span> to <span class="chem">k = 24</span> inclusive there are <span class="chem">24 - 5 + 1 = 20</span> terms.
        "先點算項數：由 <span class=\"chem\">k = 5</span> 至 <span class=\"chem\">k = 24</span>（包括兩端）共有 <span class=\"chem\">24 - 5 + 1 = 20</span> 項。",
        // EN: Find the first term in the sum (<span class="chem">k = 5</span>) and the last term in the sum (<span class="chem">k = 24</span>), then use <span class="chem">S = (N/2)(first + last)</span>.
        "求出級數的首項（<span class=\"chem\">k = 5</span>）及末項（<span class=\"chem\">k = 24</span>），再利用 <span class=\"chem\">S = (N/2)(first + last)</span>（即首項加末項）。",
      ],
      // EN: <div class="worked__math">Number of terms <i>N</i> = 24 − 5 + 1 = 20 <b>[A1]</b></div><div class="worked__math">First term (<i>k</i> = 5): 3(5) − 7 = 8; Last term (<i>k</i> = 24): 3(24) − 7 = 65 <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">項數 <i>N</i> = 24 − 5 + 1 = 20 <b>[A1]</b></div><div class=\"worked__math\">首項 (<i>k</i> = 5)：3(5) − 7 = 8；末項 (<i>k</i> = 24)：3(24) − 7 = 65 <b>[A1]</b></div><div class=\"worked__math\"><i>S</i> = <span class=\"frac\"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q008 · mcq · exam · SL · SL 1.2 · 4 marks
    "t1-1-q008": {
      // EN: <p>The sum of the first <span class="chem">n</span> terms of a sequence is given by <span class="chem">S_n = 2n^2 + 5n</span> for all <span class="chem">n &gt;= 1</span>. Find an expression for the <span class="chem">n</span>-th term <span class="chem">u_n</span>.</p>
      stem: "<p>對於所有 <span class=\"chem\">n &gt;= 1</span>，某數列首 <span class=\"chem\">n</span> 項之和為 <span class=\"chem\">S_n = 2n^2 + 5n</span>。求 (Find) 第 <span class=\"chem\">n</span> 項（通項）<span class=\"chem\">u_n</span> 的表式。</p>",
      options: [
        // EN: <span class="chem">u_n = 4n + 3</span>
        "<span class=\"chem\">u_n = 4n + 3</span>",
        // EN: <span class="chem">u_n = 4n + 5</span>
        "<span class=\"chem\">u_n = 4n + 5</span>",
        // EN: <span class="chem">u_n = 4n + 7</span>
        "<span class=\"chem\">u_n = 4n + 7</span>",
        // EN: <span class="chem">u_n = 2n + 5</span>
        "<span class=\"chem\">u_n = 2n + 5</span>",
      ],
      hints: [
        // EN: Evaluate <span class="chem">u_1 = S_1</span> and <span class="chem">S_2 = u_1 + u_2</span> to find <span class="chem">u_1</span> and <span class="chem">u_2</span>.
        "計算 <span class=\"chem\">u_1 = S_1</span> 及 <span class=\"chem\">S_2 = u_1 + u_2</span> 以求 <span class=\"chem\">u_1</span> 和 <span class=\"chem\">u_2</span>。",
        // EN: Alternatively, simplify <span class="chem">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span>.
        "或者，化簡 <span class=\"chem\">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span>。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class="worked__math"><i>S</i><sub>2</sub> = 2(4) + 10 = 18 ⇒ <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11 ⇒ <i>d</i> = 11 − 7 = 4</div><div class="worked__math"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class=\"worked__math\"><i>S</i><sub>2</sub> = 2(4) + 10 = 18 ⇒ <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11 ⇒ <i>d</i> = 11 − 7 = 4</div><div class=\"worked__math\"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>",
      misconception: {
        // EN (option B): Taking the derivative of <span class="chem">2n^2 + 5n</span> gives <span class="chem">4n + 5</span>, which does not match <span class="chem">u_1 = S_1 = 7</span>.
        "1": "把 <span class=\"chem\">2n^2 + 5n</span> 求導會得出 <span class=\"chem\">4n + 5</span>，與 <span class=\"chem\">u_1 = S_1 = 7</span> 不符。",
        // EN (option C): Check the sign when expanding <span class="chem">-2(n - 1)^2 = -2n^2 + 4n - 2</span>. Writing <span class="chem">+2</span> instead gives <span class="chem">4n + 7</span>. Test <span class="chem">n = 1</span>: <span class="chem">u_1 = S_1 = 7</span>, but <span class="chem">4(1) + 7 = 11</span>.
        "2": "展開 <span class=\"chem\">-2(n - 1)^2 = -2n^2 + 4n - 2</span> 時要小心正負號。若寫成 <span class=\"chem\">+2</span>，便會得到 <span class=\"chem\">4n + 7</span>。代入 <span class=\"chem\">n = 1</span> 檢查：<span class=\"chem\">u_1 = S_1 = 7</span>，但 <span class=\"chem\">4(1) + 7 = 11</span>。",
        // EN (option D): Dividing <span class="chem">S_n</span> by <span class="chem">n</span> gives the average of the first <span class="chem">n</span> terms, not the <span class="chem">n</span>-th term <span class="chem">u_n</span>.
        "3": "把 <span class=\"chem\">S_n</span> 除以 <span class=\"chem\">n</span> 得到的是首 <span class=\"chem\">n</span> 項的平均值，而不是第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span>。",
      },
    },

    // ── t1-1-q009 · numeric · exam · SL · SL 1.3 · 6 marks
    "t1-1-q009": {
      // EN: <p>The terms <span class="chem">3k + 1</span>, <span class="chem">4k - 12</span>, and <span class="chem">19 - 3k</span> are consecutive terms of a geometric sequence. Given that the infinite series formed by this sequence converges, find the value of the common ratio <span class="chem">r</span>.</p>
      stem: "<p><span class=\"chem\">3k + 1</span>、<span class=\"chem\">4k - 12</span> 及 <span class=\"chem\">19 - 3k</span> 是等比數列的連續三項。已知由該數列構成的無限級數收斂，求 (Find) 公比 <span class=\"chem\">r</span> 的值。</p>",
      hints: [
        // EN: For three consecutive geometric terms, equate the common ratios: <span class="chem">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span>.
        "對於等比數列的連續三項，令相鄰兩項之比相等：<span class=\"chem\">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span>。",
        // EN: Cross-multiply to form a quadratic in <span class="chem">k</span>, find both possible values of <span class="chem">k</span>, and test which one gives <span class="chem">|r| &lt; 1</span>.
        "交叉相乘組成關於 <span class=\"chem\">k</span> 的二次方程，求出 <span class=\"chem\">k</span> 的兩個可能值，再檢驗哪一個滿足 <span class=\"chem\">|r| &lt; 1</span>。",
      ],
      // EN: <div class="worked__math">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>) ⇒ 16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19 <b>[M1 A1]</b></div><div class="worked__math">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0 ⇒ <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0 ⇒ (<i>k</i> − 1)(<i>k</i> − 5) = 0 <b>[M1 A1]</b></div><div class="worked__math">If <i>k</i> = 1, the terms are 4, −8, 16 so <i>r</i> = −2 (diverges since |<i>r</i>| &gt; 1). If <i>k</i> = 5, the terms are 16, 8, 4 so <b><i>r</i> = 0.5</b> (converges since |<i>r</i>| &lt; 1). <b>[R1 A1]</b></div>
      solution: "<div class=\"worked__math\">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>) ⇒ 16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19 <b>[M1 A1]</b></div><div class=\"worked__math\">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0 ⇒ <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0 ⇒ (<i>k</i> − 1)(<i>k</i> − 5) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\">若 <i>k</i> = 1，各項為 4, −8, 16，故 <i>r</i> = −2（因 |<i>r</i>| &gt; 1 而發散）。若 <i>k</i> = 5，各項為 16, 8, 4，故 <b><i>r</i> = 0.5</b>（因 |<i>r</i>| &lt; 1 而收斂）。<b>[R1 A1]</b></div>",
    },

    // ── t1-1-q010 · numeric · exam · SL · SL 1.3 · 5 marks
    "t1-1-q010": {
      // EN: <p>A geometric series has first term <span class="chem">u_1 = 5</span> and common ratio <span class="chem">r = 1.4</span>. Find the least number of terms <span class="chem">n</span> required for the sum <span class="chem">S_n</span> to exceed 1500.</p>
      stem: "<p>一個等比級數的首項為 <span class=\"chem\">u_1 = 5</span>，公比為 <span class=\"chem\">r = 1.4</span>。求 (Find) 使總和 <span class=\"chem\">S_n</span> 超過 1500 所需的最少項數 <span class=\"chem\">n</span>。</p>",
      hints: [
        // EN: Write the sum inequality: <span class="chem">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span>.
        "列出求和不等式：<span class=\"chem\">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span>。",
        // EN: Rearrange to isolate <span class="chem">1.4^n &gt; 121</span>, take logarithms, and round up to the next integer.
        "移項分離出 <span class=\"chem\">1.4^n &gt; 121</span>，取對數後向上捨入至下一個整數。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500 ⇒ 1.4<sup><i>n</i></sup> − 1 &gt; 120 ⇒ 1.4<sup><i>n</i></sup> &gt; 121 <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25 <b>[M1 A1]</b></div><p>Since <span class="chem">n</span> must be a positive integer, the least number of terms is <strong>15</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500 ⇒ 1.4<sup><i>n</i></sup> − 1 &gt; 120 ⇒ 1.4<sup><i>n</i></sup> &gt; 121 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25 <b>[M1 A1]</b></div><p>因為 <span class=\"chem\">n</span> 必須為正整數，最少項數為 <strong>15</strong>。<b>[A1]</b></p>",
    },

    // ── t1-1-q011 · numeric · exam · SL · SL 1.8 · 5 marks
    "t1-1-q011": {
      // EN: <p>In a convergent geometric series with positive terms, the sum to infinity is <span class="chem">S_infty = 64</span> and the sum of the first three terms is <span class="chem">S_3 = 37</span>. Find the first term <span class="chem">u_1</span>.</p>
      stem: "<p>在一個各項均為正數的收斂等比級數中，無限項之和為 <span class=\"chem\">S_infty = 64</span>，首三項之和為 <span class=\"chem\">S_3 = 37</span>。求 (Find) 首項 <span class=\"chem\">u_1</span>。</p>",
      hints: [
        // EN: Divide <span class="chem">S_3 = u_1(1 - r^3)/(1 - r)</span> by <span class="chem">S_infty = u_1/(1 - r)</span> to eliminate <span class="chem">u_1</span> immediately.
        "把 <span class=\"chem\">S_3 = u_1(1 - r^3)/(1 - r)</span> 除以 <span class=\"chem\">S_infty = u_1/(1 - r)</span>，即可立即消去 <span class=\"chem\">u_1</span>。",
        // EN: Solve <span class="chem">1 - r^3 = 37/64</span> for <span class="chem">r</span>, then use <span class="chem">u_1 = 64(1 - r)</span>.
        "解 <span class=\"chem\">1 - r^3 = 37/64</span> 求 <span class=\"chem\">r</span>，再用 <span class=\"chem\">u_1 = 64(1 - r)</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class="frac"><span>37</span><span>64</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>r</i><sup>3</sup> = 1 − <span class="frac"><span>37</span><span>64</span></span> = <span class="frac"><span>27</span><span>64</span></span> ⇒ <i>r</i> = <span class="frac"><span>3</span><span>4</span></span> <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class=\"frac\"><span>37</span><span>64</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i><sup>3</sup> = 1 − <span class=\"frac\"><span>37</span><span>64</span></span> = <span class=\"frac\"><span>27</span><span>64</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>3</span><span>4</span></span> <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q012 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q012": {
      // EN: <p>A delivery van is purchased new for 38 000 EUR and depreciates by 16% of its value each year. Find the number of complete years it takes for the value of the van to fall below 12 000 EUR.</p>
      stem: "<p>一輛全新貨車的購入價為 38 000 EUR，每年折舊其價值的 16%。求 (Find) 該貨車的價值跌至低於 12 000 EUR 所需的完整年數。</p>",
      hints: [
        // EN: Losing 16% of its value each year means the value is multiplied by <span class="chem">r = 1 - 0.16 = 0.84</span> each year.
        "每年損失 16% 的價值，表示每年價值乘以 <span class=\"chem\">r = 1 - 0.16 = 0.84</span>。",
        // EN: Solve <span class="chem">38000(0.84)^n &lt; 12000</span>. Remember that dividing by <span class="chem">ln(0.84) &lt; 0</span> reverses the inequality sign.
        "解 <span class=\"chem\">38000(0.84)^n &lt; 12000</span>。緊記除以負數 <span class=\"chem\">ln(0.84) &lt; 0</span> 時，不等號須反轉。",
      ],
      // EN: <div class="worked__math">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000 ⇒ (0.84)<sup><i>n</i></sup> &lt; <span class="frac"><span>6</span><span>19</span></span> <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61 years <b>[M1 A1]</b></div><p>It takes <strong>7</strong> complete years. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000 ⇒ (0.84)<sup><i>n</i></sup> &lt; <span class=\"frac\"><span>6</span><span>19</span></span> <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61 年 <b>[M1 A1]</b></div><p>需要 <strong>7</strong> 個完整年度。<b>[A1]</b></p>",
    },

    // ── t1-1-q013 · order · exam · SL · SL 1.8 · 4 marks
    "t1-1-q013": {
      // EN: <p>Arrange these steps in the correct logical order to solve <span class="chem">Σ_{k=1}^infty 12 r^{k-1} = 16</span> and verify convergence.</p>
      stem: "<p>把下列步驟按正確的邏輯順序排列，以解方程 <span class=\"chem\">Σ_{k=1}^infty 12 r^{k-1} = 16</span> 並驗證 (verify) 收斂性。</p>",
      options: [
        // EN: Identify the first term <span class="chem">u_1 = 12</span> (when <span class="chem">k = 1</span>) and common ratio <span class="chem">r</span>.
        "找出首項 <span class=\"chem\">u_1 = 12</span>（當 <span class=\"chem\">k = 1</span> 時）與公比 <span class=\"chem\">r</span>。",
        // EN: Substitute into the infinite geometric sum formula: <span class="chem">12 / (1 - r) = 16</span>.
        "代入等比級數無限項之和公式：<span class=\"chem\">12 / (1 - r) = 16</span>。",
        // EN: Rearrange to <span class="chem">1 - r = 12/16 = 3/4</span> and solve to get <span class=\"chem\">r = 1/4</span>.
        "移項得 <span class=\"chem\">1 - r = 12/16 = 3/4</span>，解得 <span class=\"chem\">r = 1/4</span>。",
        // EN: Verify that <span class="chem">|r| = 1/4 &lt; 1</span> so the infinite series is valid and convergent.
        "驗證 <span class=\"chem\">|r| = 1/4 &lt; 1</span>，確認該無限級數有效且收斂。",
      ],
      hints: [
        // EN: First extract <span class="chem">u_1</span> and <span class="chem">r</span> from the sigma notation.
        "先從求和記號中找出 <span class=\"chem\">u_1</span> 和 <span class=\"chem\">r</span>。",
        // EN: After solving the equation for <span class="chem">r</span>, always verify the convergence condition <span class="chem">|r| &lt; 1</span>.
        "解出 <span class=\"chem\">r</span> 後，必須驗證收斂條件 <span class=\"chem\">|r| &lt; 1</span>。",
      ],
      // EN: <p>Setting <span class="chem">k = 1</span> gives <span class="chem">u_1 = 12</span>. Applying <span class="chem">S_infty = u_1/(1-r) = 16</span> yields <span class="chem">1 - r = 3/4</span> so <span class="chem">r = 1/4</span>, which satisfies <span class="chem">|r| &lt; 1</span>.</p>
      solution: "<p>代入 <span class=\"chem\">k = 1</span> 得 <span class=\"chem\">u_1 = 12</span>。應用 <span class=\"chem\">S_infty = u_1/(1-r) = 16</span> 得 <span class=\"chem\">1 - r = 3/4</span>，故 <span class=\"chem\">r = 1/4</span>，符合 <span class=\"chem\">|r| &lt; 1</span>。</p>",
    },

    // ── t1-1-q014 · short · exam · SL · SL 1.2 · 6 marks
    "t1-1-q014": {
      // EN: <p>An arithmetic sequence has first term <span class="chem">u_1 = 9</span> and common difference <span class="chem">d = 2</span>. A geometric sequence has first term <span class="chem">v_1 = 2</span> and common ratio <span class="chem">r = 2</span>. Find the value of <span class="chem">n</span> for which the sum of the first <span class="chem">n</span> terms of the arithmetic sequence equals the 7th term of the geometric sequence.</p>
      stem: "<p>一個等差數列的首項為 <span class=\"chem\">u_1 = 9</span>，公差為 <span class=\"chem\">d = 2</span>。一個等比數列的首項為 <span class=\"chem\">v_1 = 2</span>，公比為 <span class=\"chem\">r = 2</span>。求 (Find) 使該等差數列首 <span class=\"chem\">n</span> 項之和等於該等比數列第 7 項的 <span class=\"chem\">n</span> 值。</p>",
      hints: [
        // EN: First compute <span class="chem">v_7 = v_1 r^6</span>.
        "先計算 <span class=\"chem\">v_7 = v_1 r^6</span>。",
        // EN: Set <span class="chem">S_n = (n/2)(2u_1 + (n-1)d) = 128</span> and solve the resulting quadratic for <span class="chem">n &gt; 0</span>.
        "設 <span class=\"chem\">S_n = (n/2)(2u_1 + (n-1)d) = 128</span>，並解所得二次方程求 <span class=\"chem\">n &gt; 0</span>。",
      ],
      // EN: <p>Equating <span class="chem">S_n = n(n + 8)</span> to <span class="chem">v_7 = 128</span> gives <span class="chem">n^2 + 8n - 128 = 0</span>, which factorizes as <span class="chem">(n + 16)(n - 8) = 0</span>. Since <span class="chem">n</span> is a positive integer, <span class="chem">n = 8</span>.</p>
      solution: "<p>令 <span class=\"chem\">S_n = n(n + 8)</span> 等於 <span class=\"chem\">v_7 = 128</span>，得 <span class=\"chem\">n^2 + 8n - 128 = 0</span>，因式分解為 <span class=\"chem\">(n + 16)(n - 8) = 0</span>。因為 <span class=\"chem\">n</span> 是正整數，所以 <span class=\"chem\">n = 8</span>。</p>",
      // EN: <div class="worked__math"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class="frac"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class="worked__math"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>
      answer: "<div class=\"worked__math\"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class=\"worked__math\"><i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class=\"worked__math\"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>",
      markscheme: [
        // EN: M1: Uses the geometric <span class="chem">n</span>-th term formula <span class="chem">v_7 = v_1 r^6</span>.
        "M1：使用等比數列第 <span class=\"chem\">n</span> 項公式 <span class=\"chem\">v_7 = v_1 r^6</span>。",
        // EN: A1: <span class="chem">v_7 = 2 × 2^6 = 128</span>.
        "A1：<span class=\"chem\">v_7 = 2 × 2^6 = 128</span>。",
        // EN: M1: Substitutes <span class="chem">u_1 = 9</span> and <span class="chem">d = 2</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 128.
        "M1：把 <span class=\"chem\">u_1 = 9</span> 及 <span class=\"chem\">d = 2</span> 代入 <span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span>，並設其等於 128。",
        // EN: A1: Simplifies to <span class="chem">n(n + 8) = 128</span>, i.e. <span class="chem">n^2 + 8n - 128 = 0</span>.
        "A1：化簡為 <span class=\"chem\">n(n + 8) = 128</span>，即 <span class=\"chem\">n^2 + 8n - 128 = 0</span>。",
        // EN: M1: Factorizes as <span class="chem">(n + 16)(n - 8) = 0</span> or uses the quadratic formula.
        "M1：因式分解為 <span class=\"chem\">(n + 16)(n - 8) = 0</span> 或使用二次公式。",
        // EN: A1: Selects <span class="chem">n = 8</span> (rejecting <span class="chem">n = -16</span> since <span class="chem">n</span> is a positive integer).
        "A1：選取 <span class=\"chem\">n = 8</span>（因 <span class=\"chem\">n</span> 為正整數，捨去 <span class=\"chem\">n = -16</span>）。",
      ],
    },

    // ── t1-1-q015 · numeric · challenge · SL · SL 1.3 · 5 marks
    "t1-1-q015": {
      // EN: <p>The first, fourth, and tenth terms of a non-constant arithmetic sequence form the first three consecutive terms of a geometric sequence. Find the common ratio <span class="chem">r</span> of the geometric sequence.</p>
      stem: "<p>一個非常數等差數列的第一、第四及第十項構成一個等比數列的首三個連續項。求 (Find) 該等比數列的公比 <span class=\"chem\">r</span>。</p>",
      hints: [
        // EN: Decode: “non-constant” means <span class="chem">d != 0</span>, which you will need when you divide. “Form a geometric sequence” gives one equation: the middle term squared equals the product of the other two.
        "解碼：「非常數」表示 <span class=\"chem\">d != 0</span>，之後相除時會用到。「組成等比數列」給出一條方程：中間一項的平方等於另外兩項的積。",
        // EN: Write the three arithmetic terms in terms of <span class="chem">u_1</span> and <span class="chem">d</span>: <span class="chem">u_1</span>, <span class="chem">u_1 + 3d</span>, and <span class="chem">u_1 + 9d</span>.
        "以 <span class=\"chem\">u_1</span> 和 <span class=\"chem\">d</span> 表示該三個等差數列項：<span class=\"chem\">u_1</span>、<span class=\"chem\">u_1 + 3d</span> 及 <span class=\"chem\">u_1 + 9d</span>。",
        // EN: Since they form a geometric sequence, equate the ratio: <span class="chem">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span> and solve for <span class="chem">u_1</span> in terms of <span class="chem">d</span> (knowing <span class="chem">d != 0</span>).
        "因為它們構成等比數列，令比值相等：<span class=\"chem\">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span>，並以 <span class=\"chem\">d</span> 表示 <span class=\"chem\">u_1</span>（已知 <span class=\"chem\">d != 0</span>）。",
      ],
      // EN: <div class="worked__math">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>) <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i> ⇒ 9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i> <b>[M1]</b></div><div class=\"worked__math\">Since <i>d</i> ≠ 0, <i>u</i><sub>1</sub> = 3<i>d</i>. Then <i>r</i> = <span class="frac"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class="frac"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b> <b>[A1 A1]</b></div>
      solution: "<div class=\"worked__math\">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i> ⇒ 9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i> <b>[M1]</b></div><div class=\"worked__math\">因為 <i>d</i> ≠ 0，所以 <i>u</i><sub>1</sub> = 3<i>d</i>。於是 <i>r</i> = <span class=\"frac\"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class=\"frac\"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b> <b>[A1 A1]</b></div>",
    },

    // ── t1-1-q016 · numeric · challenge · SL · SL 1.3 · 4 marks
    "t1-1-q016": {
      // EN: <p>At the <strong>start</strong> of every year, Leo deposits 2000 USD into a savings plan that pays 5% interest per annum compounded annually. Find the total value of the savings plan at the <strong>end</strong> of the 10th year. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Leo 在每年的<strong>年初</strong>把 2000 USD 存入一個年利率為 5%、每年計算複利一次的儲蓄計劃。求 (Find) 第 10 年<strong>年底</strong>時該儲蓄計劃的總價值，答案須準確至小數點後 2 位。</p>",
      hints: [
        // EN: Decode: regular deposits make a geometric series, not a single compound-interest calculation. “At the start of every year” means each deposit earns interest in the year it is made, so count how many years of interest each deposit receives.
        "解碼：定期存款構成一個等比級數，而不是單一的複利計算。「每年年初」表示每筆存款在存入的那一年就開始賺取利息，所以要數清每筆存款獲得多少年的利息。",
        // EN: Draw a timeline! The 10th deposit (made at the start of year 10) earns interest for 1 full year, so its final value is <span class="chem">2000(1.05)^1</span>. The 1st deposit earns interest for 10 full years: <span class="chem">2000(1.05)^{10}</span>.
        "畫一條時間線！第 10 筆存款（於第 10 年年初存入）賺取 1 個完整年度的利息，其未來值為 <span class=\"chem\">2000(1.05)^1</span>。第 1 筆存款則賺取 10 個完整年度的利息：<span class=\"chem\">2000(1.05)^{10}</span>。",
        // EN: Sum the 10 geometric terms with first term <span class="chem">a = 2000(1.05) = 2100</span>, ratio <span class="chem">r = 1.05</span>, and <span class="chem">n = 10</span>.
        "對這 10 個等比項求和，其中首項為 <span class=\"chem\">a = 2000(1.05) = 2100</span>，公比為 <span class=\"chem\">r = 1.05</span>，項數為 <span class=\"chem\">n = 10</span>。",
      ],
      // EN: <div class="worked__math">Total = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup> <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>10</sub> = <span class="frac"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">總額 = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>S</i><sub>10</sub> = <span class=\"frac\"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q017 · short · challenge · SL · SL 1.8 · 7 marks
    "t1-1-q017": {
      // EN: <p>Consider the infinite geometric series <span class="chem">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span>.<br>(a) Find the set of values of <span class="chem">x</span> for which the series converges. <strong>[4]</strong><br>(b) Find the value of <span class="chem">x</span> in this set for which the sum to infinity is equal to <span class="chem">2</span>. <strong>[3]</strong></p>
      stem: "<p>考慮無限等比級數 <span class=\"chem\">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span>。<br>(a) 求 (Find) 使該級數收斂的 <span class=\"chem\">x</span> 值範圍。<strong>[4]</strong><br>(b) 在此範圍內，求 (Find) 使無限項之和等於 <span class=\"chem\">2</span> 的 <span class=\"chem\">x</span> 值。<strong>[3]</strong></p>",
      hints: [
        // EN: Decode: compare the terms for <span class="chem">n = 1</span> and <span class="chem">n = 2</span>: the first term is <span class="chem">2x - 1</span> and the common ratio is <span class="chem">x^2 - 3</span>. Part (a) is the condition <span class="chem">|r| &lt; 1</span>; in part (b) the answer must lie in the set from (a).
        "解碼：比較 <span class=\"chem\">n = 1</span> 和 <span class=\"chem\">n = 2</span> 的項：首項是 <span class=\"chem\">2x - 1</span>，公比是 <span class=\"chem\">x^2 - 3</span>。(a) 部分就是條件 <span class=\"chem\">|r| &lt; 1</span>；(b) 部分的答案必須在 (a) 所得的範圍內。",
        // EN: For part (a), solve the double inequality <span class="chem">-1 &lt; x^2 - 3 &lt; 1</span> by adding 3 to all parts.
        "在 (a) 部中，把雙不等式 <span class=\"chem\">-1 &lt; x^2 - 3 &lt; 1</span> 各部分同時加 3 來求解。",
        // EN: For part (b), solve <span class="chem">(2x - 1)/(4 - x^2) = 2</span> and check which root satisfies <span class="chem">2 &lt; x^2 &lt; 4</span>.
        "在 (b) 部中，解 <span class=\"chem\">(2x - 1)/(4 - x^2) = 2</span>，並檢查哪個根滿足 <span class=\"chem\">2 &lt; x^2 &lt; 4</span>。",
      ],
      // EN: <p>Note that for <span class="chem">x = (-1 + sqrt(19))/2</span>, we have <span class="chem">2x^2 = 9 - 2x = 10 - sqrt(19)</span>, so <span class="chem">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span>, which lies strictly between 2 and 4.</p>
      solution: "<p>留意當 <span class=\"chem\">x = (-1 + sqrt(19))/2</span> 時，<span class=\"chem\">2x^2 = 9 - 2x = 10 - sqrt(19)</span>，因此 <span class=\"chem\">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span>，嚴格位於 2 與 4 之間。</p>",
      // EN: <div class="worked__math">(a) Common ratio <i>r</i> = <i>x</i><sup>2</sup> − 3. Convergence requires |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4.</div><div class="worked__math">Thus −2 &lt; <i>x</i> &lt; −√2  or  √2 &lt; <i>x</i> &lt; 2.</div><div class="worked__math">(b) <span class="frac"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class="frac"><span>−1 + √19</span><span>2</span></span></b></div>
      answer: "<div class=\"worked__math\">(a) 公比 <i>r</i> = <i>x</i><sup>2</sup> − 3。收斂條件為 |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4。</div><div class=\"worked__math\">因此 −2 &lt; <i>x</i> &lt; −√2  或  √2 &lt; <i>x</i> &lt; 2。</div><div class=\"worked__math\">(b) <span class=\"frac\"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class=\"frac\"><span>−1 + √19</span><span>2</span></span></b></div>",
      markscheme: [
        // EN: M1: Identifies the common ratio <span class="chem">r = x^2 - 3</span> and sets <span class="chem">|x^2 - 3| &lt; 1</span>.
        "M1：認出公比 <span class=\"chem\">r = x^2 - 3</span> 並列出 <span class=\"chem\">|x^2 - 3| &lt; 1</span>。",
        // EN: A1: Rewrites the inequality as <span class="chem">2 &lt; x^2 &lt; 4</span>.
        "A1：把不等式改寫為 <span class=\"chem\">2 &lt; x^2 &lt; 4</span>。",
        // EN: A1: Obtains the interval <span class="chem">-2 &lt; x &lt; -sqrt(2)</span>.
        "A1：求得區間 <span class=\"chem\">-2 &lt; x &lt; -sqrt(2)</span>。",
        // EN: A1: Obtains the interval <span class="chem">sqrt(2) &lt; x &lt; 2</span>.
        "A1：求得區間 <span class=\"chem\">sqrt(2) &lt; x &lt; 2</span>。",
        // EN: M1: Sets <span class="chem">S_infty = (2x - 1)/(4 - x^2) = 2</span> and rearranges to <span class="chem">2x^2 + 2x - 9 = 0</span>.
        "M1：設 <span class=\"chem\">S_infty = (2x - 1)/(4 - x^2) = 2</span>，並整理為 <span class=\"chem\">2x^2 + 2x - 9 = 0</span>。",
        // EN: A1: Finds the roots <span class="chem">x = (-1 +- sqrt(19))/2</span>.
        "A1：求得根 <span class=\"chem\">x = (-1 +- sqrt(19))/2</span>。",
        // EN: R1: Rejects <span class="chem">(-1 - sqrt(19))/2 ≈ -2.68</span> (outside the interval) and keeps <span class="chem">x = (-1 + sqrt(19))/2 ≈ 1.68</span> (inside <span class="chem">(sqrt(2), 2)</span>).
        "R1：捨去 <span class=\"chem\">(-1 - sqrt(19))/2 ≈ -2.68</span>（不在區間內），保留 <span class=\"chem\">x = (-1 + sqrt(19))/2 ≈ 1.68</span>（位於 <span class=\"chem\">(sqrt(2), 2)</span> 內）。",
      ],
    },

    // ── t1-1-q018 · numeric · exam · SL · SL 1.4 · 3 marks
    "t1-1-q018": {
      // EN: <p>Ines invests 5000 EUR in an account that pays 4% interest per annum, compounded annually. The annual inflation rate is expected to be 2.5% throughout. Using the real interest rate <span class="chem">(4 - 2.5)%</span>, find the real value of her investment after 8 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Ines 把 5000 EUR 存入一個年利率 4%、每年計算複利一次的帳戶。預計每年通脹率一直為 2.5%。利用實質利率 <span class=\"chem\">(4 - 2.5)%</span>，求 (Find) 8 年後她的投資的實質價值，答案須準確至小數點後 2 位。</p>",
      hints: [
        // EN: The real value removes the effect of inflation, so use the interest rate minus the inflation rate: <span class="chem">r = 4 - 2.5 = 1.5</span>.
        "實質價值會扣除通脹的影響，所以使用利率減通脹率：<span class=\"chem\">r = 4 - 2.5 = 1.5</span>。",
        // EN: Substitute <span class="chem">PV = 5000</span>, <span class="chem">r = 1.5</span>, <span class="chem">k = 1</span>, <span class="chem">n = 8</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>, or use the Finance Solver with <span class="mono">I% = 1.5</span>.
        "把 <span class=\"chem\">PV = 5000</span>、<span class=\"chem\">r = 1.5</span>、<span class=\"chem\">k = 1</span>、<span class=\"chem\">n = 8</span> 代入 <span class=\"chem\">FV = PV(1 + r/(100k))^{kn}</span>，或在 Finance Solver 中輸入 <span class=\"mono\">I% = 1.5</span>。",
      ],
      // EN: <div class="worked__math">Real rate = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class="worked__math">Real value = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>Correct to 2 decimal places, the real value is <strong>5632.46 EUR</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\">實質利率 = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class=\"worked__math\">實質價值 = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>準確至小數點後 2 位，實質價值為 <strong>5632.46 EUR</strong>。<b>[A1]</b></p>",
    },
  }
});
