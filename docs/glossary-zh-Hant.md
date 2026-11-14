# Analysis Lab 英漢詞彙表：繁體中文（香港）

**English → Traditional Chinese (Hong Kong)** glossary for **Analysis Lab — IB Mathematics: Analysis and Approaches HL (May 2028)**.
Translators: always use the exact Hong Kong term listed in the **中文（香港）** column.

---

## 0. Terminology Authority & Verification Sources

| Code | Source | Notes |
|---|---|---|
| **EDB** | 香港教育局課程發展處數學教育組《中學數學科常用英漢辭彙》（*An English-Chinese Glossary of Terms Commonly Used in the Teaching of Mathematics in Secondary Schools*, Education Bureau, HKSAR） | Primary statutory authority for Hong Kong secondary school mathematics terminology. |
| **DSE** | 《數學課程及評估指引（中四至中六）》（必修部分、延伸部分單元一 M1 微積分與統計、延伸部分單元二 M2 代數與微積分），香港考試及評核局 (HKEAA) | Reflects actual classroom and exam wording used by Hong Kong secondary students. |
| **IB** | IB DP Mathematics: Analysis and Approaches assessment conventions | Used for IB-specific terms (e.g., Paper 1/2/3, GDC, markscheme codes M1/A1/R1/AG, Mathematical Exploration IA). |

---

## 1. Style Guide for Hong Kong Traditional Chinese (`zh-Hant`)

1. **Register**:
   - Plain, warm, direct **standard written Chinese (書面語)**, written like a clear Hong Kong secondary-school mathematics tutor's notes.
   - **Never use Cantonese colloquial characters**: no 嘅、咗、唔、係（＝是）、喺、啲、睇、搵、冇、俾.
   - **Use Hong Kong vocabulary & character forms, not Mainland or Taiwan variants**:
     - Use **數列** (sequence), **等差數列** (arithmetic sequence), **等比數列** (geometric sequence), **科學記數法** (scientific notation / standard form, not TW 科學記號), **有效數字** (significant figures), **數據** (data, not TW 資料), **標準差** (standard deviation), **四分位數間距** (interquartile range, not 四分位距), **正態分佈** or **常態分佈** (normal distribution; EDB lists both, with 正態分佈 primary in HKDSE M1), **迴歸線** (regression line), **概率** (probability; HKDSE uses 概率), **隨機變數** or **隨機變量** (random variable; EDB lists both), **導數** (derivative), **鏈式法則** (chain rule), **轉向點** / **駐點** (turning point / stationary point), **拐點** (point of inflexion, not 反曲點), **分部積分法** (integration by parts), **圖像顯示計算機 (GDC)** (graphic display calculator).
     - Hong Kong character forms: **裏** (not 裡), **着** (not 著 in 沿着/隨着), **甚麼** (not 什麼), **線** (not 綫), **週期** (period).
2. **Keeping English Exam Terms Visible**:
   - At every `<dfn>`, keep the English term inside `<span class="en-term">(English term)</span>`:
     `<dfn>等差數列 <span class="en-term">(arithmetic sequence)</span></dfn>`.
   - At the first appearance of an IB command term in a question stem, include the English in brackets:
     `證明 (Show that)`, `由此 (Hence)`, `求 (Find)`, `寫出 (Write down)`.
3. **Punctuation & Spacing**:
   - Full-width punctuation in Chinese prose: `，。、；：？！（）「」`.
   - Half-width spaces around Latin letters, variables, and numbers: `當 n = 1 時`, `在區間 [0, 2π] 內`.

---

## 2. Site UI, Assessment & IB Command Terms

