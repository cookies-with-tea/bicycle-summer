import type { NuxtPage } from 'nuxt/schema'
import { fileURLToPath } from 'node:url'

const devPlugins: Plugin[] = []

// DEBT: А надо ли это указывать в dev зависимости?
if (process.env.DEV) {
  import('vite-plugin-compression2').then((r) => {
    devPlugins.push(<Plugin>r.compression())
  })
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: { asyncContext: true },
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        {
          property: 'type',
          content: 'website',
        },
      ],
    },
  },
  elementPlus: {
    importStyle: 'scss',
  },
  modules: ['@element-plus/nuxt', '@nuxt/image'],
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      sm: 1,
      md: 768,
      lg: 1200,
      xl: 1440,
    },
  },
  css: ['assets/styles/index.scss'],

  typescript: {
    strict: true,
  },
  dir: {
    plugins: './src/app/plugins',
    layouts: './src/app/layouts',
    middleware: './src/app/middleware',
    pages: './src/pages',
  },
  components: {
    global: false,
    dirs: [],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_VUE_APP_BASE_URI,
      siteURL: process.env.NUXT_VUE_APP_SITE_URL,
      env: {
        NUXT_VUE_APP_BASE_URI: process.env.NUXT_VUE_APP_BASE_URI,
        NUXT_VUE_APP_SITE_URL: process.env.NUXT_VUE_APP_SITE_URL,
      },
    },
  },

  vite: {
    server: {
      proxy: {
        '/api': process.env?.NUXT_VUE_APP_BASE_URI ?? '',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "styles/additionals/variables/index.scss" as *;
            @use "styles/additionals/mixins/index.scss" as *;
            @use "styles/additionals/vendor/index.scss" as *;
          `,
        },
      },
    },
    plugins: [...devPlugins],
    build: { chunkSizeWarningLimit: 1600 },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@@': fileURLToPath(new URL('./', import.meta.url)),
        public: fileURLToPath(new URL('./public', import.meta.url)),
        assets: fileURLToPath(new URL('./assets', import.meta.url)),
        styles: fileURLToPath(new URL('./assets/styles', import.meta.url)),
        app: fileURLToPath(new URL('./src/app', import.meta.url)),
        '#processes': fileURLToPath(new URL('./src/processes', import.meta.url)),
        '#pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '#widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
        '#features': fileURLToPath(new URL('./src/features', import.meta.url)),
        '#entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
        '#shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      },
    },
  },

  hooks: {
    'pages:extend'(pages: NuxtPage[]) {
      function removePagesMatching(pathPattern: RegExp, filePattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove = []

        for (const page of pages) {
          if (pathPattern.test(page.path) || (page.file && filePattern.test(page.file))) {
            pagesToRemove.push(page)
          } else {
            removePagesMatching(pathPattern, filePattern, page.children)
          }
        }

        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }

      removePagesMatching(/\/ui\//, /\.ts$/, pages)
    },
  },
})
