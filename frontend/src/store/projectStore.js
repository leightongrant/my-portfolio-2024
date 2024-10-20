import { create } from 'zustand'
import axios from 'axios'

export const useProjectStore = create(set => ({
	projects: null,
	getProjects: async () => {
		try {
			const res = await axios.get('http://localhost:5000/api/projects')
			set(() => ({ projects: res.data }))
		} catch (error) {
			console.log(error.message)
		}
	},
	addProject: async newProject => {
		console.log(newProject)
		// try {
		// 	const res = await axios.post('http://localhost:5000/api/projects', newProject)
		// 	console.log(res)
		// } catch (error) {
		// 	console.log(error.message)
		// }
	},
}))
