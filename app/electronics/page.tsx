import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Lightbulb } from 'lucide-react'

export default function ElectronicsPage() {
  const topics = [
    { id: 1, title: 'Circuit Fundamentals', icon: '⚡', lessons: 20 },
    { id: 2, title: 'Op-Amps & Amplifiers', icon: '📊', lessons: 16 },
    { id: 3, title: 'Power Electronics', icon: '🔋', lessons: 18 },
    { id: 4, title: 'Digital Electronics', icon: '🔢', lessons: 15 },
    { id: 5, title: 'Analog Circuits', icon: '📡', lessons: 14 },
    { id: 6, title: 'Sensors & Actuators', icon: '🎚️', lessons: 12 },
  ]

  const tutorials = [
    { id: 1, title: 'Electronics Basics — Ohms Law, Kirchhoffs Laws & Circuit Analysis', level: 'Beginner', time: '16 min', category: 'Basics' },
    { id: 2, title: 'Op-Amp Circuits — Inverting, Non-Inverting & Differential Amplifiers', level: 'Intermediate', time: '20 min', category: 'Op-Amps' },
    { id: 3, title: 'MOSFET & BJT — Understanding Transistors & Switching Circuits', level: 'Intermediate', time: '18 min', category: 'Transistors' },
    { id: 4, title: 'Buck Converter Design — Step-Down DC-DC Power Supply Basics', level: 'Advanced', time: '24 min', category: 'Power' },
    { id: 5, title: 'Digital Logic Gates — AND, OR, NOT, NAND, NOR & XOR Gates', level: 'Beginner', time: '12 min', category: 'Digital' },
    { id: 6, title: 'Signal Conditioning for Sensors — ADC, Filtering & Noise Reduction', level: 'Intermediate', time: '22 min', category: 'Sensors' },
  ]

  const courses = [
    { id: 1, title: 'Complete Electronics Course — From Basics to Advanced Circuits', lessons: 55, duration: '17 hours', level: 'All Levels', students: '14.1k' },
    { id: 2, title: 'Power Electronics & SMPS Design — Buck, Boost & Buck-Boost Converters', lessons: 40, duration: '12 hours', level: 'Advanced', students: '9.3k' },
    { id: 3, title: 'Analog Circuit Design — Op-Amps, Filters & Signal Processing', lessons: 35, duration: '10 hours', level: 'Intermediate', students: '11.2k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#D32F2F] to-[#F44336] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Lightbulb size={16} />
              <span>Electronics Engineering</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master Electronics — From Circuits to Power Systems
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Learn electronics from fundamentals to advanced concepts. Master circuit analysis, op-amps, power electronics, digital logic, and build real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Electronics Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#F44336] hover:shadow-lg transition-all cursor-pointer group"
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
            <h2 className="text-2xl font-bold text-[#071A30]">Electronics Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#F44336] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#F44336] bg-[#F44336]/10 px-2 py-0.5 rounded">
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
            <h2 className="text-2xl font-bold text-[#071A30]">Electronics Courses</h2>
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
                <div className="bg-gradient-to-br from-[#D32F2F] to-[#F44336] p-6 text-center">
                  <Lightbulb size={48} className="mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">Electronics</h3>
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
