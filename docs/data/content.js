// 자동 생성 파일 — 직접 수정하지 마세요. `node scripts/build-site.mjs` 로 다시 생성합니다.
window.SITE_DATA = {
 "repo": "FriOct/hr-org-management-curriculum",
 "pages": [
  {
   "id": "intro",
   "path": "README.md",
   "nav": "커리큘럼 소개",
   "group": "start",
   "title": "🎓 인사조직관리 오픈 커리큘럼 — Personal University of HR & Organizational Management",
   "summary": "컴퓨터공학 전공자가 MIT / Stanford / Wharton / Michigan / Harvard의 공개 강의와 국내 KOCW 강의를 엮어서, 실제로 경영대학 \"인사조직\" 트랙에 다니는 것처럼 스스로 짜본 4학기 커리큘럼입니다.",
   "html": "<blockquote><p>컴퓨터공학 전공자가 MIT / Stanford / Wharton / Michigan / Harvard의 공개 강의와 국내 KOCW 강의를 엮어서, 실제로 경영대학 &quot;인사조직&quot; 트랙에 다니는 것처럼 스스로 짜본 4학기 커리큘럼입니다.</p></blockquote>\n<hr>\n<h2 id=\"0-이-레포는-왜-존재하는가\">0. 이 레포는 왜 존재하는가</h2>\n<p>인사조직관리(HR &amp; Organizational Management)는 나무위키에서도 정의하듯 <a href=\"https://namu.wiki/w/%EC%9D%B8%EC%82%AC%EC%A1%B0%EC%A7%81%EA%B4%80%EB%A6%AC\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\">경영학의 하위 학문</a>으로, 심리학·사회학·경제학·인류학을 기반으로 삼는 학제간 연구 분야입니다. 회계나 재무처럼 숫자로 정답이 딱 떨어지지 않고, 그렇다고 완전히 감(感)으로 하는 것도 아닌, &quot;사람과 조직을 다루는 과학&quot;에 가깝습니다.</p>\n<p>전공자가 아니면 어디서부터 시작해야 할지 감이 안 오는 분야이기도 합니다. 그래서 이 레포는:</p>\n<ol><li><strong>MIT, Stanford, Wharton(UPenn), Michigan, Harvard</strong> 등이 무료로 공개한 대학 수준 강의만 골라서</li><li><strong>서울대·고려대 경영대학의 실제 커리큘럼 구조</strong>를 참고해 학습 순서를 짜고</li><li><strong>KOCW(한국 OCW)</strong>로 한국어 보강까지 더해서</li><li>컴공생이 4학기짜리 &quot;가상 전공&quot;을 밟는 기분으로 완주할 수 있게 만든 자기주도 학습 로드맵입니다.</li></ol>\n<p>전공 지식이 전혀 없다는 전제로 설계했으니, <a href=\"#/page/orientation\"><code>00-orientation</code></a>부터 순서대로 시작하면 됩니다.</p>\n<hr>\n<h2 id=\"1-인사조직관리-한-장으로-요약\">1. 인사조직관리, 한 장으로 요약</h2>\n<p>나무위키 문서 기준으로 이 학문은 크게 두 축으로 나뉩니다.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>축</th><th>세부 분야</th><th>핵심 질문</th></tr></thead><tbody>\n<tr><td data-label=\"축\"><strong>조직 (Organization)</strong></td><td data-label=\"세부 분야\">조직행동론(Organizational Behavior)</td><td data-label=\"핵심 질문\">개인·집단은 조직 안에서 왜 그렇게 행동하는가? (동기, 지각, 의사결정, 리더십, 조직문화)</td></tr>\n<tr><td data-label=\"축\"></td><td data-label=\"세부 분야\">조직구조론/조직이론(Organizational Theory)</td><td data-label=\"핵심 질문\">조직은 어떻게 설계·변화해야 하는가? (조직설계, 조직변화)</td></tr>\n<tr><td data-label=\"축\"><strong>인사 (Personnel)</strong></td><td data-label=\"세부 분야\">인적자원관리(HRM)</td><td data-label=\"핵심 질문\">사람을 어떻게 확보·개발·평가·보상·유지하는가?</td></tr>\n<tr><td data-label=\"축\"></td><td data-label=\"세부 분야\">노사관계론(Industrial Relations)</td><td data-label=\"핵심 질문\">노동자와 사용자의 관계는 법·제도적으로 어떻게 다뤄지는가?</td></tr>\n</tbody></table></div>\n<p>여기에 <strong>산업조직심리학·조직사회학·조직경제학</strong>이 이론적 뿌리를 제공합니다(실제로 하버드 경영대학원은 조직행동 박사과정을 사회학과와 공동 운영합니다). 이 레포의 4개 학기는 정확히 이 지도를 따라갑니다.</p>\n<pre><code>학기 1  조직행동론 기초        →  &quot;사람은 왜 그렇게 행동하는가&quot;\n학기 2  리더십·팀·조직설계     →  &quot;집단과 조직은 어떻게 움직이는가&quot;\n학기 3  인적자원관리(HRM)      →  &quot;사람을 어떻게 뽑고 키우고 보상하는가&quot;\n학기 4  전략·협상·데이터·노사관계 → &quot;실전에서 어떻게 적용하는가&quot;</code></pre>\n<hr>\n<h2 id=\"2-폴더-구조\">2. 폴더 구조</h2>\n<pre><code>hr-org-management-curriculum/\n├── README.md                              ← 지금 보는 파일\n├── 00-orientation/                        ← 시작 전 준비 (경영학 지도, 컴공생을 위한 비유, 학습법)\n├── semester-1-organizational-behavior/    ← 1학기: 조직행동론 기초\n├── semester-2-leadership-teams-design/    ← 2학기: 리더십·팀·조직설계\n├── semester-3-hrm/                        ← 3학기: 인적자원관리\n├── semester-4-strategic-advanced/         ← 4학기: 전략·협상·피플애널리틱스·노사관계\n├── capstone/                              ← 졸업 프로젝트: 실제 기업 조직 분석\n├── resources/\n│   ├── open-textbooks.md                  ← 무료 원서 교재 (OpenStax 등)\n│   ├── university-curricula-comparison.md ← 국내외 대학 커리큘럼 비교 분석 ★\n│   ├── certifications-and-exams.md        ← 공인노무사·PHR·SHRM 등 자격증 지도\n│   └── glossary-kr-en.md                  ← 핵심 용어 한/영 대조표\n└── progress-tracker.md                    ← 진도 체크리스트</code></pre>\n<p>각 학기 폴더의 <a href=\"#/page/intro\"><code>README.md</code></a>는 실제 대학 강의계획서(syllabus) 형식 — 학습목표, 선수지식, 핵심 코스, 주차별 계획, 과제 — 을 따릅니다.</p>\n<hr>\n<h2 id=\"3-전체-로드맵-요약\">3. 전체 로드맵 요약</h2>\n<blockquote><p>상세 강의 목록·링크는 각 학기 폴더 안 README를 참고하세요. 아래는 요약입니다.</p></blockquote>\n<div class=\"table-wrap wide\"><table><thead><tr><th>학기</th><th>주제</th><th>핵심 오픈 코스 (기관)</th><th>예상 기간</th></tr></thead><tbody>\n<tr><td data-label=\"학기\"><strong>1학기</strong></td><td data-label=\"주제\">조직행동론 기초</td><td data-label=\"핵심 오픈 코스 (기관)\">Stanford <code>Organizational Analysis</code> · MIT <code>15.341 Individuals, Groups, and Organizations</code> · IESE <code>Organizational Behavior</code></td><td data-label=\"예상 기간\">8~10주</td></tr>\n<tr><td data-label=\"학기\"><strong>2학기</strong></td><td data-label=\"주제\">리더십·팀·조직설계</td><td data-label=\"핵심 오픈 코스 (기관)\">MIT <code>15.311 Organizational Processes</code> · MIT <code>15.320 Strategic Organizational Design</code> · Michigan <code>Leading People and Teams</code> (4과목)</td><td data-label=\"예상 기간\">8~10주</td></tr>\n<tr><td data-label=\"학기\"><strong>3학기</strong></td><td data-label=\"주제\">인적자원관리(HRM)</td><td data-label=\"핵심 오픈 코스 (기관)\">MIT <code>15.660 Strategic HR Management</code> · Wharton <code>Managing Social and Human Capital</code></td><td data-label=\"예상 기간\">8~10주</td></tr>\n<tr><td data-label=\"학기\"><strong>4학기</strong></td><td data-label=\"주제\">전략·협상·데이터·노사관계</td><td data-label=\"핵심 오픈 코스 (기관)\">MIT <code>15.667 Negotiation and Conflict Management</code> · Wharton <code>People Analytics</code> · HarvardX <code>Exercising Leadership</code></td><td data-label=\"예상 기간\">8~10주</td></tr>\n<tr><td data-label=\"학기\"><strong>졸업</strong></td><td data-label=\"주제\">캡스톤 프로젝트</td><td data-label=\"핵심 오픈 코스 (기관)\">실제 기업 1곳을 골라 조직행동+인사제도+전략 렌즈로 분석 리포트 작성</td><td data-label=\"예상 기간\">2~3주</td></tr>\n</tbody></table></div>\n<p>총 소요 기간은 주당 5~7시간 투입 기준 <strong>약 8개월~1년</strong>입니다. 회사·학업과 병행한다면 학기 단위로 쉬어가도 무방합니다 — 어차피 등록금 내는 것도 아니니까요.</p>\n<hr>\n<h2 id=\"4-국내외-대학은-이-분야를-어떻게-나누는가-요약\">4. 국내외 대학은 이 분야를 어떻게 나누는가 (요약)</h2>\n<p>MIT Sloan, Stanford, Wharton, Michigan Ross, Harvard, 그리고 인사조직 분야에서 유일하게 단과대 전체가 노동·인사에 특화된 아이비리그 학교인 <strong>Cornell ILR School</strong>, 국내의 서울대·고려대·연세대 경영대학까지 비교해보면 놀랍도록 구조가 비슷합니다 — 거의 모든 학교가 &quot;①조직행동(심리 기반) ②인적자원관리(제도·실무) ③노사관계(법·제도)&quot;의 3두 체제를 쓰고 있습니다.</p>\n<p>자세한 비교표와 학교별 특징 분석은 <strong><a href=\"#/page/curricula\"><a href=\"#/page/curricula\"><code>resources/university-curricula-comparison.md</code></a></a></strong> 에 정리했습니다. 이 레포의 학기 구성은 그 분석 결과를 그대로 반영한 것입니다.</p>\n<hr>\n<h2 id=\"5-시작하는-법\">5. 시작하는 법</h2>\n<ol><li><a href=\"#/page/orientation\"><code>00-orientation/README.md</code></a>부터 읽기 (경영학 지도 + 컴공생을 위한 비유 + 학습 준비물)</li><li><a href=\"#/page/tracker\"><code>progress-tracker.md</code></a>를 열어 체크리스트로 사용하기</li><li><a href=\"#/page/s1\"><code>semester-1-organizational-behavior/README.md</code></a>로 이동해서 1주차부터 시작</li><li>매 학기가 끝나면 해당 폴더에 <strong>본인의 노트/요약을 직접 추가</strong>하기 — 강의 자료 자체를 복사해서 올리지 말고, 본인 언어로 정리한 내용만 커밋하는 것을 원칙으로 합니다 (저작권 유의사항은 아래 참고)</li></ol>\n<hr>\n<h2 id=\"6-저작권-및-이용-유의사항\">6. 저작권 및 이용 유의사항</h2>\n<ul><li>이 레포는 각 대학·플랫폼(MIT OCW, Coursera, edX, KOCW 등)이 공개한 강의로 <strong>연결(링크)</strong> 할 뿐, 강의 영상·PDF·읽기자료 원문을 포함하지 않습니다.</li><li>MIT OCW 자료는 <a href=\"https://ocw.mit.edu/help/terms-of-use/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\">CC BY-NC-SA</a> 라이선스이며, OpenStax 교재는 CC BY(-NC-SA) 라이선스입니다 — 개인 학습 목적의 열람은 자유롭지만 재배포 조건은 각 라이선스를 따로 확인하세요.</li><li>Coursera/edX 강의는 &quot;청강(audit)&quot;은 대부분 무료이나 수료증은 유료입니다. 이 레포의 링크는 모두 청강 기준으로 정리했습니다.</li><li><strong>비공개(private) 레포로 유지</strong>하고, 본인의 학습 노트·과제만 커밋하는 것을 권장합니다 (강의 슬라이드나 저작물 스캔본 업로드 금지).</li></ul>\n<hr>\n<h2 id=\"7-github에-올리기-private-repo로-push하는-법\">7. GitHub에 올리기 (Private Repo로 push하는 법)</h2>\n<p>이 폴더는 이미 <code>git init</code> + 첫 커밋까지 완료된 상태로 전달됩니다. 아래 순서대로 GitHub에 연결하세요.</p>\n<pre><code># 1. 압축 해제한 폴더로 이동\ncd hr-org-management-curriculum\n\n# 2. (git이 이미 초기화되어 있는지 확인)\ngit status\n\n# 3. GitHub 웹사이트에서 New repository → Private 선택 → 이름 입력 (예: hr-org-management-curriculum)\n#    ⚠️ &quot;Initialize with README&quot; 체크박스는 반드시 해제할 것 (이미 로컬에 커밋이 있으므로)\n\n# 4. 원격 저장소 연결 후 push\ngit remote add origin https://github.com/&lt;본인계정&gt;/&lt;레포이름&gt;.git\ngit branch -M main\ngit push -u origin main</code></pre>\n<p>GitHub CLI(<code>gh</code>)가 설치되어 있다면 더 간단합니다:</p>\n<pre><code>gh repo create hr-org-management-curriculum --private --source=. --remote=origin --push</code></pre>\n<p>이후로는 학습 노트를 커밋할 때마다 <code>git add . &amp;&amp; git commit -m &quot;1학기 3주차 노트&quot;</code> 처럼 실제 학기를 다니듯 기록을 쌓아가면 됩니다.</p>\n<hr>\n<h2 id=\"부록-나무위키-원문-요약-참고\">부록: 나무위키 원문 요약 (참고)</h2>\n<p>이 커리큘럼 설계의 출발점이 된 <a href=\"https://namu.wiki/w/%EC%9D%B8%EC%82%AC%EC%A1%B0%EC%A7%81%EA%B4%80%EB%A6%AC\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\">나무위키 &quot;인사조직관리&quot; 문서</a>는 이 분야를 조직행동론·조직구조론·인적자원관리·노사관계론 네 갈래로 나누고, 기초 학문으로 산업조직심리학·조직경제학·조직사회학을, 관련 자격증으로 공인노무사·PHR/SPHR/GPHR·SHRM-CP/SCP·경영지도사를 언급합니다. 이 레포의 4학기 구성과 <a href=\"#/page/certs\"><code>resources/certifications-and-exams.md</code></a>는 이 분류를 그대로 따릅니다.</p>",
   "toc": [
    {
     "level": 2,
     "text": "0. 이 레포는 왜 존재하는가",
     "slug": "0-이-레포는-왜-존재하는가"
    },
    {
     "level": 2,
     "text": "1. 인사조직관리, 한 장으로 요약",
     "slug": "1-인사조직관리-한-장으로-요약"
    },
    {
     "level": 2,
     "text": "2. 폴더 구조",
     "slug": "2-폴더-구조"
    },
    {
     "level": 2,
     "text": "3. 전체 로드맵 요약",
     "slug": "3-전체-로드맵-요약"
    },
    {
     "level": 2,
     "text": "4. 국내외 대학은 이 분야를 어떻게 나누는가 (요약)",
     "slug": "4-국내외-대학은-이-분야를-어떻게-나누는가-요약"
    },
    {
     "level": 2,
     "text": "5. 시작하는 법",
     "slug": "5-시작하는-법"
    },
    {
     "level": 2,
     "text": "6. 저작권 및 이용 유의사항",
     "slug": "6-저작권-및-이용-유의사항"
    },
    {
     "level": 2,
     "text": "7. GitHub에 올리기 (Private Repo로 push하는 법)",
     "slug": "7-github에-올리기-private-repo로-push하는-법"
    },
    {
     "level": 2,
     "text": "부록: 나무위키 원문 요약 (참고)",
     "slug": "부록-나무위키-원문-요약-참고"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/README.md"
  },
  {
   "id": "tracker",
   "path": "progress-tracker.md",
   "nav": "진도 체크리스트",
   "group": "start",
   "title": "📋 진도 체크리스트",
   "summary": "학기가 끝날 때마다 여기에 체크하고, 날짜를 함께 기록하세요. 커밋 기록이 곧 학적부입니다.",
   "html": "<blockquote><p>학기가 끝날 때마다 여기에 체크하고, 날짜를 함께 기록하세요. 커밋 기록이 곧 학적부입니다.</p></blockquote>\n<hr>\n<h2 id=\"0-orientation\">0️⃣ Orientation</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1rsdm7z\"> <span>경영학 지도 읽기</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1bgxjv1\"> <span>학습 준비물 세팅 (Coursera/edX/KOCW 계정)</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:15od35p\"> <span>완료일: ____</span></label></li></ul>\n<h2 id=\"1학기-조직행동론-기초\">1학기 — 조직행동론 기초</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:19rp50f\"> <span>IESE <code>Organizational Behavior: How to Manage People</code></span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:j0tvcl\"> <span>MIT 15.341 Individuals, Groups, and Organizations</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:117gqsf\"> <span>Stanford <code>Organizational Analysis</code></span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:kxyv31\"> <span>KOCW 조직행동론</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:wcfte5\"> <span>OpenStax OB Ch.1, 2, 4, 6, 7, 9</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:12i2plh\"> <span>미니 케이스 분석 작성</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:x3azya\"> <span>완료일: ____</span></label></li></ul>\n<h2 id=\"2학기-리더십팀조직설계\">2학기 — 리더십·팀·조직설계</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:13q4xbk\"> <span>MIT 15.311 Organizational Processes</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:vx99dh\"> <span>MIT 15.320 Strategic Organizational Design</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:17amsth\"> <span>Michigan <code>Leading People and Teams</code> (4개 코스 + 캡스톤)</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1fffk6v\"> <span>KOCW 리더십론</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:au5kgn\"> <span>OpenStax OB Ch.10, 11, 14, 15, 16</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:13js83t\"> <span>3-렌즈 분석 리포트 작성</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:6qt3zw\"> <span>완료일: ____</span></label></li></ul>\n<h2 id=\"3학기-인적자원관리\">3학기 — 인적자원관리</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1tqmxo2\"> <span>Wharton <code>Managing Social and Human Capital</code></span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1u98ueh\"> <span>MIT 15.660 Strategic HR Management</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1g41z8d\"> <span>KOCW 인적자원관리 (2개 이상)</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:19gjmt3\"> <span>Beginning Management of Human Resources</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:va5ola\"> <span>채용~평가~보상 미니 프로젝트</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1md6smk\"> <span>완료일: ____</span></label></li></ul>\n<h2 id=\"4학기-전략협상피플애널리틱스노사관계\">4학기 — 전략·협상·피플애널리틱스·노사관계</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1l0ytlb\"> <span>MIT 15.667 Negotiation and Conflict Management</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:iwiy0z\"> <span>Wharton People Analytics</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1hr1yef\"> <span>HarvardX Exercising Leadership</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1p47r98\"> <span>Cornell ILR 커리큘럼 구조 훑어보기</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:bjfj9i\"> <span>협상 시뮬레이션 기록</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1amt8f5\"> <span>완료일: ____</span></label></li></ul>\n<h2 id=\"캡스톤-졸업-프로젝트\">🎓 캡스톤 (졸업 프로젝트)</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:ujmuia\"> <span>분석 대상 기업 선정</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:1uyb4c5\"> <span><code>capstone/report.md</code> 작성 완료</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:tracker:gebiec\"> <span>완료일: ____</span></label></li></ul>\n<hr>\n<h2 id=\"전체-진행률\">전체 진행률</h2>\n<pre><code>[ 0 / 6 ]  Orientation → 1학기 → 2학기 → 3학기 → 4학기 → 캡스톤</code></pre>\n<p>체크할 때마다 위 숫자를 손으로 업데이트하거나, 커밋 메시지에 <code>[1/6]</code> 식으로 남겨두면 나중에 <code>git log</code>로 전체 학사 일정을 한눈에 볼 수 있습니다.</p>",
   "toc": [
    {
     "level": 2,
     "text": "0️⃣ Orientation",
     "slug": "0-orientation"
    },
    {
     "level": 2,
     "text": "1학기 — 조직행동론 기초",
     "slug": "1학기-조직행동론-기초"
    },
    {
     "level": 2,
     "text": "2학기 — 리더십·팀·조직설계",
     "slug": "2학기-리더십팀조직설계"
    },
    {
     "level": 2,
     "text": "3학기 — 인적자원관리",
     "slug": "3학기-인적자원관리"
    },
    {
     "level": 2,
     "text": "4학기 — 전략·협상·피플애널리틱스·노사관계",
     "slug": "4학기-전략협상피플애널리틱스노사관계"
    },
    {
     "level": 2,
     "text": "🎓 캡스톤 (졸업 프로젝트)",
     "slug": "캡스톤-졸업-프로젝트"
    },
    {
     "level": 2,
     "text": "전체 진행률",
     "slug": "전체-진행률"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/progress-tracker.md"
  },
  {
   "id": "orientation",
   "path": "00-orientation/README.md",
   "nav": "오리엔테이션",
   "group": "course",
   "short": "OT",
   "title": "0️⃣ Orientation — 입학 전 오리엔테이션",
   "summary": "목표: 경영학을 한 번도 안 들어본 컴공생이, 1학기 첫 강의를 듣기 전에 최소한의 지도를 갖추는 것.",
   "html": "<blockquote><p>목표: 경영학을 한 번도 안 들어본 컴공생이, 1학기 첫 강의를 듣기 전에 최소한의 지도를 갖추는 것.</p></blockquote>\n<hr>\n<h2 id=\"1-경영학-지도에서-인사조직은-어디에-있는가\">1. 경영학 지도에서 &quot;인사조직&quot;은 어디에 있는가</h2>\n<p>경영학(Business Administration)은 보통 아래처럼 나뉩니다 (나무위키 경영학 문서 기준 세부전공 분류).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>분야</th><th>다루는 것</th><th>컴공 관점 비유</th></tr></thead><tbody>\n<tr><td data-label=\"분야\">회계학</td><td data-label=\"다루는 것\">돈의 흐름을 기록·보고</td><td data-label=\"컴공 관점 비유\">로깅(logging) + 감사(audit trail)</td></tr>\n<tr><td data-label=\"분야\">재무관리</td><td data-label=\"다루는 것\">자금 조달·투자 의사결정</td><td data-label=\"컴공 관점 비유\">자원 할당(resource allocation) 최적화</td></tr>\n<tr><td data-label=\"분야\"><strong>인사조직</strong> ← 우리가 갈 곳</td><td data-label=\"다루는 것\">사람과 조직 구조를 관리</td><td data-label=\"컴공 관점 비유\">분산 시스템의 노드(사람) 관리 + 오케스트레이션</td></tr>\n<tr><td data-label=\"분야\">마케팅</td><td data-label=\"다루는 것\">고객에게 가치를 전달</td><td data-label=\"컴공 관점 비유\">프론트엔드 + 사용자 경험(UX)</td></tr>\n<tr><td data-label=\"분야\">생산/서비스운영관리</td><td data-label=\"다루는 것\">제품·서비스를 효율적으로 생산</td><td data-label=\"컴공 관점 비유\">파이프라인 최적화</td></tr>\n<tr><td data-label=\"분야\">정보시스템(MIS)</td><td data-label=\"다루는 것\">기업의 정보 인프라</td><td data-label=\"컴공 관점 비유\">백엔드 인프라 그 자체 (컴공생에게 가장 익숙한 영역)</td></tr>\n<tr><td data-label=\"분야\">경영전략/국제경영</td><td data-label=\"다루는 것\">회사 전체의 큰 그림</td><td data-label=\"컴공 관점 비유\">시스템 아키텍처 설계</td></tr>\n</tbody></table></div>\n<p>즉 인사조직관리는 &quot;회사라는 시스템에서, <strong>사람(가장 예측 불가능한 컴포넌트)</strong> 을 어떻게 설계·배치·관리할 것인가&quot;를 다루는 분야입니다.</p>\n<hr>\n<h2 id=\"2-컴공생을-위한-비유로-빠르게-감-잡기\">2. 컴공생을 위한 비유로 빠르게 감 잡기</h2>\n<p>이 비유들은 정확한 학술적 대응은 아니지만, 처음 개념을 잡는 데 유용합니다.</p>\n<ul><li><strong>조직행동론(OB)</strong> ≈ 개별 노드(사람)의 동작 원리를 이해하는 것. 왜 어떤 사람은 특정 인풋(보상, 피드백)에 다르게 반응하는가 — 마치 같은 API 호출에도 서버마다 다른 latency가 나오는 이유를 프로파일링하는 것과 비슷합니다.</li><li><strong>조직구조론/조직설계</strong> ≈ 시스템 아키텍처. Monolith(기능별 조직, functional structure)로 갈 것인가, Microservice(사업부제, divisional structure)로 갈 것인가, 그 중간(매트릭스 조직)으로 갈 것인가 — 트레이드오프가 존재합니다.</li><li><strong>인적자원관리(HRM)</strong> ≈ 리소스 프로비저닝 + 라이프사이클 관리. 채용(provisioning) → 온보딩(initialization) → 평가(monitoring) → 보상(scaling) → 퇴사(deprovisioning).</li><li><strong>리더십</strong> ≈ 오케스트레이터/스케줄러. 단순히 명령을 내리는 게 아니라, 팀이 스스로 잘 동작하도록 컨텍스트와 우선순위를 설정하는 역할.</li><li><strong>노사관계론</strong> ≈ 프로토콜과 계약(SLA). 노동자-사용자 관계를 규율하는 규칙의 집합.</li><li><strong>조직문화</strong> ≈ 코드 컨벤션/암묵적 합의. 명문화되지 않았지만 모두가 따르는 규칙.</li></ul>\n<p>비유는 여기까지만 — 실제 학습은 사람은 서버가 아니라는 전제에서 출발해야 합니다. 이 지점이 경영학이 어려운 이유이자 재미있는 지점입니다: <strong>변수가 통제되지 않는 시스템을 이해하는 것.</strong></p>\n<hr>\n<h2 id=\"3-학습-준비물\">3. 학습 준비물</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>준비물</th><th>용도</th><th>링크</th></tr></thead><tbody>\n<tr><td data-label=\"준비물\">Coursera 계정 (무료)</td><td data-label=\"용도\">Stanford/Wharton/Michigan 강의 청강</td><td data-label=\"링크\"><a href=\"https://www.coursera.org\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.coursera.org\">coursera.org</a></td></tr>\n<tr><td data-label=\"준비물\">edX 계정 (무료)</td><td data-label=\"용도\">HarvardX 강의 청강</td><td data-label=\"링크\"><a href=\"https://www.edx.org\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.edx.org\">edx.org</a></td></tr>\n<tr><td data-label=\"준비물\">MIT OCW는 계정 불필요</td><td data-label=\"용도\">바로 열람 가능</td><td data-label=\"링크\"><a href=\"https://ocw.mit.edu\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://ocw.mit.edu\">ocw.mit.edu</a></td></tr>\n<tr><td data-label=\"준비물\">KOCW 계정 (무료)</td><td data-label=\"용도\">한국어 강의 시청</td><td data-label=\"링크\"><a href=\"http://www.kocw.net\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"http://www.kocw.net\">kocw.net</a></td></tr>\n<tr><td data-label=\"준비물\">OpenStax 교재 (무료 PDF)</td><td data-label=\"용도\">전 학기 공통 교재</td><td data-label=\"링크\"><a href=\"https://openstax.org/details/books/organizational-behavior\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://openstax.org/details/books/organizational-behavior\">openstax.org</a></td></tr>\n<tr><td data-label=\"준비물\">노트 도구</td><td data-label=\"용도\">본인 요약 정리 (이 레포에 커밋)</td><td data-label=\"링크\">Markdown 권장</td></tr>\n</tbody></table></div>\n<hr>\n<h2 id=\"4-학습법-제안-능동적-학습\">4. 학습법 제안 (능동적 학습)</h2>\n<p>경영학 강의는 CS 강의와 달리 &quot;정답이 있는 문제 풀이&quot;가 적고, 프레임워크로 현실 사례를 해석하는 연습이 많습니다. 그래서:</p>\n<ol><li><strong>강의를 보기 전, 소제목만 보고 스스로 예상 답을 적어본다</strong> (예: &quot;동기부여 이론이 뭘까?&quot; → 내 생각 먼저)</li><li><strong>케이스/이론을 배우면 반드시 아는 회사·조직 사례에 적용해본다</strong> (다니는 회사, 관심 스타트업, 심지어 동아리도 좋음)</li><li><strong>각 학기 말에 배운 내용을 1페이지로 요약</strong>해서 해당 학기 폴더에 커밋 — 이게 쌓이면 나만의 교재가 됩니다</li><li>이론은 &quot;암기&quot;가 아니라 &quot;렌즈(lens)&quot;로 취급 — MIT의 <code>15.311 Organizational Processes</code> 강의가 강조하듯, 같은 조직 문제도 전략적 설계 관점/정치적 관점/문화적 관점으로 각각 다르게 보일 수 있다는 걸 체득하는 게 핵심입니다.</li></ol>\n<hr>\n<h2 id=\"5-다음-단계\">5. 다음 단계</h2>\n<p>준비가 끝났다면 <a href=\"#/page/s1\"><code>../semester-1-organizational-behavior/README.md</code></a> 로 이동해 1학기를 시작하세요.</p>",
   "toc": [
    {
     "level": 2,
     "text": "1. 경영학 지도에서 \"인사조직\"은 어디에 있는가",
     "slug": "1-경영학-지도에서-인사조직은-어디에-있는가"
    },
    {
     "level": 2,
     "text": "2. 컴공생을 위한 비유로 빠르게 감 잡기",
     "slug": "2-컴공생을-위한-비유로-빠르게-감-잡기"
    },
    {
     "level": 2,
     "text": "3. 학습 준비물",
     "slug": "3-학습-준비물"
    },
    {
     "level": 2,
     "text": "4. 학습법 제안 (능동적 학습)",
     "slug": "4-학습법-제안-능동적-학습"
    },
    {
     "level": 2,
     "text": "5. 다음 단계",
     "slug": "5-다음-단계"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/00-orientation/README.md"
  },
  {
   "id": "s1",
   "path": "semester-1-organizational-behavior/README.md",
   "nav": "1학기 · 조직행동론 기초",
   "group": "course",
   "short": "1학기",
   "title": "1학기 — 조직행동론 기초 (Foundations of Organizational Behavior)",
   "summary": "\"사람은 조직 안에서 왜 그렇게 행동하는가?\" 개인·집단 수준에서 인간 행동을 이해하는 학기.",
   "html": "<blockquote><p>&quot;사람은 조직 안에서 왜 그렇게 행동하는가?&quot; 개인·집단 수준에서 인간 행동을 이해하는 학기.</p></blockquote>\n<hr>\n<h2 id=\"학습목표\">학습목표</h2>\n<ul><li>조직행동론(OB)의 3가지 분석 수준(개인/집단/조직)을 구분할 수 있다</li><li>동기부여, 지각, 학습, 의사결정 이론의 핵심 개념을 설명할 수 있다</li><li>하나의 조직 이론을 실제 조직·사례에 적용해볼 수 있다</li></ul>\n<p><strong>선수지식:</strong> 없음 (경영학 배경 지식 불필요)</p>\n<hr>\n<h2 id=\"핵심-코스\">핵심 코스</h2>\n<div class=\"table-wrap wide\"><table><thead><tr><th>#</th><th>코스명</th><th>기관</th><th>형태</th><th>비용</th><th>링크</th></tr></thead><tbody>\n<tr><td data-label=\"#\">1</td><td data-label=\"코스명\">Organizational Behavior: How to Manage People</td><td data-label=\"기관\">IESE Business School</td><td data-label=\"형태\">Coursera</td><td data-label=\"비용\">무료 청강</td><td data-label=\"링크\"><a href=\"https://www.coursera.org/learn/managing-people-iese\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.coursera.org/learn/managing-people-iese\">coursera.org</a></td></tr>\n<tr><td data-label=\"#\">2</td><td data-label=\"코스명\">Organizational Analysis</td><td data-label=\"기관\">Stanford University (Daniel McFarland)</td><td data-label=\"형태\">Coursera</td><td data-label=\"비용\">무료 청강</td><td data-label=\"링크\"><a href=\"https://www.coursera.org/learn/organizational-analysis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.coursera.org/learn/organizational-analysis\">coursera.org</a></td></tr>\n<tr><td data-label=\"#\">3</td><td data-label=\"코스명\">15.341 Individuals, Groups, and Organizations</td><td data-label=\"기관\">MIT Sloan (Prof. John Carroll)</td><td data-label=\"형태\">MIT OCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"https://ocw.mit.edu/courses/15-341-individuals-groups-and-organizations-fall-2006/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://ocw.mit.edu/courses/15-341-individuals-groups-and-organizations-fall-2006/\">ocw.mit.edu</a></td></tr>\n<tr><td data-label=\"#\">4</td><td data-label=\"코스명\">조직행동론</td><td data-label=\"기관\">서강대학교 (양동훈)</td><td data-label=\"형태\">KOCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"http://www.kocw.net/home/search/kemView.do?kemId=1001986\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"http://www.kocw.net/home/search/kemView.do?kemId=1001986\">kocw.net</a></td></tr>\n</tbody></table></div>\n<p><strong>추천 순서:</strong> IESE(가장 쉬운 입문) → MIT 15.341(개념 심화) → Stanford(이론 프레임워크로 확장) → KOCW(한국어로 복습 + 한국 조직 맥락 보충)</p>\n<h3 id=\"왜-이-조합인가\">왜 이 조합인가</h3>\n<ul><li><strong>IESE 코스</strong>는 동기부여·리더십·팀워크·문화 4개 축으로 가장 친절하게 입문시켜줍니다. 컴공생의 첫 코스로 최적.</li><li><strong>MIT 15.341</strong>은 &quot;중요한 논문을 비판적으로 분석&quot;하는 대학원 방식으로 개인 인지·정서, 집단 프로세스, 조직문화를 다룹니다 — 학부 강의보다 밀도가 높습니다.</li><li><strong>Stanford Organizational Analysis</strong>는 조직을 보는 10개의 이론적 렌즈(합리적 의사결정, 연합체, 조직학습, 자원의존이론, 네트워크, 제도이론 등)를 제공합니다. 이 레포 전체에서 &quot;이론으로 현실을 해석하는 법&quot;을 배우는 유일한 코스이니 놓치지 마세요.</li><li><strong>KOCW 조직행동론</strong>은 동기부여·지각·팀 역학·리더십·조직문화를 다루며 한국어로 개념을 다시 정리하기 좋습니다.</li></ul>\n<hr>\n<h2 id=\"무료-교재-병행-읽기\">무료 교재 (병행 읽기)</h2>\n<p><strong>OpenStax, <em>Organizational Behavior</em></strong> (완전 무료, CC BY 라이선스) — <a href=\"https://openstax.org/details/books/organizational-behavior\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://openstax.org/details/books/organizational-behavior\">openstax.org</a></p>\n<p>1학기에는 아래 챕터를 강의와 병행해서 읽으세요 (개인·집단 수준 파트):</p>\n<ul><li>Ch.1 Introduction to Organizational Behavior</li><li>Ch.2 Individual and Cultural Factors</li><li>Ch.4 Individual Attitudes and Behaviors</li><li>Ch.6 Perception and Managerial Decision Making</li><li>Ch.7 Work Motivation for Performance</li><li>Ch.9 Group Behavior</li></ul>\n<hr>\n<h2 id=\"주차별-계획-810주-기준\">주차별 계획 (8~10주 기준)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>주차</th><th>주제</th><th>학습 콘텐츠</th></tr></thead><tbody>\n<tr><td data-label=\"주차\">1주</td><td data-label=\"주제\">OB란 무엇인가</td><td data-label=\"학습 콘텐츠\">IESE 코스 Intro + OpenStax Ch.1</td></tr>\n<tr><td data-label=\"주차\">2주</td><td data-label=\"주제\">동기부여 이론</td><td data-label=\"학습 콘텐츠\">IESE 코스 &quot;Motivation&quot; 모듈 + OpenStax Ch.7</td></tr>\n<tr><td data-label=\"주차\">3주</td><td data-label=\"주제\">지각과 의사결정</td><td data-label=\"학습 콘텐츠\">OpenStax Ch.6 + Stanford 코스 Week 1~2 (합리적/연합체적 의사결정)</td></tr>\n<tr><td data-label=\"주차\">4주</td><td data-label=\"주제\">리더십 개론</td><td data-label=\"학습 콘텐츠\">IESE 코스 &quot;Leadership&quot; 모듈</td></tr>\n<tr><td data-label=\"주차\">5주</td><td data-label=\"주제\">팀워크와 집단 역학</td><td data-label=\"학습 콘텐츠\">IESE 코스 &quot;Teamwork&quot; 모듈 + OpenStax Ch.9</td></tr>\n<tr><td data-label=\"주차\">6주</td><td data-label=\"주제\">조직문화 입문</td><td data-label=\"학습 콘텐츠\">IESE 코스 &quot;Culture&quot; 모듈</td></tr>\n<tr><td data-label=\"주차\">7주</td><td data-label=\"주제\">개인·집단·조직 통합 관점</td><td data-label=\"학습 콘텐츠\">MIT 15.341 Lecture Notes 정독</td></tr>\n<tr><td data-label=\"주차\">8주</td><td data-label=\"주제\">조직을 보는 이론적 렌즈</td><td data-label=\"학습 콘텐츠\">Stanford 코스 Week 3~6 (조직학습, 자원의존, 네트워크 이론)</td></tr>\n<tr><td data-label=\"주차\">9주</td><td data-label=\"주제\">제도이론과 정당성</td><td data-label=\"학습 콘텐츠\">Stanford 코스 Week 7~9</td></tr>\n<tr><td data-label=\"주차\">10주</td><td data-label=\"주제\">정리 + 한국어 복습</td><td data-label=\"학습 콘텐츠\">KOCW 조직행동론 완주 + 1학기 요약 노트 작성</td></tr>\n</tbody></table></div>\n<hr>\n<h2 id=\"과제-산출물\">과제 / 산출물</h2>\n<ol><li><strong>미니 케이스 분석 1건</strong>: 본인이 아는 조직(재직 회사, 학교 동아리, 스타트업 등)을 골라 &quot;동기부여 이론&quot;과 &quot;지각/의사결정 이론&quot; 중 하나를 적용해 A4 1장 분석</li><li><strong>이론 렌즈 노트</strong>: Stanford 코스에서 배운 10개 이론 중 3개를 골라, 각각 어떤 상황에 적합한지 본인 언어로 정리</li><li><code>notes.md</code> 파일을 이 폴더에 만들어 위 산출물을 커밋</li></ol>\n<hr>\n<h2 id=\"체크리스트\">체크리스트</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s1:1138322\"> <span>IESE <code>Organizational Behavior: How to Manage People</code> 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s1:151ahjm\"> <span>MIT 15.341 lecture notes 정독</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s1:19zp262\"> <span>Stanford <code>Organizational Analysis</code> 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s1:1olqyr5\"> <span>KOCW 조직행동론 시청</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s1:10zi130\"> <span>OpenStax Ch.1, 2, 4, 6, 7, 9 완독</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s1:rb27l4\"> <span>미니 케이스 분석 작성</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s1:ss4nly\"> <span><a href=\"#/page/tracker\"><code>progress-tracker.md</code></a>에 1학기 완료 체크</span></label></li></ul>\n<hr>\n<h2 id=\"다음-학기\">다음 학기</h2>\n<p>1학기를 마쳤다면 <a href=\"#/page/s2\"><code>../semester-2-leadership-teams-design/README.md</code></a> 로 이동하세요. 2학기는 개인 수준을 넘어 <strong>팀·조직 전체 수준</strong>으로 확장합니다.</p>",
   "toc": [
    {
     "level": 2,
     "text": "학습목표",
     "slug": "학습목표"
    },
    {
     "level": 2,
     "text": "핵심 코스",
     "slug": "핵심-코스"
    },
    {
     "level": 3,
     "text": "왜 이 조합인가",
     "slug": "왜-이-조합인가"
    },
    {
     "level": 2,
     "text": "무료 교재 (병행 읽기)",
     "slug": "무료-교재-병행-읽기"
    },
    {
     "level": 2,
     "text": "주차별 계획 (8~10주 기준)",
     "slug": "주차별-계획-810주-기준"
    },
    {
     "level": 2,
     "text": "과제 / 산출물",
     "slug": "과제-산출물"
    },
    {
     "level": 2,
     "text": "체크리스트",
     "slug": "체크리스트"
    },
    {
     "level": 2,
     "text": "다음 학기",
     "slug": "다음-학기"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/semester-1-organizational-behavior/README.md"
  },
  {
   "id": "s2",
   "path": "semester-2-leadership-teams-design/README.md",
   "nav": "2학기 · 리더십·팀·조직설계",
   "group": "course",
   "short": "2학기",
   "title": "2학기 — 리더십·팀·조직설계 (Leadership, Teams & Organizational Design)",
   "summary": "\"집단과 조직 전체는 어떻게 움직이고, 어떻게 설계해야 하는가?\" 1학기의 개인 수준 이해를 집단·조직 수준으로 확장하는 학기.",
   "html": "<blockquote><p>&quot;집단과 조직 전체는 어떻게 움직이고, 어떻게 설계해야 하는가?&quot; 1학기의 개인 수준 이해를 집단·조직 수준으로 확장하는 학기.</p></blockquote>\n<hr>\n<h2 id=\"학습목표\">학습목표</h2>\n<ul><li>조직을 3가지 렌즈(전략적 설계 / 정치적 / 문화적)로 동시에 분석할 수 있다</li><li>팀을 구성·운영·평가하는 실무적 프레임워크를 습득한다</li><li>기능조직·사업부제·매트릭스 조직 등 조직구조의 트레이드오프를 설명할 수 있다</li><li>영향력(influence)과 권력(power)이 공식 권한 없이도 작동하는 방식을 이해한다</li></ul>\n<p><strong>선수지식:</strong> 1학기 (조직행동론 기초)</p>\n<hr>\n<h2 id=\"핵심-코스\">핵심 코스</h2>\n<div class=\"table-wrap wide\"><table><thead><tr><th>#</th><th>코스명</th><th>기관</th><th>형태</th><th>비용</th><th>링크</th></tr></thead><tbody>\n<tr><td data-label=\"#\">1</td><td data-label=\"코스명\">15.311 Organizational Processes</td><td data-label=\"기관\">MIT Sloan (Van Maanen / Carlile / Fernandez)</td><td data-label=\"형태\">MIT OCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"https://ocw.mit.edu/courses/15-311-organizational-processes-fall-2003/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://ocw.mit.edu/courses/15-311-organizational-processes-fall-2003/\">ocw.mit.edu</a></td></tr>\n<tr><td data-label=\"#\">2</td><td data-label=\"코스명\">15.320 Strategic Organizational Design</td><td data-label=\"기관\">MIT Sloan</td><td data-label=\"형태\">MIT OCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"https://ocw.mit.edu/courses/15-320-strategic-organizational-design-spring-2011/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://ocw.mit.edu/courses/15-320-strategic-organizational-design-spring-2011/\">ocw.mit.edu</a></td></tr>\n<tr><td data-label=\"#\">3</td><td data-label=\"코스명\">Leading People and Teams (Specialization, 4개 코스 + 캡스톤)</td><td data-label=\"기관\">University of Michigan Ross (DeRue / Sytch)</td><td data-label=\"형태\">Coursera</td><td data-label=\"비용\">무료 청강</td><td data-label=\"링크\"><a href=\"https://www.coursera.org/specializations/leading-teams\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.coursera.org/specializations/leading-teams\">coursera.org</a></td></tr>\n<tr><td data-label=\"#\">4</td><td data-label=\"코스명\">15.322 Leading Organizations II</td><td data-label=\"기관\">MIT Sloan</td><td data-label=\"형태\">MIT OCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"https://ocw.mit.edu/courses/15-322-leading-organizations-ii-fall-2003/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://ocw.mit.edu/courses/15-322-leading-organizations-ii-fall-2003/\">ocw.mit.edu</a></td></tr>\n<tr><td data-label=\"#\">5</td><td data-label=\"코스명\">리더십론</td><td data-label=\"기관\">단국대학교 (박재춘)</td><td data-label=\"형태\">KOCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"http://kocw.or.kr/home/cview.do?mty=p&amp;kemId=1141023\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"http://kocw.or.kr/home/cview.do?mty=p&amp;kemId=1141023\">kocw.or.kr</a></td></tr>\n</tbody></table></div>\n<h3 id=\"michigan-leading-people-and-teams-4개-세부-코스\">Michigan &quot;Leading People and Teams&quot; 4개 세부 코스</h3>\n<p>Specialization 안에 아래 4개 코스가 포함되어 있으며, 순서대로 듣는 것을 권장합니다.</p>\n<ol><li><strong>Inspiring and Motivating Individuals</strong> — 비전 설정, 몰입(engagement) 드라이버</li><li><strong>Managing Talent</strong> — 온보딩, 성과관리, 코칭 (→ 3학기 HRM과 직접 연결됨)</li><li><strong>Influencing People</strong> — 공식 권한 없이 영향력을 발휘하는 법 (권력의 기반들)</li><li><strong>Leading Teams</strong> — 팀 구성, 갈등 해결, 신뢰 구축</li></ol>\n<h3 id=\"왜-이-조합인가\">왜 이 조합인가</h3>\n<ul><li><strong>MIT 15.311</strong>은 조직을 <strong>전략적 설계 / 정치적 / 문화적</strong> 세 가지 렌즈로 동시에 분석하는 훈련을 시킵니다. 같은 조직 변화 사례도 관점에 따라 완전히 다른 해석과 처방이 나온다는 걸 체득하게 됩니다.</li><li><strong>MIT 15.320</strong>은 언제 기능조직/사업부제/매트릭스 조직을 쓸지, IT가 어떻게 새로운 조직 형태(크라우드 기반, 내부 시장 등)를 가능하게 하는지를 다룹니다.</li><li><strong>Michigan Specialization</strong>은 이론보다 실전 적용에 방점이 찍혀 있어 MIT 코스들과 상호보완적입니다. 특히 &quot;Managing Talent&quot; 코스는 3학기(HRM)로 넘어가는 다리 역할을 합니다.</li></ul>\n<hr>\n<h2 id=\"무료-교재-병행-읽기\">무료 교재 (병행 읽기)</h2>\n<p><strong>OpenStax, <em>Organizational Behavior</em></strong> — 2학기에는 아래 챕터:</p>\n<ul><li>Ch.10 Leaders and Leadership</li><li>Ch.11 Power and Politics</li><li>Ch.13 Managing Conflict and Negotiation (협상은 4학기에 심화)</li><li>Ch.14 Organizational Structure and Change</li><li>Ch.15 The Organization's External Environment</li><li>Ch.16 Organizational Culture</li></ul>\n<hr>\n<h2 id=\"주차별-계획-810주-기준\">주차별 계획 (8~10주 기준)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>주차</th><th>주제</th><th>학습 콘텐츠</th></tr></thead><tbody>\n<tr><td data-label=\"주차\">1주</td><td data-label=\"주제\">조직을 보는 세 가지 렌즈</td><td data-label=\"학습 콘텐츠\">MIT 15.311 Syllabus + Session 1 자료</td></tr>\n<tr><td data-label=\"주차\">2주</td><td data-label=\"주제\">전략적 설계 관점</td><td data-label=\"학습 콘텐츠\">MIT 15.311 &quot;Strategic Design Lens&quot;</td></tr>\n<tr><td data-label=\"주차\">3주</td><td data-label=\"주제\">정치적 관점과 권력</td><td data-label=\"학습 콘텐츠\">MIT 15.311 &quot;Political Lens&quot; + OpenStax Ch.11</td></tr>\n<tr><td data-label=\"주차\">4주</td><td data-label=\"주제\">문화적 관점</td><td data-label=\"학습 콘텐츠\">MIT 15.311 &quot;Cultural Lens&quot; + OpenStax Ch.16</td></tr>\n<tr><td data-label=\"주차\">5주</td><td data-label=\"주제\">개인에게 영감을 주고 동기부여하기</td><td data-label=\"학습 콘텐츠\">Michigan Course 1: Inspiring and Motivating Individuals</td></tr>\n<tr><td data-label=\"주차\">6주</td><td data-label=\"주제\">인재 관리 입문</td><td data-label=\"학습 콘텐츠\">Michigan Course 2: Managing Talent</td></tr>\n<tr><td data-label=\"주차\">7주</td><td data-label=\"주제\">공식 권한 없는 영향력</td><td data-label=\"학습 콘텐츠\">Michigan Course 3: Influencing People</td></tr>\n<tr><td data-label=\"주차\">8주</td><td data-label=\"주제\">팀 빌딩과 팀 운영</td><td data-label=\"학습 콘텐츠\">Michigan Course 4: Leading Teams</td></tr>\n<tr><td data-label=\"주차\">9주</td><td data-label=\"주제\">조직구조 설계</td><td data-label=\"학습 콘텐츠\">MIT 15.320 전체</td></tr>\n<tr><td data-label=\"주차\">10주</td><td data-label=\"주제\">정리 + 한국어 복습</td><td data-label=\"학습 콘텐츠\">KOCW 리더십론 + MIT 15.322 훑어보기 + 2학기 요약</td></tr>\n</tbody></table></div>\n<hr>\n<h2 id=\"과제-산출물\">과제 / 산출물</h2>\n<ol><li><strong>3-렌즈 분석 리포트</strong>: 본인이 아는 조직의 변화·갈등 사례 1개를 골라 전략적/정치적/문화적 관점으로 각각 분석 (MIT 15.311 방식 그대로 적용)</li><li><strong>조직도 재설계 연습</strong>: 가상의 20인 스타트업을 기능조직 vs 매트릭스 조직으로 각각 설계해보고 트레이드오프 비교</li><li><code>notes.md</code>에 정리해서 커밋</li></ol>\n<hr>\n<h2 id=\"체크리스트\">체크리스트</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s2:4a40x7\"> <span>MIT 15.311 Organizational Processes 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s2:oz66r2\"> <span>MIT 15.320 Strategic Organizational Design 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s2:k5vpz3\"> <span>Michigan Leading People and Teams 4개 코스 + 캡스톤 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s2:1ul9ojp\"> <span>KOCW 리더십론 시청</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s2:13vcsig\"> <span>OpenStax Ch.10, 11, 14, 15, 16 완독</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s2:7im956\"> <span>3-렌즈 분석 리포트 작성</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s2:xjx2o5\"> <span><a href=\"#/page/tracker\"><code>progress-tracker.md</code></a>에 2학기 완료 체크</span></label></li></ul>\n<hr>\n<h2 id=\"다음-학기\">다음 학기</h2>\n<p>2학기를 마쳤다면 <a href=\"#/page/s3\"><code>../semester-3-hrm/README.md</code></a> 로 이동하세요. 3학기는 &quot;사람을 어떻게 뽑고, 키우고, 평가하고, 보상하는가&quot; — 인적자원관리 실무로 들어갑니다.</p>",
   "toc": [
    {
     "level": 2,
     "text": "학습목표",
     "slug": "학습목표"
    },
    {
     "level": 2,
     "text": "핵심 코스",
     "slug": "핵심-코스"
    },
    {
     "level": 3,
     "text": "Michigan \"Leading People and Teams\" 4개 세부 코스",
     "slug": "michigan-leading-people-and-teams-4개-세부-코스"
    },
    {
     "level": 3,
     "text": "왜 이 조합인가",
     "slug": "왜-이-조합인가"
    },
    {
     "level": 2,
     "text": "무료 교재 (병행 읽기)",
     "slug": "무료-교재-병행-읽기"
    },
    {
     "level": 2,
     "text": "주차별 계획 (8~10주 기준)",
     "slug": "주차별-계획-810주-기준"
    },
    {
     "level": 2,
     "text": "과제 / 산출물",
     "slug": "과제-산출물"
    },
    {
     "level": 2,
     "text": "체크리스트",
     "slug": "체크리스트"
    },
    {
     "level": 2,
     "text": "다음 학기",
     "slug": "다음-학기"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/semester-2-leadership-teams-design/README.md"
  },
  {
   "id": "s3",
   "path": "semester-3-hrm/README.md",
   "nav": "3학기 · 인적자원관리",
   "group": "course",
   "short": "3학기",
   "title": "3학기 — 인적자원관리 (Human Resource Management, HRM)",
   "summary": "\"사람을 어떻게 확보하고, 개발하고, 평가하고, 보상하고, 유지하는가?\" 이론에서 실무 제도로 넘어가는 학기.",
   "html": "<blockquote><p>&quot;사람을 어떻게 확보하고, 개발하고, 평가하고, 보상하고, 유지하는가?&quot; 이론에서 실무 제도로 넘어가는 학기.</p></blockquote>\n<hr>\n<h2 id=\"학습목표\">학습목표</h2>\n<ul><li>나무위키 분류 기준 HRM의 6대 기능(직무관리 / 확보·개발관리 / 평가관리 / 보상관리 / 유지관리 / 방출관리)을 구분할 수 있다</li><li>채용, 성과평가, 보상 설계의 기본 원리와 함정을 설명할 수 있다</li><li>&quot;일반관리자(general manager) 관점&quot;에서 인사제도를 전략적으로 사고할 수 있다</li></ul>\n<p><strong>선수지식:</strong> 1~2학기 (조직행동론, 리더십·조직설계 기초)</p>\n<hr>\n<h2 id=\"핵심-코스\">핵심 코스</h2>\n<div class=\"table-wrap wide\"><table><thead><tr><th>#</th><th>코스명</th><th>기관</th><th>형태</th><th>비용</th><th>링크</th></tr></thead><tbody>\n<tr><td data-label=\"#\">1</td><td data-label=\"코스명\">Managing Social and Human Capital</td><td data-label=\"기관\">Wharton, UPenn (Michael Useem / Peter Cappelli)</td><td data-label=\"형태\">Coursera</td><td data-label=\"비용\">무료 청강</td><td data-label=\"링크\"><a href=\"https://www.coursera.org/learn/wharton-social-human-capital\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.coursera.org/learn/wharton-social-human-capital\">coursera.org</a></td></tr>\n<tr><td data-label=\"#\">2</td><td data-label=\"코스명\">15.660 Strategic HR Management</td><td data-label=\"기관\">MIT Sloan</td><td data-label=\"형태\">MIT OCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"https://ocw.mit.edu/courses/15-660-strategic-hr-management-spring-2003/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://ocw.mit.edu/courses/15-660-strategic-hr-management-spring-2003/\">ocw.mit.edu</a></td></tr>\n<tr><td data-label=\"#\">3</td><td data-label=\"코스명\">인적자원관리</td><td data-label=\"기관\">가천대학교 (조성준)</td><td data-label=\"형태\">KOCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"http://kocw.net/home/cview.do?mty=p&amp;kemId=1170241\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"http://kocw.net/home/cview.do?mty=p&amp;kemId=1170241\">kocw.net</a></td></tr>\n<tr><td data-label=\"#\">4</td><td data-label=\"코스명\">인적자원관리</td><td data-label=\"기관\">건국대학교</td><td data-label=\"형태\">KOCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"http://www.kocw.net/home/cview.do?mty=p&amp;kemId=1148596\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"http://www.kocw.net/home/cview.do?mty=p&amp;kemId=1148596\">kocw.net</a></td></tr>\n</tbody></table></div>\n<h3 id=\"왜-이-조합인가\">왜 이 조합인가</h3>\n<ul><li><strong>Wharton <code>Managing Social and Human Capital</code></strong>은 Michael Useem·Peter Cappelli(둘 다 HR/조직 분야 최고 권위자)가 직무설계, 동기부여를 위한 보상체계 설계, 의사결정, 조직 아키텍처 변화를 &quot;매니저의 관점&quot;에서 가르칩니다. 이론이 아니라 바로 써먹는 실무 감각 위주입니다.</li><li><strong>MIT <code>15.660 Strategic HR Management</code></strong>은 인사관리를 개별 기능(채용/평가/보상 등)이 아니라 <strong>회사 전략과 연결된 하나의 시스템</strong>으로 보도록 설계되었습니다 — 보상체계, 고성과 인사시스템(high-performance HR system), 교육훈련, 노사관계까지 전략적 관점에서 통합적으로 다룹니다. 이 레포에서 가장 &quot;학문적으로 진지한&quot; HRM 코스입니다.</li><li><strong>KOCW 인적자원관리 강의들</strong>은 채용관리·교육훈련·인력계획·임금관리·인사고과·노사관계관리·이직관리까지 한국 기업 맥락의 제도와 용어로 다시 정리해줍니다. 한국에서 취업/이직할 계획이 있다면 특히 유용합니다.</li></ul>\n<hr>\n<h2 id=\"무료-교재-병행-읽기\">무료 교재 (병행 읽기)</h2>\n<ol><li><strong>Beginning Management of Human Resources</strong> (Open Textbook Library, 완전 무료) — <a href=\"https://open.umn.edu/opentextbooks/textbooks/71\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://open.umn.edu/opentextbooks/textbooks/71\">open.umn.edu</a><ul><li>채용, 선발, 교육훈련, 보상·복리후생, 노사관계, 안전보건까지 HRM 전 영역을 다루는 입문 교재</li></ul></li><li><strong>OpenStax, <em>Principles of Management</em>, Ch.11 Human Resource Management</strong> — <a href=\"https://openstax.org/books/principles-management/pages/11-1-an-introduction-to-human-resource-management\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://openstax.org/books/principles-management/pages/11-1-an-introduction-to-human-resource-management\">openstax.org</a></li><li><strong>OpenStax, <em>Organizational Behavior</em>, Ch.8 Performance Appraisal and Rewards Systems</strong> — 평가·보상 챕터는 OB 교재에도 있으니 함께 참고</li></ol>\n<hr>\n<h2 id=\"나무위키-분류를-따라가는-주차별-계획-810주-기준\">나무위키 분류를 따라가는 주차별 계획 (8~10주 기준)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>주차</th><th>주제 (나무위키 분류)</th><th>학습 콘텐츠</th></tr></thead><tbody>\n<tr><td data-label=\"주차\">1주</td><td data-label=\"주제 (나무위키 분류)\">HRM 전체 지도 그리기</td><td data-label=\"학습 콘텐츠\">Beginning Management of HR Ch.1 + OpenStax Principles of Mgmt 11.1</td></tr>\n<tr><td data-label=\"주차\">2주</td><td data-label=\"주제 (나무위키 분류)\">직무관리 (직무분석·직무평가·직무설계)</td><td data-label=\"학습 콘텐츠\">Wharton 코스 &quot;Tasks vs. Jobs&quot; 모듈</td></tr>\n<tr><td data-label=\"주차\">3주</td><td data-label=\"주제 (나무위키 분류)\">확보관리 (모집·선발)</td><td data-label=\"학습 콘텐츠\">Beginning Mgmt of HR 채용/선발 챕터</td></tr>\n<tr><td data-label=\"주차\">4주</td><td data-label=\"주제 (나무위키 분류)\">개발관리 (교육훈련·경력관리)</td><td data-label=\"학습 콘텐츠\">KOCW 인적자원관리 (건국대) 관련 차시</td></tr>\n<tr><td data-label=\"주차\">5주</td><td data-label=\"주제 (나무위키 분류)\">평가관리 (인사고과)</td><td data-label=\"학습 콘텐츠\">Wharton 코스 &quot;Good and Timely Decisions&quot; 모듈</td></tr>\n<tr><td data-label=\"주차\">6주</td><td data-label=\"주제 (나무위키 분류)\">보상관리 (임금·복리후생)</td><td data-label=\"학습 콘텐츠\">Wharton 코스 &quot;Motivating Performance &amp; Reward Systems&quot; 모듈</td></tr>\n<tr><td data-label=\"주차\">7주</td><td data-label=\"주제 (나무위키 분류)\">유지관리 (배치전환·이직·근무환경)</td><td data-label=\"학습 콘텐츠\">Beginning Mgmt of HR 관련 챕터</td></tr>\n<tr><td data-label=\"주차\">8주</td><td data-label=\"주제 (나무위키 분류)\">전략적 인적자본 관점</td><td data-label=\"학습 콘텐츠\">MIT 15.660 전체 (Strategic HR Management)</td></tr>\n<tr><td data-label=\"주차\">9주</td><td data-label=\"주제 (나무위키 분류)\">고성과 인사시스템 &amp; 조직 아키텍처</td><td data-label=\"학습 콘텐츠\">MIT 15.660 심화 + Wharton &quot;Organizational Architecture&quot; 모듈</td></tr>\n<tr><td data-label=\"주차\">10주</td><td data-label=\"주제 (나무위키 분류)\">정리 + 한국어 복습</td><td data-label=\"학습 콘텐츠\">KOCW 인적자원관리(가천대) + 3학기 요약</td></tr>\n</tbody></table></div>\n<hr>\n<h2 id=\"과제-산출물\">과제 / 산출물</h2>\n<ol><li><strong>채용~평가~보상 설계 미니 프로젝트</strong>: 가상의 직무(예: &quot;백엔드 개발자 3년차&quot;) 하나를 정해서 직무기술서 → 채용 프로세스 → 평가 기준 → 보상 구조까지 일관되게 설계</li><li><strong>본인 회사(또는 인턴 경험) HR 제도 비평</strong>: 실제 겪었던 인사제도(평가, 승진, 보상) 하나를 골라 이번 학기에 배운 이론으로 장단점 분석</li><li><code>notes.md</code>에 정리해서 커밋</li></ol>\n<hr>\n<h2 id=\"체크리스트\">체크리스트</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s3:10q7hfd\"> <span>Wharton <code>Managing Social and Human Capital</code> 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s3:1w4v9sy\"> <span>MIT 15.660 Strategic HR Management 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s3:1r4ix6n\"> <span>KOCW 인적자원관리 (2개 이상) 시청</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s3:1m4gbsl\"> <span>Beginning Management of Human Resources 완독 (또는 발췌독)</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s3:ob2zu5\"> <span>채용~평가~보상 미니 프로젝트 작성</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s3:1o4lt38\"> <span><a href=\"#/page/tracker\"><code>progress-tracker.md</code></a>에 3학기 완료 체크</span></label></li></ul>\n<hr>\n<h2 id=\"다음-학기\">다음 학기</h2>\n<p>3학기를 마쳤다면 <a href=\"#/page/s4\"><code>../semester-4-strategic-advanced/README.md</code></a> 로 이동하세요. 4학기는 협상, 데이터 기반 인사(피플 애널리틱스), 노사관계, 리더십 심화를 다루는 졸업 학기입니다.</p>",
   "toc": [
    {
     "level": 2,
     "text": "학습목표",
     "slug": "학습목표"
    },
    {
     "level": 2,
     "text": "핵심 코스",
     "slug": "핵심-코스"
    },
    {
     "level": 3,
     "text": "왜 이 조합인가",
     "slug": "왜-이-조합인가"
    },
    {
     "level": 2,
     "text": "무료 교재 (병행 읽기)",
     "slug": "무료-교재-병행-읽기"
    },
    {
     "level": 2,
     "text": "나무위키 분류를 따라가는 주차별 계획 (8~10주 기준)",
     "slug": "나무위키-분류를-따라가는-주차별-계획-810주-기준"
    },
    {
     "level": 2,
     "text": "과제 / 산출물",
     "slug": "과제-산출물"
    },
    {
     "level": 2,
     "text": "체크리스트",
     "slug": "체크리스트"
    },
    {
     "level": 2,
     "text": "다음 학기",
     "slug": "다음-학기"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/semester-3-hrm/README.md"
  },
  {
   "id": "s4",
   "path": "semester-4-strategic-advanced/README.md",
   "nav": "4학기 · 전략·협상·노사관계",
   "group": "course",
   "short": "4학기",
   "title": "4학기 — 전략·협상·피플애널리틱스·노사관계 (졸업 학기)",
   "summary": "\"배운 걸 실전에서 어떻게 쓰는가?\" 1~3학기의 이론과 제도 지식을 협상력, 데이터 기반 의사결정, 법·제도 이해로 완성하는 학기.",
   "html": "<blockquote><p>&quot;배운 걸 실전에서 어떻게 쓰는가?&quot; 1~3학기의 이론과 제도 지식을 협상력, 데이터 기반 의사결정, 법·제도 이해로 완성하는 학기.</p></blockquote>\n<hr>\n<h2 id=\"학습목표\">학습목표</h2>\n<ul><li>분배적/통합적 협상 전략을 구분하고 실제 협상에 적용할 수 있다</li><li>사람과 관련된 의사결정에서 데이터를 어떻게, 어디까지 신뢰해야 하는지 판단할 수 있다</li><li>노사관계의 기본 구조(단체교섭, 노동조합, 노동법 환경)를 이해한다</li><li>변화가 극심한 환경에서 공식적 권한 없이도 리더십을 발휘하는 법을 안다</li></ul>\n<p><strong>선수지식:</strong> 1~3학기 전체</p>\n<hr>\n<h2 id=\"핵심-코스\">핵심 코스</h2>\n<div class=\"table-wrap wide\"><table><thead><tr><th>#</th><th>코스명</th><th>기관</th><th>형태</th><th>비용</th><th>링크</th></tr></thead><tbody>\n<tr><td data-label=\"#\">1</td><td data-label=\"코스명\">15.667 Negotiation and Conflict Management</td><td data-label=\"기관\">MIT Sloan (Prof. Mary Rowe)</td><td data-label=\"형태\">MIT OCW</td><td data-label=\"비용\">완전 무료</td><td data-label=\"링크\"><a href=\"https://ocw.mit.edu/courses/15-667-negotiation-and-conflict-management-spring-2001/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://ocw.mit.edu/courses/15-667-negotiation-and-conflict-management-spring-2001/\">ocw.mit.edu</a></td></tr>\n<tr><td data-label=\"#\">2</td><td data-label=\"코스명\">People Analytics</td><td data-label=\"기관\">Wharton, UPenn (Cade Massey / Matthew Bidwell / Martine Haas)</td><td data-label=\"형태\">Coursera</td><td data-label=\"비용\">무료 청강</td><td data-label=\"링크\"><a href=\"https://www.coursera.org/learn/wharton-people-analytics\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.coursera.org/learn/wharton-people-analytics\">coursera.org</a></td></tr>\n<tr><td data-label=\"#\">3</td><td data-label=\"코스명\">Exercising Leadership: Foundational Principles</td><td data-label=\"기관\">Harvard (Ronald Heifetz, Kennedy School)</td><td data-label=\"형태\">edX (HarvardX)</td><td data-label=\"비용\">무료 청강</td><td data-label=\"링크\"><a href=\"https://pll.harvard.edu/course/exercising-leadership-foundational-principles\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://pll.harvard.edu/course/exercising-leadership-foundational-principles\">pll.harvard.edu</a></td></tr>\n<tr><td data-label=\"#\">4</td><td data-label=\"코스명\">Achieving Personal and Professional Success (Negotiation 모듈)</td><td data-label=\"기관\">Wharton, UPenn</td><td data-label=\"형태\">Coursera</td><td data-label=\"비용\">무료 청강</td><td data-label=\"링크\"><a href=\"https://www.coursera.org/specializations/wharton-success\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.coursera.org/specializations/wharton-success\">coursera.org</a></td></tr>\n</tbody></table></div>\n<h3 id=\"왜-이-조합인가\">왜 이 조합인가</h3>\n<ul><li><strong>MIT <code>15.667</code></strong>은 실제 협상 시뮬레이션 기반 강의로, 분배적 협상(distributive)과 통합적 협상(integrative)을 구분하고 &quot;협상 101&quot; 패키지 등 실전 도구를 제공합니다. 노사관계·채용 연봉 협상·팀 내 갈등 조정 등 인사조직 실무 어디에나 쓰이는 스킬입니다.</li><li><strong>Wharton <code>People Analytics</code></strong>는 성과평가에 숨은 통계적 함정(평균 회귀, 표본 크기, 신호 독립성)부터 채용·승진·보상까지, &quot;데이터로 사람을 판단할 때 흔히 저지르는 실수&quot;를 다룹니다. 3학기 HRM을 데이터 시대 버전으로 업그레이드하는 코스입니다.</li><li><strong>HarvardX <code>Exercising Leadership</code></strong>은 하버드 케네디스쿨의 유명한 &quot;적응적 리더십(adaptive leadership)&quot; 프레임워크 입문 코스입니다. 공식 권한이 없어도 조직에 변화를 만드는 법을 다룹니다 — 이 레포에서 유일한 하버드발 콘텐츠입니다.</li></ul>\n<hr>\n<h2 id=\"노사관계론industrial-relations-cornell-ilr-school-참고\">노사관계론(Industrial Relations) — Cornell ILR School 참고</h2>\n<p>미국 아이비리그 중 <strong>Cornell 대학교의 ILR School(Industrial and Labor Relations School)</strong> 은 단과대학 전체가 노동·인사조직에 특화된 유일한 사례입니다. 무료 공개 강의는 많지 않지만, 커리큘럼 구조 자체가 훌륭한 지도 역할을 합니다.</p>\n<ul><li>ILR의 학문 분류: 조직행동(Organizational Behavior) · 노동경제학(Labor Economics) · 노사관계법과 역사(Labor Relations, Law, and History) · 국제비교노동(International &amp; Comparative Labor) · 사회통계(Social Statistics)</li><li>무료로 접근 가능한 건 거의 없고 대부분 <strong>eCornell 유료 인증과정</strong>(단체교섭 시뮬레이션, 조사(investigation) 기법 등 실무 워크숍)입니다 — 관심 있다면 <a href=\"https://www.ilr.cornell.edu/programs/professional-education\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.ilr.cornell.edu/programs/professional-education\">ilr.cornell.edu</a> 참고</li><li>이 레포에서는 이 구조를 <strong>참고 지도</strong>로만 쓰고, 실제 학습은 MIT 15.667(협상)과 KOCW의 노사관계 관련 챕터, 그리고 아래 무료 교재로 대체합니다</li></ul>\n<p><strong>무료 대체 자료:</strong> Beginning Management of Human Resources (3학기에서 이미 소개) 의 노사관계(Labor Relations) 챕터 + OpenStax Organizational Behavior Ch.13 (Managing Conflict and Negotiation)</p>\n<hr>\n<h2 id=\"주차별-계획-810주-기준\">주차별 계획 (8~10주 기준)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>주차</th><th>주제</th><th>학습 콘텐츠</th></tr></thead><tbody>\n<tr><td data-label=\"주차\">1주</td><td data-label=\"주제\">협상의 기본 구조</td><td data-label=\"학습 콘텐츠\">MIT 15.667 &quot;Negotiation 101&quot; 패키지</td></tr>\n<tr><td data-label=\"주차\">2주</td><td data-label=\"주제\">분배적 vs 통합적 협상</td><td data-label=\"학습 콘텐츠\">MIT 15.667 Session 3~4</td></tr>\n<tr><td data-label=\"주차\">3주</td><td data-label=\"주제\">권력과 윤리</td><td data-label=\"학습 콘텐츠\">MIT 15.667 &quot;Ethics and Machiavelli&quot; 세션</td></tr>\n<tr><td data-label=\"주차\">4주</td><td data-label=\"주제\">협상 심화 실습</td><td data-label=\"학습 콘텐츠\">Wharton <code>Achieving Personal and Professional Success</code> Negotiation 모듈</td></tr>\n<tr><td data-label=\"주차\">5주</td><td data-label=\"주제\">성과 측정의 함정</td><td data-label=\"학습 콘텐츠\">Wharton People Analytics Week 1 (Performance Evaluation)</td></tr>\n<tr><td data-label=\"주차\">6주</td><td data-label=\"주제\">승진·평가 데이터 분석</td><td data-label=\"학습 콘텐츠\">Wharton People Analytics Week 2~3</td></tr>\n<tr><td data-label=\"주차\">7주</td><td data-label=\"주제\">채용·보상의 데이터 기반 접근</td><td data-label=\"학습 콘텐츠\">Wharton People Analytics 나머지</td></tr>\n<tr><td data-label=\"주차\">8주</td><td data-label=\"주제\">적응적 리더십 개론</td><td data-label=\"학습 콘텐츠\">HarvardX Exercising Leadership 전반부</td></tr>\n<tr><td data-label=\"주차\">9주</td><td data-label=\"주제\">변화와 신뢰 구축</td><td data-label=\"학습 콘텐츠\">HarvardX Exercising Leadership 후반부</td></tr>\n<tr><td data-label=\"주차\">10주</td><td data-label=\"주제\">노사관계 개관 + 4학기 정리</td><td data-label=\"학습 콘텐츠\">Cornell ILR 구조 훑어보기 + Beginning Mgmt of HR 노사관계 챕터</td></tr>\n</tbody></table></div>\n<hr>\n<h2 id=\"과제-산출물\">과제 / 산출물</h2>\n<ol><li><strong>협상 시뮬레이션 기록</strong>: 실제로 협상(연봉, 이직 조건, 팀 내 자원 배분 등 무엇이든)을 하나 해보고, 분배적/통합적 전략 중 무엇을 썼는지, 결과가 어땠는지 기록</li><li><strong>데이터 함정 체크리스트</strong>: People Analytics에서 배운 4가지 함정(평균 회귀, 표본 크기, 신호 독립성, 과정 vs 결과)을 본인 언어로 정리하고 실제 사례에 적용</li><li><code>notes.md</code>에 정리해서 커밋</li></ol>\n<hr>\n<h2 id=\"체크리스트\">체크리스트</h2>\n<ul class=\"tasks\"><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s4:14vd93d\"> <span>MIT 15.667 Negotiation and Conflict Management 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s4:1jpkidh\"> <span>Wharton People Analytics 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s4:1lg5w81\"> <span>HarvardX Exercising Leadership 완주</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s4:1hvt32a\"> <span>Cornell ILR 커리큘럼 구조 훑어보기</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s4:1rhp74o\"> <span>협상 시뮬레이션 기록 작성</span></label></li><li class=\"task\"><label><input type=\"checkbox\" data-key=\"task:s4:6perwj\"> <span><a href=\"#/page/tracker\"><code>progress-tracker.md</code></a>에 4학기 완료 체크</span></label></li></ul>\n<hr>\n<h2 id=\"졸업\">졸업</h2>\n<p>4학기까지 마쳤다면 <a href=\"#/page/capstone\"><code>../capstone/README.md</code></a> 로 이동해 졸업 프로젝트를 진행하세요. 실제 기업 하나를 골라 4학기 동안 배운 모든 렌즈(조직행동·리더십·조직설계·HRM·협상·데이터)로 분석하는 최종 프로젝트입니다.</p>",
   "toc": [
    {
     "level": 2,
     "text": "학습목표",
     "slug": "학습목표"
    },
    {
     "level": 2,
     "text": "핵심 코스",
     "slug": "핵심-코스"
    },
    {
     "level": 3,
     "text": "왜 이 조합인가",
     "slug": "왜-이-조합인가"
    },
    {
     "level": 2,
     "text": "노사관계론(Industrial Relations) — Cornell ILR School 참고",
     "slug": "노사관계론industrial-relations-cornell-ilr-school-참고"
    },
    {
     "level": 2,
     "text": "주차별 계획 (8~10주 기준)",
     "slug": "주차별-계획-810주-기준"
    },
    {
     "level": 2,
     "text": "과제 / 산출물",
     "slug": "과제-산출물"
    },
    {
     "level": 2,
     "text": "체크리스트",
     "slug": "체크리스트"
    },
    {
     "level": 2,
     "text": "졸업",
     "slug": "졸업"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/semester-4-strategic-advanced/README.md"
  },
  {
   "id": "capstone",
   "path": "capstone/README.md",
   "nav": "캡스톤 프로젝트",
   "group": "course",
   "short": "캡스톤",
   "title": "🎓 캡스톤 프로젝트 — 실제 조직 분석 리포트",
   "summary": "MIT 15.311(Organizational Processes)의 핵심 과제가 \"실제 조직의 변화 이니셔티브를 현장 연구하는 팀 프로젝트\"인 것에서 착안했습니다. 팀이 없으니 혼자서, 공개된 정보만으로 진행하는 버전입니다.",
   "html": "<blockquote><p>MIT 15.311(Organizational Processes)의 핵심 과제가 &quot;실제 조직의 변화 이니셔티브를 현장 연구하는 팀 프로젝트&quot;인 것에서 착안했습니다. 팀이 없으니 혼자서, 공개된 정보만으로 진행하는 버전입니다.</p></blockquote>\n<hr>\n<h2 id=\"목표\">목표</h2>\n<p>4개 학기 동안 배운 렌즈를 <strong>하나의 실제 기업</strong>에 전부 적용해서, 스스로 &quot;인사조직 관점의 기업 분석 보고서&quot;를 완성합니다. 취업/이직 준비 중이라면 지원하고 싶은 회사를 선택하는 것도 좋은 전략입니다 — 면접에서 바로 써먹을 수 있는 인사이트가 나옵니다.</p>\n<hr>\n<h2 id=\"분석-대상-고르는-법\">분석 대상 고르는 법</h2>\n<p>아래 조건 중 2개 이상을 만족하는 기업을 고르세요 — 공개 정보가 충분해야 분석이 가능합니다.</p>\n<ul><li>상장기업 (사업보고서/IR 자료로 조직·인력 정보 확인 가능)</li><li>최근 3년 내 조직개편, 대규모 채용/구조조정, CEO 교체 등 <strong>뉴스가 된 조직 이벤트</strong>가 있는 곳</li><li>Glassdoor, 잡플래닛 등에 리뷰가 충분히 쌓인 곳</li><li>본인이 재직했거나 인턴 경험이 있는 곳 (내부자 관점 추가 가능)</li></ul>\n<hr>\n<h2 id=\"보고서-구조-학기별-렌즈-매핑\">보고서 구조 (학기별 렌즈 매핑)</h2>\n<h3 id=\"1부-조직행동-진단-1학기-렌즈\">1부 — 조직행동 진단 (1학기 렌즈)</h3>\n<ul><li>이 회사의 채용 공고, 인터뷰 후기, 재직자 리뷰에서 드러나는 <strong>동기부여 방식</strong>은? (내재적/외재적 동기 중 무엇을 강조하는가)</li><li>의사결정 구조는 톱다운인가 자율성 기반인가?</li></ul>\n<h3 id=\"2부-리더십조직설계-진단-2학기-렌즈\">2부 — 리더십·조직설계 진단 (2학기 렌즈)</h3>\n<ul><li>MIT 15.311의 3-렌즈(전략적 설계/정치적/문화적)로 최근 조직개편 또는 리더십 교체 사례 1건을 분석</li><li>조직도(공개된 정보 기준 추정)를 그려보고 기능조직/사업부제/매트릭스 중 어디에 가까운지 판단</li></ul>\n<h3 id=\"3부-hrm-제도-진단-3학기-렌즈\">3부 — HRM 제도 진단 (3학기 렌즈)</h3>\n<ul><li>채용 프로세스 (공고 → 전형 단계) 재구성</li><li>평가·보상 체계에 대해 알려진 정보 정리 (연봉 정보 플랫폼, 재직자 리뷰 활용)</li><li>눈에 띄는 인재 유지 정책(복지, 성장 기회 등)</li></ul>\n<h3 id=\"4부-전략데이터협상-관점-4학기-렌즈\">4부 — 전략·데이터·협상 관점 (4학기 렌즈)</h3>\n<ul><li>People Analytics 관점에서, 이 회사가 성과관리에서 빠지기 쉬운 함정은 무엇일지 가설 세우기</li><li>이 회사와 협상한다면(연봉, 이직 제안 등) 어떤 지렛대를 쓸 수 있을지 시뮬레이션</li></ul>\n<h3 id=\"5부-종합-의견\">5부 — 종합 의견</h3>\n<ul><li>인사조직 관점에서 이 회사의 강점/약점 3가지씩</li><li>본인이 이 회사의 HR 리더라면 가장 먼저 손댈 것 1가지</li></ul>\n<hr>\n<h2 id=\"산출물-형식\">산출물 형식</h2>\n<ul><li><code>report.md</code> 파일로 이 폴더에 작성 (분량 제한 없음, A4 5~10장 분량 권장)</li><li>표/다이어그램은 마크다운 표나 mermaid 문법으로 삽입 가능</li><li>참고한 공개 자료(뉴스 기사, IR 자료, 리뷰 사이트)는 하단에 출처로 명시 — <strong>원문을 그대로 복사하지 말고 본인 언어로 요약/인용은 짧게만</strong></li></ul>\n<hr>\n<h2 id=\"완료-후\">완료 후</h2>\n<p>이 리포트를 완성하면 4학기 커리큘럼이 마무리됩니다. <a href=\"#/page/tracker\"><code>progress-tracker.md</code></a>의 &quot;졸업&quot; 항목에 체크하고, README.md 상단에 스스로 &quot;OO년 OO월 수료&quot;를 추가해도 좋습니다 — 어차피 이 대학의 총장은 본인이니까요.</p>",
   "toc": [
    {
     "level": 2,
     "text": "목표",
     "slug": "목표"
    },
    {
     "level": 2,
     "text": "분석 대상 고르는 법",
     "slug": "분석-대상-고르는-법"
    },
    {
     "level": 2,
     "text": "보고서 구조 (학기별 렌즈 매핑)",
     "slug": "보고서-구조-학기별-렌즈-매핑"
    },
    {
     "level": 3,
     "text": "1부 — 조직행동 진단 (1학기 렌즈)",
     "slug": "1부-조직행동-진단-1학기-렌즈"
    },
    {
     "level": 3,
     "text": "2부 — 리더십·조직설계 진단 (2학기 렌즈)",
     "slug": "2부-리더십조직설계-진단-2학기-렌즈"
    },
    {
     "level": 3,
     "text": "3부 — HRM 제도 진단 (3학기 렌즈)",
     "slug": "3부-hrm-제도-진단-3학기-렌즈"
    },
    {
     "level": 3,
     "text": "4부 — 전략·데이터·협상 관점 (4학기 렌즈)",
     "slug": "4부-전략데이터협상-관점-4학기-렌즈"
    },
    {
     "level": 3,
     "text": "5부 — 종합 의견",
     "slug": "5부-종합-의견"
    },
    {
     "level": 2,
     "text": "산출물 형식",
     "slug": "산출물-형식"
    },
    {
     "level": 2,
     "text": "완료 후",
     "slug": "완료-후"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/capstone/README.md"
  },
  {
   "id": "textbooks",
   "path": "resources/open-textbooks.md",
   "nav": "무료 원서 교재",
   "group": "resources",
   "title": "무료 원서 교재 (Open Textbooks)",
   "summary": "",
   "html": "<p>이 커리큘럼 전체에서 사용하는 무료 공개 교재 목록입니다. 모두 대학에서 실제로 채택해 쓰는 수준의 정식 교재이며, 오픈 라이선스(CC BY 계열)로 배포되어 합법적으로 무료 열람이 가능합니다.</p>\n<hr>\n<h2 id=\"1-organizational-behavior-openstax\">1. Organizational Behavior (OpenStax)</h2>\n<ul><li><strong>저자:</strong> J. Stewart Black (INSEAD), David S. Bright (Wright State University) 외 다수</li><li><strong>링크:</strong> <a href=\"https://openstax.org/details/books/organizational-behavior\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://openstax.org/details/books/organizational-behavior\">openstax.org</a></li><li><strong>라이선스:</strong> CC BY-NC-SA / CC BY (챕터별로 표기 확인)</li><li><strong>분량:</strong> 총 17개 챕터, 개인 행동부터 조직 변화까지 OB 전 영역 커버</li><li><strong>활용 학기:</strong> 1학기(개인·집단), 2학기(리더십·구조·문화)</li></ul>\n<h3 id=\"주요-목차-이-레포와의-대응\">주요 목차 (이 레포와의 대응)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>챕터</th><th>제목</th><th>대응 학기</th></tr></thead><tbody>\n<tr><td data-label=\"챕터\">1</td><td data-label=\"제목\">Introduction to Organizational Behavior</td><td data-label=\"대응 학기\">1학기 1주</td></tr>\n<tr><td data-label=\"챕터\">2</td><td data-label=\"제목\">Individual and Cultural Factors</td><td data-label=\"대응 학기\">1학기</td></tr>\n<tr><td data-label=\"챕터\">4</td><td data-label=\"제목\">Individual Attitudes and Behaviors</td><td data-label=\"대응 학기\">1학기</td></tr>\n<tr><td data-label=\"챕터\">6</td><td data-label=\"제목\">Perception and Managerial Decision Making</td><td data-label=\"대응 학기\">1학기</td></tr>\n<tr><td data-label=\"챕터\">7</td><td data-label=\"제목\">Work Motivation for Performance</td><td data-label=\"대응 학기\">1학기</td></tr>\n<tr><td data-label=\"챕터\">8</td><td data-label=\"제목\">Performance Appraisal and Rewards Systems</td><td data-label=\"대응 학기\">3학기</td></tr>\n<tr><td data-label=\"챕터\">9</td><td data-label=\"제목\">Group Behavior</td><td data-label=\"대응 학기\">1학기</td></tr>\n<tr><td data-label=\"챕터\">10</td><td data-label=\"제목\">Leaders and Leadership</td><td data-label=\"대응 학기\">2학기</td></tr>\n<tr><td data-label=\"챕터\">11</td><td data-label=\"제목\">Power and Politics</td><td data-label=\"대응 학기\">2학기</td></tr>\n<tr><td data-label=\"챕터\">13</td><td data-label=\"제목\">Managing Conflict and Negotiation</td><td data-label=\"대응 학기\">4학기</td></tr>\n<tr><td data-label=\"챕터\">14</td><td data-label=\"제목\">Organizational Structure and Change</td><td data-label=\"대응 학기\">2학기</td></tr>\n<tr><td data-label=\"챕터\">15</td><td data-label=\"제목\">The Organization's External Environment</td><td data-label=\"대응 학기\">2학기</td></tr>\n<tr><td data-label=\"챕터\">16</td><td data-label=\"제목\">Organizational Culture</td><td data-label=\"대응 학기\">2학기</td></tr>\n<tr><td data-label=\"챕터\">17</td><td data-label=\"제목\">Human Resource Management (Application)</td><td data-label=\"대응 학기\">3학기</td></tr>\n</tbody></table></div>\n<hr>\n<h2 id=\"2-beginning-management-of-human-resources-open-textbook-library\">2. Beginning Management of Human Resources (Open Textbook Library)</h2>\n<ul><li><strong>링크:</strong> <a href=\"https://open.umn.edu/opentextbooks/textbooks/71\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://open.umn.edu/opentextbooks/textbooks/71\">open.umn.edu</a></li><li><strong>라이선스:</strong> 오픈 교재 (Open Textbook Library 수록, 무료 PDF/온라인)</li><li><strong>분량:</strong> 채용, 선발, 교육훈련, 보상·복리후생, 노사관계, 안전보건 등 HRM 전 영역</li><li><strong>활용 학기:</strong> 3학기(HRM), 4학기(노사관계 보충)</li><li><strong>특징:</strong> SHRM/HRCI 가이드라인에 부합하는 실무 중심 구성. 입문 수준으로 컴공생이 읽기에 부담 없음</li></ul>\n<hr>\n<h2 id=\"3-principles-of-management-openstax-ch11-human-resource-management\">3. Principles of Management (OpenStax), Ch.11 Human Resource Management</h2>\n<ul><li><strong>링크:</strong> <a href=\"https://openstax.org/books/principles-management/pages/11-1-an-introduction-to-human-resource-management\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://openstax.org/books/principles-management/pages/11-1-an-introduction-to-human-resource-management\">openstax.org</a></li><li><strong>라이선스:</strong> CC BY</li><li><strong>활용:</strong> HR의 진화 과정(&quot;Wave 1~4&quot; 프레임워크), HR 컴플라이언스 개요를 짧고 빠르게 훑을 때 유용</li><li><strong>활용 학기:</strong> 3학기 도입부</li></ul>\n<hr>\n<h2 id=\"이용-방법\">이용 방법</h2>\n<ol><li>각 링크에서 온라인으로 바로 읽거나, PDF/EPUB 다운로드 가능 (로그인 불필요)</li><li>챕터 단위로 발췌해서 읽어도 무방 — 순서대로 완독할 필요 없음</li><li><strong>주의:</strong> 이 교재들을 이 레포에 통째로 복사해서 올리지 마세요. 링크만 유지하고, 본인이 읽고 요약한 노트만 커밋하는 것이 저작권상 안전하고, 학습 효과도 훨씬 큽니다 (직접 요약해야 남습니다)</li></ol>",
   "toc": [
    {
     "level": 2,
     "text": "1. Organizational Behavior (OpenStax)",
     "slug": "1-organizational-behavior-openstax"
    },
    {
     "level": 3,
     "text": "주요 목차 (이 레포와의 대응)",
     "slug": "주요-목차-이-레포와의-대응"
    },
    {
     "level": 2,
     "text": "2. Beginning Management of Human Resources (Open Textbook Library)",
     "slug": "2-beginning-management-of-human-resources-open-textbook-library"
    },
    {
     "level": 2,
     "text": "3. Principles of Management (OpenStax), Ch.11 Human Resource Management",
     "slug": "3-principles-of-management-openstax-ch11-human-resource-management"
    },
    {
     "level": 2,
     "text": "이용 방법",
     "slug": "이용-방법"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/resources/open-textbooks.md"
  },
  {
   "id": "curricula",
   "path": "resources/university-curricula-comparison.md",
   "nav": "대학 커리큘럼 비교",
   "group": "resources",
   "title": "국내외 대학 커리큘럼 비교 분석",
   "summary": "이 문서는 \"왜 이 레포가 4학기·이 순서로 짜여졌는가\"에 대한 근거 자료입니다. MIT, Stanford, Wharton(UPenn), Michigan, Harvard, Cornell 그리고 서울대·고려대·연세대 경영대학의 인사조직 관련 커리큘럼 구조를 조사·비교했습니다.",
   "html": "<blockquote><p>이 문서는 &quot;왜 이 레포가 4학기·이 순서로 짜여졌는가&quot;에 대한 근거 자료입니다. MIT, Stanford, Wharton(UPenn), Michigan, Harvard, Cornell 그리고 서울대·고려대·연세대 경영대학의 인사조직 관련 커리큘럼 구조를 조사·비교했습니다.</p></blockquote>\n<hr>\n<h2 id=\"1-비교표\">1. 비교표</h2>\n<div class=\"table-wrap wide\"><table><thead><tr><th>학교</th><th>소속 단과대</th><th>인사조직 트랙/전공명</th><th>세부 구성</th><th>무료 공개 강의</th></tr></thead><tbody>\n<tr><td data-label=\"학교\"><strong>MIT</strong></td><td data-label=\"소속 단과대\">Sloan School of Management</td><td data-label=\"인사조직 트랙/전공명\">Organizational Behavior / Industrial Relations &amp; HR (강좌 코드 15.3xx, 15.6xx)</td><td data-label=\"세부 구성\">개인·집단 행동(15.341), 조직 프로세스(15.311), 조직설계(15.320), 전략적 HR(15.660), 협상(15.667)</td><td data-label=\"무료 공개 강의\">★★★★★ MIT OCW로 10개 이상 강좌 완전 공개</td></tr>\n<tr><td data-label=\"학교\"><strong>Stanford</strong></td><td data-label=\"소속 단과대\">Graduate School of Education / GSB 교차</td><td data-label=\"인사조직 트랙/전공명\">Organizational Behavior (조직사회학 기반)</td><td data-label=\"세부 구성\">조직이론 10개 렌즈 중심의 단일 대표 강좌</td><td data-label=\"무료 공개 강의\">★★★☆☆ Coursera 1개 강좌 (McFarland)</td></tr>\n<tr><td data-label=\"학교\"><strong>Wharton (UPenn)</strong></td><td data-label=\"소속 단과대\">Management Department</td><td data-label=\"인사조직 트랙/전공명\">Organizational Behavior, People Analytics</td><td data-label=\"세부 구성\">사회적/인적 자본 관리, 데이터 기반 인사(People Analytics), 협상</td><td data-label=\"무료 공개 강의\">★★★★☆ Coursera로 다수 강좌 공개 (Useem, Cappelli, Massey, Bidwell 등)</td></tr>\n<tr><td data-label=\"학교\"><strong>Michigan (Ross)</strong></td><td data-label=\"소속 단과대\">Management &amp; Organizations</td><td data-label=\"인사조직 트랙/전공명\">Leading People and Teams</td><td data-label=\"세부 구성\">동기부여, 인재관리, 영향력, 팀 리딩 4단계 구성</td><td data-label=\"무료 공개 강의\">★★★★☆ Coursera Specialization 전체 공개</td></tr>\n<tr><td data-label=\"학교\"><strong>Harvard</strong></td><td data-label=\"소속 단과대\">Business School (박사과정은 사회학과 공동 운영) / Kennedy School</td><td data-label=\"인사조직 트랙/전공명\">Organizational Behavior (HBS), Adaptive Leadership (HKS)</td><td data-label=\"세부 구성\">HBS 자체 강의는 대부분 비공개(MBA 케이스 중심), 리더십 이론은 HarvardX로 일부 공개</td><td data-label=\"무료 공개 강의\">★★☆☆☆ HarvardX 리더십 강좌 위주, HBS Online은 대부분 유료</td></tr>\n<tr><td data-label=\"학교\"><strong>Cornell</strong></td><td data-label=\"소속 단과대\">ILR School (Industrial and Labor Relations) — 아이비리그 유일의 노동/인사 특화 단과대</td><td data-label=\"인사조직 트랙/전공명\">Organizational Behavior, Labor Economics, Labor Relations Law &amp; History, International &amp; Comparative Labor</td><td data-label=\"세부 구성\">단과대 전체가 인사조직·노동 문제에 특화된 유일한 사례</td><td data-label=\"무료 공개 강의\">★☆☆☆☆ 대부분 eCornell 유료 인증과정</td></tr>\n<tr><td data-label=\"학교\"><strong>서울대학교</strong></td><td data-label=\"소속 단과대\">경영대학</td><td data-label=\"인사조직 트랙/전공명\">인사조직 (7개 전공 트랙 중 하나)</td><td data-label=\"세부 구성\">조직행위·조직이론·인사관리·노사관계 4개 세부전공으로 대학원 운영</td><td data-label=\"무료 공개 강의\">정규 학위과정만 존재 (KOCW 등 공개강좌는 타 대학이 더 활발)</td></tr>\n<tr><td data-label=\"학교\"><strong>고려대학교</strong></td><td data-label=\"소속 단과대\">경영대학</td><td data-label=\"인사조직 트랙/전공명\">인사조직 (8개 세부분야 중 하나: 국제경영·마케팅·인사조직·전략·재무·회계·LSOM·MIS)</td><td data-label=\"세부 구성\">학부-대학원 연계 구조</td><td data-label=\"무료 공개 강의\">정규 학위과정 중심</td></tr>\n<tr><td data-label=\"학교\"><strong>연세대학교</strong></td><td data-label=\"소속 단과대\">경영대학</td><td data-label=\"인사조직 트랙/전공명\">트랙제도 내 인사조직 관련 과목군</td><td data-label=\"세부 구성\">트랙별 로드맵 운영</td><td data-label=\"무료 공개 강의\">정규 학위과정 중심</td></tr>\n</tbody></table></div>\n<hr>\n<h2 id=\"2-공통점-거의-모든-학교가-3두-체제를-쓴다\">2. 공통점: 거의 모든 학교가 &quot;3두 체제&quot;를 쓴다</h2>\n<p>조사한 모든 학교(미국 5곳 + 한국 3곳)가 세부 명칭은 달라도 구조적으로 동일한 3가지 축을 갖고 있습니다.</p>\n<pre><code>① 조직행동 (심리학 기반)   — 개인·집단이 &quot;왜&quot; 그렇게 행동하는가\n② 인적자원관리 (제도·실무)  — 사람을 &quot;어떻게&quot; 관리하는가\n③ 노사관계 (법·제도)        — 노동자-사용자 관계를 규율하는 규칙</code></pre>\n<p>이는 나무위키 &quot;인사조직관리&quot; 문서의 분류(조직행동론/조직구조론/인적자원관리/노사관계론)와도 정확히 일치합니다. <strong>이 레포의 4학기 구성(①→②→③④ 통합)이 바로 이 공통 구조를 따른 것입니다.</strong></p>\n<hr>\n<h2 id=\"3-차이점-이론-중심미국-vs-제도자격증-연계한국\">3. 차이점: 이론 중심(미국) vs 제도·자격증 연계(한국)</h2>\n<ul><li><strong>미국 학교(특히 MIT, Stanford)</strong>: 심리학·사회학 논문을 비판적으로 읽고 이론을 세우는 훈련이 강합니다. MIT 15.341처럼 &quot;중요 논문을 원전으로 분석&quot;하는 방식이 흔합니다.</li><li><strong>Wharton, Michigan</strong>: 이론보다 매니저가 바로 쓸 수 있는 프레임워크와 도구 중심 — MBA 실무형 접근.</li><li><strong>Cornell ILR</strong>: 유일하게 노동법·단체교섭 등 <strong>법·제도 실무</strong>에 깊게 들어가는 학교. 다만 무료 공개 자료가 적습니다.</li><li><strong>한국 학교(서울대·고려대·연세대)</strong>: 학부에서는 이론보다 사례 중심 팀 프로젝트가 많고(서울대 경영대학 학생 후기 기준), 대학원은 다시 이론 중심으로 전환됩니다. 실무 자격증(공인노무사)과의 연계가 미국보다 뚜렷합니다 — 노무사 2차 시험 과목이 &quot;인사노무관리론&quot;, &quot;경영조직론&quot;으로 이 커리큘럼의 3학기·2학기 내용과 거의 겹칩니다.</li></ul>\n<hr>\n<h2 id=\"4-시사점-이-레포가-이렇게-설계된-이유\">4. 시사점: 이 레포가 이렇게 설계된 이유</h2>\n<ol><li><strong>1~2학기(조직행동·리더십·조직설계)는 MIT+Stanford의 &quot;이론 중심&quot; 강의를 뼈대로 삼았습니다</strong> — 컴공생 특성상 프레임워크를 원리부터 이해하는 학습 방식이 익숙할 것이라 판단했습니다.</li><li><strong>3학기(HRM)는 Wharton의 &quot;실무 매니저&quot; 관점 강의를 중심으로 배치</strong>했습니다 — 이론만으로는 실무 감각이 안 생기는 영역이기 때문입니다.</li><li><strong>4학기는 Cornell ILR과 하버드가 강점을 보이는 영역(노사관계, 적응적 리더십)을 무료 대체재(교재, HarvardX)로 보완</strong>했습니다 — 두 학교 모두 최고 권위자이지만 무료 콘텐츠가 부족한 공통 한계가 있어서입니다.</li><li><strong>KOCW는 전 학기에 보충재로 배치</strong>했습니다 — 한국 기업 맥락의 용어와 제도(예: 인사고과, 노무관리)를 놓치지 않기 위해서입니다.</li></ol>\n<hr>\n<h2 id=\"5-참고-한국의-인사조직-관련-시험-체계\">5. 참고: 한국의 인사조직 관련 시험 체계</h2>\n<p>나무위키 문서에 따르면 인사조직관리는 아래 시험의 과목으로도 채택됩니다 — 이 레포를 마치면 아래 시험 대비에도 기초 체력이 됩니다.</p>\n<ul><li>5급/7급 공개경쟁채용시험 (행정직-인사조직): &quot;인사조직론&quot;</li><li>공인노무사 1차: &quot;경영학&quot; / 2차 필수: &quot;인사노무관리론&quot; / 2차 선택: &quot;경영조직론&quot;</li><li>경영지도사</li></ul>\n<p>자세한 내용은 <a href=\"#/page/certs\"><code>certifications-and-exams.md</code></a> 참고.</p>",
   "toc": [
    {
     "level": 2,
     "text": "1. 비교표",
     "slug": "1-비교표"
    },
    {
     "level": 2,
     "text": "2. 공통점: 거의 모든 학교가 \"3두 체제\"를 쓴다",
     "slug": "2-공통점-거의-모든-학교가-3두-체제를-쓴다"
    },
    {
     "level": 2,
     "text": "3. 차이점: 이론 중심(미국) vs 제도·자격증 연계(한국)",
     "slug": "3-차이점-이론-중심미국-vs-제도자격증-연계한국"
    },
    {
     "level": 2,
     "text": "4. 시사점: 이 레포가 이렇게 설계된 이유",
     "slug": "4-시사점-이-레포가-이렇게-설계된-이유"
    },
    {
     "level": 2,
     "text": "5. 참고: 한국의 인사조직 관련 시험 체계",
     "slug": "5-참고-한국의-인사조직-관련-시험-체계"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/resources/university-curricula-comparison.md"
  },
  {
   "id": "certs",
   "path": "resources/certifications-and-exams.md",
   "nav": "자격증·시험 지도",
   "group": "resources",
   "title": "자격증 및 시험 지도",
   "summary": "",
   "html": "<p>이 커리큘럼을 마친 뒤 실무 자격으로 연결하고 싶다면 참고할 지도입니다. 나무위키 &quot;인사조직관리&quot; 문서의 분류를 기준으로 정리했습니다.</p>\n<hr>\n<h2 id=\"국내-자격증\">국내 자격증</h2>\n<h3 id=\"공인노무사-certified-labor-attorney\">공인노무사 (Certified Labor Attorney)</h3>\n<ul><li><strong>위상:</strong> 국내 인사·노무 분야 대표 국가전문자격</li><li><strong>시험 구성:</strong><ul><li>1차 (선택과목): 경영학 → 이 레포 1~3학기 전체와 관련</li><li>2차 (필수과목): 인사노무관리론 → <strong>3학기(HRM)</strong> 와 직접 대응</li><li>2차 (선택과목): 경영조직론 → <strong>1~2학기(조직행동·조직설계)</strong> 와 직접 대응</li></ul></li><li><strong>다루는 영역:</strong> 노동법, 인사·조직관리, 노무·행정쟁송</li><li><strong>이 레포와의 연결:</strong> 4학기의 Cornell ILR 참고 자료 + <a href=\"#/page/textbooks\"><code>resources/open-textbooks.md</code></a>의 노사관계 챕터가 보충 자료가 됩니다. 실제 수험을 준비한다면 별도의 노동법 전문 교재가 반드시 추가로 필요합니다 (이 레포는 시험 대비용이 아니라 개념 이해용입니다)</li></ul>\n<h3 id=\"경영지도사\">경영지도사</h3>\n<ul><li><strong>위상:</strong> 중소기업 경영 컨설팅 등에서 활용되는 국가전문자격</li><li><strong>이 레포와의 연결:</strong> 2~3학기의 조직설계·HRM 지식이 기초가 됩니다</li></ul>\n<h3 id=\"5급7급-공개경쟁채용시험-행정직\">5급/7급 공개경쟁채용시험 (행정직)</h3>\n<ul><li><strong>과목:</strong> 인사조직론</li><li><strong>이 레포와의 연결:</strong> 1~2학기 전체 + 나무위키 &quot;행정학에서는 인사행정론이라는 이름으로 연구&quot; 언급대로, 공무원 조직 맥락을 더하려면 행정학 개론을 별도로 참고하는 게 좋습니다</li></ul>\n<hr>\n<h2 id=\"해외-자격증-글로벌-hr-커리어를-고려한다면\">해외 자격증 (글로벌 HR 커리어를 고려한다면)</h2>\n<h3 id=\"phr-sphr-gphr-hrci-미국\">PHR · SPHR · GPHR (HRCI, 미국)</h3>\n<ul><li><strong>대상:</strong> HR 실무자 및 경력자</li><li><strong>특징:</strong> 글로벌 HRM 관점의 실무 역량, 전략적 사고, 법률/노무 이해를 평가</li><li><strong>요건:</strong> 약 2~4년 이상 실무 경력 필요</li><li><strong>이 레포와의 연결:</strong> 3학기(HRM) + 4학기(People Analytics) 가 개념적 기초를 제공. 실제 응시에는 HRCI 공식 학습 자료가 필요합니다</li></ul>\n<h3 id=\"shrm-cp-shrm-scp-shrm-미국\">SHRM-CP / SHRM-SCP (SHRM, 미국)</h3>\n<ul><li><strong>주관:</strong> 미국 인사관리학회(Society for Human Resource Management)</li><li><strong>구성:</strong> 기초 역량(SHRM-CP) → 고급 전략(SHRM-SCP)</li><li><strong>특징:</strong> 복수 국가에서 인정되는 글로벌 자격</li><li><strong>이 레포와의 연결:</strong> Cornell eCornell 인증과정 다수가 &quot;PHR/SPHR 재인증 학점(recertification credit)&quot;으로 인정되는 경우가 많으니, 4학기 이후 관심 있다면 <a href=\"https://www.ilr.cornell.edu/programs/professional-education\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ext\" title=\"https://www.ilr.cornell.edu/programs/professional-education\">ilr.cornell.edu</a> 참고</li></ul>\n<hr>\n<h2 id=\"자격증-로드맵-제안\">자격증 로드맵 제안</h2>\n<pre><code>이 4학기 커리큘럼 (개념 이해)\n        │\n        ├─→ 국내 취업/이직 목표  → 3학기 HRM 심화 + KOCW 반복 + 공인노무사 수험서 별도 학습\n        │\n        └─→ 해외/외국계 HR 커리어 목표 → 4학기 People Analytics 심화 + PHR/SHRM 공식 준비 과정</code></pre>\n<p>이 레포 자체는 시험 대비 교재가 아니라 <strong>개념 지도</strong>입니다. 실제 수험을 준비한다면 각 시험의 공식 기출/수험서를 반드시 별도로 준비하세요.</p>",
   "toc": [
    {
     "level": 2,
     "text": "국내 자격증",
     "slug": "국내-자격증"
    },
    {
     "level": 3,
     "text": "공인노무사 (Certified Labor Attorney)",
     "slug": "공인노무사-certified-labor-attorney"
    },
    {
     "level": 3,
     "text": "경영지도사",
     "slug": "경영지도사"
    },
    {
     "level": 3,
     "text": "5급/7급 공개경쟁채용시험 (행정직)",
     "slug": "5급7급-공개경쟁채용시험-행정직"
    },
    {
     "level": 2,
     "text": "해외 자격증 (글로벌 HR 커리어를 고려한다면)",
     "slug": "해외-자격증-글로벌-hr-커리어를-고려한다면"
    },
    {
     "level": 3,
     "text": "PHR · SPHR · GPHR (HRCI, 미국)",
     "slug": "phr-sphr-gphr-hrci-미국"
    },
    {
     "level": 3,
     "text": "SHRM-CP / SHRM-SCP (SHRM, 미국)",
     "slug": "shrm-cp-shrm-scp-shrm-미국"
    },
    {
     "level": 2,
     "text": "자격증 로드맵 제안",
     "slug": "자격증-로드맵-제안"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/resources/certifications-and-exams.md"
  },
  {
   "id": "glossary-doc",
   "path": "resources/glossary-kr-en.md",
   "nav": "용어 대조표 (원문)",
   "group": "resources",
   "title": "핵심 용어 한/영 대조표",
   "summary": "",
   "html": "<p>영어 강의와 한국어 강의(KOCW)를 오가며 학습할 때 헷갈리지 않도록 만든 용어 대조표입니다. 학기 순서대로 정리했습니다.</p>\n<h2 id=\"1학기-조직행동론-기초\">1학기 — 조직행동론 기초</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>한국어</th><th>영어</th></tr></thead><tbody>\n<tr><td data-label=\"한국어\">조직행동론</td><td data-label=\"영어\">Organizational Behavior (OB)</td></tr>\n<tr><td data-label=\"한국어\">동기부여 이론</td><td data-label=\"영어\">Motivation Theory</td></tr>\n<tr><td data-label=\"한국어\">지각</td><td data-label=\"영어\">Perception</td></tr>\n<tr><td data-label=\"한국어\">의사결정</td><td data-label=\"영어\">Decision Making</td></tr>\n<tr><td data-label=\"한국어\">태도와 직무만족</td><td data-label=\"영어\">Attitudes and Job Satisfaction</td></tr>\n<tr><td data-label=\"한국어\">조직시민행동</td><td data-label=\"영어\">Organizational Citizenship Behavior (OCB)</td></tr>\n<tr><td data-label=\"한국어\">집단 응집력</td><td data-label=\"영어\">Group Cohesion</td></tr>\n<tr><td data-label=\"한국어\">증거기반 경영</td><td data-label=\"영어\">Evidence-Based Management (EBM)</td></tr>\n</tbody></table></div>\n<h2 id=\"2학기-리더십팀조직설계\">2학기 — 리더십·팀·조직설계</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>한국어</th><th>영어</th></tr></thead><tbody>\n<tr><td data-label=\"한국어\">리더십</td><td data-label=\"영어\">Leadership</td></tr>\n<tr><td data-label=\"한국어\">권력과 정치</td><td data-label=\"영어\">Power and Politics</td></tr>\n<tr><td data-label=\"한국어\">조직문화</td><td data-label=\"영어\">Organizational Culture</td></tr>\n<tr><td data-label=\"한국어\">조직설계</td><td data-label=\"영어\">Organizational Design</td></tr>\n<tr><td data-label=\"한국어\">기능조직</td><td data-label=\"영어\">Functional Structure</td></tr>\n<tr><td data-label=\"한국어\">사업부제 조직</td><td data-label=\"영어\">Divisional Structure</td></tr>\n<tr><td data-label=\"한국어\">매트릭스 조직</td><td data-label=\"영어\">Matrix Structure</td></tr>\n<tr><td data-label=\"한국어\">조직변화/조직개혁</td><td data-label=\"영어\">Organizational Transformation / Change</td></tr>\n<tr><td data-label=\"한국어\">팀 경영</td><td data-label=\"영어\">Managing Teams</td></tr>\n<tr><td data-label=\"한국어\">영향력(공식권한 없는)</td><td data-label=\"영어\">Influence without Authority</td></tr>\n</tbody></table></div>\n<h2 id=\"3학기-인적자원관리\">3학기 — 인적자원관리</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>한국어</th><th>영어</th></tr></thead><tbody>\n<tr><td data-label=\"한국어\">인적자원관리</td><td data-label=\"영어\">Human Resource Management (HRM)</td></tr>\n<tr><td data-label=\"한국어\">직무분석</td><td data-label=\"영어\">Job Analysis</td></tr>\n<tr><td data-label=\"한국어\">직무평가</td><td data-label=\"영어\">Job Evaluation</td></tr>\n<tr><td data-label=\"한국어\">직무설계</td><td data-label=\"영어\">Job Design</td></tr>\n<tr><td data-label=\"한국어\">모집</td><td data-label=\"영어\">Recruitment</td></tr>\n<tr><td data-label=\"한국어\">선발</td><td data-label=\"영어\">Selection</td></tr>\n<tr><td data-label=\"한국어\">교육훈련</td><td data-label=\"영어\">Training and Development</td></tr>\n<tr><td data-label=\"한국어\">경력관리</td><td data-label=\"영어\">Career Management</td></tr>\n<tr><td data-label=\"한국어\">인사고과</td><td data-label=\"영어\">Performance Appraisal</td></tr>\n<tr><td data-label=\"한국어\">보상관리</td><td data-label=\"영어\">Compensation Management</td></tr>\n<tr><td data-label=\"한국어\">복리후생</td><td data-label=\"영어\">Benefits</td></tr>\n<tr><td data-label=\"한국어\">배치전환</td><td data-label=\"영어\">Job Rotation / Reassignment</td></tr>\n<tr><td data-label=\"한국어\">이직</td><td data-label=\"영어\">Turnover</td></tr>\n<tr><td data-label=\"한국어\">전략적 인적자본</td><td data-label=\"영어\">Strategic Human Capital</td></tr>\n<tr><td data-label=\"한국어\">고성과 인사시스템</td><td data-label=\"영어\">High-Performance HR System</td></tr>\n</tbody></table></div>\n<h2 id=\"4학기-협상데이터노사관계\">4학기 — 협상·데이터·노사관계</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>한국어</th><th>영어</th></tr></thead><tbody>\n<tr><td data-label=\"한국어\">협상</td><td data-label=\"영어\">Negotiation</td></tr>\n<tr><td data-label=\"한국어\">분배적 협상</td><td data-label=\"영어\">Distributive Negotiation</td></tr>\n<tr><td data-label=\"한국어\">통합적 협상</td><td data-label=\"영어\">Integrative (Mixed-Motive) Negotiation</td></tr>\n<tr><td data-label=\"한국어\">갈등관리</td><td data-label=\"영어\">Conflict Management</td></tr>\n<tr><td data-label=\"한국어\">피플 애널리틱스</td><td data-label=\"영어\">People Analytics</td></tr>\n<tr><td data-label=\"한국어\">평균으로의 회귀</td><td data-label=\"영어\">Regression to the Mean</td></tr>\n<tr><td data-label=\"한국어\">적응적 리더십</td><td data-label=\"영어\">Adaptive Leadership</td></tr>\n<tr><td data-label=\"한국어\">노사관계론 / 고용관계론</td><td data-label=\"영어\">Industrial Relations / Employment Relations</td></tr>\n<tr><td data-label=\"한국어\">노동조합</td><td data-label=\"영어\">Labor Union</td></tr>\n<tr><td data-label=\"한국어\">단체교섭</td><td data-label=\"영어\">Collective Bargaining</td></tr>\n<tr><td data-label=\"한국어\">노동법</td><td data-label=\"영어\">Labor Law</td></tr>\n</tbody></table></div>\n<h2 id=\"기초-학문-namuwiki-분류-기준\">기초 학문 (namu.wiki 분류 기준)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>한국어</th><th>영어</th></tr></thead><tbody>\n<tr><td data-label=\"한국어\">산업조직심리학</td><td data-label=\"영어\">Industrial and Organizational (I/O) Psychology</td></tr>\n<tr><td data-label=\"한국어\">조직경제학</td><td data-label=\"영어\">Organizational Economics</td></tr>\n<tr><td data-label=\"한국어\">조직사회학</td><td data-label=\"영어\">Organizational Sociology</td></tr>\n</tbody></table></div>",
   "toc": [
    {
     "level": 2,
     "text": "1학기 — 조직행동론 기초",
     "slug": "1학기-조직행동론-기초"
    },
    {
     "level": 2,
     "text": "2학기 — 리더십·팀·조직설계",
     "slug": "2학기-리더십팀조직설계"
    },
    {
     "level": 2,
     "text": "3학기 — 인적자원관리",
     "slug": "3학기-인적자원관리"
    },
    {
     "level": 2,
     "text": "4학기 — 협상·데이터·노사관계",
     "slug": "4학기-협상데이터노사관계"
    },
    {
     "level": 2,
     "text": "기초 학문 (namu.wiki 분류 기준)",
     "slug": "기초-학문-namuwiki-분류-기준"
    }
   ],
   "source": "https://github.com/FriOct/hr-org-management-curriculum/blob/main/resources/glossary-kr-en.md"
  }
 ],
 "tracker": [
  {
   "id": "orientation",
   "title": "Orientation",
   "heading": "0️⃣ Orientation",
   "pageId": "orientation",
   "items": [
    {
     "key": "tracker:orientation:17iyozt",
     "html": "경영학 지도 읽기",
     "text": "경영학 지도 읽기"
    },
    {
     "key": "tracker:orientation:yzth6j",
     "html": "학습 준비물 세팅 (Coursera/edX/KOCW 계정)",
     "text": "학습 준비물 세팅 (Coursera/edX/KOCW 계정)"
    }
   ],
   "hasDate": true
  },
  {
   "id": "s1",
   "title": "1학기 — 조직행동론 기초",
   "heading": "1학기 — 조직행동론 기초",
   "pageId": "s1",
   "items": [
    {
     "key": "tracker:s1:1i9yuk6",
     "html": "IESE <code>Organizational Behavior: How to Manage People</code>",
     "text": "IESE Organizational Behavior: How to Manage People"
    },
    {
     "key": "tracker:s1:1jn9ibg",
     "html": "MIT 15.341 Individuals, Groups, and Organizations",
     "text": "MIT 15.341 Individuals, Groups, and Organizations"
    },
    {
     "key": "tracker:s1:100ic52",
     "html": "Stanford <code>Organizational Analysis</code>",
     "text": "Stanford Organizational Analysis"
    },
    {
     "key": "tracker:s1:ljhzuc",
     "html": "KOCW 조직행동론",
     "text": "KOCW 조직행동론"
    },
    {
     "key": "tracker:s1:z7okzo",
     "html": "OpenStax OB Ch.1, 2, 4, 6, 7, 9",
     "text": "OpenStax OB Ch.1, 2, 4, 6, 7, 9"
    },
    {
     "key": "tracker:s1:ragflo",
     "html": "미니 케이스 분석 작성",
     "text": "미니 케이스 분석 작성"
    }
   ],
   "hasDate": true
  },
  {
   "id": "s2",
   "title": "2학기 — 리더십·팀·조직설계",
   "heading": "2학기 — 리더십·팀·조직설계",
   "pageId": "s2",
   "items": [
    {
     "key": "tracker:s2:1g98i6f",
     "html": "MIT 15.311 Organizational Processes",
     "text": "MIT 15.311 Organizational Processes"
    },
    {
     "key": "tracker:s2:cxij1e",
     "html": "MIT 15.320 Strategic Organizational Design",
     "text": "MIT 15.320 Strategic Organizational Design"
    },
    {
     "key": "tracker:s2:1y61u8i",
     "html": "Michigan <code>Leading People and Teams</code> (4개 코스 + 캡스톤)",
     "text": "Michigan Leading People and Teams (4개 코스 + 캡스톤)"
    },
    {
     "key": "tracker:s2:1ckccow",
     "html": "KOCW 리더십론",
     "text": "KOCW 리더십론"
    },
    {
     "key": "tracker:s2:ezur6o",
     "html": "OpenStax OB Ch.10, 11, 14, 15, 16",
     "text": "OpenStax OB Ch.10, 11, 14, 15, 16"
    },
    {
     "key": "tracker:s2:4jb0f2",
     "html": "3-렌즈 분석 리포트 작성",
     "text": "3-렌즈 분석 리포트 작성"
    }
   ],
   "hasDate": true
  },
  {
   "id": "s3",
   "title": "3학기 — 인적자원관리",
   "heading": "3학기 — 인적자원관리",
   "pageId": "s3",
   "items": [
    {
     "key": "tracker:s3:awt7yt",
     "html": "Wharton <code>Managing Social and Human Capital</code>",
     "text": "Wharton Managing Social and Human Capital"
    },
    {
     "key": "tracker:s3:sigvn2",
     "html": "MIT 15.660 Strategic HR Management",
     "text": "MIT 15.660 Strategic HR Management"
    },
    {
     "key": "tracker:s3:1h21egq",
     "html": "KOCW 인적자원관리 (2개 이상)",
     "text": "KOCW 인적자원관리 (2개 이상)"
    },
    {
     "key": "tracker:s3:12alzbk",
     "html": "Beginning Management of Human Resources",
     "text": "Beginning Management of Human Resources"
    },
    {
     "key": "tracker:s3:nhimbd",
     "html": "채용~평가~보상 미니 프로젝트",
     "text": "채용~평가~보상 미니 프로젝트"
    }
   ],
   "hasDate": true
  },
  {
   "id": "s4",
   "title": "4학기 — 전략·협상·피플애널리틱스·노사관계",
   "heading": "4학기 — 전략·협상·피플애널리틱스·노사관계",
   "pageId": "s4",
   "items": [
    {
     "key": "tracker:s4:zn91id",
     "html": "MIT 15.667 Negotiation and Conflict Management",
     "text": "MIT 15.667 Negotiation and Conflict Management"
    },
    {
     "key": "tracker:s4:m2t3qh",
     "html": "Wharton People Analytics",
     "text": "Wharton People Analytics"
    },
    {
     "key": "tracker:s4:1cukcy5",
     "html": "HarvardX Exercising Leadership",
     "text": "HarvardX Exercising Leadership"
    },
    {
     "key": "tracker:s4:r6fjrq",
     "html": "Cornell ILR 커리큘럼 구조 훑어보기",
     "text": "Cornell ILR 커리큘럼 구조 훑어보기"
    },
    {
     "key": "tracker:s4:19yx2lo",
     "html": "협상 시뮬레이션 기록",
     "text": "협상 시뮬레이션 기록"
    }
   ],
   "hasDate": true
  },
  {
   "id": "capstone",
   "title": "캡스톤 (졸업 프로젝트)",
   "heading": "🎓 캡스톤 (졸업 프로젝트)",
   "pageId": "capstone",
   "items": [
    {
     "key": "tracker:capstone:1291nz1",
     "html": "분석 대상 기업 선정",
     "text": "분석 대상 기업 선정"
    },
    {
     "key": "tracker:capstone:2ta856",
     "html": "<code>capstone/report.md</code> 작성 완료",
     "text": "capstone/report.md 작성 완료"
    }
   ],
   "hasDate": true
  }
 ],
 "weeks": {
  "s1": {
   "heading": "주차별 계획 (8~10주 기준)",
   "columns": [
    "주차",
    "주제",
    "학습 콘텐츠"
   ],
   "weeks": [
    {
     "n": 1,
     "label": "1주",
     "topic": "OB란 무엇인가",
     "content": "IESE 코스 Intro + OpenStax Ch.1",
     "key": "week:s1:1"
    },
    {
     "n": 2,
     "label": "2주",
     "topic": "동기부여 이론",
     "content": "IESE 코스 &quot;Motivation&quot; 모듈 + OpenStax Ch.7",
     "key": "week:s1:2"
    },
    {
     "n": 3,
     "label": "3주",
     "topic": "지각과 의사결정",
     "content": "OpenStax Ch.6 + Stanford 코스 Week 1~2 (합리적/연합체적 의사결정)",
     "key": "week:s1:3"
    },
    {
     "n": 4,
     "label": "4주",
     "topic": "리더십 개론",
     "content": "IESE 코스 &quot;Leadership&quot; 모듈",
     "key": "week:s1:4"
    },
    {
     "n": 5,
     "label": "5주",
     "topic": "팀워크와 집단 역학",
     "content": "IESE 코스 &quot;Teamwork&quot; 모듈 + OpenStax Ch.9",
     "key": "week:s1:5"
    },
    {
     "n": 6,
     "label": "6주",
     "topic": "조직문화 입문",
     "content": "IESE 코스 &quot;Culture&quot; 모듈",
     "key": "week:s1:6"
    },
    {
     "n": 7,
     "label": "7주",
     "topic": "개인·집단·조직 통합 관점",
     "content": "MIT 15.341 Lecture Notes 정독",
     "key": "week:s1:7"
    },
    {
     "n": 8,
     "label": "8주",
     "topic": "조직을 보는 이론적 렌즈",
     "content": "Stanford 코스 Week 3~6 (조직학습, 자원의존, 네트워크 이론)",
     "key": "week:s1:8"
    },
    {
     "n": 9,
     "label": "9주",
     "topic": "제도이론과 정당성",
     "content": "Stanford 코스 Week 7~9",
     "key": "week:s1:9"
    },
    {
     "n": 10,
     "label": "10주",
     "topic": "정리 + 한국어 복습",
     "content": "KOCW 조직행동론 완주 + 1학기 요약 노트 작성",
     "key": "week:s1:10"
    }
   ]
  },
  "s2": {
   "heading": "주차별 계획 (8~10주 기준)",
   "columns": [
    "주차",
    "주제",
    "학습 콘텐츠"
   ],
   "weeks": [
    {
     "n": 1,
     "label": "1주",
     "topic": "조직을 보는 세 가지 렌즈",
     "content": "MIT 15.311 Syllabus + Session 1 자료",
     "key": "week:s2:1"
    },
    {
     "n": 2,
     "label": "2주",
     "topic": "전략적 설계 관점",
     "content": "MIT 15.311 &quot;Strategic Design Lens&quot;",
     "key": "week:s2:2"
    },
    {
     "n": 3,
     "label": "3주",
     "topic": "정치적 관점과 권력",
     "content": "MIT 15.311 &quot;Political Lens&quot; + OpenStax Ch.11",
     "key": "week:s2:3"
    },
    {
     "n": 4,
     "label": "4주",
     "topic": "문화적 관점",
     "content": "MIT 15.311 &quot;Cultural Lens&quot; + OpenStax Ch.16",
     "key": "week:s2:4"
    },
    {
     "n": 5,
     "label": "5주",
     "topic": "개인에게 영감을 주고 동기부여하기",
     "content": "Michigan Course 1: Inspiring and Motivating Individuals",
     "key": "week:s2:5"
    },
    {
     "n": 6,
     "label": "6주",
     "topic": "인재 관리 입문",
     "content": "Michigan Course 2: Managing Talent",
     "key": "week:s2:6"
    },
    {
     "n": 7,
     "label": "7주",
     "topic": "공식 권한 없는 영향력",
     "content": "Michigan Course 3: Influencing People",
     "key": "week:s2:7"
    },
    {
     "n": 8,
     "label": "8주",
     "topic": "팀 빌딩과 팀 운영",
     "content": "Michigan Course 4: Leading Teams",
     "key": "week:s2:8"
    },
    {
     "n": 9,
     "label": "9주",
     "topic": "조직구조 설계",
     "content": "MIT 15.320 전체",
     "key": "week:s2:9"
    },
    {
     "n": 10,
     "label": "10주",
     "topic": "정리 + 한국어 복습",
     "content": "KOCW 리더십론 + MIT 15.322 훑어보기 + 2학기 요약",
     "key": "week:s2:10"
    }
   ]
  },
  "s3": {
   "heading": "나무위키 분류를 따라가는 주차별 계획 (8~10주 기준)",
   "columns": [
    "주차",
    "주제 (나무위키 분류)",
    "학습 콘텐츠"
   ],
   "weeks": [
    {
     "n": 1,
     "label": "1주",
     "topic": "HRM 전체 지도 그리기",
     "content": "Beginning Management of HR Ch.1 + OpenStax Principles of Mgmt 11.1",
     "key": "week:s3:1"
    },
    {
     "n": 2,
     "label": "2주",
     "topic": "직무관리 (직무분석·직무평가·직무설계)",
     "content": "Wharton 코스 &quot;Tasks vs. Jobs&quot; 모듈",
     "key": "week:s3:2"
    },
    {
     "n": 3,
     "label": "3주",
     "topic": "확보관리 (모집·선발)",
     "content": "Beginning Mgmt of HR 채용/선발 챕터",
     "key": "week:s3:3"
    },
    {
     "n": 4,
     "label": "4주",
     "topic": "개발관리 (교육훈련·경력관리)",
     "content": "KOCW 인적자원관리 (건국대) 관련 차시",
     "key": "week:s3:4"
    },
    {
     "n": 5,
     "label": "5주",
     "topic": "평가관리 (인사고과)",
     "content": "Wharton 코스 &quot;Good and Timely Decisions&quot; 모듈",
     "key": "week:s3:5"
    },
    {
     "n": 6,
     "label": "6주",
     "topic": "보상관리 (임금·복리후생)",
     "content": "Wharton 코스 &quot;Motivating Performance &amp; Reward Systems&quot; 모듈",
     "key": "week:s3:6"
    },
    {
     "n": 7,
     "label": "7주",
     "topic": "유지관리 (배치전환·이직·근무환경)",
     "content": "Beginning Mgmt of HR 관련 챕터",
     "key": "week:s3:7"
    },
    {
     "n": 8,
     "label": "8주",
     "topic": "전략적 인적자본 관점",
     "content": "MIT 15.660 전체 (Strategic HR Management)",
     "key": "week:s3:8"
    },
    {
     "n": 9,
     "label": "9주",
     "topic": "고성과 인사시스템 &amp; 조직 아키텍처",
     "content": "MIT 15.660 심화 + Wharton &quot;Organizational Architecture&quot; 모듈",
     "key": "week:s3:9"
    },
    {
     "n": 10,
     "label": "10주",
     "topic": "정리 + 한국어 복습",
     "content": "KOCW 인적자원관리(가천대) + 3학기 요약",
     "key": "week:s3:10"
    }
   ]
  },
  "s4": {
   "heading": "주차별 계획 (8~10주 기준)",
   "columns": [
    "주차",
    "주제",
    "학습 콘텐츠"
   ],
   "weeks": [
    {
     "n": 1,
     "label": "1주",
     "topic": "협상의 기본 구조",
     "content": "MIT 15.667 &quot;Negotiation 101&quot; 패키지",
     "key": "week:s4:1"
    },
    {
     "n": 2,
     "label": "2주",
     "topic": "분배적 vs 통합적 협상",
     "content": "MIT 15.667 Session 3~4",
     "key": "week:s4:2"
    },
    {
     "n": 3,
     "label": "3주",
     "topic": "권력과 윤리",
     "content": "MIT 15.667 &quot;Ethics and Machiavelli&quot; 세션",
     "key": "week:s4:3"
    },
    {
     "n": 4,
     "label": "4주",
     "topic": "협상 심화 실습",
     "content": "Wharton <code>Achieving Personal and Professional Success</code> Negotiation 모듈",
     "key": "week:s4:4"
    },
    {
     "n": 5,
     "label": "5주",
     "topic": "성과 측정의 함정",
     "content": "Wharton People Analytics Week 1 (Performance Evaluation)",
     "key": "week:s4:5"
    },
    {
     "n": 6,
     "label": "6주",
     "topic": "승진·평가 데이터 분석",
     "content": "Wharton People Analytics Week 2~3",
     "key": "week:s4:6"
    },
    {
     "n": 7,
     "label": "7주",
     "topic": "채용·보상의 데이터 기반 접근",
     "content": "Wharton People Analytics 나머지",
     "key": "week:s4:7"
    },
    {
     "n": 8,
     "label": "8주",
     "topic": "적응적 리더십 개론",
     "content": "HarvardX Exercising Leadership 전반부",
     "key": "week:s4:8"
    },
    {
     "n": 9,
     "label": "9주",
     "topic": "변화와 신뢰 구축",
     "content": "HarvardX Exercising Leadership 후반부",
     "key": "week:s4:9"
    },
    {
     "n": 10,
     "label": "10주",
     "topic": "노사관계 개관 + 4학기 정리",
     "content": "Cornell ILR 구조 훑어보기 + Beginning Mgmt of HR 노사관계 챕터",
     "key": "week:s4:10"
    }
   ]
  }
 },
 "glossary": {
  "sections": [
   "1학기 — 조직행동론 기초",
   "2학기 — 리더십·팀·조직설계",
   "3학기 — 인적자원관리",
   "4학기 — 협상·데이터·노사관계",
   "기초 학문 (namu.wiki 분류 기준)"
  ],
  "terms": [
   {
    "id": "zt86em",
    "ko": "조직행동론",
    "en": "Organizational Behavior (OB)",
    "section": "1학기 — 조직행동론 기초"
   },
   {
    "id": "np53a9",
    "ko": "동기부여 이론",
    "en": "Motivation Theory",
    "section": "1학기 — 조직행동론 기초"
   },
   {
    "id": "1a9s4ut",
    "ko": "지각",
    "en": "Perception",
    "section": "1학기 — 조직행동론 기초"
   },
   {
    "id": "c4bef3",
    "ko": "의사결정",
    "en": "Decision Making",
    "section": "1학기 — 조직행동론 기초"
   },
   {
    "id": "1ch334q",
    "ko": "태도와 직무만족",
    "en": "Attitudes and Job Satisfaction",
    "section": "1학기 — 조직행동론 기초"
   },
   {
    "id": "eyw0y1",
    "ko": "조직시민행동",
    "en": "Organizational Citizenship Behavior (OCB)",
    "section": "1학기 — 조직행동론 기초"
   },
   {
    "id": "1a18vy8",
    "ko": "집단 응집력",
    "en": "Group Cohesion",
    "section": "1학기 — 조직행동론 기초"
   },
   {
    "id": "1s15chj",
    "ko": "증거기반 경영",
    "en": "Evidence-Based Management (EBM)",
    "section": "1학기 — 조직행동론 기초"
   },
   {
    "id": "r99vcl",
    "ko": "리더십",
    "en": "Leadership",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "19bzyqq",
    "ko": "권력과 정치",
    "en": "Power and Politics",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "14xny8u",
    "ko": "조직문화",
    "en": "Organizational Culture",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "o6w764",
    "ko": "조직설계",
    "en": "Organizational Design",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "1cdvow7",
    "ko": "기능조직",
    "en": "Functional Structure",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "1mvpwoc",
    "ko": "사업부제 조직",
    "en": "Divisional Structure",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "1wdffrn",
    "ko": "매트릭스 조직",
    "en": "Matrix Structure",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "1bbig29",
    "ko": "조직변화/조직개혁",
    "en": "Organizational Transformation / Change",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "132adkf",
    "ko": "팀 경영",
    "en": "Managing Teams",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "1rk06hn",
    "ko": "영향력(공식권한 없는)",
    "en": "Influence without Authority",
    "section": "2학기 — 리더십·팀·조직설계"
   },
   {
    "id": "1duf2rg",
    "ko": "인적자원관리",
    "en": "Human Resource Management (HRM)",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "1cn92rk",
    "ko": "직무분석",
    "en": "Job Analysis",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "1uassqc",
    "ko": "직무평가",
    "en": "Job Evaluation",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "1n95tsp",
    "ko": "직무설계",
    "en": "Job Design",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "1rtmfy4",
    "ko": "모집",
    "en": "Recruitment",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "19ojf39",
    "ko": "선발",
    "en": "Selection",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "mkcrv4",
    "ko": "교육훈련",
    "en": "Training and Development",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "ot5xoc",
    "ko": "경력관리",
    "en": "Career Management",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "1v0l5ws",
    "ko": "인사고과",
    "en": "Performance Appraisal",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "2ob3gn",
    "ko": "보상관리",
    "en": "Compensation Management",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "1i43f8d",
    "ko": "복리후생",
    "en": "Benefits",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "ubko8l",
    "ko": "배치전환",
    "en": "Job Rotation / Reassignment",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "1acvlhb",
    "ko": "이직",
    "en": "Turnover",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "wsrl71",
    "ko": "전략적 인적자본",
    "en": "Strategic Human Capital",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "160xbq8",
    "ko": "고성과 인사시스템",
    "en": "High-Performance HR System",
    "section": "3학기 — 인적자원관리"
   },
   {
    "id": "1yd2wlm",
    "ko": "협상",
    "en": "Negotiation",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "gxwu3b",
    "ko": "분배적 협상",
    "en": "Distributive Negotiation",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "1jyb1mu",
    "ko": "통합적 협상",
    "en": "Integrative (Mixed-Motive) Negotiation",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "11zqgtl",
    "ko": "갈등관리",
    "en": "Conflict Management",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "2d21p1",
    "ko": "피플 애널리틱스",
    "en": "People Analytics",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "1rqjsvi",
    "ko": "평균으로의 회귀",
    "en": "Regression to the Mean",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "1yc5ptq",
    "ko": "적응적 리더십",
    "en": "Adaptive Leadership",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "1iaajwz",
    "ko": "노사관계론 / 고용관계론",
    "en": "Industrial Relations / Employment Relations",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "54t8hs",
    "ko": "노동조합",
    "en": "Labor Union",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "l205os",
    "ko": "단체교섭",
    "en": "Collective Bargaining",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "enr58l",
    "ko": "노동법",
    "en": "Labor Law",
    "section": "4학기 — 협상·데이터·노사관계"
   },
   {
    "id": "gbnwut",
    "ko": "산업조직심리학",
    "en": "Industrial and Organizational (I/O) Psychology",
    "section": "기초 학문 (namu.wiki 분류 기준)"
   },
   {
    "id": "1wvq93u",
    "ko": "조직경제학",
    "en": "Organizational Economics",
    "section": "기초 학문 (namu.wiki 분류 기준)"
   },
   {
    "id": "1q5gieb",
    "ko": "조직사회학",
    "en": "Organizational Sociology",
    "section": "기초 학문 (namu.wiki 분류 기준)"
   }
  ]
 },
 "meta": {
  "s1": {
   "topic": "조직행동론 기초",
   "courses": "Stanford Organizational Analysis · MIT 15.341 Individuals, Groups, and Organizations · IESE Organizational Behavior",
   "duration": "8~10주"
  },
  "s2": {
   "topic": "리더십·팀·조직설계",
   "courses": "MIT 15.311 Organizational Processes · MIT 15.320 Strategic Organizational Design · Michigan Leading People and Teams (4과목)",
   "duration": "8~10주"
  },
  "s3": {
   "topic": "인적자원관리(HRM)",
   "courses": "MIT 15.660 Strategic HR Management · Wharton Managing Social and Human Capital",
   "duration": "8~10주"
  },
  "s4": {
   "topic": "전략·협상·데이터·노사관계",
   "courses": "MIT 15.667 Negotiation and Conflict Management · Wharton People Analytics · HarvardX Exercising Leadership",
   "duration": "8~10주"
  },
  "capstone": {
   "topic": "캡스톤 프로젝트",
   "courses": "실제 기업 1곳을 골라 조직행동+인사제도+전략 렌즈로 분석 리포트 작성",
   "duration": "2~3주"
  }
 }
};
