'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, notFound } from 'next/navigation'
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  BookOpen,
  Bookmark,
  ChevronRight,
  Lightbulb,
  Cpu
} from 'lucide-react'
import { ALL_TUTORIALS, TutorialItem } from '@/lib/tutorials-data'

export default function TutorialDetailPage() {
  const params = useParams()
  const slug = params?.slug as string

  const tutorial = ALL_TUTORIALS.find(
    (t) => t.slug === slug || t.id === slug
  )

  const [copied, setCopied] = useState(false)

  if (!tutorial) {
    return notFound()
  }

  const handleCopy = () => {
    if (tutorial.codeSnippet?.code) {
      navigator.clipboard.writeText(tutorial.codeSnippet.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Find next and prev tutorial
  const currentIndex = ALL_TUTORIALS.findIndex((t) => t.id === tutorial.id)
  const prevTutorial = currentIndex > 0 ? ALL_TUTORIALS[currentIndex - 1] : null
  const nextTutorial = currentIndex < ALL_TUTORIALS.length - 1 ? ALL_TUTORIALS[currentIndex + 1] : null

  return (
    <div className="w-full bg-white min-h-screen pb-20">
      {/* Top Progress / Breadcrumb bar */}
      <div className="border-b border-gray-200 bg-gray-50/70 py-3">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500 overflow-hidden">
            <Link href="/" className="hover:text-[#E65100]">Home</Link>
            <span>/</span>
            <Link href="/tutorials" className="hover:text-[#E65100]">Tutorials</Link>
            <span>/</span>
            <span className="text-gray-400 font-medium">{tutorial.category}</span>
            <span>/</span>
            <span className="text-[#071A30] font-semibold truncate max-w-[200px] sm:max-w-xs">{tutorial.title}</span>
          </div>

          <Link
            href="/tutorials"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#E65100] font-semibold transition-colors"
          >
            <ArrowLeft size={13} />
            <span>All Tutorials</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Main Article Column */}
          <main className="max-w-3xl">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className={`text-xs font-bold px-3 py-0.5 rounded-full border ${tutorial.categoryColor}`}>
                  {tutorial.category}
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded font-medium">
                  {tutorial.difficulty} Level
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock size={12} />
                  {tutorial.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#071A30] tracking-tight leading-tight mb-4">
                {tutorial.title}
              </h1>

              <div className="flex items-center justify-between py-4 border-y border-gray-100 text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#071A30] text-white font-bold flex items-center justify-center text-xs">
                    LE
                  </div>
                  <div>
                    <p className="font-semibold text-[#071A30]">{tutorial.author}</p>
                    <p className="text-[11px] text-gray-400">Published {tutorial.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: tutorial.title, url: window.location.href })
                      }
                    }}
                    className="p-2 text-gray-400 hover:text-[#E65100] transition-colors rounded-lg border border-gray-200"
                    title="Share tutorial"
                  >
                    <Share2 size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Content Body */}
            <article className="prose prose-slate max-w-none text-gray-700 text-sm md:text-base leading-relaxed space-y-6">
              <p className="text-base text-gray-800 font-medium leading-relaxed bg-gray-50 p-4 rounded-xl border-l-4 border-[#E65100]">
                {tutorial.excerpt}
              </p>

              <h2 className="text-xl font-bold text-[#071A30] pt-4">
                1. Core Engineering Principles & Theoretical Context
              </h2>
              <p>
                In high-reliability hardware and deterministic embedded systems, trivial software assumptions frequently break down at the physical boundary. Whether you are dealing with signal rise times that trigger transmission line reflections, or interrupt jitter that corrupts high-speed UART packets, a register-level understanding is essential.
              </p>
              <p>
                Designing without respect to return path geometry or DMA FIFO limits guarantees intermittent bench failures during thermal and EMC testing.
              </p>

              {/* Callout Alert Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-xs md:text-sm text-amber-900 my-6">
                <Lightbulb size={20} className="text-[#E65100] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block mb-0.5">Golden Engineering Rule</strong>
                  High-frequency current flows along the path of least <em>inductance</em>, not least resistance. Always route high-speed digital lines over a continuous, unbroken ground reference plane.
                </div>
              </div>

              <h2 className="text-xl font-bold text-[#071A30] pt-4">
                2. Implementation & Code Architecture
              </h2>
              <p>
                Below is the verified production implementation for this workflow. Notice how registers are accessed directly without introducing unvetted abstraction overhead or dynamic memory allocation.
              </p>

              {/* Code Snippet */}
              {tutorial.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#071A30] shadow-lg my-6">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B2544] border-b border-gray-800 text-xs text-gray-300">
                    <span className="font-mono font-semibold text-[#FF9418]">
                      {tutorial.codeSnippet.filename}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                    >
                      {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                      <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="p-4 text-xs md:text-sm font-mono text-gray-100 overflow-x-auto leading-relaxed">
                    <code>{tutorial.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              <h2 className="text-xl font-bold text-[#071A30] pt-4">
                3. Key Takeaways & Best Practices Checklist
              </h2>
              <div className="space-y-3 bg-gray-50 p-5 rounded-xl border border-gray-200 my-4">
                {tutorial.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-800">
                    <CheckCircle2 size={16} className="text-[#E65100] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 mr-2">Tags:</span>
              {tutorial.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Next / Previous Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200">
              {prevTutorial ? (
                <Link
                  href={`/tutorials/${prevTutorial.slug}`}
                  className="p-4 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-sm transition-all text-left group"
                >
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <ArrowLeft size={12} /> Previous Tutorial
                  </p>
                  <h4 className="text-xs font-bold text-[#071A30] line-clamp-1 group-hover:text-[#E65100]">
                    {prevTutorial.title}
                  </h4>
                </Link>
              ) : <div />}

              {nextTutorial ? (
                <Link
                  href={`/tutorials/${nextTutorial.slug}`}
                  className="p-4 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-sm transition-all text-right group"
                >
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center justify-end gap-1">
                    Next Tutorial <ArrowRight size={12} />
                  </p>
                  <h4 className="text-xs font-bold text-[#071A30] line-clamp-1 group-hover:text-[#E65100]">
                    {nextTutorial.title}
                  </h4>
                </Link>
              ) : <div />}
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Table of contents card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                <BookOpen size={14} className="text-[#E65100]" />
                <span>On This Page</span>
              </h3>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="hover:text-[#E65100] cursor-pointer">1. Core Engineering Principles</li>
                <li className="hover:text-[#E65100] cursor-pointer">2. Implementation & Code Architecture</li>
                <li className="hover:text-[#E65100] cursor-pointer">3. Key Takeaways & Checklist</li>
              </ul>
            </div>

            {/* Related Courses Promo */}
            <div className="bg-gradient-to-br from-[#071A30] to-[#0E2E52] text-white rounded-xl p-5 shadow-sm">
              <span className="text-[10px] font-bold tracking-wider text-[#FF9418] uppercase">
                Structured Learning Track
              </span>
              <h4 className="font-bold text-sm text-white mt-1 mb-2">
                Want to Master This Topic End-to-End?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Enroll in our free comprehensive course track with graded capstones and design reviews.
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#E65100] text-white text-xs font-semibold hover:bg-[#BF360C] transition-colors"
              >
                <span>Browse All Courses</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
