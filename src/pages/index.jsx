import React from 'react'

import Layout from '../components/layout'
import SketchWrapper from '../components/sketchWrapper'
import sketch from '../scripts/sketches/P_2_2_3_01'

const IndexPage = () => {
  return (
    <Layout>
      <SketchWrapper sketch={sketch}/>
    </Layout>
  )
}

export default IndexPage
