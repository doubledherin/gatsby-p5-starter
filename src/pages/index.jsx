import React from 'react'

import Layout from '../components/layout'
import SketchWrapper from '../components/sketchWrapper'
import slinky from '../scripts/sketches/slinky'

const IndexPage = (props) => {
  return (
    <div>
      <Layout>
        <SketchWrapper sketch={slinky}/>
      </Layout>
    </div>
  )
}

export default IndexPage
