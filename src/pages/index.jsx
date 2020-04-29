import React from 'react'
import { Global, css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Sketch from '../components/sketch'
import sketch from '../scripts/sketch'

const IndexPage = () => {
  return (
    <div>
      <Global
      styles={css`
        body {
          background: black;
          height: 100%;
        }
      `}
      />
      <Layout>
        <SEO />
        <Sketch sketch={sketch}/>
      </Layout>
    </div>
  )
}

export default IndexPage
