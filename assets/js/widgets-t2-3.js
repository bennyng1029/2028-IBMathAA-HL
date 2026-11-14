/* ==========================================================================
   Analysis Lab — widgets-t2-3.js
   Interactive widgets for Topic 2.3 (Transformations, polynomials & modulus):
     1. t2-3.transform-studio    Graph transformation studio y = a f(b(x − h)) + k
     2. t2-3.modulus-reciprocal  AHL graph mapper for |f(x)|, f(|x|), and 1/f(x)
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets) return;

  function fmt(v, sf) {
    if (!isFinite(v)) return 'undefined';
    var n = Math.abs(v) < 1e-9 ? 0 : Number(v.toFixed(sf != null ? sf : 2));
    return String(n).replace('-', '−');
  }

  /* ------------------------------------------------------------------------
     1. t2-3.transform-studio
     Interactive studio for y = a f(b(x − h)) + k with parent curve f(x),
     transformed curve g(x), and tracked key point P(x₀, y₀) ↦ P'.
     ------------------------------------------------------------------------ */
  S1.widgets.register('t2-3.transform-studio', function (api) {
    var t = api.t;

    var parents = {
      quad: {
        label: t('Quadratic: f(x) = x² − 2x'),
        fn: function (x) { return x * x - 2 * x; },
        pt: { x: 1, y: -1, name: 'V' }
      },
      cubic: {
        label: t('Cubic: f(x) = 0.5(x³ − 3x)'),
        fn: function (x) { return 0.5 * (x * x * x - 3 * x); },
        pt: { x: -1, y: 1, name: 'M' }
      },
      exp: {
        label: t('Exponential: f(x) = 2ˣ'),
        fn: function (x) { return Math.pow(2, x); },
        pt: { x: 1, y: 2, name: 'P' }
      }
    };

    var pSelect = api.select({
      label: t('Parent function f(x)'),
      options: [
        { value: 'quad', label: parents.quad.label },
        { value: 'cubic', label: parents.cubic.label },
        { value: 'exp', label: parents.exp.label }
      ],
      value: 'quad',
      onChange: update
    });

    var aSlider = api.slider({ label: t('Vertical scale a'), min: -3, max: 3, step: 0.5, value: 1, onInput: update });
    var bSlider = api.slider({ label: t('Horizontal factor b'), min: -2, max: 2, step: 0.5, value: 1, onInput: update });
    var hSlider = api.slider({ label: t('Horizontal shift h'), min: -4, max: 4, step: 0.5, value: 0, onInput: update });
    var kSlider = api.slider({ label: t('Vertical shift k'), min: -4, max: 4, step: 0.5, value: 0, onInput: update });

    api.button(t('Reset'), function () {
      aSlider.set(1, true);
      bSlider.set(1, true);
      hSlider.set(0, true);
      kSlider.set(0, true);
      update();
    });

    var rEq = api.readoutItem(t('Transformed equation'), { text: true });
    var rPt = api.readoutItem(t('Tracked point P ↦ P\''), { text: true });
    var rSeq = api.readoutItem(t('Transformation sequence'), { text: true });

    var chartHost = S1.util.el('div');
    api.stage.appendChild(chartHost);
    var chart = null;

    function update() {
      var key = pSelect.value || 'quad';
      var parent = parents[key] || parents.quad;
      var a = aSlider.value;
      var b = bSlider.value;
      if (Math.abs(b) < 0.1) b = 0.5;
      var h = hSlider.value;
      var k = kSlider.value;

      var hStr = h === 0 ? 'x' : (h > 0 ? '(x − ' + fmt(h) + ')' : '(x + ' + fmt(-h) + ')');
      var kStr = k === 0 ? '' : (k > 0 ? ' + ' + fmt(k) : ' − ' + fmt(-k));
      var bStr = b === 1 ? hStr : (b === -1 ? '−' + hStr : fmt(b) + hStr);
      var aStr = a === 1 ? '' : (a === -1 ? '−' : fmt(a) + ' ');
      rEq('g(x) = ' + aStr + 'f(' + bStr + ')' + kStr);

      var x0 = parent.pt.x, y0 = parent.pt.y;
      var x1 = x0 / b + h, y1 = a * y0 + k;
      rPt(parent.pt.name + '(' + fmt(x0) + ', ' + fmt(y0) + ')  ↦  ' + parent.pt.name + '\'(' + fmt(x1) + ', ' + fmt(y1) + ')');

      var steps = [];
      if (b < 0) steps.push(t('reflect in y-axis'));
      if (Math.abs(b) !== 1) steps.push(t('H-stretch by ') + fmt(1 / Math.abs(b)));
      if (h !== 0) steps.push(t('shift H by ') + fmt(h));
      if (a < 0) steps.push(t('reflect in x-axis'));
      if (Math.abs(a) !== 1) steps.push(t('V-stretch by ') + fmt(Math.abs(a)));
      if (k !== 0) steps.push(t('shift V by ') + fmt(k));
      rSeq(steps.length ? steps.join(' → ') : t('Identity (no transformation)'));

      var spec = {
        label: t('Parent curve f(x) and transformed curve g(x) = a f(b(x − h)) + k'),
        height: 300,
        x: { label: 'x', min: -6, max: 6, step: 1 },
        y: { label: 'y', min: -6, max: 6, step: 2 },
        functions: [
          { fn: parent.fn, color: '--ink-2', dash: [5, 4], name: 'f(x)', width: 1.8 },
          {
            fn: function (x) { return a * parent.fn(b * (x - h)) + k; },
            color: '--accent',
            name: 'g(x)',
            width: 2.6
          }
        ],
        points: [
          { x: x0, y: y0, label: parent.pt.name + '(' + fmt(x0) + ', ' + fmt(y0) + ')', color: '--ink-2', r: 4, dy: 14 },
          { x: x1, y: y1, label: parent.pt.name + '\'(' + fmt(x1) + ', ' + fmt(y1) + ')', color: '--accent', r: 5.5, dy: -14 }
        ]
      };
      if (!chart) chart = S1.chart.funcPlot(chartHost, spec);
      else chart.update(spec);
    }

    update();
  });

  /* ------------------------------------------------------------------------
     2. t2-3.modulus-reciprocal
     Interactive AHL graph mapper comparing f(x) against |f(x)|, f(|x|),
     and 1/f(x), highlighting invariant points y = ±1 and roots → VAs.
     ------------------------------------------------------------------------ */
  S1.widgets.register('t2-3.modulus-reciprocal', function (api) {
    var t = api.t;

    var models = {
      quad: {
        label: t('Quadratic: f(x) = x² − 2x − 3'),
        fn: function (x) { return x * x - 2 * x - 3; },
        roots: [-1, 3],
        invPts: [
          { x: 1 - Math.sqrt(5), y: 1 },
          { x: 1 + Math.sqrt(5), y: 1 },
          { x: 1 - Math.sqrt(3), y: -1 },
          { x: 1 + Math.sqrt(3), y: -1 }
        ],
        extremum: { x: 1, y: -4 }
      },
      lin: {
        label: t('Linear: f(x) = x − 1'),
        fn: function (x) { return x - 1; },
        roots: [1],
        invPts: [{ x: 2, y: 1 }, { x: 0, y: -1 }],
        extremum: null
      },
      cubic: {
        label: t('Cubic: f(x) = 0.4(x + 2)(x − 1)(x − 3)'),
        fn: function (x) { return 0.4 * (x + 2) * (x - 1) * (x - 3); },
        roots: [-2, 1, 3],
        invPts: [],
        extremum: null
      }
    };

    var mSelect = api.select({
      label: t('Parent function f(x)'),
      options: [
        { value: 'quad', label: models.quad.label },
        { value: 'lin', label: models.lin.label },
        { value: 'cubic', label: models.cubic.label }
      ],
      value: 'quad',
      onChange: update
    });

    var modeSelect = api.select({
      label: t('AHL transformation'),
      options: [
        { value: 'abs_y', label: t('y = |f(x)| (reflect y < 0 up)') },
        { value: 'abs_x', label: t('y = f(|x|) (even mirror of x ≥ 0)') },
        { value: 'recip', label: t('y = 1 / f(x) (reciprocal)') }
      ],
      value: 'abs_y',
      onChange: update
    });

    var rRule = api.readoutItem(t('Mapping rule'), { text: true });
    var rFeatures = api.readoutItem(t('Key features'), { text: true });

    var chartHost = S1.util.el('div');
    api.stage.appendChild(chartHost);
    var chart = null;

    function update() {
      var mKey = mSelect.value || 'quad';
      var mode = modeSelect.value || 'abs_y';
      var model = models[mKey] || models.quad;

      var lines = [];
      var pts = [];
      var mappedFn;
      var mappedName;

      if (mode === 'abs_y') {
        mappedFn = function (x) { return Math.abs(model.fn(x)); };
        mappedName = '|f(x)|';
        rRule(t('Keep f(x) ≥ 0; reflect f(x) < 0 across the x-axis.'));
        rFeatures(t('Sharp cusps at x-intercepts: x = ') + model.roots.map(function (r) { return fmt(r); }).join(', '));
        model.roots.forEach(function (r) {
          pts.push({ x: r, y: 0, label: t('Cusp (') + fmt(r) + ', 0)', color: '--amber-line', r: 4.5, dy: -12 });
        });
      } else if (mode === 'abs_x') {
        mappedFn = function (x) { return model.fn(Math.abs(x)); };
        mappedName = 'f(|x|)';
        rRule(t('Discard x < 0; reflect x ≥ 0 across the y-axis (even).'));
        var y0 = model.fn(0);
        rFeatures(t('Symmetric about x = 0; y-intercept at (0, ') + fmt(y0) + ')');
        lines.push({ x: 0, color: '--line-strong', dash: [4, 4], width: 1.4 });
        pts.push({ x: 0, y: y0, label: '(0, ' + fmt(y0) + ')', color: '--ahl', r: 4.5, dy: 14 });
      } else {
        mappedFn = function (x) {
          var v = model.fn(x);
          return Math.abs(v) < 0.04 ? NaN : 1 / v;
        };
        mappedName = '1 / f(x)';
        rRule(t('Roots of f(x) become VAs; y = ±1 stay invariant; f(x) → ±∞ becomes y → 0.'));
        rFeatures(t('VAs at x = ') + model.roots.map(function (r) { return fmt(r); }).join(', ') + t('; HA: y = 0'));
        model.roots.forEach(function (r) {
          lines.push({ x: r, color: '--bad', dash: [5, 4], width: 1.5 });
        });
        lines.push({ y: 1, color: '--line-strong', dash: [3, 4], width: 1 });
        lines.push({ y: -1, color: '--line-strong', dash: [3, 4], width: 1 });
        model.invPts.forEach(function (p) {
          pts.push({ x: p.x, y: p.y, label: 'y=' + fmt(p.y, 0), color: '--ok', r: 4.5, dy: p.y > 0 ? -12 : 14 });
        });
        if (model.extremum) {
          var ex = model.extremum;
          pts.push({ x: ex.x, y: 1 / ex.y, label: '(' + fmt(ex.x) + ', ' + fmt(1 / ex.y) + ')', color: '--ahl', r: 4.5, dy: -12 });
        }
      }

      var spec = {
        label: t('Parent f(x) and AHL transformed curve ') + mappedName,
        height: 300,
        x: { label: 'x', min: -5, max: 6, step: 1 },
        y: { label: 'y', min: -6, max: 6, step: 2 },
        lines: lines,
        functions: [
          { fn: model.fn, color: '--ink-2', dash: [5, 4], name: 'f(x)', width: 1.8 },
          { fn: mappedFn, color: '--ahl', name: mappedName, width: 2.6 }
        ],
        points: pts
      };
      if (!chart) chart = S1.chart.funcPlot(chartHost, spec);
      else chart.update(spec);
    }

    update();
  });
})();
