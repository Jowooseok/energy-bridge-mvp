# Energy Bridge MVP - 신재생에너지 PPA 매칭 플랫폼

## 프로젝트 개요

Energy Bridge는 전력을 구매하려는 중소기업(수요자)과 재생에너지를 생산하는 발전소(공급자)를 AI 기반으로 자동 매칭하여, 기업의 전기요금을 15~25% 절감하고 RE100 목표 달성을 지원하는 B2B 플랫폼입니다.

## 기술 스택

- **Frontend**: React 18.3 + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React
- **Routing**: React Router DOM v6

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 디렉토리에 생성됩니다.

### 4. 프로덕션 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
src/
├── components/
│   ├── ui/              # shadcn/ui 컴포넌트
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── badge.jsx
│   │   ├── tabs.jsx
│   │   ├── label.jsx
│   │   ├── textarea.jsx
│   │   └── select.jsx
│   └── layout/
│       └── Header.jsx   # 글로벌 헤더
├── pages/
│   ├── Landing.jsx      # 랜딩 페이지
│   ├── Signup.jsx       # 회원가입
│   ├── Login.jsx        # 로그인
│   ├── demand/          # 수요자 대시보드
│   │   ├── DemandDashboard.jsx
│   │   ├── CompanyInfoTab.jsx
│   │   ├── SupplierListTab.jsx
│   │   ├── SimulatorTab.jsx
│   │   ├── MatchingRequestTab.jsx
│   │   └── ProposalsTab.jsx
│   ├── supplier/        # 공급자 대시보드
│   │   ├── SupplierDashboard.jsx
│   │   ├── RegisterPlantTab.jsx
│   │   ├── MyPlantsTab.jsx
│   │   ├── MatchingRequestsTab.jsx
│   │   └── ProposalFormTab.jsx
│   └── admin/           # 관리자 대시보드
│       └── AdminDashboard.jsx
├── lib/
│   └── utils.js         # 유틸리티 함수
├── App.jsx              # 메인 App 컴포넌트
├── main.jsx             # 진입점
└── index.css            # 글로벌 스타일
```

## 주요 기능

### 1. 랜딩 페이지 (`/`)
- Hero Section: 서비스 소개 및 CTA
- Features Section: 4가지 핵심 가치 제안
- Case Study: 실제 절감 사례

### 2. 회원가입 (`/signup`)
- 사용자 유형 선택 (수요자/공급자)
- 기본 정보 입력

### 3. 로그인 (`/login`)
- 이메일/비밀번호 인증

### 4. 수요자 대시보드 (`/demand/dashboard`)
- **기업 정보**: 업종, 주소, 전력 소비량, 계약 조건 입력
- **공급자 찾기**: 매칭 가능한 공급자 목록 및 필터링
- **시뮬레이터**: PPA 적용 시 절감액 계산 및 차트 시각화
- **매칭 요청**: AI 자동 매칭 신청
- **제안서**: 받은 제안서 비교 및 선택

### 5. 공급자 대시보드 (`/supplier/dashboard`)
- **발전소 등록**: 발전소 정보 등록
- **내 발전소**: 등록된 발전소 목록 관리
- **매칭 요청**: 수요자 매칭 요청 확인
- **제안서 작성**: 수요자에게 제안서 제출

### 6. 관리자 대시보드 (`/admin/dashboard`)
- KPI 카드: 총 사용자, 진행 중인 매칭, 완료된 계약, 총 거래액
- 차트: 일별 매칭 현황, 사용자 유형별 분포
- 최근 활동 로그

## 비즈니스 로직

### 요금 절감 계산 (시뮬레이터)

```javascript
// 입력값
consumption = 5000 (MWh)
currentPrice = 115 (원/kWh)
ppaPrice = 98 (원/kWh)

// 계산
currentCost = (consumption * 1000 * currentPrice) / 100000000
ppaCost = (consumption * 1000 * ppaPrice) / 100000000
savings = currentCost - ppaCost
savingsPercent = (savings / currentCost) * 100
savings10y = savings * 10
```

### 매칭 프로세스

1. 수요자가 기업 정보 입력 및 매칭 요청 제출
2. AI 알고리즘이 조건에 맞는 공급자 검색 (거리, 단가, 물량 기준)
3. 72시간 내 2-3개의 맞춤 제안서 도착
4. 수요자가 제안서 비교 및 최적 공급자 선택
5. 전자계약으로 계약 진행

## 디자인 시스템

### 색상 팔레트
- **Primary**: `hsl(221.2 83.2% 53.3%)` - 파란색 (CTA, 강조)
- **Secondary**: `hsl(210 40% 96.1%)` - 회색 (배경, 보조)
- **Destructive**: `hsl(0 84.2% 60.2%)` - 빨간색 (삭제, 경고)
- **Muted**: `hsl(210 40% 96.1%)` - 연한 회색 (비활성)

### 반응형 브레이크포인트
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px ~ 1024px (2 columns)
- **Desktop**: ≥ 1024px (3-4 columns)

## 개발 우선순위

### Phase 1: MVP 프로토타입 (현재)
- ✅ 랜딩 페이지
- ✅ 회원가입/로그인 UI
- ✅ 수요자 대시보드 (5개 탭)
- ✅ 공급자 대시보드 (4개 탭)
- ✅ 관리자 대시보드
- ✅ 시뮬레이터 (계산 로직)
- ✅ Chart.js 시각화

**목표**: 클라이언트에게 시연 → 피드백 수집

### Phase 2: 백엔드 개발 (Next)
- 사용자 인증/인가 (JWT)
- 회원가입/로그인 API
- 수요자/공급자 정보 저장 API
- 매칭 알고리즘 (Python/Node.js)
- 제안서 작성/조회 API

### Phase 3: 고도화 (Later)
- 실시간 알림 (WebSocket)
- 채팅 기능
- 계약 관리
- 정산 시스템
- 모바일 앱

## 라이선스

이 프로젝트는 Flowgence에서 개발한 클라이언트 의사소통용 프로토타입입니다.

## 문의

**프로젝트 담당**: Flowgence
**이메일**: contact@flowgence.com
