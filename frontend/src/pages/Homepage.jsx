import { Heading, Flex, VStack } from '@chakra-ui/react'
const Homepage = () => {
	return (
		<Flex
			as='section'
			minH={'100%'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<VStack>
				<Heading as={'h1'} fontSize={{ lg: '5xl', md: '4xl' }} color={'brand'}>
					Welcome to my portfolio
				</Heading>
				<Heading>Frontend Web Developer</Heading>
			</VStack>
		</Flex>
	)
}

export default Homepage
