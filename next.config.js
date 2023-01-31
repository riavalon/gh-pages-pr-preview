const nextra = require('nextra')

const isGithubActions = process.env.GITHUB_ACTIONS || false
const pullRequestNumber = process.env.PR_NUM || false

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${ repo }/`
  basePath = `/${ repo }`

  if (pullRequestNumber) {
    assetPrefix = `/${repo}/pull/${pullRequestNumber}/`
    basePath = `/${repo}/pull/${pullRequestNumber}`
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