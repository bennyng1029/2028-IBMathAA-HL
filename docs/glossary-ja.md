# Analysis Lab 日本語用語集（English → 日本語）

**Analysis Lab — IB Mathematics: Analysis and Approaches HL (May 2028)** を日本語に翻訳する際の**唯一の用語・文体基準**です。

- **読者**：16〜18 歳の高校生（DP1・DP2 生徒）。試験本番は英語で受け、概念理解・解法パターンの整理に日本語オーバーレイを使います。
- **用語基準**：文部科学省 高等学校学習指導要領「数学I」「数学A」「数学II」「数学B」「数学III」「数学C」の検定教科書標準用語、および文部科学省 IB 教育推進コンソーシアムの DP 数学（解析とアプローチ）用語に準拠します。

---

## 1. スタイルガイド（文体・表記規則）

1. **文体**：
   - **です・ます調**。高校生に隣でわかりやすく教える家庭教師のトーンで書きます。
   - 1 文は短く、簡潔に。「〜を行う」より「〜する」、「〜することが可能です」より「〜できます」。
   - 強調には `<strong>` を使い、和文の斜体は使いません（数式変数の `<i>x</i>`、`<i>n</i>` はそのまま維持）。
2. **英語の専門用語・指示用語の併記（試験は英語）**：
   - 重要用語（英語の `<dfn>`）の初出では、必ず `<span class="en-term">(English term)</span>` を添えます：
     `<dfn>等差数列 <span class="en-term">(arithmetic sequence)</span></dfn>`
   - 問題文の指示用語（Command terms）の初出でも英語を括弧で添えます：
     `示しなさい (Show that)`、`これを用いて (Hence)`、`求めなさい (Find)`。
3. **数式・数字・句読点**：
   - 数字・変数・数式・単位はすべて**半角**。和文と半角英数字の間には半角スペースを 1 つ入れます（例：`n = 1 のとき`、`区間 [0, 2π] で`）。
   - 地の文の句読点は全角の「。」「、」「（ ）」「「 」」を使います。
4. **日本の高校数学と IB の慣習の違い（IB を優先し、補足を添える）**：
   - **逆三角関数**：日本の高校ではあまり使わない $\arcsin x, \arccos x, \arctan x$（または $\sin^{-1} x$）を IB AA HL では頻繁に扱います。初出で「$\sin y = x$ の逆関数」と明記します。
   - **自然対数**：日本の高校数学IIIでは自然対数を単に $\log x$ と書くことがありますが、**IB では必ず $\ln x$ と書き、$\log_{10} x$ と明確に区別します**。絶対に $\ln x$ を $\log x$ に書き換えないでください。
   - **有効数字 3 桁（3 s.f.）**：日本の大学入試では無理数や分数（厳密値）のみを答えることが多いですが、IB（特に Paper 2・3）では「厳密値、または有効数字 3 桁（3 s.f.）に丸める」規則が徹底されています。

---

## 2. サイト UI・試験制度・指示用語（Command Terms）

