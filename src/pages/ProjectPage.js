import React from 'react';
import '../styles/global.css'
import '../components/threeDParts'
import ThreeDPartsViewer from '../components/threeDParts';
function ProjectPage() {
  return (
    <>
    <section className="project-details">
      <h2>Robot Overview</h2>
      <div className="project-description">
        <div className="description-text">
          <p>Our robot autonomously solves Rubik's Cubes using advanced computer vision and precision robotics. Powered by a Raspberry Pi, the system analyzes cube states, calculates optimal solving algorithms, and executes precise mechanical rotations.</p>
          <h3>Key Technologies</h3>
          <ul>
            <li>Raspberry Pi 4</li>
            <li>OpenCV Computer Vision</li>
            <li>Custom Robotic Arm</li>
            <li>Machine Learning Algorithms</li>
          </ul>
        </div>
        <div className="project-components">
          <div className="component">
            <h4>Vision System</h4>
            <p>High-resolution cameras detect cube colors and state</p>
          </div>
          <div className="component">
            <h4>Solving Algorithm</h4>
            <p>Implements CFOP method for rapid cube solving</p>
          </div>
          <div className="component">
            <h4>Mechanical System</h4>
            <p>Precision servo motors for accurate cube rotations</p>
          </div>
        </div>
      </div>
      {/* <ThreeDPartsViewer/> */}
    </section>
    <section>
    <ThreeDPartsViewer/>

    </section>
    </>

  );
}

export default ProjectPage;