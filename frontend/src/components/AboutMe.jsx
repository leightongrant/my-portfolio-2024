import { Box, Heading, Container, Text, SimpleGrid } from '@chakra-ui/react'
import { Button } from './ui/button'
import SkillBar from 'react-skillbars'

const AboutMe = () => {
	const skills = [
		{
			type: 'HTML',
			level: 85,
			color: { bar: '#2980b5', title: { background: '#2980b5' } },
		},
		{
			type: 'CSS',
			level: 80,
			color: { bar: '#3980b6', title: { background: '#3980b6' } },
		},
		{
			type: 'Javascript',
			level: 75,
			color: { bar: '#4980b7', title: { background: '#4980b7' } },
		},
		{
			type: 'React',
			level: 70,
			color: { bar: '#5980b8', title: { background: '#5980b8' } },
		},
		{
			type: 'TypeScript',
			level: 20,
			color: { bar: '#6980b9', title: { background: '#6980b9' } },
		},
	]

	return (
		<Box>
			<Container maxW={'desktop'}>
				<SimpleGrid
					gap={10}
					templateColumns={{ base: '1fr', tablet: 'repeat(2, 1fr)' }}
				>
					<Box>
						<Heading size={'6xl'} as={'h2'}>
							About me
						</Heading>
						<Text textStyle={'lg'}>
							Go glee none so third few had they stalked to childe. Smile happy
							day them glorious such he, fathers light.Mein noch der und euch
							euch irren. Wenn menge mein und sich nach sich, gedränge
							unbekannten selbst es festzuhalten und sich der gut. Sich längst
							sage jenem nach gleich herzen gesänge. Der nach um versuch seh,
							weiten ach jugendlich und freundschaft wie. Mich halbverklungnen
							verklungen mild klage, irrt und.
						</Text>
						<Text textStyle={'lg'} mt={5}>
							Go glee none so third few had they stalked to childe. Smile happy
							day them glorious such he, fathers light.
						</Text>
						<Box display={'flex'} gap={5}>
							<Button>HIRE ME</Button>
							<Button>DOWNLOAD CV</Button>
						</Box>
					</Box>
					<Box>
						<SkillBar skills={skills} height={50} />
					</Box>
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default AboutMe
