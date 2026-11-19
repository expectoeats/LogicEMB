'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react'
import SearchBar from '@/components/features/SearchBar'
import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gfg-border shadow-sm">
      <div className="container-main">
        <div className="flex items-center h-14 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center">
              <BookOpen size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg text-gfg-text">
              Logic<span className="text-primary-500">Emb</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 ml-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gfg-textLight hover:text-primary-500 hover:bg-primary-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-sm hidden md:block">
            <SearchBar size="sm" />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="sm" className="text-gfg-textLight">
              Log In
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="ml-auto md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gfg-border pt-3 space-y-1">
            <SearchBar size="sm" className="mb-3" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm text-gfg-textLight hover:text-primary-500 hover:bg-primary-50 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 px-3">
              <Button variant="ghost" size="sm" className="flex-1">Log In</Button>
              <Button variant="primary" size="sm" className="flex-1">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
