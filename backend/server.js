import express from 'express'
import path from 'node:path'
import { projectsRouter } from './routes/projects.js'
import dbConnect from './database/dbConnect.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

dbConnect()

app.use(express.json())

app.use('/api', projectsRouter)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'frontend', 'dist')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
	})
}

app.use(errorHandler)

app.listen(PORT, () =>
	console.log(`Server running at http://localhost:${PORT}`)
)
