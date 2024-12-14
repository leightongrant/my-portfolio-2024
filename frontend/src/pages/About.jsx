import {
	Box,
	Container,
	Heading,
	Image,
	HStack,
	Text,
	VStack,
	Separator,
} from '@chakra-ui/react'

const About = () => {
	return (
		<>
			<Box as={'section'} py={'sectionPadding'}>
				<Container maxW={'desktop'}>
					<Heading size={'6xl'} as={'h2'} mb={32}>
						Leighton Grant, Frontend Developer
					</Heading>
					<HStack gap={20} align={'start'}>
						<VStack flex={1}>
							<Image
								src='https://leightongrant.me/static/media/leightongrant_profile.87af061f4c1383b64f68.jpg'
								borderRadius={10}
							/>
						</VStack>
						<VStack flex={3}>
							<Text>
								Hi, my name is Leighton Grant and I am a qualified front-end
								developer residing in the UK. I am excited to join a company
								that has an innovative and supportive spirit.
							</Text>
							<Text>
								Trained through the Harvard and MIT-created course provider,
								EdX, I have acquired a range of skills that will set the tone
								for my career in front-end development.
							</Text>
							<Text>
								Prior to acquiring my professional qualification, I had
								undertaken personal coding projects for over 5 years in my spare
								time. So, why coding? Making the decision to switch careers came
								because I relocated from London to Lincolnshire, having
								previously worked as an electronics technician for many years.
							</Text>
							<Text>
								Solving problems using code is a great passion of mine and armed
								with a cup of coffee, I am keen to delve into the realm of
								professional problem-solving. Supplied with the eagerness to
								pursue front-end development professionally, I am ready for the
								next chapter in my career.
							</Text>
						</VStack>
					</HStack>
				</Container>
			</Box>

			<Box as={'section'} bg={'brandLight'} p={'sectionPadding'}>
				<Container maxW={'desktop'}>
					<Heading size={'6xl'} as={'h2'} mb={32}>
						Key Skills
					</Heading>
					<VStack bg={'white'}>
						<Text>
							Proficient in HTML, CSS, JavaScript, TypeScript, React, Nodejs
						</Text>
						<Separator />
						<Text>
							Strong understanding of responsive web design techniques
						</Text>
						<Separator />
						<Text>
							Good understanding of version control systems such as Git/GitHub
						</Text>
						<Separator />
						<Text>
							Knowledge of performance testing frameworks including Mocha and
							Jest
						</Text>
						<Separator />
						<Text>
							Experience with browser-based debugging and performance testing
							software
						</Text>
						<Separator />
						<Text>Excellent problem-solving skills</Text>
						<Separator />
						<Text>Strong verbal and written communication skills</Text>
					</VStack>
				</Container>
			</Box>
		</>
	)
}

export default About
