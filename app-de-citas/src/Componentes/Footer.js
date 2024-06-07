import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google-plus-g"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="footer-links">
          <a href="#">Solteras</a>
          <a href="#">Casadas</a>
          <a href="#">Traumadas</a>
          <a href="#">Viudas</a>
          <a href="#">Contactenos</a>
        </div>
        <div className="footer-bottom">
          <p>Designed by KEDASHE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;