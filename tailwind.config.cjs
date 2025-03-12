const plugin = require('tailwindcss/plugin.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx,mdx}'],
	darkMode: ['variant', ['@media (prefers-color-scheme: dark) { &:not(.light *) }']],
	theme: {
		extend: {
			animationTimingFunction: {
				bounce: `linear(
          /* Start to 1st bounce */
          0, 0.004, 0.016, 0.035, 0.063 9.1%, 0.141, 0.25, 0.391, 0.563, 0.765, 1,
          /* 1st to 2nd bounce */
          0.891, 0.813 45.5%, 0.785, 0.766, 0.754, 0.75, 0.754, 0.766, 0.785, 0.813 63.6%, 0.891, 1 72.7%,
          /* 2nd to 3rd bounce */
          0.973, 0.953, 0.941, 0.938, 0.941, 0.953, 0.973, 1,
          /* 3rd bounce to end */
          0.988, 0.984, 0.988, 1
        );`,
				elastic: `linear(
          0, 0.218 2.1%, 0.862 6.5%, 1.114, 1.296 10.7%, 1.346, 1.37 12.9%, 1.373,
          1.364 14.5%, 1.315 16.2%, 1.032 21.8%, 0.941 24%, 0.891 25.9%, 0.877,
          0.869 27.8%, 0.87, 0.882 30.7%, 0.907 32.4%, 0.981 36.4%, 1.012 38.3%, 1.036,
          1.046 42.7% 44.1%, 1.042 45.7%, 0.996 53.3%, 0.988, 0.984 57.5%, 0.985 60.7%,
          1.001 68.1%, 1.006 72.2%, 0.998 86.7%, 1
        );`,
			},
			animationDuration: {
				'2s': '2s',
				'1.5s': '1.5s',
			},
			animationDelay: {
				'2s': '2s',
			},
			fontFamily: {
				title: ['Arima', 'Arima Fallback'],
				subheader: ['Kreon', 'Kreon Fallback'],
			},
			supports: {
				'no-view-driven-animations': 'not(animation-timeline: view())',
			},
			colors: {
				background: 'oklch(var(--background))',
				foreground: 'oklch(var(--foreground) / <alpha-value>)',
				deemphasised: 'oklch(var(--deemphasised))',
				card: {
					background: 'oklch(var(--card-background))',
					foreground: 'oklch(var(--card-foreground))',
				},

				secondary: 'hsl(var(--secondary))',
				'secondary-invert': 'hsl(var(--secondary-invert))',

				link: 'oklch(var(--link))',

				primary: {
					50: 'oklch(var(--primary-50))',
					100: 'oklch(var(--primary-100))',
					200: 'oklch(var(--primary-200)',
					300: 'oklch(var(--primary-300))',
					400: 'oklch(var(--primary-400))',
					500: 'oklch(var(--primary-500))',
					600: 'oklch(var(--primary-600))',
					700: 'oklch(var(--primary-700))',
					800: 'oklch(var(--primary-800))',
					900: 'oklch(var(--primary-900))',
					950: 'oklch(var(--primary-950))',
				},
				accent: {
					DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
				},
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.transition-theme': {
					transition: 'var(--bg-transition), var(--color-transition)',
				},
			});
		},
		require('@anuragroy/tailwindcss-animate'),
		require('@tailwindcss/typography'),
	],
};
