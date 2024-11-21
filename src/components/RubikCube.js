import React from 'react';

const RubikCube = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'white'];

  return (
    <div className="cube-container w-full h-64 flex justify-center items-center">
      <div className="cube relative w-40 h-40">
        {[...Array(6)].map((_, faceIndex) => (
          <div 
            key={faceIndex} 
            className="absolute w-40 h-40 border-2 border-black"
            style={{ 
              backgroundColor: colors[faceIndex],
              transform: `rotate${faceIndex % 2 === 0 ? 'X' : 'Y'}(${faceIndex * 90}deg) translateZ(80px)`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RubikCube;