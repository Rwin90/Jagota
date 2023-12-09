/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      blue: "#005fdb",
      green: "#0a7637",
      red: "#ca150c",
      headingText: "#192434",
      bodyText: "#263445",
      secondaryText: "#626d7c",
    },
  },
  plugins: [],
};
