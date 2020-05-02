import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Sketch from '../components/sketch'
import slinky from '../scripts/sketches/slinky'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <SEO />
        <Sketch sketch={slinky}/>
      </Layout>
    </div>
  )
}

export default IndexPage
