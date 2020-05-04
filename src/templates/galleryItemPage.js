import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import Sketch from '../components/sketch'
import marredPotential from '../scripts/sketches/marred-potential'

export default function GalleryItemPage( { data } ) {

  const node = data.allImageSharp.nodes[0]
  const slug = node && node.fields ? node.fields.slug : ''

  if (!isP5(slug)) {
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
  } else {
    return (
      <Layout>
        <Sketch sketch={marredPotential}/>
      </Layout>
    )
  }
}

function isP5(slug) {
  return slug.startsWith("/p5")
}

export const query = graphql`
  query($slug: String!) {
    allImageSharp(filter: {fields: {slug: {eq: $slug }}}) {
      nodes {
        fields {
          slug
        }
        id
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`