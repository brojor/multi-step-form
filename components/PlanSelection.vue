<template>
	<div class="content-inner">
		<h1>Select your plan</h1>
		<p class="sub-heading">You have the option of monthly or yearly billing.</p>

		<div class="plan-cards">
			<div class="plan-card" v-for="(plan, i) in plans" :key="plan.name" :class="{ active: i === activeIndex }"
				@click="activeIndex = i" tabindex="0" @keypress="handleKeypress(i, $event)">
				<component :is="plan.icon" />
				<h2>{{ plan.name }}</h2>
				<p>{{ isYearly ? `$${plan.yearlyPrice}/yr` : `$${plan.monthlyPrice}/mo` }}</p>
				<p v-show="isYearly">2 months free</p>
			</div>
		</div>

		<div class="payment-method">
			<span :class="{ active: !isYearly }">Monthly</span>
			<AToggle @change="handleToggleChange" />
			<span :class="{ active: isYearly }">Yearly</span>
		</div>

	</div>
	<NavButtons :step-num="stepNum" @next-step="$emit('next-step')" @previous-step="$emit('previous-step')" />
</template>


<script setup lang="ts">
import IconArcade from '~/components/Icon/Arcade.vue'
import IconAdvanced from '~/components/Icon/Advanced.vue'
import IconPro from '~/components/Icon/Pro.vue'


defineEmits(['next-step', 'previous-step'])
defineProps<{
	stepNum: number
}>()

const activeIndex = ref(0)
const isYearly = ref(false)

const plans = [
	{ name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90, icon: IconArcade },
	{ name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120, icon: IconAdvanced },
	{ name: 'Pro', monthlyPrice: 15, yearlyPrice: 150, icon: IconPro },
]

const handleToggleChange = (isOn: boolean) => {
	isYearly.value = isOn
}

const handleKeypress = (index: number, event: KeyboardEvent) => {
	if (event.key === 'Enter' || event.key === ' ') {
		activeIndex.value = index
	}
}
</script>


<style scoped>
.plan-cards {
	display: grid;
	gap: 1rem;
	grid-auto-flow: column;
	grid-auto-columns: 1fr;
	margin-top: 2.5rem;
}

.plan-card {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border-radius: 0.5rem;
	border: 1px solid var(--clr-light-gray);
	cursor: pointer;
}

.plan-card:hover,
.plan-card:focus {
	border-color: var(--clr-purplish-blue);
}

.plan-card.active {
	border-color: var(--clr-purplish-blue);
	background-color: var(--clr-magnolia);
}

.plan-card h2 {
	font-size: 1rem;
	margin-top: 2.5rem;
}

.plan-card p:first-of-type {
	font-size: 0.875rem;
	color: var(--clr-cool-gray);
}

.plan-card p:last-of-type {
	margin-top: 0.25rem;
	font-size: 0.75rem;
}

.payment-method {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	margin-top: 2rem;
	background-color: var(--clr-magnolia);
	color: var(--clr-cool-gray);
	padding-block: 0.75rem;
	border-radius: 0.5rem;
	font-size: 0.875rem;
	font-weight: 500;
}

.payment-method span {
	transition: color 0.4s;
}

.payment-method span.active {
	color: var(--clr-marine-blue);
}
</style>