import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config

export default defineConfig({
  site: "https://gaqbc.org",
  integrations: [tailwind(), mdx(), sitemap(), icon(), react()],

    vite: {
        plugins: [tailwindcss()],
    },
});
