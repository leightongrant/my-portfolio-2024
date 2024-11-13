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

	if (!projects) {
		const skeleton = [1, 2, 3, 4]
		return (
			<Box as={'section'} py={'sectionPadding'}>
				<Container>
					<SimpleGrid
						gap={10}
						templateColumns={{
							base: '1fr',
							wide: 'repeat(4, 1fr)',
							tablet: 'repeat(3, 1fr)',
							small: 'repeat(2, 1fr)',
						}}
						templateRows={'1fr 1fr'}
					>
						<For each={skeleton}>
							{item => (
								<Box key={item}>
									<ProjectSkeleton />
								</Box>
							)}
						</For>
					</SimpleGrid>
				</Container>
			</Box>
		)
	}

	return (
		<Box as={'section'} py={'sectionPadding'}>
			<Container>
				<SimpleGrid
					gap={10}
					templateColumns={{
						base: '1fr',
						wide: 'repeat(4, 1fr)',
						tablet: 'repeat(3, 1fr)',
						small: 'repeat(2, 1fr)',
					}}
					templateRows={'1fr 1fr'}
				>
					<For each={projects} fallback={fallBack}>
						{item => (
							<Box key={item._id}>
								<ProjectCard item={item} />
							</Box>
						)}
					</For>
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default Projects
