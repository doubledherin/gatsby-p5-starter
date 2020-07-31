import React, { useState, useEffect, useCallback } from 'react'
import Navlink from './navlink'
import logo from "../../../static/images/logo.png"
import "../../../styles/main.scss"

function Header() {

  const [ scrolledClassName, setScrolledClassName ] = useState('')
  const [ checked, setChecked ] = useState(false)

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
        <img src={logo} alt="Logo" />
      </div>
      <input type="checkbox" className="menu-btn" id="menu-btn" checked={checked} onChange={() => setChecked(!checked)}/>
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="menu-icon__line"></span>
      </label>
      <ul className="nav-links">
        <Navlink to="/" onClick={() => setChecked(!checked)}>Home</Navlink>
        <Navlink to="/gallery" onClick={() => setChecked(!checked)}>Gallery</Navlink>
        <Navlink to="/about" onClick={() => setChecked(!checked)}>About</Navlink>
        <Navlink to="/contact" onClick={() => setChecked(!checked)}>Contact</Navlink>
      </ul>
    </header>
  )
}

export default Header
