import { cn } from '@/lib/utils'
import { DIFFICULTY_COLORS, type DifficultyLevel } from '@/lib/constants'
import { HTMLAttributes } from 'react'

type BadgeVariant = 'default' | 'difficulty' | 'category' | 'new'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  difficulty?: DifficultyLevel
}

const variantBase: Record<BadgeVariant, string> = {
  default:    'bg-gray-100 text-gray-700',
  difficulty: '',
  category:   'bg-primary-50 text-primary-600',
  new:        'bg-red-100 text-red-600',
}

export default function Badge({ variant = 'default', difficulty, className, children, ...props }: BadgeProps) {
  const colorClass = variant === 'difficulty' && difficulty
    ? DIFFICULTY_COLORS[difficulty]
    : variantBase[variant]

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
        colorClass,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
