import React from 'react';
import heroIMG from '../../img/heroIMG.svg'; 

const Hero = () => {
  return (
    <div className="hero">
            <a href="#">
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
       </div>
  );
};

export default Hero;