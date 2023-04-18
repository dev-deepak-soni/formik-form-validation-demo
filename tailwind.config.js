const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  plugins: [],
}