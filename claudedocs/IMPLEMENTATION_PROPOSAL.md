# Energy Bridge 플랫폼 구현 제안서

**문서 버전**: v1.0
**작성일**: 2024년
**목적**: 프로토타입 → 프로덕션 전환을 위한 기술 검토 및 의사결정 사항

---

## 📋 Executive Summary

현재 Energy Bridge 프로토타입은 핵심 UI/UX가 구현되어 사용자 플로우 시연이 가능한 상태입니다.
본 제안서는 프로토타입을 실제 서비스로 전환하기 위해 **클라이언트의 의사결정이 필요한 4가지 핵심 이슈**를 정리하고, 각 옵션의 장단점을 비교하여 최적의 구현 방안을 제시합니다.

---

## 🎯 의사결정 필요 항목 (4가지)

| 번호 | 항목 | 중요도 | 예상 비용 영향 | 일정 영향 |
|------|------|--------|----------------|-----------|
| 1 | 리포트 생성 방식 | 🔴 High | 중 | 중 |
| 2 | 계량기 연동 방식 | 🔴 High | 고 | 고 |
| 3 | 리스크 보장 시스템 범위 | 🟡 Medium | 중 | 중 |
| 4 | 추가 기능 우선순위 | 🟢 Low | 고 | 고 |

---

## 1️⃣ 리포트 생성 방식

### 🎯 문제 정의
RE100/ESG 보고서를 어떤 방식으로 생성할 것인가?

### 📊 옵션 비교

#### Option A: 프론트엔드 PDF 생성 (jsPDF + html2canvas)

**기술 스택**
```javascript
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

// 웹 화면을 그대로 PDF로 변환
const generatePDF = async () => {
  const element = document.getElementById('report')
  const canvas = await html2canvas(element)
  const pdf = new jsPDF()
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10)
  pdf.save('report.pdf')
}
```

**장점**
- ✅ 빠른 구현 (1-2주)
- ✅ 추가 서버 리소스 불필요
- ✅ 사용자 브라우저에서 즉시 생성
- ✅ 개발 비용 낮음 (~200만원)

**단점**
- ❌ 인쇄 품질 제한 (이미지 기반)
- ❌ 복잡한 레이아웃 구현 어려움
- ❌ 페이지 분할 자동화 제한
- ❌ 브라우저 성능에 의존

**적합한 경우**
- MVP 빠른 출시 우선
- 단순한 요약 리포트 (1-3페이지)
- 초기 투자 최소화

---

#### Option B: 서버 PDF 생성 (Puppeteer)

**기술 스택**
```javascript
const puppeteer = require('puppeteer')

// 서버에서 HTML → PDF 변환
async function generatePDF(data) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // 템플릿 렌더링
  await page.setContent(htmlTemplate(data))

  // 고품질 PDF 생성
  await page.pdf({
    path: 'report.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm' }
  })

  await browser.close()
}
```

**장점**
- ✅ 고품질 PDF (인쇄 최적화)
- ✅ 복잡한 레이아웃 지원
- ✅ 페이지 분할 자동화
- ✅ 일관된 결과물 보장

**단점**
- ❌ 서버 리소스 필요 (메모리 2GB+)
- ❌ 구현 시간 증가 (3-4주)
- ❌ 생성 속도 느림 (5-10초/건)
- ❌ 개발 비용 증가 (~500만원)

**적합한 경우**
- 전문적인 보고서 품질 요구
- 복잡한 리포트 (5-10페이지)
- 대량 생성 (일괄 처리)

---

#### Option C: 외부 리포팅 툴 (Jasper Reports, Crystal Reports)

**기술 스택**
```java
// Jasper Reports 예시
JasperReport jasperReport = JasperCompileManager.compileReport("report.jrxml");
JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params, dataSource);
JasperExportManager.exportReportToPdfFile(jasperPrint, "output.pdf");
```

**장점**
- ✅ 기업급 보고서 품질
- ✅ 드래그앤드롭 리포트 디자이너
- ✅ 다양한 출력 포맷 (PDF, Excel, HTML)
- ✅ 복잡한 집계/그룹화 지원

**단점**
- ❌ 라이선스 비용 (연간 500만원~)
- ❌ 학습 곡선 높음
- ❌ 오버 엔지니어링 위험
- ❌ Java/Python 백엔드 필요

