// Import the tw-elements plugin using ES module syntax
import twElementsPlugin from "tw-elements/dist/plugin.cjs";
import tailwindcssAnimated from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	transform: {},
	theme: {
		fontFamily: {
			bebas: ["Bebas Neue", "sans-serif"],
			smooch: ["Smooch Sans", "sans-serif"],
			cairoPlay: ["Cairo Play", "sans-serif"],
			dosis: ["Dosis", "sans-serif"],
			jaldi: ["Jaldi", "sans-serif"],
			muktaVaani: ["Mukta Vaani", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
			ptSansCaption: ["PT Sans Caption", "sans-serif"],
			reemKufi: ["Reem Kufi Fun", "sans-serif"],
		},
		extend: {},
	},
	plugins: [twElementsPlugin, tailwindcssAnimated],
	darkMode: "class",
	safelist: [
		"!duration-[0ms]",
		"!delay-[0ms]",
		'html.js :where([class*="taos:"]:not(.taos-init))',
	],
};
