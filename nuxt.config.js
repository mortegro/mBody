const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/pouch',
    '@/plugins/konva',
    '@/plugins/logger',
    '@/plugins/forms',
    '@/plugins/encrypt',
    '@/plugins/subjectid',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  buildModules: [
    // With options
    ['@nuxtjs/vuetify', { /* module options */ }],
    '@nuxtjs/pwa',
    // '@nuxtjs/dotenv',

  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
    }
  },

  workbox: {
    runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: 'https://mbody.ecsplico.de/*',
        // Defaults to `networkFirst` if omitted
        handler: 'networkFirst',
        // Defaults to `GET` if omitted
        method: 'GET'
      }
    ]
  },

  manifest: {
    name: 'Nuxt Embody',
    lang: 'de',
    share_target: {
      action: "/share-target",
      params: {
        title: "title",
        text: "text",
        url: "url"
      }
    },
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    backend: process.env.BACKEND || 'https://backend',
    pubkey: process.env.PUBKEY || "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDI/9m1MbspdniIuqoqnqz7vjpf\nVnfpkqW5RdfLkhke9gxtjxPxpvdJEqjgU16L0iiTdgTDALC9V5Fv1L2G6ZGRZFCE\nyLB8jjy+ImOPeZk0oSmttws71OcVE9344O/AgPd8NtjLXVobNteRZs8sgSxugyOU\nDB/sheqMVjAwJah+iQIDAQAB\n-----END PUBLIC KEY-----"
  }

}
