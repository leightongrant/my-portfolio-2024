import { defaultConfig, createSystem, defineConfig } from '@chakra-ui/react'
import '@fontsource-variable/comfortaa'
import '@fontsource-variable/cinzel'

const config = defineConfig({
	globalCss: {
		'html, body': {
			margin: 0,
			padding: 0,
		},
	},
	theme: {
		tokens: {
			fonts: {
				heading: { value: `'Cinzel Variable', serif` },
				body: { value: `'Comfortaa Variable', system-ui, sans-serif` },
			},
			sizes: {
				phone: { value: '768px' },
				tablet: { value: '992px' },
				desktop: { value: '1200px' },
			},
			colors: {
				brand: { value: '#9a8c98' },
				bradPrimary: { value: '#4a4e69' },
				brandSecondary: { value: '#c9ada7' },
				brandDark: { value: '#22223b' },
				brandLight: { value: '#f2e9e4' },
			},
			spacing: {
				sectionPadding: { value: '8em' },
				bannerPadding: { value: '10em' },
				heroPadding: { value: '8em' },
			},
		},
		breakpoints: {
			small: '576px',
			phone: '768px',
			tablet: '992px',
			desktop: '1200px',
			wide: '1400px',
		},
	},
})

export const system = createSystem(defaultConfig, config)
