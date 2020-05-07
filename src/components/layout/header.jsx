import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "gatsby"

import "../../main.scss"

const Header = () => {

  const [ scrolledClassName, setScrolledClassName ] = useState('')

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 10) {
      setScrolledClassName('scrolled')
    } else {
      setScrolledClassName('')
    }
  }, [setScrolledClassName])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolledClassName])
 
  return (
    <header className={`main-header ${scrolledClassName}`}>
      <div className="logo">
        <a href="/">LOGO</a>
      </div>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="menu-icon__line"></span>
      </label>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
