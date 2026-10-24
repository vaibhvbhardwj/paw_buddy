/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FCFBF8',
          subtle: '#F8F6F0',
          muted: '#F2EFE9',
          border: '#E8E4DD',
        },
        charcoal: {
          DEFAULT: '#1E2220',
          soft: '#2C322F',
          muted: '#5C6460',
          light: '#8C9490',
        },
        forest: {
          50: '#F2F7F4',
          100: '#E3EDE7',
          200: '#C7DCCF',
          300: '#9BBEA7',
          500: '#2D6A4F',
          700: '#1B4332',
          800: '#143527',
          900: '#0E261C',
          DEFAULT: '#1B4332',
          hover: '#143527',
        },
        sage: {
          50: '#F4F6F3',
          100: '#E8EDE6',
          200: '#D5DFD1',
          500: '#7A8C76',
          700: '#52604F',
          DEFAULT: '#7A8C76',
        },
        clay: {
          50: '#FAF3EE',
          100: '#F5E6DC',
          200: '#EBCBB8',
          500: '#C87D55',
          700: '#A15D39',
          DEFAULT: '#C87D55',
          hover: '#B56D46',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '14px',
        'card-lg': '18px',
      },
      boxShadow: {
        'soft': '0 2px 8px -1px rgba(27, 67, 50, 0.04), 0 1px 3px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 16px -2px rgba(27, 67, 50, 0.05), 0 2px 6px -2px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 28px -4px rgba(27, 67, 50, 0.09), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'drawer': '-8px 0 32px rgba(0, 0, 0, 0.08)',
        'modal': '0 24px 48px -12px rgba(0, 0, 0, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        drawerSlide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'scale-in': 'scaleIn 0.22s ease-out forwards',
        'drawer-slide': 'drawerSlide 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
