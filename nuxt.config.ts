// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate'
  ],
  vite: {
    plugins: [
      tailwindcss(),
  ]},
  auth: {
    globalAppMiddleware: false,
    baseURL: 'https://scope191337.netlify.app',
  },

  runtimeConfig: {
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
      
    },
  }
})