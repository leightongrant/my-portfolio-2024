import { Box, Container, SimpleGrid, Input, Textarea } from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { Button } from './ui/button'
import { useState } from 'react'
import { useProjectStore } from '@/store/projectStore'
import { toaster } from '@/components/ui/toaster'

const ProjectForm = ({ setOpen, item }) => {
	const [project, setProject] = useState(
		item || {
			title: '',
			about: '',
			image: '',
			description: '',
			app: '',
			repo: '',
		}
	)
	const [isValid, setIsvalid] = useState({
		title: false,
		about: false,
		image: false,
		description: false,
		app: false,
		repo: false,
	})
	const re = /^(https?:\/\/.*\.(?:png|jpe?g))$/

	const { addProject, editProject } = useProjectStore()

	const handleSubmit = async () => {
		if (!project.title) {
			setIsvalid(pre => ({ ...pre, title: true }))
			return
		}
		if (!project.about) {
			setIsvalid(pre => ({ ...pre, about: true }))
			return
		}
		if (!project.image || !re.test(project.image)) {
			setIsvalid(pre => ({ ...pre, image: true }))
			return
		}
		if (!project.description) {
			setIsvalid(pre => ({ ...pre, description: true }))
			return
		}
		if (!project.app) {
			setIsvalid(pre => ({ ...pre, app: true }))
			return
		}
		if (!project.repo) {
			setIsvalid(pre => ({ ...pre, repo: true }))
			return
		}

		let isSuccessful

		if (item) {
			isSuccessful = await editProject(item._id, project)
		} else {
			isSuccessful = await addProject(project)
		}

		if (isSuccessful) {
			toaster.create({
				title: 'Success',
				description: `Project successfully ${item ? 'updated' : 'added'}`,
				type: 'success',
			})
			setOpen(false)
			return
		}
		toaster.create({
			title: 'Error',
			description: `Unable to ${item ? 'update' : 'add'} this project`,
			type: 'error',
		})
	}
	const handleChange = e => {
		if (e.target.name === 'title') {
			setIsvalid(pre => ({ ...pre, title: false }))
			setProject(pre => ({ ...pre, title: e.target.value }))
		}
		if (e.target.name === 'about') {
			setIsvalid(pre => ({ ...pre, about: false }))
			setProject(pre => ({ ...pre, about: e.target.value }))
		}
		if (e.target.name === 'image') {
			setIsvalid(pre => ({ ...pre, image: false }))
			setProject(pre => ({ ...pre, image: e.target.value }))
		}
		if (e.target.name === 'description') {
			setIsvalid(pre => ({ ...pre, description: false }))
			setProject(pre => ({ ...pre, description: e.target.value }))
		}
		if (e.target.name === 'app') {
			setIsvalid(pre => ({ ...pre, app: false }))
			setProject(pre => ({ ...pre, app: e.target.value }))
		}
		if (e.target.name === 'repo') {
			setIsvalid(pre => ({ ...pre, repo: false }))
			setProject(pre => ({ ...pre, repo: e.target.value }))
		}
	}
	return (
		<Box>
			<Container>
				<SimpleGrid gap={5}>
					<Field
						invalid={isValid.title}
						label='Title'
						errorText='This field is required'
						required
					>
						<Input
							placeholder='Project title'
							type='text'
							name='title'
							value={project.title}
							onChange={handleChange}
						/>
					</Field>
					<Field
						invalid={isValid.about}
						label='About'
						errorText='This field is required'
						required
					>
						<Input
							placeholder='About project'
							type='text'
							name='about'
							value={project.about}
							onChange={handleChange}
						/>
					</Field>
					<Field
						invalid={isValid.image}
						label='Image'
						errorText='This field is required'
						required
					>
						<Input
							placeholder='https://example.com/image.png'
							type='url'
							name='image'
							value={project.image}
							onChange={handleChange}
						/>
					</Field>
					<Field
						invalid={isValid.description}
						label='Description'
						errorText='This field is required'
						required
					>
						<Textarea
							placeholder='Project description'
							type='text'
							name='description'
							value={project.description}
							onChange={handleChange}
						/>
					</Field>
					<Field
						invalid={isValid.app}
						label='app'
						errorText='This field is required'
						required
					>
						<Input
							placeholder='https://example.com/app-name'
							type='url'
							name='app'
							value={project.app}
							onChange={handleChange}
						/>
					</Field>
					<Field
						invalid={isValid.repo}
						label='repo'
						errorText='This field is required'
						required
					>
						<Input
							placeholder='https://github.com/app-repo'
							type='url'
							name='repo'
							value={project.repo}
							onChange={handleChange}
						/>
					</Field>
					<Button
						colorPalette={'green'}
						onClick={handleSubmit}
						bg={{ base: 'colorPalette.700', _hover: 'colorPalette.600' }}
					>
						Submit
					</Button>
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default ProjectForm
