const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          lighter: "#00db6a",
          DEFAULT: "#00a850",
          darker: "#007539",
        },
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        lightblue: colors.lightBlue,
      },
      backgroundColor: {
        primary: {
          lighter: "#00db6a",
          DEFAULT: "#00a850",
          darker: "#007539",
        },
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        lightblue: colors.lightBlue,
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
      gradientColorStops: {
        lime: "#0fd95c",
        primary: "#00a850",
        darkgreen: "#008a47",
      },
      backgroundImage: {
        gradient: "url(https://products.ls.graphics/mesh-gradients/images/89.-Canvas_1.jpg)",
        "dark-gradient":
          "url(https://products.ls.graphics/mesh-gradients/images/100.-Chetwode-Blue.jpg)",
      },
      screens: {
        print: {
          raw: "print",
        },
        keyboard: {
          raw: "screen and (max-height: 370px) and (max-aspect-ratio: 13/9)",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
      backgroundPosition: ["dark"],
      textColor: ["active"],
    },
  },
  plugins: [],
}
