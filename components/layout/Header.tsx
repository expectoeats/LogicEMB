'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Courses', href: '/courses' },
    { label: 'PCB Design', href: '/pcb-design' },
    { label: 'Embedded', href: '/embedded' },
    { label: 'Python', href: '/python' },
    { label: 'Projects', href: '/projects' },
  ]

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="h-14 flex items-center justify-between gap-4">
          {/* LEFT: Logo with dark orange gradient background (no text) */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="LogicEMB Home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4511E] via-[#E65100] to-[#BF360C] flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-200">
              <Image
                src="/only logo.png"
                alt="LogicEMB"
                width={30}
                height={30}
                className="w-full h-full object-contain filter drop-shadow-sm"
                priority
              />
            </div>
          </Link>

          {/* CENTER: Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-700 hover:text-[#E65100] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Search + Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 w-48 border border-gray-200 rounded px-3 py-1.5 text-sm">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none bg-transparent text-sm focus:outline-none"
              />
            </div>
            <Link
              href="/login"
              className="hidden sm:inline-flex px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded hover:border-gray-400 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="hidden sm:inline-flex px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] rounded-lg shadow-sm hover:shadow-md hover:brightness-105 transition-all"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#E65100]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/login"
                  className="w-full px-4 py-2 text-sm font-medium text-center text-gray-700 border border-gray-300 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="w-full px-4 py-2 text-sm font-semibold text-center text-white bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] rounded-lg shadow-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
