/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#31363F',
        secondary: '#222831',
        third: '#76ABAE',
        white: '#eeeeee'
      }
    },
  },
  plugins: [],
}