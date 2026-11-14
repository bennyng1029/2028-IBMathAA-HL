/* ==========================================================================
   Analysis Lab — widgets-t1-4.js
   Interactive widgets for Topic 1.4: Complex numbers and De Moivre's theorem
     1. t1-4.argand-mul    Argand plane multiplication & polar/Euler explorer
     2. t1-4.roots-polygon n-th roots of a complex number (regular n-gon)
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets) return;
  var fmt = S1.math.fmt, fixed = S1.math.fixed, MINUS = S1.math.MINUS;

  function fmtNum(v, dp) {
    var s = fixed(Math.abs(v) < 1e-9 ? 0 : v, dp != null ? dp : 2);
    return s;
  }

  function fmtCartesian(re, im) {
    var r = Math.abs(re) < 1e-9 ? 0 : re;
    var m = Math.abs(im) < 1e-9 ? 0 : im;
    var rStr = fixed(r, 2);
    var mAbs = fixed(Math.abs(m), 2);
    var sign = m < 0 ? ' ' + MINUS + ' ' : ' + ';
    return rStr + sign + mAbs + 'i';
  }

  function wrapPi(rad) {
    var twoPi = 2 * Math.PI;
    var a = ((rad + Math.PI) % twoPi + twoPi) % twoPi - Math.PI;
    if (a <= -Math.PI + 1e-9) a = Math.PI;
    return a;
  }

  /* Exact label for the angle (num / den)·π with integers num, den > 0,
     reduced to the principal value in (−π, π]. No rounding to whole degrees. */
  function fmtFracPi(num, den) {
    num = Math.round(num); den = Math.round(den);
    var period = 2 * den;
    var m = ((num % period) + period) % period;   // 0 … 2den − 1
    if (m > den) m -= period;                      // (−den, den]
    if (m === 0) return '0';
    var g = S1.math.gcd(Math.abs(m), den);
    var p = m / g, q = den / g;
    var sign = p < 0 ? MINUS : '';
    var absP = Math.abs(p);
    var piPart = absP === 1 ? 'π' : absP + 'π';
    return q === 1 ? sign + piPart : sign + piPart + '/' + q;
  }

  /* deg must be a whole number of degrees (the sliders step by 15°). */
  function fmtAnglePi(deg) { return fmtFracPi(deg, 180); }

  /* ------------------------------------------------------------------------
     1. Argand Plane Multiplication & Polar/Euler Explorer
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-4.argand-mul', function (api) {
    var t = api.t;
    var sR1 = api.slider({ label: t('Modulus r₁ = |z₁|'), min: 0.5, max: 3.0, step: 0.1, value: 1.5, onInput: update });
    var sT1 = api.slider({ label: t('Angle θ₁ (°)'), min: -180, max: 180, step: 15, value: 30, unit: '°', onInput: update });
    var sR2 = api.slider({ label: t('Modulus r₂ = |z₂|'), min: 0.5, max: 3.0, step: 0.1, value: 2.0, onInput: update });
    var sT2 = api.slider({ label: t('Angle θ₂ (°)'), min: -180, max: 180, step: 15, value: 60, unit: '°', onInput: update });

    api.button(t('Preset: × i (90° rotation)'), function () {
      sR1.set(2.0, true); sT1.set(30, true);
      sR2.set(1.0, true); sT2.set(90, true);
      update();
    });
    api.button(t('Preset: z · z* = |z|²'), function () {
      sR1.set(2.0, true); sT1.set(45, true);
      sR2.set(2.0, true); sT2.set(-45, true);
      update();
    });

    var outZ1 = api.readoutItem(t('z₁ (Euler & Cartesian)'));
    var outZ2 = api.readoutItem(t('z₂ (Euler & Cartesian)'));
    var outProd = api.readoutItem(t('Product z₁z₂ = r₁r₂ e<sup>i(θ₁+θ₂)</sup>'));
    var outArg = api.readoutItem(t('Principal arg(z₁z₂)'));

    var plotHost = S1.util.el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    function buildSpec() {
      var r1 = sR1.value, deg1 = sT1.value, th1 = deg1 * Math.PI / 180;
      var r2 = sR2.value, deg2 = sT2.value, th2 = deg2 * Math.PI / 180;
      var rP = r1 * r2, degP = deg1 + deg2, thP = th1 + th2;

      var x1 = r1 * Math.cos(th1), y1 = r1 * Math.sin(th1);
      var x2 = r2 * Math.cos(th2), y2 = r2 * Math.sin(th2);
      var xP = rP * Math.cos(thP), yP = rP * Math.sin(thP);

      var maxR = Math.max(4, Math.ceil(Math.max(r1, r2, rP) + 0.8));

      outZ1(fmtNum(r1, 2) + ' e<sup>i(' + fmtAnglePi(deg1) + ')</sup> = ' + fmtCartesian(x1, y1));
      outZ2(fmtNum(r2, 2) + ' e<sup>i(' + fmtAnglePi(deg2) + ')</sup> = ' + fmtCartesian(x2, y2));
      outProd(fmtNum(rP, 2) + ' e<sup>i(' + fmtAnglePi(degP) + ')</sup> = ' + fmtCartesian(xP, yP));
      var pDeg = ((degP + 180) % 360 + 360) % 360 - 180;
      if (pDeg <= -180 + 1e-6) pDeg = 180;
      outArg(fmtAnglePi(pDeg) + ' rad (' + fixed(wrapPi(thP), 3) + ' rad)');

      return {
        label: t('Argand diagram showing complex vectors z₁, z₂ and their product z₁z₂'),
        height: 310,
        equalAspect: true,
        x: { label: t('Re(z)'), min: -maxR, max: maxR, step: maxR > 5 ? 2 : 1 },
        y: { label: t('Im(z)'), min: -maxR, max: maxR, step: maxR > 5 ? 2 : 1 },
        circles: [
          { x: 0, y: 0, r: 1, color: '--line', dash: [3, 3], width: 1 },
          { x: 0, y: 0, r: rP, color: '--ahl', dash: [4, 4], width: 1.2 }
        ],
        vectors: [
          { from: [0, 0], to: [x1, y1], color: '--accent', width: 2.4, label: 'z₁' },
          { from: [0, 0], to: [x2, y2], color: '--amber-line', width: 2.4, label: 'z₂' },
          { from: [0, 0], to: [xP, yP], color: '--ahl', width: 2.8, label: 'z₁z₂' }
        ],
        points: [
          { x: x1, y: y1, color: '--accent', r: 4 },
          { x: x2, y: y2, color: '--amber-line', r: 4 },
          { x: xP, y: yP, color: '--ahl', r: 5, label: 'z₁z₂ (r=' + fmtNum(rP, 2) + ')' }
        ]
      };
    }

    function update() {
      var spec = buildSpec();
      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);
    }

    update();
    api.onCleanup(function () { if (chart) chart.destroy(); });
  });

  /* ------------------------------------------------------------------------
     2. n-th Roots of a Complex Number (Regular n-gon on the Argand plane)
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-4.roots-polygon', function (api) {
    var t = api.t;
    var sN = api.slider({ label: t('Degree n (number of roots)'), min: 2, max: 8, step: 1, value: 5, onInput: update });
    var sR = api.slider({ label: t('Target modulus |w| = r'), min: 1, max: 16, step: 1, value: 1, onInput: update });
    var sTh = api.slider({ label: t('Target angle arg(w) = θ (°)'), min: -180, max: 180, step: 15, value: 0, unit: '°', onInput: update });

    api.button(t('5th roots of unity (z⁵ = 1)'), function () {
      sN.set(5, true); sR.set(1, true); sTh.set(0, true);
      update();
    });
    api.button(t('Cube roots of −8 (z³ = −8)'), function () {
      sN.set(3, true); sR.set(8, true); sTh.set(180, true);
      update();
    });
    api.button(t('4th roots of −8 + 8√3 i'), function () {
      sN.set(4, true); sR.set(16, true); sTh.set(120, true);
      update();
    });

    var outRad = api.readoutItem(t('Root circle radius r<sup>1/n</sup>'));
    var outStep = api.readoutItem(t('Angular spacing 2π/n'));
    var outZ0 = api.readoutItem(t('Principal root z₀ (k = 0)'));
    var outSum = api.readoutItem(t('Sum of all n roots'));

    var plotHost = S1.util.el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    function buildSpec() {
      var n = Math.round(sN.value), r = sR.value, deg = sTh.value, th = deg * Math.PI / 180;
      var rootR = Math.pow(r, 1 / n);
      var roots = S1.math.complex.roots({ re: r * Math.cos(th), im: r * Math.sin(th) }, n);

      var polyPts = [];
      var vectors = [];
      var points = [];
      for (var k = 0; k < n; k++) {
        var rk = roots[k];
        polyPts.push([rk.re, rk.im]);
        vectors.push({
          from: [0, 0],
          to: [rk.re, rk.im],
          color: k === 0 ? '--ahl' : '--accent',
          width: k === 0 ? 2.6 : 1.8
        });
        points.push({
          x: rk.re,
          y: rk.im,
          color: k === 0 ? '--ahl' : '--accent',
          r: k === 0 ? 5.5 : 4.5,
          label: 'z' + k + ' (' + fmtFracPi(deg + 360 * k, 180 * n) + ')'
        });
      }
      if (n >= 2) polyPts.push([roots[0].re, roots[0].im]);

      var maxAxis = Math.max(2, Math.ceil(rootR * 1.45));

      outRad(fmt(rootR, 3) + ' (since ' + r + '<sup>1/' + n + '</sup> = ' + fmt(rootR, 3) + ')');
      outStep('2π/' + n + ' = ' + fixed(360 / n, 1) + '° (' + fmt(2 * Math.PI / n, 3) + ' rad)');
      outZ0(fmt(rootR, 3) + ' e<sup>i(' + fmtFracPi(deg, 180 * n) + ')</sup> = ' + fmtCartesian(roots[0].re, roots[0].im));
      outSum('0 + 0i (regular ' + n + '-gon symmetry)');

      return {
        label: t('Argand diagram showing the n-th roots of w forming a regular polygon'),
        height: 320,
        equalAspect: true,
        x: { label: t('Re(z)'), min: -maxAxis, max: maxAxis, step: 1 },
        y: { label: t('Im(z)'), min: -maxAxis, max: maxAxis, step: 1 },
        circles: [
          { x: 0, y: 0, r: rootR, color: '--line-strong', dash: [4, 4], width: 1.4 }
        ],
        series: [
          { name: t('Regular n-gon of roots'), data: polyPts, color: '--ahl', width: 2 }
        ],
        vectors: vectors,
        points: points
      };
    }

    function update() {
      var spec = buildSpec();
      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);
    }

    update();
    api.onCleanup(function () { if (chart) chart.destroy(); });
  });
})();
