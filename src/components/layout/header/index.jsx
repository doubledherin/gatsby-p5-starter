import React, { useState, useEffect, useCallback } from 'react'
import Navlink from './navlink'
import { Link } from "gatsby"

import "../../styles/main.scss"

const Header = () => {

  const [ scrolledClassName, setScrolledClassName ] = useState('')
  const [ displayMobileHeader, setDisplayMobileHeader ] = useState(false)

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
        <Navlink to="/">Home</Navlink>
        <Navlink to="/gallery">Gallery</Navlink>
        <Navlink to="/about">About</Navlink>
        <Navlink to="/contact">Contact</Navlink>
      </ul>
    </header>
  )
}

export default Header
