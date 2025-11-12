import { Routes, Route } from 'react-router-dom'
import { ToastProvider } from './components/ui/toast'
import { AppProvider } from './contexts/AppContext'
import Header from './components/layout/Header'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DemandDashboard from './pages/demand/DemandDashboard'
import SupplierDashboard from './pages/supplier/SupplierDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProposalDetail from './pages/demand/ProposalDetail'
import ReportPage from './pages/demand/ReportPage'

function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/demand/dashboard" element={<DemandDashboard />} />
              <Route path="/demand/proposals/:id" element={<ProposalDetail />} />
              <Route path="/demand/report" element={<ReportPage />} />
              <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </main>
        </div>
      </ToastProvider>
    </AppProvider>
  )
}

export default App
