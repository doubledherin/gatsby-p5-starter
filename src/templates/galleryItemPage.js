import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"

export default function GalleryItemPage( { data }) {
  const node = data.allImageSharp.nodes[0]
  return (
    <Layout>
      <div className="container">
        <div className="image">
          <Img fluid={node.fluid} alt={"also wahtever"} />
        </div>
        <div className="text">{"whatever"}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allImageSharp(filter: {fields: {slug: {eq: $slug }}}) {
      nodes {
        id
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`