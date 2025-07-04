/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#3C3529',
        accent: '#A5987B',
        light: '#EAE2DC',
        white: '#FFFFFF',
        green: '#22C55E',
      },
      fontFamily: {
        'aeonik': ['Aeonik', 'sans-serif'],
        'onest': ['Onest', 'sans-serif'],
        'switzer': ['Switzer', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['61.04px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h1-desktop': ['89.76px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2-mobile': ['48.83px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2-desktop': ['67.34px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h3-mobile': ['32px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3-desktop': ['40px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h4-mobile': ['20px', { lineHeight: '1.4' }],
        'h4-desktop': ['24px', { lineHeight: '1.3' }],
        'h5-mobile': ['25px', { lineHeight: '1.4' }],
        'h5-desktop': ['28.43px', { lineHeight: '1.3' }],
        'h6-mobile': ['20px', { lineHeight: '1.4' }],
        'h6-desktop': ['21.33px', { lineHeight: '1.3' }],
        'body-mobile': ['1rem', { lineHeight: '1.6' }],
        'body-desktop': ['1.125rem', { lineHeight: '1.7' }],
        'subtitle-mobile': ['1.3rem', { lineHeight: '1.6' }],
        'subtitle-desktop': ['1.46rem', { lineHeight: '1.7' }],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}