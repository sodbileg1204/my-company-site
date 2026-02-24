import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',
  integrations: [
    react(),
    tailwind()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'mn'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Ensure clean output
        }
      }
    }
  }
});
