/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7EED9',
        'peacher': '#F0E3C9',
        'foreground': '#232020',
        'accent': '#FFFF00',
        'buttonish': '#e8cf41',
        'cardish': '#edd0a1',
        'new': '#967b50'
      },
      fontFamily: {
        'fraunces-slab': ['Fraunces', 'serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

