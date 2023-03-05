import React from 'react'
import './Navbar.css'
// import img1 from ''

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>MingleSort</div>
        <div className='navbar__item'><a href="/">Home</a></div>
        <div className='navbar__item'><a href="/swiper">Matches</a></div>
        <div className='navbar__item'><a href="/signup">Sign Up</a></div>  
        <div className='navbar__item'><a href="/login">Login</a></div>  
        {/* <div className='navbar__item'><a href="/login"><button style={{padding: '10px', background: 'white', borderRadius: '20px', color: '#000'}}>Get Started</button></a></div>       */}
    </header>
  )
}

export default Navbar