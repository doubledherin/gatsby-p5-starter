import React from 'react'

import Layout from '../components/layout'
import SketchWrapper from '../components/sketchWrapper'
import sketch from '../scripts/sketches/shai-hulud'

const IndexPage = () => {
  return (
    <Layout>
      <SketchWrapper sketch={sketch}/>
    </Layout>
  )
}

export default IndexPage
