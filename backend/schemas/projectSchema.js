import mongoose from 'mongoose'
export const projectSchema = new mongoose.Schema(
	{
		title: String,
		about: String,
		description: String,
		image: String,
		app: String,
		repo: String,
	},
	{
		timestamps: true,
	}
)
