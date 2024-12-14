import { Button, Card, Image, Link } from '@chakra-ui/react'
import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ item }) => {
	return (
		<Card.Root
			maxW={'auto'}
			overflow='hidden'
			_hover={{
				cursor: 'pointer',
				scale: '1.025',
				transition: '.2s linear',
				shadow: 'lg',
			}}
		>
			<Image src={item.image} alt={item.about} />
			<Card.Body gap='2'>
				<Card.Title>{item.title}</Card.Title>
				<Card.Description lineClamp={2}>{item.description}</Card.Description>
			</Card.Body>
			<Card.Footer gap='2'>
				<Link href={item.app} target='_blank'>
					<Button variant='outline'>
						App <ExternalLink />
					</Button>
				</Link>
				<Link href={item.repo} target='_blank'>
					<Button variant='outline'>
						Repo <ExternalLink />
					</Button>
				</Link>
			</Card.Footer>
		</Card.Root>
	)
}

export default ProjectCard
