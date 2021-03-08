const tailwindcss = require("tailwindcss");
const autoPrefixer = require("autoprefixer");

module.exports = {
  style: {
    postcss: {
      plugins: [tailwindcss, autoPrefixer],
    },
  },
};
