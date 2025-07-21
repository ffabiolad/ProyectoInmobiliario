/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hauzgo': {
          50: '#f2f8ec',
          100: '#e5f1d9',
          200: '#cae3b3',
          300: '#a0cd7d',
          400: '#7db856',
          500: '#629936',  // color principal
          600: '#4c7d2c',
          700: '#3b6123',
          800: '#2f4e1d',
          900: '#264018',
          1000: '#47b2a990',
        }
      }
    },
  },
  plugins: [],
}