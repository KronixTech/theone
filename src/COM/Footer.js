import React from 'react';
import './Footer.css'; // Don't forget to create this CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <h1 className="footer-top-title">
        THE ONE CAST
      </h1>
      <hr className='HR-foot' />
      {/* Top Section: Main Content */}
      <div className="footer-main-content">

        {/* Column 1: Contact Info */}
        <div className="footer-column contact-info">
          <h3 className="studio-title">THE ONE CAST</h3>
          <p>Phone: +91 987654321</p>
          <p>Email: onecaststudio@email.com</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-column nav-links">
          <a href="/">HOME</a>
          <a href="About">ABOUT</a>
          <a href="Portrait">PORTRAIT  </a>
          <a href="Casting">CASTING </a>
          <a href="Product">PRODUCT SHOOTS</a>
          <a href="Contact">CONTACT</a>

        </div>

        {/* Column 3: Social Links */}
        <div className="footer-column social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>

      </div>

      {/* Separator Line (Achieved via CSS border-top on the bottom bar) */}

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          Power by KRONIX TECH | © 2025 All Rights Reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;