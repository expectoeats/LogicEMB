export interface CourseModule {
  title: string
  duration: string
  lessons: string[]
}

export interface DetailedCourse {
  id: string
  slug: string
  title: string
  category: 'PCB Design' | 'Embedded Systems' | 'Python' | 'Electronics' | 'Microcontrollers' | 'IoT'
  description: string
  badge: 'FREE COURSE' | 'SELF PACED'
  badgeColor: string
  rating: string
  reviewsCount: string
  enrolled: string
  duration: string
  modulesCount: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  instructor: string
  instructorRole: string
  bannerGradient: string
  bannerTitle: string
  bannerSubtitle: string
  bannerAccent: string
  image: string
  prerequisites: string[]
  whatYouWillLearn: string[]
  syllabus: CourseModule[]
}

export const ALL_COURSES: DetailedCourse[] = [
  {
    id: 'cc-01',
    slug: 'pcb-design-fundamentals',
    title: 'PCB Design Fundamentals — Schematic Capture & Multi-Layer Routing',
    category: 'PCB Design',
    description: 'Master the complete workflow of hardware design: from first-principles schematic capture to multi-layer routing, stack-up calculation, and DFM validation for manufacturing.',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.8',
    reviewsCount: '1,240',
    enrolled: '8.2k+ enrolled',
    duration: '6 Weeks (Self-Paced)',
    modulesCount: 6,
    level: 'Beginner',
    instructor: 'LogicEMB Engineering Team',
    instructorRole: 'Lead Hardware Architects',
    bannerGradient: 'linear-gradient(to right bottom, rgb(70, 100, 180), rgb(130, 160, 230))',
    bannerTitle: 'PCB DESIGN',
    bannerSubtitle: 'Schematic · Layout · Routing',
    bannerAccent: '⚡ 🔌 📐',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=600&q=80',
    prerequisites: ['Basic circuit theory (Ohm\'s & Kirchhoff\'s Laws)', 'Familiarity with passive components (R, L, C)'],
    whatYouWillLearn: [
      'Draw professional schematics adhering to industry naming and hierarchy standards',
      'Select components and verify footprint geometry per IPC-7351',
      'Design 2-layer and 4-layer stackups with 50Ω single-ended & 100Ω differential impedance',
      'Optimize return current paths under high-speed digital traces to prevent EMI',
      'Generate production-ready Gerber X2, drill files, BOM, and pick-and-place files'
    ],
    syllabus: [
      {
        title: 'Module 1: Schematic Capture & Hierarchical Architecture',
        duration: '1.5 hrs',
        lessons: ['Introduction to CAD Environments (KiCad / Altium)', 'Power Distribution & Decoupling Strategy', 'Net Classes & Design Rules Definition']
      },
      {
        title: 'Module 2: Component Footprint Verification & 3D Modeling',
        duration: '2.0 hrs',
        lessons: ['IPC-7351 Footprint Standards', 'Thermal Reliefs & Pad Geometries', 'Solder Mask & Paste Mask Tolerances']
      },
      {
        title: 'Module 3: 4-Layer Board Stack-Up & Controlled Impedance',
        duration: '2.5 hrs',
        lessons: ['Dielectric Properties (FR-4 Prepreg & Core)', 'Microstrip vs Stripline Calculations', 'Ground Plane Integrity & Return Loops']
      },
      {
        title: 'Module 4: Routing High-Speed Signals & Mixed-Signal Isolation',
        duration: '3.0 hrs',
        lessons: ['Differential Pair Length Tuning', 'Analog vs Digital Ground Separation', 'Via Stubs & High-Frequency Transitions']
      },
      {
        title: 'Module 5: Design for Manufacturing (DFM) & Assembly (DFA)',
        duration: '2.0 hrs',
        lessons: ['Trace-to-Copper Clearances & Annular Rings', 'Silkscreen Clipping & Fiducial Placement', 'Automated DRC & Design Verification']
      },
      {
        title: 'Module 6: Capstone Project — Production-Grade Sensor Board',
        duration: '4.0 hrs',
        lessons: ['End-to-End Layout of USB-C Sensor Node', 'Gerber Generation & Verification', 'Assembly Guide & Prototype Bring-Up Checklist']
      }
    ]
  },
  {
    id: 'cc-02',
    slug: 'embedded-c-arm-cortex-m',
    title: 'Embedded C for ARM Cortex-M — Bare-Metal GPIO, Timers, UART, SPI & DMA',
    category: 'Embedded Systems',
    description: 'Learn register-level firmware development from the ground up on ARM Cortex-M microcontrollers without vendor HAL crutches. Master deterministic peripherals and direct memory access.',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.9',
    reviewsCount: '2,150',
    enrolled: '11.4k+ enrolled',
    duration: '8 Weeks (Self-Paced)',
    modulesCount: 7,
    level: 'Intermediate',
    instructor: 'LogicEMB Firmware Division',
    instructorRole: 'Low-Level Systems Specialists',
    bannerGradient: 'linear-gradient(to right bottom, rgb(30, 58, 95), rgb(70, 120, 180))',
    bannerTitle: 'EMBEDDED C',
    bannerSubtitle: 'ARM Cortex-M · STM32 · DMA',
    bannerAccent: '🔧 💾 ⚙️',
    image: 'https://images.unsplash.com/photo-1601132359864-791b8f38a5ab?auto=format&fit=crop&w=1200&h=600&q=80',
    prerequisites: ['Basic C programming (pointers, structs, bitwise operations)', 'Basic digital logic concepts'],
    whatYouWillLearn: [
      'Write bare-metal peripheral drivers using CMSIS register headers',
      'Configure NVIC interrupt controllers and prioritize nested vector handlers',
      'Implement zero-copy circular DMA for high-speed UART and SPI data streaming',
      'Master hardware timers for precise microsecond PWM and input capture',
      'Debug firmware with GDB, OpenOCD, and oscilloscope logic protocol decoders'
    ],
    syllabus: [
      {
        title: 'Module 1: ARM Cortex-M Architecture & Memory Map',
        duration: '2.0 hrs',
        lessons: ['Memory Map & Flash/SRAM Partitioning', 'RCC Clock Trees & PLL Synthesis', 'Startup Assembly & Vector Table Structure']
      },
      {
        title: 'Module 2: Direct Register Manipulation & GPIO Drivers',
        duration: '2.5 hrs',
        lessons: ['MODER, OTYPER, OSPEEDR & PUPDR Registers', 'Atomic Bit Setting with BSRR', 'Writing a Clean Modular GPIO Driver in C']
      },
      {
        title: 'Module 3: Nested Vectored Interrupt Controller (NVIC)',
        duration: '2.5 hrs',
        lessons: ['EXTI Peripheral & Pin Line Mapping', 'Interrupt Priorities & Preemption Rules', 'Writing Deterministic Interrupt Service Routines']
      },
      {
        title: 'Module 4: Advanced Hardware Timers & PWM Generation',
        duration: '3.0 hrs',
        lessons: ['Prescalers & Auto-Reload Registers', 'Center-Aligned PWM for Motor Control', 'Input Capture for Frequency Measurement']
      },
      {
        title: 'Module 5: SPI & I2C Protocol Drivers',
        duration: '3.0 hrs',
        lessons: ['Clock Polarity (CPOL) & Phase (CPHA) Timing', 'I2C Master State Machine & Error Handling', 'Communicating with IMUs and Flash Memories']
      },
      {
        title: 'Module 6: Direct Memory Access (DMA) & Zero-Copy Transfers',
        duration: '3.5 hrs',
        lessons: ['DMA Streams, Channels & FIFO Thresholds', 'Circular Buffer Reception with UART Idle Line', 'Eliminating CPU Overhead in High-Throughput I/O']
      },
      {
        title: 'Module 7: Capstone Project — Real-Time Telemetry Node',
        duration: '4.5 hrs',
        lessons: ['Multi-Sensor Acquisition Driver Architecture', 'Packet Framing (COBS/CRC32)', 'In-System Bench Testing and Profiling']
      }
    ]
  },
  {
    id: 'cc-03',
    slug: 'python-for-hardware-engineers',
    title: 'Python for Hardware Engineers — Lab Automation, PyVISA & Test Systems',
    category: 'Python',
    description: 'Transform manual benchtop testing into repeatable automated test harnesses. Control oscilloscopes, power supplies, and multi-meters via PyVISA, PySerial, and SCPI commands.',
    badge: 'SELF PACED',
    badgeColor: 'bg-[#071A30]',
    rating: '4.7',
    reviewsCount: '980',
    enrolled: '9.7k+ enrolled',
    duration: '5 Weeks (Self-Paced)',
    modulesCount: 5,
    level: 'Beginner',
    instructor: 'LogicEMB Test & Automation Lab',
    instructorRole: 'Instrumentation Engineers',
    bannerGradient: 'linear-gradient(to right bottom, rgb(180, 100, 30), rgb(240, 155, 60))',
    bannerTitle: 'PYTHON',
    bannerSubtitle: 'PyVISA · PySerial · Automation',
    bannerAccent: '🐍 🧪 📊',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=600&q=80',
    prerequisites: ['Basic Python fundamentals (loops, functions, file I/O)', 'Basic lab bench equipment knowledge'],
    whatYouWillLearn: [
      'Automate programmable power supplies and digital multimeters over USB/LAN',
      'Parse binary waveform data from digital storage oscilloscopes via SCPI',
      'Build automated regression test suites with pytest for custom board bring-up',
      'Generate interactive pass/fail reports and statistical voltage distribution plots',
      'Flash firmware automatically and verify serial bootloader handshakes'
    ],
    syllabus: [
      {
        title: 'Module 1: Instrument Control Architecture & VISA Standards',
        duration: '1.5 hrs',
        lessons: ['NI-VISA & pyvisa-py Backends', 'SCPI Command Syntax & Subsystems', 'Querying Instrument Identity (*IDN?)']
      },
      {
        title: 'Module 2: PySerial & Hardware Communication Protocols',
        duration: '2.0 hrs',
        lessons: ['Baud Rate, Parity & Handshaking Configuration', 'Buffered Non-Blocking Reads', 'Automated Firmware Flashing Scripts']
      },
      {
        title: 'Module 3: Oscilloscope Automation & Waveform Capture',
        duration: '2.5 hrs',
        lessons: ['Trigger Setup & Channel Scaling over SCPI', 'Fetching Raw IEEE 488.2 Binary Blocks', 'Calculating Rise Time, Jitter & Peak-to-Peak']
      },
      {
        title: 'Module 4: Building HIL (Hardware-In-The-Loop) Test Suites',
        duration: '3.0 hrs',
        lessons: ['Structuring Pytest Fixtures for Lab Instruments', 'Automated Voltage Rail Sweeps & Margining', 'Stress Testing & Fault Injection']
      },
      {
        title: 'Module 5: Capstone Project — Complete Board Validation Harness',
        duration: '4.0 hrs',
        lessons: ['Multi-Instrument Automated Test Harness Script', 'Generating HTML Test Summary Reports', 'CI/CD Hardware Runner Setup']
      }
    ]
  },
  {
    id: 'cc-04',
    slug: 'electronics-fundamentals',
    title: 'Electronics Fundamentals — Circuits, Components & Signal Analysis',
    category: 'Electronics',
    description: 'Build intuition for analog electronics from the ground up: Kirchhoff’s laws, semiconductor physics, transistor biasing, op-amp topologies, and power supply design.',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.6',
    reviewsCount: '1,890',
    enrolled: '14.1k+ enrolled',
    duration: '6 Weeks (Self-Paced)',
    modulesCount: 6,
    level: 'Beginner',
    instructor: 'LogicEMB Core Faculty',
    instructorRole: 'Analog Circuit Researchers',
    bannerGradient: 'linear-gradient(to right bottom, rgb(125, 60, 100), rgb(200, 120, 170))',
    bannerTitle: 'ELECTRONICS',
    bannerSubtitle: 'Circuits · Op-Amps · Power',
    bannerAccent: '⚡ 🔬 📡',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&h=600&q=80',
    prerequisites: ['Basic high school algebra and physics'],
    whatYouWillLearn: [
      'Analyze resistive, capacitive, and inductive networks under DC and AC steady state',
      'Understand PN-junction diodes, Zener voltage regulation, and rectifiers',
      'Design BJT and MOSFET switching circuits with calculated gate drive currents',
      'Implement inverting, non-inverting, differential, and active filter op-amp circuits',
      'Simulate circuit stability, frequency response, and Bode plots using SPICE'
    ],
    syllabus: [
      {
        title: 'Module 1: DC Circuit Laws & Component Models',
        duration: '2.0 hrs',
        lessons: ['Ohm’s & Kirchhoff’s Laws in Practice', 'Thevenin & Norton Equivalent Circuits', 'Real vs Ideal Passive Component Parasitics']
      },
      {
        title: 'Module 2: Transient Analysis & AC Impedance',
        duration: '2.5 hrs',
        lessons: ['RC & RL Time Constants', 'Phasors & Complex Impedance (Z = R + jX)', 'Resonant RLC Networks & Q-Factor']
      },
      {
        title: 'Module 3: Diodes & Voltage Regulation Topologies',
        duration: '2.0 hrs',
        lessons: ['Forward Voltage Drop & Reverse Leakage', 'Schottky Diodes in High-Speed Switching', 'Zener Diodes & Shunt Regulators']
      },
      {
        title: 'Module 4: BJT & MOSFET Transistor Operation',
        duration: '3.0 hrs',
        lessons: ['BJT Biasing in Saturation & Active Modes', 'MOSFET Gate Threshold & Rds(on) Curves', 'Miller Plateau & Switching Loss Calculations']
      },
      {
        title: 'Module 5: Operational Amplifiers (Op-Amps) Deep Dive',
        duration: '3.0 hrs',
        lessons: ['Virtual Ground Concept & Golden Rules', 'Instrumentation Amplifiers for Sensors', 'Active Low-Pass & Sallen-Key Filters']
      },
      {
        title: 'Module 6: Power Supply Architecture & Bench Validation',
        duration: '3.5 hrs',
        lessons: ['Linear Regulators (LDOs) & Thermal Calculations', 'Buck vs Boost Converter Fundamentals', 'Measuring Output Ripple with an Oscilloscope']
      }
    ]
  },
  {
    id: 'cc-05',
    slug: 'stm32-esp32-freertos',
    title: 'Microcontroller Programming — STM32, ESP32 & FreeRTOS Deep Dive',
    category: 'Microcontrollers',
    description: 'Bridge bare-metal coding with multi-tasking real-time operating systems. Learn task scheduling, mutexes, semaphores, message queues, and Wi-Fi/BLE communication on modern SoCs.',
    badge: 'FREE COURSE',
    badgeColor: 'bg-[#E65100]',
    rating: '4.8',
    reviewsCount: '1,420',
    enrolled: '6.8k+ enrolled',
    duration: '7 Weeks (Self-Paced)',
    modulesCount: 6,
    level: 'Intermediate',
    instructor: 'LogicEMB Systems Engineering',
    instructorRole: 'Senior Embedded Firmware Engineers',
    bannerGradient: 'linear-gradient(to right bottom, rgb(50, 100, 150), rgb(100, 160, 210))',
    bannerTitle: 'STM32 & ESP32',
    bannerSubtitle: 'FreeRTOS · BLE · Wi-Fi',
    bannerAccent: '🤖 📶 🧠',
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1200&h=600&q=80',
    prerequisites: ['Solid C/C++ foundation', 'Familiarity with microcontroller peripherals'],
    whatYouWillLearn: [
      'Implement preemptive real-time task scheduling with FreeRTOS on ARM & Xtensa cores',
      'Safely synchronize threads with mutexes, binary/counting semaphores, and event groups',
      'Transfer structured data packets between tasks using lockless queues and stream buffers',
      'Configure ESP-IDF dual-core pinning and power management sleep modes',
      'Deploy robust MQTT and Bluetooth Low Energy (BLE) GATT telemetry servers'
    ],
    syllabus: [
      {
        title: 'Module 1: RTOS Fundamentals & Kernel Architecture',
        duration: '2.0 hrs',
        lessons: ['Superloop vs Event-Driven vs RTOS', 'SysTick Timer & Context Switching Mechanics', 'Task Control Blocks (TCB) & Stack Allocation']
      },
      {
        title: 'Module 2: Task Management & Scheduling Policies',
        duration: '2.5 hrs',
        lessons: ['Preemptive Priority-Based Scheduling', 'Task States & Starvation Avoidance', 'Stack Watermark Monitoring & Overflow Traps']
      },
      {
        title: 'Module 3: Inter-Task Communication & Synchronization',
        duration: '3.0 hrs',
        lessons: ['Queues & Zero-Copy Pointer Passing', 'Semaphores vs Mutexes: Priority Inversion & Inheritance', 'Event Groups & Task Notifications']
      },
      {
        title: 'Module 4: Interrupt Safe APIs & Deferred ISR Handling',
        duration: '2.5 hrs',
        lessons: ['Using FromISR APIs Correctly', 'PortYIELD_FROM_ISR Execution Flow', 'Software Timers & Watchdog Supervision']
      },
      {
        title: 'Module 5: ESP32 Dual-Core & Wireless Telemetry',
        duration: '3.5 hrs',
        lessons: ['Pinning Tasks to Core 0 vs Core 1', 'ESP-IDF Wi-Fi Station & MQTT Client', 'BLE GATT Server for Mobile Configuration']
      },
      {
        title: 'Module 6: Capstone Project — Industrial Telemetry Gateway',
        duration: '4.0 hrs',
        lessons: ['Multi-Threaded Gateway Firmware Architecture', 'Flash File System Logging & Fail-Safe OTA', 'Power Profiling & Current Benchmarking']
      }
    ]
  },
  {
    id: 'cc-06',
    slug: 'iot-webserial-dashboards',
    title: 'IoT & WebSerial Dashboards — Real-Time Hardware in the Browser',
    category: 'IoT',
    description: 'Connect microcontrollers directly to modern React/Next.js web interfaces without native USB drivers or Electron bloat. Stream 1kHz telemetry, control hardware GPIO, and visualize live data.',
    badge: 'SELF PACED',
    badgeColor: 'bg-[#071A30]',
    rating: '4.7',
    reviewsCount: '890',
    enrolled: '5.3k+ enrolled',
    duration: '5 Weeks (Self-Paced)',
    modulesCount: 5,
    level: 'Intermediate',
    instructor: 'LogicEMB Web & Connected Systems',
    instructorRole: 'Full-Stack Hardware Integrators',
    bannerGradient: 'linear-gradient(to right bottom, rgb(200, 110, 20), rgb(250, 165, 55))',
    bannerTitle: 'IoT DASHBOARD',
    bannerSubtitle: 'WebSerial · React · TypeScript',
    bannerAccent: '🌐 📡 💻',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&h=600&q=80',
    prerequisites: ['Basic JavaScript / TypeScript and React understanding', 'Basic Arduino/ESP32 serial communication'],
    whatYouWillLearn: [
      'Directly communicate with USB microcontrollers using the native browser WebSerial API',
      'Pack, serialize, and unpack high-speed binary streams using COBS and TypedArrays',
      'Plot real-time 1000+ samples/sec sensor streams with canvas-accelerated charts',
      'Send interactive control commands, calibrate offsets, and log data to CSV/JSON',
      'Build responsive, production-ready telemetry interfaces with Next.js and Tailwind CSS'
    ],
    syllabus: [
      {
        title: 'Module 1: WebSerial API Foundations & Security Model',
        duration: '1.5 hrs',
        lessons: ['navigator.serial Specification & Permissions', 'Opening Ports, Baud Rates & Buffer Constraints', 'Handling Device Disconnect & Reconnect Events']
      },
      {
        title: 'Module 2: High-Speed Binary Streaming & Framing',
        duration: '2.5 hrs',
        lessons: ['Consistent Overhead Byte Stuffing (COBS)', 'CRC-16 Integrity Checks on Web Worker Threads', 'Converting Uint8Array Buffers into TypeScript Records']
      },
      {
        title: 'Module 3: Real-Time Visualization on HTML5 Canvas',
        duration: '3.0 hrs',
        lessons: ['High-Performance Canvas Rendering vs SVG', '60 FPS Oscilloscope Style Oscillating Traces', 'Memory Ring Buffers in JavaScript']
      },
      {
        title: 'Module 4: Two-Way Bidirectional Hardware Control',
        duration: '2.5 hrs',
        lessons: ['Command Queuing & Non-Blocking Writes', 'Building Interactive Sliders for Motor PWM', 'OTA Firmware Upload in the Browser via WebSerial']
      },
      {
        title: 'Module 5: Capstone Project — Production Telemetry Studio',
        duration: '4.0 hrs',
        lessons: ['Modular React Hooks Architecture (useSerial)', 'Exporting Session Data to Parquet & CSV', 'Deploying to Vercel with Progressive Web App (PWA) Support']
      }
    ]
  }
]
