const withImages = require('next-images')

const NEXT_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8289/v1/'
    : 'https://siteen.co/api/v1/'

const NEXT_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://siteen.co/'

module.exports = withImages({
  fileExtensions: ['webp', 'svg'],
  webpack(config) {
    return config
  },
  env: {
    NEXT_API_URL,
    NEXT_BASE_URL
  }
})
