import React from 'react';
import '../styles/RobotSection.css'; 
import robotImg from "../pics/cube.jpeg"
const RobotSection = () => {
  return (
    <div className="robot-section">
      <div className="image-container">
        <img src={robotImg} alt="Robot solving Rubik's Cube" />
      </div>
      <div className="text-container">
        <h1>DISCOVER THE ROBOT THAT SOLVES RUBIK'S CUBE</h1>
        <button class="btn" onClick={() => window.location.href = '/project'}>
        <   span class="btn-text">See What's New</span>
        </button>   
      </div>
    </div>
  );
};

export default RobotSection;
