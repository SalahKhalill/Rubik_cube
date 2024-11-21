import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';
import './index.css'; // or './App.css'
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'project':
        return <ProjectPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container max-w-4xl mx-auto">
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;