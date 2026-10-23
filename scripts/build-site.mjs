#!/usr/bin/env node
// 학습 사이트 데이터 생성기 (docs/data/content.js)
//
// GitHub Pages는 /docs 폴더만 서비스하므로, 레포의 Markdown 원문을 사이트가 직접
// 읽을 수 없습니다. 이 스크립트가 Markdown을 읽어 HTML/JSON 데이터로 변환해
// docs/data/content.js 에 기록합니다. (외부 npm 의존성 없음, Node 18+)
//
// Markdown(README, 학기별 README, progress-tracker.md, resources/*.md)을 수정한 뒤
// 레포 루트에서 다시 실행하세요:
//
//     node scripts/build-site.mjs
//
// 그 다음 docs/data/content.js 변경분을 함께 커밋하면 사이트가 갱신됩니다.
// 로컬 미리보기:  python3 -m http.server 8000 --directory docs  →  http://localhost:8000

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'docs', 'data');
const REPO_BLOB = 'https://github.com/FriOct/hr-org-management-curriculum/blob/main/';

// 사이트에 포함할 페이지 (순서 = 내비게이션 순서)
const PAGES = [
  { id: 'intro', path: 'README.md', nav: '커리큘럼 소개', group: 'start' },
  { id: 'tracker', path: 'progress-tracker.md', nav: '진도 체크리스트', group: 'start' },
  { id: 'orientation', path: '00-orientation/README.md', nav: '오리엔테이션', group: 'course', short: 'OT' },
  { id: 's1', path: 'semester-1-organizational-behavior/README.md', nav: '1학기 · 조직행동론 기초', group: 'course', short: '1학기' },
  { id: 's2', path: 'semester-2-leadership-teams-design/README.md', nav: '2학기 · 리더십·팀·조직설계', group: 'course', short: '2학기' },
  { id: 's3', path: 'semester-3-hrm/README.md', nav: '3학기 · 인적자원관리', group: 'course', short: '3학기' },
  { id: 's4', path: 'semester-4-strategic-advanced/README.md', nav: '4학기 · 전략·협상·노사관계', group: 'course', short: '4학기' },
  { id: 'capstone', path: 'capstone/README.md', nav: '캡스톤 프로젝트', group: 'course', short: '캡스톤' },
  { id: 'textbooks', path: 'resources/open-textbooks.md', nav: '무료 원서 교재', group: 'resources' },
  { id: 'curricula', path: 'resources/university-curricula-comparison.md', nav: '대학 커리큘럼 비교', group: 'resources' },
  { id: 'certs', path: 'resources/certifications-and-exams.md', nav: '자격증·시험 지도', group: 'resources' },
  { id: 'glossary-doc', path: 'resources/glossary-kr-en.md', nav: '용어 대조표 (원문)', group: 'resources' },
];
const PATH_TO_ID = Object.fromEntries(PAGES.map((p) => [p.path, p.id]));
// progress-tracker.md 의 단계(## 헤딩) 순서 → 페이지 매핑
const STAGE_PAGES = ['orientation', 's1', 's2', 's3', 's4', 'capstone'];

// ---------- 유틸 ----------
function hash(str) {
  let h = 5381;
  for (const ch of str) h = ((h * 33) ^ ch.codePointAt(0)) >>> 0;
  return h.toString(36);
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripMd = (s) => s.replace(/`([^`]*)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').trim();
function slugify(text, used) {
  let base = stripMd(text).toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim().replace(/\s+/g, '-') || 'section';
  let slug = base, n = 1;
  while (used.has(slug)) slug = `${base}-${n++}`;
  used.add(slug);
  return slug;
}

// ---------- 링크 해석 ----------
function resolveHref(href, pagePath) {
  if (/^(https?:|mailto:)/i.test(href)) return { href, external: true };
  if (href.startsWith('#')) return { href: `#/page/${PATH_TO_ID[pagePath]}/${href.slice(1)}`, external: false };
  const [p, frag] = href.split('#');
  const target = posix.normalize(posix.join(posix.dirname(pagePath), p));
  if (PATH_TO_ID[target]) return { href: `#/page/${PATH_TO_ID[target]}${frag ? '/' + frag : ''}`, external: false };
  return { href: REPO_BLOB + target, external: true };
}

