import React from 'react'
import { Link } from "gatsby"

const NavLink = ({ to, children }) => {
  return (
    <li className="nav-link">
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default NavLink
