'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Don't show header/footer on admin login page
  const isAdminLogin = pathname === '/admin/login'
  
  if (isAdminLogin) {
    return <>{children}</>
  }
  
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
