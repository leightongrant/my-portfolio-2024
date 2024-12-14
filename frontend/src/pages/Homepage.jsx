import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import { Box, Theme } from '@chakra-ui/react'
const Homepage = () => {
	return (
		<>
			<Box as={'section'}>
				<Theme appearance='dark'>
					<Hero />
				</Theme>
			</Box>
			<Box as={'section'} py={'sectionPadding'}>
				<AboutMe />
			</Box>
		</>
	)
}

export default Homepage
