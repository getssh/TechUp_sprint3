/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        screens: {
          'xs': { 'max': '399px' },
          'sm': '641px',
        },
      },
    },
  },
  plugins: [],
}
