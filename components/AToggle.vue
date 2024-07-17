<template>
	<label class="switch" tabindex="0" @keypress="handleKeypress">
		<input @change="handleChange" :checked="isOn" type="checkbox" tabindex="-1">
		<span class="slider"></span>
	</label>
</template>

<script setup lang="ts">
const emit = defineEmits(['change'])
const props = defineProps<{
	isOn: boolean
}>()

const handleChange = () => {
	emit('change', !props.isOn)
}

const handleKeypress = (event: KeyboardEvent) => {
	if (event.key === 'Enter' || event.key === ' ') {
		handleChange()
	}
}

</script>

<style scoped>
.switch {
	position: relative;
	display: inline-block;
	width: 39px;
	height: 22px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--clr-marine-blue);
	-webkit-transition: .4s;
	transition: .4s;
	border-radius: 34px;
}

.slider:before {
	position: absolute;
	content: "";
	height: 14px;
	width: 14px;
	left: 4px;
	bottom: 4px;
	background-color: white;
	-webkit-transition: .4s;
	transition: .4s;
	border-radius: 50%;
}

input:checked+.slider {
	background-color: var(--clr-marine-blue);
}

input:focus+.slider {
	box-shadow: 0 0 1px var(--clr-marine-blue);
}

input:checked+.slider:before {
	-webkit-transform: translateX(16px);
	-ms-transform: translateX(16px);
	transform: translateX(16px);
}
</style>