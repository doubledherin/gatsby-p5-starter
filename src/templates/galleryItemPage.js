import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import SketchWrapper from '../components/sketchWrapper'

export default function GalleryItemPage( { data } ) {

  const [ sketch, setSketch ] = useState()

  const node = data.allImageSharp.nodes[0]
  const slug = node && node.fields ? node.fields.slug : ''

  if (!isP5(slug)) {
    return (
      <Layout>
        <div className="page-container">
          <div className="image">
            <Img fluid={node.fluid} alt={''} />
          </div>
          <div className="text">{''}</div>
        </div>
      </Layout>
    )
  } else {
    import(`../scripts/sketches/${node.parent.name}.js`).then(result => setSketch(result))
    return sketch ? <SketchWrapper sketch={sketch.default} /> : <div>Loading</div>
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
          ...GatsbyImageSharpFluid
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`