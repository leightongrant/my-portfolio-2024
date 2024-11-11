import { Flex, Text, HStack, Spacer, Link, Container } from '@chakra-ui/react'
import Menu from './Menu'
import HamburgerMenu from './HamburgerMenu'
import { ColorModeButton } from '@/components/ui/color-mode'

const Navbar = ({ y, Y, pathname }) => {
	return (
		<Container>
			<Flex as={'nav'} py={'4'}>
				<HStack>
					<Link href='/'>
						<Text
							fontWeight={'bolder'}
							textStyle={'xl'}
							color={y > Y ? 'brandDark' : 'brandLight'}
						>
							LOGO
						</Text>
					</Link>
				</HStack>
				<Spacer />

				<HStack
					gap={5}
					textTransform={'uppercase'}
					hideBelow={'md'}
					fontWeight={'bold'}
				>
					<Menu y={y} Y={Y} pathname={pathname} />
				</HStack>
				<Spacer />
				<HStack>
					<HStack>
						<ColorModeButton color={y > Y ? 'brandDark' : 'brandLight'} />
					</HStack>
					<HStack hideFrom={'md'}>
						<HamburgerMenu y={y} Y={Y} />
					</HStack>
				</HStack>
			</Flex>
		</Container>
	)
}

export default Navbar
