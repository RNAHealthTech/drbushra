/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7EED9',
        'foreground': '#232020',
        'accent': '#FFFF00',
      },
      fontFamily: {
        'fraunces-slab': ['Fraunces', 'serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