**적합한 경우**
- 엔터프라이즈 고객 대상
- 매우 복잡한 리포팅 요구
- 다양한 포맷 지원 필요

---

### 💡 권장사항

**Phase 1 (MVP)**: Option A (프론트엔드 PDF)
- 빠른 출시를 위해 jsPDF로 시작
- 기본 RE100 리포트 템플릿 제공

**Phase 2 (정식 오픈)**: Option B (Puppeteer)
- 고품질 리포트 전환
- 템플릿 고도화

**예산**:
- Phase 1: 200만원 (2주)
- Phase 2: 500만원 (4주)
- **총 700만원**

---

## 2️⃣ 계량기 연동 방식

### 🎯 문제 정의
실시간 전력 사용량 데이터를 어떻게 수집할 것인가?

### 📊 옵션 비교

#### Option A: 한전 AMI API 연동 (권장)

**기술 개요**
```javascript
// 한전 스마트그리드 API
const response = await axios.get(
  'https://smartgrid.kepco.co.kr/api/meter/realtime',
  {
    headers: {
      'Authorization': `Bearer ${KEPCO_API_KEY}`,
      'Meter-Number': meterNumber
    }
  }
)

// 15분 단위 데이터 수신
{
  timestamp: "2024-01-15T10:30:00Z",
  kwh: 150.5,
  voltage: 220,
  current: 50
}
```

**장점**
- ✅ 공식 지원 (한전 인증)
- ✅ 실시간 데이터 (15분 단위)
- ✅ 안정성 보장
- ✅ 유지보수 불필요

**단점**
- ❌ API 키 신청 필요 (승인 2-4주)
- ❌ 데이터 사용료 가능 (건당 10원~)
- ❌ 한전 시스템 의존성

**비용**
- API 신청: 무료
- 데이터 사용료: 월 약 30만원 (고객 1,000명 기준)
- 개발 비용: 800만원 (6주)

**프로세스**
1. 한전 AMI API 신청 (2-4주)
2. API 연동 개발 (4주)
3. 데이터 수집 자동화 (1주)
4. 모니터링 대시보드 구축 (1주)

---

#### Option B: IoT 게이트웨이 직접 설치

**기술 개요**
```javascript
// MQTT 프로토콜로 자체 게이트웨이와 통신
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.energybridge.com')

client.on('message', (topic, message) => {
  const data = JSON.parse(message.toString())
  // 실시간 데이터 처리 (1분 단위 가능)
})
```

**장점**
- ✅ 실시간성 높음 (1분 단위)
- ✅ 추가 센서 연동 가능 (온도, 전압 등)
- ✅ 커스터마이징 자유도
- ✅ 데이터 사용료 없음

**단점**
- ❌ 초기 투자 비용 높음
- ❌ 하드웨어 설치 필요 (고객별)
- ❌ 유지보수 부담
- ❌ 인증/보안 이슈

**비용**
- 게이트웨이 장비: 50만원/대
- 설치 비용: 30만원/대
- 고객 1,000명 = **8억원**
- 개발 비용: 1,500만원 (10주)

**적합한 경우**
- 대기업 전용 서비스
- 추가 센서 데이터 필요
- 초고속 실시간 모니터링

---

#### Option C: 수동 업로드 (MVP 임시 방안)

**기술 개요**
```javascript
// 월 1회 전기요금 고지서 업로드
<input type="file" accept=".pdf,.jpg" />

// OCR로 사용량 추출
import Tesseract from 'tesseract.js'

const { data: { text } } = await Tesseract.recognize(image)
const usage = extractUsage(text) // "1,234 kWh" → 1234
```

**장점**
- ✅ 즉시 구현 가능 (1주)
- ✅ 초기 비용 없음
- ✅ MVP 검증 빠름

**단점**
- ❌ 실시간 모니터링 불가
- ❌ 사용자 불편 (수동 작업)
- ❌ OCR 정확도 이슈 (80-90%)
- ❌ 전문성 부족 이미지

**비용**
- 개발 비용: 200만원 (1주)
- OCR API 비용: 월 10만원

**권장 사용 시점**
- MVP 테스트 단계 (3-6개월)
- 고객 50명 이하
- 실시간성 불필요

---

### 💡 권장사항

**Phase 1 (MVP, 0-6개월)**: Option C (수동 업로드)
- 빠른 서비스 론칭
- 시장 반응 검증
- 비용 최소화

