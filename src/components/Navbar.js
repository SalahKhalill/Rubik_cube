import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import logo from '../pics/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img 
          src={logo}
          alt="RoboSolver Logo" 
          className="nav-logo-image"
        />
        <div className="logo">RoboSolver</div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="http://localhost:5002/" target="_blank" rel="noopener noreferrer">Solving</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
