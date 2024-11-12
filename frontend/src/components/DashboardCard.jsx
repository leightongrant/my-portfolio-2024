import { Box, Card, Heading, HStack, Flex, Spacer } from '@chakra-ui/react'
import { useProjectStore } from '@/store/projectStore'
import EditProject from './EditProject'
import Confirm from './Confirm'

const DashboardCard = ({ item }) => {
	const { deleteProject } = useProjectStore()
	const handleDelete = () => {
		deleteProject(item._id)
	}

	return (
		<Card.Root size='sm'>
			<Flex>
				<Box>
					<Card.Header>
						<Heading size='xl'> {item.title}</Heading>
					</Card.Header>
					<Card.Body color='fg.muted'>{item.description}</Card.Body>
				</Box>
				<Spacer />

				<HStack p={4}>
					<EditProject item={item} />
					<Confirm handleDelete={handleDelete} />
				</HStack>
			</Flex>
		</Card.Root>
	)
}

export default DashboardCard
