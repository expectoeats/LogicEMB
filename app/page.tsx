import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Users, BookOpen, Code2 } from 'lucide-react'
import SearchBar from '@/components/features/SearchBar'
import ArticleCard from '@/components/features/ArticleCard'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { CATEGORIES, SAMPLE_ARTICLES, SITE_NAME } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Hero - Professional Clean Design */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-main py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-sm font-medium text-orange-700 mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                Free Computer Science Education
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Master Programming &{' '}
                <span className="text-primary-600">Electronics</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Learn Python, C/C++, PCB Design, Embedded Systems, STM32, and AI through comprehensive tutorials, practical projects, and hands-on exercises.
              </p>

              {/* Search Bar */}
              <div className="mb-6">
                <SearchBar size="lg" placeholder="Search tutorials, articles, courses..." />
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { icon: BookOpen, label: '1000+ Articles', color: 'text-blue-600' },
                  { icon: Users, label: '500K+ Learners', color: 'text-orange-600' },
                  { icon: Code2, label: '50+ Topics', color: 'text-purple-600' },
                  { icon: TrendingUp, label: 'Free Forever', color: 'text-orange-600' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={18} className={color} />
                    <span className="text-gray-700 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Logo/Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Circuit pattern background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                  <Image
                    src="/logicemb-circuit-learning-full.png"
                    alt="LogicEMB - Circuit Learning Platform"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                    priority
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-10 blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Explore Topics</h2>
              <p className="section-subtitle">Pick a topic and start learning</p>
            </div>
            <Link href="/topics"><Button variant="outline" size="sm">View All <ArrowRight size={14} className="ml-1" /></Button></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/topics/${cat.slug}`}
                className="group flex flex-col items-center text-center p-4 rounded-xl border border-gfg-border hover:border-primary-300 hover:shadow-card-hover transition-all duration-200 bg-white"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3"
                  style={{backgroundColor: cat.color + '15'}}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-sm text-gfg-text group-hover:text-primary-700 transition-colors">{cat.label}</h3>
                <p className="text-xs text-gfg-textLight mt-1">{cat.count} articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 bg-gfg-lightGray">
        <div className="container-main">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Latest Articles</h2>
              <p className="section-subtitle">Fresh content added every day</p>
            </div>
            <Link href="/articles"><Button variant="outline" size="sm">View All <ArrowRight size={14} className="ml-1" /></Button></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SAMPLE_ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <h2 className="section-title">Popular Tags</h2>
          <p className="section-subtitle mb-6">Jump straight into a subject</p>
          <div className="flex flex-wrap gap-2">
            {['Arrays', 'Linked List', 'Binary Tree', 'DP', 'Sorting', 'Graph', 'React', 'SQL', 'Python Basics', 'OOP', 'Recursion', 'Hash Map', 'Stack', 'Queue', 'Heap', 'Greedy', 'Backtracking', 'BFS/DFS'].map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 text-sm bg-gfg-lightGray border border-gfg-border rounded-full text-gfg-textLight hover:border-primary-400 hover:text-primary-700 hover:bg-primary-50 transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated with {SITE_NAME}</h2>
          <p className="text-primary-100 mb-8 max-w-lg mx-auto">
            Get weekly digests of the best programming tutorials, articles, and practice problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
            />
            <Button variant="secondary" size="md" className="rounded-full px-6 font-semibold">
              Subscribe Free
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
