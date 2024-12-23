import React from 'react';
import '../styles/global.css'

function TeamPage() {
  const teamMembers = [
    { name: "Ziead Hassan", role: "Backend Developer"},
    { name: "Saad Elseyh`", role: "Fronend Developer"},
  ];

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamPage;