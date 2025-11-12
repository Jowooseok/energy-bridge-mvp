import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Factory, Zap, DollarSign, Calendar, Navigation } from 'lucide-react'

export default function MatchingRequestsTab({ onNext }) {
  const requests = [
    {
      id: 1,
      companyName: '제조업 A사',
      industry: '부품 가공업',
      location: '경기도 용인시',
      annualConsumption: '5,000 MWh',
      maxPrice: '120원 이하',
      contractPeriod: '10년',
      distance: '약 50km',
      status: 'pending',
    },
  ]

  const handleProposal = (request) => {
    alert(`${request.companyName}에 대한 제안서를 작성합니다.`)
    onNext()
  }

  const handleReject = (request) => {
    if (window.confirm(`${request.companyName}의 매칭 요청을 거절하시겠습니까?`)) {
      alert('매칭 요청이 거절되었습니다.')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">매칭 요청</h2>
        <p className="text-muted-foreground mt-1">수요자의 매칭 요청을 확인하세요</p>
      </div>

      {requests.length > 0 ? (
        <div className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Factory className="h-10 w-10 text-primary mt-1" />
                    <div>
                      <CardTitle className="text-xl">{request.companyName}</CardTitle>
                      <CardDescription className="mt-1">
                        {request.industry} · {request.location}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant={request.status === 'pending' ? 'secondary' : 'default'}>
                    {request.status === 'pending' ? '대기 중' : '처리됨'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 주요 정보 그리드 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">연간 소비</p>
                    <p className="font-semibold flex items-center">
                      <Zap className="h-4 w-4 mr-1 text-primary" />
                      {request.annualConsumption}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">희망 단가</p>
                    <p className="font-semibold flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-primary" />
                      {request.maxPrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">계약 기간</p>
                    <p className="font-semibold flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-primary" />
                      {request.contractPeriod}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">거리</p>
                    <p className="font-semibold flex items-center">
                      <Navigation className="h-4 w-4 mr-1 text-primary" />
                      {request.distance}
                    </p>
                  </div>
                </div>

                {/* 액션 버튼 */}
                <div className="flex gap-3 pt-2">
                  <Button onClick={() => handleProposal(request)} className="flex-1">
                    제안서 작성하기
                  </Button>
                  <Button
                    variant="outline"
                    className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => handleReject(request)}
                  >
                    거절
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">현재 매칭 요청이 없습니다.</p>
            <p className="text-sm text-muted-foreground mt-2">
              AI가 매칭한 수요자가 있을 때 표시됩니다.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
