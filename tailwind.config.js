/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'afblue':'#013789',
        'scblue':'#1B1464',
        'gray-common':'#A1A1A1',
        'gray-light':'#E3E3E3'
      }
    },
  },
  plugins: [],
  important: true,
}