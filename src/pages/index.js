/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, navigate } from "gatsby"
import { SEO, Layout } from "../components"
import { hasPrismicData, hasGatsbyData, getPageSEOProps } from "../utils"
import { BlogPostList } from "../modules/pages/blog/components"

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        ...SiteMetadata
      }
    }
    prismic {
      page(uid: "home", lang: "en-us") {
        ...SinglePage
      }
      allPosts {
        ...PostListItems
      }
    }
  }
`

function HomePageContainer({ data, ...props }) {
  return (
    <HomePageView
      page={data.prismic.page}
      posts={data.prismic.allPosts.edges}
      {...props}
    />
  )
}

function HomePageView({ page, posts, ...props }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  return (
    <div sx={{ variant: "page.container" }}>
      <div
        sx={{
          variant: "page.hero",
          maxWidth: [null, null, "66%"],
          paddingTop: ["1rem", "3rem"],
          paddingBottom: ["3rem", "5rem"],
        }}
      >
        <h1 sx={{ variant: "page.heading.one", fontSize: "64px" }}>
          {title.text}
        </h1>
        <p
          sx={{
            variant: "page.description",
            fontSize: "24px",
            lineHeight: "30px",
          }}
        >
          {description.text} Let's build something together!
        </p>
        <button
          sx={{
            padding: ".5rem 1rem",
            bg: "background",
            borderRadius: "8px",
            marginTop: "1.25rem",
            color: "text",
            fontWeight: "heading",
            border: "1px solid",
            borderColor: "green",

            transition:
              "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
            "::hover": {
              boxShadow: "rgba(15, 17, 21, 0.2) 0px 6px 9px 0px",
            },
          }}
          onClick={() => {
            navigate("/contact")
          }}
        >
          Start Building
        </button>
      </div>

      <div sx={{ variant: "page.body" }}>
        {/* <h2 sx={{ variant: "page.heading.two" }}>From the Blog</h2> */}
        {/* <BlogPostList posts={posts} cardGridType="horizontal" /> */}
      </div>
    </div>
  )
}

export default props => {
  const [_, page] = hasPrismicData(props, "page")
  const [, site] = hasGatsbyData(props, "site")
  return (
    <Layout>
      <SEO {...getPageSEOProps(site, page)} />
      <HomePageContainer {...props} data={props.data} />
    </Layout>
  )
}
