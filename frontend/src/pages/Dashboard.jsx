import { Box, Container, For, SimpleGrid } from '@chakra-ui/react'
import AddProject from '@/components/AddProject'
import { useProjectStore } from '@/store/projectStore'
import DashboardCard from '@/components/DashboardCard'
import { fallBack } from '@/utilities'
import { useEffect } from 'react'

const Dashboard = () => {
	const { projects, getProjects } = useProjectStore()
	useEffect(() => {
		getProjects()
	}, [getProjects, projects])

	if (!projects) {
		return <p>Loading...</p>
	}

	return (
		<Box as={'section'} py={'sectionPadding'}>
			<Container maxW={'desktop'}>
				<Box mb='16'>
					<AddProject />
				</Box>
				<Box>
					<SimpleGrid gap={5} templateColumns={'1fr 1fr'}>
						<For each={projects} fallback={fallBack}>
							{item => (
								<Box key={item._id}>
									<DashboardCard item={item} />
								</Box>
							)}
						</For>
					</SimpleGrid>
				</Box>
			</Container>
		</Box>
	)
}

export default Dashboard
