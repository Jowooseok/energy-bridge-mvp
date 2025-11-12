import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Zap, DollarSign, Calendar, ArrowRight } from 'lucide-react'

export default function MatchingRequestTab({ onNext }) {
  const [notificationEnabled, setNotificationEnabled] = useState(true)

  const handleSubmit = () => {
    alert('매칭 요청이 제출되었습니다!\n72시간 내에 제안서가 도착합니다.')
    onNext()
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* 프로세스 설명 */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="text-2xl mr-2">💡</span>
            매칭 프로세스
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="font-semibold mr-2">1.</span>
              <span>시스템이 귀사의 조건에 맞는 공급자를 자동으로 검색합니다</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">2.</span>
              <span>72시간 내에 2~3개의 맞춤 제안서가 도착합니다</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">3.</span>
              <span>제안서를 비교하고 최적의 공급자를 선택하세요</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">4.</span>
              <span>선택 후 전자계약으로 간편하게 계약을 진행합니다</span>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* 입력 정보 확인 */}
      <Card>
        <CardHeader>
          <CardTitle>입력하신 정보 확인</CardTitle>
          <CardDescription>
            기업 정보 탭에서 입력한 데이터를 기반으로 매칭됩니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">위치</p>
                <p className="font-medium">경기도 용인시</p>
              </div>
            </div>

            <div className="flex items-center">
              <Zap className="h-5 w-5 text-muted-foreground mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">연간 소비</p>
                <p className="font-medium">5,000 MWh</p>
              </div>
            </div>

            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-muted-foreground mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">희망 단가</p>
                <p className="font-medium">120원/kWh 이하</p>
              </div>
            </div>

            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-muted-foreground mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">계약 기간</p>
                <p className="font-medium">10년</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            정보를 수정하시려면 기업 정보 탭으로 돌아가세요
          </p>
        </CardContent>
      </Card>

      {/* 알림 설정 */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="notification"
              checked={notificationEnabled}
              onChange={(e) => setNotificationEnabled(e.target.checked)}
              className="h-4 w-4"
            />
            <label htmlFor="notification" className="text-sm font-medium cursor-pointer">
              매칭 알림을 이메일과 SMS로 받겠습니다
            </label>
          </div>
        </CardContent>
      </Card>

      {/* 제출 버튼 */}
      <Button onClick={handleSubmit} size="lg" className="w-full">
        매칭 요청 제출하기 <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
