import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Cpu } from 'lucide-react'

export default function CppPage() {
  const topics = [
    { id: 1, title: 'C++ Fundamentals', icon: '⚡', lessons: 18 },
    { id: 2, title: 'Object-Oriented C++', icon: '🎯', lessons: 16 },
    { id: 3, title: 'STL & Templates', icon: '📚', lessons: 14 },
    { id: 4, title: 'Modern C++ (C++11/14/17)', icon: '🚀', lessons: 12 },
    { id: 5, title: 'Smart Pointers & RAII', icon: '🔧', lessons: 10 },
    { id: 6, title: 'Multithreading in C++', icon: '🔄', lessons: 9 },
  ]

  const tutorials = [
    { id: 1, title: 'C++ Basics — Variables, Functions & Control Flow', level: 'Beginner', time: '15 min', category: 'Basics' },
    { id: 2, title: 'Object-Oriented Programming in C++ — Classes, Inheritance & Polymorphism', level: 'Intermediate', time: '22 min', category: 'OOP' },
    { id: 3, title: 'C++ STL Containers — vector, map, set & their usage', level: 'Intermediate', time: '18 min', category: 'STL' },
    { id: 4, title: 'Modern C++ Features — auto, lambda, range-based loops & move semantics', level: 'Advanced', time: '20 min', category: 'Modern C++' },
    { id: 5, title: 'Smart Pointers in C++ — unique_ptr, shared_ptr & weak_ptr', level: 'Intermediate', time: '16 min', category: 'Memory' },
    { id: 6, title: 'Multithreading in C++11 — threads, mutex, condition_variable', level: 'Advanced', time: '24 min', category: 'Concurrency' },
  ]

  const courses = [
    { id: 1, title: 'Complete C++ Programming — Beginner to Advanced', lessons: 55, duration: '16 hours', level: 'All Levels', students: '8.9k' },
    { id: 2, title: 'Modern C++ Mastery — C++11/14/17/20 Features & Best Practices', lessons: 38, duration: '11 hours', level: 'Intermediate', students: '6.7k' },
    { id: 3, title: 'C++ STL & Templates Deep Dive', lessons: 30, duration: '9 hours', level: 'Advanced', students: '5.4k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00599C] to-[#0088CC] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Cpu size={16} />
              <span>C++ Programming</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master C++ — High-Performance Programming
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Learn modern C++ from basics to advanced. Master OOP, STL, templates, smart pointers, and build high-performance applications with C++11/14/17/20 features.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">C++ Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0088CC] hover:shadow-lg transition-all cursor-pointer group"
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
            <h2 className="text-2xl font-bold text-[#071A30]">C++ Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#0088CC] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#0088CC] bg-[#0088CC]/10 px-2 py-0.5 rounded">
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
            <h2 className="text-2xl font-bold text-[#071A30]">C++ Courses</h2>
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
                <div className="bg-gradient-to-br from-[#00599C] to-[#0088CC] p-6 text-center">
                  <Cpu size={48} className="mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">C++</h3>
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
