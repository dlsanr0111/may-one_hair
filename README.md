# MAY ONE 메이원헤어 공식 홈페이지

운정·야당·성수·미금·삼송·웨스턴돔·천안 7개 지점을 운영하는 **메이원헤어**의 공식 홈페이지입니다.

## 기술 스택

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (`@theme inline` 토큰)
- next/font (Noto Serif KR + Noto Sans KR)

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 (정적 페이지 12개 생성)
npm start        # 빌드 결과 서비스
```

## 디렉토리 구조

```
app/
  layout.tsx              # 공통 레이아웃 (Nav + Footer + 폰트)
  page.tsx                # 메인 (Hero/About/Services/Gallery/Branches/ProgramTeaser)
  branches/[slug]/page.tsx # 지점 상세 (정적 생성 7개)
  programs/page.tsx       # 지원 및 프로그램 (4개 카드)
components/               # Hero, About, ServiceList, Gallery, BranchCards, ProgramTeaser, Nav, Footer
lib/data.ts               # 지점/서비스/프로그램 단일 소스
public/images/            # 로고 1, 인테리어 4, 스타일링 결과 5
```

## 데이터 교체 가이드

모든 콘텐츠는 [`lib/data.ts`](lib/data.ts) 한 파일에서 관리합니다.

### 지점 네이버 URL

각 지점은 `naverUrl` 한 개 필드만 사용합니다. 네이버 플레이스 단축 링크가
예약·위치·전화·영업시간을 모두 처리합니다. 새 지점 오픈 시 `BRANCHES` 배열에
한 줄 추가하면 됩니다.

### 프로그램(지원 및 프로그램)

`PROGRAMS` 4개 항목 — 제목 + 네이버 폼 URL. 카드 클릭 시 새 탭으로 폼이 열립니다.

### 브랜드 태그라인

`BRAND.taglineKr`, `BRAND.taglineEn` — 임시 카피이므로 확정안으로 교체.

### 추가로 받아야 할 정보

대표님 확인이 필요한 항목은 [`CEO_질문지.md`](CEO_질문지.md)에 정리되어 있습니다.

## 라우트

| 경로 | 설명 |
| --- | --- |
| `/` | 메인 랜딩 |
| `/programs` | 원장님 컨설팅 / 디자이너·인턴 채용 (4개 카드) |
| `/branches/[slug]` | 지점 상세 (`unjeong`, `yadang`, `seongsu`, `migeum`, `samsong`, `westerndom`, `cheonan`) |

## 디자인 토큰

`app/globals.css` `:root` 변수 — `--color-ink`, `--color-paper`, `--color-cream`, `--color-sand`, `--color-stone`.

폰트는 `next/font/google`로 자동 로드되며 한글은 Noto Serif/Sans KR을 사용합니다.

## 배포

Vercel 권장. 별도 환경 변수 없이 `vercel` 명령으로 즉시 배포 가능합니다.

## 추후 추가 예정

대표님 확인 사항은 [`CEO_질문지.md`](CEO_질문지.md) 참조.

- [x] 지점별 네이버 URL 7건
- [x] 인스타그램(`@mayonehair_official`) 푸터 표기
- [ ] 브랜드 태그라인 확정 (`BRAND.taglineKr`/`taglineEn`)
- [ ] About 본문 카피 확정 (`components/About.tsx`)
- [ ] 사업자 정보 푸터 표기 (`components/Footer.tsx`)
- [ ] 디자이너 소개 / 가격표 등 선택 항목
