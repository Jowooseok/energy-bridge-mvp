import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Zap, DollarSign, Edit, Trash2 } from 'lucide-react'

export default function MyPlantsTab() {
  const plants = [
    {
      id: 1,
      name: '그린에너지 태양광 1호',
      location: '경기도 용인시',
      capacity: '150 MW',
      annualGeneration: '180,000 MWh',
      price: '155원/kWh',
      status: 'active',
    },
  ]

  const handleEdit = (plant) => {
    alert(`${plant.name} 수정 기능은 추후 구현됩니다.`)
  }

  const handleDelete = (plant) => {
    if (window.confirm(`${plant.name}을(를) 삭제하시겠습니까?`)) {
      alert('발전소가 삭제되었습니다.')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">내 발전소</h2>
        <p className="text-muted-foreground mt-1">등록된 발전소 목록을 조회하고 관리하세요</p>
      </div>

      {plants.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <Card key={plant.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{plant.name}</CardTitle>
                  <Badge variant={plant.status === 'active' ? 'default' : 'secondary'}>
                    {plant.status === 'active' ? '활성' : '비활성'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  {plant.location}
                </div>

                <div className="flex items-center text-sm">
                  <Zap className="h-4 w-4 mr-2 text-muted-foreground" />
                  {plant.capacity} · 연간 {plant.annualGeneration}
                </div>

                <div className="flex items-center text-sm font-semibold">
                  <DollarSign className="h-4 w-4 mr-2 text-primary" />
                  제안 단가: {plant.price}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleEdit(plant)}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    수정
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => handleDelete(plant)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">등록된 발전소가 없습니다.</p>
            <p className="text-sm text-muted-foreground mt-2">
              발전소 등록 탭에서 새로운 발전소를 등록하세요.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
