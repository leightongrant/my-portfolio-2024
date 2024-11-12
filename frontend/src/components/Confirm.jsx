import { Box, HStack, Text } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'

import {
	PopoverArrow,
	PopoverBody,
	PopoverCloseTrigger,
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
} from '@/components/ui/popover'
import { useState } from 'react'
import { Trash } from 'lucide-react'

const Confirm = ({ handleDelete }) => {
	const [open, setOpen] = useState(false)
	const handleConfirm = () => {
		handleDelete()
		setOpen(false)
	}

	return (
		<PopoverRoot open={open} onOpenChange={e => setOpen(e.open)}>
			<PopoverTrigger asChild>
				<Button colorPalette={'red'} variant={'outline'}>
					<Trash />
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverBody>
					<Box my={5}>
						<Text>Are you sure you want to delete this project?</Text>
					</Box>
					<HStack justify={'end'}>
						<Button variant={'outline'} onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button onClick={handleConfirm}>Yes</Button>
					</HStack>
				</PopoverBody>
				<PopoverCloseTrigger />
			</PopoverContent>
		</PopoverRoot>
	)
}

export default Confirm
