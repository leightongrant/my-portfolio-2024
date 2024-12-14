import { Link } from '@chakra-ui/react'
import { mainMenu } from '@/menu'

const Menu = ({ y, Y, pathname }) => {
	let color = ''
	if (
		pathname === '/' ||
		pathname === '/about' ||
		pathname === '/projects' ||
		pathname === '/contact'
	) {
		color = y > Y ? 'brandDark' : 'brandLight'
	}

	const hover = {
		textDecoration: 'none',
		borderBlockEnd: '5px solid',
		borderColor: 'brandLight',
	}

	const active = { borderBlockEnd: '5px solid', borderColor: 'brandDark' }

	return (
		<>
			{mainMenu.map(item => (
				<Link
					key={item.name}
					href={item.location}
					_hover={hover}
					_active={'none'}
					color={color}
					px={2}
					h={'100%'}
					transition={'border-block-end .2s linear .2s'}
					style={pathname === item.location ? active : {}}
				>
					{item.name}
				</Link>
			))}
		</>
	)
}

export default Menu
