# 주식회사 더좋은미래정책연구원 (Better Future Policy Institute) 공식 통합 홈페이지 & CMS

본 프로젝트는 **주식회사 더좋은미래정책연구원 (Better Future Policy Institute Co., Ltd.)**의 공식 브랜드 홈페이지, 연구용역 수주 플랫폼, 정책·데이터 인사이트 콘텐츠 아카이브 및 관리자 CMS 시스템입니다.

---

## 1. 주요 특징 및 기능

- **브랜드 정체성 & 프리미엄 UX/UI**:
  - 브랜드 아이덴티티 심볼 로고 (상승과 미래로 향하는 길을 형상화한 isometric 3D-effect chevron/1-shape symbol)
  - Primary Navy (`#0B2D52`), Teal Accent (`#14B8A6`), Light BG (`#F7F9FC`) 전용 컬러 파이프라인
  - 반응형 Mobile/Tablet/Desktop 레이아웃 지원
- **공개 웹사이트 (`src/app/(public)`)**:
  - **메인페이지**: Hero (대시보드 위젯 그래픽), 4대 핵심역량, 9대 연구분야, 5단계 연구 프로세스 파이프라인, 주요 연구성과 카드, Policy & Data Insight, 연구진 소개, 하단 문의 CTA
  - **연구원 소개**: 설립목적, 비전, 대표이사 임혜자 원장 인사말, 핵심가치, 찾아오시는 길 (경기도 수원시 본점)
  - **연구분야**: 9대 정책연구 domain 카테고리 안내 및 실적 연결
  - **연구용역**: 10대 수주 위탁 연구용역 서비스 상세 안내
  - **연구성과**: 연구사례 아카이브, 발주기관 표시, 보고서 상세 및 요약보기
  - **데이터·인사이트**: Policy Brief, Data Insight, Issue Report 정책 아카이브
  - **연구진**: 대표이사 및 연구위원 프로필
  - **연구의뢰 시스템**: 보안 파일 업로드 (PDF, DOCX, HWPX, XLSX, PPTX, ZIP, 확장자/MIME 검증, 파일명 난수화), 개인정보 동의
- **관리자 CMS (`src/app/admin`)**:
  - JWT Cookie 기반 로그인 및 세션 관리 (`admin@bfpi.re.kr` / `bfpi2026!`)
  - 대시보드: 접수 문의 건수, 주요 지표 요약
  - 문의 관리: 접수건 상세조회, 파일 다운로드, 상태 변경 (`NEW`, `REVIEWING`, `CONTACTED`, `CLOSED`)

---

## 2. 개발 및 실행 방법

### 2.1 환경변수 및 패키지 설치
```bash
npm install
```

### 2.2 데이터베이스 마이그레이션 & 시드 생성
```bash
# SQLite DB 생성 및 스키마 반영
npx prisma db push

# 초기 시드 데이터 생성 (관리자 계정, 9대 분야, 대표 연구성과, 연구진 등)
npx ts-node prisma/seed.ts
```

### 2.3 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 로 접속합니다.

- **관리자 CMS 주소**: `http://localhost:3000/admin/login`
  - 계정: `admin@bfpi.re.kr`
  - 비밀번호: `bfpi2026!`

---

## 3. Production 빌드 및 Docker 실행

### 3.1 Next.js Production Build
```bash
npm run build
npm run start
```

### 3.2 Docker Compose 배포
```bash
docker compose up -d --build
```

---

## 4. 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Pretendard Font
- **Database & ORM**: PostgreSQL / SQLite, Prisma ORM
- **Auth**: JOSE JWT, HTTP-Only Cookie Session
- **Icons**: Lucide React
