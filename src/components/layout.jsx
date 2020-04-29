import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Header from './header'

const StyledLayout = styled.div`
  html, body {
    background: black;
    
  a {
    color: white;
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
