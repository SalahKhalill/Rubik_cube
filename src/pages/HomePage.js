import React from 'react';
import RubiksCube from '../components/RubiksCube';
import { Link } from 'react-router-dom';
import '../styles/global.css'

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Rubik's Cube Solving Robot</h1>
        <p>An advanced robotic solution using Raspberry Pi and computer vision</p>
        <Link to="/project" className="cta-button">Learn More</Link>
      </div>
      <div className="hero-image">
        <RubiksCube />
      </div>
    </section>
  );
}

export default HomePage;