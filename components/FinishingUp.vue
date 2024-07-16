<template>
	<div class="content-inner">
		<h1>Finishing up</h1>
		<p class="sub-heading">Double-check everything looks OK before confirming.</p>
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