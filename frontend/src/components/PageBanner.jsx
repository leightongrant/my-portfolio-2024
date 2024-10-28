import { Box, Center, Heading } from '@chakra-ui/react'
const PageBanner = ({ location }) => {
	return (
		<Box p={'5'} bg={{ base: 'gray.200', _dark: 'gray.600' }}>
			<Center>
				<Heading style={{ textTransform: 'capitalize' }} fontSize={'2xl'}>
					{location.slice(1)}
				</Heading>
			</Center>
		</Box>
	)
}

export default PageBanner
