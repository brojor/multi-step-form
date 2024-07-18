<template>
	<div class="content-inner">
		<h1 class="heading">Finishing up</h1>
		<p class="sub-heading">Double-check everything looks OK before confirming.</p>

		<div class="services">
			<div class="plan">
				<div>
					<h2 class="plan-name">Arcade ({{ dataStore.yearlyBilling ? 'Yearly' : 'Monthly' }})</h2>
					<span class="change" @click="$emit('changeStep', -2)">Change</span>
				</div>
				<p class="plan-price">{{ dataStore.formatPrice(dataStore.plan.price) }}</p>
			</div>
			<ul class="add-ons" v-if="dataStore.addOns.length">
				<li class="add-on" v-for="addOn in dataStore.addOns">
					<span>{{ addOn.name }}</span>
					<span class="add-on-price">+{{ dataStore.formatPrice(addOn.price) }} </span>
				</li>
			</ul>
		</div>
		<div class="total-price">
			<span>Total (per {{ dataStore.yearlyBilling ? 'year' : 'month' }})</span>
			<span>+{{ dataStore.formatPrice(dataStore.totalPrice) }}</span>
		</div>
	</div>
	<NavButtons :step-num="stepNum" @next-step="$emit('changeStep', 1)" @previous-step="$emit('changeStep', -1)" />
</template>


<script setup lang="ts">
defineEmits(['changeStep'])
defineProps<{
	stepNum: number
}>()

const dataStore = useDataStore()

</script>


<style scoped>
.services {
	margin-top: 2.5rem;
	background-color: var(--clr-magnolia);
	border-radius: 0.5rem;
	padding: 1rem 1.5rem;
	color: var(--clr-cool-gray);
	font-size: 0.875rem;
	font-weight: 500;
}

.plan {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.plan-name {
	font-size: 1rem;
	color: var(--clr-marine-blue);
}

.plan-price {
	color: var(--clr-marine-blue);
	font-size: 1rem;
	font-weight: 700;
}

.change {
	text-decoration: underline;
	cursor: pointer;
	text-decoration-thickness: 2px;
}

.change:hover {
	color: var(--clr-purplish-blue);
}

.add-ons {
	border-top: 1px solid var(--clr-light-gray);
	padding-top: 0.5rem;
	margin-top: 1.5rem;
}

.add-on {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0;
}

.add-on-price {
	color: var(--clr-marine-blue);
}

.total-price {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--clr-cool-gray);
	padding: 1rem 1.5rem;
}

.total-price span:last-child {
	font-weight: 700;
	color: var(--clr-purplish-blue);
	font-size: 1.25rem;
}
</style>