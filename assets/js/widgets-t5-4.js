/* ==========================================================================
   Analysis Lab — widgets-t5-4.js
   Interactive visualisations for Topic 5.4 (AHL 5.18–5.19):
     - t5-4.euler-field:      Slope Field & Euler's Method Step Explorer
     - t5-4.maclaurin-approx: Maclaurin Polynomial Approximation Studio
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets || !S1.chart) return;
  var el = S1.util.el, fmt = S1.math.fmt, fixed = S1.math.fixed;

  /* --------------------------------------------------------------------------
     1. t5-4.euler-field
     Interactive Slope Field & Euler's Method Step Explorer on S1.chart.funcPlot
     -------------------------------------------------------------------------- */
  S1.widgets.register('t5-4.euler-field', function (api) {
    var t = api.t;
    var ODES = {
      lin_sum: {
        label: 'dy/dx = x + y',
        f: function (x, y) { return x + y; },
        // Exact solution of y' - y = x with y(0) = y0: y(x) = (y0 + 1)e^x - x - 1
        exact: function (x, y0) { return (y0 + 1) * Math.exp(x) - x - 1; },
        ymin: -1, ymax: 7
      },
      decay_sin: {
        label: 'dy/dx = cos(x) − 0.5y',
        f: function (x, y) { return Math.cos(x) - 0.5 * y; },
        // Exact solution of y' + 0.5y = cos x with y(0) = y0:
        // Particular: (2/5)cos x + (4/5)sin x; C = y0 - 0.4
        exact: function (x, y0) { return 0.4 * Math.cos(x) + 0.8 * Math.sin(x) + (y0 - 0.4) * Math.exp(-0.5 * x); },
        ymin: -1.5, ymax: 3.5
      },
      logistic: {
        label: 'dy/dx = 0.6 y (3 − y)  (logistic)',
        f: function (x, y) { return 0.6 * y * (3 - y); },
        // Exact solution with y(0) = y0: y(x) = 3 / (1 + ((3 - y0)/y0) e^{-1.8x})
        exact: function (x, y0) {
          if (Math.abs(y0) < 1e-6) return 0;
          return 3 / (1 + ((3 - y0) / y0) * Math.exp(-1.8 * x));
        },
        ymin: -0.5, ymax: 3.8
      },
      separable: {
        label: 'dy/dx = 0.5 x y',
        f: function (x, y) { return 0.5 * x * y; },
        // Exact solution with y(0) = y0: y(x) = y0 e^{0.25 x^2}
        exact: function (x, y0) { return y0 * Math.exp(0.25 * x * x); },
        ymin: -0.5, ymax: 6.5
      }
    };

    var curKey = 'lin_sum';
    var stepH = 0.25;
    var y0Val = 0.5;
    var targetX = 1.5;

    api.select({
      label: t('Differential equation'),
      value: curKey,
      options: [
        { value: 'lin_sum', label: t('dy/dx = x + y') },
        { value: 'separable', label: t('dy/dx = 0.5 x y') },
        { value: 'logistic', label: t('dy/dx = 0.6 y (3 − y)') },
        { value: 'decay_sin', label: t('dy/dx = cos(x) − 0.5y') }
      ],
      onChange: function (v) { curKey = v; update(); }
    });

    api.slider({
      label: t('Step size h'),
      min: 0.05, max: 0.5, step: 0.05, value: stepH,
      onInput: function (v) { stepH = v; update(); }
    });

    api.slider({
      label: t('Initial condition y(0)'),
      min: 0.2, max: 2.0, step: 0.1, value: y0Val,
      onInput: function (v) { y0Val = v; update(); }
    });

    var plotHost = el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    var roSteps = api.readoutItem(t('Steps to x = 1.5'));
    var roEuler = api.readoutItem(t('Euler estimate y_n(1.5)'));
    var roExact = api.readoutItem(t('Exact value y(1.5)'));
    var roErr = api.readoutItem(t('Global truncation error'));

    function update() {
      var ode = ODES[curKey];
      var h = stepH;
      var nSteps = Math.max(1, Math.round(targetX / h));
      var pts = [[0, y0Val]];
      var cx = 0, cy = y0Val;
      for (var i = 0; i < nSteps; i++) {
        var slope = ode.f(cx, cy);
        cy = cy + h * slope;
        cx = Number(((i + 1) * h).toFixed(4));
        pts.push([cx, cy]);
      }

      var actualTargetX = cx;
      var exactY = ode.exact(actualTargetX, y0Val);
      var diff = cy - exactY;
      var biasWord = Math.abs(diff) < 1e-4 ? '' : (diff < 0 ? ' (under)' : ' (over)');

      roSteps(nSteps + ' steps (x = ' + fixed(actualTargetX, 2) + ')');
      roEuler(fixed(cy, 4));
      roExact(fixed(exactY, 4));
      roErr(fixed(Math.abs(diff), 4) + biasWord);

      var spec = {
        label: t('Slope field, exact solution curve, and Euler polygon'),
        height: 290,
        x: { label: 'x', min: -0.2, max: 1.8, step: 0.5 },
        y: { label: 'y', min: ode.ymin, max: ode.ymax },
        slopeField: {
          fn: ode.f,
          nx: 16,
          ny: 12,
          color: '--line-strong'
        },
        functions: [
          {
            fn: function (x) { return ode.exact(x, y0Val); },
            domain: [0, 1.8],
            color: '--accent',
            width: 2.5,
            name: t('Exact solution y(x)')
          }
        ],
        series: [
          {
            name: t('Euler polygon (h = ') + fixed(h, 2) + ')',
            color: '--ahl',
            width: 2.2,
            dash: [5, 4],
            points: true,
            r: 3.5,
            data: pts
          }
        ],
        points: [
          { x: 0, y: y0Val, r: 5, color: '--accent', label: 'y(0) = ' + fixed(y0Val, 1) },
          { x: actualTargetX, y: exactY, r: 4.5, color: '--accent', label: t('Exact') },
          { x: actualTargetX, y: cy, r: 4.5, color: '--ahl', label: t('Euler') }
        ]
      };

      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);
    }

    update();
    api.onCleanup(function () { if (chart) chart.destroy(); });
  });

  /* --------------------------------------------------------------------------
     2. t5-4.maclaurin-approx
     Interactive Maclaurin Polynomial Approximation Studio on S1.chart.funcPlot
     -------------------------------------------------------------------------- */
  S1.widgets.register('t5-4.maclaurin-approx', function (api) {
    var t = api.t;

    var fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

    var FUNCS = {
      sin: {
        name: 'sin(x)',
        fn: function (x) { return Math.sin(x); },
        domain: [-4.5, 4.5],
        xmin: -4.5, xmax: 4.5, ymin: -2.2, ymax: 2.2,
        coeff: function (k) {
          if (k % 2 === 0) return 0;
          return (((k - 1) / 2) % 2 === 0 ? 1 : -1) / fact[k];
        },
        termStr: function (k) {
          if (k % 2 === 0) return null;
          var sign = (((k - 1) / 2) % 2 === 0) ? '+' : '−';
          if (k === 1) return 'x';
          return sign + ' x^' + k + '/' + k + '!';
        }
      },
      cos: {
        name: 'cos(x)',
        fn: function (x) { return Math.cos(x); },
        domain: [-4.5, 4.5],
        xmin: -4.5, xmax: 4.5, ymin: -2.2, ymax: 2.2,
        coeff: function (k) {
          if (k % 2 !== 0) return 0;
          return ((k / 2) % 2 === 0 ? 1 : -1) / fact[k];
        },
        termStr: function (k) {
          if (k % 2 !== 0) return null;
          if (k === 0) return '1';
          var sign = ((k / 2) % 2 === 0) ? '+' : '−';
          return sign + ' x^' + k + '/' + k + '!';
        }
      },
      exp: {
        name: 'e^x',
        fn: function (x) { return Math.exp(x); },
        domain: [-3.5, 2.5],
        xmin: -3.5, xmax: 2.5, ymin: -1, ymax: 8,
        coeff: function (k) { return 1 / fact[k]; },
        termStr: function (k) {
          if (k === 0) return '1';
          if (k === 1) return '+ x';
          return '+ x^' + k + '/' + k + '!';
        }
      },
      ln1p: {
        name: 'ln(1 + x)',
        fn: function (x) { return x > -0.999 ? Math.log(1 + x) : NaN; },
        domain: [-0.98, 2.2],
        xmin: -1.5, xmax: 2.2, ymin: -3, ymax: 2,
        asymptoteX: -1,
        coeff: function (k) {
          if (k === 0) return 0;
          return (k % 2 === 1 ? 1 : -1) / k;
        },
        termStr: function (k) {
          if (k === 0) return null;
          if (k === 1) return 'x';
          var sign = (k % 2 === 1) ? '+' : '−';
          return sign + ' x^' + k + '/' + k;
        }
      },
      inv1p: {
        name: '(1 + x)⁻¹',
        fn: function (x) { return Math.abs(1 + x) > 0.02 ? 1 / (1 + x) : NaN; },
        domain: [-0.98, 2.2],
        xmin: -1.5, xmax: 2.2, ymin: -1.5, ymax: 4,
        asymptoteX: -1,
        coeff: function (k) { return k % 2 === 0 ? 1 : -1; },
        termStr: function (k) {
          if (k === 0) return '1';
          var sign = (k % 2 === 0) ? '+' : '−';
          return sign + (k === 1 ? ' x' : ' x^' + k);
        }
      }
    };

    var curKey = 'sin';
    var degreeN = 3;
    var testX = 0.8;

    api.select({
      label: t('Function f(x)'),
      value: curKey,
      options: [
        { value: 'sin', label: t('f(x) = sin(x)') },
        { value: 'cos', label: t('f(x) = cos(x)') },
        { value: 'exp', label: t('f(x) = e^x') },
        { value: 'ln1p', label: t('f(x) = ln(1 + x)  (|x| ≤ 1)') },
        { value: 'inv1p', label: t('f(x) = (1 + x)⁻¹  (|x| < 1)') }
      ],
      onChange: function (v) {
        curKey = v;
        if ((curKey === 'ln1p' || curKey === 'inv1p') && Math.abs(testX) > 0.9) {
          testX = 0.6;
          xSlider.setValue(testX, true);
        }
        update();
      }
    });

    api.slider({
      label: t('Maclaurin degree n'),
      min: 0, max: 9, step: 1, value: degreeN,
      onInput: function (v) { degreeN = v; update(); }
    });

    var xSlider = api.slider({
      label: t('Test point x'),
      min: -0.8, max: 1.5, step: 0.1, value: testX,
      onInput: function (v) { testX = v; update(); }
    });

    var plotHost = el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    var roPoly = api.readoutItem(t('Polynomial P_n(x)'), { text: true });
    var roExactVal = api.readoutItem(t('Exact f(x)'));
    var roPolyVal = api.readoutItem(t('Approx P_n(x)'));
    var roAbsErr = api.readoutItem(t('Error |f(x) − P_n(x)|'));

    function evalPoly(fObj, n, x) {
      var sum = 0, xp = 1;
      for (var k = 0; k <= n; k++) {
        sum += fObj.coeff(k) * xp;
        xp *= x;
      }
      return sum;
    }

    function buildFormula(fObj, n) {
      var parts = [];
      for (var k = 0; k <= n; k++) {
        var s = fObj.termStr(k);
        if (s) parts.push(s);
      }
      if (!parts.length) return '0';
      return parts.join(' ').replace(/^\+\s*/, '');
    }

    function update() {
      var fObj = FUNCS[curKey];
      var n = degreeN;
      var polyFn = function (x) { return evalPoly(fObj, n, x); };

      var fx = fObj.fn(testX);
      var px = polyFn(testX);
      var err = Math.abs(fx - px);

      roPoly('P_' + n + '(x) = ' + buildFormula(fObj, n));
      roExactVal('f(' + fixed(testX, 1) + ') = ' + fixed(fx, 5));
      roPolyVal('P_' + n + '(' + fixed(testX, 1) + ') = ' + fixed(px, 5));
      roAbsErr(fmt(err, 3));

      var lines = [
        { x1: testX, y1: fx, x2: testX, y2: px, color: '--amber-line', width: 2, dash: [3, 3] }
      ];
      if (fObj.asymptoteX != null) {
        lines.push({ x: fObj.asymptoteX, color: '--bad', dash: [4, 4], width: 1.5 });
        lines.push({ x: 1, color: '--line-strong', dash: [3, 3], width: 1.2 });
      }

      var spec = {
        label: t('Function f(x) and its degree-n Maclaurin polynomial P_n(x)'),
        height: 290,
        x: { label: 'x', min: fObj.xmin, max: fObj.xmax },
        y: { label: 'y', min: fObj.ymin, max: fObj.ymax },
        lines: lines,
        functions: [
          { fn: fObj.fn, domain: fObj.domain, color: '--accent', width: 2.5, name: 'f(x) = ' + fObj.name },
          { fn: polyFn, color: '--ahl', width: 2.2, dash: [6, 4], name: 'P_' + n + '(x)' }
        ],
        points: [
          { x: 0, y: fObj.fn(0), r: 4.5, color: '--ink', label: '(0, f(0))' },
          { x: testX, y: fx, r: 4.5, color: '--accent', label: 'f(x)' },
          { x: testX, y: px, r: 4.5, color: '--ahl', label: 'P_' + n + '(x)' }
        ]
      };

      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);
    }

    update();
    api.onCleanup(function () { if (chart) chart.destroy(); });
  });
})();
