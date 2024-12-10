import React from 'react';
import '../styles/Footer.css';
import logo from "../pics/logo.png"
const Footer = () => {
  return (
    <div className="footer-wrapper btm u-bg-black">
      <div className="container w-container">
        <div className="footer__legal-content">
        
            <img
              src={logo}
              loading="lazy"
              width="100"
              alt="Spin Master Logo"
            />
          <div className="footer__legal-wrapper">
            <div className="footer__legal-links">
              <a
                onClick={() => window.location.href = '/contact'}
                target="_blank"
                rel="noopener noreferrer"
                className="legal-link"
              >
                Contact Us
              </a>
              <a
              
                target="_blank"
                rel="noopener noreferrer"
                className="legal-link"
              >
                Privacy Policy
              </a>
            </div>
            <div className="footer-legal">
              © <script>{`new Date().getFullYear() > 2015 && document.write(new Date().getFullYear());`}</script> 2024 Robo Solver, All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


