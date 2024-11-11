import { Box, Container, Center, VStack, Text } from '@chakra-ui/react'
import { Box as NothingBox } from 'lucide-react'
export const fallBack = (
	<Box gridColumn={'span 12'}>
		<Container>
			<Center>
				<VStack>
					<NothingBox />
					<Text>Nothing to show</Text>
				</VStack>
			</Center>
		</Container>
	</Box>
)
