import Link from 'next/link'
import { Search, BookOpen, MessageCircle, FileText, Video, HelpCircle, ArrowRight, Mail, Phone } from 'lucide-react'

export default function SupportPage() {
  const supportCategories = [
    {
      icon: <BookOpen className="text-[#E65100]" size={32} />,
      title: 'Getting Started',
      description: 'New to LogicEMB? Start here with beginner guides and setup instructions.',
      articles: 24,
      link: '/support/getting-started',
    },
    {
      icon: <Video className="text-[#E65100]" size={32} />,
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides for courses, projects, and tools.',
      articles: 18,
      link: '/support/videos',
    },
    {
      icon: <FileText className="text-[#E65100]" size={32} />,
      title: 'Documentation',
      description: 'Complete technical documentation for all programming languages and hardware.',
      articles: 150,
      link: '/docs',
    },
    {
      icon: <MessageCircle className="text-[#E65100]" size={32} />,
      title: 'Community Forum',
      description: 'Ask questions and get help from the community and our team.',
      articles: '12K+',
      link: '/community',
    },
  ]

  const popularArticles = [
    {
      title: 'How to create an account and get started',
      category: 'Account',
      views: '15.2K',
      helpful: '98%',
    },
    {
      title: 'Troubleshooting common login issues',
      category: 'Account',
      views: '12.8K',
      helpful: '95%',
    },
    {
      title: 'How to enroll in courses and track progress',
      category: 'Courses',
      views: '11.5K',
      helpful: '97%',
    },
    {
      title: 'Understanding certificate requirements',
      category: 'Certificates',
      views: '9.3K',
      helpful: '96%',
    },
    {
      title: 'Setting up your development environment',
      category: 'Technical',
      views: '8.7K',
      helpful: '94%',
    },
  ]

  const quickHelp = [
    {
      icon: <Mail className="text-[#E65100]" size={24} />,
      title: 'Email Support',
      description: 'Get help via email',
      action: 'support@logicemb.com',
      link: 'mailto:support@logicemb.com',
    },
    {
      icon: <Phone className="text-[#E65100]" size={24} />,
      title: 'Phone Support',
      description: 'Mon-Fri, 9am-6pm EST',
      action: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MessageCircle className="text-[#E65100]" size={24} />,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: 'Start Chat',
      link: '#',
    },
    {
      icon: <HelpCircle className="text-[#E65100]" size={24} />,
      title: 'Submit Ticket',
      description: 'Report an issue',
      action: 'Create Ticket',
      link: '/support/ticket',
    },
  ]

  const faqs = [
    {
      category: 'Account & Billing',
      questions: [
        'How do I reset my password?',
        'How do I update my email address?',
        'How do I cancel my subscription?',
        'What payment methods do you accept?',
      ],
    },
    {
      category: 'Courses & Learning',
      questions: [
        'How do I access course materials?',
        'Can I download videos for offline viewing?',
        'How long do I have access to courses?',
        'Are certificates provided?',
      ],
    },
    {
      category: 'Technical Support',
      questions: [
        'Which browsers are supported?',
        'Video playback issues - what to do?',
        'How to report a bug or error?',
        'Mobile app availability?',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071A30] to-[#0D2847] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How Can We Help You?
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Search our knowledge base or browse categories to find answers
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E65100]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, idx) => (
              <Link
                key={idx}
                href={category.link}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all group"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="font-bold text-[#071A30] mb-2 group-hover:text-[#E65100] transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{category.articles} articles</span>
                  <ArrowRight className="text-gray-400 group-hover:text-[#E65100] transition-colors" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Popular Help Articles</h2>
          <div className="space-y-4">
            {popularArticles.map((article, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#E65100] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#E65100] bg-[#E65100]/10 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">👁️ {article.views} views</span>
                      <span className="text-xs text-gray-500">✓ {article.helpful} helpful</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#071A30] group-hover:text-[#E65100] transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-[#E65100] transition-colors shrink-0" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#071A30] mb-3">Need More Help?</h2>
            <p className="text-gray-600">Our support team is here to assist you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((help, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFF3E0] mb-4">
                  {help.icon}
                </div>
                <h3 className="font-bold text-[#071A30] mb-1">{help.title}</h3>
                <p className="text-xs text-gray-600 mb-3">{help.description}</p>
                <a
                  href={help.link}
                  className="text-sm font-semibold text-[#E65100] hover:text-[#BF360C] transition-colors"
                >
                  {help.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#071A30] mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-[#071A30] mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.questions.map((question, qIdx) => (
                    <li key={qIdx}>
                      <a
                        href="#"
                        className="text-sm text-gray-700 hover:text-[#E65100] transition-colors flex items-start gap-2"
                      >
                        <HelpCircle size={16} className="shrink-0 mt-0.5 text-gray-400" />
                        {question}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-14 bg-[#071A30] text-white">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is ready to help you with any questions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#E65100] text-white font-semibold rounded-lg hover:bg-[#BF360C] transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/community"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Visit Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
