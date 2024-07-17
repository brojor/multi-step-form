export const plans = [
	{ name: 'Arcade', price: { monthly: 9, yearly: 90 } },
	{ name: 'Advanced', price: { monthly: 12, yearly: 120 } },
	{ name: 'Pro', price: { monthly: 15, yearly: 150 } },
] as const

export const addOns = [
	{
		name: 'Online service',
		description: 'Access to multiplayer games',
		price: { monthly: 1, yearly: 10 },
	},
	{
		name: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		price: { monthly: 2, yearly: 20 },
	},
	{
		name: 'Customizable profile',
		description: 'Custom theme on your profile',
		price: { monthly: 2, yearly: 20 },
	},
] as const

type Plan = (typeof plans)[number]
type AddOn = (typeof addOns)[number]

export const useDataStore = defineStore('data', {
	state: () => ({
		personalInfo: {
			name: '',
			email: '',
			phone: '',
		},
		yearlyBilling: false as boolean,
		plan: plans[0] as Plan,
		addOns: [] as AddOn[],
	}),

	getters: {
		formatPrice: (state) => (price: { monthly: number; yearly: number }) => {
			const period = state.yearlyBilling ? 'yr' : 'mo'
			return `$${state.yearlyBilling ? price.yearly : price.monthly}/${period}`
		},
	},

	actions: {
		addAddOn(addOn: AddOn) {
			if (!this.addOns.includes(addOn)) {
				this.addOns.push(addOn)
			}
		},
		removeAddOn(addOn: AddOn) {
			const index = this.addOns.indexOf(addOn)
			if (index !== -1) {
				this.addOns.splice(index, 1)
			}
		},
		toggleAddOn(addOn: AddOn) {
			if (this.addOns.includes(addOn)) {
				this.removeAddOn(addOn)
			} else {
				this.addAddOn(addOn)
			}
		},
	},
})
