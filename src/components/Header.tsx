import React, { useState, useEffect } from "react";
import logo from "../../img/logo.svg";
import phoneLogo from "../../img/phoneLogo.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import vectorMenu from "../../img/VectorMenu.svg";
import FormModal from "./callingForm"; 
import SuccessModal from "./successModal";
import ProjectsPage from "../pages/ProjectPage";
import Houses from "../pages/HousesPage";
import MainPage from "../pages/mainPage"
import "./css/Header.css"

const Header = () => {
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
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
        <div className="container-menu">
          <div className="dropdown">
            <ScrollLink to="OurProjects" smooth="linear" duration={500}>
              <button className="dropbtn">
                Наши проекты <img src={vectorMenu} alt="Меню" />
              </button>
            </ScrollLink>
            <div className="dropdown-content">
              <Link to="/projects/izumrudny">Изумрудный Village</Link>
              <Link to="/projects/IQClub">IQ CLUB</Link>
              <Link to="/projects/usadi">Усады</Link>
            </div>
          </div>
          <div className="dropdown">
            <ScrollLink to="Houses" smooth="linear" duration={500}>
              <button className="dropbtn">
                Дома <img src={vectorMenu} alt="Меню" />
              </button>
            </ScrollLink>
            <div className="dropdown-content">
              <Link to="/FirstRoom">Одноэтажные</Link>
              <a href="#">Двухэтажные</a>
            </div>
          </div>
          <a href="#">Контакты</a>
          <div className="dropdown">
            <button className="dropbtn">
              О компании <img src={vectorMenu} alt="Меню" />
            </button>
            <div className="dropdown-content">
              <a href="#">Команда</a>
              <a href="#">СМИ о нас</a>
              <a href="#">Новости</a>
            </div>
          </div>
        </div>
        <div className="calling">
          <div className="phone">
            <img src={phoneLogo} alt="Телефон" />
            +7 (962) 555-25-25
          </div>
          <button onClick={handleOpenModal}>Заказать звонок</button>
        </div>
      </div>

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
    </header>
  );
};

export default Header;