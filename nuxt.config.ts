// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import {definePreset} from "@primeuix/styled";
import { Cybernetix} from "./preset";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@pinia/nuxt'],
  plugins: ['~/plugins/firebase.js'],
  ssr: false,
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Cybernetix,
        options: {
          prefix: 'p',
          darkModeSelector: '.my-app-dark',
          cssLayer: false
        },
      }
    }
  },
  runtimeConfig: {
    // Only exposed on server
    mollieApiKey: process.env.MOLLIE_API_KEY,
    // If you ever need a frontend key (e.g. for client-side widgets), expose it under `public: { … }`
    public: {}
  }
})

