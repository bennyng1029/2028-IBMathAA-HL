/* ==========================================================================
   Topic 3.1 interactive widgets:
     - t3-1.ambiguous-sine : Ambiguous Case (SSA) Triangle Explorer
     - t3-1.sector-segment : Radian Sector, Arc & Shaded Segment Visualizer
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets) return;
  var DEG = Math.PI / 180, RAD = 180 / Math.PI;

  /* ---------- 1. Ambiguous Case (SSA) Triangle Explorer ------------------ */
  S1.widgets.register('t3-1.ambiguous-sine', function (w) {
    var t = w.t;
    var slA = w.slider({ label: 'Angle A', min: 20, max: 75, step: 1, value: 35, unit: '°', onInput: update });
    var slB = w.slider({ label: 'Adjacent side b', min: 5, max: 14, step: 0.5, value: 10, unit: 'cm', onInput: update });
    var slOpp = w.slider({ label: 'Opposite side a', min: 2, max: 15, step: 0.2, value: 7, unit: 'cm', onInput: update });

    w.button('Ambiguous (2 Δs)', function () { slA.set(35, true); slB.set(10, true); slOpp.set(7, false); });
    w.button('Right Δ (a = h)', function () {
      var h = Number((slB.value * Math.sin(slA.value * DEG)).toFixed(2));
      slOpp.set(h, false);
    });
    w.button('No Δ (a < h)', function () { slA.set(40, true); slB.set(10, true); slOpp.set(4.5, false); });

    var rCase = w.readoutItem('Number of triangles', { text: true });
    var rH = w.readoutItem('Min height h = b sin A');
    var rB1 = w.readoutItem('Acute ∠B₁');
    var rB2 = w.readoutItem('Obtuse ∠B₂ = 180° − B₁');

    var cv = w.canvas({ height: 270, label: 'Ambiguous case SSA triangle diagram' });

    function state() {
      var A = slA.value, b = slB.value, a = slOpp.value;
      var Arad = A * DEG, h = b * Math.sin(Arad), cx = b * Math.cos(Arad);
      var sinB = h / a;
      var count = 0, B1 = null, B2 = null, x1 = null, x2 = null;
      if (Math.abs(a - h) < 0.04) {
        count = 1; B1 = 90; x1 = cx;
      } else if (a > h && a < b) {
        count = 2;
        B1 = Math.asin(Math.min(1, sinB)) * RAD;
        B2 = 180 - B1;
        var dx = Math.sqrt(Math.max(0, a * a - h * h));
        x1 = cx + dx;
        x2 = cx - dx;
      } else if (a >= b) {
        count = 1;
        B1 = Math.asin(Math.min(1, sinB)) * RAD;
        var dx1 = Math.sqrt(Math.max(0, a * a - h * h));
        x1 = cx + dx1;
      }
      return { A: A, b: b, a: a, h: h, cx: cx, cy: h, count: count, B1: B1, B2: B2, x1: x1, x2: x2 };
    }

    cv.draw(function (ctx, W, H) {
      var s = state();
      var col = w.color;
      var ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3');
      var accent = col('--accent'), ahl = col('--ahl'), amber = col('--amber-line'), bad = col('--bad');
      var mono = col('--font-mono') || 'monospace', body = col('--font-body') || 'sans-serif';

      var padL = 36, padB = 34, maxX = Math.max(16, s.cx + s.a + 1.5), maxY = Math.max(10, s.cy + 2);
      var scale = Math.min((W - padL - 24) / maxX, (H - padB - 24) / maxY);
      function X(x) { return padL + x * scale; }
      function Y(y) { return H - padB - y * scale; }

      // Base ray from A(0,0) horizontally
      ctx.save();
      ctx.strokeStyle = col('--line-strong');
      ctx.lineWidth = 1.6;
      ctx.setLineDash([5, 4]);
      ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(W - 14, Y(0)); ctx.stroke();
      ctx.setLineDash([]);

      // Altitude h = b sin A
      ctx.strokeStyle = ink3;
      ctx.lineWidth = 1.3;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(X(s.cx), Y(s.cy)); ctx.lineTo(X(s.cx), Y(0)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.font = '11px ' + mono; ctx.fillStyle = ink2;
      ctx.fillText('h = ' + s.h.toFixed(2), X(s.cx) + 5, Y(s.cy / 2));

      // Fixed side b from A(0,0) to C(cx, cy)
      ctx.strokeStyle = ink; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(s.cx), Y(s.cy)); ctx.stroke();
      ctx.font = '600 12px ' + mono; ctx.fillStyle = ink;
      ctx.fillText('b = ' + s.b, X(s.cx * 0.45) - 28, Y(s.cy * 0.55) - 6);

      // Compass arc of radius a centered at C
      ctx.strokeStyle = s.count === 0 ? bad : accent;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(X(s.cx), Y(s.cy), s.a * scale, 0.08 * Math.PI, 0.92 * Math.PI);
      ctx.stroke();
      ctx.globalAlpha = 1;

      if (s.count === 0) {
        // Swinging side dangling above base
        ctx.strokeStyle = bad; ctx.lineWidth = 2.4;
        ctx.beginPath(); ctx.moveTo(X(s.cx), Y(s.cy)); ctx.lineTo(X(s.cx), Y(s.cy - s.a)); ctx.stroke();
        ctx.fillStyle = bad; ctx.font = '600 12px ' + body;
        ctx.fillText(t('a < b sin A: side a is too short to reach the base (0 triangles)'), X(0) + 10, 22);
      } else {
        // Fill triangle 1 (AC B1)
        ctx.fillStyle = col('--accent-soft');
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(s.cx), Y(s.cy)); ctx.lineTo(X(s.x1), Y(0)); ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;

        // Side CB1
        ctx.strokeStyle = accent; ctx.lineWidth = 2.6;
        ctx.beginPath(); ctx.moveTo(X(s.cx), Y(s.cy)); ctx.lineTo(X(s.x1), Y(0)); ctx.stroke();
        ctx.beginPath(); ctx.arc(X(s.x1), Y(0), 4.5, 0, Math.PI * 2); ctx.fillStyle = accent; ctx.fill();
        ctx.font = '600 11.5px ' + mono;
        ctx.fillText('B₁ (' + s.B1.toFixed(1) + '°)', X(s.x1) - 18, Y(0) + 18);

        if (s.count === 2 && s.x2 != null) {
          // Fill triangle 2 (AC B2)
          ctx.fillStyle = ahl;
          ctx.globalAlpha = 0.16;
          ctx.beginPath();
          ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(s.cx), Y(s.cy)); ctx.lineTo(X(s.x2), Y(0)); ctx.closePath();
          ctx.fill();
          ctx.globalAlpha = 1;

          ctx.strokeStyle = ahl; ctx.lineWidth = 2.4;
          ctx.beginPath(); ctx.moveTo(X(s.cx), Y(s.cy)); ctx.lineTo(X(s.x2), Y(0)); ctx.stroke();
          ctx.beginPath(); ctx.arc(X(s.x2), Y(0), 4.5, 0, Math.PI * 2); ctx.fillStyle = ahl; ctx.fill();
          ctx.fillStyle = ahl;
          ctx.fillText('B₂ (' + s.B2.toFixed(1) + '°)', X(s.x2) - 24, Y(0) + 18);
        }
      }

      // Vertices A and C
      ctx.fillStyle = ink;
      ctx.beginPath(); ctx.arc(X(0), Y(0), 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(X(s.cx), Y(s.cy), 4, 0, Math.PI * 2); ctx.fill();
      ctx.font = '600 12px ' + mono;
      ctx.fillText('A (' + s.A + '°)', X(0) - 10, Y(0) + 18);
      ctx.fillText('C', X(s.cx) - 4, Y(s.cy) - 8);
      ctx.restore();
    });

    function update() {
      var s = state();
      rH(s.h.toFixed(2) + ' cm');
      if (s.count === 0) {
        rCase(t('0 (a < b sin A)'));
        rB1('—');
        rB2('—');
      } else if (s.count === 1 && Math.abs(s.a - s.h) < 0.04) {
        rCase(t('1 right triangle (a = b sin A)'));
        rB1('90.0°');
        rB2('—');
      } else if (s.count === 2) {
        rCase(t('2 triangles (Ambiguous SSA!)'));
        rB1(s.B1.toFixed(1) + '°');
        rB2(s.B2.toFixed(1) + '°');
      } else {
        rCase(t('1 triangle (a ≥ b)'));
        rB1(s.B1.toFixed(1) + '°');
        rB2(t('Invalid (> 180° − A)'));
      }
      cv.draw();
    }
    update();
  });

  /* ---------- 2. Radian Sector, Arc & Shaded Segment Visualizer ----------- */
  S1.widgets.register('t3-1.sector-segment', function (w) {
    var slR = w.slider({ label: 'Radius r', min: 2, max: 12, step: 0.5, value: 8, unit: 'cm', onInput: update });
    var slTheta = w.slider({ label: 'Angle θ (radians)', min: 0.3, max: 5.5, step: 0.05, value: 1.5, unit: 'rad', onInput: update });

    w.button('θ = π/3', function () { slTheta.set(Number((Math.PI / 3).toFixed(2)), false); });
    w.button('θ = π/2', function () { slTheta.set(Number((Math.PI / 2).toFixed(2)), false); });
    w.button('θ = 2π/3', function () { slTheta.set(Number((2 * Math.PI / 3).toFixed(2)), false); });

    var rArc = w.readoutItem('Arc length l = rθ');
    var rChord = w.readoutItem('Chord AB = 2r sin(θ/2)');
    var rSec = w.readoutItem('Sector area ½r²θ');
    var rSeg = w.readoutItem('Segment area ½r²(θ − sin θ)');

    var cv = w.canvas({ height: 270, label: 'Radian sector and shaded circular segment diagram' });

    cv.draw(function (ctx, W, H) {
      var r = slR.value, th = slTheta.value;
      var col = w.color;
      var ink = col('--ink'), ink2 = col('--ink-2'), accent = col('--accent'), ahl = col('--ahl');
      var mono = col('--font-mono') || 'monospace';

      var cx = W / 2, cy = H / 2;
      var Rpx = Math.min(W, H) * 0.38 * (0.55 + 0.45 * (r / 12));
      var a0 = -th / 2, a1 = th / 2;
      var xA = cx + Rpx * Math.cos(a0), yA = cy + Rpx * Math.sin(a0);
      var xB = cx + Rpx * Math.cos(a1), yB = cy + Rpx * Math.sin(a1);

      // Full circle outline
      ctx.save();
      ctx.strokeStyle = col('--line-strong'); ctx.lineWidth = 1.3;
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.arc(cx, cy, Rpx, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);

      // Sector fill
      ctx.fillStyle = col('--accent-soft');
      ctx.globalAlpha = 0.45;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, Rpx, a0, a1); ctx.closePath(); ctx.fill();

      // Shaded segment fill (when θ < π)
      if (th < Math.PI) {
        ctx.fillStyle = ahl;
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.arc(cx, cy, Rpx, a0, a1);
        ctx.lineTo(xA, yA);
        ctx.closePath();
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Chord AB
      ctx.strokeStyle = ahl; ctx.lineWidth = 2.2;
      ctx.setLineDash([5, 3]);
      ctx.beginPath(); ctx.moveTo(xA, yA); ctx.lineTo(xB, yB); ctx.stroke();
      ctx.setLineDash([]);

      // Radii OA, OB and Arc AB
      ctx.strokeStyle = ink; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(xA, yA); ctx.lineTo(cx, cy); ctx.lineTo(xB, yB); ctx.stroke();
      ctx.strokeStyle = accent; ctx.lineWidth = 3.2;
      ctx.beginPath(); ctx.arc(cx, cy, Rpx, a0, a1); ctx.stroke();

      // Angle arc
      ctx.strokeStyle = ink2; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(cx, cy, 24, a0, a1); ctx.stroke();
      ctx.font = '600 12px ' + mono; ctx.fillStyle = ink;
      ctx.fillText('θ = ' + th.toFixed(2) + ' rad (' + (th * RAD).toFixed(0) + '°)', cx + 30, cy + 4);
      ctx.fillText('O', cx - 16, cy + 4);
      ctx.fillText('A', xA + (xA >= cx ? 6 : -16), yA - 6);
      ctx.fillText('B', xB + (xB >= cx ? 6 : -16), yB + 14);
      ctx.restore();
    });

    function update() {
      var r = slR.value, th = slTheta.value;
      var arc = r * th;
      var chord = 2 * r * Math.sin(th / 2);
      var sec = 0.5 * r * r * th;
      var seg = 0.5 * r * r * (th - Math.sin(th));
      rArc(arc.toFixed(2) + ' cm');
      rChord(chord.toFixed(2) + ' cm');
      rSec(sec.toFixed(2) + ' cm²');
      rSeg(th < Math.PI ? seg.toFixed(2) + ' cm²' : seg.toFixed(2) + ' cm² (major)');
      cv.draw();
    }
    update();
  });
})();
