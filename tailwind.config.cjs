/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				bgf: "url('/background.jpg')"
			}
		}
	},

	plugins: []
};

module.exports = config;
