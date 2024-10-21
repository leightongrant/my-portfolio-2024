import { Box, Center } from '@chakra-ui/react'
const PageBanner = ({ location }) => {
	return (
		<Box p={'5'} bg={'gray.500'}>
			<Center>{location.slice(1)}</Center>
		</Box>
	)
}

export default PageBanner
