import Link from 'next/link'
import { BookOpen, FileText, Search, ArrowRight, Book, FileCode, Layers } from 'lucide-react'

export default function DocsPage() {
  const docCategories = [
    {
      id: 1,
      title: 'Getting Started',
      icon: <Book className="text-[#E65100]" size={32} />,
      description: 'Begin your journey with LogicEMB. Learn the basics and set up your environment.',
      links: [
        { label: 'Introduction to LogicEMB', href: '/docs/intro' },
        { label: 'Setting Up Your Environment', href: '/docs/setup' },
        { label: 'First Project Guide', href: '/docs/first-project' },
        { label: 'Learning Path', href: '/docs/learning-path' },
      ],
    },
    {
      id: 2,
      title: 'Programming Guides',
      icon: <FileCode className="text-[#E65100]" size={32} />,
      description: 'Comprehensive guides for Python, JavaScript, C/C++, Java and more.',
      links: [
        { label: 'Python Programming Guide', href: '/docs/python-guide' },
        { label: 'JavaScript Complete Guide', href: '/docs/javascript-guide' },
        { label: 'C/C++ Reference', href: '/docs/c-cpp-guide' },
        { label: 'Java Programming Guide', href: '/docs/java-guide' },
      ],
    },
    {
      id: 3,
      title: 'Electronics & Hardware',
      icon: <Layers className="text-[#E65100]" size={32} />,
      description: 'Documentation for electronics, PCB design, and embedded systems.',
      links: [
        { label: 'Electronics Fundamentals', href: '/docs/electronics' },
        { label: 'PCB Design Guide', href: '/docs/pcb-design' },
        { label: 'Embedded Systems Guide', href: '/docs/embedded-systems' },
        { label: 'Microcontroller Reference', href: '/docs/microcontrollers' },
      ],
    },
    {
      id: 4,
      title: 'API Reference',
      icon: <FileText className="text-[#E65100]" size={32} />,
      description: 'Complete API documentation for libraries and frameworks.',
      links: [
        { label: 'Python Libraries API', href: '/docs/api/python' },
        { label: 'JavaScript APIs', href: '/docs/api/javascript' },
        { label: 'Hardware APIs', href: '/docs/api/hardware' },
        { label: 'REST API Documentation', href: '/docs/api/rest' },
      ],
    },
    {
      id: 5,
      title: 'Best Practices',
      icon: <BookOpen className="text-[#E65100]" size={32} />,
      description: 'Industry best practices and coding standards.',
      links: [
        { label: 'Code Style Guide', href: '/docs/style-guide' },
        { label: 'Testing Best Practices', href: '/docs/testing' },
        { label: 'Security Guidelines', href: '/docs/security' },
        { label: 'Performance Optimization', href: '/docs/performance' },
      ],
    },
    {
      id: 6,
      title: 'Troubleshooting',
      icon: <Search className="text-[#E65100]" size={32} />,
      description: 'Common issues and solutions, FAQs and debugging guides.',
      links: [
        { label: 'Common Errors & Fixes', href: '/docs/common-errors' },
        { label: 'Debugging Guide', href: '/docs/debugging' },
        { label: 'FAQ', href: '/docs/faq' },
        { label: 'Support Resources', href: '/docs/support' },
      ],
    },
  ]

  const popularDocs = [
    { title: 'Getting Started with Python', category: 'Python', views: '12.5k', href: '/docs/python-guide' },
    { title: 'PCB Design Fundamentals', category: 'Hardware', views: '9.8k', href: '/docs/pcb-design' },
    { title: 'JavaScript Async/Await Guide', category: 'JavaScript', views: '11.2k', href: '/docs/javascript-guide' },
    { title: 'STM32 Programming Reference', category: 'Embedded', views: '8.5k', href: '/docs/microcontrollers' },
    { title: 'C++ STL Complete Reference', category: 'C++', views: '7.9k', href: '/docs/c-cpp-guide' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#071A30] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Documentation
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Complete guides, references, and documentation for all programming languages, electronics, and hardware topics. Find everything you need to learn and build.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E65100]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-[#071A30] mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block text-sm text-gray-700 hover:text-[#E65100] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Popular Documentation</h2>
          <div className="space-y-4">
            {popularDocs.map((doc, idx) => (
              <Link
                key={idx}
                href={doc.href}
                className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-[#E65100] hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-[#E65100] bg-[#E65100]/10 px-2 py-0.5 rounded">
                        {doc.category}
                      </span>
                      <span className="text-xs text-gray-500">👁️ {doc.views} views</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#071A30] group-hover:text-[#E65100] transition-colors">
                      {doc.title}
                    </h3>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-[#E65100] transition-colors" size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/tutorials"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#E65100] hover:shadow-md transition-all text-center"
            >
              <BookOpen className="mx-auto mb-3 text-[#E65100]" size={32} />
              <p className="font-semibold text-[#071A30]">Tutorials</p>
            </Link>
            <Link
              href="/courses"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#E65100] hover:shadow-md transition-all text-center"
            >
              <Book className="mx-auto mb-3 text-[#E65100]" size={32} />
              <p className="font-semibold text-[#071A30]">Courses</p>
            </Link>
            <Link
              href="/projects"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#E65100] hover:shadow-md transition-all text-center"
            >
              <Layers className="mx-auto mb-3 text-[#E65100]" size={32} />
              <p className="font-semibold text-[#071A30]">Projects</p>
            </Link>
            <Link
              href="/community"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#E65100] hover:shadow-md transition-all text-center"
            >
              <FileText className="mx-auto mb-3 text-[#E65100]" size={32} />
              <p className="font-semibold text-[#071A30]">Community</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
