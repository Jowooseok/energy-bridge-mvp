# Energy Bridge MVP - Product Requirements Document (PRD)

## 📄 문서 정보

| 항목 | 내용 |
|------|------|
| **프로젝트명** | Energy Bridge - 신재생에너지 PPA 매칭 플랫폼 |
| **문서 버전** | v1.0 |
| **작성일** | 2024년 |
| **작성자** | Flowgence |
| **문서 목적** | 클라이언트와의 의사소통 및 프론트엔드 개발 가이드 |
| **기술 스택** | HTML5, Tailwind CSS, shadcn/ui, Chart.js, Lucide Icons |

---

## 🎯 프로젝트 개요

### 비즈니스 목표
**Energy Bridge**는 전력을 구매하려는 중소기업(수요자)과 재생에너지를 생산하는 발전소(공급자)를 AI 기반으로 자동 매칭하여, 기업의 전기요금을 15~25% 절감하고 RE100 목표 달성을 지원하는 B2B 플랫폼입니다.

### 핵심 가치 제안 (Value Proposition)
1. **빠르다**: 72시간 내 최적의 공급자 매칭
2. **저렴하다**: 기존 대비 15~25% 전기요금 절감
3. **안전하다**: 표준계약서와 리스크 보장
4. **쉽다**: 클릭 몇 번으로 매칭 완료

### MVP 범위
이 PRD는 **프론트엔드 프로토타입** 구축을 위한 문서로, 백엔드 API 없이도 전체 비즈니스 로직과 사용자 플로우를 시각적으로 확인할 수 있는 화면을 구축하는 것이 목표입니다.

---

## 👥 사용자 페르소나 (User Personas)

### 1. 수요자 (Demand Side) - 중소기업 구매 담당자
**김산업 (42세, 중견 제조업 구매팀장)**
- **목표**: 전기요금 절감 및 RE100 이행
- **페인 포인트**: 
  - 복잡한 PPA 계약 프로세스
  - 신뢰할 수 있는 공급자 찾기 어려움
  - 요금 절감 효과 불확실
- **니즈**:
  - 간단한 매칭 프로세스
  - 명확한 비용 절감 시뮬레이션
  - 여러 제안서 비교 기능

### 2. 공급자 (Supply Side) - 발전소 운영사
**박태양 (38세, 태양광 발전소 대표)**
- **목표**: 안정적인 전력 판매처 확보
- **페인 포인트**:
  - 수요자 발굴 어려움
  - 영업/마케팅 비용 부담
  - 계약 협상 프로세스 복잡
- **니즈**:
  - 자동 매칭으로 수요자 발굴
  - 간편한 제안서 작성
  - 투명한 거래 조건

### 3. 관리자 (Admin) - 플랫폼 운영자
**이관리 (35세, Energy Bridge 운영팀)**
- **목표**: 플랫폼 효율성 모니터링 및 개선
- **페인 포인트**:
  - 매칭 현황 실시간 파악 어려움
  - 사용자 행동 분석 부족
- **니즈**:
  - KPI 대시보드
  - 매칭/거래 통계
  - 사용자 활동 로그

---

## 🎨 디자인 시스템

### UI Framework
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **shadcn/ui**: 재사용 가능한 컴포넌트 라이브러리
- **Lucide Icons**: 오픈소스 아이콘 세트

### 색상 팔레트 (Color Palette)
```javascript
primary: {
  DEFAULT: "hsl(221.2 83.2% 53.3%)",  // 파란색 - CTA, 강조
  foreground: "hsl(210 40% 98%)",      // 버튼 텍스트
}
secondary: {
  DEFAULT: "hsl(210 40% 96.1%)",      // 회색 - 배경, 보조
  foreground: "hsl(222.2 47.4% 11.2%)",
}
destructive: {
  DEFAULT: "hsl(0 84.2% 60.2%)",      // 빨간색 - 삭제, 경고
  foreground: "hsl(210 40% 98%)",
}
muted: {
  DEFAULT: "hsl(210 40% 96.1%)",      // 연한 회색 - 비활성
  foreground: "hsl(215.4 16.3% 46.9%)",
}
```

### 타이포그래피 (Typography)
| 용도 | 클래스 | 크기 | 굵기 |
|------|--------|------|------|
| Hero Title | text-5xl | 48px | bold |
| Page Title | text-3xl | 30px | bold |
| Card Title | text-xl/text-2xl | 20-24px | semibold |
| Body | text-base | 16px | normal |
| Caption | text-sm | 14px | normal |
| Label | text-xs | 12px | medium |

### 컴포넌트 (Components)
1. **Button**: 5가지 변형 (default, outline, ghost, destructive, secondary)
2. **Card**: header, content, footer 구조
3. **Input**: text, number, email, password, select, textarea
4. **Badge**: 4가지 스타일 (default, secondary, destructive, outline)
5. **Tab**: 활성/비활성 상태 표시

### 반응형 브레이크포인트
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px ~ 1024px (2 columns)
- **Desktop**: ≥ 1024px (3-4 columns)

---

## 📱 화면 구조 (Screen Architecture)

### 1. 네비게이션 (Navigation)
**글로벌 헤더 (Global Header)**
- 위치: 모든 페이지 상단 고정 (sticky)
- 구성 요소:
  - 로고 + 서비스명 (Energy Bridge)
  - 메뉴: 홈, 수요자, 공급자, 관리자
  - CTA: 로그인, 회원가입 버튼

**반응형 동작**:
- Desktop: 전체 메뉴 표시
- Mobile: 햄버거 메뉴 (향후 구현)

---

## 📄 화면별 상세 명세

---

## 1️⃣ 랜딩 페이지 (Landing Page)

### 목적
서비스의 핵심 가치를 전달하고 회원가입으로 유도

### URL
`/` (루트)

### 섹션 구성

#### 1.1 Hero Section
**레이아웃**:
- 전체 너비, gradient 배경
- 중앙 정렬 텍스트

**콘텐츠**:
```
[뱃지] AI 기반 자동 매칭

[제목]
중소기업과 재생에너지를
연결합니다

[부제목]
빠르게, 저렴하게, 안전하게

[CTA 버튼]
무료로 시작하기 →
```

**비즈니스 로직**:
- "무료로 시작하기" 클릭 → 회원가입 페이지 이동

