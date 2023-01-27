const nextra = require('nextra')

const isGithubActions = process.env.GITHUB_ACTIONS || false
const PrPreviewPath = process.env.PR_PATH || ''

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  if (PrPreviewPath) {
    assetPrefix = `/${ repo }/${PrPreviewPath}/`
    basePath = `/${ repo }/${PrPreviewPath}`
  } else {
    assetPrefix = `/${ repo }/`
    basePath = `/${ repo }`
  }
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
})