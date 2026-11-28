'use client'

import { Search, Menu } from 'lucide-react'

interface TopBarProps {
  title: string
  searchPlaceholder?: string
  onMenuClick: () => void
}

export function TopBar({ title, searchPlaceholder = 'Search...', onMenuClick }: TopBarProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between gap-4">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#071A30]">{title}</h2>
          <p className="text-sm text-gray-500 hidden sm:block">Welcome back, Admin</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] text-sm w-48 lg:w-64"
          />
        </div>
        <div className="w-10 h-10 bg-[#E65100] rounded-full flex items-center justify-center text-white font-bold text-sm">
          A
        </div>
      </div>
    </header>
  )
}
