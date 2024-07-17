<template>
	<label :class="{ checked }">
		<input type="checkbox" class="sr-only" @click.stop :checked="checked">
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9">
			<path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"></path>
		</svg>
	</label>
</template>

<script setup lang="ts">
defineProps<{
	checked: boolean
}>()
</script>

<style scoped>
label {
	border: 1px solid var(--clr-light-gray);
	border-radius: 4px;
	width: 21px;
	height: 21px;
	display: block;
	position: relative;
	cursor: pointer;
}

label.checked {
	background-color: var(--clr-purplish-blue);
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}

svg {
	position: absolute;
	inset: 0;
	margin: auto;
}
</style>
