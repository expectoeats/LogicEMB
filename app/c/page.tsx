import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Terminal } from 'lucide-react'

export default function CPage() {
  const topics = [
    { id: 1, title: 'C Fundamentals', icon: '💻', lessons: 16 },
    { id: 2, title: 'Pointers & Memory', icon: '🎯', lessons: 14 },
    { id: 3, title: 'Data Structures', icon: '📊', lessons: 12 },
    { id: 4, title: 'File Handling', icon: '📁', lessons: 8 },
    { id: 5, title: 'Dynamic Memory', icon: '🔧', lessons: 10 },
    { id: 6, title: 'Algorithms in C', icon: '⚡', lessons: 11 },
  ]

  const tutorials = [
    { id: 1, title: 'C Programming Basics — Variables, Data Types & Operators', level: 'Beginner', time: '14 min', category: 'Basics' },
    { id: 2, title: 'Understanding Pointers in C — Address, Dereferencing & Pointer Arithmetic', level: 'Intermediate', time: '20 min', category: 'Pointers' },
    { id: 3, title: 'Arrays and Strings in C — Declaration, Initialization & Manipulation', level: 'Beginner', time: '16 min', category: 'Arrays' },
    { id: 4, title: 'Dynamic Memory Allocation — malloc(), calloc(), realloc() & free()', level: 'Intermediate', time: '18 min', category: 'Memory' },
    { id: 5, title: 'Data Structures in C — Linked Lists, Stacks, Queues & Trees', level: 'Advanced', time: '25 min', category: 'DSA' },
    { id: 6, title: 'File Operations in C — Reading, Writing & Binary Files', level: 'Intermediate', time: '12 min', category: 'Files' },
  ]

  const courses = [
    { id: 1, title: 'Complete C Programming — From Basics to Advanced', lessons: 48, duration: '14 hours', level: 'All Levels', students: '10.2k' },
    { id: 2, title: 'Mastering Pointers & Memory Management in C', lessons: 32, duration: '9 hours', level: 'Intermediate', students: '7.5k' },
    { id: 3, title: 'Data Structures & Algorithms in C', lessons: 40, duration: '12 hours', level: 'Advanced', students: '8.8k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00599C] to-[#004B87] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Terminal size={16} />
              <span>C Programming</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master C — The Foundation of Programming
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Learn C programming from fundamentals to advanced concepts. Master pointers, memory management, data structures, and build efficient system-level applications.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">C Programming Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#00599C] hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-bold text-[#071A30] mb-2 group-hover:text-[#E65100] transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-600">{topic.lessons} lessons available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">C Programming Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#00599C] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#00599C] bg-[#00599C]/10 px-2 py-0.5 rounded">
                        {tutorial.category}
                      </span>
                      <span className="text-xs text-gray-500">{tutorial.level}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{tutorial.time} read</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#071A30] group-hover:text-[#E65100] transition-colors">
                      {tutorial.title}
                    </h3>
                  </div>
                  <BookOpen className="text-gray-400 group-hover:text-[#E65100] transition-colors" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">C Programming Courses</h2>
            <Link href="/courses" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-[#00599C] to-[#004B87] p-6 text-center">
                  <Code size={48} className="mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">C Programming</h3>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[#071A30] mb-3 leading-snug group-hover:text-[#E65100] transition-colors">
                    {course.title}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span>📚 {course.lessons} lessons</span>
                      <span>⏱️ {course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📊 {course.level}</span>
                      <span>👥 {course.students}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#E65100] text-white py-2 rounded-lg font-semibold hover:bg-[#BF360C] transition-colors">
                    Enroll Free
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
