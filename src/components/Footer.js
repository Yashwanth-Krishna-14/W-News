import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/news">News</a>
          <a href="/us-election">US Election</a>
          <a href="/world">World</a>
          <a href="/business">Business</a>
          <a href="/tech">Tech</a>
          <a href="/science">Science</a>
          <a href="/health">Health</a>
          <a href="/sports">Sports</a>
          <a href="/arts">Arts</a>
        </div>
        
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
        <p>© 2024 W-News. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