#### 1.2 Features Section
**레이아웃**:
- 4 columns (Desktop), 2 columns (Tablet), 1 column (Mobile)
- 각 Feature는 Card 형태

**콘텐츠** (4개 카드):
1. **빠르다**
   - 아이콘: ⚡ (zap)
   - 설명: 72시간 내 매칭 완료

2. **저렴하다**
   - 아이콘: 🐷 (piggy-bank)
   - 설명: 15~25% 요금 절감

3. **안전하다**
   - 아이콘: 🛡️ (shield-check)
   - 설명: 표준계약서 리스크 보장

4. **쉽다**
   - 아이콘: 🖱️ (mouse-pointer-click)
   - 설명: 클릭 몇 번으로 완료

#### 1.3 Case Study Section
**레이아웃**:
- 최대 너비 컨테이너 (max-w-4xl)
- Card 형태

**콘텐츠**:
```
[제목] 중견 제조업 A사
[부제목] 연간 전력 소비: 5,000 MWh
[뱃지] 14.8% 절감

[3 Column Grid]
현재 비용: 5.75억원
PPA 적용: 4.90억원 (파란색 강조)
연간 절감: 8,500만원 (초록색 강조)
```

**비즈니스 로직**:
- 실제 고객 사례 기반 수치
- 신뢰도 향상 목적

---

## 2️⃣ 회원가입 (Signup)

### 목적
사용자 유형에 따른 계정 생성

### URL
`/signup`

### 레이아웃
- 중앙 정렬 Card (max-w-md)
- 단계별 입력 폼

### 입력 필드

#### 2.1 사용자 유형 선택 (필수)
**UI**: 2-column 카드 선택
```
[수요자]               [공급자]
🏭                     ⚡
전력 구매              발전소 운영
```

**비즈니스 로직**:
- 선택된 카드: 파란색 border + 배경
- 미선택 시 가입 버튼 클릭 → 경고 메시지
- 선택 후 가입 완료 → 해당 대시보드로 이동

#### 2.2 기본 정보 입력
| 필드 | 타입 | 필수 여부 | Validation |
|------|------|-----------|------------|
| 이메일 | email | 필수 | 이메일 형식 |
| 비밀번호 | password | 필수 | 8자 이상 |
| 기업명 | text | 필수 | - |
| 사업자등록번호 | text | 필수 | 000-00-00000 형식 |

**CTA**:
- "가입하기" 버튼 (전체 너비)
- 클릭 시 → "회원가입 완료" alert → 대시보드 이동

---

## 3️⃣ 로그인 (Login)

### 목적
기존 사용자 인증

### URL
`/login`

### 레이아웃
- 중앙 정렬 Card (max-w-md)

### 입력 필드
| 필드 | 타입 | 필수 여부 |
|------|------|-----------|
| 이메일 | email | 필수 |
| 비밀번호 | password | 필수 |

**CTA**:
- "로그인" 버튼 (전체 너비)
- 클릭 시 → "로그인 완료" alert → 수요자 대시보드 이동

**비즈니스 로직** (MVP):
- 실제 인증 없이 바로 대시보드 이동
- 향후: JWT 토큰 기반 인증

---

## 4️⃣ 수요자 대시보드 (Demand Dashboard)

### 목적
전력 구매 기업의 매칭 프로세스 진행

### URL
`/demand/dashboard`

### 탭 구조 (5개)
1. 기업 정보
2. 공급자 찾기
3. 시뮬레이터
4. 매칭 요청
5. 제안서

---

### 4.1 기업 정보 탭

#### 목적
정확한 매칭을 위한 수요자 정보 수집

#### 입력 필드

**기본 정보 (2-column grid)**
| 필드 | 타입 | 옵션 | 기본값 |
|------|------|------|--------|
| 업종 | select | 제조업-부품가공, 제조업-전자부품, 제조업-기계, 기타 | - |
| 사업장 주소 | text | - | - |

**전력 정보 (2-column grid)**
| 필드 | 타입 | 단위 | 도움말 |
|------|------|------|--------|
| 연간 전력 소비량 | number | MWh | 5,000 MWh = 5,000,000 kWh |
| 최대 허용 단가 | number | 원/kWh | - |

**계약 조건 (2-column grid)**
| 필드 | 타입 | 옵션 |
|------|------|------|
| 희망 계약 기간 | select | 5년, 10년, 15년, 20년 |
| RE100 이행 여부 | select | 이행 계획 중, 이행 중, 미이행 |

**부하 패턴 (full width)**
| 필드 | 타입 | 예시 |
|------|------|------|
| 피크 시간대 | textarea | 평일 오전 9시~오후 6시 주로 사용 |

**CTA**:
- "저장하고 다음으로 →" 버튼
- 클릭 시 → "정보가 저장되었습니다" alert → 공급자 찾기 탭 이동

**비즈니스 로직**:
- 입력된 정보는 매칭 알고리즘의 기준이 됨
- 특히 소비량, 단가, 위치가 핵심 매칭 변수

---

### 4.2 공급자 찾기 탭

#### 목적
매칭 가능한 공급자 목록 확인

#### 필터 섹션 (3개 dropdown)
```
[지역 선택]    [유형 선택]    [정렬 기준]
전체           전체           거리순
경기도         태양광         단가순
강원도         풍력           발전량순
전라북도       ESS
```

**비즈니스 로직**:
- 필터 변경 시 카드 목록 재정렬 (프로토타입에서는 고정)
- 거리는 사업장 주소 기준 계산

#### 공급자 카드 (3개 예시)

**카드 1: 그린에너지 태양광 A** ⭐ 추천
```
[아이콘: 태양] [뱃지: 태양광]
그린에너지 태양광 A

📍 경기도 용인시
⚡ 설비 용량: 150 MW
💰 155원/kWh
🧭 거리: 약 50km
⭐⭐⭐⭐⭐ 신뢰도

[상세보기 버튼]
```

**카드 2: 클린윈드 발전소 B**
```
[아이콘: 바람] [뱃지: 풍력]
클린윈드 발전소 B

📍 강원도 강릉시
⚡ 설비 용량: 200 MW
💰 160원/kWh
🧭 거리: 약 120km
⭐⭐⭐⭐☆ 신뢰도

[상세보기 버튼]
```

