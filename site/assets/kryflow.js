/* KryFlow site JS. Mọi thứ fail-safe: không có JS thì nội dung vẫn đọc được. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var D = window.KRYFLOW || {};
  var LS = function (k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      localStorage.setItem(k, v);
    } catch (e) { return null; }
  };

  /* ---------- theme ---------- */
  (function theme() {
    var saved = LS('kf-theme');
    if (saved === 'light' || saved === 'dark') document.documentElement.setAttribute('data-theme', saved);
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-theme-toggle]');
      if (!b) return;
      var cur = document.documentElement.getAttribute('data-theme');
      if (!cur) cur = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      LS('kf-theme', next);
    });
  })();

  /* ---------- toast ---------- */
  var toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('is-on');
    clearTimeout(toastEl._t); toastEl._t = setTimeout(function () { toastEl.classList.remove('is-on'); }, 1800);
  }

  /* ---------- copy prompt ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy]');
    if (!b) return;
    var sel = b.getAttribute('data-copy');
    var src = sel ? document.querySelector(sel) : b.closest('.prompt') && b.closest('.prompt').querySelector('pre');
    if (!src) return;
    var text = src.innerText;
    var done = function () {
      var box = b.closest('.prompt'); if (box) { box.classList.add('is-copied'); setTimeout(function () { box.classList.remove('is-copied'); }, 1600); }
      var old = b.innerHTML; b.innerHTML = 'Đã chép ✓'; setTimeout(function () { b.innerHTML = old; }, 1600);
      toast('Đã chép prompt. Dán vào ChatGPT hoặc Gemini.');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
    else { fallback(text); done(); }
    function fallback(t) { var ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (_) {} document.body.removeChild(ta); }
  });

  /* ---------- reveal ---------- */
  (function reveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
    // Bảo hiểm: sau 1.5s mọi thứ hiện hết dù observer không bắn.
    setTimeout(function () { els.forEach(function (el) { el.classList.add('is-in'); }); }, 1500);
  })();

  /* ---------- nav active ---------- */
  (function navActive() {
    var path = location.pathname.replace(/index\.html$/, '');
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      if (href === '/' ? path === '/' : path.indexOf(href) === 0) a.classList.add('active');
    });
  })();

  /* ---------- pipeline map (trang chủ) ---------- */
  (function map() {
    var mapEl = document.querySelector('[data-map]');
    if (!mapEl || !D.steps) return;
    var detail = document.querySelector('[data-map-detail]');
    var nodes = mapEl.querySelectorAll('.node[data-step]');
    var byId = {}; D.steps.forEach(function (s) { byId[s.slug] = s; });

    function render(slug) {
      nodes.forEach(function (n) { n.classList.toggle('is-active', n.getAttribute('data-step') === slug); });
      if (!detail) return;
      var s = byId[slug];
      if (!s) { detail.innerHTML = '<div><p class="empty">Bấm một bước trên bản đồ để xem việc của nó, cửa vào, cửa ra và sản phẩm để lại.</p></div><div></div>'; return; }
      var doorLabel = { one: 'Cửa 1 chiều, làm kỹ, có người phản biện', two: 'Cửa 2 chiều, lặp nhanh', live: 'Dùng sau khi ra mắt', fix: 'Lối phụ, vào khi có lỗi' }[s.door] || '';
      detail.innerHTML =
        '<div>' +
          '<div class="title"><span class="chip ' + s.door + '">' + s.order + '</span><h3>' + esc(s.name) + ' <span class="faint mono" style="font-size:13px;font-weight:400">' + esc(s.en) + '</span></h3></div>' +
          '<p>' + esc(s.viec || s.job) + '</p>' +
          '<div class="btn-row" style="margin-top:16px"><a class="btn primary sm" href="/buoc/' + s.slug + '/">Xem bước này</a></div>' +
        '</div>' +
        '<div>' +
          '<dl class="kv" style="margin-top:0"><dt>Ai cần</dt><dd>' + esc(s.aiCan || '') + '</dd>' +
          '<dt>Xong khi</dt><dd>' + esc(s.xong || s.gateOut) + '</dd>' +
          '<dt>Loại cửa</dt><dd>' + esc(doorLabel) + '</dd></dl>' +
        '</div>';
    }
    nodes.forEach(function (n) {
      n.addEventListener('click', function () { render(n.getAttribute('data-step')); });
      n.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); render(n.getAttribute('data-step')); } });
    });
    render(null);

    /* type selector: làm mờ bước bỏ qua */
    var typeBtns = document.querySelectorAll('[data-type]');
    var note = document.querySelector('[data-chain-note]');
    function applyType(id) {
      typeBtns.forEach(function (b) { b.classList.toggle('is-on', b.getAttribute('data-type') === id); });
      var t = (D.types || []).filter(function (x) { return x.id === id; })[0];
      nodes.forEach(function (n) {
        var slug = n.getAttribute('data-step');
        var isFix = n.classList.contains('fix');
        var skip = t && !isFix ? t.chain.indexOf(slug) === -1 : false;
        n.classList.toggle('is-skip', skip);
      });
      if (note) {
        if (!t) { note.hidden = true; return; }
        note.hidden = false;
        var names = t.chain.map(function (slug) { return byId[slug] ? byId[slug].name : slug; }).join(' → ');
        note.innerHTML = '<b>' + esc(t.name) + ':</b> ' + esc(t.when) + '<br><span class="mono" style="font-size:13px">' + esc(names) + '</span>' + (t.note ? '<br><span class="faint">' + esc(t.note) + '</span>' : '');
      }
      LS('kf-type', id);
    }
    typeBtns.forEach(function (b) { b.addEventListener('click', function () { applyType(b.getAttribute('data-type')); }); });
    var savedType = LS('kf-type');
    if (savedType) applyType(savedType);
  })();

  /* ---------- checklist tiến độ (trang hồ sơ) ---------- */
  (function checklist() {
    var box = document.querySelector('[data-checklist]');
    if (!box) return;
    var key = 'kf-progress';
    var state = {};
    try { state = JSON.parse(LS(key) || '{}') || {}; } catch (e) { state = {}; }
    var inputs = box.querySelectorAll('input[type=checkbox][data-id]');
    var bar = document.querySelector('[data-progress]');
    var label = document.querySelector('[data-progress-label]');
    function paint() {
      var done = 0;
      inputs.forEach(function (i) { var on = !!state[i.getAttribute('data-id')]; i.checked = on; i.closest('label').classList.toggle('is-done', on); if (on) done++; });
      if (bar) bar.style.width = Math.round(done / inputs.length * 100) + '%';
      if (label) label.textContent = done + '/' + inputs.length + ' bước';
    }
    inputs.forEach(function (i) { i.addEventListener('change', function () { state[i.getAttribute('data-id')] = i.checked; LS(key, JSON.stringify(state)); paint(); }); });
    var reset = document.querySelector('[data-checklist-reset]');
    if (reset) reset.addEventListener('click', function () { state = {}; LS(key, '{}'); paint(); toast('Đã xoá tiến độ trên máy này.'); });
    paint();
  })();

  /* ---------- chạy thử (simulator) ---------- */
  (function sim() {
    var root = document.querySelector('[data-sim]');
    if (!root || !D.sim) return;
    var stepsEl = root.querySelector('[data-sim-steps]');
    var term = root.querySelector('[data-sim-term]');
    var cap = root.querySelector('[data-sim-caption]');
    var prevBtn = root.querySelector('[data-sim-prev]');
    var nextBtn = root.querySelector('[data-sim-next]');
    var idx = 0, timer = null;

    function paintSteps() {
      stepsEl.querySelectorAll('.sim-step').forEach(function (el, i) {
        el.classList.toggle('is-on', i === idx);
        el.classList.toggle('is-done', i < idx);
      });
      prevBtn.disabled = idx === 0; nextBtn.disabled = idx === D.sim.length - 1;
      nextBtn.textContent = idx === D.sim.length - 1 ? 'Hết' : 'Bước kế →';
    }
    function typeLines(lines) {
      clearTimeout(timer);
      term.innerHTML = '';
      var i = 0;
      function next() {
        if (i >= lines.length) return;
        var l = lines[i++];
        var span = document.createElement('span');
        span.className = l.k || 'k';
        span.textContent = l.t;
        term.appendChild(span);
        term.appendChild(document.createTextNode('\n'));
        term.scrollTop = term.scrollHeight;
        timer = setTimeout(next, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : (l.k === 'u' ? 420 : 260));
      }
      next();
    }
    function show(i) {
      idx = Math.max(0, Math.min(D.sim.length - 1, i));
      var s = D.sim[idx];
      paintSteps();
      typeLines(s.lines);
      cap.innerHTML = '<b>' + esc(s.title) + '.</b> ' + esc(s.caption);
      LS('kf-sim', String(idx));
    }
    stepsEl.querySelectorAll('.sim-step').forEach(function (el, i) { el.addEventListener('click', function () { show(i); }); });
    prevBtn.addEventListener('click', function () { show(idx - 1); });
    nextBtn.addEventListener('click', function () { show(idx + 1); });
    document.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1); });
    show(0);
  })();

  /* ---------- toc highlight (trang bước) ---------- */
  (function toc() {
    var links = document.querySelectorAll('.toc a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) { var id = a.getAttribute('href').slice(1); var el = document.getElementById(id); if (el) map[id] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { links.forEach(function (a) { a.classList.remove('is-on'); }); var a = map[en.target.id]; if (a) a.classList.add('is-on'); } });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
  })();

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
})();
