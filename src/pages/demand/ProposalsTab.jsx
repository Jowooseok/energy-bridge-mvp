import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sun, Wind, Check, FileText } from 'lucide-react'

export default function ProposalsTab() {
  const navigate = useNavigate()
  const proposals = [
    {
      id: 1,
      name: '그린에너지 태양광 A',
      location: '경기도 용인시',
      type: '태양광',
      capacity: '150MW',
      icon: Sun,
      price: '98원/kWh',
      period: '10년',
      savings: '8,500만원',
      distance: '50km',
      recommended: true,
      conditions: [
        '고정 단가 (물가 연동 없음)',
        '출력제한 시 보상 조항 포함',
        '백업 공급 시스템 구축',
        'RE100 인증서 자동 발급',
      ],
    },
    {
      id: 2,
      name: '클린윈드 발전소 B',
      location: '강원도 강릉시',
      type: '풍력',
      capacity: '200MW',
      icon: Wind,
      price: '105원/kWh',
      period: '10년',
      savings: '5,000만원',
      distance: '120km',
      recommended: false,
      conditions: [
        '물가 연동 조정 (CPI +2%)',
        '출력제한 시 부분 보상',
        'RE100 인증서 자동 발급',
      ],
    },
  ]

  const handleAccept = (proposal) => {
    if (
      window.confirm(
        `${proposal.name}의 제안을 수락하시겠습니까?\n\n제안 단가: ${proposal.price}\n예상 절감: ${proposal.savings}`
      )
    ) {
      alert('제안이 수락되었습니다!\n전자계약서를 준비 중입니다.')
    }
  }

  const handleDetails = (proposalId) => {
    navigate(`/demand/proposals/${proposalId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">받은 제안서</h2>
        <Badge variant="secondary" className="px-3 py-1">
          {proposals.length}개 도착
        </Badge>
      </div>

      {/* 제안서 카드 목록 */}
      <div className="space-y-6">
        {proposals.map((proposal) => (
          <Card key={proposal.id} className={proposal.recommended ? 'border-2 border-primary' : ''}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <proposal.icon className="h-10 w-10 text-primary mt-1" />
                  <div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-2xl">{proposal.name}</CardTitle>
                      {proposal.recommended && (
                        <Badge className="bg-yellow-500 hover:bg-yellow-600">⭐ 추천</Badge>
                      )}
                    </div>
                    <CardDescription className="mt-1">
                      {proposal.location} · {proposal.type} {proposal.capacity}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 주요 정보 그리드 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">제안 단가</p>
                  <p className="text-lg font-bold text-primary">{proposal.price}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">계약 기간</p>
                  <p className="text-lg font-bold">{proposal.period}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">예상 절감</p>
                  <p className="text-lg font-bold text-green-600">{proposal.savings}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">거리</p>
                  <p className="text-lg font-bold">{proposal.distance}</p>
                </div>
              </div>

              {/* 주요 조건 */}
              <div>
                <p className="font-semibold mb-3">주요 조건:</p>
                <div className="space-y-2">
                  {proposal.conditions.map((condition, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="flex gap-3 pt-4">
                <Button onClick={() => handleAccept(proposal)} className="flex-1">
                  이 제안 수락하기
                </Button>
                <Button variant="outline" onClick={() => handleDetails(proposal.id)}>
                  <FileText className="h-4 w-4 mr-2" />
                  상세보기
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 의사결정 도움말 */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">💡 제안서 선택 가이드</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">제안 1</span>은 단가가 낮고(98원), 고정 단가 조건으로
              장기적으로 유리합니다.
            </p>
            <p>
              <span className="font-semibold">제안 2</span>는 단가가 높지만(105원), 풍력 발전의
              안정성이 장점입니다.
            </p>
            <p className="text-muted-foreground pt-2">
              거리, 단가, 계약 조건을 종합적으로 고려하여 선택하세요.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