**카드 3: 스마트ESS 에너지 C**
```
[아이콘: 배터리] [뱃지: ESS]
스마트ESS 에너지 C

📍 전북 군산시
⚡ 설비 용량: 100 MW
💰 165원/kWh
🧭 거리: 약 200km
⭐⭐⭐⭐☆ 신뢰도

[상세보기 버튼]
```

**비즈니스 로직**:
- 거리가 가까울수록 송전 손실 적음
- 단가는 공급자가 제안한 금액
- 신뢰도는 과거 거래 이력 기반 (별점 5점 만점)
- "상세보기" 클릭 → alert로 상세 정보 표시 (프로토타입)

**CTA**:
- "매칭 요청하기 →" 큰 버튼 (중앙)
- 클릭 시 → 매칭 요청 탭 이동

---

### 4.3 시뮬레이터 탭

#### 목적
PPA 적용 시 예상 절감액 사전 확인

#### 레이아웃
2-column (입력 | 결과)

#### 입력 섹션 (좌측)
```
현재 전력 정보 입력

연간 전력 소비량 (MWh)
[5000]

현재 전기요금 단가 (원/kWh)
[115]
(도움말: 한전 산업용 평균 단가)

PPA 제안 단가 (원/kWh)
[98]

[계산하기 버튼]
```

**입력 필드**:
| 필드 | 타입 | 기본값 | 단위 |
|------|------|--------|------|
| 연간 소비량 | number | 5000 | MWh |
| 현재 단가 | number | 115 | 원/kWh |
| PPA 단가 | number | 98 | 원/kWh |

#### 결과 섹션 (우측)
```
절감 결과

[회색 카드]
현재 연간 비용
5.75억 원

[파란 카드]
PPA 적용 비용
4.90억 원

[초록 카드]
연간 절감액
8,500만 원
14.8% ⬇️

[보라 카드]
10년 총 절감액
8.5억 원
```

#### 차트 섹션 (하단)
**비용 비교 바 차트**
- X축: 현재 비용, PPA 적용 비용
- Y축: 금액 (억원)
- 색상: 현재(빨간색), PPA(파란색)

**비즈니스 로직** (계산식):
```javascript
// 입력값
consumption = 5000 (MWh)
currentPrice = 115 (원/kWh)
ppaPrice = 98 (원/kWh)

// 계산
currentCost = (consumption * 1000 * currentPrice) / 100000000
// = (5000 * 1000 * 115) / 100000000 = 5.75억원

ppaCost = (consumption * 1000 * ppaPrice) / 100000000
// = (5000 * 1000 * 98) / 100000000 = 4.90억원

savings = currentCost - ppaCost
// = 5.75 - 4.90 = 0.85억원 = 8,500만원

savingsPercent = (savings / currentCost) * 100
// = (0.85 / 5.75) * 100 = 14.8%

savings10y = savings * 10
// = 0.85 * 10 = 8.5억원
```

**CTA**:
- "계산하기" 버튼 클릭 → 결과 동적 업데이트 + 차트 갱신

**비즈니스 임팩트**:
- 수치로 명확한 절감 효과 제시
- 의사결정 근거 제공
- 10년 총 절감액으로 장기 효과 강조

---

### 4.4 매칭 요청 탭

#### 목적
AI 자동 매칭 신청

#### 프로세스 설명 카드 (파란색 배경)
```
💡 매칭 프로세스

1. 시스템이 귀사의 조건에 맞는 공급자를 자동으로 검색합니다
2. 72시간 내에 2~3개의 맞춤 제안서가 도착합니다
3. 제안서를 비교하고 최적의 공급자를 선택하세요
4. 선택 후 전자계약으로 간편하게 계약을 진행합니다
```

#### 입력 정보 확인 카드 (회색 배경)
```
입력하신 정보 확인

📍 위치: 경기도 용인시
⚡ 연간 소비: 5,000 MWh
💰 희망 단가: 120원/kWh 이하
📅 계약 기간: 10년
```

**비즈니스 로직**:
- 기업 정보 탭에서 입력한 데이터 자동 표시
- 수정 필요 시 기업 정보 탭으로 이동

#### 알림 설정
```
☑️ 매칭 알림을 이메일과 SMS로 받겠습니다
```

**CTA**:
- "매칭 요청 제출하기" 버튼 (큰 버튼, 전체 너비)
- 클릭 시 → "매칭 요청이 제출되었습니다!\n72시간 내에 제안서가 도착합니다." alert → 제안서 탭 이동

**비즈니스 로직** (백엔드):
1. 수요자 정보를 매칭 큐에 추가
2. AI 알고리즘이 조건에 맞는 공급자 검색
   - 거리: 200km 이내 우선
   - 단가: 희망 단가 이하
   - 공급 가능 물량: 소비량 충족
3. 상위 10개 공급자에게 알림 발송
4. 공급자들이 제안서 제출
5. 72시간 후 수요자에게 제안서 전달

---

### 4.5 제안서 탭

#### 목적
받은 제안서 비교 및 선택

#### 헤더
```
받은 제안서    [뱃지: 3개 도착]
```

#### 제안서 카드 1 (추천) ⭐

```
[제목] 그린에너지 태양광 A          [뱃지: ⭐ 추천]
[부제목] 경기도 용인시 · 태양광 150MW

[4-column grid]
제안 단가        계약 기간      예상 절감        거리
98원/kWh        10년          8,500만원       50km
(파란색)                      (초록색)

주요 조건:
✅ 고정 단가 (물가 연동 없음)
✅ 출력제한 시 보상 조항 포함
✅ 백업 공급 시스템 구축
✅ RE100 인증서 자동 발급

[이 제안 수락하기]  [상세보기]
```

**비즈니스 로직**:
- "추천" 뱃지: AI가 거리/단가/신뢰도 종합 평가
- 제안 단가: 공급자가 제시한 최종 단가
- 예상 절감: 시뮬레이터 계산식 적용
- 주요 조건: 표준 계약 조항 + 공급자 제안

#### 제안서 카드 2

```
[제목] 클린윈드 발전소 B
[부제목] 강원도 강릉시 · 풍력 200MW

[4-column grid]
제안 단가        계약 기간      예상 절감        거리
105원/kWh       10년          5,000만원       120km
(파란색)                      (초록색)

주요 조건:
✅ 물가 연동 조정 (CPI +2%)
✅ 출력제한 시 부분 보상
✅ RE100 인증서 자동 발급

[이 제안 수락하기]  [상세보기]
```

