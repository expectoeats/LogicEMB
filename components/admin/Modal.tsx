'use client'

import { ReactNode, useEffect } from 'react'
import { X, AlertTriangle } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  confirmLabel?: string
  onConfirm?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  confirmLabel,
  onConfirm,
  size = 'md',
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-xl shadow-2xl ${sizeClasses[size]} w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#071A30]">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>

        {/* Footer */}
        {(confirmLabel || onConfirm) && (
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            {onConfirm && (
              <button
                onClick={onConfirm}
                className="px-4 py-2 text-sm font-medium text-white bg-[#E65100] hover:bg-[#BF360C] rounded-lg transition-colors"
              >
                {confirmLabel || 'Confirm'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmLabel?: string
  variant?: 'danger' | 'warning' | 'info'
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  variant = 'warning',
}: ConfirmModalProps) {
  const variantColors = {
    danger: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600',
  }

  const buttonColors = {
    danger: 'bg-red-600 hover:bg-red-700',
    warning: 'bg-yellow-600 hover:bg-yellow-700',
    info: 'bg-blue-600 hover:bg-blue-700',
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className={`w-12 h-12 rounded-full bg-${variant === 'danger' ? 'red' : variant === 'warning' ? 'yellow' : 'blue'}-100 flex items-center justify-center`}>
            <AlertTriangle className={`w-6 h-6 ${variantColors[variant]}`} />
          </div>
        </div>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className={`px-4 py-2 text-sm font-medium text-white ${buttonColors[variant]} rounded-lg transition-colors`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </Modal>
  )
}
