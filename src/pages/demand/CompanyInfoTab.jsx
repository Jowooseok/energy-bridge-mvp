import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '@/contexts/AppContext'
import { useToast } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, FileText, Save } from 'lucide-react'

export default function CompanyInfoTab({ onNext }) {
  const navigate = useNavigate()
  const { companyInfo, updateCompanyInfo } = useApp()
  const { addToast } = useToast()
  const [formData, setFormData] = useState(companyInfo)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setFormData(companyInfo)
  }, [companyInfo])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.industry || !formData.annualConsumption) {
      addToast({
        title: '입력 오류',
        description: '필수 항목을 입력해주세요',
        variant: 'error',
      })
      return
    }

    setIsSaving(true)

    // 실제 서비스에서는 API 호출
    setTimeout(() => {
      updateCompanyInfo(formData)

      addToast({
        title: '저장 완료',
        description: '기업 정보가 저장되었습니다',
        variant: 'success',
      })

      setIsSaving(false)
      onNext()
    }, 500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>기업 정보</CardTitle>
        <CardDescription>정확한 매칭을 위한 수요자 정보를 입력하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 기본 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">기본 정보</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="industry">업종</Label>
                <Select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="">선택하세요</option>
                  <option value="manufacturing-parts">제조업-부품가공</option>
                  <option value="manufacturing-electronics">제조업-전자부품</option>
                  <option value="manufacturing-machinery">제조업-기계</option>
                  <option value="other">기타</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">사업장 주소</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="경기도 용인시..."
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* 전력 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">전력 정보</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="annualConsumption">연간 전력 소비량 (MWh)</Label>
                <Input
                  id="annualConsumption"
                  name="annualConsumption"
                  type="number"
                  placeholder="5000"
                  value={formData.annualConsumption}
                  onChange={handleChange}
                />
                <p className="text-xs text-muted-foreground">
                  5,000 MWh = 5,000,000 kWh
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxPrice">최대 허용 단가 (원/kWh)</Label>
                <Input
                  id="maxPrice"
                  name="maxPrice"
                  type="number"
                  placeholder="120"
                  value={formData.maxPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* 계약 조건 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">계약 조건</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contractPeriod">희망 계약 기간</Label>
                <Select
                  id="contractPeriod"
                  name="contractPeriod"
                  value={formData.contractPeriod}
                  onChange={handleChange}
                >
                  <option value="">선택하세요</option>
                  <option value="5">5년</option>
                  <option value="10">10년</option>
                  <option value="15">15년</option>
                  <option value="20">20년</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="re100Status">RE100 이행 여부</Label>
                <Select
                  id="re100Status"
                  name="re100Status"
                  value={formData.re100Status}
                  onChange={handleChange}
                >
                  <option value="">선택하세요</option>
                  <option value="planning">이행 계획 중</option>
                  <option value="in-progress">이행 중</option>
                  <option value="not-implemented">미이행</option>
                </Select>
              </div>
            </div>
          </div>

          {/* 부하 패턴 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">부하 패턴</h3>
            <div className="space-y-2">
              <Label htmlFor="loadPattern">피크 시간대</Label>
              <Textarea
                id="loadPattern"
                name="loadPattern"
                placeholder="평일 오전 9시~오후 6시 주로 사용"
                rows={3}
                value={formData.loadPattern}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => navigate('/demand/report')}
            >
              <FileText className="mr-2 h-4 w-4" />
              분석 리포트 보기
            </Button>
            <Button type="submit" size="lg" className="flex-1" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Save className="mr-2 h-4 w-4 animate-pulse" />
                  저장 중...
                </>
              ) : (
                <>
                  저장하고 다음으로 <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
