import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Shuffle, CheckCircle, DollarSign, User, Zap, FileCheck } from 'lucide-react'
import { Line, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

export default function AdminDashboard() {
  // KPI 데이터
  const kpis = [
    {
      icon: Users,
      title: '총 사용자',
      value: '523명',
      change: '↗️ 12명 (이번 주)',
      color: 'text-blue-600',
    },
    {
      icon: Shuffle,
      title: '진행 중인 매칭',
      value: '8건',
      change: '평균 48시간 소요',
      color: 'text-purple-600',
    },
    {
      icon: CheckCircle,
      title: '완료된 계약',
      value: '45건',
      change: '↗️ 5건 (이번 달)',
      color: 'text-green-600',
    },
    {
      icon: DollarSign,
      title: '총 거래액',
      value: '34억원',
      change: '이번 달 기준',
      color: 'text-yellow-600',
    },
  ]

  // 일별 매칭 현황 차트 데이터
  const matchingData = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '매칭 건수',
        data: [3, 5, 4, 7, 6, 4, 8],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
      },
    ],
  }

  const matchingOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
  }

  // 사용자 유형별 분포 차트 데이터
  const userDistributionData = {
    labels: ['수요자', '공급자'],
    datasets: [
      {
        data: [320, 203],
        backgroundColor: ['rgba(59, 130, 246, 0.8)', 'rgba(16, 185, 129, 0.8)'],
        borderColor: ['rgb(59, 130, 246)', 'rgb(16, 185, 129)'],
        borderWidth: 1,
      },
    ],
  }

  const userDistributionOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  }

  // 최근 활동 로그
  const activities = [
    {
      icon: User,
      name: '김산업 (제조A)',
      action: '매칭 요청 제출',
      time: '30분 전',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Zap,
      name: '박태양 (태양광B)',
      action: '제안서 작성 완료',
      time: '1시간 전',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: FileCheck,
      name: '계약서 #2024-045',
      action: '전자서명 완료',
      time: '2시간 전',
      color: 'bg-blue-100 text-blue-700',
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">관리자 대시보드</h1>
        <p className="text-muted-foreground mt-2">플랫폼 운영 현황을 모니터링하세요</p>
      </div>

      {/* KPI 카드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {kpis.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{kpi.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 차트 */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>일별 매칭 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={matchingData} options={matchingOptions} />
            <div className="mt-4 text-sm text-muted-foreground">
              <p>주중에 매칭 활발, 목요일 피크 (7건)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>사용자 유형별 분포</CardTitle>
          </CardHeader>
          <CardContent>
            <Doughnut data={userDistributionData} options={userDistributionOptions} />
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">수요자:</span>
                <span className="font-semibold">320명 (61%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">공급자:</span>
                <span className="font-semibold">203명 (39%)</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              수요자가 공급자보다 많아 공급자 확보 필요
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 최근 활동 로그 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>실시간 플랫폼 활동 내역</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${activity.color}`}>
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
