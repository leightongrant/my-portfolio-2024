import { Button, Card } from '@chakra-ui/react'
import { Skeleton, SkeletonText } from '@/components/ui/skeleton'

export const ProjectSkeleton = () => {
	return (
		<Card.Root maxW={'auto'} overflow='hidden'>
			<Skeleton h={56} />
			<Card.Body gap='2'>
				<Card.Title as={'div'}>
					<SkeletonText h={8} noOfLines={1} />
				</Card.Title>
				<Card.Description as={'div'} mt={5}>
					<SkeletonText noOfLines={2} gap='1' />
				</Card.Description>
			</Card.Body>
			<Card.Footer gap='2'>
				<Skeleton loading={true}>
					<Button variant='outline'></Button>
				</Skeleton>
				<Skeleton loading={true}>
					<Button variant='outline'></Button>
				</Skeleton>
			</Card.Footer>
		</Card.Root>
	)
}
