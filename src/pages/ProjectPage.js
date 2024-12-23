import React from 'react';
import '../styles/global.css'
import '../components/threeDParts'
import ThreeDPartsViewer from '../components/threeDParts';
import Raspberry from "../pics/RaspberryPiZero2W.jpg";
import Servos from "../pics/Servos.jpg";
import piCamera from "../pics/piCamera.jpg";
import pcbFrontImage from "../pics/pcbImage.png";
import pcbBackImage from "../pics/pcbimageBack.png";
function ProjectPage() {
  return (
    <>
    <section className="project-details">
      <h2>Used components</h2>
      <div className="project-description">
      
      <div className="project-components">
  <div className="component card">
    <img src={Raspberry} className="card-image" />
    <h4 className="card-title">Raspberry Pi Zero2w</h4>
    <p className="card-text">Raspberry Pi Zero 2 W is the latest product in our most affordable range of single-board
    computers</p>
  </div>
  <div className="component card">
    <img src={Servos} alt="Servo Motors" className="card-image" />
    <h4 className="card-title">25kg Servo Motors</h4>
    <p className="card-text">DS3225 is a digital servo motor with high torque and waterproof feature. It has a 180 degree movement capacity</p>
  </div>
  <div className="component card">
    <img src={piCamera} alt="Mechanical System" className="card-image" />
    <h4 className="card-title">PiCamera V1.3</h4>
    <p className="card-text">The Raspberry Pi Camera Board plugs directly into the CSI connector on the Raspberry Pi. It's able to deliver a crystal clear 5MP resolution image</p>
  </div>
</div>
      </div>
      {/* <ThreeDPartsViewer/> */}
    </section>


    <section className="pcb-details">
  <img src={pcbFrontImage} alt="PCB Front View" className="card-image" />
  <img src={pcbBackImage} alt="PCB Back View" className="card-image" />
</section>

    <section>
    <ThreeDPartsViewer/>

    </section>
    </>

  );
}

export default ProjectPage;