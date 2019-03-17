import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const PERSPECTIVE = (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Page2-perspective.jpg" }) {
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
