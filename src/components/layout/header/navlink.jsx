import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const NavLink = ({ to, onClick, children }) => {
  return (
    <li className="nav-link">
      <Link to={to} onClick={onClick}>{children}</Link>
    </li>
  )
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired  
}

export default NavLink
