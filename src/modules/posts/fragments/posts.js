import { graphql } from "gatsby"

export const query = graphql`
  fragment PostListItems on PRISMIC_PostConnectionConnection {
    edges {
      node {
        title
        main_image
        blurb
        _meta {
          id
          uid
          lang
          type
        }
        author {
          ... on PRISMIC_Person {
            name
            display_name
            pic
            location
          }
        }
        main_imageSharp {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`
