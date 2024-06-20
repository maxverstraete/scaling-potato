const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "green-dark": "#1E2019",
        brown: "#4E3F36",
        beige: "#F2E8CF",
      },
      fontFamily: {
        sans: ["roboto", ...defaultTheme.fontFamily.sans],
        serif: ["eb-garamond", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        md: "17px",
      },
    },
  },
  plugins: [],
};
