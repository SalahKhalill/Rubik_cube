import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import './styles/global.css';
import './index.css'
import ThreeDPartsViewer from './components/threeDParts';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;