'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search,
  BarChart2,
  Clock,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Filter,
  ShieldCheck,
  Cpu
} from 'lucide-react'
import { ALL_COURSES, DetailedCourse } from '@/lib/courses-data'

const CATEGORIES = [
  'All',
  'PCB Design',
  'Embedded Systems',
  'Python',
  'Electronics',
  'Microcontrollers',
  'IoT'
]

const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All Levels')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory

      const matchesLevel =
        selectedLevel === 'All Levels' ||
        course.level.toLowerCase().includes(selectedLevel.toLowerCase())

      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.bannerTitle.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesLevel && matchesSearch
    })
  }, [selectedCategory, selectedLevel, searchQuery])

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section className="bg-[#071A30] text-white py-16 border-b border-gray-800">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Master Electronics & Firmware Engineering
            </h1>
            <p className="text-gray-300 mt-4 text-base md:text-lg leading-relaxed">
              From bare-metal ARM firmware and 4-layer PCB design to automated Python test rigs and IoT dashboards. Free structured courses designed by practicing engineers.
            </p>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700/60">
              <div>
                <p className="text-2xl font-bold text-[#FF9418]">6+</p>
                <p className="text-xs text-gray-400 mt-0.5">Specialized Tracks</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#FF9418]">50K+</p>
                <p className="text-xs text-gray-400 mt-0.5">Active Learners</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#FF9418]">100%</p>
                <p className="text-xs text-gray-400 mt-0.5">Free & Open Access</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#FF9418]">Hardware</p>
                <p className="text-xs text-gray-400 mt-0.5">Lab-Verified Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FILTER & SEARCH BAR                                                       */}
      {/* ========================================================================= */}
      <section className="sticky top-14 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
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

            {/* Right: Search + Level Filter */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 sm:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#E65100]"
                />
              </div>

              {/* Level Dropdown */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-1.5 text-xs border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-[#E65100]"
              >
                {LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COURSES GRID                                                              */}
      {/* ========================================================================= */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#071A30]">
              Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
            </h2>
            {(selectedCategory !== 'All' || selectedLevel !== 'All Levels' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedLevel('All Levels')
                  setSearchQuery('')
                }}
                className="text-xs text-[#E65100] hover:underline font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center max-w-md mx-auto my-8">
              <BookOpen size={48} className="mx-auto text-gray-300 mb-3" />
              <h3 className="text-lg font-semibold text-[#071A30]">No courses found</h3>
              <p className="text-sm text-gray-500 mt-1">
                Try adjusting your search query or removing filters to see available courses.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedLevel('All Levels')
                  setSearchQuery('')
                }}
                className="mt-4 px-4 py-2 bg-[#E65100] text-white text-xs font-medium rounded-lg hover:bg-[#BF360C] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col group"
                >
                  {/* ── Banner ── */}
                  <div
                    className="relative h-[190px] flex flex-col justify-between p-5 overflow-hidden"
                    style={{ background: course.bannerGradient }}
                  >
                    {/* Course title on banner */}
                    <div className="z-10 mt-auto">
                      <h3 className="text-white font-black text-2xl leading-tight drop-shadow-sm">
                        {course.bannerTitle}
                      </h3>
                      <p className="text-white/90 text-xs mt-1 font-medium tracking-wide">
                        {course.bannerSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* ── Body ── */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Category & Duration chips */}
                    <div className="flex items-center gap-2 mb-2 text-xs">
                      <span className="font-semibold text-[#E65100] uppercase tracking-wider text-[10px]">
                        {course.category}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock size={12} />
                        {course.duration}
                      </span>
                    </div>

                    <Link href={`/courses/${course.id}`}>
                      <h3 className="text-base font-bold text-[#071A30] leading-snug line-clamp-2 hover:text-[#E65100] transition-colors mb-2">
                        {course.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 mb-5 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider">
                        Key Outcomes:
                      </p>
                      {course.whatYouWillLearn.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <CheckCircle2 size={13} className="text-[#E65100] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Level & Modules count */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-1">
                      <div className="flex items-center gap-1.5">
                        <BarChart2 size={14} className="text-gray-400" />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen size={14} className="text-gray-400" />
                        <span>{course.modulesCount} Modules</span>
                      </div>
                    </div>

                    {/* Footer: enrolled + CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <TrendingUp size={13} className="text-[#E65100]" />
                        {course.enrolled}
                      </span>
                      <Link
                        href={`/courses/${course.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#E65100] text-white text-xs font-semibold hover:bg-[#BF360C] transition-colors shadow-sm"
                      >
                        Enroll Free <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY LEARN WITH LOGICEMB                                                   */}
      {/* ========================================================================= */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-[#071A30]">
              Why Learn Engineering with LogicEMB?
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Unlike generic programming tutorials, our curricula bridge physics with firmware, ensuring you can design circuits and program silicon with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <div className="w-10 h-10 rounded-lg bg-[#E65100]/10 text-[#E65100] flex items-center justify-center mb-4">
                <Cpu size={22} />
              </div>
              <h3 className="font-bold text-[#071A30] text-base mb-2">
                Silicon-to-Screen Pedagogy
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We don’t skip the hardware layer. Understand register architectures, return current paths, and impedance physics alongside modern C and Python code.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <div className="w-10 h-10 rounded-lg bg-[#E65100]/10 text-[#E65100] flex items-center justify-center mb-4">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-bold text-[#071A30] text-base mb-2">
                Bench-Tested Hardware
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every project and schematic has been fabricated, assembled, and validated on bench oscilloscopes. Zero theoretical pseudo-circuits.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
              <div className="w-10 h-10 rounded-lg bg-[#E65100]/10 text-[#E65100] flex items-center justify-center mb-4">
                <TrendingUp size={22} />
              </div>
              <h3 className="font-bold text-[#071A30] text-base mb-2">
                Production-Ready Standards
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Adhere to IPC-2221 design rules, MISRA C firmware practices, and industry automated test harnesses from your very first project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
