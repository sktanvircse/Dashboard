import React from 'react';
import { Facebook, Linkedin, Instagram, GitHub } from 'react-feather';

const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-container">
        {/* Your Name */}
        <p className="footer-name">Sheikh Tanvir</p>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://www.facebook.com/sk.tanvir.9822/" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="https://github.com/sktanvircse" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a> */}
          <a href="https://www.linkedin.com/in/sktanvirdev/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sheikh Tanvir. Proudly showcasing my work!</p>
      </div>
    </footer>
  );
};

export default Footer;
