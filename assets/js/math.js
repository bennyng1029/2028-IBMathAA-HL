/* ==========================================================================
   Analysis Lab — math.js
   Shared mathematics & numerical helpers for IB Mathematics AA HL (May 2028).
   Classic script, no dependencies. Everything lives under window.S1.math
   and window.S1.chem (aliased for full component & tooling compatibility).
   Load this file FIRST.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1 = window.S1 || {};
  var MINUS = '−';   // true minus sign (U+2212)
  var TIMES = '×';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------- Mathematical Constants & IB AA Formula Booklet Metadata ----- */
  var constants = {
    PI: Math.PI,
    E: Math.E,
    SQRT2: Math.SQRT2,
    SQRT3: Math.sqrt(3),
    GOLDEN: (1 + Math.sqrt(5)) / 2,
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI
  };

  /* IB Mathematics: analysis and approaches formula booklet (first examinations 2021), section by section.
     Only formulas printed in the booklet belong in `booklet`. Checked line by line against the booklet text
     (version 1.0; later versions keep the same layout). Items students must know but the booklet does not print
     are in `memorize` below. Keys are booklet section numbers; 'prior' is the Prior learning page. */
  var booklet = {
    'prior': { title: 'Prior learning', level: 'sl', formulas: ['A_parallelogram = bh', 'A_triangle = (1/2)bh', 'A_trapezoid = (1/2)(a + b)h', 'A_circle = πr^2, C = 2πr', 'V_cuboid = lwh', 'V_cylinder = πr^2h, A_curved = 2πrh', 'V_prism = Ah', 'd = sqrt((x_1 - x_2)^2 + (y_1 - y_2)^2)', 'M = ((x_1 + x_2)/2, (y_1 + y_2)/2)'] },
    '1.2': { title: 'Arithmetic sequence & series', level: 'sl', formulas: ['u_n = u_1 + (n - 1)d', 'S_n = (n/2)(2u_1 + (n - 1)d) = (n/2)(u_1 + u_n)'] },
    '1.3': { title: 'Geometric sequence & series', level: 'sl', formulas: ['u_n = u_1 r^{n-1}', 'S_n = u_1(r^n - 1)/(r - 1) = u_1(1 - r^n)/(1 - r), r != 1'] },
    '1.4': { title: 'Compound interest', level: 'sl', formulas: ['FV = PV × (1 + r/(100k))^{kn}'] },
    '1.5': { title: 'Exponents and logarithms', level: 'sl', formulas: ['a^x = b <=> x = log_a b, where a > 0, b > 0, a != 1'] },
    '1.7': { title: 'Exponents and logarithms (laws & change of base)', level: 'sl', formulas: ['log_a(xy) = log_a x + log_a y', 'log_a(x/y) = log_a x - log_a y', 'log_a(x^m) = m log_a x', 'log_a x = (log_b x)/(log_b a)'] },
    '1.8': { title: 'Sum of an infinite geometric sequence', level: 'sl', formulas: ['S_infty = u_1/(1 - r), |r| < 1'] },
    '1.9': { title: 'Binomial theorem', level: 'sl', formulas: ['(a + b)^n = a^n + nC1 a^{n-1}b + ... + nCr a^{n-r}b^r + ... + b^n', 'nCr = n! / (r!(n - r)!)'] },
    // The extended binomial (n ∈ Q) line was added to AHL 1.10 in later booklet versions; it is not in version 1.0.
    '1.10': { title: 'Combinations, permutations & extension of the binomial theorem', level: 'ahl', formulas: ['nCr = n! / (r!(n - r)!)', 'nPr = n! / (n - r)!', '(a + b)^n = a^n(1 + n(b/a) + n(n - 1)/2! (b/a)^2 + ...), n in Q'] },
    '1.12': { title: 'Complex numbers', level: 'ahl', formulas: ['z = a + bi'] },
    '1.13': { title: 'Modulus-argument (polar) and exponential (Euler) form', level: 'ahl', formulas: ['z = r(cos θ + i sin θ) = re^{iθ} = r cis θ'] },
    '1.14': { title: 'De Moivre\'s theorem', level: 'ahl', formulas: ['[r(cos θ + i sin θ)]^n = r^n(cos nθ + i sin nθ) = r^n e^{inθ} = r^n cis nθ'] },
    '2.1': { title: 'Equations of a straight line & gradient', level: 'sl', formulas: ['y = mx + c', 'ax + by + d = 0', 'y - y_1 = m(x - x_1)', 'm = (y_2 - y_1)/(x_2 - x_1)'] },
    '2.6': { title: 'Axis of symmetry of the graph of a quadratic function', level: 'sl', formulas: ['f(x) = ax^2 + bx + c => axis of symmetry is x = -b/(2a)'] },
    '2.7': { title: 'Solutions of a quadratic equation & discriminant', level: 'sl', formulas: ['ax^2 + bx + c = 0 => x = (-b +- sqrt(b^2 - 4ac))/(2a), a != 0', 'Δ = b^2 - 4ac'] },
    '2.9': { title: 'Exponential and logarithmic functions', level: 'sl', formulas: ['a^x = e^{x ln a}', 'log_a a^x = x = a^{log_a x}, where a, x > 0, a != 1'] },
    '2.12': { title: 'Sum and product of the roots of polynomial equations', level: 'ahl', formulas: ['Sum is -a_{n-1}/a_n', 'Product is (-1)^n a_0/a_n'] },
    '3.1': { title: '3D distance, midpoint, volume & surface area', level: 'sl', formulas: ['d = sqrt((x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2)', 'M = ((x_1 + x_2)/2, (y_1 + y_2)/2, (z_1 + z_2)/2)', 'V_pyramid = (1/3)Ah', 'V_cone = (1/3)πr^2h', 'A_curved = πrl', 'V_sphere = (4/3)πr^3', 'A_sphere = 4πr^2'] },
    '3.2': { title: 'Sine rule, cosine rule & area of a triangle', level: 'sl', formulas: ['a/sin A = b/sin B = c/sin C', 'c^2 = a^2 + b^2 - 2ab cos C', 'cos C = (a^2 + b^2 - c^2)/(2ab)', 'A = (1/2)ab sin C'] },
    '3.4': { title: 'Length of an arc & area of a sector (radians)', level: 'sl', formulas: ['l = rθ', 'A = (1/2)r^2θ'] },
    '3.5': { title: 'Identity for tan θ', level: 'sl', formulas: ['tan θ = sin θ / cos θ'] },
    '3.6': { title: 'Pythagorean & double angle identities', level: 'sl', formulas: ['cos^2 θ + sin^2 θ = 1', 'sin 2θ = 2 sin θ cos θ', 'cos 2θ = cos^2 θ - sin^2 θ = 2 cos^2 θ - 1 = 1 - 2 sin^2 θ'] },
    '3.9': { title: 'Reciprocal trigonometric & Pythagorean identities', level: 'ahl', formulas: ['sec θ = 1/cos θ', 'cosec θ = 1/sin θ', '1 + tan^2 θ = sec^2 θ', '1 + cot^2 θ = cosec^2 θ'] },
    '3.10': { title: 'Compound angle identities & double angle identity for tan', level: 'ahl', formulas: ['sin(A +- B) = sin A cos B +- cos A sin B', 'cos(A +- B) = cos A cos B -+ sin A sin B', 'tan(A +- B) = (tan A +- tan B)/(1 -+ tan A tan B)', 'tan 2θ = (2 tan θ)/(1 - tan^2 θ)'] },
    '3.12': { title: 'Magnitude of a vector', level: 'ahl', formulas: ['|v| = sqrt(v_1^2 + v_2^2 + v_3^2)'] },
    '3.13': { title: 'Scalar product & angle between two vectors', level: 'ahl', formulas: ['v · w = v_1w_1 + v_2w_2 + v_3w_3', 'v · w = |v||w| cos θ', 'cos θ = (v_1w_1 + v_2w_2 + v_3w_3)/(|v||w|)'] },
    '3.14': { title: 'Equations of a line', level: 'ahl', formulas: ['r = a + λb', 'x = x_0 + λl, y = y_0 + λm, z = z_0 + λn', '(x - x_0)/l = (y - y_0)/m = (z - z_0)/n'] },
    '3.16': { title: 'Vector product & area of a parallelogram', level: 'ahl', formulas: ['v × w = (v_2w_3 - v_3w_2, v_3w_1 - v_1w_3, v_1w_2 - v_2w_1)', '|v × w| = |v||w| sin θ', 'A = |v × w| (v and w form two adjacent sides of a parallelogram)'] },
    '3.17': { title: 'Equations of a plane', level: 'ahl', formulas: ['r = a + λb + μc', 'r · n = a · n', 'ax + by + cz = d'] },
    '4.2': { title: 'Interquartile range', level: 'sl', formulas: ['IQR = Q_3 - Q_1'] },
    '4.3': { title: 'Mean of a set of data', level: 'sl', formulas: ['x̄ = (Σ_{i=1}^{k} f_i x_i)/n, where n = Σ_{i=1}^{k} f_i'] },
    '4.5': { title: 'Probability of an event & complementary events', level: 'sl', formulas: ['P(A) = n(A)/n(U)', 'P(A) + P(A\') = 1'] },
    '4.6': { title: 'Combined, mutually exclusive, conditional & independent events', level: 'sl', formulas: ['P(A ∪ B) = P(A) + P(B) - P(A ∩ B)', 'P(A ∪ B) = P(A) + P(B) (mutually exclusive)', 'P(A | B) = P(A ∩ B)/P(B)', 'P(A ∩ B) = P(A)P(B) (independent)'] },
    '4.7': { title: 'Expected value of a discrete random variable', level: 'sl', formulas: ['E(X) = Σ x P(X = x)'] },
    '4.8': { title: 'Binomial distribution X ~ B(n, p)', level: 'sl', formulas: ['E(X) = np', 'Var(X) = np(1 - p)'] },
    '4.12': { title: 'Standardized normal variable', level: 'sl', formulas: ['z = (x - μ)/σ'] },
    '4.13': { title: 'Bayes\' theorem', level: 'ahl', formulas: ['P(B | A) = P(B)P(A | B) / (P(B)P(A | B) + P(B\')P(A | B\'))', 'P(B_i | A) = P(B_i)P(A | B_i) / (P(B_1)P(A | B_1) + P(B_2)P(A | B_2) + P(B_3)P(A | B_3))'] },
    '4.14': { title: 'Variance, standard deviation, linear transformation & continuous random variables', level: 'ahl', formulas: [
      'σ^2 = (Σ_{i=1}^{k} f_i (x_i - μ)^2)/n = (Σ_{i=1}^{k} f_i x_i^2)/n - μ^2',
      'σ = sqrt((Σ_{i=1}^{k} f_i (x_i - μ)^2)/n)',
      'E(aX + b) = aE(X) + b',
      'Var(aX + b) = a^2 Var(X)',
      'E(X) = μ = ∫_{-infty}^{infty} x f(x) dx',
      'Var(X) = E(X - μ)^2 = E(X^2) - [E(X)]^2',
      'Var(X) = Σ (x - μ)^2 P(X = x) = Σ x^2 P(X = x) - μ^2 (discrete)',
      'Var(X) = ∫_{-infty}^{infty} (x - μ)^2 f(x) dx = ∫_{-infty}^{infty} x^2 f(x) dx - μ^2 (continuous)'
    ] },
    '5.3': { title: 'Derivative of x^n', level: 'sl', formulas: ['f(x) = x^n => f\'(x) = n x^{n-1}'] },
    '5.5': { title: 'Integral of x^n & area between a curve and the x-axis', level: 'sl', formulas: ['∫ x^n dx = x^{n+1}/(n + 1) + C, n != -1', 'A = ∫_a^b y dx, where f(x) > 0'] },
    '5.6': { title: 'Standard derivatives, chain, product & quotient rules', level: 'sl', formulas: ['f(x) = sin x => f\'(x) = cos x', 'f(x) = cos x => f\'(x) = -sin x', 'f(x) = e^x => f\'(x) = e^x', 'f(x) = ln x => f\'(x) = 1/x', 'y = g(u), u = f(x) => dy/dx = (dy/du)(du/dx)', 'y = uv => dy/dx = u(dv/dx) + v(du/dx)', 'y = u/v => dy/dx = (v(du/dx) - u(dv/dx))/v^2'] },
    '5.9': { title: 'Kinematics: acceleration, distance & displacement', level: 'sl', formulas: ['a = dv/dt = d^2s/dt^2', 'distance = ∫_{t_1}^{t_2} |v(t)| dt', 'displacement = ∫_{t_1}^{t_2} v(t) dt'] },
    '5.10': { title: 'Standard integrals', level: 'sl', formulas: ['∫ (1/x) dx = ln|x| + C', '∫ sin x dx = -cos x + C', '∫ cos x dx = sin x + C', '∫ e^x dx = e^x + C'] },
    '5.11': { title: 'Area of region enclosed by a curve and the x-axis', level: 'sl', formulas: ['A = ∫_a^b |y| dx'] },
    '5.12': { title: 'Derivative from first principles', level: 'ahl', formulas: ['y = f(x) => dy/dx = f\'(x) = lim_{h->0} (f(x + h) - f(x))/h'] },
    '5.15': { title: 'Standard derivatives & standard integrals', level: 'ahl', formulas: [
      'd/dx(tan x) = sec^2 x', 'd/dx(sec x) = sec x tan x', 'd/dx(cosec x) = -cosec x cot x', 'd/dx(cot x) = -cosec^2 x',
      'd/dx(a^x) = a^x (ln a)', 'd/dx(log_a x) = 1/(x ln a)',
      'd/dx(arcsin x) = 1/sqrt(1 - x^2)', 'd/dx(arccos x) = -1/sqrt(1 - x^2)', 'd/dx(arctan x) = 1/(1 + x^2)',
      '∫ a^x dx = (1/ln a) a^x + C',
      '∫ 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C',
      '∫ 1/sqrt(a^2 - x^2) dx = arcsin(x/a) + C, |x| < a'
    ] },
    '5.16': { title: 'Integration by parts', level: 'ahl', formulas: ['∫ u (dv/dx) dx = uv - ∫ v (du/dx) dx', '∫ u dv = uv - ∫ v du'] },
    '5.17': { title: 'Area enclosed by a curve and the y-axis & volume of revolution', level: 'ahl', formulas: ['A = ∫_a^b |x| dy', 'V = ∫_a^b π y^2 dx', 'V = ∫_a^b π x^2 dy'] },
    '5.18': { title: 'Euler\'s method & integrating factor', level: 'ahl', formulas: ['y_{n+1} = y_n + h × f(x_n, y_n); x_{n+1} = x_n + h, where h is a constant (step length)', 'e^{∫ P(x) dx} is the integrating factor for y\' + P(x)y = Q(x)'] },
    '5.19': { title: 'Maclaurin series', level: 'ahl', formulas: [
      'f(x) = f(0) + x f\'(0) + (x^2/2!) f\'\'(0) + ...',
      'e^x = 1 + x + x^2/2! + ...',
      'ln(1 + x) = x - x^2/2 + x^3/3 - ...',
      'sin x = x - x^3/3! + x^5/5! - ...',
      'cos x = 1 - x^2/2! + x^4/4! - ...',
      'arctan x = x - x^3/3 + x^5/5 - ...'
    ] }
  };

  /* Formulas the syllabus needs that the booklet does NOT print: students must memorize (or derive) these.
     Keyed by the guide subtopic they belong to. */
  var memorize = {
    '1.10': { title: 'Validity of the extended binomial expansion', level: 'ahl', formulas: ['(a + bx)^n with n not in N is valid for |bx/a| < 1'] },
    '1.12': { title: 'Modulus, argument & conjugate', level: 'ahl', formulas: ['|z| = sqrt(a^2 + b^2)', 'arg z = θ, where tan θ = b/a (check the quadrant)', 'z* = a - bi, zz* = |z|^2'] },
    '2.1': { title: 'Parallel & perpendicular lines', level: 'sl', formulas: ['parallel: m_1 = m_2', 'perpendicular: m_1 m_2 = -1'] },
    '2.5': { title: 'Composite & inverse functions', level: 'sl', formulas: ['(f ∘ g)(x) = f(g(x))', '(f ∘ f^{-1})(x) = (f^{-1} ∘ f)(x) = x'] },
    '2.6': { title: 'Other forms of a quadratic', level: 'sl', formulas: ['f(x) = a(x - p)(x - q): x-intercepts p and q', 'f(x) = a(x - h)^2 + k: vertex (h, k)'] },
    '3.4': { title: 'Area of a segment', level: 'sl', formulas: ['A_segment = (1/2)r^2(θ - sin θ)'] },
    '3.9': { title: 'Cotangent', level: 'ahl', formulas: ['cot θ = 1/tan θ = cos θ / sin θ'] },
    '3.16': { title: 'Area of a triangle from the vector product', level: 'ahl', formulas: ['A_triangle = (1/2)|v × w|'] },
    '4.2': { title: 'Outliers', level: 'sl', formulas: ['outlier: below Q_1 - 1.5 × IQR or above Q_3 + 1.5 × IQR'] },
    '5.9': { title: 'Velocity', level: 'sl', formulas: ['v = ds/dt'] }
  };

  /* ---------- Formula / mathematical shorthand & unit formatting ----------- */
  /**
   * Formats mathematical or scientific shorthand inside .math or .chem spans:
   *  - '<=>' → '⇔', '=>' → '⇒', '->' → '→', '>=' → '≥', '<=' → '≤', '!=' → '≠', '+-' → '±', 'infty' → '∞'
   *  - '^{...}' or '^2', '^-1', '^n' → '<sup>...</sup>'
   *  - '_{...}' or '_1', '_n' → '<sub>...</sub>'
   */
  var GREEK = { pi: 'π', theta: 'θ', alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', Delta: 'Δ', epsilon: 'ε',
    lambda: 'λ', mu: 'μ', sigma: 'σ', Sigma: 'Σ', omega: 'ω', Omega: 'Ω', phi: 'φ', rho: 'ρ', tau: 'τ' };

  /** sqrt(3) → √3, sqrt(x + 1) → √(x + 1), with balanced parentheses (nesting allowed). */
  function sqrtSymbols(s) {
    var out = '', i = 0, k;
    while ((k = s.indexOf('sqrt(', i)) !== -1) {
      if (k > 0 && /[A-Za-z]/.test(s.charAt(k - 1))) { out += s.slice(i, k + 5); i = k + 5; continue; }
      var depth = 1, j = k + 5;
      while (j < s.length && depth) { if (s[j] === '(') depth++; else if (s[j] === ')') depth--; j++; }
      if (depth) { out += s.slice(i); return out; }
      var inner = sqrtSymbols(s.slice(k + 5, j - 1));
      out += s.slice(i, k) + (/^[A-Za-z0-9.πθ]+$/.test(inner) ? '√' + inner : '√(' + inner + ')');
      i = j;
    }
    return out + s.slice(i);
  }

  function formula(str) {
    var s = esc(String(str).trim());
    s = s.replace(/&lt;=&gt;/g, '⇔')
         .replace(/=&gt;/g, '⇒')
         .replace(/-&gt;/g, '→')
         .replace(/&gt;=/g, '≥')
         .replace(/&lt;=/g, '≤')
         .replace(/!=/g, '≠')
         .replace(/\+-/g, '±')
         .replace(/-\+/g, '∓')
         .replace(/==/g, '≡');
    // LaTeX-style commands authors use inside .chem/.math spans
    var SETS = { R: 'ℝ', Z: 'ℤ', Q: 'ℚ', N: 'ℕ', C: 'ℂ' };
    // The backslash is optional: in a JS string '\mathbb{R}' arrives here as 'mathbb{R}'.
    s = s.replace(/\\?mathbb\{([RZQNC])\}/g, function (m, l) { return SETS[l]; })
         .replace(/\\?mathbf\{([^}]+)\}/g, '<b>$1</b>')
         // "x in R", "n in Z^+": set membership written in words
         .replace(/(^|[\s(,])in\s+(ℝ|ℤ|ℚ|ℕ|ℂ|[RZQNC](?![A-Za-z]))/g, function (m, pre, l) { return pre + '∈ ' + (SETS[l] || l); })
         // int, int_a^b → ∫ (also after a digit or bracket: 2int, (int)
         .replace(/(^|[^A-Za-z])int(?![A-Za-z])/g, '$1∫')
         .replace(/\\sqrt\{([^}]+)\}/g, 'sqrt($1)')
         .replace(/\^\\circ/g, '°')
         .replace(/\\(?:circ|degree)(?![A-Za-z])/g, '°');
    var CMDS = { 'in': '∈', notin: '∉', nmid: '∤', mid: '|', times: '×', cdot: '·', le: '≤', ge: '≥',
      leq: '≤', geq: '≥', neq: '≠', ne: '≠', pm: '±', mp: '∓', to: '→', infty: '∞', subset: '⊂',
      cup: '∪', cap: '∩', equiv: '≡', approx: '≈', Rightarrow: '⇒', Leftrightarrow: '⇔' };
    s = s.replace(/\\([A-Za-z]+)(?![A-Za-z])/g, function (m, w) {
      return CMDS[w] || (GREEK[w] ? GREEK[w] : m);
    });
    // Greek letter names and infty/pi as standalone words; a leading digit or _ ^ is allowed (3pi, 2theta, S_infty)
    s = s.replace(/(^|[^A-Za-z])(infty|pi|theta|alpha|beta|gamma|delta|Delta|epsilon|lambda|mu|sigma|Sigma|omega|Omega|phi|rho|tau)(?![A-Za-z])/g,
      function (m, pre, w) { return pre + (w === 'infty' ? '∞' : w === 'pi' ? 'π' : GREEK[w]); });
    s = sqrtSymbols(s).replace(/\^\*/g, '<sup>*</sup>').replace(/\^([+-])(?![\d(])/g, function (m, c) { return '<sup>' + (c === '-' ? MINUS : '+') + '</sup>'; });
    // Braced superscripts and subscripts: ^{n-1}, _{n+1}
    s = s.replace(/\^\{([^}]+)\}/g, function (m, inner) {
      return '<sup>' + inner.replace(/-/g, MINUS) + '</sup>';
    });
    s = s.replace(/_\{([^}]+)\}/g, function (m, inner) {
      return '<sub>' + inner.replace(/-/g, MINUS) + '</sub>';
    });
    // Unbraced superscripts: ^-1, ^2, ^n, ^x
    s = s.replace(/\^([+-]?\d+|[a-zA-Zθαβγδλμσωφπ∞])/g, function (m, exp) {
      return '<sup>' + exp.replace(/-/g, MINUS) + '</sup>';
    });
    // Unbraced subscripts: _1, _n, _0, _k, _i, _∞
    s = s.replace(/_(\d+|[a-zA-Z∞θαβγδλμσωφ])/g, '<sub>$1</sub>');
    // Wrap space-separated tokens so equations can wrap cleanly between terms
    if (/\s/.test(s)) {
      s = s.split(/\s+/).map(function (tok) { return '<span class="chem__t">' + tok + '</span>'; }).join(' ');
    }
    return s;
  }

  /** 'm s-2' → m s<sup>−2</sup>; 'cm3' → cm<sup>3</sup>; 's^-1' → s<sup>−1</sup>. */
  function unit(str) {
    var s = esc(String(str).trim());
    return s.replace(/([A-Za-zµΩ°])\^?(-?)(\d+)/g, function (m, a, sign, n) {
      return a + '<sup>' + (sign ? MINUS : '') + n + '</sup>';
    });
  }

  /* ---------- Significant figures & number formatting ---------------------- */
  function sigDigits(x, n) {
    var parts = Math.abs(x).toExponential(12).split('e');
    var digs = parts[0].replace('.', '').split('').map(Number);
    var exp = parseInt(parts[1], 10);
    if (digs.length > n) {
      var up = digs[n] >= 5;
      digs = digs.slice(0, n);
      if (up) {
        var i = n - 1;
        while (i >= 0) {
          if (digs[i] === 9) { digs[i] = 0; i--; } else { digs[i]++; break; }
        }
        if (i < 0) { digs.unshift(1); digs.pop(); exp++; }
      }
    }
    while (digs.length < n) digs.push(0);
    return { digits: digs.join(''), exp: exp };
  }

  /** Round x to n significant figures, returning a Number. */
  function roundSig(x, n) {
    if (!isFinite(x) || x === 0) return x;
    var d = sigDigits(x, n);
    return Number((x < 0 ? '-' : '') + d.digits[0] + (n > 1 ? '.' + d.digits.slice(1) : '') + 'e' + d.exp);
  }

  /** x to n s.f. as a plain decimal string, keeping trailing zeros: toSig(0.25, 3) → '0.250'. */
  function toSig(x, n) {
    if (!isFinite(x)) return String(x);
    if (x === 0) return n > 1 ? '0.' + new Array(n).join('0') : '0';
    var d = sigDigits(x, n), out;
    if (d.exp < 0) out = '0.' + new Array(-d.exp).join('0') + d.digits;
    else if (d.exp + 1 >= n) out = d.digits + new Array(d.exp + 2 - n).join('0');
    else out = d.digits.slice(0, d.exp + 1) + '.' + d.digits.slice(d.exp + 1);
    return (x < 0 ? '-' : '') + out;
  }

  /** Scientific notation as HTML: sci(6.02e23, 3) → '6.02 × 10<sup>23</sup>'. */
  function sci(x, n) {
    if (!isFinite(x)) return String(x);
    if (x === 0) return '0';
    n = n || 3;
    var d = sigDigits(x, n);
    var mant = d.digits[0] + (n > 1 ? '.' + d.digits.slice(1) : '');
    return (x < 0 ? MINUS : '') + mant + ' ' + TIMES + ' 10<sup>' + (d.exp < 0 ? MINUS : '') + Math.abs(d.exp) + '</sup>';
  }

  /** Friendly HTML number to n s.f.: plain decimal for ordinary sizes, scientific notation otherwise. */
  function fmt(x, n) {
    if (!isFinite(x)) return String(x);
    if (x === 0) return '0';
    n = n || 3;
    var d = sigDigits(x, n);
    if (d.exp >= 5 || d.exp < -3) return sci(x, n);
    return toSig(x, n).replace('-', MINUS);
  }

  /** Fixed decimal places as HTML-safe text with a true minus sign: fixed(-5.2, 2) → '−5.20'. */
  function fixed(x, dp) {
    var r = Number(Math.abs(x).toFixed(dp == null ? 2 : dp));
    var s = Math.abs(x).toFixed(dp == null ? 2 : dp);
    return (x < 0 && r !== 0 ? MINUS : '') + s;
  }

  /** Count sig figs in a typed mantissa. Returns {min, max}. */
  function countSigFigs(mantissa) {
    var s = String(mantissa).replace(/^[+-]/, '');
    if (s.indexOf('.') > -1) {
      var d = s.replace('.', '').replace(/^0+/, '');
      var n = d.length || 1;
      return { min: n, max: n };
    }
    var t = s.replace(/^0+/, '');
    if (!t) return { min: 1, max: 1 };
    var core = t.replace(/0+$/, '');
    return { min: Math.max(core.length, 1), max: t.length };
  }

  /* ---------- Parsing typed numbers, fractions & exact expressions --------- */
  var SUPER = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+' };

  /* Safe recursive-descent evaluator for exact mathematical expressions:
     Supports numbers, pi/π, e, sqrt(), ln(), log(), exp(), sin(), cos(), tan(), +, -, *, /, ^, parentheses. */
  function evalMathExpr(exprStr) {
    var s = exprStr.toLowerCase()
      .replace(/π/g, 'pi')
      .replace(/√\s*\(/g, 'sqrt(')
      .replace(/√(\d+(?:\.\d+)?)/g, 'sqrt($1)')
      .replace(/arc(sin|cos|tan)/g, 'a$1')
      .replace(/\*\*/g, '^')
      // ln2, sin0.5 → ln(2), sin(0.5): IB students often omit the brackets around a plain number
      .replace(/(sqrt|ln|log|exp|asin|acos|atan|sin|cos|tan)(\d+(?:\.\d+)?)/g, '$1($2)');
    // Reject if unknown identifiers appear
    var idents = s.match(/[a-z]+/g) || [];
    var allowed = { pi: 1, e: 1, sqrt: 1, ln: 1, log: 1, exp: 1, sin: 1, cos: 1, tan: 1, asin: 1, acos: 1, atan: 1 };
    for (var k = 0; k < idents.length; k++) {
      if (!allowed[idents[k]]) return NaN;
    }
    // Insert implicit multiplication: e.g. 2pi -> 2*pi, 2sqrt(3) -> 2*sqrt(3), )pi -> )*pi, 2(3) -> 2*(3)
    s = s.replace(/(\d|\))(?=(?:pi|e|sqrt|ln|log|exp|sin|cos|tan|asin|acos|atan|\())/g, '$1*')
         .replace(/(pi|e)(?=\d|\(|pi|e|sqrt|ln|log|exp|sin|cos|tan)/g, '$1*');

    var pos = 0;
    function peek() { return s[pos] || ''; }
    function parseExpr() {
      var v = parseTerm();
      while (peek() === '+' || peek() === '-') {
        var op = s[pos++];
        var r = parseTerm();
        v = op === '+' ? v + r : v - r;
      }
      return v;
    }
    function parseTerm() {
      var v = parseUnary();
      while (peek() === '*' || peek() === '/') {
        var op = s[pos++];
        var r = parseUnary();
        v = op === '*' ? v * r : v / r;
      }
      return v;
    }
    // Unary minus binds more loosely than ^, so -2^2 = -(2^2) = -4 (standard convention and GDC behaviour)
    function parseUnary() {
      if (peek() === '+') { pos++; return parseUnary(); }
      if (peek() === '-') { pos++; return -parseUnary(); }
      return parsePower();
    }
    function parsePower() {
      var v = parsePrimary();
      if (peek() === '^') {
        pos++;
        var r = parseUnary();   // right-associative; allows 2^-3
        v = Math.pow(v, r);
      }
      return v;
    }
    function parsePrimary() {
      if (peek() === '(') {
        pos++;
        var v = parseExpr();
        if (peek() !== ')') return NaN;
        pos++;
        return v;
      }
      var rest = s.slice(pos);
      var fnMatch = /^(sqrt|ln|log|exp|asin|acos|atan|sin|cos|tan)\(/.exec(rest);
      if (fnMatch) {
        var fn = fnMatch[1];
        pos += fn.length + 1;
        var arg = parseExpr();
        if (peek() !== ')') return NaN;
        pos++;
        if (fn === 'sqrt') return arg >= 0 ? Math.sqrt(arg) : NaN;
        if (fn === 'ln') return arg > 0 ? Math.log(arg) : NaN;
        if (fn === 'log') return arg > 0 ? Math.log(arg) / Math.LN10 : NaN;
        if (fn === 'exp') return Math.exp(arg);
        if (fn === 'sin') return Math.sin(arg);
        if (fn === 'cos') return Math.cos(arg);
        if (fn === 'tan') return Math.tan(arg);
        if (fn === 'asin') return Math.asin(arg);
        if (fn === 'acos') return Math.acos(arg);
        if (fn === 'atan') return Math.atan(arg);
      }
      if (rest.slice(0, 2) === 'pi') { pos += 2; return Math.PI; }
      if (rest[0] === 'e' && !/^[a-z0-9]/i.test(rest[1] || '')) { pos += 1; return Math.E; }
      var numMatch = /^(\d+\.?\d*|\.\d+)(?:e([+-]?\d+))?/.exec(rest);
      if (numMatch) {
        pos += numMatch[0].length;
        return Number(numMatch[0]);
      }
      return NaN;
    }
    var result = parseExpr();
    if (pos !== s.length || !isFinite(result)) return NaN;
    return result;
  }

  /**
   * Parse what a student typed. Accepts:
   *  - Decimals (0.0012, -5.4, 1,25)
   *  - Scientific notation (1.2e-3, 1.2E-3, 1.2x10^-3, 1.2 × 10^-3, 1.2*10^-3, 10^-3)
   *  - Fractions (3/4, -5/12)
   *  - Exact math expressions (pi, 2*pi/3, pi/6, sqrt(2), sqrt(3)/2, e^2, ln(2))
   *  - Trailing units (0.25 rad, 12.4 cm^2, 45°)
   * Returns {value, sfMin, sfMax, exact, text} or null if it cannot be read.
   */
  function parseNumber(input) {
    if (typeof input === 'number') return isFinite(input) ? { value: input, sfMin: 1, sfMax: 15, exact: true, text: String(input) } : null;
    var s = String(input == null ? '' : input).trim();
    if (!s) return null;
    s = s.replace(/[−–—‐‑]/g, '-');
    s = s.replace(/[⁰¹²³⁴-⁹⁺⁻]+/g, function (m) {
      return '^' + m.split('').map(function (ch) { return SUPER[ch]; }).join('');
    });
    s = s.replace(/\s+/g, '');
    if (s.indexOf(',') > -1) {
      // 1,500 and 12,345.6 are thousands separators; a single comma not followed by exactly 3 digits is a decimal comma (1,25)
      if (s.indexOf('.') > -1 || (s.match(/,/g) || []).length > 1 || /^[+-]?\d{1,3},\d{3}(?!\d)/.test(s)) s = s.replace(/,/g, '');
      else s = s.replace(',', '.');
    }
    // Standard scientific notation with 10^...
    s = s.replace(/(?:\*\*|[xX×*·⋅])10(?:\^|\*\*)?\(?([+-]?\d+)\)?/, 'e$1');
    s = s.replace(/^([+-]?)10(?:\^|\*\*)\(?([+-]?\d+)\)?$/, '$11e$2');

    // 1. Plain decimal or scientific notation (with optional trailing unit)
    var m = /^([+-]?)(\d+\.?\d*|\.\d+)(?:[eE]([+-]?\d+))?(.*)$/.exec(s);
    if (m && (!m[4] || /^[A-Za-zµ°%]/.test(m[4])) && !/^(?:pi|sqrt|ln|log|sin|cos|tan|exp|arc|a(?:sin|cos|tan))/i.test(m[4] || '') &&
        !(m[4] && !m[3] && isFinite(evalMathExpr(s)))) {
      var value = Number(m[1] + m[2] + (m[3] ? 'e' + m[3] : ''));
      if (!isFinite(value)) return null;
      var sf = countSigFigs(m[2]);
      return { value: value, sfMin: sf.min, sfMax: sf.max, exact: false, text: s };
    }

    // 2. Exact fraction or symbolic expression (e.g. 3/4, -5/12, pi/3, 2*pi/3, sqrt(3)/2, e^2, ln(2))
    // Strip optional trailing unit such as "rad" or "cm" if preceded by a digit or ')'
    var clean = s.replace(/°$/, '');
    var exprVal = evalMathExpr(clean);
    if (isFinite(exprVal)) {
      return { value: exprVal, sfMin: 1, sfMax: 15, exact: true, text: s };
    }
    return null;
  }

  function parseTolerance(tol, answer) {
    var rel = null, abs = null;
    if (tol == null || tol === '') rel = 0.01;
    else if (typeof tol === 'number') abs = tol;
    else if (typeof tol === 'object') { if (tol.rel != null) rel = Number(tol.rel); if (tol.abs != null) abs = Number(tol.abs); }
    else {
      var t = String(tol).trim();
      if (/%$/.test(t)) rel = parseFloat(t) / 100;
      else abs = parseFloat(t.replace(/^abs:/i, ''));
    }
    var out = 0;
    if (rel != null && isFinite(rel)) out = Math.max(out, Math.abs(answer) * rel);
    if (abs != null && isFinite(abs)) out = Math.max(out, abs);
    if (out === 0) out = Math.abs(answer) * 1e-9 || 1e-12;
    return out;
  }

  function sfRange(sigfigs) {
    if (sigfigs == null || sigfigs === '') return null;
    if (Array.isArray(sigfigs)) return [Number(sigfigs[0]), Number(sigfigs[1])];
    var s = String(sigfigs).split(/[-–,]/).map(Number);
    return s.length > 1 ? [s[0], s[1]] : [s[0], s[0]];
  }

  /**
   * Check a typed numeric or exact mathematical answer.
   * spec = { answer: Number, tolerance: '1%' | {rel} | {abs} | Number(absolute), sigfigs: 3 | [2, 3] | '2-3' }
   * Returns { status: 'correct' | 'sigfig' | 'wrong' | 'invalid', value, sfMin, sfMax, clue }
   */
  /** Number of significant digits in the shortest decimal form of x (2.79 → 3, 40 → 1, Math.PI → 16). */
  function digitsOf(x) {
    if (!x) return 1;
    var m = Math.abs(x).toExponential().split('e')[0].replace('.', '').replace(/0+$/, '');
    return Math.max(m.length, 1);
  }

  function checkNumeric(input, spec) {
    var p = parseNumber(input);
    if (!p) return { status: 'invalid', value: null, clue: null };
    var a = Number(spec.answer);
    var tol = parseTolerance(spec.tolerance, a);
    var range = sfRange(spec.sigfigs);
    var diff = Math.abs(p.value - a);
    var within = diff <= tol * (1 + 1e-9) + Math.abs(a) * 1e-12;
    var res = { status: 'wrong', value: p.value, sfMin: p.sfMin, sfMax: p.sfMax, clue: null };
    function same(x, y) { return Math.abs(x - y) <= Math.max(Math.abs(x), Math.abs(y)) * 1e-9 + 1e-12; }
    // 1. The exact value, however it is written (0.75, 3/4, 2, 0, 1.5e-3), is always correct.
    if (same(p.value, a)) { res.status = 'correct'; return res; }
    // spec.exact: the question asks for an exact answer, so a close decimal is "right value, not exact".
    if (spec.exact) {
      if (!p.exact && Math.abs(p.value - a) <= Math.max(Math.abs(a) * 0.005, 1e-9)) res.status = 'exact';
      else if (p.exact && same(roundSig(p.value, 6), roundSig(a, 6))) res.status = 'correct';
      return res;
    }
    // spec.dp: answer to a fixed number of decimal places (e.g. money to 2 d.p.).
    if (spec.dp != null) {
      var dp = Number(spec.dp), f = Math.pow(10, dp), target = Math.round(a * f) / f;
      var typedDp = ((String(input).match(/\.(\d+)/) || [, ''])[1]).length;
      if (!p.exact && same(p.value, target) && typedDp >= dp) { res.status = 'correct'; return res; }
      if (!p.exact && Math.abs(p.value - a) <= 0.5 / f * (1 + 1e-9) && typedDp > dp) { res.status = 'correct'; return res; }
      // Fewer decimal places than asked, but correctly rounded at the precision typed: ask for more places.
      if (!p.exact && typedDp < dp && Math.abs(p.value - a) <= 0.5 / Math.pow(10, typedDp) * (1 + 1e-9)) res.status = 'dp';
      return res;
    }
    // Precision of the stored answer: a short decimal such as 2.79 is itself rounded, a long one is (nearly) exact.
    var aSF = digitsOf(a);
    if (p.exact) {
      // An exact expression must equal the answer, not merely approximate it (22/7 is not pi).
      var k = aSF >= 7 ? 6 : aSF;
      res.status = same(roundSig(p.value, k), roundSig(a, k)) ? 'correct' : 'wrong';
      if (res.status === 'correct') return res;
    } else if (range) {
      // 2. A rounded decimal is correct only if it IS the answer correctly rounded:
      //    0.866 is right for sqrt(3)/2, but 0.868 and 0.862 are not, even though they are close.
      // "120" may be 2 or 3 s.f.: try the most figures first, so 120 for 120.4 counts as 3 s.f.
      for (var n = p.sfMax; n >= p.sfMin; n--) {
        if (same(roundSig(a, n), p.value)) { res.status = n >= range[0] ? 'correct' : 'sigfig'; return res; }
      }
      // The stored answer may itself be rounded (2.5 for 2.4967): accept a more precise value that agrees with it to
      // the required figures, e.g. 2.497.
      if (within && p.sfMax >= range[0] && same(roundSig(p.value, range[0]), roundSig(a, range[0])) && aSF <= range[0]) {
        res.status = 'correct'; return res;
      }
    } else if (spec.tolerance == null && Number.isInteger(a)) {
      // A whole-number answer (a count, a year, n) with no stated tolerance must be typed exactly:
      // the 1% default would otherwise accept 26.9 for 27 or 2043 for 2044.
      return res;
    } else if (within) { res.status = 'correct'; return res; }
    if (a !== 0 && p.value !== 0) {
      if (Math.abs(p.value + a) <= tol) res.clue = 'sign';
      else {
        var ratio = Math.log(Math.abs(p.value / a)) / Math.LN10, k = Math.round(ratio);
        if (k !== 0 && Math.abs(Math.abs(p.value) / Math.pow(10, k) - Math.abs(a)) <= tol && (p.value > 0) === (a > 0)) res.clue = 'power10';
      }
    }
    return res;
  }

  /** Turn a checkNumeric result into student-facing feedback: {tone: 'right'|'partial'|'wrong', label, html}. */
  function describeCheck(res, spec) {
    var t = (S1.i18n && S1.i18n.ui) || S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };
    var range = sfRange(spec && spec.sigfigs);
    if (res.status === 'correct') return { tone: 'right', label: t('Correct'), html: '' };
    if (res.status === 'sigfig') {
      var msg = !range ? '' : range[0] !== range[1] ? t('Now check your significant figures. Give your answer to {a} or {b} significant figures.', { a: range[0], b: range[1] })
        : range[0] === 1 ? t('Now check your significant figures. Give your answer to 1 significant figure.')
        : t('Now check your significant figures. Give your answer to {n} significant figures.', { n: range[0] });
      return { tone: 'partial', label: t('Right value'), html: msg };
    }
    if (res.status === 'exact') return { tone: 'partial', label: t('Right value'), html: t('The question asks for an exact answer. Give it as a fraction, a surd or an expression such as <span class="mono">pi/3</span>, not a rounded decimal.') };
    if (res.status === 'dp') return { tone: 'partial', label: t('Nearly there'), html: t('Give your answer correct to {n} decimal places.', { n: spec.dp }) };
    if (res.status === 'invalid') return { tone: 'partial', label: t('That is not a number I can read'), html: t('Type a number such as <span class="mono">0.025</span>, <span class="mono">2.5e-2</span> or <span class="mono">2.5x10^-2</span>.') };
    if (res.clue === 'power10') return { tone: 'wrong', label: t('Not yet'), html: t('Your digits look right but the power of ten is off. Check your decimal point or the power of 10.') };
    if (res.clue === 'sign') return { tone: 'wrong', label: t('Not yet'), html: t('The size is right but the sign is wrong.') };
    return { tone: 'wrong', label: t('Not yet'), html: '' };
  }

  /* ---------- Combinatorics & Number Theory Helpers ------------------------ */
  function factorial(n) {
    n = Math.round(n);
    if (n < 0) return NaN;
    if (n > 170) return Infinity;
    var r = 1;
    for (var i = 2; i <= n; i++) r *= i;
    return r;
  }

  function nCr(n, r) {
    n = Math.round(n); r = Math.round(r);
    if (r < 0 || r > n) return 0;
    if (r === 0 || r === n) return 1;
    if (r > n - r) r = n - r;
    var res = 1;
    for (var i = 1; i <= r; i++) {
      res = (res * (n - r + i)) / i;
    }
    return Math.round(res);
  }

  function nPr(n, r) {
    n = Math.round(n); r = Math.round(r);
    if (r < 0 || r > n) return 0;
    var res = 1;
    for (var i = 0; i < r; i++) res *= (n - i);
    return res;
  }

  function gcd(a, b) {
    a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b));
    while (b !== 0) { var t = b; b = a % b; a = t; }
    return a || 1;
  }

  /** Approximate x as a rational fraction p/q with denominator <= maxDen (default 1000). */
  function toFrac(x, maxDen) {
    if (!isFinite(x)) return { num: NaN, den: 1, str: String(x), html: String(x) };
    maxDen = maxDen || 1000;
    var sign = x < 0 ? -1 : 1;
    var ax = Math.abs(x);
    var h1 = 1, h2 = 0, k1 = 0, k2 = 1, b = ax;
    do {
      var a = Math.floor(b);
      var aux = h1; h1 = a * h1 + h2; h2 = aux;
      aux = k1; k1 = a * k1 + k2; k2 = aux;
      if (b - a < 1e-12) break;
      b = 1 / (b - a);
    } while (k1 <= maxDen);
    var num = (k1 <= maxDen ? h1 : h2) * sign;
    var den = k1 <= maxDen ? k1 : k2;
    var sSign = num < 0 ? MINUS : '';
    var aNum = Math.abs(num);
    var str = den === 1 ? sSign + aNum : sSign + aNum + '/' + den;
    var html = den === 1 ? sSign + aNum : sSign + '<span class="frac"><span>' + aNum + '</span><span>' + den + '</span></span>';
    return { num: num, den: den, str: str, html: html };
  }

  /* ---------- Probability & Statistics Distributions ----------------------- */
  function normPdf(x, mu, sigma) {
    mu = mu == null ? 0 : mu;
    sigma = sigma == null ? 1 : sigma;
    if (sigma <= 0) return NaN;
    var z = (x - mu) / sigma;
    return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI));
  }

  function normCdf(x, mu, sigma) {
    mu = mu == null ? 0 : mu;
    sigma = sigma == null ? 1 : sigma;
    if (sigma <= 0) return NaN;
    var z = (x - mu) / sigma;
    var t = 1 / (1 + 0.2316419 * Math.abs(z));
    var d = 0.3989422804014327 * Math.exp(-z * z / 2);
    var p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + 1.330274429 * t))));
    return z >= 0 ? 1 - p : p;
  }

  /** Inverse normal (Acklam's rational approximation, accurate to ~1e-9). */
  function normInv(p, mu, sigma) {
    mu = mu == null ? 0 : mu;
    sigma = sigma == null ? 1 : sigma;
    if (p <= 0) return -Infinity;
    if (p >= 1) return Infinity;
    var a1 = -39.69683028665376, a2 = 220.9460984245205, a3 = -275.9285104469687,
        a4 = 138.3577518672690, a5 = -30.66479806614716, a6 = 2.506628277459239;
    var b1 = -54.47609879822406, b2 = 161.5858368580409, b3 = -155.6989798598866,
        b4 = 66.80131188771972, b5 = -13.28068155288572;
    var c1 = -0.007784894002430293, c2 = -0.3223964580411365, c3 = -2.400758277161838,
        c4 = -2.549732539343734, c5 = 4.374664141464968, c6 = 2.938163982698783;
    var d1 = 0.007784695709041462, d2 = 0.3224671290700398, d3 = 2.445134137142996,
        d4 = 3.754408661907416;
    var pLow = 0.02425, pHigh = 1 - pLow, q, r, z;
    if (p < pLow) {
      q = Math.sqrt(-2 * Math.log(p));
      z = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
          ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    } else if (p <= pHigh) {
      q = p - 0.5;
      r = q * q;
      z = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q /
          (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    } else {
      q = Math.sqrt(-2 * Math.log(1 - p));
      z = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
           ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    return mu + sigma * z;
  }

  function binomPmf(k, n, p) {
    k = Math.round(k); n = Math.round(n);
    if (k < 0 || k > n || p < 0 || p > 1) return 0;
    if (p === 0) return k === 0 ? 1 : 0;
    if (p === 1) return k === n ? 1 : 0;
    return nCr(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
  }

  function binomCdf(k, n, p) {
    k = Math.floor(k); n = Math.round(n);
    if (k < 0) return 0;
    if (k >= n) return 1;
    var sum = 0;
    for (var i = 0; i <= k; i++) sum += binomPmf(i, n, p);
    return Math.min(1, sum);
  }

  /* ---------- Calculus & Differential Equation Helpers --------------------- */
  function deriv(fn, x, h) {
    h = h || 1e-5;
    return (fn(x + h) - fn(x - h)) / (2 * h);
  }

  function integrate(fn, a, b, steps) {
    steps = steps || 100;
    if (steps % 2 === 1) steps++;
    var h = (b - a) / steps;
    var sum = fn(a) + fn(b);
    for (var i = 1; i < steps; i++) {
      sum += (i % 2 === 0 ? 2 : 4) * fn(a + i * h);
    }
    return (h / 3) * sum;
  }

  function solveEuler(f, x0, y0, h, steps) {
    var pts = [[x0, y0]];
    var x = x0, y = y0;
    for (var i = 0; i < steps; i++) {
      y = y + h * f(x, y);
      x = Number((x + h).toPrecision(12));
      pts.push([x, y]);
    }
    return pts;
  }

  function solveRK4(f, x0, y0, h, steps) {
    var pts = [[x0, y0]];
    var x = x0, y = y0;
    for (var i = 0; i < steps; i++) {
      var k1 = f(x, y);
      var k2 = f(x + 0.5 * h, y + 0.5 * h * k1);
      var k3 = f(x + 0.5 * h, y + 0.5 * h * k2);
      var k4 = f(x + h, y + h * k3);
      y = y + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
      x = Number((x + h).toPrecision(12));
      pts.push([x, y]);
    }
    return pts;
  }

  /* ---------- 3D Vector & Complex Number Helpers --------------------------- */
  var vec3 = {
    add: function (u, v) { return [u[0] + v[0], u[1] + v[1], u[2] + v[2]]; },
    sub: function (u, v) { return [u[0] - v[0], u[1] - v[1], u[2] - v[2]]; },
    scale: function (u, k) { return [u[0] * k, u[1] * k, u[2] * k]; },
    dot: function (u, v) { return u[0] * v[0] + u[1] * v[1] + u[2] * v[2]; },
    cross: function (u, v) {
      return [
        u[1] * v[2] - u[2] * v[1],
        u[2] * v[0] - u[0] * v[2],
        u[0] * v[1] - u[1] * v[0]
      ];
    },
    mag: function (u) { return Math.hypot(u[0], u[1], u[2]); },
    unit: function (u) {
      var m = Math.hypot(u[0], u[1], u[2]) || 1;
      return [u[0] / m, u[1] / m, u[2] / m];
    },
    angle: function (u, v) {
      var m = Math.hypot(u[0], u[1], u[2]) * Math.hypot(v[0], v[1], v[2]);
      if (!m) return 0;
      var c = (u[0] * v[0] + u[1] * v[1] + u[2] * v[2]) / m;
      return Math.acos(Math.max(-1, Math.min(1, c)));
    }
  };

  function normComplex(z) {
    if (Array.isArray(z)) return { re: z[0], im: z[1] };
    if (typeof z === 'number') return { re: z, im: 0 };
    return { re: Number(z.re) || 0, im: Number(z.im) || 0 };
  }

  var complex = {
    add: function (a, b) { a = normComplex(a); b = normComplex(b); return { re: a.re + b.re, im: a.im + b.im }; },
    sub: function (a, b) { a = normComplex(a); b = normComplex(b); return { re: a.re - b.re, im: a.im - b.im }; },
    mul: function (a, b) {
      a = normComplex(a); b = normComplex(b);
      return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re };
    },
    div: function (a, b) {
      a = normComplex(a); b = normComplex(b);
      var d = b.re * b.re + b.im * b.im;
      return { re: (a.re * b.re + a.im * b.im) / d, im: (a.im * b.re - a.re * b.im) / d };
    },
    abs: function (z) { z = normComplex(z); return Math.hypot(z.re, z.im); },
    arg: function (z) { z = normComplex(z); return Math.atan2(z.im, z.re); },
    pow: function (z, n) {
      z = normComplex(z);
      var r = Math.pow(Math.hypot(z.re, z.im), n);
      var theta = Math.atan2(z.im, z.re) * n;
      return { re: r * Math.cos(theta), im: r * Math.sin(theta), r: r, theta: theta };
    },
    roots: function (z, n) {
      z = normComplex(z);
      n = Math.max(1, Math.round(n));
      var r = Math.pow(Math.hypot(z.re, z.im), 1 / n);
      var theta0 = Math.atan2(z.im, z.re);
      var out = [];
      for (var k = 0; k < n; k++) {
        var ang = (theta0 + 2 * Math.PI * k) / n;
        out.push({ re: r * Math.cos(ang), im: r * Math.sin(ang), r: r, theta: ang });
      }
      return out;
    }
  };

  var api = {
    constants: constants,
    booklet: booklet,
    memorize: memorize,
    formula: formula,
    unit: unit,
    roundSig: roundSig,
    toSig: toSig,
    sci: sci,
    fmt: fmt,
    fixed: fixed,
    countSigFigs: countSigFigs,
    parseNumber: parseNumber,
    checkNumeric: checkNumeric,
    describeCheck: describeCheck,
    factorial: factorial,
    nCr: nCr,
    nPr: nPr,
    gcd: gcd,
    toFrac: toFrac,
    normPdf: normPdf,
    normCdf: normCdf,
    normInv: normInv,
    binomPmf: binomPmf,
    binomCdf: binomCdf,
    deriv: deriv,
    integrate: integrate,
    solveEuler: solveEuler,
    solveRK4: solveRK4,
    vec3: vec3,
    complex: complex,
    escapeHtml: esc,
    MINUS: MINUS,
    TIMES: TIMES
  };

  S1.math = S1.chem = api;
})();
