import React from 'react'

import Layout from '../components/layout'
import SketchWrapper from '../components/sketchWrapper'
import slinky from '../scripts/sketches/slinky'

const IndexPage = (props) => {
  return (
    <Layout>
      <SketchWrapper sketch={slinky}/>
    </Layout>
  )
}

export default IndexPage