**CTA**:
- "이 제안 수락하기" 버튼
  - 클릭 시 → confirm 다이얼로그
  - 확인 → "제안이 수락되었습니다!\n전자계약서를 준비 중입니다." alert
  
- "상세보기" 버튼
  - 클릭 시 → alert로 상세 정보 (프로토타입)

**비즈니스 로직** (백엔드):
1. 수락 시 공급자에게 알림
2. 계약서 자동 생성 (표준 템플릿 + 개별 조건)
3. 양측에게 전자서명 요청
4. 서명 완료 시 계약 체결
5. 한전 신고 및 PPA 개시

**의사결정 기준**:
- 제안 1 vs 제안 2 비교
  - 단가: 98원 vs 105원 (7원 차이)
  - 절감액: 8,500만원 vs 5,000만원 (3,500만원 차이)
  - 거리: 50km vs 120km (송전 손실)
  - 조건: 고정 단가 vs 물가 연동
→ **제안 1이 종합적으로 유리** (추천 이유)

---

## 5️⃣ 공급자 대시보드 (Supplier Dashboard)

### 목적
발전소 운영사의 수요자 매칭 및 제안서 작성

### URL
`/supplier/dashboard`

### 탭 구조 (4개)
1. 발전소 등록
2. 내 발전소
3. 매칭 요청
4. 제안서 작성

---

### 5.1 발전소 등록 탭

#### 목적
발전소 정보를 플랫폼에 등록하여 매칭 풀 참여

#### 입력 필드

**기본 정보 (2-column grid)**
| 필드 | 타입 | 옵션 |
|------|------|------|
| 발전소명 | text | 예: 그린에너지 태양광 1호 |
| 발전 유형 | select | 태양광, 풍력, ESS |

**위치 정보 (full width)**
| 필드 | 타입 |
|------|------|
| 주소 | text |

**설비 정보 (3-column grid)**
| 필드 | 타입 | 단위 |
|------|------|------|
| 설비 용량 | number | MW |
| 연간 발전량 | number | MWh |
| 제안 단가 | number | 원/kWh |

**계약 정보**
| 필드 | 타입 | 옵션 |
|------|------|------|
| 계약 가능 기간 | select | 5년, 10년, 15년, 20년 |

**서류 업로드**
| 필드 | 타입 | 설명 |
|------|------|------|
| 한전 납부확인서 | file | JPG, PNG, PDF |
| 발전소 사진 | file (multiple) | 최대 5장 |

**CTA**:
- "발전소 등록하기" 버튼
- 클릭 시 → "발전소가 등록되었습니다!\n관리자 검토 후 승인됩니다." alert → 내 발전소 탭 이동

**비즈니스 로직**:
- 관리자 승인 후 매칭 풀에 추가
- 제안 단가는 공급자가 희망하는 판매 가격
- 한전 납부확인서로 실제 발전소 검증

---

### 5.2 내 발전소 탭

#### 목적
등록된 발전소 목록 조회 및 관리

#### 발전소 카드 (예시)

```
[그린에너지 태양광 1호]                    [뱃지: 활성]

📍 경기도 용인시
⚡ 150 MW · 연간 180,000 MWh
💰 제안 단가: 155원/kWh

                                [수정 아이콘] [삭제 아이콘]
```

**비즈니스 로직**:
- 활성: 매칭 가능 상태
- 비활성: 일시 중지 (수요 초과 등)
- 수정: 단가/정보 변경
- 삭제: 발전소 제거

---

### 5.3 매칭 요청 탭

#### 목적
수요자의 매칭 요청 확인

#### 요청 카드 (예시)

```
[제목] 제조업 A사                      [뱃지: 대기 중]
[부제목] 부품 가공업 · 경기도 용인시

[4-column grid]
연간 소비        희망 단가      계약 기간      거리
5,000 MWh      120원 이하     10년          약 50km

[제안서 작성하기]  [거절]
```

**비즈니스 로직**:
- AI가 매칭한 수요자 목록 표시
- 거리/단가/물량 기준 자동 필터링
- "제안서 작성하기" → 제안서 작성 탭 이동
- "거절" → 매칭 풀에서 제외

**매칭 기준**:
1. 거리: 200km 이내
2. 단가: 수요자 희망 단가 충족 가능
3. 물량: 공급 가능 여부
4. 계약 기간: 일치 여부

---

### 5.4 제안서 작성 탭

#### 목적
수요자에게 제공할 제안서 작성

#### 수요자 정보 카드 (파란색 배경)
```
수요자 정보
제조업 A사 · 경기도 용인시 · 연간 5,000 MWh · 희망 단가 120원 이하
```

#### 제안 입력 (3-column grid)
| 필드 | 타입 | 단위 |
|------|------|------|
| 제안 단가 | number | 원/kWh |
| 공급 가능 물량 | number | MWh |
| 계약 기간 | select | 10년, 15년, 20년 |

**추가 조건 (full width)**
| 필드 | 타입 | 예시 |
|------|------|------|
| 추가 조건 | textarea | 출력제한 보상, 백업 공급 등 |

#### 표준 조항 선택 (체크박스)
```
☑️ 출력제한 시 보상 조항 포함
☑️ RE100 인증서 자동 발급
☐ 백업 공급 시스템 제공
```

**CTA**:
- "제안서 제출하기" 버튼 (전체 너비)
- 클릭 시 → "제안서가 제출되었습니다!\n수요자에게 전달됩니다." alert → 매칭 요청 탭 이동

**비즈니스 로직**:
- 제안 단가는 수요자 희망 단가 이하 권장
- 공급 가능 물량은 연간 발전량 기준
- 표준 조항은 계약서에 자동 반영

**가격 책정 전략**:
```
공급자 원가: 85원/kWh
마진: 10~15%
제안 단가: 95~100원/kWh
수요자 희망: 120원 이하
→ 98원 제안 (경쟁력 있는 가격)
```

---

## 6️⃣ 관리자 대시보드 (Admin Dashboard)

### 목적
플랫폼 운영 현황 모니터링

### URL
`/admin/dashboard`

