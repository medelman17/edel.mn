require("dotenv").config({ path: ".env" })
const { linkResolver } = require("./src/utils/linkResolver")

const api = {
  apiEndpoint: "https://your-repo-name.cdn.prismic.io/api/v2",
  accessToken: process.env.PRISMIC_ACCESS_TOKEN || "",
  linkResolver,
}

module.exports = api
