import { Flex, Text, HStack, Spacer, Link } from '@chakra-ui/react'

import Menu from './Menu'
import HamburgerMenu from './HamburgerMenu'
import { ColorModeButton } from '@/components/ui/color-mode'

const Navbar = () => {
	return (
		<Flex as={'nav'} p={'4'}>
			<HStack>
				<Link href='/'>
					<Text fontWeight={'bolder'} fontSize={'2xl'}>
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
				<Menu />
			</HStack>
			<Spacer />
			<HStack>
				<HStack>
					<ColorModeButton />
				</HStack>
				<HStack hideFrom={'md'}>
					<HamburgerMenu />
				</HStack>
			</HStack>
		</Flex>
	)
}

export default Navbar
