import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Sketch from '../components/sketch'
import sketch from '../scripts/sketch'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <SEO />
        <Sketch sketch={sketch}/>
      </Layout>
    </div>
  )
}

export default IndexPage
