import React, { useState } from 'react';
import heroIMG from '../../img/heroIMG.svg'; 

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="hero">
      <a href="#" onClick={(e) => { e.preventDefault(); handleOpenVideo(); }}>
        <div className="watch-video">
          <div className="circle">
            <div className="triangle"></div>
          </div>
          <p>Смотреть видео</p>
        </div>
      </a>
      <h1>СТРОИТЕЛЬНАЯ КОМПАНИЯ <span><span className="win">WIN</span><span className="dom">DOM</span></span></h1>
      <p>Мы строим дома, коттеджные поселки и таунхаусы в Казани</p>
      <div className="hero-buttons">
        <button>Подробнее о проектах</button>
        <button>Задать вопрос</button>
      </div>

      {isVideoOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-button" onClick={handleCloseVideo}>×</button>
            <iframe
              width="100%"
              height="100%"
              src="https://rutube.ru/play/embed/56ff1eaf4488c905a174902291f8794b"
              frameBorder="0"
              allow="fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;