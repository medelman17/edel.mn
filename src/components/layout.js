/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { GlobalCss } from "./global-styles"
import { Header } from "./header"
import { Main } from "./main"
import { Footer } from "./footer"
import { hasPrismicData } from "../utils"
import useDimensions from "react-use-dimensions"

export function Layout(props) {
  const [ref, { width }] = useDimensions({ liveMeasure: false })
  const { data, children } = props
  const { title } = data.site.siteMetadata
  const [_, pages] = hasPrismicData(props, "allPages.edges")
  // console.log(title)
  return (
    <div ref={ref} sx={{ variant: "layout.container" }}>
      <GlobalCss />
      <Header siteTitle={title} pages={pages} width={width} />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            ...SiteMetadata
          }
        }
        prismic {
          allPages {
            edges {
              node {
                _meta {
                  uid
                }
                title
              }
            }
          }
        }
      }
    `}
    render={data => <Layout {...props} data={data} />}
  />
)
