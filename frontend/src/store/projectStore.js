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
		try {
			await axios.post('http://localhost:5000/api/projects', newProject)
			return true
		} catch (error) {
			console.log(error.message)
			return false
		}
	},
	deleteProject: async id => {
		try {
			await axios.delete('http://localhost:5000/api/projects/' + id)
			return true
		} catch (error) {
			console.log(error.message)
			return false
		}
	},
	editProject: async (id, edited) => {
		try {
			await axios.put('http://localhost:5000/api/projects/' + id, edited)
			return true
		} catch (error) {
			console.log(error.message)
			return false
		}
	},
}))
