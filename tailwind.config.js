/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#d9e5ff',
          200: '#bcd2ff',
          300: '#8eb5ff',
          400: '#598dff',
          500: '#3366ff',
          600: '#1a44f5',
          700: '#1433e1',
          800: '#172cb6',
          900: '#192a8f',
          950: '#131c57',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 12px 28px rgba(0, 0, 0, 0.06)',
        'elevated': '0 12px 40px rgba(0, 0, 0, 0.1)',
        'glow-blue': '0 0 20px rgba(51, 102, 255, 0.15)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.15)',
      },
      backgroundImage: {
        'mesh-light': 'radial-gradient(at 40% 20%, rgba(51, 102, 255, 0.04) 0, transparent 50%), radial-gradient(at 80% 0%, rgba(120, 119, 198, 0.06) 0, transparent 50%), radial-gradient(at 0% 50%, rgba(51, 102, 255, 0.03) 0, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
