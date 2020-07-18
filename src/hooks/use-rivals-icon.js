import { useStaticQuery, graphql } from "gatsby"

export const useRivalsIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "rivals-icons"}}) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return data
}
