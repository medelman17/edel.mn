/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import Layout from "./src/components/layout"
const { OptionsProvider } = require("./src/components/options-context")

const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/utils/linkResolver")

registerLinkResolver(linkResolver)

export const wrapPageElement = ({ element, props, ...rest }, pluginOptions) => {
  const value = {
    transitions: true,
    grid: "grid",
    postsPerPage: 6,
    progressIndicator: true,
    ...pluginOptions,
  }
  console.log(rest, props)

  return (
    <OptionsProvider value={value}>
      <Layout {...props}>{element}</Layout>
    </OptionsProvider>
  )
}
