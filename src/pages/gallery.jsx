import React from "react"
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import GalleryItem from '../components/galleryItem'
import { galleryPathPrefix } from '../constants'

export default ({ data }) => {

  const { allFile: { nodes } } = data

  return (
    <Layout>
      <StyledGallery className="container">
        { data && nodes && 
          nodes.map(node => {
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
                slug={slug} />
            )
          })
        }
      </StyledGallery>
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
    allFile(filter: {relativePath: {regex: "/^images\/gallery/"}}) {
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

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 20px;
  grid-auto-rows: 100px 300px;
  grid-gap: 10px;
  grid-auto-flow: dense;

  @media screen and (max-width:500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

