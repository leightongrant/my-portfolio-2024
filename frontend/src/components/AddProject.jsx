import { HStack } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import {
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { SquarePlus } from 'lucide-react'
import ProjectForm from './ProjectForm'
import { useState } from 'react'

const AddProject = () => {
	const [open, setOpen] = useState(false)
	return (
		<HStack>
			<DialogRoot lazyMount open={open} onOpenChange={e => setOpen(e.open)}>
				<DialogTrigger asChild>
					<Button
						variant='solid'
						size={'lg'}
						colorPalette={'green'}
						bg={{ base: 'colorPalette.700', _hover: 'colorPalette.600' }}
					>
						Add Project <SquarePlus />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Add Project</DialogTitle>
					</DialogHeader>
					<DialogBody>
						<ProjectForm setOpen={setOpen} />
					</DialogBody>
					<DialogCloseTrigger />
				</DialogContent>
			</DialogRoot>
		</HStack>
	)
}

export default AddProject
