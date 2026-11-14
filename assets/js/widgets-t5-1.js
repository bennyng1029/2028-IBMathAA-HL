/* ==========================================================================
   Analysis Lab — widgets-t5-1.js
   Interactive widgets for Topic 5.1 (Differentiation, curve analysis & optimization):
     1. t5-1.tangent-normal  — Tangent, normal & secant limit explorer
     2. t5-1.f-fprime-f2     — Synchronized f(x), f'(x) and f''(x) graph explorer
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets || !S1.chart) return;
  var el = S1.util.el;

  function fmt(v, dp) {
    if (!isFinite(v)) return 'undefined';
    var d = dp != null ? dp : 2;
    var s = Number(v).toFixed(d);
    if (Number(s) === 0) s = (0).toFixed(d);
    return s.replace('-', '−');
  }

  function fmtLine(m, x0, y0) {
    if (!isFinite(m)) return 'x = ' + fmt(x0, 2);
    var c = y0 - m * x0;
    var sign = c >= -1e-9 ? ' + ' : ' − ';
    return 'y = ' + fmt(m, 2) + 'x' + sign + fmt(Math.abs(c), 2);
  }

  /* ------------------------------------------------------------------------
     1. Tangent, Normal & Secant Limit Explorer
     ------------------------------------------------------------------------ */
  S1.widgets.register('t5-1.tangent-normal', function (api) {
    var t = api.t;
    var FUNCS = {
      cubic: {
        label: 'f(x) = 0.25x³ − 0.75x² − 1.5x + 2',
        fn: function (x) { return 0.25 * x * x * x - 0.75 * x * x - 1.5 * x + 2; },
        df: function (x) { return 0.75 * x * x - 1.5 * x - 1.5; },
        xmin: -4, xmax: 5, ymin: -5, ymax: 5
      },
      quad: {
        label: 'f(x) = 0.5x² − x − 1.5',
        fn: function (x) { return 0.5 * x * x - x - 1.5; },
        df: function (x) { return x - 1; },
        xmin: -4, xmax: 5, ymin: -4, ymax: 5
      },
      trig: {
        label: 'f(x) = 2 sin(x) + cos(x)',
        fn: function (x) { return 2 * Math.sin(x) + Math.cos(x); },
        df: function (x) { return 2 * Math.cos(x) - Math.sin(x); },
        xmin: -4, xmax: 5, ymin: -4, ymax: 4
      },
      exp: {
        label: 'f(x) = e^(0.6x) − 2',
        fn: function (x) { return Math.exp(0.6 * x) - 2; },
        df: function (x) { return 0.6 * Math.exp(0.6 * x); },
        xmin: -4, xmax: 4, ymin: -3.5, ymax: 5.5
      }
    };

    var curKey = 'cubic';
    var x0 = 2.0;
    var h = 1.2;

    var fnSel = api.select({
      label: 'Function f(x)',
      value: curKey,
      options: [
        { value: 'cubic', label: FUNCS.cubic.label },
        { value: 'quad', label: FUNCS.quad.label },
        { value: 'trig', label: FUNCS.trig.label },
        { value: 'exp', label: FUNCS.exp.label }
      ],
      onChange: function (v) { curKey = v; update(); }
    });

    var xSlider = api.slider({
      label: 'Point x₀',
      min: -3.0, max: 3.5, step: 0.1, value: x0,
      onInput: function (v) { x0 = v; update(); }
    });

    var hSlider = api.slider({
      label: 'Secant step h',
      min: -2.0, max: 2.0, step: 0.05, value: h,
      onInput: function (v) { h = v; update(); }
    });

    api.button('Shrink h → 0', function () {
      h = 0.05;
      hSlider.set(h, true);
      update();
    });

    var plotHost = el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    var rPoint = api.readoutItem('Point P(x₀, f(x₀))');
    var rTanGrad = api.readoutItem("Tangent m_T = f'(x₀)");
    var rNormGrad = api.readoutItem('Normal m_N = −1/m_T');
    var rSecGrad = api.readoutItem('Secant gradient Δy/h');
    var rTanEq = api.readoutItem('Tangent line', { text: true });
    var rNormEq = api.readoutItem('Normal line', { text: true });

    function update() {
      var F = FUNCS[curKey];
      var y0 = F.fn(x0);
      var mT = F.df(x0);
      var mN = Math.abs(mT) < 1e-6 ? Infinity : -1 / mT;
      var effH = Math.abs(h) < 1e-4 ? 0 : h;
      var x1 = x0 + effH;
      var y1 = F.fn(x1);
      var mSec = effH === 0 ? mT : (y1 - y0) / effH;

      rPoint('(' + fmt(x0, 2) + ', ' + fmt(y0, 2) + ')');
      rTanGrad(fmt(mT, 3));
      rNormGrad(isFinite(mN) ? fmt(mN, 3) : t('vertical'));
      rSecGrad(effH === 0 ? fmt(mT, 3) + ' (' + t('limit h → 0') + ')' : fmt(mSec, 3));
      rTanEq(fmtLine(mT, x0, y0));
      rNormEq(fmtLine(mN, x0, y0));

      var fns = [
        { fn: F.fn, name: 'f(x)', color: '--accent', width: 2.5 },
        { fn: function (x) { return y0 + mT * (x - x0); }, name: t('Tangent'), color: '--ok', width: 2 }
      ];
      if (isFinite(mN)) {
        fns.push({ fn: function (x) { return y0 + mN * (x - x0); }, name: t('Normal'), color: '--ahl', dash: [5, 4], width: 1.8 });
      }
      if (effH !== 0) {
        fns.push({ fn: function (x) { return y0 + mSec * (x - x0); }, name: t('Secant PQ'), color: '--amber-line', dash: [3, 3], width: 1.8 });
      }

      var lines = [];
      if (!isFinite(mN)) {
        lines.push({ x: x0, color: '--ahl', dash: [5, 4], width: 1.8 });
      }

      var pts = [
        { x: x0, y: y0, label: 'P(' + fmt(x0, 1) + ', ' + fmt(y0, 1) + ')', color: '--ok', r: 5 }
      ];
      if (effH !== 0) {
        pts.push({ x: x1, y: y1, label: 'Q(x₀+h)', color: '--amber-line', r: 4.5, dy: 14 });
      }

      var spec = {
        label: t('Graph of f(x) with tangent, normal and secant lines'),
        height: 300,
        equalAspect: true,
        x: { label: 'x', min: F.xmin, max: F.xmax, step: 1 },
        y: { label: 'y', min: F.ymin, max: F.ymax, step: 1 },
        lines: lines,
        functions: fns,
        points: pts
      };

      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);
    }

    api.onCleanup(function () { if (chart) chart.destroy(); });
    update();
  });

  /* ------------------------------------------------------------------------
     2. Synchronized f(x), f'(x) and f''(x) Graph Explorer
     ------------------------------------------------------------------------ */
  S1.widgets.register('t5-1.f-fprime-f2', function (api) {
    var t = api.t;
    var MODELS = {
      cubic: {
        label: 'Cubic: f(x) = ⅓x³ − ½x² − 2x + 1 (max at −1, inflexion at 0.5, min at 2)',
        f: function (x) { return (x * x * x) / 3 - 0.5 * x * x - 2 * x + 1; },
        f1: function (x) { return x * x - x - 2; },
        f2: function (x) { return 2 * x - 1; },
        xmin: -3, xmax: 3.8, ymin: -5, ymax: 5.5,
        defaultX: 0.5,
        /* Exact features: f'(x) = (x + 1)(x − 2), f''(x) = 2x − 1 */
        special: [
          { x: -1, kind: 'max' },
          { x: 0.5, kind: 'nsInf' },
          { x: 2, kind: 'min' }
        ]
      },
      statInf: {
        label: 'Stationary inflexion: f(x) = ¼x⁴ − x³ + 2 (stationary inflexion at 0, non-stat at 2, min at 3)',
        f: function (x) { return 0.25 * Math.pow(x, 4) - Math.pow(x, 3) + 2; },
        f1: function (x) { return Math.pow(x, 3) - 3 * x * x; },
        f2: function (x) { return 3 * x * x - 6 * x; },
        xmin: -1.8, xmax: 4.0, ymin: -6.5, ymax: 6.5,
        defaultX: 0.0,
        /* Exact features: f'(x) = x²(x − 3), f''(x) = 3x(x − 2) */
        special: [
          { x: 0, kind: 'sInf' },
          { x: 2, kind: 'nsInf' },
          { x: 3, kind: 'min' }
        ]
      },
      quarticTrap: {
        label: 'Quartic trap: f(x) = ¼x⁴ − 1 (f\'\'(0) = 0 with NO sign change → local min, NOT inflexion!)',
        f: function (x) { return 0.25 * Math.pow(x, 4) - 1; },
        f1: function (x) { return Math.pow(x, 3); },
        f2: function (x) { return 3 * x * x; },
        xmin: -2.8, xmax: 2.8, ymin: -3.5, ymax: 5.5,
        defaultX: 0.0,
        /* Exact features: f'(x) = x³ (only zero x = 0), f''(x) = 3x² ≥ 0 */
        special: [
          { x: 0, kind: 'flatMin' }
        ]
      }
    };

    var curKey = 'cubic';
    var x0 = MODELS.cubic.defaultX;

    api.select({
      label: 'Curve model',
      value: curKey,
      options: [
        { value: 'cubic', label: MODELS.cubic.label },
        { value: 'statInf', label: MODELS.statInf.label },
        { value: 'quarticTrap', label: MODELS.quarticTrap.label }
      ],
      onChange: function (v) {
        curKey = v;
        var M = MODELS[curKey];
        x0 = M.defaultX;
        xSlider.setRange(M.xmin + 0.2, M.xmax - 0.2, 0.05, true);
        xSlider.set(x0, true);
        update();
      }
    });

    var xSlider = api.slider({
      label: 'Scanner x₀',
      min: -2.8, max: 3.6, step: 0.05, value: x0,
      onInput: function (v) { x0 = v; update(); }
    });

    var plotHost = el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    var rF = api.readoutItem('f(x₀)');
    var rF1 = api.readoutItem("f'(x₀) — Slope");
    var rF2 = api.readoutItem("f''(x₀) — Concavity");
    var rStatus = api.readoutItem('Feature at x₀', { text: true });

    /* Snap tolerance: half a slider step (0.05), so each exact feature is hit
       by exactly one slider position and no other position is mislabelled. */
    var SNAP = 0.025;

    function featureAt(M, x) {
      for (var i = 0; i < M.special.length; i++) {
        if (Math.abs(x - M.special[i].x) < SNAP) return M.special[i];
      }
      return null;
    }

    /* Classification uses the model's exact (analytic) stationary points and
       inflexion points; away from them f'(x) ≠ 0 and the sign of f'' is used. */
    function classify(M, x, feat) {
      if (feat) {
        switch (feat.kind) {
          case 'max': return t('Local maximum (f\' = 0, f\'\' < 0)');
          case 'min': return t('Local minimum (f\' = 0, f\'\' > 0)');
          case 'flatMin': return t('Local minimum (f\' = 0, f\'\' = 0 but f\'\' ≥ 0 on both sides!)');
          case 'sInf': return t('Stationary point of inflexion (f\' = 0, f\'\' = 0 & changes sign)');
          case 'nsInf': return t('Non-stationary point of inflexion (turning point of f\', f\'\' changes sign)');
        }
      }
      var v1 = M.f1(x), v2 = M.f2(x);
      var dir = v1 > 0 ? t('Increasing (f\' > 0)') : t('Decreasing (f\' < 0)');
      var conc = v2 > 0 ? t('concave up (f\'\' > 0)') : t('concave down (f\'\' < 0)');
      return dir + ', ' + conc;
    }

    /* Readout value: 2 d.p., but small non-zero values keep 2 s.f. so that a
       non-zero gradient is never displayed as 0.00. */
    function fmtD(v) {
      if (v !== 0 && Math.abs(v) < 0.005) return fmt(Number(v.toPrecision(2)), Math.max(2, -Math.floor(Math.log10(Math.abs(v))) + 1));
      return fmt(v, 2);
    }

    function update() {
      var M = MODELS[curKey];
      var feat = featureAt(M, x0);
      if (feat) x0 = feat.x; /* evaluate exactly at the feature */
      var y0 = M.f(x0), y1 = M.f1(x0), y2 = M.f2(x0);
      var f1Zero = feat && feat.kind !== 'nsInf';
      var f2Zero = feat && (feat.kind === 'nsInf' || feat.kind === 'sInf' || feat.kind === 'flatMin');

      rF(fmt(y0, 2));
      rF1((f1Zero ? fmt(0, 2) : fmtD(y1)) + (f1Zero ? ' (0)' : y1 > 0 ? ' (+)' : ' (−)'));
      rF2((f2Zero ? fmt(0, 2) : fmtD(y2)) + (f2Zero ? ' (0)' : y2 > 0 ? ' (∪)' : ' (∩)'));
      rStatus(classify(M, x0, feat));

      var spec = {
        label: t("Synchronized graphs of f(x), f'(x) and f''(x)"),
        height: 310,
        x: { label: 'x', min: M.xmin, max: M.xmax, step: 1 },
        y: { label: 'y', min: M.ymin, max: M.ymax, step: 2 },
        lines: [
          { x: x0, color: '--line-strong', dash: [4, 4], width: 1.5 }
        ],
        functions: [
          { fn: M.f, name: 'f(x)', color: '--accent', width: 2.6 },
          { fn: M.f1, name: "f'(x)", color: '--ahl', width: 2.2 },
          { fn: M.f2, name: "f''(x)", color: '--amber-line', dash: [5, 4], width: 2.0 }
        ],
        points: [
          { x: x0, y: y0, label: 'f(' + fmt(x0, 2) + ')', color: '--accent', r: 5 },
          { x: x0, y: y1, label: "f'", color: '--ahl', r: 4.5, dy: 13 },
          { x: x0, y: y2, label: "f''", color: '--amber-line', r: 4, dy: -12 }
        ]
      };

      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);
    }

    api.onCleanup(function () { if (chart) chart.destroy(); });
    update();
  });
})();
