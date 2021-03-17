const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      lightblue: colors.lightBlue,
      green: colors.emerald,

      primary: {
        lighter: "#00db6a",
        DEFAULT: "#00a850",
        darker: "#007539",
      },
    },
    extend: {
      listStyleType: {
        chevron: '"❯ "',
      },
      transitionProperty: {
        height: "max-height",
        textshadow:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, text-shadow",
        bg:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, background-position, background-size",
      },
      fontFamily: {
        // sans: ["Roboto", "Arial", "sans-serif"],
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        display: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        print: {
          raw: "print",
        },
        keyboard: {
          raw: "screen and (max-height: 370px) and (max-aspect-ratio: 13/9)",
        },
      },
      height: {
        "screen-1/2": "50vh",
        "screen-1/3": "33.333333vh",
        "screen-2/3": "66.666667vh",
        "screen-1/4": "25vh",
        "screen-2/4": "50vh",
        "screen-3/4": "75vh",
        "screen-1/5": "20vh",
        "screen-2/5": "40vh",
        "screen-3/5": "60vh",
        "screen-4/5": "80vh",
        "screen-1/6": "16.666667vh",
        "screen-2/6": "33.333333vh",
        "screen-3/6": "50vh",
        "screen-4/6": "66.666667vh",
        "screen-5/6": "83.333333vh",
      },
      minHeight: {
        "screen-1/2": "50vh",
        "screen-1/3": "33.333333vh",
        "screen-2/3": "66.666667vh",
        "screen-1/4": "25vh",
        "screen-2/4": "50vh",
        "screen-3/4": "75vh",
        "screen-1/5": "20vh",
        "screen-2/5": "40vh",
        "screen-3/5": "60vh",
        "screen-4/5": "80vh",
        "screen-1/6": "16.666667vh",
        "screen-2/6": "33.333333vh",
        "screen-3/6": "50vh",
        "screen-4/6": "66.666667vh",
        "screen-5/6": "83.333333vh",
      },
      maxHeight: {
        "screen-1/2": "50vh",
        "screen-1/3": "33.333333vh",
        "screen-2/3": "66.666667vh",
        "screen-1/4": "25vh",
        "screen-2/4": "50vh",
        "screen-3/4": "75vh",
        "screen-1/5": "20vh",
        "screen-2/5": "40vh",
        "screen-3/5": "60vh",
        "screen-4/5": "80vh",
        "screen-1/6": "16.666667vh",
        "screen-2/6": "33.333333vh",
        "screen-3/6": "50vh",
        "screen-4/6": "66.666667vh",
        "screen-5/6": "83.333333vh",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
}
