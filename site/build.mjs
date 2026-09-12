#!/usr/bin/env node
/* Build site KryFlow: đọc content JSON + prompts/*.md trong repo → site/dist/ (HTML tĩnh, mỗi trang 1 URL).
   Không dependency. Chạy: node site/build.mjs */
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(ROOT, 'site');
const DIST = join(SITE, 'dist');
const read = (p) => readFileSync(join(ROOT, p), 'utf8');
const json = (p) => JSON.parse(read(p));

const steps = json('site/content/steps.json');
const types = json('site/content/types.json');
const sim = json('site/content/sim.json');
const meta = json('site/content/site.json');
const VERSION = read('VERSION').trim();

/* ---------- markdown tối giản ---------- */
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\{\{([^}]+)\}\}/g, '<span class="fill">{{$1}}</span>');
}
function md(src) {
  const lines = src.replace(/\r/g, '').split('\n');
  let out = [], i = 0;
  const flushPara = (buf) => { if (buf.length) { out.push('<p>' + inline(buf.join(' ')) + '</p>'); buf.length = 0; } };
  let para = [];
  while (i < lines.length) {
    const l = lines[i];
    if (/^```/.test(l)) { flushPara(para); let code = []; i++; while (i < lines.length && !/^```/.test(lines[i])) code.push(lines[i++]); i++; out.push('<pre><code>' + esc(code.join('\n')).replace(/\{\{([^}]+)\}\}/g, '<span class="fill">{{$1}}</span>') + '</code></pre>'); continue; }
    if (/^#{1,4} /.test(l)) { flushPara(para); const n = l.match(/^(#+)/)[1].length; const t = l.replace(/^#+ /, ''); const id = slug(t); out.push(`<h${n} id="${id}">${inline(t)}</h${n}>`); i++; continue; }
    if (/^\s*[-*] /.test(l)) { flushPara(para); let items = []; while (i < lines.length && /^\s*[-*] /.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*] /, '')); out.push('<ul>' + items.map((x) => '<li>' + inline(x) + '</li>').join('') + '</ul>'); continue; }
    if (/^\s*\d+[.)] /.test(l)) { flushPara(para); let items = []; while (i < lines.length && /^\s*\d+[.)] /.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)] /, '')); out.push('<ol>' + items.map((x) => '<li>' + inline(x) + '</li>').join('') + '</ol>'); continue; }
    if (/^>/.test(l)) { flushPara(para); let q = []; while (i < lines.length && /^>/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, '')); out.push('<blockquote>' + inline(q.join(' ')) + '</blockquote>'); continue; }
    if (/^\|/.test(l)) { flushPara(para); let rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]); const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()); const head = cells(rows[0]); const body = rows.slice(2).map(cells); out.push('<table><thead><tr>' + head.map((h) => '<th>' + inline(h) + '</th>').join('') + '</tr></thead><tbody>' + body.map((r) => '<tr>' + r.map((c) => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table>'); continue; }
    if (/^---+$/.test(l.trim())) { flushPara(para); out.push('<hr>'); i++; continue; }
    if (!l.trim()) { flushPara(para); i++; continue; }
    para.push(l.trim()); i++;
  }
  flushPara(para);
  return out.join('\n');
}
function slug(t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

/* Đọc 1 file prompt: frontmatter đơn giản + tách khối ```prompt``` */
function parsePromptFile(path) {
  const raw = read(path);
  const fm = {}; let body = raw;
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (m) { m[1].split('\n').forEach((ln) => { const k = ln.match(/^([a-z_]+):\s*(.*)$/); if (k) fm[k[1]] = k[2].replace(/^"|"$/g, ''); }); body = raw.slice(m[0].length); }
  // Khối prompt copy-paste nằm trong ```prompt ... ```
  const prompts = [];
  body = body.replace(/```prompt\n([\s\S]*?)```/g, (_, p) => { prompts.push(p.trimEnd()); return `@@PROMPT${prompts.length - 1}@@`; });
  return { fm, body, prompts };
}

/* ---------- layout ---------- */
const NAV = [
  ['/', 'Tổng quan'],
  ['/bat-dau/', 'Bắt đầu'],
  ['/buoc/', 'Các bước'],
  ['/chay-thu/', 'Chạy thử'],
  ['/ho-so/', 'Hồ sơ dự án'],
  ['/tra-nhanh/', 'Tra nhanh'],
];
const ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
const ICON_GH = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>';

function layout({ title, desc, path, body, data = {}, wide = false }) {
  const fullTitle = title === meta.name ? `${meta.name} · ${meta.tagline}` : `${title} · ${meta.name}`;
  return `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc || meta.description)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(desc || meta.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${meta.url}${path}">
<meta property="og:image" content="${meta.url}/assets/og.png">
<link rel="canonical" href="${meta.url}${path}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="/assets/kryflow.css?v=${VERSION}">
<script>try{var t=localStorage.getItem('kf-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
</head>
<body>
<header class="nav">
  <div class="wrap">
    <a class="brand" href="/"><span class="mark">K</span>KryFlow <small>v${VERSION}</small></a>
    <nav class="nav-links" aria-label="Chính">${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</nav>
    <div class="nav-right">
      <a class="icon-btn" href="${meta.repo}" title="GitHub" aria-label="GitHub">${ICON_GH}</a>
      <button class="icon-btn" data-theme-toggle title="Đổi sáng/tối" aria-label="Đổi giao diện sáng tối"><span class="only-dark">${ICON_SUN}</span><span class="only-light">${ICON_MOON}</span></button>
    </div>
  </div>
</header>
<main class="wrap${wide ? ' wide' : ''}">
${body}
<footer class="foot">
  <span>${esc(meta.name)} v${VERSION} · bản rút gọn của <a href="${meta.parentRepo}">Kry Lifecycle</a> cho người mới dùng ChatGPT, Gemini · MIT</span>
  <span><a href="${meta.repo}">GitHub</a> · <a href="${meta.repo}/issues">Góp ý</a> · <a href="/tra-nhanh/">Tra nhanh</a></span>
</footer>
</main>
<script>window.KRYFLOW=${JSON.stringify(data)};</script>
<script src="/assets/kryflow.js?v=${VERSION}" defer></script>
</body>
</html>`;
}

const stepPublic = steps.map((s) => ({ slug: s.slug, order: s.order, name: s.name, en: s.en, job: s.job, door: s.door, gateIn: s.gateIn, gateOut: s.gateOut, stop: s.stop, output: s.output, challenger: s.challenger }));
const doorChip = (d) => ({ one: 'cửa 1 chiều', two: 'cửa 2 chiều', live: 'sau khi sống', fix: 'khi lỗi' }[d] || d);

function promptBlock(text, idx, title) {
  const id = `prompt-${idx}`;
  return `<div class="prompt reveal" id="${id}-box">
  <div class="prompt-head"><span class="t">${esc(title || 'Prompt copy-paste')}</span><span class="hint">Chỗ <span class="fill">{{...}}</span> là chỗ bạn điền</span><button class="btn sm primary" data-copy="#${id}">Chép prompt</button></div>
  <pre id="${id}">${esc(text).replace(/\{\{([^}]+)\}\}/g, '<span class="fill">{{$1}}</span>')}</pre>
</div>`;
}

/* ---------- pages ---------- */
function pageIndex() {
  const lanes = meta.lanes; // [{key,title,desc,steps:[slug]}]
  const byId = Object.fromEntries(steps.map((s) => [s.slug, s]));
  const laneHtml = lanes.map((ln) => `
    <div class="lane">
      <div class="lane-label"><b>${esc(ln.title)}</b><span>${esc(ln.desc)}</span></div>
      <div class="nodes">${ln.steps.map((sl) => { const s = byId[sl]; return `<div class="node ${s.door}" data-step="${s.slug}" tabindex="0" role="button" aria-label="Bước ${esc(s.name)}"><div class="act">${esc(s.order)}</div><div class="name">${esc(s.name)} <span class="en">${esc(s.en)}</span></div><div class="what">${esc(s.short)}</div><div class="foot"><span class="dot ${s.door}"></span>${esc(s.challenger ? 'có phản biện' : doorChip(s.door))}</div></div>`; }).join('')}</div>
    </div>`).join('');

  const body = `
<section class="hero">
  <div>
    <div class="eyebrow">${esc(meta.eyebrow)}</div>
    <h1>${esc(meta.h1)}</h1>
    <p class="lead">${esc(meta.leadIndex)}</p>
    <div class="btn-row"><a class="btn primary" href="/bat-dau/">Bắt đầu trong 10 phút</a><a class="btn" href="/chay-thu/">Xem một dự án chạy thử</a><a class="btn ghost" href="${meta.repo}">Tải bộ prompt trên GitHub</a></div>
  </div>
  <div class="hero-num">${steps.filter((s) => s.door !== 'fix').length}<small>bước có cửa gác · ${meta.coreCount} bước lõi cho mọi dự án · 1 bước cứu lỗi</small></div>
</section>
<div class="laws reveal">${meta.laws.map((l) => `<div><b>${esc(l.title)}</b><span>${esc(l.desc)}</span></div>`).join('')}</div>

<section class="section" id="ban-do">
  <div class="section-head"><div class="eyebrow">Bản đồ</div><h2>${esc(meta.mapTitle)}</h2><p class="lead">${esc(meta.mapLead)}</p></div>
  <div class="types" data-types>${types.map((t) => `<button class="type-btn" data-type="${t.id}"><b>${esc(t.name)}</b><small>${esc(t.hint)}</small></button>`).join('')}</div>
  <div class="chain-note" data-chain-note hidden></div>
  <div class="map" data-map>${laneHtml}
    <div class="loopnote">${esc(meta.loopNote)}</div>
    <div class="map-legend"><span><i style="background:var(--warning)"></i>cửa 1 chiều: làm kỹ, có phản biện</span><span><i style="background:var(--verify)"></i>cửa 2 chiều: lặp nhanh</span><span><i style="background:var(--success)"></i>sau khi sống</span><span><i style="background:var(--danger)"></i>khi lỗi</span></div>
  </div>
  <div class="map-detail" data-map-detail></div>
</section>

<section class="section" id="vi-sao">
  <div class="section-head"><div class="eyebrow">Vì sao cần</div><h2>${esc(meta.whyTitle)}</h2></div>
  <div class="grid grid-3">${meta.why.map((w) => `<div class="card reveal"><h3>${esc(w.title)}</h3><p class="muted" style="margin-top:8px;font-size:14.5px">${esc(w.desc)}</p></div>`).join('')}</div>
</section>

<section class="section" id="cac-buoc">
  <div class="section-head"><div class="eyebrow">Các bước</div><h2>Mỗi bước một trang, mỗi trang một prompt</h2><p class="lead">Bấm vào bước để đọc việc của nó, cửa vào, cửa ra, prompt copy-paste và lỗi hay gặp.</p></div>
  <div class="step-cards">${steps.map((s) => `<a class="step-card reveal" href="/buoc/${s.slug}/"><span class="n">${esc(s.order)} · ${esc(s.en)} · ${doorChip(s.door)}</span><b>${esc(s.name)}</b><p>${esc(s.short)}</p><span class="go">Mở bước →</span></a>`).join('')}</div>
</section>

<section class="section" id="bat-dau-nhanh">
  <div class="card soft reveal" style="display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center;padding:28px 32px">
    <div><h2 style="font-size:26px">${esc(meta.ctaTitle)}</h2><p class="muted" style="margin-top:8px;max-width:70ch">${esc(meta.ctaDesc)}</p></div>
    <div class="btn-row"><a class="btn primary" href="/bat-dau/">Cài trong 10 phút</a><a class="btn" href="/ho-so/">Mẫu hồ sơ dự án</a></div>
  </div>
</section>`;
  return layout({ title: meta.name, desc: meta.description, path: '/', body, data: { steps: stepPublic, types } });
}

function pageStepsIndex() {
  const body = `
<section class="step-hero" style="grid-template-columns:1fr">
  <div><div class="crumbs"><a href="/">KryFlow</a> / các bước</div><h1>Các bước của KryFlow</h1><p class="job">Mỗi bước là một việc, có cửa vào, cửa ra và một prompt để dán. Thứ tự dưới là thứ tự đầy đủ cho một app có dữ liệu; dự án đơn giản hơn bỏ bớt bước theo bảng ở <a href="/#ban-do" style="color:var(--gold)">bản đồ</a>.</p></div>
</section>
<div class="tablewrap reveal"><table class="table">
<thead><tr><th>Bước</th><th>Tên</th><th>Việc</th><th>Cửa</th><th>Để lại</th><th>Bỏ được khi</th></tr></thead>
<tbody>${steps.map((s) => `<tr><td class="mono">${esc(s.order)}</td><td><a href="/buoc/${s.slug}/"><b>${esc(s.name)}</b></a> <span class="faint mono" style="font-size:12px">${esc(s.en)}</span></td><td>${esc(s.job)}</td><td><span class="chip ${s.door}">${doorChip(s.door)}</span></td><td class="muted">${esc(s.output)}</td><td class="muted">${esc(s.optionalFor || 'không bỏ')}</td></tr>`).join('')}</tbody>
</table></div>`;
  return layout({ title: 'Các bước', desc: 'Danh sách các bước KryFlow: việc, cửa vào, cửa ra, sản phẩm để lại.', path: '/buoc/', body, wide: true });
}

function pageStep(s, i) {
  const prev = steps[i - 1], next = steps[i + 1];
  const pf = parsePromptFile(s.file);
  let html = md(pf.body);
  pf.prompts.forEach((p, k) => { html = html.replace(`<p>@@PROMPT${k}@@</p>`, promptBlock(p, k, k === 0 ? 'Prompt của bước này' : 'Prompt phụ')); });
  // TOC từ h2
  const toc = [...html.matchAll(/<h2 id="([^"]+)">(.*?)<\/h2>/g)].map((m) => `<a href="#${m[1]}">${m[2].replace(/<[^>]+>/g, '')}</a>`).join('');
  const body = `
<section class="step-hero">
  <div>
    <div class="crumbs"><a href="/">KryFlow</a> / <a href="/buoc/">các bước</a> / ${esc(s.order)}</div>
    <h1>${esc(s.order)} · ${esc(s.name)} <span class="en">${esc(s.en)} · gốc ${esc(s.mapsTo)}</span></h1>
    <p class="job">${esc(s.job)}</p>
    <div class="badges"><span class="chip ${s.door}">${doorChip(s.door)}</span>${s.challenger ? `<span class="chip gold">có phản biện</span>` : ''}${s.optionalFor ? `<span class="chip neutral">bỏ được: ${esc(s.optionalFor)}</span>` : '<span class="chip neutral">mọi dự án đều qua</span>'}</div>
  </div>
  <div class="gates">
    <div class="gate in"><b>Vào khi</b><span>${esc(s.gateIn)}</span></div>
    <div class="gate out"><b>Xong khi</b><span>${esc(s.gateOut)}</span></div>
    <div class="gate stop"><b>Chưa sang bước kế nếu</b><span>${esc(s.stop)}</span></div>
  </div>
</section>
<div class="step-body">
  <article class="step-main prose">${html}</article>
  <aside class="step-aside">
    <div class="toc"><b>Trong trang</b>${toc}</div>
    <div class="next-prev">
      ${prev ? `<a class="prev" href="/buoc/${prev.slug}/"><small>← trước</small><b>${esc(prev.name)}</b></a>` : `<a class="prev disabled"><small>← trước</small><b>Bắt đầu</b></a>`}
      ${next ? `<a class="next" href="/buoc/${next.slug}/"><small>kế →</small><b>${esc(next.name)}</b></a>` : `<a class="next" href="/ho-so/"><small>kế →</small><b>Hồ sơ dự án</b></a>`}
    </div>
    <a class="btn ghost sm" href="${meta.repo}/blob/main/${s.file}">Xem file gốc trên GitHub</a>
  </aside>
</div>`;
  return layout({ title: `${s.order} · ${s.name}`, desc: s.job, path: `/buoc/${s.slug}/`, body });
}

function pageMd(file, { title, desc, path, wide = false, extraTop = '', extraBottom = '', data = {} }) {
  const pf = parsePromptFile(file);
  let html = md(pf.body);
  pf.prompts.forEach((p, k) => { html = html.replace(`<p>@@PROMPT${k}@@</p>`, promptBlock(p, k, pf.fm[`prompt_title_${k}`] || 'Prompt copy-paste')); });
  const body = `
<section class="step-hero" style="grid-template-columns:1fr;padding-bottom:12px">
  <div><div class="crumbs"><a href="/">KryFlow</a> / ${esc(title.toLowerCase())}</div><h1>${esc(pf.fm.title || title)}</h1>${pf.fm.lead ? `<p class="job">${esc(pf.fm.lead)}</p>` : ''}</div>
</section>
${extraTop}
<article class="prose${wide ? '' : ''}" style="${wide ? 'max-width:none' : ''}">${html}</article>
${extraBottom}`;
  return layout({ title, desc, path, body, data, wide });
}

function pageSim() {
  const body = `
<section class="step-hero" style="grid-template-columns:1fr;padding-bottom:12px">
  <div><div class="crumbs"><a href="/">KryFlow</a> / chạy thử</div><h1>${esc(sim.title)}</h1><p class="job">${esc(sim.lead)}</p></div>
</section>
<div class="sim" data-sim>
  <div class="sim-steps" data-sim-steps>${sim.steps.map((s, i) => `<div class="sim-step" role="button" tabindex="0"><span class="n">${i + 1}</span><span><b>${esc(s.title)}</b><small>${esc(s.sub)}</small></span></div>`).join('')}</div>
  <div class="sim-pane">
    <div class="term" data-sim-term>${sim.steps[0].lines.map((l) => `<span class="${l.k || 'k'}">${esc(l.t)}</span>`).join('\n')}</div>
    <div class="caption" data-sim-caption><b>${esc(sim.steps[0].title)}.</b> ${esc(sim.steps[0].caption)}</div>
    <div class="btn-row"><button class="btn" data-sim-prev>← Bước trước</button><button class="btn primary" data-sim-next>Bước kế →</button><span class="faint small">Phím ← → cũng được</span></div>
  </div>
</div>
<section class="section" style="padding-top:56px">
  <div class="section-head"><div class="eyebrow">Đọc gì từ ví dụ này</div><h2>${esc(sim.lessonsTitle)}</h2></div>
  <div class="grid grid-3">${sim.lessons.map((l) => `<div class="card reveal"><h3>${esc(l.title)}</h3><p class="muted" style="margin-top:8px;font-size:14.5px">${esc(l.desc)}</p></div>`).join('')}</div>
</section>`;
  return layout({ title: 'Chạy thử', desc: sim.lead, path: '/chay-thu/', body, data: { sim: sim.steps }, wide: true });
}

function page404() {
  const body = `<section class="hero" style="grid-template-columns:1fr;padding-top:120px"><div><div class="eyebrow">404</div><h1>Không có trang này</h1><p class="lead">Có thể đường dẫn đổi khi KryFlow cập nhật. Về <a href="/" style="color:var(--gold)">trang tổng quan</a> hoặc xem <a href="/buoc/" style="color:var(--gold)">các bước</a>.</p></div></section>`;
  return layout({ title: 'Không tìm thấy', desc: '404', path: '/404.html', body });
}

/* ---------- write ---------- */
function out(path, html) {
  const file = path.endsWith('.html') ? join(DIST, path) : join(DIST, path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync(join(SITE, 'assets'), join(DIST, 'assets'), { recursive: true });

out('/', pageIndex());
out('/buoc/', pageStepsIndex());
steps.forEach((s, i) => out(`/buoc/${s.slug}/`, pageStep(s, i)));
out('/chay-thu/', pageSim());
out('/404.html', page404());

// Trang markdown: bắt đầu, hồ sơ, tra nhanh (kèm checklist tiến độ ở hồ sơ)
const checklistHtml = `
<section class="card reveal" style="margin:8px 0 28px;display:grid;gap:14px">
  <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><h3>Dự án của bạn đang ở bước nào?</h3><span class="chip neutral" data-progress-label>0/${steps.length} bước</span><button class="btn ghost sm" data-checklist-reset style="margin-left:auto">Xoá tiến độ</button></div>
  <div class="progress"><i data-progress></i></div>
  <p class="muted small">Tick khi qua cửa ra của bước. Lưu trên trình duyệt này, không gửi đi đâu. Dùng để nhớ mình đang ở đâu khi mở chat mới.</p>
  <div class="check" data-checklist>${steps.map((s) => `<label><input type="checkbox" data-id="${s.slug}"><span class="t"><b>${esc(s.order)} · ${esc(s.name)}</b><small>xong khi: ${esc(s.gateOut)}</small></span><a class="btn ghost sm" href="/buoc/${s.slug}/">mở</a></label>`).join('')}</div>
</section>`;
out('/bat-dau/', pageMd('site/content/bat-dau.md', { title: 'Bắt đầu', desc: 'Cài KryFlow lên ChatGPT Plus hoặc Gemini trong 10 phút.', path: '/bat-dau/' }));
out('/ho-so/', pageMd('site/content/ho-so.md', { title: 'Hồ sơ dự án', desc: 'Mẫu hồ sơ dự án: bộ nhớ dán vào mỗi chat mới, và checklist bạn đang ở bước nào.', path: '/ho-so/', extraTop: checklistHtml }));
out('/tra-nhanh/', pageMd('site/content/tra-nhanh.md', { title: 'Tra nhanh', desc: 'Bảng tra nhanh KryFlow: bước, prompt, cửa, sản phẩm.', path: '/tra-nhanh/', wide: true }));

// Copy prompts/templates gốc vào dist để tải thẳng
for (const dir of ['prompts', 'templates', 'checklists']) {
  const src = join(ROOT, dir);
  if (existsSync(src)) cpSync(src, join(DIST, 'raw', dir), { recursive: true });
}
// sitemap
const urls = ['/', '/bat-dau/', '/buoc/', ...steps.map((s) => `/buoc/${s.slug}/`), '/chay-thu/', '/ho-so/', '/tra-nhanh/'];
writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${meta.url}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${meta.url}/sitemap.xml\n`);

const count = readdirSync(DIST, { recursive: true }).filter((f) => String(f).endsWith('.html')).length;
console.log(`✓ build ${count} trang → site/dist (v${VERSION})`);
