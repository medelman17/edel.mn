const cwd = process.cwd()
const { getPrismicSourceConfig } = require("./prismic")
const { getManifestConfig } = require("./manifest")
const { getWebmentionConfig } = require("./webmention")
const { getSentryConfig } = require("./sentry")

exports.createPluginConfig = function createPluginConfig(config) {
  return [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,

    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-remarketer`,
      options: {
        twitter: {
          siteId: `nyitn`,
        },
        debug: false,
      },
    },
    `gatsby-plugin-portal`,
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
    getSentryConfig(config),
    getWebmentionConfig(config),
    `gatsby-plugin-accessibilityjs`,
    `gatsby-plugin-advanced-sitemap`,
    getManifestConfig(config),
    `gatsby-plugin-offline`,
  ]
}
