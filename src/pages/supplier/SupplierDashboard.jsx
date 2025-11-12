import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PlusCircle, Zap, Inbox, FileEdit } from 'lucide-react'
import RegisterPlantTab from './RegisterPlantTab'
import MyPlantsTab from './MyPlantsTab'
import MatchingRequestsTab from './MatchingRequestsTab'
import ProposalFormTab from './ProposalFormTab'

export default function SupplierDashboard() {
  const [activeTab, setActiveTab] = useState('register')

  const tabs = [
    { value: 'register', label: '발전소 등록', icon: PlusCircle },
    { value: 'myplants', label: '내 발전소', icon: Zap },
    { value: 'requests', label: '매칭 요청', icon: Inbox },
    { value: 'proposal', label: '제안서 작성', icon: FileEdit },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50/30">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                공급자 대시보드
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">
                발전소 운영사의 수요자 매칭 및 제안서 작성
              </p>
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              그린에너지 태양광
            </Badge>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <Card className="mb-6 shadow-lg border-2">
            <TabsList className="grid w-full grid-cols-4 p-2 bg-muted/50 h-auto gap-2">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:shadow-md"
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Card>

          <TabsContent value="register">
            <RegisterPlantTab onNext={() => setActiveTab('myplants')} />
          </TabsContent>

          <TabsContent value="myplants">
            <MyPlantsTab />
          </TabsContent>

          <TabsContent value="requests">
            <MatchingRequestsTab onNext={() => setActiveTab('proposal')} />
          </TabsContent>

          <TabsContent value="proposal">
            <ProposalFormTab onNext={() => setActiveTab('requests')} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
