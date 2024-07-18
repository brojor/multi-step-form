<template>
	<div class="content-inner">
		<h1 class="heading">Pick add-ons</h1>
		<p class="sub-heading">Add-ons help enhance your gaming experience.</p>

		<ul class="add-ons">
			<li class="add-on" v-for="addOn in addOns" @click="dataStore.toggleAddOn(addOn)" @keypress="handleKeypress(addOn, $event)"
				tabindex="0" :class="{ active: dataStore.addOns.includes(addOn) }">
				<ACheckbox :checked="dataStore.addOns.includes(addOn)" />
				<div>
					<h2 class="name">{{ addOn.name }}</h2>
					<p class="description">{{ addOn.description }}</p>
				</div>
				<p class="price">+{{ dataStore.formatPrice(addOn.price) }}</p>
			</li>
		</ul>
	</div>
	<NavButtons :step-num="stepNum" @next-step="$emit('next-step')" @previous-step="$emit('previous-step')" />
</template>


<script setup lang="ts">
import { addOns, useDataStore } from '~/stores/dataStore';

defineEmits(['next-step', 'previous-step'])
defineProps<{
	stepNum: number
}>()

const dataStore = useDataStore()

const handleKeypress = (addOn: AddOn, event: KeyboardEvent) => {
	if (event.key === 'Enter' || event.key === ' ') {
		dataStore.toggleAddOn(addOn)
	}
}
</script>


<style scoped>
.add-ons {
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.add-on {
	border: 1px solid var(--clr-light-gray);
	border-radius: 0.5rem;
	display: flex;
	gap: 1rem;
	padding: 0.5rem 1rem;
	align-items: center;
	cursor: pointer;
	font-size: 0.75rem;
}

.add-on.active {
	background-color: var(--clr-magnolia);
	border-color: var(--clr-purplish-blue);
}

.name {
	font-size: 0.875rem;
}

.description {
	color: var(--clr-cool-gray);
}

.price {
	margin-left: auto;
	color: var(--clr-purplish-blue);
}

@media (min-width: 50rem) {
	.add-ons {
		margin-top: 2.25rem;
		gap: 1.25rem;
	}

	.add-on {
		gap: 1.5rem;
		padding: 1rem 1.5rem;
		font-size: 0.875rem;
	}

	.name {
		font-size: 1rem;
	}
}
</style>