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
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/only logo.png"
                alt="LogicEMB"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-white text-lg">
                Logic<span className="text-[#FF9418]">EMB</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Learn. Build. Innovate.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Engineering knowledge for real-world possibilities.
            </p>
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
                      className="text-sm text-gray-400 hover:text-[#FF9418] transition-colors"
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
          <p>© 2024 LogicEMB. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#FF9418] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#FF9418] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[#FF9418] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
