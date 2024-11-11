import { Outlet } from 'react-router'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'
import PageBanner from './PageBanner'
import { useLocation } from 'react-router-dom'
import { useColorModeValue } from './ui/color-mode'
import { useWindowScroll } from '@uidotdev/usehooks'
import { Toaster } from '@/components/ui/toaster'

const Layout = () => {
	const bg = useColorModeValue('brandLight', 'brandDark')
	const { pathname } = useLocation()
	const [{ y }] = useWindowScroll()
	const Y = 100

	return (
		<SimpleGrid gridTemplateRows={'auto 1fr auto'} minH={'100dvh'} bg={bg}>
			<Box as='header'>
				<Box
					pos='fixed'
					w={'100%'}
					zIndex={1}
					bg={y > Y ? 'brandLight' : 'whiteAlpha.300'}
					shadow={'0 1px 20px #111'}
				>
					<Navbar y={y} Y={Y} pathname={pathname} />
				</Box>
			</Box>
			<Box as='main'>
				{pathname !== '/' && (
					<Box as={'section'}>
						<PageBanner location={pathname} />
					</Box>
				)}
				<Outlet />
				<Toaster />
			</Box>
			<Box as='footer'>
				<Footer />
			</Box>
		</SimpleGrid>
	)
}

export default Layout
