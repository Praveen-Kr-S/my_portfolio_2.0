/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'secondary' :  "#2b2d77"
      }
    },
    fontFamily:{
      'hero-font' : 'Sriracha',
    },
  },
  plugins: [],
}

