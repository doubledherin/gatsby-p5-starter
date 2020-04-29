import React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby"

const StyledHeader = styled.header`
  .menu.item {
    padding: 0px 10px 0px 0px;
  }
`

const Header = () => {
  return (
    <StyledHeader className="header">
        <Link className="menu item" to="/">Home</Link>
        <Link className="menu item" to="/gallery/">Gallery</Link>
        <Link className="menu item" to="/about/">About</Link>
        <Link className="menu item" to="/contact/">Contact</Link>
    </StyledHeader>
  )
}

export default Header