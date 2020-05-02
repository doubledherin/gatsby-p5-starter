import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Sketch from '../components/sketch'
import marredPotential from '../scripts/sketches/marredPotential'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <SEO />
        <Sketch sketch={marredPotential}/>
      </Layout>
    </div>
  )
}

export default IndexPage
