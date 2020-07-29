const NavLink = ({ to, onClick, children }) => {
  return (
    <li className="nav-link">
      <Link to={to} onClick={onClick}>{children}</Link>
    </li>
  )
}

export default NavLink
