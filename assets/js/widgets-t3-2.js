/* ==========================================================================
   Topic 3.2 interactive widgets:
     - t3-2.unit-circle : Interactive Unit Circle & Exact Radian Explorer
     - t3-2.wave-model  : Sinusoidal Tide / Ferris Wheel Model Builder
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets) return;
  var DEG = Math.PI / 180;

  var EXACT = {
    0: { rad: '0', cos: '1', sin: '0', tan: '0' },
    30: { rad: 'π/6', cos: '√3/2', sin: '1/2', tan: '√3/3' },
    45: { rad: 'π/4', cos: '√2/2', sin: '√2/2', tan: '1' },
    60: { rad: 'π/3', cos: '1/2', sin: '√3/2', tan: '√3' },
    90: { rad: 'π/2', cos: '0', sin: '1', tan: 'undef' },
    120: { rad: '2π/3', cos: '−1/2', sin: '√3/2', tan: '−√3' },
    135: { rad: '3π/4', cos: '−√2/2', sin: '√2/2', tan: '−1' },
    150: { rad: '5π/6', cos: '−√3/2', sin: '1/2', tan: '−√3/3' },
    180: { rad: 'π', cos: '−1', sin: '0', tan: '0' },
    210: { rad: '7π/6', cos: '−√3/2', sin: '−1/2', tan: '√3/3' },
    225: { rad: '5π/4', cos: '−√2/2', sin: '−√2/2', tan: '1' },
    240: { rad: '4π/3', cos: '−1/2', sin: '−√3/2', tan: '√3' },
    270: { rad: '3π/2', cos: '0', sin: '−1', tan: 'undef' },
    300: { rad: '5π/3', cos: '1/2', sin: '−√3/2', tan: '−√3' },
    315: { rad: '7π/4', cos: '√2/2', sin: '−√2/2', tan: '−1' },
    330: { rad: '11π/6', cos: '√3/2', sin: '−1/2', tan: '−√3/3' },
    360: { rad: '2π', cos: '1', sin: '0', tan: '0' }
  };

  /* ---------- 1. Interactive Unit Circle & Exact Radian Explorer --------- */
  S1.widgets.register('t3-2.unit-circle', function (w) {
    var slDeg = w.slider({ label: 'Angle θ', min: 0, max: 360, step: 5, value: 120, unit: '°', onInput: update });

    w.button('π/6 (30°)', function () { slDeg.set(30, false); });
    w.button('2π/3 (120°)', function () { slDeg.set(120, false); });
    w.button('5π/4 (225°)', function () { slDeg.set(225, false); });
    w.button('11π/6 (330°)', function () { slDeg.set(330, false); });

    var rRad = w.readoutItem('Angle θ (rad)');
    var rCos = w.readoutItem('x = cos θ');
    var rSin = w.readoutItem('y = sin θ');
    var rTan = w.readoutItem('tan θ = y/x');

    var cv = w.canvas({ height: 270, label: 'Unit circle and synced sine wave diagram' });

    cv.draw(function (ctx, W, H) {
      var deg = slDeg.value, th = deg * DEG;
      var col = w.color;
      var ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3');
      var accent = col('--accent'), ahl = col('--ahl'), ok = col('--ok');
      var mono = col('--font-mono') || 'monospace';

      var split = Math.min(250, Math.floor(W * 0.44));
      var cx = Math.floor(split * 0.52), cy = Math.floor(H * 0.52);
      var R = Math.min(cx - 24, cy - 28, 96);

      ctx.save();
      // Unit circle axes
      ctx.strokeStyle = col('--line-strong'); ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx - R - 14, cy); ctx.lineTo(cx + R + 14, cy);
      ctx.moveTo(cx, cy - R - 14); ctx.lineTo(cx, cy + R + 14);
      ctx.stroke();

      // Unit circle outline
      ctx.strokeStyle = ink2; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();

      var px = cx + R * Math.cos(th), py = cy - R * Math.sin(th);

      // Right triangle inside unit circle
      ctx.fillStyle = col('--accent-soft');
      ctx.globalAlpha = 0.4;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.lineTo(px, py); ctx.closePath(); ctx.fill();
      ctx.globalAlpha = 1;

      // cos θ segment (horizontal)
      ctx.strokeStyle = ok; ctx.lineWidth = 2.8;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.stroke();
      // sin θ segment (vertical)
      ctx.strokeStyle = ahl; ctx.lineWidth = 2.8;
      ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke();
      // Radius OP
      ctx.strokeStyle = accent; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();

      // Angle arc
      ctx.strokeStyle = ink; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.arc(cx, cy, 18, -th, 0); ctx.stroke();

      // Point P(cos θ, sin θ)
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill();
      ctx.font = '600 11px ' + mono; ctx.fillStyle = ink;
      ctx.fillText('P(cos θ, sin θ)', px + (Math.cos(th) >= 0 ? 6 : -78), py + (Math.sin(th) >= 0 ? -8 : 14));

      // Synced sine & cosine wave on the right half if wide enough
      var wx0 = split + 20, wx1 = W - 18, ww = wx1 - wx0;
      if (ww > 110) {
        ctx.strokeStyle = col('--line-strong'); ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(wx0, cy); ctx.lineTo(wx1, cy);
        ctx.moveTo(wx0, cy - R); ctx.lineTo(wx0, cy + R);
        ctx.stroke();

        // Plot y = sin(t) and y = cos(t)
        ctx.strokeStyle = ahl; ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (var i = 0; i <= 120; i++) {
          var ang = (i / 120) * Math.PI * 2;
          var sx = wx0 + (i / 120) * ww, sy = cy - R * Math.sin(ang);
          if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.stroke();

        ctx.strokeStyle = ok; ctx.lineWidth = 1.8; ctx.setLineDash([4, 3]);
        ctx.beginPath();
        for (var j = 0; j <= 120; j++) {
          var ang2 = (j / 120) * Math.PI * 2;
          var cx2 = wx0 + (j / 120) * ww, cy2 = cy - R * Math.cos(ang2);
          if (j === 0) ctx.moveTo(cx2, cy2); else ctx.lineTo(cx2, cy2);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Horizontal connector from P to wave point
        var curWx = wx0 + (deg / 360) * ww;
        ctx.strokeStyle = ink3; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(curWx, py); ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = ahl;
        ctx.beginPath(); ctx.arc(curWx, py, 4.5, 0, Math.PI * 2); ctx.fill();
        ctx.font = '11px ' + mono; ctx.fillStyle = ink2;
        ctx.fillText('sin θ', wx1 - 36, cy - R + 12);
      }
      ctx.restore();
    });

    function update() {
      var deg = slDeg.value, th = deg * DEG;
      var ex = EXACT[deg];
      var c = Math.cos(th), s = Math.sin(th);
      rRad(ex ? ex.rad + ' (' + th.toFixed(2) + ')' : th.toFixed(3) + ' rad');
      rCos(ex ? ex.cos + ' (' + c.toFixed(3) + ')' : c.toFixed(3));
      rSin(ex ? ex.sin + ' (' + s.toFixed(3) + ')' : s.toFixed(3));
      if (Math.abs(c) < 1e-6) rTan('undefined');
      else rTan(ex ? ex.tan + ' (' + (s / c).toFixed(3) + ')' : (s / c).toFixed(3));
      cv.draw();
    }
    update();
  });

  /* ---------- 2. Sinusoidal Tide / Ferris Wheel Model Builder ------------ */
  S1.widgets.register('t3-2.wave-model', function (w) {
    if (!S1.chart || !S1.chart.funcPlot) return;
    var slA = w.slider({ label: 'Amplitude a', min: -6, max: 6, step: 0.5, value: 4, onInput: update });
    var slB = w.slider({ label: 'Frequency b', min: 0.5, max: 3, step: 0.25, value: 1, onInput: update });
    var slC = w.slider({ label: 'Phase shift c', min: -3, max: 3, step: 0.25, value: 0, onInput: update });
    var slD = w.slider({ label: 'Principal axis d', min: -4, max: 6, step: 0.5, value: 2, onInput: update });

    w.button('Standard sin x', function () { slA.set(1, true); slB.set(1, true); slC.set(0, true); slD.set(0, false); });
    w.button('Harbour tide model', function () { slA.set(4.5, true); slB.set(0.5, true); slC.set(1.5, true); slD.set(5, false); });

    var rMaxMin = w.readoutItem('Max / Min');
    var rPeriod = w.readoutItem('Period T = 2π/b');
    var rAxis = w.readoutItem('Principal axis');

    var plotter = S1.chart.funcPlot(w.stage, buildSpec());

    function buildSpec() {
      var a = slA.value, b = slB.value, c = slC.value, d = slD.value;
      var ymax = d + Math.abs(a), ymin = d - Math.abs(a);
      return {
        label: 'Sinusoidal model y = a sin(b(x − c)) + d',
        height: 270,
        x: { label: 't (time)', min: 0, max: 12.56, step: 2 },
        y: { label: 'y (height)', min: -10, max: 12, step: 2 },
        lines: [
          { y: d, color: '--amber-line', dash: [5, 4], width: 1.6 },
          { y: ymax, color: '--line-strong', dash: [3, 3], width: 1.2 },
          { y: ymin, color: '--line-strong', dash: [3, 3], width: 1.2 }
        ],
        functions: [
          {
            name: 'y = a sin(b(t − c)) + d',
            color: '--accent',
            width: 2.5,
            fn: function (x) { return a * Math.sin(b * (x - c)) + d; }
          }
        ],
        points: [
          { x: c, y: d, color: '--ahl', label: '(c, d)' }
        ]
      };
    }

    function update() {
      var a = slA.value, b = slB.value, d = slD.value;
      var ymax = d + Math.abs(a), ymin = d - Math.abs(a);
      var T = (2 * Math.PI) / b;
      rMaxMin(ymax.toFixed(1) + ' / ' + ymin.toFixed(1));
      rPeriod(T.toFixed(2) + ' (' + (2 / b).toFixed(2) + 'π)');
      rAxis('y = ' + d.toFixed(1));
      plotter.update(buildSpec());
    }
    update();
  });
})();
