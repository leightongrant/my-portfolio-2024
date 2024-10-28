import { Outlet } from 'react-router'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'
import PageBanner from './PageBanner'
import { useLocation } from 'react-router-dom'
import { useColorModeValue } from './ui/color-mode'

const Layout = () => {
	const bg = useColorModeValue('brandLight', 'brandDark')
	const { pathname } = useLocation()
	let bgImage = ''
	if (pathname === '/') {
		bgImage =
			'url(https://images.unsplash.com/photo-1728619054334-841f8b6e87da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
	}

	return (
		<SimpleGrid
			gridTemplateRows={'auto 1fr auto'}
			minH={'100dvh'}
			bg={bg}
			bgImage={bgImage}
		>
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
