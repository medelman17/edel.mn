import { graphql } from "gatsby"

export const query = graphql`
  fragment SiteMetadata on SiteSiteMetadata {
    author
    banner
    description
    domain
    favicon
    ogLanguage
    twitter
    webmention
    title
    themeColor
    skipNavId
    shortName
    google
    email
    backgroundColor
    siteUrl
    sitemap
  }
`
