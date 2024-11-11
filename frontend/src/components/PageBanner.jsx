import { Box, Center, Heading } from '@chakra-ui/react'
const PageBanner = ({ location }) => {
	return (
		<Box
			as={'section'}
			py={'bannerPadding'}
			backgroundImage={
				'url(https://images.unsplash.com/photo-1730248202596-fbdef5624120?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
			}
			backgroundPosition={'bottom'}
			backgroundSize={'cover'}
		>
			<Center>
				<Heading
					style={{ textTransform: 'capitalize' }}
					fontSize={'5xl'}
					color={'brandLight'}
				>
					{location.slice(1)}
				</Heading>
			</Center>
		</Box>
	)
}

export default PageBanner
