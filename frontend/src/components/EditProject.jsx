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
import { Pencil } from 'lucide-react'
import ProjectForm from './ProjectForm'
import { useState } from 'react'

const EditProject = ({ item }) => {
	const [open, setOpen] = useState(false)

	return (
		<HStack>
			<DialogRoot lazyMount open={open} onOpenChange={e => setOpen(e.open)}>
				<DialogTrigger asChild>
					<Button
						variant='outline'
						colorPalette={'green'}
						outline={{ base: 'colorPalette.700', _hover: 'colorPalette.600' }}
					>
						<Pencil />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit Project</DialogTitle>
					</DialogHeader>
					<DialogBody>
						<ProjectForm setOpen={setOpen} item={item} />
					</DialogBody>
					<DialogCloseTrigger />
				</DialogContent>
			</DialogRoot>
		</HStack>
	)
}

export default EditProject
