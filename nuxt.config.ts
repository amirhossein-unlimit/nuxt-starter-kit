// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'neutral'],
    },
  },
  fonts: {
    families: [
      {
        name: 'IRANSansXFaNum',
        provider: 'local',
        weights: [300, 400, 500, 600, 700, 800],
        style: 'normal',
      },
    ],
  },
  icon: {
    provider: 'none',
    componentName: 'NuxtIcon',
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
    mode: 'svg',
  },
  image: {
    dir: 'assets/images',
  },
});
