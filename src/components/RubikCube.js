import React from 'react';
import './RubikCubeLoader.css'; // Ensure you copy the styles into this CSS file

const RubikCubeLoader = () => {
  return (
    <div className="my-loader">
      <div className="rubiks-cube">
        {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face) => (
          <div key={face} className={`face ${face}`}>
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="cube"
                style={{
                  background: getCubeColor(face, index),
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const getCubeColor = (face, index) => {
  const colors = {
    front: ['#ff3d00', '#ffeb3b', '#4caf50', '#2196f3', '#ffffff', '#ffeb3b', '#4caf50', '#2196f3', '#ff3d00'],
    back: ['#4caf50', '#ff3d00', '#ffeb3b', '#2196f3', '#ffffff', '#ff3d00', '#ffeb3b', '#4caf50', '#2196f3'],
    left: ['#ffeb3b', '#4caf50', '#2196f3', '#ff3d00', '#ffffff', '#4caf50', '#2196f3', '#ffeb3b', '#ff3d00'],
    right: ['#4caf50', '#ff3d00', '#ffeb3b', '#2196f3', '#ffffff', '#ff3d00', '#ffeb3b', '#4caf50', '#2196f3'],
    top: ['#2196f3', '#ffeb3b', '#ff3d00', '#4caf50', '#ffffff', '#ffeb3b', '#ff3d00', '#4caf50', '#2196f3'],
    bottom: ['#ffffff', '#4caf50', '#2196f3', '#ff3d00', '#ffeb3b', '#4caf50', '#2196f3', '#ffffff', '#ff3d00'],
  };
  return colors[face][index];
};

export default RubikCubeLoader;
