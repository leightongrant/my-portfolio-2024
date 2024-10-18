import mongoose from 'mongoose'
import { projectSchema } from '../schemas/projectSchema.js'

export const Project = mongoose.model('Project', projectSchema)
