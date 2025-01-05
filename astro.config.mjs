// @ts-check
import { defineConfig } from "astro/config";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [compressor()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
