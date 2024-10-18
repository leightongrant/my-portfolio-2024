import mongoose from 'mongoose'
export const projectSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		image: String,
	},
	{
		timestamps: true,
	}
)
