import {
	Box,
	Container,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from '@chakra-ui/react'
import { Button } from './ui/button'

const Hero = () => {
	return (
		<Box
			minH={'100dvh'}
			bgColor={'gray'}
			backgroundImage={
				'url(https://images.unsplash.com/photo-1730248202596-fbdef5624120?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
			}
			backgroundPosition={'right'}
			backgroundSize={'cover'}
		>
			<Container py={'heroPadding'}>
				<SimpleGrid
					alignItems={'center'}
					templateColumns={{ base: '1fr', wide: '1fr 1fr' }}
				>
					<Box
						color={'brandLight'}
						display={'grid'}
						alignItems={'center'}
						gap={10}
						w={'60ch'}
						p={'3em'}
					>
						<Box>
							<Heading as={'h2'} size={'6xl'}>
								Hello, I&apos;m Leighton Grant
							</Heading>
						</Box>
						<Box>
							<Text textStyle={'2xl'}>
								Passionate Frontend Developer I love to provide quality work
							</Text>
						</Box>
						<Button variant='solid' colorPalette={'gray.900'} size='xl'>
							GET IN TOUCH
						</Button>
					</Box>
					<Box p={'3em'}>
						<Image
							src='https://images.unsplash.com/photo-1679217121311-cdba4c533593?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							borderRadius={'10px'}
						/>
					</Box>
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default Hero
