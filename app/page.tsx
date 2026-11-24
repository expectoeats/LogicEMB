import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, Users, BookOpen, Zap, Search, ArrowRight, BarChart2 } from 'lucide-react'
import { TOPICS, ARTICLE_CARDS, POPULAR_TAGS, COURSE_CARDS } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section className="bg-[#F9F9F9] border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_550px] gap-10 items-center">
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
                className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-l focus:outline-none focus:border-[#E65100]"
              />
              <button className="px-6 py-3 bg-[#E65100] text-white font-medium rounded-r hover:bg-[#BF360C] transition-colors flex items-center gap-2">
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <TrendingUp size={20} className="text-[#E65100]" />
                <span className="font-semibold">1000+</span>
                <span>Tutorials</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Users size={20} className="text-[#E65100]" />
                <span className="font-semibold">50K+</span>
                <span>Learners</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <BookOpen size={20} className="text-[#E65100]" />
                <span className="font-semibold">100+</span>
                <span>Courses</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Zap size={20} className="text-[#E65100]" />
                <span className="font-semibold">Free</span>
                <span>Access</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mt-6">
              <Link
                href="/courses"
                className="px-6 py-3 bg-[#E65100] text-white font-medium rounded hover:bg-[#BF360C] transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                href="/tutorials"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:border-[#E65100] hover:text-[#E65100] transition-colors"
              >
                Browse Tutorials
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <Image
              src="/hero-img.jpg"
              alt="LogicEMB Learning Platform"
              width={550}
              height={500}
              priority
              className="w-full h-[450px] rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COURSES SECTION — right after hero                                        */}
      {/* ========================================================================= */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">Courses</h2>
            <Link
              href="/courses"
              className="text-sm font-medium text-gray-600 border border-gray-300 px-4 py-1.5 rounded-full hover:border-[#E65100] hover:text-[#E65100] transition-colors flex items-center gap-1"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSE_CARDS.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* ── Banner ── */}
                <div
                  className="relative h-[180px] flex flex-col justify-between p-4 overflow-hidden"
                  style={{ background: course.bannerGradient }}
                >
                  {/* Course title on banner */}
                  <div className="mt-auto">
                    <h3 className="text-white font-black text-2xl leading-tight drop-shadow-sm">
                      {course.bannerTitle}
                    </h3>
                    <p className="text-white/80 text-xs mt-1 font-medium tracking-wide">
                      {course.bannerSubtitle}
                    </p>
                  </div>
                </div>

                {/* ── Body ── */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-sm font-semibold text-[#071A30] leading-snug line-clamp-2 mb-3">
                    {course.title}
                  </p>

                  {/* Level */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                    <BarChart2 size={13} className="text-gray-400" />
                    <span>{course.level}</span>
                  </div>

                  {/* Footer: enrolled + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <TrendingUp size={13} className="text-[#E65100]" />
                      {course.enrolled}
                    </span>
                    <Link
                      href={`/courses/${course.id}`}
                      className="text-xs font-semibold text-[#E65100] hover:text-[#BF360C] hover:underline flex items-center gap-1 transition-colors"
                    >
                      Explore now <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TOPICS SECTION                                                            */}
      {/* ========================================================================= */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Explore Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TOPICS.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                style={{ background: topic.gradient }}
                className="relative rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[160px] group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                {/* Subtle shimmer overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-sm relative z-10">
                  {topic.name}
                </h3>

                {/* View more pill button */}
                <span className="relative z-10 inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full border border-white/60 text-white text-sm font-medium bg-white/15 group-hover:bg-white/25 group-hover:border-white transition-all duration-200">
                  View more <ArrowRight size={14} />
                </span>
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
              className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1"
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
                className="bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-[#E65100] transition-all flex flex-col overflow-hidden"
              >
                {/* Article Thumbnail */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium self-start mb-3 ${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <h3 className="text-base font-semibold text-[#071A30] line-clamp-2 leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
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
                className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-[#E65100] hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </Link>
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
              className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-l focus:outline-none focus:border-[#E65100]"
            />
            <button className="px-6 py-3 bg-[#E65100] text-white font-medium rounded-r hover:bg-[#BF360C] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
