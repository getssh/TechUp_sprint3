/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        facebook: 'hsl(var(--color-facebook) / <alpha-value>)',
        twitter: 'hsl(var(--color-twitter) / <alpha-value>)',
        instaone: 'hsl(var(--color-insta-one) / <alpha-value>)',
        instatwo: 'hsl(var(--color-insta-two) / <alpha-value>)',
        youtube: 'hsl(var(--color-youtube) / <alpha-value>)',
        lightcardbg: 'hsl(var(--light-card-bg) / <alpha-value>)',
        lighttopbg: 'hsl(var(  --light-top-bg) / <alpha-value>)',
        lighttextone: 'hsl(var(--light-text-one) / <alpha-value>)',
        lighttexttwo: 'hsl(var(--light-text-two) / <alpha-value>)',
        darkblueone: 'hsl(var(--dark-blue-one) / <alpha-value>)',
        darkbluetwo: 'hsl(var(--dark-blue-two) / <alpha-value>)',
        darkbluethree: 'hsl(var(--dark-blue-three) / <alpha-value>)',
        darkbluefour: 'hsl(var(--dark-blue-four) / <alpha-value>)',
        darktopbg: 'hsl(var(--dark-top-bg) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
