import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Layers } from 'lucide-react'

export default function PCBDesignPage() {
  const topics = [
    { id: 1, title: 'Schematic Design', icon: '📐', lessons: 18 },
    { id: 2, title: 'PCB Layout', icon: '🗺️', lessons: 20 },
    { id: 3, title: 'Multi-Layer Boards', icon: '📚', lessons: 16 },
    { id: 4, title: 'Signal Integrity', icon: '📊', lessons: 14 },
    { id: 5, title: 'High-Speed Design', icon: '⚡', lessons: 12 },
    { id: 6, title: 'Manufacturing & DFM', icon: '🏭', lessons: 10 },
  ]

  const tutorials = [
    { id: 1, title: 'PCB Design Basics — Schematic Capture & Component Selection', level: 'Beginner', time: '16 min', category: 'Basics' },
    { id: 2, title: 'Multi-Layer PCB Stack-Up — Layer Configuration & Routing Strategy', level: 'Intermediate', time: '22 min', category: 'Layout' },
    { id: 3, title: 'High-Speed PCB Design — Impedance Control & Signal Integrity', level: 'Advanced', time: '25 min', category: 'High-Speed' },
    { id: 4, title: 'Ground Planes & Power Distribution — Best Practices for Mixed-Signal PCBs', level: 'Intermediate', time: '20 min', category: 'Grounding' },
    { id: 5, title: 'Via Types & Usage — Through-Hole, Blind & Buried Vias Explained', level: 'Intermediate', time: '14 min', category: 'Vias' },
    { id: 6, title: 'Design for Manufacturing (DFM) — PCB Fabrication Guidelines', level: 'Advanced', time: '18 min', category: 'Manufacturing' },
  ]

  const courses = [
    { id: 1, title: 'Complete PCB Design Course — From Schematic to Manufacturing', lessons: 48, duration: '14 hours', level: 'All Levels', students: '8.2k' },
    { id: 2, title: 'Advanced PCB Layout — Multi-Layer & High-Speed Design', lessons: 36, duration: '11 hours', level: 'Advanced', students: '6.5k' },
    { id: 3, title: 'Signal Integrity & EMC — PCB Design for Reliability', lessons: 28, duration: '9 hours', level: 'Advanced', students: '5.3k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1976D2] to-[#42A5F5] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Layers size={16} />
              <span>PCB Design</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master PCB Design — From Schematic to Production
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Learn PCB design from basics to advanced. Master schematic capture, multi-layer layout, signal integrity, high-speed design, and manufacturing guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">PCB Design Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#42A5F5] hover:shadow-lg transition-all cursor-pointer group"
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
            <h2 className="text-2xl font-bold text-[#071A30]">PCB Design Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#42A5F5] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#42A5F5] bg-[#42A5F5]/10 px-2 py-0.5 rounded">
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
            <h2 className="text-2xl font-bold text-[#071A30]">PCB Design Courses</h2>
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
                <div className="bg-gradient-to-br from-[#1976D2] to-[#42A5F5] p-6 text-center">
                  <Layers size={48} className="mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">PCB Design</h3>
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
