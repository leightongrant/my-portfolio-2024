import { Router } from 'express'
import {
	addProject,
	deleteProject,
	editProject,
	getProjects,
} from './projectControllers.js'

export const projectsRouter = Router()

projectsRouter.get('/projects', getProjects)
projectsRouter.post('/projects', addProject)
projectsRouter.delete('/projects/:id', deleteProject)
projectsRouter.put('/projects/:id', editProject)
