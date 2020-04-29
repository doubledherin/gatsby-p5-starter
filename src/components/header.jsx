import React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby"

const StyledHeader = styled.header`
  a {
    color: white;
  }
  ul {
    listStyle: none;
    float: right;
  }
  li {
    display: inline-block;
    marginRight: 1rem;
    color: white;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/"><h3>[Your name and logo here]</h3></Link>
      <ul>
        <Link to="/gallery/">Gallery</Link>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
      </ul>
    </StyledHeader>
  )
}

export default Header