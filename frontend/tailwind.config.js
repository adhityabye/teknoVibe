/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
        josefin: ["Josefin Sans", "sans"],
      },
      colors: {
        "white-100": "#FBFBFB",
        "black-800": "#282828",
        "black-900": "#2E2E2E",
        "gray-100": "#EAEAEA",
        "gray-200": "#B1B1B1",
        "gray-300": "#757575",
        "gray-400": "#D4D4D4",
        "gray-500": "#5C5C5C",
        "purple-100": "rgba(86, 75, 188, 0.14)",
        "purple-200": "#564BBC",
        "purple-900": "#202B51",
        "gray-input": "#EAEAEA",
        "button-dark": "#202B51",
      },
      backgroundImage: {
        "gradient-purple":
          "linear-gradient(90deg, #564BBC 35.92%, #564BBC 35.92%, #564BBC 35.93%, #393275 118.85%)",
      },
    },
  },
  plugins: [],
};
