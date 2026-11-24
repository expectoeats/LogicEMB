'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [tutorialsOpen, setTutorialsOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [mobileTutorialsOpen, setMobileTutorialsOpen] = useState(false)
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const topicsLinks = [
    { label: 'Python', href: '/python' },
    { label: 'JavaScript', href: '/javascript' },
    { label: 'Java', href: '/java' },
    { label: 'C', href: '/c' },
    { label: 'C++', href: '/cpp' },
    { label: 'C#', href: '/csharp' },
    { label: 'SQL', href: '/sql' },
    { label: 'Embedded Systems', href: '/embedded' },
    { label: 'PCB Design', href: '/pcb-design' },
    { label: 'Microcontrollers', href: '/microcontrollers' },
    { label: 'Electronics', href: '/electronics' },
  ]

  const tutorialsLinks = [
    { label: 'All Tutorials', href: '/tutorials' },
    { label: 'PCB Design', href: '/tutorials?category=PCB+Design' },
    { label: 'Embedded C', href: '/tutorials?category=Embedded+C' },
    { label: 'Python', href: '/tutorials?category=Python' },
    { label: 'Electronics', href: '/tutorials?category=Electronics' },
    { label: 'Microcontrollers', href: '/tutorials?category=Microcontrollers' },
    { label: 'JavaScript', href: '/tutorials?category=JavaScript' },
  ]

  const resourcesLinks = [
    { label: 'Documentation', href: '/docs' },
    { label: 'Tools', href: '/tools' },
    { label: 'Community', href: '/community' },
  ]

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="h-14 flex items-center justify-between gap-4">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="LogicEMB Home">
            <Image
              src="/only logo.png"
              alt="LogicEMB"
              width={45}
              height={45}
              className="h-11 w-11 object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* CENTER: Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Tutorials Dropdown */}
            <div 
              className="relative py-2 -my-2"
              onMouseEnter={() => setTutorialsOpen(true)}
              onMouseLeave={() => setTutorialsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#E65100] font-medium transition-colors"
              >
                Tutorials
                <ChevronDown size={14} className={`transition-transform ${tutorialsOpen ? 'rotate-180' : ''}`} />
              </button>
              {tutorialsOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {tutorialsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#E65100] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/courses"
              className="text-sm text-gray-700 hover:text-[#E65100] font-medium transition-colors"
            >
              Courses
            </Link>
            
            {/* Topics Dropdown */}
            <div 
              className="relative py-2 -my-2"
              onMouseEnter={() => setTopicsOpen(true)}
              onMouseLeave={() => setTopicsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#E65100] font-medium transition-colors"
              >
                Topics
                <ChevronDown size={14} className={`transition-transform ${topicsOpen ? 'rotate-180' : ''}`} />
              </button>
              {topicsOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {topicsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#E65100] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="text-sm text-gray-700 hover:text-[#E65100] font-medium transition-colors"
            >
              Projects
            </Link>

            {/* Resources Dropdown */}
            <div 
              className="relative py-2 -my-2"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#E65100] font-medium transition-colors"
              >
                Resources
                <ChevronDown size={14} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 pt-2 w-48 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#E65100] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            
            {/* Mobile Search Icon */}
            <button
              type="button"
              className="sm:hidden p-2 text-gray-700"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              aria-label="Toggle search"
            >
              <Search size={20} />
            </button>

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

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="md:hidden py-3 px-4 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none bg-transparent text-sm"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white max-h-[calc(100vh-56px)] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {/* Tutorials Mobile - Accordion */}
              <div className="px-2">
                <button 
                  onClick={() => setMobileTutorialsOpen(!mobileTutorialsOpen)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 mb-2 uppercase"
                >
                  Tutorials
                  <ChevronDown size={16} className={`transition-transform ${mobileTutorialsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileTutorialsOpen && (
                  <div className="flex flex-col gap-2 ml-2">
                    {tutorialsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="py-1.5 text-sm text-gray-700 hover:text-[#E65100]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/courses"
                className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#E65100]"
                onClick={() => setMobileOpen(false)}
              >
                Courses
              </Link>
              
              {/* Topics Mobile - Accordion */}
              <div className="px-2">
                <button 
                  onClick={() => setMobileTopicsOpen(!mobileTopicsOpen)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 mb-2 uppercase"
                >
                  Topics
                  <ChevronDown size={16} className={`transition-transform ${mobileTopicsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileTopicsOpen && (
                  <div className="flex flex-col gap-2 ml-2">
                    {topicsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="py-1.5 text-sm text-gray-700 hover:text-[#E65100]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/projects"
                className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#E65100]"
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </Link>

              {/* Resources Mobile - Accordion */}
              <div className="px-2">
                <button 
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 mb-2 uppercase"
                >
                  Resources
                  <ChevronDown size={16} className={`transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileResourcesOpen && (
                  <div className="flex flex-col gap-2 ml-2">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="py-1.5 text-sm text-gray-700 hover:text-[#E65100]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
