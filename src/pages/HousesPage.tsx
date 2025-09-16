import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HeroHouses from '../components/HeroHouses';
import dot from '../../img/menudot.svg';
import line from '../../img/lineOrangePr.svg';
import housee from '../../img/carbon_home.svg';
import plan from '../../img/carbon_floorplan.svg';
import fluent from '../../img/fluent-mdl2_custom-list.svg';
import floors from '../../img/carbon_building.svg';
import rooms from '../../img/bi_door-open.svg';
import ImageSlider1 from '../../img/2floor(5).svg'
import ImageSlider2 from '../../img/2floor.svg'
import ImageSlider3 from '../../img/2floor(2).svg'
import ImageSlider4 from '../../img/2floor(3).svg'
import ImageSlider5 from '../../img/1floor.svg'
import ImageSlider6 from '../../img/2floor(4).svg'
import ImageSlider7 from '../../img/1floor(1).svg'
import ImageSlider8 from '../../img/1floor(2).svg'
import ImageSlider9 from '../../img/1floor(3).svg'
import ImageSlider10 from '../../img/1floor(4).svg'
import ImageSlider11 from '../../img/1floor(5).svg'
import ImageSlider12 from '../../img/townhouse.svg'
import ImageSlider13 from '../../img/townhouse(1).svg'
import ImageSlider14 from '../../img/townhouse(2).svg'
import ImageSlider15 from '../../img/townhouse(3).svg'
import ImageSlider16 from '../../img/townhouse(4).svg'
import ImageSlider17 from '../../img/townhouse(5).svg'
import Map from '../components/SalesOfficeMap';
import Footer from '../components/Footer';
import './HousesPage.css';
import FormModal from "../components/callingForm"; 
import SuccessModal from "../components/successModal";

interface House {
  id: number;
  name: string;
  image: string;
  areaH: string;
  areaU: string;
  type: string;
  floors: number;
  rooms: number;
  price: string;
  typeH: number;
}

const houses: House[] = [
  { id: 1, name: 'Win-1', image: ImageSlider1, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 2, name: 'Win-2', image: ImageSlider2, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 3, name: 'Win-3', image: ImageSlider3, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 4, name: 'Win-4', image: ImageSlider4, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 5, name: 'Win-5', image: ImageSlider5, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 6, name: 'Win-6', image: ImageSlider6, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 7, name: 'Win-7', image: ImageSlider7, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 1, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 8, name: 'Win-8', image: ImageSlider8, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 1, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 9, name: 'Win-9', image: ImageSlider9, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 1, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 10, name: 'Win-10', image: ImageSlider10, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 1, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 11, name: 'Win-11', image: ImageSlider11, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 1, rooms: 5, price: '13 800 000 ₽', typeH: 1},
  { id: 12, name: 'Win-12', image: ImageSlider12, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 2},
  { id: 13, name: 'Win-13', image: ImageSlider13, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 2},
  { id: 14, name: 'Win-14', image: ImageSlider14, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 2},
  { id: 15, name: 'Win-15', image: ImageSlider15, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 2},
  { id: 16, name: 'Win-16', image: ImageSlider16, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 2},
  { id: 17, name: 'Win-17', image: ImageSlider17, areaH: '139,8 м²', areaU: '5,1 сот.', type: 'ИЖС', floors: 2, rooms: 5, price: '13 800 000 ₽', typeH: 2},
];

const popularHouses = houses.slice(0, 4);

const HousesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFloors, setSelectedFloors] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const floorParam = searchParams.get('floor');
    if (floorParam) {
      setSelectedFloors(parseInt(floorParam));
      setSelectedType(null); // Сброс selectedType для применения фильтра по этажам
    } else {
      setSelectedFloors(null);
    }
  }, [searchParams]);

  const filteredHouses = houses.filter((house) => {
    if (selectedType === 'townhouse') {
      return house.typeH === 2;
    } else if (selectedType === 'all') {
      return true;
    } else if (selectedFloors !== null) {
      return house.floors === selectedFloors && house.typeH === 1;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredHouses.length / itemsPerPage);
  const currentHouses = filteredHouses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleFloorsFilter = (floors: number | null) => {
    setSelectedFloors(floors);
    setSelectedType(null);
    setSearchParams(floors ? { floor: floors.toString() } : {});
    setCurrentPage(1); // Сброс страницы при фильтрации
  };

  const handleTypeFilter = (type: string | null) => {
    setSelectedType(type);
    setSelectedFloors(null);
    if (type === 'townhouse') {
      setSelectedFloors(null);
    } else if (type === 'all') {
      setSelectedFloors(null);
    }
    setCurrentPage(1); // Сброс страницы при фильтрации
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [phone, setPhone] = useState("+7");
  const [phoneError, setPhoneError] = useState("");

  // Открытие модального окна формы
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setPhone("+7");
    setPhoneError("");
  };

  // Закрытие модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  // Маска и валидация ввода телефона
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    if (!val.startsWith("+7")) {
      val = "+7";
    }

    const digits = val.slice(2).replace(/\D/g, "");
    const trimmed = digits.slice(0, 10);

    setPhone("+7" + trimmed);
    setPhoneError("");
  };

  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements[0] as HTMLInputElement).value.trim();

    if (!name) {
      alert("Имя не может быть пустым");
      return;
    }

    if (!/^\+7\d{10}$/.test(phone)) {
      setPhoneError("Неверный формат номера");
      return;
    }

    console.log(
      "Форма отправлена в",
      new Date().toLocaleString("ru-RU", { timeZone: "Europe/Berlin" }),
    );

    // Закрыть первую модалку и открыть вторую
    setIsModalOpen(false);
    setIsModalOpen1(true);
  };

  // Таймер автозакрытия второй модалки через 3 секунды
  useEffect(() => {
    if (isModalOpen1) {
      const timer = setTimeout(() => {
        setIsModalOpen1(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen1]);

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
          <button onClick={() => handleFloorsFilter(1)} className={selectedFloors === 1 && selectedType === null ? 'active' : ''}>1-х этажные</button>
          <button onClick={() => handleFloorsFilter(2)} className={selectedFloors === 2 && selectedType === null ? 'active' : ''}>2-х этажные</button>
          <button onClick={() => handleTypeFilter('townhouse')} className={selectedType === 'townhouse' ? 'active' : ''}>Таунхаусы</button>
          <button onClick={() => handleTypeFilter('all')} className={selectedType === 'all' ? 'active' : ''}>Все дома</button>
        </div>
        <div className="breadcrumb">
          <Link to="/" className="mainPr">Главная</Link>
          <img src={dot} alt="dot" />
          <span className="current">Дома</span>
          <div className="line-wrapper">
            <img src={line} alt="line" className="line-divider" />
          </div>
        </div>
        <div className="house-grid">
          {currentHouses.map((house) => (
            <div key={house.id} className="house-card">
              <img src={house.image} alt={house.name} className="house-image" />
              <div className="house-info">
                <h2 className="house-header">
                  <span className='houseName'>{house.name}</span>
                  <span className='houseCost'>{house.price}</span>
                </h2>
                <div className="house-characteristics">
                  <p>
                    <img src={housee} alt="house area" />
                    Площадь дома - {house.areaH}
                  </p>
                  <p>
                    <img src={plan} alt="plot area" />
                    Площадь участка - {house.areaU}
                  </p>
                  <p>
                    <img src={fluent} alt="plot type" />
                    Тип участка - {house.type}
                  </p>
                  <p>
                    <img src={floors} alt="floors" />
                    Количество этажей - {house.floors}
                  </p>
                  <p>
                    <img src={rooms} alt="rooms" />
                    Количество комнат - {house.rooms}
                  </p>
                </div>
                <button onClick={handleOpenModal}>Заказать звонок</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button 
            className="pagination-button" 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            &lt; Пред.
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button 
              key={i + 1} 
              className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`} 
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button 
            className="pagination-button" 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            След. &gt;
          </button>
        </div>
      </section>
      <Map id="contacts" />
      <Footer />

      {/* Первая модалка: форма */}
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        phone={phone}
        onPhoneChange={handlePhoneChange}
        phoneError={phoneError}
      />

      {/* Вторая модалка: успешная отправка */}
      <SuccessModal
        isOpen={isModalOpen1}
        onClose={handleCloseModal1}
      />
    </div>
  );
};

export default HousesPage;