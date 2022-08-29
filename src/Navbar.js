import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Friendly</h1>
        <div className="links">
          <a href="/">Home</a>  
          <a href="/people" style={{ 
          color: 'white', 
          backgroundColor: '#e0202c',
          borderRadius: '8px' 
        }}>People</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;