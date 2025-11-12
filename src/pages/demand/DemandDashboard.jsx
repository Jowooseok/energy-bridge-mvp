import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Search, Calculator, Send, FileText } from 'lucide-react'
import CompanyInfoTab from './CompanyInfoTab'
import SupplierListTab from './SupplierListTab'
import SimulatorTab from './SimulatorTab'
import MatchingRequestTab from './MatchingRequestTab'
import ProposalsTab from './ProposalsTab'

export default function DemandDashboard() {
  const [activeTab, setActiveTab] = useState('company')

  const tabs = [
    { value: 'company', label: '기업 정보', icon: Building2 },
    { value: 'suppliers', label: '공급자 찾기', icon: Search },
    { value: 'simulator', label: '시뮬레이터', icon: Calculator },
    { value: 'matching', label: '매칭 요청', icon: Send },
    { value: 'proposals', label: '제안서', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                수요자 대시보드
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">
                전력 구매 기업의 매칭 프로세스를 진행하세요
              </p>
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              환영합니다, 제조업 A사
            </Badge>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <Card className="mb-6 shadow-lg border-2">
            <TabsList className="grid w-full grid-cols-5 p-2 bg-muted/50 h-auto gap-2">
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

          <TabsContent value="company">
            <CompanyInfoTab onNext={() => setActiveTab('suppliers')} />
          </TabsContent>

          <TabsContent value="suppliers">
            <SupplierListTab onNext={() => setActiveTab('matching')} />
          </TabsContent>

          <TabsContent value="simulator">
            <SimulatorTab />
          </TabsContent>

          <TabsContent value="matching">
            <MatchingRequestTab onNext={() => setActiveTab('proposals')} />
          </TabsContent>

          <TabsContent value="proposals">
            <ProposalsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
