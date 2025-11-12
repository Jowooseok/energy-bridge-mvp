import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight } from 'lucide-react'

export default function ProposalFormTab({ onNext }) {
  const [formData, setFormData] = useState({
    price: '',
    volume: '',
    period: '',
    additionalTerms: '',
  })

  const [conditions, setConditions] = useState({
    curtailmentCompensation: true,
    re100Certificate: true,
    backupSupply: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('제안서가 제출되었습니다!\n수요자에게 전달됩니다.')
    onNext()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleConditionChange = (e) => {
    setConditions({
      ...conditions,
      [e.target.name]: e.target.checked,
    })
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold">제안서 작성</h2>
        <p className="text-muted-foreground mt-1">수요자에게 제공할 제안서를 작성하세요</p>
      </div>

      {/* 수요자 정보 */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader>
          <CardTitle>수요자 정보</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            <span className="font-semibold">제조업 A사</span> · 경기도 용인시 · 연간 5,000 MWh
            · 희망 단가 120원 이하
          </p>
        </CardContent>
      </Card>

      {/* 제안서 입력 폼 */}
      <Card>
        <CardHeader>
          <CardTitle>제안 정보</CardTitle>
          <CardDescription>경쟁력 있는 제안을 작성하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 제안 기본 정보 */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="price">제안 단가 (원/kWh)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="98"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-muted-foreground">수요자 희망 단가 이하 권장</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="volume">공급 가능 물량 (MWh)</Label>
                <Input
                  id="volume"
                  name="volume"
                  type="number"
                  placeholder="5000"
                  value={formData.volume}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="period">계약 기간</Label>
                <Select id="period" name="period" value={formData.period} onChange={handleChange} required>
                  <option value="">선택하세요</option>
                  <option value="10">10년</option>
                  <option value="15">15년</option>
                  <option value="20">20년</option>
                </Select>
              </div>
            </div>

            {/* 추가 조건 */}
            <div className="space-y-2">
              <Label htmlFor="additionalTerms">추가 조건</Label>
              <Textarea
                id="additionalTerms"
                name="additionalTerms"
                placeholder="출력제한 보상, 백업 공급 등 특별 조건을 입력하세요"
                rows={4}
                value={formData.additionalTerms}
                onChange={handleChange}
              />
            </div>

            {/* 표준 조항 선택 */}
            <div>
              <Label className="mb-3 block">표준 조항 선택</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="curtailmentCompensation"
                    name="curtailmentCompensation"
                    checked={conditions.curtailmentCompensation}
                    onChange={handleConditionChange}
                    className="h-4 w-4"
                  />
                  <label htmlFor="curtailmentCompensation" className="text-sm cursor-pointer">
                    출력제한 시 보상 조항 포함
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="re100Certificate"
                    name="re100Certificate"
                    checked={conditions.re100Certificate}
                    onChange={handleConditionChange}
                    className="h-4 w-4"
                  />
                  <label htmlFor="re100Certificate" className="text-sm cursor-pointer">
                    RE100 인증서 자동 발급
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="backupSupply"
                    name="backupSupply"
                    checked={conditions.backupSupply}
                    onChange={handleConditionChange}
                    className="h-4 w-4"
                  />
                  <label htmlFor="backupSupply" className="text-sm cursor-pointer">
                    백업 공급 시스템 제공
                  </label>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              제안서 제출하기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* 가격 책정 가이드 */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">💡 가격 책정 가이드</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>
            <span className="font-semibold">공급자 원가:</span> 85원/kWh 기준
          </p>
          <p>
            <span className="font-semibold">권장 마진:</span> 10~15%
          </p>
          <p>
            <span className="font-semibold">권장 제안 단가:</span> 95~100원/kWh
          </p>
          <p className="text-muted-foreground pt-2">
            수요자 희망 단가 이하로 제안하면 매칭 가능성이 높아집니다.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
