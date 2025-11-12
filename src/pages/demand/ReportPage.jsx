import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  Download,
  TrendingDown,
  Zap,
  DollarSign,
  Calendar,
  Building2,
  BarChart3,
  PieChart,
  FileText,
  CheckCircle,
  AlertCircle,
  Target
} from 'lucide-react'

export default function ReportPage() {
  const navigate = useNavigate()

  // 목업 데이터
  const report = {
    companyName: '제조업 A사',
    generatedDate: '2024-11-11',
    period: '2024년 연간 분석',

    currentStatus: {
      monthlyConsumption: 417, // MWh
      yearlyConsumption: 5000,
      currentUnitPrice: 115,
      monthlyCost: 47955000,
      yearlyCost: 575000000
    },

    ppaProposal: {
      supplier: '그린에너지 태양광',
      unitPrice: 98,
      monthlyCost: 40866000,
      yearlyCost: 490000000,
      monthlySavings: 7089000,
      yearlySavings: 85000000,
      savingsPercent: 14.8,
      contractPeriod: 10,
      totalSavings10Years: 850000000
    },

    environmentalImpact: {
      co2Reduction: 2500, // tons/year
      treesEquivalent: 113636, // trees planted
      carsEquivalent: 543, // cars removed
      re100Progress: 100 // %
    },

    financialAnalysis: {
      roi: 17.3,
      paybackPeriod: 6.2,
      npv: 425000000,
      irr: 15.8
    },

    monthlyBreakdown: [
      { month: '1월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '2월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '3월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '4월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '5월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '6월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '7월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '8월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '9월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '10월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '11월', current: 47955000, ppa: 40866000, savings: 7089000 },
      { month: '12월', current: 47955000, ppa: 40866000, savings: 7089000 },
    ],

    recommendations: [
      {
        title: '즉시 계약 진행 권장',
        description: '현재 제안은 시장 평균 대비 우수한 조건입니다. 제안 유효기간 내 계약 진행을 권장합니다.',
        priority: 'high'
      },
      {
        title: '장기 계약 고려',
        description: '10년 계약으로 가격 안정성을 확보하고, 장기적인 비용 절감 효과를 극대화할 수 있습니다.',
        priority: 'medium'
      },
      {
        title: 'RE100 인증 활용',
        description: 'RE100 인증서를 마케팅 자료로 활용하여 기업 이미지 제고에 활용하세요.',
        priority: 'medium'
      }
    ]
  }

  const handleDownload = () => {
    alert('PDF 다운로드 기능은 준비 중입니다.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            돌아가기
          </Button>

          <Card className="shadow-lg border-2">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-blue-600">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl">전력 비용 분석 리포트</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {report.companyName} · {report.period}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="px-3 py-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      생성일: {report.generatedDate}
                    </Badge>
                    <Badge className="bg-green-600 text-white px-3 py-1">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      연간 {report.ppaProposal.savingsPercent}% 절감
                    </Badge>
                  </div>
                </div>

                <Button onClick={handleDownload} size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  PDF 다운로드
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Executive Summary */}
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">요약</CardTitle>
            <CardDescription>핵심 분석 결과</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  <p className="text-sm font-medium text-green-700">연간 절감액</p>
                </div>
                <p className="text-3xl font-bold text-green-700">
                  ₩{(report.ppaProposal.yearlySavings / 10000000).toFixed(0)}천만
                </p>
                <p className="text-xs text-green-600 mt-1">
                  10년간 ₩{(report.ppaProposal.totalSavings10Years / 100000000).toFixed(1)}억
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <p className="text-sm font-medium text-blue-700">제안 단가</p>
                </div>
                <p className="text-3xl font-bold text-blue-700">
                  ₩{report.ppaProposal.unitPrice}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  현재 ₩{report.currentStatus.currentUnitPrice} → ₩{report.ppaProposal.unitPrice}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  <p className="text-sm font-medium text-purple-700">투자 수익률</p>
                </div>
                <p className="text-3xl font-bold text-purple-700">
                  {report.financialAnalysis.roi}%
                </p>
                <p className="text-xs text-purple-600 mt-1">
                  회수 기간 {report.financialAnalysis.paybackPeriod}년
                </p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-emerald-600" />
                  <p className="text-sm font-medium text-emerald-700">RE100 달성</p>
                </div>
                <p className="text-3xl font-bold text-emerald-700">
                  {report.environmentalImpact.re100Progress}%
                </p>
                <p className="text-xs text-emerald-600 mt-1">
                  목표 완전 달성
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 현재 vs PPA 비교 */}
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">비용 비교 분석</CardTitle>
            <CardDescription>현재 전력 요금 vs PPA 제안</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 현재 상황 */}
              <div className="p-6 rounded-lg bg-gray-50 border-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">현재 전력 요금</h3>
                  <Badge variant="secondary">기준</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">월 사용량</span>
                    <span className="font-semibold">{report.currentStatus.monthlyConsumption} MWh</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">단가</span>
                    <span className="font-semibold">₩{report.currentStatus.currentUnitPrice}/kWh</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">월 비용</span>
                    <span className="font-semibold">₩{(report.currentStatus.monthlyCost / 10000000).toFixed(1)}천만</span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span className="font-medium">연간 총 비용</span>
                    <span className="text-2xl font-bold text-gray-700">
                      ₩{(report.currentStatus.yearlyCost / 100000000).toFixed(2)}억
                    </span>
                  </div>
                </div>
              </div>

              {/* PPA 제안 */}
              <div className="p-6 rounded-lg bg-primary/5 border-2 border-primary">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary">PPA 제안</h3>
                  <Badge className="bg-green-600">절감안</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">공급자</span>
                    <span className="font-semibold">{report.ppaProposal.supplier}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">단가</span>
                    <span className="font-semibold text-primary">₩{report.ppaProposal.unitPrice}/kWh</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">월 비용</span>
                    <span className="font-semibold text-primary">₩{(report.ppaProposal.monthlyCost / 10000000).toFixed(1)}천만</span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span className="font-medium">연간 총 비용</span>
                    <span className="text-2xl font-bold text-primary">
                      ₩{(report.ppaProposal.yearlyCost / 100000000).toFixed(2)}억
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 절감 효과 */}
            <div className="mt-6 p-6 rounded-lg bg-green-50 border-2 border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700 mb-1">총 절감 효과</p>
                  <p className="text-4xl font-bold text-green-700">
                    ₩{(report.ppaProposal.yearlySavings / 10000000).toFixed(0)}천만
                    <span className="text-lg ml-2">/ 연</span>
                  </p>
                  <p className="text-sm text-green-600 mt-2">
                    10년 계약 시 총 ₩{(report.ppaProposal.totalSavings10Years / 100000000).toFixed(1)}억원 절감
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-green-100">
                    <TrendingDown className="h-12 w-12 text-green-600" />
                  </div>
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    {report.ppaProposal.savingsPercent}%
                  </p>
                  <p className="text-xs text-green-600">절감률</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 월별 분석 */}
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">월별 비용 분석</CardTitle>
            <CardDescription>2024년 월별 비용 비교</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-3 px-4 font-semibold">월</th>
                    <th className="text-right py-3 px-4 font-semibold">현재 비용</th>
                    <th className="text-right py-3 px-4 font-semibold">PPA 비용</th>
                    <th className="text-right py-3 px-4 font-semibold">월 절감액</th>
                  </tr>
                </thead>
                <tbody>
                  {report.monthlyBreakdown.map((month, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{month.month}</td>
                      <td className="text-right py-3 px-4 text-gray-600">
                        ₩{(month.current / 10000000).toFixed(1)}천만
                      </td>
                      <td className="text-right py-3 px-4 text-primary font-semibold">
                        ₩{(month.ppa / 10000000).toFixed(1)}천만
                      </td>
                      <td className="text-right py-3 px-4 text-green-600 font-bold">
                        +₩{(month.savings / 1000000).toFixed(0)}백만
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 bg-muted/30 font-bold">
                    <td className="py-4 px-4">연간 합계</td>
                    <td className="text-right py-4 px-4 text-gray-700">
                      ₩{(report.currentStatus.yearlyCost / 100000000).toFixed(2)}억
                    </td>
                    <td className="text-right py-4 px-4 text-primary">
                      ₩{(report.ppaProposal.yearlyCost / 100000000).toFixed(2)}억
                    </td>
                    <td className="text-right py-4 px-4 text-green-600 text-lg">
                      +₩{(report.ppaProposal.yearlySavings / 10000000).toFixed(0)}천만
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 환경 영향 */}
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">환경 영향 분석</CardTitle>
            <CardDescription>재생에너지 전환으로 인한 환경 기여도</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-green-50 border-2 border-green-200">
                <div className="inline-flex p-3 rounded-full bg-green-100 mb-3">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">CO₂ 감축량</p>
                <p className="text-3xl font-bold text-green-700">
                  {report.environmentalImpact.co2Reduction.toLocaleString()}톤
                </p>
                <p className="text-xs text-green-600 mt-2">연간</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-emerald-50 border-2 border-emerald-200">
                <div className="inline-flex p-3 rounded-full bg-emerald-100 mb-3">
                  <PieChart className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">나무 심기 효과</p>
                <p className="text-3xl font-bold text-emerald-700">
                  {report.environmentalImpact.treesEquivalent.toLocaleString()}그루
                </p>
                <p className="text-xs text-emerald-600 mt-2">상당</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-blue-50 border-2 border-blue-200">
                <div className="inline-flex p-3 rounded-full bg-blue-100 mb-3">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">자동차 감축 효과</p>
                <p className="text-3xl font-bold text-blue-700">
                  {report.environmentalImpact.carsEquivalent}대
                </p>
                <p className="text-xs text-blue-600 mt-2">연간 운행 제거</p>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">RE100 목표 달성</p>
                  <p className="text-sm text-blue-700">
                    본 PPA 계약을 통해 RE100 목표를 100% 달성할 수 있습니다.
                    RE100 인증서는 자동으로 발급되며, ESG 경영 및 마케팅 자료로 활용 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 권장사항 */}
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">권장사항</CardTitle>
            <CardDescription>분석 결과 기반 실행 권고</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {report.recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 ${
                    rec.priority === 'high'
                      ? 'bg-red-50 border-red-200'
                      : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {rec.priority === 'high' ? (
                      <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className={`font-semibold ${
                          rec.priority === 'high' ? 'text-red-900' : 'text-amber-900'
                        }`}>
                          {rec.title}
                        </h4>
                        <Badge variant={rec.priority === 'high' ? 'destructive' : 'secondary'}>
                          {rec.priority === 'high' ? '높음' : '중간'}
                        </Badge>
                      </div>
                      <p className={`text-sm ${
                        rec.priority === 'high' ? 'text-red-700' : 'text-amber-700'
                      }`}>
                        {rec.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 하단 액션 */}
        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="text-center md:text-left">
                <p className="font-semibold text-lg mb-1">리포트가 도움이 되셨나요?</p>
                <p className="text-sm text-muted-foreground">
                  더 자세한 상담이 필요하시면 전문가와 연결해드립니다
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-2" />
                  PDF 저장
                </Button>
                <Button size="lg" className="shadow-lg" onClick={() => navigate('/demand/dashboard')}>
                  <FileText className="h-4 w-4 mr-2" />
                  제안서 확인하기
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
