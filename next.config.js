const withImages = require('next-images')

module.exports = withImages({
  fileExtensions: ['webp', 'svg'],
  webpack(config) {
    return config
  }
})
