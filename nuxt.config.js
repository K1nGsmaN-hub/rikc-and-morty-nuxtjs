import { resolve } from 'path'

export default {
  ssr: process.env.NODE_ENV !== 'mobile',
  mode: 'universal',
  router: {
    mode: process.env.NODE_ENV === 'mobile' ? 'hash' : 'history',
  },

  generate: {
    minify: {
      collapseWhitespace: false,
    },
    fallback: 'error.html',
  },

  head: {
    title: 'Rick and Morty',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'png', type: 'image/png', href: '/icon.png' }],
  },
  loading: '~/components/atoms/Loader/index.vue',
  srcDir: 'src/',

  alias: {
    icons: resolve(__dirname, './src/assets/icons'),
    atoms: resolve(__dirname, './src/components/atoms'),
    molecules: resolve(__dirname, './src/components/molecules'),
    organisms: resolve(__dirname, './src/components/organisms'),
    templates: resolve(__dirname, './src/components/templates'),
    directives: resolve(__dirname, './src//directives'),
    services: resolve(__dirname, './src/services'),
    repositories: resolve(__dirname, './src/repositories'),
    plugins: resolve(__dirname, './src/plugins'),
    types: resolve(__dirname, './src/types'),
  },

  css: ['~/assets/scss/main.scss'],

  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/services/index.ts' },
    { src: '~/plugins/repositories/index.ts' },
    { src: '~/plugins/lodash.js' },
  ],

  components: false,

  modern: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    'nuxt-build-optimisations',
    '@nuxtjs/composition-api/module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-highcharts',
    ['v-tooltip-nuxt', { defaultPlacement: 'top' }],
  ],

  buildOptimisations: {
    profile: process.env.NODE_ENV === 'development' ? 'risky' : 'experimental',
  },

  styleResources: {
    scss: [
      './src/assets/scss/_mixins.scss',
      './src/assets/scss/_variables.scss',
    ],
  },

  axios: {
    baseUrl: process.env.BASE_URL,
    headers: {
      Accept: 'application/json',
    },
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    publicPath: '/nuxt/',
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
    extend(config, _) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },
}
