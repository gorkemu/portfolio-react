/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#2C3333",
      light: "#CBE4DE",
      navy: "#00235B",
      red: "#E21818",
      yellow: "#FFDD83",
      teal: "#0E8388",
    },
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "sans-serif"],
        jost: ["Jost, sans-serif"],
      },
    },
  },
  plugins: [],
};
