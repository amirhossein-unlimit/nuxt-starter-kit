// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
});
