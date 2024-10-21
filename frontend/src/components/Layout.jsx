import { Outlet } from 'react-router'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'
import PageBanner from './PageBanner'
import { useLocation } from 'react-router-dom'

const Layout = () => {
	const { pathname } = useLocation()
	console.log(location.pathname)
	return (
		<SimpleGrid gridTemplateRows={'auto 1fr auto'} minH={'100dvh'}>
			<Box as='header'>
				<Navbar />
				{pathname !== '/' && <PageBanner location={pathname} />}
			</Box>
			<Box as='main'>
				<Outlet />
			</Box>
			<Box as='footer'>
				<Footer />
			</Box>
		</SimpleGrid>
	)
}

export default Layout
