import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>DateMe</div>
        <div className='navbar__item'><a href="/">Home</a></div>
        <div className='navbar__item'><a href="/">Download</a></div>
        <div className='navbar__item'>Login</div>        
    </header>
  )
}

export default Navbar