| English | 中文（香港） | Notes / Usage | Source |
|---|---|---|---|
| worked example | 例題 | Not 範例 (TW). | DSE |
| question decoder | 題型解碼 | Translating exam trigger phrases into methods. | IB |
| try it | 試一試 | Interactive calculation box. | IB |
| hint | 提示 | | IB |
| common mistake | 常見錯誤 | `callout--mistake` | IB |
| exam tip | 考試提示 | `callout--exam` (shown in EN + ZH) | IB |
| key idea | 重點概念 | `callout--key` | IB |
| not needed for IB | IB 不要求 | `callout--scope` (out-of-syllabus guardrail) | IB |
| in your formula booklet | 公式手冊已提供 | `callout--booklet` | IB |
| formula booklet | 公式手冊 | IB AA Formula Booklet. | IB |
| graphic display calculator (GDC) | 圖像顯示計算機 (GDC) | Paper 2 & Paper 3. | EDB / IB |
| no calculator (Paper 1) | 不准使用計算機 (Paper 1) | | IB |
| mathematical exploration (IA) | 數學探索 (IA) | Internal Assessment. | IB |
| markscheme | 評分準則 | Keep M1, A1, R1, N2, AG codes in English. | IB |
| method mark (M1) | 方法分 (M1) | | IB |
| accuracy mark (A1) | 準確分 (A1) | | IB |
| reasoning mark (R1) | 推理分 (R1) | | IB |
| answer given (AG) | 題目已給出答案 (AG) | Used in "Show that" questions. | IB |
| significant figures (3 s.f.) | 有效數字（3 位有效數字） | | EDB |
| decimal places (2 d.p.) | 小數位（小數點後 2 位） | | EDB |
| exact value | 準確值 | Not 精確值; HKDSE uses 準確值. | EDB / DSE |
| **Write down** / **State** | **寫出 (Write down / State)** | Little or no calculation required. | IB / DSE |
| **Find** | **求 (Find)** | Obtain an answer showing relevant stages. | IB / DSE |
| **Determine** | **求出 / 確定 (Determine)** | Obtain the only possible answer. | IB / DSE |
| **Calculate** | **計算 (Calculate)** | Obtain a numerical answer showing working. | IB / DSE |
| **Show that** | **證明 (Show that)** | Obtain the required result without working backwards. | IB / DSE |
| **Prove** | **證明 (Prove)** | Use a sequence of logical steps to obtain the result. | IB / DSE |
| **Verify** | **驗證 (Verify)** | Provide evidence that a result is true. | IB / DSE |
| **Hence** | **由此 (Hence)** | Must use the preceding result. | IB / DSE |
| **Hence, or otherwise** | **由此，或用其他方法 (Hence, or otherwise)** | Preceding result is recommended, though other methods are accepted. | IB / DSE |
| **Sketch** | **描繪略圖 (Sketch)** | Represent by a diagram or graph showing key features. | IB / DSE |
| **Draw** | **繪畫 (Draw)** | Represent by an accurate, labelled diagram or graph. | IB / DSE |
| **Deduce** | **推斷 (Deduce)** | Reach a conclusion from the information given. | IB / DSE |
| **Justify** | **提出理據 (Justify)** | Give valid reasons or evidence to support a conclusion. | IB / DSE |
| **Interpret** | **闡釋 / 解讀 (Interpret)** | Translate mathematical results into the context of the problem. | IB / DSE |

---

## 3. Topic 1: Number and Algebra（數與代數）

