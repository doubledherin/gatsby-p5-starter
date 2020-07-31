import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import GalleryItem from '../components/galleryItem'
import { galleryPathPrefix } from '../constants'

const Gallery = ({ data }) => {

  const { allFile: { nodes } } = data

  const spanClasses = [
    "w-3 h-2",
    "w-3 h-1",
    "w-1 h-1",
    "w-2 h-2",
    "w-1 h-2",
    "w-2 h-1",
    "w-1 h-1",
    "w-3 h-1",
    "w-2 h-1"
  ]

  return (
    <Layout>
      <div className="gallery-container">
        { data && nodes && 
          nodes.map((node, idx) => {
            const { relativePath } = node
            const { originalName } = node.childImageSharp.fluid
            const text = deriveText(originalName)
            const slug = deriveSlug(relativePath)
            
            return (
              <GalleryItem 
                key={node.id} 
                fluid={node.childImageSharp.fluid} 
                imageSrc={node.childImageSharp.fluid.src} 
                alt={`spirograph based on ${text}`} 
                text={text} 
                width={2} 
                height={2} 
                slug={slug}
                spanClasses={spanClasses[idx % 9]} />
            )
          })
        }
      </div>
  </Layout>
)}

function deriveText(filename) {
  const withoutExtension = filename.split('.')[0]
  const words = withoutExtension.split('-')
  const initialCappedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return initialCappedWords.join(" ")
}

function deriveSlug(relativePath) {
  const withoutExtension = relativePath.split('.')[0].replace(galleryPathPrefix, '')
  return `${withoutExtension}/`
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/^static\/images\/gallery/"}}) {
      nodes {
        id
        childImageSharp {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
        relativePath
      }
    }
  }  
`

Gallery.propTypes = {
  data: PropTypes.object
}

export default Gallery