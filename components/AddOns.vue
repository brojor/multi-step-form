<template>
	<div class="content-inner">
		<h1>Pick add-ons</h1>
		<p class="sub-heading">Add-ons help enhance your gaming experience.</p>
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