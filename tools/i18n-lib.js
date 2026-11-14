/* Shared code for the i18n tools. Dev-only: needs Node and Playwright (no other dependencies). */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SHELL_FILES = ['assets/js/math.js', 'assets/js/core.js', 'assets/js/quiz.js', 'assets/js/chart.js'];
const LANGS = ['ja', 'zh-Hant', 'ko'];

const norm = s => String(s == null ? '' : s).replace(/\s+/g, ' ').trim();

function pageFile(id) {
  if (id === 'home') return 'index.html';
  if (id === 'practice') return 'practice.html';
  if (/^[ts]\d+-\d+h?$/.test(id)) return 'topics/' + id + '.html';
  if (id === 'dev') return 'dev/kitchen-sink.html';
  return null;
}
const isTopic = id => /^[ts]\d+-\d+h?$/.test(id) || id === 'dev';

/* ---------- Finding t("…") strings in source files ---------------------------- */
function unquote(lit) {
  const q = lit[0];
  let body = lit.slice(1, -1);
  if (q === "'") body = body.replace(/\\'/g, "'").replace(/"/g, '\\"');
  try { return JSON.parse('"' + body + '"'); } catch (e) { return null; }
}
function literalsIn(code) {
  const out = [];
  const re = /'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"/g;
  let m;
  while ((m = re.exec(code))) { const v = unquote(m[0]); if (v != null) out.push(v); }
  return out;
}
const NOISE = /^(data-[\w-]+|is-[\w-]+|aria-[\w-]+|ahl|sl|all|en|ja|zh-Hant|ko|ui|[a-z]+__[\w-]+|[.#][\w-].*|\[[\w-]+(?:[~^$*|]?=.*)?\]|[a-z0-9]+(-[a-z0-9]+)+)$/;
const NOISE_PAGE = /^(data-[\w-]+|is-[\w-]+|aria-[\w-]+|[a-z]+__[\w-]+|[.#][\w-].*|\[[\w-]+(?:[~^$*|]?=.*)?\])$/;
const IDLIKE = /^[a-z0-9]+(-[a-z0-9]+)+$/;
const translatable = v => /[A-Za-zÀ-ɏ]/.test(String(v).replace(/\|[A-Za-z0-9_-]+$/, ''));

function keyLiteralsIn(code) {
  const out = [];
  const re = /'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"/g;
  let m;
  while ((m = re.exec(code))) {
    const v = unquote(m[0]);
    if (v == null) continue;
    const compared = /[=!]==?\s*$/.test(code.slice(0, m.index)) || /^\s*[=!]==?/.test(code.slice(re.lastIndex));
    if (compared && IDLIKE.test(v)) continue;
    out.push(v);
  }
  return out;
}

function argAt(src, i) {
  let depth = 1, inStr = null;
  const start = i;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (inStr) { if (ch === '\\') i++; else if (ch === inStr) inStr = null; continue; }
    if (ch === "'" || ch === '"') { inStr = ch; continue; }
    if (ch === '(' || ch === '{' || ch === '[') depth++;
    else if (ch === ')' || ch === '}' || ch === ']') { depth--; if (depth === 0) return [src.slice(start, i), i]; }
    else if (ch === ',' && depth === 1) return [src.slice(start, i), i + 1];
  }
  return [src.slice(start), src.length];
}

function scanSource(src, mode) {
  const keys = [];
  const noise = mode === 'shell' ? NOISE : NOISE_PAGE;
  const add = v => { v = norm(v); if (v && translatable(v) && !noise.test(v) && !keys.includes(v)) keys.push(v); };
  src.split('\n').forEach(line => { if (/\/\/ i18n\s*$/.test(line)) literalsIn(line.replace(/\/\/ i18n\s*$/, '')).forEach(v => { if (/[A-Z]/.test(v) || / /.test(v)) add(v); }); });
  src = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  const names = mode === 'shell' ? 'S1\\.i18n\\.ui|S1\\.i18n\\.either|tl|t' : 'S1\\.t|w\\.t|t';
  const call = new RegExp('(?:^|[^\\w.$])(?:' + names + ')(\\.n)?\\(', 'g');
  let m;
  while ((m = call.exec(src))) {
    let [arg, next] = argAt(src, call.lastIndex);
    if (m[1]) [arg] = argAt(src, next);
    (mode === 'shell' ? literalsIn(arg) : keyLiteralsIn(arg)).forEach(add);
  }
  if (mode === 'shell') {
    const prop = /\b(?:t|tTitle|tLabel):\s*([^\n]*?)(?=,\s*[\w'"]+\s*:|\s*\}\)|\s*\},|\n)/g;
    while ((m = prop.exec(src))) literalsIn(m[1]).forEach(add);
    const attr = /data-t(?:-aria|-title)?="([^"]*)"/g;
    while ((m = attr.exec(src))) add(m[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
  }
  return keys.filter(k => !/^' \+|\+ '$/.test(k));
}

/* ---------- Reading and writing overlay files ---------------------------------- */
function readOverlay(file) {
  if (!fs.existsSync(file)) return null;
  const got = { strings: {}, questions: {} };
  const S1 = { i18n: { register: (l, s, d) => {
    Object.assign(got.strings, (d && d.strings) || {});
    Object.keys((d && d.questions) || {}).forEach(id => { got.questions[id] = Object.assign(got.questions[id] || {}, d.questions[id]); });
  }, manifest: () => {} } };
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), { S1, window: { S1 } }, { filename: file });
  return got;
}
const J = v => JSON.stringify(v);
const comment = (indent, text) => String(text).split('\n').map(l => indent + '// ' + l.replace(/\*\//g, '* /')).join('\n') + '\n';

function stringsBlock(entries, values, indent) {
  let out = '';
  entries.forEach(e => {
    (e.ctx && e.ctx.length ? e.ctx : ['']).forEach(c => { if (c) out += comment(indent, c); });
    out += indent + J(e.key) + ': ' + J(values[e.key] || '') + ',\n\n';
  });
  return out;
}
function writeStringsFile(file, lang, scope, entries, values, stale) {
  let s = '/* ' + scope + ' — ' + lang + ' translation overlay for Analysis Lab (page text, attributes, widget strings).\n' +
    '   Each entry: a comment saying where the text appears, then "English source": "translation".\n' +
    '   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.\n' +
    '   Rules, lints and workflow: docs/TRANSLATING.md. */\n';
  s += "S1.i18n.register('" + lang + "', '" + scope + "', {\n  strings: {\n\n" + stringsBlock(entries, values, '    ');
  if (stale && stale.length) {
    s += '    // ---- STALE: the English for these entries has changed or gone. Reuse the wording above, then delete them. ----\n';
    stale.forEach(k => { s += '    ' + J(k) + ': ' + J(values[k]) + ',\n'; });
  }
  s += '  }\n});\n';
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, s);
}

const Q_FIELDS = ['stem', 'options', 'hints', 'solution', 'answer', 'markscheme', 'misconception', 'correctNote', 'unit', 'answerDisplay'];
function questionFields(q) {
  const o = {};
  Q_FIELDS.forEach(f => {
    const v = q[f];
    if (v == null) return;
    if (f === 'answer' && q.type !== 'short') return;
    if (f === 'unit' && !/[A-Za-z]{4}/.test(String(v))) return;
    if (f === 'answerDisplay' && !/[A-Za-z\u00c0-\u024f]{2}/.test(String(v).replace(/<[^>]+>/g, ''))) return;
    if (Array.isArray(v)) o[f] = v.slice();
    else if (typeof v === 'object') o[f] = Object.assign({}, v);
    else if (typeof v === 'string') o[f] = v;
  });
  return o;
}
function questionPairs(q, tr) {
  const out = [], en = questionFields(q);
  tr = tr || {};
  Object.keys(en).forEach(f => {
    if (Array.isArray(en[f])) en[f].forEach((v, i) => out.push([f + '[' + i + ']', v, (tr[f] && tr[f][i]) || '']));
    else if (typeof en[f] === 'object') Object.keys(en[f]).forEach(k => out.push([f + '.' + k, en[f][k], (tr[f] && tr[f][k]) || '']));
    else out.push([f, en[f], tr[f] || '']);
  });
  return out;
}
function missingSlots(q, prev) {
  const en = questionFields(q);
  if (!prev) return Object.keys(en);
  return Object.keys(en).filter(f => {
    if (!(f in prev) || prev[f] == null) return true;
    if (Array.isArray(en[f])) return !Array.isArray(prev[f]) || prev[f].length < en[f].length;
    if (typeof en[f] === 'object') return typeof prev[f] !== 'object' || Object.keys(en[f]).some(k => !(k in prev[f]));
    return false;
  });
}
function writeQuestionsFile(file, lang, scope, questions, old, only) {
  let s = '/* ' + scope + ' — ' + lang + ' question translations for Analysis Lab.\n' +
    '   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".\n' +
    '   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.\n' +
    '   Markscheme points and model answers are shown in English with your translation underneath.\n' +
    '   Rules, lints and workflow: docs/TRANSLATING.md. */\n';
  s += "S1.i18n.register('" + lang + "', '" + scope + "', {\n  questions: {\n\n";
  Object.keys(questions).forEach(id => {
    const q = questions[id], en = questionFields(q), prev = (old && old[id]) || {};
    s += '    // ── ' + id + ' · ' + q.type + ' · ' + q.tier + ' · ' + q.level.toUpperCase() + (q.syllabus ? ' · ' + q.syllabus : '') + ' · ' + q.marks + (q.marks === 1 ? ' mark' : ' marks') + '\n';
    if (only && prev && Object.keys(prev).length) s += '    // new slot(s) for a question that is already in this file: ' + (only[id] || []).join(', ') + '\n';
    s += '    ' + J(id) + ': {\n';
    Object.keys(en).filter(f => !only || (only[id] || []).includes(f)).forEach(f => {
      if (Array.isArray(en[f])) {
        s += '      ' + f + ': [\n';
        en[f].forEach((v, i) => { s += comment('        ', 'EN: ' + norm(v)) + '        ' + J((prev[f] && prev[f][i]) || '') + ',\n'; });
        s += '      ],\n';
      } else if (typeof en[f] === 'object') {
        s += '      ' + f + ': {\n';
        Object.keys(en[f]).forEach(k => { s += comment('        ', 'EN (option ' + 'ABCDEFGH'[k] + '): ' + norm(en[f][k])) + '        ' + J(k) + ': ' + J((prev[f] && prev[f][k]) || '') + ',\n'; });
        s += '      },\n';
      } else s += comment('      ', 'EN: ' + norm(en[f])) + '      ' + f + ': ' + J(prev[f] || '') + ',\n';
    });
    s += '    },\n\n';
  });
  s += '  }\n});\n';
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, s);
}

/* ---------- Browser launcher (Playwright if installed, else Chromium CDP) ----- */
const cp = require('child_process');
const os = require('os');

async function launchBrowser() {
  try {
    const { chromium } = require('playwright');
    return await chromium.launch();
  } catch (e) { /* fall back to system chromium via CDP */ }

  const bin = ['/usr/bin/chromium', '/usr/bin/google-chrome', '/usr/bin/chromium-browser'].find(p => fs.existsSync(p)) || 'chromium';
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 's1-chrome-'));
  const proc = cp.spawn(bin, [
    '--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
    '--allow-file-access-from-files', '--remote-debugging-port=0',
    '--user-data-dir=' + tmpDir, 'about:blank'
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  const wsUrl = await new Promise((resolve, reject) => {
    let buf = '';
    const timer = setTimeout(() => reject(new Error('Timed out waiting for Chromium DevTools')), 10000);
    proc.stderr.on('data', chunk => {
      buf += chunk.toString();
      const m = /DevTools listening on (ws:\/\/[^\s]+)/.exec(buf);
      if (m) { clearTimeout(timer); resolve(m[1]); }
    });
    proc.on('exit', code => { clearTimeout(timer); reject(new Error('Chromium exited with code ' + code)); });
  });
  const port = new URL(wsUrl).port;

  return {
    newPage: async () => {
      let res = await fetch('http://127.0.0.1:' + port + '/json/new?about:blank', { method: 'PUT' });
      if (!res.ok) res = await fetch('http://127.0.0.1:' + port + '/json/new?about:blank');
      const target = await res.json();
      const ws = new WebSocket(target.webSocketDebuggerUrl);
      await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
      let seq = 0;
      const pending = new Map();
      const listeners = { console: [], pageerror: [] };
      let loadResolvers = [];
      ws.onmessage = ev => {
        const msg = JSON.parse(typeof ev.data === 'string' ? ev.data : ev.data.toString());
        if (msg.id && pending.has(msg.id)) {
          const { resolve, reject } = pending.get(msg.id);
          pending.delete(msg.id);
          if (msg.error) reject(new Error(msg.error.message)); else resolve(msg.result);
        } else if (msg.method === 'Page.loadEventFired') {
          const list = loadResolvers.splice(0);
          list.forEach(r => r());
        } else if (msg.method === 'Runtime.consoleAPICalled') {
          const text = (msg.params.args || []).map(a => a.value != null ? a.value : (a.description || '')).join(' ');
          listeners.console.forEach(fn => fn({ type: () => msg.params.type, text: () => text }));
        } else if (msg.method === 'Runtime.exceptionThrown') {
          const d = msg.params.exceptionDetails;
          const err = new Error((d.exception && d.exception.description) || d.text || 'Page error');
          listeners.pageerror.forEach(fn => fn(err));
        }
      };
      const send = (method, params) => new Promise((resolve, reject) => {
        const id = ++seq;
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params: params || {} }));
      });
      await send('Page.enable');
      await send('Runtime.enable');
      const waitLoad = () => new Promise(resolve => {
        const t = setTimeout(resolve, 2500);
        loadResolvers.push(() => { clearTimeout(t); resolve(); });
      });
      return {
        on: (ev, fn) => { if (listeners[ev]) listeners[ev].push(fn); },
        goto: async url => { const p = waitLoad(); await send('Page.navigate', { url }); await p; },
        reload: async () => { const p = waitLoad(); await send('Page.reload'); await p; },
        waitForTimeout: ms => new Promise(r => setTimeout(r, ms)),
        setViewportSize: async ({ width, height }) => {
          await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 600 });
        },
        evaluate: async (fn, ...args) => {
          const expr = '(' + fn.toString() + ')(' + args.map(a => JSON.stringify(a)).join(',') + ')';
          const out = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
          if (out.exceptionDetails) throw new Error(out.exceptionDetails.text || 'Evaluate failed');
          return out.result ? out.result.value : undefined;
        },
        close: async () => {
          try { ws.close(); } catch (e) {}
          try { await fetch('http://127.0.0.1:' + port + '/json/close/' + target.id); } catch (e) {}
        }
      };
    },
    close: async () => {
      try { proc.kill('SIGKILL'); } catch (e) {}
      try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}
    }
  };
}

