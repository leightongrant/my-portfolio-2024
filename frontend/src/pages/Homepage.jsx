import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import { Box } from '@chakra-ui/react'
const Homepage = () => {
	return (
		<>
			<Box as={'section'}>
				<Hero />
			</Box>
			<Box as={'section'} py={'sectionPadding'}>
				<AboutMe />
			</Box>
		</>
	)
}

export default Homepage
