import Link from 'next/link'
import { Wrench, Code, Terminal, Cpu, Zap, Database, Globe, Download } from 'lucide-react'

export default function ToolsPage() {
  const toolCategories = [
    {
      id: 1,
      title: 'Development Tools',
      icon: <Code className="text-[#E65100]" size={32} />,
      tools: [
        { name: 'Visual Studio Code', description: 'Powerful code editor for all languages', link: 'https://code.visualstudio.com' },
        { name: 'Git & GitHub', description: 'Version control and collaboration', link: 'https://github.com' },
        { name: 'Postman', description: 'API development and testing', link: 'https://postman.com' },
        { name: 'Docker', description: 'Containerization platform', link: 'https://docker.com' },
      ],
    },
    {
      id: 2,
      title: 'Electronics Tools',
      icon: <Cpu className="text-[#E65100]" size={32} />,
      tools: [
        { name: 'KiCAD', description: 'Open-source PCB design software', link: 'https://kicad.org' },
        { name: 'LTspice', description: 'Circuit simulation tool', link: 'https://www.analog.com/ltspice' },
        { name: 'Fritzing', description: 'Electronics design automation', link: 'https://fritzing.org' },
        { name: 'EasyEDA', description: 'Online PCB design tool', link: 'https://easyeda.com' },
      ],
    },
    {
      id: 3,
      title: 'Embedded Tools',
      icon: <Terminal className="text-[#E65100]" size={32} />,
      tools: [
        { name: 'STM32CubeIDE', description: 'STM32 development environment', link: 'https://www.st.com/stm32cubeide' },
        { name: 'Arduino IDE', description: 'Arduino development platform', link: 'https://arduino.cc' },
        { name: 'PlatformIO', description: 'Professional IDE for embedded', link: 'https://platformio.org' },
        { name: 'J-Link', description: 'Debug probe for ARM Cortex', link: 'https://www.segger.com' },
      ],
    },
    {
      id: 4,
      title: 'Programming IDEs',
      icon: <Zap className="text-[#E65100]" size={32} />,
      tools: [
        { name: 'PyCharm', description: 'Python IDE by JetBrains', link: 'https://jetbrains.com/pycharm' },
        { name: 'IntelliJ IDEA', description: 'Java development IDE', link: 'https://jetbrains.com/idea' },
        { name: 'Visual Studio', description: 'C#/.NET development', link: 'https://visualstudio.com' },
        { name: 'Eclipse', description: 'Multi-language IDE', link: 'https://eclipse.org' },
      ],
    },
    {
      id: 5,
      title: 'Database Tools',
      icon: <Database className="text-[#E65100]" size={32} />,
      tools: [
        { name: 'MySQL Workbench', description: 'MySQL database design tool', link: 'https://mysql.com/workbench' },
        { name: 'pgAdmin', description: 'PostgreSQL administration', link: 'https://pgadmin.org' },
        { name: 'MongoDB Compass', description: 'MongoDB GUI tool', link: 'https://mongodb.com/compass' },
        { name: 'DBeaver', description: 'Universal database tool', link: 'https://dbeaver.io' },
      ],
    },
    {
      id: 6,
      title: 'Web Development',
      icon: <Globe className="text-[#E65100]" size={32} />,
      tools: [
        { name: 'Chrome DevTools', description: 'Browser developer tools', link: 'https://developer.chrome.com/devtools' },
        { name: 'Figma', description: 'UI/UX design platform', link: 'https://figma.com' },
        { name: 'Webpack', description: 'Module bundler', link: 'https://webpack.js.org' },
        { name: 'Vite', description: 'Fast build tool', link: 'https://vitejs.dev' },
      ],
    },
  ]

  const utilityTools = [
    { name: 'Code Formatter', description: 'Format your code online', icon: '📝' },
    { name: 'Regex Tester', description: 'Test regular expressions', icon: '🔍' },
    { name: 'JSON Validator', description: 'Validate JSON syntax', icon: '✅' },
    { name: 'Color Picker', description: 'Pick colors for design', icon: '🎨' },
    { name: 'Base64 Encoder', description: 'Encode/decode Base64', icon: '🔐' },
    { name: 'ASCII Table', description: 'Character reference', icon: '📋' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E65100] to-[#FF9418] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Wrench size={16} />
              <span>Developer Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tools & Resources
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Essential development tools, IDEs, software, and utilities for programming, electronics, embedded systems, and PCB design. Everything you need in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Tool Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-[#071A30]">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.tools.map((tool, idx) => (
                    <a
                      key={idx}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-[#FFF3E0] transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-[#071A30] group-hover:text-[#E65100] transition-colors">
                            {tool.name}
                          </p>
                          <p className="text-xs text-gray-600 mt-0.5">
                            {tool.description}
                          </p>
                        </div>
                        <Download size={16} className="text-gray-400 group-hover:text-[#E65100] transition-colors shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Utility Tools */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Online Utilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {utilityTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#E65100] hover:shadow-lg transition-all cursor-pointer text-center group"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <p className="font-semibold text-sm text-[#071A30] group-hover:text-[#E65100] transition-colors mb-1">
                  {tool.name}
                </p>
                <p className="text-xs text-gray-600">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Setup */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">Recommended Setup</h2>
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-[#071A30] mb-4">Complete Development Environment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#071A30] mb-3">For Programming:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ VS Code + Extensions</li>
                  <li>✓ Git & GitHub Desktop</li>
                  <li>✓ Node.js & npm</li>
                  <li>✓ Python & pip</li>
                  <li>✓ Docker Desktop</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#071A30] mb-3">For Electronics:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ KiCAD for PCB Design</li>
                  <li>✓ LTspice for Simulation</li>
                  <li>✓ STM32CubeIDE or Arduino IDE</li>
                  <li>✓ PlatformIO Extension</li>
                  <li>✓ Serial Monitor Tool</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href="/docs/setup"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E65100] text-white font-semibold rounded-lg hover:bg-[#BF360C] transition-colors"
              >
                View Complete Setup Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
