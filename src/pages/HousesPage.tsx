import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header";
import HeroHouses from '../components/HeroHouses';
import './housesPage.css';

interface House {
  id: number;
  name: string;
  image: string;
  area: string;
  floors: number;
  garage: boolean;
  price: string;
  description: string;
}

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

const popularHouses = houses.slice(0, 4);

const HousesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFloors, setSelectedFloors] = useState<number | null>(null);
  const [selectedGarage, setSelectedGarage] = useState<boolean | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null); // Добавлен для "Таунхаусы" и "Все дома"

  // Синхронизация фильтров с query-параметрами
  useEffect(() => {
    const floorParam = searchParams.get('floor');
    setSelectedFloors(floorParam ? parseInt(floorParam) : null);
  }, [searchParams]);

  const filteredHouses = houses.filter((house) => {
    const floorsMatch = selectedFloors === null || house.floors === selectedFloors;
    const garageMatch = selectedGarage === null || house.garage === selectedGarage;
    // Добавьте логику для "Таунхаусы", если нужно (предполагаем, что таунхаусы - это определенные дома)
    return floorsMatch && garageMatch;
  });

  const handleFloorsFilter = (floors: number | null) => {
    setSelectedFloors(floors);
    setSelectedType(null); // Сброс типа при выборе этажей
    setSearchParams(floors ? { floor: floors.toString() } : {});
  };

  const handleGarageFilter = (garage: boolean | null) => {
    setSelectedGarage(garage);
    setSelectedType(null); // Сброс типа при выборе гаража
  };

  const handleTypeFilter = (type: string | null) => {
    setSelectedType(type);
    setSelectedFloors(null); // Сброс этажей
    setSelectedGarage(null); // Сброс гаража
    // Если "Таунхаусы", примените фильтр (предполагаем, что таунхаусы - это дома с floors=2, адаптируйте)
    if (type === 'townhouse') {
      setSelectedFloors(2); // Пример
    } else if (type === 'all') {
      setSelectedFloors(null);
      setSelectedGarage(null);
    }
  };

  return (
    <div className="projects-page">
      <div className="wrapperHero">
        <div className="wrapperHero-header">
          <Header />
        </div>
        <HeroHouses />
      </div>
      <section className="projects-section">
        <h1 className="projects-title">
          <span className="black">НАШИ</span>
          <span className="orange"> ПРОЕКТЫ ДОМОВ</span>
        </h1>
        <div className="filters">
          <button onClick={() => handleFloorsFilter(1)} className={selectedFloors === 1 ? 'active' : ''}>1-х этажные</button>
          <button onClick={() => handleFloorsFilter(2)} className={selectedFloors === 2 ? 'active' : ''}>2-х этажные</button>
          <button onClick={() => handleTypeFilter('townhouse')} className={selectedType === 'townhouse' ? 'active' : ''}>Таунхаусы</button>
          <button onClick={() => handleTypeFilter('all')} className={selectedType === 'all' ? 'active' : ''}>Все дома</button>
        </div>
        <h2 className="breadcrumb">
          <span className="mainPr">Главная</span> - <span>Дома</span>
        </h2>
        <img src="lineOrangePr.svg" alt="orange line" className="line-divider" /> {/* Предполагаем, что это оранжевая полоска */}
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

export default HousesPage;