/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space_cadet: '#22223b',
        Isabelline: '#f2e9e4',
IsabellineDark: '#E3DBD7',
independence: '#4a4e69',
heliotrope_gray: '#9a8c98',
silver_pink: '#c9ada7',
      },
      fontFamily: {
        'BebasNeue': 'bebasneue',
        'Josefin':'josefin',
      },

      
    },
  },
  plugins: [],
}