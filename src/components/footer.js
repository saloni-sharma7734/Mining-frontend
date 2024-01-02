// Footer.js 

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: Shrivastavaakki1985@gmail.com</p>
          <p>Phone: +91 80034-96955,<br></br>+91 84327-02999</p>
          {/* <p>Phone: </p> */}
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/about">About Us</a></li> */}
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/@shrivastava4634" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* <a href="https://twitter.com/YourTwitterPage" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a> */}
            {/* <a href="https://www.linkedin.com/in/YourLinkedInPage" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a> */}
            <a href="https://wa.me/8003496955" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
        <p> Behind Of HMB Palace ,Near RPSC,Jaipur Road,Ajmer (Rajasthan)</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MineCare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
