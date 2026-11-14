# Umbrella Manager & Hydrogen Subagent Coordination Log

This file tracks multi-turn and multi-subagent progress across the **Analysis Lab (IB Math AA HL 2028)** repository.
The main agent acts as the **Umbrella Manager** and delegates discrete engineering, research, content authoring, widget building, question-bank authoring, and localization tasks to **Hydrogen** subagents (`hydrogen`).

## Workflow & Ownership Rules

1. **Core Shell & Tooling (`assets/css/site.css`, `assets/js/math.js`, `assets/js/core.js`, `assets/js/quiz.js`, `assets/js/chart.js`, `assets/js/geom.js`, `tools/*`)**:
   - Managed by Umbrella Manager / Core Infrastructure Hydrogen task.
   - Topic-building Hydrogen subagents must **never** modify `site.css`, `core.js`, `quiz.js`, or `math.js`.
2. **Topic Page Ownership**:
   - Each topic `<id>` (`t1-1` … `t5-4`) owns three files:
     - `topics/<id>.html`
     - `data/questions-<id>.js`
     - `assets/js/widgets-<id>.js`
3. **Research & Scope Docs (`docs/research/`)**:
   - Detailed syllabus scope, formula booklet mapping, Paper 1/2/3 exam traps, and "Not in IB" guardrails for Topics 1–5.
4. **Translations (`i18n/zh-Hant/`, `i18n/ja/`, `i18n/ko/`, `docs/glossary-*.md`)**:
   - Generated and verified via `tools/i18n-extract.js` and `tools/i18n-check.js`.
   - Uses Hong Kong EDB / HKDSE Mathematics terminology for `zh-Hant`, MEXT high-school math terminology for `ja`, and Korean 2015/2022 curriculum math terminology for `ko`.

---

## Task Status Board

| Task ID | Area | Deliverable Files | Assigned To | Status | Notes |
|---|---|---|---|---|---|
| **M0** | Planning & Repo Setup | `docs/PLAN.md`, `docs/COORDINATION.md`, `.github/workflows/pages.yml`, `.nojekyll`, `README.md` | Umbrella Manager | ✅ Completed | Master plan & coordination log created |
| **R1** | Syllabus & Exam Research | `docs/research/syllabus-topics-1-2.md`, `docs/research/syllabus-topics-3-4-5.md`, `docs/AUTHORING.md`, `docs/TRANSLATING.md`, `docs/glossary-*.md` | Hydrogen (`0dce1f43`) | ✅ Completed | Full SL/AHL syllabus mapping (2021–2028 guide), formula booklet, AI over-teaching traps, HK/JA/KO glossaries |
| **C1** | Core Shell, CSS & Math/Plot Engine | `assets/css/site.css`, `assets/js/math.js`, `assets/js/core.js`, `assets/js/quiz.js`, `assets/js/chart.js`, `assets/js/geom.js`, `index.html`, `practice.html`, `tools/i18n-*.js` | Hydrogen (`e6c91dee`) | ✅ Completed | Adapted for IB Math AA HL (17 topics, 5 strands, math formatter, 2D/3D math visuals, UI/home/practice i18n) |
| **T1A** | Topic 1 (Part A) | `topics/t1-1.html`, `topics/t1-2.html`, `topics/t1-3.html` + `data/questions-*` + `assets/js/widgets-*` | Hydrogen (`d0d48118` + `24b62509`) | ✅ Completed | Sequences/series/finance, Exponents/logs/binomial, AHL Counting/partial fractions/rational binomial |
| **T1B** | Topic 1 (Part B) | `topics/t1-4.html`, `topics/t1-5.html` + `data/questions-*` + `assets/js/widgets-*` | Hydrogen (`137652b8`) | ✅ Completed | AHL Complex numbers/De Moivre, Proof (induction, contradiction) & $3\times 3$ linear systems |
| **T2** | Topic 2 (Functions) | `topics/t2-1.html`, `topics/t2-2.html`, `topics/t2-3.html` + `data/questions-*` + `assets/js/widgets-*` | Hydrogen (`9a4d7b95` + `6364cd20`) | ✅ Completed | Lines/functions/inverses, Quadratics/rational/exp/log, Transformations/polynomials/modulus (SL+AHL) |
| **T3** | Topic 3 (Geometry & Trig) | `topics/t3-1.html`, `topics/t3-2.html`, `topics/t3-3.html` + `data/questions-*` + `assets/js/widgets-*` | Hydrogen (`7dd82877` + `b1c4832a`) | ✅ Completed | 3D geometry/triangle trig/radians, Unit circle/identities/models (SL+AHL), AHL 3D Vectors/lines/planes |
| **T4** | Topic 4 (Stats & Prob) | `topics/t4-1.html`, `topics/t4-2.html` + `data/questions-*` + `assets/js/widgets-*` | Hydrogen (`98bbaf65`) | ✅ Completed | Descriptive stats & regression ($y$ on $x$ vs $x$ on $y$), Probability/Binomial/Normal/Bayes/Continuous RVs |
| **T5A** | Topic 5 (Calculus SL) | `topics/t5-1.html`, `topics/t5-2.html` + `data/questions-*` + `assets/js/widgets-*` | Hydrogen (`871fd3cb` + `15e04314`) | ✅ Completed | Differentiation/curve sketching/optimization, Integration/areas/kinematics |
| **T5B** | Topic 5 (Calculus AHL) | `topics/t5-3.html`, `topics/t5-4.html` + `data/questions-*` + `assets/js/widgets-*` | Hydrogen (`a141765a` + `b1c4832a`) | ✅ Completed | First principles/L'Hôpital/implicit/related rates/parts/volumes, DEs (Euler, separable, homogeneous, IF) & Maclaurin series |
| **L1** | Multi-Language Overlays | `i18n/zh-Hant/*`, `i18n/ja/*`, `i18n/ko/*` | Hydrogen (`2e4893b0`, `664b4060`, `2d401001`, `b8a7d3a9`, `0d234688`, `bfcd867b`, `f296ec0d`, `91c81946`, `01f360d0`) | ✅ Completed | 100% translated across `ui`, `home`, `practice`, `common`, and all 17 topics + question banks (`t1-1`–`t5-4`) in `zh-Hant` (HK), `ja`, and `ko` (`0` missing, `0` stale, `0` lint) |
| **Q1** | End-to-End QA & Verification | Browser / console verification, i18n check, git commit | Umbrella Manager | ✅ Completed | All 76 page-language combinations (19 pages × 4 languages) passed headless Chromium QA (`0` errors, `0` warnings, `34/34` widgets rendered, `0` overflow) |

---

## Project Status

All planned milestones (**M0, R1, C1, T1A–T5B, L1, Q1**) are **complete** and pushed to `main` for GitHub Pages deployment via `.github/workflows/pages.yml`.

