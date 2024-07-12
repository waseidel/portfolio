import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://waseidel.netlify.app",
	integrations: [
		preact(),
		sitemap({
			i18n: {
				defaultLocale: "es",
				locales: {
					es: "es-ES",
					en: "en-US",
				},
			},
		}),
	],
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		fallback: {
			en: "es",
		},
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
