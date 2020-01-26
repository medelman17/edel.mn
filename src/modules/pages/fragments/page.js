import { graphql } from "gatsby"

export const query = graphql`
  fragment SinglePage on PRISMIC_Page {
    _meta {
      id
      uid
    }
    description
    meta_description
    meta_title
    body {
      ... on PRISMIC_PageBodyForm {
        type
        label
        primary {
          name
          endpoint
          success_msg
          instructions
          form_title
          fail_msg
          can_reset
        }
        fields {
          field_label
          field_name
          field_type
          required
          error_message
          options
        }
      }
    }
    page_content {
      ... on PRISMIC_PagePage_contentText_section2 {
        type
        label
        primary {
          rich_text
        }
      }
      ... on PRISMIC_PagePage_contentQuote {
        type
        label
        primary {
          quote_text
        }
      }
      ... on PRISMIC_PagePage_contentFull_width_image {
        type
        label
        primary {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      ... on PRISMIC_PagePage_contentImage_highlight {
        type
        label
        primary {
          featured_imageSharp {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          featured_image
          headline
          title
        }
      }
    }
    title
  }
`
