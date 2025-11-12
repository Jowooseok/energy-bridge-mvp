import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function SimulatorTab() {
  const [inputs, setInputs] = useState({
    consumption: '5000',
    currentPrice: '115',
    ppaPrice: '98',
  })

  const [results, setResults] = useState(null)

  const handleCalculate = () => {
    const consumption = parseFloat(inputs.consumption)
    const currentPrice = parseFloat(inputs.currentPrice)
    const ppaPrice = parseFloat(inputs.ppaPrice)

    // 계산
    const currentCost = (consumption * 1000 * currentPrice) / 100000000
    const ppaCost = (consumption * 1000 * ppaPrice) / 100000000
    const savings = currentCost - ppaCost
    const savingsPercent = ((savings / currentCost) * 100).toFixed(1)
    const savings10y = savings * 10

    setResults({
      currentCost: currentCost.toFixed(2),
      ppaCost: ppaCost.toFixed(2),
      savingsAmount: (savings * 10000).toFixed(0),
      savingsPercent,
      savings10y: savings10y.toFixed(1),
      chartData: {
        currentCost,
        ppaCost,
      },
    })
  }

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const chartData = results
    ? {
        labels: ['현재 비용', 'PPA 적용 비용'],
        datasets: [
          {
            label: '연간 비용 (억원)',
            data: [results.chartData.currentCost, results.chartData.ppaCost],
            backgroundColor: ['rgba(239, 68, 68, 0.8)', 'rgba(59, 130, 246, 0.8)'],
            borderColor: ['rgb(239, 68, 68)', 'rgb(59, 130, 246)'],
            borderWidth: 1,
          },
        ],
      }
    : null

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '비용 비교',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '금액 (억원)',
        },
      },
    },
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* 입력 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>시뮬레이터</CardTitle>
          <CardDescription>PPA 적용 시 예상 절감액을 사전 확인하세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="consumption">연간 전력 소비량 (MWh)</Label>
              <Input
                id="consumption"
                name="consumption"
                type="number"
                value={inputs.consumption}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentPrice">현재 전기요금 단가 (원/kWh)</Label>
              <Input
                id="currentPrice"
                name="currentPrice"
                type="number"
                value={inputs.currentPrice}
                onChange={handleChange}
              />
              <p className="text-xs text-muted-foreground">
                도움말: 한전 산업용 평균 단가
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ppaPrice">PPA 제안 단가 (원/kWh)</Label>
              <Input
                id="ppaPrice"
                name="ppaPrice"
                type="number"
                value={inputs.ppaPrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button onClick={handleCalculate} className="w-full" size="lg">
            계산하기
          </Button>
        </CardContent>
      </Card>

      {/* 결과 섹션 */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>절감 결과</CardTitle>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="bg-muted">
                  <CardHeader className="pb-2">
                    <CardDescription>현재 연간 비용</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{results.currentCost}억 원</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary">
                  <CardHeader className="pb-2">
                    <CardDescription>PPA 적용 비용</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">
                      {results.ppaCost}억 원
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-300">
                  <CardHeader className="pb-2">
                    <CardDescription>연간 절감액</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-green-600">
                      {results.savingsAmount}만 원
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      {results.savingsPercent}% ⬇️
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-300">
                  <CardHeader className="pb-2">
                    <CardDescription>10년 총 절감액</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-purple-600">
                      {results.savings10y}억 원
                    </p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                계산하기 버튼을 클릭하여 절감액을 확인하세요
              </p>
            )}
          </CardContent>
        </Card>

        {/* 차트 */}
        {results && chartData && (
          <Card>
            <CardContent className="pt-6">
              <Bar data={chartData} options={chartOptions} />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
