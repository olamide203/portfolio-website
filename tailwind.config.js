/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Calibre', ...defaultTheme.fontFamily.sans],
			},
			gridTemplateColumns: {
				'auto-1fr': 'auto 1fr',
				'1fr-auto': '1fr auto',
				'auto-fit-skills': 'repeat(auto-fit, minmax(90px, 1fr))',
			},
		},
		colors: {
			neutral: {
				50: '#FFFFFF',
				100: '#FDFEFF',
				700: '#1E1E1E',
				800: '#1A1A1A',
				900: '#121415',
			},
			blue: {
				50: 'hsla(199, 58%, 66%, 0.1)',
				100: '#B8D9FB',
				200: '#77BBDB',
				400: '#44A2D2',
				600: '#102351',
			},
			navy: {
				500: '#112240',
				700: '#0B193C',
				800: '#020C1B',
			},
			slate: {
				50: '#CCD6FC',
				100: '#8892B0',
				300: '#688EA1',
				500: '#3B6D86',
			},
			green: {
				100: '#64FFDA',
				200: '#57CBFF',
			},
		},
	},
	plugins: [],
};
