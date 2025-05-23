import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../../packages/ui/src/**/*.{html,js,svelte,ts}'
	],
	darkMode: ['class'],
	plugins: [animate],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundImage: {
				spotlight:
					'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), var(--spotlightColor), transparent 40%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'even-accent': '0 0 4px 0 var(--accentHard-alt1)'
			},
			colors: {
				accentHard: {
					alt1: 'var(--accentHard-alt1)',
					alt2: 'var(--accentHard-alt2)',
					alt3: 'var(--accentHard-alt3)',
					alt4: 'var(--accentHard-alt4)',
					DEFAULT: 'var(--accentHard-alt1)',
					foreground: 'var(--foreground)',
					start: 'var(--accentHard-start)'
				},
				accentSubtle: {
					alt1: 'var(--accentSubtle-alt1)',
					alt2: 'var(--accentSubtle-alt2)',
					alt3: 'var(--accentSubtle-alt3)',
					alt4: 'var(--accentSubtle-alt4)',
					DEFAULT: 'var(--accentSubtle-alt1)',
					foreground: 'var(--foreground)',
					start: 'var(--accentSubtle-start)'
				},
				background: {
					accent: 'var(--background-accent)',
					DEFAULT: 'var(--background-start)',
					foreground: 'var(--foreground)',
					start: 'var(--background-start)'
				},
				border: 'var(--accentSubtle-alt2)',

				card: {
					DEFAULT: 'var(--background-start)',
					foreground: 'var(--foreground)'
				},

				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--foreground)'
				},

				foreground: {
					alt1: 'var(--foreground-alt1)',
					DEFAULT: 'var(--foreground)',
					inverse: 'var(--foreground-inverse)'
				},

				input: 'var(--background-start)',
				loss: {
					DEFAULT: 'var(--loss-start)',
					start: 'var(--loss-start)'
				},
				muted: {
					DEFAULT: 'var(--accentSubtle-alt3)',
					foreground: 'var(--foreground)'
				},
				neutral: {
					start: 'var(--neutral-start)'
				},
				popover: {
					DEFAULT: 'var(--background-start)',
					foreground: 'var(--foreground)'
				},
				primary: {
					DEFAULT: 'var(--background-start)',
					foreground: 'var(--foreground)'
				},
				ring: 'var(--accentSubtle-alt2)',

				secondary: {
					DEFAULT: 'var(--accentSubtle-alt2)',
					foreground: 'var(--foreground)'
				},
				spotlightColor: 'var(--spotlightColor)',
				test: 'var(--test)',
				warning: {
					DEFAULT: 'var(--warning)',
					foreground: 'var(--foreground)'
				}
			},
			fontFamily: {
				mono: ['Consolas']
			},
			fontSize: {
				base: '0.925rem',
				sm: '0.85rem',
				xs: '.75rem',
				xxs: '.675rem',
				xxxs: '.6rem',
				xxxxs: '.5rem'
			}
		}
	}
}
