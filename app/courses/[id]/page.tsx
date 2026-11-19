'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import {
  Star,
  Clock,
  BookOpen,
  BarChart2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Share2,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  PlayCircle,
  FileText,
  Award,
  Users
} from 'lucide-react'
import { ALL_COURSES } from '@/lib/courses-data'

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params?.id as string

  const course = ALL_COURSES.find(
    (c) => c.id === courseId || c.slug === courseId
  )

  const [openModules, setOpenModules] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  })

  if (!course) {
    return notFound()
  }

  const toggleModule = (index: number) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pb-16">
      {/* ========================================================================= */}
      {/* COURSE HERO BANNER                                                        */}
      {/* ========================================================================= */}
      <section className="bg-[#071A30] text-white py-12 border-b border-gray-800">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="text-gray-300 font-medium truncate">{course.bannerTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
            {/* Left Content */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded shadow-sm tracking-wide`}>
                  {course.badge}
                </span>
                <span className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-full border border-white/10">
                  {course.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-yellow-400 font-semibold bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                  <Star size={13} className="fill-yellow-400" />
                  <span>{course.rating}</span>
                  <span className="text-gray-400 font-normal">({course.reviewsCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white mb-4">
                {course.title}
              </h1>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                {course.description}
              </p>

              {/* Meta Stats Row */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300 pt-4 border-t border-gray-700/60">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[#E65100]" />
                  <span>{course.enrolled}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#E65100]" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart2 size={16} className="text-[#E65100]" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-[#E65100]" />
                  <span>{course.modulesCount} Complete Modules</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs text-gray-400">
                <span>Created by <strong className="text-white font-medium">{course.instructor}</strong> ({course.instructorRole})</span>
              </div>
            </div>

            {/* Right Card (Mobile & Desktop Enrollment Box) */}
            <div className="bg-white text-gray-900 rounded-2xl border border-gray-200 shadow-xl overflow-hidden p-6">
              {/* Mini gradient visual */}
              <div
                className="h-28 rounded-xl p-4 flex flex-col justify-between text-white mb-5"
                style={{ background: course.bannerGradient }}
              >
                <span className="text-[10px] font-bold tracking-wider uppercase bg-black/20 self-start px-2 py-0.5 rounded">
                  Free Self-Paced Track
                </span>
                <div>
                  <p className="text-xl font-black">{course.bannerTitle}</p>
                  <p className="text-xs text-white/90">{course.bannerSubtitle}</p>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black text-[#071A30]">Free</span>
                  <span className="text-xs text-gray-400 line-through">$149 Value</span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    100% Scholarship
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Full lifetime access including all schematic files and code repositories.
                </p>
              </div>

              <button
                type="button"
                className="w-full py-3 bg-[#E65100] text-white font-bold text-sm rounded-xl hover:bg-[#BF360C] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mb-3"
              >
                <PlayCircle size={18} />
                <span>Start Learning Now</span>
              </button>

              <div className="space-y-2 text-xs text-gray-600 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Access:</span>
                  <span className="font-semibold text-[#071A30]">Instant, On-Demand</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Labs:</span>
                  <span className="font-semibold text-[#071A30]">6 Hands-On Projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Certificate:</span>
                  <span className="font-semibold text-[#071A30]">Completion Credential</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Support:</span>
                  <span className="font-semibold text-[#071A30]">Community Discord</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN BODY: What you'll learn + Syllabus                                   */}
      {/* ========================================================================= */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
            {/* Left Column: Syllabus & Learning Outcomes */}
            <div className="space-y-8">
              {/* What You'll Learn Box */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#071A30] mb-4">
                  What You Will Master in This Course
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {course.whatYouWillLearn.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#E65100] shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 leading-relaxed font-medium">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#071A30] mb-3">
                  Prerequisites & Recommended Equipment
                </h3>
                <ul className="space-y-2">
                  {course.prerequisites.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E65100]" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Syllabus */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#071A30]">Course Curriculum</h2>
                    <p className="text-xs text-gray-500 mt-1">
                      {course.modulesCount} modules • Comprehensive self-paced syllabus
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const allOpen = Object.keys(openModules).length === course.syllabus.length
                      if (allOpen) {
                        setOpenModules({})
                      } else {
                        const opened: Record<number, boolean> = {}
                        course.syllabus.forEach((_, i) => (opened[i] = true))
                        setOpenModules(opened)
                      }
                    }}
                    className="text-xs font-semibold text-[#E65100] hover:underline"
                  >
                    Toggle All Modules
                  </button>
                </div>

                <div className="space-y-3">
                  {course.syllabus.map((mod, idx) => {
                    const isOpen = !!openModules[idx]
                    return (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleModule(idx)}
                          className="w-full px-5 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-white border border-gray-300 text-xs font-bold text-gray-700 flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="font-semibold text-sm text-[#071A30]">
                              {mod.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-xs text-gray-500 font-medium">{mod.duration}</span>
                            {isOpen ? (
                              <ChevronUp size={16} className="text-gray-500" />
                            ) : (
                              <ChevronDown size={16} className="text-gray-500" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 py-3.5 bg-white space-y-2.5 border-t border-gray-100">
                            {mod.lessons.map((lesson, lessonIdx) => (
                              <div
                                key={lessonIdx}
                                className="flex items-center justify-between text-xs text-gray-700 py-1"
                              >
                                <div className="flex items-center gap-2">
                                  <PlayCircle size={14} className="text-[#E65100]" />
                                  <span>{lesson}</span>
                                </div>
                                <span className="text-[11px] text-gray-400">Lesson {lessonIdx + 1}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Instructor & Additional Info */}
            <div className="space-y-6">
              {/* Instructor Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#071A30] mb-3">Your Instructor</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#071A30] text-[#FF9418] font-black text-base flex items-center justify-center shadow">
                    LE
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#071A30]">{course.instructor}</h4>
                    <p className="text-xs text-gray-500">{course.instructorRole}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Engineers with 10+ years of hardware bring-up, high-speed layout, and safety-critical firmware engineering experience across industrial IoT and aerospace electronics.
                </p>
              </div>

              {/* Certificate & Value Prop */}
              <div className="bg-gradient-to-br from-gray-900 to-[#071A30] text-white rounded-xl p-6 shadow-sm">
                <Award size={32} className="text-[#FF9418] mb-3" />
                <h4 className="font-bold text-sm text-white mb-1">
                  Earn a LogicEMB Verified Certificate
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Complete the capstone laboratory project, pass peer design review, and add an industry-recognized engineering credential to your LinkedIn and resume.
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#FF9418] font-semibold">
                  <ShieldCheck size={14} />
                  <span>100% Free Verification</span>
                </div>
              </div>

              {/* Back to all courses link */}
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#E65100] transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Browse all engineering courses</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
