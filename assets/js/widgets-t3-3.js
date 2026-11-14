/* ==========================================================================
   Analysis Lab — widgets-t3-3.js
   Interactive 3D visualisations for Topic 3.3 (AHL 3.12–3.18):
     - t3-3.dot-cross-3d:  Interactive 3D Dot & Cross Product Visualizer
     - t3-3.line-plane-3d: 3D Line-Plane Angle & Normal Vector Explorer
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets || !S1.chart || !S1.chart.view3d) return;
  var el = S1.util.el, fixed = S1.math.fixed, clamp = S1.util.clamp;
  var DEG = Math.PI / 180, RAD = 180 / Math.PI;

  function vecStr(v) {
    return '(' + fixed(v[0], 1) + ', ' + fixed(v[1], 1) + ', ' + fixed(v[2], 1) + ')';
  }

  /* --------------------------------------------------------------------------
     1. t3-3.dot-cross-3d
     Interactive 3D Dot & Cross Product Visualizer
     -------------------------------------------------------------------------- */
  S1.widgets.register('t3-3.dot-cross-3d', function (api) {
    var t = api.t;

    var slUx = api.slider({ label: t('uₓ'), min: -3, max: 3, step: 0.5, value: 2, onInput: update });
    var slUy = api.slider({ label: t('uᵧ'), min: -3, max: 3, step: 0.5, value: 1, onInput: update });
    var slUz = api.slider({ label: t('u_z'), min: -3, max: 3, step: 0.5, value: 0.5, onInput: update });

    var slVx = api.slider({ label: t('vₓ'), min: -3, max: 3, step: 0.5, value: -0.5, onInput: update });
    var slVy = api.slider({ label: t('vᵧ'), min: -3, max: 3, step: 0.5, value: 2, onInput: update });
    var slVz = api.slider({ label: t('v_z'), min: -3, max: 3, step: 0.5, value: 1, onInput: update });

    api.button(t('Perpendicular'), function () {
      slUx.set(2, true); slUy.set(0, true); slUz.set(0, true);
      slVx.set(0, true); slVy.set(2, true); slVz.set(0, false);
    });
    api.button(t('Parallel (u × v = 0)'), function () {
      slUx.set(1.5, true); slUy.set(1, true); slUz.set(0.5, true);
      slVx.set(3, true); slVy.set(2, true); slVz.set(1, false);
    });
    api.button(t('General 3D'), function () {
      slUx.set(2, true); slUy.set(1, true); slUz.set(0.5, true);
      slVx.set(-0.5, true); slVy.set(2, true); slVz.set(1, false);
    });

    var roDot = api.readoutItem(t('Dot product u · v'));
    var roCross = api.readoutItem(t('Cross product u × v'), { text: true });
    var roArea = api.readoutItem(t('Parallelogram area |u × v|'));
    var roAngle = api.readoutItem(t('Angle θ'));

    var host = el('div');
    api.stage.appendChild(host);
    var viewer = null;

    function buildSpec() {
      var u = [slUx.value, slUy.value, slUz.value];
      var v = [slVx.value, slVy.value, slVz.value];
      var c = [
        u[1] * v[2] - u[2] * v[1],
        u[2] * v[0] - u[0] * v[2],
        u[0] * v[1] - u[1] * v[0]
      ];
      var dot = u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
      var magU = Math.hypot(u[0], u[1], u[2]);
      var magV = Math.hypot(v[0], v[1], v[2]);
      var magC = Math.hypot(c[0], c[1], c[2]);
      var uvSum = [u[0] + v[0], u[1] + v[1], u[2] + v[2]];

      var thetaStr = '—';
      if (magU > 1e-6 && magV > 1e-6) {
        var theta = Math.acos(clamp(dot / (magU * magV), -1, 1)) * RAD;
        thetaStr = fixed(theta, 1) + '°';
      }

      roDot(fixed(dot, 2));
      roCross(vecStr(c));
      roArea(fixed(magC, 3));
      roAngle(thetaStr);

      var maxCoord = Math.max(3.5, magU, magV, magC);
      var range = Math.min(10, Math.max(4, Math.ceil(maxCoord + 0.5)));

      var vectors = [];
      if (magU > 1e-6) vectors.push({ from: [0, 0, 0], to: u, color: '--accent', label: 'u' });
      if (magV > 1e-6) vectors.push({ from: [0, 0, 0], to: v, color: '--ok', label: 'v' });
      if (magC > 0.05) vectors.push({ from: [0, 0, 0], to: c, color: '--ahl', label: 'u × v' });

      var polygons = [];
      if (magC > 0.05) {
        polygons.push({
          points: [[0, 0, 0], u, uvSum, v],
          color: '--accent-soft',
          border: '--accent',
          alpha: 0.30
        });
      }

      return {
        label: t('3D vectors u, v, parallelogram area, and cross product u × v'),
        height: 320,
        range: range,
        axes: true,
        polygons: polygons,
        vectors: vectors,
        points: [{ pos: [0, 0, 0], label: 'O', color: '--ink-2', r: 3.5 }]
      };
    }

    function update() {
      var spec = buildSpec();
      if (viewer) viewer.setSpec(spec);
      else viewer = S1.chart.view3d(host, spec);
    }

    update();
  });

  /* --------------------------------------------------------------------------
     2. t3-3.line-plane-3d
     3D Line-Plane Angle & Normal Vector Explorer
     -------------------------------------------------------------------------- */
  S1.widgets.register('t3-3.line-plane-3d', function (api) {
    var t = api.t;

    var slPhi = api.slider({ label: t('Line–plane angle ϕ'), min: 0, max: 90, step: 1, value: 35, unit: '°', onInput: update });
    var slAlpha = api.slider({ label: t('Azimuth α'), min: 0, max: 360, step: 5, value: 40, unit: '°', onInput: update });
    var slTilt = api.slider({ label: t('Plane tilt'), min: 0, max: 45, step: 5, value: 0, unit: '°', onInput: update });

    var roPhi = api.readoutItem(t('Angle ϕ (line–plane)'), { text: true });
    var roComp = api.readoutItem(t('Angle 90° − ϕ (b to n)'), { text: true });
    var roSin = api.readoutItem(t('sin ϕ = |b · n| / (|b||n|)'));
    var roNorm = api.readoutItem(t('Unit normal n'), { text: true });

    var host = el('div');
    api.stage.appendChild(host);
    var viewer = null;

    function buildSpec() {
      var phiDeg = slPhi.value;
      var phiRad = phiDeg * DEG;
      var alphaRad = slAlpha.value * DEG;
      var tiltRad = slTilt.value * DEG;

      // Plane orthonormal basis (e1, e2) and unit normal n
      var n = [Math.sin(tiltRad), 0, Math.cos(tiltRad)];
      var e1 = [Math.cos(tiltRad), 0, -Math.sin(tiltRad)];
      var e2 = [0, 1, 0];

      var cP = Math.cos(phiRad), sP = Math.sin(phiRad);
      var cA = Math.cos(alphaRad), sA = Math.sin(alphaRad);

      var bPlane = [
        cP * (cA * e1[0] + sA * e2[0]),
        cP * (cA * e1[1] + sA * e2[1]),
        cP * (cA * e1[2] + sA * e2[2])
      ];
      var b = [
        bPlane[0] + sP * n[0],
        bPlane[1] + sP * n[1],
        bPlane[2] + sP * n[2]
      ];

      var sinPhi = Math.abs(b[0] * n[0] + b[1] * n[1] + b[2] * n[2]);
      roPhi(fixed(phiDeg, 1) + '° (' + fixed(phiRad, 3) + ' rad)');
      roComp(fixed(90 - phiDeg, 1) + '°');
      roSin(fixed(sinPhi, 4));
      roNorm(vecStr(n));

      var Llen = 3.2;
      var vLen = 2.4;
      var bTip = [vLen * b[0], vLen * b[1], vLen * b[2]];
      var projTip = [vLen * bPlane[0], vLen * bPlane[1], vLen * bPlane[2]];

      var lines = [
        {
          from: [-Llen * b[0], -Llen * b[1], -Llen * b[2]],
          to: [Llen * b[0], Llen * b[1], Llen * b[2]],
          color: '--ink-2',
          width: 2,
          label: 'L'
        }
      ];

      if (cP > 0.02) {
        lines.push({
          from: [0, 0, 0],
          to: projTip,
          color: '--ok',
          width: 1.8,
          dashed: true
        });
        if (sP > 0.02) {
          lines.push({
            from: bTip,
            to: projTip,
            color: '--ink-3',
            width: 1.2,
            dashed: true
          });
        }
      }

      return {
        label: t('3D line intersecting a plane with normal vector n'),
        height: 320,
        range: 4.2,
        axes: true,
        planes: [
          {
            center: [0, 0, 0],
            normal: n,
            size: 2.9,
            color: '--accent-soft',
            border: '--accent',
            alpha: 0.26,
            label: 'Π'
          }
        ],
        lines: lines,
        vectors: [
          { from: [0, 0, 0], to: [2.6 * n[0], 2.6 * n[1], 2.6 * n[2]], color: '--ahl', label: 'n' },
          { from: [0, 0, 0], to: bTip, color: '--accent', label: 'b' }
        ],
        points: [
          { pos: [0, 0, 0], label: 'P', color: '--ink', r: 4 }
        ]
      };
    }

    function update() {
      var spec = buildSpec();
      if (viewer) viewer.setSpec(spec);
      else viewer = S1.chart.view3d(host, spec);
    }

    update();
  });
})();
