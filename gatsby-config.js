const config = require('./config')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  siteMetadata: {
    author: config.siteAuthor,
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
    settings: { ...config },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  ],
  pathPrefix
}
