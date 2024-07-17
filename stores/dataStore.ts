export const plans = [
	{ name: 'Arcade', price: { monthly: 9, yearly: 90 } },
	{ name: 'Advanced', price: { monthly: 12, yearly: 120 } },
	{ name: 'Pro', price: { monthly: 15, yearly: 150 } },
]

export const useDataStore = defineStore('data', {
	state: () => ({
		personalInfo: {
			name: '',
			email: '',
			phone: '',
		},
		yearlyBilling: false,
		plan: plans[0],
	}),
})
