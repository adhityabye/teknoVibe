/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-100": "#C8E1FF",
        "blue-200": "#0057BD",
        "blue-300": "#3692FF",
        "blue-900": "#1C4188",
        "black-800": "#282828",
        "black-900": "#3A3A3A",
      },
    },
  },
  plugins: [],
}