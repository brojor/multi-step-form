<template>
	<div class="buttons">
		<button v-if="stepNum !== 0" class="button-secondary" @click="$emit('previous-step')">Go Back</button>
		<button class="button-primary" :class="{ confirm: stepNum === 3 }" @click="$emit('next-step')">{{ nextButtonLabel
			}}</button>
	</div>
</template>


<script setup lang="ts">
defineEmits(['next-step', 'previous-step'])
const props = defineProps<{
	stepNum: number
}>()

const nextButtonLabel = computed(() => {
	return props.stepNum === 3 ? 'Confirm' : 'Next Step'
})

</script>


<style scoped>
.buttons {
	margin-top: auto;
	display: flex;
	justify-content: space-between;
	background-color: var(--clr-white);
	padding: 1rem;
}

@media (min-width: 50rem) {
	.buttons {
		padding: 0;
	}
}

button {
	padding: 0.75rem 1.5rem;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	font-weight: 700;
}

.button-primary {
	margin-left: auto;
	background-color: var(--clr-marine-blue);
	color: var(--clr-white);
}

.confirm {
	background-color: var(--clr-purplish-blue);
}

.button-primary:hover,
.button-primary:focus {
	filter: brightness(1.5);
}

.button-secondary {
	background: transparent;
	color: var(--clr-cool-gray);
	padding: 0;
}

.button-secondary:hover,
.button-secondary:focus {
	color: var(--clr-marine-blue);
}
</style>