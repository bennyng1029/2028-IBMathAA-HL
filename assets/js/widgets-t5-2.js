/* ==========================================================================
   Analysis Lab — widgets-t5-2.js
   Interactive widgets for Topic 5.2 (Integration, areas between curves & kinematics):
     1. t5-2.area-between    — Signed integral vs enclosed geometric area & area between curves
     2. t5-2.kinematics-lab  — Particle kinematics lab (v(t) graph + animated 1D particle track)
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets || !S1.chart) return;
  var el = S1.util.el;

  function fmt(v, dp) {
    if (!isFinite(v)) return '0.00';
    var d = dp != null ? dp : 2;
    var s = Number(v).toFixed(d);
    if (Number(s) === 0) s = (0).toFixed(d);
    return s.replace('-', '−');
  }

  /* ------------------------------------------------------------------------
     1. Signed Integral vs Geometric Area & Area Between Curves Explorer
     ------------------------------------------------------------------------ */
  S1.widgets.register('t5-2.area-between', function (api) {
    var t = api.t;
    var PRESETS = {
      cubic: {
        label: 'Single curve: f(x) = x³ − 4x (roots at −2, 0, 2)',
        f: function (x) { return x * x * x - 4 * x; },
        g: null,
        xmin: -2.6, xmax: 2.6, ymin: -5, ymax: 5,
        a0: -2.0, b0: 2.0
      },
      sine: {
        label: 'Single curve: f(x) = 3 sin(x)',
        f: function (x) { return 3 * Math.sin(x); },
        g: null,
        xmin: -0.5, xmax: 6.5, ymin: -4, ymax: 4,
        a0: 0.0, b0: 6.28
      },
      between: {
        label: 'Between two curves: f(x) = 6 − x² and g(x) = x + 4',
        f: function (x) { return 6 - x * x; },
        g: function (x) { return x + 4; },
        xmin: -3.0, xmax: 2.5, ymin: -3, ymax: 7,
        a0: -2.0, b0: 1.0
      }
    };

    var curKey = 'cubic';
    var calcMode = 'area'; // 'area' (|f - g|) vs 'signed' (f - g)
    var a = PRESETS.cubic.a0;
    var b = PRESETS.cubic.b0;

    api.select({
      label: 'Curve preset',
      value: curKey,
      options: [
        { value: 'cubic', label: PRESETS.cubic.label },
        { value: 'sine', label: PRESETS.sine.label },
        { value: 'between', label: PRESETS.between.label }
      ],
      onChange: function (v) {
        curKey = v;
        var P = PRESETS[curKey];
        a = P.a0; b = P.b0;
        aSlider.setRange(P.xmin + 0.1, P.xmax - 0.1, 0.1, true);
        bSlider.setRange(P.xmin + 0.1, P.xmax - 0.1, 0.1, true);
        aSlider.set(a, true);
        bSlider.set(b, true);
        update();
      }
    });

    api.select({
      label: 'Integral mode',
      value: calcMode,
      options: [
        { value: 'area', label: 'Geometric enclosed area ∫ |y| dx (always ≥ 0)' },
        { value: 'signed', label: 'Signed definite integral ∫ y dx (negative below)' }
      ],
      onChange: function (v) { calcMode = v; update(); }
    });

    var aSlider = api.slider({
      label: 'Lower limit a',
      min: -2.5, max: 2.5, step: 0.1, value: a,
      onInput: function (v) { a = v; update(); }
    });

    var bSlider = api.slider({
      label: 'Upper limit b',
      min: -2.5, max: 2.5, step: 0.1, value: b,
      onInput: function (v) { b = v; update(); }
    });

    var plotHost = el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    var rPos = api.readoutItem('Positive lobe area');
    var rNeg = api.readoutItem('Negative lobe contribution');
    var rSigned = api.readoutItem('Signed ∫ (f − g) dx');
    var rTotal = api.readoutItem('Enclosed area ∫ |f − g| dx');

    function integrateRegions(P, lo, hi) {
      var sign = 1;
      if (hi < lo) { var tmp = lo; lo = hi; hi = tmp; sign = -1; }
      var N = 300, dx = (hi - lo) / N;
      var posSum = 0, negSum = 0;
      for (var i = 0; i < N; i++) {
        var xm = lo + (i + 0.5) * dx;
        var diff = P.f(xm) - (P.g ? P.g(xm) : 0);
        if (diff >= 0) posSum += diff * dx;
        else negSum += diff * dx;
      }
      return {
        lo: lo,
        hi: hi,
        pos: posSum,
        neg: negSum,
        signed: sign * (posSum + negSum),
        total: posSum + Math.abs(negSum)
      };
    }

    function update() {
      var P = PRESETS[curKey];
      var res = integrateRegions(P, a, b);

      rPos('+' + fmt(res.pos, 2));
      rNeg(fmt(res.neg, 2));
      rSigned(fmt(res.signed, 2));
      rTotal(fmt(res.total, 2));

      var baseFn = P.g || 0;
      var fills = [
        {
          from: res.lo,
          to: res.hi,
          fn: function (x) {
            var y1 = P.f(x), y2 = P.g ? P.g(x) : 0;
            return y1 >= y2 ? y1 : y2;
          },
          fn2: baseFn,
          color: '--accent',
          alpha: 0.25
        },
        {
          from: res.lo,
          to: res.hi,
          fn: function (x) {
            var y1 = P.f(x), y2 = P.g ? P.g(x) : 0;
            return y1 < y2 ? y1 : y2;
          },
          fn2: baseFn,
          color: calcMode === 'signed' ? '--amber-line' : '--accent',
          alpha: 0.28
        }
      ];

      var fns = [
        { fn: P.f, name: 'f(x)', color: '--accent', width: 2.5 }
      ];
      if (P.g) {
        fns.push({ fn: P.g, name: 'g(x)', color: '--ahl', width: 2.2 });
      }

      var spec = {
        label: t('Definite integral and enclosed area'),
        height: 290,
        x: { label: 'x', min: P.xmin, max: P.xmax, step: 1 },
        y: { label: 'y', min: P.ymin, max: P.ymax, step: 2 },
        fills: fills,
        lines: [
          { x: a, color: '--line-strong', dash: [4, 4], width: 1.4 },
          { x: b, color: '--line-strong', dash: [4, 4], width: 1.4 }
        ],
        functions: fns,
        points: [
          { x: a, y: P.f(a), label: 'x = ' + fmt(a, 1), color: '--accent', r: 4.5 },
          { x: b, y: P.f(b), label: 'x = ' + fmt(b, 1), color: '--accent', r: 4.5 }
        ]
      };

      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);
    }

    api.onCleanup(function () { if (chart) chart.destroy(); });
    update();
  });

  /* ------------------------------------------------------------------------
     2. Particle Kinematics Lab (v(t) Graph + Animated 1D Particle Track)
     ------------------------------------------------------------------------ */
  S1.widgets.register('t5-2.kinematics-lab', function (api) {
    var t = api.t;
    var MOTIONS = {
      twoTurns: {
        label: 'v(t) = 3t² − 12t + 9 (reverses at t = 1 s and t = 3 s)',
        s: function (tv) { return tv * tv * tv - 6 * tv * tv + 9 * tv; },
        v: function (tv) { return 3 * tv * tv - 12 * tv + 9; },
        a: function (tv) { return 6 * tv - 12; },
        tmax: 4.0, vmin: -4.5, vmax: 10, smin: -1, smax: 5
      },
      oneTurn: {
        label: 'v(t) = 6 − 3t (reverses at t = 2 s)',
        s: function (tv) { return 6 * tv - 1.5 * tv * tv; },
        v: function (tv) { return 6 - 3 * tv; },
        a: function () { return -3; },
        tmax: 4.0, vmin: -7, vmax: 7, smin: -1, smax: 7
      }
    };

    var curKey = 'twoTurns';
    var T = 4.0;

    api.select({
      label: 'Velocity model v(t)',
      value: curKey,
      options: [
        { value: 'twoTurns', label: MOTIONS.twoTurns.label },
        { value: 'oneTurn', label: MOTIONS.oneTurn.label }
      ],
      onChange: function (v) {
        curKey = v;
        loop.stop();
        update();
      }
    });

    var tSlider = api.slider({
      label: 'Time T',
      min: 0.0, max: 4.0, step: 0.05, value: T, unit: 's',
      onInput: function (v) { T = v; update(); }
    });

    var playBtn = api.button('Play motion', function () {
      if (loop.running) {
        loop.stop();
      } else {
        if (T >= 3.98) T = 0;
        loop.start(true);
      }
    }, { primary: true });

    var plotHost = el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    var trackCanvas = api.canvas({ height: 92, label: '1D particle motion track along the s-axis' });

    var rVelAcc = api.readoutItem('v(T), a(T)');
    var rState = api.readoutItem('Motion at T', { text: true });
    var rDisp = api.readoutItem('Displacement Δs = ∫ v dt');
    var rDist = api.readoutItem('Total distance d = ∫ |v| dt');

    function calcDistance(M, tEnd) {
      var N = 200, dt = tEnd / Math.max(1, N), sum = 0;
      for (var i = 0; i < N; i++) {
        sum += Math.abs(M.v((i + 0.5) * dt)) * dt;
      }
      return sum;
    }

    function update() {
      var M = MOTIONS[curKey];
      var sNow = M.s(T), vNow = M.v(T), aNow = M.a(T);
      var distNow = calcDistance(M, T);

      rVelAcc('v = ' + fmt(vNow, 2) + ' m s⁻¹, a = ' + fmt(aNow, 2) + ' m s⁻²');
      var stateStr;
      if (Math.abs(vNow) < 0.08) {
        stateStr = t('Momentarily at rest (v = 0)');
      } else if (vNow * aNow > 0) {
        stateStr = t('Speeding up (v and a have same sign)');
      } else {
        stateStr = t('Slowing down (v and a have opposite signs)');
      }
      rState(stateStr);
      rDisp(fmt(sNow, 2) + ' m');
      rDist(fmt(distNow, 2) + ' m');

      var fills = [
        {
          from: 0,
          to: T,
          fn: function (tv) { var v = M.v(tv); return v > 0 ? v : 0; },
          fn2: 0,
          color: '--ok',
          alpha: 0.25
        },
        {
          from: 0,
          to: T,
          fn: function (tv) { var v = M.v(tv); return v < 0 ? v : 0; },
          fn2: 0,
          color: '--amber-line',
          alpha: 0.28
        }
      ];

      var spec = {
        label: t('Velocity-time graph v(t)'),
        height: 240,
        x: { label: 't (s)', min: 0, max: M.tmax, step: 1 },
        y: { label: 'v (m s⁻¹)', min: M.vmin, max: M.vmax, step: 3 },
        fills: fills,
        lines: [
          { x: T, color: '--line-strong', dash: [4, 4], width: 1.5 }
        ],
        functions: [
          { fn: M.v, name: 'v(t)', color: '--accent', width: 2.5 }
        ],
        points: [
          { x: T, y: vNow, label: 'v(' + fmt(T, 1) + ') = ' + fmt(vNow, 1), color: '--accent', r: 5 }
        ]
      };

      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);

      trackCanvas.draw();
    }

    trackCanvas.draw(function (ctx, W, H) {
      var M = MOTIONS[curKey];
      var col = api.color;
      var ink = col('--ink'), ink3 = col('--ink-3'), acc = col('--accent'), ok = col('--ok'), amb = col('--amber-line');
      var mono = col('--font-mono') || 'monospace';
      var padL = 44, padR = 32;
      var sMin = M.smin, sMax = M.smax;
      function SX(s) { return padL + ((s - sMin) / (sMax - sMin)) * (W - padL - padR); }

      var yAxis = H - 26;
      ctx.strokeStyle = col('--line-strong');
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(padL, yAxis);
      ctx.lineTo(W - padR, yAxis);
      ctx.stroke();

      ctx.font = '11px ' + mono;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      for (var sv = Math.ceil(sMin); sv <= Math.floor(sMax); sv++) {
        var sx = SX(sv);
        ctx.strokeStyle = ink3;
        ctx.beginPath();
        ctx.moveTo(sx, yAxis - 4);
        ctx.lineTo(sx, yAxis + 4);
        ctx.stroke();
        ctx.fillStyle = sv === 0 ? ink : ink3;
        ctx.fillText(sv === 0 ? 'O (0 m)' : sv + ' m', sx, yAxis + 7);
      }

      // Draw particle trajectory up to time T with vertical offset as time progresses so turnarounds are clear
      var steps = Math.max(20, Math.round(T * 30));
      if (T > 0.01) {
        ctx.strokeStyle = ok;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (var i = 0; i <= steps; i++) {
          var tv = (T * i) / steps;
          var px = SX(M.s(tv));
          var py = 18 + (tv / M.tmax) * (yAxis - 32);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      var curX = SX(M.s(T));
      var curY = 18 + (T / M.tmax) * (yAxis - 32);
      ctx.fillStyle = M.v(T) >= 0 ? acc : amb;
      ctx.beginPath();
      ctx.arc(curX, curY, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '600 11.5px ' + mono;
      ctx.fillStyle = ink;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('s(' + fmt(T, 2) + ') = ' + fmt(M.s(T), 2) + ' m', Math.min(W - 140, curX + 10), curY);
    });

    var loop = api.loop(function (dt) {
      T += dt * 0.85;
      if (T >= 4.0) {
        T = 4.0;
        loop.stop();
      }
      tSlider.set(Number(T.toFixed(2)), true);
      update();
    });

    api.onCleanup(function () { if (chart) chart.destroy(); });
    update();
  });
})();
