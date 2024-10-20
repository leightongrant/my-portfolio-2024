import { Box, Container } from '@chakra-ui/react'
import { useProjectStore } from '../store/projectStore'
import { useEffect } from 'react'

const Projects = () => {
	const { projects, getProjects } = useProjectStore()
	useEffect(() => {
		getProjects()
	}, [getProjects])

	if (!projects) {
		return <p>Loading...</p>
	}
	return (
		<Box>
			<Container>
				{projects.map(p => {
					return <div key={p._id}>{p.title}</div>
				})}
			</Container>
		</Box>
	)
}

export default Projects
