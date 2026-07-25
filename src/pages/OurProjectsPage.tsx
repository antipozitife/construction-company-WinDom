import React from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import Map from '../components/SalesOfficeMap';
import Footer from '../components/Footer';

import dot from '../../img/menudot.svg';
import line from '../../img/lineOrangePr.svg';
import isum from '../../img/Izumrudniy.jpg';
import iq from '../../img/townhouse(2).jpg';
import usadi from '../../img/1floor.jpg';
import img1 from '../../img/IMGMap1.svg';

import './OurProjectsPage.css';

const OurProjectsPage = () => {
  return (
    <div>
      <Header />
      <div className="containerProj">
        {/* Заголовок */}
        <h1 className="projects-title">
          <span className="black">НАШИ</span>
          <span className="orange"> ПРОЕКТЫ</span>
        </h1>

        {/* Навигация */}
        <div className="breadcrumb">
          <Link to="/" className="mainPr">Главная</Link>
          <img src={dot} alt="dot" />
          <span className="current">Все проекты</span>
        </div>

        {/* Линия */}
        <img src={line} alt="line" className="line-divider" />

        {/* Проекты */}
        <div className="projects">
          {/* Изумрудный Village */}
          <Link to="/projects/izumrudny">
            <div className="ad-container">
              <img src={isum} alt="Изумрудный Village" className="ad-image" />
              <div className="ad-info">
                <div className="ad-text-left">
                  <h2><span className="orange">ИЗУМРУДНЫЙ</span> VILLAGE</h2>
                  <p className="location">
                    <img src={img1} alt="" aria-hidden="true" />
                    8 минут от метро Дубравная. 
                    <span className="status">Дома сдаются</span>
                  </p>
                </div>
                <div className="ad-text-right">
                  Коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани
                </div>
              </div>
            </div>
          </Link>

          {/* IQ CLUB */}
          <Link to="/projects/iqclub">
            <div className="ad-container">
              <img src={iq} alt="IQ Club" className="ad-image" />
              <div className="ad-info">
                <div className="ad-text-left">
                  <h2><span className="orange">IQ</span> CLUB</h2>
                  <p className="location">
                    <img src={img1} alt="" aria-hidden="true" />
                    Начало строительства – 
                    <span className="status">I квартал 2024 года</span>
                  </p>
                </div>
                <div className="ad-text-right">
                  Таунхаус-клуб IQ CLUB — это инновационный жилой комплекс, где все жилые здания представляют собой комфортные таунхаусы
                </div>
              </div>
            </div>
          </Link>

          {/* Усады Village */}
          <Link to="/projects/usadi">
            <div className="ad-container">
              <img src={usadi} alt="Усады Village" className="ad-image" />
              <div className="ad-info">
                <div className="ad-text-left">
                  <h2><span className="orange">УСАДЫ</span> VILLAGE</h2>
                  <p className="location">
                    <img src={img1} alt="" aria-hidden="true" />
                    Поселок в черте города 
                    <span className="status">Все дома сданы</span>
                  </p>
                </div>
                <div className="ad-text-right">
                  Проектное строительство частных домов на территории поселка Усады (г. Казань)
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Map id="contacts" />
      <Footer />
    </div>
  );
};

export default OurProjectsPage;
