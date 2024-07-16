export const useDataStore = defineStore('data', {
	state: () => ({
		personalInfo: {
			name: '',
			email: '',
			phone: '',
		},
	}),
})
