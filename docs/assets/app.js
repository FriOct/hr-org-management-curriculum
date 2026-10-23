/* 인사조직관리 스터디 — 정적 SPA (해시 라우팅, 빌드 단계 없음)
 * 데이터: data/content.js (scripts/build-site.mjs 가 Markdown에서 생성)
 * 진도 저장: localStorage 'hrcur:v1' (이 브라우저에만 저장) */
(function () {
  'use strict';

  var D = window.SITE_DATA;
  var main = document.getElementById('main');
  if (!D) { main.innerHTML = '<p class="notice">데이터(data/content.js)를 불러오지 못했습니다.</p>'; return; }

  var PAGE = {};
  D.pages.forEach(function (p) { PAGE[p.id] = p; });
  var COURSE = ['orientation', 's1', 's2', 's3', 's4', 'capstone'];
  var SEMS = ['s1', 's2', 's3', 's4'];
  var STAGE = {};
  D.tracker.forEach(function (s) { STAGE[s.id] = s; });

  // ---------------- 저장소 ----------------
  var STORE_KEY = 'hrcur:v1';
  var storageOk = true;
  var state = load();
  function blank() { return { checks: {}, dates: {}, known: {}, theme: 'auto', last: '' }; }
  function load() {
    var s = blank();
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && typeof o === 'object') {
          ['checks', 'dates', 'known'].forEach(function (k) { if (o[k] && typeof o[k] === 'object') s[k] = o[k]; });
          if (typeof o.theme === 'string') s.theme = o.theme;
          if (typeof o.last === 'string') s.last = o.last;
        }
      }
    } catch (e) { storageOk = false; }
    return s;
  }
  function save() {
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(state)); storageOk = true; }
    catch (e) { storageOk = false; }
  }
  var isChecked = function (k) { return !!state.checks[k]; };

  // ---------------- 유틸 ----------------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function meter(id, extra) { return '<div class="meter ' + (extra || '') + '" data-meter="' + id + '"><span></span></div>'; }
  function shortName(id) { return PAGE[id].short || PAGE[id].nav; }

  // ---------------- 진도 계산 ----------------
  function stageStats(id) {
    var st = STAGE[id];
    var done = st.items.filter(function (it) { return isChecked(it.key); }).length;
    return { done: done, total: st.items.length, complete: st.items.length > 0 && done === st.items.length };
  }
  function weekStats(sid) {
    var w = D.weeks[sid];
    if (!w) return { done: 0, total: 0 };
    var done = w.weeks.filter(function (x) { return isChecked(x.key); }).length;
    return { done: done, total: w.weeks.length };
  }
  function overall() {
    var stagesDone = 0, items = 0, itemsDone = 0;
    D.tracker.forEach(function (s) {
      var r = stageStats(s.id);
      items += r.total; itemsDone += r.done;
      if (r.complete) stagesDone++;
    });
    return { stagesDone: stagesDone, stages: D.tracker.length, items: items, itemsDone: itemsDone, pct: pct(itemsDone, items) };
  }
  function currentStage() {
    for (var i = 0; i < D.tracker.length; i++) if (!stageStats(D.tracker[i].id).complete) return D.tracker[i];
    return null;
  }

  function refreshMeters() {
    var o = overall();
    var vals = { overall: o.pct };
    var texts = {
      'overall-stages': o.stagesDone + ' / ' + o.stages,
      'overall-items': o.itemsDone + ' / ' + o.items + ' 항목 (' + o.pct + '%)',
      'overall-tag': '[' + o.stagesDone + '/' + o.stages + ']'
    };
    D.tracker.forEach(function (s) {
      var r = stageStats(s.id);
      vals['stage:' + s.id] = pct(r.done, r.total);
      texts['stage:' + s.id] = r.done + ' / ' + r.total;
    });
    SEMS.forEach(function (sid) {
      var r = weekStats(sid);
      vals['weeks:' + sid] = pct(r.done, r.total);
      texts['weeks:' + sid] = r.done + ' / ' + r.total + '주';
    });
    document.querySelectorAll('[data-meter]').forEach(function (el) {
      var v = vals[el.getAttribute('data-meter')];
      if (v != null) { el.firstElementChild.style.width = v + '%'; el.setAttribute('role', 'progressbar'); el.setAttribute('aria-valuenow', v); el.setAttribute('aria-valuemin', 0); el.setAttribute('aria-valuemax', 100); }
    });
    document.querySelectorAll('[data-meter-text]').forEach(function (el) {
      var t = texts[el.getAttribute('data-meter-text')];
      if (t != null) el.textContent = t;
    });
    // 사이드바 퍼센트
    document.querySelectorAll('[data-nav-pct]').forEach(function (el) {
      var id = el.getAttribute('data-nav-pct');
      var r = stageStats(id);
      el.textContent = r.complete ? '✓' : (r.done ? pct(r.done, r.total) + '%' : '');
      el.classList.toggle('done', r.complete);
    });
    // 체크 상태 스타일
    document.querySelectorAll('.check').forEach(function (el) {
      var cb = el.querySelector('input');
      el.classList.toggle('is-done', !!(cb && cb.checked));
    });
  }

  // ---------------- 사이드바 ----------------
  function navLink(href, label, route, extra) {
    return '<a class="nav-link" href="' + href + '" data-route="' + route + '"><span class="nav-label">' + esc(label) + '</span>' + (extra || '') + '</a>';
  }
  function buildSidebar() {
    var h = '';
    h += '<div class="nav-group"><h2>시작</h2>' +
      navLink('#/', '대시보드', 'home') +
      navLink('#/page/intro', '커리큘럼 소개', 'page/intro') +
      navLink('#/tracker', '진도 체크리스트', 'tracker') + '</div>';
    h += '<div class="nav-group"><h2>커리큘럼</h2>' + COURSE.map(function (id) {
      return navLink('#/page/' + id, PAGE[id].nav, 'page/' + id, '<span class="nav-pct" data-nav-pct="' + id + '"></span>');
    }).join('') + '</div>';
    h += '<div class="nav-group"><h2>학습 도구</h2>' +
      navLink('#/weeks', '주차별 플랜', 'weeks') +
      navLink('#/glossary/cards', '용어 플래시카드', 'glossary/cards') +
      navLink('#/glossary/quiz', '용어 퀴즈', 'glossary/quiz') +
      navLink('#/glossary/list', '용어 검색', 'glossary/list') + '</div>';
    h += '<div class="nav-group"><h2>자료실</h2>' + D.pages.filter(function (p) { return p.group === 'resources'; }).map(function (p) {
      return navLink('#/page/' + p.id, p.nav, 'page/' + p.id);
    }).join('') + '</div>';
    h += '<p class="muted small-text" style="padding:0 10px">강의 자료는 각 기관 사이트로 연결만 합니다. 진도는 이 브라우저에만 저장됩니다.</p>';
    document.getElementById('sidebar').innerHTML = h;
  }
  function markActive(routeKey) {
    document.querySelectorAll('.nav-link').forEach(function (a) {
      var r = a.getAttribute('data-route');
      var on = r === routeKey || (r === 'weeks' && routeKey.indexOf('weeks') === 0);
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  // ---------------- 뷰: 대시보드 ----------------
  function checkItem(key, html) {
    return '<label class="check"><input type="checkbox" data-key="' + key + '"' + (isChecked(key) ? ' checked' : '') + '><span class="check-text">' + html + '</span></label>';
  }
  function nextWeek(sid) {
    var w = D.weeks[sid];
    if (!w) return null;
    for (var i = 0; i < w.weeks.length; i++) if (!isChecked(w.weeks[i].key)) return w.weeks[i];
    return null;
  }

  function viewHome() {
    var o = overall();
    var cur = currentStage();
    var intro = PAGE.intro;
    var h = '<div class="wrap">';
    if (!storageOk) h += '<p class="notice">이 브라우저에서 저장소(localStorage)를 사용할 수 없어 진도가 새로고침 후 사라집니다.</p>';

    h += '<section class="card hero"><div class="eyebrow">Personal University of HR &amp; Organizational Management</div>' +
      '<h1>인사조직관리 오픈 커리큘럼</h1><p class="lede">' + esc(intro.summary) + '</p>' +
      '<div class="grid cols-2" style="margin-top:18px;align-items:end">' +
      '<div><div class="muted small-text">완료한 단계</div><div class="big-stat"><span data-meter-text="overall-stages"></span> <small>단계</small></div></div>' +
      '<div><div class="meter-row"><span>체크 항목</span><span data-meter-text="overall-items"></span></div>' + meter('overall', 'big') + '</div></div>' +
      '<ol class="roadmap">' + D.tracker.map(function (s) {
        var r = stageStats(s.id);
        var cls = r.complete ? 'done' : (cur && cur.id === s.id ? 'now' : '');
        return '<li><a class="' + cls + '" href="#/page/' + s.pageId + '">' + (r.complete ? '✓ ' : '') + esc(shortName(s.pageId)) + '</a></li>';
      }).join('') + '</ol></section>';

    // 지금 할 일
    h += '<h2 class="section-title">지금 할 일</h2>';
    if (cur) {
      var todo = cur.items.filter(function (it) { return !isChecked(it.key); }).slice(0, 4);
      var nw = nextWeek(cur.pageId);
      h += '<section class="card"><div class="stage-head"><h3 style="margin:0">' + esc(cur.title) + '</h3><span class="tag now">진행 중</span></div>' +
        '<div class="meter-row" style="margin:6px 0 8px"><span data-meter-text="stage:' + cur.id + '"></span>' + meter('stage:' + cur.id) + '</div>' +
        todo.map(function (it) { return checkItem(it.key, it.html); }).join('');
      if (nw) h += '<div class="next-week"><strong>다음 주차 — ' + esc(nw.label) + ':</strong> ' + nw.topic + ' <span class="muted">· ' + nw.content + '</span></div>';
      h += '<div class="btn-row" style="margin-top:10px"><a class="btn primary" href="#/page/' + cur.pageId + '">강의계획서 열기</a>' +
        (D.weeks[cur.pageId] ? '<a class="btn" href="#/weeks/' + cur.pageId + '">주차별 플랜</a>' : '') +
        '<a class="btn" href="#/tracker">전체 체크리스트</a></div></section>';
    } else {
      h += '<section class="card"><h3>🎓 모든 단계를 완료했습니다!</h3><p>캡스톤 안내대로 README 상단에 수료 기록을 남겨보세요 — 이 대학의 총장은 본인입니다.</p></section>';
    }
    if (state.last && state.last !== '/' && state.last !== '') {
      h += '<p class="small-text muted" style="margin-top:10px">마지막으로 보던 곳: <a href="#' + esc(state.last) + '">' + esc(routeTitle(state.last)) + '</a></p>';
    }

    // 단계 카드
    h += '<h2 class="section-title">학기별 진행 상황</h2><div class="grid cols-3">';
    D.tracker.forEach(function (s) {
      var r = stageStats(s.id);
      var m = D.meta[s.pageId];
      var tag = r.complete ? '<span class="tag done">완료' + (state.dates[s.id] ? ' · ' + esc(state.dates[s.id]) : '') + '</span>' : (cur && cur.id === s.id ? '<span class="tag now">진행 중</span>' : '');
      h += '<article class="card stage-card"><div class="stage-head" style="margin:0"><span class="eyebrow">' + esc(shortName(s.pageId)) + (m ? ' · ' + esc(m.duration) : '') + '</span>' + tag + '</div>' +
        '<h3><a href="#/page/' + s.pageId + '">' + esc(PAGE[s.pageId].title) + '</a></h3>' +
        (m ? '<div class="meta">' + esc(m.courses) + '</div>' : (PAGE[s.pageId].summary ? '<div class="meta">' + esc(PAGE[s.pageId].summary) + '</div>' : '')) +
        '<div class="meter-row"><span>체크</span>' + meter('stage:' + s.id) + '<span data-meter-text="stage:' + s.id + '"></span></div>' +
        (D.weeks[s.pageId] ? '<div class="meter-row"><span>주차</span>' + meter('weeks:' + s.pageId) + '<span data-meter-text="weeks:' + s.pageId + '"></span></div>' : '') +
        '<div class="btn-row"><a class="btn small" href="#/page/' + s.pageId + '">계획서</a>' +
        (D.weeks[s.pageId] ? '<a class="btn small" href="#/weeks/' + s.pageId + '">주차별 플랜</a>' : '') + '</div></article>';
    });
    h += '</div>';

    // 도구
    h += '<h2 class="section-title">학습 도구 · 자료</h2><div class="grid cols-3">' +
      toolCard('#/glossary/cards', '용어 플래시카드', D.glossary.terms.length + '개 핵심 용어를 한↔영으로 뒤집어 외우기') +
      toolCard('#/glossary/quiz', '용어 퀴즈', '4지선다로 영어 강의와 KOCW 강의의 용어 연결 확인') +
      toolCard('#/page/textbooks', '무료 원서 교재', 'OpenStax 등 오픈 라이선스 교재와 학기별 챕터 대응표') +
      toolCard('#/page/curricula', '대학 커리큘럼 비교', '이 4학기 구성이 나온 근거 — MIT·Wharton·Cornell·서울대 등') +
      toolCard('#/page/certs', '자격증·시험 지도', '공인노무사·PHR·SHRM 등과 학기별 연결') +
      toolCard('#/page/orientation', '학습법 다시 보기', '능동적 학습 4원칙 — 예상 답 먼저, 사례 적용, 1페이지 요약') +
      '</div>';
    h += '</div>';
    return h;
  }
  function toolCard(href, title, desc) {
    return '<a class="card stage-card" href="' + href + '" style="text-decoration:none;color:inherit"><h3>' + esc(title) + '</h3><div class="meta">' + esc(desc) + '</div></a>';
  }
  function routeTitle(r) {
    var m = r.match(/^\/page\/([^/]+)/);
    if (m && PAGE[m[1]]) return PAGE[m[1]].nav;
    if (r.indexOf('/weeks') === 0) return '주차별 플랜';
    if (r.indexOf('/glossary') === 0) return '용어 학습';
    if (r === '/tracker') return '진도 체크리스트';
    return r;
  }

  // ---------------- 뷰: 마크다운 페이지 ----------------
  function viewPage(id) {
    var p = PAGE[id];
    if (!p) return viewNotFound();
    var h = '<div class="doc-layout"><article class="prose">';
    var groupLabel = { start: '시작', course: '커리큘럼', resources: '자료실' }[p.group];
    h += '<header class="page-head"><div class="eyebrow">' + esc(groupLabel) + '</div><h1>' + esc(p.title) + '</h1>' +
      '<a class="source-link" href="' + esc(p.source) + '" target="_blank" rel="noopener noreferrer">GitHub 원문: ' + esc(p.path) + '</a></header>';

    if (STAGE[id]) {
      var st = STAGE[id];
      h += '<div class="study-strip"><section class="card"><h2>진도 체크리스트</h2>' +
        '<div class="meter-row">' + meter('stage:' + id) + '<span data-meter-text="stage:' + id + '"></span></div>' +
        '<div class="btn-row" style="margin-top:8px"><a class="btn small" href="#/tracker/' + id + '">체크리스트에서 보기</a></div></section>';
      if (D.weeks[id]) {
        var nw = nextWeek(id);
        h += '<section class="card"><h2>주차별 플랜</h2><div class="meter-row">' + meter('weeks:' + id) + '<span data-meter-text="weeks:' + id + '"></span></div>' +
          '<div class="small-text" style="margin-top:6px">' + (nw ? '다음: <strong>' + esc(nw.label) + '</strong> ' + nw.topic : '모든 주차 완료 ✓') + '</div>' +
          '<div class="btn-row" style="margin-top:8px"><a class="btn small primary" href="#/weeks/' + id + '">주차 체크하기</a></div></section>';
      }
      h += '</div>';
      void st;
    }

    if (p.toc.length > 2) {
      h += '<details class="toc-mobile card"><summary>목차</summary>' + tocLinks(p) + '</details>';
    }
    h += p.html;

    // 이전/다음
    var idx = COURSE.indexOf(id);
    if (idx >= 0) {
      h += '<nav class="pager" aria-label="이전/다음 단계">';
      if (idx > 0) h += '<a href="#/page/' + COURSE[idx - 1] + '"><small>← 이전</small>' + esc(PAGE[COURSE[idx - 1]].nav) + '</a>';
      if (idx < COURSE.length - 1) h += '<a class="next" href="#/page/' + COURSE[idx + 1] + '"><small>다음 →</small>' + esc(PAGE[COURSE[idx + 1]].nav) + '</a>';
      h += '</nav>';
    }
    h += '</article>';
    if (p.toc.length > 2) h += '<aside class="toc" aria-label="목차"><h2>목차</h2>' + tocLinks(p) + '</aside>';
    h += '</div>';
    return h;
  }
  function tocLinks(p) {
    return p.toc.filter(function (t) { return t.level <= 3; }).map(function (t) {
      return '<a class="l' + t.level + '" href="#/page/' + p.id + '/' + encodeURIComponent(t.slug) + '">' + esc(t.text) + '</a>';
    }).join('');
  }

  // ---------------- 뷰: 진도 체크리스트 ----------------
  function viewTracker() {
    var tp = PAGE.tracker;
    var h = '<div class="wrap">';
    h += '<header class="page-head"><div class="eyebrow">progress-tracker.md</div><h1>' + esc(tp.title.replace(/^[^\p{L}\p{N}]+/u, '')) + '</h1><p class="lede">' + esc(tp.summary) + '</p></header>';
    if (!storageOk) h += '<p class="notice">이 브라우저에서 저장소(localStorage)를 사용할 수 없어 진도가 새로고침 후 사라집니다.</p>';
    h += '<section class="card"><div class="grid cols-2" style="align-items:center">' +
      '<div><div class="muted small-text">전체 진행률 (Orientation → 1학기 → 2학기 → 3학기 → 4학기 → 캡스톤)</div><div class="big-stat"><span data-meter-text="overall-stages"></span> <small>단계 완료</small></div></div>' +
      '<div><div class="meter-row"><span data-meter-text="overall-items"></span></div>' + meter('overall', 'big') +
      '<div class="small-text muted" style="margin-top:8px">커밋 메시지 태그: <span class="commit-tag" data-meter-text="overall-tag"></span> <button class="btn small" type="button" data-action="copy-tag">복사</button></div></div>' +
      '</div></section>';

    D.tracker.forEach(function (s) {
      h += '<section class="card stage" id="stage-' + s.id + '"><div class="stage-head"><h2><a href="#/page/' + s.pageId + '" style="color:inherit;text-decoration:none">' + esc(s.heading) + '</a></h2>' +
        (s.hasDate ? '<label class="date-field">완료일 <input type="date" data-date="' + s.id + '" value="' + esc(state.dates[s.id] || '') + '"></label>' : '') + '</div>' +
        '<div class="meter-row" style="margin-bottom:6px">' + meter('stage:' + s.id) + '<span data-meter-text="stage:' + s.id + '"></span></div>' +
        s.items.map(function (it) { return checkItem(it.key, it.html); }).join('') +
        '<div class="btn-row" style="margin-top:8px"><a class="btn small" href="#/page/' + s.pageId + '">계획서 보기</a>' +
        (D.weeks[s.pageId] ? '<a class="btn small" href="#/weeks/' + s.pageId + '">주차별 플랜</a>' : '') + '</div></section>';
    });

    h += '<section class="card"><h2 style="font-size:1.05rem">백업 · 복원</h2>' +
      '<p class="small-text muted">진도는 이 브라우저의 localStorage에만 저장됩니다. 다른 기기로 옮기거나 브라우저 데이터를 지우기 전에 내보내기로 백업하세요.</p>' +
      '<div class="btn-row"><button class="btn" type="button" data-action="export">진도 내보내기 (JSON)</button>' +
      '<label class="btn">진도 가져오기<input type="file" accept="application/json,.json" data-action="import" hidden></label>' +
      '<button class="btn" type="button" data-action="reset">모두 초기화</button></div></section>';
    h += '</div>';
    return h;
  }

  // ---------------- 뷰: 주차별 플랜 ----------------
  function viewWeeks(sid) {
    if (!D.weeks[sid]) sid = (currentStage() && D.weeks[currentStage().pageId]) ? currentStage().pageId : 's1';
    var w = D.weeks[sid];
    var p = PAGE[sid];
    var nw = nextWeek(sid);
    var h = '<div class="wrap"><header class="page-head"><div class="eyebrow">주차별 플랜</div><h1>' + esc(p.title) + '</h1>' +
      (p.summary ? '<p class="lede">' + esc(p.summary) + '</p>' : '') + '</header>';
    h += '<div class="tabs" role="tablist">' + SEMS.map(function (s) {
      return '<a class="btn small" role="tab" href="#/weeks/' + s + '" aria-pressed="' + (s === sid) + '" aria-selected="' + (s === sid) + '">' + esc(shortName(s)) + ' <span class="muted" data-meter-text="weeks:' + s + '"></span></a>';
    }).join('') + '</div>';
    h += '<section class="card" style="margin-bottom:14px"><div class="meter-row"><span>' + esc(w.heading) + '</span>' + meter('weeks:' + sid) + '<span data-meter-text="weeks:' + sid + '"></span></div>' +
      '<p class="small-text muted" style="margin:8px 0 0">주당 5~7시간 기준 8~10주. 한 주를 끝내면 체크하세요. 강의 링크는 <a href="#/page/' + sid + '/핵심-코스">핵심 코스</a> 표에 있습니다.</p></section>';
    h += '<ol class="week-list">' + w.weeks.map(function (x) {
      var done = isChecked(x.key);
      var isNext = nw && nw.key === x.key;
      return '<li><label class="week' + (done ? ' is-done' : '') + (isNext ? ' is-next' : '') + '">' +
        '<span class="check" style="padding:0"><input type="checkbox" data-key="' + x.key + '"' + (done ? ' checked' : '') + ' aria-label="' + esc(x.label) + ' 완료"></span>' +
        '<span class="wk">' + esc(x.label) + '</span><span class="wt">' + x.topic + (isNext ? '<span class="tag now">이번 주</span>' : '') + '</span>' +
        '<span class="wc">' + x.content + '</span></label></li>';
    }).join('') + '</ol>';
    h += '<div class="btn-row" style="margin-top:18px"><a class="btn" href="#/page/' + sid + '">강의계획서 전체 보기</a><a class="btn" href="#/tracker/' + sid + '">이 학기 체크리스트</a></div>';
    h += '</div>';
    return h;
  }

  // ---------------- 뷰: 용어 (카드 / 퀴즈 / 목록) ----------------
  var G = { section: 'all', dir: 'ko', onlyUnknown: false, deck: [], idx: 0, flipped: false, quiz: null };
  function pool() {
    return D.glossary.terms.filter(function (t) {
      return (G.section === 'all' || t.section === G.section) && (!G.onlyUnknown || !state.known[t.id]);
    });
  }
  function rebuildDeck(shuffled) {
    var p = pool();
    G.deck = (shuffled ? shuffle(p) : p).map(function (t) { return t.id; });
    G.idx = 0; G.flipped = false;
  }
  var TERM = {};
  D.glossary.terms.forEach(function (t) { TERM[t.id] = t; });

  function glossaryControls(mode) {
    var h = '<div class="tabs">' + [['cards', '플래시카드'], ['quiz', '퀴즈'], ['list', '검색·목록']].map(function (m) {
      return '<a class="btn small" href="#/glossary/' + m[0] + '" aria-pressed="' + (m[0] === mode) + '">' + m[1] + '</a>';
    }).join('') + '</div>';
    h += '<div class="controls">';
    h += '<select data-g="section" aria-label="학기 범위"><option value="all">전체 학기</option>' + D.glossary.sections.map(function (s) {
      return '<option value="' + esc(s) + '"' + (G.section === s ? ' selected' : '') + '>' + esc(s) + '</option>';
    }).join('') + '</select>';
    if (mode !== 'list') {
      h += '<div class="btn-row" role="group" aria-label="방향"><button class="btn small" type="button" data-g-dir="ko" aria-pressed="' + (G.dir === 'ko') + '">한 → 영</button>' +
        '<button class="btn small" type="button" data-g-dir="en" aria-pressed="' + (G.dir === 'en') + '">영 → 한</button></div>';
    }
    if (mode === 'cards') {
      h += '<label class="check" style="padding:4px"><input type="checkbox" data-g="unknown"' + (G.onlyUnknown ? ' checked' : '') + '><span>모르는 것만</span></label>';
    }
    if (mode === 'list') h += '<input type="search" data-g="search" placeholder="한국어 또는 영어로 검색" aria-label="용어 검색">';
    h += '</div>';
    return h;
  }

  function viewGlossary(mode) {
    if (['cards', 'quiz', 'list'].indexOf(mode) < 0) mode = 'cards';
    var known = Object.keys(state.known).filter(function (k) { return state.known[k] && TERM[k]; }).length;
    var h = '<div class="wrap"><header class="page-head"><div class="eyebrow">resources/glossary-kr-en.md</div><h1>핵심 용어 한/영 학습</h1>' +
      '<p class="lede">영어 강의(MIT·Wharton 등)와 한국어 강의(KOCW)를 오갈 때 헷갈리지 않도록 — 총 ' + D.glossary.terms.length + '개 용어, 외운 용어 ' + known + '개.</p></header>';
    h += glossaryControls(mode) + '<div id="gbody"></div>';
    h += '<p class="small-text muted" style="margin-top:20px">원문 표는 <a href="#/page/glossary-doc">용어 대조표 (원문)</a>에서 볼 수 있습니다.</p></div>';
    return h;
  }

  function renderGlossaryBody(mode) {
    var el = document.getElementById('gbody');
    if (!el) return;
    if (mode === 'list') return renderTermList(el, '');
    if (mode === 'quiz') return renderQuiz(el);
    renderCards(el);
  }

  function renderCards(el) {
    if (!G.deck.length || G.deck.some(function (id) { return !TERM[id]; })) rebuildDeck(false);
    if (!G.deck.length) {
      el.innerHTML = '<div class="card"><p>이 범위에 남은 카드가 없습니다. ' + (G.onlyUnknown ? '모두 외웠어요! "모르는 것만"을 해제하거나 범위를 바꿔보세요.' : '') + '</p></div>';
      return;
    }
    if (G.idx >= G.deck.length) G.idx = 0;
    var t = TERM[G.deck[G.idx]];
    var front = G.dir === 'ko' ? { lang: '한국어', term: t.ko } : { lang: 'English', term: t.en };
    var back = G.dir === 'ko' ? { lang: 'English', term: t.en } : { lang: '한국어', term: t.ko };
    var isKnown = !!state.known[t.id];
    var badge = isKnown ? '<span class="tag done known-badge">외움</span>' : '';
    el.innerHTML =
      '<div class="flashcard-wrap"><button type="button" class="flashcard' + (G.flipped ? ' flipped' : '') + '" data-action="flip" aria-label="카드 뒤집기. 앞면: ' + esc(front.term) + '">' +
      '<span class="face front">' + badge + '<span class="lang">' + front.lang + '</span><span class="term">' + esc(front.term) + '</span><span class="sec">' + esc(t.section) + '</span></span>' +
      '<span class="face back" aria-hidden="' + !G.flipped + '">' + badge + '<span class="lang">' + back.lang + '</span><span class="term">' + esc(back.term) + '</span><span class="sec">' + esc(front.term) + '</span></span>' +
      '</button></div>' +
      '<div class="card-nav"><button class="btn" type="button" data-action="prev" aria-label="이전 카드">←</button>' +
      '<span class="card-count">' + (G.idx + 1) + ' / ' + G.deck.length + '</span>' +
      '<button class="btn" type="button" data-action="next" aria-label="다음 카드">→</button></div>' +
      '<div class="card-nav"><button class="btn" type="button" data-action="flip">뒤집기</button>' +
      '<button class="btn" type="button" data-action="shuffle">섞기</button>' +
      '<button class="btn' + (isKnown ? '' : ' primary') + '" type="button" data-action="known">' + (isKnown ? '외움 취소' : '외웠어요') + '</button></div>' +
      '<p class="kbd-hint">키보드: Space 뒤집기 · ← → 이동 · K 외웠어요</p>';
  }

  function newQuiz() {
    var p = pool().filter(function () { return true; });
    var all = D.glossary.terms;
    var qs = shuffle(p).slice(0, Math.min(10, p.length)).map(function (t) {
      var ans = G.dir === 'ko' ? t.en : t.ko;
      var others = shuffle(all.filter(function (o) { return o.id !== t.id; })).map(function (o) { return G.dir === 'ko' ? o.en : o.ko; });
      var opts = [ans];
      for (var i = 0; i < others.length && opts.length < 4; i++) if (opts.indexOf(others[i]) < 0) opts.push(others[i]);
      return { id: t.id, prompt: G.dir === 'ko' ? t.ko : t.en, answer: ans, options: shuffle(opts), picked: null };
    });
    G.quiz = { qs: qs, i: 0, score: 0, dir: G.dir, section: G.section };
  }
  function renderQuiz(el) {
    var Q = G.quiz;
    if (!Q || Q.dir !== G.dir || Q.section !== G.section) { newQuiz(); Q = G.quiz; }
    if (!Q.qs.length) { el.innerHTML = '<div class="card"><p>이 범위에 용어가 없습니다.</p></div>'; return; }
    if (Q.i >= Q.qs.length) {
      var wrong = Q.qs.filter(function (q) { return q.picked !== q.answer; });
      el.innerHTML = '<section class="card"><div class="eyebrow">결과</div><div class="big-stat" style="margin:6px 0 12px">' + Q.score + ' <small>/ ' + Q.qs.length + '</small></div>' +
        (wrong.length ? '<h3 style="font-size:1rem">다시 볼 용어</h3><div class="table-wrap"><table class="term-table"><tbody>' + wrong.map(function (q) {
          var t = TERM[q.id];
          return '<tr><td>' + esc(t.ko) + '</td><td>' + esc(t.en) + '</td></tr>';
        }).join('') + '</tbody></table></div>' : '<p>전부 맞혔습니다! 👏</p>') +
        '<div class="btn-row"><button class="btn primary" type="button" data-action="quiz-restart">다시 풀기</button><a class="btn" href="#/glossary/cards">카드로 복습</a></div></section>';
      return;
    }
    var q = Q.qs[Q.i];
    var answered = q.picked !== null;
    el.innerHTML = '<section class="card"><div class="meter-row"><span>문제 ' + (Q.i + 1) + ' / ' + Q.qs.length + '</span><div class="meter"><span style="width:' + pct(Q.i, Q.qs.length) + '%"></span></div><span>점수 ' + Q.score + '</span></div>' +
      '<div class="muted small-text" style="margin-top:12px">' + (Q.dir === 'ko' ? '영어 용어를 고르세요' : '한국어 용어를 고르세요') + '</div>' +
      '<div class="quiz-q">' + esc(q.prompt) + '</div><div class="choices">' + q.options.map(function (o, k) {
        var cls = '';
        if (answered) { if (o === q.answer) cls = ' correct'; else if (o === q.picked) cls = ' wrong'; }
        return '<button type="button" class="choice' + cls + '" data-choice="' + k + '"' + (answered ? ' disabled' : '') + '>' + (k + 1) + '. ' + esc(o) + '</button>';
      }).join('') + '</div>' +
      '<div class="quiz-feedback ' + (answered ? (q.picked === q.answer ? 'ok' : 'no') : '') + '" aria-live="polite">' +
      (answered ? (q.picked === q.answer ? '정답!' : '오답 — 정답: ' + esc(q.answer)) : '') + '</div>' +
      '<div class="btn-row">' + (answered ? '<button class="btn primary" type="button" data-action="quiz-next">' + (Q.i + 1 < Q.qs.length ? '다음 문제' : '결과 보기') + '</button>' : '') +
      '<button class="btn" type="button" data-action="quiz-restart">새로 시작</button></div>' +
      '<p class="kbd-hint">키보드: 1–4 선택 · Enter 다음</p></section>';
    if (answered) { var nb = el.querySelector('[data-action="quiz-next"]'); if (nb) nb.focus(); }
  }

  function renderTermList(el, q) {
    q = (q || '').trim().toLowerCase();
    var terms = D.glossary.terms.filter(function (t) {
      return (G.section === 'all' || t.section === G.section) && (!q || t.ko.toLowerCase().indexOf(q) >= 0 || t.en.toLowerCase().indexOf(q) >= 0);
    });
    var bySec = {};
    terms.forEach(function (t) { (bySec[t.section] = bySec[t.section] || []).push(t); });
    var h = '';
    Object.keys(bySec).forEach(function (s) {
      h += '<h2 style="font-size:1.05rem;margin:18px 0 8px">' + esc(s) + '</h2><div class="table-wrap"><table class="term-table"><thead><tr><th>한국어</th><th>영어</th><th style="width:4.5em">외움</th></tr></thead><tbody>' +
        bySec[s].map(function (t) {
          return '<tr><td>' + esc(t.ko) + '</td><td>' + esc(t.en) + '</td><td><label class="check" style="padding:0"><input type="checkbox" data-known="' + t.id + '"' + (state.known[t.id] ? ' checked' : '') + ' aria-label="' + esc(t.ko) + ' 외움"></label></td></tr>';
        }).join('') + '</tbody></table></div>';
    });
    el.innerHTML = h || '<div class="card"><p>검색 결과가 없습니다.</p></div>';
  }

  function viewNotFound() {
    return '<div class="wrap"><div class="card"><h1>페이지를 찾을 수 없습니다</h1><p><a href="#/">대시보드로 돌아가기</a></p></div></div>';
  }

  // ---------------- 라우터 ----------------
  var current = { view: '', id: '' };
  function parse() {
    var raw = location.hash.replace(/^#/, '');
    try { raw = decodeURIComponent(raw); } catch (e) { /* 그대로 사용 */ }
    raw = raw || '/';
    var parts = raw.split('/').filter(Boolean);
    return { raw: raw, parts: parts };
  }
  function scrollToAnchor(anchor) {
    var target = anchor ? document.getElementById(anchor) : null;
    if (target) target.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
  }

  function route() {
    var r = parse();
    var v = r.parts[0] || 'home';
    var arg = r.parts[1] || '';
    var anchor = r.parts.slice(2).join('/');
    closeNav();

    // 같은 문서 안의 앵커 이동은 다시 그리지 않음
    if (v === 'page' && current.view === 'page' && current.id === arg && arg !== 'tracker') { scrollToAnchor(anchor); return; }

    var html, routeKey = v, title = '';
    if (v === 'home') { html = viewHome(); routeKey = 'home'; title = '대시보드'; }
    else if (v === 'page' && arg === 'tracker') { location.replace('#/tracker'); return; }
    else if (v === 'page') { html = viewPage(arg); routeKey = 'page/' + arg; title = PAGE[arg] ? PAGE[arg].nav : ''; }
    else if (v === 'tracker') { html = viewTracker(); routeKey = 'tracker'; title = '진도 체크리스트'; anchor = arg ? 'stage-' + arg : ''; }
    else if (v === 'weeks') { html = viewWeeks(arg); routeKey = 'weeks'; title = '주차별 플랜'; }
    else if (v === 'glossary') { if (['cards', 'quiz', 'list'].indexOf(arg) < 0) arg = 'cards'; html = viewGlossary(arg); routeKey = 'glossary/' + arg; title = '용어 학습'; }
    else { html = viewNotFound(); }

    current = { view: v, id: arg };
    main.innerHTML = html;
    main.querySelectorAll('input[type="checkbox"][data-key]').forEach(function (cb) { cb.checked = isChecked(cb.getAttribute('data-key')); });
    if (v === 'glossary') renderGlossaryBody(arg);
    markActive(routeKey);
    refreshMeters();
    document.title = (title ? title + ' · ' : '') + '인사조직관리 스터디';
    if (v !== 'home') { state.last = r.raw; save(); }
    scrollToAnchor(anchor);
    if (!anchor) main.focus({ preventScroll: true });
  }

  // ---------------- 이벤트 ----------------
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.matches('input[type="checkbox"][data-key]')) {
      var key = t.getAttribute('data-key');
      if (t.checked) state.checks[key] = true; else delete state.checks[key];
      // 같은 키의 다른 체크박스 동기화
      document.querySelectorAll('input[data-key="' + key + '"]').forEach(function (o) { o.checked = t.checked; });
      // 단계 완료 시 완료일 자동 기록
      D.tracker.forEach(function (s) {
        if (s.hasDate && stageStats(s.id).complete && !state.dates[s.id]) {
          state.dates[s.id] = today();
          var inp = document.querySelector('input[data-date="' + s.id + '"]');
          if (inp) inp.value = state.dates[s.id];
        }
      });
      save();
      var wk = t.closest('.week');
      if (wk) {
        wk.classList.toggle('is-done', t.checked);
        // "이번 주" 표시 갱신
        if (current.view === 'weeks') { var y = window.scrollY; route(); window.scrollTo(0, y); return; }
      }
      refreshMeters();
      return;
    }
    if (t.matches('input[data-date]')) {
      var id = t.getAttribute('data-date');
      if (t.value) state.dates[id] = t.value; else delete state.dates[id];
      save();
      return;
    }
    if (t.matches('input[data-known]')) {
      var kid = t.getAttribute('data-known');
      if (t.checked) state.known[kid] = true; else delete state.known[kid];
      save();
      return;
    }
    if (t.matches('[data-g="section"]')) { G.section = t.value; G.quiz = null; rebuildDeck(false); rerenderGlossary(); return; }
    if (t.matches('[data-g="unknown"]')) { G.onlyUnknown = t.checked; rebuildDeck(false); rerenderGlossary(); return; }
    if (t.matches('input[type="file"][data-action="import"]')) { importFile(t.files && t.files[0]); t.value = ''; }
  });

  document.addEventListener('input', function (e) {
    if (e.target.matches('[data-g="search"]')) renderTermList(document.getElementById('gbody'), e.target.value);
  });

  function rerenderGlossary() { if (current.view === 'glossary') renderGlossaryBody(current.id); }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-action],[data-g-dir],[data-choice]');
    if (!b || b.tagName === 'INPUT') return;
    if (b.hasAttribute('data-g-dir')) {
      G.dir = b.getAttribute('data-g-dir'); G.flipped = false; G.quiz = null;
      document.querySelectorAll('[data-g-dir]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      rerenderGlossary(); return;
    }
    if (b.hasAttribute('data-choice')) { answerQuiz(+b.getAttribute('data-choice')); return; }
    var a = b.getAttribute('data-action');
    if (a === 'flip') { G.flipped = !G.flipped; var fc = document.querySelector('.flashcard'); if (fc) { fc.classList.toggle('flipped', G.flipped); var bk = fc.querySelector('.back'); if (bk) bk.setAttribute('aria-hidden', String(!G.flipped)); } }
    else if (a === 'next') { G.idx = (G.idx + 1) % G.deck.length; G.flipped = false; rerenderGlossary(); }
    else if (a === 'prev') { G.idx = (G.idx - 1 + G.deck.length) % G.deck.length; G.flipped = false; rerenderGlossary(); }
    else if (a === 'shuffle') { rebuildDeck(true); rerenderGlossary(); }
    else if (a === 'known') { toggleKnown(); }
    else if (a === 'quiz-next') { G.quiz.i++; rerenderGlossary(); }
    else if (a === 'quiz-restart') { newQuiz(); rerenderGlossary(); }
    else if (a === 'export') exportProgress();
    else if (a === 'reset') {
      if (window.confirm('체크리스트·주차·완료일·외운 용어 기록을 모두 지울까요? (되돌릴 수 없습니다)')) {
        var theme = state.theme; state = blank(); state.theme = theme; save(); route();
      }
    } else if (a === 'copy-tag') {
      var o = overall(), tag = '[' + o.stagesDone + '/' + o.stages + ']';
      try { navigator.clipboard.writeText(tag).then(function () { b.textContent = '복사됨'; setTimeout(function () { b.textContent = '복사'; }, 1500); }, function () {}); } catch (err) { /* 무시 */ }
    }
  });

  function toggleKnown() {
    var id = G.deck[G.idx];
    if (!id) return;
    if (state.known[id]) delete state.known[id]; else state.known[id] = true;
    save();
    if (G.onlyUnknown && state.known[id]) {
      G.deck.splice(G.idx, 1);
      if (G.idx >= G.deck.length) G.idx = 0;
      G.flipped = false;
    }
    rerenderGlossary();
  }
  function answerQuiz(k) {
    var Q = G.quiz; if (!Q) return;
    var q = Q.qs[Q.i]; if (!q || q.picked !== null) return;
    q.picked = q.options[k];
    if (q.picked === q.answer) Q.score++;
    rerenderGlossary();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
    if (current.view !== 'glossary' || e.metaKey || e.ctrlKey || e.altKey) return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'select' || tag === 'textarea') return;
    if (current.id === 'cards' && G.deck.length) {
      if (e.key === 'ArrowRight') { e.preventDefault(); G.idx = (G.idx + 1) % G.deck.length; G.flipped = false; rerenderGlossary(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); G.idx = (G.idx - 1 + G.deck.length) % G.deck.length; G.flipped = false; rerenderGlossary(); }
      else if (e.key === ' ' && tag !== 'button') { e.preventDefault(); G.flipped = !G.flipped; var fc = document.querySelector('.flashcard'); if (fc) fc.classList.toggle('flipped', G.flipped); }
      else if (e.key === 'k' || e.key === 'K') toggleKnown();
    } else if (current.id === 'quiz' && G.quiz) {
      if (/^[1-4]$/.test(e.key)) answerQuiz(+e.key - 1);
      else if (e.key === 'Enter' && tag !== 'button') { var q = G.quiz.qs[G.quiz.i]; if (q && q.picked !== null) { G.quiz.i++; rerenderGlossary(); } }
    }
  });

  // ---------------- 백업 ----------------
  function exportProgress() {
    var blob = new Blob([JSON.stringify({ app: 'hrcur', version: 1, exportedAt: new Date().toISOString(), checks: state.checks, dates: state.dates, known: state.known }, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'hr-curriculum-progress-' + today() + '.json';
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }
  function importFile(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var o = JSON.parse(reader.result);
        if (!o || o.app !== 'hrcur') throw new Error('형식이 다릅니다');
        state.checks = o.checks || {}; state.dates = o.dates || {}; state.known = o.known || {};
        save(); route();
        alert('진도를 가져왔습니다.');
      } catch (err) { alert('가져오기 실패: ' + err.message); }
    };
    reader.readAsText(file);
  }

  // ---------------- 모바일 메뉴 / 테마 ----------------
  var menuBtn = document.getElementById('menuBtn');
  function closeNav() { document.body.classList.remove('nav-open'); menuBtn.setAttribute('aria-expanded', 'false'); document.getElementById('scrim').hidden = true; }
  menuBtn.addEventListener('click', function () {
    var open = !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    document.getElementById('scrim').hidden = !open;
  });
  document.getElementById('scrim').addEventListener('click', closeNav);

  var themeBtn = document.getElementById('themeBtn');
  var ICONS = {
    auto: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
    light: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    dark: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="currentColor"/></svg>'
  };
  var THEME_LABEL = { auto: '시스템', light: '라이트', dark: '다크' };
  function applyTheme() {
    var t = state.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    themeBtn.innerHTML = ICONS[t] || ICONS.auto;
    themeBtn.title = '테마: ' + (THEME_LABEL[t] || '시스템') + ' (클릭하여 전환)';
    themeBtn.setAttribute('aria-label', themeBtn.title);
  }
  themeBtn.addEventListener('click', function () {
    var order = ['auto', 'light', 'dark'];
    state.theme = order[(order.indexOf(state.theme) + 1) % order.length];
    save(); applyTheme();
  });

  // ---------------- 시작 ----------------
  buildSidebar();
  applyTheme();
  window.addEventListener('hashchange', route);
  route();
})();
