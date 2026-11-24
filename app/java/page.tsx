import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Coffee } from 'lucide-react'

export default function JavaPage() {
  const topics = [
    { id: 1, title: 'Java Fundamentals', icon: '☕', lessons: 18 },
    { id: 2, title: 'Object-Oriented Programming', icon: '🎯', lessons: 15 },
    { id: 3, title: 'Collections Framework', icon: '📦', lessons: 12 },
    { id: 4, title: 'Exception Handling', icon: '⚠️', lessons: 8 },
    { id: 5, title: 'Multithreading', icon: '🔄', lessons: 10 },
    { id: 6, title: 'Java Streams & Lambda', icon: '⚡', lessons: 9 },
  ]

  const tutorials = [
    { id: 1, title: 'Java Basics — Variables, Data Types & Control Structures', level: 'Beginner', time: '15 min', category: 'Basics' },
    { id: 2, title: 'Object-Oriented Programming in Java — Classes, Objects & Inheritance', level: 'Beginner', time: '20 min', category: 'OOP' },
    { id: 3, title: 'Java Collections — ArrayList, HashMap, HashSet & More', level: 'Intermediate', time: '18 min', category: 'Collections' },
    { id: 4, title: 'Exception Handling in Java — Try, Catch, Finally & Custom Exceptions', level: 'Intermediate', time: '12 min', category: 'Exceptions' },
    { id: 5, title: 'Multithreading in Java — Threads, Synchronization & ExecutorService', level: 'Advanced', time: '22 min', category: 'Concurrency' },
    { id: 6, title: 'Java 8 Features — Lambda Expressions, Streams & Functional Interfaces', level: 'Intermediate', time: '16 min', category: 'Modern Java' },
  ]

  const courses = [
    { id: 1, title: 'Complete Java Programming — From Zero to Hero', lessons: 50, duration: '15 hours', level: 'All Levels', students: '12.5k' },
    { id: 2, title: 'Java OOP Mastery — Design Patterns & Best Practices', lessons: 35, duration: '10 hours', level: 'Intermediate', students: '8.9k' },
    { id: 3, title: 'Advanced Java — Multithreading, Collections & Streams', lessons: 28, duration: '8 hours', level: 'Advanced', students: '6.3k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E76F00] to-[#FF6B6B] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Coffee size={16} />
              <span>Java Programming</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master Java — Build Enterprise Applications
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Learn Java from scratch to advanced level. Master OOP, collections, multithreading, and build scalable enterprise applications with industry best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Java Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E76F00] hover:shadow-lg transition-all cursor-pointer group"
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
            <h2 className="text-2xl font-bold text-[#071A30]">Java Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#E76F00] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#E76F00] bg-[#E76F00]/10 px-2 py-0.5 rounded">
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
            <h2 className="text-2xl font-bold text-[#071A30]">Java Courses</h2>
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
                <div className="bg-gradient-to-br from-[#E76F00] to-[#FF6B6B] p-6 text-center">
                  <Coffee size={48} className="mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">Java</h3>
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
