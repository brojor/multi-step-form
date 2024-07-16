<template>
	<div class="buttons">
		<button class="button-secondary">Go back</button>
		<button class="button-primary">Next Step</button>
	</div>
</template>


<script setup lang="ts">

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