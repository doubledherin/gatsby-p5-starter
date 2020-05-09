import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"

import Layout from '../components/layout'

export default ({ data }) => {
  const { allFile: { nodes } } = data

  return (
    <Layout>
      <div className="about-content-container">
        <h1>About Me</h1>
        { data && nodes && <Img className="round" fluid={ nodes[0].childImageSharp.fluid } /> }
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste ad numquam rerum distinctio nesciunt fuga in? Numquam error quia aspernatur est totam tenetur laboriosam accusamus. Odio non consequatur dicta!Voluptatum error voluptatibus amet esse qui autem, iure eligendi alias laboriosam corporis magni animi cumque soluta quis! Provident cum quia voluptate ab. Cum fugiat eaque possimus consectetur maiores pariatur earum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste ad numquam rerum distinctio nesciunt fuga in? Numquam error quia aspernatur est totam tenetur laboriosam accusamus. Odio non consequatur dicta!Voluptatum error voluptatibus amet esse qui autem, iure eligendi alias laboriosam corporis magni animi cumque soluta quis! Provident cum quia voluptate ab. Cum fugiat eaque possimus consectetur maiores pariatur earum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste ad numquam rerum distinctio nesciunt fuga in? Numquam error quia aspernatur est totam tenetur laboriosam accusamus. Odio non consequatur dicta!Voluptatum error voluptatibus amet esse qui autem, iure eligendi alias laboriosam corporis magni animi cumque soluta quis! Provident cum quia voluptate ab. Cum fugiat eaque possimus consectetur maiores pariatur earum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste ad numquam rerum distinctio nesciunt fuga in? Numquam error quia aspernatur est totam tenetur laboriosam accusamus. Odio non consequatur dicta!Voluptatum error voluptatibus amet esse qui autem, iure eligendi alias laboriosam corporis magni animi cumque soluta quis! Provident cum quia voluptate ab. Cum fugiat eaque possimus consectetur maiores pariatur earum.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/images/about/"}}) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }  
`