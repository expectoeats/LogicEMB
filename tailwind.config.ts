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
          DEFAULT: '#FF6B00',
          50:  '#FFF5F0',
          100: '#FFE8DB',
          200: '#FFD1B3',
          300: '#FFB380',
          400: '#FF944D',
          500: '#FF6B00',
          600: '#FF8533',
          700: '#CC5500',
          800: '#B34B00',
          900: '#994000',
        },
        secondary: '#1a1a2e',
        accent: '#00A8E8',
        gfg: {
          green:    '#FF6B00',
          darkGreen:'#CC5500',
          lightGreen:'#FFF5F0',
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
