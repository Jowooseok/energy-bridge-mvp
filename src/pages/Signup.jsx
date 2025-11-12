import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Factory, Zap } from 'lucide-react'

export default function Signup() {
  const navigate = useNavigate()
  const [userType, setUserType] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    companyName: '',
    businessNumber: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userType) {
      alert('사용자 유형을 선택해주세요')
      return
    }

    if (!formData.email || !formData.password || !formData.companyName || !formData.businessNumber) {
      alert('모든 필드를 입력해주세요')
      return
    }

    alert('회원가입이 완료되었습니다!')

    if (userType === 'demand') {
      navigate('/demand/dashboard')
    } else {
      navigate('/supplier/dashboard')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-5rem)] py-10">
      <Card className="w-full max-w-2xl shadow-2xl border-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CardHeader className="space-y-3 pb-8">
          <div className="flex justify-center mb-2">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-blue-600">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl text-center">Energy Bridge 시작하기</CardTitle>
          <CardDescription className="text-center text-base">
            AI 기반 매칭으로 72시간 내 최적의 파트너를 찾아드립니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 사용자 유형 선택 */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">사용자 유형을 선택해주세요</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setUserType('demand')}
                  className={`group p-8 border-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    userType === 'demand'
                      ? 'border-primary bg-primary/5 shadow-md scale-105'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-xl mb-4 ${
                    userType === 'demand'
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                      : 'bg-muted group-hover:bg-primary/10'
                  }`}>
                    <Factory className={`h-10 w-10 ${
                      userType === 'demand' ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  <p className="text-lg font-bold mb-1">수요자</p>
                  <p className="text-sm text-muted-foreground">
                    전력 구매 기업
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    재생에너지로 전기요금 절감
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('supplier')}
                  className={`group p-8 border-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    userType === 'supplier'
                      ? 'border-primary bg-primary/5 shadow-md scale-105'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-xl mb-4 ${
                    userType === 'supplier'
                      ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                      : 'bg-muted group-hover:bg-primary/10'
                  }`}>
                    <Zap className={`h-10 w-10 ${
                      userType === 'supplier' ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  <p className="text-lg font-bold mb-1">공급자</p>
                  <p className="text-sm text-muted-foreground">
                    발전소 운영사
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    안정적인 전력 판매처 확보
                  </p>
                </button>
              </div>
            </div>

            {/* 기본 정보 입력 */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="8자 이상"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">기업명</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="회사명을 입력하세요"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessNumber">사업자등록번호</Label>
                <Input
                  id="businessNumber"
                  name="businessNumber"
                  type="text"
                  placeholder="000-00-00000"
                  value={formData.businessNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full shadow-lg hover:shadow-xl" size="lg">
              Energy Bridge 시작하기
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              이미 계정이 있으신가요?{' '}
              <Link to="/login" className="text-primary hover:underline font-medium">
                로그인하기
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
