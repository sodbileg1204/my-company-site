import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nemu.energy',
  base: '/',
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
