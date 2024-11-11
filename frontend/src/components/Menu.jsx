import { Link } from '@chakra-ui/react'
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

	return (
		<>
			<Link href='/' color={color}>
				Home
			</Link>
			<Link href='/about' color={color}>
				About
			</Link>
			<Link href='/projects' color={color}>
				Projects
			</Link>
			<Link href='/contact' color={color}>
				Contact
			</Link>
		</>
	)
}

export default Menu