/* ---------- Catalog: what is translatable in one scope -------------------------- */
let uiCache = null;
async function catalog(browser, scope) {
  if (scope === 'ui') {
    if (uiCache) return uiCache;
    const keys = [];
    const add = (k, c) => { k = norm(k); if (!k) return; let e = keys.find(x => x.key === k); if (!e) { e = { key: k, ctx: [] }; keys.push(e); } if (c && !e.ctx.includes(c)) e.ctx.push(c); };
    SHELL_FILES.forEach(f => { const p = path.join(ROOT, f); if (fs.existsSync(p)) scanSource(fs.readFileSync(p, 'utf8'), 'shell').forEach(k => add(k, 'shell: ' + path.basename(f))); });
    const page = await browser.newPage();
    await page.goto('file://' + path.join(ROOT, 'index.html'));
    await page.waitForTimeout(150);
    const got = await page.evaluate(() => {
      const out = [];
      S1.groups.forEach(g => out.push([g.name, 'strand name'], [g.title, 'strand title']));
      S1.topics.forEach(t => out.push([t.title, 'topic ' + t.num + ' title (menus, tiles)'], [t.short, 'topic ' + t.num + ' short name (tile)'], [t.blurb, 'topic ' + t.num + ' tile text']));
      return out;
    });
    got.forEach(g => add(g[0], g[1]));
    await page.close();
    keys.sort((a, b) => a.key.localeCompare(b.key));
    uiCache = { entries: keys, questions: {}, counts: { blocks: 0, attrs: 0, widget: 0, shell: keys.length } };
    return uiCache;
  }
  const base = scope.replace(/\.q$/, '');
  const file = pageFile(base);
  if (!file || !fs.existsSync(path.join(ROOT, file))) throw new Error('No page for scope "' + scope + '"');
  const page = await browser.newPage();
  await page.goto('file://' + path.join(ROOT, file));
  await page.evaluate(() => { try { localStorage.removeItem('s1.lang'); } catch (e) {} });
  await page.reload();
  await page.waitForTimeout(300);
  const got = await page.evaluate((id) => {
    const c = S1.i18n.catalog();
    return { entries: c.entries, questions: JSON.parse(JSON.stringify(S1.questions.byTopic(id))) };
  }, base);
  await page.close();
  const entries = got.entries.map(e => ({ key: e.key, ctx: e.ctx, kind: e.kind }));
  let blocks = 0, attrs = 0, widget = 0;
  entries.forEach(e => { if (/attribute$/.test(e.kind)) attrs++; else blocks++; });
  const wf = base === 'dev' ? 'dev/widgets-dev.js' : 'assets/js/widgets-' + base + '.js';
  if (fs.existsSync(path.join(ROOT, wf))) scanSource(fs.readFileSync(path.join(ROOT, wf), 'utf8'), 'page').forEach(k => {
    const e = entries.find(x => x.key === k);
    if (e) { if (!e.ctx.includes('widget string (' + wf + ')')) e.ctx.push('widget string (' + wf + ')'); }
    else { entries.push({ key: k, ctx: ['widget string (' + wf + ')'], kind: 'widget string' }); widget++; }
  });
  const questions = {};
  got.questions.forEach(q => { questions[q.id] = q; });
  return { entries, questions, counts: { blocks, attrs, widget, shell: 0 } };
}

