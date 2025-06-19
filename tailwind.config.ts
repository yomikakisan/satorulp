/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f8f8',
        foreground: '#0a0a0a',
        accent: '#000000',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.9' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        'title': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
        'text-reveal': 'textReveal 1.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};