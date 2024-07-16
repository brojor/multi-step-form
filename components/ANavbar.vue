<template>
	<nav>
		<ul>
			<li v-for="(item, i) in navItems">
				<div class="nav-item-number" :class="{ active: activeStep === i }">{{ i + 1 }}</div>
				<div>
					<p class="step">{{ `Step ${i + 1}` }}</p>
					<p class="nav-item-name">{{ item }}</p>
				</div>
			</li>
		</ul>
	</nav>
</template>


<script setup lang="ts">
defineProps<{
	activeStep: number
}>()

const navItems = [
	'Your info',
	'Select Plan',
	'Add-ons',
	'Summary',
]
</script>


<style scoped>
nav {
	background-image: url(/public/bg-sidebar-mobile.svg);
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 10.875rem;
}

ul {
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	gap: 1rem;
}

li {
	display: flex;
	align-items: center;
	text-transform: uppercase;
	gap: 1rem;
}

li> :last-child {
	display: none;
}

.nav-item-number {
	color: var(--clr-white);
	border: 1px solid var(--clr-white);
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	font-size: 0.875rem;
}

.nav-item-number.active {
	background-color: var(--clr-light-blue);
	color: var(--clr-marine-blue);
}

.step {
	font-size: 0.75rem;
	color: var(--clr-pastel-blue);
}

.nav-item-name {
	font-size: 0.875rem;
	letter-spacing: 1.25px;
	color: var(--clr-white);
	font-weight: 500;
	line-height: 1.1;
}

@media (min-width: 50rem) {
	nav {
		position: relative;
		background-image: url(/public/bg-sidebar-desktop.svg);
		width: 17.25rem;
		display: flex;
		border-radius: 0.5rem;
		padding: 2.5rem 2rem;
		height: 100%;
		align-items: start;
	}

	ul {
		flex-direction: column;
		gap: 2rem;
		margin-top: 0;
	}

	li> :last-child {
		display: block;
	}
}
</style>