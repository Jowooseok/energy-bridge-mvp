# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Energy Bridge MVP** - 신재생에너지 PPA 매칭 플랫폼 프론트엔드 프로토타입

중소기업(수요자)과 재생에너지 발전소(공급자)를 AI 기반으로 자동 매칭하여 전기요금을 15-25% 절감하고 RE100 목표 달성을 지원하는 B2B 플랫폼입니다.

## Technology Stack

- **Frontend Framework**: React 18.3 with Vite
- **Styling**: Tailwind CSS + shadcn/ui component library
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **State Management**: React hooks (useState)

## Development Commands

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# Runs on http://localhost:5173
```

### Production Build
```bash
npm run build
# Output in dist/
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Project Architecture

### Route Structure
- `/` - Landing page (hero, features, case study)
- `/signup` - User registration (demand/supplier selection)
- `/login` - User authentication
- `/demand/dashboard` - Demand-side dashboard (5 tabs)
- `/supplier/dashboard` - Supply-side dashboard (4 tabs)
- `/admin/dashboard` - Admin dashboard (KPIs, charts, logs)

### Component Organization

**UI Components** (`src/components/ui/`):
- shadcn/ui components: Button, Card, Input, Badge, Tabs, Label, Textarea, Select
- Reusable, variant-based styling with CVA (class-variance-authority)

**Layout Components** (`src/components/layout/`):
- `Header.jsx` - Global navigation header with sticky positioning

**Page Components** (`src/pages/`):
- Feature-based organization by user type (demand, supplier, admin)
- Tab-based dashboards with controlled state management

### Key Design Patterns

1. **Tab Navigation**: Controlled tabs with `activeTab` state and `onNext` callbacks for progressive flow
2. **Form Handling**: Controlled inputs with `useState` and `handleChange` patterns
3. **Chart Integration**: Chart.js with responsive configuration and dynamic data updates
4. **Alert-based MVP**: Uses browser `alert()` and `confirm()` for prototyping (replace with proper modals in production)

## Business Logic

### Savings Calculation (Simulator)
```javascript
currentCost = (consumption * 1000 * currentPrice) / 100000000  // in 억원
ppaCost = (consumption * 1000 * ppaPrice) / 100000000
savings = currentCost - ppaCost
savingsPercent = (savings / currentCost) * 100
savings10y = savings * 10
```

### Matching Process Flow
1. Demand user inputs company info
2. System shows available suppliers filtered by location, price, capacity
3. User simulates savings
4. User submits matching request
5. Supplier receives request and creates proposal
6. Demand user reviews proposals and accepts best match

## Styling Guidelines

### Color System (from tailwind.config.js)
- **Primary**: Blue (`hsl(221.2 83.2% 53.3%)`) - CTAs, emphasis
- **Secondary**: Light gray (`hsl(210 40% 96.1%)`) - backgrounds
- **Destructive**: Red (`hsl(0 84.2% 60.2%)`) - warnings, delete actions
- **Muted**: Muted gray - disabled states

### Responsive Breakpoints
- Mobile: < 768px (1 column layouts)
- Tablet: 768px - 1024px (2 column layouts)
- Desktop: ≥ 1024px (3-4 column layouts)

### Typography Scale
- Hero: `text-5xl` (48px) bold
- Page Title: `text-3xl` (30px) bold
- Card Title: `text-xl/text-2xl` (20-24px) semibold
- Body: `text-base` (16px)
- Caption: `text-sm` (14px)

## Development Notes

### Current MVP Scope
This is a **frontend prototype** without backend integration. All data is hardcoded for demonstration purposes.

### Alert-based Interactions
- Form submissions → `alert()` success messages
- Tab navigation after actions
- No actual API calls or data persistence

### Future Backend Integration Points
1. Authentication: JWT-based auth replacing mock login
2. API endpoints for CRUD operations on:
   - User profiles (demand/supplier)
   - Power plants
   - Matching requests
   - Proposals
   - Contracts
3. Real-time notifications (WebSocket)
4. File uploads (S3 integration)

## Common Development Tasks

### Adding a New Page
1. Create component in `src/pages/`
2. Add route to `src/App.jsx`
3. Add navigation link in `Header.jsx` if needed

### Adding a New UI Component
1. Create in `src/components/ui/` following shadcn/ui patterns
2. Use CVA for variant-based styling
3. Export with `React.forwardRef` for ref support

### Working with Charts
1. Register required Chart.js components in component file
2. Define data and options objects
3. Use responsive containers with proper height constraints

## PRD Reference

Full product requirements are documented in `ENERGY-BRIDGE-PRD.md` including:
- Detailed screen specifications for all pages
- Business logic formulas
- Database schema
- User personas and flows
- Design system specifications

Refer to this document for implementation details, user flows, and feature requirements.
