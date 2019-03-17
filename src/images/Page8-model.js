import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const MODEL = (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Page8-model.jpg" }) {
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