// ---------- 인라인 Markdown ----------
function inline(src, ctx) {
  const slots = [];
  const put = (html) => `\u0000${slots.push(html) - 1}\u0000`;
  let s = src;
  // 코드 스팬 (레포 내 .md 경로이면 사이트 링크로)
  s = s.replace(/`([^`]+)`/g, (_, code) => {
    const c = code.trim();
    const html = `<code>${esc(code)}</code>`;
    if (PATH_TO_ID[c]) return put(`<a href="#/page/${PATH_TO_ID[c]}">${html}</a>`);
    if (/^[\w./-]+\/$/.test(c) && PAGES.some((p) => p.path === c + 'README.md')) return put(`<a href="#/page/${PATH_TO_ID[c + 'README.md']}">${html}</a>`);
    if (/^\d\d-[\w-]+$|^semester-\d-[\w-]+$|^capstone$/.test(c) && PATH_TO_ID[c + '/README.md']) return put(`<a href="#/page/${PATH_TO_ID[c + '/README.md']}">${html}</a>`);
    return put(html);
  });
  // [text](href)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, href) => {
    const r = resolveHref(href, ctx.path);
    const attrs = r.external ? ' target="_blank" rel="noopener noreferrer" class="ext"' : '';
    return put(`<a href="${esc(r.href)}"${attrs}>${inlineText(text, slots)}</a>`);
  });
  // 맨 URL 자동 링크
  s = s.replace(/https?:\/\/[^\s<>|)\]]+/g, (url) => {
    let tail = '';
    while (/[.,;:]$/.test(url)) { tail = url.slice(-1) + tail; url = url.slice(0, -1); }
    const label = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '');
    return put(`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" class="ext" title="${esc(url)}">${esc(label)}</a>`) + tail;
  });
  return inlineText(s, slots);
}
function inlineText(s, slots) {
  let out = esc(s.replace(/\u0000(\d+)\u0000/g, (m) => m)) // keep placeholders
    .replace(/\*\*((?:[^*]|\*[^*]+\*)+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>');
  // 플레이스홀더 복원 (중첩 가능)
  for (let i = 0; i < 3; i++) out = out.replace(/\u0000(\d+)\u0000/g, (_, n) => slots[+n]);
  return out;
}

// ---------- 블록 Markdown ----------
function splitRow(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

function renderMarkdown(md, page) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const ctx = { path: page.path, id: page.id };
  const used = new Set();
  const toc = [];
  const out = [];
  let title = '';
  let i = 0;
  let section = '';

  const isBlockStart = (l) => /^(#{1,6}\s|```|>|\s*([-*]|\d+\.)\s|\|)/.test(l) || /^-{3,}\s*$/.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    // 펜스 코드
    if (line.startsWith('```')) {
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++]);
      i++;
      out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`);
      continue;
    }
    // 헤딩
    let m = line.match(/^(#{1,6})\s+(.*)$/);
    if (m) {
      const level = m[1].length;
      const text = m[2].trim();
      if (level === 1 && !title) { title = stripMd(text); i++; continue; }
      const slug = slugify(text, used);
      if (level === 2) section = stripMd(text);
      if (level <= 3) toc.push({ level, text: stripMd(text), slug });
      out.push(`<h${level} id="${slug}">${inline(text, ctx)}</h${level}>`);
      i++;
      continue;
    }
    // 수평선
    if (/^-{3,}\s*$/.test(line)) { out.push('<hr>'); i++; continue; }
    // 인용
    if (line.startsWith('>')) {
      const buf = [];
      while (i < lines.length && lines[i].startsWith('>')) buf.push(lines[i++].replace(/^>\s?/, ''));
      out.push(`<blockquote><p>${inline(buf.join(' '), ctx)}</p></blockquote>`);
      continue;
    }
    // 표
    if (line.trim().startsWith('|') && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
      const head = splitRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(splitRow(lines[i++]));
      const wide = head.length >= 4 ? ' wide' : '';
      const th = head.map((h) => `<th>${inline(h, ctx)}</th>`).join('');
      const tb = rows.map((r) => '<tr>' + head.map((h, k) =>
        `<td data-label="${esc(stripMd(h))}">${inline(r[k] ?? '', ctx)}</td>`).join('') + '</tr>').join('\n');
      out.push(`<div class="table-wrap${wide}"><table><thead><tr>${th}</tr></thead><tbody>\n${tb}\n</tbody></table></div>`);
      continue;
    }
    // 리스트
    if (/^\s*([-*]|\d+\.)\s/.test(line)) {
      const items = [];
      while (i < lines.length && (/^\s*([-*]|\d+\.)\s/.test(lines[i]) || (/^\s{2,}\S/.test(lines[i]) && items.length))) {
        const l = lines[i++];
        const lm = l.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
        if (lm) items.push({ indent: lm[1].length, ordered: /\d/.test(lm[2]), text: lm[3] });
        else items[items.length - 1].text += ' ' + l.trim();
      }
      out.push(renderList(items, 0, items.length, ctx, section));
      continue;
    }
    // 문단
    const buf = [];
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) buf.push(lines[i++].trim());
    if (!buf.length) { buf.push(lines[i++].trim()); }
    out.push(`<p>${inline(buf.join(' '), ctx)}</p>`);
  }
  return { title, html: out.join('\n'), toc };
}

function renderList(items, from, to, ctx, section) {
  const base = items[from].indent;
  const tag = items[from].ordered ? 'ol' : 'ul';
  let html = '';
  let hasTask = false;
  let k = from;
  while (k < to) {
    const it = items[k];
    let end = k + 1;
    while (end < to && items[end].indent > base) end++;
    const child = end > k + 1 ? renderList(items, k + 1, end, ctx, section) : '';
    const tm = it.text.match(/^\[( |x|X)\]\s+(.*)$/);
    if (tm) {
      hasTask = true;
      const key = `task:${ctx.id}:${hash(section + '|' + stripMd(tm[2]))}`;
      html += `<li class="task"><label><input type="checkbox" data-key="${key}"${tm[1] !== ' ' ? ' data-default="1"' : ''}> <span>${inline(tm[2], ctx)}</span></label>${child}</li>`;
    } else {
      html += `<li>${inline(it.text, ctx)}${child}</li>`;
    }
    k = end;
  }
  return `<${tag}${hasTask ? ' class="tasks"' : ''}>${html}</${tag}>`;
}

// ---------- 구조화 데이터 ----------
function sectionsByH2(md) {
  const res = [];
  let cur = null;
  for (const line of md.split('\n')) {
    const m = line.match(/^##\s+(.*)$/);
    if (m) { cur = { heading: m[1].trim(), lines: [] }; res.push(cur); }
    else if (cur) cur.lines.push(line);
  }
  return res;
}

function parseTracker(md) {
  const stages = [];
  for (const sec of sectionsByH2(md)) {
    const items = sec.lines.map((l) => l.match(/^\s*-\s+\[( |x|X)\]\s+(.*)$/)).filter(Boolean);
    if (!items.length) continue;
    const stageIdx = stages.length;
    const pageId = STAGE_PAGES[stageIdx];
    const stage = { id: pageId, title: stripMd(sec.heading).replace(/^[0-9]\uFE0F?\u20E3/u, '').replace(/^[^\p{L}\p{N}]+/u, '').trim(), heading: stripMd(sec.heading), pageId, items: [], hasDate: false };
    for (const m of items) {
      const raw = m[2].trim();
      if (/^완료일/.test(raw)) { stage.hasDate = true; continue; }
      stage.items.push({ key: `tracker:${pageId}:${hash(stripMd(raw))}`, html: inline(raw, { path: 'progress-tracker.md' }), text: stripMd(raw) });
    }
    stages.push(stage);
  }
  return stages;
}

function parseWeeks(md, page) {
  for (const sec of sectionsByH2(md)) {
    if (!/주차/.test(sec.heading)) continue;
    const rows = sec.lines.filter((l) => l.trim().startsWith('|')).map(splitRow);
    // 헤더 + 구분선 제거
    const body = rows.slice(2);
    return {
      heading: stripMd(sec.heading),
      columns: rows[0] || [],
      weeks: body.map((r) => {
        const n = parseInt(r[0], 10);
        return { n, label: stripMd(r[0]), topic: inline(r[1] || '', page), content: inline(r[2] || '', page), key: `week:${page.id}:${n}` };
      }),
    };
  }
  return null;
}

function parseGlossary(md) {
  const terms = [];
  const sections = [];
  for (const sec of sectionsByH2(md)) {
    const rows = sec.lines.filter((l) => l.trim().startsWith('|')).map(splitRow).slice(2);
    if (!rows.length) continue;
    const name = stripMd(sec.heading);
    sections.push(name);
    for (const r of rows) {
      if (!r[0] || !r[1]) continue;
      terms.push({ id: hash(r[0] + '|' + r[1]), ko: stripMd(r[0]), en: stripMd(r[1]), section: name });
    }
  }
  return { sections, terms };
}

// ---------- 빌드 ----------
const pages = [];
const weeks = {};
let tracker = [];
let glossary = null;
const meta = {};

for (const p of PAGES) {
  const md = readFileSync(join(ROOT, p.path), 'utf8');
  const r = renderMarkdown(md, p);
  const bq = md.match(/^>\s?(.*)$/m);
  pages.push({ ...p, title: r.title, summary: bq ? stripMd(bq[1]) : '', html: r.html, toc: r.toc, source: REPO_BLOB + p.path });
  const w = parseWeeks(md, p);
  if (w && /^s\d$/.test(p.id)) weeks[p.id] = w;
  if (p.id === 'tracker') tracker = parseTracker(md);
  if (p.id === 'glossary-doc') glossary = parseGlossary(md);
}

// README 로드맵 표에서 학기별 예상 기간
const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
for (const row of readme.split('\n').filter((l) => /^\|\s*\*\*(\d학기|졸업)\*\*/.test(l)).map(splitRow)) {
  const key = row[0].includes('졸업') ? 'capstone' : 's' + row[0].match(/\d/)[0];
  meta[key] = { topic: stripMd(row[1]), courses: stripMd(row[2]), duration: stripMd(row[3]) };
}

const data = { repo: 'FriOct/hr-org-management-curriculum', pages, tracker, weeks, glossary, meta };
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(
  join(OUT_DIR, 'content.js'),
  '// 자동 생성 파일 — 직접 수정하지 마세요. `node scripts/build-site.mjs` 로 다시 생성합니다.\n' +
  'window.SITE_DATA = ' + JSON.stringify(data, null, 1) + ';\n',
);

const nItems = tracker.reduce((a, s) => a + s.items.length, 0);
console.log(`pages: ${pages.length}, tracker stages: ${tracker.length} (${nItems} items), ` +
  `weekly plans: ${Object.keys(weeks).map((k) => `${k}=${weeks[k].weeks.length}`).join(' ')}, glossary terms: ${glossary.terms.length}`);
