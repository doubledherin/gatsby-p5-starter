import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Header from './header'

const StyledLayout = styled.div`
  background-color: black;
`

const Container = styled.div``

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Container>{children}</Container>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
