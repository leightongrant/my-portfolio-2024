import { Outlet } from 'react-router'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Navbar from './Navbar'
const Layout = () => {
	return (
		<SimpleGrid gridTemplateRows={'auto 1fr auto'} minH={'100dvh'}>
			<Box as='header'>
				<Navbar />
			</Box>
			<Box as='main'>
				<Outlet />
			</Box>
			<Box as='footer'>Footer</Box>
		</SimpleGrid>
	)
}

export default Layout
