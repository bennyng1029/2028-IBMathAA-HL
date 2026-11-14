/* ==========================================================================
   Analysis Lab — widgets-t2-2.js
   Interactive widgets for Topic 2.2 (Quadratics, rational, exponential & log models):
     1. t2-2.discriminant-lab     Quadratic & line-parabola intersection discriminant lab
     2. t2-2.rational-asymptotes  Rational function (ax + b)/(cx + d) asymptote explorer
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
     1. t2-2.discriminant-lab
     Plots parabola y = ax² + bx + c and line y = mx (or x-axis y = 0 when m = 0),
     computing Δ = (b − m)² − 4ac, vertex (h, k), and highlighting intersections.
     ------------------------------------------------------------------------ */
  S1.widgets.register('t2-2.discriminant-lab', function (api) {
    var t = api.t;

    var aSlider = api.slider({ label: t('Coefficient a'), min: -2, max: 2, step: 0.5, value: 1, onInput: update });
    var bSlider = api.slider({ label: t('Coefficient b'), min: -6, max: 6, step: 0.5, value: -2, onInput: update });
    var cSlider = api.slider({ label: t('Constant c'), min: -5, max: 6, step: 0.5, value: -3, onInput: update });
    var mSlider = api.slider({ label: t('Line gradient m (y = mx)'), min: -4, max: 4, step: 0.5, value: 0, onInput: update });

    api.button(t('Tangent (Δ = 0)'), function () {
      aSlider.set(1, true); bSlider.set(-2, true); cSlider.set(4, true); mSlider.set(2, true);
      update();
    });
    api.button(t('Always positive (Δ < 0)'), function () {
      aSlider.set(1, true); bSlider.set(-2, true); cSlider.set(3, true); mSlider.set(0, true);
      update();
    });

    var rVertex = api.readoutItem(t('Parabola vertex & axis'), { text: true });
    var rEq = api.readoutItem(t('Intersection equation f(x) = mx'), { text: true });
    var rDelta = api.readoutItem(t('Discriminant Δ = B² − 4AC'), { text: true });
    var rNature = api.readoutItem(t('Geometric interpretation'), { text: true });

    var chartHost = S1.util.el('div');
    api.stage.appendChild(chartHost);
    var chart = null;

    function update() {
      var a = aSlider.value;
      var b = bSlider.value, c = cSlider.value, m = mSlider.value;
      if (Math.abs(a) < 1e-9) {
        // a = 0 is not a quadratic: say so instead of silently using another value.
        var msg = t('a = 0 is not a quadratic: choose a ≠ 0');
        rVertex(msg); rEq(msg); rDelta(msg); rNature(msg);
        var spec0 = {
          label: t('Parabola y = ax² + bx + c and line y = mx'),
          height: 290,
          x: { label: 'x', min: -5, max: 5, step: 1 },
          y: { label: 'y', min: -8, max: 10, step: 2 },
          functions: [
            { fn: function (x) { return b * x + c; }, color: '--accent', name: 'f(x) = bx + c', width: 2.5 },
            { fn: function (x) { return m * x; }, color: '--ahl', name: 'y = mx', width: 2, dash: [5, 4] }
          ],
          points: []
        };
        if (!chart) chart = S1.chart.funcPlot(chartHost, spec0);
        else chart.update(spec0);
        return;
      }
      var h = -b / (2 * a);
      var k = a * h * h + b * h + c;
      var B = b - m;
      var delta = B * B - 4 * a * c;

      rVertex('Vertex (' + fmt(h) + ', ' + fmt(k) + '),  axis x = ' + fmt(h));
      rEq(fmt(a) + 'x² + (' + fmt(B) + ')x + (' + fmt(c) + ') = 0');
      rDelta('Δ = (' + fmt(B) + ')² − 4(' + fmt(a) + ')(' + fmt(c) + ') = ' + fmt(delta));

      var pts = [{ x: h, y: k, label: 'V(' + fmt(h) + ', ' + fmt(k) + ')', color: '--ink-2', r: 4.5, dy: a > 0 ? 14 : -12 }];
      if (Math.abs(delta) < 1e-6) {
        var r0 = -B / (2 * a), y0 = m * r0;
        rNature(t('Δ = 0 → 1 repeated real root (line is tangent at x = ') + fmt(r0) + ')');
        pts.push({ x: r0, y: y0, label: 'Tangent (' + fmt(r0) + ', ' + fmt(y0) + ')', color: '--amber-line', r: 5.5, dy: -14 });
      } else if (delta > 0) {
        var sq = Math.sqrt(delta);
        var r1 = (-B - sq) / (2 * a), r2 = (-B + sq) / (2 * a);
        if (r1 > r2) { var tmp = r1; r1 = r2; r2 = tmp; }
        rNature(t('Δ > 0 → 2 distinct real intersections (x = ') + fmt(r1) + ', ' + fmt(r2) + ')');
        pts.push({ x: r1, y: m * r1, label: 'x₁=' + fmt(r1), color: '--ok', r: 5, dy: -12 });
        pts.push({ x: r2, y: m * r2, label: 'x₂=' + fmt(r2), color: '--ok', r: 5, dy: -12 });
      } else {
        rNature(t('Δ < 0 → 0 real intersections (curve and line never meet)'));
      }

      var spec = {
        label: t('Parabola y = ax² + bx + c and line y = mx'),
        height: 290,
        x: { label: 'x', min: -5, max: 5, step: 1 },
        y: { label: 'y', min: -8, max: 10, step: 2 },
        lines: [{ x: h, color: '--line-strong', dash: [4, 4], width: 1.2 }],
        functions: [
          { fn: function (x) { return a * x * x + b * x + c; }, color: '--accent', name: 'f(x) = ax² + bx + c', width: 2.5 },
          { fn: function (x) { return m * x; }, color: '--ahl', name: 'y = mx', width: 2, dash: [5, 4] }
        ],
        points: pts
      };
      if (!chart) chart = S1.chart.funcPlot(chartHost, spec);
      else chart.update(spec);
    }

    update();
  });

  /* ------------------------------------------------------------------------
     2. t2-2.rational-asymptotes
     Interactive explorer for f(x) = (ax + b)/(cx + d), showing VA x = −d/c,
     HA y = a/c, axial intercepts, and decomposed form A + B/(cx + d).
     ------------------------------------------------------------------------ */
  S1.widgets.register('t2-2.rational-asymptotes', function (api) {
    var t = api.t;

    var aSlider = api.slider({ label: t('Numerator a (in ax + b)'), min: -4, max: 4, step: 1, value: 2, onInput: update });
    var bSlider = api.slider({ label: t('Numerator b (in ax + b)'), min: -6, max: 6, step: 1, value: -1, onInput: update });
    var cSlider = api.slider({ label: t('Denominator c (in cx + d)'), min: 1, max: 3, step: 1, value: 1, onInput: update });
    var dSlider = api.slider({ label: t('Denominator d (in cx + d)'), min: -4, max: 4, step: 1, value: -1, onInput: update });

    var rVA = api.readoutItem(t('Vertical asymptote (VA)'), { text: true });
    var rHA = api.readoutItem(t('Horizontal asymptote (HA)'), { text: true });
    var rDecomp = api.readoutItem(t('Decomposed form A + B/(cx + d)'), { text: true });
    var rInt = api.readoutItem(t('Axial intercepts'), { text: true });

    var chartHost = S1.util.el('div');
    api.stage.appendChild(chartHost);
    var chart = null;

    function update() {
      var a = aSlider.value, b = bSlider.value, c = cSlider.value, d = dSlider.value;
      var va = -d / c;
      var ha = a / c;
      var B = b - ha * d;

      if (a * d === b * c) {
        // Degenerate case ad − bc = 0: f is the constant a/c with a hole at x = −d/c, so there are no asymptotes.
        var none = t('none: ad − bc = 0, so f is constant');
        rVA(none); rHA(none);
        rDecomp('f(x) = ' + fmt(ha) + '   (' + t('hole at') + ' x = ' + fmt(va) + ')');
        rInt('x-int: ' + (Math.abs(ha) < 1e-9 ? t('every x ≠ ') + fmt(va) : 'none') + ',   y-int: ' + (d !== 0 ? '(0, ' + fmt(ha) + ')' : 'none'));
        var specD = {
          label: t('Graph of rational function f(x) = (ax + b)/(cx + d) with asymptotes'),
          height: 290,
          x: { label: 'x', min: -6, max: 6, step: 1 },
          y: { label: 'y', min: -6, max: 6, step: 2 },
          lines: [],
          functions: [{ fn: function (x) { return Math.abs(c * x + d) < 0.06 ? NaN : ha; }, color: '--accent', name: 'f(x) = (ax + b)/(cx + d)', width: 2.5 }],
          points: [{ x: va, y: ha, color: '--accent', r: 4.5, hollow: true, label: t('hole'), dy: -12 }]
        };
        if (!chart) chart = S1.chart.funcPlot(chartHost, specD);
        else chart.update(specD);
        return;
      }

      rVA('x = ' + fmt(va) + '   (Domain: x ≠ ' + fmt(va) + ')');
      rHA('y = ' + fmt(ha) + '   (Range: y ≠ ' + fmt(ha) + ')');
      rDecomp('f(x) = ' + fmt(ha) + ' + (' + fmt(B) + ') / (' + fmt(c) + 'x + (' + fmt(d) + '))');

      var xInt = a !== 0 ? -b / a : NaN;
      var yInt = d !== 0 ? b / d : NaN;
      var intStr = 'x-int: ' + (isFinite(xInt) && Math.abs(xInt - va) > 1e-6 ? '(' + fmt(xInt) + ', 0)' : 'none') +
                   ',   y-int: ' + (isFinite(yInt) ? '(0, ' + fmt(yInt) + ')' : 'none');
      rInt(intStr);

      var pts = [];
      if (isFinite(xInt) && Math.abs(xInt - va) > 1e-6) {
        pts.push({ x: xInt, y: 0, label: '(' + fmt(xInt) + ', 0)', color: '--ok', r: 4.5, dy: -12 });
      }
      if (isFinite(yInt)) {
        pts.push({ x: 0, y: yInt, label: '(0, ' + fmt(yInt) + ')', color: '--ahl', r: 4.5, dy: 14 });
      }

      var spec = {
        label: t('Graph of rational function f(x) = (ax + b)/(cx + d) with asymptotes'),
        height: 290,
        x: { label: 'x', min: -6, max: 6, step: 1 },
        y: { label: 'y', min: -6, max: 6, step: 2 },
        lines: [
          { x: va, color: '--bad', dash: [5, 4], width: 1.6 },
          { y: ha, color: '--amber-line', dash: [5, 4], width: 1.6 }
        ],
        functions: [
          {
            fn: function (x) {
              var den = c * x + d;
              return Math.abs(den) < 0.06 ? NaN : (a * x + b) / den;
            },
            color: '--accent',
            name: 'f(x) = (ax + b)/(cx + d)',
            width: 2.5
          }
        ],
        points: pts,
        annotations: [
          { x: va, y: 5.2, text: 'VA: x = ' + fmt(va), dx: va > 3 ? -42 : 42, dy: 0 },
          { x: -4.2, y: ha, text: 'HA: y = ' + fmt(ha), dx: 0, dy: ha > 4 ? 14 : -12 }
        ]
      };
      if (!chart) chart = S1.chart.funcPlot(chartHost, spec);
      else chart.update(spec);
    }

    update();
  });
})();