| English | 中文（香港） | Notes | Source |
|---|---|---|---|
| standard form / scientific notation | 科學記數法 | $a \times 10^k$, where $1 \le a < 10, k \in \mathbb{Z}$. | EDB |
| sequence | 數列 | | EDB |
| series | 級數 | | EDB |
| general term / $n$-th term ($u_n$) | 通項 / 第 $n$ 項 | | EDB |
| arithmetic sequence | 等差數列 | | EDB |
| arithmetic series | 等差級數 | | EDB |
| common difference ($d$) | 公差 | | EDB |
| geometric sequence | 等比數列 | | EDB |
| geometric series | 等比級數 | | EDB |
| common ratio ($r$) | 公比 | | EDB |
| sum of the first $n$ terms ($S_n$) | 首 $n$ 項之和 | HKDSE uses 首 $n$ 項之和. | EDB / DSE |
| sum to infinity ($S_\infty$) | 無限項之和 | | EDB / DSE |
| converge / convergent | 收斂 | $|r| < 1$. | EDB |
| diverge / divergent | 發散 | | EDB |
| sigma notation ($\Sigma$) | 求和記號 ($\Sigma$) | | EDB |
| compound interest | 複利息 | HKDSE writes 複利息. | EDB / DSE |
| present value ($PV$) / future value ($FV$) | 現值 ($PV$) / 未來值（本利和, $FV$） | | EDB |
| nominal annual interest rate | 名義年利率 | | EDB |
| compounding period | 計算複利期 | | EDB |
| depreciation | 折舊 | | EDB |
| exponent / index (plural: indices) | 指數 | | EDB |
| laws of indices / laws of exponents | 指數定律 | | EDB |
| surd / radical | 根式 | Rationalize the denominator = 有理化分母. | EDB |
| logarithm | 對數 | | EDB |
| natural logarithm ($\ln x$) | 自然對數 ($\ln x$) | | EDB |
| common logarithm ($\log_{10} x$) | 常用對數 ($\log_{10} x$) | | EDB |
| change of base formula | 換底公式 | | EDB |
| factorial ($n!$) | 階乘 ($n!$) | | EDB |
| binomial theorem | 二項式定理 | | EDB |
| binomial expansion | 二項式展開式 | | EDB |
| Pascal's triangle | 帕斯卡三角形（楊輝三角） | EDB lists both; 帕斯卡三角形 is standard in HKDSE M2. | EDB / DSE |
| binomial coefficient | 二項式係數 | Note: EDB Mathematics uses 係數 (coefficient). | EDB |
| constant term / term independent of $x$ | 常數項 / 與 $x$ 無關的項 | | EDB / DSE |
| counting principles | 計數原理 | Multiplication principle = 乘法法則; Addition principle = 加法法則. | EDB / DSE |
| permutation (${}^n\text{P}_r$) | 排列 (${}^n\text{P}_r$) | Order matters. | EDB |
| combination (${}^n\text{C}_r$) | 組合 (${}^n\text{C}_r$) | Order does not matter. | EDB |
| partial fractions | 部分分式 | Decomposition into partial fractions = 部分分式分解. | EDB |
| complex number ($z = a + bi$) | 複數 ($z = a + bi$) | | EDB |
| real part ($\operatorname{Re}(z)$) / imaginary part ($\operatorname{Im}(z)$) | 實部 ($\operatorname{Re}(z)$) / 虛部 ($\operatorname{Im}(z)$) | Purely imaginary = 純虛數. | EDB |
| Cartesian form | 笛卡兒形式（直角坐標形式） | | EDB |
| complex conjugate ($z^*$) | 共軛複數 ($z^*$) | Conjugate root theorem = 共軛根定理. | EDB |
| Argand diagram (complex plane) | 阿根圖（複平面） | EDB: 阿根圖. | EDB |
| modulus ($|z| = r$) | 模 ($|z| = r$) | | EDB |
| argument ($\arg(z) = \theta$) | 幅角 ($\arg(z) = \theta$) | Principal argument = 主幅角. | EDB |
| modulus-argument form / polar form | 模－幅角形式 / 極坐標形式 | $r(\cos\theta + i\sin\theta) = r\operatorname{cis}\theta$. | EDB |
| Euler form / exponential form | 歐拉形式 / 指數形式 | $re^{i\theta}$. | EDB |
| De Moivre's theorem | 棣美弗定理 | EDB & HKDSE M2: 棣美弗定理. | EDB / DSE |
| $n$-th roots of unity | 單位的 $n$ 次根 | | EDB |
| deductive proof | 演繹證明 | | EDB |
| identity ($\equiv$) | 恒等式 | Left-hand side (LHS) = 左方; Right-hand side (RHS) = 右方. | EDB |
| mathematical induction | 數學歸納法 | Base step = 基本步驟; Inductive hypothesis = 歸納假設. | EDB / DSE |
| proof by contradiction | 反證法（歸謬法） | EDB: 反證法，歸謬法. | EDB |
| counterexample | 反例 | | EDB |
| system of linear equations | 線性方程組 | | EDB / DSE |
| augmented matrix | 增廣矩陣 | Row reduction / Gaussian elimination = 高斯消元法. | EDB / DSE |
| unique solution / no solution / infinitely many solutions | 唯一解 / 無解 / 無限多解 | Consistent = 相容; Inconsistent = 不相容. | EDB / DSE |

