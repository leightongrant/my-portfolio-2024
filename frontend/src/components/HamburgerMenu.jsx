import {
	DrawerBackdrop,
	DrawerBody,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerRoot,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

import { VStack, IconButton } from '@chakra-ui/react'
import { Menu as HamMenu } from 'lucide-react'

import Menu from './Menu'

const HamburgerMenu = ({ y, Y }) => {
	return (
		<DrawerRoot>
			<DrawerBackdrop />
			<DrawerTrigger asChild>
				<IconButton aria-label='menu' variant={'ghost'} fontWeight={'bolder'}>
					<HamMenu color={y > Y ? 'black' : 'white'} />
				</IconButton>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Menu</DrawerTitle>
				</DrawerHeader>
				<DrawerBody>
					<VStack>
						<Menu />
					</VStack>
				</DrawerBody>
				<DrawerCloseTrigger />
			</DrawerContent>
		</DrawerRoot>
	)
}

export default HamburgerMenu
