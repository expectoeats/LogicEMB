import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      title: 'Learning Resources',
      links: [
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Courses', href: '/courses' },
        { label: 'Python Basics', href: '/python' },
        { label: 'PCB Design', href: '/pcb-design' },
      ],
    },
    {
      title: 'Engineering',
      links: [
        { label: 'Embedded Systems', href: '/embedded' },
        { label: 'Microcontrollers', href: '/microcontrollers' },
        { label: 'Electronics', href: '/electronics' },
        { label: 'Projects', href: '/projects' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Newsletter', href: '/newsletter' },
        { label: 'Community', href: '/community' },
        { label: 'Support', href: '/support' },
      ],
    },
  ]

  return (
    <footer className="bg-[#1A2238] text-gray-300">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo + Tagline */}
          <div className="lg:col-span-1 flex items-center justify-center lg:justify-start">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/LogicEMB_logo_with title.svg"
                alt="LogicEMB"
                width={140}
                height={140}
                className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
              />
            </Link>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#E65100] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 LogicEMB. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#E65100] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#E65100] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[#E65100] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
