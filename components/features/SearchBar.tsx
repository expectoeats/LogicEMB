'use client'
import { useState, FormEvent } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function SearchBar({
  placeholder = 'Search for topics, articles, or courses...',
  size = 'md',
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <form onSubmit={handleSubmit} className={cn('relative w-full', className)}>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={size === 'lg' ? 20 : 16}
      />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-full border border-gfg-border bg-white text-gfg-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200',
          size === 'lg' && 'pl-12 pr-6 py-3.5 text-base',
          size === 'md' && 'pl-9 pr-4 py-2 text-sm',
          size === 'sm' && 'pl-8 pr-3 py-1.5 text-xs',
        )}
      />
      <button type="submit" className="sr-only">Search</button>
    </form>
  )
}
