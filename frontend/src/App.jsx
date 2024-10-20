import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/ Contact'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: '/', element: <Homepage /> },
			{ path: '/projects', element: <Projects /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '*', element: <NotFound /> },
		],
	},
])
function App() {
	return <RouterProvider router={router} />
}

export default App
