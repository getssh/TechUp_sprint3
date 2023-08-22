/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
      facebook: 'hsl(var(--color-facebook) / <alpha-value>)',
      twitter: 'hsl(var(--color-twitter) / <alpha-value>)',
      instaone: 'hsl(var(--color-insta-one) / <alpha-value>)',
      instatwo: 'hsl(var(--color-insta-two) / <alpha-value>)',
      youtube: 'hsl(var(--color-youtube) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
