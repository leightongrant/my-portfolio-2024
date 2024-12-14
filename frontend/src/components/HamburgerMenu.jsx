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

import { VStack, IconButton, Link } from '@chakra-ui/react'
import { Menu as HamMenu } from 'lucide-react'
import { mainMenu } from '@/menu'

const HamburgerMenu = ({ y, Y }) => {
	return (
		<DrawerRoot>
			<DrawerBackdrop />
			<DrawerTrigger asChild>
				<IconButton aria-label='menu' variant={'plain'} fontWeight={'bolder'}>
					<HamMenu color={y > Y ? 'black' : 'white'} />
				</IconButton>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Menu</DrawerTitle>
				</DrawerHeader>
				<DrawerBody>
					<VStack>
						{mainMenu.map(item => (
							<Link key={item.name} href={item.location}>
								{item.name}
							</Link>
						))}
					</VStack>
				</DrawerBody>
				<DrawerCloseTrigger />
			</DrawerContent>
		</DrawerRoot>
	)
}

export default HamburgerMenu
