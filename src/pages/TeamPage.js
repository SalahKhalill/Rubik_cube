import React from 'react';
import '../styles/global.css'

function TeamPage() {
  const teamMembers = [
    { name: "Alice Johnson", role: "Robotics Engineer", image: "team-member1.jpg" },
    { name: "Bob Martinez", role: "Computer Vision Specialist", image: "team-member2.jpg" },
    { name: "Charlie Wong", role: "Mechanical Design Lead", image: "team-member3.jpg" }
  ];

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamPage;