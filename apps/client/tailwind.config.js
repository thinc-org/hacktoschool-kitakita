// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css,scss}",
    "../../packages/design/src/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-light": "#F6F5F4",
        "gray-dark": "#757575",
        "gray-icon": "#BABABA",
        "cyan-light": "#C3DCE3",
        "cyan-dark": "#2B788B",
        "pink-light": "#F2D4DC",
        "pink-dark": "#945069",
      },
      fontFamily: {
        sans: ["Dela Gothic One"],
        sansSerif: ["Montserrat", "sans-serif"],
      },
    },
  },
};

module.exports = config;
