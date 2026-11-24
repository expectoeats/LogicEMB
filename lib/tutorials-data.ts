export interface TutorialItem {
  id: string
  slug: string
  title: string
  category: 'PCB Design' | 'Embedded C' | 'Python' | 'Electronics' | 'Microcontrollers' | 'JavaScript'
  categoryColor: string
  readTime: string
  date: string
  author: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  image: string
  excerpt: string
  tags: string[]
  keyTakeaways: string[]
  codeSnippet?: {
    code: string
    language: string
    filename: string
  }
}

export const ALL_TUTORIALS: TutorialItem[] = [
  {
    id: 'tut-01',
    slug: 'design-4-layer-pcb-mixed-signal',
    title: 'How to Design a 4-Layer PCB for Mixed-Signal Applications',
    category: 'PCB Design',
    categoryColor: 'bg-orange-100 text-orange-800 border-orange-200',
    readTime: '9 min read',
    date: 'Dec 2024',
    author: 'LogicEMB Hardware Lab',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=450&q=80',
    excerpt: 'Learn the step-by-step engineering principles for designing multi-layer PCBs with unbroken ground return paths, low-noise analog routing, and impedance matching.',
    tags: ['PCB Layout', 'Signal Integrity', 'Ground Planes', '4-Layer', 'Mixed-Signal'],
    keyTakeaways: [
      'Never split the ground plane under high-speed traces — use a solid reference plane',
      'Maintain continuous 50Ω single-ended & 100Ω differential microstrip dimensions',
      'Place 100nF decoupling capacitors as close to VDD pins as physically possible',
      'Isolate noisy digital clock traces from sensitive low-voltage ADC analog inputs'
    ],
    codeSnippet: {
      filename: 'stackup_parameters.json',
      language: 'json',
      code: `{
  "layers": 4,
  "stackup": [
    { "type": "Signal (Top)", "copper": "1.0 oz (35um)", "thickness": "0.035mm" },
    { "type": "Prepreg (7628)", "dielectric_constant": 4.4, "thickness": "0.200mm" },
    { "type": "Plane (GND)", "copper": "1.0 oz (35um)", "thickness": "0.035mm" },
    { "type": "Core (FR4)", "dielectric_constant": 4.5, "thickness": "1.000mm" },
    { "type": "Plane (PWR)", "copper": "1.0 oz (35um)", "thickness": "0.035mm" },
    { "type": "Prepreg (7628)", "dielectric_constant": 4.4, "thickness": "0.200mm" },
    { "type": "Signal (Bottom)", "copper": "1.0 oz (35um)", "thickness": "0.035mm" }
  ]
}`
    }
  },
  {
    id: 'tut-02',
    slug: 'zero-copy-uart-stm32-circular-dma',
    title: 'Zero-Copy UART Reception Using STM32 Circular DMA & Idle Line Detection',
    category: 'Embedded C',
    categoryColor: 'bg-blue-100 text-blue-800 border-blue-200',
    readTime: '12 min read',
    date: 'Nov 2024',
    author: 'Firmware Architecture Desk',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&h=450&q=80',
    excerpt: 'Eliminate byte-by-byte CPU interrupts on ARM Cortex-M microcontrollers to handle high-throughput packet streams with deterministic timing and zero packet drop.',
    tags: ['STM32', 'Bare-Metal C', 'Circular DMA', 'UART', 'Interrupts'],
    keyTakeaways: [
      'Enable UART IDLE line interrupt to detect packet endings without fixed payload lengths',
      'Configure DMA in circular mode to prevent software re-arming overhead between frames',
      'Use memory-to-peripheral FIFO streams with full cache coherence on Cortex-M7 cores',
      'Process packets outside ISR contexts to keep interrupt latency under 2 microseconds'
    ],
    codeSnippet: {
      filename: 'stm32_uart_dma.c',
      language: 'c',
      code: `// Configure UART Circular DMA with IDLE Line Detection
void UART_DMA_Init(void) {
    // 1. Enable Clocks for USART1 and DMA1
    RCC->APB2ENR |= RCC_APB2ENR_USART1EN;
    RCC->AHB1ENR |= RCC_AHB1ENR_DMA1EN;

    // 2. Set Peripheral & Memory Addresses
    DMA1_Stream5->PAR = (uint32_t)&USART1->DR;
    DMA1_Stream5->M0AR = (uint32_t)rx_buffer;
    DMA1_Stream5->NDTR = RX_BUFFER_SIZE;

    // 3. Configure DMA: Circular mode, Memory increment, High priority
    DMA1_Stream5->CR = DMA_SxCR_CIRC | DMA_SxCR_MINC | DMA_SxCR_PL_1 | DMA_SxCR_EN;

    // 4. Enable USART IDLE Interrupt and DMA Receiver
    USART1->CR1 |= USART_CR1_IDLEIE | USART_CR1_RE | USART_CR1_UE;
    USART1->CR3 |= USART_CR3_DMAR;
}`
    }
  },
  {
    id: 'tut-03',
    slug: 'automate-hardware-testing-python-pyserial',
    title: 'Automated Bench Testing with Python, PySerial & PyVISA for Custom Hardware',
    category: 'Python',
    categoryColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    readTime: '7 min read',
    date: 'Dec 2024',
    author: 'Hardware Automation Team',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=450&q=80',
    excerpt: 'Structure repeatable bench-top verification scripts that flash firmware, trigger edge conditions, sweep voltage rails, and validate power rails automatically.',
    tags: ['Python', 'PySerial', 'PyVISA', 'Automated Testing', 'SCPI', 'HIL'],
    keyTakeaways: [
      'Automate programmable power supply voltage margining (3.0V to 3.6V)',
      'Assert current consumption during sleep modes (< 5 µA validation)',
      'Parse binary responses and capture UART debug strings into structured test logs',
      'Integrate with pytest for one-click Pass/Fail hardware regression reports'
    ],
    codeSnippet: {
      filename: 'test_hardware_bringup.py',
      language: 'python',
      code: `import pyvisa
import serial
import pytest

@pytest.fixture(scope="module")
def power_supply():
    rm = pyvisa.ResourceManager()
    psu = rm.open_resource("USB0::0x2A8D::0x1202::MY12345678::INSTR")
    psu.write(":APPL CH1, 3.3, 0.5")
    psu.write(":OUTP CH1, ON")
    yield psu
    psu.write(":OUTP CH1, OFF")

def test_voltage_rail_tolerance(power_supply):
    voltage = float(power_supply.query(":MEAS:VOLT? CH1"))
    assert 3.28 <= voltage <= 3.32, f"VCC out of tolerance: {voltage}V"
    current = float(power_supply.query(":MEAS:CURR? CH1"))
    assert current < 0.080, f"Overcurrent detected: {current*1000}mA"`
    }
  },
  {
    id: 'tut-04',
    slug: 'mosfet-gate-charge-dynamics-high-side',
    title: 'MOSFET Gate Charge Dynamics: Mitigating Miller Plateau in High-Side Switching',
    category: 'Electronics',
    categoryColor: 'bg-purple-100 text-purple-800 border-purple-200',
    readTime: '11 min read',
    date: 'Jan 2025',
    author: 'Power Electronics Group',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&h=450&q=80',
    excerpt: 'Understanding gate drive current requirements, rise time calculations, and layout parasitic inductances that cause ringing and dv/dt shoot-through in buck converters.',
    tags: ['MOSFET', 'Gate Driver', 'Power Electronics', 'Miller Effect', 'Buck Converter'],
    keyTakeaways: [
      'Calculate peak gate current: I_peak = (V_drive - V_plateau) / R_gate_total',
      'Minimize loop area between gate driver output, gate pin, and source return',
      'Select low Q_gd (gate-to-drain charge) FETs to shorten switching transitions',
      'Use Schottky anti-parallel diodes across gate resistors to speed up turn-off'
    ],
    codeSnippet: {
      filename: 'gate_charge_calc.py',
      language: 'python',
      code: `# MOSFET Gate Drive Rise Time & Power Calculation
def calc_rise_time(q_gd_nc, v_drive_v, v_plateau_v, r_driver_ohm, r_gate_ext_ohm):
    r_total = r_driver_ohm + r_gate_ext_ohm
    i_gate_mid = (v_drive_v - v_plateau_v) / r_total
    t_rise_ns = (q_gd_nc * 1e-9) / i_gate_mid * 1e9
    return t_rise_ns

# Example: 12V Drive, 4.5V Plateau, 10nC Qgd, 5 Ohm total
t_sw = calc_rise_time(10.0, 12.0, 4.5, 2.0, 3.0)
print(f"Switching Transition Time: {t_sw:.2f} ns")`
    }
  },
  {
    id: 'tut-05',
    slug: 'stm32-gpio-timers-interrupts-starter',
    title: 'Getting Started with STM32: Bare-Metal GPIO, Hardware Timers & NVIC Interrupts',
    category: 'Microcontrollers',
    categoryColor: 'bg-sky-100 text-sky-800 border-sky-200',
    readTime: '10 min read',
    date: 'Nov 2024',
    author: 'LogicEMB Team',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&h=450&q=80',
    excerpt: 'A clean, step-by-step introduction to STM32 bare-metal development without IDE generator boilerplate. Configure clocks, output pins, and push-button interrupts.',
    tags: ['STM32', 'ARM Cortex', 'Registers', 'Blinky', 'GPIO'],
    keyTakeaways: [
      'Enable peripheral bus clock in RCC before accessing any peripheral register',
      'Use atomic BSRR (Bit Set/Reset Register) instead of read-modify-write on ODR',
      'Configure EXTI mask and trigger selection registers for external interrupts',
      'Clear pending interrupt flags in the ISR to prevent infinite re-triggering'
    ],
    codeSnippet: {
      filename: 'main.c',
      language: 'c',
      code: `#include "stm32f4xx.h"

int main(void) {
    // 1. Enable GPIOA clock
    RCC->AHB1ENR |= RCC_AHB1ENR_GPIOAEN;

    // 2. Configure PA5 as output (01 in MODER5)
    GPIOA->MODER &= ~(3U << (5 * 2));
    GPIOA->MODER |=  (1U << (5 * 2));

    while (1) {
        // Toggle PA5 atomically using BSRR
        GPIOA->BSRR = (1U << 5);         // Set High
        for (volatile int i = 0; i < 500000; i++);
        GPIOA->BSRR = (1U << (5 + 16));   // Set Low
        for (volatile int i = 0; i < 500000; i++);
    }
}`
    }
  },
  {
    id: 'tut-06',
    slug: 'real-time-hardware-telemetry-webserial-api',
    title: 'Real-Time Hardware Telemetry in the Browser with WebSerial API',
    category: 'JavaScript',
    categoryColor: 'bg-amber-100 text-amber-800 border-amber-200',
    readTime: '8 min read',
    date: 'Oct 2024',
    author: 'Web & IoT Division',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&h=450&q=80',
    excerpt: 'Stream sensor data from microcontrollers directly to your browser with the WebSerial API — no native drivers, no Electron, pure modern TypeScript and HTML5 canvas.',
    tags: ['WebSerial', 'JavaScript', 'TypeScript', 'IoT', 'Real-Time Dashboard'],
    keyTakeaways: [
      'Request access to USB CDC serial devices with navigator.serial.requestPort()',
      'Transform ReadableStream into Uint8Array chunks with a stream reader loop',
      'Decode packed binary packets using TypedArrays for low-overhead memory consumption',
      'Render 60FPS real-time graphs with HTML5 Canvas RequestAnimationFrame'
    ],
    codeSnippet: {
      filename: 'useWebSerial.ts',
      language: 'typescript',
      code: `export async function connectSerial(baudRate = 115200) {
  if (!('serial' in navigator)) {
    throw new Error('WebSerial not supported in this browser');
  }

  // 1. User selects COM / USB device via native browser prompt
  const port = await (navigator as any).serial.requestPort();
  await port.open({ baudRate });

  // 2. Read incoming binary stream continuously
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      if (value) {
        // value is a Uint8Array containing raw bytes
        handleRawPacket(value);
      }
    }
  } finally {
    reader.releaseLock();
  }
}`
    }
  }
]

