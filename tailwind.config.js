/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '76': '19rem', // You can customize the value
      },
      colors: {
        'afblue': '#013789',
        'scblue': '#1B1464',
        'dcpink': '#FF3333',
        'fopink': '#EE5B5B',
        'eugreen': '#32EA8E',
        'magreen': '#5BEEA5',
        'gray-common': '#A1A1A1',
        'gray-light': '#E3E3E3'
      },
      backgroundImage :{
        'back': '#FFFFFF'
      }
    },
  },
  plugins: [],
  important: true,
}