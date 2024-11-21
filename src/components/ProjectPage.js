import React from 'react';
import { Coffee, Camera } from 'lucide-react';

const ProjectPage = () => {
  return (
    <div className="project-page p-6">
      <h2 className="text-2xl font-bold mb-4">Our Robotic Cube Solver</h2>
      <div className="project-details grid md:grid-cols-2 gap-4">
        <div className="tech-stack bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <ul className="list-disc pl-5">
            <li>Robotic Arm <Coffee className="inline-block ml-2" /></li>
            <li>Computer Vision <Camera className="inline-block ml-2" /></li>
            <li>Machine Learning Algorithms</li>
          </ul>
        </div>
        <div className="solver-description bg-white p-4 rounded shadow">
          <p>Our advanced robot can solve any Rubik's Cube configuration in under 20 moves!</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;