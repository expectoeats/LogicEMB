import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Cpu } from 'lucide-react'

export default function MicrocontrollersPage() {
  const topics = [
    { id: 1, title: 'STM32 Programming', icon: '🔧', lessons: 20 },
    { id: 2, title: 'ESP32 & IoT', icon: '📡', lessons: 18 },
    { id: 3, title: 'Arduino Basics', icon: '⚙️', lessons: 15 },
    { id: 4, title: 'ARM Cortex-M', icon: '💻', lessons: 16 },
    { id: 5, title: 'Nordic nRF Series', icon: '📶', lessons: 12 },
    { id: 6, title: 'PIC Microcontrollers', icon: '🔌', lessons: 10 },
  ]

  const tutorials = [
    { id: 1, title: 'Getting Started with STM32 — GPIO, Timers & UART Configuration', level: 'Beginner', time: '18 min', category: 'STM32' },
    { id: 2, title: 'ESP32 WiFi & Bluetooth — Wireless Communication Basics', level: 'Intermediate', time: '20 min', category: 'ESP32' },
    { id: 3, title: 'Arduino Programming — Digital I/O, Analog Reading & PWM', level: 'Beginner', time: '14 min', category: 'Arduino' },
    { id: 4, title: 'ARM Cortex-M DMA — Direct Memory Access for High-Speed Data Transfer', level: 'Advanced', time: '25 min', category: 'ARM' },
    { id: 5, title: 'FreeRTOS on Microcontrollers — Task Scheduling & Inter-Task Communication', level: 'Advanced', time: '22 min', category: 'RTOS' },
    { id: 6, title: 'Low Power Design for Battery-Operated MCU Projects', level: 'Intermediate', time: '16 min', category: 'Power' },
  ]

  const courses = [
    { id: 1, title: 'Complete STM32 Programming — From Basics to Advanced', lessons: 50, duration: '16 hours', level: 'All Levels', students: '11.4k' },
    { id: 2, title: 'ESP32 IoT Development — WiFi, Bluetooth & Cloud Integration', lessons: 38, duration: '11 hours', level: 'Intermediate', students: '9.8k' },
    { id: 3, title: 'ARM Cortex-M Firmware Development — Bare-Metal & RTOS', lessons: 42, duration: '13 hours', level: 'Advanced', students: '7.6k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E7D32] to-[#43A047] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Cpu size={16} />
              <span>Microcontrollers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master Microcontrollers — Build Smart Embedded Systems
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Learn microcontroller programming from basics to advanced. Master STM32, ESP32, Arduino, ARM Cortex-M, and build real-world embedded projects.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Microcontroller Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#43A047] hover:shadow-lg transition-all cursor-pointer group"
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
            <h2 className="text-2xl font-bold text-[#071A30]">Microcontroller Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#43A047] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#43A047] bg-[#43A047]/10 px-2 py-0.5 rounded">
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
            <h2 className="text-2xl font-bold text-[#071A30]">Microcontroller Courses</h2>
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
                <div className="bg-gradient-to-br from-[#2E7D32] to-[#43A047] p-6 text-center">
                  <Cpu size={48} className="mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">Microcontrollers</h3>
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
