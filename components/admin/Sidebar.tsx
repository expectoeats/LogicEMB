'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Folder,
  Users,
  BarChart3,
  Settings,
  LogOut,
  X,
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { id: 'courses', label: 'Courses', icon: FileText, href: '/admin/courses' },
  { id: 'tutorials', label: 'Tutorials', icon: BookOpen, href: '/admin/tutorials' },
  { id: 'projects', label: 'Projects', icon: Folder, href: '/admin/projects' },
  { id: 'users', label: 'Users', icon: Users, href: '/admin/users' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/admin/settings' },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_logged_in')
      router.push('/login')
    }
  }

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#071A30] text-white flex flex-col transform transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">LogicEMB Admin</h1>
            <p className="text-xs text-gray-400 mt-1">Management Panel</p>
          </div>
          <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => {
                  onClose()
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  active
                    ? 'bg-[#E65100] text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}