### 레이아웃
Single page (탭 없음)

---

### 6.1 KPI 카드 (4개, 4-column grid)

#### KPI 1: 총 사용자
```
[아이콘: 👥]
총 사용자
523명

↗️ 12명 (이번 주)
```

#### KPI 2: 진행 중인 매칭
```
[아이콘: 🔀]
진행 중인 매칭
8건

평균 48시간 소요
```

#### KPI 3: 완료된 계약
```
[아이콘: ✅]
완료된 계약
45건

↗️ 5건 (이번 달)
```

#### KPI 4: 총 거래액
```
[아이콘: 💰]
총 거래액
34억원

이번 달 기준
```

**비즈니스 로직**:
- 총 사용자: 수요자 + 공급자
- 진행 중인 매칭: 매칭 요청 제출 ~ 제안서 수락 전
- 완료된 계약: 전자서명 완료 건수
- 총 거래액: 계약 금액 합계 (월간)

---

### 6.2 차트 (2개, 2-column grid)

#### 차트 1: 일별 매칭 현황 (라인 차트)
```
제목: 일별 매칭 현황

X축: 월, 화, 수, 목, 금, 토, 일
Y축: 매칭 건수 (0~10)
데이터: [3, 5, 4, 7, 6, 4, 8]
```

**비즈니스 인사이트**:
- 주중에 매칭 활발
- 목요일 피크 (7건)
- 주말 감소 추세

#### 차트 2: 사용자 유형별 분포 (도넛 차트)
```
제목: 사용자 유형별 분포

수요자: 320명 (61%)
공급자: 203명 (39%)
```

**비즈니스 인사이트**:
- 수요자가 공급자보다 많음
- 공급 부족 가능성
- 공급자 확보 필요

---

### 6.3 최근 활동 로그 (3개)

#### 로그 1
```
[아이콘: 👤] [파란색 배경]
김산업 (제조A)
매칭 요청 제출
                        30분 전
```

#### 로그 2
```
[아이콘: ⚡] [초록색 배경]
박태양 (태양광B)
제안서 작성 완료
                        1시간 전
```

#### 로그 3
```
[아이콘: ✅] [파란색 배경]
계약서 #2024-045
전자서명 완료
                        2시간 전
```

**비즈니스 로직**:
- 실시간 활동 로그
- 사용자 이름 + 액션 표시
- 상대 시간 표시 (n분/시간 전)

---

## 🔄 비즈니스 플로우 (Business Flow)

### 전체 프로세스 (End-to-End)

```
[수요자]                          [플랫폼]                         [공급자]
   │                                 │                                │
   ├─ 1. 회원가입 (수요자)           │                                │
   ├─ 2. 기업 정보 입력 ────────────►│                                │
   │                                 │                                │
   ├─ 3. 공급자 검색 ◄──────────────┤                                │
   │                                 │                                │
   ├─ 4. 시뮬레이터로 절감액 확인    │                                │
   │                                 │                                │
   ├─ 5. 매칭 요청 제출 ────────────►│                                │
   │                                 │                                │
   │                                 ├─ AI 매칭 알고리즘 실행         │
   │                                 │   - 거리 계산                  │
   │                                 │   - 단가 비교                  │
   │                                 │   - 물량 매칭                  │
   │                                 │                                │
   │                                 ├─ 상위 10개 공급자 선정 ───────►│
   │                                 │                                │
   │                                 │                                ├─ 6. 매칭 요청 확인
   │                                 │                                │
   │                                 │                                ├─ 7. 제안서 작성
   │                                 │                                │
   │                                 │◄──── 8. 제안서 제출 ───────────┤
   │                                 │                                │
   ├─ 9. 제안서 도착 (72시간 이내) ◄─┤                                │
   │                                 │                                │
   ├─ 10. 제안서 비교 및 분석        │                                │
   │                                 │                                │
   ├─ 11. 최적 제안 선택 ───────────►│                                │
   │                                 │                                │
   │                                 ├─ 12. 계약서 자동 생성          │
   │                                 │                                │
   │◄──── 13. 전자서명 요청 ─────────┤──── 전자서명 요청 ────────────►│
   │                                 │                                │
   ├─ 14. 서명 완료 ────────────────►│◄──── 서명 완료 ────────────────┤
   │                                 │                                │
   │                                 ├─ 15. 계약 체결                 │
   │                                 │                                │
   │◄──── 16. 계약서 전달 ───────────┤──── 계약서 전달 ───────────────►│
   │                                 │                                │
   │                                 ├─ 17. 한전 신고                 │
   │                                 │                                │
   │◄──── 18. PPA 전력 공급 시작 ────┼──── PPA 전력 공급 시작 ────────►│
```

### 타임라인
- **Day 0**: 수요자 매칭 요청
- **Day 1-3**: AI 매칭 + 공급자 제안서 작성 (72시간)
- **Day 3**: 제안서 도착
- **Day 3-5**: 수요자 제안서 검토 및 선택
- **Day 5-7**: 계약서 작성 및 전자서명
- **Day 7**: 계약 체결
- **Day 7-14**: 한전 신고 및 승인
- **Day 14+**: PPA 전력 공급 시작

---

## 💼 비즈니스 로직 상세

### 1. 매칭 알고리즘 (AI)

#### 입력 변수 (수요자)
| 변수 | 가중치 | 설명 |
|------|--------|------|
| 위치 (위도/경도) | 30% | 거리 계산 기준 |
| 연간 소비량 | 25% | 공급 가능 여부 |
| 희망 단가 | 25% | 가격 매칭 |
| 계약 기간 | 10% | 기간 일치 여부 |
| RE100 여부 | 10% | 인증서 필요성 |

#### 입력 변수 (공급자)
| 변수 | 가중치 | 설명 |
|------|--------|------|
| 위치 (위도/경도) | 30% | 거리 계산 |
| 연간 발전량 | 25% | 공급 가능 물량 |
| 제안 단가 | 25% | 가격 경쟁력 |
| 신뢰도 (별점) | 10% | 과거 이력 |
| 발전 유형 | 10% | 수요자 선호 |

