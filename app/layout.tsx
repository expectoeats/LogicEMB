import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutContent from '@/components/layout/LayoutContent'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LogicEMB — Engineering Knowledge. Real-World Possibilities.',
    template: '%s | LogicEMB',
  },
  description:
    'LogicEMB operates at the intersection of electronics engineering, technical education, and hardware technology. Learn. Build. Innovate.',
  metadataBase: new URL('https://logicemb.com'),
  keywords: [
    'Electronics Engineering',
    'PCB Design',
    'Embedded Systems',
    'Firmware Development',
    'Hardware Engineering',
    'Python for Hardware',
    'Technical Education',
  ],
  authors: [{ name: 'LogicEMB Engineering Team' }],
  icons: {
    icon: '/only logo.png',
    apple: '/only logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#071A30',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased selection:bg-[#E65100] selection:text-white">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}
