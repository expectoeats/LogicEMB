'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Clock,
  BarChart2,
  CheckCircle2,
  PlayCircle,
  Users,
  Award,
  Download,
  Share2,
  ChevronDown,
  ChevronRight,
  Star,
  Code,
  Lightbulb,
  Target,
  FileText,
  User,
  Calendar,
  TrendingUp
} from 'lucide-react'
import { ALL_COURSES } from '@/lib/courses-data'

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = ALL_COURSES.find((c) => c.id === params.id)
  const [openModules, setOpenModules] = useState<number[]>([0])
  const [activeSection, setActiveSection] = useState('overview')

  if (!course) {
    notFound()
  }

  const toggleModule = (index: number) => {
    setOpenModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section
        className="relative h-[280px] flex items-end pb-8"
        style={{ background: course.bannerGradient }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                {course.category}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E65100] text-white">
                {course.badge}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
              {course.title}
            </h1>
            <p className="text-white/90 text-base leading-relaxed drop-shadow-sm">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <strong>{course.rating}</strong> ({course.reviewsCount} reviews)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Users size={16} />
                {course.enrolled}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                {course.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8">
          {/* Left Sidebar Navigation - STICKY */}
          <aside className="lg:sticky lg:top-20 h-fit">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-[#071A30] to-[#0D2847] text-white p-4">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <BookOpen size={18} />
                  Course Navigation
                </h3>
              </div>
              <nav className="p-2">
                <button
                  onClick={() => scrollToSection('overview')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeSection === 'overview'
                      ? 'bg-[#E65100] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Target size={16} />
                  Overview
                </button>
                <button
                  onClick={() => scrollToSection('what-you-learn')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeSection === 'what-you-learn'
                      ? 'bg-[#E65100] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Lightbulb size={16} />
                  What You'll Learn
                </button>
                <button
                  onClick={() => scrollToSection('syllabus')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeSection === 'syllabus'
                      ? 'bg-[#E65100] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText size={16} />
                  Course Syllabus
                </button>
                <button
                  onClick={() => scrollToSection('prerequisites')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeSection === 'prerequisites'
                      ? 'bg-[#E65100] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <CheckCircle2 size={16} />
                  Prerequisites
                </button>
                <button
                  onClick={() => scrollToSection('instructor')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeSection === 'instructor'
                      ? 'bg-[#E65100] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User size={16} />
                  Instructor
                </button>
              </nav>

              {/* Enroll CTA in Sidebar */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <button className="w-full py-3 bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <PlayCircle size={20} />
                  Enroll Free Now
                </button>
                <div className="flex items-center justify-center gap-3 mt-3 text-xs text-gray-500">
                  <button className="flex items-center gap-1 hover:text-[#E65100]">
                    <Share2 size={14} />
                    Share
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#E65100]">
                    <Download size={14} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="space-y-10">
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Course Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>{course.description}</p>
                <p>
                  This comprehensive {course.level.toLowerCase()}-level course is designed for engineers and developers
                  who want to master {course.category.toLowerCase()} from fundamentals to advanced applications.
                  Through hands-on projects and real-world examples, you'll gain practical skills that are immediately
                  applicable to your work.
                </p>
              </div>

              {/* Quick Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 text-center">
                  <Clock className="mx-auto text-blue-600 mb-2" size={24} />
                  <p className="text-2xl font-bold text-blue-900">{course.duration.split(' ')[0]}</p>
                  <p className="text-xs text-blue-700 mt-1">Duration</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 text-center">
                  <BookOpen className="mx-auto text-green-600 mb-2" size={24} />
                  <p className="text-2xl font-bold text-green-900">{course.modulesCount}</p>
                  <p className="text-xs text-green-700 mt-1">Modules</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 text-center">
                  <BarChart2 className="mx-auto text-purple-600 mb-2" size={24} />
                  <p className="text-2xl font-bold text-purple-900">{course.level}</p>
                  <p className="text-xs text-purple-700 mt-1">Level</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 text-center">
                  <Award className="mx-auto text-orange-600 mb-2" size={24} />
                  <p className="text-2xl font-bold text-orange-900">Yes</p>
                  <p className="text-xs text-orange-700 mt-1">Certificate</p>
                </div>
              </div>
            </section>

            {/* What You'll Learn */}
            <section id="what-you-learn" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-900 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Syllabus */}
            <section id="syllabus" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Complete Course Syllabus
              </h2>
              <div className="space-y-3">
                {course.syllabus.map((module, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-left flex-1">
                        <span className="w-8 h-8 rounded-full bg-[#E65100] text-white flex items-center justify-center font-bold text-sm shrink-0">
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#071A30] text-base">{module.title}</h3>
                          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                            <Clock size={12} />
                            {module.duration} · {module.lessons.length} lessons
                          </p>
                        </div>
                      </div>
                      {openModules.includes(idx) ? (
                        <ChevronDown size={20} className="text-gray-400 shrink-0" />
                      ) : (
                        <ChevronRight size={20} className="text-gray-400 shrink-0" />
                      )}
                    </button>

                    {openModules.includes(idx) && (
                      <div className="px-5 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIdx) => (
                            <li
                              key={lessonIdx}
                              className="flex items-start gap-2 text-sm text-gray-700 py-2 hover:text-[#E65100] cursor-pointer"
                            >
                              <PlayCircle size={16} className="shrink-0 mt-0.5 text-[#E65100]" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Prerequisites
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Code size={20} />
                  Before You Start
                </h3>
                <ul className="space-y-2">
                  {course.prerequisites.map((prereq, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-blue-800">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Instructor Info */}
            <section id="instructor" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#071A30] mb-4 pb-2 border-b-2 border-[#E65100]">
                Your Instructor
              </h2>
              <div className="bg-gradient-to-br from-[#071A30] to-[#0D2847] text-white rounded-xl p-6">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 bg-[#E65100] rounded-full flex items-center justify-center font-black text-3xl shrink-0">
                    {course.instructor.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{course.instructor}</h3>
                    <p className="text-sm text-gray-300 mb-3">{course.instructorRole}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Our instructors are practicing engineers with years of real-world experience in{' '}
                      {course.category.toLowerCase()}. They bring industry best practices, hands-on expertise,
                      and passion for teaching into every lesson.
                    </p>
                    <div className="flex items-center gap-6 mt-4 text-sm">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp size={16} className="text-[#FF9418]" />
                        <span>Expert Level</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={16} className="text-[#FF9418]" />
                        <span>{course.enrolled.split('+')[0]}K+ Students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Enrollment CTA Bottom */}
            <section className="bg-gradient-to-r from-[#071A30] via-[#0D2847] to-[#071A30] text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Ready to Start Learning?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of engineers mastering {course.category.toLowerCase()} with hands-on projects,
                real-world examples, and industry-proven techniques.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#F4511E] via-[#E65100] to-[#BF360C] text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-2 mx-auto">
                <PlayCircle size={24} />
                Enroll in This Course — 100% Free
              </button>
              <p className="text-xs text-gray-400 mt-4">
                No credit card required · Instant access · Certificate upon completion
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