| English | 日本語 | メモ・用法 |
|---|---|---|
| worked example | 例題 | ステップごとの解法解説 |
| question decoder | 問題デコーダー（解法の選択ガイド） | 問題文のフレーズから解法を見抜く表 |
| try it | やってみよう | 数値チェックボックス |
| hint | ヒント | |
| common mistake | よくある間違い | `callout--mistake` |
| exam tip | 試験のポイント | `callout--exam`（英語＋日本語併記） |
| key idea | 重要な考え方 | `callout--key` |
| not needed for IB | IB の範囲外 | `callout--scope`（AI 学習時などの過学習防止） |
| in your formula booklet | 公式集（Formula booklet）に掲載 | `callout--booklet` |
| formula booklet | 公式集（Formula booklet） | |
| graphic display calculator (GDC) | グラフ電卓 (GDC) | Paper 2・Paper 3 で必須 |
| no calculator (Paper 1) | 電卓使用不可 (Paper 1) | |
| mathematical exploration (IA) | 数学的探究 (IA) | 内部評価（Internal Assessment） |
| markscheme | 採点基準（マークスキーム） | M1, A1, R1, N2, AG はそのまま英語表記 |
| method mark (M1) / accuracy mark (A1) / reasoning mark (R1) | 方法点 (M1) / 正確点 (A1) / 論証点 (R1) | |
| answer given (AG) | 答えが問題文に与えられている (AG) | "Show that" 問題で途中式を飛ばすと 0 点 |
| significant figures (3 s.f.) | 有効数字（有効数字 3 桁） | |
| decimal places (2 d.p.) | 小数第 n 位（小数第 2 位まで） | |
| exact value | 厳密値（正確な値） | $\frac{\sqrt{3}}{2}$, $\ln 5$, $2\pi$ など |
| **Write down** / **State** | **書きなさい / 述べなさい (Write down / State)** | 計算過程はほぼ不要 |
| **Find** | **求めなさい (Find)** | 途中の式を示して答えを求める |
| **Determine** | **決定しなさい / 求めなさい (Determine)** | 可能な唯一の答えを導く |
| **Calculate** | **計算しなさい (Calculate)** | 途中の計算を示して数値を出す |
| **Show that** | **示しなさい (Show that)** | 与えられた結論を逆算せずに導く |
| **Prove** | **証明しなさい (Prove)** | 論理的な手順で証明する |
| **Verify** | **確かめなさい (Verify)** | 代入などによって成り立つことを確かめる |
| **Hence** | **これを用いて (Hence)** | 直前の結果を必ず使って解く |
| **Hence, or otherwise** | **これを用いて、または他の方法で (Hence, or otherwise)** | 直前の結果を使うのが最も速い |
| **Sketch** | **概形を描きなさい (Sketch)** | 軸との交点・極値・漸近線などを明示したグラフ |
| **Draw** | **描きなさい (Draw)** | 目盛りや定規を用いた正確な図・グラフ |
| **Deduce** | **導きなさい (Deduce)** | 与えられた情報から結論を引き出す |
| **Justify** | **理由を示しなさい (Justify)** | 数学的な根拠を明記する |
| **Interpret** | **解釈しなさい (Interpret)** | 問題の文脈に照らして意味を説明する |

---

## 3. Topic 1: Number and Algebra（数と式・数列・複素数平面・証明）

| English | 日本語（高校数学標準） | メモ |
|---|---|---|
| standard form / scientific notation | 指数表記（科学表記） | $a \times 10^k \ (1 \le a < 10, k \in \mathbb{Z})$ |
| sequence / series | 数列 / 級数 | |
| general term / $n$-th term ($u_n$) | 一般項 / 第 $n$ 項 | |
| arithmetic sequence / arithmetic series | 等差数列 / 等差級数 | |
| common difference ($d$) | 公差 | |
| geometric sequence / geometric series | 等比数列 / 等比級数 | |
| common ratio ($r$) | 公比 | |
| sum of the first $n$ terms ($S_n$) | 初項から第 $n$ 項までの和 | |
| sum to infinity ($S_\infty$) / infinite geometric series | 無限等比級数の和 ($S_\infty$) | 収束条件：$|r| < 1$ |
| converge (convergent) / diverge (divergent) | 収束する / 発散する | |
| sigma notation ($\Sigma$) | シグマ記号 ($\Sigma$) | |
| compound interest / depreciation | 複利 / 減価償却（価値の減少） | 現在価値 ($PV$)、将来価値 ($FV$) |
| exponent (index) / laws of exponents | 指数 / 指数法則 | 累乗根 ($\sqrt[n]{a}$) |
| logarithm / laws of logarithms | 対数 / 対数の性質 | 底（base）、真数条件（argument $> 0$） |
| natural logarithm ($\ln x$) / common logarithm ($\log_{10} x$) | 自然対数 ($\ln x$) / 常用対数 ($\log_{10} x$) | IB では自然対数は必ず $\ln x$ |
| change of base formula | 底の変換公式 | $\log_a x = \frac{\log_b x}{\log_b a}$ |
| factorial ($n!$) | 階乗 ($n!$) | |
| binomial theorem / binomial expansion | 二項定理 / 二項展開 | |
| Pascal's triangle | パスカルの三角形 | |
| binomial coefficient | 二項係数 | $\binom{n}{r} = {}^n\text{C}_r$ |
| constant term / term independent of $x$ | 定数項 / $x$ を含まない項 | |
| counting principles | 場合の数（積の法則・和の法則） | |
| permutation (${}^n\text{P}_r$) | 順列 (${}^n\text{P}_r$) | 順序を区別する並び方 |
| combination (${}^n\text{C}_r$) | 組合せ (${}^n\text{C}_r$) | 順序を区別しない選び方 |
| partial fractions | 部分分数分解 | |
| complex number ($z = a + bi$) | 複素数 ($z = a + bi$) | 実部 $\operatorname{Re}(z)$、虚部 $\operatorname{Im}(z)$、純虚数 (purely imaginary) |
| Cartesian form | 直交座標形式（$a + bi$ の形） | |
| complex conjugate ($z^*$) | 共役な複素数 ($z^*$) | 共役複素数根の定理 (conjugate root theorem) |
| Argand diagram (complex plane) | 複素数平面（アルガン図） | 実軸 (real axis)、虚軸 (imaginary axis) |
| modulus ($|z| = r$) / argument ($\arg(z) = \theta$) | 絶対値 ($|z| = r$) / 偏角 ($\arg(z) = \theta$) | |
| modulus-argument form / polar form | 極形式 | $r(\cos\theta + i\sin\theta) = r\operatorname{cis}\theta$ |
| Euler form / exponential form | オイラー形式（指数形式） | $re^{i\theta}$ |
| De Moivre's theorem | ド・モアブルの定理 | |
| $n$-th roots of unity | $1$ の $n$ 乗根 | 複素数平面上で正 $n$ 角形の頂点をなす |
| deductive proof / identity | 演繹的証明 / 恒等式 | 左辺 (LHS)、右辺 (RHS) |
| mathematical induction | 数学的帰納法 | 基底段階 ($n=1$)、帰納法の仮定 ($n=k$) |
| proof by contradiction | 背理法 | 互いに素 (coprime) |
| counterexample | 反例 | |
| system of linear equations | 連立一次方程式 | 拡大係数行列 (augmented matrix)、行基本変形・ガウスの消去法 (Gaussian elimination) |
| unique solution / no solution / infinitely many solutions | ただ 1 組の解（一意解） / 解なし（不能） / 無数の解（不定） | |

