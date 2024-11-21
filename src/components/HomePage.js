import React from 'react';
import RubikCube from './RubikCube';

const HomePage = () => {
  return (
    <div className="home-page text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Rubik's Cube Solver Robot</h1>
      <RubikCube />
      <div className="intro mt-4">
        <p className="text-xl mb-4">Revolutionizing cube solving with advanced robotics and AI!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn About Our Project
        </button>
      </div>
    </div>
  );
};

export default HomePage;