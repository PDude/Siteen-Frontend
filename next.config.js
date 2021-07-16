const withImages = require('next-images')

module.exports = withImages({
  fileExtensions: ['webp', 'svg'],
  webpack(config) {
    return config
  },
  env: {
    NEXT_API_URL: 'https://siteen.co/api/v1/'
  }
})