#### 매칭 스코어 계산
```javascript
// 거리 점수 (0~30점)
distanceScore = max(0, 30 - (distance / 10))
// 예: 50km → 30 - 5 = 25점
//     200km → 30 - 20 = 10점

// 물량 점수 (0~25점)
volumeScore = min(25, (연간발전량 / 연간소비량) * 25)
// 예: 발전량 6000, 소비량 5000 → 25점
//     발전량 4000, 소비량 5000 → 20점

// 가격 점수 (0~25점)
priceScore = max(0, 25 - ((제안단가 - 희망단가) / 2))
// 예: 제안 98원, 희망 120원 → 25점 (만점)
//     제안 115원, 희망 120원 → 22.5점

// 신뢰도 점수 (0~10점)
trustScore = (별점 / 5) * 10
// 예: 5점 → 10점
//     4점 → 8점

// 기간 점수 (0~10점)
periodScore = (계약기간 일치 여부) ? 10 : 5

// 총점 (0~100점)
totalScore = distanceScore + volumeScore + priceScore + 
             trustScore + periodScore
```

#### 매칭 결과
- 80점 이상: "추천" 뱃지
- 70~79점: 상위 노출
- 60~69점: 일반 노출
- 60점 미만: 제외

---

### 2. 요금 절감 계산

#### 입력
- 연간 소비량: C (MWh)
- 현재 단가: P_current (원/kWh)
- PPA 단가: P_ppa (원/kWh)

#### 계산식
```
1. 현재 연간 비용 (억원)
   = (C × 1000 × P_current) / 100,000,000

2. PPA 연간 비용 (억원)
   = (C × 1000 × P_ppa) / 100,000,000

3. 연간 절감액 (억원)
   = 현재 비용 - PPA 비용

4. 절감률 (%)
   = (절감액 / 현재 비용) × 100

5. 10년 총 절감액 (억원)
   = 연간 절감액 × 10
```

#### 예시
```
C = 5000 MWh
P_current = 115원/kWh
P_ppa = 98원/kWh

현재 비용 = (5000 × 1000 × 115) / 100,000,000
          = 575,000,000 / 100,000,000
          = 5.75억원

PPA 비용 = (5000 × 1000 × 98) / 100,000,000
         = 490,000,000 / 100,000,000
         = 4.90억원

절감액 = 5.75 - 4.90 = 0.85억원 = 8,500만원

절감률 = (0.85 / 5.75) × 100 = 14.8%

10년 총 절감 = 0.85 × 10 = 8.5억원
```

---

### 3. 제안서 평가 기준

수요자가 여러 제안서를 받았을 때 비교 기준:

| 기준 | 가중치 | 설명 |
|------|--------|------|
| 제안 단가 | 40% | 낮을수록 유리 |
| 절감액 | 30% | 클수록 유리 |
| 거리 | 15% | 가까울수록 유리 (송전 손실) |
| 계약 조건 | 10% | 유연할수록 유리 |
| 신뢰도 | 5% | 높을수록 유리 |

#### 종합 점수 계산
```javascript
// 단가 점수 (0~40점)
priceScore = max(0, 40 - ((제안단가 - 최저단가) / 2))

// 절감액 점수 (0~30점)
savingsScore = (절감액 / 최대절감액) * 30

// 거리 점수 (0~15점)
distanceScore = max(0, 15 - (거리 / 20))

// 조건 점수 (0~10점)
// 고정단가 +5, 출력제한보상 +3, 백업공급 +2
conditionScore = sum(조건별 점수)

// 신뢰도 점수 (0~5점)
trustScore = (별점 / 5) * 5

// 총점 (0~100점)
totalScore = priceScore + savingsScore + distanceScore + 
             conditionScore + trustScore
```

---

## 🎯 KPI 및 성공 지표

### 플랫폼 성장 지표
| KPI | 목표 (3개월) | 측정 방법 |
|-----|--------------|-----------|
| 가입자 수 | 1,000명 | 총 회원 수 |
| 월간 활성 사용자 (MAU) | 500명 | 30일 내 로그인 |
| 매칭 성공률 | 70% | 매칭 요청 중 계약 체결 비율 |
| 평균 매칭 시간 | 48시간 | 요청~제안서 도착 시간 |
| 계약 체결률 | 50% | 제안서 중 수락 비율 |

### 비즈니스 성과 지표
| KPI | 목표 (3개월) | 측정 방법 |
|-----|--------------|-----------|
| 총 거래액 | 100억원 | 계약 금액 합계 |
| 평균 계약 규모 | 2억원 | 총 거래액 / 계약 건수 |
| 평균 절감률 | 15% | 평균 (현재 비용 - PPA 비용) / 현재 비용 |
| 재계약률 | 80% | 기존 고객의 재계약 비율 (1년 후) |

### 사용자 만족도 지표
| KPI | 목표 | 측정 방법 |
|-----|------|-----------|
| NPS (순추천지수) | 50+ | 설문조사 |
| 평균 평점 | 4.5/5.0 | 사용자 리뷰 |
| 고객 지원 티켓 | <5% | 사용자 대비 문의 비율 |

---

## 🔐 데이터 구조 (Database Schema)

