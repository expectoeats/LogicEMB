'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Don't show header/footer on admin pages
  const isAdminPage = pathname.startsWith('/admin')
  
  if (isAdminPage) {
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
