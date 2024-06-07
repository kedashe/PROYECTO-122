// src/Componentes/Perfiles.js
import React, { useState } from 'react';
import '../Styles/Perfiles.css';

const Perfiles = () => {
  const initialProfiles = [
    { id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMng8PNWKk9VPaeW9rkegkiBNvDDU0m8V43A&s', legend: 'Maria', description: 'Amante de la naturaleza y los animales.' },
    { id: 2, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR036zPE0VoEiZMQNJt9euZ0VjSN4_eai_AWQ&s', legend: 'Eliana', description: 'Disfruto viajar y conocer nuevas culturas.' },
    { id: 3, photo: 'https://lh3.googleusercontent.com/Q0c3Gflfzt6cCXD_CUokLt1cJPVejLP-wOaWqhApQFpXE-wS54ni9Q0Rgp5ddXvXNIKQ09pEYcRuAtQSgqJvZcHiCH2DRlywBQ=s900', legend: 'Emily', description: 'Apasionada por la cocina y la lectura.' },
    { id: 4, photo: 'https://lh3.googleusercontent.com/9MRdSd6G9k8LeHs3_bKCLY_G1K2ZPkh7lTxRB1g83AXbNN2eE7RilfFESLPStXVjSjPBeUrE9i0hop5PdhIjg1YEHaFZx1ms4M4=s120-c', legend: 'Celeste', description: 'Aficionada a la fotografía y el arte.' },
    { id: 5, photo: 'https://lh3.googleusercontent.com/Y7LsXY3AoQs6ovZ6pqTRAkhoLj3Yq19gE7F7bo80EnbCWgjYw4da4mm-po_y5stdkLUXcDETiwmJORJcPcX0Aej0nCZlMKM7aAU=s900', legend: 'Julia', description: 'Me gusta practicar yoga y meditación.' },
    { id: 6, photo: 'https://lh3.googleusercontent.com/_VLMryD6sUoo2NRls0THDFKMkU6AtK8W4I7o2FHoYUMTCVgH0n2OtBmysB0qEQzp_EKZpCsd4KBv4d-nmH0=s900', legend: 'Luana', description: 'Ferviente seguidora de las series de televisión.' },
  ];

  const [profiles] = useState(initialProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    console.log('Liked profile id:', profiles[currentIndex].id);
    showNextProfile();
  };

  const handleDislike = () => {
    console.log('Disliked profile id:', profiles[currentIndex].id);
    showNextProfile();
  };

  const showNextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <div className="profile-container">
      <h1 className="simulador-title">Simulador de Matchs</h1> {/* Texto "Simulador" */}
      {profiles.length > 0 && (
        <div className="perfiles-card">
          <img src={profiles[currentIndex].photo} alt="Profile" className="profile-photo" />
          <div className="profile-legend">{profiles[currentIndex].legend}</div>
          <div className="profile-description">{profiles[currentIndex].description}</div>
          <div className="profile-actions">
            <button className="like-button" onClick={handleLike}>❤️</button>
            <button className="dislike-button" onClick={handleDislike}>❌</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfiles;
