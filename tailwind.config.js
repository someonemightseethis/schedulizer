// Import the tw-elements plugin using ES module syntax
import twElementsPlugin from "tw-elements/dist/plugin.cjs";
import tailwindcssAnimated from 'tailwindcss-animated';
import taosScrollAnimations from 'taos/plugin';
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  transform: {
    content: (content) => content.replace(/taos:/g, ''),
  },
  theme: {
    extend: {},
  },
  plugins: [twElementsPlugin, tailwindcssAnimated, taosScrollAnimations],
  darkMode: "class",
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};