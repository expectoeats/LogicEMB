import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  none: '',
  sm:   'p-3',
  md:   'p-4',
  lg:   'p-6',
}

export function Card({ hover = true, padding = 'md', className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gfg-border shadow-card',
        hover && 'hover:shadow-card-hover transition-shadow duration-200',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-3', className)} {...props}>{children}</div>
}

export function CardBody({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props}>{children}</div>
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-3 pt-3 border-t border-gfg-border', className)} {...props}>{children}</div>
}
