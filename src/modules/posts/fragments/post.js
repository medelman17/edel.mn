import { graphql } from "gatsby"

export const query = graphql`
  fragment SinglePost on PRISMIC_Post {
    title
    date
    main_image
    blurb
    main_imageSharp {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    _meta {
      id
      uid
      lang
      type
    }
    author {
      ...PostAuthor
    }

    body {
      ... on PRISMIC_PostBodyText {
        type
        label
        primary {
          text
        }
      }
      ... on PRISMIC_PostBodyEmbed {
        type
        label
        primary {
          embed
        }
      }
      ... on PRISMIC_PostBodyQuote {
        type
        label
        primary {
          quote
        }
      }
      ... on PRISMIC_PostBodyImage_with_caption {
        type
        label
        primary {
          caption
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      ... on PRISMIC_PostBodyCode {
        type
        label
        primary {
          code
        }
      }
    }
  }
`
