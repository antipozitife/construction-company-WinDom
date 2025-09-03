import React from 'react';
import logo from '../../img/logo.svg';
import phoneLogo from '../../img/phoneLogo.svg';
import vectorMenu from '../../img/VectorMenu.svg';


const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Logo" /> 
        <div className="container-menu">
          {/* Выпадающие списки и ссылки */}
          <div className="dropdown">
            <button className="dropbtn">Наши проекты <img src={vectorMenu} alt="Menu" /></button>
            <div className="dropdown-content">
              <a href="#">Изумрудный Village</a>
              <a href="#">IQ CLUB</a>
              <a href="#">Усады</a>
              <a href="#">Зимняя горка</a>
              <a href="#">Константиновка</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Дома <img src={vectorMenu} alt="Menu" /></button>
            <div className="dropdown-content">
              <a href="#">Одноэтажные</a>
              <a href="#">Двухэтажные</a>
            </div>
          </div>
          <a href="#">Ипотека</a>
          <div className="dropdown">
            <button className="dropbtn">О компании <img src={vectorMenu} alt="Menu" /></button>
            <div className="dropdown-content">
              <a href="#">Команда</a>
              <a href="#">СМИ о нас</a>
              <a href="#">Новости</a>
            </div>
          </div>
        </div>
        <div className="calling">
          <div className="phone">
            <img src={phoneLogo} alt="Phone" />
            +7 (962) 555-25-25
          </div>
          <button>Заказать звонок</button>
        </div>
      </div>
    </header>
  );
};

export default Header;