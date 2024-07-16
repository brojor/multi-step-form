<template>
	<div class="content-inner">
		<h1>Select your plan</h1>
		<p class="sub-heading">You have the option of monthly or yearly billing.</p>
	</div>
	<NavButtons :step-num="stepNum" @next-step="$emit('next-step')" @previous-step="$emit('previous-step')" />
</template>


<script setup lang="ts">
defineEmits(['next-step', 'previous-step'])
defineProps<{
	stepNum: number
}>()

</script>


<style scoped></style>