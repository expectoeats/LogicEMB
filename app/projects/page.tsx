import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  Wrench, 
  Zap, 
  BookOpen, 
  Star, 
  Clock,
  Cpu,
  Layers,
  Wifi,
  CircuitBoard,
  Radio,
  Box,
  Code
} from 'lucide-react'

const PROJECT_CATEGORIES = [
  { id: 1, title: 'Beginner Projects', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop', count: 15, color: 'bg-green-50 border-green-200', iconColor: 'text-green-600' },
  { id: 2, title: 'Intermediate Projects', image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop', count: 22, color: 'bg-blue-50 border-blue-200', iconColor: 'text-blue-600' },
  { id: 3, title: 'Advanced Projects', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop', count: 18, color: 'bg-purple-50 border-purple-200', iconColor: 'text-purple-600' },
  { id: 4, title: 'PCB Projects', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop', count: 12, color: 'bg-orange-50 border-orange-200', iconColor: 'text-orange-600' },
  { id: 5, title: 'IoT Projects', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop', count: 20, color: 'bg-indigo-50 border-indigo-200', iconColor: 'text-indigo-600' },
  { id: 6, title: 'Arduino Projects', image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=300&fit=crop', count: 25, color: 'bg-red-50 border-red-200', iconColor: 'text-red-600' },
  { id: 7, title: 'Raspberry Pi Projects', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=300&fit=crop', count: 16, color: 'bg-pink-50 border-pink-200', iconColor: 'text-pink-600' },
  { id: 8, title: 'STM32 Projects', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop', count: 14, color: 'bg-yellow-50 border-yellow-200', iconColor: 'text-yellow-600' },
]

const FEATURED_PROJECTS = [
  {
    id: 1,
    category: 'Beginner',
    categoryColor: 'bg-green-100 text-green-700',
    title: 'LED Blink with Arduino: Your First Embedded Project',
    excerpt: 'Build your first electronics project - control an LED using Arduino and understand basic digital output.',
    difficulty: 'Beginner',
    difficultyColor: 'bg-green-100 text-green-700',
    duration: '30 min',
    components: ['Arduino Uno', 'LED', 'Resistor', 'Breadboard'],
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    category: 'Intermediate',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'Temperature Monitoring System with ESP32 and Display',
    excerpt: 'Create a real-time temperature monitoring system using ESP32, DHT sensor, and OLED display.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    duration: '2 hours',
    components: ['ESP32', 'DHT22', 'OLED Display', 'Wires'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    category: 'Advanced',
    categoryColor: 'bg-purple-100 text-purple-700',
    title: 'Custom PCB Design: 4-Layer STM32 Development Board',
    excerpt: 'Design a complete STM32-based development board with USB, debugging interface, and peripherals.',
    difficulty: 'Advanced',
    difficultyColor: 'bg-orange-100 text-orange-700',
    duration: '8 hours',
    components: ['STM32F4', 'USB-C', 'Voltage Regulator', 'PCB'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    category: 'IoT',
    categoryColor: 'bg-indigo-100 text-indigo-700',
    title: 'Smart Home Automation with ESP32 and MQTT',
    excerpt: 'Build a WiFi-based home automation system controlling lights, fans, and monitoring sensors.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    duration: '3 hours',
    components: ['ESP32', 'Relays', 'Sensors', 'MQTT Broker'],
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    category: 'Arduino',
    categoryColor: 'bg-red-100 text-red-700',
    title: 'Line Following Robot with Arduino and IR Sensors',
    excerpt: 'Build an autonomous robot that follows a black line using IR sensors and motor control.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    duration: '2.5 hours',
    components: ['Arduino', 'IR Sensors', 'Motors', 'Chassis'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    category: 'Raspberry Pi',
    categoryColor: 'bg-pink-100 text-pink-700',
    title: 'Weather Station with Raspberry Pi and Python',
    excerpt: 'Create a complete weather monitoring station with data logging and web-based dashboard.',
    difficulty: 'Intermediate',
    difficultyColor: 'bg-blue-100 text-blue-700',
    duration: '4 hours',
    components: ['Raspberry Pi', 'BMP280', 'DHT11', 'Python'],
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&h=400&fit=crop',
  },
]

const PROJECT_KITS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
    title: 'Arduino Starter Kit',
    description: 'Complete beginner kit with Arduino Uno, sensors, LEDs, and components for 10+ projects.',
    projects: '12 Projects',
    level: 'Beginner',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c2?w=600&h=400&fit=crop',
    title: 'STM32 Advanced Kit',
    description: 'Professional development kit for STM32 microcontrollers with debugger and peripherals.',
    projects: '8 Projects',
    level: 'Advanced',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
    title: 'IoT Projects Bundle',
    description: 'ESP32 NodeMCU, sensors, relays, and everything needed for smart IoT projects.',
    projects: '15 Projects',
    level: 'Intermediate',
  },
]

export default function ProjectsPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="text-[#FF9418]" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold text-[#071A30]">
                Electronics Projects
              </h1>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Build real-world electronics and embedded systems projects. From beginner Arduino projects 
              to advanced PCB design and IoT systems - learn by doing with step-by-step tutorials.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-[#FF9418] text-white font-medium rounded hover:bg-[#E58110] transition-colors"
              >
                Browse Projects
              </Link>
              <Link
                href="#kits"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:border-[#FF9418] hover:text-[#FF9418] transition-colors"
              >
                View Project Kits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white" id="categories">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Project Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROJECT_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/projects/category/${category.id}`}
                className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-[#E65100] hover:shadow-md transition-all bg-white"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#071A30] text-sm mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {category.count} Projects
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-[#F9F9F9]" id="projects">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">Featured Projects</h2>
            <Link
              href="/projects/all"
              className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:border-[#E65100] transition-all"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2.5 py-1 rounded font-medium ${project.categoryColor}`}>
                      {project.category}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded font-medium ${project.difficultyColor}`}>
                      {project.difficulty}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-[#071A30] line-clamp-2 leading-snug mb-2">
                    {project.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
                    {project.excerpt}
                  </p>
                  
                  {/* Components */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-xs text-gray-500 font-medium mb-2">Components:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.components.slice(0, 3).map((comp, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                          {comp}
                        </span>
                      ))}
                      {project.components.length > 3 && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                          +{project.components.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      4.8
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project Kits Section */}
      <section className="py-12 bg-white" id="kits">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Recommended Project Kits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECT_KITS.map((kit) => (
              <div
                key={kit.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:border-[#E65100] transition-all"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={kit.image}
                    alt={kit.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#071A30] leading-snug mb-2">
                    {kit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {kit.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <span className="flex items-center gap-1">
                      <Wrench size={12} />
                      {kit.projects}
                    </span>
                    <span className="bg-orange-50 px-2 py-0.5 rounded text-orange-700 font-medium">
                      {kit.level}
                    </span>
                  </div>
                  <Link
                    href={`/kits/${kit.id}`}
                    className="block w-full px-4 py-2.5 bg-[#E65100] text-white text-sm font-medium text-center rounded-lg hover:bg-[#BF360C] transition-colors"
                  >
                    View Kit Details
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
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Project Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <BookOpen className="text-[#FF9418] mb-3" size={32} />
              <h3 className="text-lg font-semibold text-[#071A30] mb-2">Project Guides</h3>
              <p className="text-sm text-gray-600 mb-4">
                Detailed step-by-step guides with schematics, code, and troubleshooting tips.
              </p>
              <Link href="/projects/guides" className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1">
                Browse Guides <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Zap className="text-[#FF9418] mb-3" size={32} />
              <h3 className="text-lg font-semibold text-[#071A30] mb-2">Quick Start Videos</h3>
              <p className="text-sm text-gray-600 mb-4">
                Video tutorials showing assembly, wiring, and programming for each project.
              </p>
              <Link href="/projects/videos" className="text-sm font-medium text-[#FF9418] hover:underline flex items-center gap-1">
                Watch Videos <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
