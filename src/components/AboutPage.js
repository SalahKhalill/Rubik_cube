import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page text-center p-6">
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <div className="team-members flex justify-center space-x-4">
        <div className="member bg-white p-4 rounded shadow w-48">
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-gray-600">Robotics Engineer</p>
        </div>
        <div className="member bg-white p-4 rounded shadow w-48">
          <h3 className="font-semibold">Jane Smith</h3>
          <p className="text-gray-600">AI Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;