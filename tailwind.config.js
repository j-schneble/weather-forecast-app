/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'yellow': "#E9C50E",
        'skyblue': "#107CEF ",
        'black2': "#2A2A29",
        'litewite': "#F1F1EF",
        'black3': "#4C4C4C",
        'maybe': "#ACA8AF",
        'again': "#CBC8CD",
        'sarah': "#5595FD",
      },
      backgroundImage: {
        'nature-light': "url('/nature-light.jpg')",
        'nature-dark': "url('/nature-dark.png')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}