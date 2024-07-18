<template>
	<div class="content-inner">
		<div class="wrapper">
			<IconThankYou />
			<h1>Thank you!</h1>

			<p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
				please feel free to email us at support@loremgaming.com.
			</p>
		</div>
	</div>
</template>


<script setup lang="ts">

</script>


<style scoped>
.wrapper {
	margin-top: 2.25rem;
	display: grid;
	height: 100%;
	place-items: center;
	text-align: center;
	align-content: center;
	gap: 1rem;
}

svg {
	width: 3.75rem;
	height: 3.75rem;
}

h1 {
	font-size: 1.5rem;
}

p {
	color: var(--clr-cool-gray);
	line-height: 1.5;
}

@media (min-width: 50rem) {
	.content-inner {
		height: 100%;
	}

	.wrapper {
		gap: 1.5rem;
		margin-top: 0;
	}

	h1 {
		font-size: 2rem;
	}

	svg {
		width: auto;
		height: auto;
	}

	p {
		margin-top: -1rem;
	}
}
</style>