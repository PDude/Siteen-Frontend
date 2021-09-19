// @ts-nocheck
const withImages = require('next-images')
const TerserPlugin = require('terser-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const NEXT_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8289/v1/'
    : 'https://siteen.co/api/v1/'

const NEXT_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://siteen.co/'

module.exports = withImages({
  future: {
    webpack5: true
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|webp|svg)$/i,
      type: 'asset'
    })

    config.plugins.push(
      new TerserPlugin({
        terserOptions: {
          compress: {
            ecma: 5,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false
          }
        },

        parallel: true
      }),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            [
              'svgo',
              {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false
                  },
                  {
                    name: 'addAttributesToSVGElement',
                    params: {
                      // @ts-ignore
                      attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
                    }
                  }
                ]
              }
            ]
          ]
        }
      })
    )

    config.optimization.minimize = true
    config.optimization.minimizer = [new TerserPlugin()]

    return config
  },

  fileExtensions: ['webp', 'svg'],
  webpack(config) {
    return config
  },
  env: {
    NEXT_API_URL,
    NEXT_BASE_URL
  }
})
