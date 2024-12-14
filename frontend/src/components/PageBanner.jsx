import { Box, Center, Heading } from '@chakra-ui/react'
import bannerBg from '../assets/images/hero-bg.jpg'
import { useEffect, useState } from 'react'
const PageBanner = ({ location }) => {
	const [bgPosition, setBgPosition] = useState('left')
	const page = location.slice(1)
	useEffect(() => {
		setBgPosition(getBgPosition())
	}, [])

	const getBgPosition = () => {
		const positions = [
			'top',
			'right',
			'bottom',
			'left',
			'top left',
			'top right',
			'bottom left',
			'bottom right',
		]
		const choice = Math.floor(Math.random() * positions.length + 1)
		return positions[choice]
	}
	return (
		<Box
			as={'section'}
			backgroundImage={`url(${bannerBg})`}
			backgroundPosition={bgPosition}
			backgroundSize={'cover'}
		>
			<Box bg={'blackAlpha.800'} py={'bannerPadding'}>
				<Center>
					<Heading
						style={{ textTransform: 'capitalize' }}
						fontSize={'5xl'}
						color={'brandLight'}
					>
						{page}
					</Heading>
				</Center>
			</Box>
		</Box>
	)
}

export default PageBanner
