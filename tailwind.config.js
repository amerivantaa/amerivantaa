/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B4F9C',
          dark: '#052C56',
          light: '#EAF2FC',
        },
        // "accent" now a brighter blue instead of orange — keeps the
        // rest of the codebase (bg-accent, etc.) unchanged, only the
        // palette moves. Change these two values to re-theme the CTAs.
        accent: {
          DEFAULT: '#1E7FE0',
          dark: '#1565C0',
        },
        ink: '#16202A',
        muted: '#5B6B7C',
        surface: '#F5F8FC',
        border: '#E3E8EE',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(11, 79, 156, 0.08)',
        cardHover: '0 12px 32px rgba(11, 79, 156, 0.14)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
