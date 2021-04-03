const tailwindScreen = require("tailwindcss-debug-screens");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "3rem",
      "7xl": "7rem",
      full: "9999px",
      25: "25%",
      50: "50%",
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "10v": "10vh",
      "20v": "20vh",
      "25v": "25vh",
      "30v": "30vh",
      "40v": "40vh",
      "50v": "50vh",
      "60v": "60vh",
      "70v": "70vh",
      "75v": "75vh",
      "80v": "80vh",
      "90v": "90vh",
      "100v": "100vh",
    }),
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "10v": "10vw",
      "20v": "20vw",
      "25v": "25vw",
      "30v": "30vw",
      "40v": "40vw",
      "50v": "50vw",
      "60v": "60vw",
      "70v": "70vw",
      "75v": "75vw",
      "80v": "80vw",
      "90v": "90vw",
      "100v": "100vw",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
      "10v": "10vw",
      "20v": "20vw",
      "25v": "25vw",
      "30v": "30vw",
      "40v": "40vw",
      "50v": "50vw",
      "60v": "60vw",
      "70v": "70vw",
      "80v": "80vw",
      "90v": "90vw",
      "100v": "100vw",
      ...breakpoints(theme("screens")),
    }),
    minWidth: (theme, { breakpoints }) => ({
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
      "10v": "10vw",
      "20v": "20vw",
      "25v": "25vw",
      "30v": "30vw",
      "40v": "40vw",
      "50v": "50vw",
      "60v": "60vw",
      "70v": "70vw",
      "80v": "80vw",
      "90v": "90vw",
      "100v": "100vw",
      ...breakpoints(theme("screens")),
    }),
    spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
      75: "18.75rem",
      80: "20rem",
      "10v": "10vw",
      "15v": "15vw",
      "20v": "20vw",
      "25v": "25vw",
      "30v": "30vw",
      "40v": "40vw",
      "50v": "50vw",
      "60v": "60vw",
      "70v": "70vw",
      "80v": "80vw",
      "90v": "90vw",
      "100v": "100vw",
      "5h": "5vh",
      "10h": "10vh",
      "15h": "15vh",
      "20h": "20vh",
      "25h": "25vh",
      "30h": "30vh",
      "40h": "40vh",
      "50h": "50vh",
      "60h": "60vh",
      "70h": "70vh",
      "80h": "80vh",
      "90h": "90vh",
      "100h": "100vh",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      dark: "#2E3675",
      yellow: "#FFB41F",
      red: "#FF4A4A",
      blue: "#4D76F7",
      green: "#10B981",
      gray: {
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
    },
    fontFamily: {
      serif: ["Poppins", "Arial", " -apple-system", "ui-sans-serif"],
      display: [
        "Fredoka One",
        "Poppins",
        "Arial",
        " -apple-system",
        "ui-sans-serif",
      ],
    },
    fontWeight: {
      thin: 300,
      regular: 400,
      bold: 700,
      black: 900,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindScreen],
};
