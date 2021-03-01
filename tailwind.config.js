module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      dark: "#2E3675",
      yellow: "#FFB41F",
      red: "#FF4A4A",
      blue: "#4D76F7",
      gray: {
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
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
  plugins: [],
};
