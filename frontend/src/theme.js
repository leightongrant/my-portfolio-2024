import { defaultConfig, createSystem, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
	theme: {
		tokens: {
			fonts: {
				heading: { value: `'Times New Roman', serif` },
				body: { value: `'Montserrat', sans-serif` },
			},
			breakpoints: {
				phone: '768px',
				tablet: '992px',
				desktop: '1200px',
				wide: '1400px',
			},
			colors: {
				brand: { value: '#9a8c98' },
				bradPrimary: { value: '#4a4e69' },
				brandSecondary: { value: '#c9ada7' },
				brandDark: { value: '#22223b' },
				brandLight: { value: '#f2e9e4' },
			},
		},
	},
})

export const system = createSystem(defaultConfig, config)
