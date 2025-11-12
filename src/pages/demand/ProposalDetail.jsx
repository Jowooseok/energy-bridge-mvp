import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  ArrowLeft,
  Download,
  FileText,
  Building2,
  MapPin,
  Calendar,
  Zap,
  DollarSign,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Clock
} from 'lucide-react'

export default function ProposalDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  // 목업 데이터
  const proposal = {
    id: id,
    supplierName: '그린에너지 태양광',
    supplierType: '태양광',
    location: '경기도 용인시',
    capacity: '2.5 MW',
    status: 'received',
    receivedDate: '2024-11-10',
    validUntil: '2024-12-10',

    pricing: {
      currentCost: 575000000,
      proposedCost: 490000000,
      savings: 85000000,
      savingsPercent: 14.8,
      unitPrice: 98,
      contractPeriod: 10
    },

    technical: {
      capacity: '2.5 MW',
      type: '태양광 (실리콘 패널)',
      efficiency: '19.2%',
      expectedGeneration: '5,000 MWh/년',
      location: '경기도 용인시 처인구',
      distance: '32 km',
      gridConnection: '한국전력 용인변전소',
      certifications: ['REC 인증', 'RE100 적격', 'ISO 9001']
    },

    financial: {
      totalInvestment: 4900000000,
      yearlyBreakdown: [
        { year: 1, cost: 490000000, savings: 85000000, cumulative: 85000000 },
        { year: 2, cost: 490000000, savings: 85000000, cumulative: 170000000 },
        { year: 3, cost: 490000000, savings: 85000000, cumulative: 255000000 },
        { year: 4, cost: 490000000, savings: 85000000, cumulative: 340000000 },
        { year: 5, cost: 490000000, savings: 85000000, cumulative: 425000000 },
      ],
      paybackPeriod: '6.2년',
      roi: '17.3%',
      npv: '₩425,000,000'
    },

    terms: {
      contractType: 'Physical PPA',
      minimumPurchase: '4,500 MWh/년',
      priceEscalation: '연 2% 상한',
      earlyTermination: '5년 이후 가능 (위약금 없음)',
      forceMajeure: '포함',
      insurance: '운영자 책임',
      maintenance: '공급자 부담',
      penaltyClause: 'SLA 95% 보장'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            목록으로 돌아가기
          </Button>

          <Card className="shadow-lg border-2">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl">{proposal.supplierName}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        제안서 번호: #{proposal.id}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="px-3 py-1">
                      <Building2 className="h-3 w-3 mr-1" />
                      {proposal.supplierType}
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {proposal.location}
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      <Zap className="h-3 w-3 mr-1" />
                      {proposal.capacity}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Badge className="bg-green-600 text-white px-4 py-2 text-base justify-center">
                    <TrendingDown className="h-4 w-4 mr-2" />
                    {proposal.pricing.savingsPercent}% 절감
                  </Badge>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      계약 진행
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* 주요 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">연간 절감액</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₩{(proposal.pricing.savings / 1000000).toFixed(0)}M
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-green-100">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">계약 단가</p>
                  <p className="text-2xl font-bold">₩{proposal.pricing.unitPrice}/kWh</p>
                </div>
                <div className="p-2 rounded-lg bg-blue-100">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">계약 기간</p>
                  <p className="text-2xl font-bold">{proposal.pricing.contractPeriod}년</p>
                </div>
                <div className="p-2 rounded-lg bg-purple-100">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">유효 기간</p>
                  <p className="text-2xl font-bold">30일</p>
                </div>
                <div className="p-2 rounded-lg bg-orange-100">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 상세 정보 탭 */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <Card className="mb-6 shadow-lg border-2">
            <TabsList className="grid w-full grid-cols-4 p-2 bg-muted/50 h-auto gap-2">
              <TabsTrigger
                value="overview"
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                <FileText className="h-5 w-5" />
                <span className="text-sm font-medium">개요</span>
              </TabsTrigger>
              <TabsTrigger
                value="technical"
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium">기술 사양</span>
              </TabsTrigger>
              <TabsTrigger
                value="financial"
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm font-medium">재무 분석</span>
              </TabsTrigger>
              <TabsTrigger
                value="terms"
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:shadow-md"
              >
                <FileText className="h-5 w-5" />
                <span className="text-sm font-medium">계약 조건</span>
              </TabsTrigger>
            </TabsList>
          </Card>

          <TabsContent value="overview">
            <div className="grid gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>제안 개요</CardTitle>
                  <CardDescription>주요 제안 내용 및 비교 분석</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 rounded-lg bg-gray-50 border">
                      <p className="text-sm font-medium text-muted-foreground mb-2">현재 전력 비용</p>
                      <p className="text-3xl font-bold text-gray-600">
                        ₩{(proposal.pricing.currentCost / 100000000).toFixed(2)}억
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">연간</p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-primary/5 border-2 border-primary/20">
                      <p className="text-sm font-medium text-primary mb-2">제안 비용</p>
                      <p className="text-3xl font-bold text-primary">
                        ₩{(proposal.pricing.proposedCost / 100000000).toFixed(2)}억
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">연간</p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-green-50 border-2 border-green-200">
                      <p className="text-sm font-medium text-green-700 mb-2">절감 효과</p>
                      <p className="text-3xl font-bold text-green-600">
                        ₩{(proposal.pricing.savings / 10000000).toFixed(0)}천만
                      </p>
                      <p className="text-xs text-green-600 mt-1 font-semibold">
                        10년간 ₩{(proposal.pricing.savings * 10 / 100000000).toFixed(1)}억 절감
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-6 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-900 mb-2">제안 하이라이트</p>
                        <ul className="space-y-2 text-sm text-blue-700">
                          <li>• 연간 전력 비용 {proposal.pricing.savingsPercent}% 절감 효과</li>
                          <li>• {proposal.pricing.contractPeriod}년 장기 계약으로 안정적인 가격 보장</li>
                          <li>• RE100 목표 달성을 위한 재생에너지 인증서 제공</li>
                          <li>• SLA 95% 보장으로 안정적인 전력 공급</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="technical">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>기술 사양</CardTitle>
                <CardDescription>발전소 및 기술적 세부 정보</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg mb-3">발전소 정보</h4>

                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">설비 용량</span>
                      <span className="font-semibold">{proposal.technical.capacity}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">발전 방식</span>
                      <span className="font-semibold">{proposal.technical.type}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">효율</span>
                      <span className="font-semibold">{proposal.technical.efficiency}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">예상 발전량</span>
                      <span className="font-semibold">{proposal.technical.expectedGeneration}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg mb-3">위치 및 연결</h4>

                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">발전소 위치</span>
                      <span className="font-semibold">{proposal.technical.location}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">거리</span>
                      <span className="font-semibold">{proposal.technical.distance}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">계통 연결</span>
                      <span className="font-semibold">{proposal.technical.gridConnection}</span>
                    </div>

                    <div className="pt-3">
                      <p className="text-muted-foreground mb-2">인증 및 자격</p>
                      <div className="flex flex-wrap gap-2">
                        {proposal.technical.certifications.map((cert, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial">
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>재무 분석</CardTitle>
                  <CardDescription>투자 수익률 및 비용 분석</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <p className="text-sm text-muted-foreground mb-1">회수 기간</p>
                      <p className="text-2xl font-bold text-blue-700">{proposal.financial.paybackPeriod}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                      <p className="text-sm text-muted-foreground mb-1">투자 수익률 (ROI)</p>
                      <p className="text-2xl font-bold text-green-700">{proposal.financial.roi}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                      <p className="text-sm text-muted-foreground mb-1">순 현재 가치 (NPV)</p>
                      <p className="text-2xl font-bold text-purple-700">{proposal.financial.npv}</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">연도</th>
                          <th className="text-right py-3 px-4 font-semibold">연간 비용</th>
                          <th className="text-right py-3 px-4 font-semibold">연간 절감</th>
                          <th className="text-right py-3 px-4 font-semibold">누적 절감</th>
                        </tr>
                      </thead>
                      <tbody>
                        {proposal.financial.yearlyBreakdown.map((year) => (
                          <tr key={year.year} className="border-b hover:bg-muted/30">
                            <td className="py-3 px-4">{year.year}년차</td>
                            <td className="text-right py-3 px-4">
                              ₩{(year.cost / 100000000).toFixed(2)}억
                            </td>
                            <td className="text-right py-3 px-4 text-green-600 font-semibold">
                              +₩{(year.savings / 10000000).toFixed(0)}천만
                            </td>
                            <td className="text-right py-3 px-4 font-semibold">
                              ₩{(year.cumulative / 100000000).toFixed(2)}억
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="terms">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>계약 조건</CardTitle>
                <CardDescription>상세 계약 조건 및 약관</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between py-4 border-b">
                    <span className="text-muted-foreground font-medium">계약 유형</span>
                    <span className="font-semibold">{proposal.terms.contractType}</span>
                  </div>

                  <div className="flex justify-between py-4 border-b">
                    <span className="text-muted-foreground font-medium">최소 구매량</span>
                    <span className="font-semibold">{proposal.terms.minimumPurchase}</span>
                  </div>

                  <div className="flex justify-between py-4 border-b">
                    <span className="text-muted-foreground font-medium">가격 상승률</span>
                    <span className="font-semibold">{proposal.terms.priceEscalation}</span>
                  </div>

                  <div className="flex justify-between py-4 border-b">
                    <span className="text-muted-foreground font-medium">조기 해지 조건</span>
                    <span className="font-semibold">{proposal.terms.earlyTermination}</span>
                  </div>

                  <div className="flex justify-between py-4 border-b">
                    <span className="text-muted-foreground font-medium">불가항력</span>
                    <span className="font-semibold">{proposal.terms.forceMajeure}</span>
                  </div>

                  <div className="flex justify-between py-4 border-b">
                    <span className="text-muted-foreground font-medium">보험</span>
                    <span className="font-semibold">{proposal.terms.insurance}</span>
                  </div>

                  <div className="flex justify-between py-4 border-b">
                    <span className="text-muted-foreground font-medium">유지보수</span>
                    <span className="font-semibold">{proposal.terms.maintenance}</span>
                  </div>

                  <div className="flex justify-between py-4 border-b">
                    <span className="text-muted-foreground font-medium">페널티 조항</span>
                    <span className="font-semibold">{proposal.terms.penaltyClause}</span>
                  </div>
                </div>

                <div className="mt-6 p-6 rounded-lg bg-amber-50 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-900 mb-2">계약 전 확인 사항</p>
                      <ul className="space-y-1 text-sm text-amber-700">
                        <li>• 계약 조건을 충분히 검토하고 법률 자문을 받으시기 바랍니다</li>
                        <li>• 제안서 유효기간은 30일이며, 이후 조건이 변경될 수 있습니다</li>
                        <li>• 최종 계약서는 양사 합의 하에 작성됩니다</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 하단 액션 */}
        <Card className="shadow-lg mt-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">제안서가 마음에 드시나요?</p>
                <p className="font-semibold">계약 진행 시 3영업일 내 계약서를 받아보실 수 있습니다</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  PDF 다운로드
                </Button>
                <Button size="lg" className="shadow-lg">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  계약 진행하기
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
