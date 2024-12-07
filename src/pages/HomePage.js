import React from 'react'; 
import RubiksCube from '../components/RubiksCube'; 
import '../styles/global.css'  
import RobotSection from '../components/RobotHome';
import HistorySection from '../components/HistoryHome';

function HomePage() {   
  return (     
    <>
    <section className="hero hero-black shared-background">
      <div className="hero-content-centered">
        <div className="rubiks-cube-container">
          <RubiksCube />
        </div>
        <div className="hero-text">
          <h1>
            Make Your Move 
            <br/>
            with the world's 
            <br/>
            most iconic puzzle

          </h1>
        </div>
      </div>

    </section>   
    <section className="shared-background">
    <RobotSection />
    </section>

    <section className="shared-background">
    <HistorySection />
    </section>
    </>


  ); 
}  

export default HomePage;