import React from 'react';
import '../styles/global.css';

function TeamPage() {
  const teamMembers = [
    { name: "Ziead Hassan", oNo: 2020123142, id: 2 },
    { name: "Salahaldeen alshaikhkhalil", oNo: 2022123164, id: 2 },
    { name: "Mohamed Aly", oNo: 2022123165, id: 1 },
    { name: "Mohamed Bakir", oNo: 2022123134, id: 2 },
    { name: "Ahmed Galal", oNo: 2022123159, id: 1 },
    { name: "Abdelaziz Elsayed", oNo: 2021123029, id: 1 },
    { name: "Abdallah Algendy", oNo: 2021123167, id: 1 },

  ];

  return (
    <section className="team-section">
      <h2>Our Team</h2>

      <div className="iot-section">
        <h3>IoT</h3>
        <div className="team-grid">
          {teamMembers
            .filter((member) => member.id === 2)
            .map((member, index) => (
              <div key={index} className="team-member">
                <h4>{member.name}</h4>
                <p>{member.oNo}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="microprocessor-section">
        <h3>Microprocessor</h3>
        <div className="team-grid">
          {teamMembers
            .filter((member) => member.id === 1 || member.id === 2)
            .map((member, index) => (
              <div key={index} className="team-member">
                <h4>{member.name}</h4>
                <p>{member.oNo}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
