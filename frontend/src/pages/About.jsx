import { Box, Container, Heading } from '@chakra-ui/react'

const About = () => {
	return (
		<Box as={'section'} py={'sectionPadding'}>
			<Container>
				<Heading size={'6xl'} as={'h2'}>
					About me
				</Heading>
			</Container>
		</Box>
	)
}

export default About
