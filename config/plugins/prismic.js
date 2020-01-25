const cwd = process.cwd()

const pages = [
  {
    type: "Post",
    match: "/blog/:uid",
    path: "/posts",

    component: require.resolve(cwd + "/src/modules/posts/index.js"),
  },
  {
    type: "Page",
    match: "/:uid",
    path: "/pages",

    filter: data => {
      return !data.node._meta.uid.includes("home")
    },
    component: require.resolve(cwd + "/src/modules/pages/index.js"),
  },
]

exports.getPrismicSourceConfig = function getPrismicSourceConfig(config) {
  return {
    resolve: `gatsby-source-prismic-graphql`,
    options: {
      repositoryName: config.prismicRepo,
      defaultLang: "en-us",
      omitPrismicScript: true,
      accessToken: config.prismicAccessToken,
      path: config.prismicPreviewPath,
      previews: config.prismicPreviewEnabled,
      pages,
    },
  }
}
