import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { ArrowRight } from 'lucide-react'

export default function RegisterPlantTab({ onNext }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    address: '',
    capacity: '',
    annualGeneration: '',
    price: '',
    contractPeriod: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('발전소가 등록되었습니다!\n관리자 검토 후 승인됩니다.')
    onNext()
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
        <CardTitle>발전소 등록</CardTitle>
        <CardDescription>발전소 정보를 플랫폼에 등록하여 매칭 풀에 참여하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 기본 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">기본 정보</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">발전소명</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="그린에너지 태양광 1호"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">발전 유형</Label>
                <Select id="type" name="type" value={formData.type} onChange={handleChange} required>
                  <option value="">선택하세요</option>
                  <option value="solar">태양광</option>
                  <option value="wind">풍력</option>
                  <option value="ess">ESS</option>
                </Select>
              </div>
            </div>
          </div>

          {/* 위치 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">위치 정보</h3>
            <div className="space-y-2">
              <Label htmlFor="address">주소</Label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="경기도 용인시..."
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* 설비 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">설비 정보</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="capacity">설비 용량 (MW)</Label>
                <Input
                  id="capacity"
                  name="capacity"
                  type="number"
                  placeholder="150"
                  value={formData.capacity}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="annualGeneration">연간 발전량 (MWh)</Label>
                <Input
                  id="annualGeneration"
                  name="annualGeneration"
                  type="number"
                  placeholder="180000"
                  value={formData.annualGeneration}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">제안 단가 (원/kWh)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="155"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* 계약 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">계약 정보</h3>
            <div className="space-y-2">
              <Label htmlFor="contractPeriod">계약 가능 기간</Label>
              <Select
                id="contractPeriod"
                name="contractPeriod"
                value={formData.contractPeriod}
                onChange={handleChange}
                required
              >
                <option value="">선택하세요</option>
                <option value="5">5년</option>
                <option value="10">10년</option>
                <option value="15">15년</option>
                <option value="20">20년</option>
              </Select>
            </div>
          </div>

          {/* 서류 업로드 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서류 업로드</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="kepcoDoc">한전 납부확인서 (JPG, PNG, PDF)</Label>
                <Input id="kepcoDoc" type="file" accept=".jpg,.jpeg,.png,.pdf" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plantPhotos">발전소 사진 (최대 5장)</Label>
                <Input id="plantPhotos" type="file" accept="image/*" multiple />
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            발전소 등록하기 <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
