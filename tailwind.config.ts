import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2f8d46',
          50:  '#f0faf2',
          100: '#d9f2de',
          200: '#b4e4be',
          300: '#7ecf91',
          400: '#44b25e',
          500: '#2f8d46',
          600: '#237036',
          700: '#1d5a2c',
          800: '#194825',
          900: '#163c20',
        },
        secondary: '#1a1a2e',
        accent: '#ff6b35',
        gfg: {
          green:    '#2f8d46',
          darkGreen:'#1b5e20',
          lightGreen:'#e8f5e9',
          gray:     '#5f6368',
          lightGray:'#f8f9fa',
          border:   '#e0e0e0',
          text:     '#202124',
          textLight:'#5f6368',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Consolas', 'monospace'],
        code:  ['Fira Code', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
}

export default config
