import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Terminal } from 'lucide-react'

export default function JavaScriptPage() {
  const topics = [
    { id: 1, title: 'JavaScript Basics', icon: '📘', lessons: 15 },
    { id: 2, title: 'ES6+ Features', icon: '⚡', lessons: 12 },
    { id: 3, title: 'DOM Manipulation', icon: '🌐', lessons: 10 },
    { id: 4, title: 'Async/Await & Promises', icon: '⏳', lessons: 8 },
    { id: 5, title: 'Array & Object Methods', icon: '📊', lessons: 14 },
    { id: 6, title: 'Event Handling', icon: '🖱️', lessons: 9 },
  ]

  const tutorials = [
    { id: 1, title: 'Getting Started with JavaScript — Variables, Data Types & Operators', level: 'Beginner', time: '12 min', category: 'Basics' },
    { id: 2, title: 'Arrow Functions & Template Literals in ES6', level: 'Beginner', time: '8 min', category: 'ES6+' },
    { id: 3, title: 'Understanding the DOM — Selecting & Manipulating Elements', level: 'Intermediate', time: '15 min', category: 'DOM' },
    { id: 4, title: 'Asynchronous JavaScript — Callbacks, Promises & Async/Await', level: 'Intermediate', time: '18 min', category: 'Async' },
    { id: 5, title: 'Modern Array Methods — map(), filter(), reduce() & more', level: 'Intermediate', time: '14 min', category: 'Arrays' },
    { id: 6, title: 'Event Listeners & Event Delegation in JavaScript', level: 'Beginner', time: '10 min', category: 'Events' },
  ]

  const courses = [
    { id: 1, title: 'Complete JavaScript Course — From Basics to Advanced', lessons: 45, duration: '12 hours', level: 'All Levels', students: '15.3k' },
    { id: 2, title: 'JavaScript ES6+ Modern Features & Best Practices', lessons: 30, duration: '8 hours', level: 'Intermediate', students: '9.2k' },
    { id: 3, title: 'DOM Manipulation & Browser APIs Mastery', lessons: 25, duration: '6 hours', level: 'Beginner', students: '7.8k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F7DF1E] to-[#FFD700] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <Terminal size={16} />
              <span>JavaScript Programming</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#071A30] mb-4">
              Master JavaScript — The Language of the Web
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              Learn modern JavaScript from fundamentals to advanced concepts. Master ES6+, async programming, DOM manipulation, and build dynamic web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">JavaScript Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#F7DF1E] hover:shadow-lg transition-all cursor-pointer group"
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
            <h2 className="text-2xl font-bold text-[#071A30]">JavaScript Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#F7DF1E] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#F7DF1E] bg-[#F7DF1E]/10 px-2 py-0.5 rounded">
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
            <h2 className="text-2xl font-bold text-[#071A30]">JavaScript Courses</h2>
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
                <div className="bg-gradient-to-br from-[#F7DF1E] to-[#FFD700] p-6 text-center">
                  <Code size={48} className="mx-auto mb-3 text-[#071A30]" />
                  <h3 className="text-xl font-bold text-[#071A30]">JavaScript</h3>
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
