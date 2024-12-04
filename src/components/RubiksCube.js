import React from 'react';
import '../styles/global.css';

function RubiksCube() {
  return (
    <div className="scene">
      <div className="cube">
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map(face => (
          <div key={face} className={`face ${face}`}>
            {[...Array(9)].map((_, index) => (
              <div key={index} className={`square ${face}-square`}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RubiksCube;