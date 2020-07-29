import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import SEO from './seo'

const Layout = ({ title, children }) => {
  return (
    <div className="layout-container">
      <SEO title={title} />
      <Header />
      <div className="page-container">
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Layout
