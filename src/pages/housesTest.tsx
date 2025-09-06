import React, { useState } from 'react';
import './housesTest.css'; // Assume a CSS file for styling

interface House {
  id: number;
  name: string;
  image: string; // Поле image как строка
  area: string;
  floors: number;
  garage: boolean;
  price: string;
  description: string;
}

// Hardcoded data for houses
const houses: House[] = [
  { id: 1, name: 'Win 1', image: 'ImageSlider1.svg', area: '150 м²', floors: 1, garage: true, price: '10 000 000 ₽', description: 'Одноэтажный дом с гаражом' },
  { id: 2, name: 'Win 2', image: 'ImageSlider1.svg', area: '200 м²', floors: 2, garage: false, price: '15 000 000 ₽', description: 'Двухэтажный дом без гаража' },
  { id: 3, name: 'Win 3', image: 'ImageSlider1.svg', area: '180 м²', floors: 1, garage: true, price: '12 000 000 ₽', description: 'Одноэтажный дом с гаражом' },
  { id: 4, name: 'Win 4', image: 'ImageSlider1.svg', area: '220 м²', floors: 2, garage: true, price: '18 000 000 ₽', description: 'Двухэтажный дом с гаражом' },
  { id: 5, name: 'Win 5', image: 'ImageSlider1.svg', area: '160 м²', floors: 1, garage: false, price: '11 000 000 ₽', description: 'Одноэтажный дом без гаража' },
  { id: 6, name: 'Win 6', image: 'ImageSlider1.svg', area: '250 м²', floors: 2, garage: true, price: '20 000 000 ₽', description: 'Двухэтажный дом с гаражом' },
  { id: 7, name: 'Win 7', image: 'ImageSlider1.svg', area: '140 м²', floors: 1, garage: false, price: '9 000 000 ₽', description: 'Одноэтажный дом без гаража' },
  { id: 8, name: 'Win 8', image: 'ImageSlider1.svg', area: '190 м²', floors: 2, garage: true, price: '14 000 000 ₽', description: 'Двухэтажный дом с гаражом' },
  { id: 9, name: 'Win 9', image: 'ImageSlider1.svg', area: '170 м²', floors: 1, garage: true, price: '13 000 000 ₽', description: 'Одноэтажный дом с гаражом' },
  { id: 10, name: 'Win 10', image: 'ImageSlider1.svg', area: '230 м²', floors: 2, garage: false, price: '16 000 000 ₽', description: 'Двухэтажный дом без гаража' },
];

// Popular houses (subset or separate)
const popularHouses = houses.slice(0, 4); // Example

const ProjectsPage = () => {
  const [selectedFloors, setSelectedFloors] = useState<number | null>(null);
  const [selectedGarage, setSelectedGarage] = useState<boolean | null>(null);

  const filteredHouses = houses.filter((house) => {
    const floorsMatch = selectedFloors === null || house.floors === selectedFloors;
    const garageMatch = selectedGarage === null || house.garage === selectedGarage;
    return floorsMatch && garageMatch;
  });

  const handleFloorsFilter = (floors: number | null) => {
    setSelectedFloors(floors);
  };

  const handleGarageFilter = (garage: boolean | null) => {
    setSelectedGarage(garage);
  };

  return (
    <div className="projects-page">
      <header className="header">
        <nav>
          <ul>
            <li>Наши проекты</li>
            <li>Дома</li>
            <li>Таунхаусы</li>
            <li>Участки</li>
            <li>Ипотека</li>
            <li>О компании</li>
          </ul>
        </nav>
      </header>

      <section className="projects-section">
        <h1>НАШИ ПРОЕКТЫ ДОМОВ</h1>
        <div className="filters">
          <button onClick={() => handleFloorsFilter(1)} className={selectedFloors === 1 ? 'active' : ''}>Одноэтажные</button>
          <button onClick={() => handleFloorsFilter(2)} className={selectedFloors === 2 ? 'active' : ''}>Двухэтажные</button>
          <button onClick={() => handleGarageFilter(true)} className={selectedGarage === true ? 'active' : ''}>С гаражом</button>
          <button onClick={() => handleGarageFilter(false)} className={selectedGarage === false ? 'active' : ''}>Без гаража</button>
        </div>
        <div className="house-grid">
          {filteredHouses.map((house) => (
            <div key={house.id} className="house-card">
              <img src={house.image} alt={house.name} />
              <h2>{house.name}</h2>
              <p>Площадь: {house.area}</p>
              <p>Этажей: {house.floors}</p>
              <p>Гараж: {house.garage ? 'Да' : 'Нет'}</p>
              <p>Цена: {house.price}</p>
              <p>{house.description}</p>
              <button>Подробнее</button>
            </div>
          ))}
        </div>
      </section>

      <section className="popular-projects">
        <h1>ПОПУЛЯРНЫЕ ПРОЕКТЫ</h1>
        <div className="house-grid">
          {popularHouses.map((house) => (
            <div key={house.id} className="house-card">
              <img src={house.image} alt={house.name} />
              <h2>{house.name}</h2>
              <p>Площадь: {house.area}</p>
              <p>Этажей: {house.floors}</p>
              <p>Гараж: {house.garage ? 'Да' : 'Нет'}</p>
              <p>Цена: {house.price}</p>
              <p>{house.description}</p>
              <button>Подробнее</button>
            </div>
          ))}
        </div>
      </section>

      <section className="village-banner">
        <h1>В КОТТЕДЖНОМ ПОСЕЛКЕ 'Изумрудный Village'</h1>
        <p>Описание поселка...</p>
      </section>

      <section className="about-projects">
        <h1>О ПРОЕКТАХ</h1>
        <p>Описание проектов...</p>
        <div className="map-placeholder">
          {/* Замените на реальный map embed или image */}
          <img src="map-placeholder.jpg" alt="Map" />
        </div>
        <button>Задать вопрос</button>
      </section>

      <footer>
        <p>Контакты и информация...</p>
      </footer>
    </div>
  );
};

export default ProjectsPage;