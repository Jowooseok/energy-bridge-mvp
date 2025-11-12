import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, PiggyBank, Shield, MousePointerClick, ArrowRight, TrendingDown, CheckCircle2, BarChart3 } from 'lucide-react'

export default function Landing() {
  const features = [
    {
      icon: Zap,
      title: '빠르다',
      description: '72시간 내 매칭 완료',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: PiggyBank,
      title: '저렴하다',
      description: '15~25% 요금 절감',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: '안전하다',
      description: '표준계약서 리스크 보장',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MousePointerClick,
      title: '쉽다',
      description: '클릭 몇 번으로 완료',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ]

  const stats = [
    { value: '523+', label: '가입 기업' },
    { value: '45건', label: '완료된 계약' },
    { value: '34억원', label: '총 거래액' },
    { value: '18.5%', label: '평균 절감률' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <Badge variant="secondary" className="px-6 py-2 text-sm font-semibold shadow-sm">
              <Zap className="mr-2 h-4 w-4" />
              AI 기반 자동 매칭 플랫폼
            </Badge>

            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              중소기업과 재생에너지를
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                스마트하게 연결합니다
              </span>
            </h1>

            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
              Energy Bridge는 AI 기반 매칭으로 72시간 내에 최적의 재생에너지 공급자를 찾아드립니다.
              <br />
              <span className="font-semibold text-primary">전기요금 15-25% 절감, RE100 목표 달성을 지금 시작하세요.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link to="/signup" className="inline-flex items-center justify-center">
                  무료로 시작하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="shadow-sm">
                <Link to="/demand/dashboard" className="inline-flex items-center justify-center">
                  데모 둘러보기
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-4xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              왜 Energy Bridge인가?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              복잡한 PPA 계약 프로세스를 간단하게, 최적의 조건으로
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <CardHeader className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">고객 성공 사례</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              실제 절감 효과를 확인하세요
            </h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <Card className="border-2 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 px-8 py-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold">중견 제조업 A사</h3>
                      <Badge className="bg-green-600 hover:bg-green-700 text-white px-3 py-1">
                        <TrendingDown className="h-4 w-4 mr-1" />
                        14.8% 절감
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      부품 가공업 · 연간 전력 소비: 5,000 MWh
                    </p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center p-6 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium text-muted-foreground mb-2">현재 비용</p>
                    <p className="text-3xl md:text-4xl font-bold text-gray-600">5.75억원</p>
                    <p className="text-xs text-muted-foreground mt-1">연간</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-primary/5 border-2 border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">PPA 적용 후</p>
                    <p className="text-3xl md:text-4xl font-bold text-primary">4.90억원</p>
                    <p className="text-xs text-muted-foreground mt-1">연간</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-green-50 border-2 border-green-200">
                    <p className="text-sm font-medium text-green-700 mb-2">연간 절감액</p>
                    <p className="text-3xl md:text-4xl font-bold text-green-600">8,500만원</p>
                    <p className="text-xs text-green-600 mt-1 font-semibold">10년간 8.5억원 절감</p>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-blue-900 mb-1">계약 후 72시간 만에 매칭 완료</p>
                      <p className="text-sm text-blue-700">
                        경기도 용인 소재 태양광 발전소와 10년 장기 계약 체결. 고정 단가 조건으로 안정적인 비용 예측 가능.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-blue-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-2 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-blue-600 p-1">
              <div className="bg-background p-12">
                <div className="flex flex-col items-center space-y-6 text-center">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Zap className="h-4 w-4 mr-2" />
                    무료 체험 진행 중
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    지금 바로 시작하세요
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg leading-relaxed">
                    Energy Bridge와 함께 전력 비용을 절감하고 RE100 목표를 달성하세요.
                    <br />
                    <span className="font-semibold text-primary">신규 가입 시 3개월 무료</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" asChild className="shadow-lg">
                      <Link to="/signup" className="inline-flex items-center justify-center">
                        무료로 시작하기
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/login" className="inline-flex items-center justify-center">
                        기존 회원 로그인
                      </Link>
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-8 pt-8 w-full max-w-2xl border-t mt-8">
                    <div className="text-center">
                      <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">신용카드 불필요</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">무료 체험</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">언제든 해지 가능</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Energy Bridge</span>
              </div>
              <p className="text-sm text-muted-foreground">
                중소기업과 재생에너지를 연결하는
                <br />
                AI 기반 PPA 매칭 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/demand/dashboard" className="hover:text-primary">수요자 대시보드</Link></li>
                <li><Link to="/supplier/dashboard" className="hover:text-primary">공급자 대시보드</Link></li>
                <li><Link to="/admin/dashboard" className="hover:text-primary">관리자 대시보드</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">문의</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>이메일: contact@flowgence.com</li>
                <li>전화: 02-1234-5678</li>
                <li>주소: 서울특별시 강남구</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Flowgence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
