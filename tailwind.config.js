/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        '9xl': '1px 2px 8px 1px rgba(0, 0, 0, 0.25)',
        '8xl' : '1px 2px 8px 1px rgba(255, 255, 255, 0.28)'
      }
    },
    colors: {
      // #1E656D #fc4445
      lightb : "#fc4445",
      darko : "#EDB83D",
      purple : "#1E656D",
      light : "#F1F3CE",
      black : "#000000"
    },
  },
  plugins: [],
}