### User 테이블
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_type ENUM('demand', 'supplier') NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    business_number VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### DemandProfile 테이블 (수요자 정보)
```sql
CREATE TABLE demand_profiles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    industry VARCHAR(100),
    address VARCHAR(500),
    annual_consumption DECIMAL(10,2), -- MWh
    max_price DECIMAL(10,2), -- 원/kWh
    contract_period INT, -- 년
    re100_status ENUM('planning', 'in_progress', 'not_implemented'),
    load_pattern TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### PowerPlant 테이블 (발전소)
```sql
CREATE TABLE power_plants (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    type ENUM('solar', 'wind', 'ess') NOT NULL,
    address VARCHAR(500),
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    capacity DECIMAL(10,2), -- MW
    annual_generation DECIMAL(10,2), -- MWh
    price DECIMAL(10,2), -- 원/kWh
    contract_period INT, -- 년
    status ENUM('active', 'inactive') DEFAULT 'active',
    trust_score DECIMAL(3,2) DEFAULT 5.00, -- 별점
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### MatchingRequest 테이블 (매칭 요청)
```sql
CREATE TABLE matching_requests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    demand_user_id BIGINT NOT NULL,
    status ENUM('pending', 'matched', 'completed', 'cancelled') DEFAULT 'pending',
    notification_enabled BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (demand_user_id) REFERENCES users(id)
);
```

### Proposal 테이블 (제안서)
```sql
CREATE TABLE proposals (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    matching_request_id BIGINT NOT NULL,
    supplier_user_id BIGINT NOT NULL,
    power_plant_id BIGINT NOT NULL,
    proposed_price DECIMAL(10,2), -- 원/kWh
    supply_volume DECIMAL(10,2), -- MWh
    contract_period INT, -- 년
    additional_terms TEXT,
    is_fixed_price BOOLEAN DEFAULT true,
    has_curtailment_compensation BOOLEAN DEFAULT false,
    has_backup_supply BOOLEAN DEFAULT false,
    has_re100_certificate BOOLEAN DEFAULT false,
    matching_score DECIMAL(5,2), -- 0~100
    is_recommended BOOLEAN DEFAULT false,
    status ENUM('submitted', 'accepted', 'rejected') DEFAULT 'submitted',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (matching_request_id) REFERENCES matching_requests(id),
    FOREIGN KEY (supplier_user_id) REFERENCES users(id),
    FOREIGN KEY (power_plant_id) REFERENCES power_plants(id)
);
```

### Contract 테이블 (계약)
```sql
CREATE TABLE contracts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    proposal_id BIGINT NOT NULL,
    demand_user_id BIGINT NOT NULL,
    supplier_user_id BIGINT NOT NULL,
    contract_number VARCHAR(50) UNIQUE,
    final_price DECIMAL(10,2), -- 원/kWh
    volume DECIMAL(10,2), -- MWh
    period INT, -- 년
    total_amount DECIMAL(15,2), -- 원
    contract_pdf_url VARCHAR(500),
    demand_signature_url VARCHAR(500),
    supplier_signature_url VARCHAR(500),
    kepco_report_date DATE,
    ppa_start_date DATE,
    status ENUM('draft', 'pending_signature', 'signed', 'active', 'completed') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (proposal_id) REFERENCES proposals(id),
    FOREIGN KEY (demand_user_id) REFERENCES users(id),
    FOREIGN KEY (supplier_user_id) REFERENCES users(id)
);
```

---

## 🚀 개발 우선순위 (Development Priority)

### Phase 1: MVP 프로토타입 (현재)
- [x] 랜딩 페이지
- [x] 회원가입/로그인 UI
- [x] 수요자 대시보드 (5개 탭)
- [x] 공급자 대시보드 (4개 탭)
- [x] 관리자 대시보드
- [x] 시뮬레이터 (계산 로직)
- [x] Chart.js 시각화

**목표**: 클라이언트에게 시연 → 피드백 수집

---

### Phase 2: 백엔드 개발 (Next)
**우선순위 1 (High)**
- [ ] 사용자 인증/인가 (JWT)
- [ ] 회원가입/로그인 API
- [ ] 수요자 정보 저장 API
- [ ] 공급자 발전소 등록 API
- [ ] 매칭 알고리즘 (Python/Node.js)

**우선순위 2 (Medium)**
- [ ] 제안서 작성 API
- [ ] 제안서 목록 조회 API
- [ ] 제안 수락 API
- [ ] 관리자 KPI 조회 API

**우선순위 3 (Low)**
- [ ] 파일 업로드 (S3)
- [ ] 이메일/SMS 알림 (AWS SES/SNS)
- [ ] 전자계약 연동 (외부 API)

---

### Phase 3: 고도화 (Later)
- [ ] 실시간 알림 (WebSocket)
- [ ] 채팅 기능 (수요자 ↔ 공급자)
- [ ] 계약 관리 (체결 후)
- [ ] 정산 시스템
- [ ] 리포팅 대시보드
- [ ] 모바일 앱

---

## 📱 프론트엔드 구현 가이드

### 기술 스택 선택 (권장)
1. **Option 1: Pure HTML + Tailwind (현재)**
   - 장점: 빠른 프로토타입, 백엔드 의존성 없음
   - 단점: 상태 관리 어려움, 코드 재사용 제한

2. **Option 2: React + Tailwind + shadcn/ui**
   - 장점: 컴포넌트 재사용, 상태 관리 용이
   - 추천 라이브러리:
     - React Router (페이지 라우팅)
     - React Hook Form (폼 관리)
     - TanStack Query (API 호출)
     - Zustand (전역 상태)

3. **Option 3: Next.js + Tailwind + shadcn/ui**
   - 장점: SEO, SSR, API Routes
   - 추천: 프로덕션 배포 시

---

### 폴더 구조 (React 예시)
```
src/
├── components/
│   ├── ui/              # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── badge.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   └── features/
│       ├── landing/
│       │   ├── HeroSection.tsx
│       │   ├── FeaturesSection.tsx
│       │   └── CaseStudySection.tsx
│       ├── demand/
│       │   ├── CompanyInfoTab.tsx
│       │   ├── SupplierListTab.tsx
│       │   ├── SimulatorTab.tsx
│       │   ├── MatchingRequestTab.tsx
│       │   └── ProposalsTab.tsx
│       └── supplier/
│           ├── RegisterTab.tsx
│           ├── MyPlantsTab.tsx
│           ├── RequestsTab.tsx
│           └── ProposalFormTab.tsx
├── pages/
│   ├── index.tsx        # Landing
│   ├── signup.tsx
│   ├── login.tsx
│   ├── demand/
│   │   └── dashboard.tsx
│   ├── supplier/
│   │   └── dashboard.tsx
│   └── admin/
│       └── dashboard.tsx
├── lib/
│   ├── api.ts           # API 호출 함수
│   ├── utils.ts         # 유틸리티 함수
│   └── constants.ts     # 상수
└── styles/
    └── globals.css      # Tailwind 설정
```

---

### API 연동 예시 (React)

#### 1. 회원가입
```typescript
// lib/api.ts
export const signup = async (data: SignupData) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

// pages/signup.tsx
const handleSignup = async () => {
  try {
    const result = await signup({
      email,
      password,
      userType,
      companyName,
      businessNumber,
    });
    
    if (result.success) {
      router.push('/demand/dashboard');
    }
  } catch (error) {
    alert('회원가입 실패');
  }
};
```

#### 2. 시뮬레이터
```typescript
// components/features/demand/SimulatorTab.tsx
const calculateSavings = () => {
  const consumption = parseFloat(consumptionInput);
  const currentPrice = parseFloat(currentPriceInput);
  const ppaPrice = parseFloat(ppaPriceInput);

  const currentCost = (consumption * 1000 * currentPrice) / 100000000;
  const ppaCost = (consumption * 1000 * ppaPrice) / 100000000;
  const savings = currentCost - ppaCost;
  const savingsPercent = (savings / currentCost * 100).toFixed(1);
  const savings10y = savings * 10;

  setResults({
    currentCost: currentCost.toFixed(2),
    ppaCost: ppaCost.toFixed(2),
    savingsAmount: (savings * 10000).toFixed(0),
    savingsPercent,
    savings10y: savings10y.toFixed(1),
  });

  updateChart(currentCost, ppaCost);
};
```

#### 3. 매칭 요청
```typescript
// lib/api.ts
export const submitMatchingRequest = async (demandUserId: number) => {
  const response = await fetch('/api/matching/request', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ demandUserId }),
  });
  return response.json();
};

// components/features/demand/MatchingRequestTab.tsx
const handleSubmit = async () => {
  try {
    const result = await submitMatchingRequest(userId);
    
    if (result.success) {
      alert('매칭 요청이 제출되었습니다!\n72시간 내에 제안서가 도착합니다.');
      router.push('/demand/dashboard?tab=proposals');
    }
  } catch (error) {
    alert('매칭 요청 실패');
  }
};
```

---

## 🧪 테스트 시나리오

### 수요자 플로우 테스트
```
1. 랜딩 페이지 접속
   ✓ 4가지 Feature 카드 표시
   ✓ Case Study 수치 정확
   ✓ CTA 버튼 작동

2. 회원가입 (수요자)
   ✓ 사용자 유형 선택 시 시각적 피드백
   ✓ 미선택 시 경고 메시지
   ✓ 가입 완료 후 대시보드 이동

3. 기업 정보 입력
   ✓ 모든 필드 입력 가능
   ✓ 저장 버튼 클릭 시 다음 탭 이동

4. 공급자 찾기
   ✓ 3개 카드 표시
   ✓ 필터 UI 작동
   ✓ 상세보기 버튼 작동

5. 시뮬레이터
   ✓ 계산 버튼 클릭 시 결과 표시
   ✓ 차트 렌더링
   ✓ 동적 업데이트

6. 매칭 요청
   ✓ 프로세스 설명 표시
   ✓ 입력 정보 요약 표시
   ✓ 제출 버튼 작동

7. 제안서
   ✓ 2개 카드 표시
   ✓ 추천 뱃지 표시
   ✓ 수락 버튼 작동 (confirm)
```

### 공급자 플로우 테스트
```
1. 회원가입 (공급자)
   ✓ 사용자 유형 선택
   ✓ 가입 완료 후 대시보드 이동

2. 발전소 등록
   ✓ 모든 필드 입력 가능
   ✓ 파일 업로드 UI 표시
   ✓ 등록 버튼 작동

3. 내 발전소
   ✓ 발전소 카드 표시
   ✓ 수정/삭제 버튼 표시

4. 매칭 요청
   ✓ 요청 카드 표시
   ✓ 제안서 작성 버튼 작동

5. 제안서 작성
   ✓ 수요자 정보 표시
   ✓ 모든 필드 입력 가능
   ✓ 체크박스 작동
   ✓ 제출 버튼 작동
```

### 관리자 플로우 테스트
```
1. 관리자 대시보드 접속
   ✓ 4개 KPI 카드 표시
   ✓ 2개 차트 렌더링
   ✓ 3개 활동 로그 표시
```

---

## 🎨 디자인 일관성 체크리스트

### 색상
- [x] Primary 색상 통일 (hsl(221.2 83.2% 53.3%))
- [x] 버튼 hover 효과
- [x] 활성 탭 표시

### 타이포그래피
- [x] 제목 크기 일관성
- [x] 본문 크기 일관성
- [x] 폰트 굵기 일관성

### 간격
- [x] 섹션 간 padding/margin
- [x] 카드 내부 padding
- [x] 그리드 gap

### 컴포넌트
- [x] 버튼 스타일 통일
- [x] 카드 스타일 통일
- [x] 입력 필드 스타일 통일
- [x] 배지 스타일 통일

### 아이콘
- [x] Lucide Icons 사용
- [x] 크기 일관성 (h-4 w-4 / h-5 w-5)
- [x] 색상 일관성

### 반응형
- [x] Mobile (< 768px)
- [x] Tablet (768px ~ 1024px)
- [x] Desktop (≥ 1024px)

---

## 📋 클라이언트 피드백 체크리스트

### 비즈니스 로직
- [ ] 매칭 알고리즘 기준 적절한가?
- [ ] 요금 계산식 정확한가?
- [ ] 프로세스 흐름이 자연스러운가?
- [ ] 필요한 기능이 빠진 것은 없나?

### UI/UX
- [ ] 화면 구성이 직관적인가?
- [ ] 정보 전달이 명확한가?
- [ ] CTA 버튼이 잘 보이는가?
- [ ] 색상/폰트가 브랜드와 맞는가?

### 데이터
- [ ] 입력 필드가 충분한가?
- [ ] 출력 정보가 유용한가?
- [ ] 차트가 인사이트를 주는가?

### 기타
- [ ] 용어가 적절한가? (PPA, MWh, RE100 등)
- [ ] 도움말이 필요한 부분은?
- [ ] 추가하고 싶은 기능은?

---

## 🚀 다음 단계

### 1. 클라이언트 미팅
- 프로토타입 시연
- 피드백 수집
- 우선순위 조정

### 2. 백엔드 개발 착수
- API 명세서 작성
- 데이터베이스 설계
- 인증 시스템 구축

### 3. 프론트엔드 고도화
- React 마이그레이션
- API 연동
- 에러 처리

### 4. 배포 준비
- 호스팅 선택 (AWS, Vercel 등)
- 도메인 구매
- SSL 인증서

---

## 📞 연락처

**프로젝트 담당**: Flowgence  
**이메일**: contact@flowgence.com  
**문서 버전**: v1.0  
**최종 수정일**: 2024년

---

**이 PRD는 클라이언트와의 의사소통을 위한 문서이며, 실제 개발 시 세부 사항이 변경될 수 있습니다.**
