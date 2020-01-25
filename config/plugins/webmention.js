require("dotenv").config({ path: ".env" })

exports.getWebmentionConfig = function getWebmentionConfig(config) {
  return {
    resolve: `gatsby-plugin-webmention`,
    options: {
      username: config.webmention,
      identity: {
        github: config.github,
        twitter: config.twitter,
        email: config.email,
      },
      mentions: true,
      pingbacks: false,
      forwardPingbacksAsWebmentions: "https://example.com/endpoint",
      domain: config.domain,
      fetchLimit: 10000, // number of webmentions to fetch
      token: process.env.WEBMENTIONS_TOKEN,
    },
  }
}
