import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '@/contexts/AppContext'
import { useToast } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Zap, LogIn, Loader2 } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useApp()
  const { addToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      addToast({
        title: '입력 오류',
        description: '이메일과 비밀번호를 입력해주세요',
        variant: 'error',
      })
      return
    }

    setIsLoading(true)

    // 실제 서비스에서는 API 호출
    setTimeout(() => {
      const userData = {
        id: 1,
        email: formData.email,
        name: '제조업 A사',
        type: 'demand',
      }

      login(userData)

      addToast({
        title: '로그인 성공',
        description: `환영합니다, ${userData.name}님!`,
        variant: 'success',
      })

      setIsLoading(false)
      navigate('/demand/dashboard')
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-5rem)] py-10">
      <Card className="w-full max-w-md shadow-2xl border-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CardHeader className="space-y-3 pb-8">
          <div className="flex justify-center mb-2">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-blue-600">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl text-center">다시 오신 것을 환영합니다</CardTitle>
          <CardDescription className="text-center text-base">
            Energy Bridge에 로그인하여 계속 진행하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full shadow-lg hover:shadow-xl"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  로그인 중...
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-5 w-5" />
                  로그인
                </>
              )}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  또는
                </span>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Energy Bridge가 처음이신가요?{' '}
              <Link to="/signup" className="text-primary hover:underline font-medium">
                무료로 시작하기
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
