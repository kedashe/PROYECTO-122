// src/Testimonios.js
import React from 'react';
import '../Styles/Testimonios.css'; // Importar estilos

const Testimonios = () => {
  const images = [
    { src: 'https://hips.hearstapps.com/hmg-prod/images/pareja-feliz-complementa-1649347737.jpg', alt: 'Descripción 1', text: 'El amor es la poesía de los sentidos' },
    { src: 'https://www.meetic.es/p/imgs/932/576.6424581005562/89/1/c/d3AtY29udGVudC91cGxvYWRzL3NpdGVzLzEwLzIwMTkvMDQv/dh526fk3i88cNi7Jn-cropped.webp?ext=jpg', alt: 'Descripción 2', text: 'El más poderoso hechizo para ser amado es amar' },
    { src: 'https://www.meetic.es/p/imgs/811/501.77793296089163/89/1/c/d3AtY29udGVudC91cGxvYWRzL3NpdGVzLzEwLzIwMTkvMDIv/HvnobhhRB5qutoiLt-cropped.webp?ext=jpg', 
        alt: 'Descripción 3', text: 'Confía en tu corazón y deja que el destino decida' },
    { src: 'https://www.meetic.es/p/imgs/811/501.77793296089163/89/1/c/d3AtY29udGVudC91cGxvYWRzL3NpdGVzLzEwLzIwMTgvMTIv/95jW1ct36Oz1txhgt-900x506-cropped.webp?ext=jpg', alt: 'Descripción 4', text: 'El amor no tiene edad porque siempre está naciendo' },
    { src: 'https://www.meetic.es/p/imgs/811/501.77793296089163/89/1/c/d3AtY29udGVudC91cGxvYWRzL3NpdGVzLzEwLzIwMTgvMTIv/mlqGVfnwVRjg3aN9-900x675-cropped.webp?ext=jpg', alt: 'Descripción 5', text: 'Reírse con el otro es el mayor síntoma de amor' },
    { src: 'https://www.meetic.es/p/imgs/811/501.77793296089163/89/1/c/d3AtY29udGVudC91cGxvYWRzL3NpdGVzLzEwLzIwMTkvMDMv/Dlyus57dtem21ego2-cropped.webp?ext=jpg', alt: 'Descripción 6', text: 'El amor conquista todas las cosas. Démosle paso al amor' },
  ];

  return (
    <div className="testimonios-container">
      <div className="testimonios">
        {images.map((image, index) => (
          <div key={index} className="testimonio">
            <img src={image.src} alt={image.alt} className="testimonio-img" />
            <p className="testimonio-text">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;