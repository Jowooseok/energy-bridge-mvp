import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = React.useCallback(({ title, description, variant = "default" }) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, title, description, variant }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 5000)
  }, [])

  const removeToast = React.useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return context
}

function Toast({ id, title, description, variant, onClose }) {
  const variants = {
    default: "bg-background border",
    success: "bg-green-50 border-green-200 text-green-900",
    error: "bg-red-50 border-red-200 text-red-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
  }

  return (
    <div
      className={cn(
        "min-w-[300px] rounded-lg border p-4 shadow-lg transition-all animate-in slide-in-from-right",
        variants[variant]
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          {title && <p className="font-semibold">{title}</p>}
          {description && <p className="text-sm mt-1 opacity-90">{description}</p>}
        </div>
        <button
          onClick={onClose}
          className="text-current opacity-50 hover:opacity-100 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export { Toast }
