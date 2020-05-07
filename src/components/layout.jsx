import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
        {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
