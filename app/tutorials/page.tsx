'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  Clock,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Download,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  Calendar,
  User
} from 'lucide-react'
import { ALL_TUTORIALS, CHEAT_SHEETS, TutorialItem } from '@/lib/tutorials-data'

const TUTORIAL_CATEGORIES = [
  'All',
  'PCB Design',
  'Embedded C',
  'Python',
  'Electronics',
  'Microcontrollers',
  'JavaScript'
]

const DIFFICULTIES = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTutorials = useMemo(() => {
    return ALL_TUTORIALS.filter((tut) => {
      const matchesCategory =
        selectedCategory === 'All' || tut.category === selectedCategory

      const matchesDifficulty =
        selectedDifficulty === 'All Levels' ||
        tut.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()

      const matchesSearch =
        tut.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tut.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tut.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )

      return matchesCategory && matchesDifficulty && matchesSearch
    })
  }, [selectedCategory, selectedDifficulty, searchQuery])

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section className="bg-[#071A30] text-white py-16 border-b border-gray-800">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Electronics, PCB & Firmware Tutorials
            </h1>
            <p className="text-gray-300 mt-4 text-base md:text-lg leading-relaxed">
              Step-by-step technical guides with register-level code snippets, schematic rules, and bench validation. Written by practicing engineers.
            </p>

            {/* In-Hero Search Input */}
            <div className="relative mt-8 max-w-xl">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tutorials by keyword (e.g. DMA, PCB trace, MOSFET, STM32)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-sm bg-white text-gray-900 rounded-xl shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E65100]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FILTER BAR                                                                */}
      {/* ========================================================================= */}
      <section className="sticky top-14 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {TUTORIAL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#E65100] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level Filter Dropdown */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3.5 py-1.5 text-xs border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-[#E65100]"
            >
              {DIFFICULTIES.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TUTORIALS GRID                                                            */}
      {/* ========================================================================= */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#071A30]">
              Showing {filteredTutorials.length} {filteredTutorials.length === 1 ? 'Tutorial' : 'Tutorials'}
            </h2>
            {(selectedCategory !== 'All' || selectedDifficulty !== 'All Levels' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedDifficulty('All Levels')
                  setSearchQuery('')
                }}
                className="text-xs text-[#E65100] hover:underline font-medium"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredTutorials.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center max-w-md mx-auto my-8">
              <BookOpen size={48} className="mx-auto text-gray-300 mb-3" />
              <h3 className="text-lg font-semibold text-[#071A30]">No tutorials found</h3>
              <p className="text-sm text-gray-500 mt-1">
                Try searching for other keywords like STM32, PCB, Python, or MOSFET.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedDifficulty('All Levels')
                  setSearchQuery('')
                }}
                className="mt-4 px-4 py-2 bg-[#E65100] text-white text-xs font-medium rounded-lg hover:bg-[#BF360C]"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tut) => (
                <article
                  key={tut.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#E65100] transition-all duration-300 flex flex-col group"
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                    <Image
                      src={tut.image}
                      alt={tut.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-sm ${tut.categoryColor} bg-white/95`}>
                        {tut.category}
                      </span>
                    </div>
                    <span className="absolute bottom-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-sm">
                      {tut.difficulty}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {tut.readTime}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {tut.date}
                      </span>
                    </div>

                    <Link href={`/tutorials/${tut.slug}`}>
                      <h3 className="text-base font-bold text-[#071A30] line-clamp-2 leading-snug group-hover:text-[#E65100] transition-colors mb-2">
                        {tut.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {tut.excerpt}
                    </p>

                    {/* Key Takeaways */}
                    <div className="space-y-1.5 mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100 mt-auto">
                      <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">
                        Key Rule:
                      </p>
                      <div className="flex items-start gap-1.5 text-xs text-gray-600">
                        <CheckCircle2 size={13} className="text-[#E65100] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{tut.keyTakeaways[0]}</span>
                      </div>
                    </div>

                    {/* Tags & Action */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-1 overflow-hidden">
                        {tut.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/tutorials/${tut.slug}`}
                        className="text-xs font-semibold text-[#E65100] hover:text-[#BF360C] flex items-center gap-1 hover:underline shrink-0"
                      >
                        Read Tutorial <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* QUICK CHEAT SHEETS SECTION                                                */}
      {/* ========================================================================= */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#071A30]">
                Engineering Cheat Sheets & Quick Lookups
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Pocket references, pinout tables, and rule-of-thumb cheat sheets for hardware developers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CHEAT_SHEETS.map((cs) => (
              <div
                key={cs.id}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#E65100] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#E65100] tracking-wider mb-2 inline-block">
                    {cs.category}
                  </span>
                  <h3 className="font-bold text-sm text-[#071A30] leading-snug mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {cs.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-200/60 text-gray-500">
                  <span>{cs.downloadCount}</span>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-[#E65100] font-semibold hover:underline"
                  >
                    <Download size={13} />
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
