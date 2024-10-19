import { Flex, Text, HStack, Spacer, Show, Hide } from '@chakra-ui/react'
import Menu from './Menu'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
	return (
		<Flex as={'nav'}>
			<HStack>
				<Text>LOGO</Text>
			</HStack>
			<Spacer />
			<HStack>
				<Hide breakpoint='(max-width: 400px)'>
					<Menu />
				</Hide>
				<Show breakpoint='(max-width: 400px)'>
					<HamburgerMenu />
				</Show>
			</HStack>
		</Flex>
	)
}

export default Navbar
