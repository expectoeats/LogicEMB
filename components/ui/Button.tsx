import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:   'bg-primary-500 text-white hover:bg-primary-600 border-transparent',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-transparent',
  outline:   'border border-primary-500 text-primary-500 hover:bg-primary-50 bg-transparent',
  ghost:     'text-gray-700 hover:bg-gray-100 border-transparent bg-transparent',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  { variant = 'primary', size = 'md', loading, className, children, disabled, ...props },
  ref
) => (
  <button
    ref={ref}
    disabled={disabled || loading}
    className={cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
      variantClasses[variant],
      sizeClasses[size],
      className
    )}
    {...props}
  >
    {loading && (
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    )}
    {children}
  </button>
))
Button.displayName = 'Button'
export default Button
