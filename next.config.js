const nextra = require('nextra')

const isGithubActions = process.env.GITHUB_ACTIONS || false
const PrPreviewPath = process.env.PR_URI || false

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  if (PrPreviewPath) {
    const path = PrPreviewPath.slice(0, PrPreviewPath.length-1)
    assetPrefix = `/${ repo }/${path}/`
    basePath = `/${ repo }/${path}`
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