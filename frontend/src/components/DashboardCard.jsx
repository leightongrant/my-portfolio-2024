import { Box, Card, Heading, HStack, Flex, Spacer } from '@chakra-ui/react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { useProjectStore } from '@/store/projectStore'
import EditProject from './EditProject'
const DashboardCard = ({ item }) => {
	const { deleteProject } = useProjectStore()

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
					<Button
						colorPalette={'red'}
						variant={'outline'}
						onClick={() => deleteProject(item._id)}
					>
						<Trash />
					</Button>
				</HStack>
			</Flex>
		</Card.Root>
	)
}

export default DashboardCard
