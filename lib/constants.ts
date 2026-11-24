export const SITE_NAME = 'LogicEMB'
export const SITE_TAGLINE = 'Learn. Build. Innovate.'
export const SITE_HEADLINE = 'Engineering Knowledge. Real-World Possibilities.'
export const SITE_DESCRIPTION = 'LogicEMB operates at the intersection of electronics engineering, technical education and hardware technology.'
export const SITE_URL = 'https://logicemb.com'

export const DIFFICULTY_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[number]

export const DIFFICULTY_COLORS: Record<DifficultyLevel, string> = {
  Beginner:     'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Intermediate: 'bg-blue-50 text-blue-700 border border-blue-200',
  Advanced:     'bg-orange-50 text-orange-700 border border-orange-200',
  Expert:       'bg-red-50 text-red-700 border border-red-200',
}

export const NAVIGATION_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
    items: [
      { label: 'Company Overview', href: '/about#company' },
      { label: 'Engineering Vision', href: '/about#vision' },
      { label: 'Our Approach', href: '/about#approach' },
    ],
  },
  {
    label: 'Education',
    href: '/education',
    items: [
      { label: 'Electronics Fundamentals', href: '/education/fundamentals' },
      { label: 'PCB Design & Layout', href: '/education/pcb-design' },
      { label: 'Embedded C / C++ & RTOS', href: '/education/embedded-c' },
      { label: 'Python for Hardware & Lab Automation', href: '/education/python-hardware' },
      { label: 'JavaScript & IoT Dashboards', href: '/education/iot-web' },
      { label: 'Structured Curricula', href: '/education/courses' },
    ],
  },
  {
    label: 'Engineering',
    href: '/engineering',
    items: [
      { label: 'PCB Design & High-Speed Layout', href: '/engineering/pcb-layout' },
      { label: 'Analog & Power Circuit Engineering', href: '/engineering/circuits' },
      { label: 'Firmware & Low-Level Architecture', href: '/engineering/firmware' },
      { label: 'Automated Test Systems (Python/HIL)', href: '/engineering/testing' },
      { label: 'Hardware Prototyping & Bring-Up', href: '/engineering/prototyping' },
    ],
  },
  {
    label: 'Technology',
    href: '/technology',
    items: [
      { label: 'Embedded Applications', href: '/technology/embedded-systems' },
      { label: 'Connected Devices & Telemetry', href: '/technology/connected-devices' },
      { label: 'Hardware Solutions', href: '/technology/solutions' },
      { label: 'Research & Prototypes', href: '/technology/research' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    items: [
      { label: 'Engineering Insights', href: '/insights/engineering' },
      { label: 'PCB Design Notes', href: '/insights/pcb-notes' },
      { label: 'Embedded Systems & Software', href: '/insights/embedded' },
      { label: 'Technical Guides', href: '/insights/guides' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    items: [
      { label: 'General Enquiries', href: '/contact#general' },
      { label: 'Engineering Collaboration', href: '/contact#business' },
    ],
  },
]

export const DIVISIONS = [
  {
    index: '01',
    name: 'Education',
    tagline: 'LogicEMB Learn',
    headline: 'Structured technical pedagogy for modern hardware & software engineers.',
    description:
      'Rigorous courses, laboratory guides, and practical engineering curricula designed to take learners from foundational circuit theory to multi-layer PCB design and production firmware in C, C++, and Python.',
    features: [
      'Circuit theory & component-level analysis',
      'Multi-layer schematic capture & PCB layout',
      'Microcontroller programming (STM32, ESP32, AVR)',
      'Python for instrumentation & automated test fixtures',
      'Real-world capstone engineering projects',
    ],
    cta: 'Explore Learning',
    href: '/education',
    codeSnippet: `// STM32 GPIO register configuration
RCC->AHB2ENR |= RCC_AHB2ENR_GPIOAEN;
GPIOA->MODER &= ~(3U << (5 * 2));
GPIOA->MODER |=  (1U << (5 * 2)); // Output mode`,
    lang: 'C (Bare-Metal)',
  },
  {
    index: '02',
    name: 'Engineering',
    tagline: 'Hardware Design & Fabrication',
    headline: 'Precision electronics engineering, circuit synthesis, and prototyping.',
    description:
      'Turn-key hardware development services covering schematic design, signal integrity simulation, high-speed routing, embedded firmware architecture, and rigorous bench validation.',
    features: [
      'High-speed digital & precision analog routing',
      'Impedance control & EMI/EMC compliance layout',
      'Bare-metal firmware & FreeRTOS implementation',
      'Python-driven HIL (Hardware-In-The-Loop) validation',
      'Design for Manufacturability (DFM) verification',
    ],
    cta: 'Explore Engineering',
    href: '/engineering',
    codeSnippet: `# Python Automated Instrumentation Rig
import pyvisa, serial

rm = pyvisa.ResourceManager()
dmm = rm.open_resource('USB0::0x2A8D::0x0101::MY57501234::0::INSTR')
voltage = float(dmm.query(':MEAS:VOLT:DC?'))
assert 3.28 <= voltage <= 3.32, f"VCC out of tolerance: {voltage}V"`,
    lang: 'Python (Automated Test)',
  },
  {
    index: '03',
    name: 'Technology',
    tagline: 'Connected Systems & Innovation',
    headline: 'Edge intelligence, telemetry backbones, and full-stack device ecosystems.',
    description:
      'Bridging silicon with real-time web interfaces. We build industrial IoT gateways, edge sensors, and low-latency browser dashboards using WebSerial, WebSockets, and modern TypeScript runtimes.',
    features: [
      'Edge data acquisition & microcontroller telemetry',
      'WebSerial & WebBluetooth browser-to-hardware bridges',
      'Real-time visualization dashboards (React / Next.js / TypeScript)',
      'Custom gateway firmware & MQTT protocol integration',
      'Low-power sensor networks and field deployments',
    ],
    cta: 'Explore Technology',
    href: '/technology',
    codeSnippet: `// WebSerial hardware interface hook
const port = await navigator.serial.requestPort();
await port.open({ baudRate: 115200 });
const reader = port.readable.getReader();
const { value } = await reader.read();
parseTelemetryPacket(value);`,
    lang: 'TypeScript / WebSerial',
  },
]

export const CAPABILITIES = [
  {
    num: '01',
    title: 'PCB Design & Layout Engineering',
    summary:
      'Rigorous multi-layer board design with controlled differential impedance, stack-up optimization, and thermal dissipation modeling.',
    specs: ['Up to 8+ Layers', 'Impedance Matched', 'IPC-2221 Compliance', 'DFM / DFA Verified'],
  },
  {
    num: '02',
    title: 'Analog & Digital Circuit Design',
    summary:
      'Low-noise front-ends, switch-mode power supplies, sensor conditioning circuits, and high-frequency digital architectures.',
    specs: ['SPICE Simulation', 'SMPS Topologies', 'Active Filters', 'Signal Integrity (SI)'],
  },
  {
    num: '03',
    title: 'Embedded Systems & Firmware',
    summary:
      'Deterministic bare-metal C and RTOS development for ARM Cortex-M, RISC-V, and ESP architectures with zero-overhead drivers.',
    specs: ['FreeRTOS / Zephyr', 'DMA & Interrupt Schedulers', 'Low-Power Modes', 'MISRA Guidelines'],
  },
  {
    num: '04',
    title: 'Hardware Programming & Automation',
    summary:
      'Bridging physical circuits to code using modern Python automation, C/C++ libraries, and JavaScript device telemetry interfaces.',
    specs: ['MicroPython / CircuitPython', 'Python PyVISA & PySerial', 'WebSerial & Node.js', 'Automated Flash Tools'],
  },
  {
    num: '05',
    title: 'Circuit Design & Analysis',
    summary:
      'Comprehensive parameter verification, transient analysis, thermal benchmarking, and worst-case circuit tolerances.',
    specs: ['Monte Carlo Analysis', 'Worst-Case Circuit Analysis (WCCA)', 'Bode Plot Stability', 'Power Rail Ripple <10mV'],
  },
  {
    num: '06',
    title: 'Hardware Prototyping & Testing',
    summary:
      'In-house bench validation, logic analyzer protocol decodes, mixed-domain oscilloscopy, and automated test harness execution.',
    specs: ['Mixed-Signal Scopes (MSO)', 'Spectrum Analysis', 'Boundary Scan (JTAG)', 'HIL Test Benches'],
  },
]

export const LEARNING_MODULES = [
  {
    id: 'elem-01',
    category: 'Electronics Fundamentals',
    level: 'Core Discipline',
    topics: ['Ohm’s & Kirchhoff’s Laws', 'Semiconductors & Diodes', 'BJT & MOSFET Analysis', 'Op-Amp Topologies', 'Power Supplies'],
    readiness: 'Open Access',
  },
  {
    id: 'elem-02',
    category: 'PCB Design & Layout',
    level: 'Engineering Practice',
    topics: ['Schematic Capture Rules', 'Routing Topology & Return Paths', 'Decoupling Capacitor Placement', 'Gerber & Drill Generation'],
    readiness: 'Hands-on Course',
  },
  {
    id: 'elem-03',
    category: 'Embedded Systems & Firmware',
    level: 'System Architecture',
    topics: ['ARM Cortex-M Registers', 'Peripheral Drivers (SPI, I2C, UART)', 'FreeRTOS Task Scheduling', 'Interrupt Vectors & DMA'],
    readiness: 'Project-Based',
  },
  {
    id: 'elem-04',
    category: 'Microcontrollers & SOCs',
    level: 'Hardware Platforms',
    topics: ['STM32 Ecosystem', 'ESP32 Dual-Core Architecture', 'Nordic BLE SoCs', 'Clock Trees & Power Domains'],
    readiness: 'Deep-Dive Labs',
  },
  {
    id: 'elem-05',
    category: 'Hardware Programming (Python & JS)',
    level: 'Software Integration',
    topics: ['Python Test Scripting', 'PyVISA Lab Automation', 'WebSerial API Dashboards', 'Edge MicroPython Implementation'],
    readiness: 'Laboratory Guides',
  },
  {
    id: 'elem-06',
    category: 'Engineering Capstone Projects',
    level: 'Practical Synthesis',
    topics: ['Precision Battery Management System', 'Industrial IoT Vibration Sensor', 'USB-C PD Power Delivery Module', 'Edge DSP Controller'],
    readiness: 'Comprehensive Case Studies',
  },
]

export const SHOWCASE_PROJECTS = [
  {
    id: 'prj-01',
    tag: 'CUSTOM HARDWARE / PCB',
    title: 'Ultra-Low-Power Telemetry Node with Sub-GHz Transceiver',
    summary:
      'A 4-layer FR4 board featuring an ARM Cortex-M4 core, integrated ceramic balun, and solar energy-harvesting power management unit. Bench-measured sleep current of 1.4µA.',
    metrics: [
      { label: 'Board Spec', value: '4 Layers, ENIG' },
      { label: 'Sleep Draw', value: '1.4 µA' },
      { label: 'RF Range', value: '868 MHz / 4.2 km' },
      { label: 'Firmware', value: 'Bare-Metal C + DMA' },
    ],
    status: 'Hardware Validated',
    rev: 'REV 2.3B',
  },
  {
    id: 'prj-02',
    tag: 'AUTOMATED TEST HARNESS',
    title: 'Python-Driven Modular Hardware-In-The-Loop (HIL) Test Rig',
    summary:
      'An automated validation fixture controlling programmable power supplies, multi-meters, and digital signal injectors to test 48 board test-points in 9.2 seconds.',
    metrics: [
      { label: 'Test Time', value: '9.2s / Board' },
      { label: 'Test Points', value: '48 Analogue & Logic' },
      { label: 'Interface', value: 'Python PyVISA + SCPI' },
      { label: 'Yield Rate', value: '99.4% Verified' },
    ],
    status: 'Production Active',
    rev: 'REV 1.0F',
  },
  {
    id: 'prj-03',
    tag: 'EMBEDDED SOFTWARE & INTERFACE',
    title: 'Real-Time Sensor Telemetry Hub with WebSerial Interface',
    summary:
      'Dual-core ESP32 sensor platform streaming 1 kHz vibration and thermal data directly to a browser-based Next.js telemetry canvas via the WebSerial API without native drivers.',
    metrics: [
      { label: 'Throughput', value: '1,000 Samples/sec' },
      { label: 'Protocol', value: 'COBS Packed Binary' },
      { label: 'Front-End', value: 'TypeScript & WebSerial' },
      { label: 'Latency', value: '< 4 ms Roundtrip' },
    ],
    status: 'Deployed in Lab',
    rev: 'REV 3.1A',
  },
]

export const EDITORIAL_ARTICLES = [
  {
    id: 'art-01',
    category: 'PCB Design Notes',
    readTime: '9 min read',
    date: 'OCT 2024',
    title: 'Designing Clean Ground Return Paths in Mixed-Signal 4-Layer PCBs',
    excerpt:
      'Why splitting ground planes often creates more electromagnetic interference than it prevents, and how to control current loop geometry beneath sensitive ADC traces.',
    tag: 'SIGNAL INTEGRITY',
  },
  {
    id: 'art-02',
    category: 'Embedded Systems',
    readTime: '12 min read',
    date: 'NOV 2024',
    title: 'Zero-Copy UART Reception Using STM32 Circular DMA and Idle Line Detection',
    excerpt:
      'An in-depth look at eliminating byte-by-byte interrupts on ARM Cortex-M microcontrollers to handle high-throughput packet streams with deterministic timing.',
    tag: 'FIRMWARE ARCHITECTURE',
  },
  {
    id: 'art-03',
    category: 'Engineering Insights',
    readTime: '7 min read',
    date: 'DEC 2024',
    title: 'Writing Automated Test Benches with Python and PySerial for Custom Hardware',
    excerpt:
      'How to structure repeatable bench-top verification scripts that flash firmware, trigger edge conditions, and validate voltage rails automatically before shipping.',
    tag: 'TEST AUTOMATION',
  },
  {
    id: 'art-04',
    category: 'Electronics Explained',
    readTime: '11 min read',
    date: 'JAN 2025',
    title: 'MOSFET Gate Charge Dynamics: Mitigating Miller Plateau in High-Side Switching',
    excerpt:
      'Understanding gate drive current requirements, rise time calculations, and layout parasitic inductances that cause ringing in synchronous buck converters.',
    tag: 'POWER ELECTRONICS',
  },
]

export const FOOTER_SECTIONS = [
  {
    title: 'Disciplines',
    links: [
      { label: 'Education & Curricula', href: '/education' },
      { label: 'PCB Design & Engineering', href: '/engineering' },
      { label: 'Embedded & Technology', href: '/technology' },
      { label: 'Selected Case Studies', href: '/work' },
    ],
  },
  {
    title: 'Technical Resources',
    links: [
      { label: 'Engineering Desk (Articles)', href: '/insights' },
      { label: 'PCB Layout Guidelines', href: '/insights/pcb-notes' },
      { label: 'Embedded C Repository', href: '/education/embedded-c' },
      { label: 'Python Lab Automation Guides', href: '/education/python-hardware' },
    ],
  },
  {
    title: 'Organization',
    links: [
      { label: 'About LogicEMB', href: '/about' },
      { label: 'Engineering Methodology', href: '/about#approach' },
      { label: 'Contact & Inquiries', href: '/contact' },
      { label: 'Terms & Documentation', href: '/terms' },
    ],
  },
]

// GFG-style data structures
export const TOPICS = [
  { id: 'python',      name: 'Python',            count: '45 Articles', gradient: 'linear-gradient(to right bottom, rgb(180, 110, 50), rgb(232, 174, 120))' },
  { id: 'javascript',  name: 'JavaScript',        count: '38 Articles', gradient: 'linear-gradient(to right bottom, rgb(140, 138, 55), rgb(208, 206, 110))' },
  { id: 'java',        name: 'Java',              count: '42 Articles', gradient: 'linear-gradient(to right bottom, rgb(200, 60, 50), rgb(255, 110, 100))' },
  { id: 'c',           name: 'C',                 count: '35 Articles', gradient: 'linear-gradient(to right bottom, rgb(59, 89, 152), rgb(123, 153, 216))' },
  { id: 'cpp',         name: 'C++',               count: '38 Articles', gradient: 'linear-gradient(to right bottom, rgb(50, 100, 180), rgb(110, 160, 240))' },
  { id: 'csharp',      name: 'C#',                count: '32 Articles', gradient: 'linear-gradient(to right bottom, rgb(120, 60, 180), rgb(180, 120, 240))' },
  { id: 'sql',         name: 'SQL',               count: '28 Articles', gradient: 'linear-gradient(to right bottom, rgb(50, 120, 130), rgb(110, 184, 196))' },
  { id: 'embedded',    name: 'Embedded Systems',  count: '40 Articles', gradient: 'linear-gradient(to right bottom, rgb(125, 107, 168), rgb(189, 171, 232))' },
  { id: 'pcb',         name: 'PCB Design',        count: '32 Articles', gradient: 'linear-gradient(to right bottom, rgb(50, 130, 120), rgb(110, 196, 184))' },
  { id: 'mcu',         name: 'Microcontrollers',  count: '36 Articles', gradient: 'linear-gradient(to right bottom, rgb(60, 110, 150), rgb(120, 174, 214))' },
  { id: 'electronics', name: 'Electronics',       count: '55 Articles', gradient: 'linear-gradient(to right bottom, rgb(168, 92, 92), rgb(232, 156, 156))' },
  { id: 'projects',    name: 'Projects',          count: '22 Articles', gradient: 'linear-gradient(to right bottom, rgb(90, 133, 96), rgb(154, 197, 160))' },
]

export const ARTICLE_CARDS = [
  { id: 'ac-01', category: 'PCB Design', categoryColor: 'bg-orange-100 text-orange-700', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=400&q=80', title: 'How to Design a 4-Layer PCB for Mixed-Signal Applications', excerpt: 'Learn the step-by-step process for designing multi-layer PCBs with proper ground planes, signal routing, and impedance control.', author: 'LogicEMB Team', date: 'Dec 2024', readTime: '9 min read' },
  { id: 'ac-02', category: 'Embedded C', categoryColor: 'bg-blue-100 text-blue-700', image: 'https://images.unsplash.com/photo-1601132359864-791b8f38a5ab?auto=format&fit=crop&w=800&h=400&q=80', title: 'Zero-Copy UART with STM32 DMA and Idle Line Detection', excerpt: 'Eliminate byte-by-byte interrupts on ARM Cortex-M microcontrollers to handle high-throughput packet streams with deterministic timing.', author: 'LogicEMB Team', date: 'Nov 2024', readTime: '12 min read' },
  { id: 'ac-03', category: 'Python', categoryColor: 'bg-green-100 text-green-700', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=400&q=80', title: 'Automate Hardware Testing with Python and PySerial', excerpt: 'Structure repeatable bench-top verification scripts that flash firmware, trigger edge conditions, and validate voltage rails automatically.', author: 'LogicEMB Team', date: 'Dec 2024', readTime: '7 min read' },
  { id: 'ac-04', category: 'Electronics', categoryColor: 'bg-purple-100 text-purple-700', image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&h=400&q=80', title: 'MOSFET Gate Charge Dynamics in High-Side Switching Circuits', excerpt: 'Understanding gate drive current requirements, rise time calculations, and parasitic inductances causing ringing in buck converters.', author: 'LogicEMB Team', date: 'Jan 2025', readTime: '11 min read' },
  { id: 'ac-05', category: 'Microcontrollers', categoryColor: 'bg-blue-100 text-blue-700', image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&h=400&q=80', title: 'Getting Started with STM32: GPIO, Timers and Interrupts', excerpt: 'A practical guide to configuring STM32 peripherals from scratch using HAL library and register-level programming techniques.', author: 'LogicEMB Team', date: 'Nov 2024', readTime: '10 min read' },
  { id: 'ac-06', category: 'JavaScript', categoryColor: 'bg-yellow-100 text-yellow-700', image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&h=400&q=80', title: 'Real-Time Hardware Telemetry in the Browser with WebSerial API', excerpt: 'Stream sensor data from microcontrollers directly to your browser with the WebSerial API — no native drivers, no Electron, pure JavaScript.', author: 'LogicEMB Team', date: 'Oct 2024', readTime: '8 min read' },
]

export const POPULAR_TAGS = ['STM32', 'PCB Layout', 'Python Basics', 'ESP32', 'Arduino', 'Op-Amp', 'MOSFET', 'UART', 'I2C Protocol', 'SPI Bus', 'FreeRTOS', 'Oscilloscope', 'Signal Integrity', 'Buck Converter', 'ADC/DAC', 'C++ Templates', 'WebSerial', 'Firmware']

export const COURSE_CARDS = [
  {
    id: 'cc-01',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.8',
    bannerGradient: 'linear-gradient(to right bottom, rgb(70, 100, 180), rgb(130, 160, 230))',
    bannerTitle: 'PCB DESIGN',
    bannerSubtitle: 'Schematic · Layout · Routing',
    bannerAccent: '⚡ 🔌 📐',
    title: 'PCB Design Fundamentals — Schematic Capture & Multi-Layer Routing',
    level: 'Beginner',
    enrolled: '8.2k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-02',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.9',
    bannerGradient: 'linear-gradient(to right bottom, rgb(30, 58, 95), rgb(70, 120, 180))',
    bannerTitle: 'EMBEDDED C',
    bannerSubtitle: 'ARM Cortex-M · STM32 · DMA',
    bannerAccent: '🔧 💾 ⚙️',
    title: 'Embedded C for ARM Cortex-M — GPIO, Timers, UART, SPI & DMA',
    level: 'Intermediate',
    enrolled: '11.4k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-03',
    badge: 'SELF PACED',
    badgeColor: 'bg-[#071A30]',
    rating: '4.7',
    bannerGradient: 'linear-gradient(to right bottom, rgb(180, 100, 30), rgb(240, 155, 60))',
    bannerTitle: 'PYTHON',
    bannerSubtitle: 'PyVISA · PySerial · Automation',
    bannerAccent: '🐍 🧪 📊',
    title: 'Python for Hardware Engineers — Lab Automation & Instrument Control',
    level: 'Beginner',
    enrolled: '9.7k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-04',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.6',
    bannerGradient: 'linear-gradient(to right bottom, rgb(125, 60, 100), rgb(200, 120, 170))',
    bannerTitle: 'ELECTRONICS',
    bannerSubtitle: 'Circuits · Op-Amps · Power',
    bannerAccent: '⚡ 🔬 📡',
    title: 'Electronics Fundamentals — Circuits, Components & Signal Analysis',
    level: 'Beginner',
    enrolled: '14.1k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-05',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.8',
    bannerGradient: 'linear-gradient(to right bottom, rgb(50, 100, 150), rgb(100, 160, 210))',
    bannerTitle: 'STM32 & ESP32',
    bannerSubtitle: 'FreeRTOS · BLE · Wi-Fi',
    bannerAccent: '🤖 📶 🧠',
    title: 'Microcontroller Programming — STM32, ESP32 & FreeRTOS Deep Dive',
    level: 'Intermediate and Advanced',
    enrolled: '6.8k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-06',
    badge: 'SELF PACED',
    badgeColor: 'bg-[#071A30]',
    rating: '4.7',
    bannerGradient: 'linear-gradient(to right bottom, rgb(200, 110, 20), rgb(250, 165, 55))',
    bannerTitle: 'IoT DASHBOARD',
    bannerSubtitle: 'WebSerial · React · TypeScript',
    bannerAccent: '🌐 📡 💻',
    title: 'IoT & WebSerial Dashboards — Real-Time Hardware in the Browser',
    level: 'Intermediate',
    enrolled: '5.3k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-07',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.8',
    bannerGradient: 'linear-gradient(to right bottom, rgb(200, 60, 50), rgb(255, 110, 100))',
    bannerTitle: 'JAVA',
    bannerSubtitle: 'OOP · Collections · Multithreading',
    bannerAccent: '☕ 🚀 ⚙️',
    title: 'Complete Java Programming — From Basics to Advanced OOP',
    level: 'Beginner to Advanced',
    enrolled: '12.5k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-08',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.7',
    bannerGradient: 'linear-gradient(to right bottom, rgb(50, 100, 180), rgb(110, 160, 240))',
    bannerTitle: 'C PROGRAMMING',
    bannerSubtitle: 'Pointers · Memory · Data Structures',
    bannerAccent: '💻 🔧 📊',
    title: 'C Programming Fundamentals — Pointers, Memory Management & DSA',
    level: 'Beginner',
    enrolled: '10.2k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-09',
    badge: 'SELF PACED',
    badgeColor: 'bg-[#071A30]',
    rating: '4.9',
    bannerGradient: 'linear-gradient(to right bottom, rgb(70, 110, 190), rgb(130, 170, 250))',
    bannerTitle: 'C++ STL',
    bannerSubtitle: 'Templates · STL · Modern C++',
    bannerAccent: '⚡ 📚 🔥',
    title: 'Modern C++ Programming — STL, Templates & Best Practices',
    level: 'Intermediate to Advanced',
    enrolled: '8.9k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-10',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.6',
    bannerGradient: 'linear-gradient(to right bottom, rgb(120, 60, 180), rgb(180, 120, 240))',
    bannerTitle: 'C# .NET',
    bannerSubtitle: 'ASP.NET · LINQ · Entity Framework',
    bannerAccent: '🎯 💎 🌟',
    title: 'C# and .NET Development — Web APIs, LINQ & Entity Framework',
    level: 'Intermediate',
    enrolled: '7.4k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-11',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.8',
    bannerGradient: 'linear-gradient(to right bottom, rgb(50, 120, 130), rgb(110, 184, 196))',
    bannerTitle: 'SQL & DATABASES',
    bannerSubtitle: 'Queries · Joins · Optimization',
    bannerAccent: '🗄️ 📊 ⚡',
    title: 'SQL Mastery — Database Design, Queries & Performance Optimization',
    level: 'Beginner to Intermediate',
    enrolled: '11.8k+ enrolled',
    cta: 'Explore now',
  },
  {
    id: 'cc-12',
    badge: 'SELF PACED',
    badgeColor: 'bg-[#071A30]',
    rating: '4.7',
    bannerGradient: 'linear-gradient(to right bottom, rgb(140, 138, 55), rgb(208, 206, 110))',
    bannerTitle: 'JAVASCRIPT ES6+',
    bannerSubtitle: 'Async · DOM · Modern JS',
    bannerAccent: '⚡ 🌐 🎨',
    title: 'JavaScript Complete Guide — ES6+, Async/Await & Modern Web Dev',
    level: 'Beginner to Advanced',
    enrolled: '15.3k+ enrolled',
    cta: 'Explore now',
  },
]

