// const {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD
// } = require('next/constants')

const withImages = require('next-images')

const mode =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8289/v1/'
    : 'https://siteen.co/api/v1/'

module.exports = withImages({
  fileExtensions: ['webp', 'svg'],
  webpack(config) {
    return config
  },
  env: {
    NEXT_API_URL: mode
  }
})

// module.exports = withImages({
//   fileExtensions: ['webp', 'svg'],
//   webpack(config) {
//     return config
//   },
//   env: phase => {
//     const isDev = phase === PHASE_DEVELOPMENT_SERVER
//     const isProd =
//       phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

//     console.log(`isDev:${isDev}  isProd:${isProd}`)

//     const env = {
//       NEXT_BASE_URL: (() => {
//         if (isDev) return 'http://localhost:3000/'
//         if (isProd) {
//           return 'https://siteen.co/'
//         }
//       })(),
//       NEXT_API_URL: (() => {
//         return 'http://localhost:8289/v1/'
//       })()
//     }

//     return {
//       env
//     }
//   }
// })
