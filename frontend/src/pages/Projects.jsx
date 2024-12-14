import { Box, Container, For, SimpleGrid } from '@chakra-ui/react'
import { useProjectStore } from '../store/projectStore'
import { useEffect } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { fallBack } from '@/utilities.jsx'
import { ProjectSkeleton } from '@/components/Skeletons'

const Projects = () => {
	const { projects, getProjects } = useProjectStore()
	useEffect(() => {
		getProjects()
	}, [getProjects])
	const skeleton = [1, 2, 3, 4]

	return (
		<Box as={'section'} py={'sectionPadding'}>
			<Container maxW={'desktop'}>
				<SimpleGrid
					gap={10}
					templateColumns={{
						base: '1fr',
						wide: 'repeat(4, 1fr)',
						tablet: 'repeat(3, 1fr)',
						small: 'repeat(2, 1fr)',
					}}
				>
					<For each={!projects ? skeleton : projects} fallback={fallBack}>
						{item => (
							<Box key={!projects ? item : item._id}>
								{!projects ? <ProjectSkeleton /> : <ProjectCard item={item} />}
							</Box>
						)}
					</For>
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default Projects
