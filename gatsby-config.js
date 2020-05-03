const config = require('./config');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  siteMetadata: {
    author: config.siteAuthor,
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
    settings: { ...config },
  },
  plugins: [
    `gatsby-plugin-emotion`,
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
        path: `${__dirname}/src/`,
      },
    }
  ],
  pathPrefix
}