---

## 4. Topic 2: Functions（函數）

| English | 中文（香港） | Notes | Source |
|---|---|---|---|
| gradient (slope) | 斜率 | | EDB |
| $x$-intercept / $y$-intercept | $x$ 截距 / $y$ 截距 | Axial intercepts = 坐標軸截距. | EDB |
| parallel lines / perpendicular lines | 平行線 / 垂直線 | Perpendicular bisector = 垂直平分線. | EDB |
| function | 函數 | | EDB |
| domain / range | 定義域 / 值域 | Natural domain = 自然定義域. | EDB |
| mapping ($f: x \mapsto y$) | 映射 | | EDB |
| one-to-one / many-to-one | 一對一 / 多對一 | Vertical line test = 垂直線測試; Horizontal line test = 水平線測試. | EDB |
| composite function ($(f \circ g)(x)$) | 複合函數 ($(f \circ g)(x)$) | EDB: 複合函數 (avoid TW 合成函數). | EDB |
| inverse function ($f^{-1}(x)$) | 反函數 ($f^{-1}(x)$) | Self-inverse = 自反函數. | EDB |
| identity function | 恒等函數 | | EDB |
| reflection in the line $y = x$ | 沿直線 $y = x$ 反射 | | EDB |
| quadratic function / quadratic equation | 二次函數 / 二次方程 | Parabola = 拋物線. | EDB |
| vertex / turning point | 頂點 / 轉向點 | Vertex form $a(x - h)^2 + k$ = 頂點形式. | EDB / DSE |
| axis of symmetry | 對稱軸 | | EDB |
| completing the square | 配方法 | | EDB |
| discriminant ($\Delta = b^2 - 4ac$) | 判別式 ($\Delta = b^2 - 4ac$) | Two distinct real roots = 兩個相異實根; Equal / repeated roots = 等根 / 重根; No real roots = 無實根. | EDB / DSE |
| reciprocal function | 倒數函數 | | EDB |
| rational function | 有理函數 | | EDB |
| asymptote | 漸近線 | Vertical asymptote = 垂直漸近線; Horizontal asymptote = 水平漸近線; Oblique / slant asymptote = 斜漸近線. | EDB / DSE |
| exponential growth / exponential decay | 指數增長 / 指數衰減 | | EDB |
| transformation of graphs | 圖像變換 | | EDB / DSE |
| translation | 平移 | Translation vector $\binom{a}{b}$ = 平移向量. | EDB |
| reflection | 反射 | Reflection in the $x$-axis / $y$-axis = 沿 $x$ 軸 / $y$ 軸反射. | EDB |
| stretch / dilation | 伸縮（拉伸） | Scale factor = 比例因子（放大率）. | EDB |
| polynomial | 多項式 | Degree = 次數; Leading coefficient = 首項係數. | EDB |
| polynomial long division | 多項式長除法 | Quotient = 商式; Remainder = 餘式 / 餘數. | EDB |
| remainder theorem | 餘式定理 | | EDB / DSE |
| factor theorem | 因式定理 | | EDB / DSE |
| sum and product of roots (Vieta's formulas) | 根的和與積（韋達定理） | | EDB |
| even function / odd function | 偶函數 / 奇函數 | | EDB / DSE |
| modulus function / absolute value ($\|x\|$) | 模函數 / 絕對值函數 ($\|x\|$) | | EDB |
| sign diagram | 正負號圖 | | IB |

---

## 5. Topic 3: Geometry and Trigonometry（幾何與三角學）

| English | 中文（香港） | Notes | Source |
|---|---|---|---|
| midpoint | 中點 | | EDB |
| distance formula | 距離公式 | | EDB |
| right pyramid / right cone / sphere / hemisphere | 直立角錐體 / 直立圓錐體 / 球體 / 半球體 | Slant height = 斜高; Total surface area = 總表面面積. | EDB |
| angle between a line and a plane | 直線與平面的交角 | Orthogonal projection = 正射影（投影）. | EDB / DSE |
| angle between two planes | 兩平面的交角 | | EDB / DSE |
| sine rule | 正弦定律（正弦公式） | HKDSE uses 正弦公式 / 正弦定律. | EDB / DSE |
| ambiguous case (of the sine rule) | 兩義情況（模糊情況） | SSA triangle yielding acute and obtuse solutions. | EDB |
| cosine rule | 餘弦定律（餘弦公式） | | EDB / DSE |
| angle of elevation / angle of depression | 仰角 / 俯角 | | EDB |
| bearing (true bearing) | 方位角（真方位角） | Measured clockwise from North ($000^\circ$ to $360^\circ$). | EDB |
| radian ($\text{rad}$) | 弧度 ($\text{rad}$) | Radian measure = 弧度法. | EDB / DSE |
| arc length ($l = r\theta$) | 弧長 ($l = r\theta$) | | EDB |
| sector / area of a sector | 扇形 / 扇形面積 | Minor sector = 劣扇形; Major sector = 優扇形. | EDB |
| segment (of a circle) / chord | 弓形 / 弦 | | EDB |
| unit circle | 單位圓 | Quadrant = 象限. | EDB |
| trigonometric identity | 三角恒等式 | Pythagorean identity $\cos^2\theta + \sin^2\theta = 1$. | EDB |
| double-angle identities (formulae) | 二倍角公式 | | EDB / DSE |
| compound-angle identities (formulae) | 複角公式（和差公式） | HKDSE M2: 複角公式. | EDB / DSE |
| reciprocal trigonometric functions ($\sec, \operatorname{cosec}, \cot$) | 倒數三角函數（正割 $\sec$、餘割 $\operatorname{cosec}$、餘切 $\cot$） | | EDB |
| inverse trigonometric functions ($\arcsin, \arccos, \arctan$) | 反三角函數（反正弦 $\arcsin$、反餘弦 $\arccos$、反正切 $\arctan$） | | EDB |
| periodic function | 週期函數 | Amplitude = 振幅; Period = 週期; Principal axis = 主軸; Phase shift = 相移. | EDB |
| vector / scalar | 向量（矢量） / 純量（標量） | HKDSE M2 uses 向量 and 純量. | EDB / DSE |
| position vector / displacement vector | 位置向量 / 位移向量 | | EDB / DSE |
| magnitude (length) of a vector ($|\mathbf{v}|$) | 向量的模（長度, $|\mathbf{v}|$） | | EDB / DSE |
| unit vector ($\hat{\mathbf{v}}$) | 單位向量 ($\hat{\mathbf{v}}$) | Base vectors $\mathbf{i}, \mathbf{j}, \mathbf{k}$ = 基本單位向量. | EDB / DSE |
| collinear / parallel vectors | 共線 / 平行向量 | Coplanar = 共面. | EDB / DSE |
| scalar product / dot product ($\mathbf{v}\cdot\mathbf{w}$) | 純量積 / 點積 ($\mathbf{v}\cdot\mathbf{w}$) | HKDSE M2: 點積（純量積）. | EDB / DSE |
| orthogonal / perpendicular vectors | 正交 / 垂直向量 | $\mathbf{v}\cdot\mathbf{w} = 0$. | EDB / DSE |
| vector product / cross product ($\mathbf{v}\times\mathbf{w}$) | 向量積 / 叉積 ($\mathbf{v}\times\mathbf{w}$) | HKDSE M2: 叉積（向量積）. | EDB / DSE |
| vector equation of a line ($\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$) | 直線的向量方程 | Direction vector = 方向向量; Parameter = 參數. | EDB / DSE |
| parametric form / Cartesian form | 參數形式 / 笛卡兒形式（直角坐標形式） | | EDB |
| coincident / parallel / intersecting / skew lines | 重合 / 平行 / 相交 / 異面直線（歪斜線） | EDB lists 異面直線，歪斜線. | EDB |
| normal vector ($\mathbf{n}$) | 法向量 ($\mathbf{n}$) | Equation of a plane = 平面方程. | EDB / DSE |
| foot of perpendicular | 垂足 | Shortest distance = 最短距離. | EDB |

---

## 6. Topic 4: Statistics and Probability（統計與概率）

| English | 中文（香港） | Notes | Source |
|---|---|---|---|
| population / sample | 總體（母體） / 樣本 | EDB: 總體，母體. | EDB |
| random sample / sampling bias | 隨機樣本 / 抽樣偏差 | Simple random / systematic / stratified / quota / convenience sampling = 簡單隨機 / 系統 / 分層 / 配額 / 方便抽樣. | EDB |
| discrete data / continuous data | 離散數據 / 連續數據 | | EDB |
| frequency table / histogram | 頻數表 / 組織圖（直方圖） | EDB & HKDSE use 組織圖 (直方圖 also understood). | EDB / DSE |
| cumulative frequency curve (ogive) | 累積頻數曲線（累積頻數多邊形） | | EDB / DSE |
| mean ($\bar{x}, \mu$) / median / mode | 平均值（平均數） / 中位數 / 眾數 | Modal class = 眾數組. | EDB / DSE |
| quartile ($Q_1, Q_3$) / percentile | 四分位數（下四分位數 $Q_1$、上四分位數 $Q_3$） / 百分位數 | | EDB / DSE |
| range / interquartile range ($\text{IQR}$) | 分佈域（極差） / 四分位數間距 ($\text{IQR}$) | HKDSE: 分佈域 and 四分位數間距. | EDB / DSE |
| box-and-whisker diagram (box plot) | 框線圖（箱形圖） | HKDSE: 框線圖. | EDB / DSE |
| outlier | 異常值（離群值） | | EDB |
| variance ($\sigma^2, \operatorname{Var}(X)$) | 方差 ($\sigma^2, \operatorname{Var}(X)$) | | EDB / DSE |
| standard deviation ($\sigma$) | 標準差 ($\sigma$) | | EDB / DSE |
| bivariate data / scatter diagram | 二元數據 / 散點圖 | | EDB / DSE |
| Pearson's product-moment correlation coefficient ($r$) | 皮爾遜積矩相關係數 ($r$) | Positive / negative correlation = 正相關 / 負相關. | EDB |
| regression line of $y$ on $x$ / $x$ on $y$ | $y$ 對 $x$ 的迴歸線 / $x$ 對 $y$ 的迴歸線 | Method of least squares = 最小二乘法. | EDB |
| interpolation / extrapolation | 內插法 / 外推法 | | EDB |
| trial / outcome / sample space ($U$) / event | 試驗 / 結果 / 樣本空間 ($U$) / 事件 | | EDB |
| complementary event ($A'$) | 互補事件（對立事件, $A'$） | | EDB / DSE |
| Venn diagram / tree diagram | 溫氏圖 / 樹形圖 | HKDSE: 溫氏圖. | EDB / DSE |
| mutually exclusive events | 互斥事件 | $P(A \cap B) = 0$. | EDB / DSE |
| independent events | 獨立事件 | $P(A \cap B) = P(A)P(B)$. | EDB / DSE |
| conditional probability ($P(A \mid B)$) | 條件概率 ($P(A \mid B)$) | | EDB / DSE |
| Bayes' theorem | 貝葉斯定理 | HKDSE M1: 貝葉斯定理. | EDB / DSE |
| discrete random variable | 離散隨機變數（離散隨機變量） | Probability distribution = 概率分佈. | EDB / DSE |
| expected value / expectation ($E(X)$) | 期望值 ($E(X)$) | Fair game = 公平遊戲 ($E = 0$). | EDB / DSE |
| binomial distribution ($\text{B}(n, p)$) | 二項分佈 ($\text{B}(n, p)$) | Bernoulli trial = 伯努利試驗. | EDB / DSE |
| normal distribution ($\text{N}(\mu, \sigma^2)$) | 正態分佈（常態分佈, $\text{N}(\mu, \sigma^2)$） | Standard normal distribution = 標準正態分佈; $z$-score = 標準分 ($z$ 值); Inverse normal = 反常態 / 逆正態. | EDB / DSE |
| continuous random variable | 連續隨機變數 | Probability density function (PDF) = 概率密度函數. | EDB / DSE |

---

## 7. Topic 5: Calculus（微積分）

| English | 中文（香港） | Notes | Source |
|---|---|---|---|
| limit ($\lim_{x\to a} f(x)$) | 極限 ($\lim_{x\to a} f(x)$) | Continuity = 連續性; Differentiability = 可微性. | EDB / DSE |
| differentiation from first principles | 基本原理求導法（從第一原理求導） | HKDSE M2: 基本原理 (first principles). | EDB / DSE |
| derivative ($f'(x), \frac{dy}{dx}$) | 導數 ($f'(x), \frac{dy}{dx}$) | Gradient function = 斜率函數; Rate of change = 變化率. | EDB / DSE |
| second derivative ($f''(x), \frac{d^2y}{dx^2}$) | 二階導數 ($f''(x), \frac{d^2y}{dx^2}$) | $n$-th derivative = $n$ 階導數. | EDB / DSE |
| tangent / normal (to a curve) | 切線 / 法線 | | EDB / DSE |
| increasing function / decreasing function | 遞增函數 / 遞減函數 | | EDB / DSE |
| chain rule | 鏈式法則 | | EDB / DSE |
| product rule / quotient rule | 積法則（乘法法則） / 商法則（除法法則） | | EDB / DSE |
| stationary point | 駐點 | | EDB / DSE |
| local maximum / local minimum | 局部極大（相對極大） / 局部極小（相對極小） | Global (absolute) maximum/minimum = 全局（絕對）極大／極小. | EDB / DSE |
| first derivative test / second derivative test | 一階導數判別法 / 二階導數判別法 | | EDB / DSE |
| concavity (concave up / concave down) | 凹性（凹向上 / 凹向下） | | EDB / DSE |
| point of inflexion (inflection) | 拐點（轉折點） | Horizontal point of inflexion = 水平拐點. | EDB / DSE |
| optimization | 最優化（極值問題） | | EDB |
| L'Hôpital's rule | 洛必達法則（羅必達法則） | Indeterminate form ($\frac{0}{0}, \frac{\infty}{\infty}$) = 不定式. | EDB |
| implicit differentiation | 隱函數微分法 | | EDB / DSE |
| related rates of change | 相關變化率 | | EDB / DSE |
| anti-differentiation / indefinite integral | 反微分 / 不定積分 | Constant of integration ($+C$) = 積分常數; Boundary condition = 邊界條件; Initial condition = 初始條件. | EDB / DSE |
| definite integral ($\int_a^b f(x)\,dx$) | 定積分 ($\int_a^b f(x)\,dx$) | Fundamental theorem of calculus = 微積分基本定理. | EDB / DSE |
| integration by inspection (reverse chain rule) | 觀察積分法（逆鏈式法則） | | IB / EDB |
| integration by substitution | 代換積分法（換元積分法） | HKDSE M2: 代換積分法. | EDB / DSE |
| integration by parts | 分部積分法 | | EDB / DSE |
| area under a curve / area between two curves | 曲線下面積 / 兩曲線之間的面積 | | EDB / DSE |
| solid of revolution / volume of revolution | 旋轉體 / 旋轉體體積 | Rotated about the $x$-axis / $y$-axis = 繞 $x$ 軸 / $y$ 軸旋轉. | EDB / DSE |
| kinematics | 運動學 | Displacement ($s$) = 位移; Velocity ($v$) = 速度; Speed ($|v|$) = 速率; Acceleration ($a$) = 加速度; Total distance travelled = 總路程; At rest = 靜止 ($v = 0$). | EDB / DSE |
| differential equation (DE) | 微分方程 | First-order differential equation = 一階微分方程; General solution = 通解; Particular solution = 特解. | EDB |
| slope field | 斜率場 | | IB |
| Euler's method | 歐拉法 | Step length ($h$) = 步長. | EDB |
| separable differential equation | 可分離變數微分方程 | Separation of variables = 分離變數法. | EDB |
| homogeneous differential equation ($y = vx$) | 齊次微分方程 ($y = vx$) | | EDB |
| integrating factor ($e^{\int P(x)\,dx}$) | 積分因子 ($e^{\int P(x)\,dx}$) | | EDB |
| Maclaurin series | 麥克勞林級數（麥克勞林展開式） | Power series = 冪級數. | EDB |
