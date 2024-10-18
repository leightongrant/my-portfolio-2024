import mongoose from 'mongoose'

const dbConnect = async () => {
	const url = process.env.MONGODB_URL
	try {
		const res = await mongoose.connect(url)
		console.log('Connected to MongoDB: ', res.connections[0].host)
	} catch (error) {
		console.log(error.message)
	}
}

export default dbConnect