**Phase 2 (정식 오픈, 6개월~)**: Option A (한전 AMI API)
- 실시간 모니터링 제공
- 전문성 확보
- 고객 경험 향상

**예산 로드맵**
- Phase 1: 200만원 (1주)
- Phase 2: 800만원 (6주)
- **총 1,000만원**

**타임라인**
- MVP 출시: 즉시 가능
- AMI API 전환: MVP 출시 후 3개월 뒤 착수

---

## 3️⃣ 리스크 보장 시스템 범위

### 🎯 문제 정의
"발전사 파산 시 대체 공급자 자동 연결"을 어느 수준까지 구현할 것인가?

### 📊 옵션 비교

#### Option A: UI 안심 기능 (프로토타입용)

**구현 내용**
```jsx
// 계약서 페이지에 안심 문구 추가
<Card className="bg-green-50 border-green-200">
  <div className="flex items-start gap-3">
    <Shield className="h-6 w-6 text-green-600 mt-1" />
    <div>
      <h3 className="font-semibold text-green-900">
        리스크 보장 시스템
      </h3>
      <p className="text-sm text-green-700 mt-1">
        공급자 파산 시 72시간 내 대체 공급자 자동 연결
      </p>
      <ul className="text-sm text-green-600 mt-2 space-y-1">
        <li>• 24시간 공급자 재무 상태 모니터링</li>
        <li>• 대체 공급자 풀 사전 확보</li>
        <li>• 전력 공급 중단 없음 보장</li>
      </ul>
    </div>
  </div>
</Card>

// 실제 로직 없음, 신뢰감 제공 목적
```

**장점**
- ✅ 즉시 구현 (1일)
- ✅ 비용 없음
- ✅ 마케팅 효과

**단점**
- ❌ 실제 보장 불가
- ❌ 허위 광고 위험
- ❌ 실제 파산 시 대응 불가

**비용**: 0원 (기구현)

**적합한 경우**
- MVP 시연용
- 초기 고객 신뢰 구축
- 실제 파산 가능성 낮음

---

#### Option B: 반자동 대체 매칭 시스템

**구현 내용**
```javascript
// 공급자 건강도 모니터링
class SupplierHealthMonitor {
  async checkHealth(supplierId) {
    const healthScore = await calculateScore({
      kepcoPaymentHistory: 0.3,  // 한전 납부 이력
      generationStability: 0.3,   // 발전량 안정성
      financialStatus: 0.2,       // 재무 상태
      reviewRating: 0.2           // 고객 평점
    })

    if (healthScore < 0.5) {
      await notifyAdmin(supplierId, 'warning')
    }

    if (healthScore < 0.3) {
      await triggerContingencyPlan(supplierId)
    }
  }
}

// 관리자 대응 프로세스
async function triggerContingencyPlan(failedSupplierId) {
  // 1. 영향받는 계약 목록
  const contracts = await getAffectedContracts(failedSupplierId)

  // 2. 관리자에게 알림
  await notifyAdmin({
    type: 'urgent',
    message: `공급자 ${failedSupplierId} 리스크 감지`,
    affectedContracts: contracts.length
  })

  // 3. 대체 공급자 추천 (자동 매칭)
  for (const contract of contracts) {
    const alternatives = await runMatchingAlgorithm({
      ...contract.demandInfo,
      urgentMode: true
    })

    // 4. 관리자 승인 대기
    await createContingencyProposal({
      originalContract: contract,
      alternatives: alternatives.slice(0, 3)
    })
  }
}
```

**장점**
- ✅ 실질적 리스크 관리
- ✅ 관리자 통제 가능
- ✅ 단계적 대응 프로세스
- ✅ 법적 리스크 낮음

**단점**
- ❌ 완전 자동화 아님
- ❌ 관리자 24시간 대응 필요
- ❌ 개발 비용 발생

**비용**
- 개발 비용: 1,000만원 (8주)
- 운영 비용: 월 200만원 (24시간 모니터링)

---

#### Option C: 완전 자동 대체 시스템

