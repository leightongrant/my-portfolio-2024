import { Project } from '../models/projectModel.js'

// Get projects
export const getProjects = async (req, res, next) => {
	try {
		const response = await Project.find()
		if (!response) {
			const error = new Error('No projects found!')
			error.status = 404
			return next(error)
		}
		res.status(200).json(response)
	} catch (error) {
		console.log(error.message)
		return next(error)
	}
}

// Add projects
export const addProject = async (req, res, next) => {
	const { body } = req
	if (!body.title || !body.description || !body.image) {
		const error = new Error(
			'Please make sure you have a title, description and image'
		)
		error.status = 400
		return next(error)
	}
	const newProject = new Project(body)

	try {
		await newProject.save()
		res.status(200).json({ message: 'Project successfully added' })
	} catch (error) {
		console.log(error.message)
		return next(error)
	}
}

// Delete projects
export const deleteProject = async (req, res, next) => {
	const id = req.params.id

	if (id.length !== 24) {
		const error = new Error('Invalid Project ID')
		error.status = 400
		return next(error)
	}

	try {
		const response = await Project.findByIdAndDelete(id)

		if (!response) {
			const error = new Error('Project ID not found')
			error.status = 404
			return next(error)
		}

		res.status(200).json({ message: 'Project deleted' })
	} catch (error) {
		console.log(error.message)
		return next(error)
	}
}

// Edit projects
export const editProject = async (req, res, next) => {
	const { id } = req.params
	const { body } = req

	if (id.length !== 24) {
		const err = new Error('Invalid Project ID')
		err.status = 400
		return next(err)
	}

	if (!body.title || !body.description || !body.image) {
		const error = new Error(
			'Nothing to update. Check title, description or image'
		)
		error.status = 400
		return next(error)
	}

	try {
		const response = await Project.findByIdAndUpdate(id, body)

		if (!response) {
			const err = new Error('Project not found')
			err.status = 404
			return next(err)
		}
		res.status(200).json({ message: 'Project updated ' + id })
	} catch (error) {
		console.log(error)
		return next(error)
	}
}
