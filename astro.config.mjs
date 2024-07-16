import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://waseidev.netlify.app",
  integrations: [preact(), sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        es: "es-ES",
        en: "en-US"
      }
    }
  }), tailwind(), icon()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallback: {
      en: "es"
    },
    routing: {
      prefixDefaultLocale: false
    }
  }
});