**구현 내용**
```javascript
// 완전 자동화된 비상 대응
class AutoContingencySystem {
  async handleSupplierFailure(supplierId) {
    // 1. 즉시 계약 전환
    const contracts = await getAffectedContracts(supplierId)

    for (const contract of contracts) {
      // 2. 대체 공급자 자동 매칭 (1순위)
      const replacement = await findBestReplacement(contract)

      // 3. 자동 계약 전환 (사전 동의 기반)
      await executeContractTransfer({
        from: supplierId,
        to: replacement.id,
        contractId: contract.id,
        notifyUser: true
      })

      // 4. 한전 신고 자동화
      await reportToKepco({
        type: 'supplier_change',
        contractNumber: contract.number
      })
    }
  }
}

// 사전 동의 프로세스
// 계약 시 약관에 포함:
// "공급자 파산 시 플랫폼이 선정한 대체 공급자로 자동 전환에 동의합니다"
```

**장점**
- ✅ 진정한 자동화
- ✅ 72시간 → 24시간 단축
- ✅ 강력한 차별화 포인트
- ✅ 고객 안심 극대화

**단점**
- ❌ 법적 리스크 높음 (동의 범위)
- ❌ 대체 공급자 품질 책임
- ❌ 개발/운영 비용 매우 높음
- ❌ 한전 승인 필요

**비용**
- 개발 비용: 3,000만원 (16주)
- 법률 검토: 500만원
- 운영 비용: 월 500만원

**추가 요구사항**
- 한전과 사전 협의
- 법률 자문 필수
- 보험 상품 연계

---

### 💡 권장사항

**Phase 1 (MVP)**: Option A (UI 안심 기능)
- 마케팅 문구로만 활용
- 실제 파산 발생 시 수동 대응

**Phase 2 (6개월~)**: Option B (반자동 시스템)
- 실질적 리스크 관리 구축
- 관리자 중심 대응 체계

**Phase 3 (1년~)**: Option C 검토
- 법률 검토 후 결정
- 한전 협의 결과에 따라

**예산**
- Phase 1: 0원 (기구현)
- Phase 2: 1,000만원 (8주)
- **총 1,000만원**

---

## 4️⃣ 추가 기능 우선순위

### 🎯 문제 정의
추상적으로 제시된 기능들의 구체화 및 우선순위 결정

### 📋 기능 목록 및 예상 비용

| 기능 | 설명 | 개발 기간 | 예상 비용 | 우선순위 |
|------|------|-----------|-----------|----------|
| **실시간 모니터링** | 전력 사용량 실시간 대시보드 | 4주 | 800만원 | 🔴 High |
| **RE100 시공사 디렉토리** | 시공사 검색 및 견적 요청 | 3주 | 600만원 | 🟡 Medium |
| **경쟁사 벤치마킹** | 동종 업계 비교 통계 | 2주 | 400만원 | 🟢 Low |
| **정부 보조금 안내** | 보조금 검색 및 신청 안내 | 2주 | 400만원 | 🟡 Medium |
| **공공데이터 연동** | 한전 SMP, REC 가격 연동 | 3주 | 600만원 | 🟡 Medium |
| **관리자 수동 등록** | CSV 업로드, 데이터 수정 | 2주 | 400만원 | 🔴 High |
| **표준 계약서 생성** | 계약서 자동 생성 및 PDF | 4주 | 800만원 | 🔴 High |

---

### 💡 권장 Phase 구분

#### Phase 1 (MVP) - 핵심 기능만
**포함 기능**
1. ✅ 기본 매칭 시스템 (현재 구현됨)
2. ✅ 시뮬레이터 (현재 구현됨)
3. ✅ 제안서 시스템 (현재 구현됨)
4. ⏳ 관리자 수동 등록
5. ⏳ 간단한 계약서 생성

**예산**: 1,200만원 (6주)

---

#### Phase 2 (정식 오픈) - 전문성 강화
**추가 기능**
1. 실시간 모니터링 (한전 AMI 연동)
2. 표준 계약서 고도화
3. 리포트 시스템 (Puppeteer)

**예산**: 2,200만원 (12주)

---

#### Phase 3 (차별화) - 부가 서비스
**추가 기능**
1. RE100 시공사 디렉토리
2. 정부 보조금 안내
3. 경쟁사 벤치마킹

**예산**: 1,400만원 (7주)

---

## 📊 총 예산 및 타임라인 요약

### Phase별 예산

