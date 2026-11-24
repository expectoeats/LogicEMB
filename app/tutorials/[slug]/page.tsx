'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Clock,
  Calendar,
  User,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Code,
  Lightbulb,
  AlertCircle,
  List,
  FileText
} from 'lucide-react'
import { ALL_TUTORIALS } from '@/lib/tutorials-data'

export default function TutorialDetailPage({ params }: { params: { slug: string } }) {
  const tutorial = ALL_TUTORIALS.find((t) => t.slug === params.slug)
  const [activeSection, setActiveSection] = useState('introduction')

  if (!tutorial) {
    notFound()
  }

  const currentIndex = ALL_TUTORIALS.findIndex((t) => t.slug === params.slug)
  const prevTutorial = currentIndex > 0 ? ALL_TUTORIALS[currentIndex - 1] : null
  const nextTutorial = currentIndex < ALL_TUTORIALS.length - 1 ? ALL_TUTORIALS[currentIndex + 1] : null
  const relatedTutorials = ALL_TUTORIALS.filter(
    (t) => t.category === tutorial.category && t.id !== tutorial.id
  ).slice(0, 3)

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const tableOfContents = [
    { id: 'introduction', label: 'Introduction', icon: BookOpen },
    { id: 'key-concepts', label: 'Key Concepts & Theory', icon: Lightbulb },
    { id: 'implementation', label: 'Step-by-Step Implementation', icon: List },
    { id: 'code-example', label: 'Complete Code Example', icon: Code },
    { id: 'best-practices', label: 'Best Practices & Key Takeaways', icon: CheckCircle2 },
    { id: 'conclusion', label: 'Conclusion', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E65100]">Home</Link>
            <span>/</span>
            <Link href="/tutorials" className="hover:text-[#E65100]">Tutorials</Link>
            <span>/</span>
            <Link href={`/${tutorial.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#E65100]">
              {tutorial.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{tutorial.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr,300px] gap-8">
          {/* Left Sidebar - Table of Contents (STICKY) */}
          <aside className="lg:sticky lg:top-20 h-fit hidden lg:block">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-[#071A30] to-[#0D2847] text-white p-4">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <BookOpen size={18} />
                  Table of Contents
                </h3>
              </div>
              <nav className="p-2">
                {tableOfContents.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        activeSection === item.id
                          ? 'bg-[#E65100] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={16} />
                      <span className="line-clamp-1">{item.label}</span>
                    </button>
                  )
                })}
              </nav>

              {/* Tutorial Meta Info */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
                <div className="text-xs">
                  <p className="text-gray-500 mb-1">Difficulty</p>
                  <span className="inline-block px-2 py-1 bg-gray-200 text-gray-700 rounded font-semibold">
                    {tutorial.difficulty}
                  </span>
                </div>
                <div className="text-xs">
                  <p className="text-gray-500 mb-1">Reading Time</p>
                  <span className="font-semibold text-gray-900">{tutorial.readTime}</span>
                </div>
                <div className="text-xs">
                  <p className="text-gray-500 mb-1">Last Updated</p>
                  <span className="font-semibold text-gray-900">{tutorial.date}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Middle Column - Main Article */}
          <article className="bg-white">
            {/* Title & Meta */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${tutorial.categoryColor}`}>
                  {tutorial.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-100 text-gray-700">
                  {tutorial.difficulty}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#071A30] leading-tight mb-4">
                {tutorial.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1.5">
                  <Clock size={16} />
                  {tutorial.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  {tutorial.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <User size={16} />
                  {tutorial.author}
                </span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {tutorial.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8 border border-gray-200">
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Mobile Table of Contents */}
            <div className="lg:hidden bg-[#FFF3E0] border border-orange-200 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-bold text-[#071A30] mb-3 flex items-center gap-2">
                <BookOpen size={20} className="text-[#E65100]" />
                Table of Contents
              </h2>
              <ul className="space-y-2 text-sm">
                {tableOfContents.map((item, idx) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-[#E65100] hover:underline font-medium text-left"
                    >
                      {idx + 1}. {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Introduction Section */}
            <section id="introduction" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Introduction
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  {tutorial.excerpt} This comprehensive tutorial will walk you through the complete process
                  with real-world examples, code snippets, and industry best practices.
                </p>
                <p>
                  Whether you're a beginner or an experienced engineer, this guide provides practical insights
                  that you can immediately apply to your projects. We'll cover everything from fundamental
                  concepts to advanced optimization techniques.
                </p>
              </div>
            </section>

            {/* Key Concepts Section */}
            <section id="key-concepts" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Key Concepts & Theory
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Before diving into implementation, let's understand the fundamental principles that make
                  this approach effective. These concepts form the foundation of professional-grade solutions.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb size={22} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">Why This Matters</h3>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        Understanding these core principles will help you make informed design decisions and
                        avoid common pitfalls that can lead to unreliable systems or poor performance.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#071A30] mt-6 mb-3">
                  Fundamental Principles
                </h3>
                <ul className="space-y-3 ml-5">
                  {tutorial.tags.map((tag, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-[#E65100] shrink-0 mt-0.5" />
                      <span>
                        <strong>{tag}:</strong> Critical component for ensuring robust and efficient implementation
                        in production environments.
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Implementation Section */}
            <section id="implementation" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Step-by-Step Implementation
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Now let's implement this solution step by step. Follow these instructions carefully to ensure
                  proper configuration and optimal performance.
                </p>

                {/* Step 1 */}
                <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
                  <h3 className="text-lg font-bold text-[#071A30] mb-3 flex items-center gap-2">
                    <span className="bg-[#E65100] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    Initial Setup & Configuration
                  </h3>
                  <p className="text-sm mb-3">
                    Begin by configuring the necessary peripherals and enabling required clock sources.
                    Proper initialization is critical for stable operation.
                  </p>
                  <ul className="text-sm space-y-1.5 ml-5 list-disc text-gray-600">
                    <li>Enable peripheral clock domains</li>
                    <li>Configure GPIO pins and alternate functions</li>
                    <li>Set up interrupt priorities and NVIC settings</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
                  <h3 className="text-lg font-bold text-[#071A30] mb-3 flex items-center gap-2">
                    <span className="bg-[#E65100] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Core Implementation
                  </h3>
                  <p className="text-sm mb-3">
                    Implement the main functionality with attention to timing constraints, memory alignment,
                    and hardware-specific requirements.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
                  <h3 className="text-lg font-bold text-[#071A30] mb-3 flex items-center gap-2">
                    <span className="bg-[#E65100] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    Testing & Verification
                  </h3>
                  <p className="text-sm">
                    Validate the implementation using oscilloscope measurements, logic analyzer traces,
                    and boundary condition testing to ensure reliability.
                  </p>
                </div>
              </div>
            </section>

            {/* Code Example Section */}
            {tutorial.codeSnippet && (
              <section id="code-example" className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                  Complete Code Example
                </h2>
                <p className="text-gray-700 mb-4">
                  Here's a production-ready implementation that you can use as a starting point for your projects:
                </p>

                <div className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-700">
                  <div className="bg-[#2D2D2D] px-4 py-2 flex items-center justify-between border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-gray-400" />
                      <span className="text-xs text-gray-300 font-mono">
                        {tutorial.codeSnippet.filename}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 uppercase font-semibold">
                      {tutorial.codeSnippet.language}
                    </span>
                  </div>
                  <pre className="p-5 overflow-x-auto text-sm">
                    <code className="text-gray-100 font-mono leading-relaxed">
                      {tutorial.codeSnippet.code}
                    </code>
                  </pre>
                </div>

                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-yellow-900 text-sm mb-1">Important Note</h4>
                      <p className="text-xs text-yellow-800 leading-relaxed">
                        Always verify register addresses and bit positions against your specific microcontroller's
                        reference manual. Hardware configurations may vary between chip families.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Best Practices Section */}
            <section id="best-practices" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Best Practices & Key Takeaways
              </h2>
              <div className="space-y-3">
                {tutorial.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-900 leading-relaxed">
                      <strong>Rule #{idx + 1}:</strong> {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Conclusion
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  In this tutorial, we've covered the essential concepts and implementation details for {tutorial.title.toLowerCase()}.
                  By following these guidelines and best practices, you'll be able to build robust and efficient solutions.
                </p>
                <p>
                  Remember that understanding the underlying principles is just as important as the implementation itself.
                  Continue experimenting, testing edge cases, and refining your approach based on real-world requirements.
                </p>
              </div>
            </section>

            {/* Tags */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">Related Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tutorial.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-[#E65100] hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Previous/Next Navigation */}
            <div className="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevTutorial ? (
                <Link
                  href={`/tutorials/${prevTutorial.slug}`}
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#E65100] hover:shadow-md transition-all group"
                >
                  <ArrowLeft size={20} className="text-[#E65100] shrink-0" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500 mb-1">Previous Tutorial</p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#E65100] line-clamp-2">
                      {prevTutorial.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextTutorial && (
                <Link
                  href={`/tutorials/${nextTutorial.slug}`}
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#E65100] hover:shadow-md transition-all group md:ml-auto text-right"
                >
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Next Tutorial</p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#E65100] line-clamp-2">
                      {nextTutorial.title}
                    </p>
                  </div>
                  <ArrowRight size={20} className="text-[#E65100] shrink-0" />
                </Link>
              )}
            </div>
          </article>

          {/* Right Sidebar */}
          <aside className="lg:sticky lg:top-20 h-fit space-y-6">
            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bookmark size={16} />
                  Bookmark
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 size={16} />
                  Share
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <ThumbsUp size={16} />
                  Like
                </button>
              </div>
            </div>

            {/* Related Tutorials */}
            {relatedTutorials.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Related Tutorials</h3>
                <div className="space-y-4">
                  {relatedTutorials.map((related) => (
                    <Link
                      key={related.id}
                      href={`/tutorials/${related.slug}`}
                      className="block group"
                    >
                      <div className="text-xs text-gray-500 mb-1">{related.category}</div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#E65100] line-clamp-2 leading-snug">
                        {related.title}
                      </h4>
                      <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {related.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author Info */}
            <div className="bg-gradient-to-br from-[#071A30] to-[#0D2847] text-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-[#E65100] rounded-full flex items-center justify-center font-bold">
                  {tutorial.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-sm">{tutorial.author}</h3>
                  <p className="text-xs text-gray-300">Technical Writer</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Expert in {tutorial.category.toLowerCase()} with years of practical experience
                in hardware and firmware development.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
