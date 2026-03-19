import React from 'react';
import { FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Anuja. All rights reserved.</p>
        <p className="built-with">
          Built with <span style={{ color: '#6c4af0', fontSize: '1.1rem', display: 'inline-flex' }}><FaCode /></span> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
