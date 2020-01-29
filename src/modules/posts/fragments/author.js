import { graphql } from "gatsby"

export const query = graphql`
  fragment PostAuthor on PRISMIC_Person {
    ... on PRISMIC_Person {
      name
      display_name
      email
      location
      pic
      short_bio
      social {
        profile_url {
          ... on PRISMIC__ExternalLink {
            _linkType
            url
          }
        }
        social_type
        username
      }
    }
  }
`
