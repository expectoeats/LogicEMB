import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, Users, BookOpen, Zap, Search, ArrowRight } from 'lucide-react'
import { TOPICS, ARTICLE_CARDS, POPULAR_TAGS, COURSE_CARDS } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section className="bg-[#F9F9F9] border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#071A30] leading-tight">
              Learn Electronics & Programming the Right Way
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-xl leading-relaxed">
              Master PCB design, embedded systems, Python, C/C++, and JavaScript through comprehensive tutorials, courses, and hands-on projects. From circuit fundamentals to advanced firmware development.
            </p>

            {/* Search Bar */}
            <div className="flex gap-0 mt-6 max-w-xl">
              <input
                type="text"
                placeholder="Search for tutorials, courses, or topics..."
                className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-l focus:outline-none focus:border-[#FF9418]"
              />
              <button className="px-6 py-3 bg-[#FF9418] text-white font-medium rounded-r hover:bg-[#E58110] transition-colors flex items-center gap-2">
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <TrendingUp size={20} className="text-[#FF9418]" />
                <span className="font-semibold">1000+</span>
                <span>Tutorials</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Users size={20} className="text-[#FF9418]" />
                <span className="font-semibold">50K+</span>
                <span>Learners</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <BookOpen size={20} className="text-[#FF9418]" />
                <span className="font-semibold">100+</span>
                <span>Courses</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Zap size={20} className="text-[#FF9418]" />
                <span className="font-semibold">Free</span>
                <span>Access</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mt-6">
              <Link
                href="/courses"
                className="px-6 py-3 bg-[#FF9418] text-white font-medium rounded hover:bg-[#E58110] transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                href="/tutorials"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:border-[#FF9418] hover:text-[#FF9418] transition-colors"
              >
                Browse Tutorials
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/hero-img.webp"
              alt="LogicEMB Learning Platform"
              width={420}
              height={400}
              priority
              className="w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TOPICS SECTION                                                            */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Explore Topics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TOPICS.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                className="p-4 rounded-lg border border-gray-100 bg-white hover:border-[#FF9418] hover:shadow-md transition-all cursor-pointer"
                style={{ backgroundColor: topic.bg }}
              >
                <span className="text-3xl block mb-2">{topic.icon}</span>
                <h3 className="font-semibold text-[#071A30] text-sm">{topic.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{topic.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ARTICLES SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">Latest Articles</h2>
            <Link
              href="/articles"
              className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLE_CARDS.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="bg-white border border-gray-100 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col"
              >
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium self-start ${article.categoryColor}`}>
                  {article.category}
                </span>
                <h3 className="text-base font-semibold text-[#071A30] mt-2 line-clamp-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TAGS SECTION                                                              */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-6">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TAGS.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-[#FF9418] hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COURSES SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">Featured Courses</h2>
            <Link
              href="/courses"
              className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1"
            >
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSE_CARDS.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Icon Header */}
                <div className="h-28 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                  <span className="text-5xl">{course.icon}</span>
                </div>

                {/* Body */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-semibold text-[#071A30] leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                    <span>{course.instructor}</span>
                    <span className={`px-2 py-0.5 rounded-full font-medium ${course.levelColor}`}>
                      {course.level}
                    </span>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="block w-full px-4 py-2 bg-[#FF9418] text-white text-sm font-medium text-center rounded hover:bg-[#E58110] transition-colors"
                  >
                    {course.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEWSLETTER SECTION                                                        */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#071A30] mb-3">
            Stay Updated with LogicEMB
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-xl mx-auto">
            Get the latest tutorials, articles, and course updates delivered to your inbox every week.
          </p>
          <div className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-l focus:outline-none focus:border-[#FF9418]"
            />
            <button className="px-6 py-3 bg-[#FF9418] text-white font-medium rounded-r hover:bg-[#E58110] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
