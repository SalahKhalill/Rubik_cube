import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">RoboSolver</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;