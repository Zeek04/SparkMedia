import React from 'react'
import logo from '../assets/Media.png'
import "../css/Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
      <img id='logo' src={logo} alt='My Logo' />
      <div>
        <ul className='nav-links'>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li id='Contact'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar