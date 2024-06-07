// src/Header.js
import React from 'react';
import '../Styles/Header.css';

export const Header = () => {
  return (
  
        <header className="header">
          <div className="logo">
            <img src="https://iliusstu-a.akamaihd.net/www.meetic.es/hpv-default/positive-75570a615a9.svg" alt="Logo" /> {/* Asegúrate de tener un logo en la carpeta public */}
          </div>
          <h1 className="title">    UMSA LOVE ☺</h1>
          <nav className="navigation">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="https://www.youtube.com/watch?v=ohUZAIfxs_M">Solteros/as</a></li>
              <li><a href="#messages">registrate</a></li>
              <li><a href="#profile">Contactenos</a></li>
              <li><a href="#profile">Quienes somos</a></li>
              <li><a href="#profile">Testimonios</a></li>
            </ul>
          </nav>
        </header>
      );
  
};

export default Header;
