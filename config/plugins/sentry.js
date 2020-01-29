exports.getSentryConfig = function getSentryConfig(config) {
  return {
    resolve: `gatsby-plugin-sentry`,
    options: {
      dsn: config.sentryDSN,
      environment: process.env.NODE_ENV,
      enabled: (() =>
        ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
    },
  }
}
