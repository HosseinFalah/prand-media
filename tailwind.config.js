/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './common/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        secondary: {
          50: '#ddd',
          100: '#d1d0cf26',
          900: '#1c212e',
          950: '#131722'
        },
        primary: {
          900: '#3e87f5'
        }
      },
      fontFamily: {
        sans: ["var(--font-yekan)", ...fontFamily.sans],
      }
    }
  },
  plugins: [],
}
