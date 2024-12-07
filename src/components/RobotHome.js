import React from 'react';
import './RobotSection.css'; // Import the CSS file for styles
import robotImg from "../pics/cube.jpeg"
const RobotSection = () => {
  return (
    <div className="robot-section">
      <div className="image-container">
        <img src={robotImg} alt="Robot solving Rubik's Cube" />
      </div>
      <div className="text-container">
        <h1>DISCOVER THE ROBOT THAT SOLVES RUBIK'S CUBE</h1>
        <button onClick={() => window.location.href = '/project'}>View Project</button>
      </div>
    </div>
  );
};

export default RobotSection;
