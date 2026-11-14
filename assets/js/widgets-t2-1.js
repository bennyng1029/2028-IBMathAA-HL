/* ==========================================================================
   Analysis Lab — widgets-t2-1.js
   Interactive widgets for Topic 2.1 (Lines, functions, domains, inverses & composites):
     1. t2-1.inverse-mirror    Function & inverse reflection in y = x on S1.chart.funcPlot
     2. t2-1.composite-machine Composite pipeline (f ∘ g)(x) & domain compatibility
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets) return;

  function fmt(v, sf) {
    if (!isFinite(v)) return 'undefined';
    var n = Math.abs(v) < 1e-9 ? 0 : Number(v.toFixed(sf || 2));
    return String(n).replace('-', '−');
  }

  /* ------------------------------------------------------------------------
     1. t2-1.inverse-mirror
     Plots y = f(x), the mirror line y = x, and y = f⁻¹(x) with equal aspect ratio,
     connecting P(a, b) on f to P'(b, a) on f⁻¹ across the midpoint ((a+b)/2, (a+b)/2).
     ------------------------------------------------------------------------ */
  S1.widgets.register('t2-1.inverse-mirror', function (api) {
    var t = api.t;
    var MODELS = {
      quad: {
        label: 'Restricted quadratic: f(x) = (x − 1)² − 2, x ≥ 1',
        fFormula: 'f(x) = (x − 1)² − 2  (x ≥ 1)',
        invFormula: 'f⁻¹(x) = 1 + √(x + 2)  (x ≥ −2)',
        domF: 'x ≥ 1,  Range(f): y ≥ −2',
        domInv: 'x ≥ −2,  Range(f⁻¹): y ≥ 1',
        f: function (x) { return (x - 1) * (x - 1) - 2; },
        inv: function (x) { return x >= -2 ? 1 + Math.sqrt(x + 2) : NaN; },
        fDom: [1, 4.5],
        invDom: [-2, 6],
        aMin: 1, aMax: 3.4, aStep: 0.1, aDefault: 2.5,
        fixedPt: (3 + Math.sqrt(13)) / 2
      },
      exp: {
        label: 'Exponential & natural log: f(x) = eˣ − 1 vs f⁻¹(x) = ln(x + 1)',
        fFormula: 'f(x) = eˣ − 1  (x ∈ ℝ)',
        invFormula: 'f⁻¹(x) = ln(x + 1)  (x > −1)',
        domF: 'x ∈ ℝ,  Range(f): y > −1 (HA y = −1)',
        domInv: 'x > −1 (VA x = −1),  Range(f⁻¹): y ∈ ℝ',
        f: function (x) { return Math.exp(x) - 1; },
        inv: function (x) { return x > -0.999 ? Math.log(x + 1) : NaN; },
        fDom: [-4, 2.2],
        invDom: [-0.98, 6],
        aMin: -1.5, aMax: 1.8, aStep: 0.1, aDefault: 1.2,
        fixedPt: 0
      },
      linear: {
        label: 'Linear function: f(x) = 2x − 3 vs f⁻¹(x) = (x + 3)/2',
        fFormula: 'f(x) = 2x − 3  (x ∈ ℝ)',
        invFormula: 'f⁻¹(x) = (x + 3) / 2  (x ∈ ℝ)',
        domF: 'x ∈ ℝ,  Range(f): y ∈ ℝ',
        domInv: 'x ∈ ℝ,  Range(f⁻¹): y ∈ ℝ',
        f: function (x) { return 2 * x - 3; },
        inv: function (x) { return (x + 3) / 2; },
        fDom: [-4, 5],
        invDom: [-5, 5],
        aMin: -1.0, aMax: 4.0, aStep: 0.1, aDefault: 2.5,
        fixedPt: 3
      },
      selfinv: {
        label: 'Self-inverse rational: f(x) = (x + 3)/(x − 1), x ≠ 1',
        fFormula: 'f(x) = (x + 3)/(x − 1)  (x ≠ 1)',
        invFormula: 'f⁻¹(x) = (x + 3)/(x − 1) = f(x)  (self-inverse!)',
        domF: 'x ≠ 1 (VA x = 1),  Range(f): y ≠ 1 (HA y = 1)',
        domInv: 'x ≠ 1,  Range(f⁻¹): y ≠ 1',
        f: function (x) { return Math.abs(x - 1) < 0.08 ? NaN : (x + 3) / (x - 1); },
        inv: function (x) { return Math.abs(x - 1) < 0.08 ? NaN : (x + 3) / (x - 1); },
        fDom: [-5, 5],
        invDom: [-5, 5],
        aMin: 1.5, aMax: 4.5, aStep: 0.1, aDefault: 3.0,
        fixedPt: 3
      }
    };

    var curKey = 'quad';
    var sel = api.select({
      label: t('Function pair'),
      value: curKey,
      options: Object.keys(MODELS).map(function (k) { return { value: k, label: t(MODELS[k].label) }; }),
      onChange: function (v) {
        curKey = v;
        var m = MODELS[curKey];
        aSlider.setRange(m.aMin, m.aMax, m.aStep, true);
        aSlider.set(m.aDefault, true);
        update();
      }
    });

    var aSlider = api.slider({
      label: t('Input a on f(x)'),
      min: MODELS.quad.aMin,
      max: MODELS.quad.aMax,
      step: MODELS.quad.aStep,
      value: MODELS.quad.aDefault,
      onInput: function () { update(); }
    });

    api.button(t('Jump to f(x) = f⁻¹(x)'), function () {
      var m = MODELS[curKey];
      aSlider.set(Number(m.fixedPt.toFixed(2)));
    });

    var rPointP = api.readoutItem(t('Point P on y = f(x)'), { text: true });
    var rPointQ = api.readoutItem(t('Reflected P\' on y = f⁻¹(x)'), { text: true });
    var rDomF = api.readoutItem(t('Domain & range of f'), { text: true });
    var rDomInv = api.readoutItem(t('Domain & range of f⁻¹'), { text: true });

    var chartHost = S1.util.el('div');
    api.stage.appendChild(chartHost);
    var chart = null;

    function buildSpec() {
      var m = MODELS[curKey];
      var a = aSlider.value;
      var b = m.f(a);
      var mid = (a + b) / 2;
      var lines = [
        { x1: -5, y1: -5, x2: 6, y2: 6, color: '--line-strong', dash: [5, 4], width: 1.5 }
      ];
      if (isFinite(b)) {
        lines.push({ x1: a, y1: b, x2: b, y2: a, color: '--amber-line', dash: [3, 3], width: 1.8 });
      }
      if (curKey === 'exp') {
        lines.push({ y: -1, color: '--accent', dash: [4, 4], width: 1.1 });
        lines.push({ x: -1, color: '--ahl', dash: [4, 4], width: 1.1 });
      } else if (curKey === 'selfinv') {
        lines.push({ x: 1, color: '--line-strong', dash: [4, 4], width: 1.2 });
        lines.push({ y: 1, color: '--line-strong', dash: [4, 4], width: 1.2 });
      }

      var pts = [];
      if (isFinite(b)) {
        pts.push({ x: a, y: b, label: 'P(' + fmt(a) + ', ' + fmt(b) + ')', color: '--accent', r: 5, dy: -12 });
        pts.push({ x: b, y: a, label: 'P\'(' + fmt(b) + ', ' + fmt(a) + ')', color: '--ahl', r: 5, dy: 14 });
        pts.push({ x: mid, y: mid, color: '--amber-line', r: 3.5, hollow: true });
      }

      return {
        label: t('Graph of y = f(x), mirror line y = x, and inverse y = f⁻¹(x)'),
        height: 310,
        equalAspect: true,
        x: { label: 'x', min: -4, max: 5.5, step: 1 },
        y: { label: 'y', min: -4, max: 5.5, step: 1 },
        lines: lines,
        functions: [
          { fn: m.f, domain: m.fDom, color: '--accent', name: m.fFormula, width: 2.5 },
          { fn: m.inv, domain: m.invDom, color: '--ahl', name: m.invFormula, width: 2.5, dash: curKey === 'selfinv' ? [6, 4] : null },
          { fn: function (x) { return x; }, color: '--ink-2', name: 'y = x', width: 1.4, dash: [5, 4] }
        ],
        points: pts
      };
    }

    function update() {
      var m = MODELS[curKey];
      var a = aSlider.value;
      var b = m.f(a);
      rPointP('(' + fmt(a) + ', ' + fmt(b) + ')  [f(' + fmt(a) + ') = ' + fmt(b) + ']');
      rPointQ('(' + fmt(b) + ', ' + fmt(a) + ')  [f⁻¹(' + fmt(b) + ') = ' + fmt(a) + ']');
      rDomF(m.domF);
      rDomInv(m.domInv);
      var spec = buildSpec();
      if (!chart) chart = S1.chart.funcPlot(chartHost, spec);
      else chart.update(spec);
    }

    update();
  });

  /* ------------------------------------------------------------------------
     2. t2-1.composite-machine
     Interactive pipeline (f ∘ g)(x) = f(g(x)) showing step-by-step evaluation
     and checking whether Range(g) ⊆ Domain(f).
     ------------------------------------------------------------------------ */
  S1.widgets.register('t2-1.composite-machine', function (api) {
    var t = api.t;
    var PAIRS = {
      validQuadLin: {
        label: 'Always valid: g(x) = 2x − 1,  f(x) = x² − 3',
        gText: 'g(x) = 2x − 1',
        fText: 'f(u) = u² − 3',
        compText: '(f ∘ g)(x) = (2x − 1)² − 3 = 4x² − 4x − 2',
        compatText: 'Compatible for all x ∈ ℝ: Range(g) = ℝ ⊆ Domain(f) = ℝ',
        g: function (x) { return 2 * x - 1; },
        f: function (u) { return u * u - 3; },
        comp: function (x) { var u = 2 * x - 1; return u * u - 3; }
      },
      sqrtLin: {
        label: 'Restricted domain needed: g(x) = x − 1,  f(x) = √(x)',
        gText: 'g(x) = x − 1  (Range: ℝ unless restricted)',
        fText: 'f(u) = √u  (Domain: u ≥ 0)',
        compText: '(f ∘ g)(x) = √(x − 1)  (defined only when g(x) ≥ 0 ⇔ x ≥ 1)',
        compatText: 'Needs domain restriction x ≥ 1 so that g(x) = x − 1 ≥ 0',
        g: function (x) { return x - 1; },
        f: function (u) { return u >= 0 ? Math.sqrt(u) : NaN; },
        comp: function (x) { return x >= 1 ? Math.sqrt(x - 1) : NaN; }
      },
      sqrtSafe: {
        label: 'Guaranteed safe: g(x) = x² + 1,  f(x) = √(x)',
        gText: 'g(x) = x² + 1  (Range: y ≥ 1)',
        fText: 'f(u) = √u  (Domain: u ≥ 0)',
        compText: '(f ∘ g)(x) = √(x² + 1)  (valid for all x ∈ ℝ)',
        compatText: 'Compatible for all x ∈ ℝ: Range(g) = [1, ∞) ⊆ Domain(f) = [0, ∞)',
        g: function (x) { return x * x + 1; },
        f: function (u) { return u >= 0 ? Math.sqrt(u) : NaN; },
        comp: function (x) { return Math.sqrt(x * x + 1); }
      },
      rational: {
        label: 'Excluded point: g(x) = x + 2,  f(x) = 4 / (x − 1)',
        gText: 'g(x) = x + 2',
        fText: 'f(u) = 4 / (u − 1)  (Domain: u ≠ 1)',
        compText: '(f ∘ g)(x) = 4 / (x + 1)  (undefined when g(x) = 1 ⇔ x = −1)',
        compatText: 'Must exclude x = −1 because g(−1) = 1 is not in Domain(f)',
        g: function (x) { return x + 2; },
        f: function (u) { return Math.abs(u - 1) < 0.08 ? NaN : 4 / (u - 1); },
        comp: function (x) { return Math.abs(x + 1) < 0.08 ? NaN : 4 / (x + 1); }
      }
    };

    var curKey = 'validQuadLin';
    api.select({
      label: t('Composite pair (g first, then f)'),
      value: curKey,
      options: Object.keys(PAIRS).map(function (k) { return { value: k, label: t(PAIRS[k].label) }; }),
      onChange: function (v) { curKey = v; update(); }
    });

    var xSlider = api.slider({
      label: t('Test input x'),
      min: -3,
      max: 3,
      step: 0.25,
      value: 1.5,
      onInput: function () { update(); }
    });

    var rStep1 = api.readoutItem(t('Stage 1: u = g(x)'), { text: true });
    var rStep2 = api.readoutItem(t('Stage 2: y = f(u) = (f ∘ g)(x)'), { text: true });
    var rFormula = api.readoutItem(t('Composite formula'), { text: true });
    var rCompat = api.readoutItem(t('Domain compatibility check'), { text: true });

    var chartHost = S1.util.el('div');
    api.stage.appendChild(chartHost);
    var chart = null;

    function update() {
      var p = PAIRS[curKey];
      var x = xSlider.value;
      var u = p.g(x);
      var y = p.f(u);
      rStep1('g(' + fmt(x) + ') = ' + fmt(u));
      if (isFinite(y)) {
        rStep2('f(' + fmt(u) + ') = ' + fmt(y) + '   ✓ defined');
      } else {
        rStep2('f(' + fmt(u) + ') is UNDEFINED (u = ' + fmt(u) + ' is outside Domain(f)!)');
      }
      rFormula(p.compText);
      rCompat(p.compatText);

      var pts = [{ x: x, y: u, label: 'g(' + fmt(x) + ')=' + fmt(u), color: '--ink-2', r: 4.5, dy: 12 }];
      if (isFinite(y)) {
        pts.push({ x: x, y: y, label: '(f∘g)(' + fmt(x) + ')=' + fmt(y), color: '--accent', r: 5, dy: -12 });
      }
      var lines = [];
      if (curKey === 'rational') lines.push({ x: -1, color: '--bad', dash: [4, 4], width: 1.4 });
      if (curKey === 'sqrtLin') lines.push({ x: 1, color: '--amber-line', dash: [4, 4], width: 1.4 });

      var spec = {
        label: t('Graphs of inner function g(x) and composite function (f ∘ g)(x)'),
        height: 270,
        x: { label: 'x', min: -3.5, max: 3.5, step: 1 },
        y: { label: 'y', min: -5, max: 10, step: 2 },
        lines: lines,
        functions: [
          { fn: p.g, color: '--ink-2', name: p.gText, width: 1.8, dash: [5, 4] },
          { fn: p.comp, color: '--accent', name: '(f ∘ g)(x)', width: 2.6 }
        ],
        points: pts
      };
      if (!chart) chart = S1.chart.funcPlot(chartHost, spec);
      else chart.update(spec);
    }

    update();
  });
})();
