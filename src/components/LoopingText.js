import React from 'react';
import '../styles/LoopingText.css';

const LoopingText = () => {
  return (
    <div className="loop-text-outer">
      <div className="loop-text-inner">
        {Array(12).fill("50 Years of Rubik's").map((text, index) => (
          <div className="loop-text" key={index}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoopingText;