---

## 4. Topic 2: Functions（関数とグラフ）

| English | 日本語（高校数学標準） | メモ |
|---|---|---|
| gradient (slope) | 傾き | |
| $x$-intercept / $y$-intercept | $x$ 切片 / $y$ 切片 | 軸との交点 (axial intercepts) |
| parallel / perpendicular lines | 平行な直線 / 垂直な直線 | 垂直二等分線 (perpendicular bisector) |
| function | 関数 | |
| domain / range | 定義域 / 値域 | 最大定義域 (natural domain) |
| one-to-one / many-to-one | 1 対 1 の関数 / 多対 1 の関数 | 水平線テスト (horizontal line test) |
| composite function ($(f \circ g)(x)$) | 合成関数 ($(f \circ g)(x)$) | |
| inverse function ($f^{-1}(x)$) | 逆関数 ($f^{-1}(x)$) | 直線 $y = x$ に関する対称移動 |
| identity function | 恒等関数 | |
| quadratic function / parabola | 二次関数 / 放物線 | |
| vertex / axis of symmetry | 頂点 / 軸（対称軸） | |
| completing the square | 平方完成 | $a(x - h)^2 + k$ |
| discriminant ($\Delta = b^2 - 4ac$) | 判別式 ($\Delta = b^2 - 4ac$) | 異なる 2 つの実数解 ($\Delta > 0$)、重解 ($\Delta = 0$)、実数解なし ($\Delta < 0$) |
| reciprocal function / rational function | 分数関数 / 有理関数 | |
| asymptote | 漸近線 | 垂直漸近線 (vertical)、水平漸近線 (horizontal)、斜漸近線 (oblique / slant) |
| exponential function / logarithmic function | 指数関数 / 対数関数 | 指数的増加 (exponential growth)、指数的減少 (exponential decay) |
| transformation of graphs | グラフの変換（移動・拡大縮小） | |
| translation / reflection / stretch | 平行移動 / 対称移動 / 拡大・縮小 | |
| polynomial / degree / leading coefficient | 多項式（整式） / 次数 / 最高次の係数 | 商 (quotient)、余り (remainder) |
| remainder theorem / factor theorem | 剰余の定理 / 因数定理 | |
| sum and product of roots (Vieta's formulas) | 解と係数の関係 | |
| even function / odd function | 偶関数 / 奇関数 | $y$ 軸対称 / 原点対称 |
| modulus function / absolute value ($\|x\|$) | 絶対値関数 ($\|x\|$) | |

---

## 5. Topic 3: Geometry and Trigonometry（図形と計量・三角関数・空間ベクトル）

| English | 日本語（高校数学標準） | メモ |
|---|---|---|
| midpoint / distance between two points | 中点 / 2 点間の距離 | |
| right pyramid / right cone / sphere / hemisphere | 直角錐 / 直円錐 / 球 / 半球 | 母線の長さ (slant height)、表面積 (surface area)、体積 (volume) |
| angle between a line and a plane / between two planes | 直線と平面のなす角 / 2 平面のなす角 | 正射影 (orthogonal projection) |
| sine rule / ambiguous case | 正弦定理 / 三角形の決定（2 通りある場合） | |
| cosine rule | 余弦定理 | |
| angle of elevation / angle of depression | 仰角 / 俯角 | |
| bearing (true bearing) | 方位角 | 北から時計回りに測った角度 ($000^\circ\text{〜}360^\circ$) |
| radian ($\text{rad}$) / radian measure | ラジアン ($\text{rad}$) / 弧度法 | |
| arc length ($l = r\theta$) / area of a sector ($A = \frac{1}{2}r^2\theta$) | 弧の長さ / 扇形の面積 | 弦 (chord)、弓形 (segment) |
| unit circle / quadrant | 単位円 / 象限（第 1〜第 4 象限） | |
| trigonometric identity | 三角関数の相互関係（三角恒等式） | $\cos^2\theta + \sin^2\theta = 1$ |
| double-angle identities | 2 倍角の公式 | |
| compound-angle identities (addition theorems) | 加法定理 | $\sin(A \pm B), \cos(A \pm B), \tan(A \pm B)$ |
| reciprocal trigonometric functions ($\sec, \operatorname{cosec}, \cot$) | 正割 ($\sec$)・余割 ($\operatorname{cosec}$)・余接 ($\cot$) | |
| inverse trigonometric functions ($\arcsin, \arccos, \arctan$) | 逆三角関数 ($\arcsin, \arccos, \arctan$) | 主値 (principal value) |
| periodic function | 周期関数 | 振幅 (amplitude)、周期 (period)、中心軸 (principal axis)、位相のずれ (phase shift) |
| vector / scalar | ベクトル / スカラー（実数） | |
| position vector / displacement vector | 位置ベクトル / 変位ベクトル | |
| magnitude of a vector ($|\mathbf{v}|$) / unit vector ($\hat{\mathbf{v}}$) | ベクトルの大きさ ($|\mathbf{v}|$) / 単位ベクトル ($\hat{\mathbf{v}}$) | 基本ベクトル $\mathbf{i}, \mathbf{j}, \mathbf{k}$ |
| collinear / coplanar | 一直線上にある（共線） / 同一平面上にある（共面） | |
| scalar product / dot product ($\mathbf{v}\cdot\mathbf{w}$) | 内積（スカラー積, $\mathbf{v}\cdot\mathbf{w}$） | 垂直条件：$\mathbf{v}\cdot\mathbf{w} = 0$ |
| vector product / cross product ($\mathbf{v}\times\mathbf{w}$) | 外積（ベクトル積, $\mathbf{v}\times\mathbf{w}$） | $\mathbf{v}$ と $\mathbf{w}$ の両方に垂直なベクトル |
| vector equation of a line ($\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$) | 直線のベクトル方程式 | 方向ベクトル (direction vector)、媒介変数表示 (parametric form) |
| coincident / parallel / intersecting / skew lines | 一致する / 平行 / 交わる / ねじれの位置にある直線 | |
| normal vector ($\mathbf{n}$) / equation of a plane | 法線ベクトル ($\mathbf{n}$) / 平面の方程式 | 垂線の足 (foot of perpendicular) |

---

## 6. Topic 4: Statistics and Probability（データの分析・確率分布）

| English | 日本語（高校数学標準） | メモ |
|---|---|---|
| population / sample / random sample | 母集団 / 標本 / 無作為標本 | 標本の偏り (sampling bias) |
| discrete data / continuous data | 離散データ / 連続データ | |
| frequency table / histogram | 度数分布表 / ヒストグラム | 累積度数曲線 (cumulative frequency curve) |
| mean ($\bar{x}, \mu$) / median / mode | 平均値 / 中央値（メジアン） / 最頻値（モード） | 階級値 (mid-interval value) |
| quartile ($Q_1, Q_3$) / interquartile range ($\text{IQR}$) | 四分位数（第 1 四分位数 $Q_1$、第 3 四分位数 $Q_3$） / 四分位範囲 ($\text{IQR}$) | 範囲 (range) |
| box-and-whisker diagram (box plot) | 箱ひげ図 | 外れ値 (outlier) |
| variance ($\sigma^2, \operatorname{Var}(X)$) / standard deviation ($\sigma$) | 分散 ($\sigma^2, \operatorname{Var}(X)$) / 標準偏差 ($\sigma$) | |
| scatter diagram / correlation coefficient ($r$) | 散布図 / 相関係数 ($r$) | 正の相関・負の相関 |
| regression line of $y$ on $x$ / $x$ on $y$ | $y$ の $x$ への回帰直線 / $x$ の $y$ への回帰直線 | 内挿 (interpolation)、外挿 (extrapolation) |
| trial / outcome / sample space ($U$) / event | 試行 / 結果 / 標本空間（全事象 $U$） / 事象 | 余事象 ($A'$, complementary event) |
| Venn diagram / tree diagram | ベン図 / 樹形図 | |
| mutually exclusive events / independent events | 排反事象 / 独立な事象 | |
| conditional probability ($P(A \mid B)$) | 条件付き確率 ($P(A \mid B)$) | |
| Bayes' theorem | ベイズの定理 | |
| discrete random variable | 離散型確率変数 | 確率分布 (probability distribution) |
| expected value / expectation ($E(X)$) | 期待値（平均, $E(X)$） | 公平なゲーム (fair game, $E = 0$) |
| binomial distribution ($\text{B}(n, p)$) | 二項分布 ($\text{B}(n, p)$) | 反復試行の確率 |
| normal distribution ($\text{N}(\mu, \sigma^2)$) | 正規分布 ($\text{N}(\mu, \sigma^2)$) | 標準正規分布 ($\text{N}(0, 1)$)、標準化 ($z = \frac{x-\mu}{\sigma}$) |
| continuous random variable / probability density function (PDF) | 連続型確率変数 / 確率密度関数 (PDF) | |

---

## 7. Topic 5: Calculus（微分法・積分法・微分方程式・級数展開）

| English | 日本語（高校数学標準） | メモ |
|---|---|---|
| limit ($\lim_{x\to a} f(x)$) / continuity / differentiability | 極限 / 連続性 / 微分可能性 | |
| differentiation from first principles | 定義に従った微分（微分の定義からの導出） | $f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$ |
| derivative ($f'(x), \frac{dy}{dx}$) / second derivative ($f''(x)$) | 導関数（微分係数） / 第 2 次導関数 | 第 $n$ 次導関数 ($n$-th derivative) |
| tangent / normal (to a curve) | 接線 / 法線 | |
| increasing / decreasing function | 増加関数 / 減少関数 | 増減表 (sign diagram) |
| chain rule / product rule / quotient rule | 合成関数の微分法（連鎖律） / 積の微分法 / 商の微分法 | |
| stationary point | 停留点（$f'(x) = 0$ となる点） | |
| local maximum / local minimum | 極大（極大値） / 極小（極小値） | 極値 (local extrema)、最大値・最小値 (global maximum/minimum) |
| concavity (concave up / concave down) | 凹凸（下に凸 / 上に凸） | ※英語の concave up = 下に凸 ($f'' > 0$)、concave down = 上に凸 ($f'' < 0$) に注意！ |
| point of inflexion (inflection) | 変曲点 | $f''(x) = 0$ かつ前後で $f''(x)$ の符号が変わる点 |
| optimization | 最大・最小問題（最適化） | |
| L'Hôpital's rule / indeterminate form | ロピタルの定理 / 不定形 ($\frac{0}{0}, \frac{\infty}{\infty}$) | |
| implicit differentiation / related rates | 陰関数の微分法 / 関連変化率（時間変化率） | |
| anti-differentiation / indefinite integral / definite integral | 原始関数 / 不定積分 / 定積分 | 積分定数 ($+C$)、初期条件・境界条件 (initial / boundary condition) |
| integration by substitution / integration by parts | 置換積分法 / 部分積分法 | |
| area between two curves / volume of revolution | 2 曲線間の面積 / 回転体の体積 | $x$ 軸の周りの回転 ($V = \pi\int y^2\,dx$)、$y$ 軸の周りの回転 ($V = \pi\int x^2\,dy$) |
| kinematics | 運動（位置・速度・加速度） | 変位 (displacement $s$)、速度 (velocity $v$)、速さ (speed $|v|$)、加速度 (acceleration $a$)、道のり・総移動距離 (total distance $\int |v|\,dt$) |
| differential equation (DE) | 微分方程式 | 1 階微分方程式、一般解 (general solution)、特殊解 (particular solution) |
| Euler's method | オイラー法 | 刻み幅 (step length $h$) |
| separable differential equation | 変数分離形の微分方程式 | 変数分離法 |
| homogeneous differential equation ($y = vx$) | 同次形の微分方程式 ($y = vx$) | |
| integrating factor ($e^{\int P(x)\,dx}$) | 積分因子 ($e^{\int P(x)\,dx}$) | 1 階線形微分方程式 |
| Maclaurin series | マクローリン級数（マクローリン展開） | |
