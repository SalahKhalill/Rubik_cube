import React from 'react';
import '../styles/Footer.css';
import logo from "../pics/logo.png"
const Footer = () => {
  return (
    <div className="footer-wrapper btm u-bg-black">
      <div className="container w-container">
        <div className="footer__legal-content">
          <a
            id="w-node-e9e16bf4-9e79-c7f3-fd3b-fb5372b5a63d-72b5a620"
            href="https://www.spinmaster.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__sm-logo w-inline-block"
          >
            <img
              src={logo}
              loading="lazy"
              width="100"
              alt="Spin Master Logo"
            />
          </a>
          <div className="footer__legal-wrapper">
            <div className="footer__legal-links">
              <a
                href="https://www.spinmaster.com/en-US/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="legal-link"
              >
                Contact Us
              </a>
              <a
                href="https://privacy.spinmaster.com/"
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
