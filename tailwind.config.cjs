// lib
const path = require('path');
const svelteTailwindCSSUIPath = require.resolve('svelte-tailwindcss-ui');
const purgePath = path.join(svelteTailwindCSSUIPath, '../', '../', '**', '*.{html,js,svelte,js}');

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}", purgePath],

  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#e1faef",
          "100": "#b5f3d8",
          "200": "#7deabf",
          "300": "#08e2a4",
          "400": "#00da8e",
          "500": "#00d07a",
          "600": "#00c06e",
          "700": "#00ac60",
          "800": "#009a53",
          "900": "#00793c"
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      zIndex: {
        auto: 'auto'
      }
    }
  },

  plugins: []
};

module.exports = config;