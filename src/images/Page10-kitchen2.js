import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Page10-kitchen2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