export const CHEAT_SHEETS = [
  {
    id: 'cs-01',
    title: 'STM32 Pinout & Alternate Function Reference',
    category: 'Firmware',
    description: 'Quick reference cheat sheet for GPIO modes, timer channels, UART/SPI/I2C pin mappings, and interrupt lines on popular STM32F4/G4/H7 MCUs.',
    downloadCount: '4.8k downloads',
    format: 'PDF Guide + Table'
  },
  {
    id: 'cs-02',
    title: 'IPC-2152 PCB Trace Width & Current Capacity Chart',
    category: 'Hardware',
    description: 'Look-up table for internal vs external copper trace widths, temperature rise (10°C to 30°C), and 1oz/2oz current carrying limits.',
    downloadCount: '6.2k downloads',
    format: 'Interactive Tool & PDF'
  },
  {
    id: 'cs-03',
    title: 'Decoupling Capacitor & Power Plane Placement Rules',
    category: 'PCB Design',
    description: 'Guidelines on MLCC package selection (0402 vs 0603), ESL minimization, via-in-pad vs via-next-to-pad, and resonance suppression.',
    downloadCount: '3.9k downloads',
    format: 'Cheatsheet'
  },
  {
    id: 'cs-04',
    title: 'Serial Protocols Compared: UART vs SPI vs I2C vs CAN',
    category: 'Protocols',
    description: 'Complete comparison of throughput, wire count, arbitration, distance limits, clocking, and typical hardware schematic pull-up circuits.',
    downloadCount: '7.1k downloads',
    format: 'Reference Sheet'
  }
]
