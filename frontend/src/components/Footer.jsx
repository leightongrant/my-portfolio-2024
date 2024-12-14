import { Center, Box, Container } from '@chakra-ui/react'

const Footer = () => {
	return (
		<Box as={'section'} py={5}>
			<Container maxW={'desktop'}>
				<Center>&copy; copyright, 2024</Center>
			</Container>
		</Box>
	)
}

export default Footer
