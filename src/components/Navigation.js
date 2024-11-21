import React from 'react';

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav className="flex justify-center bg-gray-800 p-4 space-x-4">
      <button 
        onClick={() => setCurrentPage('home')} 
        className="text-white hover:bg-gray-700 px-3 py-2 rounded"
      >
        Home
      </button>
      <button 
        onClick={() => setCurrentPage('project')} 
        className="text-white hover:bg-gray-700 px-3 py-2 rounded"
      >
        Project
      </button>
      <button 
        onClick={() => setCurrentPage('about')} 
        className="text-white hover:bg-gray-700 px-3 py-2 rounded"
      >
        About
      </button>
    </nav>
  );
};

export default Navigation;