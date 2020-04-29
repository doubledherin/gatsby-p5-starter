import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Global
      styles={css`
        body {
          background: black;
          color: white;
        }
        header {
          background: pink;
          top: 0;
          left: 0;
          position: absolute;
          width: 100%;
        }
        a {
          color: white;
        }
      `}
      />
      <Header />
        {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
