import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        html, body {
          background: black;
          color: white;
        }
        html, body, div, img {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        body {
            line-height: 1;
        }
        header {
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
