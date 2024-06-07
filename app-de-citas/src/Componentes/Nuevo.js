import React from 'react';
import '../Styles/Nuevo.css';


const Nuevo = () => {
  return (
    <div className="nuevo-container">
      <div className="nuevo-content">
        <h2>En Meetic, nos tomamos las cosas en serio para ayudarte a empezar una relación seria.</h2>
        <p>
          Cada día, recibirás, por correo electrónico y a través de nuestras notificaciones push,
          selecciones personalizadas de perfiles de personas solteras. Descubre nuestras
          recomendaciones, estés donde estés... ¡Porque sería una pena pasar por alto un flechazo!
        </p>
      </div>
      <div className="nuevo-image">
      <img src="https://iliusstu-a.akamaihd.net/www.meetic.es/hpv-default/events-10d2ab43f65.png" alt="" />
      </div>
    </div>
  );
};

export default Nuevo;
