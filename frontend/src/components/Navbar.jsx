import { Flex, Text, HStack, Spacer, Show, Hide } from '@chakra-ui/react'
import Menu from './Menu'
import HamburgerMenu from './HamburgerMenu'
const breakpoint = '(max-width: 30em)'
const Navbar = () => {
	return (
		<Flex as={'nav'} p={'4'}>
			<HStack>
				<Text>LOGO</Text>
			</HStack>
			<Spacer />
			<HStack>
				<Hide breakpoint={breakpoint}>
					<HStack gap={10} textTransform={'uppercase'}>
						<Menu />
					</HStack>
				</Hide>
				<Show breakpoint={breakpoint}>
					<HamburgerMenu />
				</Show>
			</HStack>
		</Flex>
	)
}

export default Navbar
