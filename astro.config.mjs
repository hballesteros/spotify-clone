import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // esto se pone para que las páginas se rendericen en el servidor
  output: 'server' 
});