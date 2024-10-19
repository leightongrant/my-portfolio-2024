import { Outlet } from 'react-router'
const Layout = () => {
	return (
		<>
			<header>Header</header>
			<Outlet />
			<footer>Footer</footer>
		</>
	)
}

export default Layout
