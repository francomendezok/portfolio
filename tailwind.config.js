/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

