const path = require('path')
const { getWebpackConfig } = require('nuxt')

const FILTERED_PLUGINS = [
  'WebpackBarPlugin',
  'VueSSRClientPlugin',
  'HotModuleReplacementPlugin',
  'FriendlyErrorsWebpackPlugin',
  'HtmlWebpackPlugin',
]

module.exports = async () => {
  const nuxtWebpackConfig = await getWebpackConfig('client', {
    for: 'dev',
  })

  const webpackConfig = {
    module: {
      rules: [
        ...nuxtWebpackConfig.module.rules.filter(
          // remove the eslint-loader
          (a) => a.loader !== 'eslint-loader'
        ),
      ],
    },
    resolve: { ...nuxtWebpackConfig.resolve },
    plugins: [
      ...nuxtWebpackConfig.plugins.filter(
        (p) => !FILTERED_PLUGINS.includes(p.constructor.name)
      ),
    ],
  }

  return {
    sections: [
      {
        name: 'Introduction',
        content: './README.md',
      },
      {
        name: 'UI Components',
        sections: [
          {
            name: 'Atoms',
            components: './src/components/atoms/**/*.vue',
          },
          {
            name: 'Molecules',
            components: './src/components/molecules/**/*.vue',
          },
          {
            name: 'Organisms',
            components: './src/components/organisms/**/*.vue',
          },
          {
            name: 'Templates',
            components: './src/components/templates/**/*.vue',
          },
        ],
      },
    ],
    require: [path.join(__dirname, './src/assets/scss/main.scss')],
    webpackConfig,
    usageMode: 'expand',
    styleguideDir: './doc',
  }
}
