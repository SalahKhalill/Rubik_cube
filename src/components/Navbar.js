import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import logo from '../pics/logo.png'
function Navbar() {   
  return (     
    <nav>
    <div className="nav-logo-container">
      <img 
        src={logo}
        alt="RoboSolver Logo" 
        className="nav-logo-image"
      />
      <div className="logo">RoboSolver</div>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/project">Project</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  
  ); 
}  

export default Navbar;