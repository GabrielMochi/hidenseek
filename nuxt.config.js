const packageJson = require('./package.json')

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    version: packageJson.version
  },
  router: {
    middleware: 'checkAuth'
  },
  head: {
    title: `Hide 'N' Seek`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#90caf9',
    failedColor: '#F44336',
    height: '4px'
  },
  /*
  ** Build configuration
  */
  plugins: [
    '~/plugins/vuetify',
    '~/plugins/axios',
    '~/plugins/vue-rxjs'
  ],
  css: ['~/assets/styles/app.styl'],
  build: {
    vendor: ['axios', 'vuex-class', 'nuxt-class-component', 'babel-polyfill'],
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    }
  },
  modules: ['~/modules/typescript'],
  vendor: [
    '~/plugins/vuetify'
  ],
  extractCSS: true
};
