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
  fonts: {
    families: [
      {
        name: 'IRANSansX',
        provider: 'local',
        src: '/fonts/IRANSansX/woff/IRANSansXFaNum-LightD4.woff',
        weight: 300,
        style: 'normal',
      },
      {
        name: 'IRANSansX',
        provider: 'local',
        src: '/fonts/IRANSansX/woff/IRANSansXFaNum-RegularD4.woff',
        weight: 400,
        style: 'normal',
      },
      {
        name: 'IRANSansX',
        provider: 'local',
        src: '/fonts/IRANSansX/woff/IRANSansXFaNum-MediumD4.woff',
        weight: 500,
        style: 'normal',
      },
      {
        name: 'IRANSansX',
        provider: 'local',
        src: '/fonts/IRANSansX/woff/IRANSansXFaNum-DemiBoldD4.woff',
        weight: 600,
        style: 'normal',
      },
      {
        name: 'IRANSansX',
        provider: 'local',
        src: '/fonts/IRANSansX/woff/IRANSansXFaNum-BoldD4.woff',
        weight: 700,
        style: 'normal',
      },
      {
        name: 'IRANSansX',
        provider: 'local',
        src: '/fonts/IRANSansX/woff/IRANSansXFaNum-ExtraBoldD4.woff',
        weight: 800,
        style: 'normal',
      },
    ],
  },
});