| Phase | 기간 | 개발 비용 | 운영 비용 (월) | 총합 |
|-------|------|-----------|----------------|------|
| **Phase 1 (MVP)** | 6주 | 1,400만원 | 40만원 | 1,400만원 |
| **Phase 2 (정식 오픈)** | 12주 | 4,500만원 | 230만원 | 4,500만원 |
| **Phase 3 (차별화)** | 7주 | 1,400만원 | 230만원 | 1,400만원 |
| **총합** | 25주 (6개월) | **7,300만원** | **500만원/월** | **7,300만원** |

---

### 의사결정별 비용 영향

| 의사결정 | 선택 | Phase | 비용 |
|----------|------|-------|------|
| 리포트 생성 | jsPDF → Puppeteer | 1 → 2 | 700만원 |
| 계량기 연동 | 수동 → AMI API | 1 → 2 | 1,000만원 |
| 리스크 보장 | UI → 반자동 | 1 → 2 | 1,000만원 |
| 추가 기능 | 선택적 구현 | 2 → 3 | 1,400만원 |

---

## 🎯 의사결정 체크리스트

클라이언트께서 다음 항목들을 검토하고 결정해주시기 바랍니다:

### ✅ 즉시 결정 필요 (Phase 1 착수 전)

- [ ] **리포트 생성 방식**
  - [ ] Option A: jsPDF (저비용, 저품질)
  - [ ] Option B: Puppeteer (고비용, 고품질)
  - [ ] Option C: 외부 툴 (최고비용, 최고품질)

- [ ] **계량기 연동 방식**
  - [ ] Option A: 한전 AMI API (권장)
  - [ ] Option B: IoT 게이트웨이
  - [ ] Option C: 수동 업로드 (MVP)

- [ ] **리스크 보장 범위**
  - [ ] Option A: UI만 (프로토타입)
  - [ ] Option B: 반자동 시스템 (권장)
  - [ ] Option C: 완전 자동 시스템

---

### ⏳ Phase 구분 후 결정 가능

- [ ] **추가 기능 우선순위**
  - [ ] 실시간 모니터링: Phase _____
  - [ ] RE100 시공사 디렉토리: Phase _____
  - [ ] 경쟁사 벤치마킹: Phase _____
  - [ ] 정부 보조금 안내: Phase _____
  - [ ] 공공데이터 연동: Phase _____

- [ ] **Phase 일정**
  - [ ] Phase 1 시작일: ___________
  - [ ] Phase 2 시작일: ___________
  - [ ] Phase 3 필요 여부: 예 / 아니오

---

## 📞 다음 단계

### 1. 클라이언트 검토 (1주)
- 본 제안서 검토
- 의사결정 체크리스트 작성
- 예산 승인

### 2. 킥오프 미팅 (1일)
- 최종 의사결정 확정
- 개발 일정 수립
- 팀 구성

### 3. Phase 1 개발 착수 (6주)
- 관리자 기능 구현
- 계약서 시스템 구축
- MVP 출시

---

## 📎 부록: 기술 스택 및 아키텍처

### 현재 구현 상태
```
Frontend: React 18.3 + Vite
UI: Tailwind CSS + shadcn/ui
Charts: Chart.js
State: Context API + localStorage
Routing: React Router v6
```

### 백엔드 권장 스택
```
Option A (Node.js):
- Framework: Express.js / NestJS
- Database: PostgreSQL
- ORM: Prisma / TypeORM
- Auth: JWT + Passport.js

Option B (Python):
- Framework: FastAPI / Django
- Database: PostgreSQL
- ORM: SQLAlchemy / Django ORM
- Auth: JWT + OAuth2
```

### 인프라 권장 사양
```
Phase 1 (MVP):
- Server: AWS EC2 t3.medium (vCPU 2, RAM 4GB)
- Database: AWS RDS PostgreSQL db.t3.micro
- Storage: AWS S3 (문서/이미지)
- 예상 비용: 월 30만원

Phase 2 (정식 오픈):
- Server: AWS EC2 t3.large (vCPU 2, RAM 8GB)
- Database: AWS RDS PostgreSQL db.t3.small
- Load Balancer: AWS ALB
- 예상 비용: 월 80만원
```

---

**문의 사항이나 추가 설명이 필요한 부분은 언제든지 연락주시기 바랍니다.**

**제안서 작성**: Flowgence Development Team
**연락처**: contact@flowgence.com
**최종 수정일**: 2024년
