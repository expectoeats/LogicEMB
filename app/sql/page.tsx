import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Database } from 'lucide-react'

export default function SQLPage() {
  const topics = [
    { id: 1, title: 'SQL Fundamentals', icon: '🗄️', lessons: 16 },
    { id: 2, title: 'Queries & Joins', icon: '🔗', lessons: 14 },
    { id: 3, title: 'Database Design', icon: '📐', lessons: 12 },
    { id: 4, title: 'Indexes & Performance', icon: '⚡', lessons: 10 },
    { id: 5, title: 'Stored Procedures', icon: '📝', lessons: 9 },
    { id: 6, title: 'Transactions & ACID', icon: '🔒', lessons: 8 },
  ]

  const tutorials = [
    { id: 1, title: 'SQL Basics — SELECT, WHERE, ORDER BY & Basic Queries', level: 'Beginner', time: '12 min', category: 'Basics' },
    { id: 2, title: 'SQL Joins — INNER JOIN, LEFT JOIN, RIGHT JOIN & FULL OUTER JOIN', level: 'Intermediate', time: '18 min', category: 'Joins' },
    { id: 3, title: 'Database Normalization — 1NF, 2NF, 3NF & BCNF Explained', level: 'Intermediate', time: '20 min', category: 'Design' },
    { id: 4, title: 'SQL Aggregate Functions — COUNT, SUM, AVG, MIN, MAX & GROUP BY', level: 'Beginner', time: '14 min', category: 'Functions' },
    { id: 5, title: 'Indexes in SQL — Clustered, Non-Clustered & Performance Optimization', level: 'Advanced', time: '22 min', category: 'Performance' },
    { id: 6, title: 'Stored Procedures & Functions — Creating & Using in SQL', level: 'Intermediate', time: '16 min', category: 'Procedures' },
  ]

  const courses = [
    { id: 1, title: 'Complete SQL Course — Database Fundamentals to Advanced', lessons: 45, duration: '13 hours', level: 'All Levels', students: '11.8k' },
    { id: 2, title: 'SQL Query Mastery — Joins, Subqueries & Complex Queries', lessons: 32, duration: '9 hours', level: 'Intermediate', students: '8.3k' },
    { id: 3, title: 'Database Design & Optimization — Indexing & Performance Tuning', lessons: 28, duration: '8 hours', level: 'Advanced', students: '6.5k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00758F] to-[#00A4BD] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Database size={16} />
              <span>SQL Programming</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master SQL — Database Programming & Design
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Learn SQL from basics to advanced. Master queries, joins, database design, indexing, stored procedures, and optimize database performance.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">SQL Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#00A4BD] hover:shadow-lg transition-all cursor-pointer group"
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
            <h2 className="text-2xl font-bold text-[#071A30]">SQL Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#00A4BD] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#00A4BD] bg-[#00A4BD]/10 px-2 py-0.5 rounded">
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
            <h2 className="text-2xl font-bold text-[#071A30]">SQL Courses</h2>
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
                <div className="bg-gradient-to-br from-[#00758F] to-[#00A4BD] p-6 text-center">
                  <Database size={48} className="mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">SQL</h3>
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
