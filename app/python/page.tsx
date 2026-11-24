import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2, Zap, BookOpen, Terminal, Download } from 'lucide-react'

const PYTHON_TOPICS = [
  { id: 1, title: 'Python Basics', icon: '🐍', articles: 32, color: 'bg-green-50' },
  { id: 2, title: 'Hardware Automation', icon: '🔧', articles: 24, color: 'bg-blue-50' },
  { id: 3, title: 'PySerial & UART', icon: '📡', articles: 18, color: 'bg-purple-50' },
  { id: 4, title: 'PyVISA & Instruments', icon: '📊', articles: 20, color: 'bg-orange-50' },
  { id: 5, title: 'Data Analysis', icon: '📈', articles: 28, color: 'bg-red-50' },
  { id: 6, title: 'Raspberry Pi', icon: '🍓', articles: 22, color: 'bg-pink-50' },
  { id: 7, title: 'MicroPython', icon: '⚡', articles: 16, color: 'bg-yellow-50' },
  { id: 8, title: 'GUI with Tkinter', icon: '🖥️', articles: 15, color: 'bg-indigo-50' },
]

const PYTHON_ARTICLES = [
  {
    id: 1,
    category: 'Python Basics',
    categoryColor: 'bg-green-100 text-green-700',
    title: 'Python Programming Fundamentals: Variables, Data Types, and Control Flow',
    excerpt: 'Complete guide to Python basics covering variables, data types, operators, and control structures with practical examples.',
    difficulty: 'Beginner',
    difficultyColor: 'bg-green-100 text-green-700',
    readTime: '10 min read',
  },
  {
    id: 2,
    category: 'PySerial',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'Serial Communication with Python: PySerial Tutorial',
    excerpt: 'Learn to communicate with microcontrollers and hardware devices using Python PySerial library.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    readTime: '12 min read',
  },
  {
    id: 3,
    category: 'Hardware',
    categoryColor: 'bg-purple-100 text-purple-700',
    title: 'Automating Test Equipment with Python and PyVISA',
    excerpt: 'Control oscilloscopes, multimeters, and power supplies programmatically using PyVISA and SCPI commands.',
    difficulty: 'Advanced',
    difficultyColor: 'bg-orange-100 text-orange-700',
    readTime: '15 min read',
  },
  {
    id: 4,
    category: 'Raspberry Pi',
    categoryColor: 'bg-pink-100 text-pink-700',
    title: 'Getting Started with Raspberry Pi and Python GPIO',
    excerpt: 'Control LEDs, read sensors, and interface with hardware using Python on Raspberry Pi.',
    difficulty: 'Beginner',
    difficultyColor: 'bg-green-100 text-green-700',
    readTime: '11 min read',
  },
  {
    id: 5,
    category: 'Data Analysis',
    categoryColor: 'bg-orange-100 text-orange-700',
    title: 'Python Data Visualization with Matplotlib and Pandas',
    excerpt: 'Analyze and visualize sensor data, test results, and measurements using Python libraries.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    readTime: '14 min read',
  },
  {
    id: 6,
    category: 'MicroPython',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    title: 'MicroPython on ESP32: Complete Programming Guide',
    excerpt: 'Run Python directly on microcontrollers - setup, GPIO control, WiFi, and sensor interfacing.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    readTime: '16 min read',
  },
]

const PYTHON_COURSES = [
  {
    id: 1,
    icon: '🎓',
    title: 'Python for Electronics Engineers',
    description: 'Complete Python course focused on hardware automation, test scripting, and embedded systems.',
    lessons: '38 Lessons',
    duration: '7 hours',
    level: 'Beginner to Intermediate',
  },
  {
    id: 2,
    icon: '🔬',
    title: 'Hardware Test Automation with Python',
    description: 'Build automated test systems using Python, PyVISA, and industry-standard instruments.',
    lessons: '30 Lessons',
    duration: '5.5 hours',
    level: 'Intermediate',
  },
  {
    id: 3,
    icon: '🍓',
    title: 'Raspberry Pi Projects with Python',
    description: 'Learn IoT, home automation, and hardware interfacing with Raspberry Pi and Python.',
    lessons: '25 Lessons',
    duration: '4 hours',
    level: 'Beginner',
  },
]

export default function PythonPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-[#FF9418]" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold text-[#071A30]">
                Python Programming
              </h1>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Learn Python for hardware automation, test scripting, data analysis, and embedded systems. 
              Master PySerial, PyVISA, Raspberry Pi, and MicroPython for real-world applications.
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
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Python Topics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PYTHON_TOPICS.map((topic) => (
              <Link
                key={topic.id}
                href={`/python/${topic.id}`}
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
            <h2 className="text-2xl font-bold text-[#071A30]">Latest Python Tutorials</h2>
            <Link
              href="/python/tutorials"
              className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PYTHON_ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={`/python/article/${article.id}`}
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
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Featured Python Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PYTHON_COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:border-[#FF9418] transition-all"
              >
                <div className="h-32 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center border-b border-gray-100">
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
                  <div className="text-xs text-gray-500 bg-green-50 px-2 py-1 rounded inline-block">
                    {course.level}
                  </div>
                  <Link
                    href={`/courses/python/${course.id}`}
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

      {/* Code Examples Section */}
      <section className="py-12 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Python Code Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Code2 className="text-[#FF9418] mb-3" size={32} />
              <h3 className="text-lg font-semibold text-[#071A30] mb-2">Hardware Scripts</h3>
              <p className="text-sm text-gray-600 mb-4">
                Download Python scripts for serial communication, instrument control, and automation.
              </p>
              <Link href="/python/examples" className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1">
                Browse Examples <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Download className="text-[#FF9418] mb-3" size={32} />
              <h3 className="text-lg font-semibold text-[#071A30] mb-2">Libraries & Tools</h3>
              <p className="text-sm text-gray-600 mb-4">
                Essential Python libraries for hardware engineers - PySerial, PyVISA, RPi.GPIO, and more.
              </p>
              <Link href="/python/libraries" className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1">
                View Libraries <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
