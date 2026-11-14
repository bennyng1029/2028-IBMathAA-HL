/* t1-1.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-1.q', {
  questions: {

    // ── t1-1-q001 · mcq · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q001": {
      // EN: <p>Let <span class="chem">A = 3.2 × 10^5</span> and <span class="chem">B = 8.0 × 10^{-3}</span>. Find the value of <span class="chem">A / B</span> in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>
      stem: "<p><span class=\"chem\">A = 3.2 × 10^5</span>、<span class=\"chem\">B = 8.0 × 10^{-3}</span> とする。<span class=\"chem\">A / B</span> の値を <span class=\"chem\">a × 10^k</span>（<span class=\"chem\">1 &lt;= a &lt; 10</span>、<span class=\"chem\">k</span> は整数）の形で求めなさい (Find)。</p>",
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
        "係数どうしを割り、10 の指数どうしを別々に引きます：<span class=\"chem\">(3.2 / 8.0) × 10^{5 - (-3)}</span>。",
        // EN: Adjust <span class="chem">0.4 × 10^8</span> so the leading number lies between 1 and 10.
        "先頭の数が 1 以上 10 未満になるように <span class=\"chem\">0.4 × 10^8</span> を調整します。",
      ],
      // EN: <div class="worked__math"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>",
      misconception: {
        // EN (option B): In standard form <span class="chem">a × 10^k</span>, the coefficient must satisfy <span class="chem">1 &lt;= a &lt; 10</span>. Write <span class="chem">0.4 × 10^8</span> as <span class="chem">4.0 × 10^7</span>.
        "1": "指数表記 <span class=\"chem\">a × 10^k</span> では、係数は <span class=\"chem\">1 &lt;= a &lt; 10</span> を満たす必要があります。<span class=\"chem\">0.4 × 10^8</span> を <span class=\"chem\">4.0 × 10^7</span> に直しましょう。",
        // EN (option C): When dividing powers of 10, subtract the bottom exponent: <span class="chem">5 - (-3) = 8</span>, not <span class="chem">5 - 3 = 2</span>.
        "2": "10 の累乗を割るときは分母の指数を引きます：<span class=\"chem\">5 - 3 = 2</span> ではなく、<span class=\"chem\">5 - (-3) = 8</span> です。",
        // EN (option D): Since <span class="chem">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span>, the exponent decreases from 8 to 7, not 8.
        "3": "<span class=\"chem\">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span> なので、指数は 8 のままではなく 8 から 7 へ 1 つ減ります。",
      },
    },

    // ── t1-1-q002 · numeric · foundation · SL · SL 1.2 · 3 marks
    "t1-1-q002": {
      // EN: <p>In an arithmetic sequence, the fourth term is <span class="chem">u_4 = 19</span> and the tenth term is <span class="chem">u_{10} = 43</span>. Find the first term <span class="chem">u_1</span>.</p>
      stem: "<p>ある等差数列において、第 4 項が <span class=\"chem\">u_4 = 19</span>、第 10 項が <span class=\"chem\">u_{10} = 43</span> である。初項 <span class=\"chem\">u_1</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: From <span class="chem">u_4</span> to <span class="chem">u_{10}</span> there are <span class="chem">10 - 4 = 6</span> steps of size <span class="chem">d</span>.
        "<span class=\"chem\">u_4</span> から <span class=\"chem\">u_{10}</span> までは、公差 <span class=\"chem\">d</span> が <span class=\"chem\">10 - 4 = 6</span> 回分増えています。",
        // EN: Once you find <span class="chem">d</span>, use <span class="chem">u_4 = u_1 + 3d = 19</span> to solve for <span class=\"chem\">u_1</span>.
        "<span class=\"chem\">d</span> を求めたら、<span class=\"chem\">u_4 = u_1 + 3d = 19</span> に代入して <span class=\"chem\">u_1</span> を求めます。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24 ⇒ <i>d</i> = 4</div><div class="worked__math"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24 ⇒ <i>d</i> = 4</div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>",
    },

    // ── t1-1-q003 · mcq · foundation · SL · SL 1.2 · 2 marks
    "t1-1-q003": {
      // EN: <p>How many terms are in the sum <span class="chem">Σ_{k=4}^{19} (5k - 2)</span>, and what is the first term of this sum?</p>
      stem: "<p>和 <span class=\"chem\">Σ_{k=4}^{19} (5k - 2)</span> にはいくつの項が含まれ、その初項（最初の項）はいくらですか？</p>",
      options: [
        // EN: 15 terms, first term is 18
        "15 項、初項は 18",
        // EN: 16 terms, first term is 18
        "16 項、初項は 18",
        // EN: 16 terms, first term is 3
        "16 項、初項は 3",
        // EN: 19 terms, first term is 18
        "19 項、初項は 18",
      ],
      hints: [
        // EN: The number of integers from <span class="chem">a</span> to <span class="chem">b</span> inclusive is <span class="chem">b - a + 1</span>.
        "<span class=\"chem\">a</span> から <span class=\"chem\">b</span> までの整数の個数は <span class=\"chem\">b - a + 1</span> です。",
        // EN: Substitute the bottom index <span class="chem">k = 4</span> into <span class="chem">5k - 2</span> to find the first term.
        "シグマの下端 <span class=\"chem\">k = 4</span> を <span class=\"chem\">5k - 2</span> に代入して最初の項を求めます。",
      ],
      // EN: <p>There are <span class="chem">19 - 4 + 1 = 16</span> terms. Substituting <span class="chem">k = 4</span> gives the first term <span class="chem">5(4) - 2 = 18</span>.</p>
      solution: "<p>項数は <span class=\"chem\">19 - 4 + 1 = 16</span> 項です。<span class=\"chem\">k = 4</span> を代入すると、最初の項は <span class=\"chem\">5(4) - 2 = 18</span> となります。</p>",
      misconception: {
        // EN (option A): Counting from <span class="chem">k = 4</span> to <span class="chem">k = 19</span> inclusive gives <span class="chem">19 - 4 + 1 = 16</span> terms, not <span class="chem">19 - 4 = 15</span>.
        "0": "<span class=\"chem\">k = 4</span> から <span class=\"chem\">k = 19</span> まで数えると、<span class=\"chem\">19 - 4 = 15</span> ではなく <span class=\"chem\">19 - 4 + 1 = 16</span> 項になります。",
        // EN (option C): The lower limit of the sigma notation is <span class="chem">k = 4</span>, not <span class="chem">k = 1</span>. Substitute <span class="chem">k = 4</span> to get <span class="chem">5(4) - 2 = 18</span>.
        "2": "シグマ記号の下端は <span class=\"chem\">k = 1</span> ではなく <span class=\"chem\">k = 4</span> です。<span class=\"chem\">k = 4</span> を代入して <span class=\"chem\">5(4) - 2 = 18</span> になります。",
        // EN (option D): The sum starts at <span class="chem">k = 4</span>, so the terms for <span class="chem">k = 1, 2, 3</span> are not included.
        "3": "和は <span class=\"chem\">k = 4</span> から始まるため、<span class=\"chem\">k = 1, 2, 3</span> の項は含まれません。",
      },
    },

    // ── t1-1-q004 · numeric · foundation · SL · SL 1.8 · 3 marks
    "t1-1-q004": {
      // EN: <p>A convergent geometric series has first term <span class="chem">u_1 = 36</span> and common ratio <span class="chem">r = -1/3</span>. Calculate the sum to infinity <span class="chem">S_infty</span>.</p>
      stem: "<p>収束する等比級数の初項が <span class=\"chem\">u_1 = 36</span>、公比が <span class=\"chem\">r = -1/3</span> である。無限等比級数の和 <span class=\"chem\">S_infty</span> を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: Since <span class="chem">|r| = 1/3 &lt; 1</span>, the infinite series converges.
        "<span class=\"chem\">|r| = 1/3 &lt; 1</span> なので、この無限級数は収束します。",
        // EN: Use <span class="chem">S_infty = u_1 / (1 - r)</span> and watch the double negative in <span class="chem">1 - (-1/3)</span>.
        "<span class=\"chem\">S_infty = u_1 / (1 - r)</span> を使い、<span class=\"chem\">1 - (-1/3)</span> の二重のマイナスに注意しましょう。",
      ],
      // EN: <div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>36</span><span>1 − (−1/3)</span></span> = <span class="frac"><span>36</span><span>4/3</span></span> = <b>27</b></div>
      solution: "<div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>36</span><span>1 − (−1/3)</span></span> = <span class=\"frac\"><span>36</span><span>4/3</span></span> = <b>27</b></div>",
    },

    // ── t1-1-q005 · numeric · foundation · SL · SL 1.4 · 3 marks
    "t1-1-q005": {
      // EN: <p>Maya invests 4500 USD in an account paying a nominal annual interest rate of 4.8%, compounded quarterly. Calculate the value of her investment after 6 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Maya は名目年利率 4.8%、四半期ごと複利の口座に 4500 USD を預け入れた。6 年後の預金残高を計算し (Calculate)、小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: Quarterly compounding means <span class="chem">k = 4</span> compounding periods per year.
        "四半期ごと（quarterly）の複利は、1 年あたりの複利計算回数が <span class=\"chem\">k = 4</span> であることを意味します。",
        // EN: Substitute <span class="chem">PV = 4500</span>, <span class="chem">r = 4.8</span>, <span class="chem">k = 4</span>, <span class="chem">n = 6</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>.
        "<span class=\"chem\">FV = PV(1 + r/(100k))^{kn}</span> に <span class=\"chem\">PV = 4500</span>、<span class=\"chem\">r = 4.8</span>、<span class=\"chem\">k = 4</span>、<span class=\"chem\">n = 6</span> を代入します。",
      ],
      // EN: <div class="worked__math"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>Correct to 2 decimal places, this is <strong>5991.63 USD</strong>.</p>
      solution: "<div class=\"worked__math\"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>小数第 2 位まで求めると <strong>5991.63 USD</strong> になります。</p>",
    },

    // ── t1-1-q006 · multi · foundation · SL · SL 1.8 · 2 marks
    "t1-1-q006": {
      // EN: <p>For which of the following geometric sequences does the sum to infinity <span class="chem">S_infty</span> exist? Select all that apply.</p>
      stem: "<p>次の等比数列のうち、無限等比級数の和 <span class=\"chem\">S_infty</span> が存在するものをすべて選びなさい。</p>",
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
        "等比級数が有限の無限和に収束するための必要十分条件は <span class=\"chem\">|r| &lt; 1</span>（つまり <span class=\"chem\">-1 &lt; r &lt; 1</span>）です。",
        // EN: Find <span class="chem">r = u_2 / u_1</span> for each sequence and check whether <span class="chem">|r| &lt; 1</span>.
        "各数列について <span class=\"chem\">r = u_2 / u_1</span> を求め、<span class=\"chem\">|r| &lt; 1</span> かどうか確かめます。",
      ],
      // EN: <p>The first sequence has <span class="chem">r = -60/100 = -0.6</span> (<span class="chem">|r| = 0.6 &lt; 1</span>) and the third has <span class="chem">r = 3/4</span> (<span class="chem">|r| = 0.75 &lt; 1</span>). Both converge.</p>
      solution: "<p>1 つ目の数列は <span class=\"chem\">r = -60/100 = -0.6</span>（<span class=\"chem\">|r| = 0.6 &lt; 1</span>）、3 つ目は <span class=\"chem\">r = 3/4</span>（<span class=\"chem\">|r| = 0.75 &lt; 1</span>）であり、どちらも収束します。</p>",
      misconception: {
        // EN (option B): Here <span class="chem">r = 1.05</span>. Since <span class="chem">|r| &gt; 1</span>, the terms grow without bound and the sum diverges.
        "1": "ここでは <span class=\"chem\">r = 1.05</span> です。<span class=\"chem\">|r| &gt; 1</span> なので項は限りなく大きくなり、和は発散します。",
        // EN (option D): Here <span class="chem">r = -1</span>. For convergence we strictly need <span class="chem">|r| &lt; 1</span>; when <span class="chem">r = -1</span> the partial sums oscillate between 8 and 0 without approaching a single limit.
        "3": "ここでは <span class=\"chem\">r = -1</span> です。収束するには <span class=\"chem\">|r| &lt; 1</span> が必要であり、<span class=\"chem\">r = -1</span> のときは部分和が 8 と 0 の間を振動して 1 つの極限に近づきません。",
      },
    },

    // ── t1-1-q007 · numeric · exam · SL · SL 1.2 · 4 marks
    "t1-1-q007": {
      // EN: <p>Calculate the exact value of the arithmetic series <span class="chem">Σ_{k=5}^{24} (3k - 7)</span>.</p>
      stem: "<p>等差級数 <span class=\"chem\">Σ_{k=5}^{24} (3k - 7)</span> の厳密値（正確な値）を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: First count the number of terms: from <span class="chem">k = 5</span> to <span class="chem">k = 24</span> inclusive there are <span class="chem">24 - 5 + 1 = 20</span> terms.
        "まず項数を数えます：<span class=\"chem\">k = 5</span> から <span class=\"chem\">k = 24</span> までは <span class=\"chem\">24 - 5 + 1 = 20</span> 項あります。",
        // EN: Find the first term in the sum (<span class="chem">k = 5</span>) and the last term in the sum (<span class="chem">k = 24</span>), then use <span class="chem">S = (N/2)(first + last)</span>.
        "和の最初の項（<span class=\"chem\">k = 5</span>）と最後の項（<span class=\"chem\">k = 24</span>）を求め、<span class=\"chem\">S = (N/2)(first + last)</span>（初項 + 末項）を使います。",
      ],
      // EN: <div class="worked__math">Number of terms <i>N</i> = 24 − 5 + 1 = 20 <b>[A1]</b></div><div class="worked__math">First term (<i>k</i> = 5): 3(5) − 7 = 8; Last term (<i>k</i> = 24): 3(24) − 7 = 65 <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">項数 <i>N</i> = 24 − 5 + 1 = 20 <b>[A1]</b></div><div class=\"worked__math\">最初の項 (<i>k</i> = 5): 3(5) − 7 = 8; 最後の項 (<i>k</i> = 24): 3(24) − 7 = 65 <b>[A1]</b></div><div class=\"worked__math\"><i>S</i> = <span class=\"frac\"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q008 · mcq · exam · SL · SL 1.2 · 4 marks
    "t1-1-q008": {
      // EN: <p>The sum of the first <span class="chem">n</span> terms of a sequence is given by <span class="chem">S_n = 2n^2 + 5n</span> for all <span class="chem">n &gt;= 1</span>. Find an expression for the <span class="chem">n</span>-th term <span class="chem">u_n</span>.</p>
      stem: "<p>ある数列の初項から第 <span class=\"chem\">n</span> 項までの和が、すべての <span class=\"chem\">n &gt;= 1</span> に対して <span class=\"chem\">S_n = 2n^2 + 5n</span> で与えられている。第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span> の式を求めなさい (Find)。</p>",
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
        "<span class=\"chem\">u_1 = S_1</span> と <span class=\"chem\">S_2 = u_1 + u_2</span> を計算して <span class=\"chem\">u_1</span> と <span class=\"chem\">u_2</span> を求めます。",
        // EN: Alternatively, simplify <span class="chem">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span>.
        "あるいは、<span class=\"chem\">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span> を整理しても求められます。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class="worked__math"><i>S</i><sub>2</sub> = 2(4) + 10 = 18 ⇒ <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11 ⇒ <i>d</i> = 11 − 7 = 4</div><div class="worked__math"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class=\"worked__math\"><i>S</i><sub>2</sub> = 2(4) + 10 = 18 ⇒ <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11 ⇒ <i>d</i> = 11 − 7 = 4</div><div class=\"worked__math\"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>",
      misconception: {
        // EN (option B): Taking the derivative of <span class="chem">2n^2 + 5n</span> gives <span class="chem">4n + 5</span>, which does not match <span class="chem">u_1 = S_1 = 7</span>.
        "1": "<span class=\"chem\">2n^2 + 5n</span> を微分すると <span class=\"chem\">4n + 5</span> になりますが、これでは <span class=\"chem\">u_1 = S_1 = 7</span> と一致しません。",
        // EN (option C): Check the sign when expanding <span class="chem">-2(n - 1)^2 = -2n^2 + 4n - 2</span>. Writing <span class="chem">+2</span> instead gives <span class="chem">4n + 7</span>. Test <span class="chem">n = 1</span>: <span class="chem">u_1 = S_1 = 7</span>, but <span class="chem">4(1) + 7 = 11</span>.
        "2": "<span class=\"chem\">-2(n - 1)^2 = -2n^2 + 4n - 2</span> を展開するときの符号を確認しましょう。<span class=\"chem\">+2</span> と書くと <span class=\"chem\">4n + 7</span> になってしまいます。<span class=\"chem\">n = 1</span> で確かめると <span class=\"chem\">u_1 = S_1 = 7</span> ですが、<span class=\"chem\">4(1) + 7 = 11</span> です。",
        // EN (option D): Dividing <span class="chem">S_n</span> by <span class="chem">n</span> gives the average of the first <span class="chem">n</span> terms, not the <span class="chem">n</span>-th term <span class="chem">u_n</span>.
        "3": "<span class=\"chem\">S_n</span> を <span class=\"chem\">n</span> で割ると初項から第 <span class=\"chem\">n</span> 項までの平均になり、第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span> にはなりません。",
      },
    },

    // ── t1-1-q009 · numeric · exam · SL · SL 1.3 · 6 marks
    "t1-1-q009": {
      // EN: <p>The terms <span class="chem">3k + 1</span>, <span class="chem">4k - 12</span>, and <span class="chem">19 - 3k</span> are consecutive terms of a geometric sequence. Given that the infinite series formed by this sequence converges, find the value of the common ratio <span class="chem">r</span>.</p>
      stem: "<p><span class=\"chem\">3k + 1</span>、<span class=\"chem\">4k - 12</span>、<span class=\"chem\">19 - 3k</span> は等比数列の連続する 3 項である。この数列から作られる無限級数が収束するとき、公比 <span class=\"chem\">r</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: For three consecutive geometric terms, equate the common ratios: <span class="chem">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span>.
        "等比数列の連続する 3 項では公比が等しいので、<span class=\"chem\">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span> とおきます。",
        // EN: Cross-multiply to form a quadratic in <span class="chem">k</span>, find both possible values of <span class="chem">k</span>, and test which one gives <span class="chem">|r| &lt; 1</span>.
        "分母を払って <span class=\"chem\">k</span> の二次方程式を作り、2 つの <span class=\"chem\">k</span> の解を求めたあと、どちらが <span class=\"chem\">|r| &lt; 1</span> を満たすか確かめます。",
      ],
      // EN: <div class="worked__math">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>) ⇒ 16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19 <b>[M1 A1]</b></div><div class="worked__math">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0 ⇒ <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0 ⇒ (<i>k</i> − 1)(<i>k</i> − 5) = 0 <b>[M1 A1]</b></div><div class="worked__math">If <i>k</i> = 1, the terms are 4, −8, 16 so <i>r</i> = −2 (diverges since |<i>r</i>| &gt; 1). If <i>k</i> = 5, the terms are 16, 8, 4 so <b><i>r</i> = 0.5</b> (converges since |<i>r</i>| &lt; 1). <b>[R1 A1]</b></div>
      solution: "<div class=\"worked__math\">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>) ⇒ 16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19 <b>[M1 A1]</b></div><div class=\"worked__math\">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0 ⇒ <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0 ⇒ (<i>k</i> − 1)(<i>k</i> − 5) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>k</i> = 1 のとき、3 項は 4, −8, 16 となり <i>r</i> = −2（|<i>r</i>| &gt; 1 なので発散）。<i>k</i> = 5 のとき、3 項は 16, 8, 4 となり <b><i>r</i> = 0.5</b>（|<i>r</i>| &lt; 1 なので収束）。 <b>[R1 A1]</b></div>",
    },

    // ── t1-1-q010 · numeric · exam · SL · SL 1.3 · 5 marks
    "t1-1-q010": {
      // EN: <p>A geometric series has first term <span class="chem">u_1 = 5</span> and common ratio <span class="chem">r = 1.4</span>. Find the least number of terms <span class="chem">n</span> required for the sum <span class="chem">S_n</span> to exceed 1500.</p>
      stem: "<p>初項 <span class=\"chem\">u_1 = 5</span>、公比 <span class=\"chem\">r = 1.4</span> の等比級数がある。和 <span class=\"chem\">S_n</span> が 1500 を超えるために必要な最小の項数 <span class=\"chem\">n</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the sum inequality: <span class="chem">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span>.
        "和の不等式 <span class=\"chem\">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span> を立てます。",
        // EN: Rearrange to isolate <span class="chem">1.4^n &gt; 121</span>, take logarithms, and round up to the next integer.
        "式を変形して <span class=\"chem\">1.4^n &gt; 121</span> とし、対数をとって次の整数に切り上げます。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500 ⇒ 1.4<sup><i>n</i></sup> − 1 &gt; 120 ⇒ 1.4<sup><i>n</i></sup> &gt; 121 <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25 <b>[M1 A1]</b></div><p>Since <span class="chem">n</span> must be a positive integer, the least number of terms is <strong>15</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500 ⇒ 1.4<sup><i>n</i></sup> − 1 &gt; 120 ⇒ 1.4<sup><i>n</i></sup> &gt; 121 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25 <b>[M1 A1]</b></div><p><span class=\"chem\">n</span> は正の整数なので、最小の項数は <strong>15</strong> です。 <b>[A1]</b></p>",
    },

    // ── t1-1-q011 · numeric · exam · SL · SL 1.8 · 5 marks
    "t1-1-q011": {
      // EN: <p>In a convergent geometric series with positive terms, the sum to infinity is <span class="chem">S_infty = 64</span> and the sum of the first three terms is <span class="chem">S_3 = 37</span>. Find the first term <span class="chem">u_1</span>.</p>
      stem: "<p>すべての項が正である収束する等比級数において、無限和が <span class=\"chem\">S_infty = 64</span>、初項から第 3 項までの和が <span class=\"chem\">S_3 = 37</span> である。初項 <span class=\"chem\">u_1</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Divide <span class="chem">S_3 = u_1(1 - r^3)/(1 - r)</span> by <span class="chem">S_infty = u_1/(1 - r)</span> to eliminate <span class="chem">u_1</span> immediately.
        "<span class=\"chem\">S_3 = u_1(1 - r^3)/(1 - r)</span> を <span class=\"chem\">S_infty = u_1/(1 - r)</span> で割ると、<span class=\"chem\">u_1</span> をすぐに消去できます。",
        // EN: Solve <span class="chem">1 - r^3 = 37/64</span> for <span class="chem">r</span>, then use <span class="chem">u_1 = 64(1 - r)</span>.
        "<span class=\"chem\">1 - r^3 = 37/64</span> を <span class=\"chem\">r</span> について解き、<span class=\"chem\">u_1 = 64(1 - r)</span> を使います。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class="frac"><span>37</span><span>64</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>r</i><sup>3</sup> = 1 − <span class="frac"><span>37</span><span>64</span></span> = <span class="frac"><span>27</span><span>64</span></span> ⇒ <i>r</i> = <span class="frac"><span>3</span><span>4</span></span> <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class=\"frac\"><span>37</span><span>64</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i><sup>3</sup> = 1 − <span class=\"frac\"><span>37</span><span>64</span></span> = <span class=\"frac\"><span>27</span><span>64</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>3</span><span>4</span></span> <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q012 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q012": {
      // EN: <p>A delivery van is purchased new for 38 000 EUR and depreciates by 16% of its value each year. Find the number of complete years it takes for the value of the van to fall below 12 000 EUR.</p>
      stem: "<p>新車で 38 000 EUR で購入した配送バンは、毎年その価値が 16% ずつ減価償却される。バンの価値が 12 000 EUR 未満になるまでにかかる丸年数（complete years）を求めなさい (Find)。</p>",
      hints: [
        // EN: Losing 16% of its value each year means the value is multiplied by <span class="chem">r = 1 - 0.16 = 0.84</span> each year.
        "毎年 16% ずつ価値が減るということは、毎年 <span class=\"chem\">r = 1 - 0.16 = 0.84</span> 倍になるということです。",
        // EN: Solve <span class="chem">38000(0.84)^n &lt; 12000</span>. Remember that dividing by <span class="chem">ln(0.84) &lt; 0</span> reverses the inequality sign.
        "<span class=\"chem\">38000(0.84)^n &lt; 12000</span> を解きます。<span class=\"chem\">ln(0.84) &lt; 0</span> で割るときに不等号の向きが逆になる点に注意しましょう。",
      ],
      // EN: <div class="worked__math">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000 ⇒ (0.84)<sup><i>n</i></sup> &lt; <span class="frac"><span>6</span><span>19</span></span> <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61 years <b>[M1 A1]</b></div><p>It takes <strong>7</strong> complete years. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000 ⇒ (0.84)<sup><i>n</i></sup> &lt; <span class=\"frac\"><span>6</span><span>19</span></span> <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61 年 <b>[M1 A1]</b></div><p>丸 <strong>7</strong> 年かかります。 <b>[A1]</b></p>",
    },

    // ── t1-1-q013 · order · exam · SL · SL 1.8 · 4 marks
    "t1-1-q013": {
      // EN: <p>Arrange these steps in the correct logical order to solve <span class="chem">Σ_{k=1}^infty 12 r^{k-1} = 16</span> and verify convergence.</p>
      stem: "<p><span class=\"chem\">Σ_{k=1}^infty 12 r^{k-1} = 16</span> を解き、収束することを確かめる (Verify) ための手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Identify the first term <span class="chem">u_1 = 12</span> (when <span class="chem">k = 1</span>) and common ratio <span class="chem">r</span>.
        "初項 <span class=\"chem\">u_1 = 12</span>（<span class=\"chem\">k = 1</span> のとき）と公比 <span class=\"chem\">r</span> を特定する。",
        // EN: Substitute into the infinite geometric sum formula: <span class="chem">12 / (1 - r) = 16</span>.
        "無限等比級数の和の公式に代入する：<span class=\"chem\">12 / (1 - r) = 16</span>。",
        // EN: Rearrange to <span class=\"chem">1 - r = 12/16 = 3/4</span> and solve to get <span class=\"chem">r = 1/4</span>.
        "<span class=\"chem\">1 - r = 12/16 = 3/4</span> と変形し、解いて <span class=\"chem\">r = 1/4</span> を得る。",
        // EN: Verify that <span class="chem">|r| = 1/4 &lt; 1</span> so the infinite series is valid and convergent.
        "<span class=\"chem\">|r| = 1/4 &lt; 1</span> であることを確かめ、この無限級数が有効で収束することを確認する。",
      ],
      hints: [
        // EN: First extract <span class="chem">u_1</span> and <span class="chem">r</span> from the sigma notation.
        "まずシグマ記号から <span class=\"chem\">u_1</span> と <span class=\"chem\">r</span> を読み取ります。",
        // EN: After solving the equation for <span class="chem">r</span>, always verify the convergence condition <span class="chem">|r| &lt; 1</span>.
        "<span class=\"chem\">r</span> について方程式を解いたあと、必ず収束条件 <span class=\"chem\">|r| &lt; 1</span> を確認します。",
      ],
      // EN: <p>Setting <span class="chem">k = 1</span> gives <span class="chem">u_1 = 12</span>. Applying <span class="chem">S_infty = u_1/(1-r) = 16</span> yields <span class="chem">1 - r = 3/4</span> so <span class="chem">r = 1/4</span>, which satisfies <span class="chem">|r| &lt; 1</span>.</p>
      solution: "<p><span class=\"chem\">k = 1</span> とすると <span class=\"chem\">u_1 = 12</span> です。<span class=\"chem\">S_infty = u_1/(1-r) = 16</span> を適用すると <span class=\"chem\">1 - r = 3/4</span> より <span class=\"chem\">r = 1/4</span> となり、<span class=\"chem\">|r| &lt; 1</span> を満たします。</p>",
    },

    // ── t1-1-q014 · short · exam · SL · SL 1.2 · 6 marks
    "t1-1-q014": {
      // EN: <p>An arithmetic sequence has first term <span class="chem">u_1 = 9</span> and common difference <span class="chem">d = 2</span>. A geometric sequence has first term <span class="chem">v_1 = 2</span> and common ratio <span class="chem">r = 2</span>. Find the value of <span class="chem">n</span> for which the sum of the first <span class="chem">n</span> terms of the arithmetic sequence equals the 7th term of the geometric sequence.</p>
      stem: "<p>初項 <span class=\"chem\">u_1 = 9</span>、公差 <span class=\"chem\">d = 2</span> の等差数列と、初項 <span class=\"chem\">v_1 = 2</span>、公比 <span class=\"chem\">r = 2</span> の等比数列がある。等差数列の初項から第 <span class=\"chem\">n</span> 項までの和が、等比数列の第 7 項と等しくなるような <span class=\"chem\">n</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: First compute <span class="chem">v_7 = v_1 r^6</span>.
        "まず <span class=\"chem\">v_7 = v_1 r^6</span> を計算します。",
        // EN: Set <span class="chem">S_n = (n/2)(2u_1 + (n-1)d) = 128</span> and solve the resulting quadratic for <span class="chem">n &gt; 0</span>.
        "<span class=\"chem\">S_n = (n/2)(2u_1 + (n-1)d) = 128</span> とおき、得られた二次方程式を <span class=\"chem\">n &gt; 0</span> の範囲で解きます。",
      ],
      // EN: <p>Equating <span class="chem">S_n = n(n + 8)</span> to <span class="chem">v_7 = 128</span> gives <span class="chem">n^2 + 8n - 128 = 0</span>, which factorizes as <span class="chem">(n + 16)(n - 8) = 0</span>. Since <span class="chem">n</span> is a positive integer, <span class="chem">n = 8</span>.</p>
      solution: "<p><span class=\"chem\">S_n = n(n + 8)</span> を <span class=\"chem\">v_7 = 128</span> と等置すると <span class=\"chem\">n^2 + 8n - 128 = 0</span> となり、<span class=\"chem\">(n + 16)(n - 8) = 0</span> と因数分解できます。<span class=\"chem\">n</span> は正の整数なので、<span class=\"chem\">n = 8</span> です。</p>",
      // EN: <div class="worked__math"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class="frac"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class="worked__math"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>
      answer: "<div class=\"worked__math\"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class=\"worked__math\"><i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class=\"worked__math\"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>",
      markscheme: [
        // EN: M1: Uses the geometric <span class="chem">n</span>-th term formula <span class="chem">v_7 = v_1 r^6</span>.
        "M1：等比数列の第 <span class=\"chem\">n</span> 項の公式 <span class=\"chem\">v_7 = v_1 r^6</span> を用いる。",
        // EN: A1: <span class="chem">v_7 = 2 × 2^6 = 128</span>.
        "A1：<span class=\"chem\">v_7 = 2 × 2^6 = 128</span>。",
        // EN: M1: Substitutes <span class="chem">u_1 = 9</span> and <span class="chem">d = 2</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 128.
        "M1：<span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span> に <span class=\"chem\">u_1 = 9</span> と <span class=\"chem\">d = 2</span> を代入し、128 と等しいとおく。",
        // EN: A1: Simplifies to <span class="chem">n(n + 8) = 128</span>, i.e. <span class="chem">n^2 + 8n - 128 = 0</span>.
        "A1：<span class=\"chem\">n(n + 8) = 128</span>、すなわち <span class=\"chem\">n^2 + 8n - 128 = 0</span> に整理する。",
        // EN: M1: Factorizes as <span class="chem">(n + 16)(n - 8) = 0</span> or uses the quadratic formula.
        "M1：<span class=\"chem\">(n + 16)(n - 8) = 0</span> と因数分解するか、解の公式を使う。",
        // EN: A1: Selects <span class="chem">n = 8</span> (rejecting <span class="chem">n = -16</span> since <span class="chem">n</span> is a positive integer).
        "A1：<span class=\"chem\">n = 8</span> を選ぶ（<span class=\"chem\">n</span> は正の整数であるため <span class=\"chem\">n = -16</span> を除外する）。",
      ],
    },

    // ── t1-1-q015 · numeric · challenge · SL · SL 1.3 · 5 marks
    "t1-1-q015": {
      // EN: <p>The first, fourth, and tenth terms of a non-constant arithmetic sequence form the first three consecutive terms of a geometric sequence. Find the common ratio <span class="chem">r</span> of the geometric sequence.</p>
      stem: "<p>定数列ではない等差数列の第 1 項、第 4 項、第 10 項が、ある等比数列の初項から連続する 3 項になっている。この等比数列の公比 <span class=\"chem\">r</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “non-constant” means <span class="chem">d != 0</span>, which you will need when you divide. “Form a geometric sequence” gives one equation: the middle term squared equals the product of the other two.
        "解読：「定数列ではない」は <span class=\"chem\">d != 0</span> を意味し、後で割り算をするときに必要になります。「等比数列をなす」から方程式が 1 つ得られます：真ん中の項の 2 乗は、残り 2 つの項の積に等しくなります。",
        // EN: Write the three arithmetic terms in terms of <span class="chem">u_1</span> and <span class="chem">d</span>: <span class="chem">u_1</span>, <span class="chem">u_1 + 3d</span>, and <span class="chem">u_1 + 9d</span>.
        "等差数列の 3 つの項を <span class=\"chem\">u_1</span> と <span class=\"chem\">d</span> で表します：<span class=\"chem\">u_1</span>、<span class=\"chem\">u_1 + 3d</span>、<span class=\"chem\">u_1 + 9d</span>。",
        // EN: Since they form a geometric sequence, equate the ratio: <span class="chem">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span> and solve for <span class="chem">u_1</span> in terms of <span class="chem">d</span> (knowing <span class="chem">d != 0</span>).
        "これらが等比数列をなすため、公比を等置して <span class=\"chem\">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span> とし、<span class=\"chem\">d != 0</span> を使って <span class=\"chem\">u_1</span> を <span class=\"chem\">d</span> で表します。",
      ],
      // EN: <div class="worked__math">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>) <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i> ⇒ 9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i> <b>[M1]</b></div><div class="worked__math">Since <i>d</i> ≠ 0, <i>u</i><sub>1</sub> = 3<i>d</i>. Then <i>r</i> = <span class="frac"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class="frac"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b> <b>[A1 A1]</b></div>
      solution: "<div class=\"worked__math\">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i> ⇒ 9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i> <b>[M1]</b></div><div class=\"worked__math\"><i>d</i> ≠ 0 より <i>u</i><sub>1</sub> = 3<i>d</i>。よって <i>r</i> = <span class=\"frac\"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class=\"frac\"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b> <b>[A1 A1]</b></div>",
    },

    // ── t1-1-q016 · numeric · challenge · SL · SL 1.3 · 4 marks
    "t1-1-q016": {
      // EN: <p>At the <strong>start</strong> of every year, Leo deposits 2000 USD into a savings plan that pays 5% interest per annum compounded annually. Find the total value of the savings plan at the <strong>end</strong> of the 10th year. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Leo は毎年<strong>初め</strong>に、年利 5%（年 1 回複利）の積立プランに 2000 USD を預け入れる。10 年目の<strong>終わり</strong>における積立合計額を求めなさい (Find)。小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: Decode: regular deposits make a geometric series, not a single compound-interest calculation. “At the start of every year” means each deposit earns interest in the year it is made, so count how many years of interest each deposit receives.
        "解読：毎年の積立は 1 回の複利計算ではなく、等比級数になります。「毎年初め」とは、各積立がその年のうちから利息を得ることを意味するので、各積立が何年分の利息を受け取るかを数えましょう。",
        // EN: Draw a timeline! The 10th deposit (made at the start of year 10) earns interest for 1 full year, so its final value is <span class="chem">2000(1.05)^1</span>. The 1st deposit earns interest for 10 full years: <span class="chem">2000(1.05)^{10}</span>.
        "時系列の図を描きましょう。10 回目の積立（10 年目の初め）は丸 1 年分の利息がつくので <span class=\"chem\">2000(1.05)^1</span> になり、1 回目の積立は丸 10 年分の利息がついて <span class=\"chem\">2000(1.05)^{10}</span> になります。",
        // EN: Sum the 10 geometric terms with first term <span class="chem">a = 2000(1.05) = 2100</span>, ratio <span class="chem">r = 1.05</span>, and <span class="chem">n = 10</span>.
        "初項 <span class=\"chem\">a = 2000(1.05) = 2100</span>、公比 <span class=\"chem\">r = 1.05</span>、項数 <span class=\"chem\">n = 10</span> の 10 個の項からなる等比級数の和を計算します。",
      ],
      // EN: <div class="worked__math">Total = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup> <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>10</sub> = <span class="frac"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">合計 = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>S</i><sub>10</sub> = <span class=\"frac\"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q017 · short · challenge · SL · SL 1.8 · 7 marks
    "t1-1-q017": {
      // EN: <p>Consider the infinite geometric series <span class="chem">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span>.<br>(a) Find the set of values of <span class="chem">x</span> for which the series converges. <strong>[4]</strong><br>(b) Find the value of <span class="chem">x</span> in this set for which the sum to infinity is equal to <span class="chem">2</span>. <strong>[3]</strong></p>
      stem: "<p>無限等比級数 <span class=\"chem\">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span> を考える。<br>(a) この級数が収束するような <span class=\"chem\">x</span> の値の範囲を求めなさい (Find)。 <strong>[4]</strong><br>(b) この範囲内で、無限和が <span class=\"chem\">2</span> に等しくなる <span class=\"chem\">x</span> の値を求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: compare the terms for <span class="chem">n = 1</span> and <span class="chem">n = 2</span>: the first term is <span class="chem">2x - 1</span> and the common ratio is <span class="chem">x^2 - 3</span>. Part (a) is the condition <span class="chem">|r| &lt; 1</span>; in part (b) the answer must lie in the set from (a).
        "解読：<span class=\"chem\">n = 1</span> と <span class=\"chem\">n = 2</span> の項を比べると、初項は <span class=\"chem\">2x - 1</span>、公比は <span class=\"chem\">x^2 - 3</span> です。(a) は条件 <span class=\"chem\">|r| &lt; 1</span> そのものであり、(b) の答えは (a) で求めた範囲に入っていなければなりません。",
        // EN: For part (a), solve the double inequality <span class="chem">-1 &lt; x^2 - 3 &lt; 1</span> by adding 3 to all parts.
        "(a) では、連立不等式 <span class=\"chem\">-1 &lt; x^2 - 3 &lt; 1</span> の各辺に 3 を足して解きます。",
        // EN: For part (b), solve <span class="chem">(2x - 1)/(4 - x^2) = 2</span> and check which root satisfies <span class="chem">2 &lt; x^2 &lt; 4</span>.
        "(b) では、<span class=\"chem\">(2x - 1)/(4 - x^2) = 2</span> を解き、どちらの解が <span class=\"chem\">2 &lt; x^2 &lt; 4</span> を満たすか確かめます。",
      ],
      // EN: <p>Note that for <span class="chem">x = (-1 + sqrt(19))/2</span>, we have <span class="chem">2x^2 = 9 - 2x = 10 - sqrt(19)</span>, so <span class="chem">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span>, which lies strictly between 2 and 4.</p>
      solution: "<p><span class=\"chem\">x = (-1 + sqrt(19))/2</span> のとき <span class=\"chem\">2x^2 = 9 - 2x = 10 - sqrt(19)</span> となるので、<span class=\"chem\">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span> となり、確かに 2 と 4 の間にあります。</p>",
      // EN: <div class="worked__math">(a) Common ratio <i>r</i> = <i>x</i><sup>2</sup> − 3. Convergence requires |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4.</div><div class="worked__math">Thus −2 &lt; <i>x</i> &lt; −√2  or  √2 &lt; <i>x</i> &lt; 2.</div><div class="worked__math">(b) <span class="frac"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class="frac"><span>−1 + √19</span><span>2</span></span></b></div>
      answer: "<div class=\"worked__math\">(a) 公比 <i>r</i> = <i>x</i><sup>2</sup> − 3。収束するには |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4 が必要。</div><div class=\"worked__math\">よって −2 &lt; <i>x</i> &lt; −√2  または  √2 &lt; <i>x</i> &lt; 2。</div><div class=\"worked__math\">(b) <span class=\"frac\"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class=\"frac\"><span>−1 + √19</span><span>2</span></span></b></div>",
      markscheme: [
        // EN: M1: Identifies the common ratio <span class="chem">r = x^2 - 3</span> and sets <span class="chem">|x^2 - 3| &lt; 1</span>.
        "M1：公比 <span class=\"chem\">r = x^2 - 3</span> を見抜き、<span class=\"chem\">|x^2 - 3| &lt; 1</span> とおく。",
        // EN: A1: Rewrites the inequality as <span class="chem">2 &lt; x^2 &lt; 4</span>.
        "A1：不等式を <span class=\"chem\">2 &lt; x^2 &lt; 4</span> と書き直す。",
        // EN: A1: Obtains the interval <span class="chem">-2 &lt; x &lt; -sqrt(2)</span>.
        "A1：区間 <span class=\"chem\">-2 &lt; x &lt; -sqrt(2)</span> を求める。",
        // EN: A1: Obtains the interval <span class="chem">sqrt(2) &lt; x &lt; 2</span>.
        "A1：区間 <span class=\"chem\">sqrt(2) &lt; x &lt; 2</span> を求める。",
        // EN: M1: Sets <span class="chem">S_infty = (2x - 1)/(4 - x^2) = 2</span> and rearranges to <span class="chem">2x^2 + 2x - 9 = 0</span>.
        "M1：<span class=\"chem\">S_infty = (2x - 1)/(4 - x^2) = 2</span> とおき、<span class=\"chem\">2x^2 + 2x - 9 = 0</span> に整理する。",
        // EN: A1: Finds the roots <span class="chem">x = (-1 +- sqrt(19))/2</span>.
        "A1：解 <span class=\"chem\">x = (-1 +- sqrt(19))/2</span> を求める。",
        // EN: R1: Rejects <span class="chem">(-1 - sqrt(19))/2 ≈ -2.68</span> (outside the interval) and keeps <span class="chem">x = (-1 + sqrt(19))/2 ≈ 1.68</span> (inside <span class="chem">(sqrt(2), 2)</span>).
        "R1：<span class=\"chem\">(-1 - sqrt(19))/2 ≈ -2.68</span>（範囲外）を除外し、<span class=\"chem\">x = (-1 + sqrt(19))/2 ≈ 1.68</span>（<span class=\"chem\">(sqrt(2), 2)</span> の範囲内）を残す。",
      ],
    },

    // ── t1-1-q018 · numeric · exam · SL · SL 1.4 · 3 marks
    "t1-1-q018": {
      // EN: <p>Ines invests 5000 EUR in an account that pays 4% interest per annum, compounded annually. The annual inflation rate is expected to be 2.5% throughout. Using the real interest rate <span class="chem">(4 - 2.5)%</span>, find the real value of her investment after 8 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Ines は年利率 4%、年 1 回複利の口座に 5000 EUR を預け入れた。年間のインフレ率は期間中ずっと 2.5% と見込まれている。実質金利 <span class=\"chem\">(4 - 2.5)%</span> を用いて、8 年後の投資の実質価値を求め (Find)、小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: The real value removes the effect of inflation, so use the interest rate minus the inflation rate: <span class="chem">r = 4 - 2.5 = 1.5</span>.
        "実質価値はインフレの影響を取り除いた価値なので、利率からインフレ率を引いた値を使います：<span class=\"chem\">r = 4 - 2.5 = 1.5</span>。",
        // EN: Substitute <span class="chem">PV = 5000</span>, <span class="chem">r = 1.5</span>, <span class="chem">k = 1</span>, <span class="chem">n = 8</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>, or use the Finance Solver with <span class="mono">I% = 1.5</span>.
        "<span class=\"chem\">FV = PV(1 + r/(100k))^{kn}</span> に <span class=\"chem\">PV = 5000</span>、<span class=\"chem\">r = 1.5</span>、<span class=\"chem\">k = 1</span>、<span class=\"chem\">n = 8</span> を代入するか、Finance Solver で <span class=\"mono\">I% = 1.5</span> とします。",
      ],
      // EN: <div class="worked__math">Real rate = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class="worked__math">Real value = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>Correct to 2 decimal places, the real value is <strong>5632.46 EUR</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\">実質金利 = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class=\"worked__math\">実質価値 = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>小数第 2 位まで求めると、実質価値は <strong>5632.46 EUR</strong> です。<b>[A1]</b></p>",
    },
  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't1-1.q', {
  questions: {

    // ── t1-1-q019 · numeric · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q019": {
      // EN: <p>The number <span class="chem">(3.6 × 10^4) × (5.0 × 10^{-9})</span> can be written in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>数 <span class=\"chem\">(3.6 × 10^4) × (5.0 × 10^{-9})</span> は <span class=\"chem\">a × 10^k</span>（<span class=\"chem\">1 &lt;= a &lt; 10</span>、<span class=\"chem\">k</span> は整数）の形で表せる。<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Multiply the leading numbers and add the powers of 10 separately: <span class="chem">(3.6 × 5.0) × 10^{4 + (-9)}</span>.
        "先頭の数どうしを掛け、10 の指数どうしを別々に足します：<span class=\"chem\">(3.6 × 5.0) × 10^{4 + (-9)}</span>。",
        // EN: The product of the leading numbers is greater than 10, so move one factor of 10 into the power.
        "先頭の数どうしの積が 10 より大きいので、10 を 1 つ指数の側へ移します。",
      ],
      // EN: <div class="worked__math">(3.6 × 5.0) × 10<sup>4 − 9</sup> = 18 × 10<sup>−5</sup> <b>[M1]</b></div><div class="worked__math">18 × 10<sup>−5</sup> = 1.8 × 10<sup>1</sup> × 10<sup>−5</sup> = 1.8 × 10<sup>−4</sup>, so <b><i>k</i> = −4</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(3.6 × 5.0) × 10<sup>4 − 9</sup> = 18 × 10<sup>−5</sup>   <b>[M1]</b></div><div class=\"worked__math\">18 × 10<sup>−5</sup> = 1.8 × 10<sup>1</sup> × 10<sup>−5</sup> = 1.8 × 10<sup>−4</sup>、よって <b><i>k</i> = −4</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q020 · numeric · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q020": {
      // EN: <p>One light year is <span class="chem">9.461 × 10^{15}</span> metres. A star is 4.24 light years from the Sun. Calculate this distance in metres. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer, with <span class="chem">a</span> correct to 3 significant figures.</p>
      stem: "<p>1 光年は <span class=\"chem\">9.461 × 10^{15}</span> メートルである。ある恒星は太陽から 4.24 光年の距離にある。この距離をメートルで計算しなさい (Calculate)。答えは <span class=\"chem\">a × 10^k</span>（<span class=\"chem\">1 &lt;= a &lt; 10</span>、<span class=\"chem\">k</span> は整数）の形で、<span class=\"chem\">a</span> を有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Multiply: distance = <span class="chem">4.24 × 9.461 × 10^{15}</span>. On the GDC, enter the power of 10 with the <span class="mono">EE</span> (or <span class="mono">×10ˣ</span>) key.
        "掛け算をします：距離 = <span class=\"chem\">4.24 × 9.461 × 10^{15}</span>。GDC では、10 の累乗を <span class=\"mono\">EE</span>（または <span class=\"mono\">×10ˣ</span>）キーで入力します。",
        // EN: Round the leading number to 3 significant figures and check that it lies between 1 and 10.
        "先頭の数を有効数字 3 桁に丸め、それが 1 以上 10 未満であることを確かめます。",
      ],
      // EN: <div class="worked__math">4.24 × 9.461 × 10<sup>15</sup> = 40.114… × 10<sup>15</sup> <b>[M1]</b></div><div class="worked__math">= 4.0114… × 10<sup>16</sup> ≈ <b>4.01 × 10<sup>16</sup> m</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">4.24 × 9.461 × 10<sup>15</sup> = 40.114… × 10<sup>15</sup>   <b>[M1]</b></div><div class=\"worked__math\">= 4.0114… × 10<sup>16</sup> ≈ <b>4.01 × 10<sup>16</sup> m</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q021 · numeric · foundation · SL · SL 1.3 · 3 marks
    "t1-1-q021": {
      // EN: <p>In a geometric sequence, <span class="chem">u_2 = 6</span> and <span class="chem">u_5 = 162</span>. Find <span class="chem">u_7</span>.</p>
      stem: "<p>ある等比数列において、<span class=\"chem\">u_2 = 6</span>、<span class=\"chem\">u_5 = 162</span> である。<span class=\"chem\">u_7</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: From <span class="chem">u_2</span> to <span class="chem">u_5</span> you multiply by <span class="chem">r</span> three times, so <span class="chem">r^3 = 162/6</span>.
        "<span class=\"chem\">u_2</span> から <span class=\"chem\">u_5</span> までは <span class=\"chem\">r</span> を 3 回掛けるので、<span class=\"chem\">r^3 = 162/6</span> です。",
        // EN: Once you have <span class="chem">r</span>, go from <span class="chem">u_2</span> to <span class="chem">u_7</span>: that is five more multiplications by <span class="chem">r</span>.
        "<span class=\"chem\">r</span> が求まったら、<span class=\"chem\">u_2</span> から <span class=\"chem\">u_7</span> へ進みます：さらに <span class=\"chem\">r</span> を 5 回掛けることになります。",
      ],
      // EN: <div class="worked__math"><i>r</i><sup>3</sup> = <span class="frac"><span>162</span><span>6</span></span> = 27 <b>[M1]</b></div><div class="worked__math"><i>r</i> = 3 <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>7</sub> = <i>u</i><sub>2</sub><i>r</i><sup>5</sup> = 6 × 243 = <b>1458</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>r</i><sup>3</sup> = <span class=\"frac\"><span>162</span><span>6</span></span> = 27   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>7</sub> = <i>u</i><sub>2</sub><i>r</i><sup>5</sup> = 6 × 243 = <b>1458</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q022 · numeric · foundation · SL · SL 1.4 · 3 marks
    "t1-1-q022": {
      // EN: <p>A laptop is bought for 1850 GBP. Its value decreases by 22% each year. Calculate its value after 4 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>ノートパソコンを 1850 GBP で購入した。その価値は毎年 22% ずつ減少する。4 年後の価値を計算しなさい (Calculate)。小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: Losing 22% each year means the value is multiplied by <span class="chem">1 - 0.22 = 0.78</span> each year.
        "毎年 22% 減るということは、価値が毎年 <span class=\"chem\">1 - 0.22 = 0.78</span> 倍になるということです。",
        // EN: Value after 4 years <span class="chem">= 1850 × 0.78^4</span>. On the Finance Solver: <span class="mono">N = 4, I% = −22, PV = −1850, PMT = 0, P/Y = C/Y = 1</span>, solve for FV.
        "4 年後の価値 <span class=\"chem\">= 1850 × 0.78^4</span>。Finance Solver では <span class=\"mono\">N = 4, I% = −22, PV = −1850, PMT = 0, P/Y = C/Y = 1</span> と入力し、FV を求めます。",
      ],
      // EN: <div class="worked__math">Multiplier = 1 − 0.22 = 0.78 <b>[M1]</b></div><div class="worked__math"><i>V</i> = 1850 × 0.78<sup>4</sup> <b>[M1]</b></div><div class="worked__math">= 684.778… ≈ <b>684.78 GBP</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">倍率 = 1 − 0.22 = 0.78   <b>[M1]</b></div><div class=\"worked__math\"><i>V</i> = 1850 × 0.78<sup>4</sup>   <b>[M1]</b></div><div class=\"worked__math\">= 684.778… ≈ <b>684.78 GBP</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q023 · numeric · exam · SL · SL 1.2 · 5 marks
    "t1-1-q023": {
      // EN: <p>Given that <span class="chem">Σ_{r=1}^{n} (4r + 3) = 1375</span>, find the value of <span class="chem">n</span>.</p>
      stem: "<p><span class=\"chem\">Σ_{r=1}^{n} (4r + 3) = 1375</span> であるとき、<span class=\"chem\">n</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write out the first two terms (<span class="chem">r = 1, 2</span>): the sum is arithmetic with first term 7 and common difference 4.
        "最初の 2 項（<span class=\"chem\">r = 1, 2</span>）を書き出します：この和は初項 7、公差 4 の等差級数です。",
        // EN: Use <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span>, simplify to a quadratic in <span class="chem">n</span> and factorize.
        "<span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span> を使い、<span class=\"chem\">n</span> の二次方程式に整理して因数分解します。",
        // EN: You should reach <span class="chem">2n^2 + 5n - 1375 = 0</span>. Remember that <span class="chem">n</span> is a positive integer.
        "<span class=\"chem\">2n^2 + 5n - 1375 = 0</span> が得られるはずです。<span class=\"chem\">n</span> は正の整数であることに注意しましょう。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = 7, <i>d</i> = 4 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(14 + 4(<i>n</i> − 1)) = 2<i>n</i><sup>2</sup> + 5<i>n</i> <b>[M1 A1]</b></div><div class="worked__math">2<i>n</i><sup>2</sup> + 5<i>n</i> − 1375 = 0 ⇒ (2<i>n</i> + 55)(<i>n</i> − 25) = 0 <b>[M1]</b></div><div class="worked__math">Since <i>n</i> is a positive integer, <b><i>n</i> = 25</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = 7, <i>d</i> = 4   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(14 + 4(<i>n</i> − 1)) = 2<i>n</i><sup>2</sup> + 5<i>n</i>   <b>[M1 A1]</b></div><div class=\"worked__math\">2<i>n</i><sup>2</sup> + 5<i>n</i> − 1375 = 0  ⇒  (2<i>n</i> + 55)(<i>n</i> − 25) = 0   <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> は正の整数なので、<b><i>n</i> = 25</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q024 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q024": {
      // EN: <p>A theatre has 30 rows of seats. The front row has 18 seats, and each row has 3 more seats than the row in front of it.</p><p>(a) Write down the number of seats in the second row. <strong>[1]</strong><br>(b) Find the number of seats in the back row. <strong>[2]</strong><br>(c) Find the total number of seats in the theatre. <strong>[2]</strong><br>(d) For a small concert, only the first <span class="chem">n</span> rows (starting from the front) are opened. Find the least value of <span class="chem">n</span> for which at least 1000 seats are available. <strong>[3]</strong></p>
      stem: "<p>ある劇場には座席が 30 列ある。最前列には 18 席あり、各列は 1 つ前の列より 3 席多い。</p><p>(a) 2 列目の座席数を書きなさい (Write down)。 <strong>[1]</strong><br>(b) 最後列の座席数を求めなさい (Find)。 <strong>[2]</strong><br>(c) 劇場の座席の総数を求めなさい (Find)。 <strong>[2]</strong><br>(d) 小規模なコンサートでは、（最前列から数えて）最初の <span class=\"chem\">n</span> 列だけを開放する。利用できる座席が 1000 席以上となる <span class=\"chem\">n</span> の最小値を求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: the numbers of seats in the rows form an arithmetic sequence with <span class="chem">u_1 = 18</span> and <span class="chem">d = 3</span>. Parts (b) and (c) use <span class="chem">u_n</span> and <span class="chem">S_n</span>; part (d) asks for the least <span class="chem">n</span> with <span class="chem">S_n &gt;= 1000</span>.
        "解読：各列の座席数は <span class=\"chem\">u_1 = 18</span>、<span class=\"chem\">d = 3</span> の等差数列をなします。(b) と (c) では <span class=\"chem\">u_n</span> と <span class=\"chem\">S_n</span> を使い、(d) では <span class=\"chem\">S_n &gt;= 1000</span> を満たす最小の <span class=\"chem\">n</span> を求めます。",
        // EN: For (d), write <span class="chem">S_n = (n/2)(36 + 3(n - 1))</span> and use the GDC: graph it against <span class="chem">y = 1000</span>, or look down a table of values.
        "(d) では <span class=\"chem\">S_n = (n/2)(36 + 3(n - 1))</span> と書き、GDC を使います：<span class=\"chem\">y = 1000</span> と一緒にグラフを描くか、数表を順に見ていきます。",
        // EN: The root of <span class="chem">S_n = 1000</span> is not a whole number. Round up, because <span class="chem">n</span> is a number of rows.
        "<span class=\"chem\">S_n = 1000</span> の解は整数ではありません。<span class=\"chem\">n</span> は列の数なので、切り上げます。",
      ],
      // EN: <p>The decoding step: "each row has 3 more seats" means an arithmetic sequence. Then (b) is a term, (c) is a sum, and (d) is an inequality in <span class="chem">n</span>. The equation <span class="chem">3n^2 + 33n - 2000 = 0</span> has positive root <span class="chem">n ≈ 20.9</span>, so 20 rows give only 930 seats and 21 rows give 1008. The least value is <span class="chem">n = 21</span>.</p>
      solution: "<p>解読のステップ：「各列は 3 席多い」は等差数列を意味します。すると (b) は項、(c) は和、(d) は <span class=\"chem\">n</span> についての不等式です。方程式 <span class=\"chem\">3n^2 + 33n - 2000 = 0</span> の正の解は <span class=\"chem\">n ≈ 20.9</span> なので、20 列では 930 席しかなく、21 列では 1008 席になります。最小値は <span class=\"chem\">n = 21</span> です。</p>",
      // EN: <div class="worked__math">(a) 18 + 3 = <b>21</b></div><div class="worked__math">(b) <i>u</i><sub>30</sub> = 18 + 29 × 3 = <b>105</b></div><div class="worked__math">(c) <i>S</i><sub>30</sub> = <span class="frac"><span>30</span><span>2</span></span>(18 + 105) = <b>1845</b></div><div class="worked__math">(d) <span class="frac"><span><i>n</i></span><span>2</span></span>(36 + 3(<i>n</i> − 1)) ≥ 1000. GDC: <i>S</i><sub>20</sub> = 930, <i>S</i><sub>21</sub> = 1008 (or the root <i>n</i> ≈ 20.9), so <b><i>n</i> = 21</b></div>
      answer: "<div class=\"worked__math\">(a) 18 + 3 = <b>21</b></div><div class=\"worked__math\">(b) <i>u</i><sub>30</sub> = 18 + 29 × 3 = <b>105</b></div><div class=\"worked__math\">(c) <i>S</i><sub>30</sub> = <span class=\"frac\"><span>30</span><span>2</span></span>(18 + 105) = <b>1845</b></div><div class=\"worked__math\">(d) <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(36 + 3(<i>n</i> − 1)) ≥ 1000。GDC：<i>S</i><sub>20</sub> = 930、<i>S</i><sub>21</sub> = 1008（または解 <i>n</i> ≈ 20.9）、よって <b><i>n</i> = 21</b></div>",
      markscheme: [
        // EN: A1: (a) 21 seats.
        "A1：(a) 21 席。",
        // EN: M1: (b) Uses <span class="chem">u_{30} = u_1 + 29d</span> with <span class="chem">u_1 = 18</span>, <span class="chem">d = 3</span>.
        "M1：(b) <span class=\"chem\">u_1 = 18</span>、<span class=\"chem\">d = 3</span> として <span class=\"chem\">u_{30} = u_1 + 29d</span> を用いる。",
        // EN: A1: (b) 105 seats.
        "A1：(b) 105 席。",
        // EN: M1: (c) Uses <span class="chem">S_{30} = (30/2)(18 + 105)</span> or <span class="chem">(30/2)(36 + 29 × 3)</span>.
        "M1：(c) <span class=\"chem\">S_{30} = (30/2)(18 + 105)</span> または <span class=\"chem\">(30/2)(36 + 29 × 3)</span> を用いる。",
        // EN: A1: (c) 1845 seats.
        "A1：(c) 1845 席。",
        // EN: M1: (d) Sets up <span class="chem">(n/2)(36 + 3(n - 1)) &gt;= 1000</span> (an equation is acceptable).
        "M1：(d) <span class=\"chem\">(n/2)(36 + 3(n - 1)) &gt;= 1000</span> を立てる（方程式でもよい）。",
        // EN: A1: (d) Uses the GDC: root <span class="chem">n ≈ 20.9</span>, or the table values <span class="chem">S_{20} = 930</span> and <span class="chem">S_{21} = 1008</span>.
        "A1：(d) GDC を用いる：解 <span class=\"chem\">n ≈ 20.9</span>、または数表の値 <span class=\"chem\">S_{20} = 930</span> と <span class=\"chem\">S_{21} = 1008</span>。",
        // EN: A1: (d) <span class="chem">n = 21</span>.
        "A1：(d) <span class=\"chem\">n = 21</span>。",
      ],
    },

    // ── t1-1-q025 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q025": {
      // EN: <p>The fifth term of an arithmetic sequence is 23 and the sum of the first 12 terms is 348.</p><p>(a) Show that <span class="chem">2u_1 + 11d = 58</span>. <strong>[2]</strong><br>(b) Find the value of <span class="chem">u_1</span> and the value of <span class="chem">d</span>. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which <span class="chem">u_n &gt; 500</span>. <strong>[3]</strong></p>
      stem: "<p>ある等差数列の第 5 項は 23 であり、初項から第 12 項までの和は 348 である。</p><p>(a) <span class=\"chem\">2u_1 + 11d = 58</span> であることを示しなさい (Show that)。 <strong>[2]</strong><br>(b) <span class=\"chem\">u_1</span> の値と <span class=\"chem\">d</span> の値を求めなさい (Find)。 <strong>[3]</strong><br>(c) <span class=\"chem\">u_n &gt; 500</span> となる <span class=\"chem\">n</span> の最小値を求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: For (a), the only formula involving a sum of 12 terms is <span class="chem">S_{12} = (12/2)(2u_1 + 11d)</span>.
        "(a) では、12 項の和を含む公式は <span class=\"chem\">S_{12} = (12/2)(2u_1 + 11d)</span> だけです。",
        // EN: For (b), "the fifth term is 23" gives a second equation, <span class="chem">u_1 + 4d = 23</span>. Solve the pair simultaneously.
        "(b) では、「第 5 項は 23」から 2 つ目の方程式 <span class=\"chem\">u_1 + 4d = 23</span> が得られます。この 2 式を連立して解きます。",
        // EN: For (c), solve <span class="chem">u_n = 500</span>, then choose the next integer above the root.
        "(c) では、<span class=\"chem\">u_n = 500</span> を解き、その解より大きい次の整数を選びます。",
      ],
      // EN: <p>Two facts give two equations: <span class="chem">u_1 + 4d = 23</span> and <span class="chem">2u_1 + 11d = 58</span>. Doubling the first and subtracting gives <span class="chem">3d = 12</span>, so <span class="chem">d = 4</span> and <span class="chem">u_1 = 7</span>. Then <span class="chem">u_n = 4n + 3</span>, and <span class="chem">4n + 3 &gt; 500</span> gives <span class="chem">n &gt; 124.25</span>, so the least value is <span class="chem">n = 125</span>. Check: <span class="chem">u_{124} = 499</span> and <span class="chem">u_{125} = 503</span>.</p>
      solution: "<p>2 つの条件から 2 つの方程式が得られます：<span class=\"chem\">u_1 + 4d = 23</span> と <span class=\"chem\">2u_1 + 11d = 58</span>。1 つ目を 2 倍して引くと <span class=\"chem\">3d = 12</span> となるので、<span class=\"chem\">d = 4</span>、<span class=\"chem\">u_1 = 7</span> です。すると <span class=\"chem\">u_n = 4n + 3</span> であり、<span class=\"chem\">4n + 3 &gt; 500</span> から <span class=\"chem\">n &gt; 124.25</span> となるので、最小値は <span class=\"chem\">n = 125</span> です。確認：<span class=\"chem\">u_{124} = 499</span>、<span class=\"chem\">u_{125} = 503</span>。</p>",
      // EN: <div class="worked__math">(a) <i>S</i><sub>12</sub> = <span class="frac"><span>12</span><span>2</span></span>(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348 ⇒ 6(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348 ⇒ 2<i>u</i><sub>1</sub> + 11<i>d</i> = 58</div><div class="worked__math">(b) <i>u</i><sub>1</sub> + 4<i>d</i> = 23, so 2<i>u</i><sub>1</sub> + 8<i>d</i> = 46. Subtracting: 3<i>d</i> = 12, so <b><i>d</i> = 4</b> and <b><i>u</i><sub>1</sub> = 7</b></div><div class="worked__math">(c) 7 + 4(<i>n</i> − 1) &gt; 500 ⇒ 4<i>n</i> + 3 &gt; 500 ⇒ <i>n</i> &gt; 124.25, so <b><i>n</i> = 125</b></div>
      answer: "<div class=\"worked__math\">(a) <i>S</i><sub>12</sub> = <span class=\"frac\"><span>12</span><span>2</span></span>(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348  ⇒  6(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348  ⇒  2<i>u</i><sub>1</sub> + 11<i>d</i> = 58</div><div class=\"worked__math\">(b) <i>u</i><sub>1</sub> + 4<i>d</i> = 23 より 2<i>u</i><sub>1</sub> + 8<i>d</i> = 46。引くと 3<i>d</i> = 12、よって <b><i>d</i> = 4</b>、<b><i>u</i><sub>1</sub> = 7</b></div><div class=\"worked__math\">(c) 7 + 4(<i>n</i> − 1) &gt; 500  ⇒  4<i>n</i> + 3 &gt; 500  ⇒  <i>n</i> &gt; 124.25、よって <b><i>n</i> = 125</b></div>",
      markscheme: [
        // EN: M1: (a) Substitutes <span class="chem">n = 12</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 348.
        "M1：(a) <span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span> に <span class=\"chem\">n = 12</span> を代入し、348 と等しいとおく。",
        // EN: A1: (a) Obtains <span class="chem">6(2u_1 + 11d) = 348</span>, which leads to the given result <span class="chem">2u_1 + 11d = 58</span> (the given line itself earns no mark).
        "A1：(a) <span class=\"chem\">6(2u_1 + 11d) = 348</span> を得て、与えられた結果 <span class=\"chem\">2u_1 + 11d = 58</span> を導く（与えられた式そのものには点を与えない）。",
        // EN: M1: (b) Writes <span class="chem">u_1 + 4d = 23</span> and solves it simultaneously with <span class="chem">2u_1 + 11d = 58</span>.
        "M1：(b) <span class=\"chem\">u_1 + 4d = 23</span> を書き、<span class=\"chem\">2u_1 + 11d = 58</span> と連立して解く。",
        // EN: A1: (b) <span class="chem">d = 4</span>.
        "A1：(b) <span class=\"chem\">d = 4</span>。",
        // EN: A1: (b) <span class="chem">u_1 = 7</span>.
        "A1：(b) <span class=\"chem\">u_1 = 7</span>。",
        // EN: M1: (c) Sets up <span class="chem">7 + 4(n - 1) &gt; 500</span> (an equation is acceptable).
        "M1：(c) <span class=\"chem\">7 + 4(n - 1) &gt; 500</span> を立てる（方程式でもよい）。",
        // EN: A1: (c) <span class="chem">n &gt; 124.25</span> (or <span class="chem">n = 124.25</span>).
        "A1：(c) <span class=\"chem\">n &gt; 124.25</span>（または <span class=\"chem\">n = 124.25</span>）。",
        // EN: A1: (c) <span class="chem">n = 125</span>.
        "A1：(c) <span class=\"chem\">n = 125</span>。",
      ],
    },

    // ── t1-1-q026 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q026": {
      // EN: <p>A science fair had 1210 visitors in year 1, 1295 in year 2, 1388 in year 3, 1462 in year 4 and 1550 in year 5.</p><p>(a) Explain why the numbers of visitors do not form an arithmetic sequence. <strong>[1]</strong><br>(b) Show that the mean of the four year-on-year increases is 85. <strong>[2]</strong><br>The organisers model the number of visitors in year <span class="chem">n</span> by the arithmetic sequence <span class="chem">u_n = 1210 + 85(n - 1)</span>.<br>(c) Use the model to predict the number of visitors in year 10. <strong>[2]</strong><br>(d) Use the model to predict the total number of visitors in the first 10 years. <strong>[2]</strong><br>(e) Explain why the model may not be reliable for predicting the number of visitors in year 30. <strong>[1]</strong></p>
      stem: "<p>ある科学フェアの来場者数は、1 年目 1210 人、2 年目 1295 人、3 年目 1388 人、4 年目 1462 人、5 年目 1550 人であった。</p><p>(a) 来場者数が等差数列をなさない理由を説明しなさい (Explain)。 <strong>[1]</strong><br>(b) 前年からの 4 つの増加数の平均が 85 であることを示しなさい (Show that)。 <strong>[2]</strong><br>主催者は、<span class=\"chem\">n</span> 年目の来場者数を等差数列 <span class=\"chem\">u_n = 1210 + 85(n - 1)</span> でモデル化する。<br>(c) このモデルを用いて、10 年目の来場者数を予測しなさい。 <strong>[2]</strong><br>(d) このモデルを用いて、最初の 10 年間の来場者の総数を予測しなさい。 <strong>[2]</strong><br>(e) このモデルが 30 年目の来場者数の予測には信頼できない可能性がある理由を説明しなさい (Explain)。 <strong>[1]</strong></p>",
      hints: [
        // EN: Decode: real data are only roughly arithmetic. The question asks you to test for a common difference, build an arithmetic model from the average difference, and then use <span class="chem">u_n</span> and <span class="chem">S_n</span> of the model.
        "解読：実際のデータはおおよそ等差であるにすぎません。この問題では、公差があるかを調べ、平均の差から等差数列のモデルをつくり、そのモデルの <span class=\"chem\">u_n</span> と <span class=\"chem\">S_n</span> を使うことが求められています。",
        // EN: For (a), work out the four differences between consecutive years.
        "(a) では、隣り合う年どうしの 4 つの差を計算します。",
        // EN: For (d), the model is arithmetic, so <span class="chem">S_{10} = (10/2)(u_1 + u_{10})</span> uses your answer to (c).
        "(d) では、モデルは等差数列なので、<span class=\"chem\">S_{10} = (10/2)(u_1 + u_{10})</span> に (c) の答えを使います。",
      ],
      // EN: <p>Decoding: the context is a model that is "not perfectly arithmetic". The differences 85, 93, 74, 88 are not constant, so the data are not exactly arithmetic, but they are close to a constant 85 on average. Using <span class="chem">d = 85</span> gives <span class="chem">u_{10} = 1975</span> and <span class="chem">S_{10} = 5(1210 + 1975) = 15925</span>. Predictions far outside the data range (extrapolation) are less reliable.</p>
      solution: "<p>解読：この文脈は「完全には等差でない」モデルです。差 85、93、74、88 は一定ではないので、データは厳密には等差ではありませんが、平均すると一定の 85 に近くなっています。<span class=\"chem\">d = 85</span> を用いると <span class=\"chem\">u_{10} = 1975</span>、<span class=\"chem\">S_{10} = 5(1210 + 1975) = 15925</span> となります。データの範囲から大きく外れた予測（外挿）は信頼性が下がります。</p>",
      // EN: <div class="worked__math">(a) The increases are 85, 93, 74, 88: they are not constant.</div><div class="worked__math">(b) <span class="frac"><span>85 + 93 + 74 + 88</span><span>4</span></span> = <span class="frac"><span>340</span><span>4</span></span> = 85 (equivalently <span class="frac"><span>1550 − 1210</span><span>4</span></span>)</div><div class="worked__math">(c) <i>u</i><sub>10</sub> = 1210 + 9 × 85 = <b>1975</b></div><div class="worked__math">(d) <i>S</i><sub>10</sub> = <span class="frac"><span>10</span><span>2</span></span>(1210 + 1975) = <b>15 925</b></div><div class="worked__math">(e) Year 30 is far outside the data (years 1 to 5), and the real increases vary from year to year, so the error can build up.</div>
      answer: "<div class=\"worked__math\">(a) 増加数は 85、93、74、88 であり、一定ではない。</div><div class=\"worked__math\">(b) <span class=\"frac\"><span>85 + 93 + 74 + 88</span><span>4</span></span> = <span class=\"frac\"><span>340</span><span>4</span></span> = 85（同値な式として <span class=\"frac\"><span>1550 − 1210</span><span>4</span></span>）</div><div class=\"worked__math\">(c) <i>u</i><sub>10</sub> = 1210 + 9 × 85 = <b>1975</b></div><div class=\"worked__math\">(d) <i>S</i><sub>10</sub> = <span class=\"frac\"><span>10</span><span>2</span></span>(1210 + 1975) = <b>15 925</b></div><div class=\"worked__math\">(e) 30 年目はデータ（1 年目から 5 年目）の範囲から大きく外れており、実際の増加数は年ごとに変動するので、誤差が積み重なる可能性がある。</div>",
      markscheme: [
        // EN: R1: (a) States that the differences (85, 93, 74, 88) are not all equal, so there is no common difference.
        "R1：(a) 差（85、93、74、88）がすべて等しいわけではないので、公差が存在しないことを述べる。",
        // EN: M1: (b) Adds the four increases (or uses <span class="chem">1550 - 1210</span>) and divides by 4.
        "M1：(b) 4 つの増加数を足し（または <span class=\"chem\">1550 - 1210</span> を用い）、4 で割る。",
        // EN: A1: (b) Obtains the total increase <span class="chem">340</span>, so <span class="chem">340/4 = 85</span> (the given result itself earns no mark).
        "A1：(b) 増加数の合計 <span class=\"chem\">340</span> を得て、<span class=\"chem\">340/4 = 85</span> とする（与えられた結果そのものには点を与えない）。",
        // EN: M1: (c) Substitutes <span class="chem">n = 10</span>: <span class="chem">1210 + 9 × 85</span>.
        "M1：(c) <span class=\"chem\">n = 10</span> を代入する：<span class=\"chem\">1210 + 9 × 85</span>。",
        // EN: A1: (c) 1975 visitors.
        "A1：(c) 来場者 1975 人。",
        // EN: M1: (d) Uses <span class="chem">S_{10} = (10/2)(1210 + 1975)</span> or <span class="chem">(10/2)(2 × 1210 + 9 × 85)</span>.
        "M1：(d) <span class=\"chem\">S_{10} = (10/2)(1210 + 1975)</span> または <span class=\"chem\">(10/2)(2 × 1210 + 9 × 85)</span> を用いる。",
        // EN: A1: (d) 15 925 visitors.
        "A1：(d) 来場者 15 925 人。",
        // EN: R1: (e) Any valid reason, e.g. extrapolation far beyond the 5 years of data, or the real increases are not constant.
        "R1：(e) 妥当な理由であればよい。例：5 年分のデータを大きく超えた外挿である、または実際の増加数は一定ではない。",
      ],
    },

    // ── t1-1-q027 · numeric · challenge · SL · SL 1.2, 1.3 · 5 marks
    "t1-1-q027": {
      // EN: <p>Priya is offered two jobs. In Offer A, the annual salary is 42 000 EUR in the first year and rises by 1500 EUR each year after that. In Offer B, the annual salary is 38 000 EUR in the first year and rises by 5% each year after that. Find the first year in which the annual salary in Offer B is greater than the annual salary in Offer A.</p>
      stem: "<p>Priya は 2 つの仕事のオファーを受けた。オファー A は、1 年目の年収が 42 000 EUR で、その後毎年 1500 EUR ずつ上がる。オファー B は、1 年目の年収が 38 000 EUR で、その後毎年 5% ずつ上がる。オファー B の年収がオファー A の年収を初めて上回る年を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: Offer A is an arithmetic sequence and Offer B is a geometric sequence. You must find the least integer <span class="chem">n</span> for which the <span class="chem">n</span>-th term of B is bigger than the <span class="chem">n</span>-th term of A (salaries in one year, not totals).
        "解読：オファー A は等差数列、オファー B は等比数列です。B の第 <span class=\"chem\">n</span> 項が A の第 <span class=\"chem\">n</span> 項より大きくなる最小の整数 <span class=\"chem\">n</span> を求めます（比べるのは 1 年ごとの年収で、合計ではありません）。",
        // EN: Write <span class="chem">A_n = 42000 + 1500(n - 1)</span> and <span class="chem">B_n = 38000(1.05)^{n-1}</span>. Note the power is <span class="chem">n - 1</span>: there is no rise in year 1.
        "<span class=\"chem\">A_n = 42000 + 1500(n - 1)</span>、<span class=\"chem\">B_n = 38000(1.05)^{n-1}</span> と書きます。指数が <span class=\"chem\">n - 1</span> であることに注意：1 年目には昇給はありません。",
        // EN: This inequality mixes a linear and an exponential expression, so solve it with the GDC: graph both and find the intersection, or compare a table of values.
        "この不等式は一次式と指数の式が混ざっているので、GDC で解きます：両方のグラフを描いて交点を求めるか、数表を比べます。",
      ],
      // EN: <p>Decoding: "rises by 1500 each year" is arithmetic, "rises by 5% each year" is geometric, and "annual salary" means individual terms.</p><div class="worked__math"><i>A</i><sub><i>n</i></sub> = 42000 + 1500(<i>n</i> − 1) <b>[M1]</b></div><div class="worked__math"><i>B</i><sub><i>n</i></sub> = 38000(1.05)<sup><i>n</i>−1</sup> <b>[M1]</b></div><div class="worked__math">GDC table or graph of <i>B</i><sub><i>n</i></sub> − <i>A</i><sub><i>n</i></sub> <b>[M1]</b></div><div class="worked__math">Year 7: <i>A</i> = 51 000, <i>B</i> = 50 923.63; year 8: <i>A</i> = 52 500, <i>B</i> = 53 469.82 <b>[A1]</b></div><div class="worked__math">First year: <b>year 8</b> <b>[A1]</b></div>
      solution: "<p>解読：「毎年 1500 ずつ上がる」は等差、「毎年 5% ずつ上がる」は等比であり、「年収」は個々の項を意味します。</p><div class=\"worked__math\"><i>A</i><sub><i>n</i></sub> = 42000 + 1500(<i>n</i> − 1)   <b>[M1]</b></div><div class=\"worked__math\"><i>B</i><sub><i>n</i></sub> = 38000(1.05)<sup><i>n</i>−1</sup>   <b>[M1]</b></div><div class=\"worked__math\"><i>B</i><sub><i>n</i></sub> − <i>A</i><sub><i>n</i></sub> の GDC の数表またはグラフ   <b>[M1]</b></div><div class=\"worked__math\">7 年目：<i>A</i> = 51 000、<i>B</i> = 50 923.63；8 年目：<i>A</i> = 52 500、<i>B</i> = 53 469.82   <b>[A1]</b></div><div class=\"worked__math\">初めて上回る年：<b>8 年目</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q028 · numeric · challenge · SL · SL 1.2, 1.3 · 5 marks
    "t1-1-q028": {
      // EN: <p>A sports club offers two membership plans. On Plan P, the fee is 300 GBP for the first year and goes up by 25 GBP every year after that. On Plan Q, the fee is 240 GBP for the first year and goes up by 8% every year after that. Ravi intends to stay a member for <span class="chem">N</span> complete years. Find the largest value of <span class="chem">N</span> for which the total amount Ravi pays on Plan Q is less than the total amount he would pay on Plan P.</p>
      stem: "<p>あるスポーツクラブには 2 つの会員プランがある。プラン P では、1 年目の会費が 300 GBP で、その後毎年 25 GBP ずつ上がる。プラン Q では、1 年目の会費が 240 GBP で、その後毎年 8% ずつ上がる。Ravi は <span class=\"chem\">N</span> 年間（満年数）会員を続けるつもりである。Ravi がプラン Q で支払う総額が、プラン P で支払う総額より少なくなるような <span class=\"chem\">N</span> の最大値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this time "total amount paid" means you compare sums, not single fees. Plan P gives an arithmetic series, Plan Q a geometric series. You want the largest <span class="chem">N</span> with <span class="chem">S_Q(N) &lt; S_P(N)</span>.
        "解読：今回は「支払う総額」なので、1 年ごとの会費ではなく和を比べます。プラン P は等差級数、プラン Q は等比級数になります。<span class=\"chem\">S_Q(N) &lt; S_P(N)</span> を満たす最大の <span class=\"chem\">N</span> を求めます。",
        // EN: Write <span class="chem">S_P = (N/2)(600 + 25(N - 1))</span> and <span class="chem">S_Q = 240(1.08^N - 1)/0.08</span>.
        "<span class=\"chem\">S_P = (N/2)(600 + 25(N - 1))</span>、<span class=\"chem\">S_Q = 240(1.08^N - 1)/0.08</span> と書きます。",
        // EN: Use a GDC table of both sums (or graph their difference) and look for the last year in which Plan Q is still cheaper.
        "GDC で両方の和の数表をつくり（または差のグラフを描き）、プラン Q がまだ安い最後の年を探します。",
      ],
      // EN: <p>Decoding: "total amount" means sums; P is arithmetic (<span class="chem">u_1 = 300</span>, <span class="chem">d = 25</span>) and Q is geometric (<span class="chem">u_1 = 240</span>, <span class="chem">r = 1.08</span>). Q starts cheaper but grows faster.</p><div class="worked__math"><i>S</i><sub>P</sub>(<i>N</i>) = <span class="frac"><span><i>N</i></span><span>2</span></span>(600 + 25(<i>N</i> − 1)) <b>[M1]</b></div><div class="worked__math"><i>S</i><sub>Q</sub>(<i>N</i>) = <span class="frac"><span>240(1.08<sup><i>N</i></sup> − 1)</span><span>0.08</span></span> <b>[M1]</b></div><div class="worked__math">GDC table: <i>N</i> = 19: <i>S</i><sub>P</sub> = 9975, <i>S</i><sub>Q</sub> = 9947.10 <b>[M1 A1]</b></div><div class="worked__math"><i>N</i> = 20: <i>S</i><sub>P</sub> = 10 750, <i>S</i><sub>Q</sub> = 10 982.87, so the largest value is <b><i>N</i> = 19</b> <b>[A1]</b></div>
      solution: "<p>解読：「総額」は和を意味します。P は等差（<span class=\"chem\">u_1 = 300</span>、<span class=\"chem\">d = 25</span>）、Q は等比（<span class=\"chem\">u_1 = 240</span>、<span class=\"chem\">r = 1.08</span>）です。Q は最初は安いですが、より速く増えます。</p><div class=\"worked__math\"><i>S</i><sub>P</sub>(<i>N</i>) = <span class=\"frac\"><span><i>N</i></span><span>2</span></span>(600 + 25(<i>N</i> − 1))   <b>[M1]</b></div><div class=\"worked__math\"><i>S</i><sub>Q</sub>(<i>N</i>) = <span class=\"frac\"><span>240(1.08<sup><i>N</i></sup> − 1)</span><span>0.08</span></span>   <b>[M1]</b></div><div class=\"worked__math\">GDC の数表：<i>N</i> = 19：<i>S</i><sub>P</sub> = 9975、<i>S</i><sub>Q</sub> = 9947.10   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>N</i> = 20：<i>S</i><sub>P</sub> = 10 750、<i>S</i><sub>Q</sub> = 10 982.87、よって最大値は <b><i>N</i> = 19</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q029 · numeric · exam · SL · SL 1.3 · 4 marks
    "t1-1-q029": {
      // EN: <p>Find the value of <span class="chem">Σ_{k=3}^{10} 5 × 2^k</span>.</p>
      stem: "<p><span class=\"chem\">Σ_{k=3}^{10} 5 × 2^k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Substitute <span class="chem">k = 3</span> and <span class="chem">k = 4</span> to find the first term and the common ratio.
        "<span class=\"chem\">k = 3</span> と <span class=\"chem\">k = 4</span> を代入して、初項と公比を求めます。",
        // EN: There are <span class="chem">10 - 3 + 1 = 8</span> terms. Use <span class="chem">S_n = u_1(r^n - 1)/(r - 1)</span>.
        "項数は <span class=\"chem\">10 - 3 + 1 = 8</span> です。<span class=\"chem\">S_n = u_1(r^n - 1)/(r - 1)</span> を使います。",
      ],
      // EN: <div class="worked__math">First term (<i>k</i> = 3): 5 × 8 = 40; <i>r</i> = 2 <b>[A1]</b></div><div class="worked__math">Number of terms = 10 − 3 + 1 = 8 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>8</sub> = <span class="frac"><span>40(2<sup>8</sup> − 1)</span><span>2 − 1</span></span> = 40 × 255 <b>[M1]</b></div><div class="worked__math">= <b>10 200</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">初項（<i>k</i> = 3）：5 × 8 = 40；<i>r</i> = 2   <b>[A1]</b></div><div class=\"worked__math\">項数 = 10 − 3 + 1 = 8   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>8</sub> = <span class=\"frac\"><span>40(2<sup>8</sup> − 1)</span><span>2 − 1</span></span> = 40 × 255   <b>[M1]</b></div><div class=\"worked__math\">= <b>10 200</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q030 · numeric · exam · SL · SL 1.3 · 3 marks
    "t1-1-q030": {
      // EN: <p>Calculate <span class="chem">Σ_{k=1}^{20} 150(0.93)^k</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">Σ_{k=1}^{20} 150(0.93)^k</span> を計算しなさい (Calculate)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Careful: the power is <span class="chem">k</span>, not <span class="chem">k - 1</span>, so the first term (<span class="chem">k = 1</span>) is <span class="chem">150 × 0.93 = 139.5</span>.
        "注意：指数は <span class=\"chem\">k - 1</span> ではなく <span class=\"chem\">k</span> なので、初項（<span class=\"chem\">k = 1</span>）は <span class=\"chem\">150 × 0.93 = 139.5</span> です。",
        // EN: Use <span class="chem">S_{20} = 139.5(1 - 0.93^{20})/(1 - 0.93)</span>, or type the sum directly into the GDC with the <span class="mono">Σ</span> template.
        "<span class=\"chem\">S_{20} = 139.5(1 - 0.93^{20})/(1 - 0.93)</span> を使うか、GDC の <span class=\"mono\">Σ</span> テンプレートで和を直接入力します。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = 139.5, <i>r</i> = 0.93, 20 terms <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>20</sub> = <span class="frac"><span>139.5(1 − 0.93<sup>20</sup>)</span><span>0.07</span></span> <b>[M1]</b></div><div class="worked__math">= 1526.05… ≈ <b>1530</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = 139.5、<i>r</i> = 0.93、20 項   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>20</sub> = <span class=\"frac\"><span>139.5(1 − 0.93<sup>20</sup>)</span><span>0.07</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 1526.05… ≈ <b>1530</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q031 · numeric · exam · SL · SL 1.3 · 5 marks
    "t1-1-q031": {
      // EN: <p>A geometric sequence has positive terms. The third term is 7.2 and the seventh term is 1.2. Find the sum of the first 15 terms. Give your answer correct to 3 significant figures.</p>
      stem: "<p>ある等比数列の項はすべて正である。第 3 項は 7.2、第 7 項は 1.2 である。初項から第 15 項までの和を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: From <span class="chem">u_3</span> to <span class="chem">u_7</span> you multiply by <span class="chem">r</span> four times: <span class="chem">r^4 = 1.2/7.2</span>.
        "<span class=\"chem\">u_3</span> から <span class=\"chem\">u_7</span> までは <span class=\"chem\">r</span> を 4 回掛けます：<span class=\"chem\">r^4 = 1.2/7.2</span>。",
        // EN: The terms are positive, so take the positive fourth root. Keep the full GDC value of <span class="chem">r</span> stored in memory.
        "項はすべて正なので、正の 4 乗根をとります。GDC で得た <span class=\"chem\">r</span> の値は丸めずにメモリーに保存しておきましょう。",
        // EN: Find <span class="chem">u_1 = u_3 / r^2</span>, then <span class="chem">S_{15} = u_1(1 - r^{15})/(1 - r)</span>.
        "<span class=\"chem\">u_1 = u_3 / r^2</span> を求め、次に <span class=\"chem\">S_{15} = u_1(1 - r^{15})/(1 - r)</span> を求めます。",
      ],
      // EN: <div class="worked__math"><i>r</i><sup>4</sup> = <span class="frac"><span>1.2</span><span>7.2</span></span> = <span class="frac"><span>1</span><span>6</span></span> <b>[M1]</b></div><div class="worked__math"><i>r</i> = 0.638943… (positive terms) <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>7.2</span><span><i>r</i><sup>2</sup></span></span> = 17.6363… <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>15</sub> = <span class="frac"><span>17.6363…(1 − <i>r</i><sup>15</sup>)</span><span>1 − <i>r</i></span></span> <b>[M1]</b></div><div class="worked__math">= 48.787… ≈ <b>48.8</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>r</i><sup>4</sup> = <span class=\"frac\"><span>1.2</span><span>7.2</span></span> = <span class=\"frac\"><span>1</span><span>6</span></span>   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 0.638943…（項は正）   <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <span class=\"frac\"><span>7.2</span><span><i>r</i><sup>2</sup></span></span> = 17.6363…   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>15</sub> = <span class=\"frac\"><span>17.6363…(1 − <i>r</i><sup>15</sup>)</span><span>1 − <i>r</i></span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 48.787… ≈ <b>48.8</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q032 · short · challenge · SL · SL 1.3, 1.8 · 12 marks
    "t1-1-q032": {
      // EN: <p>A ball is dropped from a height of 3.2 m onto a hard floor. After each bounce, it rises to 78% of the height it fell from.</p><p>(a) Find the height the ball reaches after the third bounce. <strong>[2]</strong><br>(b) Find the number of the first bounce after which the ball rises to a height of less than 10 cm. <strong>[3]</strong><br>(c) Find the total vertical distance the ball has travelled from the moment it is dropped until it hits the floor for the 12th time. <strong>[4]</strong><br>(d) Show that, however long the ball keeps bouncing, the total vertical distance it travels is less than 26 m. <strong>[3]</strong></p>
      stem: "<p>ボールを高さ 3.2 m から硬い床に落とす。ボールは床で跳ね返るたびに、落ちてきた高さの 78% まで上がる。</p><p>(a) 3 回目に跳ね返った後にボールが達する高さを求めなさい (Find)。 <strong>[2]</strong><br>(b) 跳ね返った後の高さが初めて 10 cm 未満になるのは何回目の跳ね返りか求めなさい (Find)。 <strong>[3]</strong><br>(c) ボールを落とした瞬間から 12 回目に床に当たるまでに、ボールが移動した鉛直方向の総距離を求めなさい (Find)。 <strong>[4]</strong><br>(d) ボールがどれだけ長く跳ね続けても、移動する鉛直方向の総距離は 26 m 未満であることを示しなさい (Show that)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: the rebound heights form a geometric sequence <span class="chem">3.2 × 0.78^k</span>. Part (b) hides a unit change (10 cm = 0.1 m). In part (c), the ball travels each rebound height twice (up and down), but the first 3.2 m only once.
        "解読：跳ね返りの高さは等比数列 <span class=\"chem\">3.2 × 0.78^k</span> をなします。(b) には単位の変換（10 cm = 0.1 m）が隠れています。(c) では、ボールはそれぞれの跳ね返りの高さを 2 回（上りと下り）移動しますが、最初の 3.2 m は 1 回だけです。",
        // EN: Count carefully for (c): the 1st impact ends the first drop; between the 1st and 12th impacts there are 11 rebounds.
        "(c) では注意して数えましょう：1 回目に床に当たった時点で最初の落下が終わり、1 回目から 12 回目に当たるまでの間に跳ね返りは 11 回あります。",
        // EN: For (d), replace the finite sum of rebound heights by the sum to infinity, since <span class="chem">|0.78| &lt; 1</span>.
        "(d) では、<span class=\"chem\">|0.78| &lt; 1</span> なので、跳ね返りの高さの有限和を無限和に置き換えます。",
      ],
      // EN: <p>Decoding: "rises to 78% of the height it fell from" is a geometric sequence of heights <span class="chem">h_k = 3.2(0.78)^k</span>. The distance is not a single geometric series. It is the first drop plus two copies of the rebound series. In (b), use metres throughout. In (c), the 12th impact comes after 11 rebounds, giving <span class="chem">D = 3.2 + 2 × 10.6078… = 24.4 m</span>. In (d), the limit is <span class="chem">3.2 + 2 × 2.496/0.22 = 25.89 m</span>, which bounds every partial total.</p>
      solution: "<p>解読：「落ちてきた高さの 78% まで上がる」は高さの等比数列 <span class=\"chem\">h_k = 3.2(0.78)^k</span> です。距離は 1 つの等比級数ではなく、最初の落下に跳ね返りの級数 2 つ分を加えたものです。(b) では、終始メートルを使います。(c) では、12 回目に床に当たるのは 11 回の跳ね返りの後なので、<span class=\"chem\">D = 3.2 + 2 × 10.6078… = 24.4 m</span> となります。(d) では、極限は <span class=\"chem\">3.2 + 2 × 2.496/0.22 = 25.89 m</span> であり、これがどの途中までの総距離よりも大きい上界になります。</p>",
      // EN: <div class="worked__math">(a) 3.2 × 0.78<sup>3</sup> = 1.518… ≈ <b>1.52 m</b></div><div class="worked__math">(b) 3.2 × 0.78<sup><i>k</i></sup> &lt; 0.1 ⇒ <i>k</i> &gt; 13.95 (after bounce 13: 0.127 m; after bounce 14: 0.0987 m), so <b>bounce 14</b></div><div class="worked__math">(c) <i>D</i> = 3.2 + 2(2.496 + 2.496 × 0.78 + … ) with 11 terms = 3.2 + 2 × <span class="frac"><span>2.496(1 − 0.78<sup>11</sup>)</span><span>0.22</span></span> = 24.4155… ≈ <b>24.4 m</b></div><div class="worked__math">(d) 3.2 + 2 × <span class="frac"><span>2.496</span><span>0.22</span></span> = 25.89… &lt; 26</div>
      answer: "<div class=\"worked__math\">(a) 3.2 × 0.78<sup>3</sup> = 1.518… ≈ <b>1.52 m</b></div><div class=\"worked__math\">(b) 3.2 × 0.78<sup><i>k</i></sup> &lt; 0.1  ⇒  <i>k</i> &gt; 13.95（13 回目の跳ね返り後：0.127 m、14 回目の跳ね返り後：0.0987 m）、よって <b>14 回目の跳ね返り</b></div><div class=\"worked__math\">(c) <i>D</i> = 3.2 + 2(2.496 + 2.496 × 0.78 + … )（11 項）= 3.2 + 2 × <span class=\"frac\"><span>2.496(1 − 0.78<sup>11</sup>)</span><span>0.22</span></span> = 24.4155… ≈ <b>24.4 m</b></div><div class=\"worked__math\">(d) 3.2 + 2 × <span class=\"frac\"><span>2.496</span><span>0.22</span></span> = 25.89… &lt; 26</div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">3.2 × 0.78^3</span>.
        "M1：(a) <span class=\"chem\">3.2 × 0.78^3</span> を用いる。",
        // EN: A1: (a) 1.52 m (1.5185…).
        "A1：(a) 1.52 m（1.5185…）。",
        // EN: M1: (b) Converts 10 cm to 0.1 m and sets up <span class="chem">3.2 × 0.78^k &lt; 0.1</span>.
        "M1：(b) 10 cm を 0.1 m に換算し、<span class=\"chem\">3.2 × 0.78^k &lt; 0.1</span> を立てる。",
        // EN: A1: (b) <span class="chem">k &gt; 13.95</span>, or heights 0.127 m (bounce 13) and 0.0987 m (bounce 14).
        "A1：(b) <span class=\"chem\">k &gt; 13.95</span>、または高さ 0.127 m（13 回目の跳ね返り）と 0.0987 m（14 回目の跳ね返り）。",
        // EN: A1: (b) Bounce 14.
        "A1：(b) 14 回目の跳ね返り。",
        // EN: M1: (c) Recognizes that the distance is the first drop 3.2 m plus twice each rebound height (up and down), with 11 rebounds before the 12th impact.
        "M1：(c) 距離は最初の落下 3.2 m に各跳ね返りの高さの 2 倍（上りと下り）を加えたものであり、12 回目に床に当たるまでに跳ね返りが 11 回あることを理解している。",
        // EN: A1: (c) Geometric series of rebound heights with first term 2.496, ratio 0.78 and 11 terms.
        "A1：(c) 初項 2.496、公比 0.78、11 項の跳ね返りの高さの等比級数。",
        // EN: M1: (c) Uses <span class="chem">3.2 + 2 × 2.496(1 - 0.78^{11})/(1 - 0.78)</span>.
        "M1：(c) <span class=\"chem\">3.2 + 2 × 2.496(1 - 0.78^{11})/(1 - 0.78)</span> を用いる。",
        // EN: A1: (c) 24.4 m (24.415…).
        "A1：(c) 24.4 m（24.415…）。",
        // EN: M1: (d) Uses the sum to infinity of the rebound heights, <span class="chem">2.496/(1 - 0.78) = 11.345…</span>.
        "M1：(d) 跳ね返りの高さの無限和 <span class=\"chem\">2.496/(1 - 0.78) = 11.345…</span> を用いる。",
        // EN: A1: (d) Total distance <span class="chem">3.2 + 2 × 11.345… = 25.89…</span>.
        "A1：(d) 総距離 <span class=\"chem\">3.2 + 2 × 11.345… = 25.89…</span>。",
        // EN: R1: (d) The total distance after any number of bounces is a partial sum that increases towards 25.89… m, so it is always less than 26 m.
        "R1：(d) 何回跳ね返った後の総距離も、25.89… m に向かって増加する部分和なので、常に 26 m 未満である。",
      ],
    },

    // ── t1-1-q033 · numeric · exam · SL · SL 1.3 · 4 marks
    "t1-1-q033": {
      // EN: <p>A geometric series has first term 40 and common ratio 0.85. Find the least number of terms for which the sum of the series exceeds 250.</p>
      stem: "<p>初項 40、公比 0.85 の等比級数がある。級数の和が 250 を超えるような最小の項数を求めなさい (Find)。</p>",
      hints: [
        // EN: Set up <span class="chem">40(1 - 0.85^n)/(1 - 0.85) &gt; 250</span>.
        "<span class=\"chem\">40(1 - 0.85^n)/(1 - 0.85) &gt; 250</span> を立てます。",
        // EN: Solve with the GDC (graph or table of <span class="chem">S_n</span>), or rearrange to <span class="chem">0.85^n &lt; 0.0625</span> and use logarithms. Dividing by <span class="chem">ln 0.85 &lt; 0</span> reverses the inequality.
        "GDC（<span class=\"chem\">S_n</span> のグラフまたは数表）で解くか、<span class=\"chem\">0.85^n &lt; 0.0625</span> に変形して対数を使います。<span class=\"chem\">ln 0.85 &lt; 0</span> で割ると不等号の向きが逆になります。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>40(1 − 0.85<sup><i>n</i></sup>)</span><span>0.15</span></span> &gt; 250 <b>[M1]</b></div><div class="worked__math">0.85<sup><i>n</i></sup> &lt; 0.0625 (or table: <i>S</i><sub>17</sub> = 249.84, <i>S</i><sub>18</sub> = 252.36) <b>[A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 0.0625</span><span>ln 0.85</span></span> ≈ 17.06 <b>[M1]</b></div><div class="worked__math">Least number of terms = <b>18</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>40(1 − 0.85<sup><i>n</i></sup>)</span><span>0.15</span></span> &gt; 250   <b>[M1]</b></div><div class=\"worked__math\">0.85<sup><i>n</i></sup> &lt; 0.0625（または数表：<i>S</i><sub>17</sub> = 249.84、<i>S</i><sub>18</sub> = 252.36）   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 0.0625</span><span>ln 0.85</span></span> ≈ 17.06   <b>[M1]</b></div><div class=\"worked__math\">最小の項数 = <b>18</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q034 · numeric · challenge · SL · SL 1.3, 1.8 · 5 marks
    "t1-1-q034": {
      // EN: <p>A charity starts a fundraising campaign with a target of 7000 USD. It receives 500 USD in the first week. In each following week it receives 6% less than in the week before. The campaign runs until the target is reached. Find the week in which the target is reached.</p>
      stem: "<p>ある慈善団体が、目標額 7000 USD の募金活動を始める。1 週目に 500 USD を受け取る。その後の各週は、前の週より 6% 少ない額を受け取る。活動は目標額に達するまで続く。目標額に達するのは何週目か求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the weekly amounts form a geometric sequence with <span class="chem">r = 0.94</span>, and "target reached" is about the running total <span class="chem">S_n</span>. Check first that the target can be reached at all: since <span class="chem">r &lt; 1</span>, the total can never exceed <span class="chem">S_infty</span>.
        "解読：毎週の金額は <span class=\"chem\">r = 0.94</span> の等比数列をなし、「目標額に達する」は累計 <span class=\"chem\">S_n</span> についての条件です。まず、そもそも目標額に達することができるか確かめましょう：<span class=\"chem\">r &lt; 1</span> なので、累計は決して <span class=\"chem\">S_infty</span> を超えません。",
        // EN: <span class="chem">S_infty = 500/0.06 ≈ 8333</span>, which is more than 7000, so the target is reached eventually. Now solve <span class="chem">500(1 - 0.94^n)/0.06 &gt;= 7000</span>.
        "<span class=\"chem\">S_infty = 500/0.06 ≈ 8333</span> は 7000 より大きいので、いずれ目標額に達します。次に <span class=\"chem\">500(1 - 0.94^n)/0.06 &gt;= 7000</span> を解きます。",
        // EN: Rearrange to <span class="chem">0.94^n &lt;= 0.16</span>, or use a GDC table of <span class="chem">S_n</span>.
        "<span class=\"chem\">0.94^n &lt;= 0.16</span> に変形するか、<span class=\"chem\">S_n</span> の GDC の数表を使います。",
      ],
      // EN: <p>Decoding: a weekly amount that falls by a fixed percentage is geometric (<span class="chem">u_1 = 500</span>, <span class="chem">r = 0.94</span>), and the target refers to the total.</p><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>500</span><span>0.06</span></span> = 8333.33 &gt; 7000, so the target can be reached <b>[R1]</b></div><div class="worked__math"><span class="frac"><span>500(1 − 0.94<sup><i>n</i></sup>)</span><span>0.06</span></span> ≥ 7000 <b>[M1]</b></div><div class="worked__math">0.94<sup><i>n</i></sup> ≤ 0.16 <b>[A1]</b></div><div class="worked__math"><i>n</i> ≥ 29.6 (table: <i>S</i><sub>29</sub> = 6948.09, <i>S</i><sub>30</sub> = 7031.20) <b>[A1]</b></div><div class="worked__math">The target is reached in <b>week 30</b> <b>[A1]</b></div>
      solution: "<p>解読：毎週一定の割合で減る金額は等比数列（<span class=\"chem\">u_1 = 500</span>、<span class=\"chem\">r = 0.94</span>）であり、目標額は累計についての条件です。</p><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>500</span><span>0.06</span></span> = 8333.33 &gt; 7000、よって目標額に達することができる   <b>[R1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span>500(1 − 0.94<sup><i>n</i></sup>)</span><span>0.06</span></span> ≥ 7000   <b>[M1]</b></div><div class=\"worked__math\">0.94<sup><i>n</i></sup> ≤ 0.16   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> ≥ 29.6（数表：<i>S</i><sub>29</sub> = 6948.09、<i>S</i><sub>30</sub> = 7031.20）   <b>[A1]</b></div><div class=\"worked__math\">目標額に達するのは <b>30 週目</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q035 · short · exam · SL · SL 1.3 · 6 marks
    "t1-1-q035": {
      // EN: <p>The sum of the first <span class="chem">n</span> terms of a sequence is <span class="chem">S_n = 3^{n+1} - 3</span>, for <span class="chem">n &gt;= 1</span>.</p><p>(a) Write down the value of <span class="chem">u_1</span>. <strong>[1]</strong><br>(b) Show that <span class="chem">u_n = 2 × 3^n</span>. <strong>[3]</strong><br>(c) Hence deduce that the sequence is geometric, and write down its common ratio. <strong>[2]</strong></p>
      stem: "<p>ある数列の初項から第 <span class=\"chem\">n</span> 項までの和は <span class=\"chem\">S_n = 3^{n+1} - 3</span>（<span class=\"chem\">n &gt;= 1</span>）である。</p><p>(a) <span class=\"chem\">u_1</span> の値を書きなさい (Write down)。 <strong>[1]</strong><br>(b) <span class=\"chem\">u_n = 2 × 3^n</span> であることを示しなさい (Show that)。 <strong>[3]</strong><br>(c) これを用いて、この数列が等比数列であることを導き (Hence deduce)、その公比を書きなさい。 <strong>[2]</strong></p>",
      hints: [
        // EN: Decode: you are given the sum formula, not the term formula. The <span class="chem">n</span>-th term is what is added to go from <span class="chem">S_{n-1}</span> to <span class="chem">S_n</span>.
        "解読：与えられているのは一般項の式ではなく、和の式です。第 <span class=\"chem\">n</span> 項は、<span class=\"chem\">S_{n-1}</span> から <span class=\"chem\">S_n</span> になるときに加えられるものです。",
        // EN: Write <span class="chem">u_n = S_n - S_{n-1}</span> and replace <span class="chem">n</span> by <span class="chem">n - 1</span> carefully: <span class="chem">S_{n-1} = 3^n - 3</span>.
        "<span class=\"chem\">u_n = S_n - S_{n-1}</span> と書き、<span class=\"chem\">n</span> を <span class=\"chem\">n - 1</span> に慎重に置き換えます：<span class=\"chem\">S_{n-1} = 3^n - 3</span>。",
        // EN: To deduce "geometric", show that <span class="chem">u_{n+1}/u_n</span> is a constant.
        "「等比」であることを導くには、<span class=\"chem\">u_{n+1}/u_n</span> が定数であることを示します。",
      ],
      // EN: <p>Decoding: a formula for <span class="chem">S_n</span> is given, so the terms come from differences of sums. <span class="chem">u_n = S_n - S_{n-1} = 3^{n+1} - 3^n = 2 × 3^n</span> (this also gives <span class="chem">u_1 = 6</span>, matching <span class="chem">S_1</span>). The ratio of consecutive terms is always 3, so the sequence is geometric with <span class="chem">r = 3</span>.</p>
      solution: "<p>解読：<span class=\"chem\">S_n</span> の式が与えられているので、項は和の差から得られます。<span class=\"chem\">u_n = S_n - S_{n-1} = 3^{n+1} - 3^n = 2 × 3^n</span>（これから <span class=\"chem\">u_1 = 6</span> も得られ、<span class=\"chem\">S_1</span> と一致します）。隣り合う項の比は常に 3 なので、この数列は <span class=\"chem\">r = 3</span> の等比数列です。</p>",
      // EN: <div class="worked__math">(a) <i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 9 − 3 = <b>6</b></div><div class="worked__math">(b) <i>u</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub> = (3<sup><i>n</i>+1</sup> − 3) − (3<sup><i>n</i></sup> − 3) = 3<sup><i>n</i></sup>(3 − 1) = 2 × 3<sup><i>n</i></sup></div><div class="worked__math">(c) <span class="frac"><span><i>u</i><sub><i>n</i>+1</sub></span><span><i>u</i><sub><i>n</i></sub></span></span> = <span class="frac"><span>2 × 3<sup><i>n</i>+1</sup></span><span>2 × 3<sup><i>n</i></sup></span></span> = 3, a constant, so the sequence is geometric with <b><i>r</i> = 3</b></div>
      answer: "<div class=\"worked__math\">(a) <i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 9 − 3 = <b>6</b></div><div class=\"worked__math\">(b) <i>u</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub> = (3<sup><i>n</i>+1</sup> − 3) − (3<sup><i>n</i></sup> − 3) = 3<sup><i>n</i></sup>(3 − 1) = 2 × 3<sup><i>n</i></sup></div><div class=\"worked__math\">(c) <span class=\"frac\"><span><i>u</i><sub><i>n</i>+1</sub></span><span><i>u</i><sub><i>n</i></sub></span></span> = <span class=\"frac\"><span>2 × 3<sup><i>n</i>+1</sup></span><span>2 × 3<sup><i>n</i></sup></span></span> = 3 は定数なので、この数列は等比数列であり、<b><i>r</i> = 3</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">u_1 = 6</span>.
        "A1：(a) <span class=\"chem\">u_1 = 6</span>。",
        // EN: M1: (b) Uses <span class="chem">u_n = S_n - S_{n-1}</span>.
        "M1：(b) <span class=\"chem\">u_n = S_n - S_{n-1}</span> を用いる。",
        // EN: A1: (b) <span class="chem">(3^{n+1} - 3) - (3^n - 3) = 3^{n+1} - 3^n</span>.
        "A1：(b) <span class=\"chem\">(3^{n+1} - 3) - (3^n - 3) = 3^{n+1} - 3^n</span>。",
        // EN: A1: (b) Factorizes <span class="chem">3^n(3 - 1)</span>, leading to the given result <span class="chem">2 × 3^n</span> (the given line itself earns no mark).
        "A1：(b) <span class=\"chem\">3^n(3 - 1)</span> と因数分解し、与えられた結果 <span class=\"chem\">2 × 3^n</span> を導く（与えられた式そのものには点を与えない）。",
        // EN: R1: (c) Shows that <span class="chem">u_{n+1}/u_n = 3</span>, which does not depend on <span class="chem">n</span>, so the sequence is geometric.
        "R1：(c) <span class=\"chem\">u_{n+1}/u_n = 3</span> が <span class=\"chem\">n</span> によらないことを示し、数列が等比数列であるとする。",
        // EN: A1: (c) <span class="chem">r = 3</span>.
        "A1：(c) <span class=\"chem\">r = 3</span>。",
      ],
    },

    // ── t1-1-q036 · numeric · exam · SL · SL 1.2, 1.3 · 4 marks
    "t1-1-q036": {
      // EN: <p>Calculate <span class="chem">Σ_{k=1}^{25} (3k + 2(1.1)^k)</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">Σ_{k=1}^{25} (3k + 2(1.1)^k)</span> を計算しなさい (Calculate)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The sum splits into two sums: <span class="chem">Σ 3k</span> (arithmetic) plus <span class="chem">Σ 2(1.1)^k</span> (geometric).
        "この和は 2 つの和に分けられます：<span class=\"chem\">Σ 3k</span>（等差）と <span class=\"chem\">Σ 2(1.1)^k</span>（等比）です。",
        // EN: Arithmetic part: 25 terms from 3 to 75. Geometric part: first term <span class="chem">2.2</span>, ratio 1.1, 25 terms. Or enter the whole sum with the GDC <span class="mono">Σ</span> template.
        "等差の部分：3 から 75 までの 25 項。等比の部分：初項 <span class=\"chem\">2.2</span>、公比 1.1、25 項。または GDC の <span class=\"mono\">Σ</span> テンプレートで和全体を入力します。",
      ],
      // EN: <div class="worked__math">Σ 3<i>k</i> = <span class="frac"><span>25</span><span>2</span></span>(3 + 75) = 975 <b>[M1 A1]</b></div><div class="worked__math">Σ 2(1.1)<sup><i>k</i></sup> = <span class="frac"><span>2.2(1.1<sup>25</sup> − 1)</span><span>0.1</span></span> = 216.363… <b>[A1]</b></div><div class="worked__math">Total = 1191.36… ≈ <b>1190</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">Σ 3<i>k</i> = <span class=\"frac\"><span>25</span><span>2</span></span>(3 + 75) = 975   <b>[M1 A1]</b></div><div class=\"worked__math\">Σ 2(1.1)<sup><i>k</i></sup> = <span class=\"frac\"><span>2.2(1.1<sup>25</sup> − 1)</span><span>0.1</span></span> = 216.363…   <b>[A1]</b></div><div class=\"worked__math\">合計 = 1191.36… ≈ <b>1190</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q037 · numeric · challenge · SL · SL 1.8 · 5 marks
    "t1-1-q037": {
      // EN: <p>The number <span class="chem">x = 0.2454545…</span> has the block of digits "45" repeating for ever after the first decimal place. By writing <span class="chem">x</span> using an infinite geometric series, find the exact value of <span class="chem">x</span> as a fraction in its lowest terms.</p>
      stem: "<p>数 <span class=\"chem\">x = 0.2454545…</span> は、小数第 1 位より後で数字の並び「45」が限りなく繰り返される。<span class=\"chem\">x</span> を無限等比級数で表すことにより、<span class=\"chem\">x</span> の厳密値を既約分数で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: a recurring decimal is a sum of infinitely many pieces that shrink by the same factor. Here the non-repeating part 0.2 must be kept separate from the repeating part.
        "解読：循環小数は、同じ倍率で小さくなっていく無限個の部分の和です。ここでは、繰り返さない部分 0.2 を繰り返す部分と分けて扱う必要があります。",
        // EN: Write <span class="chem">x = 0.2 + 0.045 + 0.00045 + 0.0000045 + …</span>. After 0.2, each piece is the previous one multiplied by <span class="chem">0.01</span>.
        "<span class=\"chem\">x = 0.2 + 0.045 + 0.00045 + 0.0000045 + …</span> と書きます。0.2 の後は、各部分が前の部分に <span class=\"chem\">0.01</span> を掛けたものになっています。",
        // EN: Sum the geometric part with <span class="chem">S_infty = 0.045/(1 - 0.01)</span>, then add 0.2 and simplify.
        "等比の部分の和を <span class=\"chem\">S_infty = 0.045/(1 - 0.01)</span> で求め、0.2 を加えて簡単にします。",
      ],
      // EN: <p>Decoding: the repeating block "45" occupies two decimal places, so the ratio is <span class="chem">10^{-2}</span>. The leading 2 does not repeat, so it is not part of the series.</p><div class="worked__math"><i>x</i> = 0.2 + (0.045 + 0.00045 + …) <b>[M1]</b></div><div class="worked__math">Geometric part: <i>u</i><sub>1</sub> = 0.045, <i>r</i> = 0.01 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>0.045</span><span>0.99</span></span> <b>[M1]</b></div><div class="worked__math">= <span class="frac"><span>45</span><span>990</span></span> = <span class="frac"><span>1</span><span>22</span></span> <b>[A1]</b></div><div class="worked__math"><i>x</i> = <span class="frac"><span>1</span><span>5</span></span> + <span class="frac"><span>1</span><span>22</span></span> = <b><span class="frac"><span>27</span><span>110</span></span></b> <b>[A1]</b></div>
      solution: "<p>解読：繰り返される並び「45」は小数 2 桁分を占めるので、公比は <span class=\"chem\">10^{-2}</span> です。先頭の 2 は繰り返さないので、級数には含まれません。</p><div class=\"worked__math\"><i>x</i> = 0.2 + (0.045 + 0.00045 + …)   <b>[M1]</b></div><div class=\"worked__math\">等比の部分：<i>u</i><sub>1</sub> = 0.045、<i>r</i> = 0.01   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>0.045</span><span>0.99</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <span class=\"frac\"><span>45</span><span>990</span></span> = <span class=\"frac\"><span>1</span><span>22</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = <span class=\"frac\"><span>1</span><span>5</span></span> + <span class=\"frac\"><span>1</span><span>22</span></span> = <b><span class=\"frac\"><span>27</span><span>110</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q038 · numeric · exam · SL · SL 1.8 · 4 marks
    "t1-1-q038": {
      // EN: <p>The sum to infinity of a geometric series is three times its first term. The second term of the series is 8. Find the sum to infinity.</p>
      stem: "<p>ある等比級数の無限和は、その初項の 3 倍である。この級数の第 2 項は 8 である。無限和を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "three times its first term" is the equation <span class="chem">u_1/(1 - r) = 3u_1</span>. It gives <span class="chem">r</span> without knowing <span class="chem">u_1</span>.
        "解読：「初項の 3 倍」は方程式 <span class=\"chem\">u_1/(1 - r) = 3u_1</span> です。これから <span class=\"chem\">u_1</span> を知らなくても <span class=\"chem\">r</span> が求まります。",
        // EN: Divide both sides by <span class="chem">u_1</span> (it cannot be 0) to get <span class="chem">1 - r = 1/3</span>.
        "両辺を <span class=\"chem\">u_1</span>（0 にはなりません）で割ると、<span class=\"chem\">1 - r = 1/3</span> が得られます。",
        // EN: Then use <span class="chem">u_2 = u_1 r = 8</span> to find <span class="chem">u_1</span>.
        "次に <span class=\"chem\">u_2 = u_1 r = 8</span> を使って <span class=\"chem\">u_1</span> を求めます。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 3<i>u</i><sub>1</sub> ⇒ 1 − <i>r</i> = <span class="frac"><span>1</span><span>3</span></span> ⇒ <i>r</i> = <span class="frac"><span>2</span><span>3</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>8</span><span>2/3</span></span> = 12 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = 3 × 12 = <b>36</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 3<i>u</i><sub>1</sub>  ⇒  1 − <i>r</i> = <span class=\"frac\"><span>1</span><span>3</span></span>  ⇒  <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <span class=\"frac\"><span>8</span><span>2/3</span></span> = 12   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = 3 × 12 = <b>36</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q039 · numeric · challenge · SL · SL 1.8 · 6 marks
    "t1-1-q039": {
      // EN: <p>A convergent geometric series has sum to infinity 20. A second series is formed by squaring every term of the first series; its sum to infinity is 80. Find the exact value of the first term of the original series.</p>
      stem: "<p>収束する等比級数の無限和が 20 である。この級数のすべての項を 2 乗して 2 つ目の級数をつくると、その無限和は 80 になる。もとの級数の初項の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: squaring each term of <span class="chem">u_1, u_1 r, u_1 r^2, …</span> gives another geometric series, <span class="chem">u_1^2, u_1^2 r^2, …</span>, with first term <span class="chem">u_1^2</span> and ratio <span class="chem">r^2</span>. You get two equations in <span class="chem">u_1</span> and <span class="chem">r</span>.
        "解読：<span class=\"chem\">u_1, u_1 r, u_1 r^2, …</span> の各項を 2 乗すると、初項 <span class=\"chem\">u_1^2</span>、公比 <span class=\"chem\">r^2</span> の別の等比級数 <span class=\"chem\">u_1^2, u_1^2 r^2, …</span> になります。<span class=\"chem\">u_1</span> と <span class=\"chem\">r</span> についての方程式が 2 つ得られます。",
        // EN: The equations are <span class="chem">u_1/(1 - r) = 20</span> and <span class="chem">u_1^2/(1 - r^2) = 80</span>. Factorize <span class="chem">1 - r^2 = (1 - r)(1 + r)</span>.
        "方程式は <span class=\"chem\">u_1/(1 - r) = 20</span> と <span class=\"chem\">u_1^2/(1 - r^2) = 80</span> です。<span class=\"chem\">1 - r^2 = (1 - r)(1 + r)</span> と因数分解します。",
        // EN: Dividing the second equation by the first gives <span class="chem">u_1/(1 + r) = 4</span>. Now solve the two linear equations.
        "2 つ目の方程式を 1 つ目で割ると <span class=\"chem\">u_1/(1 + r) = 4</span> となります。あとは 2 つの一次方程式を解きます。",
      ],
      // EN: <p>Decoding: "squaring every term" gives a new geometric series with ratio <span class="chem">r^2</span>; it converges because <span class="chem">|r| &lt; 1</span>.</p><div class="worked__math">New series: first term <i>u</i><sub>1</sub><sup>2</sup>, ratio <i>r</i><sup>2</sup> <b>[M1]</b></div><div class="worked__math"><span class="frac"><span><i>u</i><sub>1</sub><sup>2</sup></span><span>1 − <i>r</i><sup>2</sup></span></span> = 80 and <span class="frac"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 20 <b>[A1]</b></div><div class="worked__math">Dividing, using 1 − <i>r</i><sup>2</sup> = (1 − <i>r</i>)(1 + <i>r</i>): <span class="frac"><span><i>u</i><sub>1</sub></span><span>1 + <i>r</i></span></span> = 4 <b>[M1]</b></div><div class="worked__math">20(1 − <i>r</i>) = 4(1 + <i>r</i>) ⇒ <i>r</i> = <span class="frac"><span>2</span><span>3</span></span> <b>[A1]</b></div><div class="worked__math">|<i>r</i>| &lt; 1, so both series do converge <b>[R1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = 20(1 − <span class="frac"><span>2</span><span>3</span></span>) = <b><span class="frac"><span>20</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<p>解読：「すべての項を 2 乗する」と公比 <span class=\"chem\">r^2</span> の新しい等比級数になり、<span class=\"chem\">|r| &lt; 1</span> なのでこれも収束します。</p><div class=\"worked__math\">新しい級数：初項 <i>u</i><sub>1</sub><sup>2</sup>、公比 <i>r</i><sup>2</sup>   <b>[M1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span><i>u</i><sub>1</sub><sup>2</sup></span><span>1 − <i>r</i><sup>2</sup></span></span> = 80 かつ <span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 20   <b>[A1]</b></div><div class=\"worked__math\">1 − <i>r</i><sup>2</sup> = (1 − <i>r</i>)(1 + <i>r</i>) を使って割ると：<span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 + <i>r</i></span></span> = 4   <b>[M1]</b></div><div class=\"worked__math\">20(1 − <i>r</i>) = 4(1 + <i>r</i>)  ⇒  <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span>   <b>[A1]</b></div><div class=\"worked__math\">|<i>r</i>| &lt; 1 なので、両方の級数は確かに収束する   <b>[R1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = 20(1 − <span class=\"frac\"><span>2</span><span>3</span></span>) = <b><span class=\"frac\"><span>20</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q040 · short · exam · SL · SL 1.3, 1.8 · 8 marks
    "t1-1-q040": {
      // EN: <p>A geometric series has first term 14.6 and second term 11.388.</p><p>(a) Write down the common ratio. <strong>[1]</strong><br>(b) Explain why the series has a sum to infinity, and find it. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which <span class="chem">S_infty - S_n &lt; 0.5</span>. <strong>[4]</strong></p>
      stem: "<p>初項 14.6、第 2 項 11.388 の等比級数がある。</p><p>(a) 公比を書きなさい (Write down)。 <strong>[1]</strong><br>(b) この級数が無限和をもつ理由を説明し (Explain)、その無限和を求めなさい。 <strong>[3]</strong><br>(c) <span class=\"chem\">S_infty - S_n &lt; 0.5</span> となる <span class=\"chem\">n</span> の最小値を求めなさい (Find)。 <strong>[4]</strong></p>",
      hints: [
        // EN: Divide the second term by the first to get <span class="chem">r</span>.
        "第 2 項を初項で割ると <span class=\"chem\">r</span> が得られます。",
        // EN: Use the unrounded value of <span class="chem">S_infty</span> in part (c). The gap <span class="chem">S_infty - S_n</span> simplifies to <span class="chem">S_infty r^n</span>: it is the sum of all the terms after the <span class="chem">n</span>-th.
        "(c) では <span class=\"chem\">S_infty</span> の丸めていない値を使います。差 <span class=\"chem\">S_infty - S_n</span> は <span class=\"chem\">S_infty r^n</span> と簡単になります：これは第 <span class=\"chem\">n</span> 項より後のすべての項の和です。",
        // EN: Solve <span class="chem">66.36… × 0.78^n &lt; 0.5</span> with logarithms or a GDC table, and round up.
        "<span class=\"chem\">66.36… × 0.78^n &lt; 0.5</span> を対数または GDC の数表で解き、切り上げます。",
      ],
      // EN: <p><span class="chem">S_infty - S_n = u_1/(1 - r) - u_1(1 - r^n)/(1 - r) = u_1 r^n/(1 - r) = S_infty r^n</span>. So we need <span class="chem">0.78^n &lt; 0.5/66.3636… ≈ 0.007534</span>, giving <span class="chem">n &gt; ln(0.007534)/ln(0.78) ≈ 19.67</span>. The least integer is <span class="chem">n = 20</span>.</p>
      solution: "<p><span class=\"chem\">S_infty - S_n = u_1/(1 - r) - u_1(1 - r^n)/(1 - r) = u_1 r^n/(1 - r) = S_infty r^n</span>。よって <span class=\"chem\">0.78^n &lt; 0.5/66.3636… ≈ 0.007534</span> が必要であり、<span class=\"chem\">n &gt; ln(0.007534)/ln(0.78) ≈ 19.67</span> となります。最小の整数は <span class=\"chem\">n = 20</span> です。</p>",
      // EN: <div class="worked__math">(a) <i>r</i> = <span class="frac"><span>11.388</span><span>14.6</span></span> = <b>0.78</b></div><div class="worked__math">(b) |<i>r</i>| = 0.78 &lt; 1, so the series converges. <i>S</i><sub>∞</sub> = <span class="frac"><span>14.6</span><span>1 − 0.78</span></span> = 66.3636… ≈ <b>66.4</b></div><div class="worked__math">(c) <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = <i>S</i><sub>∞</sub> × 0.78<sup><i>n</i></sup> &lt; 0.5 ⇒ 0.78<sup><i>n</i></sup> &lt; 0.007534… ⇒ <i>n</i> &gt; 19.67…, so <b><i>n</i> = 20</b></div>
      answer: "<div class=\"worked__math\">(a) <i>r</i> = <span class=\"frac\"><span>11.388</span><span>14.6</span></span> = <b>0.78</b></div><div class=\"worked__math\">(b) |<i>r</i>| = 0.78 &lt; 1 なので、この級数は収束する。<i>S</i><sub>∞</sub> = <span class=\"frac\"><span>14.6</span><span>1 − 0.78</span></span> = 66.3636… ≈ <b>66.4</b></div><div class=\"worked__math\">(c) <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = <i>S</i><sub>∞</sub> × 0.78<sup><i>n</i></sup> &lt; 0.5  ⇒  0.78<sup><i>n</i></sup> &lt; 0.007534…  ⇒  <i>n</i> &gt; 19.67…、よって <b><i>n</i> = 20</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">r = 0.78</span>.
        "A1：(a) <span class=\"chem\">r = 0.78</span>。",
        // EN: R1: (b) <span class="chem">|r| &lt; 1</span>, so the series converges.
        "R1：(b) <span class=\"chem\">|r| &lt; 1</span> なので、この級数は収束する。",
        // EN: M1: (b) Uses <span class="chem">S_infty = 14.6/(1 - 0.78)</span>.
        "M1：(b) <span class=\"chem\">S_infty = 14.6/(1 - 0.78)</span> を用いる。",
        // EN: A1: (b) <span class="chem">S_infty = 66.4</span> (66.3636…).
        "A1：(b) <span class=\"chem\">S_infty = 66.4</span>（66.3636…）。",
        // EN: M1: (c) Writes <span class="chem">S_infty - S_n = S_infty r^n</span>, or sets up <span class="chem">66.36… - 14.6(1 - 0.78^n)/0.22 &lt; 0.5</span>.
        "M1：(c) <span class=\"chem\">S_infty - S_n = S_infty r^n</span> と書くか、<span class=\"chem\">66.36… - 14.6(1 - 0.78^n)/0.22 &lt; 0.5</span> を立てる。",
        // EN: A1: (c) <span class="chem">0.78^n &lt; 0.5/66.36… = 0.00753…</span> (or a correct GDC graph/table).
        "A1：(c) <span class=\"chem\">0.78^n &lt; 0.5/66.36… = 0.00753…</span>（または正しい GDC のグラフ／数表）。",
        // EN: A1: (c) <span class="chem">n &gt; 19.67</span> (or <span class="chem">S_infty - S_{19} = 0.591</span> and <span class="chem">S_infty - S_{20} = 0.461</span>).
        "A1：(c) <span class=\"chem\">n &gt; 19.67</span>（または <span class=\"chem\">S_infty - S_{19} = 0.591</span> と <span class=\"chem\">S_infty - S_{20} = 0.461</span>）。",
        // EN: A1: (c) <span class="chem">n = 20</span>.
        "A1：(c) <span class=\"chem\">n = 20</span>。",
      ],
    },

    // ── t1-1-q041 · numeric · challenge · SL · SL 1.8 · 5 marks
    "t1-1-q041": {
      // EN: <p>A square has side length 10 cm. A second square is drawn by joining the midpoints of the sides of the first square. A third square is drawn by joining the midpoints of the sides of the second square, and the process continues for ever. Find the exact total of the perimeters of all the squares. Give your answer in the form <span class="chem">a + b sqrt(2)</span>, where <span class="chem">a, b</span> are integers.</p>
      stem: "<p>1 辺の長さが 10 cm の正方形がある。1 つ目の正方形の各辺の中点を結んで 2 つ目の正方形を描く。2 つ目の正方形の各辺の中点を結んで 3 つ目の正方形を描き、この操作を限りなく続ける。すべての正方形の周の長さの総和の厳密値を求めなさい (Find)。答えは <span class=\"chem\">a + b sqrt(2)</span>（<span class=\"chem\">a, b</span> は整数）の形で答えなさい。</p>",
      hints: [
        // EN: Decode: the perimeters form an infinite geometric series. The task is to find the ratio from the geometry, then use <span class="chem">S_infty</span> and simplify the surd.
        "解読：周の長さは無限等比級数をなします。図形から公比を求め、<span class=\"chem\">S_infty</span> を使って根号を含む式を簡単にするのが課題です。",
        // EN: The second square’s side joins two midpoints 5 cm from a corner, so its length is <span class="chem">sqrt(5^2 + 5^2) = 5 sqrt(2)</span>. Each side is <span class="chem">1/sqrt(2)</span> times the previous one.
        "2 つ目の正方形の辺は、角から 5 cm の位置にある 2 つの中点を結ぶので、その長さは <span class=\"chem\">sqrt(5^2 + 5^2) = 5 sqrt(2)</span> です。各辺は前の辺の <span class=\"chem\">1/sqrt(2)</span> 倍になります。",
        // EN: Sum <span class="chem">40 + 40/sqrt(2) + …</span> with <span class="chem">S_infty = 40/(1 - 1/sqrt(2))</span>, then rationalize the denominator.
        "<span class=\"chem\">40 + 40/sqrt(2) + …</span> の和を <span class=\"chem\">S_infty = 40/(1 - 1/sqrt(2))</span> で求め、分母を有理化します。",
      ],
      // EN: <p>Decoding: "continues for ever" signals a sum to infinity; the common ratio comes from Pythagoras.</p><div class="worked__math">Second side = √(5<sup>2</sup> + 5<sup>2</sup>) = 5√2, so <i>r</i> = <span class="frac"><span>5√2</span><span>10</span></span> = <span class="frac"><span>1</span><span>√2</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>40</span><span>1 − 1/√2</span></span> = <span class="frac"><span>40√2</span><span>√2 − 1</span></span> <b>[M1]</b></div><div class="worked__math">= <span class="frac"><span>40√2(√2 + 1)</span><span>(√2 − 1)(√2 + 1)</span></span> <b>[M1]</b></div><div class="worked__math">= <b>80 + 40√2 cm</b> <b>[A1]</b></div>
      solution: "<p>解読：「限りなく続ける」は無限和の合図であり、公比は三平方の定理から得られます。</p><div class=\"worked__math\">2 つ目の辺 = √(5<sup>2</sup> + 5<sup>2</sup>) = 5√2、よって <i>r</i> = <span class=\"frac\"><span>5√2</span><span>10</span></span> = <span class=\"frac\"><span>1</span><span>√2</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>40</span><span>1 − 1/√2</span></span> = <span class=\"frac\"><span>40√2</span><span>√2 − 1</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <span class=\"frac\"><span>40√2(√2 + 1)</span><span>(√2 − 1)(√2 + 1)</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <b>80 + 40√2 cm</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q042 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q042": {
      // EN: <p>Kemal invests 12 000 TRY in an account that pays a nominal annual interest rate of 3.6%, compounded monthly. Find the least number of complete months after which the value of the investment exceeds 15 000 TRY.</p>
      stem: "<p>Kemal は、名目年利率 3.6%、月複利の口座に 12 000 TRY を投資する。投資の価値が 15 000 TRY を超えるのは、最少で何か月（満月数）後か求めなさい (Find)。</p>",
      hints: [
        // EN: Monthly compounding: each month the value is multiplied by <span class="chem">1 + 3.6/1200 = 1.003</span>.
        "月複利：毎月、価値が <span class=\"chem\">1 + 3.6/1200 = 1.003</span> 倍になります。",
        // EN: Solve <span class="chem">12000(1.003)^m &gt; 15000</span>, where <span class="chem">m</span> is the number of months. Use logarithms, a GDC table, or the Finance Solver (<span class="mono">I% = 3.6, PV = −12000, FV = 15000, P/Y = C/Y = 12</span>, solve for N).
        "<span class=\"chem\">m</span> を月数として <span class=\"chem\">12000(1.003)^m &gt; 15000</span> を解きます。対数、GDC の数表、または Finance Solver（<span class=\"mono\">I% = 3.6, PV = −12000, FV = 15000, P/Y = C/Y = 12</span> として N を求める）を使います。",
        // EN: The root is not a whole number. Round up.
        "解は整数ではないので、切り上げます。",
      ],
      // EN: <div class="worked__math">12000(1 + <span class="frac"><span>3.6</span><span>1200</span></span>)<sup><i>m</i></sup> &gt; 15000 ⇒ 1.003<sup><i>m</i></sup> &gt; 1.25 <b>[M1 A1]</b></div><div class="worked__math"><i>m</i> &gt; <span class="frac"><span>ln 1.25</span><span>ln 1.003</span></span> ≈ 74.49 <b>[A1]</b></div><div class="worked__math">Least number of complete months = <b>75</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">12000(1 + <span class=\"frac\"><span>3.6</span><span>1200</span></span>)<sup><i>m</i></sup> &gt; 15000  ⇒  1.003<sup><i>m</i></sup> &gt; 1.25   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>m</i> &gt; <span class=\"frac\"><span>ln 1.25</span><span>ln 1.003</span></span> ≈ 74.49   <b>[A1]</b></div><div class=\"worked__math\">最少の満月数 = <b>75</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q043 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q043": {
      // EN: <p>An investment of 8000 CHF grows to 10 500 CHF after 6 years, with interest compounded quarterly at a fixed nominal annual rate of <span class="chem">r%</span>. Find the value of <span class="chem">r</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>8000 CHF の投資が、一定の名目年利率 <span class=\"chem\">r%</span>、四半期複利で、6 年後に 10 500 CHF に増えた。<span class=\"chem\">r</span> の値を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Quarterly compounding over 6 years: <span class="chem">k = 4</span> and <span class="chem">kn = 24</span> periods.
        "6 年間の四半期複利：<span class=\"chem\">k = 4</span>、期間の数は <span class=\"chem\">kn = 24</span> です。",
        // EN: Solve <span class="chem">8000(1 + r/400)^{24} = 10500</span> for <span class="chem">r</span>, or use the Finance Solver with <span class="mono">N = 24, PV = −8000, FV = 10500, P/Y = C/Y = 4</span> and solve for <span class="mono">I%</span>.
        "<span class=\"chem\">8000(1 + r/400)^{24} = 10500</span> を <span class=\"chem\">r</span> について解くか、Finance Solver で <span class=\"mono\">N = 24, PV = −8000, FV = 10500, P/Y = C/Y = 4</span> として <span class=\"mono\">I%</span> を求めます。",
      ],
      // EN: <div class="worked__math">8000(1 + <span class="frac"><span><i>r</i></span><span>400</span></span>)<sup>24</sup> = 10500 <b>[M1 A1]</b></div><div class="worked__math">1 + <span class="frac"><span><i>r</i></span><span>400</span></span> = 1.3125<sup>1/24</sup> = 1.011395… <b>[M1]</b></div><div class="worked__math"><i>r</i> = 4.558… ≈ <b>4.56</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">8000(1 + <span class=\"frac\"><span><i>r</i></span><span>400</span></span>)<sup>24</sup> = 10500   <b>[M1 A1]</b></div><div class=\"worked__math\">1 + <span class=\"frac\"><span><i>r</i></span><span>400</span></span> = 1.3125<sup>1/24</sup> = 1.011395…   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 4.558… ≈ <b>4.56</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q044 · numeric · exam · SL · SL 1.4 · 5 marks
    "t1-1-q044": {
      // EN: <p>Sofia has 5000 EUR to invest for 10 years. Account X pays a nominal annual rate of 4.2%, compounded monthly. Account Y pays 4.3% per year, compounded annually. Find how much more the better of the two accounts is worth after 10 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Sofia は 5000 EUR を 10 年間投資したい。口座 X は名目年利率 4.2%、月複利である。口座 Y は年利 4.3%、年複利である。10 年後、2 つの口座のうち有利な方がもう一方よりいくら多いか求めなさい (Find)。小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: Decode: the account with the higher rate is not automatically better, because the other one compounds more often. Find both final values, then subtract the smaller from the larger.
        "解読：利率が高い口座が自動的に有利になるわけではありません。もう一方の口座の方が複利の回数が多いからです。両方の最終的な価値を求め、大きい方から小さい方を引きます。",
        // EN: Account X: <span class="chem">5000(1 + 4.2/1200)^{120}</span>. Account Y: <span class="chem">5000(1.043)^{10}</span>.
        "口座 X：<span class=\"chem\">5000(1 + 4.2/1200)^{120}</span>。口座 Y：<span class=\"chem\">5000(1.043)^{10}</span>。",
        // EN: Keep full GDC values and round only the final difference.
        "GDC の値は丸めずに保ち、最後の差だけを丸めます。",
      ],
      // EN: <div class="worked__math">X: 5000(1 + <span class="frac"><span>4.2</span><span>1200</span></span>)<sup>120</sup> = 7604.229… <b>[M1 A1]</b></div><div class="worked__math">Y: 5000(1.043)<sup>10</sup> = 7617.510… <b>[A1]</b></div><div class="worked__math">Y is better by 7617.510… − 7604.229… = 13.281… <b>[M1]</b></div><div class="worked__math">≈ <b>13.28 EUR</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">X：5000(1 + <span class=\"frac\"><span>4.2</span><span>1200</span></span>)<sup>120</sup> = 7604.229…   <b>[M1 A1]</b></div><div class=\"worked__math\">Y：5000(1.043)<sup>10</sup> = 7617.510…   <b>[A1]</b></div><div class=\"worked__math\">Y の方が 7617.510… − 7604.229… = 13.281… だけ有利   <b>[M1]</b></div><div class=\"worked__math\">≈ <b>13.28 EUR</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q045 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q045": {
      // EN: <p>Omar invests 20 000 USD for 7 years at a nominal annual interest rate of 5.1%, compounded half-yearly. Inflation is expected to be 2.8% per year, so an amount <span class="chem">V</span> in 7 years’ time will be worth <span class="chem">V / 1.028^7</span> in today’s money. Find the real value of Omar’s investment after 7 years, in today’s money. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Omar は 20 000 USD を名目年利率 5.1%、半年複利で 7 年間投資する。インフレ率は年 2.8% と見込まれるので、7 年後の金額 <span class=\"chem\">V</span> は現在の貨幣価値で <span class=\"chem\">V / 1.028^7</span> に相当する。7 年後の Omar の投資の実質価値を、現在の貨幣価値で求めなさい (Find)。小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: First find the future value: half-yearly means <span class="chem">k = 2</span>, so <span class="chem">V = 20000(1 + 5.1/200)^{14}</span>.
        "まず将来価値を求めます：半年複利なので <span class=\"chem\">k = 2</span>、よって <span class=\"chem\">V = 20000(1 + 5.1/200)^{14}</span> です。",
        // EN: Then remove the effect of inflation by dividing by <span class="chem">1.028^7</span>. Do not round <span class="chem">V</span> before dividing.
        "次に <span class=\"chem\">1.028^7</span> で割ってインフレの影響を取り除きます。割る前に <span class=\"chem\">V</span> を丸めてはいけません。",
      ],
      // EN: <div class="worked__math"><i>V</i> = 20000(1 + <span class="frac"><span>5.1</span><span>200</span></span>)<sup>14</sup> = 28453.08… <b>[M1 A1]</b></div><div class="worked__math">Real value = <span class="frac"><span>28453.08…</span><span>1.028<sup>7</sup></span></span> <b>[M1]</b></div><div class="worked__math">= 23451.871… ≈ <b>23 451.87 USD</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>V</i> = 20000(1 + <span class=\"frac\"><span>5.1</span><span>200</span></span>)<sup>14</sup> = 28453.08…   <b>[M1 A1]</b></div><div class=\"worked__math\">実質価値 = <span class=\"frac\"><span>28453.08…</span><span>1.028<sup>7</sup></span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 23451.871… ≈ <b>23 451.87 USD</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q046 · numeric · challenge · SL · SL 1.4 · 4 marks
    "t1-1-q046": {
      // EN: <p>A website lists a five-year-old car for 14 500 GBP. The same model cost 32 000 GBP when new. Assume that the car has lost the same percentage of its value every year. Find this annual percentage rate of depreciation. Give your answer correct to 3 significant figures.</p>
      stem: "<p>あるウェブサイトに、購入から 5 年たった車が 14 500 GBP で掲載されている。同じモデルの新車価格は 32 000 GBP であった。この車は毎年、価値の同じ割合を失ってきたと仮定する。この年間の減価率（%）を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: "the same percentage every year" is annual depreciation, a geometric model. The unknown is the rate <span class="chem">r</span>, not the final value.
        "解読：「毎年同じ割合」は年ごとの減価償却で、等比のモデルです。未知数は最終的な価値ではなく、率 <span class=\"chem\">r</span> です。",
        // EN: Solve <span class="chem">32000(1 - r/100)^5 = 14500</span>, or use the Finance Solver with <span class="mono">N = 5, PV = −32000, FV = 14500, PMT = 0</span>, solving for <span class="mono">I%</span> (it will be negative).
        "<span class=\"chem\">32000(1 - r/100)^5 = 14500</span> を解くか、Finance Solver で <span class=\"mono\">N = 5, PV = −32000, FV = 14500, PMT = 0</span> として <span class=\"mono\">I%</span> を求めます（負の値になります）。",
        // EN: The depreciation rate is the size of the negative <span class="mono">I%</span>, i.e. <span class="chem">100(1 - (14500/32000)^{1/5})</span>.
        "減価率は負の <span class=\"mono\">I%</span> の大きさ、すなわち <span class=\"chem\">100(1 - (14500/32000)^{1/5})</span> です。",
      ],
      // EN: <p>Decoding: annual depreciation at <span class="chem">r%</span> multiplies the value by <span class="chem">(1 - r/100)</span> each year, so the 5-year multiplier is <span class="chem">14500/32000</span>.</p><div class="worked__math">32000(1 − <span class="frac"><span><i>r</i></span><span>100</span></span>)<sup>5</sup> = 14500 <b>[M1]</b></div><div class="worked__math">1 − <span class="frac"><span><i>r</i></span><span>100</span></span> = (0.453125)<sup>1/5</sup> = 0.853578… <b>[M1 A1]</b></div><div class="worked__math"><i>r</i> = 14.64… ≈ <b>14.6%</b> <b>[A1]</b></div>
      solution: "<p>解読：年 <span class=\"chem\">r%</span> の減価償却では価値が毎年 <span class=\"chem\">(1 - r/100)</span> 倍になるので、5 年間の倍率は <span class=\"chem\">14500/32000</span> です。</p><div class=\"worked__math\">32000(1 − <span class=\"frac\"><span><i>r</i></span><span>100</span></span>)<sup>5</sup> = 14500   <b>[M1]</b></div><div class=\"worked__math\">1 − <span class=\"frac\"><span><i>r</i></span><span>100</span></span> = (0.453125)<sup>1/5</sup> = 0.853578…   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i> = 14.64… ≈ <b>14.6%</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q047 · short · challenge · SL · SL 1.4 · 8 marks
    "t1-1-q047": {
      // EN: <p>Ana invests 6000 EUR at 4.5% per year, compounded annually. On the same day, Ben invests 7500 EUR at a nominal annual rate of 3.2%, compounded monthly.</p><p>(a) Find the value of Ana’s investment after 10 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(b) Find the value of Ben’s investment after 10 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(c) Ana’s investment will eventually be worth more than Ben’s. Find the least number of complete years after which this happens. <strong>[4]</strong></p>
      stem: "<p>Ana は 6000 EUR を年利 4.5%、年複利で投資する。同じ日に、Ben は 7500 EUR を名目年利率 3.2%、月複利で投資する。</p><p>(a) 10 年後の Ana の投資の価値を求めなさい (Find)。小数第 2 位まで答えなさい。 <strong>[2]</strong><br>(b) 10 年後の Ben の投資の価値を求めなさい (Find)。小数第 2 位まで答えなさい。 <strong>[2]</strong><br>(c) Ana の投資はいずれ Ben の投資より価値が大きくなる。そうなるのは最少で何年（満年数）後か求めなさい (Find)。 <strong>[4]</strong></p>",
      hints: [
        // EN: Decode: two compound-interest models with different compounding periods. Part (c) asks for the first whole number of years after which Ana’s value is bigger, so it is an inequality to solve with the GDC.
        "解読：複利の期間が異なる 2 つの複利モデルです。(c) は Ana の価値の方が大きくなる最初の整数の年数を求めるので、GDC で解く不等式になります。",
        // EN: Ben’s value after <span class="chem">n</span> years is <span class="chem">7500(1 + 0.032/12)^{12n}</span>; his monthly compounding makes the exponent <span class="chem">12n</span>.
        "<span class=\"chem\">n</span> 年後の Ben の価値は <span class=\"chem\">7500(1 + 0.032/12)^{12n}</span> です。月複利なので指数は <span class=\"chem\">12n</span> になります。",
        // EN: Graph <span class="chem">y = 6000(1.045)^x</span> and <span class="chem">y = 7500(1.0026667)^{12x}</span> and find the intersection, then round up.
        "<span class=\"chem\">y = 6000(1.045)^x</span> と <span class=\"chem\">y = 7500(1.0026667)^{12x}</span> のグラフを描いて交点を求め、切り上げます。",
      ],
      // EN: <p>Decoding: Ana starts lower but has the higher effective rate, so her curve overtakes Ben’s. The intersection of the two models is at <span class="chem">n ≈ 18.5</span>; since values are compared after complete years, check 18 and 19. Ana is first ahead after <strong>19</strong> years.</p>
      solution: "<p>解読：Ana は出発点が低いものの実効利率が高いので、そのグラフはやがて Ben のグラフを追い越します。2 つのモデルの交点は <span class=\"chem\">n ≈ 18.5</span> です。比べるのは満年数ごとの価値なので、18 と 19 を確かめます。Ana が初めて上回るのは <strong>19</strong> 年後です。</p>",
      // EN: <div class="worked__math">(a) 6000 × 1.045<sup>10</sup> = <b>9317.82 EUR</b></div><div class="worked__math">(b) 7500(1 + 0.032/12)<sup>120</sup> = <b>10 324.06 EUR</b></div><div class="worked__math">(c) 6000(1.045)<sup><i>n</i></sup> &gt; 7500(1 + 0.032/12)<sup>12<i>n</i></sup>: intersection at <i>n</i> ≈ 18.5. After 18 years: 13 250.87 &lt; 13 331.59; after 19 years: 13 847.16 &gt; 13 764.51. So <b>19 years</b></div>
      answer: "<div class=\"worked__math\">(a) 6000 × 1.045<sup>10</sup> = <b>9317.82 EUR</b></div><div class=\"worked__math\">(b) 7500(1 + 0.032/12)<sup>120</sup> = <b>10 324.06 EUR</b></div><div class=\"worked__math\">(c) 6000(1.045)<sup><i>n</i></sup> &gt; 7500(1 + 0.032/12)<sup>12<i>n</i></sup>：交点は <i>n</i> ≈ 18.5。18 年後：13 250.87 &lt; 13 331.59、19 年後：13 847.16 &gt; 13 764.51。よって <b>19 年</b></div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">6000(1.045)^{10}</span>.
        "M1：(a) <span class=\"chem\">6000(1.045)^{10}</span> を用いる。",
        // EN: A1: (a) 9317.82 EUR.
        "A1：(a) 9317.82 EUR。",
        // EN: M1: (b) Uses <span class="chem">7500(1 + 3.2/1200)^{120}</span> (monthly: 120 periods).
        "M1：(b) <span class=\"chem\">7500(1 + 3.2/1200)^{120}</span> を用いる（月複利：120 期）。",
        // EN: A1: (b) 10 324.06 EUR.
        "A1：(b) 10 324.06 EUR。",
        // EN: M1: (c) Sets up <span class="chem">6000(1.045)^n &gt; 7500(1 + 0.032/12)^{12n}</span> (an equation is acceptable).
        "M1：(c) <span class=\"chem\">6000(1.045)^n &gt; 7500(1 + 0.032/12)^{12n}</span> を立てる（方程式でもよい）。",
        // EN: M1: (c) Uses the GDC to solve: graph intersection or table of both values.
        "M1：(c) GDC を用いて解く：グラフの交点、または両方の値の数表。",
        // EN: A1: (c) <span class="chem">n ≈ 18.5</span>, or values after 18 years (13 250.87, 13 331.59) and 19 years (13 847.16, 13 764.51).
        "A1：(c) <span class=\"chem\">n ≈ 18.5</span>、または 18 年後（13 250.87、13 331.59）と 19 年後（13 847.16、13 764.51）の値。",
        // EN: A1: (c) 19 years.
        "A1：(c) 19 年。",
      ],
    },

    // ── t1-1-q048 · numeric · challenge · SL · SL 1.4 · 5 marks
    "t1-1-q048": {
      // EN: <p>Mei keeps savings of 15 000 SGD in an account that pays 2.2% per year, compounded annually. Inflation is 3.1% per year, so an amount <span class="chem">V</span> in <span class="chem">n</span> years’ time is worth <span class="chem">V / 1.031^n</span> in today’s money. Mei makes no deposits or withdrawals. Find the least number of complete years after which the real value of her savings, in today’s money, is below 13 000 SGD.</p>
      stem: "<p>Mei は 15 000 SGD の貯金を、年利 2.2%、年複利の口座に預けている。インフレ率は年 3.1% なので、<span class=\"chem\">n</span> 年後の金額 <span class=\"chem\">V</span> は現在の貨幣価値で <span class=\"chem\">V / 1.031^n</span> に相当する。Mei は預け入れも引き出しもしない。現在の貨幣価値で見た貯金の実質価値が 13 000 SGD を下回るのは、最少で何年（満年数）後か求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the account balance grows, but inflation grows faster, so the <em>real</em> value falls. You need the least whole <span class="chem">n</span> for which the real value is below 13 000.
        "解読：口座の残高は増えますが、インフレの方が速く進むので、<em>実質</em>価値は下がります。実質価値が 13 000 を下回る最小の整数 <span class=\"chem\">n</span> が必要です。",
        // EN: Real value after <span class="chem">n</span> years <span class="chem">= 15000(1.022)^n / 1.031^n = 15000(1.022/1.031)^n</span>.
        "<span class=\"chem\">n</span> 年後の実質価値 <span class=\"chem\">= 15000(1.022)^n / 1.031^n = 15000(1.022/1.031)^n</span>。",
        // EN: Solve <span class="chem">15000(1.022/1.031)^n &lt; 13000</span> with logarithms or a GDC table. The base is less than 1, so dividing by its logarithm reverses the inequality.
        "<span class=\"chem\">15000(1.022/1.031)^n &lt; 13000</span> を対数または GDC の数表で解きます。底が 1 より小さいので、その対数で割ると不等号の向きが逆になります。",
      ],
      // EN: <p>Decoding: "real value" means the balance adjusted for inflation; it falls because 2.2% &lt; 3.1%.</p><div class="worked__math">Real value = <span class="frac"><span>15000(1.022)<sup><i>n</i></sup></span><span>1.031<sup><i>n</i></sup></span></span> <b>[M1]</b></div><div class="worked__math">15000(1.022/1.031)<sup><i>n</i></sup> &lt; 13000 <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(13/15)</span><span>ln(1.022/1.031)</span></span> ≈ 16.3 <b>[A1]</b></div><div class="worked__math">Check: after 16 years 13 036.68; after 17 years 12 922.88 <b>[A1]</b></div><div class="worked__math">Least number of complete years = <b>17</b> <b>[A1]</b></div>
      solution: "<p>解読：「実質価値」はインフレを調整した残高のことです。2.2% &lt; 3.1% なので、実質価値は下がります。</p><div class=\"worked__math\">実質価値 = <span class=\"frac\"><span>15000(1.022)<sup><i>n</i></sup></span><span>1.031<sup><i>n</i></sup></span></span>   <b>[M1]</b></div><div class=\"worked__math\">15000(1.022/1.031)<sup><i>n</i></sup> &lt; 13000   <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(13/15)</span><span>ln(1.022/1.031)</span></span> ≈ 16.3   <b>[A1]</b></div><div class=\"worked__math\">確認：16 年後 13 036.68、17 年後 12 922.88   <b>[A1]</b></div><div class=\"worked__math\">最少の満年数 = <b>17</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q049 · short · exam · SL · SL 1.4 · 8 marks
    "t1-1-q049": {
      // EN: <p>A company buys a machine for 85 000 AUD. The value of the machine depreciates by 12% each year.</p><p>(a) Find the value of the machine after 3 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(b) Find the number of complete years after which the value of the machine first falls below 30 000 AUD. <strong>[3]</strong><br>At the same time as it buys the machine, the company invests 40 000 AUD at a nominal annual rate of 3.9%, compounded monthly.<br>(c) Find the least number of complete years after which the investment is worth more than the machine. <strong>[3]</strong></p>
      stem: "<p>ある会社が機械を 85 000 AUD で購入する。機械の価値は毎年 12% ずつ減少する。</p><p>(a) 3 年後の機械の価値を求めなさい (Find)。小数第 2 位まで答えなさい。 <strong>[2]</strong><br>(b) 機械の価値が初めて 30 000 AUD を下回るのは何年（満年数）後か求めなさい (Find)。 <strong>[3]</strong><br>機械を購入すると同時に、会社は 40 000 AUD を名目年利率 3.9%、月複利で投資する。<br>(c) 投資の価値が機械の価値を上回るのは、最少で何年（満年数）後か求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: (a) and (b) are depreciation (multiplier 0.88 per year); (c) compares a growing investment with a shrinking value, and asks for the first whole year in which the investment is bigger.
        "解読：(a) と (b) は減価償却（毎年の倍率 0.88）です。(c) は増えていく投資と減っていく価値を比べ、投資の方が大きくなる最初の整数の年を求めます。",
        // EN: For (b) and (c), use a GDC table with <span class="chem">x</span> = number of years, or graph both sides and find the intersection.
        "(b) と (c) では、<span class=\"chem\">x</span> = 年数とした GDC の数表を使うか、両辺のグラフを描いて交点を求めます。",
        // EN: For (c), the investment after <span class="chem">n</span> years is <span class="chem">40000(1 + 0.039/12)^{12n}</span>: monthly compounding means <span class="chem">12n</span> periods.
        "(c) では、<span class=\"chem\">n</span> 年後の投資の価値は <span class=\"chem\">40000(1 + 0.039/12)^{12n}</span> です：月複利なので期間の数は <span class=\"chem\">12n</span> です。",
      ],
      // EN: <p>Decoding: there are two models, depreciation <span class="chem">M(n) = 85000(0.88)^n</span> and monthly compound growth <span class="chem">I(n) = 40000(1.00325)^{12n}</span>. For (b), <span class="chem">n &gt; ln(30/85)/ln(0.88) ≈ 8.15</span>, so the answer is 9 years. For (c), the graphs meet at <span class="chem">n ≈ 4.52</span>, so the investment is first worth more after 5 complete years.</p>
      solution: "<p>解読：2 つのモデルがあります。減価償却 <span class=\"chem\">M(n) = 85000(0.88)^n</span> と月複利による増加 <span class=\"chem\">I(n) = 40000(1.00325)^{12n}</span> です。(b) では <span class=\"chem\">n &gt; ln(30/85)/ln(0.88) ≈ 8.15</span> なので、答えは 9 年です。(c) では 2 つのグラフが <span class=\"chem\">n ≈ 4.52</span> で交わるので、投資の価値が初めて上回るのは満 5 年後です。</p>",
      // EN: <div class="worked__math">(a) 85000 × 0.88<sup>3</sup> = <b>57 925.12 AUD</b></div><div class="worked__math">(b) 85000 × 0.88<sup><i>n</i></sup> &lt; 30000 ⇒ <i>n</i> &gt; 8.15; after 8 years 30 568.93, after 9 years 26 900.66, so <b>9 years</b></div><div class="worked__math">(c) 40000(1 + 0.039/12)<sup>12<i>n</i></sup> &gt; 85000 × 0.88<sup><i>n</i></sup> ⇒ <i>n</i> &gt; 4.52; after 4 years 46 741.22 &lt; 50 974.11, after 5 years 48 597.07 &gt; 44 857.21, so <b>5 years</b></div>
      answer: "<div class=\"worked__math\">(a) 85000 × 0.88<sup>3</sup> = <b>57 925.12 AUD</b></div><div class=\"worked__math\">(b) 85000 × 0.88<sup><i>n</i></sup> &lt; 30000  ⇒  <i>n</i> &gt; 8.15。8 年後 30 568.93、9 年後 26 900.66、よって <b>9 年</b></div><div class=\"worked__math\">(c) 40000(1 + 0.039/12)<sup>12<i>n</i></sup> &gt; 85000 × 0.88<sup><i>n</i></sup>  ⇒  <i>n</i> &gt; 4.52。4 年後 46 741.22 &lt; 50 974.11、5 年後 48 597.07 &gt; 44 857.21、よって <b>5 年</b></div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">85000 × 0.88^3</span> (or the Finance Solver with <span class="mono">I% = −12</span>).
        "M1：(a) <span class=\"chem\">85000 × 0.88^3</span> を用いる（または Finance Solver で <span class=\"mono\">I% = −12</span>）。",
        // EN: A1: (a) 57 925.12 AUD.
        "A1：(a) 57 925.12 AUD。",
        // EN: M1: (b) Sets up <span class="chem">85000 × 0.88^n &lt; 30000</span> (an equation is acceptable).
        "M1：(b) <span class=\"chem\">85000 × 0.88^n &lt; 30000</span> を立てる（方程式でもよい）。",
        // EN: A1: (b) <span class="chem">n &gt; 8.15</span>, or the values after 8 and 9 years (30 568.93 and 26 900.66).
        "A1：(b) <span class=\"chem\">n &gt; 8.15</span>、または 8 年後と 9 年後の値（30 568.93 と 26 900.66）。",
        // EN: A1: (b) 9 years.
        "A1：(b) 9 年。",
        // EN: M1: (c) Sets up <span class="chem">40000(1 + 0.039/12)^{12n} &gt; 85000 × 0.88^n</span> (an equation is acceptable).
        "M1：(c) <span class=\"chem\">40000(1 + 0.039/12)^{12n} &gt; 85000 × 0.88^n</span> を立てる（方程式でもよい）。",
        // EN: A1: (c) Uses the GDC: intersection at <span class="chem">n ≈ 4.52</span>, or both values after 4 and 5 years.
        "A1：(c) GDC を用いる：交点 <span class=\"chem\">n ≈ 4.52</span>、または 4 年後と 5 年後の両方の値。",
        // EN: A1: (c) 5 years.
        "A1：(c) 5 年。",
      ],
    },

    // ── t1-1-q050 · numeric · exam · SL · SL 1.4 · 3 marks
    "t1-1-q050": {
      // EN: <p>Lena wants to have 25 000 EUR in 8 years’ time. She finds an account paying a nominal annual interest rate of 4.75%, compounded quarterly. Find the amount she must invest now. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Lena は 8 年後に 25 000 EUR を手にしたいと考えている。名目年利率 4.75%、四半期複利の口座を見つけた。今投資しなければならない金額を求めなさい (Find)。小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: This time the future value is known and the present value is unknown: <span class="chem">PV(1 + 4.75/400)^{32} = 25000</span>.
        "今回は将来価値がわかっていて、現在価値が未知です：<span class=\"chem\">PV(1 + 4.75/400)^{32} = 25000</span>。",
        // EN: Divide, or use the Finance Solver with <span class="mono">N = 32, I% = 4.75, FV = 25000, P/Y = C/Y = 4</span>, solving for PV (it shows as negative, an outflow).
        "割り算をするか、Finance Solver で <span class=\"mono\">N = 32, I% = 4.75, FV = 25000, P/Y = C/Y = 4</span> として PV を求めます（支出なので負の値で表示されます）。",
      ],
      // EN: <div class="worked__math"><i>PV</i>(1 + <span class="frac"><span>4.75</span><span>400</span></span>)<sup>32</sup> = 25000 <b>[M1]</b></div><div class="worked__math"><i>PV</i> = <span class="frac"><span>25000</span><span>1.011875<sup>32</sup></span></span> <b>[A1]</b></div><div class="worked__math">= 17134.849… ≈ <b>17 134.85 EUR</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>PV</i>(1 + <span class=\"frac\"><span>4.75</span><span>400</span></span>)<sup>32</sup> = 25000   <b>[M1]</b></div><div class=\"worked__math\"><i>PV</i> = <span class=\"frac\"><span>25000</span><span>1.011875<sup>32</sup></span></span>   <b>[A1]</b></div><div class=\"worked__math\">= 17134.849… ≈ <b>17 134.85 EUR</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q051 · numeric · challenge · SL · SL 1.4 · 4 marks
    "t1-1-q051": {
      // EN: <p>A bank advertises a savings account with the slogan "Double your money in 9 years". Interest is compounded monthly at a fixed nominal annual rate of <span class="chem">r%</span>. Find the value of <span class="chem">r</span> that makes the slogan exactly true. Give your answer correct to 3 significant figures.</p>
      stem: "<p>ある銀行が「9 年でお金が 2 倍に」というキャッチコピーで普通預金口座を宣伝している。利息は一定の名目年利率 <span class=\"chem\">r%</span> で月複利である。このキャッチコピーがちょうど成り立つような <span class=\"chem\">r</span> の値を求めなさい (Find)。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: no amount is given because none is needed. "Double your money" means <span class="chem">FV = 2PV</span> for any starting amount, so <span class="chem">PV</span> cancels. The unknown is the rate.
        "解読：金額が与えられていないのは、必要ないからです。「お金が 2 倍に」とは、どんな元金に対しても <span class=\"chem\">FV = 2PV</span> となることを意味するので、<span class=\"chem\">PV</span> は約分されて消えます。未知数は利率です。",
        // EN: Monthly compounding for 9 years gives 108 periods: <span class="chem">(1 + r/1200)^{108} = 2</span>.
        "9 年間の月複利では期間の数は 108 です：<span class=\"chem\">(1 + r/1200)^{108} = 2</span>。",
        // EN: Take the 108th root, or use the Finance Solver with <span class="mono">N = 108, PV = −1, FV = 2, P/Y = C/Y = 12</span>, solving for <span class="mono">I%</span>.
        "108 乗根をとるか、Finance Solver で <span class=\"mono\">N = 108, PV = −1, FV = 2, P/Y = C/Y = 12</span> として <span class=\"mono\">I%</span> を求めます。",
      ],
      // EN: <p>Decoding: choose any <span class="chem">PV</span> (for example 1); the condition is <span class="chem">FV = 2PV</span>.</p><div class="worked__math"><i>PV</i>(1 + <span class="frac"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2<i>PV</i> <b>[M1]</b></div><div class="worked__math">(1 + <span class="frac"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2 <b>[A1]</b></div><div class="worked__math"><i>r</i> = 1200(2<sup>1/108</sup> − 1) <b>[M1]</b></div><div class="worked__math">= 7.726… ≈ <b>7.73</b> <b>[A1]</b></div>
      solution: "<p>解読：<span class=\"chem\">PV</span> は何でもよい（例えば 1）。条件は <span class=\"chem\">FV = 2PV</span> です。</p><div class=\"worked__math\"><i>PV</i>(1 + <span class=\"frac\"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2<i>PV</i>   <b>[M1]</b></div><div class=\"worked__math\">(1 + <span class=\"frac\"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2   <b>[A1]</b></div><div class=\"worked__math\"><i>r</i> = 1200(2<sup>1/108</sup> − 1)   <b>[M1]</b></div><div class=\"worked__math\">= 7.726… ≈ <b>7.73</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q052 · short · challenge · SL · SL 1.3, 1.4 · 8 marks
    "t1-1-q052": {
      // EN: <p>On 1 January every year, starting in year 1, Tomás deposits 1200 EUR into a savings account. The account pays 3% interest per year, compounded annually, and interest is added on 31 December. He makes no withdrawals.</p><p>(a) Show that the value of the account immediately after the third deposit is 3709.08 EUR. <strong>[2]</strong><br>(b) Show that the value of the account immediately after the <span class="chem">n</span>-th deposit is <span class="chem">40000(1.03^n - 1)</span> EUR. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which the value immediately after the <span class="chem">n</span>-th deposit exceeds 30 000 EUR. <strong>[3]</strong></p>
      stem: "<p>1 年目から毎年 1 月 1 日に、Tomás は普通預金口座に 1200 EUR を預け入れる。この口座の利率は年 3%、年複利で、利息は 12 月 31 日に加えられる。彼は引き出しをしない。</p><p>(a) 3 回目の預け入れの直後の口座の価値が 3709.08 EUR であることを示しなさい (Show that)。 <strong>[2]</strong><br>(b) <span class=\"chem\">n</span> 回目の預け入れの直後の口座の価値が <span class=\"chem\">40000(1.03^n - 1)</span> EUR であることを示しなさい (Show that)。 <strong>[3]</strong><br>(c) <span class=\"chem\">n</span> 回目の預け入れの直後の価値が 30 000 EUR を超えるような <span class=\"chem\">n</span> の最小値を求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is regular saving, which in Math AA is a geometric series in disguise (not a Finance Solver annuity). Each deposit grows separately; list what each deposit is worth at the moment of the <span class="chem">n</span>-th deposit.
        "解読：これは積立貯蓄で、Math AA では形を変えた等比級数として扱います（Finance Solver の年金ではありません）。各預け入れは別々に増えていくので、<span class=\"chem\">n</span> 回目の預け入れの時点でそれぞれの預け入れがいくらになっているかを書き出しましょう。",
        // EN: Immediately after the <span class="chem">n</span>-th deposit, the newest deposit has earned no interest, the one before it one year’s interest, …, and the first one <span class="chem">n - 1</span> years’ interest.
        "<span class=\"chem\">n</span> 回目の預け入れの直後では、最新の預け入れにはまだ利息がつかず、その 1 つ前のものには 1 年分の利息、……、最初のものには <span class=\"chem\">n - 1</span> 年分の利息がついています。",
        // EN: Sum <span class="chem">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span> with <span class="chem">S_n = u_1(r^n - 1)/(r - 1)</span>, then solve the inequality in (c) with logarithms or a GDC table.
        "<span class=\"chem\">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span> の和を <span class=\"chem\">S_n = u_1(r^n - 1)/(r - 1)</span> で求め、(c) の不等式を対数または GDC の数表で解きます。",
      ],
      // EN: <p>Decoding: the account value is a sum of separately compounding deposits, which is a geometric series with first term 1200 and ratio 1.03. Immediately after the 3rd deposit the value is <span class="chem">1200(1.03)^2 + 1200(1.03) + 1200 = 3709.08</span>. In general, <span class="chem">S_n = 1200(1.03^n - 1)/0.03 = 40000(1.03^n - 1)</span>. Then <span class="chem">1.03^n &gt; 1.75</span> gives <span class="chem">n &gt; ln 1.75/ln 1.03 ≈ 18.93</span>, so <span class="chem">n = 19</span>.</p>
      solution: "<p>解読：口座の価値は別々に複利で増える預け入れの和であり、初項 1200、公比 1.03 の等比級数です。3 回目の預け入れの直後の価値は <span class=\"chem\">1200(1.03)^2 + 1200(1.03) + 1200 = 3709.08</span> です。一般に、<span class=\"chem\">S_n = 1200(1.03^n - 1)/0.03 = 40000(1.03^n - 1)</span> です。すると <span class=\"chem\">1.03^n &gt; 1.75</span> から <span class=\"chem\">n &gt; ln 1.75/ln 1.03 ≈ 18.93</span> となるので、<span class=\"chem\">n = 19</span> です。</p>",
      // EN: <div class="worked__math">(a) 1200(1.03)<sup>2</sup> + 1200(1.03) + 1200 = 1273.08 + 1236 + 1200 = 3709.08</div><div class="worked__math">(b) 1200 + 1200(1.03) + … + 1200(1.03)<sup><i>n</i>−1</sup> = <span class="frac"><span>1200(1.03<sup><i>n</i></sup> − 1)</span><span>1.03 − 1</span></span> = 40000(1.03<sup><i>n</i></sup> − 1)</div><div class="worked__math">(c) 40000(1.03<sup><i>n</i></sup> − 1) &gt; 30000 ⇒ 1.03<sup><i>n</i></sup> &gt; 1.75 ⇒ <i>n</i> &gt; 18.93, so <b><i>n</i> = 19</b></div>
      answer: "<div class=\"worked__math\">(a) 1200(1.03)<sup>2</sup> + 1200(1.03) + 1200 = 1273.08 + 1236 + 1200 = 3709.08</div><div class=\"worked__math\">(b) 1200 + 1200(1.03) + … + 1200(1.03)<sup><i>n</i>−1</sup> = <span class=\"frac\"><span>1200(1.03<sup><i>n</i></sup> − 1)</span><span>1.03 − 1</span></span> = 40000(1.03<sup><i>n</i></sup> − 1)</div><div class=\"worked__math\">(c) 40000(1.03<sup><i>n</i></sup> − 1) &gt; 30000  ⇒  1.03<sup><i>n</i></sup> &gt; 1.75  ⇒  <i>n</i> &gt; 18.93、よって <b><i>n</i> = 19</b></div>",
      markscheme: [
        // EN: M1: (a) Recognizes that the first deposit has earned interest twice and the second once: <span class="chem">1200(1.03)^2 + 1200(1.03) + 1200</span>.
        "M1：(a) 1 回目の預け入れには 2 回、2 回目には 1 回利息がついていることを理解している：<span class=\"chem\">1200(1.03)^2 + 1200(1.03) + 1200</span>。",
        // EN: A1: (a) <span class="chem">1273.08 + 1236 + 1200</span>, which gives the stated 3709.08 (the given value itself earns no mark).
        "A1：(a) <span class=\"chem\">1273.08 + 1236 + 1200</span> から、示すべき値 3709.08 が得られる（与えられた値そのものには点を与えない）。",
        // EN: M1: (b) Writes the value as the geometric series <span class="chem">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span>.
        "M1：(b) 価値を等比級数 <span class=\"chem\">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span> として書く。",
        // EN: A1: (b) Identifies first term 1200, ratio 1.03 and <span class="chem">n</span> terms.
        "A1：(b) 初項 1200、公比 1.03、項数 <span class=\"chem\">n</span> を特定する。",
        // EN: A1: (b) <span class="chem">1200(1.03^n - 1)/0.03</span>, which leads to the given result (the given line itself earns no mark).
        "A1：(b) <span class=\"chem\">1200(1.03^n - 1)/0.03</span> から与えられた結果を導く（与えられた式そのものには点を与えない）。",
        // EN: M1: (c) Sets up <span class="chem">40000(1.03^n - 1) &gt; 30000</span> (an equation is acceptable).
        "M1：(c) <span class=\"chem\">40000(1.03^n - 1) &gt; 30000</span> を立てる（方程式でもよい）。",
        // EN: A1: (c) <span class="chem">1.03^n &gt; 1.75</span>, so <span class="chem">n &gt; 18.93</span> (or GDC values 28 097.32 for <span class="chem">n = 18</span> and 30 140.24 for <span class="chem">n = 19</span>).
        "A1：(c) <span class=\"chem\">1.03^n &gt; 1.75</span>、よって <span class=\"chem\">n &gt; 18.93</span>（または GDC の値：<span class=\"chem\">n = 18</span> のとき 28 097.32、<span class=\"chem\">n = 19</span> のとき 30 140.24）。",
        // EN: A1: (c) <span class="chem">n = 19</span>.
        "A1：(c) <span class=\"chem\">n = 19</span>。",
      ],
    },

    // ── t1-1-q053 · short · exam · SL · SL 1.4 · 6 marks
    "t1-1-q053": {
      // EN: <p>A printing machine is bought for 50 000 USD. Its value depreciates by 20% each year.</p><p>(a) Write down an expression for the value of the machine after <span class="chem">n</span> years. <strong>[1]</strong><br>(b) Find the value of the machine after 2 years. <strong>[2]</strong><br>(c) Find the least number of complete years after which the machine is worth less than half of its original value. <strong>[3]</strong></p>
      stem: "<p>印刷機を 50 000 USD で購入した。その価値は毎年 20% ずつ減少する。</p><p>(a) <span class=\"chem\">n</span> 年後の印刷機の価値を表す式を書きなさい (Write down)。 <strong>[1]</strong><br>(b) 2 年後の印刷機の価値を求めなさい (Find)。 <strong>[2]</strong><br>(c) 印刷機の価値がもとの価値の半分未満になるのは、最少で何年（満年数）後か求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: A 20% loss each year means multiplying by 0.8 each year.
        "毎年 20% 減るということは、毎年 0.8 を掛けるということです。",
        // EN: On Paper 1, compute powers of 0.8 by hand: <span class="chem">0.8^2 = 0.64</span>, <span class="chem">0.8^3 = 0.512</span>, …
        "Paper 1 では、0.8 の累乗を手計算します：<span class=\"chem\">0.8^2 = 0.64</span>、<span class=\"chem\">0.8^3 = 0.512</span>、……",
        // EN: "Less than half" is strict: 0.512 is still more than 0.5.
        "「半分未満」は等号を含みません：0.512 はまだ 0.5 より大きいです。",
      ],
      // EN: <p>The value after <span class="chem">n</span> years is <span class="chem">50000(0.8)^n</span>. Half of the original value is 25 000, so we need <span class="chem">0.8^n &lt; 0.5</span>. After 3 years the value is 25 600, which is still above half; after 4 years it is 20 480. The answer is 4 complete years.</p>
      solution: "<p><span class=\"chem\">n</span> 年後の価値は <span class=\"chem\">50000(0.8)^n</span> です。もとの価値の半分は 25 000 なので、<span class=\"chem\">0.8^n &lt; 0.5</span> が必要です。3 年後の価値は 25 600 でまだ半分を上回っており、4 年後は 20 480 です。答えは満 4 年です。</p>",
      // EN: <div class="worked__math">(a) <b>50 000 × 0.8<sup><i>n</i></sup></b></div><div class="worked__math">(b) 50 000 × 0.64 = <b>32 000 USD</b></div><div class="worked__math">(c) Need 0.8<sup><i>n</i></sup> &lt; 0.5. 0.8<sup>3</sup> = 0.512 (value 25 600, not yet below 25 000); 0.8<sup>4</sup> = 0.4096 (value 20 480). So <b>4 years</b></div>
      answer: "<div class=\"worked__math\">(a) <b>50 000 × 0.8<sup><i>n</i></sup></b></div><div class=\"worked__math\">(b) 50 000 × 0.64 = <b>32 000 USD</b></div><div class=\"worked__math\">(c) 0.8<sup><i>n</i></sup> &lt; 0.5 が必要。0.8<sup>3</sup> = 0.512（価値 25 600、まだ 25 000 を下回らない）、0.8<sup>4</sup> = 0.4096（価値 20 480）。よって <b>4 年</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">50000 × 0.8^n</span> (or equivalent).
        "A1：(a) <span class=\"chem\">50000 × 0.8^n</span>（または同値な式）。",
        // EN: M1: (b) Substitutes <span class="chem">n = 2</span>: <span class="chem">50000 × 0.8^2</span>.
        "M1：(b) <span class=\"chem\">n = 2</span> を代入する：<span class=\"chem\">50000 × 0.8^2</span>。",
        // EN: A1: (b) 32 000 USD.
        "A1：(b) 32 000 USD。",
        // EN: M1: (c) Sets up <span class="chem">50000 × 0.8^n &lt; 25000</span>, i.e. <span class="chem">0.8^n &lt; 0.5</span>.
        "M1：(c) <span class=\"chem\">50000 × 0.8^n &lt; 25000</span>、すなわち <span class=\"chem\">0.8^n &lt; 0.5</span> を立てる。",
        // EN: A1: (c) Evaluates <span class="chem">0.8^3 = 0.512</span> and <span class="chem">0.8^4 = 0.4096</span> (or the values 25 600 and 20 480).
        "A1：(c) <span class=\"chem\">0.8^3 = 0.512</span> と <span class=\"chem\">0.8^4 = 0.4096</span> を計算する（または値 25 600 と 20 480）。",
        // EN: A1: (c) 4 years.
        "A1：(c) 4 年。",
      ],
    },

    // ── t1-1-q054 · numeric · exam · SL · SL 1.1 · 3 marks
    "t1-1-q054": {
      // EN: <p>Find the value of <span class="chem">(2.4 × 10^{-3})^2 / (1.6 × 10^{-8})</span>. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>
      stem: "<p><span class=\"chem\">(2.4 × 10^{-3})^2 / (1.6 × 10^{-8})</span> の値を求めなさい (Find)。答えは <span class=\"chem\">a × 10^k</span>（<span class=\"chem\">1 &lt;= a &lt; 10</span>、<span class=\"chem\">k</span> は整数）の形で答えなさい。</p>",
      hints: [
        // EN: Square both parts of the bracket: <span class="chem">(2.4)^2 × (10^{-3})^2</span>.
        "かっこの中の両方の部分を 2 乗します：<span class=\"chem\">(2.4)^2 × (10^{-3})^2</span>。",
        // EN: Then divide the leading numbers and subtract the powers of 10: <span class="chem">-6 - (-8) = 2</span>.
        "次に先頭の数どうしを割り、10 の指数どうしを引きます：<span class=\"chem\">-6 - (-8) = 2</span>。",
      ],
      // EN: <div class="worked__math">(2.4 × 10<sup>−3</sup>)<sup>2</sup> = 5.76 × 10<sup>−6</sup> <b>[A1]</b></div><div class="worked__math"><span class="frac"><span>5.76 × 10<sup>−6</sup></span><span>1.6 × 10<sup>−8</sup></span></span> = 3.6 × 10<sup>−6 − (−8)</sup> <b>[M1]</b></div><div class="worked__math">= <b>3.6 × 10<sup>2</sup></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(2.4 × 10<sup>−3</sup>)<sup>2</sup> = 5.76 × 10<sup>−6</sup>   <b>[A1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span>5.76 × 10<sup>−6</sup></span><span>1.6 × 10<sup>−8</sup></span></span> = 3.6 × 10<sup>−6 − (−8)</sup>   <b>[M1]</b></div><div class=\"worked__math\">= <b>3.6 × 10<sup>2</sup></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q055 · numeric · challenge · SL · SL 1.1, 1.3 · 5 marks
    "t1-1-q055": {
      // EN: <p>At the start of 2020, a company stored <span class="chem">3.2 × 10^{15}</span> bytes of data. The amount stored at the start of each year is 28% greater than at the start of the previous year. Find the first year at the start of which the amount stored exceeds <span class="chem">1.0 × 10^{18}</span> bytes.</p>
      stem: "<p>2020 年の初めに、ある会社は <span class=\"chem\">3.2 × 10^{15}</span> バイトのデータを保存していた。各年の初めに保存されている量は、前年の初めより 28% 多い。年の初めの保存量が初めて <span class=\"chem\">1.0 × 10^{18}</span> バイトを超えるのは何年か求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is a geometric sequence in standard-form numbers. The question asks for a calendar year, not for <span class="chem">n</span>, so decide what <span class="chem">n</span> means first: let <span class="chem">n</span> be the number of years after the start of 2020.
        "解読：これは指数表記の数でできた等比数列です。問われているのは <span class=\"chem\">n</span> ではなく西暦の年なので、まず <span class=\"chem\">n</span> の意味を決めましょう：<span class=\"chem\">n</span> を 2020 年の初めから数えた年数とします。",
        // EN: Solve <span class="chem">3.2 × 10^{15} × 1.28^n &gt; 1.0 × 10^{18}</span>, i.e. <span class="chem">1.28^n &gt; 312.5</span>.
        "<span class=\"chem\">3.2 × 10^{15} × 1.28^n &gt; 1.0 × 10^{18}</span>、すなわち <span class=\"chem\">1.28^n &gt; 312.5</span> を解きます。",
        // EN: Round <span class="chem">n</span> up to an integer, then add it to 2020.
        "<span class=\"chem\">n</span> を整数に切り上げ、2020 に加えます。",
      ],
      // EN: <p>Decoding: the amount at the start of 2020 + <span class="chem">n</span> is <span class="chem">3.2 × 10^{15} × 1.28^n</span> (so 2020 corresponds to <span class="chem">n = 0</span>, not <span class="chem">n = 1</span>).</p><div class="worked__math">3.2 × 10<sup>15</sup> × 1.28<sup><i>n</i></sup> &gt; 10<sup>18</sup> ⇒ 1.28<sup><i>n</i></sup> &gt; 312.5 <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 312.5</span><span>ln 1.28</span></span> ≈ 23.27 <b>[A1]</b></div><div class="worked__math"><i>n</i> = 24 (check: <i>n</i> = 23 gives 9.35 × 10<sup>17</sup>, <i>n</i> = 24 gives 1.20 × 10<sup>18</sup>) <b>[A1]</b></div><div class="worked__math">Year: 2020 + 24 = <b>2044</b> <b>[A1]</b></div>
      solution: "<p>解読：2020 + <span class=\"chem\">n</span> 年の初めの量は <span class=\"chem\">3.2 × 10^{15} × 1.28^n</span> です（したがって 2020 年は <span class=\"chem\">n = 1</span> ではなく <span class=\"chem\">n = 0</span> に対応します）。</p><div class=\"worked__math\">3.2 × 10<sup>15</sup> × 1.28<sup><i>n</i></sup> &gt; 10<sup>18</sup>  ⇒  1.28<sup><i>n</i></sup> &gt; 312.5   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 312.5</span><span>ln 1.28</span></span> ≈ 23.27   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> = 24（確認：<i>n</i> = 23 のとき 9.35 × 10<sup>17</sup>、<i>n</i> = 24 のとき 1.20 × 10<sup>18</sup>）   <b>[A1]</b></div><div class=\"worked__math\">年：2020 + 24 = <b>2044</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q056 · short · challenge · SL · SL 1.2, 1.3 · 9 marks
    "t1-1-q056": {
      // EN: <p>An arithmetic sequence <span class="chem">u_n</span> has common difference <span class="chem">d</span>, and a geometric sequence <span class="chem">v_n</span> has common ratio <span class="chem">r</span>. The geometric sequence is not constant. Both sequences have first term 3. The third term of the arithmetic sequence equals the second term of the geometric sequence, and the seventh term of the arithmetic sequence equals the third term of the geometric sequence.</p><p>(a) Show that <span class="chem">r^2 - 3r + 2 = 0</span>. <strong>[3]</strong><br>(b) Find the value of <span class="chem">r</span> and the value of <span class="chem">d</span>. <strong>[4]</strong><br>(c) Find <span class="chem">Σ_{k=1}^{20} u_k</span>. <strong>[2]</strong></p>
      stem: "<p>等差数列 <span class=\"chem\">u_n</span> の公差を <span class=\"chem\">d</span>、等比数列 <span class=\"chem\">v_n</span> の公比を <span class=\"chem\">r</span> とする。この等比数列は定数列ではない。どちらの数列も初項は 3 である。等差数列の第 3 項は等比数列の第 2 項に等しく、等差数列の第 7 項は等比数列の第 3 項に等しい。</p><p>(a) <span class=\"chem\">r^2 - 3r + 2 = 0</span> であることを示しなさい (Show that)。 <strong>[3]</strong><br>(b) <span class=\"chem\">r</span> の値と <span class=\"chem\">d</span> の値を求めなさい (Find)。 <strong>[4]</strong><br>(c) <span class=\"chem\">Σ_{k=1}^{20} u_k</span> を求めなさい (Find)。 <strong>[2]</strong></p>",
      hints: [
        // EN: Decode: translate each sentence into an equation using <span class="chem">u_n = 3 + (n - 1)d</span> and <span class="chem">v_n = 3r^{n-1}</span>. The phrase "not constant" is a hidden condition: it rules out <span class="chem">r = 1</span>.
        "解読：<span class=\"chem\">u_n = 3 + (n - 1)d</span> と <span class=\"chem\">v_n = 3r^{n-1}</span> を使って、各文を方程式に直します。「定数列ではない」という言葉は隠れた条件で、<span class=\"chem\">r = 1</span> を除外します。",
        // EN: Third arithmetic term: <span class="chem">3 + 2d</span>; second geometric term: <span class="chem">3r</span>. Seventh arithmetic term: <span class="chem">3 + 6d</span>; third geometric term: <span class="chem">3r^2</span>.
        "等差数列の第 3 項：<span class=\"chem\">3 + 2d</span>、等比数列の第 2 項：<span class=\"chem\">3r</span>。等差数列の第 7 項：<span class=\"chem\">3 + 6d</span>、等比数列の第 3 項：<span class=\"chem\">3r^2</span>。",
        // EN: Make <span class="chem">d</span> the subject of the first equation and substitute into the second.
        "1 つ目の方程式を <span class=\"chem\">d</span> について解き、2 つ目の方程式に代入します。",
      ],
      // EN: <p>Decoding: four "term equals term" facts become two equations; "not constant" eliminates the root <span class="chem">r = 1</span> (which would give <span class="chem">d = 0</span> and two constant sequences). With <span class="chem">r = 2</span>, <span class="chem">d = 3/2</span>: check <span class="chem">u_3 = 6 = v_2</span> and <span class="chem">u_7 = 12 = v_3</span>. Then <span class="chem">S_{20} = 345</span>.</p>
      solution: "<p>解読：「項が項に等しい」という 4 つの情報から 2 つの方程式ができます。「定数列ではない」は解 <span class=\"chem\">r = 1</span>（<span class=\"chem\">d = 0</span> となり、2 つの数列がどちらも定数列になる）を除外します。<span class=\"chem\">r = 2</span>、<span class=\"chem\">d = 3/2</span> のとき、<span class=\"chem\">u_3 = 6 = v_2</span>、<span class=\"chem\">u_7 = 12 = v_3</span> を確かめます。よって <span class=\"chem\">S_{20} = 345</span> です。</p>",
      // EN: <div class="worked__math">(a) 3 + 2<i>d</i> = 3<i>r</i> and 3 + 6<i>d</i> = 3<i>r</i><sup>2</sup>. From the first, <i>d</i> = <span class="frac"><span>3(<i>r</i> − 1)</span><span>2</span></span>; substituting: 3 + 9(<i>r</i> − 1) = 3<i>r</i><sup>2</sup> ⇒ 3<i>r</i><sup>2</sup> − 9<i>r</i> + 6 = 0 ⇒ <i>r</i><sup>2</sup> − 3<i>r</i> + 2 = 0</div><div class="worked__math">(b) (<i>r</i> − 1)(<i>r</i> − 2) = 0. <i>r</i> = 1 would make the geometric sequence constant, so <b><i>r</i> = 2</b> and <b><i>d</i> = <span class="frac"><span>3</span><span>2</span></span></b></div><div class="worked__math">(c) <span class="frac"><span>20</span><span>2</span></span>(2 × 3 + 19 × <span class="frac"><span>3</span><span>2</span></span>) = 10 × 34.5 = <b>345</b></div>
      answer: "<div class=\"worked__math\">(a) 3 + 2<i>d</i> = 3<i>r</i> かつ 3 + 6<i>d</i> = 3<i>r</i><sup>2</sup>。1 つ目から <i>d</i> = <span class=\"frac\"><span>3(<i>r</i> − 1)</span><span>2</span></span>。代入すると：3 + 9(<i>r</i> − 1) = 3<i>r</i><sup>2</sup>  ⇒  3<i>r</i><sup>2</sup> − 9<i>r</i> + 6 = 0  ⇒  <i>r</i><sup>2</sup> − 3<i>r</i> + 2 = 0</div><div class=\"worked__math\">(b) (<i>r</i> − 1)(<i>r</i> − 2) = 0。<i>r</i> = 1 では等比数列が定数列になるので、<b><i>r</i> = 2</b>、<b><i>d</i> = <span class=\"frac\"><span>3</span><span>2</span></span></b></div><div class=\"worked__math\">(c) <span class=\"frac\"><span>20</span><span>2</span></span>(2 × 3 + 19 × <span class=\"frac\"><span>3</span><span>2</span></span>) = 10 × 34.5 = <b>345</b></div>",
      markscheme: [
        // EN: M1: (a) Writes both conditions: <span class="chem">3 + 2d = 3r</span> and <span class="chem">3 + 6d = 3r^2</span>.
        "M1：(a) 2 つの条件を書く：<span class=\"chem\">3 + 2d = 3r</span> と <span class=\"chem\">3 + 6d = 3r^2</span>。",
        // EN: M1: (a) Eliminates <span class="chem">d</span>, e.g. <span class="chem">d = 3(r - 1)/2</span> substituted into the second equation.
        "M1：(a) <span class=\"chem\">d</span> を消去する。例：<span class=\"chem\">d = 3(r - 1)/2</span> を 2 つ目の方程式に代入する。",
        // EN: A1: (a) <span class="chem">3 + 9(r - 1) = 3r^2</span> or <span class="chem">3r^2 - 9r + 6 = 0</span>, which leads to the given equation (the given line itself earns no mark).
        "A1：(a) <span class=\"chem\">3 + 9(r - 1) = 3r^2</span> または <span class=\"chem\">3r^2 - 9r + 6 = 0</span> から、与えられた方程式を導く（与えられた式そのものには点を与えない）。",
        // EN: M1: (b) Factorizes: <span class="chem">(r - 1)(r - 2) = 0</span>.
        "M1：(b) 因数分解する：<span class=\"chem\">(r - 1)(r - 2) = 0</span>。",
        // EN: R1: (b) Rejects <span class="chem">r = 1</span> because the geometric sequence is not constant.
        "R1：(b) 等比数列は定数列ではないので <span class=\"chem\">r = 1</span> を除外する。",
        // EN: A1: (b) <span class="chem">r = 2</span>.
        "A1：(b) <span class=\"chem\">r = 2</span>。",
        // EN: A1: (b) <span class="chem">d = 3/2</span>.
        "A1：(b) <span class=\"chem\">d = 3/2</span>。",
        // EN: M1: (c) Uses <span class="chem">S_{20} = (20/2)(2 × 3 + 19 × 3/2)</span>.
        "M1：(c) <span class=\"chem\">S_{20} = (20/2)(2 × 3 + 19 × 3/2)</span> を用いる。",
        // EN: A1: (c) 345.
        "A1：(c) 345。",
      ],
    },

    // ── t1-1-q057 · numeric · exam · SL · SL 1.8 · 4 marks
    "t1-1-q057": {
      // EN: <p>Find the exact value of <span class="chem">Σ_{k=2}^{infty} 5(-2/3)^k</span>.</p>
      stem: "<p><span class=\"chem\">Σ_{k=2}^{infty} 5(-2/3)^k</span> の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: The sum starts at <span class="chem">k = 2</span>, so the first term is <span class="chem">5(-2/3)^2 = 20/9</span>, not 5.
        "和は <span class=\"chem\">k = 2</span> から始まるので、初項は 5 ではなく <span class=\"chem\">5(-2/3)^2 = 20/9</span> です。",
        // EN: The common ratio is <span class="chem">-2/3</span>, and <span class="chem">|-2/3| &lt; 1</span>. Use <span class="chem">S_infty = u_1/(1 - r)</span> and take care with <span class="chem">1 - (-2/3)</span>.
        "公比は <span class=\"chem\">-2/3</span> で、<span class=\"chem\">|-2/3| &lt; 1</span> です。<span class=\"chem\">S_infty = u_1/(1 - r)</span> を使い、<span class=\"chem\">1 - (-2/3)</span> の計算に注意しましょう。",
      ],
      // EN: <div class="worked__math">First term (<i>k</i> = 2): 5 × <span class="frac"><span>4</span><span>9</span></span> = <span class="frac"><span>20</span><span>9</span></span> <b>[A1]</b></div><div class="worked__math"><i>r</i> = −<span class="frac"><span>2</span><span>3</span></span>, |<i>r</i>| &lt; 1 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>20/9</span><span>1 + 2/3</span></span> = <span class="frac"><span>20</span><span>9</span></span> × <span class="frac"><span>3</span><span>5</span></span> <b>[M1]</b></div><div class="worked__math">= <b><span class="frac"><span>4</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">初項（<i>k</i> = 2）：5 × <span class=\"frac\"><span>4</span><span>9</span></span> = <span class=\"frac\"><span>20</span><span>9</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>r</i> = −<span class=\"frac\"><span>2</span><span>3</span></span>、|<i>r</i>| &lt; 1   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>20/9</span><span>1 + 2/3</span></span> = <span class=\"frac\"><span>20</span><span>9</span></span> × <span class=\"frac\"><span>3</span><span>5</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <b><span class=\"frac\"><span>4</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q058 · short · exam · SL · SL 1.3, 1.8 · 7 marks
    "t1-1-q058": {
      // EN: <p>Consider the geometric series <span class="chem">Σ_{k=1}^{n} 6(1/2)^k</span>, whose sum is <span class="chem">S_n</span>.</p><p>(a) Find the sum to infinity <span class="chem">S_infty</span> of the series. <strong>[2]</strong><br>(b) Show that <span class="chem">S_infty - S_n = 6(1/2)^n</span>. <strong>[2]</strong><br>(c) Hence find the least value of <span class="chem">n</span> for which <span class="chem">S_infty - S_n &lt; 0.01</span>. <strong>[3]</strong></p>
      stem: "<p>等比級数 <span class=\"chem\">Σ_{k=1}^{n} 6(1/2)^k</span> を考え、その和を <span class=\"chem\">S_n</span> とする。</p><p>(a) この級数の無限和 <span class=\"chem\">S_infty</span> を求めなさい (Find)。 <strong>[2]</strong><br>(b) <span class=\"chem\">S_infty - S_n = 6(1/2)^n</span> であることを示しなさい (Show that)。 <strong>[2]</strong><br>(c) これを用いて、<span class=\"chem\">S_infty - S_n &lt; 0.01</span> となる <span class=\"chem\">n</span> の最小値を求めなさい (Hence find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: The sum starts at <span class="chem">k = 1</span>, so the first term is <span class="chem">6 × 1/2 = 3</span>.
        "和は <span class=\"chem\">k = 1</span> から始まるので、初項は <span class=\"chem\">6 × 1/2 = 3</span> です。",
        // EN: For (b), write <span class="chem">S_n</span> with the finite geometric formula and subtract it from 6.
        "(b) では、有限の等比級数の公式で <span class=\"chem\">S_n</span> を書き、6 から引きます。",
        // EN: For (c) on Paper 1, multiply out: <span class="chem">(1/2)^n &lt; 1/600</span> means <span class="chem">2^n &gt; 600</span>. List powers of 2.
        "Paper 1 の (c) では、式を変形します：<span class=\"chem\">(1/2)^n &lt; 1/600</span> は <span class=\"chem\">2^n &gt; 600</span> を意味します。2 の累乗を書き並べましょう。",
      ],
      // EN: <p><span class="chem">S_infty - S_n</span> is the "tail" of the series, the terms after the <span class="chem">n</span>-th. Here it equals <span class="chem">6(1/2)^n</span>. The condition becomes <span class="chem">2^n &gt; 600</span>. Since <span class="chem">2^9 = 512</span> is too small and <span class="chem">2^{10} = 1024</span> works, the least value is <span class="chem">n = 10</span>.</p>
      solution: "<p><span class=\"chem\">S_infty - S_n</span> は級数の「残りの部分」、つまり第 <span class=\"chem\">n</span> 項より後の項の和です。ここでは <span class=\"chem\">6(1/2)^n</span> に等しくなります。条件は <span class=\"chem\">2^n &gt; 600</span> になります。<span class=\"chem\">2^9 = 512</span> では小さすぎ、<span class=\"chem\">2^{10} = 1024</span> なら満たすので、最小値は <span class=\"chem\">n = 10</span> です。</p>",
      // EN: <div class="worked__math">(a) <i>u</i><sub>1</sub> = 3, <i>r</i> = <span class="frac"><span>1</span><span>2</span></span>: <i>S</i><sub>∞</sub> = <span class="frac"><span>3</span><span>1/2</span></span> = <b>6</b></div><div class="worked__math">(b) <i>S</i><sub><i>n</i></sub> = <span class="frac"><span>3(1 − (1/2)<sup><i>n</i></sup>)</span><span>1/2</span></span> = 6 − 6(1/2)<sup><i>n</i></sup>, so <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = 6(1/2)<sup><i>n</i></sup></div><div class="worked__math">(c) 6(1/2)<sup><i>n</i></sup> &lt; 0.01 ⇔ 2<sup><i>n</i></sup> &gt; 600. Since 2<sup>9</sup> = 512 and 2<sup>10</sup> = 1024, <b><i>n</i> = 10</b></div>
      answer: "<div class=\"worked__math\">(a) <i>u</i><sub>1</sub> = 3、<i>r</i> = <span class=\"frac\"><span>1</span><span>2</span></span>：<i>S</i><sub>∞</sub> = <span class=\"frac\"><span>3</span><span>1/2</span></span> = <b>6</b></div><div class=\"worked__math\">(b) <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span>3(1 − (1/2)<sup><i>n</i></sup>)</span><span>1/2</span></span> = 6 − 6(1/2)<sup><i>n</i></sup>、よって <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = 6(1/2)<sup><i>n</i></sup></div><div class=\"worked__math\">(c) 6(1/2)<sup><i>n</i></sup> &lt; 0.01  ⇔  2<sup><i>n</i></sup> &gt; 600。2<sup>9</sup> = 512、2<sup>10</sup> = 1024 なので、<b><i>n</i> = 10</b></div>",
      markscheme: [
        // EN: A1: (a) Identifies <span class="chem">u_1 = 3</span> and <span class="chem">r = 1/2</span>.
        "A1：(a) <span class=\"chem\">u_1 = 3</span> と <span class=\"chem\">r = 1/2</span> を特定する。",
        // EN: A1: (a) <span class="chem">S_infty = 6</span>.
        "A1：(a) <span class=\"chem\">S_infty = 6</span>。",
        // EN: M1: (b) Uses <span class="chem">S_n = 3(1 - (1/2)^n)/(1 - 1/2)</span>.
        "M1：(b) <span class=\"chem\">S_n = 3(1 - (1/2)^n)/(1 - 1/2)</span> を用いる。",
        // EN: A1: (b) <span class="chem">S_n = 6 - 6(1/2)^n</span>, which leads to the given result (the given line itself earns no mark).
        "A1：(b) <span class=\"chem\">S_n = 6 - 6(1/2)^n</span> から与えられた結果を導く（与えられた式そのものには点を与えない）。",
        // EN: M1: (c) Sets <span class="chem">6(1/2)^n &lt; 0.01</span> and rearranges to <span class="chem">2^n &gt; 600</span>.
        "M1：(c) <span class=\"chem\">6(1/2)^n &lt; 0.01</span> とおき、<span class=\"chem\">2^n &gt; 600</span> に変形する。",
        // EN: A1: (c) Compares powers of 2: <span class="chem">2^9 = 512 &lt; 600 &lt; 1024 = 2^{10}</span>.
        "A1：(c) 2 の累乗を比べる：<span class=\"chem\">2^9 = 512 &lt; 600 &lt; 1024 = 2^{10}</span>。",
        // EN: A1: (c) <span class="chem">n = 10</span>.
        "A1：(c) <span class=\"chem\">n = 10</span>。",
      ],
    },

    // ── t1-1-q059 · numeric · challenge · SL · SL 1.2 · 5 marks
    "t1-1-q059": {
      // EN: <p>Find the sum of all the odd integers between 100 and 500 that are multiples of 7.</p>
      stem: "<p>100 と 500 の間にある奇数のうち、7 の倍数であるものすべての和を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the numbers you want are 7 × (odd number). Consecutive ones differ by 14, not 7, so they form an arithmetic sequence with <span class="chem">d = 14</span>. You need its first term, last term and number of terms.
        "解読：求める数は 7 × (奇数) です。隣り合うものどうしの差は 7 ではなく 14 なので、<span class=\"chem\">d = 14</span> の等差数列をなします。初項、末項、項数が必要です。",
        // EN: The first multiple of 7 above 100 is 105 (odd). The last multiple of 7 below 500 is 497 (odd).
        "100 より大きい最初の 7 の倍数は 105（奇数）です。500 より小さい最後の 7 の倍数は 497（奇数）です。",
        // EN: Number of terms <span class="chem">= (497 - 105)/14 + 1</span>. Then use <span class="chem">S = (N/2)(first + last)</span>.
        "項数 <span class=\"chem\">= (497 - 105)/14 + 1</span>。次に <span class=\"chem\">S = (N/2)(first + last)</span>（初項 + 末項）を使います。",
      ],
      // EN: <p>Decoding: "odd multiples of 7" skip every other multiple of 7, so the common difference is 14.</p><div class="worked__math">Arithmetic sequence 105, 119, 133, …, 497 with <i>d</i> = 14 <b>[R1]</b></div><div class="worked__math">First term 105, last term 497 <b>[A1]</b></div><div class="worked__math"><i>N</i> = <span class="frac"><span>497 − 105</span><span>14</span></span> + 1 = 29 <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>29</span><span>2</span></span>(105 + 497) <b>[M1]</b></div><div class="worked__math">= 29 × 301 = <b>8729</b> <b>[A1]</b></div>
      solution: "<p>解読：「7 の倍数である奇数」は 7 の倍数を 1 つおきにとるので、公差は 14 です。</p><div class=\"worked__math\">等差数列 105, 119, 133, …, 497、<i>d</i> = 14   <b>[R1]</b></div><div class=\"worked__math\">初項 105、末項 497   <b>[A1]</b></div><div class=\"worked__math\"><i>N</i> = <span class=\"frac\"><span>497 − 105</span><span>14</span></span> + 1 = 29   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i> = <span class=\"frac\"><span>29</span><span>2</span></span>(105 + 497)   <b>[M1]</b></div><div class=\"worked__math\">= 29 × 301 = <b>8729</b>   <b>[A1]</b></div>",
    },

  }
});
