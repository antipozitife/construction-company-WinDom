import React from 'react';
// Импортируйте SVG по мере необходимости, например:
import phoneLogo from '../../img/phoneLogo.svg';
import vk from '../../img/vk.svg'; // Пример, добавьте другие

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={require('../../img/logo.svg')} alt="Logo" /> {/* Используйте require для изображений */}
        <div className="container-menu">
          {/* Выпадающие списки и ссылки */}
          <a href="#">Наши проекты</a>
          <div className="dropdown">
            <button className="dropbtn">Дома <img src={require('../../img/VectorMenu.svg')} alt="Menu" /></button>
            <div className="dropdown-content">
              <a href="#">Одноэтажные</a>
              <a href="#">Двухэтажные</a>
              {/* Добавьте другие */}
            </div>
          </div>
          {/* Добавьте другие элементы меню */}
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