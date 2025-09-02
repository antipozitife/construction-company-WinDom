import React from 'react';
import heroIMG from '../../img/heroIMG.svg'; // Фон

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroIMG})` }}>
      <h1>
        <span>СТРОИТЕЛЬНАЯ <span className="win">КОМПАНИЯ</span></span>
        <span className="dom">WINDOM</span>
      </h1>
      <p>Мы строим дома, коттеджные поселки и таунхаусы в Казани</p>
      <div className="hero-buttons">
        <button>Подробнее о проектах</button>
        <button>Задать вопрос</button>
        <button className="play"><span>Смотреть видео</span></button>
      </div>
      <div className="watch-video">
        <div className="circle">
          <div className="triangle"></div>
        </div>
        {/* Добавьте p, если нужно */}
      </div>
    </div>
  );
};

export default Hero;