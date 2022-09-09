/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		extend: {
			boxShadow: {
				big: "0 0px 100px 10px rgba(1, 1, 1, .1)",
			},
			colors: {
				bg: "var(--background-color)",
				darkBg: "var(--dark-background-color)",
				line: "var(--line-color)",
				text: "var(--text-color)",
				shad: "var(--shadow-color)",
				red: "rgb(250 110 109)",
				blue: "rgb(116 240 248)",
				pink: "rgb(217 130 247)",
				myGray: "var(--my-gray)",
			},
			fontFamily: {
				sans: "var(--font-Roboto)",
				Raley: "var(--font-Raleway)",
				MsMadi: "var(--font-MsMadi)",
			},
		},
	},
	plugins: [],
};
