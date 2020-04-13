const webpack = require('webpack')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Карта бизнеса, терпящего бедствие',
    meta: [
      { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://biz-alert.ru'},
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Карта бизнеса, терпящего бедствие'},
      { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Эта карта — сигнал тревоги. Мы призываем предпринимателей, которые терпят крах из-за карантина, размещать на ней метки с обозначением своего бизнеса.'},
      { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://biz-alert.ru/og3.png'},
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Эта карта — сигнал тревоги. Мы призываем предпринимателей, которые терпят крах из-за карантина, размещать на ней метки с обозначением своего бизнеса.' }
    ],
    link: [
      {
        rel: 'icon',
        href: 'https://biz-alert.ru/favicon.png',
        as: 'font',
        type: 'image/png'
      },
      {
        rel: 'preload',
        href: '/fonts/IBMPlexSans-Text.otf',
        as: 'font',
        type: 'font/opentype'
      },
      {
        rel: 'preload',
        href: '/fonts/IBMPlexSans-Bold.otf',
        as: 'font',
        type: 'font/opentype'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
     [
        '@/plugins/yandex-metrika',
        {
          id: '61867911',
          webvisor: true,
          clickmap:true,
          // useCDN:false,
           trackLinks:true,
           accurateTrackBounce:true,
        }
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "",
          authDomain: "",
          databaseURL: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: ""
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ],
    ['vue-yandex-maps/nuxt', {
      apiKey: '',
      lang: 'ru_RU',
      version: '2.1.76'
    }],
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    optimization: {
      splitChunks: {
        chunks: 'async'
      }
    },
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-gb|ru/),
      // eslint-disable-next-line no-useless-escape
      new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/ru-RU')
    ],
    extend (config, ctx) {
    }
  }
}
