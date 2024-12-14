import { Flex, Text, HStack, Spacer, Link, Container } from '@chakra-ui/react'
import Menu from './Menu'
import HamburgerMenu from './HamburgerMenu'
import { ColorModeButton } from '@/components/ui/color-mode'

const Navbar = ({ y, Y, pathname }) => {
	return (
		<Container maxW={'desktop'}>
			<Flex as={'nav'}>
				<HStack>
					<Link href='/'>
						<Text
							fontWeight={'bolder'}
							textStyle={'xl'}
							color={y > Y ? 'brandDark' : 'brandLight'}
							py={5}
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
						<ColorModeButton
							color={y > Y ? 'brandDark' : 'brandLight'}
							variant={'plain'}
						/>
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
