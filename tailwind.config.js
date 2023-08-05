/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        roboto:['Roboto', 'sans-serif']
      },

      colors: {
        'Tred': "#BC1A45",
        'Tmelon':"#FFD369",
        'Tgrey':"#DDDDDD",
        'Twhite':"#F7F7F7"
      }
    },
  },
  plugins: [],
}

