/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import PageTemplate from "./template"
import { Layout, SEO } from "./layout"

import { isBrowser, hasPrismicData, hasGatsbyData } from "../../utils"

export const query = graphql`
  query PageQuery($uid: String!) {
    site {
      siteMetadata {
        ...SiteMetadata
      }
    }
    prismic {
      page(uid: $uid, lang: "en-us") {
        ...SinglePage
      }
      person(lang: "en-us", uid: "michael") {
        ...PostAuthor
      }
    }
  }
`
export default props => {
  const [hasPage, page] = hasPrismicData(props, "page")
  const [hasAuthor, author] = hasPrismicData(props, "person")
  const [hasSite, site] = hasGatsbyData(props, "site")
  if (isBrowser() && !hasPage) {
    const { navigate } = require("gatsby")
    navigate("/")
  } else if (!hasSite || !hasPage) {
    return null
  } else {
    return (
      <>
        <SEO {...getPageSEOProps({ site, page, author })} />
        <PageTemplate
          {...props}
          page={page}
          site={site}
          author={author}
          type={page._meta.uid}
        />
      </>
    )
  }
}

function getPageSEOProps({ site, page, author }) {
  const title = getPageTitle(site, page)
  const { description, ogLanguage: lang, twitter } = site.siteMetadata

  return {
    description,
    lang,
    title,
    twitter,
    author,
    type: "page",
    page: {
      ...page,
    },
    site,
  }
}

function getPageTitle(site, page) {
  const { title: siteTitle } = site.siteMetadata
  const [pageTitle] = page.title
  return `${siteTitle} | ${pageTitle.text}`
}
