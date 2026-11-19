import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Github, Linkedin, Youtube } from 'lucide-react'
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 mt-16">
      <div className="container-main py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logicemb-circuit-learning-full.png"
                alt="LogicEMB Circuit Learning"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              A free computer science education platform. Learn programming, algorithms, and more.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter,  href: '#' },
                { Icon: Github,   href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Youtube,  href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <Icon size={15} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-3">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-primary-700 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-10 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">Subscribe to our newsletter</h4>
              <p className="text-sm text-gray-400">Get the latest articles and tutorials in your inbox.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button variant="primary" size="md">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
