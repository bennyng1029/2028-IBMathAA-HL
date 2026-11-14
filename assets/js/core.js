/* ==========================================================================
   Analysis Lab — core.js
   Theme, level (SL/HL) switch, header/footer injection, progress store,
   and auto-init of every component. Classic script; load after math.js.
   Public API is documented in docs/AUTHORING.md.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1 = window.S1 || {};
  var doc = document, html = doc.documentElement;

  /* ---------- Site config and topic registry ----------------------------- */
  S1.config = {
    siteName: 'Analysis Lab',
    // Set to the public repository URL to show a "Source" link in the footer.
    sourceUrl: 'https://github.com/bennyng1029/2028-IBMathAA-HL'
  };

  // The five strands (Topics 1–5) of IB Mathematics: Analysis and Approaches.
  S1.groups = [
    { id: 't1', num: '1', name: 'Topic 1', title: 'Number and algebra', idea: 'Patterns, growth, counting, complex numbers, and formal mathematical proof.' },
    { id: 't2', num: '2', name: 'Topic 2', title: 'Functions', idea: 'Mappings, graphs, transformations, and algebraic models that connect variables.' },
    { id: 't3', num: '3', name: 'Topic 3', title: 'Geometry and trigonometry', idea: 'Triangles, radians, periodic identities, and vectors, lines, and planes in 3D space.' },
    { id: 't4', num: '4', name: 'Topic 4', nameShort: 'Topic 4', title: 'Statistics and probability', idea: 'Summarizing data, correlation, conditional probability, Bayes\' theorem, and distributions.' },
    { id: 't5', num: '5', name: 'Topic 5', title: 'Calculus', idea: 'Rates of change, optimization, integration, differential equations, and Maclaurin series.' }
  ];
  S1.group = function (id) {
    for (var i = 0; i < S1.groups.length; i++) if (S1.groups[i].id === id) return S1.groups[i];
    return null;
  };

  // Single source of truth for the 17 topics (header nav, index cells, hero tiles, pager, practice filters).
  // level: 'ahl' = an Additional HL only page (violet HL tag; hidden in "SL core only" mode).
  S1.topics = [
    { id: 't1-1', group: 't1', ready: true, num: '1.1', sym: 'Sq', short: 'Sequences & series', title: 'Sequences, series and financial models', blurb: 'Standard form, arithmetic and geometric sequences and series, sigma notation, infinite series and compound interest.', href: 'topics/t1-1.html' },
    { id: 't1-2', group: 't1', ready: true, num: '1.2', sym: 'Lg', short: 'Exponents, logs & binomials', title: 'Exponents, logarithms and the binomial theorem', blurb: 'Exponent and logarithm laws, change of base, exponential equations, Pascal\'s triangle and (a + b)^n.', href: 'topics/t1-2.html' },
    { id: 't1-3', group: 't1', ready: true, level: 'ahl', num: '1.3', sym: 'Pc', short: 'Counting & partial fractions', title: 'Counting, partial fractions and extended binomials', blurb: 'Permutations nPr, combinations nCr, rational-exponent binomial expansions (1 + x)^n and partial fractions.', href: 'topics/t1-3.html' },
    { id: 't1-4', group: 't1', ready: true, level: 'ahl', num: '1.4', sym: 'Cx', short: 'Complex numbers', title: 'Complex numbers and De Moivre\'s theorem', blurb: 'Cartesian a + bi, Argand diagram, polar r cis θ and Euler re^{iθ} forms, De Moivre\'s theorem and roots of polynomials.', href: 'topics/t1-4.html' },
    { id: 't1-5', group: 't1', ready: true, num: '1.5', sym: 'Pf', short: 'Proof & linear systems', title: 'Mathematical proof and systems of linear equations', blurb: 'Direct algebraic proof, mathematical induction, proof by contradiction, counterexamples and 3 × 3 linear systems.', href: 'topics/t1-5.html' },
    { id: 't2-1', group: 't2', ready: true, num: '2.1', sym: 'Fn', short: 'Lines & functions', title: 'Lines, functions, domains, inverses and composites', blurb: 'Linear equations, function notation, domain and range, composite (f ∘ g)(x) and inverse functions f^{-1}(x).', href: 'topics/t2-1.html' },
    { id: 't2-2', group: 't2', ready: true, num: '2.2', sym: 'Qd', short: 'Quadratics, rational & exp', title: 'Quadratics, rational, exponential and log models', blurb: 'Vertex and intercept forms, discriminant Δ = b^2 − 4ac, rational asymptotes, exponential growth/decay and GDC solving.', href: 'topics/t2-2.html' },
    { id: 't2-3', group: 't2', ready: true, num: '2.3', sym: 'Tr', short: 'Transformations & polynomials', title: 'Transformations, polynomials and modulus functions', blurb: 'Graph transformations, factor and remainder theorems, Vieta\'s root relations, odd/even symmetry and modulus inequalities.', href: 'topics/t2-3.html' },
    { id: 't3-1', group: 't3', ready: true, num: '3.1', sym: 'Gm', short: '3D geometry & triangles', title: '3D geometry, triangle trigonometry and radians', blurb: '3D distance and volume, sine and cosine rules, ambiguous case, triangle area, radians, arc length and sector area.', href: 'topics/t3-1.html' },
    { id: 't3-2', group: 't3', ready: true, num: '3.2', sym: 'Tg', short: 'Unit circle & trig identities', title: 'The unit circle, trig identities and periodic models', blurb: 'Exact unit-circle values, Pythagorean and double-angle identities, sinusoidal models, reciprocal and compound-angle trig.', href: 'topics/t3-2.html' },
    { id: 't3-3', group: 't3', ready: true, level: 'ahl', num: '3.3', sym: 'Vc', short: 'Vectors, lines & planes', title: 'Vectors, lines and planes in 3D space', blurb: 'Scalar (dot) product, vector equations of lines, skew lines, vector (cross) product, planes and 3D intersections.', href: 'topics/t3-3.html' },
    { id: 't4-1', group: 't4', ready: true, num: '4.1', sym: 'St', short: 'Statistics & regression', title: 'Descriptive statistics, correlation and regression', blurb: 'Sampling, histograms, cumulative frequency, box plots, IQR and outliers, standard deviation, Pearson\'s r and regression lines.', href: 'topics/t4-1.html' },
    { id: 't4-2', group: 't4', ready: true, num: '4.2', sym: 'Pb', short: 'Probability & distributions', title: 'Probability, distributions, Bayes and continuous RVs', blurb: 'Venn and tree diagrams, conditional probability, Binomial and Normal distributions, z-scores, Bayes\' theorem and continuous PDFs.', href: 'topics/t4-2.html' },
    { id: 't5-1', group: 't5', ready: true, num: '5.1', sym: 'Df', short: 'Differentiation & optimization', title: 'Differentiation, curve analysis and optimization', blurb: 'Limits, tangents and normals, chain/product/quotient rules, stationary points, inflexion points and optimization.', href: 'topics/t5-1.html' },
    { id: 't5-2', group: 't5', ready: true, num: '5.2', sym: 'In', short: 'Integration & kinematics', title: 'Integration, areas between curves and kinematics', blurb: 'Anti-differentiation, reverse chain rule, definite integrals, areas between curves and kinematics displacement vs total distance.', href: 'topics/t5-2.html' },
    { id: 't5-3', group: 't5', ready: true, level: 'ahl', num: '5.3', sym: 'Ca', short: 'Advanced calculus & volumes', title: 'First principles, L\'Hôpital, implicit, parts and volumes', blurb: 'First principles, L\'Hôpital\'s rule, implicit differentiation, related rates, integration by substitution/parts and volumes of revolution.', href: 'topics/t5-3.html' },
    { id: 't5-4', group: 't5', ready: true, level: 'ahl', num: '5.4', sym: 'De', short: 'DEs & Maclaurin series', title: 'Differential equations and Maclaurin series', blurb: 'Slope fields, Euler\'s method, separable, homogeneous and integrating-factor DEs, and Maclaurin series expansions.', href: 'topics/t5-4.html' }
  ];
  S1.topic = function (id) {
    for (var i = 0; i < S1.topics.length; i++) if (S1.topics[i].id === id) return S1.topics[i];
    return null;
  };
  /** Topics of one strand: S1.topicsIn('t2'). */
  S1.topicsIn = function (groupId) { return S1.topics.filter(function (t) { return t.group === groupId; }); };

  /* ---------- Small utilities -------------------------------------------- */
  var uidN = 0;
  var util = S1.util = {
    escapeHtml: function (s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    },
    uid: function (prefix) { return (prefix || 's1') + '-' + (++uidN); },
    el: function (tag, attrs, children) {
      var node = doc.createElement(tag), k;
      if (attrs) for (k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k) || attrs[k] == null || attrs[k] === false) continue;
        if (k === 'html') node.innerHTML = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else if (k === 't') S1.i18n.live(node, (function (key) { return function () { return S1.i18n.ui(key); }; })(attrs[k]));
        else if (k === 'tp') S1.i18n.live(node, (function (key) { return function () { return tpQuiet(key); }; })(attrs[k]));
        else if (k === 'tTitle') S1.i18n.liveAttr(node, 'title', (function (key) { return function () { return S1.i18n.ui(key); }; })(attrs[k]));
        else if (k === 'tLabel') S1.i18n.liveAttr(node, 'aria-label', (function (key) { return function () { return S1.i18n.ui(key); }; })(attrs[k]));
        else if (k.slice(0, 2) === 'on' && typeof attrs[k] === 'function') node.addEventListener(k.slice(2), attrs[k]);
        else node.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
      }
      if (children != null) (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c == null) return;
        node.appendChild(typeof c === 'string' ? doc.createTextNode(c) : c);
      });
      return node;
    },
    shuffle: function (arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    },
    clamp: function (x, lo, hi) { return Math.min(hi, Math.max(lo, x)); },
    emit: function (name, detail) {
      var ev;
      try { ev = new CustomEvent(name, { detail: detail || {} }); }
      catch (e) { ev = doc.createEvent('CustomEvent'); ev.initCustomEvent(name, false, false, detail || {}); }
      doc.dispatchEvent(ev);
    },
    reducedMotion: function () {
      return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    },
    root: function () { return html.getAttribute('data-root') || (doc.body && doc.body.getAttribute('data-root')) || ''; },
    page: function () { return (doc.body && doc.body.getAttribute('data-page')) || ''; }
  };
  var el = util.el;

  /* ---------- Storage (never throws; falls back to memory) ---------------- */
  var mem = {};
  var store = S1.store = {
    getRaw: function (k) { try { var v = window.localStorage.getItem(k); if (v != null) return v; } catch (e) { /* blocked */ } return k in mem ? mem[k] : null; },
    setRaw: function (k, v) { mem[k] = v; try { window.localStorage.setItem(k, v); } catch (e) { /* blocked */ } },
    remove: function (k) { delete mem[k]; try { window.localStorage.removeItem(k); } catch (e) { /* blocked */ } },
    get: function (k, fallback) { var v = store.getRaw(k); if (v == null) return fallback; try { return JSON.parse(v); } catch (e) { return fallback; } },
    set: function (k, v) { store.setRaw(k, JSON.stringify(v)); }
  };

  /* ---------- Theme ------------------------------------------------------- */
  var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  S1.theme = {
    get: function () {
      var t = html.getAttribute('data-theme');
      if (t === 'light' || t === 'dark') return t;
      return darkQuery && darkQuery.matches ? 'dark' : 'light';
    },
    set: function (t) {
      html.setAttribute('data-theme', t);
      store.setRaw('s1.theme', t);
      syncThemeButton();
      util.emit('s1:themechange', { theme: t });
    },
    toggle: function () { S1.theme.set(S1.theme.get() === 'dark' ? 'light' : 'dark'); },
    color: function (token) { return getComputedStyle(html).getPropertyValue(token).trim(); },
    onChange: function (fn) { doc.addEventListener('s1:themechange', function (e) { fn(e.detail.theme); }); }
  };
  if (darkQuery) {
    var sysChange = function () { if (!html.getAttribute('data-theme')) { syncThemeButton(); util.emit('s1:themechange', { theme: S1.theme.get() }); } };
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', sysChange);
    else if (darkQuery.addListener) darkQuery.addListener(sysChange);
  }
  function syncThemeButton() {
    var dark = S1.theme.get() === 'dark';
    Array.prototype.forEach.call(doc.querySelectorAll('.theme-toggle'), function (b) {
      var key = dark ? 'Switch to light theme' : 'Switch to dark theme';   // i18n
      S1.i18n.liveAttr(b, 'aria-label', function () { return S1.i18n.ui(key); });
      S1.i18n.liveAttr(b, 'title', function () { return S1.i18n.ui(key); });
    });
  }

  /* ---------- Level: SL core only / SL + HL ------------------------------- */
  S1.level = {
    get: function () { return html.getAttribute('data-show') === 'sl' ? 'sl' : 'all'; },
    set: function (v) {
      if (v === 'sl') html.setAttribute('data-show', 'sl'); else html.removeAttribute('data-show');
      store.setRaw('s1.level', v === 'sl' ? 'sl' : 'all');
      syncLevelButtons();
      util.emit('s1:levelchange', { level: S1.level.get() });
    },
    onChange: function (fn) { doc.addEventListener('s1:levelchange', function (e) { fn(e.detail.level); }); }
  };
  function syncLevelButtons() {
    var v = S1.level.get();
    Array.prototype.forEach.call(doc.querySelectorAll('[data-s1-level-btn]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-s1-level-btn') === v));
    });
  }
  (function () {
    var t = store.getRaw('s1.theme'), l = store.getRaw('s1.level');
    if ((t === 'light' || t === 'dark') && !html.getAttribute('data-theme')) html.setAttribute('data-theme', t);
    if (l === 'sl') html.setAttribute('data-show', 'sl');
  })();

  /* ---------- Question registry (the engine is in quiz.js) ---------------- */
  var bank = [], bankById = {};
  var TYPES = { mcq: 1, numeric: 1, multi: 1, order: 1, short: 1 };
  var TIERS = { foundation: 1, exam: 1, challenge: 1 };
  S1.questions = {
    register: function (topic, list) {
      (list || []).forEach(function (q, i) {
        if (!q || typeof q !== 'object') return;
        q.topic = q.topic || topic;
        q.level = q.level || 'sl';
        q.tier = q.tier || 'foundation';
        q.marks = q.marks || 1;
        var problems = [];
        if (!q.id) { q.id = topic + '-auto-' + i; problems.push('missing id'); }
        if (!TYPES[q.type]) problems.push('unknown type "' + q.type + '"');
        if (!TIERS[q.tier]) problems.push('unknown tier "' + q.tier + '"');
        if (q.level !== 'sl' && q.level !== 'ahl') problems.push('level must be "sl" or "ahl"');
        if (!q.stem) problems.push('missing stem');
        if ((q.type === 'mcq' || q.type === 'multi' || q.type === 'order') && !(q.options && q.options.length)) problems.push('missing options');
        if (q.type === 'numeric' && !isFinite(Number(q.answer))) problems.push('numeric answer must be a number');
        if (bankById[q.id]) problems.push('duplicate id');
        if (problems.length && window.console) console.warn('[S1.questions] ' + q.id + ': ' + problems.join('; '));
        if (bankById[q.id] || !TYPES[q.type] || !q.stem) return;
        bankById[q.id] = q; bank.push(q);
      });
      util.emit('s1:questions', { topic: topic });
    },
    all: function () { return bank.slice(); },
    get: function (id) { return bankById[id] || null; },
    byTopic: function (topic) { return bank.filter(function (q) { return q.topic === topic; }); },
    filter: function (f) {
      f = f || {};
      return bank.filter(function (q) {
        if (f.ids && f.ids.indexOf(q.id) === -1) return false;
        if (f.topics && f.topics.length && f.topics.indexOf(q.topic) === -1) return false;
        if (f.level && f.level !== 'all' && q.level !== f.level) return false;
        if (f.tier && f.tier !== 'all' && q.tier !== f.tier) return false;
        if (f.type && f.type !== 'all' && q.type !== f.type) return false;
        return true;
      });
    }
  };

  /* ---------- Progress store ---------------------------------------------- */
  var PKEY = 's1.progress.v1';
  function blank() { return { v: 1, checks: {}, totals: {}, quiz: {}, mistakes: {} }; }
  function load() {
    var d = store.get(PKEY, null);
    if (!d || typeof d !== 'object' || d.v !== 1) d = blank();
    d.checks = d.checks || {}; d.totals = d.totals || {}; d.quiz = d.quiz || {}; d.mistakes = d.mistakes || {};
    return d;
  }
  function save(d) { store.set(PKEY, d); util.emit('s1:progress', {}); }

  S1.progress = {
    getCheck: function (topic, id) { var d = load(); return !!(d.checks[topic] && d.checks[topic][id]); },
    setCheck: function (topic, id, on) {
      var d = load(); d.checks[topic] = d.checks[topic] || {};
      if (on) d.checks[topic][id] = 1; else delete d.checks[topic][id];
      save(d);
    },
    setCheckTotal: function (topic, ids) {
      var d = load(), keep = {}, old = d.checks[topic] || {};
      ids.forEach(function (id) { if (old[id]) keep[id] = 1; });
      if (d.totals[topic] === ids.length && Object.keys(old).length === Object.keys(keep).length) return;
      d.totals[topic] = ids.length; d.checks[topic] = keep; save(d);
    },
    recordAnswer: function (q, result) {
      var d = load(), r = d.quiz[q.id] || { topic: q.topic, right: 0, wrong: 0 };
      if (result === 'right') { r.right++; delete d.mistakes[q.id]; }
      else { r.wrong++; d.mistakes[q.id] = 1; }
      r.last = result; r.at = Date.now();
      d.quiz[q.id] = r; save(d);
    },
    result: function (id) { return load().quiz[id] || null; },
    mistakes: function () { return Object.keys(load().mistakes); },
    summary: function (topic) {
      var d = load(), checks = d.checks[topic] || {};
      var checkTotal = d.totals[topic] || 0;
      var checkDone = Math.min(Object.keys(checks).length, checkTotal);
      var qs = S1.questions.byTopic(topic), right = 0;
      qs.forEach(function (q) { if (d.quiz[q.id] && d.quiz[q.id].right > 0) right++; });
      var total = checkTotal + qs.length;
      return { checkDone: checkDone, checkTotal: checkTotal, quizRight: right, quizTotal: qs.length, percent: total ? Math.round(100 * (checkDone + right) / total) : 0 };
    },
    reset: function () { store.remove(PKEY); util.emit('s1:progress', { reset: true }); }
  };

  /* ---------- i18n: English is the source; other languages are overlays ------ */
  var LANGS = [
    { id: 'en', label: 'English' },
    { id: 'ja', label: '日本語', font: 'Noto+Sans+JP:wght@400;700' },
    { id: 'zh-Hant', label: '繁體中文', font: 'Noto+Sans+TC:wght@400;700' },
    { id: 'ko', label: '한국어', font: 'Noto+Sans+KR:wght@400;700' }
  ];
  var lang = 'en', tables = {}, manifests = {}, reverse = {}, seenUi = {}, seenPage = {}, scopesLoaded = {};
  var srcMap = typeof WeakMap === 'function' ? new WeakMap() : null;
  var attrMap = typeof WeakMap === 'function' ? new WeakMap() : null;
  var cattrMap = typeof WeakMap === 'function' ? new WeakMap() : null;
  var svgMap = typeof WeakMap === 'function' ? new WeakMap() : null;
  var pageTitle = null;
  var UNIT_SEL = 'h1,h2,h3,h4,h5,h6,p,li,dt,dd,th,td,caption,figcaption,summary,legend,blockquote,button,option,label,.worked__math,.eq__formula,[data-i18n]';
  var SKIP_SEL = '[data-i18n="off"],.chem,.math,.unit,code,pre,kbd,samp,script,style,noscript';
  var MATH_SEL = '.worked__math,.eq__formula';
  var ATTRS = ['title', 'aria-label', 'placeholder', 'alt'];
  var COMP_ATTRS = ['data-title', 'data-toc', 'data-def', 'data-label', 'data-kicker', 'data-correct'];
  var SVG_SKIP = '[data-i18n="off"],.chem,.math,.unit,.mol,[data-s1-mol],[data-s1-mol-ref],[data-s1-widget],.widget';
  function isSvgLabel(text) {
    return /[A-Za-zÀ-ɏ]{2}/.test(text) && !/^[A-Z][a-z]?$/.test(text) &&
      !(/\d/.test(text) && /^(?:[A-Z][a-z]?|\d|[()\[\]+\-−\s])+$/.test(text));
  }
  function translatable(key) { return /[A-Za-zÀ-ɏ]/.test(String(key).replace(CTX, '')); }

  function norm(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }
  function fill(s, vars) { return vars ? s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; }) : s; }
  function table(l) { return tables[l] || (tables[l] = { scopes: {}, questions: {} }); }
  function lookupIn(scopes, key) {
    if (lang === 'en') return null;
    var sc = table(lang).scopes;
    for (var i = 0; i < scopes.length; i++) { var v = sc[scopes[i]] && sc[scopes[i]][key]; if (typeof v === 'string' && v !== '') return v; }
    return null;
  }
  function lookup(key) { return lookupIn([util.page(), 'common'], key); }
  function lookupUi(key) { return lookupIn(['ui'], key); }
  var CTX = /\|[A-Za-z0-9_-]+$/;
  var quiet = false;
  function makeT(find, seenSet) {
    var f = function (english, vars) {
      var key = norm(english);
      if (!quiet) seenSet[key] = 1;
      var tr = find(key), plain = String(english);
      if (!tr && CTX.test(key)) { tr = find(key.replace(CTX, '')); plain = plain.replace(CTX, ''); }
      else if (CTX.test(key)) plain = plain.replace(CTX, '');
      if (tr) { (reverse[lang] || (reverse[lang] = {}))[norm(tr)] = english; return fill(tr, vars); }
      return fill(plain, vars);
    };
    f.n = function (count, forms, vars) {
      var v = { n: count }, k;
      if (vars) for (k in vars) v[k] = vars[k];
      return f(count === 1 && forms.one != null ? forms.one : forms.other, v);
    };
    return f;
  }

  S1.t = makeT(lookup, seenPage);
  var tp = S1.t;
  var t = makeT(lookupUi, seenUi);
  function either(english, vars) {
    var key = norm(english), own = lookup(key), tr = own || lookupUi(key);
    if (tr) { (reverse[lang] || (reverse[lang] = {}))[norm(tr)] = english; return fill(tr, vars); }
    return fill(String(english).replace(CTX, ''), vars);
  }

  function render(node) {
    if (node.__s1live) { var v = node.__s1live(); if (v != null) { node.innerHTML = v; initFormat(node); each(node, '.table-scroll', tableRegion); } }
    if (node.__s1attrs) for (var k in node.__s1attrs) { var a = node.__s1attrs[k](); if (a == null) node.removeAttribute(k); else node.setAttribute(k, a); }
  }
  function live(node, fn) { node.__s1live = fn; node.setAttribute('data-i18n-live', ''); render(node); return node; }
  function liveAttr(node, name, fn) { (node.__s1attrs || (node.__s1attrs = {}))[name] = fn; node.setAttribute('data-i18n-live', ''); render(node); return node; }
  function sourceOf(s) {
    var k = norm(s);
    for (var l in reverse) if (reverse[l][k]) return reverse[l][k];
    return s;
  }
  function liveText(node, text) { var src = sourceOf(text); return live(node, function () { return tpQuiet(src); }); }
  function tpQuiet(s, vars) { quiet = true; try { return tp(s, vars); } finally { quiet = false; } }
  function bindTree(root) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-t]'), function (n) { var k = n.getAttribute('data-t'); n.removeAttribute('data-t'); live(n, function () { return t(k); }); });
    Array.prototype.forEach.call(root.querySelectorAll('[data-t-aria]'), function (n) { var k = n.getAttribute('data-t-aria'); n.removeAttribute('data-t-aria'); liveAttr(n, 'aria-label', function () { return t(k); }); });
    Array.prototype.forEach.call(root.querySelectorAll('[data-t-title]'), function (n) { var k = n.getAttribute('data-t-title'); n.removeAttribute('data-t-title'); liveAttr(n, 'title', function () { return t(k); }); });
  }
  function off(node) { node.setAttribute('data-i18n', 'off'); return node; }

  var UNIT_WORDS = /^(?:mol|dm|cm|mm|nm|pm|km|kg|mg|g|kPa|Pa|atm|kJ|J|K|s|min|h|L|mL|ppm|Hz|eV|V|C|N|m|sf|dp|rad|deg|sin|cos|tan|sec|csc|cosec|cot|ln|log|lim|max|min|mod|cis|arg|Re|Im|dx|dy|dt|du|dv|x|y|z|n|r|t|k|p|q|u|v|w)$/;
  function hasWords(node) {
    var clone = node.cloneNode(true);
    Array.prototype.forEach.call(clone.querySelectorAll('.chem,.math,.unit,.mono,i,var,sub,sup,code,[data-i18n="off"]'), function (x) { x.parentNode.removeChild(x); });
    return (clone.textContent.match(/[A-Za-zÀ-ɏ]+/g) || []).some(function (w) {
      return w.length >= 2 && !UNIT_WORDS.test(w) && !/^(?:[A-Z][a-z]?)+$/.test(w);
    });
  }
  function splitGuiding(scope) {
    Array.prototype.forEach.call(scope.querySelectorAll('.guiding'), function (p) {
      var lab = p.querySelector('.guiding__label');
      if (!lab || p.hasAttribute('data-s1-split') || !/^\s*guiding question\s*$/i.test(lab.textContent)) return;
      p.setAttribute('data-s1-split', '');
      p.removeChild(lab);
      var q = doc.createElement('span');
      q.className = 'guiding__q'; q.setAttribute('data-i18n', '');
      while (p.firstChild) q.appendChild(p.firstChild);
      var shell = doc.createElement('span');
      shell.className = 'guiding__label'; shell.setAttribute('data-i18n', 'off');
      p.appendChild(shell); p.appendChild(q);
      live(shell, function () { return t('Guiding question'); });
    });
  }

  var INLINE_TAGS = /^(?:SPAN|I|B|EM|STRONG|VAR|A|SUB|SUP|ABBR|SMALL|U|S|CODE|BDI)$/;
  function isInlineOff(o) {
    if (!INLINE_TAGS.test(o.tagName) || o.querySelector('div,p,ul,ol,table,img,svg,canvas,input,select,textarea,button')) return false;
    for (var i = 0; i < o.attributes.length; i++) if (/^data-s\d/.test(o.attributes[i].name)) return false;
    return true;
  }
  function capture(root) {
    if (!srcMap) return;
    if (root !== doc && root.closest && root.closest('[data-i18n="off"]')) return;
    var scope = root === doc ? doc.body : root;
    if (!scope) return;
    splitGuiding(scope);
    var nodes = Array.prototype.slice.call(scope.querySelectorAll(UNIT_SEL));
    if (scope.matches && scope.matches(UNIT_SEL)) nodes.unshift(scope);
    nodes.forEach(function (n) {
      if (srcMap.has(n) || n.closest(SKIP_SEL)) return;
      if (n.querySelector('input,select,textarea,canvas,svg,[data-s1-widget],[data-s1-quiz]')) return;
      var inner = n.querySelectorAll(UNIT_SEL), offs = 0, i, o;
      for (i = 0; i < inner.length; i++) {
        o = inner[i].closest('[data-i18n="off"]');
        if (o && o !== n && n.contains(o) && isInlineOff(o)) { offs++; continue; }
        return;
      }
      var text = n.textContent;
      if (offs) {
        var bare = n.cloneNode(true);
        Array.prototype.forEach.call(bare.querySelectorAll('[data-i18n="off"]'), function (x) { if (x.parentNode) x.parentNode.removeChild(x); });
        text = bare.textContent;
      }
      if (!/[A-Za-zÀ-ɏ]{2}/.test(text)) return;
      var isMath = n.matches(MATH_SEL);
      if (isMath && !hasWords(n)) return;
      srcMap.set(n, { html: n.innerHTML, key: norm(n.innerHTML), math: isMath });
      n.setAttribute('data-i18n-src', '');
    });
    Array.prototype.forEach.call(scope.querySelectorAll('[title],[aria-label],[placeholder],[alt]'), function (n) {
      if (attrMap.has(n) || n.closest('[data-i18n="off"]') || n.matches('[data-s1-toc],[data-s1-header],[data-s1-footer]')) return;
      var o = {}, any = false;
      ATTRS.forEach(function (a) { var v = n.getAttribute(a); if (v && /[A-Za-z]{2}/.test(v)) { o[a] = v; any = true; } });
      if (any) { attrMap.set(n, o); n.setAttribute('data-i18n-attr', ''); }
    });
    Array.prototype.forEach.call(scope.querySelectorAll('[data-title],[data-toc],[data-def],[data-label],[data-kicker],[data-correct]'), function (n) {
      var isOff = !!n.closest('[data-i18n="off"]');
      if (cattrMap.has(n) || (isOff && !n.hasAttribute('data-label'))) return;
      var o = {}, any = false;
      COMP_ATTRS.forEach(function (a) { if (isOff && a !== 'data-label') return; var v = n.getAttribute(a); if (v && /[A-Za-z]{2}/.test(v)) { o[a] = v; any = true; } });
      if (any) { cattrMap.set(n, o); n.setAttribute('data-i18n-cattr', ''); }
    });
    if (svgMap) Array.prototype.forEach.call(scope.querySelectorAll('svg text, svg tspan'), function (n) {
      if (svgMap.has(n) || n.firstElementChild || n.closest(SVG_SKIP)) return;
      var key = norm(n.textContent);
      if (!isSvgLabel(key)) return;
      svgMap.set(n, { text: n.textContent, key: key });
      n.setAttribute('data-i18n-svg', '');
    });
  }
  function restoreDefs(n, u) {
    var got = n.querySelectorAll('.i18n-tr [data-def]');
    if (!got.length) got = n.querySelectorAll('[data-def]');
    if (!got.length) return;
    if (!u.defs) {
      var box = doc.createElement('div'); box.innerHTML = u.html;
      u.defs = Array.prototype.map.call(box.querySelectorAll('[data-def]'), function (d) { return d.getAttribute('data-def'); });
    }
    if (got.length !== u.defs.length) return;
    Array.prototype.forEach.call(got, function (d, i) {
      var tr = d.getAttribute('data-def'), en = u.defs[i];
      if (norm(tr) !== norm(en)) d.setAttribute('data-def-tr', tr);
      d.setAttribute('data-def', en);
    });
  }
  function moveUnit(from, to) {
    if (!srcMap || !srcMap.has(from)) return;
    srcMap.set(to, srcMap.get(from)); srcMap.delete(from);
    from.removeAttribute('data-i18n-src'); to.setAttribute('data-i18n-src', '');
  }

  function applyLang(root) {
    root = root || doc;
    var english = lang === 'en';
    if (srcMap) Array.prototype.forEach.call(root.querySelectorAll('[data-i18n-src]'), function (n) {
      var u = srcMap.get(n); if (!u) return;
      var tr = english ? null : lookup(u.key), out = u.html;
      if (tr) {
        var both = n.closest('.callout--exam, [data-i18n="both"]');
        out = both ? u.html + '<span class="i18n-tr" lang="' + lang + '">' + tr + '</span>' : tr;
      }
      if (!english && !tr) n.setAttribute('data-i18n-miss', ''); else n.removeAttribute('data-i18n-miss');
      if ((n.__s1cur == null ? u.html : n.__s1cur) === out) return;
      n.__s1cur = out; n.innerHTML = out;
      if (tr) restoreDefs(n, u);
      initFormat(n); initDefs(n);
    });
    if (svgMap) Array.prototype.forEach.call(root.querySelectorAll('[data-i18n-svg]'), function (n) {
      var u = svgMap.get(n); if (!u) return;
      var tr = english ? null : lookup(u.key), out = tr ? tr.replace(/<[^>]+>/g, '') : u.text;
      if (!english && !tr) n.setAttribute('data-i18n-miss', ''); else n.removeAttribute('data-i18n-miss');
      if (n.textContent !== out) n.textContent = out;
    });
    if (attrMap) Array.prototype.forEach.call(root.querySelectorAll('[data-i18n-attr]'), function (n) {
      var o = attrMap.get(n); if (!o) return;
      for (var a in o) n.setAttribute(a, english ? o[a] : (lookup(norm(o[a])) || o[a]));
    });
    if (root === doc) {
      if (pageTitle == null) pageTitle = doc.title;
      doc.title = english ? pageTitle : (lookup(norm(pageTitle)) || pageTitle);
    }
    labelPass(root);
    Array.prototype.forEach.call(root.querySelectorAll('[data-i18n-live]'), render);
  }

  var CSS_LABELS = [
    ['.callout--key', 'Key idea'], ['.callout--mistake', 'Common mistake'], ['.callout--exam', 'Exam tip'],   // i18n
    ['.callout--scope', 'Not needed for IB'], ['.callout--booklet', 'In your formula booklet'],   // i18n
    ['.tryit', 'Try it'], ['.worked__why', 'Why'], ['.worked__answer', 'Answer'], ['.tryit__solution', 'Solution'],   // i18n
    ['.tryit__hints > li, .q__hints > li', 'Hint']   // i18n
  ];
  function labelPass(root) {
    CSS_LABELS.forEach(function (pair) {
      Array.prototype.forEach.call(root.querySelectorAll(pair[0]), function (n) {
        var custom = n.tagName === 'LI' ? null : n.getAttribute(n.classList.contains('worked__why') ? 'data-label' : 'data-title');
        n.setAttribute('data-s1-label', custom ? tpQuiet(custom) : t(pair[1]));
      });
    });
  }

  function loadScript(src, done) {
    var s = doc.createElement('script');
    s.src = src; s.onload = s.onerror = function () { done(); };
    doc.head.appendChild(s);
  }
  function loadLang(l, done) {
    if (l === 'en') return done();
    var root = util.root(), page = util.page();
    function scopes() {
      var have = manifests[l] || [], want = ['ui'];
      function add(sc) { if (sc && have.indexOf(sc) > -1 && want.indexOf(sc) < 0) want.push(sc); }
      add('common'); add(page); add(page + '.q');
      var all = page === 'practice';
      Array.prototype.forEach.call(doc.querySelectorAll('[data-s1-quiz]'), function (q) {
        var tp2 = q.getAttribute('data-topic') || '';
        if (!tp2 || tp2 === 'all') { if (tp2 === 'all' || q.getAttribute('data-mode') === 'review') all = true; return; }
        tp2.split(',').forEach(function (id) { id = id.trim(); add(id + '.q'); add(id); });
      });
      if (all) have.forEach(function (sc) { if (/^[ts]\d+-\d+h?\.q$/.test(sc) || (/^[ts]\d+-\d+h?$/.test(sc) && have.indexOf(sc + '.q') < 0)) add(sc); });
      return want.filter(function (sc) { return !scopesLoaded[l + '/' + sc]; });
    }
    function next() {
      var list = scopes(), left = list.length;
      if (!left) return done();
      list.forEach(function (s) { scopesLoaded[l + '/' + s] = 1; loadScript(root + 'i18n/' + l + '/' + s + '.js', function () { if (--left === 0) done(); }); });
    }
    if (manifests[l]) next(); else loadScript(root + 'i18n/' + l + '/index.js', function () { manifests[l] = manifests[l] || []; next(); });
  }
  function loadFont(l) {
    var def = LANGS.filter(function (x) { return x.id === l; })[0];
    if (!def || !def.font || doc.getElementById('s1-font-' + l)) return;
    var link = doc.createElement('link');
    link.id = 's1-font-' + l; link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=' + def.font + '&display=swap';
    doc.head.appendChild(link);
  }
  function holdPlace(onLoad) {
    var node = null, top = 0, r, i, t = null, moved = false;
    function userMoved() { moved = true; }
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) { window.addEventListener(ev, userMoved, { passive: true, once: true }); });
    function instantly(fn) { var sb = html.style.scrollBehavior; html.style.scrollBehavior = 'auto'; fn(); html.style.scrollBehavior = sb; }
    try {
      var id = decodeURIComponent((window.location.hash || '').slice(1));
      t = id ? doc.getElementById(id) : null;
    } catch (e) { /* malformed hash */ }
    if (onLoad) {
      if (!t) return function () {};
      var go = function () { if (!moved && t.isConnected && t.offsetParent !== null) instantly(function () { t.scrollIntoView(); }); };
      return function () { go(); window.setTimeout(go, 60); window.setTimeout(go, 400); window.setTimeout(go, 1200); };
    }
    if (t) { r = t.getBoundingClientRect(); if (r.top > -4 && r.top < window.innerHeight * 0.6) node = t; }
    if (!node && window.pageYOffset > 0) {
      var c = doc.querySelectorAll('main h2, main h3, main [data-i18n-src], main figure');
      for (i = 0; i < c.length; i++) { r = c[i].getBoundingClientRect(); if (r.height && r.top >= 0) { if (r.top < window.innerHeight) node = c[i]; break; } }
    }
    if (!node) return function () {};
    top = node.getBoundingClientRect().top;
    function put() {
      if (moved || !node.isConnected) return;
      var d = node.getBoundingClientRect().top - top;
      if (Math.abs(d) >= 1) instantly(function () { window.scrollBy(0, d); });
    }
    return function () { put(); window.setTimeout(put, 60); window.setTimeout(put, 400); };
  }
  function syncLangControls() {
    Array.prototype.forEach.call(doc.querySelectorAll('[data-s1-lang-select]'), function (s) { s.value = lang; });
  }

  S1.i18n = {
    languages: LANGS,
    get: function () { return lang; },
    set: function (l, opts) {
      if (!LANGS.some(function (x) { return x.id === l; })) l = 'en';
      if (!(opts && opts.silent)) store.setRaw('s1.lang', l);
      var wanted = S1.i18n._wanted = l;
      loadLang(l, function () {
        if (S1.i18n._wanted !== wanted) return;
        var keep = holdPlace(!!(opts && opts.silent));
        lang = l;
        html.setAttribute('lang', l);
        loadFont(l);
        applyLang(doc);
        syncLangControls();
        util.emit('s1:langchange', { lang: l });
        keep();
      });
    },
    register: function (l, scope, data) {
      var tb = table(l), k, f, name = String(scope).replace(/\.q$/, '');
      var st = tb.scopes[name] || (tb.scopes[name] = {});
      data = data || {};
      for (k in (data.strings || {})) if (data.strings[k]) st[norm(k)] = data.strings[k];
      for (k in (data.questions || {})) { var q = tb.questions[k] || (tb.questions[k] = {}); for (f in data.questions[k]) q[f] = data.questions[k][f]; }
      scopesLoaded[l + '/' + scope] = 1;
    },
    manifest: function (l, scopes) { manifests[l] = scopes || []; },
    onChange: function (fn) { doc.addEventListener('s1:langchange', function (e) { fn(e.detail.lang); }); },
    q: function (question, field, index) {
      var o = lang === 'en' ? null : table(lang).questions[question.id];
      var en = question[field], tr = o ? o[field] : null;
      if (index != null) { en = en ? en[index] : undefined; tr = tr ? tr[index] : null; }
      return typeof tr === 'string' && tr !== '' ? tr : en;
    },
    hasQ: function (question, field, index) { return lang !== 'en' && S1.i18n.q(question, field, index) !== (index != null ? (question[field] || [])[index] : question[field]); },
    ui: t, either: either,
    live: live, liveAttr: liveAttr, liveText: liveText, render: render, source: sourceOf, capture: capture, apply: applyLang, norm: norm, translatable: translatable,
    catalog: function () {
      var entries = [], blocks = [], attrs = [];
      function ctxOf(n) {
        var parts = [], sec = n.closest('.topic-section, section, header, footer');
        var h = sec && sec.querySelector('h1, h2, h3');
        if (h) { var hu = srcMap.get(h); parts.push((hu ? hu.html.replace(/<[^>]+>/g, '') : h.textContent).replace(/\s+/g, ' ').trim().slice(0, 60)); }
        var comp = [['.worked', 'worked example'], ['.tryit, [data-s1-numeric]', 'try it'], ['.callout--exam', 'exam tip (shown in English + translation)'], ['.callout--key', 'key idea'],
          ['.callout--mistake', 'common mistake'], ['.callout--scope', 'not needed for IB'], ['.callout--booklet', 'formula booklet note'], ['.checklist, [data-s1-checklist]', 'checklist'],
          ['.eq', 'equation'], ['table', 'table'], ['[data-s1-widget], .widget', 'widget'], ['.topic-hero', 'page header'], ['[data-level="ahl"]', 'Additional HL']];
        comp.forEach(function (c) { if (n.closest(c[0])) parts.push(c[1]); });
        return parts.join(' > ');
      }
      function push(key, kind, n) {
        var e = null;
        for (var i = 0; i < entries.length; i++) if (entries[i].key === key) e = entries[i];
        if (!e) { e = { key: key, kind: kind, ctx: [] }; entries.push(e); }
        var c = (ctxOf(n) + ' > ' + kind).replace(/^ > /, '');
        if (e.ctx.indexOf(c) < 0) e.ctx.push(c);
      }
      var title = norm(pageTitle == null ? doc.title : pageTitle);
      entries.push({ key: title, kind: 'page title', ctx: ['page title (browser tab)'] });
      Array.prototype.forEach.call(doc.querySelectorAll('[data-i18n-src],[data-i18n-attr],[data-i18n-cattr],[data-i18n-svg]'), function (n) {
        var u = srcMap.get(n), o = attrMap.get(n), c = cattrMap.get(n), g = svgMap.get(n), a;
        if (g) { push(g.key, 'figure label', n); if (blocks.indexOf(g.key) < 0) blocks.push(g.key); }
        if (c) for (a in c) { push(norm(c[a]), a + ' attribute', n); if (attrs.indexOf(norm(c[a])) < 0) attrs.push(norm(c[a])); }
        if (o) for (a in o) { push(norm(o[a]), a + ' attribute', n); if (attrs.indexOf(norm(o[a])) < 0) attrs.push(norm(o[a])); }
        if (u) { push(u.key, u.math ? 'maths line' : n.tagName.toLowerCase(), n); if (blocks.indexOf(u.key) < 0) blocks.push(u.key); }
      });
      return { title: title, blocks: blocks, attrs: attrs, entries: entries, seen: Object.keys(seenPage), seenUi: Object.keys(seenUi) };
    },
    coverage: function () {
      if (lang === 'en') return { lang: lang, missing: [], missingUi: [], total: 0 };
      var c = S1.i18n.catalog(), missing = [], missingUi = [];
      var all = [c.title].concat(c.blocks, c.attrs, c.seen.filter(translatable));
      all.forEach(function (k) { if (!lookup(k) && missing.indexOf(k) < 0) missing.push(k); });
      c.seenUi.filter(translatable).forEach(function (k) { if (!lookupUi(k) && !lookup(k)) missingUi.push(k); });
      return { lang: lang, total: all.length + c.seenUi.length, missing: missing, missingUi: missingUi };
    }
  };
  try {
    if (/[?&]i18ndebug\b/.test(window.location.search) || store.getRaw('s1.i18ndebug')) html.setAttribute('data-i18n-debug', '');
  } catch (e) { /* ignore */ }

  /* ---------- Header and footer ------------------------------------------- */
  var ICON = {
    moon: '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
    sun: '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    chev: '<svg class="toc__chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    up: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
    down: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
  };
  S1.icons = ICON;
  var esc = util.escapeHtml;

  var HL_TAG = '<span class="badge badge--ahl hl-tag">HL</span>';

  function renderHeader(mount) {
    off(mount);
    var root = util.root(), page = util.page();
    var pageTopic = S1.topic(page);
    var groupsHtml = S1.groups.map(function (g) {
      var menuId = 's1-navmenu-' + g.id, here = !!(pageTopic && pageTopic.group === g.id);
      var items = S1.topicsIn(g.id).map(function (tp) {
        var inner = '<span class="site-nav__num">' + tp.num + '</span><span class="site-nav__name" data-t="' + esc(tp.title) + '"></span>' + (tp.level === 'ahl' ? HL_TAG : '');
        var lv = tp.level === 'ahl' ? ' data-level="ahl"' : '';
        if (!tp.ready && page !== tp.id) return '<li' + lv + '><span class="navgroup__soon" aria-disabled="true">' + inner + '<span class="navgroup__tag" data-t="soon"></span></span></li>';
        return '<li' + lv + '><a href="' + root + tp.href + '"' + (page === tp.id ? ' aria-current="page"' : '') + '>' + inner + '</a></li>';
      }).join('');
      return '<li class="navgroup' + (here ? ' is-here' : '') + '" data-group="' + g.id + '">' +
        '<button class="navgroup__btn" type="button" aria-expanded="false" aria-controls="' + menuId + '">' +
          '<span class="navgroup__label" data-t="' + esc(g.name) + '"></span><span class="navgroup__title" data-t="' + esc(g.title) + '"></span>' + ICON.chev.replace('toc__chev', 'navgroup__chev') +
        '</button>' +
        '<ul class="navgroup__menu" id="' + menuId + '" data-t-aria="' + esc(g.title) + '">' + items + '</ul></li>';
    }).join('');
    var links = groupsHtml + '<li><a class="site-nav__link" href="' + root + 'practice.html"' + (page === 'practice' ? ' aria-current="page"' : '') + ' data-t="Practice"></a></li>';
    var langOpts = LANGS.map(function (l) { return '<option value="' + l.id + '" lang="' + l.id + '">' + l.label + '</option>'; }).join('');
    mount.innerHTML =
      '<a class="skip-link" href="#main" data-t="Skip to content"></a>' +
      '<header class="site-header">' +
        '<div class="site-header__bar wrap">' +
          '<a class="wordmark" href="' + root + 'index.html"' + (page === 'home' ? ' aria-current="page"' : '') + '><span class="wordmark__cell" aria-hidden="true">An</span><span>' + esc(S1.config.siteName) + '</span></a>' +
          '<button class="btn btn--small nav-toggle" type="button" aria-expanded="false" aria-controls="s1-header-panel" data-t="Menu"></button>' +
          '<div class="site-header__panel" id="s1-header-panel">' +
            '<nav class="site-nav" data-t-aria="Topics"><ul class="site-nav__list">' + links + '</ul></nav>' +
            '<div class="site-tools">' +
              '<div class="seg" role="group" data-t-aria="Which content to show">' +
                '<button class="seg__btn" type="button" data-s1-level-btn="sl" aria-pressed="false" data-t="SL core only"></button>' +
                '<button class="seg__btn" type="button" data-s1-level-btn="all" aria-pressed="true" data-t="SL + &lt;span class=&quot;seg__hl&quot;&gt;HL&lt;/span&gt;"></button>' +
              '</div>' +
              '<select class="select lang-select" data-s1-lang-select aria-label="Language / 言語 / 語言">' + langOpts + '</select>' +
              '<button class="icon-btn theme-toggle" type="button" aria-label="Switch theme">' + ICON.moon + ICON.sun + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="spectrum" aria-hidden="true"></div>' +
      '</header>';
    var header = mount.querySelector('.site-header'), toggle = mount.querySelector('.nav-toggle');
    bindTree(mount);
    live(toggle, function () { return t(header.classList.contains('is-open') ? 'Close' : 'Menu'); });
    var groups = Array.prototype.slice.call(mount.querySelectorAll('.navgroup'));
    var wide = window.matchMedia ? window.matchMedia('(min-width: 68em)') : { matches: true };
    function setGroup(g, open) {
      g.classList.toggle('is-open', open);
      g.querySelector('.navgroup__btn').setAttribute('aria-expanded', String(open));
    }
    function closeGroups(except) { groups.forEach(function (g) { if (g !== except) setGroup(g, false); }); }
    groups.forEach(function (g) {
      var btn = g.querySelector('.navgroup__btn');
      btn.addEventListener('click', function () {
        var open = !g.classList.contains('is-open');
        if (wide.matches) closeGroups(g);
        setGroup(g, open);
      });
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault(); if (wide.matches) closeGroups(g); setGroup(g, true);
          var first = g.querySelector('.navgroup__menu a'); if (first) first.focus();
        }
      });
      g.querySelector('.navgroup__menu').addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        var as = Array.prototype.slice.call(g.querySelectorAll('.navgroup__menu a')), i = as.indexOf(doc.activeElement);
        if (i < 0) return;
        e.preventDefault();
        if (e.key === 'ArrowUp' && i === 0) btn.focus(); else as[util.clamp(i + (e.key === 'ArrowDown' ? 1 : -1), 0, as.length - 1)].focus();
      });
      g.addEventListener('focusout', function (e) {
        if (wide.matches && !g.contains(e.relatedTarget)) setGroup(g, false);
      });
    });
    doc.addEventListener('click', function (e) {
      if (!wide.matches) return;
      groups.forEach(function (g) { if (!g.contains(e.target)) setGroup(g, false); });
    });
    function openForMobile() {
      groups.forEach(function (g) { setGroup(g, !pageTopic || g.classList.contains('is-here')); });
    }
    toggle.addEventListener('click', function () {
      var open = !header.classList.contains('is-open');
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      render(toggle);
      if (open) openForMobile(); else closeGroups(null);
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var openGroup = groups.filter(function (g) { return g.classList.contains('is-open'); })[0];
      if (wide.matches && openGroup) { setGroup(openGroup, false); if (openGroup.contains(doc.activeElement)) openGroup.querySelector('.navgroup__btn').focus(); }
      else if (header.classList.contains('is-open')) { toggle.click(); toggle.focus(); }
    });
    Array.prototype.forEach.call(mount.querySelectorAll('[data-s1-level-btn]'), function (b) {
      b.addEventListener('click', function () { S1.level.set(b.getAttribute('data-s1-level-btn')); });
    });
    mount.querySelector('.theme-toggle').addEventListener('click', S1.theme.toggle);
    var sel = mount.querySelector('[data-s1-lang-select]');
    sel.value = S1.i18n._wanted || lang;
    sel.addEventListener('change', function () { S1.i18n.set(sel.value); });
    syncLevelButtons(); syncThemeButton();
  }

  function renderFooter(mount) {
    off(mount);
    var root = util.root(), src = S1.config.sourceUrl;
    mount.innerHTML =
      '<footer class="site-footer"><div class="site-footer__inner wrap">' +
        '<div><p data-t="&lt;strong&gt;Analysis Lab&lt;/strong&gt; is an independent study guide for IB Mathematics: Analysis and Approaches (SL and HL, May 2028 examination)."></p>' +
        '<p data-t="It is not affiliated with, or endorsed by, the International Baccalaureate Organization. All questions and explanations are original. Always check details against the official subject guide, the formula booklet and your teacher."></p></div>' +
        '<div><p><span data-t="Code and content:"></span> <a href="' + root + 'LICENSE" data-t="MIT licence"></a>.</p>' +
        '<p data-s1-source>' + (src ? '<a href="' + esc(src) + '" data-t="Source code"></a>' : '<span data-t="Source code: link coming soon."></span>') + '</p>' +
        '<p data-t="Your progress is saved only in this browser. Nothing is sent anywhere."></p></div>' +
      '</div></footer>';
    bindTree(mount);
  }

  /* ---------- Tiles, index cells, pager ----------------------------------- */
  function initTile(node) {
    var tp = S1.topic(node.getAttribute('data-s1-tile') || util.page());
    if (!tp) return;
    off(node);
    node.classList.add('tile');
    if (tp.level === 'ahl') node.classList.add('tile--ahl');
    node.setAttribute('role', 'img');
    node.innerHTML = '<span class="tile__num">' + tp.num + (tp.level === 'ahl' ? ' ' + HL_TAG : '') + '</span><span class="tile__sym">' + tp.sym + '</span><span class="tile__name" data-t="' + esc(tp.short) + '"></span>';
    bindTree(node);
    liveAttr(node, 'aria-label', function () { return t('Topic tile {num}: {name}', { num: tp.num, name: t(tp.short) }); });
  }

  function initCells(mount) {
    off(mount);
    var root = util.root();
    var only = mount.getAttribute('data-s1-topics');
    var groups = only ? [S1.group(only)].filter(Boolean) : S1.groups;
    mount.innerHTML = '';
    groups.forEach(function (g) {
      var topics = S1.topicsIn(g.id);
      if (!only) mount.appendChild(el('h3', { class: 'cells-title', html: '<span class="cells-title__num" data-t="' + esc(g.name) + '"></span> <span data-t="' + esc(g.title) + '"></span>' }));
      var ul = el('ul', { class: 'cells', style: '--cols:' + topics.length });
      topics.forEach(function (tp) {
        var inner =
          '<span class="cell__top"><span class="cell__num">' + tp.num + (tp.level === 'ahl' ? ' ' + HL_TAG : '') + '</span><span class="cell__pct"></span></span>' +
          '<span class="cell__sym" aria-hidden="true">' + tp.sym + '</span>' +
          '<span class="cell__name" data-t="' + esc(tp.short) + '"></span>' +
          '<span class="cell__blurb" data-t="' + esc(tp.blurb) + '"></span>' +
          '<span class="meter" aria-hidden="true"><span class="meter__fill"></span></span>';
        var node = tp.ready
          ? el('a', { class: 'cell', href: root + tp.href, 'data-topic': tp.id, html: inner })
          : el('span', { class: 'cell cell--soon', 'data-topic': tp.id, role: 'group', html: inner });
        var pct = node.querySelector('.cell__pct');
        if (tp.ready) {
          live(pct, function () { return S1.progress.summary(tp.id).percent + '%'; });
          liveAttr(node, 'aria-label', function () { return t('Topic {num}, {title}. {percent} percent done.', { num: tp.num, title: t(tp.title), percent: S1.progress.summary(tp.id).percent }); });
        } else {
          live(pct, function () { return t('coming soon'); });
          liveAttr(node, 'aria-label', function () { return t('Topic {num}, {title}. Coming soon.', { num: tp.num, title: t(tp.title) }); });
        }
        if (tp.level === 'ahl') node.classList.add('cell--ahl');
        ul.appendChild(el('li', { 'data-level': tp.level === 'ahl' ? 'ahl' : null }, node));
      });
      mount.appendChild(ul);
    });
    bindTree(mount);
    function paint() {
      Array.prototype.forEach.call(mount.querySelectorAll('a.cell'), function (a) {
        render(a.querySelector('.cell__pct')); render(a);
        a.querySelector('.meter__fill').style.width = S1.progress.summary(a.getAttribute('data-topic')).percent + '%';
      });
    }
    paint();
    doc.addEventListener('s1:progress', paint);
    doc.addEventListener('s1:questions', paint);
  }

  function initPager(mount) {
    var root = util.root(), page = util.page(), idx = -1;
    var seq = S1.topics.filter(function (tp) { return tp.id === page || (tp.ready && !(tp.level === 'ahl' && S1.level.get() === 'sl')); });
    seq.forEach(function (tp, i) { if (tp.id === page) idx = i; });
    if (idx < 0) return;
    off(mount);
    var prev = seq[idx - 1], next = seq[idx + 1], h = '';
    function link(cls, dir, href, num, name) {
      return '<a class="' + cls + '" href="' + root + href + '"><span class="pager__dir" data-t="' + dir + '"></span><span class="pager__title">' + (num ? num + ' ' : '') + '<span data-t="' + esc(name) + '"></span></span></a>';
    }
    if (prev) h += link('pager__prev', 'Previous', prev.href, prev.num, prev.short);   // i18n
    h += next ? link('pager__next', 'Next', next.href, next.num, next.short) : link('pager__next', 'Next', 'practice.html', '', 'Mixed practice');   // i18n
    mount.classList.add('pager');
    mount.innerHTML = h;
    bindTree(mount);
    mount.setAttribute('role', 'navigation');
    liveAttr(mount, 'aria-label', function () { return t('Previous and next topic'); });
  }

  /* ---------- In-page section nav ----------------------------------------- */
  function initToc(nav) {
    var scope = doc.querySelector('.topic-content') || doc;
    var sections = Array.prototype.filter.call(scope.querySelectorAll('.topic-section[id]'), function (s) { return !!s.querySelector('h2'); });
    if (!sections.length) { nav.hidden = true; return; }
    off(nav);
    liveAttr(nav, 'aria-label', function () { return t('On this page'); });
    nav.classList.add('toc');
    var listId = util.uid('toc');
    var current = el('span', { class: 'toc__current' });
    var toggle = el('button', { class: 'toc__toggle', type: 'button', 'aria-expanded': 'false', 'aria-controls': listId });
    toggle.appendChild(el('span', { t: 'On this page' }));
    toggle.appendChild(current);
    toggle.insertAdjacentHTML('beforeend', ICON.chev);
    var ol = el('ol', { class: 'toc__list', id: listId });
    var links = {}, currentId = null;
    sections.forEach(function (s) {
      var h2 = s.querySelector('h2');
      var a = el('a', { href: '#' + s.id });
      live(a, function () { var short = s.getAttribute('data-toc'); return short ? tpQuiet(short) : esc(h2.textContent.replace(/\s+/g, ' ').trim()); });
      a.addEventListener('click', function () { setOpen(false); });
      links[s.id] = a;
      ol.appendChild(el('li', { 'data-level': s.getAttribute('data-level') === 'ahl' ? 'ahl' : null }, a));
    });
    nav.innerHTML = '';
    nav.appendChild(el('p', { class: 'toc__title', 'aria-hidden': 'true', t: 'On this page' }));
    nav.appendChild(toggle);
    nav.appendChild(ol);
    function setOpen(open) { nav.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); }
    toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); } });

    function mark(id) {
      currentId = id;
      for (var k in links) { links[k].classList.toggle('is-current', k === id); if (k === id) links[k].setAttribute('aria-current', 'true'); else links[k].removeAttribute('aria-current'); }
      current.textContent = links[id] ? links[id].textContent : '';
    }
    function spy() {
      var best = sections[0].id, line = window.innerHeight * 0.3;
      sections.forEach(function (s) {
        if (s.offsetParent === null) return;
        if (s.getBoundingClientRect().top <= line) best = s.id;
      });
      mark(best);
    }
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      window.requestAnimationFrame(function () { ticking = false; spy(); });
    }, { passive: true });
    doc.addEventListener('s1:levelchange', spy);
    doc.addEventListener('s1:langchange', function () { if (currentId) mark(currentId); });
    spy();
    function measure() { html.style.setProperty('--toc-h', (toggle.offsetHeight ? toggle.offsetHeight + 2 : 0) + 'px'); }
    window.addEventListener('resize', measure, { passive: true });
    doc.addEventListener('s1:langchange', function () { window.setTimeout(measure, 0); });
    if (doc.fonts && doc.fonts.ready && doc.fonts.ready.then) doc.fonts.ready.then(measure);
    measure();
  }

  /* ---------- Formatting: .chem, .math, .unit, level badges ---------------- */
  function initFormat(root) {
    if (!S1.chem || !root.querySelectorAll) return;
    Array.prototype.forEach.call(root.querySelectorAll('.chem:not([data-s1-done]), .math:not([data-s1-done])'), function (n) {
      n.setAttribute('data-s1-done', '');
      if (n.children.length) return;
      n.innerHTML = S1.chem.formula(n.textContent);
      if (n.querySelector('.chem__t')) n.classList.add('chem--eq');
    });
    Array.prototype.forEach.call(root.querySelectorAll('.unit:not([data-s1-done])'), function (n) {
      n.setAttribute('data-s1-done', '');
      if (n.children.length) return;
      n.innerHTML = S1.chem.unit(n.textContent);
    });
    formatters.forEach(function (fn) { fn(root); });
  }
  var formatters = [];
  S1.onFormat = function (fn) { formatters.push(fn); if (isReady) fn(doc); };

  function initLevelBadges(root) {
    var sel = 'section[data-level="ahl"], div[data-level="ahl"], aside[data-level="ahl"], figure[data-level="ahl"], article[data-level="ahl"]';
    Array.prototype.forEach.call(root.querySelectorAll(sel), function (n) {
      if (n.hasAttribute('data-s1-flagged') || n.hasAttribute('data-no-badge')) return;
      n.setAttribute('data-s1-flagged', '');
      var p = off(el('p', { class: 'level-flag' }, el('span', { class: 'badge badge--ahl', t: 'Additional HL' })));
      n.insertBefore(p, n.firstChild);
    });
  }

  /* ---------- Glossary tooltips ------------------------------------------- */
  var tip = null, tipFor = null;
  function hideTip() { if (tip) tip.hidden = true; if (tipFor) tipFor.removeAttribute('aria-describedby'); tipFor = null; }
  function showTip(node) {
    if (!tip) { tip = off(el('div', { class: 'tooltip', role: 'tooltip', id: 's1-tooltip' })); doc.body.appendChild(tip); }
    var defEn = node.getAttribute('data-def'), defTr = (lang !== 'en' && node.getAttribute('data-def-tr')) || tpQuiet(defEn);
    tip.innerHTML = defTr !== defEn ? defEn + '<span class="i18n-tr" lang="' + lang + '">' + defTr + '</span>' : defEn;
    tip.hidden = false; tip.style.left = '0px'; tip.style.top = '0px';
    var r = node.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight, vw = html.clientWidth;
    var left = util.clamp(r.left + r.width / 2 - tw / 2, 8, vw - tw - 8);
    var top = r.top - th - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = (left + window.pageXOffset) + 'px';
    tip.style.top = (top + window.pageYOffset) + 'px';
    node.setAttribute('aria-describedby', 's1-tooltip');
    tipFor = node;
  }
  function initDefs(root) {
    if (!root.querySelectorAll) return;
    Array.prototype.forEach.call(root.querySelectorAll('dfn[data-def]:not([data-s1-done]), abbr[data-def]:not([data-s1-done])'), function (n) {
      n.setAttribute('data-s1-done', '');
      n.setAttribute('tabindex', '0');
      n.addEventListener('mouseenter', function () { showTip(n); });
      n.addEventListener('mouseleave', hideTip);
      n.addEventListener('focus', function () { showTip(n); });
      n.addEventListener('blur', hideTip);
      n.addEventListener('click', function (e) { e.stopPropagation(); if (tipFor === n && !tip.hidden) hideTip(); else showTip(n); });
    });
  }
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideTip(); });
  doc.addEventListener('click', hideTip);

  /* ---------- Checklist ---------------------------------------------------- */
  function initChecklist(ul) {
    var topic = ul.getAttribute('data-s1-checklist') || util.page();
    var items = Array.prototype.filter.call(ul.children, function (c) { return c.tagName === 'LI'; });
    var ids = [];
    var count = off(el('p', { class: 'checklist__count', role: 'status', 'aria-live': 'polite' }));
    items.forEach(function (li, i) {
      var id = li.getAttribute('data-id') || 'item-' + (i + 1);
      var level = li.getAttribute('data-level') === 'ahl' ? 'ahl' : 'sl';
      ids.push(id);
      var text = el('span', { class: 'checklist__text' });
      while (li.firstChild) text.appendChild(li.firstChild);
      moveUnit(li, text);
      var input = el('input', { type: 'checkbox' });
      input.checked = S1.progress.getCheck(topic, id);
      input.addEventListener('change', function () { S1.progress.setCheck(topic, id, input.checked); render(count); });
      var badge = off(el('span', { class: 'badge badge--' + level, text: level === 'ahl' ? 'AHL' : 'SL', tTitle: level === 'ahl' ? 'Additional HL' : 'Standard level core' }));
      li.appendChild(el('label', { class: 'checklist__item' }, [input, text, badge]));
    });
    S1.progress.setCheckTotal(topic, ids);
    ul.parentNode.insertBefore(count, ul.nextSibling);
    live(count, function () { return t('{done} of {total} ticked', { done: ul.querySelectorAll('input:checked').length, total: items.length }); });
    doc.addEventListener('s1:progress', function (e) {
      if (!e.detail.reset) return;
      Array.prototype.forEach.call(ul.querySelectorAll('input'), function (i) { i.checked = false; });
      S1.progress.setCheckTotal(topic, ids); render(count);
    });
  }

  /* ---------- Worked example stepper --------------------------------------- */
  function initWorked(box) {
    var list = box.querySelector('.worked__steps');
    if (!list) return;
    var steps = Array.prototype.filter.call(list.children, function (c) { return c.tagName === 'LI'; });
    var answer = box.querySelector('.worked__answer');
    var total = steps.length, shown = 0;
    steps.forEach(function (li) {
      var title = li.getAttribute('data-title');
      if (title && !li.querySelector('.worked__step-title')) {
        if (srcMap && srcMap.has(li)) {
          var wrap = el('div');
          while (li.firstChild) wrap.appendChild(li.firstChild);
          li.appendChild(wrap); moveUnit(li, wrap);
        }
        li.insertBefore(off(el('p', { class: 'worked__step-title', tp: title })), li.firstChild);
      }
    });
    var count = el('p', { class: 'worked__count' });
    var liveMsg = el('p', { class: 'sr-only', role: 'status', 'aria-live': 'polite' });
    var kicker = box.getAttribute('data-kicker');
    var head = off(el('div', { class: 'worked__head' }, [kicker ? el('p', { class: 'worked__kicker', tp: kicker }) : el('p', { class: 'worked__kicker', t: 'Worked example' }), count]));
    box.insertBefore(head, box.firstChild);

    var nextBtn = el('button', { class: 'btn btn--primary', type: 'button' });
    var allBtn = el('button', { class: 'btn', type: 'button', t: 'Show all steps' });
    var resetBtn = el('button', { class: 'btn btn--quiet', type: 'button', t: 'Start again' });
    var nudge = el('p', { class: 'worked__nudge', t: 'Have a go on paper first. Then reveal one step at a time and compare.' });
    var controls = off(el('div', { class: 'worked__controls' }, [nudge, nextBtn, allBtn, resetBtn, liveMsg]));
    box.appendChild(controls);
    box.classList.add('is-ready');
    live(count, function () { return t('{shown} of {total} steps', { shown: shown, total: total }); });
    live(nextBtn, function () { return shown === 0 ? t('Show step 1') : t('Next step ({n} of {total})', { n: shown + 1, total: total }); });
    var announce = null;
    live(liveMsg, function () { return announce ? announce() : ''; });

    function paint(say, fresh) {
      steps.forEach(function (li, i) {
        var on = i < shown;
        li.classList.toggle('is-shown', on);
        li.classList.toggle('is-last-shown', on && i === shown - 1 && shown < total);
        li.classList.toggle('is-new', !!fresh && on && i >= fresh.from);
      });
      var done = shown >= total;
      if (answer) { answer.classList.toggle('is-shown', done); answer.classList.toggle('is-new', !!fresh && done); }
      render(count); render(nextBtn);
      nextBtn.hidden = done; allBtn.hidden = done; resetBtn.hidden = shown === 0; nudge.hidden = shown > 0;
      if (say) {
        var at = shown;
        announce = function () {
          if (at >= total) return t('All {total} steps shown, with the final answer.', { total: total });
          if (at > 0) { var st = steps[at - 1].querySelector('.worked__step-title'); return t('Step {n} of {total} shown.', { n: at, total: total }) + (st ? ' ' + esc(st.textContent) : ''); }
          return t('Steps hidden.');
        };
        render(liveMsg);
      }
    }
    function reveal(n) {
      var from = shown; shown = util.clamp(n, 0, total);
      paint(true, { from: from });
      var target = shown >= total && answer ? answer : steps[shown - 1];
      if (target && target.scrollIntoView && shown > from) {
        try { target.scrollIntoView({ block: 'nearest', behavior: util.reducedMotion() ? 'auto' : 'smooth' }); } catch (e) { /* old browsers */ }
      }
      if (shown >= total) { resetBtn.focus(); }
    }
    nextBtn.addEventListener('click', function () { reveal(shown + 1); });
    allBtn.addEventListener('click', function () { reveal(total); });
    resetBtn.addEventListener('click', function () { shown = 0; paint(true); nextBtn.focus(); });
    paint(false);
  }

  /* ---------- Try it: numeric check with hint ladder ------------------------ */
  var STD_FORM_HELP = 'You can type a 3 s.f. decimal, a fraction (<span class="mono">3/4</span>), an exact expression (<span class="mono">pi/3</span>, <span class="mono">sqrt(3)/2</span>), or standard form (<span class="mono">6.02e23</span>).';   // i18n
  function initNumeric(box) {
    var spec = {
      answer: Number(box.getAttribute('data-answer')),
      tolerance: box.getAttribute('data-tolerance'),
      sigfigs: box.getAttribute('data-sigfigs')
    };
    var unitText = box.getAttribute('data-unit') || '';
    var hintList = box.querySelector('.tryit__hints');
    var hints = hintList ? Array.prototype.filter.call(hintList.children, function (c) { return c.tagName === 'LI'; }) : [];
    var solution = box.querySelector('.tryit__solution');
    var id = util.uid('tryit'), hintsShown = 0;
    box.classList.add('tryit', 'is-ready');

    var input = el('input', { class: 'input input--num', id: id, type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-describedby': id + '-help' });
    var check = el('button', { class: 'btn btn--primary', type: 'submit', t: 'Check' });
    var row = el('div', { class: 'field-row' }, [input, unitText ? el('span', { class: 'unit', html: S1.chem.unit(unitText), 'data-s1-done': '' }) : null, check]);
    var form = off(el('form', { class: 'tryit__form', novalidate: true }, [
      (box.getAttribute('data-label') ? el('label', { class: 'field-label', for: id, tp: box.getAttribute('data-label') }) : el('label', { class: 'field-label', for: id, t: 'Your answer' })), row,
      el('p', { class: 'field-help', id: id + '-help', t: STD_FORM_HELP })
    ]));
    var feedback = off(el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' }));
    var hintBtn = el('button', { class: 'btn btn--small', type: 'button' });
    var solBtn = el('button', { class: 'btn btn--small btn--quiet', type: 'button', t: 'Show full solution' });
    var help = off(el('div', { class: 'tryit__help btn-row' }, [hints.length ? hintBtn : null, solution ? solBtn : null]));

    var anchor = hintList || solution || null;
    box.insertBefore(form, anchor);
    box.insertBefore(feedback, anchor);
    box.insertBefore(help, anchor);
    live(hintBtn, function () { return hintsShown === 0 ? t('I need a hint') : t('Next hint ({n} of {total})', { n: hintsShown + 1, total: hints.length }); });

    function paintHelp() {
      hints.forEach(function (li, i) { li.classList.toggle('is-shown', i < hintsShown); });
      render(hintBtn);
      hintBtn.hidden = hintsShown >= hints.length;
      if (solution) solBtn.hidden = solution.classList.contains('is-shown') || (hints.length > 0 && hintsShown === 0 && !box.hasAttribute('data-tried'));
    }
    hintBtn.addEventListener('click', function () { hintsShown++; paintHelp(); if (hintsShown >= hints.length && solution) solBtn.focus(); });
    solBtn.addEventListener('click', function () { solution.classList.add('is-shown'); solution.setAttribute('tabindex', '-1'); paintHelp(); solution.focus(); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!input.value.trim()) { input.focus(); return; }
      var res = S1.chem.checkNumeric(input.value, spec);
      var hadHints = hints.length && hintsShown < hints.length;
      box.setAttribute('data-tried', '');
      feedback.className = 'feedback feedback--' + S1.chem.describeCheck(res, spec).tone;
      live(feedback, function () {
        var d = S1.chem.describeCheck(res, spec), extra = d.html;
        if (res.status === 'wrong' && !extra) extra = hadHints ? t('Check your working, or take a hint.') : t('Check each step of your working.');
        if (res.status === 'correct') extra = box.getAttribute('data-correct') ? tpQuiet(box.getAttribute('data-correct')) : t('Nice. Compare your working with the full solution if you want to check your method.');
        return '<span class="feedback__label">' + d.label + '</span>' + extra;
      });
      if (res.status === 'correct' && solution) { solBtn.hidden = false; }
      paintHelp();
    });
    paintHelp();
  }

  /* ---------- Reset control -------------------------------------------------- */
  function initReset(mount) {
    off(mount);
    mount.classList.add('reset');
    var btn = el('button', { class: 'btn btn--small', type: 'button', t: 'Reset my progress' });
    var done = el('p', { class: 'reset__done', role: 'status', 'aria-live': 'polite' });
    var confirmBox = el('div', { class: 'reset__confirm', hidden: true });
    var yes = el('button', { class: 'btn btn--small btn--danger', type: 'button', t: 'Yes, reset' });
    var no = el('button', { class: 'btn btn--small', type: 'button', t: 'Cancel' });
    confirmBox.appendChild(el('p', { t: 'This clears your ticks, quiz results and saved mistakes in this browser. It cannot be undone.' }));
    confirmBox.appendChild(yes); confirmBox.appendChild(no);
    mount.innerHTML = '';
    mount.appendChild(btn); mount.appendChild(confirmBox); mount.appendChild(done);
    var cleared = false;
    live(done, function () { return cleared ? t('Progress cleared.') : ''; });
    btn.addEventListener('click', function () { confirmBox.hidden = false; btn.hidden = true; cleared = false; render(done); no.focus(); });
    no.addEventListener('click', function () { confirmBox.hidden = true; btn.hidden = false; btn.focus(); });
    yes.addEventListener('click', function () { S1.progress.reset(); confirmBox.hidden = true; btn.hidden = false; cleared = true; render(done); btn.focus(); });
  }

  /* ---------- Widgets --------------------------------------------------------- */
  var widgetRegistry = {};
  S1.widgets = {
    register: function (name, initFn) {
      widgetRegistry[name] = initFn;
      if (doc.readyState !== 'loading') {
        Array.prototype.forEach.call(doc.querySelectorAll('[data-s1-widget="' + name + '"]:not([data-s1-ready])'), mountWidget);
      }
    },
    has: function (name) { return !!widgetRegistry[name]; }
  };

  function mountWidget(node) {
    var name = node.getAttribute('data-s1-widget'), initFn = widgetRegistry[name];
    if (!initFn || node.hasAttribute('data-s1-ready')) return;
    node.setAttribute('data-s1-ready', '');
    node.classList.add('widget');
    off(node);
    var caption = node.querySelector('figcaption, .widget__caption');
    var fallback = node.querySelector('.widget__fallback');
    if (fallback) fallback.parentNode.removeChild(fallback);
    if (caption) { caption.classList.add('widget__caption'); node.removeChild(caption); }
    var current = start();
    doc.addEventListener('s1:langchange', function () {
      if (!doc.documentElement.contains(node)) return;
      if (current.keep()) { current.api.redraw(); return; }
      current.dispose();
      current = start();
    });

   function start() {
    var disposers = [], keepOnLang = node.getAttribute('data-lang') === 'keep';
    function listen(target, type, fn, opts) { target.addEventListener(type, fn, opts); disposers.push(function () { target.removeEventListener(type, fn, opts); }); }
    var titleText = node.getAttribute('data-title') || '';
    var titleId = util.uid('widget-title');
    var head = el('div', { class: 'widget__head' }, [
      el('h4', { class: 'widget__title', id: titleId, tp: titleText }),
      (node.getAttribute('data-kicker') ? el('span', { class: 'widget__kicker', tp: node.getAttribute('data-kicker') })
        : node.getAttribute('data-kind') === 'figure' ? el('span', { class: 'widget__kicker', t: 'Figure' }) : el('span', { class: 'widget__kicker', t: 'Interactive' }))
    ]);
    var controls = el('div', { class: 'widget__controls' });
    var stage = el('div', { class: 'widget__stage' });
    var readout = el('div', { class: 'widget__readout', role: 'status', 'aria-live': 'polite' });
    node.innerHTML = '';
    [head, controls, stage, readout, caption].forEach(function (n) { if (n) node.appendChild(n); });
    if (titleText) node.setAttribute('aria-labelledby', titleId); else head.hidden = true;
    if (node.tagName !== 'FIGURE') node.setAttribute('role', 'group');

    var draws = [], loops = [], visible = true, initialising = true, pendingDraw = false;
    var api = {
      el: node, stage: stage, controls: controls, readout: readout, caption: caption,
      options: node.dataset,
      reducedMotion: util.reducedMotion(),
      color: S1.theme.color,
      redraw: function () { draws.forEach(function (f) { f(); }); },
      onDraw: function (fn) { draws.push(fn); },
      onTheme: function (fn) { listen(doc, 's1:themechange', function (e) { fn(e.detail.theme); }); },
      onLang: function (fn) { listen(doc, 's1:langchange', function (e) { fn(e.detail.lang); }); },
      keepOnLangChange: function () { keepOnLang = true; },
      listen: listen,
      onCleanup: function (fn) { disposers.push(fn); },
      t: tp,
      canvas: function (opts) {
        opts = opts || {};
        var c = el('canvas', { role: 'img' });
        (function (src) { liveAttr(c, 'aria-label', function () { return either(src); }); })(sourceOf(opts.label || titleText || 'Diagram'));   // i18n
        stage.appendChild(c);
        var ctx = c.getContext('2d'), obj = { el: c, ctx: ctx, width: 0, height: 0 }, fns = [];
        function size() {
          var w = Math.max(200, Math.floor(stage.clientWidth - parseFloat(getComputedStyle(stage).paddingLeft) - parseFloat(getComputedStyle(stage).paddingRight)));
          if (opts.minWidth) w = Math.max(w, opts.minWidth);
          var h = typeof opts.height === 'function' ? Math.round(opts.height(w)) : (opts.height || Math.round(w / (opts.aspect || 2)));
          if (opts.maxHeight) h = Math.min(h, opts.maxHeight);
          var dpr = Math.min(window.devicePixelRatio || 1, 3);
          obj.width = w; obj.height = h;
          c.style.width = w + 'px'; c.style.height = h + 'px';
          c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        function run() { ctx.clearRect(0, 0, obj.width, obj.height); fns.forEach(function (f) { f(ctx, obj.width, obj.height); }); }
        obj.draw = function (fn) { if (fn) fns.push(fn); if (initialising) pendingDraw = true; else run(); };
        obj.resize = function () { size(); run(); };
        obj.setHeight = function (hh) { opts.height = hh; size(); if (initialising) pendingDraw = true; else run(); };
        size();
        var lastW = stage.clientWidth;
        var onResize = function () { if (stage.clientWidth === lastW) return; lastW = stage.clientWidth; size(); run(); };
        if (window.ResizeObserver) { var ro = new ResizeObserver(onResize); ro.observe(stage); disposers.push(function () { ro.disconnect(); }); } else listen(window, 'resize', onResize);
        draws.push(run);
        return obj;
      },
      svg: function (viewBox, opts) {
        var s = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
        s.setAttribute('viewBox', viewBox); s.setAttribute('role', 'img');
        (function (src) { liveAttr(s, 'aria-label', function () { return either(src); }); })(sourceOf((opts && opts.label) || titleText || 'Diagram'));
        s.style.width = '100%'; s.style.height = 'auto';
        stage.appendChild(s);
        return s;
      },
      slider: function (opts) {
        var id = util.uid('ctl'), step = opts.step || 1;
        var range = el('input', { type: 'range', id: id, min: opts.min, max: opts.max, step: step, value: opts.value });
        var labelSrc = sourceOf(opts.label);
        var num = el('input', { class: 'input', type: 'number', min: opts.min, max: opts.max, step: step, value: opts.value, inputmode: 'decimal' });
        liveAttr(num, 'aria-label', function () { return t('{label}, exact value', { label: tpQuiet(labelSrc) + (opts.unit ? ' (' + opts.unit + ')' : '') }); });
        var wrap = el('div', { class: 'control' }, [
          liveText(el('label', { class: 'control__label', for: id }), opts.label),
          el('div', { class: 'control__row' }, [range, num, opts.unit ? el('span', { class: 'control__unit', html: S1.chem ? S1.chem.unit(opts.unit) : opts.unit }) : null])
        ]);
        var val = Number(opts.value);
        function set(v, silent, from) {
          v = Number(v); if (!isFinite(v)) return;
          v = util.clamp(v, Number(opts.min), Number(opts.max)); val = v;
          if (from !== range) range.value = v;
          if (from !== num) num.value = v;
          if (!silent && opts.onInput) opts.onInput(v);
        }
        range.addEventListener('input', function () { set(range.value, false, range); });
        num.addEventListener('input', function () { if (num.value !== '' && num.value !== '-') set(num.value, false, num); });
        num.addEventListener('blur', function () { num.value = val; });
        (opts.parent || controls).appendChild(wrap);
        return { el: wrap, get value() { return val; }, set: function (v, silent) { set(v, silent); },
          setValue: function (v, silent) { set(v, silent); },
          setRange: function (min, max, newStep, silent) {
            opts.min = min; opts.max = max;
            [range, num].forEach(function (i) { i.min = min; i.max = max; if (newStep != null) i.step = newStep; });
            var before = val; set(val, true); range.value = val; num.value = val;
            if (val !== before && !silent && opts.onInput) opts.onInput(val);
          } };
      },
      button: function (label, onClick, opts) {
        var b = liveText(el('button', { class: 'btn btn--small' + (opts && opts.primary ? ' btn--primary' : ''), type: 'button' }), label);
        b.addEventListener('click', onClick);
        controls.appendChild(b);
        return b;
      },
      select: function (opts) {
        var id = util.uid('ctl');
        var s = el('select', { class: 'select', id: id });
        function fillOptions(list, value) {
          s.innerHTML = '';
          list.forEach(function (o) {
            var v = typeof o === 'object' ? o.value : o, l = typeof o === 'object' ? o.label : o;
            var op = liveText(el('option', { value: v }), l); if (String(v) === String(value)) op.selected = true; s.appendChild(op);
          });
        }
        fillOptions(opts.options, opts.value);
        s.addEventListener('change', function () { if (opts.onChange) opts.onChange(s.value); });
        var wrap = el('div', { class: 'control', style: 'flex:0 1 auto' }, [liveText(el('label', { class: 'control__label', for: id }), opts.label), s]);
        controls.appendChild(wrap);
        return { el: wrap, get value() { return s.value; }, set: function (v) { s.value = v; },
          setOptions: function (list, value) {
            var before = s.value, has = list.some(function (o) { return String(typeof o === 'object' ? o.value : o) === before; });
            fillOptions(list, value != null ? value : (has ? before : undefined));
            if (s.value !== before && opts.onChange) opts.onChange(s.value);
          } };
      },
      readoutItem: function (label, opts) {
        var value = el('span', { class: 'widget__readout-value' + (opts && opts.text ? ' widget__readout-value--text' : '') });
        readout.appendChild(el('div', { class: 'widget__readout-item' }, [liveText(el('span', { class: 'widget__readout-label' }), label), value]));
        return function (htmlText) { var src = sourceOf(String(htmlText)); live(value, function () { return lookup(norm(src)) || src; }); };
      },
      loop: function (fn) {
        var raf = 0, last = 0, t = 0, wanted = false;
        var L = { running: false,
          start: function (userAsked) { if (api.reducedMotion && !userAsked) return; wanted = true; kick(); },
          stop: function () { wanted = false; halt(); } };
        function frame(now) {
          var dt = last ? Math.min((now - last) / 1000, 0.1) : 0; last = now; t += dt;
          fn(dt, t);
          raf = window.requestAnimationFrame(frame);
        }
        function kick() { if (L.running || !wanted || !visible || doc.hidden) return; L.running = true; last = 0; raf = window.requestAnimationFrame(frame); }
        function halt() { if (!L.running) return; L.running = false; window.cancelAnimationFrame(raf); }
        L._sync = function () { if (wanted && visible && !doc.hidden) kick(); else halt(); };
        loops.push(L);
        return L;
      }
    };
    if (window.IntersectionObserver) {
      var io = new IntersectionObserver(function (entries) {
        visible = entries[entries.length - 1].isIntersecting;
        loops.forEach(function (L) { L._sync(); });
      });
      io.observe(node);
      disposers.push(function () { io.disconnect(); });
    }
    listen(doc, 'visibilitychange', function () { loops.forEach(function (L) { L._sync(); }); });
    listen(doc, 's1:themechange', function () { api.redraw(); });
    try { initFn(api); initialising = false; if (pendingDraw) api.redraw(); }
    catch (err) {
      initialising = false;
      stage.innerHTML = '';
      stage.appendChild(el('p', { class: 'widget__fallback', t: 'This interactive could not start. The rest of the page still works.' }));
      if (window.console) console.error('[S1.widgets] ' + name + ' failed:', err);
    }
    return {
      api: api,
      keep: function () { return keepOnLang; },
      dispose: function () {
        loops.forEach(function (L) { L.stop(); });
        disposers.forEach(function (d) { try { d(); } catch (e) { /* ignore */ } });
        disposers = []; draws = []; loops = [];
        if (caption && caption.parentNode === node) node.removeChild(caption);
      }
    };
   }
  }

  /* ---------- Enhance: run every component initialiser on a subtree ---------- */
  var enhancers = [];
  S1.onEnhance = function (fn) { enhancers.push(fn); };

  function each(root, selector, fn) {
    Array.prototype.forEach.call(root.querySelectorAll(selector), function (n) {
      if (n.hasAttribute('data-s1-ready')) return;
      n.setAttribute('data-s1-ready', '');
      fn(n);
    });
  }
  function tableRegion(n) { if (!n.hasAttribute('tabindex')) { n.setAttribute('tabindex', '0'); n.setAttribute('role', 'region'); if (!n.getAttribute('aria-label')) { var c = n.querySelector('caption'); if (c) n.setAttribute('aria-labelledby', c.id || (c.id = util.uid('cap'))); else liveAttr(n, 'aria-label', function () { return t('Table'); }); } } }
  var booted = false;
  S1.enhance = function (root) {
    root = root || doc;
    if (booted && root !== doc) capture(root);
    initFormat(root);
    initLevelBadges(root);
    initDefs(root);
    each(root, '[data-s1-header]', renderHeader);
    each(root, '[data-s1-footer]', renderFooter);
    each(root, '[data-s1-tile]', initTile);
    each(root, '[data-s1-topics]', initCells);
    each(root, '[data-s1-pager]', initPager);
    each(root, '[data-s1-checklist]', initChecklist);
    each(root, '[data-s1-worked], .worked', initWorked);
    each(root, '[data-s1-numeric]', initNumeric);
    each(root, '[data-s1-reset]', initReset);
    Array.prototype.forEach.call(root.querySelectorAll('[data-s1-widget]:not([data-s1-ready])'), mountWidget);
    each(root, '.table-scroll', tableRegion);
    enhancers.forEach(function (fn) { fn(root); });
    each(root, '[data-s1-toc]', initToc);
    labelPass(root);
    if (booted && root !== doc && lang !== 'en') applyLang(root);
  };

  var readyFns = [], isReady = false;
  S1.ready = function (fn) { if (isReady) fn(); else readyFns.push(fn); };
  function boot() {
    html.classList.add('js');
    pageTitle = doc.title;
    capture(doc);                                       // 1. remember the authored English
    S1.enhance(doc);                                    // 2. build components
    booted = true; isReady = true;
    readyFns.forEach(function (fn) { fn(); });
    var saved = store.getRaw('s1.lang');                // 3. never auto-detect: English unless the student chose
    if (saved && saved !== 'en') S1.i18n.set(saved, { silent: true });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();
})();
