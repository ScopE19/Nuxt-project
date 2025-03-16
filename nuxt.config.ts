// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(), vue(),
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});
