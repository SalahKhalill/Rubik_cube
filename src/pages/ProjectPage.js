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
      
      <div className="project-components">
  <div className="component card">
    <img src="RaspberryPiZero2W.jpg" className="card-image" />
    <h4 className="card-title">Raspberry Pi Zero2w</h4>
    <p className="card-text">High-resolution cameras detect cube colors and state</p>
  </div>
  <div className="component card">
    <img src="solving-algorithm.jpg" alt="Solving Algorithm" className="card-image" />
    <h4 className="card-title">Solving Algorithm</h4>
    <p className="card-text">Implements CFOP method for rapid cube solving</p>
  </div>
  <div className="component card">
    <img src="mechanical-system.jpg" alt="Mechanical System" className="card-image" />
    <h4 className="card-title">Mechanical System</h4>
    <p className="card-text">Precision servo motors for accurate cube rotations</p>
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