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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't1-1.q', {
  questions: {

    // ── t1-1-q019 · numeric · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q019": {
      // EN: <p>The number <span class="chem">(3.6 × 10^4) × (5.0 × 10^{-9})</span> can be written in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>數 <span class=\"chem\">(3.6 × 10^4) × (5.0 × 10^{-9})</span> 可寫成 <span class=\"chem\">a × 10^k</span> 的形式，其中 <span class=\"chem\">1 &lt;= a &lt; 10</span> 且 <span class=\"chem\">k</span> 為整數。求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Multiply the leading numbers and add the powers of 10 separately: <span class="chem">(3.6 × 5.0) × 10^{4 + (-9)}</span>.
        "把前面的數相乘，並把 10 的指數分開相加：<span class=\"chem\">(3.6 × 5.0) × 10^{4 + (-9)}</span>。",
        // EN: The product of the leading numbers is greater than 10, so move one factor of 10 into the power.
        "前面兩數之積大於 10，所以要把一個因數 10 移入 10 的冪中。",
      ],
      // EN: <div class="worked__math">(3.6 × 5.0) × 10<sup>4 − 9</sup> = 18 × 10<sup>−5</sup> <b>[M1]</b></div><div class="worked__math">18 × 10<sup>−5</sup> = 1.8 × 10<sup>1</sup> × 10<sup>−5</sup> = 1.8 × 10<sup>−4</sup>, so <b><i>k</i> = −4</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(3.6 × 5.0) × 10<sup>4 − 9</sup> = 18 × 10<sup>−5</sup>   <b>[M1]</b></div><div class=\"worked__math\">18 × 10<sup>−5</sup> = 1.8 × 10<sup>1</sup> × 10<sup>−5</sup> = 1.8 × 10<sup>−4</sup>，所以 <b><i>k</i> = −4</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q020 · numeric · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q020": {
      // EN: <p>One light year is <span class="chem">9.461 × 10^{15}</span> metres. A star is 4.24 light years from the Sun. Calculate this distance in metres. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer, with <span class="chem">a</span> correct to 3 significant figures.</p>
      stem: "<p>1 光年為 <span class=\"chem\">9.461 × 10^{15}</span> 米。某恆星與太陽的距離為 4.24 光年。計算 (Calculate) 這段距離是多少米。答案以 <span class=\"chem\">a × 10^k</span> 的形式表示，其中 <span class=\"chem\">1 &lt;= a &lt; 10</span> 且 <span class=\"chem\">k</span> 為整數，而 <span class=\"chem\">a</span> 須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Multiply: distance = <span class="chem">4.24 × 9.461 × 10^{15}</span>. On the GDC, enter the power of 10 with the <span class="mono">EE</span> (or <span class="mono">×10ˣ</span>) key.
        "相乘：距離 = <span class=\"chem\">4.24 × 9.461 × 10^{15}</span>。在 GDC 上，用 <span class=\"mono\">EE</span>（或 <span class=\"mono\">×10ˣ</span>）鍵輸入 10 的冪。",
        // EN: Round the leading number to 3 significant figures and check that it lies between 1 and 10.
        "把前面的數捨入至 3 位有效數字，並檢查它是否介乎 1 與 10 之間。",
      ],
      // EN: <div class="worked__math">4.24 × 9.461 × 10<sup>15</sup> = 40.114… × 10<sup>15</sup> <b>[M1]</b></div><div class="worked__math">= 4.0114… × 10<sup>16</sup> ≈ <b>4.01 × 10<sup>16</sup> m</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">4.24 × 9.461 × 10<sup>15</sup> = 40.114… × 10<sup>15</sup>   <b>[M1]</b></div><div class=\"worked__math\">= 4.0114… × 10<sup>16</sup> ≈ <b>4.01 × 10<sup>16</sup> m</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q021 · numeric · foundation · SL · SL 1.3 · 3 marks
    "t1-1-q021": {
      // EN: <p>In a geometric sequence, <span class="chem">u_2 = 6</span> and <span class="chem">u_5 = 162</span>. Find <span class="chem">u_7</span>.</p>
      stem: "<p>在一個等比數列中，<span class=\"chem\">u_2 = 6</span> 及 <span class=\"chem\">u_5 = 162</span>。求 (Find) <span class=\"chem\">u_7</span>。</p>",
      hints: [
        // EN: From <span class="chem">u_2</span> to <span class="chem">u_5</span> you multiply by <span class="chem">r</span> three times, so <span class="chem">r^3 = 162/6</span>.
        "由 <span class=\"chem\">u_2</span> 到 <span class=\"chem\">u_5</span> 要乘以 <span class=\"chem\">r</span> 三次，所以 <span class=\"chem\">r^3 = 162/6</span>。",
        // EN: Once you have <span class="chem">r</span>, go from <span class="chem">u_2</span> to <span class="chem">u_7</span>: that is five more multiplications by <span class="chem">r</span>.
        "求得 <span class=\"chem\">r</span> 後，由 <span class=\"chem\">u_2</span> 走到 <span class=\"chem\">u_7</span>：即再乘以 <span class=\"chem\">r</span> 五次。",
      ],
      // EN: <div class="worked__math"><i>r</i><sup>3</sup> = <span class="frac"><span>162</span><span>6</span></span> = 27 <b>[M1]</b></div><div class="worked__math"><i>r</i> = 3 <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>7</sub> = <i>u</i><sub>2</sub><i>r</i><sup>5</sup> = 6 × 243 = <b>1458</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>r</i><sup>3</sup> = <span class=\"frac\"><span>162</span><span>6</span></span> = 27   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>7</sub> = <i>u</i><sub>2</sub><i>r</i><sup>5</sup> = 6 × 243 = <b>1458</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q022 · numeric · foundation · SL · SL 1.4 · 3 marks
    "t1-1-q022": {
      // EN: <p>A laptop is bought for 1850 GBP. Its value decreases by 22% each year. Calculate its value after 4 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>一部手提電腦以 1850 GBP 購入，其價值每年減少 22%。計算 (Calculate) 4 年後它的價值，答案須準確至小數點後 2 位。</p>",
      hints: [
        // EN: Losing 22% each year means the value is multiplied by <span class="chem">1 - 0.22 = 0.78</span> each year.
        "每年減少 22% 表示價值每年乘以 <span class=\"chem\">1 - 0.22 = 0.78</span>。",
        // EN: Value after 4 years <span class="chem">= 1850 × 0.78^4</span>. On the Finance Solver: <span class="mono">N = 4, I% = −22, PV = −1850, PMT = 0, P/Y = C/Y = 1</span>, solve for FV.
        "4 年後的價值 <span class=\"chem\">= 1850 × 0.78^4</span>。在 Finance Solver 上：<span class=\"mono\">N = 4, I% = −22, PV = −1850, PMT = 0, P/Y = C/Y = 1</span>，然後解出 FV。",
      ],
      // EN: <div class="worked__math">Multiplier = 1 − 0.22 = 0.78 <b>[M1]</b></div><div class="worked__math"><i>V</i> = 1850 × 0.78<sup>4</sup> <b>[M1]</b></div><div class="worked__math">= 684.778… ≈ <b>684.78 GBP</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">乘數 = 1 − 0.22 = 0.78   <b>[M1]</b></div><div class=\"worked__math\"><i>V</i> = 1850 × 0.78<sup>4</sup>   <b>[M1]</b></div><div class=\"worked__math\">= 684.778… ≈ <b>684.78 GBP</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q023 · numeric · exam · SL · SL 1.2 · 5 marks
    "t1-1-q023": {
      // EN: <p>Given that <span class="chem">Σ_{r=1}^{n} (4r + 3) = 1375</span>, find the value of <span class="chem">n</span>.</p>
      stem: "<p>已知 <span class=\"chem\">Σ_{r=1}^{n} (4r + 3) = 1375</span>，求 (Find) <span class=\"chem\">n</span> 的值。</p>",
      hints: [
        // EN: Write out the first two terms (<span class="chem">r = 1, 2</span>): the sum is arithmetic with first term 7 and common difference 4.
        "寫出首兩項（<span class=\"chem\">r = 1, 2</span>）：這是一個首項為 7、公差為 4 的等差級數。",
        // EN: Use <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span>, simplify to a quadratic in <span class="chem">n</span> and factorize.
        "使用 <span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span>，化簡成 <span class=\"chem\">n</span> 的二次方程，然後因式分解。",
        // EN: You should reach <span class="chem">2n^2 + 5n - 1375 = 0</span>. Remember that <span class="chem">n</span> is a positive integer.
        "你應得到 <span class=\"chem\">2n^2 + 5n - 1375 = 0</span>。記住 <span class=\"chem\">n</span> 是正整數。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = 7, <i>d</i> = 4 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(14 + 4(<i>n</i> − 1)) = 2<i>n</i><sup>2</sup> + 5<i>n</i> <b>[M1 A1]</b></div><div class="worked__math">2<i>n</i><sup>2</sup> + 5<i>n</i> − 1375 = 0 ⇒ (2<i>n</i> + 55)(<i>n</i> − 25) = 0 <b>[M1]</b></div><div class="worked__math">Since <i>n</i> is a positive integer, <b><i>n</i> = 25</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = 7, <i>d</i> = 4   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(14 + 4(<i>n</i> − 1)) = 2<i>n</i><sup>2</sup> + 5<i>n</i>   <b>[M1 A1]</b></div><div class=\"worked__math\">2<i>n</i><sup>2</sup> + 5<i>n</i> − 1375 = 0  ⇒  (2<i>n</i> + 55)(<i>n</i> − 25) = 0   <b>[M1]</b></div><div class=\"worked__math\">因為 <i>n</i> 是正整數，所以 <b><i>n</i> = 25</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q024 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q024": {
      // EN: <p>A theatre has 30 rows of seats. The front row has 18 seats, and each row has 3 more seats than the row in front of it.</p><p>(a) Write down the number of seats in the second row. <strong>[1]</strong><br>(b) Find the number of seats in the back row. <strong>[2]</strong><br>(c) Find the total number of seats in the theatre. <strong>[2]</strong><br>(d) For a small concert, only the first <span class="chem">n</span> rows (starting from the front) are opened. Find the least value of <span class="chem">n</span> for which at least 1000 seats are available. <strong>[3]</strong></p>
      stem: "<p>一間劇院有 30 行座位。第一行有 18 個座位，而每一行都比前面一行多 3 個座位。</p><p>(a) 寫出 (Write down) 第二行的座位數目。<strong>[1]</strong><br>(b) 求 (Find) 最後一行的座位數目。<strong>[2]</strong><br>(c) 求 (Find) 劇院的座位總數。<strong>[2]</strong><br>(d) 在一場小型音樂會中，只開放（由前面起計）首 <span class=\"chem\">n</span> 行座位。求 (Find) 使可用座位至少有 1000 個的 <span class=\"chem\">n</span> 的最小值。<strong>[3]</strong></p>",
      hints: [
        // EN: Decode: the numbers of seats in the rows form an arithmetic sequence with <span class="chem">u_1 = 18</span> and <span class="chem">d = 3</span>. Parts (b) and (c) use <span class="chem">u_n</span> and <span class="chem">S_n</span>; part (d) asks for the least <span class="chem">n</span> with <span class="chem">S_n &gt;= 1000</span>.
        "解碼：各行的座位數目構成一個等差數列，其中 <span class=\"chem\">u_1 = 18</span>、<span class=\"chem\">d = 3</span>。(b) 和 (c) 部分使用 <span class=\"chem\">u_n</span> 及 <span class=\"chem\">S_n</span>；(d) 部分要求滿足 <span class=\"chem\">S_n &gt;= 1000</span> 的最小 <span class=\"chem\">n</span>。",
        // EN: For (d), write <span class="chem">S_n = (n/2)(36 + 3(n - 1))</span> and use the GDC: graph it against <span class="chem">y = 1000</span>, or look down a table of values.
        "在 (d) 部中，寫出 <span class=\"chem\">S_n = (n/2)(36 + 3(n - 1))</span> 並使用 GDC：把它與 <span class=\"chem\">y = 1000</span> 一同繪圖，或查看數值表。",
        // EN: The root of <span class="chem">S_n = 1000</span> is not a whole number. Round up, because <span class="chem">n</span> is a number of rows.
        "<span class=\"chem\">S_n = 1000</span> 的根不是整數。由於 <span class=\"chem\">n</span> 是行數，所以要向上取整。",
      ],
      // EN: <p>The decoding step: "each row has 3 more seats" means an arithmetic sequence. Then (b) is a term, (c) is a sum, and (d) is an inequality in <span class="chem">n</span>. The equation <span class="chem">3n^2 + 33n - 2000 = 0</span> has positive root <span class="chem">n ≈ 20.9</span>, so 20 rows give only 930 seats and 21 rows give 1008. The least value is <span class="chem">n = 21</span>.</p>
      solution: "<p>解碼步驟：「每一行多 3 個座位」表示一個等差數列。於是 (b) 是求一項，(c) 是求和，(d) 是關於 <span class=\"chem\">n</span> 的不等式。方程 <span class=\"chem\">3n^2 + 33n - 2000 = 0</span> 的正根為 <span class=\"chem\">n ≈ 20.9</span>，所以 20 行只有 930 個座位，而 21 行有 1008 個。最小值為 <span class=\"chem\">n = 21</span>。</p>",
      // EN: <div class="worked__math">(a) 18 + 3 = <b>21</b></div><div class="worked__math">(b) <i>u</i><sub>30</sub> = 18 + 29 × 3 = <b>105</b></div><div class="worked__math">(c) <i>S</i><sub>30</sub> = <span class="frac"><span>30</span><span>2</span></span>(18 + 105) = <b>1845</b></div><div class="worked__math">(d) <span class="frac"><span><i>n</i></span><span>2</span></span>(36 + 3(<i>n</i> − 1)) ≥ 1000. GDC: <i>S</i><sub>20</sub> = 930, <i>S</i><sub>21</sub> = 1008 (or the root <i>n</i> ≈ 20.9), so <b><i>n</i> = 21</b></div>
      answer: "<div class=\"worked__math\">(a) 18 + 3 = <b>21</b></div><div class=\"worked__math\">(b) <i>u</i><sub>30</sub> = 18 + 29 × 3 = <b>105</b></div><div class=\"worked__math\">(c) <i>S</i><sub>30</sub> = <span class=\"frac\"><span>30</span><span>2</span></span>(18 + 105) = <b>1845</b></div><div class=\"worked__math\">(d) <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(36 + 3(<i>n</i> − 1)) ≥ 1000。GDC：<i>S</i><sub>20</sub> = 930，<i>S</i><sub>21</sub> = 1008（或根 <i>n</i> ≈ 20.9），所以 <b><i>n</i> = 21</b></div>",
      markscheme: [
        // EN: A1: (a) 21 seats.
        "A1：(a) 21 個座位。",
        // EN: M1: (b) Uses <span class="chem">u_{30} = u_1 + 29d</span> with <span class="chem">u_1 = 18</span>, <span class="chem">d = 3</span>.
        "M1：(b) 使用 <span class=\"chem\">u_{30} = u_1 + 29d</span>，其中 <span class=\"chem\">u_1 = 18</span>、<span class=\"chem\">d = 3</span>。",
        // EN: A1: (b) 105 seats.
        "A1：(b) 105 個座位。",
        // EN: M1: (c) Uses <span class="chem">S_{30} = (30/2)(18 + 105)</span> or <span class="chem">(30/2)(36 + 29 × 3)</span>.
        "M1：(c) 使用 <span class=\"chem\">S_{30} = (30/2)(18 + 105)</span> 或 <span class=\"chem\">(30/2)(36 + 29 × 3)</span>。",
        // EN: A1: (c) 1845 seats.
        "A1：(c) 1845 個座位。",
        // EN: M1: (d) Sets up <span class="chem">(n/2)(36 + 3(n - 1)) &gt;= 1000</span> (an equation is acceptable).
        "M1：(d) 列出 <span class=\"chem\">(n/2)(36 + 3(n - 1)) &gt;= 1000</span>（列出方程亦可接受）。",
        // EN: A1: (d) Uses the GDC: root <span class="chem">n ≈ 20.9</span>, or the table values <span class="chem">S_{20} = 930</span> and <span class="chem">S_{21} = 1008</span>.
        "A1：(d) 使用 GDC：根 <span class=\"chem\">n ≈ 20.9</span>，或數值表中的 <span class=\"chem\">S_{20} = 930</span> 及 <span class=\"chem\">S_{21} = 1008</span>。",
        // EN: A1: (d) <span class="chem">n = 21</span>.
        "A1：(d) <span class=\"chem\">n = 21</span>。",
      ],
    },

    // ── t1-1-q025 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q025": {
      // EN: <p>The fifth term of an arithmetic sequence is 23 and the sum of the first 12 terms is 348.</p><p>(a) Show that <span class="chem">2u_1 + 11d = 58</span>. <strong>[2]</strong><br>(b) Find the value of <span class="chem">u_1</span> and the value of <span class="chem">d</span>. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which <span class="chem">u_n &gt; 500</span>. <strong>[3]</strong></p>
      stem: "<p>一個等差數列的第五項是 23，而首 12 項之和是 348。</p><p>(a) 證明 (Show that) <span class=\"chem\">2u_1 + 11d = 58</span>。<strong>[2]</strong><br>(b) 求 (Find) <span class=\"chem\">u_1</span> 的值及 <span class=\"chem\">d</span> 的值。<strong>[3]</strong><br>(c) 求 (Find) 使 <span class=\"chem\">u_n &gt; 500</span> 的 <span class=\"chem\">n</span> 的最小值。<strong>[3]</strong></p>",
      hints: [
        // EN: For (a), the only formula involving a sum of 12 terms is <span class="chem">S_{12} = (12/2)(2u_1 + 11d)</span>.
        "在 (a) 部中，唯一涉及 12 項之和的公式是 <span class=\"chem\">S_{12} = (12/2)(2u_1 + 11d)</span>。",
        // EN: For (b), "the fifth term is 23" gives a second equation, <span class="chem">u_1 + 4d = 23</span>. Solve the pair simultaneously.
        "在 (b) 部中，「第五項是 23」給出第二條方程 <span class=\"chem\">u_1 + 4d = 23</span>。解這對聯立方程。",
        // EN: For (c), solve <span class="chem">u_n = 500</span>, then choose the next integer above the root.
        "在 (c) 部中，解 <span class=\"chem\">u_n = 500</span>，然後選取大於該根的下一個整數。",
      ],
      // EN: <p>Two facts give two equations: <span class="chem">u_1 + 4d = 23</span> and <span class="chem">2u_1 + 11d = 58</span>. Doubling the first and subtracting gives <span class="chem">3d = 12</span>, so <span class="chem">d = 4</span> and <span class="chem">u_1 = 7</span>. Then <span class="chem">u_n = 4n + 3</span>, and <span class="chem">4n + 3 &gt; 500</span> gives <span class="chem">n &gt; 124.25</span>, so the least value is <span class="chem">n = 125</span>. Check: <span class="chem">u_{124} = 499</span> and <span class="chem">u_{125} = 503</span>.</p>
      solution: "<p>兩項資料給出兩條方程：<span class=\"chem\">u_1 + 4d = 23</span> 及 <span class=\"chem\">2u_1 + 11d = 58</span>。把第一條乘以 2 再相減，得 <span class=\"chem\">3d = 12</span>，所以 <span class=\"chem\">d = 4</span>、<span class=\"chem\">u_1 = 7</span>。於是 <span class=\"chem\">u_n = 4n + 3</span>，而 <span class=\"chem\">4n + 3 &gt; 500</span> 給出 <span class=\"chem\">n &gt; 124.25</span>，所以最小值為 <span class=\"chem\">n = 125</span>。驗算：<span class=\"chem\">u_{124} = 499</span> 及 <span class=\"chem\">u_{125} = 503</span>。</p>",
      // EN: <div class="worked__math">(a) <i>S</i><sub>12</sub> = <span class="frac"><span>12</span><span>2</span></span>(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348 ⇒ 6(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348 ⇒ 2<i>u</i><sub>1</sub> + 11<i>d</i> = 58</div><div class="worked__math">(b) <i>u</i><sub>1</sub> + 4<i>d</i> = 23, so 2<i>u</i><sub>1</sub> + 8<i>d</i> = 46. Subtracting: 3<i>d</i> = 12, so <b><i>d</i> = 4</b> and <b><i>u</i><sub>1</sub> = 7</b></div><div class="worked__math">(c) 7 + 4(<i>n</i> − 1) &gt; 500 ⇒ 4<i>n</i> + 3 &gt; 500 ⇒ <i>n</i> &gt; 124.25, so <b><i>n</i> = 125</b></div>
      answer: "<div class=\"worked__math\">(a) <i>S</i><sub>12</sub> = <span class=\"frac\"><span>12</span><span>2</span></span>(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348  ⇒  6(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348  ⇒  2<i>u</i><sub>1</sub> + 11<i>d</i> = 58</div><div class=\"worked__math\">(b) <i>u</i><sub>1</sub> + 4<i>d</i> = 23，所以 2<i>u</i><sub>1</sub> + 8<i>d</i> = 46。相減：3<i>d</i> = 12，所以 <b><i>d</i> = 4</b> 及 <b><i>u</i><sub>1</sub> = 7</b></div><div class=\"worked__math\">(c) 7 + 4(<i>n</i> − 1) &gt; 500  ⇒  4<i>n</i> + 3 &gt; 500  ⇒  <i>n</i> &gt; 124.25，所以 <b><i>n</i> = 125</b></div>",
      markscheme: [
        // EN: M1: (a) Substitutes <span class="chem">n = 12</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 348.
        "M1：(a) 把 <span class=\"chem\">n = 12</span> 代入 <span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span>，並設其等於 348。",
        // EN: A1: (a) Obtains <span class="chem">6(2u_1 + 11d) = 348</span>, which leads to the given result <span class="chem">2u_1 + 11d = 58</span> (the given line itself earns no mark).
        "A1：(a) 得出 <span class=\"chem\">6(2u_1 + 11d) = 348</span>，從而得到所給結果 <span class=\"chem\">2u_1 + 11d = 58</span>（只寫出所給的式子本身不得分）。",
        // EN: M1: (b) Writes <span class="chem">u_1 + 4d = 23</span> and solves it simultaneously with <span class="chem">2u_1 + 11d = 58</span>.
        "M1：(b) 寫出 <span class=\"chem\">u_1 + 4d = 23</span>，並與 <span class=\"chem\">2u_1 + 11d = 58</span> 聯立求解。",
        // EN: A1: (b) <span class="chem">d = 4</span>.
        "A1：(b) <span class=\"chem\">d = 4</span>。",
        // EN: A1: (b) <span class="chem">u_1 = 7</span>.
        "A1：(b) <span class=\"chem\">u_1 = 7</span>。",
        // EN: M1: (c) Sets up <span class="chem">7 + 4(n - 1) &gt; 500</span> (an equation is acceptable).
        "M1：(c) 列出 <span class=\"chem\">7 + 4(n - 1) &gt; 500</span>（列出方程亦可接受）。",
        // EN: A1: (c) <span class="chem">n &gt; 124.25</span> (or <span class="chem">n = 124.25</span>).
        "A1：(c) <span class=\"chem\">n &gt; 124.25</span>（或 <span class=\"chem\">n = 124.25</span>）。",
        // EN: A1: (c) <span class="chem">n = 125</span>.
        "A1：(c) <span class=\"chem\">n = 125</span>。",
      ],
    },

    // ── t1-1-q026 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q026": {
      // EN: <p>A science fair had 1210 visitors in year 1, 1295 in year 2, 1388 in year 3, 1462 in year 4 and 1550 in year 5.</p><p>(a) Explain why the numbers of visitors do not form an arithmetic sequence. <strong>[1]</strong><br>(b) Show that the mean of the four year-on-year increases is 85. <strong>[2]</strong><br>The organisers model the number of visitors in year <span class="chem">n</span> by the arithmetic sequence <span class="chem">u_n = 1210 + 85(n - 1)</span>.<br>(c) Use the model to predict the number of visitors in year 10. <strong>[2]</strong><br>(d) Use the model to predict the total number of visitors in the first 10 years. <strong>[2]</strong><br>(e) Explain why the model may not be reliable for predicting the number of visitors in year 30. <strong>[1]</strong></p>
      stem: "<p>某科學展覽第 1 年有 1210 名參觀者，第 2 年有 1295 名，第 3 年有 1388 名，第 4 年有 1462 名，第 5 年有 1550 名。</p><p>(a) 解釋 (Explain) 為何參觀人數不構成等差數列。<strong>[1]</strong><br>(b) 證明 (Show that) 四個按年增幅的平均值是 85。<strong>[2]</strong><br>主辦單位以等差數列 <span class=\"chem\">u_n = 1210 + 85(n - 1)</span> 模擬第 <span class=\"chem\">n</span> 年的參觀人數。<br>(c) 利用該模型預測第 10 年的參觀人數。<strong>[2]</strong><br>(d) 利用該模型預測首 10 年的參觀總人數。<strong>[2]</strong><br>(e) 解釋 (Explain) 為何該模型用來預測第 30 年的參觀人數未必可靠。<strong>[1]</strong></p>",
      hints: [
        // EN: Decode: real data are only roughly arithmetic. The question asks you to test for a common difference, build an arithmetic model from the average difference, and then use <span class="chem">u_n</span> and <span class="chem">S_n</span> of the model.
        "解碼：真實數據只是大致呈等差。題目要求你檢驗是否有公差，以平均差建立一個等差模型，然後使用該模型的 <span class=\"chem\">u_n</span> 及 <span class=\"chem\">S_n</span>。",
        // EN: For (a), work out the four differences between consecutive years.
        "在 (a) 部中，算出相鄰年份之間的四個差。",
        // EN: For (d), the model is arithmetic, so <span class="chem">S_{10} = (10/2)(u_1 + u_{10})</span> uses your answer to (c).
        "在 (d) 部中，該模型是等差的，所以 <span class=\"chem\">S_{10} = (10/2)(u_1 + u_{10})</span> 會用到你在 (c) 部的答案。",
      ],
      // EN: <p>Decoding: the context is a model that is "not perfectly arithmetic". The differences 85, 93, 74, 88 are not constant, so the data are not exactly arithmetic, but they are close to a constant 85 on average. Using <span class="chem">d = 85</span> gives <span class="chem">u_{10} = 1975</span> and <span class="chem">S_{10} = 5(1210 + 1975) = 15925</span>. Predictions far outside the data range (extrapolation) are less reliable.</p>
      solution: "<p>解碼：情境是一個「並非完全等差」的模型。差 85、93、74、88 並非常數，所以數據並非準確地呈等差，但平均而言接近常數 85。使用 <span class=\"chem\">d = 85</span> 得 <span class=\"chem\">u_{10} = 1975</span> 及 <span class=\"chem\">S_{10} = 5(1210 + 1975) = 15925</span>。遠在數據範圍以外的預測（外推）較不可靠。</p>",
      // EN: <div class="worked__math">(a) The increases are 85, 93, 74, 88: they are not constant.</div><div class="worked__math">(b) <span class="frac"><span>85 + 93 + 74 + 88</span><span>4</span></span> = <span class="frac"><span>340</span><span>4</span></span> = 85 (equivalently <span class="frac"><span>1550 − 1210</span><span>4</span></span>)</div><div class="worked__math">(c) <i>u</i><sub>10</sub> = 1210 + 9 × 85 = <b>1975</b></div><div class="worked__math">(d) <i>S</i><sub>10</sub> = <span class="frac"><span>10</span><span>2</span></span>(1210 + 1975) = <b>15 925</b></div><div class="worked__math">(e) Year 30 is far outside the data (years 1 to 5), and the real increases vary from year to year, so the error can build up.</div>
      answer: "<div class=\"worked__math\">(a) 增幅為 85、93、74、88：它們不是常數。</div><div class=\"worked__math\">(b) <span class=\"frac\"><span>85 + 93 + 74 + 88</span><span>4</span></span> = <span class=\"frac\"><span>340</span><span>4</span></span> = 85（等價地，<span class=\"frac\"><span>1550 − 1210</span><span>4</span></span>）</div><div class=\"worked__math\">(c) <i>u</i><sub>10</sub> = 1210 + 9 × 85 = <b>1975</b></div><div class=\"worked__math\">(d) <i>S</i><sub>10</sub> = <span class=\"frac\"><span>10</span><span>2</span></span>(1210 + 1975) = <b>15 925</b></div><div class=\"worked__math\">(e) 第 30 年遠在數據（第 1 至 5 年）以外，而且真實的增幅每年都不同，所以誤差會不斷累積。</div>",
      markscheme: [
        // EN: R1: (a) States that the differences (85, 93, 74, 88) are not all equal, so there is no common difference.
        "R1：(a) 指出各差（85、93、74、88）並非全部相等，所以沒有公差。",
        // EN: M1: (b) Adds the four increases (or uses <span class="chem">1550 - 1210</span>) and divides by 4.
        "M1：(b) 把四個增幅相加（或使用 <span class=\"chem\">1550 - 1210</span>）再除以 4。",
        // EN: A1: (b) Obtains the total increase <span class="chem">340</span>, so <span class="chem">340/4 = 85</span> (the given result itself earns no mark).
        "A1：(b) 得出總增幅 <span class=\"chem\">340</span>，所以 <span class=\"chem\">340/4 = 85</span>（所給結果本身不得分）。",
        // EN: M1: (c) Substitutes <span class="chem">n = 10</span>: <span class="chem">1210 + 9 × 85</span>.
        "M1：(c) 代入 <span class=\"chem\">n = 10</span>：<span class=\"chem\">1210 + 9 × 85</span>。",
        // EN: A1: (c) 1975 visitors.
        "A1：(c) 1975 名參觀者。",
        // EN: M1: (d) Uses <span class="chem">S_{10} = (10/2)(1210 + 1975)</span> or <span class="chem">(10/2)(2 × 1210 + 9 × 85)</span>.
        "M1：(d) 使用 <span class=\"chem\">S_{10} = (10/2)(1210 + 1975)</span> 或 <span class=\"chem\">(10/2)(2 × 1210 + 9 × 85)</span>。",
        // EN: A1: (d) 15 925 visitors.
        "A1：(d) 15 925 名參觀者。",
        // EN: R1: (e) Any valid reason, e.g. extrapolation far beyond the 5 years of data, or the real increases are not constant.
        "R1：(e) 任何合理的理由，例如遠超 5 年數據範圍的外推，或真實增幅並非常數。",
      ],
    },

    // ── t1-1-q027 · numeric · challenge · SL · SL 1.2, 1.3 · 5 marks
    "t1-1-q027": {
      // EN: <p>Priya is offered two jobs. In Offer A, the annual salary is 42 000 EUR in the first year and rises by 1500 EUR each year after that. In Offer B, the annual salary is 38 000 EUR in the first year and rises by 5% each year after that. Find the first year in which the annual salary in Offer B is greater than the annual salary in Offer A.</p>
      stem: "<p>Priya 獲得兩份工作邀約。邀約 A 的第一年年薪為 42 000 EUR，其後每年增加 1500 EUR。邀約 B 的第一年年薪為 38 000 EUR，其後每年增加 5%。求 (Find) 邀約 B 的年薪首次高於邀約 A 的年薪的年份。</p>",
      hints: [
        // EN: Decode: Offer A is an arithmetic sequence and Offer B is a geometric sequence. You must find the least integer <span class="chem">n</span> for which the <span class="chem">n</span>-th term of B is bigger than the <span class="chem">n</span>-th term of A (salaries in one year, not totals).
        "解碼：邀約 A 是等差數列，邀約 B 是等比數列。你必須求出使 B 的第 <span class=\"chem\">n</span> 項大於 A 的第 <span class=\"chem\">n</span> 項的最小整數 <span class=\"chem\">n</span>（比較的是某一年的薪金，而不是總額）。",
        // EN: Write <span class="chem">A_n = 42000 + 1500(n - 1)</span> and <span class="chem">B_n = 38000(1.05)^{n-1}</span>. Note the power is <span class="chem">n - 1</span>: there is no rise in year 1.
        "寫出 <span class=\"chem\">A_n = 42000 + 1500(n - 1)</span> 及 <span class=\"chem\">B_n = 38000(1.05)^{n-1}</span>。留意指數是 <span class=\"chem\">n - 1</span>：第 1 年沒有加薪。",
        // EN: This inequality mixes a linear and an exponential expression, so solve it with the GDC: graph both and find the intersection, or compare a table of values.
        "這個不等式同時含有線性式和指數式，所以要用 GDC 求解：繪畫兩者的圖像並求交點，或比較數值表。",
      ],
      // EN: <p>Decoding: "rises by 1500 each year" is arithmetic, "rises by 5% each year" is geometric, and "annual salary" means individual terms.</p><div class="worked__math"><i>A</i><sub><i>n</i></sub> = 42000 + 1500(<i>n</i> − 1) <b>[M1]</b></div><div class="worked__math"><i>B</i><sub><i>n</i></sub> = 38000(1.05)<sup><i>n</i>−1</sup> <b>[M1]</b></div><div class="worked__math">GDC table or graph of <i>B</i><sub><i>n</i></sub> − <i>A</i><sub><i>n</i></sub> <b>[M1]</b></div><div class="worked__math">Year 7: <i>A</i> = 51 000, <i>B</i> = 50 923.63; year 8: <i>A</i> = 52 500, <i>B</i> = 53 469.82 <b>[A1]</b></div><div class="worked__math">First year: <b>year 8</b> <b>[A1]</b></div>
      solution: "<p>解碼：「每年增加 1500」是等差，「每年增加 5%」是等比，而「年薪」指的是個別的項。</p><div class=\"worked__math\"><i>A</i><sub><i>n</i></sub> = 42000 + 1500(<i>n</i> − 1)   <b>[M1]</b></div><div class=\"worked__math\"><i>B</i><sub><i>n</i></sub> = 38000(1.05)<sup><i>n</i>−1</sup>   <b>[M1]</b></div><div class=\"worked__math\">以 GDC 列出 <i>B</i><sub><i>n</i></sub> − <i>A</i><sub><i>n</i></sub> 的數值表或圖像   <b>[M1]</b></div><div class=\"worked__math\">第 7 年：<i>A</i> = 51 000，<i>B</i> = 50 923.63；第 8 年：<i>A</i> = 52 500，<i>B</i> = 53 469.82   <b>[A1]</b></div><div class=\"worked__math\">首次出現的年份：<b>第 8 年</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q028 · numeric · challenge · SL · SL 1.2, 1.3 · 5 marks
    "t1-1-q028": {
      // EN: <p>A sports club offers two membership plans. On Plan P, the fee is 300 GBP for the first year and goes up by 25 GBP every year after that. On Plan Q, the fee is 240 GBP for the first year and goes up by 8% every year after that. Ravi intends to stay a member for <span class="chem">N</span> complete years. Find the largest value of <span class="chem">N</span> for which the total amount Ravi pays on Plan Q is less than the total amount he would pay on Plan P.</p>
      stem: "<p>某體育會提供兩種會籍計劃。在計劃 P 中，第一年的會費為 300 GBP，其後每年增加 25 GBP。在計劃 Q 中，第一年的會費為 240 GBP，其後每年增加 8%。Ravi 打算做會員 <span class=\"chem\">N</span> 個完整年度。求 (Find) 使 Ravi 在計劃 Q 中所付的總額少於他在計劃 P 中所需付的總額的 <span class=\"chem\">N</span> 的最大值。</p>",
      hints: [
        // EN: Decode: this time "total amount paid" means you compare sums, not single fees. Plan P gives an arithmetic series, Plan Q a geometric series. You want the largest <span class="chem">N</span> with <span class="chem">S_Q(N) &lt; S_P(N)</span>.
        "解碼：這次「所付的總額」表示你要比較的是和，而不是單一年的會費。計劃 P 給出等差級數，計劃 Q 給出等比級數。你要找滿足 <span class=\"chem\">S_Q(N) &lt; S_P(N)</span> 的最大 <span class=\"chem\">N</span>。",
        // EN: Write <span class="chem">S_P = (N/2)(600 + 25(N - 1))</span> and <span class="chem">S_Q = 240(1.08^N - 1)/0.08</span>.
        "寫出 <span class=\"chem\">S_P = (N/2)(600 + 25(N - 1))</span> 及 <span class=\"chem\">S_Q = 240(1.08^N - 1)/0.08</span>。",
        // EN: Use a GDC table of both sums (or graph their difference) and look for the last year in which Plan Q is still cheaper.
        "用 GDC 列出兩個和的數值表（或繪畫它們之差的圖像），找出計劃 Q 仍然較便宜的最後一年。",
      ],
      // EN: <p>Decoding: "total amount" means sums; P is arithmetic (<span class="chem">u_1 = 300</span>, <span class="chem">d = 25</span>) and Q is geometric (<span class="chem">u_1 = 240</span>, <span class="chem">r = 1.08</span>). Q starts cheaper but grows faster.</p><div class="worked__math"><i>S</i><sub>P</sub>(<i>N</i>) = <span class="frac"><span><i>N</i></span><span>2</span></span>(600 + 25(<i>N</i> − 1)) <b>[M1]</b></div><div class="worked__math"><i>S</i><sub>Q</sub>(<i>N</i>) = <span class="frac"><span>240(1.08<sup><i>N</i></sup> − 1)</span><span>0.08</span></span> <b>[M1]</b></div><div class="worked__math">GDC table: <i>N</i> = 19: <i>S</i><sub>P</sub> = 9975, <i>S</i><sub>Q</sub> = 9947.10 <b>[M1 A1]</b></div><div class="worked__math"><i>N</i> = 20: <i>S</i><sub>P</sub> = 10 750, <i>S</i><sub>Q</sub> = 10 982.87, so the largest value is <b><i>N</i> = 19</b> <b>[A1]</b></div>
      solution: "<p>解碼：「總額」表示和；P 是等差（<span class=\"chem\">u_1 = 300</span>，<span class=\"chem\">d = 25</span>），Q 是等比（<span class=\"chem\">u_1 = 240</span>，<span class=\"chem\">r = 1.08</span>）。Q 起初較便宜，但增長較快。</p><div class=\"worked__math\"><i>S</i><sub>P</sub>(<i>N</i>) = <span class=\"frac\"><span><i>N</i></span><span>2</span></span>(600 + 25(<i>N</i> − 1))   <b>[M1]</b></div><div class=\"worked__math\"><i>S</i><sub>Q</sub>(<i>N</i>) = <span class=\"frac\"><span>240(1.08<sup><i>N</i></sup> − 1)</span><span>0.08</span></span>   <b>[M1]</b></div><div class=\"worked__math\">GDC 數值表：<i>N</i> = 19：<i>S</i><sub>P</sub> = 9975，<i>S</i><sub>Q</sub> = 9947.10   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>N</i> = 20：<i>S</i><sub>P</sub> = 10 750，<i>S</i><sub>Q</sub> = 10 982.87，所以最大值為 <b><i>N</i> = 19</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q029 · numeric · exam · SL · SL 1.3 · 4 marks
    "t1-1-q029": {
      // EN: <p>Find the value of <span class="chem">Σ_{k=3}^{10} 5 × 2^k</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">Σ_{k=3}^{10} 5 × 2^k</span> 的值。</p>",
      hints: [
        // EN: Substitute <span class="chem">k = 3</span> and <span class="chem">k = 4</span> to find the first term and the common ratio.
        "代入 <span class=\"chem\">k = 3</span> 及 <span class=\"chem\">k = 4</span>，求出首項和公比。",
        // EN: There are <span class="chem">10 - 3 + 1 = 8</span> terms. Use <span class="chem">S_n = u_1(r^n - 1)/(r - 1)</span>.
        "共有 <span class=\"chem\">10 - 3 + 1 = 8</span> 項。使用 <span class=\"chem\">S_n = u_1(r^n - 1)/(r - 1)</span>。",
      ],
      // EN: <div class="worked__math">First term (<i>k</i> = 3): 5 × 8 = 40; <i>r</i> = 2 <b>[A1]</b></div><div class="worked__math">Number of terms = 10 − 3 + 1 = 8 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>8</sub> = <span class="frac"><span>40(2<sup>8</sup> − 1)</span><span>2 − 1</span></span> = 40 × 255 <b>[M1]</b></div><div class="worked__math">= <b>10 200</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">首項（<i>k</i> = 3）：5 × 8 = 40；<i>r</i> = 2   <b>[A1]</b></div><div class=\"worked__math\">項數 = 10 − 3 + 1 = 8   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>8</sub> = <span class=\"frac\"><span>40(2<sup>8</sup> − 1)</span><span>2 − 1</span></span> = 40 × 255   <b>[M1]</b></div><div class=\"worked__math\">= <b>10 200</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q030 · numeric · exam · SL · SL 1.3 · 3 marks
    "t1-1-q030": {
      // EN: <p>Calculate <span class="chem">Σ_{k=1}^{20} 150(0.93)^k</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>計算 (Calculate) <span class=\"chem\">Σ_{k=1}^{20} 150(0.93)^k</span>，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Careful: the power is <span class="chem">k</span>, not <span class="chem">k - 1</span>, so the first term (<span class="chem">k = 1</span>) is <span class="chem">150 × 0.93 = 139.5</span>.
        "小心：指數是 <span class=\"chem\">k</span> 而不是 <span class=\"chem\">k - 1</span>，所以首項（<span class=\"chem\">k = 1</span>）是 <span class=\"chem\">150 × 0.93 = 139.5</span>。",
        // EN: Use <span class="chem">S_{20} = 139.5(1 - 0.93^{20})/(1 - 0.93)</span>, or type the sum directly into the GDC with the <span class="mono">Σ</span> template.
        "使用 <span class=\"chem\">S_{20} = 139.5(1 - 0.93^{20})/(1 - 0.93)</span>，或用 GDC 的 <span class=\"mono\">Σ</span> 範本直接輸入該和。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = 139.5, <i>r</i> = 0.93, 20 terms <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>20</sub> = <span class="frac"><span>139.5(1 − 0.93<sup>20</sup>)</span><span>0.07</span></span> <b>[M1]</b></div><div class="worked__math">= 1526.05… ≈ <b>1530</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = 139.5，<i>r</i> = 0.93，共 20 項   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>20</sub> = <span class=\"frac\"><span>139.5(1 − 0.93<sup>20</sup>)</span><span>0.07</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 1526.05… ≈ <b>1530</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q031 · numeric · exam · SL · SL 1.3 · 5 marks
    "t1-1-q031": {
      // EN: <p>A geometric sequence has positive terms. The third term is 7.2 and the seventh term is 1.2. Find the sum of the first 15 terms. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一個等比數列的各項均為正數。第三項是 7.2，第七項是 1.2。求 (Find) 首 15 項之和，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: From <span class="chem">u_3</span> to <span class="chem">u_7</span> you multiply by <span class="chem">r</span> four times: <span class="chem">r^4 = 1.2/7.2</span>.
        "由 <span class=\"chem\">u_3</span> 到 <span class=\"chem\">u_7</span> 要乘以 <span class=\"chem\">r</span> 四次：<span class=\"chem\">r^4 = 1.2/7.2</span>。",
        // EN: The terms are positive, so take the positive fourth root. Keep the full GDC value of <span class="chem">r</span> stored in memory.
        "各項均為正數，所以取正的四次方根。把 <span class=\"chem\">r</span> 在 GDC 中的完整數值儲存在記憶中。",
        // EN: Find <span class="chem">u_1 = u_3 / r^2</span>, then <span class="chem">S_{15} = u_1(1 - r^{15})/(1 - r)</span>.
        "求 <span class=\"chem\">u_1 = u_3 / r^2</span>，然後求 <span class=\"chem\">S_{15} = u_1(1 - r^{15})/(1 - r)</span>。",
      ],
      // EN: <div class="worked__math"><i>r</i><sup>4</sup> = <span class="frac"><span>1.2</span><span>7.2</span></span> = <span class="frac"><span>1</span><span>6</span></span> <b>[M1]</b></div><div class="worked__math"><i>r</i> = 0.638943… (positive terms) <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>7.2</span><span><i>r</i><sup>2</sup></span></span> = 17.6363… <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>15</sub> = <span class="frac"><span>17.6363…(1 − <i>r</i><sup>15</sup>)</span><span>1 − <i>r</i></span></span> <b>[M1]</b></div><div class="worked__math">= 48.787… ≈ <b>48.8</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>r</i><sup>4</sup> = <span class=\"frac\"><span>1.2</span><span>7.2</span></span> = <span class=\"frac\"><span>1</span><span>6</span></span>   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 0.638943…（各項為正數）   <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <span class=\"frac\"><span>7.2</span><span><i>r</i><sup>2</sup></span></span> = 17.6363…   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>15</sub> = <span class=\"frac\"><span>17.6363…(1 − <i>r</i><sup>15</sup>)</span><span>1 − <i>r</i></span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 48.787… ≈ <b>48.8</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q032 · short · challenge · SL · SL 1.3, 1.8 · 12 marks
    "t1-1-q032": {
      // EN: <p>A ball is dropped from a height of 3.2 m onto a hard floor. After each bounce, it rises to 78% of the height it fell from.</p><p>(a) Find the height the ball reaches after the third bounce. <strong>[2]</strong><br>(b) Find the number of the first bounce after which the ball rises to a height of less than 10 cm. <strong>[3]</strong><br>(c) Find the total vertical distance the ball has travelled from the moment it is dropped until it hits the floor for the 12th time. <strong>[4]</strong><br>(d) Show that, however long the ball keeps bouncing, the total vertical distance it travels is less than 26 m. <strong>[3]</strong></p>
      stem: "<p>一個球從 3.2 m 的高度落到堅硬的地面上。每次反彈後，它升至其落下高度的 78%。</p><p>(a) 求 (Find) 球在第三次反彈後所達到的高度。<strong>[2]</strong><br>(b) 求 (Find) 球首次升至低於 10 cm 高度的那一次反彈是第幾次。<strong>[3]</strong><br>(c) 求 (Find) 由球被放下的一刻起，直至它第 12 次撞擊地面為止，球所經過的鉛垂總距離。<strong>[4]</strong><br>(d) 證明 (Show that) 無論球持續反彈多久，它所經過的鉛垂總距離都少於 26 m。<strong>[3]</strong></p>",
      hints: [
        // EN: Decode: the rebound heights form a geometric sequence <span class="chem">3.2 × 0.78^k</span>. Part (b) hides a unit change (10 cm = 0.1 m). In part (c), the ball travels each rebound height twice (up and down), but the first 3.2 m only once.
        "解碼：反彈高度構成等比數列 <span class=\"chem\">3.2 × 0.78^k</span>。(b) 部分隱藏了單位轉換（10 cm = 0.1 m）。在 (c) 部中，球經過每個反彈高度兩次（上升及下降），但最初的 3.2 m 只經過一次。",
        // EN: Count carefully for (c): the 1st impact ends the first drop; between the 1st and 12th impacts there are 11 rebounds.
        "在 (c) 部中要小心計數：第 1 次撞擊結束最初的落下；第 1 次與第 12 次撞擊之間共有 11 次反彈。",
        // EN: For (d), replace the finite sum of rebound heights by the sum to infinity, since <span class="chem">|0.78| &lt; 1</span>.
        "在 (d) 部中，因為 <span class=\"chem\">|0.78| &lt; 1</span>，以無限項之和代替反彈高度的有限項之和。",
      ],
      // EN: <p>Decoding: "rises to 78% of the height it fell from" is a geometric sequence of heights <span class="chem">h_k = 3.2(0.78)^k</span>. The distance is not a single geometric series. It is the first drop plus two copies of the rebound series. In (b), use metres throughout. In (c), the 12th impact comes after 11 rebounds, giving <span class="chem">D = 3.2 + 2 × 10.6078… = 24.4 m</span>. In (d), the limit is <span class="chem">3.2 + 2 × 2.496/0.22 = 25.89 m</span>, which bounds every partial total.</p>
      solution: "<p>解碼：「升至其落下高度的 78%」是高度的等比數列 <span class=\"chem\">h_k = 3.2(0.78)^k</span>。距離並不是單一個等比級數，而是最初的落下加上兩份反彈級數。在 (b) 部中，全程使用米作單位。在 (c) 部中，第 12 次撞擊發生在 11 次反彈之後，得 <span class=\"chem\">D = 3.2 + 2 × 10.6078… = 24.4 m</span>。在 (d) 部中，極限為 <span class=\"chem\">3.2 + 2 × 2.496/0.22 = 25.89 m</span>，它是每一個部分總距離的上界。</p>",
      // EN: <div class="worked__math">(a) 3.2 × 0.78<sup>3</sup> = 1.518… ≈ <b>1.52 m</b></div><div class="worked__math">(b) 3.2 × 0.78<sup><i>k</i></sup> &lt; 0.1 ⇒ <i>k</i> &gt; 13.95 (after bounce 13: 0.127 m; after bounce 14: 0.0987 m), so <b>bounce 14</b></div><div class="worked__math">(c) <i>D</i> = 3.2 + 2(2.496 + 2.496 × 0.78 + … ) with 11 terms = 3.2 + 2 × <span class="frac"><span>2.496(1 − 0.78<sup>11</sup>)</span><span>0.22</span></span> = 24.4155… ≈ <b>24.4 m</b></div><div class="worked__math">(d) 3.2 + 2 × <span class="frac"><span>2.496</span><span>0.22</span></span> = 25.89… &lt; 26</div>
      answer: "<div class=\"worked__math\">(a) 3.2 × 0.78<sup>3</sup> = 1.518… ≈ <b>1.52 m</b></div><div class=\"worked__math\">(b) 3.2 × 0.78<sup><i>k</i></sup> &lt; 0.1  ⇒  <i>k</i> &gt; 13.95（第 13 次反彈後：0.127 m；第 14 次反彈後：0.0987 m），所以是<b>第 14 次反彈</b></div><div class=\"worked__math\">(c) <i>D</i> = 3.2 + 2(2.496 + 2.496 × 0.78 + … )（共 11 項）= 3.2 + 2 × <span class=\"frac\"><span>2.496(1 − 0.78<sup>11</sup>)</span><span>0.22</span></span> = 24.4155… ≈ <b>24.4 m</b></div><div class=\"worked__math\">(d) 3.2 + 2 × <span class=\"frac\"><span>2.496</span><span>0.22</span></span> = 25.89… &lt; 26</div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">3.2 × 0.78^3</span>.
        "M1：(a) 使用 <span class=\"chem\">3.2 × 0.78^3</span>。",
        // EN: A1: (a) 1.52 m (1.5185…).
        "A1：(a) 1.52 m（1.5185…）。",
        // EN: M1: (b) Converts 10 cm to 0.1 m and sets up <span class="chem">3.2 × 0.78^k &lt; 0.1</span>.
        "M1：(b) 把 10 cm 轉換為 0.1 m，並列出 <span class=\"chem\">3.2 × 0.78^k &lt; 0.1</span>。",
        // EN: A1: (b) <span class="chem">k &gt; 13.95</span>, or heights 0.127 m (bounce 13) and 0.0987 m (bounce 14).
        "A1：(b) <span class=\"chem\">k &gt; 13.95</span>，或高度 0.127 m（第 13 次反彈）及 0.0987 m（第 14 次反彈）。",
        // EN: A1: (b) Bounce 14.
        "A1：(b) 第 14 次反彈。",
        // EN: M1: (c) Recognizes that the distance is the first drop 3.2 m plus twice each rebound height (up and down), with 11 rebounds before the 12th impact.
        "M1：(c) 認出距離是最初落下的 3.2 m 加上每個反彈高度的兩倍（上升及下降），而第 12 次撞擊之前共有 11 次反彈。",
        // EN: A1: (c) Geometric series of rebound heights with first term 2.496, ratio 0.78 and 11 terms.
        "A1：(c) 反彈高度的等比級數，首項為 2.496、公比為 0.78、共 11 項。",
        // EN: M1: (c) Uses <span class="chem">3.2 + 2 × 2.496(1 - 0.78^{11})/(1 - 0.78)</span>.
        "M1：(c) 使用 <span class=\"chem\">3.2 + 2 × 2.496(1 - 0.78^{11})/(1 - 0.78)</span>。",
        // EN: A1: (c) 24.4 m (24.415…).
        "A1：(c) 24.4 m（24.415…）。",
        // EN: M1: (d) Uses the sum to infinity of the rebound heights, <span class="chem">2.496/(1 - 0.78) = 11.345…</span>.
        "M1：(d) 使用反彈高度的無限項之和 <span class=\"chem\">2.496/(1 - 0.78) = 11.345…</span>。",
        // EN: A1: (d) Total distance <span class="chem">3.2 + 2 × 11.345… = 25.89…</span>.
        "A1：(d) 總距離 <span class=\"chem\">3.2 + 2 × 11.345… = 25.89…</span>。",
        // EN: R1: (d) The total distance after any number of bounces is a partial sum that increases towards 25.89… m, so it is always less than 26 m.
        "R1：(d) 任何次數反彈後的總距離都是一個部分和，它遞增並趨向 25.89… m，所以總是少於 26 m。",
      ],
    },

    // ── t1-1-q033 · numeric · exam · SL · SL 1.3 · 4 marks
    "t1-1-q033": {
      // EN: <p>A geometric series has first term 40 and common ratio 0.85. Find the least number of terms for which the sum of the series exceeds 250.</p>
      stem: "<p>一個等比級數的首項為 40，公比為 0.85。求 (Find) 使該級數之和超過 250 的最少項數。</p>",
      hints: [
        // EN: Set up <span class="chem">40(1 - 0.85^n)/(1 - 0.85) &gt; 250</span>.
        "列出 <span class=\"chem\">40(1 - 0.85^n)/(1 - 0.85) &gt; 250</span>。",
        // EN: Solve with the GDC (graph or table of <span class="chem">S_n</span>), or rearrange to <span class="chem">0.85^n &lt; 0.0625</span> and use logarithms. Dividing by <span class="chem">ln 0.85 &lt; 0</span> reverses the inequality.
        "用 GDC 求解（<span class=\"chem\">S_n</span> 的圖像或數值表），或整理成 <span class=\"chem\">0.85^n &lt; 0.0625</span> 再使用對數。除以 <span class=\"chem\">ln 0.85 &lt; 0</span> 時，不等號方向要反轉。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>40(1 − 0.85<sup><i>n</i></sup>)</span><span>0.15</span></span> &gt; 250 <b>[M1]</b></div><div class="worked__math">0.85<sup><i>n</i></sup> &lt; 0.0625 (or table: <i>S</i><sub>17</sub> = 249.84, <i>S</i><sub>18</sub> = 252.36) <b>[A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 0.0625</span><span>ln 0.85</span></span> ≈ 17.06 <b>[M1]</b></div><div class="worked__math">Least number of terms = <b>18</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>40(1 − 0.85<sup><i>n</i></sup>)</span><span>0.15</span></span> &gt; 250   <b>[M1]</b></div><div class=\"worked__math\">0.85<sup><i>n</i></sup> &lt; 0.0625（或數值表：<i>S</i><sub>17</sub> = 249.84，<i>S</i><sub>18</sub> = 252.36）   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 0.0625</span><span>ln 0.85</span></span> ≈ 17.06   <b>[M1]</b></div><div class=\"worked__math\">最少項數 = <b>18</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q034 · numeric · challenge · SL · SL 1.3, 1.8 · 5 marks
    "t1-1-q034": {
      // EN: <p>A charity starts a fundraising campaign with a target of 7000 USD. It receives 500 USD in the first week. In each following week it receives 6% less than in the week before. The campaign runs until the target is reached. Find the week in which the target is reached.</p>
      stem: "<p>一個慈善團體展開籌款活動，目標為 7000 USD。第一週收到 500 USD。其後每一週收到的款項都比前一週少 6%。活動會一直進行至達到目標為止。求 (Find) 在第幾週達到目標。</p>",
      hints: [
        // EN: Decode: the weekly amounts form a geometric sequence with <span class="chem">r = 0.94</span>, and "target reached" is about the running total <span class="chem">S_n</span>. Check first that the target can be reached at all: since <span class="chem">r &lt; 1</span>, the total can never exceed <span class="chem">S_infty</span>.
        "解碼：每週的款項構成一個 <span class=\"chem\">r = 0.94</span> 的等比數列，而「達到目標」關乎累計總額 <span class=\"chem\">S_n</span>。先檢查目標究竟能否達到：由於 <span class=\"chem\">r &lt; 1</span>，總額永遠不能超過 <span class=\"chem\">S_infty</span>。",
        // EN: <span class="chem">S_infty = 500/0.06 ≈ 8333</span>, which is more than 7000, so the target is reached eventually. Now solve <span class="chem">500(1 - 0.94^n)/0.06 &gt;= 7000</span>.
        "<span class=\"chem\">S_infty = 500/0.06 ≈ 8333</span>，大於 7000，所以最終會達到目標。現在解 <span class=\"chem\">500(1 - 0.94^n)/0.06 &gt;= 7000</span>。",
        // EN: Rearrange to <span class="chem">0.94^n &lt;= 0.16</span>, or use a GDC table of <span class="chem">S_n</span>.
        "整理成 <span class=\"chem\">0.94^n &lt;= 0.16</span>，或使用 <span class=\"chem\">S_n</span> 的 GDC 數值表。",
      ],
      // EN: <p>Decoding: a weekly amount that falls by a fixed percentage is geometric (<span class="chem">u_1 = 500</span>, <span class="chem">r = 0.94</span>), and the target refers to the total.</p><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>500</span><span>0.06</span></span> = 8333.33 &gt; 7000, so the target can be reached <b>[R1]</b></div><div class="worked__math"><span class="frac"><span>500(1 − 0.94<sup><i>n</i></sup>)</span><span>0.06</span></span> ≥ 7000 <b>[M1]</b></div><div class="worked__math">0.94<sup><i>n</i></sup> ≤ 0.16 <b>[A1]</b></div><div class="worked__math"><i>n</i> ≥ 29.6 (table: <i>S</i><sub>29</sub> = 6948.09, <i>S</i><sub>30</sub> = 7031.20) <b>[A1]</b></div><div class="worked__math">The target is reached in <b>week 30</b> <b>[A1]</b></div>
      solution: "<p>解碼：每週以固定百分率減少的款項是等比的（<span class=\"chem\">u_1 = 500</span>，<span class=\"chem\">r = 0.94</span>），而目標指的是總額。</p><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>500</span><span>0.06</span></span> = 8333.33 &gt; 7000，所以目標可以達到   <b>[R1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span>500(1 − 0.94<sup><i>n</i></sup>)</span><span>0.06</span></span> ≥ 7000   <b>[M1]</b></div><div class=\"worked__math\">0.94<sup><i>n</i></sup> ≤ 0.16   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> ≥ 29.6（數值表：<i>S</i><sub>29</sub> = 6948.09，<i>S</i><sub>30</sub> = 7031.20）   <b>[A1]</b></div><div class=\"worked__math\">在<b>第 30 週</b>達到目標   <b>[A1]</b></div>",
    },

    // ── t1-1-q035 · short · exam · SL · SL 1.3 · 6 marks
    "t1-1-q035": {
      // EN: <p>The sum of the first <span class="chem">n</span> terms of a sequence is <span class="chem">S_n = 3^{n+1} - 3</span>, for <span class="chem">n &gt;= 1</span>.</p><p>(a) Write down the value of <span class="chem">u_1</span>. <strong>[1]</strong><br>(b) Show that <span class="chem">u_n = 2 × 3^n</span>. <strong>[3]</strong><br>(c) Hence deduce that the sequence is geometric, and write down its common ratio. <strong>[2]</strong></p>
      stem: "<p>某數列首 <span class=\"chem\">n</span> 項之和為 <span class=\"chem\">S_n = 3^{n+1} - 3</span>，其中 <span class=\"chem\">n &gt;= 1</span>。</p><p>(a) 寫出 (Write down) <span class=\"chem\">u_1</span> 的值。<strong>[1]</strong><br>(b) 證明 (Show that) <span class=\"chem\">u_n = 2 × 3^n</span>。<strong>[3]</strong><br>(c) 由此推斷 (Hence deduce) 該數列是等比數列，並寫出它的公比。<strong>[2]</strong></p>",
      hints: [
        // EN: Decode: you are given the sum formula, not the term formula. The <span class="chem">n</span>-th term is what is added to go from <span class="chem">S_{n-1}</span> to <span class="chem">S_n</span>.
        "解碼：題目給出的是求和公式，而不是通項公式。第 <span class=\"chem\">n</span> 項就是由 <span class=\"chem\">S_{n-1}</span> 變為 <span class=\"chem\">S_n</span> 時所加上的那一項。",
        // EN: Write <span class="chem">u_n = S_n - S_{n-1}</span> and replace <span class="chem">n</span> by <span class="chem">n - 1</span> carefully: <span class="chem">S_{n-1} = 3^n - 3</span>.
        "寫出 <span class=\"chem\">u_n = S_n - S_{n-1}</span>，並小心地把 <span class=\"chem\">n</span> 換成 <span class=\"chem\">n - 1</span>：<span class=\"chem\">S_{n-1} = 3^n - 3</span>。",
        // EN: To deduce "geometric", show that <span class="chem">u_{n+1}/u_n</span> is a constant.
        "要推斷「等比」，須證明 <span class=\"chem\">u_{n+1}/u_n</span> 是常數。",
      ],
      // EN: <p>Decoding: a formula for <span class="chem">S_n</span> is given, so the terms come from differences of sums. <span class="chem">u_n = S_n - S_{n-1} = 3^{n+1} - 3^n = 2 × 3^n</span> (this also gives <span class="chem">u_1 = 6</span>, matching <span class="chem">S_1</span>). The ratio of consecutive terms is always 3, so the sequence is geometric with <span class="chem">r = 3</span>.</p>
      solution: "<p>解碼：題目給出 <span class=\"chem\">S_n</span> 的公式，所以各項由和之差得出。<span class=\"chem\">u_n = S_n - S_{n-1} = 3^{n+1} - 3^n = 2 × 3^n</span>（這亦給出 <span class=\"chem\">u_1 = 6</span>，與 <span class=\"chem\">S_1</span> 相符）。相鄰兩項之比恆為 3，所以該數列是 <span class=\"chem\">r = 3</span> 的等比數列。</p>",
      // EN: <div class="worked__math">(a) <i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 9 − 3 = <b>6</b></div><div class="worked__math">(b) <i>u</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub> = (3<sup><i>n</i>+1</sup> − 3) − (3<sup><i>n</i></sup> − 3) = 3<sup><i>n</i></sup>(3 − 1) = 2 × 3<sup><i>n</i></sup></div><div class="worked__math">(c) <span class="frac"><span><i>u</i><sub><i>n</i>+1</sub></span><span><i>u</i><sub><i>n</i></sub></span></span> = <span class="frac"><span>2 × 3<sup><i>n</i>+1</sup></span><span>2 × 3<sup><i>n</i></sup></span></span> = 3, a constant, so the sequence is geometric with <b><i>r</i> = 3</b></div>
      answer: "<div class=\"worked__math\">(a) <i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 9 − 3 = <b>6</b></div><div class=\"worked__math\">(b) <i>u</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub> = (3<sup><i>n</i>+1</sup> − 3) − (3<sup><i>n</i></sup> − 3) = 3<sup><i>n</i></sup>(3 − 1) = 2 × 3<sup><i>n</i></sup></div><div class=\"worked__math\">(c) <span class=\"frac\"><span><i>u</i><sub><i>n</i>+1</sub></span><span><i>u</i><sub><i>n</i></sub></span></span> = <span class=\"frac\"><span>2 × 3<sup><i>n</i>+1</sup></span><span>2 × 3<sup><i>n</i></sup></span></span> = 3，是常數，所以該數列是等比數列，且 <b><i>r</i> = 3</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">u_1 = 6</span>.
        "A1：(a) <span class=\"chem\">u_1 = 6</span>。",
        // EN: M1: (b) Uses <span class="chem">u_n = S_n - S_{n-1}</span>.
        "M1：(b) 使用 <span class=\"chem\">u_n = S_n - S_{n-1}</span>。",
        // EN: A1: (b) <span class="chem">(3^{n+1} - 3) - (3^n - 3) = 3^{n+1} - 3^n</span>.
        "A1：(b) <span class=\"chem\">(3^{n+1} - 3) - (3^n - 3) = 3^{n+1} - 3^n</span>。",
        // EN: A1: (b) Factorizes <span class="chem">3^n(3 - 1)</span>, leading to the given result <span class="chem">2 × 3^n</span> (the given line itself earns no mark).
        "A1：(b) 因式分解為 <span class=\"chem\">3^n(3 - 1)</span>，從而得到所給結果 <span class=\"chem\">2 × 3^n</span>（只寫出所給的式子本身不得分）。",
        // EN: R1: (c) Shows that <span class="chem">u_{n+1}/u_n = 3</span>, which does not depend on <span class="chem">n</span>, so the sequence is geometric.
        "R1：(c) 證明 <span class=\"chem\">u_{n+1}/u_n = 3</span>，它與 <span class=\"chem\">n</span> 無關，所以該數列是等比數列。",
        // EN: A1: (c) <span class="chem">r = 3</span>.
        "A1：(c) <span class=\"chem\">r = 3</span>。",
      ],
    },

    // ── t1-1-q036 · numeric · exam · SL · SL 1.2, 1.3 · 4 marks
    "t1-1-q036": {
      // EN: <p>Calculate <span class="chem">Σ_{k=1}^{25} (3k + 2(1.1)^k)</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>計算 (Calculate) <span class=\"chem\">Σ_{k=1}^{25} (3k + 2(1.1)^k)</span>，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: The sum splits into two sums: <span class="chem">Σ 3k</span> (arithmetic) plus <span class="chem">Σ 2(1.1)^k</span> (geometric).
        "這個和可拆成兩個和：<span class=\"chem\">Σ 3k</span>（等差）加上 <span class=\"chem\">Σ 2(1.1)^k</span>（等比）。",
        // EN: Arithmetic part: 25 terms from 3 to 75. Geometric part: first term <span class="chem">2.2</span>, ratio 1.1, 25 terms. Or enter the whole sum with the GDC <span class="mono">Σ</span> template.
        "等差部分：由 3 至 75 共 25 項。等比部分：首項 <span class=\"chem\">2.2</span>、公比 1.1、共 25 項。或用 GDC 的 <span class=\"mono\">Σ</span> 範本輸入整個和。",
      ],
      // EN: <div class="worked__math">Σ 3<i>k</i> = <span class="frac"><span>25</span><span>2</span></span>(3 + 75) = 975 <b>[M1 A1]</b></div><div class="worked__math">Σ 2(1.1)<sup><i>k</i></sup> = <span class="frac"><span>2.2(1.1<sup>25</sup> − 1)</span><span>0.1</span></span> = 216.363… <b>[A1]</b></div><div class="worked__math">Total = 1191.36… ≈ <b>1190</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">Σ 3<i>k</i> = <span class=\"frac\"><span>25</span><span>2</span></span>(3 + 75) = 975   <b>[M1 A1]</b></div><div class=\"worked__math\">Σ 2(1.1)<sup><i>k</i></sup> = <span class=\"frac\"><span>2.2(1.1<sup>25</sup> − 1)</span><span>0.1</span></span> = 216.363…   <b>[A1]</b></div><div class=\"worked__math\">總和 = 1191.36… ≈ <b>1190</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q037 · numeric · challenge · SL · SL 1.8 · 5 marks
    "t1-1-q037": {
      // EN: <p>The number <span class="chem">x = 0.2454545…</span> has the block of digits "45" repeating for ever after the first decimal place. By writing <span class="chem">x</span> using an infinite geometric series, find the exact value of <span class="chem">x</span> as a fraction in its lowest terms.</p>
      stem: "<p>數 <span class=\"chem\">x = 0.2454545…</span> 在小數點後第一位之後，數字組「45」無限地重複。透過用無限等比級數表示 <span class=\"chem\">x</span>，求 (Find) <span class=\"chem\">x</span> 的準確值，並以最簡分數表示。</p>",
      hints: [
        // EN: Decode: a recurring decimal is a sum of infinitely many pieces that shrink by the same factor. Here the non-repeating part 0.2 must be kept separate from the repeating part.
        "解碼：循環小數是無限多個以相同因數縮小的部分之和。這裏不循環的部分 0.2 必須與循環部分分開處理。",
        // EN: Write <span class="chem">x = 0.2 + 0.045 + 0.00045 + 0.0000045 + …</span>. After 0.2, each piece is the previous one multiplied by <span class="chem">0.01</span>.
        "寫出 <span class=\"chem\">x = 0.2 + 0.045 + 0.00045 + 0.0000045 + …</span>。在 0.2 之後，每一部分都是前一部分乘以 <span class=\"chem\">0.01</span>。",
        // EN: Sum the geometric part with <span class="chem">S_infty = 0.045/(1 - 0.01)</span>, then add 0.2 and simplify.
        "用 <span class=\"chem\">S_infty = 0.045/(1 - 0.01)</span> 求等比部分之和，然後加上 0.2 並化簡。",
      ],
      // EN: <p>Decoding: the repeating block "45" occupies two decimal places, so the ratio is <span class="chem">10^{-2}</span>. The leading 2 does not repeat, so it is not part of the series.</p><div class="worked__math"><i>x</i> = 0.2 + (0.045 + 0.00045 + …) <b>[M1]</b></div><div class="worked__math">Geometric part: <i>u</i><sub>1</sub> = 0.045, <i>r</i> = 0.01 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>0.045</span><span>0.99</span></span> <b>[M1]</b></div><div class="worked__math">= <span class="frac"><span>45</span><span>990</span></span> = <span class="frac"><span>1</span><span>22</span></span> <b>[A1]</b></div><div class="worked__math"><i>x</i> = <span class="frac"><span>1</span><span>5</span></span> + <span class="frac"><span>1</span><span>22</span></span> = <b><span class="frac"><span>27</span><span>110</span></span></b> <b>[A1]</b></div>
      solution: "<p>解碼：循環的數字組「45」佔兩個小數位，所以公比是 <span class=\"chem\">10^{-2}</span>。最前面的 2 不循環，所以它不屬於該級數。</p><div class=\"worked__math\"><i>x</i> = 0.2 + (0.045 + 0.00045 + …)   <b>[M1]</b></div><div class=\"worked__math\">等比部分：<i>u</i><sub>1</sub> = 0.045，<i>r</i> = 0.01   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>0.045</span><span>0.99</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <span class=\"frac\"><span>45</span><span>990</span></span> = <span class=\"frac\"><span>1</span><span>22</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = <span class=\"frac\"><span>1</span><span>5</span></span> + <span class=\"frac\"><span>1</span><span>22</span></span> = <b><span class=\"frac\"><span>27</span><span>110</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q038 · numeric · exam · SL · SL 1.8 · 4 marks
    "t1-1-q038": {
      // EN: <p>The sum to infinity of a geometric series is three times its first term. The second term of the series is 8. Find the sum to infinity.</p>
      stem: "<p>一個等比級數的無限項之和是其首項的三倍。該級數的第二項是 8。求 (Find) 無限項之和。</p>",
      hints: [
        // EN: Decode: "three times its first term" is the equation <span class="chem">u_1/(1 - r) = 3u_1</span>. It gives <span class="chem">r</span> without knowing <span class="chem">u_1</span>.
        "解碼：「是其首項的三倍」就是方程 <span class=\"chem\">u_1/(1 - r) = 3u_1</span>。即使不知道 <span class=\"chem\">u_1</span>，它也能給出 <span class=\"chem\">r</span>。",
        // EN: Divide both sides by <span class="chem">u_1</span> (it cannot be 0) to get <span class="chem">1 - r = 1/3</span>.
        "兩邊同除以 <span class=\"chem\">u_1</span>（它不能是 0），得 <span class=\"chem\">1 - r = 1/3</span>。",
        // EN: Then use <span class="chem">u_2 = u_1 r = 8</span> to find <span class="chem">u_1</span>.
        "然後用 <span class=\"chem\">u_2 = u_1 r = 8</span> 求 <span class=\"chem\">u_1</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 3<i>u</i><sub>1</sub> ⇒ 1 − <i>r</i> = <span class="frac"><span>1</span><span>3</span></span> ⇒ <i>r</i> = <span class="frac"><span>2</span><span>3</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>8</span><span>2/3</span></span> = 12 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = 3 × 12 = <b>36</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 3<i>u</i><sub>1</sub>  ⇒  1 − <i>r</i> = <span class=\"frac\"><span>1</span><span>3</span></span>  ⇒  <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <span class=\"frac\"><span>8</span><span>2/3</span></span> = 12   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = 3 × 12 = <b>36</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q039 · numeric · challenge · SL · SL 1.8 · 6 marks
    "t1-1-q039": {
      // EN: <p>A convergent geometric series has sum to infinity 20. A second series is formed by squaring every term of the first series; its sum to infinity is 80. Find the exact value of the first term of the original series.</p>
      stem: "<p>一個收斂的等比級數的無限項之和為 20。把第一個級數的每一項平方，組成第二個級數；它的無限項之和為 80。求 (Find) 原級數首項的準確值。</p>",
      hints: [
        // EN: Decode: squaring each term of <span class="chem">u_1, u_1 r, u_1 r^2, …</span> gives another geometric series, <span class="chem">u_1^2, u_1^2 r^2, …</span>, with first term <span class="chem">u_1^2</span> and ratio <span class="chem">r^2</span>. You get two equations in <span class="chem">u_1</span> and <span class="chem">r</span>.
        "解碼：把 <span class=\"chem\">u_1, u_1 r, u_1 r^2, …</span> 的每一項平方，會得到另一個等比級數 <span class=\"chem\">u_1^2, u_1^2 r^2, …</span>，其首項為 <span class=\"chem\">u_1^2</span>、公比為 <span class=\"chem\">r^2</span>。你會得到兩條關於 <span class=\"chem\">u_1</span> 和 <span class=\"chem\">r</span> 的方程。",
        // EN: The equations are <span class="chem">u_1/(1 - r) = 20</span> and <span class="chem">u_1^2/(1 - r^2) = 80</span>. Factorize <span class="chem">1 - r^2 = (1 - r)(1 + r)</span>.
        "兩條方程是 <span class=\"chem\">u_1/(1 - r) = 20</span> 及 <span class=\"chem\">u_1^2/(1 - r^2) = 80</span>。把 <span class=\"chem\">1 - r^2 = (1 - r)(1 + r)</span> 因式分解。",
        // EN: Dividing the second equation by the first gives <span class="chem">u_1/(1 + r) = 4</span>. Now solve the two linear equations.
        "把第二條方程除以第一條，得 <span class=\"chem\">u_1/(1 + r) = 4</span>。然後解這兩條一次方程。",
      ],
      // EN: <p>Decoding: "squaring every term" gives a new geometric series with ratio <span class="chem">r^2</span>; it converges because <span class="chem">|r| &lt; 1</span>.</p><div class="worked__math">New series: first term <i>u</i><sub>1</sub><sup>2</sup>, ratio <i>r</i><sup>2</sup> <b>[M1]</b></div><div class="worked__math"><span class="frac"><span><i>u</i><sub>1</sub><sup>2</sup></span><span>1 − <i>r</i><sup>2</sup></span></span> = 80 and <span class="frac"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 20 <b>[A1]</b></div><div class="worked__math">Dividing, using 1 − <i>r</i><sup>2</sup> = (1 − <i>r</i>)(1 + <i>r</i>): <span class="frac"><span><i>u</i><sub>1</sub></span><span>1 + <i>r</i></span></span> = 4 <b>[M1]</b></div><div class="worked__math">20(1 − <i>r</i>) = 4(1 + <i>r</i>) ⇒ <i>r</i> = <span class="frac"><span>2</span><span>3</span></span> <b>[A1]</b></div><div class="worked__math">|<i>r</i>| &lt; 1, so both series do converge <b>[R1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = 20(1 − <span class="frac"><span>2</span><span>3</span></span>) = <b><span class="frac"><span>20</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<p>解碼：「把每一項平方」得到一個公比為 <span class=\"chem\">r^2</span> 的新等比級數；由於 <span class=\"chem\">|r| &lt; 1</span>，它是收斂的。</p><div class=\"worked__math\">新級數：首項 <i>u</i><sub>1</sub><sup>2</sup>，公比 <i>r</i><sup>2</sup>   <b>[M1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span><i>u</i><sub>1</sub><sup>2</sup></span><span>1 − <i>r</i><sup>2</sup></span></span> = 80 及 <span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 20   <b>[A1]</b></div><div class=\"worked__math\">利用 1 − <i>r</i><sup>2</sup> = (1 − <i>r</i>)(1 + <i>r</i>) 相除：<span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 + <i>r</i></span></span> = 4   <b>[M1]</b></div><div class=\"worked__math\">20(1 − <i>r</i>) = 4(1 + <i>r</i>)  ⇒  <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span>   <b>[A1]</b></div><div class=\"worked__math\">|<i>r</i>| &lt; 1，所以兩個級數確實收斂   <b>[R1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = 20(1 − <span class=\"frac\"><span>2</span><span>3</span></span>) = <b><span class=\"frac\"><span>20</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q040 · short · exam · SL · SL 1.3, 1.8 · 8 marks
    "t1-1-q040": {
      // EN: <p>A geometric series has first term 14.6 and second term 11.388.</p><p>(a) Write down the common ratio. <strong>[1]</strong><br>(b) Explain why the series has a sum to infinity, and find it. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which <span class="chem">S_infty - S_n &lt; 0.5</span>. <strong>[4]</strong></p>
      stem: "<p>一個等比級數的首項為 14.6，第二項為 11.388。</p><p>(a) 寫出 (Write down) 公比。<strong>[1]</strong><br>(b) 解釋 (Explain) 為何該級數有無限項之和，並求出它。<strong>[3]</strong><br>(c) 求 (Find) 使 <span class=\"chem\">S_infty - S_n &lt; 0.5</span> 的 <span class=\"chem\">n</span> 的最小值。<strong>[4]</strong></p>",
      hints: [
        // EN: Divide the second term by the first to get <span class="chem">r</span>.
        "把第二項除以首項，得 <span class=\"chem\">r</span>。",
        // EN: Use the unrounded value of <span class="chem">S_infty</span> in part (c). The gap <span class="chem">S_infty - S_n</span> simplifies to <span class="chem">S_infty r^n</span>: it is the sum of all the terms after the <span class="chem">n</span>-th.
        "在 (c) 部中使用未經捨入的 <span class=\"chem\">S_infty</span> 值。差 <span class=\"chem\">S_infty - S_n</span> 可化簡為 <span class=\"chem\">S_infty r^n</span>：它是第 <span class=\"chem\">n</span> 項之後所有項之和。",
        // EN: Solve <span class="chem">66.36… × 0.78^n &lt; 0.5</span> with logarithms or a GDC table, and round up.
        "用對數或 GDC 數值表解 <span class=\"chem\">66.36… × 0.78^n &lt; 0.5</span>，然後向上取整。",
      ],
      // EN: <p><span class="chem">S_infty - S_n = u_1/(1 - r) - u_1(1 - r^n)/(1 - r) = u_1 r^n/(1 - r) = S_infty r^n</span>. So we need <span class="chem">0.78^n &lt; 0.5/66.3636… ≈ 0.007534</span>, giving <span class="chem">n &gt; ln(0.007534)/ln(0.78) ≈ 19.67</span>. The least integer is <span class="chem">n = 20</span>.</p>
      solution: "<p><span class=\"chem\">S_infty - S_n = u_1/(1 - r) - u_1(1 - r^n)/(1 - r) = u_1 r^n/(1 - r) = S_infty r^n</span>。所以需要 <span class=\"chem\">0.78^n &lt; 0.5/66.3636… ≈ 0.007534</span>，得 <span class=\"chem\">n &gt; ln(0.007534)/ln(0.78) ≈ 19.67</span>。最小的整數是 <span class=\"chem\">n = 20</span>。</p>",
      // EN: <div class="worked__math">(a) <i>r</i> = <span class="frac"><span>11.388</span><span>14.6</span></span> = <b>0.78</b></div><div class="worked__math">(b) |<i>r</i>| = 0.78 &lt; 1, so the series converges. <i>S</i><sub>∞</sub> = <span class="frac"><span>14.6</span><span>1 − 0.78</span></span> = 66.3636… ≈ <b>66.4</b></div><div class="worked__math">(c) <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = <i>S</i><sub>∞</sub> × 0.78<sup><i>n</i></sup> &lt; 0.5 ⇒ 0.78<sup><i>n</i></sup> &lt; 0.007534… ⇒ <i>n</i> &gt; 19.67…, so <b><i>n</i> = 20</b></div>
      answer: "<div class=\"worked__math\">(a) <i>r</i> = <span class=\"frac\"><span>11.388</span><span>14.6</span></span> = <b>0.78</b></div><div class=\"worked__math\">(b) |<i>r</i>| = 0.78 &lt; 1，所以該級數收斂。<i>S</i><sub>∞</sub> = <span class=\"frac\"><span>14.6</span><span>1 − 0.78</span></span> = 66.3636… ≈ <b>66.4</b></div><div class=\"worked__math\">(c) <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = <i>S</i><sub>∞</sub> × 0.78<sup><i>n</i></sup> &lt; 0.5  ⇒  0.78<sup><i>n</i></sup> &lt; 0.007534…  ⇒  <i>n</i> &gt; 19.67…，所以 <b><i>n</i> = 20</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">r = 0.78</span>.
        "A1：(a) <span class=\"chem\">r = 0.78</span>。",
        // EN: R1: (b) <span class="chem">|r| &lt; 1</span>, so the series converges.
        "R1：(b) <span class=\"chem\">|r| &lt; 1</span>，所以該級數收斂。",
        // EN: M1: (b) Uses <span class="chem">S_infty = 14.6/(1 - 0.78)</span>.
        "M1：(b) 使用 <span class=\"chem\">S_infty = 14.6/(1 - 0.78)</span>。",
        // EN: A1: (b) <span class="chem">S_infty = 66.4</span> (66.3636…).
        "A1：(b) <span class=\"chem\">S_infty = 66.4</span>（66.3636…）。",
        // EN: M1: (c) Writes <span class="chem">S_infty - S_n = S_infty r^n</span>, or sets up <span class="chem">66.36… - 14.6(1 - 0.78^n)/0.22 &lt; 0.5</span>.
        "M1：(c) 寫出 <span class=\"chem\">S_infty - S_n = S_infty r^n</span>，或列出 <span class=\"chem\">66.36… - 14.6(1 - 0.78^n)/0.22 &lt; 0.5</span>。",
        // EN: A1: (c) <span class="chem">0.78^n &lt; 0.5/66.36… = 0.00753…</span> (or a correct GDC graph/table).
        "A1：(c) <span class=\"chem\">0.78^n &lt; 0.5/66.36… = 0.00753…</span>（或正確的 GDC 圖像／數值表）。",
        // EN: A1: (c) <span class="chem">n &gt; 19.67</span> (or <span class="chem">S_infty - S_{19} = 0.591</span> and <span class="chem">S_infty - S_{20} = 0.461</span>).
        "A1：(c) <span class=\"chem\">n &gt; 19.67</span>（或 <span class=\"chem\">S_infty - S_{19} = 0.591</span> 及 <span class=\"chem\">S_infty - S_{20} = 0.461</span>）。",
        // EN: A1: (c) <span class="chem">n = 20</span>.
        "A1：(c) <span class=\"chem\">n = 20</span>。",
      ],
    },

    // ── t1-1-q041 · numeric · challenge · SL · SL 1.8 · 5 marks
    "t1-1-q041": {
      // EN: <p>A square has side length 10 cm. A second square is drawn by joining the midpoints of the sides of the first square. A third square is drawn by joining the midpoints of the sides of the second square, and the process continues for ever. Find the exact total of the perimeters of all the squares. Give your answer in the form <span class="chem">a + b sqrt(2)</span>, where <span class="chem">a, b</span> are integers.</p>
      stem: "<p>一個正方形的邊長為 10 cm。連接第一個正方形各邊的中點，畫出第二個正方形。連接第二個正方形各邊的中點，畫出第三個正方形，如此無限地繼續下去。求 (Find) 所有正方形周界總和的準確值。答案以 <span class=\"chem\">a + b sqrt(2)</span> 的形式表示，其中 <span class=\"chem\">a, b</span> 為整數。</p>",
      hints: [
        // EN: Decode: the perimeters form an infinite geometric series. The task is to find the ratio from the geometry, then use <span class="chem">S_infty</span> and simplify the surd.
        "解碼：各周界構成一個無限等比級數。任務是從幾何關係求出公比，然後使用 <span class=\"chem\">S_infty</span> 並化簡根式。",
        // EN: The second square’s side joins two midpoints 5 cm from a corner, so its length is <span class="chem">sqrt(5^2 + 5^2) = 5 sqrt(2)</span>. Each side is <span class="chem">1/sqrt(2)</span> times the previous one.
        "第二個正方形的邊連接兩個距離某頂點 5 cm 的中點，所以其長度為 <span class=\"chem\">sqrt(5^2 + 5^2) = 5 sqrt(2)</span>。每條邊都是前一條邊的 <span class=\"chem\">1/sqrt(2)</span> 倍。",
        // EN: Sum <span class="chem">40 + 40/sqrt(2) + …</span> with <span class="chem">S_infty = 40/(1 - 1/sqrt(2))</span>, then rationalize the denominator.
        "用 <span class=\"chem\">S_infty = 40/(1 - 1/sqrt(2))</span> 求 <span class=\"chem\">40 + 40/sqrt(2) + …</span> 之和，然後有理化分母。",
      ],
      // EN: <p>Decoding: "continues for ever" signals a sum to infinity; the common ratio comes from Pythagoras.</p><div class="worked__math">Second side = √(5<sup>2</sup> + 5<sup>2</sup>) = 5√2, so <i>r</i> = <span class="frac"><span>5√2</span><span>10</span></span> = <span class="frac"><span>1</span><span>√2</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>40</span><span>1 − 1/√2</span></span> = <span class="frac"><span>40√2</span><span>√2 − 1</span></span> <b>[M1]</b></div><div class="worked__math">= <span class="frac"><span>40√2(√2 + 1)</span><span>(√2 − 1)(√2 + 1)</span></span> <b>[M1]</b></div><div class="worked__math">= <b>80 + 40√2 cm</b> <b>[A1]</b></div>
      solution: "<p>解碼：「無限地繼續下去」提示要求無限項之和；公比來自畢氏定理。</p><div class=\"worked__math\">第二個正方形的邊長 = √(5<sup>2</sup> + 5<sup>2</sup>) = 5√2，所以 <i>r</i> = <span class=\"frac\"><span>5√2</span><span>10</span></span> = <span class=\"frac\"><span>1</span><span>√2</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>40</span><span>1 − 1/√2</span></span> = <span class=\"frac\"><span>40√2</span><span>√2 − 1</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <span class=\"frac\"><span>40√2(√2 + 1)</span><span>(√2 − 1)(√2 + 1)</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <b>80 + 40√2 cm</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q042 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q042": {
      // EN: <p>Kemal invests 12 000 TRY in an account that pays a nominal annual interest rate of 3.6%, compounded monthly. Find the least number of complete months after which the value of the investment exceeds 15 000 TRY.</p>
      stem: "<p>Kemal 把 12 000 TRY 存入一個名義年利率為 3.6%、每月計算複利一次的帳戶。求 (Find) 經過最少多少個完整月份後，投資的價值會超過 15 000 TRY。</p>",
      hints: [
        // EN: Monthly compounding: each month the value is multiplied by <span class="chem">1 + 3.6/1200 = 1.003</span>.
        "每月計算複利：每個月價值乘以 <span class=\"chem\">1 + 3.6/1200 = 1.003</span>。",
        // EN: Solve <span class="chem">12000(1.003)^m &gt; 15000</span>, where <span class="chem">m</span> is the number of months. Use logarithms, a GDC table, or the Finance Solver (<span class="mono">I% = 3.6, PV = −12000, FV = 15000, P/Y = C/Y = 12</span>, solve for N).
        "解 <span class=\"chem\">12000(1.003)^m &gt; 15000</span>，其中 <span class=\"chem\">m</span> 是月數。使用對數、GDC 數值表或 Finance Solver（<span class=\"mono\">I% = 3.6, PV = −12000, FV = 15000, P/Y = C/Y = 12</span>，解出 N）。",
        // EN: The root is not a whole number. Round up.
        "所得的根不是整數，要向上取整。",
      ],
      // EN: <div class="worked__math">12000(1 + <span class="frac"><span>3.6</span><span>1200</span></span>)<sup><i>m</i></sup> &gt; 15000 ⇒ 1.003<sup><i>m</i></sup> &gt; 1.25 <b>[M1 A1]</b></div><div class="worked__math"><i>m</i> &gt; <span class="frac"><span>ln 1.25</span><span>ln 1.003</span></span> ≈ 74.49 <b>[A1]</b></div><div class="worked__math">Least number of complete months = <b>75</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">12000(1 + <span class=\"frac\"><span>3.6</span><span>1200</span></span>)<sup><i>m</i></sup> &gt; 15000  ⇒  1.003<sup><i>m</i></sup> &gt; 1.25   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>m</i> &gt; <span class=\"frac\"><span>ln 1.25</span><span>ln 1.003</span></span> ≈ 74.49   <b>[A1]</b></div><div class=\"worked__math\">最少的完整月數 = <b>75</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q043 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q043": {
      // EN: <p>An investment of 8000 CHF grows to 10 500 CHF after 6 years, with interest compounded quarterly at a fixed nominal annual rate of <span class="chem">r%</span>. Find the value of <span class="chem">r</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一筆 8000 CHF 的投資在 6 年後增長至 10 500 CHF，利息以固定的名義年利率 <span class=\"chem\">r%</span> 每季計算複利一次。求 (Find) <span class=\"chem\">r</span> 的值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Quarterly compounding over 6 years: <span class="chem">k = 4</span> and <span class="chem">kn = 24</span> periods.
        "6 年內每季計算複利：<span class=\"chem\">k = 4</span>，共 <span class=\"chem\">kn = 24</span> 期。",
        // EN: Solve <span class="chem">8000(1 + r/400)^{24} = 10500</span> for <span class="chem">r</span>, or use the Finance Solver with <span class="mono">N = 24, PV = −8000, FV = 10500, P/Y = C/Y = 4</span> and solve for <span class="mono">I%</span>.
        "解 <span class=\"chem\">8000(1 + r/400)^{24} = 10500</span> 求 <span class=\"chem\">r</span>，或在 Finance Solver 中輸入 <span class=\"mono\">N = 24, PV = −8000, FV = 10500, P/Y = C/Y = 4</span>，然後解出 <span class=\"mono\">I%</span>。",
      ],
      // EN: <div class="worked__math">8000(1 + <span class="frac"><span><i>r</i></span><span>400</span></span>)<sup>24</sup> = 10500 <b>[M1 A1]</b></div><div class="worked__math">1 + <span class="frac"><span><i>r</i></span><span>400</span></span> = 1.3125<sup>1/24</sup> = 1.011395… <b>[M1]</b></div><div class="worked__math"><i>r</i> = 4.558… ≈ <b>4.56</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">8000(1 + <span class=\"frac\"><span><i>r</i></span><span>400</span></span>)<sup>24</sup> = 10500   <b>[M1 A1]</b></div><div class=\"worked__math\">1 + <span class=\"frac\"><span><i>r</i></span><span>400</span></span> = 1.3125<sup>1/24</sup> = 1.011395…   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 4.558… ≈ <b>4.56</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q044 · numeric · exam · SL · SL 1.4 · 5 marks
    "t1-1-q044": {
      // EN: <p>Sofia has 5000 EUR to invest for 10 years. Account X pays a nominal annual rate of 4.2%, compounded monthly. Account Y pays 4.3% per year, compounded annually. Find how much more the better of the two accounts is worth after 10 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Sofia 有 5000 EUR 要投資 10 年。帳戶 X 的名義年利率為 4.2%，每月計算複利一次。帳戶 Y 的年利率為 4.3%，每年計算複利一次。求 (Find) 10 年後兩個帳戶中較好的一個比另一個多值多少。答案須準確至小數點後 2 位。</p>",
      hints: [
        // EN: Decode: the account with the higher rate is not automatically better, because the other one compounds more often. Find both final values, then subtract the smaller from the larger.
        "解碼：利率較高的帳戶不一定較好，因為另一個帳戶計算複利的次數較多。求出兩者的最終價值，然後以較大者減去較小者。",
        // EN: Account X: <span class="chem">5000(1 + 4.2/1200)^{120}</span>. Account Y: <span class="chem">5000(1.043)^{10}</span>.
        "帳戶 X：<span class=\"chem\">5000(1 + 4.2/1200)^{120}</span>。帳戶 Y：<span class=\"chem\">5000(1.043)^{10}</span>。",
        // EN: Keep full GDC values and round only the final difference.
        "保留 GDC 的完整數值，只把最後的差捨入。",
      ],
      // EN: <div class="worked__math">X: 5000(1 + <span class="frac"><span>4.2</span><span>1200</span></span>)<sup>120</sup> = 7604.229… <b>[M1 A1]</b></div><div class="worked__math">Y: 5000(1.043)<sup>10</sup> = 7617.510… <b>[A1]</b></div><div class="worked__math">Y is better by 7617.510… − 7604.229… = 13.281… <b>[M1]</b></div><div class="worked__math">≈ <b>13.28 EUR</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">X：5000(1 + <span class=\"frac\"><span>4.2</span><span>1200</span></span>)<sup>120</sup> = 7604.229…   <b>[M1 A1]</b></div><div class=\"worked__math\">Y：5000(1.043)<sup>10</sup> = 7617.510…   <b>[A1]</b></div><div class=\"worked__math\">Y 較好，多出 7617.510… − 7604.229… = 13.281…   <b>[M1]</b></div><div class=\"worked__math\">≈ <b>13.28 EUR</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q045 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q045": {
      // EN: <p>Omar invests 20 000 USD for 7 years at a nominal annual interest rate of 5.1%, compounded half-yearly. Inflation is expected to be 2.8% per year, so an amount <span class="chem">V</span> in 7 years’ time will be worth <span class="chem">V / 1.028^7</span> in today’s money. Find the real value of Omar’s investment after 7 years, in today’s money. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Omar 以名義年利率 5.1%、每半年計算複利一次，投資 20 000 USD，為期 7 年。預計每年通脹率為 2.8%，所以 7 年後的金額 <span class=\"chem\">V</span> 以今天的幣值計算相當於 <span class=\"chem\">V / 1.028^7</span>。求 (Find) 7 年後 Omar 的投資以今天的幣值計算的實質價值，答案須準確至小數點後 2 位。</p>",
      hints: [
        // EN: First find the future value: half-yearly means <span class="chem">k = 2</span>, so <span class="chem">V = 20000(1 + 5.1/200)^{14}</span>.
        "先求未來值：每半年表示 <span class=\"chem\">k = 2</span>，所以 <span class=\"chem\">V = 20000(1 + 5.1/200)^{14}</span>。",
        // EN: Then remove the effect of inflation by dividing by <span class="chem">1.028^7</span>. Do not round <span class="chem">V</span> before dividing.
        "然後除以 <span class=\"chem\">1.028^7</span>，以消除通脹的影響。相除之前不要把 <span class=\"chem\">V</span> 捨入。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 20000(1 + <span class="frac"><span>5.1</span><span>200</span></span>)<sup>14</sup> = 28453.08… <b>[M1 A1]</b></div><div class="worked__math">Real value = <span class="frac"><span>28453.08…</span><span>1.028<sup>7</sup></span></span> <b>[M1]</b></div><div class="worked__math">= 23451.871… ≈ <b>23 451.87 USD</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>V</i> = 20000(1 + <span class=\"frac\"><span>5.1</span><span>200</span></span>)<sup>14</sup> = 28453.08…   <b>[M1 A1]</b></div><div class=\"worked__math\">實質價值 = <span class=\"frac\"><span>28453.08…</span><span>1.028<sup>7</sup></span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 23451.871… ≈ <b>23 451.87 USD</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q046 · numeric · challenge · SL · SL 1.4 · 4 marks
    "t1-1-q046": {
      // EN: <p>A website lists a five-year-old car for 14 500 GBP. The same model cost 32 000 GBP when new. Assume that the car has lost the same percentage of its value every year. Find this annual percentage rate of depreciation. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一個網站以 14 500 GBP 出售一輛車齡五年的汽車。同一型號的新車售價為 32 000 GBP。假設該汽車每年損失其價值的相同百分率。求 (Find) 這個每年的折舊百分率，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: "the same percentage every year" is annual depreciation, a geometric model. The unknown is the rate <span class="chem">r</span>, not the final value.
        "解碼：「每年相同的百分率」就是每年折舊，屬等比模型。未知量是比率 <span class=\"chem\">r</span>，而不是最終價值。",
        // EN: Solve <span class="chem">32000(1 - r/100)^5 = 14500</span>, or use the Finance Solver with <span class="mono">N = 5, PV = −32000, FV = 14500, PMT = 0</span>, solving for <span class="mono">I%</span> (it will be negative).
        "解 <span class=\"chem\">32000(1 - r/100)^5 = 14500</span>，或在 Finance Solver 中輸入 <span class=\"mono\">N = 5, PV = −32000, FV = 14500, PMT = 0</span>，解出 <span class=\"mono\">I%</span>（它會是負數）。",
        // EN: The depreciation rate is the size of the negative <span class="mono">I%</span>, i.e. <span class="chem">100(1 - (14500/32000)^{1/5})</span>.
        "折舊率是負數 <span class=\"mono\">I%</span> 的大小，即 <span class=\"chem\">100(1 - (14500/32000)^{1/5})</span>。",
      ],
      // EN: <p>Decoding: annual depreciation at <span class="chem">r%</span> multiplies the value by <span class="chem">(1 - r/100)</span> each year, so the 5-year multiplier is <span class="chem">14500/32000</span>.</p><div class="worked__math">32000(1 − <span class="frac"><span><i>r</i></span><span>100</span></span>)<sup>5</sup> = 14500 <b>[M1]</b></div><div class="worked__math">1 − <span class="frac"><span><i>r</i></span><span>100</span></span> = (0.453125)<sup>1/5</sup> = 0.853578… <b>[M1 A1]</b></div><div class="worked__math"><i>r</i> = 14.64… ≈ <b>14.6%</b> <b>[A1]</b></div>
      solution: "<p>解碼：以 <span class=\"chem\">r%</span> 每年折舊表示價值每年乘以 <span class=\"chem\">(1 - r/100)</span>，所以 5 年的乘數是 <span class=\"chem\">14500/32000</span>。</p><div class=\"worked__math\">32000(1 − <span class=\"frac\"><span><i>r</i></span><span>100</span></span>)<sup>5</sup> = 14500   <b>[M1]</b></div><div class=\"worked__math\">1 − <span class=\"frac\"><span><i>r</i></span><span>100</span></span> = (0.453125)<sup>1/5</sup> = 0.853578…   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i> = 14.64… ≈ <b>14.6%</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q047 · short · challenge · SL · SL 1.4 · 8 marks
    "t1-1-q047": {
      // EN: <p>Ana invests 6000 EUR at 4.5% per year, compounded annually. On the same day, Ben invests 7500 EUR at a nominal annual rate of 3.2%, compounded monthly.</p><p>(a) Find the value of Ana’s investment after 10 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(b) Find the value of Ben’s investment after 10 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(c) Ana’s investment will eventually be worth more than Ben’s. Find the least number of complete years after which this happens. <strong>[4]</strong></p>
      stem: "<p>Ana 以年利率 4.5%、每年計算複利一次，投資 6000 EUR。同一天，Ben 以名義年利率 3.2%、每月計算複利一次，投資 7500 EUR。</p><p>(a) 求 (Find) 10 年後 Ana 的投資的價值，答案須準確至小數點後 2 位。<strong>[2]</strong><br>(b) 求 (Find) 10 年後 Ben 的投資的價值，答案須準確至小數點後 2 位。<strong>[2]</strong><br>(c) Ana 的投資最終會比 Ben 的更有價值。求 (Find) 經過最少多少個完整年度後會出現這情況。<strong>[4]</strong></p>",
      hints: [
        // EN: Decode: two compound-interest models with different compounding periods. Part (c) asks for the first whole number of years after which Ana’s value is bigger, so it is an inequality to solve with the GDC.
        "解碼：兩個計算複利期不同的複利息模型。(c) 部分要求 Ana 的價值較大的第一個整數年數，所以這是一個要用 GDC 求解的不等式。",
        // EN: Ben’s value after <span class="chem">n</span> years is <span class="chem">7500(1 + 0.032/12)^{12n}</span>; his monthly compounding makes the exponent <span class="chem">12n</span>.
        "Ben 在 <span class=\"chem\">n</span> 年後的價值是 <span class=\"chem\">7500(1 + 0.032/12)^{12n}</span>；每月計算複利使指數變成 <span class=\"chem\">12n</span>。",
        // EN: Graph <span class="chem">y = 6000(1.045)^x</span> and <span class="chem">y = 7500(1.0026667)^{12x}</span> and find the intersection, then round up.
        "繪畫 <span class=\"chem\">y = 6000(1.045)^x</span> 及 <span class=\"chem\">y = 7500(1.0026667)^{12x}</span> 的圖像並求交點，然後向上取整。",
      ],
      // EN: <p>Decoding: Ana starts lower but has the higher effective rate, so her curve overtakes Ben’s. The intersection of the two models is at <span class="chem">n ≈ 18.5</span>; since values are compared after complete years, check 18 and 19. Ana is first ahead after <strong>19</strong> years.</p>
      solution: "<p>解碼：Ana 起點較低，但實際利率較高，所以她的曲線會追過 Ben 的曲線。兩個模型的交點在 <span class=\"chem\">n ≈ 18.5</span>；由於比較的是完整年度後的價值，所以要檢查 18 和 19。Ana 在 <strong>19</strong> 年後首次領先。</p>",
      // EN: <div class="worked__math">(a) 6000 × 1.045<sup>10</sup> = <b>9317.82 EUR</b></div><div class="worked__math">(b) 7500(1 + 0.032/12)<sup>120</sup> = <b>10 324.06 EUR</b></div><div class="worked__math">(c) 6000(1.045)<sup><i>n</i></sup> &gt; 7500(1 + 0.032/12)<sup>12<i>n</i></sup>: intersection at <i>n</i> ≈ 18.5. After 18 years: 13 250.87 &lt; 13 331.59; after 19 years: 13 847.16 &gt; 13 764.51. So <b>19 years</b></div>
      answer: "<div class=\"worked__math\">(a) 6000 × 1.045<sup>10</sup> = <b>9317.82 EUR</b></div><div class=\"worked__math\">(b) 7500(1 + 0.032/12)<sup>120</sup> = <b>10 324.06 EUR</b></div><div class=\"worked__math\">(c) 6000(1.045)<sup><i>n</i></sup> &gt; 7500(1 + 0.032/12)<sup>12<i>n</i></sup>：交點在 <i>n</i> ≈ 18.5。18 年後：13 250.87 &lt; 13 331.59；19 年後：13 847.16 &gt; 13 764.51。所以是 <b>19 年</b></div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">6000(1.045)^{10}</span>.
        "M1：(a) 使用 <span class=\"chem\">6000(1.045)^{10}</span>。",
        // EN: A1: (a) 9317.82 EUR.
        "A1：(a) 9317.82 EUR。",
        // EN: M1: (b) Uses <span class="chem">7500(1 + 3.2/1200)^{120}</span> (monthly: 120 periods).
        "M1：(b) 使用 <span class=\"chem\">7500(1 + 3.2/1200)^{120}</span>（每月：120 期）。",
        // EN: A1: (b) 10 324.06 EUR.
        "A1：(b) 10 324.06 EUR。",
        // EN: M1: (c) Sets up <span class="chem">6000(1.045)^n &gt; 7500(1 + 0.032/12)^{12n}</span> (an equation is acceptable).
        "M1：(c) 列出 <span class=\"chem\">6000(1.045)^n &gt; 7500(1 + 0.032/12)^{12n}</span>（列出方程亦可接受）。",
        // EN: M1: (c) Uses the GDC to solve: graph intersection or table of both values.
        "M1：(c) 使用 GDC 求解：圖像交點或兩個價值的數值表。",
        // EN: A1: (c) <span class="chem">n ≈ 18.5</span>, or values after 18 years (13 250.87, 13 331.59) and 19 years (13 847.16, 13 764.51).
        "A1：(c) <span class=\"chem\">n ≈ 18.5</span>，或 18 年後（13 250.87、13 331.59）及 19 年後（13 847.16、13 764.51）的價值。",
        // EN: A1: (c) 19 years.
        "A1：(c) 19 年。",
      ],
    },

    // ── t1-1-q048 · numeric · challenge · SL · SL 1.4 · 5 marks
    "t1-1-q048": {
      // EN: <p>Mei keeps savings of 15 000 SGD in an account that pays 2.2% per year, compounded annually. Inflation is 3.1% per year, so an amount <span class="chem">V</span> in <span class="chem">n</span> years’ time is worth <span class="chem">V / 1.031^n</span> in today’s money. Mei makes no deposits or withdrawals. Find the least number of complete years after which the real value of her savings, in today’s money, is below 13 000 SGD.</p>
      stem: "<p>Mei 把 15 000 SGD 積蓄存放在一個年利率 2.2%、每年計算複利一次的帳戶。每年通脹率為 3.1%，所以 <span class=\"chem\">n</span> 年後的金額 <span class=\"chem\">V</span> 以今天的幣值計算相當於 <span class=\"chem\">V / 1.031^n</span>。Mei 沒有存款或提款。求 (Find) 經過最少多少個完整年度後，她的積蓄以今天的幣值計算的實質價值低於 13 000 SGD。</p>",
      hints: [
        // EN: Decode: the account balance grows, but inflation grows faster, so the <em>real</em> value falls. You need the least whole <span class="chem">n</span> for which the real value is below 13 000.
        "解碼：帳戶結餘會增長，但通脹增長得更快，所以<em>實質</em>價值會下降。你需要求出使實質價值低於 13 000 的最小整數 <span class=\"chem\">n</span>。",
        // EN: Real value after <span class="chem">n</span> years <span class="chem">= 15000(1.022)^n / 1.031^n = 15000(1.022/1.031)^n</span>.
        "<span class=\"chem\">n</span> 年後的實質價值 <span class=\"chem\">= 15000(1.022)^n / 1.031^n = 15000(1.022/1.031)^n</span>。",
        // EN: Solve <span class="chem">15000(1.022/1.031)^n &lt; 13000</span> with logarithms or a GDC table. The base is less than 1, so dividing by its logarithm reverses the inequality.
        "用對數或 GDC 數值表解 <span class=\"chem\">15000(1.022/1.031)^n &lt; 13000</span>。底數小於 1，所以除以它的對數時不等號方向要反轉。",
      ],
      // EN: <p>Decoding: "real value" means the balance adjusted for inflation; it falls because 2.2% &lt; 3.1%.</p><div class="worked__math">Real value = <span class="frac"><span>15000(1.022)<sup><i>n</i></sup></span><span>1.031<sup><i>n</i></sup></span></span> <b>[M1]</b></div><div class="worked__math">15000(1.022/1.031)<sup><i>n</i></sup> &lt; 13000 <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(13/15)</span><span>ln(1.022/1.031)</span></span> ≈ 16.3 <b>[A1]</b></div><div class="worked__math">Check: after 16 years 13 036.68; after 17 years 12 922.88 <b>[A1]</b></div><div class="worked__math">Least number of complete years = <b>17</b> <b>[A1]</b></div>
      solution: "<p>解碼：「實質價值」指經通脹調整後的結餘；由於 2.2% &lt; 3.1%，它會下降。</p><div class=\"worked__math\">實質價值 = <span class=\"frac\"><span>15000(1.022)<sup><i>n</i></sup></span><span>1.031<sup><i>n</i></sup></span></span>   <b>[M1]</b></div><div class=\"worked__math\">15000(1.022/1.031)<sup><i>n</i></sup> &lt; 13000   <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(13/15)</span><span>ln(1.022/1.031)</span></span> ≈ 16.3   <b>[A1]</b></div><div class=\"worked__math\">驗算：16 年後為 13 036.68；17 年後為 12 922.88   <b>[A1]</b></div><div class=\"worked__math\">最少的完整年數 = <b>17</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q049 · short · exam · SL · SL 1.4 · 8 marks
    "t1-1-q049": {
      // EN: <p>A company buys a machine for 85 000 AUD. The value of the machine depreciates by 12% each year.</p><p>(a) Find the value of the machine after 3 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(b) Find the number of complete years after which the value of the machine first falls below 30 000 AUD. <strong>[3]</strong><br>At the same time as it buys the machine, the company invests 40 000 AUD at a nominal annual rate of 3.9%, compounded monthly.<br>(c) Find the least number of complete years after which the investment is worth more than the machine. <strong>[3]</strong></p>
      stem: "<p>一間公司以 85 000 AUD 購入一部機器。該機器的價值每年折舊 12%。</p><p>(a) 求 (Find) 3 年後該機器的價值，答案須準確至小數點後 2 位。<strong>[2]</strong><br>(b) 求 (Find) 經過多少個完整年度後，該機器的價值首次低於 30 000 AUD。<strong>[3]</strong><br>在購入機器的同時，該公司以名義年利率 3.9%、每月計算複利一次，投資 40 000 AUD。<br>(c) 求 (Find) 經過最少多少個完整年度後，該投資的價值高於該機器的價值。<strong>[3]</strong></p>",
      hints: [
        // EN: Decode: (a) and (b) are depreciation (multiplier 0.88 per year); (c) compares a growing investment with a shrinking value, and asks for the first whole year in which the investment is bigger.
        "解碼：(a) 和 (b) 部分是折舊（每年乘數 0.88）；(c) 部分比較一項增長中的投資與一個減少中的價值，並要求投資較大的第一個整數年。",
        // EN: For (b) and (c), use a GDC table with <span class="chem">x</span> = number of years, or graph both sides and find the intersection.
        "在 (b) 和 (c) 部中，使用 GDC 數值表（<span class=\"chem\">x</span> = 年數），或繪畫兩邊的圖像並求交點。",
        // EN: For (c), the investment after <span class="chem">n</span> years is <span class="chem">40000(1 + 0.039/12)^{12n}</span>: monthly compounding means <span class="chem">12n</span> periods.
        "在 (c) 部中，<span class=\"chem\">n</span> 年後投資的價值是 <span class=\"chem\">40000(1 + 0.039/12)^{12n}</span>：每月計算複利表示共 <span class=\"chem\">12n</span> 期。",
      ],
      // EN: <p>Decoding: there are two models, depreciation <span class="chem">M(n) = 85000(0.88)^n</span> and monthly compound growth <span class="chem">I(n) = 40000(1.00325)^{12n}</span>. For (b), <span class="chem">n &gt; ln(30/85)/ln(0.88) ≈ 8.15</span>, so the answer is 9 years. For (c), the graphs meet at <span class="chem">n ≈ 4.52</span>, so the investment is first worth more after 5 complete years.</p>
      solution: "<p>解碼：這裏有兩個模型：折舊 <span class=\"chem\">M(n) = 85000(0.88)^n</span> 及每月複利增長 <span class=\"chem\">I(n) = 40000(1.00325)^{12n}</span>。在 (b) 部中，<span class=\"chem\">n &gt; ln(30/85)/ln(0.88) ≈ 8.15</span>，所以答案是 9 年。在 (c) 部中，兩個圖像相交於 <span class=\"chem\">n ≈ 4.52</span>，所以投資在 5 個完整年度後首次較有價值。</p>",
      // EN: <div class="worked__math">(a) 85000 × 0.88<sup>3</sup> = <b>57 925.12 AUD</b></div><div class="worked__math">(b) 85000 × 0.88<sup><i>n</i></sup> &lt; 30000 ⇒ <i>n</i> &gt; 8.15; after 8 years 30 568.93, after 9 years 26 900.66, so <b>9 years</b></div><div class="worked__math">(c) 40000(1 + 0.039/12)<sup>12<i>n</i></sup> &gt; 85000 × 0.88<sup><i>n</i></sup> ⇒ <i>n</i> &gt; 4.52; after 4 years 46 741.22 &lt; 50 974.11, after 5 years 48 597.07 &gt; 44 857.21, so <b>5 years</b></div>
      answer: "<div class=\"worked__math\">(a) 85000 × 0.88<sup>3</sup> = <b>57 925.12 AUD</b></div><div class=\"worked__math\">(b) 85000 × 0.88<sup><i>n</i></sup> &lt; 30000  ⇒  <i>n</i> &gt; 8.15；8 年後 30 568.93，9 年後 26 900.66，所以是 <b>9 年</b></div><div class=\"worked__math\">(c) 40000(1 + 0.039/12)<sup>12<i>n</i></sup> &gt; 85000 × 0.88<sup><i>n</i></sup>  ⇒  <i>n</i> &gt; 4.52；4 年後 46 741.22 &lt; 50 974.11，5 年後 48 597.07 &gt; 44 857.21，所以是 <b>5 年</b></div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">85000 × 0.88^3</span> (or the Finance Solver with <span class="mono">I% = −12</span>).
        "M1：(a) 使用 <span class=\"chem\">85000 × 0.88^3</span>（或在 Finance Solver 中輸入 <span class=\"mono\">I% = −12</span>）。",
        // EN: A1: (a) 57 925.12 AUD.
        "A1：(a) 57 925.12 AUD。",
        // EN: M1: (b) Sets up <span class="chem">85000 × 0.88^n &lt; 30000</span> (an equation is acceptable).
        "M1：(b) 列出 <span class=\"chem\">85000 × 0.88^n &lt; 30000</span>（列出方程亦可接受）。",
        // EN: A1: (b) <span class="chem">n &gt; 8.15</span>, or the values after 8 and 9 years (30 568.93 and 26 900.66).
        "A1：(b) <span class=\"chem\">n &gt; 8.15</span>，或 8 年後及 9 年後的價值（30 568.93 及 26 900.66）。",
        // EN: A1: (b) 9 years.
        "A1：(b) 9 年。",
        // EN: M1: (c) Sets up <span class="chem">40000(1 + 0.039/12)^{12n} &gt; 85000 × 0.88^n</span> (an equation is acceptable).
        "M1：(c) 列出 <span class=\"chem\">40000(1 + 0.039/12)^{12n} &gt; 85000 × 0.88^n</span>（列出方程亦可接受）。",
        // EN: A1: (c) Uses the GDC: intersection at <span class="chem">n ≈ 4.52</span>, or both values after 4 and 5 years.
        "A1：(c) 使用 GDC：交點在 <span class=\"chem\">n ≈ 4.52</span>，或 4 年後及 5 年後兩者的價值。",
        // EN: A1: (c) 5 years.
        "A1：(c) 5 年。",
      ],
    },

    // ── t1-1-q050 · numeric · exam · SL · SL 1.4 · 3 marks
    "t1-1-q050": {
      // EN: <p>Lena wants to have 25 000 EUR in 8 years’ time. She finds an account paying a nominal annual interest rate of 4.75%, compounded quarterly. Find the amount she must invest now. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Lena 希望在 8 年後擁有 25 000 EUR。她找到一個名義年利率為 4.75%、每季計算複利一次的帳戶。求 (Find) 她現在必須投資的金額，答案須準確至小數點後 2 位。</p>",
      hints: [
        // EN: This time the future value is known and the present value is unknown: <span class="chem">PV(1 + 4.75/400)^{32} = 25000</span>.
        "這次已知的是未來值，未知的是現值：<span class=\"chem\">PV(1 + 4.75/400)^{32} = 25000</span>。",
        // EN: Divide, or use the Finance Solver with <span class="mono">N = 32, I% = 4.75, FV = 25000, P/Y = C/Y = 4</span>, solving for PV (it shows as negative, an outflow).
        "相除，或在 Finance Solver 中輸入 <span class=\"mono\">N = 32, I% = 4.75, FV = 25000, P/Y = C/Y = 4</span>，解出 PV（它會顯示為負數，即流出的款項）。",
      ],
      // EN: <div class="worked__math"><i>PV</i>(1 + <span class="frac"><span>4.75</span><span>400</span></span>)<sup>32</sup> = 25000 <b>[M1]</b></div><div class="worked__math"><i>PV</i> = <span class="frac"><span>25000</span><span>1.011875<sup>32</sup></span></span> <b>[A1]</b></div><div class="worked__math">= 17134.849… ≈ <b>17 134.85 EUR</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>PV</i>(1 + <span class=\"frac\"><span>4.75</span><span>400</span></span>)<sup>32</sup> = 25000   <b>[M1]</b></div><div class=\"worked__math\"><i>PV</i> = <span class=\"frac\"><span>25000</span><span>1.011875<sup>32</sup></span></span>   <b>[A1]</b></div><div class=\"worked__math\">= 17134.849… ≈ <b>17 134.85 EUR</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q051 · numeric · challenge · SL · SL 1.4 · 4 marks
    "t1-1-q051": {
      // EN: <p>A bank advertises a savings account with the slogan "Double your money in 9 years". Interest is compounded monthly at a fixed nominal annual rate of <span class="chem">r%</span>. Find the value of <span class="chem">r</span> that makes the slogan exactly true. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一間銀行以口號「9 年內令你的錢倍增」宣傳一個儲蓄帳戶。利息以固定的名義年利率 <span class=\"chem\">r%</span> 每月計算複利一次。求 (Find) 使該口號恰好成立的 <span class=\"chem\">r</span> 值，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: no amount is given because none is needed. "Double your money" means <span class="chem">FV = 2PV</span> for any starting amount, so <span class="chem">PV</span> cancels. The unknown is the rate.
        "解碼：題目沒有給出金額，因為根本不需要。「令你的錢倍增」表示對任何起始金額都有 <span class=\"chem\">FV = 2PV</span>，所以 <span class=\"chem\">PV</span> 會互相抵消。未知量是利率。",
        // EN: Monthly compounding for 9 years gives 108 periods: <span class="chem">(1 + r/1200)^{108} = 2</span>.
        "9 年內每月計算複利共有 108 期：<span class=\"chem\">(1 + r/1200)^{108} = 2</span>。",
        // EN: Take the 108th root, or use the Finance Solver with <span class="mono">N = 108, PV = −1, FV = 2, P/Y = C/Y = 12</span>, solving for <span class="mono">I%</span>.
        "取 108 次方根，或在 Finance Solver 中輸入 <span class=\"mono\">N = 108, PV = −1, FV = 2, P/Y = C/Y = 12</span>，解出 <span class=\"mono\">I%</span>。",
      ],
      // EN: <p>Decoding: choose any <span class="chem">PV</span> (for example 1); the condition is <span class="chem">FV = 2PV</span>.</p><div class="worked__math"><i>PV</i>(1 + <span class="frac"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2<i>PV</i> <b>[M1]</b></div><div class="worked__math">(1 + <span class="frac"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2 <b>[A1]</b></div><div class="worked__math"><i>r</i> = 1200(2<sup>1/108</sup> − 1) <b>[M1]</b></div><div class="worked__math">= 7.726… ≈ <b>7.73</b> <b>[A1]</b></div>
      solution: "<p>解碼：任選一個 <span class=\"chem\">PV</span>（例如 1）；條件是 <span class=\"chem\">FV = 2PV</span>。</p><div class=\"worked__math\"><i>PV</i>(1 + <span class=\"frac\"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2<i>PV</i>   <b>[M1]</b></div><div class=\"worked__math\">(1 + <span class=\"frac\"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2   <b>[A1]</b></div><div class=\"worked__math\"><i>r</i> = 1200(2<sup>1/108</sup> − 1)   <b>[M1]</b></div><div class=\"worked__math\">= 7.726… ≈ <b>7.73</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q052 · short · challenge · SL · SL 1.3, 1.4 · 8 marks
    "t1-1-q052": {
      // EN: <p>On 1 January every year, starting in year 1, Tomás deposits 1200 EUR into a savings account. The account pays 3% interest per year, compounded annually, and interest is added on 31 December. He makes no withdrawals.</p><p>(a) Show that the value of the account immediately after the third deposit is 3709.08 EUR. <strong>[2]</strong><br>(b) Show that the value of the account immediately after the <span class="chem">n</span>-th deposit is <span class="chem">40000(1.03^n - 1)</span> EUR. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which the value immediately after the <span class="chem">n</span>-th deposit exceeds 30 000 EUR. <strong>[3]</strong></p>
      stem: "<p>由第 1 年起，每年 1 月 1 日 Tomás 都把 1200 EUR 存入一個儲蓄帳戶。該帳戶的年利率為 3%，每年計算複利一次，利息在 12 月 31 日加入。他沒有提款。</p><p>(a) 證明 (Show that) 緊接第三筆存款之後，帳戶的價值是 3709.08 EUR。<strong>[2]</strong><br>(b) 證明 (Show that) 緊接第 <span class=\"chem\">n</span> 筆存款之後，帳戶的價值是 <span class=\"chem\">40000(1.03^n - 1)</span> EUR。<strong>[3]</strong><br>(c) 求 (Find) 使緊接第 <span class=\"chem\">n</span> 筆存款之後的價值超過 30 000 EUR 的 <span class=\"chem\">n</span> 的最小值。<strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is regular saving, which in Math AA is a geometric series in disguise (not a Finance Solver annuity). Each deposit grows separately; list what each deposit is worth at the moment of the <span class="chem">n</span>-th deposit.
        "解碼：這是定期儲蓄，在 Math AA 中它其實是一個經過偽裝的等比級數（而不是 Finance Solver 的年金）。每筆存款各自增長；列出在第 <span class=\"chem\">n</span> 筆存款的時刻每筆存款的價值。",
        // EN: Immediately after the <span class="chem">n</span>-th deposit, the newest deposit has earned no interest, the one before it one year’s interest, …, and the first one <span class="chem">n - 1</span> years’ interest.
        "緊接第 <span class=\"chem\">n</span> 筆存款之後，最新的一筆尚未賺取利息，前一筆賺取了一年的利息，……，而第一筆賺取了 <span class=\"chem\">n - 1</span> 年的利息。",
        // EN: Sum <span class="chem">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span> with <span class="chem">S_n = u_1(r^n - 1)/(r - 1)</span>, then solve the inequality in (c) with logarithms or a GDC table.
        "用 <span class=\"chem\">S_n = u_1(r^n - 1)/(r - 1)</span> 求 <span class=\"chem\">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span> 之和，然後用對數或 GDC 數值表解 (c) 部分的不等式。",
      ],
      // EN: <p>Decoding: the account value is a sum of separately compounding deposits, which is a geometric series with first term 1200 and ratio 1.03. Immediately after the 3rd deposit the value is <span class="chem">1200(1.03)^2 + 1200(1.03) + 1200 = 3709.08</span>. In general, <span class="chem">S_n = 1200(1.03^n - 1)/0.03 = 40000(1.03^n - 1)</span>. Then <span class="chem">1.03^n &gt; 1.75</span> gives <span class="chem">n &gt; ln 1.75/ln 1.03 ≈ 18.93</span>, so <span class="chem">n = 19</span>.</p>
      solution: "<p>解碼：帳戶價值是各自計算複利的存款之和，即首項為 1200、公比為 1.03 的等比級數。緊接第 3 筆存款之後，價值是 <span class=\"chem\">1200(1.03)^2 + 1200(1.03) + 1200 = 3709.08</span>。一般而言，<span class=\"chem\">S_n = 1200(1.03^n - 1)/0.03 = 40000(1.03^n - 1)</span>。然後由 <span class=\"chem\">1.03^n &gt; 1.75</span> 得 <span class=\"chem\">n &gt; ln 1.75/ln 1.03 ≈ 18.93</span>，所以 <span class=\"chem\">n = 19</span>。</p>",
      // EN: <div class="worked__math">(a) 1200(1.03)<sup>2</sup> + 1200(1.03) + 1200 = 1273.08 + 1236 + 1200 = 3709.08</div><div class="worked__math">(b) 1200 + 1200(1.03) + … + 1200(1.03)<sup><i>n</i>−1</sup> = <span class="frac"><span>1200(1.03<sup><i>n</i></sup> − 1)</span><span>1.03 − 1</span></span> = 40000(1.03<sup><i>n</i></sup> − 1)</div><div class="worked__math">(c) 40000(1.03<sup><i>n</i></sup> − 1) &gt; 30000 ⇒ 1.03<sup><i>n</i></sup> &gt; 1.75 ⇒ <i>n</i> &gt; 18.93, so <b><i>n</i> = 19</b></div>
      answer: "<div class=\"worked__math\">(a) 1200(1.03)<sup>2</sup> + 1200(1.03) + 1200 = 1273.08 + 1236 + 1200 = 3709.08</div><div class=\"worked__math\">(b) 1200 + 1200(1.03) + … + 1200(1.03)<sup><i>n</i>−1</sup> = <span class=\"frac\"><span>1200(1.03<sup><i>n</i></sup> − 1)</span><span>1.03 − 1</span></span> = 40000(1.03<sup><i>n</i></sup> − 1)</div><div class=\"worked__math\">(c) 40000(1.03<sup><i>n</i></sup> − 1) &gt; 30000  ⇒  1.03<sup><i>n</i></sup> &gt; 1.75  ⇒  <i>n</i> &gt; 18.93，所以 <b><i>n</i> = 19</b></div>",
      markscheme: [
        // EN: M1: (a) Recognizes that the first deposit has earned interest twice and the second once: <span class="chem">1200(1.03)^2 + 1200(1.03) + 1200</span>.
        "M1：(a) 認出第一筆存款賺取了兩次利息，第二筆賺取了一次：<span class=\"chem\">1200(1.03)^2 + 1200(1.03) + 1200</span>。",
        // EN: A1: (a) <span class="chem">1273.08 + 1236 + 1200</span>, which gives the stated 3709.08 (the given value itself earns no mark).
        "A1：(a) <span class=\"chem\">1273.08 + 1236 + 1200</span>，得出所述的 3709.08（只寫出所給的數值本身不得分）。",
        // EN: M1: (b) Writes the value as the geometric series <span class="chem">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span>.
        "M1：(b) 把價值寫成等比級數 <span class=\"chem\">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span>。",
        // EN: A1: (b) Identifies first term 1200, ratio 1.03 and <span class="chem">n</span> terms.
        "A1：(b) 確定首項為 1200、公比為 1.03，共 <span class=\"chem\">n</span> 項。",
        // EN: A1: (b) <span class="chem">1200(1.03^n - 1)/0.03</span>, which leads to the given result (the given line itself earns no mark).
        "A1：(b) <span class=\"chem\">1200(1.03^n - 1)/0.03</span>，從而得到所給結果（只寫出所給的式子本身不得分）。",
        // EN: M1: (c) Sets up <span class="chem">40000(1.03^n - 1) &gt; 30000</span> (an equation is acceptable).
        "M1：(c) 列出 <span class=\"chem\">40000(1.03^n - 1) &gt; 30000</span>（列出方程亦可接受）。",
        // EN: A1: (c) <span class="chem">1.03^n &gt; 1.75</span>, so <span class="chem">n &gt; 18.93</span> (or GDC values 28 097.32 for <span class="chem">n = 18</span> and 30 140.24 for <span class="chem">n = 19</span>).
        "A1：(c) <span class=\"chem\">1.03^n &gt; 1.75</span>，所以 <span class=\"chem\">n &gt; 18.93</span>（或 GDC 數值：<span class=\"chem\">n = 18</span> 時為 28 097.32，<span class=\"chem\">n = 19</span> 時為 30 140.24）。",
        // EN: A1: (c) <span class="chem">n = 19</span>.
        "A1：(c) <span class=\"chem\">n = 19</span>。",
      ],
    },

    // ── t1-1-q053 · short · exam · SL · SL 1.4 · 6 marks
    "t1-1-q053": {
      // EN: <p>A printing machine is bought for 50 000 USD. Its value depreciates by 20% each year.</p><p>(a) Write down an expression for the value of the machine after <span class="chem">n</span> years. <strong>[1]</strong><br>(b) Find the value of the machine after 2 years. <strong>[2]</strong><br>(c) Find the least number of complete years after which the machine is worth less than half of its original value. <strong>[3]</strong></p>
      stem: "<p>一部印刷機以 50 000 USD 購入，其價值每年折舊 20%。</p><p>(a) 寫出 (Write down) 該機器在 <span class=\"chem\">n</span> 年後的價值的表達式。<strong>[1]</strong><br>(b) 求 (Find) 該機器在 2 年後的價值。<strong>[2]</strong><br>(c) 求 (Find) 經過最少多少個完整年度後，該機器的價值少於其原值的一半。<strong>[3]</strong></p>",
      hints: [
        // EN: A 20% loss each year means multiplying by 0.8 each year.
        "每年損失 20% 表示每年乘以 0.8。",
        // EN: On Paper 1, compute powers of 0.8 by hand: <span class="chem">0.8^2 = 0.64</span>, <span class="chem">0.8^3 = 0.512</span>, …
        "在 Paper 1 中，要用人手計算 0.8 的冪：<span class=\"chem\">0.8^2 = 0.64</span>，<span class=\"chem\">0.8^3 = 0.512</span>，……",
        // EN: "Less than half" is strict: 0.512 is still more than 0.5.
        "「少於一半」是嚴格不等式：0.512 仍然大於 0.5。",
      ],
      // EN: <p>The value after <span class="chem">n</span> years is <span class="chem">50000(0.8)^n</span>. Half of the original value is 25 000, so we need <span class="chem">0.8^n &lt; 0.5</span>. After 3 years the value is 25 600, which is still above half; after 4 years it is 20 480. The answer is 4 complete years.</p>
      solution: "<p><span class=\"chem\">n</span> 年後的價值是 <span class=\"chem\">50000(0.8)^n</span>。原值的一半是 25 000，所以需要 <span class=\"chem\">0.8^n &lt; 0.5</span>。3 年後的價值是 25 600，仍然高於一半；4 年後是 20 480。答案是 4 個完整年度。</p>",
      // EN: <div class="worked__math">(a) <b>50 000 × 0.8<sup><i>n</i></sup></b></div><div class="worked__math">(b) 50 000 × 0.64 = <b>32 000 USD</b></div><div class="worked__math">(c) Need 0.8<sup><i>n</i></sup> &lt; 0.5. 0.8<sup>3</sup> = 0.512 (value 25 600, not yet below 25 000); 0.8<sup>4</sup> = 0.4096 (value 20 480). So <b>4 years</b></div>
      answer: "<div class=\"worked__math\">(a) <b>50 000 × 0.8<sup><i>n</i></sup></b></div><div class=\"worked__math\">(b) 50 000 × 0.64 = <b>32 000 USD</b></div><div class=\"worked__math\">(c) 需要 0.8<sup><i>n</i></sup> &lt; 0.5。0.8<sup>3</sup> = 0.512（價值 25 600，尚未低於 25 000）；0.8<sup>4</sup> = 0.4096（價值 20 480）。所以是 <b>4 年</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">50000 × 0.8^n</span> (or equivalent).
        "A1：(a) <span class=\"chem\">50000 × 0.8^n</span>（或等價式）。",
        // EN: M1: (b) Substitutes <span class="chem">n = 2</span>: <span class="chem">50000 × 0.8^2</span>.
        "M1：(b) 代入 <span class=\"chem\">n = 2</span>：<span class=\"chem\">50000 × 0.8^2</span>。",
        // EN: A1: (b) 32 000 USD.
        "A1：(b) 32 000 USD。",
        // EN: M1: (c) Sets up <span class="chem">50000 × 0.8^n &lt; 25000</span>, i.e. <span class="chem">0.8^n &lt; 0.5</span>.
        "M1：(c) 列出 <span class=\"chem\">50000 × 0.8^n &lt; 25000</span>，即 <span class=\"chem\">0.8^n &lt; 0.5</span>。",
        // EN: A1: (c) Evaluates <span class="chem">0.8^3 = 0.512</span> and <span class="chem">0.8^4 = 0.4096</span> (or the values 25 600 and 20 480).
        "A1：(c) 計算 <span class=\"chem\">0.8^3 = 0.512</span> 及 <span class=\"chem\">0.8^4 = 0.4096</span>（或價值 25 600 及 20 480）。",
        // EN: A1: (c) 4 years.
        "A1：(c) 4 年。",
      ],
    },

    // ── t1-1-q054 · numeric · exam · SL · SL 1.1 · 3 marks
    "t1-1-q054": {
      // EN: <p>Find the value of <span class="chem">(2.4 × 10^{-3})^2 / (1.6 × 10^{-8})</span>. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>
      stem: "<p>求 (Find) <span class=\"chem\">(2.4 × 10^{-3})^2 / (1.6 × 10^{-8})</span> 的值。答案以 <span class=\"chem\">a × 10^k</span> 的形式表示，其中 <span class=\"chem\">1 &lt;= a &lt; 10</span> 且 <span class=\"chem\">k</span> 為整數。</p>",
      hints: [
        // EN: Square both parts of the bracket: <span class="chem">(2.4)^2 × (10^{-3})^2</span>.
        "把括號內的兩部分都平方：<span class=\"chem\">(2.4)^2 × (10^{-3})^2</span>。",
        // EN: Then divide the leading numbers and subtract the powers of 10: <span class="chem">-6 - (-8) = 2</span>.
        "然後把前面的數相除，並把 10 的指數相減：<span class=\"chem\">-6 - (-8) = 2</span>。",
      ],
      // EN: <div class="worked__math">(2.4 × 10<sup>−3</sup>)<sup>2</sup> = 5.76 × 10<sup>−6</sup> <b>[A1]</b></div><div class="worked__math"><span class="frac"><span>5.76 × 10<sup>−6</sup></span><span>1.6 × 10<sup>−8</sup></span></span> = 3.6 × 10<sup>−6 − (−8)</sup> <b>[M1]</b></div><div class="worked__math">= <b>3.6 × 10<sup>2</sup></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(2.4 × 10<sup>−3</sup>)<sup>2</sup> = 5.76 × 10<sup>−6</sup>   <b>[A1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span>5.76 × 10<sup>−6</sup></span><span>1.6 × 10<sup>−8</sup></span></span> = 3.6 × 10<sup>−6 − (−8)</sup>   <b>[M1]</b></div><div class=\"worked__math\">= <b>3.6 × 10<sup>2</sup></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q055 · numeric · challenge · SL · SL 1.1, 1.3 · 5 marks
    "t1-1-q055": {
      // EN: <p>At the start of 2020, a company stored <span class="chem">3.2 × 10^{15}</span> bytes of data. The amount stored at the start of each year is 28% greater than at the start of the previous year. Find the first year at the start of which the amount stored exceeds <span class="chem">1.0 × 10^{18}</span> bytes.</p>
      stem: "<p>在 2020 年年初，某公司儲存了 <span class=\"chem\">3.2 × 10^{15}</span> 位元組的數據。每年年初所儲存的數量都比上一年年初多 28%。求 (Find) 所儲存的數量在年初首次超過 <span class=\"chem\">1.0 × 10^{18}</span> 位元組的年份。</p>",
      hints: [
        // EN: Decode: this is a geometric sequence in standard-form numbers. The question asks for a calendar year, not for <span class="chem">n</span>, so decide what <span class="chem">n</span> means first: let <span class="chem">n</span> be the number of years after the start of 2020.
        "解碼：這是一個以科學記數法表示的等比數列。題目問的是公曆年份，而不是 <span class=\"chem\">n</span>，所以先決定 <span class=\"chem\">n</span> 的意思：設 <span class=\"chem\">n</span> 為 2020 年年初之後的年數。",
        // EN: Solve <span class="chem">3.2 × 10^{15} × 1.28^n &gt; 1.0 × 10^{18}</span>, i.e. <span class="chem">1.28^n &gt; 312.5</span>.
        "解 <span class=\"chem\">3.2 × 10^{15} × 1.28^n &gt; 1.0 × 10^{18}</span>，即 <span class=\"chem\">1.28^n &gt; 312.5</span>。",
        // EN: Round <span class="chem">n</span> up to an integer, then add it to 2020.
        "把 <span class=\"chem\">n</span> 向上取整為整數，然後加上 2020。",
      ],
      // EN: <p>Decoding: the amount at the start of 2020 + <span class="chem">n</span> is <span class="chem">3.2 × 10^{15} × 1.28^n</span> (so 2020 corresponds to <span class="chem">n = 0</span>, not <span class="chem">n = 1</span>).</p><div class="worked__math">3.2 × 10<sup>15</sup> × 1.28<sup><i>n</i></sup> &gt; 10<sup>18</sup> ⇒ 1.28<sup><i>n</i></sup> &gt; 312.5 <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 312.5</span><span>ln 1.28</span></span> ≈ 23.27 <b>[A1]</b></div><div class="worked__math"><i>n</i> = 24 (check: <i>n</i> = 23 gives 9.35 × 10<sup>17</sup>, <i>n</i> = 24 gives 1.20 × 10<sup>18</sup>) <b>[A1]</b></div><div class="worked__math">Year: 2020 + 24 = <b>2044</b> <b>[A1]</b></div>
      solution: "<p>解碼：在 2020 + <span class=\"chem\">n</span> 年年初的數量是 <span class=\"chem\">3.2 × 10^{15} × 1.28^n</span>（所以 2020 年對應 <span class=\"chem\">n = 0</span>，而不是 <span class=\"chem\">n = 1</span>）。</p><div class=\"worked__math\">3.2 × 10<sup>15</sup> × 1.28<sup><i>n</i></sup> &gt; 10<sup>18</sup>  ⇒  1.28<sup><i>n</i></sup> &gt; 312.5   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 312.5</span><span>ln 1.28</span></span> ≈ 23.27   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> = 24（驗算：<i>n</i> = 23 時為 9.35 × 10<sup>17</sup>，<i>n</i> = 24 時為 1.20 × 10<sup>18</sup>）   <b>[A1]</b></div><div class=\"worked__math\">年份：2020 + 24 = <b>2044</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q056 · short · challenge · SL · SL 1.2, 1.3 · 9 marks
    "t1-1-q056": {
      // EN: <p>An arithmetic sequence <span class="chem">u_n</span> has common difference <span class="chem">d</span>, and a geometric sequence <span class="chem">v_n</span> has common ratio <span class="chem">r</span>. The geometric sequence is not constant. Both sequences have first term 3. The third term of the arithmetic sequence equals the second term of the geometric sequence, and the seventh term of the arithmetic sequence equals the third term of the geometric sequence.</p><p>(a) Show that <span class="chem">r^2 - 3r + 2 = 0</span>. <strong>[3]</strong><br>(b) Find the value of <span class="chem">r</span> and the value of <span class="chem">d</span>. <strong>[4]</strong><br>(c) Find <span class="chem">Σ_{k=1}^{20} u_k</span>. <strong>[2]</strong></p>
      stem: "<p>一個等差數列 <span class=\"chem\">u_n</span> 的公差為 <span class=\"chem\">d</span>，而一個等比數列 <span class=\"chem\">v_n</span> 的公比為 <span class=\"chem\">r</span>。該等比數列不是常數數列。兩個數列的首項都是 3。等差數列的第三項等於等比數列的第二項，而等差數列的第七項等於等比數列的第三項。</p><p>(a) 證明 (Show that) <span class=\"chem\">r^2 - 3r + 2 = 0</span>。<strong>[3]</strong><br>(b) 求 (Find) <span class=\"chem\">r</span> 的值及 <span class=\"chem\">d</span> 的值。<strong>[4]</strong><br>(c) 求 (Find) <span class=\"chem\">Σ_{k=1}^{20} u_k</span>。<strong>[2]</strong></p>",
      hints: [
        // EN: Decode: translate each sentence into an equation using <span class="chem">u_n = 3 + (n - 1)d</span> and <span class="chem">v_n = 3r^{n-1}</span>. The phrase "not constant" is a hidden condition: it rules out <span class="chem">r = 1</span>.
        "解碼：利用 <span class=\"chem\">u_n = 3 + (n - 1)d</span> 及 <span class=\"chem\">v_n = 3r^{n-1}</span>，把每一句轉化為一條方程。「不是常數數列」這句話是一個隱藏條件：它排除了 <span class=\"chem\">r = 1</span>。",
        // EN: Third arithmetic term: <span class="chem">3 + 2d</span>; second geometric term: <span class="chem">3r</span>. Seventh arithmetic term: <span class="chem">3 + 6d</span>; third geometric term: <span class="chem">3r^2</span>.
        "等差數列第三項：<span class=\"chem\">3 + 2d</span>；等比數列第二項：<span class=\"chem\">3r</span>。等差數列第七項：<span class=\"chem\">3 + 6d</span>；等比數列第三項：<span class=\"chem\">3r^2</span>。",
        // EN: Make <span class="chem">d</span> the subject of the first equation and substitute into the second.
        "把第一條方程改寫成以 <span class=\"chem\">d</span> 為主項，再代入第二條方程。",
      ],
      // EN: <p>Decoding: four "term equals term" facts become two equations; "not constant" eliminates the root <span class="chem">r = 1</span> (which would give <span class="chem">d = 0</span> and two constant sequences). With <span class="chem">r = 2</span>, <span class="chem">d = 3/2</span>: check <span class="chem">u_3 = 6 = v_2</span> and <span class="chem">u_7 = 12 = v_3</span>. Then <span class="chem">S_{20} = 345</span>.</p>
      solution: "<p>解碼：四個「某項等於某項」的資料變成兩條方程；「不是常數數列」排除了根 <span class=\"chem\">r = 1</span>（它會給出 <span class=\"chem\">d = 0</span> 及兩個常數數列）。當 <span class=\"chem\">r = 2</span>、<span class=\"chem\">d = 3/2</span> 時，驗算 <span class=\"chem\">u_3 = 6 = v_2</span> 及 <span class=\"chem\">u_7 = 12 = v_3</span>。於是 <span class=\"chem\">S_{20} = 345</span>。</p>",
      // EN: <div class="worked__math">(a) 3 + 2<i>d</i> = 3<i>r</i> and 3 + 6<i>d</i> = 3<i>r</i><sup>2</sup>. From the first, <i>d</i> = <span class="frac"><span>3(<i>r</i> − 1)</span><span>2</span></span>; substituting: 3 + 9(<i>r</i> − 1) = 3<i>r</i><sup>2</sup> ⇒ 3<i>r</i><sup>2</sup> − 9<i>r</i> + 6 = 0 ⇒ <i>r</i><sup>2</sup> − 3<i>r</i> + 2 = 0</div><div class="worked__math">(b) (<i>r</i> − 1)(<i>r</i> − 2) = 0. <i>r</i> = 1 would make the geometric sequence constant, so <b><i>r</i> = 2</b> and <b><i>d</i> = <span class="frac"><span>3</span><span>2</span></span></b></div><div class="worked__math">(c) <span class="frac"><span>20</span><span>2</span></span>(2 × 3 + 19 × <span class="frac"><span>3</span><span>2</span></span>) = 10 × 34.5 = <b>345</b></div>
      answer: "<div class=\"worked__math\">(a) 3 + 2<i>d</i> = 3<i>r</i> 及 3 + 6<i>d</i> = 3<i>r</i><sup>2</sup>。由第一條得 <i>d</i> = <span class=\"frac\"><span>3(<i>r</i> − 1)</span><span>2</span></span>；代入：3 + 9(<i>r</i> − 1) = 3<i>r</i><sup>2</sup>  ⇒  3<i>r</i><sup>2</sup> − 9<i>r</i> + 6 = 0  ⇒  <i>r</i><sup>2</sup> − 3<i>r</i> + 2 = 0</div><div class=\"worked__math\">(b) (<i>r</i> − 1)(<i>r</i> − 2) = 0。<i>r</i> = 1 會使等比數列成為常數數列，所以 <b><i>r</i> = 2</b> 及 <b><i>d</i> = <span class=\"frac\"><span>3</span><span>2</span></span></b></div><div class=\"worked__math\">(c) <span class=\"frac\"><span>20</span><span>2</span></span>(2 × 3 + 19 × <span class=\"frac\"><span>3</span><span>2</span></span>) = 10 × 34.5 = <b>345</b></div>",
      markscheme: [
        // EN: M1: (a) Writes both conditions: <span class="chem">3 + 2d = 3r</span> and <span class="chem">3 + 6d = 3r^2</span>.
        "M1：(a) 寫出兩個條件：<span class=\"chem\">3 + 2d = 3r</span> 及 <span class=\"chem\">3 + 6d = 3r^2</span>。",
        // EN: M1: (a) Eliminates <span class="chem">d</span>, e.g. <span class="chem">d = 3(r - 1)/2</span> substituted into the second equation.
        "M1：(a) 消去 <span class=\"chem\">d</span>，例如把 <span class=\"chem\">d = 3(r - 1)/2</span> 代入第二條方程。",
        // EN: A1: (a) <span class="chem">3 + 9(r - 1) = 3r^2</span> or <span class="chem">3r^2 - 9r + 6 = 0</span>, which leads to the given equation (the given line itself earns no mark).
        "A1：(a) <span class=\"chem\">3 + 9(r - 1) = 3r^2</span> 或 <span class=\"chem\">3r^2 - 9r + 6 = 0</span>，從而得到所給方程（只寫出所給的式子本身不得分）。",
        // EN: M1: (b) Factorizes: <span class="chem">(r - 1)(r - 2) = 0</span>.
        "M1：(b) 因式分解：<span class=\"chem\">(r - 1)(r - 2) = 0</span>。",
        // EN: R1: (b) Rejects <span class="chem">r = 1</span> because the geometric sequence is not constant.
        "R1：(b) 因為等比數列不是常數數列，所以捨去 <span class=\"chem\">r = 1</span>。",
        // EN: A1: (b) <span class="chem">r = 2</span>.
        "A1：(b) <span class=\"chem\">r = 2</span>。",
        // EN: A1: (b) <span class="chem">d = 3/2</span>.
        "A1：(b) <span class=\"chem\">d = 3/2</span>。",
        // EN: M1: (c) Uses <span class="chem">S_{20} = (20/2)(2 × 3 + 19 × 3/2)</span>.
        "M1：(c) 使用 <span class=\"chem\">S_{20} = (20/2)(2 × 3 + 19 × 3/2)</span>。",
        // EN: A1: (c) 345.
        "A1：(c) 345。",
      ],
    },

    // ── t1-1-q057 · numeric · exam · SL · SL 1.8 · 4 marks
    "t1-1-q057": {
      // EN: <p>Find the exact value of <span class="chem">Σ_{k=2}^{infty} 5(-2/3)^k</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">Σ_{k=2}^{infty} 5(-2/3)^k</span> 的準確值。</p>",
      hints: [
        // EN: The sum starts at <span class="chem">k = 2</span>, so the first term is <span class="chem">5(-2/3)^2 = 20/9</span>, not 5.
        "這個和由 <span class=\"chem\">k = 2</span> 開始，所以首項是 <span class=\"chem\">5(-2/3)^2 = 20/9</span>，而不是 5。",
        // EN: The common ratio is <span class="chem">-2/3</span>, and <span class="chem">|-2/3| &lt; 1</span>. Use <span class="chem">S_infty = u_1/(1 - r)</span> and take care with <span class="chem">1 - (-2/3)</span>.
        "公比是 <span class=\"chem\">-2/3</span>，且 <span class=\"chem\">|-2/3| &lt; 1</span>。使用 <span class=\"chem\">S_infty = u_1/(1 - r)</span>，並小心處理 <span class=\"chem\">1 - (-2/3)</span>。",
      ],
      // EN: <div class="worked__math">First term (<i>k</i> = 2): 5 × <span class="frac"><span>4</span><span>9</span></span> = <span class="frac"><span>20</span><span>9</span></span> <b>[A1]</b></div><div class="worked__math"><i>r</i> = −<span class="frac"><span>2</span><span>3</span></span>, |<i>r</i>| &lt; 1 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>20/9</span><span>1 + 2/3</span></span> = <span class="frac"><span>20</span><span>9</span></span> × <span class="frac"><span>3</span><span>5</span></span> <b>[M1]</b></div><div class="worked__math">= <b><span class="frac"><span>4</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">首項（<i>k</i> = 2）：5 × <span class=\"frac\"><span>4</span><span>9</span></span> = <span class=\"frac\"><span>20</span><span>9</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>r</i> = −<span class=\"frac\"><span>2</span><span>3</span></span>，|<i>r</i>| &lt; 1   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>20/9</span><span>1 + 2/3</span></span> = <span class=\"frac\"><span>20</span><span>9</span></span> × <span class=\"frac\"><span>3</span><span>5</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <b><span class=\"frac\"><span>4</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q058 · short · exam · SL · SL 1.3, 1.8 · 7 marks
    "t1-1-q058": {
      // EN: <p>Consider the geometric series <span class="chem">Σ_{k=1}^{n} 6(1/2)^k</span>, whose sum is <span class="chem">S_n</span>.</p><p>(a) Find the sum to infinity <span class="chem">S_infty</span> of the series. <strong>[2]</strong><br>(b) Show that <span class="chem">S_infty - S_n = 6(1/2)^n</span>. <strong>[2]</strong><br>(c) Hence find the least value of <span class="chem">n</span> for which <span class="chem">S_infty - S_n &lt; 0.01</span>. <strong>[3]</strong></p>
      stem: "<p>考慮等比級數 <span class=\"chem\">Σ_{k=1}^{n} 6(1/2)^k</span>，其和為 <span class=\"chem\">S_n</span>。</p><p>(a) 求 (Find) 該級數的無限項之和 <span class=\"chem\">S_infty</span>。<strong>[2]</strong><br>(b) 證明 (Show that) <span class=\"chem\">S_infty - S_n = 6(1/2)^n</span>。<strong>[2]</strong><br>(c) 由此求 (Hence find) 使 <span class=\"chem\">S_infty - S_n &lt; 0.01</span> 的 <span class=\"chem\">n</span> 的最小值。<strong>[3]</strong></p>",
      hints: [
        // EN: The sum starts at <span class="chem">k = 1</span>, so the first term is <span class="chem">6 × 1/2 = 3</span>.
        "這個和由 <span class=\"chem\">k = 1</span> 開始，所以首項是 <span class=\"chem\">6 × 1/2 = 3</span>。",
        // EN: For (b), write <span class="chem">S_n</span> with the finite geometric formula and subtract it from 6.
        "在 (b) 部中，用有限等比級數公式寫出 <span class=\"chem\">S_n</span>，再以 6 減去它。",
        // EN: For (c) on Paper 1, multiply out: <span class="chem">(1/2)^n &lt; 1/600</span> means <span class="chem">2^n &gt; 600</span>. List powers of 2.
        "在 Paper 1 的 (c) 部中，把式子展開：<span class=\"chem\">(1/2)^n &lt; 1/600</span> 即 <span class=\"chem\">2^n &gt; 600</span>。列出 2 的冪。",
      ],
      // EN: <p><span class="chem">S_infty - S_n</span> is the "tail" of the series, the terms after the <span class="chem">n</span>-th. Here it equals <span class="chem">6(1/2)^n</span>. The condition becomes <span class="chem">2^n &gt; 600</span>. Since <span class="chem">2^9 = 512</span> is too small and <span class="chem">2^{10} = 1024</span> works, the least value is <span class="chem">n = 10</span>.</p>
      solution: "<p><span class=\"chem\">S_infty - S_n</span> 是該級數的「尾部」，即第 <span class=\"chem\">n</span> 項之後的各項。這裏它等於 <span class=\"chem\">6(1/2)^n</span>。條件變成 <span class=\"chem\">2^n &gt; 600</span>。由於 <span class=\"chem\">2^9 = 512</span> 太小而 <span class=\"chem\">2^{10} = 1024</span> 符合，所以最小值為 <span class=\"chem\">n = 10</span>。</p>",
      // EN: <div class="worked__math">(a) <i>u</i><sub>1</sub> = 3, <i>r</i> = <span class="frac"><span>1</span><span>2</span></span>: <i>S</i><sub>∞</sub> = <span class="frac"><span>3</span><span>1/2</span></span> = <b>6</b></div><div class="worked__math">(b) <i>S</i><sub><i>n</i></sub> = <span class="frac"><span>3(1 − (1/2)<sup><i>n</i></sup>)</span><span>1/2</span></span> = 6 − 6(1/2)<sup><i>n</i></sup>, so <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = 6(1/2)<sup><i>n</i></sup></div><div class="worked__math">(c) 6(1/2)<sup><i>n</i></sup> &lt; 0.01 ⇔ 2<sup><i>n</i></sup> &gt; 600. Since 2<sup>9</sup> = 512 and 2<sup>10</sup> = 1024, <b><i>n</i> = 10</b></div>
      answer: "<div class=\"worked__math\">(a) <i>u</i><sub>1</sub> = 3，<i>r</i> = <span class=\"frac\"><span>1</span><span>2</span></span>：<i>S</i><sub>∞</sub> = <span class=\"frac\"><span>3</span><span>1/2</span></span> = <b>6</b></div><div class=\"worked__math\">(b) <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span>3(1 − (1/2)<sup><i>n</i></sup>)</span><span>1/2</span></span> = 6 − 6(1/2)<sup><i>n</i></sup>，所以 <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = 6(1/2)<sup><i>n</i></sup></div><div class=\"worked__math\">(c) 6(1/2)<sup><i>n</i></sup> &lt; 0.01  ⇔  2<sup><i>n</i></sup> &gt; 600。由於 2<sup>9</sup> = 512 而 2<sup>10</sup> = 1024，所以 <b><i>n</i> = 10</b></div>",
      markscheme: [
        // EN: A1: (a) Identifies <span class="chem">u_1 = 3</span> and <span class="chem">r = 1/2</span>.
        "A1：(a) 確定 <span class=\"chem\">u_1 = 3</span> 及 <span class=\"chem\">r = 1/2</span>。",
        // EN: A1: (a) <span class="chem">S_infty = 6</span>.
        "A1：(a) <span class=\"chem\">S_infty = 6</span>。",
        // EN: M1: (b) Uses <span class="chem">S_n = 3(1 - (1/2)^n)/(1 - 1/2)</span>.
        "M1：(b) 使用 <span class=\"chem\">S_n = 3(1 - (1/2)^n)/(1 - 1/2)</span>。",
        // EN: A1: (b) <span class="chem">S_n = 6 - 6(1/2)^n</span>, which leads to the given result (the given line itself earns no mark).
        "A1：(b) <span class=\"chem\">S_n = 6 - 6(1/2)^n</span>，從而得到所給結果（只寫出所給的式子本身不得分）。",
        // EN: M1: (c) Sets <span class="chem">6(1/2)^n &lt; 0.01</span> and rearranges to <span class="chem">2^n &gt; 600</span>.
        "M1：(c) 設 <span class=\"chem\">6(1/2)^n &lt; 0.01</span>，並整理為 <span class=\"chem\">2^n &gt; 600</span>。",
        // EN: A1: (c) Compares powers of 2: <span class="chem">2^9 = 512 &lt; 600 &lt; 1024 = 2^{10}</span>.
        "A1：(c) 比較 2 的冪：<span class=\"chem\">2^9 = 512 &lt; 600 &lt; 1024 = 2^{10}</span>。",
        // EN: A1: (c) <span class="chem">n = 10</span>.
        "A1：(c) <span class=\"chem\">n = 10</span>。",
      ],
    },

    // ── t1-1-q059 · numeric · challenge · SL · SL 1.2 · 5 marks
    "t1-1-q059": {
      // EN: <p>Find the sum of all the odd integers between 100 and 500 that are multiples of 7.</p>
      stem: "<p>求 (Find) 100 與 500 之間所有是 7 的倍數的奇數之和。</p>",
      hints: [
        // EN: Decode: the numbers you want are 7 × (odd number). Consecutive ones differ by 14, not 7, so they form an arithmetic sequence with <span class="chem">d = 14</span>. You need its first term, last term and number of terms.
        "解碼：所求的數是 7 × （奇數）。相鄰兩個這樣的數相差 14 而不是 7，所以它們構成一個 <span class=\"chem\">d = 14</span> 的等差數列。你需要求出它的首項、末項及項數。",
        // EN: The first multiple of 7 above 100 is 105 (odd). The last multiple of 7 below 500 is 497 (odd).
        "大於 100 的第一個 7 的倍數是 105（奇數）。小於 500 的最後一個 7 的倍數是 497（奇數）。",
        // EN: Number of terms <span class="chem">= (497 - 105)/14 + 1</span>. Then use <span class="chem">S = (N/2)(first + last)</span>.
        "項數 <span class=\"chem\">= (497 - 105)/14 + 1</span>。然後使用 <span class=\"chem\">S = (N/2)(first + last)</span>（首項 + 末項）。",
      ],
      // EN: <p>Decoding: "odd multiples of 7" skip every other multiple of 7, so the common difference is 14.</p><div class="worked__math">Arithmetic sequence 105, 119, 133, …, 497 with <i>d</i> = 14 <b>[R1]</b></div><div class="worked__math">First term 105, last term 497 <b>[A1]</b></div><div class="worked__math"><i>N</i> = <span class="frac"><span>497 − 105</span><span>14</span></span> + 1 = 29 <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>29</span><span>2</span></span>(105 + 497) <b>[M1]</b></div><div class="worked__math">= 29 × 301 = <b>8729</b> <b>[A1]</b></div>
      solution: "<p>解碼：「7 的奇數倍數」每隔一個 7 的倍數才取一個，所以公差是 14。</p><div class=\"worked__math\">等差數列 105, 119, 133, …, 497，其中 <i>d</i> = 14   <b>[R1]</b></div><div class=\"worked__math\">首項 105，末項 497   <b>[A1]</b></div><div class=\"worked__math\"><i>N</i> = <span class=\"frac\"><span>497 − 105</span><span>14</span></span> + 1 = 29   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i> = <span class=\"frac\"><span>29</span><span>2</span></span>(105 + 497)   <b>[M1]</b></div><div class=\"worked__math\">= 29 × 301 = <b>8729</b>   <b>[A1]</b></div>",
    },

  }
});
