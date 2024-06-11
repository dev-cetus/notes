// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@nuxt/fonts", "@nuxt/eslint"],

  ssr: false,

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google'}
    ]
  },

  nitro: {
    prerender: {
      routes: ['/', '/debug']
    }
  },

  pwa: {
    srcDir: 'service-worker',
    filename: 'sw.ts',
    manifest: {
      name: 'Notes',
      short_name: 'Notes',
      theme_color: '#1b56f5',
      lang: 'en',
      icons: [
        {
          src: 'logo_144.png',
          sizes: '144x144',
          type: 'image/png',
        }, {
          src: 'logo_512.png',
          sizes: '512x512',
          type: 'image/png',
        }
      ]
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
})