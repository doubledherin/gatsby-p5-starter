import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import Sketch from '../components/sketch'

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
    //TODO: FIgure out how to load this sketch!
    return (
      <Layout>
        <Sketch sketch={ async () => await import(`../scripts/sketches/${node.parent.name}.js`)}/>
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
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`