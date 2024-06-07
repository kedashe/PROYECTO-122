// src/Carrusel.js
import React, { useState } from 'react';
import '../Styles/Carrusel.css';

const Carrusel = () => {
  const images = [
    { src: 'https://www.lavozdelsur.es/uploads/s1/93/35/34/pexels-cottonbro-7351142.jpeg', alt: 'Imagen 1',  },
    { src: 'https://images.pexels.com/photos/6800204/pexels-photo-6800204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Imagen 2',  },
    { src: 'https://images.pexels.com/photos/8037091/pexels-photo-8037091.jpeg', alt: 'Imagen 3',  },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel__slide">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className="carousel__form">
          <form>
            <h2>Regístrate</h2>
            <label>
              Nombre:
              <input type="text" name="name" />
            </label>
            <label>
              Correo:
              <input type="email" name="email" />
            </label>
            <label>
              Contraseña:
              <input type="password" name="password" />
            </label>
            <button type="submit">Registrarse</button>
          </form>
        </div>
        <p className="carousel__legend">{images[currentIndex].legend}</p>
      </div>
      <button className="carousel__button carousel__button--right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carrusel;
