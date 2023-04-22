/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			themeYellow: "#f7cb2d",
			themeLtBlueGray: "#a2c4e0",
			themeBlueGray: "#82a4e3",
			themeDkBlueGray: "#52688F",
			avocadoBackground: "#387f5f",
			avocadoText: "#efebe4",
			eggBackground: "#ff9d00",
			eggText: "#523200",
			readsBackground: "#f7dfff",
			readsText: "#140024",
		},
		fontFamily: {
			theme: "",
			avocadoText: ["Hind Madurai", "sans-serif"],
			eggTitle: ["Grandstander", "cursive"],
			eggText: ["Nunito", "sans-serif"],
			readsTitle: ["DM Serif Text", "sans"],
			readsText: ["Quicksand", "sans-serif"],
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {},
	},
	plugins: [],
};
