/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      screens: {
        'xs': { 'max': '399px' },
        'sm': '520px',
      },
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        facebook: 'hsl(var(--color-facebook) / <alpha-value>)',
        twitter: 'hsl(var(--color-twitter) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
