import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cpu, Zap, BookOpen, Code2, Download } from 'lucide-react'

const EMBEDDED_TOPICS = [
  { id: 1, title: 'STM32 Microcontrollers', icon: '🔧', articles: 28, color: 'bg-blue-50' },
  { id: 2, title: 'ARM Cortex-M Programming', icon: '⚙️', articles: 22, color: 'bg-green-50' },
  { id: 3, title: 'FreeRTOS & RTOS', icon: '🔄', articles: 18, color: 'bg-purple-50' },
  { id: 4, title: 'ESP32 & IoT', icon: '📡', articles: 25, color: 'bg-orange-50' },
  { id: 5, title: 'Bare-Metal Programming', icon: '💻', articles: 15, color: 'bg-red-50' },
  { id: 6, title: 'UART, SPI, I2C Protocols', icon: '🔌', articles: 20, color: 'bg-yellow-50' },
  { id: 7, title: 'Firmware Development', icon: '🛠️', articles: 24, color: 'bg-indigo-50' },
  { id: 8, title: 'Hardware Interfacing', icon: '🔗', articles: 19, color: 'bg-pink-50' },
]

const EMBEDDED_ARTICLES = [
  {
    id: 1,
    category: 'STM32',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'Getting Started with STM32: Complete GPIO Programming Guide',
    excerpt: 'Learn how to configure GPIO pins, read inputs, and control outputs on STM32 microcontrollers using HAL and register-level programming.',
    difficulty: 'Beginner',
    difficultyColor: 'bg-green-100 text-green-700',
    readTime: '12 min read',
  },
  {
    id: 2,
    category: 'ARM Cortex',
    categoryColor: 'bg-purple-100 text-purple-700',
    title: 'Understanding ARM Cortex-M Architecture and Memory Map',
    excerpt: 'Deep dive into ARM Cortex-M processor architecture, register structure, and memory organization for embedded systems.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    readTime: '15 min read',
  },
  {
    id: 3,
    category: 'FreeRTOS',
    categoryColor: 'bg-orange-100 text-orange-700',
    title: 'FreeRTOS Task Management and Scheduling',
    excerpt: 'Master task creation, priorities, and scheduling in FreeRTOS for real-time embedded applications.',
    difficulty: 'Advanced',
    difficultyColor: 'bg-orange-100 text-orange-700',
    readTime: '18 min read',
  },
  {
    id: 4,
    category: 'ESP32',
    categoryColor: 'bg-green-100 text-green-700',
    title: 'ESP32 WiFi and Bluetooth Programming Tutorial',
    excerpt: 'Complete guide to using ESP32 wireless capabilities with practical examples and code snippets.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    readTime: '14 min read',
  },
  {
    id: 5,
    category: 'Protocols',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    title: 'UART Communication Protocol: Implementation and Debugging',
    excerpt: 'Learn UART fundamentals, configuration, data transmission, and common debugging techniques.',
    difficulty: 'Beginner',
    difficultyColor: 'bg-green-100 text-green-700',
    readTime: '10 min read',
  },
  {
    id: 6,
    category: 'Bare-Metal',
    categoryColor: 'bg-red-100 text-red-700',
    title: 'Bare-Metal C Programming for Embedded Systems',
    excerpt: 'Write firmware without operating systems - startup code, linker scripts, and memory management.',
    difficulty: 'Advanced',
    difficultyColor: 'bg-orange-100 text-orange-700',
    readTime: '20 min read',
  },
]

const EMBEDDED_COURSES = [
  {
    id: 1,
    icon: '🎓',
    title: 'Complete STM32 Embedded Systems Course',
    description: 'From basics to advanced topics - GPIO, timers, interrupts, DMA, and real-world projects.',
    lessons: '42 Lessons',
    duration: '8 hours',
    level: 'Beginner to Advanced',
  },
  {
    id: 2,
    icon: '⚡',
    title: 'ARM Cortex-M Programming Masterclass',
    description: 'Master ARM architecture, assembly language, and low-level programming techniques.',
    lessons: '35 Lessons',
    duration: '6 hours',
    level: 'Intermediate',
  },
  {
    id: 3,
    icon: '🔄',
    title: 'Real-Time Operating Systems (RTOS) with FreeRTOS',
    description: 'Learn task management, semaphores, queues, and multitasking in embedded systems.',
    lessons: '28 Lessons',
    duration: '5 hours',
    level: 'Advanced',
  },
]

export default function EmbeddedPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-[#FF9418]" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold text-[#071A30]">
                Embedded Systems
              </h1>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Master microcontroller programming, firmware development, and real-time operating systems. 
              Learn STM32, ARM Cortex-M, ESP32, and industry-standard embedded C programming.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#tutorials"
                className="px-6 py-3 bg-[#FF9418] text-white font-medium rounded hover:bg-[#E58110] transition-colors"
              >
                Start Learning
              </Link>
              <Link
                href="#courses"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:border-[#FF9418] hover:text-[#FF9418] transition-colors"
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 bg-white" id="topics">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Embedded Systems Topics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {EMBEDDED_TOPICS.map((topic) => (
              <Link
                key={topic.id}
                href={`/embedded/${topic.id}`}
                className={`p-5 rounded-lg border border-gray-200 hover:border-[#FF9418] hover:shadow-md transition-all ${topic.color}`}
              >
                <span className="text-4xl block mb-2">{topic.icon}</span>
                <h3 className="font-semibold text-[#071A30] text-sm mb-1">{topic.title}</h3>
                <p className="text-xs text-gray-500">{topic.articles} Articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tutorials */}
      <section className="py-12 bg-[#F9F9F9]" id="tutorials">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">Latest Embedded Tutorials</h2>
            <Link
              href="/embedded/tutorials"
              className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EMBEDDED_ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={`/embedded/article/${article.id}`}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-[#FF9418] transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${article.difficultyColor}`}>
                    {article.difficulty}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#071A30] line-clamp-2 leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <BookOpen size={14} />
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-white" id="courses">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Featured Embedded Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EMBEDDED_COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:border-[#FF9418] transition-all"
              >
                <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center border-b border-gray-100">
                  <span className="text-6xl">{course.icon}</span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-semibold text-[#071A30] leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BookOpen size={12} />
                      {course.lessons}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Zap size={12} />
                      {course.duration}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded inline-block">
                    {course.level}
                  </div>
                  <Link
                    href={`/courses/embedded/${course.id}`}
                    className="block w-full px-4 py-2 bg-[#FF9418] text-white text-sm font-medium text-center rounded hover:bg-[#E58110] transition-colors mt-3"
                  >
                    Enroll Free
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Embedded Systems Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Code2 className="text-[#FF9418] mb-3" size={32} />
              <h3 className="text-lg font-semibold text-[#071A30] mb-2">Code Examples</h3>
              <p className="text-sm text-gray-600 mb-4">
                Download ready-to-use code examples for STM32, ESP32, and other microcontrollers.
              </p>
              <Link href="/embedded/examples" className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1">
                Browse Examples <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Download className="text-[#FF9418] mb-3" size={32} />
              <h3 className="text-lg font-semibold text-[#071A30] mb-2">Datasheets & Docs</h3>
              <p className="text-sm text-gray-600 mb-4">
                Access microcontroller datasheets, reference manuals, and technical documentation.
              </p>
              <Link href="/embedded/resources" className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1">
                View Resources <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
