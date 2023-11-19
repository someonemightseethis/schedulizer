// Import the tw-elements plugin using ES module syntax
import twElementsPlugin from "tw-elements/dist/plugin.cjs";
import tailwindcssAnimated from "tailwindcss-animated";
import taosScrollAnimations from "taos/plugin";
/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	transform: {
		content: (content) => content.replace(/taos:/g, ""),
	},
	theme: {
		fontFamily: {
			bebas: ["Bebas Neue", "sans-serif"],
			smooch: ["Smooch Sans", "sans-serif"],
			monSubrayada: ['Montserrat Subrayada', 'sans-serif'],
      cairoPlay: ['Cairo Play', 'sans-serif']
		},
		extend: {},
	},
	plugins: [twElementsPlugin, tailwindcssAnimated, taosScrollAnimations],
	darkMode: "class",
	safelist: [
		"!duration-[0ms]",
		"!delay-[0ms]",
		'html.js :where([class*="taos:"]:not(.taos-init))',
	],
};
