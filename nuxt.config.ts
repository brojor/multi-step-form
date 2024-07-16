// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['~/assets/style.css'],
	modules: ['@nuxtjs/google-fonts'],
	googleFonts: {
		families: {
			Ubuntu: [400, 500, 700],
		},
	},
})
