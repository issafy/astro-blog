/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,mdx,svelte,ts,tsx,vue}',
		'./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	// content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('@tailwindcss/typography'),
	],
}
