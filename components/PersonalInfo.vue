<template>
	<div class="content-inner">
		<h1>Personal info</h1>
		<p class="sub-heading">Please provide your name, email address, and phone number.</p>

		<form>
			<div class="flex-group">
				<label for="name">Name</label>
				<p class="error-message">{{ errors?.name?._errors[0] }}</p>
			</div>
			<input v-model="data.name" :class="{ invalid: errors?.name }" type="text" id="name"
				placeholder="e.g. Stephen King" />

			<div class="flex-group">
				<label for="email">Email Address</label>
				<p class="error-message">{{ errors?.email?._errors[0] }}</p>
			</div>
			<input v-model="data.email" :class="{ invalid: errors?.email }" type="email" id="email"
				placeholder="e.g. stephenking@lorem.com" />


			<div class="flex-group">
				<label for="phone">Phone Number</label>
				<p class="error-message">{{ errors?.phone?._errors[0] }}</p>
			</div>
			<input v-model="data.phone" :class="{ invalid: errors?.phone }" type="tel" id="phone"
				placeholder="e.g. +1 234 567 890" />

		</form>
	</div>
	<NavButtons :step-num="stepNum" @next-step="handleSubmit" @previous-step="$emit('previous-step')" />
</template>


<script setup lang="ts">
import * as z from 'zod'

const emit = defineEmits(['next-step', 'previous-step'])
defineProps<{
	stepNum: number
}>()

const data = ref({
	name: '',
	email: '',
	phone: ''
})

const formSchema = z.object({
	name: z.string().min(1, { message: 'This field is required' }),
	email: z.string().min(1, { message: 'This field is required' }).email(),
	phone: z.string().min(1, { message: 'This field is required' })
})

type FormSchema = z.infer<typeof formSchema>

const errors = ref<z.ZodFormattedError<FormSchema> | null>(null)

const handleSubmit = () => {
	const result = formSchema.safeParse(data.value)
	if (!result.success) {
		errors.value = result.error.format()
		return
	}

	errors.value = null
	emit('next-step')
}
</script>


<style scoped>
form {
	margin-top: 2rem;
}

label {
	display: block;
}

input {
	margin-top: 0.5rem;
	height: 3rem;
	width: 100%;
	padding: 0.75rem 1rem;
	font-weight: 500;
	border: 1px solid var(--clr-light-gray);
	border-radius: 0.5rem;
}

input:focus {
	outline: none;
	border: 1px solid var(--clr-purplish-blue);
}

input.invalid {
	border-color: var(--clr-strawberry-red);
}

.flex-group {
	font-weight: 500;
	font-size: 0.875rem;
	margin-top: 1.25rem;
	display: flex;
	justify-content: space-between;
}

.error-message {
	color: var(--clr-strawberry-red)
}
</style>