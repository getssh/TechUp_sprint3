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
      lightcardbg: 'hsl(var(--light-card-bg) / <alpha-value>)',
      lighttextone: 'hsl(var(--light-text-one) / <alpha-value>)',
      lighttexttwo: 'hsl(var(--light-text-two) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right, var(--color-insta-one), var(--color-insta-two))',
      },
    },
  },
  plugins: [],
}
