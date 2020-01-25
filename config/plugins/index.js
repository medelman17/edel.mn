const { getPrismicSourceConfig } = require("./prismic")
const { getManifestConfig } = require("./manifest")

exports.createPluginConfig = function createPluginConfig(config) {
  return [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: config.siteUrl,
        sitemap: config.sitemap,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    getPrismicSourceConfig(config),
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.google,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    getManifestConfig(config),
    `gatsby-plugin-offline`,
  ]
}
