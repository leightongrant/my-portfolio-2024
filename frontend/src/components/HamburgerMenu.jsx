import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	IconButton,
	VStack,
} from '@chakra-ui/react'
import Menu from './Menu'
import { HamburgerIcon } from '@chakra-ui/icons'

const HamburgerMenu = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const size = 'xs'

	return (
		<>
			<IconButton
				onClick={onOpen}
				bg={'transparent'}
				colorScheme='gray'
				aria-label='Open Menu'
				icon={<HamburgerIcon />}
			>
				Hamb
			</IconButton>
			<Drawer onClose={onClose} isOpen={isOpen} size={size}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						<VStack textTransform={'uppercase'}>
							<Menu />
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default HamburgerMenu