/* ---------- Lints: what a translation must keep ---------------------------------- */
const VOID = new Set(['br', 'hr', 'img', 'input', 'wbr']);
function readHtml(html, opts) {
  const tags = [], prot = [], hrefs = [], dfns = [], enTerms = [], nums = [], offs = [];
  let text = '', i = 0;
  const stack = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g;
  let m;
  const pushText = s => { text += s; stack.forEach(f => { f.text += s; f.html += s; }); (decode(s).match(NUM) || []).forEach(n => nums.push(n)); };
  while ((m = re.exec(html))) {
    pushText(html.slice(i, m.index)); i = re.lastIndex;
    const name = m[2].toLowerCase(), attrs = m[3] || '';
    if (!m[1]) {
      const cls = (/class\s*=\s*"([^"]*)"/.exec(attrs) || /class\s*=\s*'([^']*)'/.exec(attrs) || [])[1] || '';
      const isEn = name === 'span' && /\ben-term\b/.test(cls), isFree = isEn || (name === 'span' && /^\s*nowrap\s*$/.test(cls));
      const href = (/href\s*=\s*"([^"]*)"/.exec(attrs) || [])[1];
      if (href != null) hrefs.push(href);
      const kind = /\bchem\b/.test(cls) ? 'chem' : /\bmath\b/.test(cls) ? 'math' : /\bunit\b/.test(cls) ? 'unit' : /\bfrac\b/.test(cls) ? 'frac' : name === 'sub' ? 'sub' : name === 'sup' ? 'sup' : null;
      stack.forEach(f => { f.html += m[0]; });
      if (!isFree) tags.push(name + (kind === 'chem' || kind === 'math' || kind === 'unit' || kind === 'frac' ? '.' + kind : ''));
      const isOff = /\bdata-i18n\s*=\s*(["'])off\1/.test(attrs);
      if (!VOID.has(name) && !/\/\s*$/.test(attrs)) stack.push({ name, kind, isEn, isOff, open: m[0], text: '', html: '' });
    } else {
      let f = null;
      while (stack.length) { f = stack.pop(); if (f.name === name) break; f = null; }
      if (f) {
        stack.forEach(p => { p.html += m[0]; });
        if (f.kind && f.kind !== 'frac') prot.push(f.kind + ':' + norm(f.text));
        if (f.kind === 'frac' && !/[A-Za-zÀ-ɏ぀-鿿]{2}/.test(f.text.replace(/\s/g, ''))) prot.push('frac:' + norm(f.text));
        if (f.name === 'dfn') dfns.push(f.html);
        if (f.isEn) enTerms.push(norm(f.text));
        if (f.isOff) offs.push(norm(f.open + f.html + m[0]));
      }
    }
  }
  pushText(html.slice(i));
  return { tags, prot, hrefs, dfns, enTerms, nums, offs, text: text.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>') };
}
function decode(s) {
  return s.replace(/&#x([0-9a-fA-F]+);/g, (m, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(+d))
    .replace(/&nbsp;/g, ' ').replace(/&[a-zA-Z]+\d*;/g, ' ');
}
function showProt(p) {
  const i = p.indexOf(':'), kind = p.slice(0, i), txt = p.slice(i + 1);
  return kind === 'sub' || kind === 'sup' ? '<' + kind + '>' + txt + '</' + kind + '>' : kind === 'frac' ? 'fraction "' + txt + '"' : '<span class="' + kind + '">' + txt + '</span>';
}
const multiset = a => { const m = {}; a.forEach(x => { m[x] = (m[x] || 0) + 1; }); return m; };
function diffMulti(a, b) {
  const A = multiset(a), B = multiset(b), missing = [], extra = [];
  Object.keys(A).forEach(k => { for (let n = (B[k] || 0); n < A[k]; n++) missing.push(k); });
  Object.keys(B).forEach(k => { for (let n = (A[k] || 0); n < B[k]; n++) extra.push(k); });
  return { missing, extra };
}
const NUM = /\d+(?:[.,]\d+)*/g;
const OPS = /[=+−×÷\/<>≤≥≈→⇌±]|(?<![A-Za-z])-(?![A-Za-z])/g;

function lintPair(en, tr, opts) {
  opts = opts || {};
  const out = [];
  if (!tr) return out;
  const ph = diffMulti(en.match(/\{\w+\}/g) || [], tr.match(/\{\w+\}/g) || []);
  if (ph.missing.length) out.push('placeholder missing: ' + ph.missing.join(' '));
  if (ph.extra.length) out.push('placeholder not in the English: ' + ph.extra.join(' '));
  const a = readHtml(en), b = readHtml(tr);
  const tg = diffMulti(a.tags, b.tags);
  if (tg.missing.length) out.push('tag missing: ' + tg.missing.map(x => '<' + x + '>').join(' '));
  if (tg.extra.length) out.push('tag not in the English: ' + tg.extra.map(x => '<' + x + '>').join(' '));
  const pr = diffMulti(a.prot, b.prot);
  if (pr.missing.length || pr.extra.length) {
    const inEn = multiset(a.prot), inTr = multiset(b.prot);
    const gone = [...new Set(pr.missing)].map(x => showProt(x) + (inEn[x] > 1 || inTr[x] ? ' (English ' + inEn[x] + '×, translation ' + (inTr[x] || 0) + '×)' : ''));
    const repeated = [...new Set(pr.extra.filter(x => inEn[x]))].map(x => showProt(x) + ' (English ' + inEn[x] + '×, translation ' + inTr[x] + '×)');
    const added = [...new Set(pr.extra.filter(x => !inEn[x]))].map(showProt);
    if (gone.length) out.push('formula / unit / sub / sup missing or changed: ' + gone.join(' | ') + '. Copy each one from the English exactly, the same number of times');
    if (repeated.length) out.push('formula / unit / sub / sup used more often than in the English: ' + repeated.join(' | ') + '. It must appear the same number of times: reword the sentence so that it is not repeated');
    if (added.length) out.push('formula / unit / sub / sup not in the English: ' + added.join(' | ') + (gone.length ? ' (probably the changed form of the missing one above)' : '') + '. Do not add or alter them');
  }
  const of = diffMulti(a.offs, b.offs);
  if (of.missing.length) out.push('protected part (data-i18n="off") missing or changed: ' + [...new Set(of.missing)].join(' | ') + '. Copy it from the English exactly, the same number of times');
  if (of.extra.length) out.push('protected part (data-i18n="off") not in the English' + (of.missing.length ? ' (probably the changed form of the one above)' : '') + ': ' + [...new Set(of.extra)].join(' | '));
  const hr = diffMulti(a.hrefs, b.hrefs);
  if (hr.missing.length || hr.extra.length) out.push('link target changed: ' + hr.missing.concat(hr.extra).join(' '));
  a.dfns.forEach((d, i) => {
    const term = norm(d.replace(/<[^>]+>/g, '')).toLowerCase(), got = b.dfns[i];
    if (got == null) return;
    const en2 = readHtml(got).enTerms.map(x => x.toLowerCase().replace(/[()（）]/g, '').trim());
    const bare = term.replace(/[()（）]/g, '').replace(/\s+/g, ' ').trim();
    const core = term.replace(/\s*[(（][^()（）]*[)）]\s*/g, ' ').replace(/\s+/g, ' ').trim();
    if (!en2.some(x => x === term || x.indexOf(term) > -1 || x === bare || (core && x === core))) out.push('<dfn> must keep the English term: <dfn>… <span class="en-term">(' + norm(d.replace(/<[^>]+>/g, '')) + ')</span></dfn>');
  });
  const btext = b.text.replace(new RegExp(b.enTerms.map(x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') || '$^', 'g'), ' ');
  if (/[０-９]/.test(b.text)) out.push('full-width digits: use 0-9');
  const nm = diffMulti(a.nums, b.nums);
  nm.missing = nm.missing.filter(tok => {
    if (tok.indexOf(',') < 0) return true;
    const parts = tok.split(','), ex = nm.extra.slice();
    for (const p of parts) { const j = ex.indexOf(p); if (j < 0) return true; ex.splice(j, 1); }
    nm.extra = ex; return false;
  });
  if (nm.missing.length) out.push('number missing: ' + nm.missing.join(' ') + ' (numbers are compared text by text between tags; write them with the digits 0-9 exactly as in the English)');
  if (opts.math) {
    const oa = (a.text.match(OPS) || []).join(' '), ob = (btext.match(OPS) || []).join(' ');
    if (oa !== ob) out.push('maths operators changed: "' + oa + '" → "' + ob + '"');
    if (nm.extra.length) out.push('number not in the English: ' + nm.extra.join(' '));
  }
  return out;
}

function labelWidth(s) {
  let w = 0;
  for (const ch of String(s).replace(/<[^>]+>/g, '')) w += /[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/.test(ch) ? 1 : 0.55;
  return w;
}

function similarity(a, b) {
  const grams = s => { const g = {}; s = s.toLowerCase(); for (let i = 0; i < s.length - 1; i++) { const k = s.slice(i, i + 2); g[k] = (g[k] || 0) + 1; } return g; };
  const A = grams(a), B = grams(b); let inter = 0, na = 0, nb = 0;
  Object.keys(A).forEach(k => { na += A[k]; if (B[k]) inter += Math.min(A[k], B[k]); });
  Object.keys(B).forEach(k => { nb += B[k]; });
  return na + nb ? 2 * inter / (na + nb) : 0;
}
function closest(key, candidates) {
  let best = null, score = 0;
  candidates.forEach(c => { const s = similarity(key, c); if (s > score) { score = s; best = c; } });
  return score >= 0.55 ? { key: best, score } : null;
}

module.exports = { translatable, labelWidth, ROOT, LANGS, norm, pageFile, isTopic, scanSource, readOverlay, writeStringsFile, writeQuestionsFile, stringsBlock, comment,
  questionFields, questionPairs, missingSlots, catalog, launchBrowser, lintPair, readHtml, closest, Q_FIELDS, J };
