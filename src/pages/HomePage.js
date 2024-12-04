import React from 'react'; 
import RubiksCube from '../components/RubiksCube'; 
import '../styles/global.css'  

function HomePage() {   
  return (     
    <section className="hero hero-black">
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
  ); 
}  

export default HomePage;