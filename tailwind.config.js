/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html'],
  theme: {
    screens: {
      'xs': '320px'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

