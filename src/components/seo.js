import React from "react"
import Helmet from "react-helmet"

export function SEO(props) {
  const { lang, title } = props
  const meta = getSiteMetaTags(props)
  console.log(props)
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      // titleTemplate={`%s | ${title}`}
      meta={meta}
    />
  )
}

function getSiteMetaTags(props) {
  const { description, title, twitter } = props
  return [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: twitter,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat()
}

export default SEO
