import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

export default function Header() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-blue-600 group-hover:shadow-lg transition-shadow">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Energy Bridge
            </span>
            <p className="text-xs text-muted-foreground hidden sm:block">AI 기반 PPA 매칭 플랫폼</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive('/')
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground hover:bg-muted'
            }`}
          >
            홈
          </Link>
          <Link
            to="/demand/dashboard"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive('/demand/dashboard')
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground hover:bg-muted'
            }`}
          >
            수요자
          </Link>
          <Link
            to="/supplier/dashboard"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive('/supplier/dashboard')
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground hover:bg-muted'
            }`}
          >
            공급자
          </Link>
          <Link
            to="/admin/dashboard"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive('/admin/dashboard')
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground hover:bg-muted'
            }`}
          >
            관리자
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link to="/login">로그인</Link>
          </Button>
          <Button asChild className="shadow-sm hover:shadow-md transition-shadow">
            <Link to="/signup">무료 시작하기</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
