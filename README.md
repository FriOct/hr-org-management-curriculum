# 🎓 인사조직관리 오픈 커리큘럼 — Personal University of HR & Organizational Management

> 컴퓨터공학 전공자가 MIT / Stanford / Wharton / Michigan / Harvard의 공개 강의와 국내 KOCW 강의를 엮어서, 실제로 경영대학 "인사조직" 트랙에 다니는 것처럼 스스로 짜본 4학기 커리큘럼입니다.

### 📚 [학습 사이트 바로가기 →](https://frioct.github.io/hr-org-management-curriculum/)

진도 체크리스트, 학기별 주차 계획, 용어 플래시카드·퀴즈를 한 곳에서 쓸 수 있습니다. (진도는 브라우저에 저장됩니다. 마크다운을 고친 뒤에는 `node scripts/build-site.mjs`로 사이트 데이터를 다시 만들어 주세요.)

---

## 0. 이 레포는 왜 존재하는가

인사조직관리(HR & Organizational Management)는 나무위키에서도 정의하듯 [경영학의 하위 학문](https://namu.wiki/w/%EC%9D%B8%EC%82%AC%EC%A1%B0%EC%A7%81%EA%B4%80%EB%A6%AC)으로, 심리학·사회학·경제학·인류학을 기반으로 삼는 학제간 연구 분야입니다. 회계나 재무처럼 숫자로 정답이 딱 떨어지지 않고, 그렇다고 완전히 감(感)으로 하는 것도 아닌, "사람과 조직을 다루는 과학"에 가깝습니다.

전공자가 아니면 어디서부터 시작해야 할지 감이 안 오는 분야이기도 합니다. 그래서 이 레포는:

1. **MIT, Stanford, Wharton(UPenn), Michigan, Harvard** 등이 무료로 공개한 대학 수준 강의만 골라서
2. **서울대·고려대 경영대학의 실제 커리큘럼 구조**를 참고해 학습 순서를 짜고
3. **KOCW(한국 OCW)**로 한국어 보강까지 더해서
4. 컴공생이 4학기짜리 "가상 전공"을 밟는 기분으로 완주할 수 있게 만든 자기주도 학습 로드맵입니다.

전공 지식이 전혀 없다는 전제로 설계했으니, `00-orientation`부터 순서대로 시작하면 됩니다.

---

## 1. 인사조직관리, 한 장으로 요약

나무위키 문서 기준으로 이 학문은 크게 두 축으로 나뉩니다.

| 축 | 세부 분야 | 핵심 질문 |
|---|---|---|
| **조직 (Organization)** | 조직행동론(Organizational Behavior) | 개인·집단은 조직 안에서 왜 그렇게 행동하는가? (동기, 지각, 의사결정, 리더십, 조직문화) |
| | 조직구조론/조직이론(Organizational Theory) | 조직은 어떻게 설계·변화해야 하는가? (조직설계, 조직변화) |
| **인사 (Personnel)** | 인적자원관리(HRM) | 사람을 어떻게 확보·개발·평가·보상·유지하는가? |
| | 노사관계론(Industrial Relations) | 노동자와 사용자의 관계는 법·제도적으로 어떻게 다뤄지는가? |

여기에 **산업조직심리학·조직사회학·조직경제학**이 이론적 뿌리를 제공합니다(실제로 하버드 경영대학원은 조직행동 박사과정을 사회학과와 공동 운영합니다). 이 레포의 4개 학기는 정확히 이 지도를 따라갑니다.

```
학기 1  조직행동론 기초        →  "사람은 왜 그렇게 행동하는가"
학기 2  리더십·팀·조직설계     →  "집단과 조직은 어떻게 움직이는가"
학기 3  인적자원관리(HRM)      →  "사람을 어떻게 뽑고 키우고 보상하는가"
학기 4  전략·협상·데이터·노사관계 → "실전에서 어떻게 적용하는가"
```

---

## 2. 폴더 구조

```
hr-org-management-curriculum/
├── README.md                              ← 지금 보는 파일
├── 00-orientation/                        ← 시작 전 준비 (경영학 지도, 컴공생을 위한 비유, 학습법)
├── semester-1-organizational-behavior/    ← 1학기: 조직행동론 기초
├── semester-2-leadership-teams-design/    ← 2학기: 리더십·팀·조직설계
├── semester-3-hrm/                        ← 3학기: 인적자원관리
├── semester-4-strategic-advanced/         ← 4학기: 전략·협상·피플애널리틱스·노사관계
├── capstone/                              ← 졸업 프로젝트: 실제 기업 조직 분석
├── resources/
│   ├── open-textbooks.md                  ← 무료 원서 교재 (OpenStax 등)
│   ├── university-curricula-comparison.md ← 국내외 대학 커리큘럼 비교 분석 ★
│   ├── certifications-and-exams.md        ← 공인노무사·PHR·SHRM 등 자격증 지도
│   └── glossary-kr-en.md                  ← 핵심 용어 한/영 대조표
└── progress-tracker.md                    ← 진도 체크리스트
```

각 학기 폴더의 `README.md`는 실제 대학 강의계획서(syllabus) 형식 — 학습목표, 선수지식, 핵심 코스, 주차별 계획, 과제 — 을 따릅니다.

---

## 3. 전체 로드맵 요약

> 상세 강의 목록·링크는 각 학기 폴더 안 README를 참고하세요. 아래는 요약입니다.

| 학기 | 주제 | 핵심 오픈 코스 (기관) | 예상 기간 |
|---|---|---|---|
| **1학기** | 조직행동론 기초 | Stanford `Organizational Analysis` · MIT `15.341 Individuals, Groups, and Organizations` · IESE `Organizational Behavior` | 8~10주 |
| **2학기** | 리더십·팀·조직설계 | MIT `15.311 Organizational Processes` · MIT `15.320 Strategic Organizational Design` · Michigan `Leading People and Teams` (4과목) | 8~10주 |
| **3학기** | 인적자원관리(HRM) | MIT `15.660 Strategic HR Management` · Wharton `Managing Social and Human Capital` | 8~10주 |
| **4학기** | 전략·협상·데이터·노사관계 | MIT `15.667 Negotiation and Conflict Management` · Wharton `People Analytics` · HarvardX `Exercising Leadership` | 8~10주 |
| **졸업** | 캡스톤 프로젝트 | 실제 기업 1곳을 골라 조직행동+인사제도+전략 렌즈로 분석 리포트 작성 | 2~3주 |

총 소요 기간은 주당 5~7시간 투입 기준 **약 8개월~1년**입니다. 회사·학업과 병행한다면 학기 단위로 쉬어가도 무방합니다 — 어차피 등록금 내는 것도 아니니까요.

---

## 4. 국내외 대학은 이 분야를 어떻게 나누는가 (요약)

MIT Sloan, Stanford, Wharton, Michigan Ross, Harvard, 그리고 인사조직 분야에서 유일하게 단과대 전체가 노동·인사에 특화된 아이비리그 학교인 **Cornell ILR School**, 국내의 서울대·고려대·연세대 경영대학까지 비교해보면 놀랍도록 구조가 비슷합니다 — 거의 모든 학교가 "①조직행동(심리 기반) ②인적자원관리(제도·실무) ③노사관계(법·제도)"의 3두 체제를 쓰고 있습니다.

자세한 비교표와 학교별 특징 분석은 **[`resources/university-curricula-comparison.md`](./resources/university-curricula-comparison.md)** 에 정리했습니다. 이 레포의 학기 구성은 그 분석 결과를 그대로 반영한 것입니다.

---

## 5. 시작하는 법

1. `00-orientation/README.md`부터 읽기 (경영학 지도 + 컴공생을 위한 비유 + 학습 준비물)
2. `progress-tracker.md`를 열어 체크리스트로 사용하기
3. `semester-1-organizational-behavior/README.md`로 이동해서 1주차부터 시작
4. 매 학기가 끝나면 해당 폴더에 **본인의 노트/요약을 직접 추가**하기 — 강의 자료 자체를 복사해서 올리지 말고, 본인 언어로 정리한 내용만 커밋하는 것을 원칙으로 합니다 (저작권 유의사항은 아래 참고)

---

## 6. 저작권 및 이용 유의사항

- 이 레포는 각 대학·플랫폼(MIT OCW, Coursera, edX, KOCW 등)이 공개한 강의로 **연결(링크)** 할 뿐, 강의 영상·PDF·읽기자료 원문을 포함하지 않습니다.
- MIT OCW 자료는 [CC BY-NC-SA](https://ocw.mit.edu/help/terms-of-use/) 라이선스이며, OpenStax 교재는 CC BY(-NC-SA) 라이선스입니다 — 개인 학습 목적의 열람은 자유롭지만 재배포 조건은 각 라이선스를 따로 확인하세요.
- Coursera/edX 강의는 "청강(audit)"은 대부분 무료이나 수료증은 유료입니다. 이 레포의 링크는 모두 청강 기준으로 정리했습니다.
- **비공개(private) 레포로 유지**하고, 본인의 학습 노트·과제만 커밋하는 것을 권장합니다 (강의 슬라이드나 저작물 스캔본 업로드 금지).

---

## 7. GitHub에 올리기 (Private Repo로 push하는 법)

이 폴더는 이미 `git init` + 첫 커밋까지 완료된 상태로 전달됩니다. 아래 순서대로 GitHub에 연결하세요.

```bash
# 1. 압축 해제한 폴더로 이동
cd hr-org-management-curriculum

# 2. (git이 이미 초기화되어 있는지 확인)
git status

# 3. GitHub 웹사이트에서 New repository → Private 선택 → 이름 입력 (예: hr-org-management-curriculum)
#    ⚠️ "Initialize with README" 체크박스는 반드시 해제할 것 (이미 로컬에 커밋이 있으므로)

# 4. 원격 저장소 연결 후 push
git remote add origin https://github.com/<본인계정>/<레포이름>.git
git branch -M main
git push -u origin main
```

GitHub CLI(`gh`)가 설치되어 있다면 더 간단합니다:

```bash
gh repo create hr-org-management-curriculum --private --source=. --remote=origin --push
```

이후로는 학습 노트를 커밋할 때마다 `git add . && git commit -m "1학기 3주차 노트"` 처럼 실제 학기를 다니듯 기록을 쌓아가면 됩니다.

---

## 부록: 나무위키 원문 요약 (참고)

이 커리큘럼 설계의 출발점이 된 [나무위키 "인사조직관리" 문서](https://namu.wiki/w/%EC%9D%B8%EC%82%AC%EC%A1%B0%EC%A7%81%EA%B4%80%EB%A6%AC)는 이 분야를 조직행동론·조직구조론·인적자원관리·노사관계론 네 갈래로 나누고, 기초 학문으로 산업조직심리학·조직경제학·조직사회학을, 관련 자격증으로 공인노무사·PHR/SPHR/GPHR·SHRM-CP/SCP·경영지도사를 언급합니다. 이 레포의 4학기 구성과 `resources/certifications-and-exams.md`는 이 분류를 그대로 따릅니다.
