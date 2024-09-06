import React from 'react';

const Navbar = ({ isSticky, isMenuActive, toggleMenu, handleMenuItemClick }) => {
  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#">Portfo<span>lio.</span></a>
        </div>
        <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
          <li><a href="#home" className="menu-btn" onClick={handleMenuItemClick}>Home</a></li>
          <li><a href="#about" className="menu-btn" onClick={handleMenuItemClick}>About</a></li>
          <li><a href="#projects" className="menu-btn" onClick={handleMenuItemClick}>Projects</a></li>
          <li><a href="#services" className="menu-btn" onClick={handleMenuItemClick}>Services</a></li>
          <li><a href="#skills" className="menu-btn" onClick={handleMenuItemClick}>Skills</a></li>
          <li><a href="#contact" className="menu-btn" onClick={handleMenuItemClick}>Contact</a></li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
