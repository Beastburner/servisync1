/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B365D', // navy blue
          dark: '#0F1E33',
          light: '#264573'
        },
        secondary: {
          DEFAULT: '#1F2937', // dark grey
          dark: '#111827',
          light: '#374151'
        },
        neutral: {
          DEFAULT: '#4B5563',
          dark: '#374151',
          light: '#9CA3AF'
        }
      },
      keyframes: {
        loading: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        loading: 'loading 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
