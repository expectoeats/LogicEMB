'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Sidebar } from '@/components/admin/Sidebar'
import { TopBar } from '@/components/admin/TopBar'
import { ToastProvider } from '@/components/admin/Toast'
import { initializeStorage } from '@/lib/admin/data-manager'

const pageTitles: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/courses': 'Courses',
  '/admin/courses/add': 'Add Course',
  '/admin/tutorials': 'Tutorials',
  '/admin/tutorials/add': 'Add Tutorial',
  '/admin/projects': 'Projects',
  '/admin/projects/add': 'Add Project',
  '/admin/users': 'Users',
  '/admin/analytics': 'Analytics',
  '/admin/settings': 'Settings',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Check authentication
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('admin_logged_in')
      if (!isLoggedIn) {
        router.push('/login?redirect=/admin')
        return
      }

      // Initialize storage with seed data
      initializeStorage()
    }
  }, [router])

  // Get page title
  const getPageTitle = () => {
    // Check for edit pages
    if (pathname.includes('/edit')) {
      if (pathname.includes('/courses/')) return 'Edit Course'
      if (pathname.includes('/tutorials/')) return 'Edit Tutorial'
      if (pathname.includes('/projects/')) return 'Edit Project'
    }
    // Check for user detail pages
    if (pathname.match(/^\/admin\/users\/[^/]+$/)) return 'User Details'

    return pageTitles[pathname] || 'Admin Panel'
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col min-w-0">
          <TopBar
            title={getPageTitle()}
            onMenuClick={() => setSidebarOpen(true)}
          />

          <main className="flex-1 p-4 md:p-8 overflow-auto">{children}</main>
        </div>
      </div>
    </ToastProvider>
  )
}
