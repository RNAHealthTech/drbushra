/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F9E5E5',
        'peacher': '#F9D5D3',
        'foreground': '#232020',
        'accent': '#FFF',
        'buttonish': '#fff',
        'cardish': '#FCE3E3',
        'new': '#FCECEC',
        'peachy': '#F0E3C9'
      },
      fontFamily: {
        'fraunces-slab': ['Fraunces', 'serif'],
        'work-sans-slab': ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

