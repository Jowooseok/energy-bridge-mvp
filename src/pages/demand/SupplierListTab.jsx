import React, { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { useToast } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'
import { Sun, Wind, Battery, MapPin, Zap, DollarSign, Navigation, Star, ArrowRight, Check } from 'lucide-react'

export default function SupplierListTab({ onNext }) {
  const { suppliers: appSuppliers, selectedSuppliers, toggleSupplierSelection } = useApp()
  const { addToast } = useToast()
  const [filterRegion, setFilterRegion] = useState('all')
  const [filterType, setFilterType] = useState('all')

  const getIcon = (type) => {
    switch(type) {
      case '태양광': return Sun
      case '풍력': return Wind
      case 'ESS': return Battery
      default: return Zap
    }
  }

  const filteredSuppliers = appSuppliers.filter(supplier => {
    const regionMatch = filterRegion === 'all' || supplier.location.includes(filterRegion)
    const typeMatch = filterType === 'all' || supplier.type === filterType
    return regionMatch && typeMatch
  })

  const handleToggleSelect = (supplierId) => {
    toggleSupplierSelection(supplierId)
    const isSelected = selectedSuppliers.includes(supplierId)
    const supplier = appSuppliers.find(s => s.id === supplierId)

    addToast({
      title: isSelected ? '선택 취소' : '공급자 선택',
      description: `${supplier.name}을(를) ${isSelected ? '선택 취소' : '선택'}했습니다`,
      variant: isSelected ? 'warning' : 'success',
    })
  }

  const handleNext = () => {
    if (selectedSuppliers.length === 0) {
      addToast({
        title: '선택 필요',
        description: '최소 1개 이상의 공급자를 선택해주세요',
        variant: 'error',
      })
      return
    }

    addToast({
      title: '선택 완료',
      description: `${selectedSuppliers.length}개 공급자가 선택되었습니다`,
      variant: 'success',
    })
    onNext()
  }

  return (
    <div className="space-y-6">
      {/* 필터 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>공급자 찾기</CardTitle>
          <CardDescription>매칭 가능한 공급자 목록을 확인하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">지역 선택</label>
              <Select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)}>
                <option value="all">전체</option>
                <option value="경기">경기도</option>
                <option value="강원">강원도</option>
                <option value="충청">충청남도</option>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">유형 선택</label>
              <Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="all">전체</option>
                <option value="태양광">태양광</option>
                <option value="풍력">풍력</option>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">정렬 기준</label>
              <Select defaultValue="distance">
                <option value="distance">거리순</option>
                <option value="price">단가순</option>
                <option value="capacity">발전량순</option>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 선택된 공급자 수 */}
      {selectedSuppliers.length > 0 && (
        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6">
            <p className="text-center text-sm">
              <span className="font-semibold text-primary">{selectedSuppliers.length}개</span> 공급자가 선택되었습니다
            </p>
          </CardContent>
        </Card>
      )}

      {/* 공급자 카드 목록 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSuppliers.map((supplier) => {
          const Icon = getIcon(supplier.type)
          const isSelected = selectedSuppliers.includes(supplier.id)

          return (
            <Card key={supplier.id} className={`relative ${isSelected ? 'border-2 border-primary bg-primary/5' : ''}`}>
              {supplier.matchScore > 90 && (
                <Badge className="absolute -top-2 -right-2 z-10 bg-yellow-500">⭐ 추천</Badge>
              )}
              {isSelected && (
                <Badge className="absolute -top-2 -left-2 z-10 bg-green-600">
                  <Check className="h-3 w-3 mr-1" />
                  선택됨
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon className="h-10 w-10 text-primary" />
                  <Badge variant="secondary">{supplier.type}</Badge>
                </div>
                <CardTitle className="mt-2">{supplier.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  {supplier.location}
                </div>
                <div className="flex items-center text-sm">
                  <Zap className="h-4 w-4 mr-2 text-muted-foreground" />
                  설비 용량: {supplier.capacity}
                </div>
                <div className="flex items-center text-sm font-semibold text-primary">
                  <DollarSign className="h-4 w-4 mr-2" />
                  ₩{supplier.unitPrice}/kWh
                </div>
                <div className="flex items-center text-sm">
                  <Navigation className="h-4 w-4 mr-2 text-muted-foreground" />
                  거리: {supplier.distance}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < supplier.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    매칭도 {supplier.matchScore}%
                  </Badge>
                </div>

                <Button
                  variant={isSelected ? 'default' : 'outline'}
                  className="w-full mt-4"
                  onClick={() => handleToggleSelect(supplier.id)}
                >
                  {isSelected ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      선택됨
                    </>
                  ) : (
                    '선택하기'
                  )}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* CTA 버튼 */}
      <div className="flex justify-center pt-4">
        <Button size="lg" onClick={handleNext}>
          선택한 공급자에게 매칭 요청 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
