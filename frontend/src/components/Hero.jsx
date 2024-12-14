import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react'
import { Button } from './ui/button'
import heroBg from '../assets/images/hero-bg.jpg'

const Hero = () => {
	return (
		<Box
			bg={'gray.500'}
			backgroundImage={`url(${heroBg})`}
			backgroundPosition={'top left'}
			backgroundSize={'cover'}
		>
			<Box bg={'blackAlpha.600'}>
				<Container maxW={'desktop'}>
					<Stack placeContent={'center'} gap={10} minH={'80dvh'} width={'60ch'}>
						<Box>
							<Heading
								as={'h2'}
								size={'6xl'}
								fontWeight={700}
								letterSpacing={2}
							>
								Hello, I&apos;m Leighton Grant
							</Heading>
						</Box>
						<Box>
							<Text textStyle={'2xl'} fontWeight={100}>
								I&apos;m a passionate Frontend Developer who loves to provide
								quality work for all my clients.
							</Text>
						</Box>
						<Button
							variant='solid'
							colorPalette={'gray.900'}
							size='xl'
							width={'150px'}
						>
							GET IN TOUCH
						</Button>
					</Stack>
				</Container>
			</Box>
		</Box>
	)
}

export default Hero
