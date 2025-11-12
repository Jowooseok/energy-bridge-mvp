import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  // 사용자 정보
  const [user, setUser] = useState(null)

  // 기업 정보
  const [companyInfo, setCompanyInfo] = useState({
    industry: '',
    address: '',
    annualConsumption: '',
    maxPrice: '',
    contractPeriod: '',
    re100Status: '',
    loadPattern: '',
  })

  // 시뮬레이션 결과
  const [simulationResult, setSimulationResult] = useState(null)

  // 선택된 공급자
  const [selectedSuppliers, setSelectedSuppliers] = useState([])

  // 매칭 요청 상태
  const [matchingRequest, setMatchingRequest] = useState(null)

  // 받은 제안서
  const [proposals, setProposals] = useState([
    {
      id: 1,
      supplierId: 1,
      supplierName: '그린에너지 태양광',
      location: '경기도 용인시',
      type: '태양광',
      capacity: '2.5 MW',
      unitPrice: 98,
      contractPeriod: 10,
      status: 'received',
      receivedDate: '2024-11-10',
      savings: 85000000,
      savingsPercent: 14.8,
    },
    {
      id: 2,
      supplierId: 2,
      supplierName: '클린윈드 발전소',
      location: '강원도 강릉시',
      type: '풍력',
      capacity: '3.0 MW',
      unitPrice: 105,
      contractPeriod: 10,
      status: 'received',
      receivedDate: '2024-11-09',
      savings: 50000000,
      savingsPercent: 8.7,
    },
  ])

  // 공급자 목록
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: '그린에너지 태양광 A',
      location: '경기도 용인시',
      type: '태양광',
      capacity: '150MW',
      distance: '50km',
      unitPrice: 98,
      rating: 4.8,
      certifications: ['REC 인증', 'RE100 적격'],
      matchScore: 95,
    },
    {
      id: 2,
      name: '클린윈드 발전소 B',
      location: '강원도 강릉시',
      type: '풍력',
      capacity: '200MW',
      distance: '120km',
      unitPrice: 105,
      rating: 4.5,
      certifications: ['REC 인증'],
      matchScore: 82,
    },
    {
      id: 3,
      name: '서해안 태양광 발전 C',
      location: '충청남도 태안군',
      type: '태양광',
      capacity: '180MW',
      distance: '95km',
      unitPrice: 102,
      rating: 4.6,
      certifications: ['REC 인증', 'RE100 적격', 'ISO 9001'],
      matchScore: 88,
    },
  ])

  // 로그인
  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  // 로그아웃
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  // 기업 정보 업데이트
  const updateCompanyInfo = (info) => {
    setCompanyInfo((prev) => ({ ...prev, ...info }))
    localStorage.setItem('companyInfo', JSON.stringify({ ...companyInfo, ...info }))
  }

  // 매칭 요청 생성
  const createMatchingRequest = (requestData) => {
    const request = {
      id: Date.now(),
      ...requestData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    setMatchingRequest(request)
    return request
  }

  // 제안서 수락
  const acceptProposal = (proposalId) => {
    setProposals((prev) =>
      prev.map((p) =>
        p.id === proposalId ? { ...p, status: 'accepted' } : p
      )
    )
  }

  // 공급자 선택/해제
  const toggleSupplierSelection = (supplierId) => {
    setSelectedSuppliers((prev) => {
      if (prev.includes(supplierId)) {
        return prev.filter((id) => id !== supplierId)
      }
      return [...prev, supplierId]
    })
  }

  const value = {
    user,
    login,
    logout,
    companyInfo,
    updateCompanyInfo,
    simulationResult,
    setSimulationResult,
    selectedSuppliers,
    toggleSupplierSelection,
    setSelectedSuppliers,
    matchingRequest,
    createMatchingRequest,
    proposals,
    acceptProposal,
    suppliers,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
