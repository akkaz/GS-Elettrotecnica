/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-brand-primary)',
          light: 'var(--color-brand-primary-light)',
          lighter: 'var(--color-brand-primary-lighter)',
          dark: 'var(--color-brand-primary-dark)',
          darker: 'var(--color-brand-primary-darker)',
          50: '#E6F7F9',
          100: '#CCF0F3',
          200: '#99E0E7',
          300: '#66D1DB',
          400: '#33C1CF',
          500: 'var(--color-brand-primary)',
          600: 'var(--color-brand-primary-dark)',
          700: '#004C56',
          800: '#00333A',
          900: '#001A1D',
        },
        accent: {
          DEFAULT: 'var(--color-brand-secondary)',
          light: 'var(--color-brand-secondary-light)',
          dark: 'var(--color-brand-secondary-dark)',
          50: '#FFE6E6',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: 'var(--color-brand-secondary)',
          600: '#8F0000',
          700: '#6B0000',
          800: '#480000',
          900: '#240000',
        },
        'bg-dark': {
          DEFAULT: 'var(--color-bg-dark)',
          alt: 'var(--color-bg-dark-alt)',
          card: 'var(--color-bg-dark-card)',
          lighter: 'var(--color-bg-dark-lighter)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
}
