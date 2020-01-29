/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./template"
import { Layout, SEO } from "./layout"
import useDimensions from "react-use-dimensions"

import { isBrowser, hasPrismicData, hasGatsbyData } from "../../utils"

export const query = graphql`
  query BlogPostQuery($uid: String!) {
    site {
      siteMetadata {
        ...SiteMetadata
      }
    }
    prismic {
      post(uid: $uid, lang: "en-us") {
        ...SinglePost
      }
    }
  }
`

export default props => {
  const [hasPost, post] = hasPrismicData(props, "post")
  const [hasSite, site] = hasGatsbyData(props, "site")
  const [ref, { width }] = useDimensions({ liveMeasure: false })

  if (isBrowser() && !hasPost) {
    const { navigate } = require("gatsby")
    navigate("/")
  } else if (!hasSite || !hasPost) {
    return null
  } else {
    return (
      <div ref={ref}>
        <SEO {...getPostSEOProps({ site, post })} />
        <PostTemplate post={post} site={site} width={width} />
      </div>
    )
  }
}

function getPostSEOProps({ site, post }) {
  const title = getPostTitle(site, post)
  const { description, ogLanguage: lang, twitter } = site.siteMetadata
  // console.log("post in SEO fn", post)
  return {
    description,
    lang,
    title,
    twitter,
    type: "post",
    post: {
      blurb: post.blurb,
      title: post.title,
      date: post.date,
      author: post.author,
      mainImage: post.main_image,
      uid: post._meta.uid,
      lang: post._meta.lang,
    },
    site,
  }
}

function getPostTitle(site, post) {
  const { title: siteTitle } = site.siteMetadata
  const [blogTitle] = post.title
  return `${siteTitle} | ${blogTitle.text}`
}
