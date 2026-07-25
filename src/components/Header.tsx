import React, { useState, useEffect } from "react";
import logo from "../../img/logo.svg";
import phoneLogo from "../../img/phoneLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import vectorMenu from "../../img/VectorMenu.svg";
import FormModal from "./callingForm";
import SuccessModal from "./successModal";
import "./css/Header.css";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phone, setPhone] = useState("+7");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setPhone("+7");
    setPhoneError("");
  };
  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseModal1 = () => setIsModalOpen1(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.setCustomValidity("Введите имя");
      nameInput.reportValidity();
      return;
    }
    nameInput.setCustomValidity("");
    if (!/^\+7\d{10}$/.test(phone)) {
      setPhoneError("Неверный формат номера");
      return;
    }
    setIsModalOpen(false);
    setIsModalOpen1(true);
  };

  useEffect(() => {
    if (isModalOpen1) {
      const timer = setTimeout(() => {
        setIsModalOpen1(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen1]);

  return (
    <>
      {/* Мобильный header */}
      <header className="header-mobile-adaptive">
        <div className="header-inner">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="header-right">
            <button type="button" className="phone-btn" onClick={handleOpenModal} aria-label="Заказать звонок">
              <img src={phoneLogo} alt="Телефон" />
            </button>
            <button type="button" className="burger-btn" onClick={() => setMobileMenuOpen(true)} aria-label="Открыть меню" aria-expanded={mobileMenuOpen}>
              <img src={vectorMenu} alt="Меню" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
  <div className="mobile-menu-overlay">
    <div className="mobile-menu-header">
      <Link to="/" onClick={() => setMobileMenuOpen(false)} className="logo-link">
        <img src={logo} alt="Логотип" />
      </Link>
      <button type="button" aria-label="Закрыть меню" className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
        ×
      </button>
    </div>
    <nav className="mobile-menu-nav">
      <Link to="/#company" onClick={() => setMobileMenuOpen(false)}>О компании</Link>
      <Link to="/our-projects" onClick={() => setMobileMenuOpen(false)}>Проекты</Link>
      <Link to="/#mortgage" onClick={() => setMobileMenuOpen(false)}>Ипотека</Link>
      <Link to="/#team" onClick={() => setMobileMenuOpen(false)}>Команда</Link>
      <Link to="/#contacts" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
    </nav>
  </div>
)}


      {/* Десктоп версия */}
      <header className="wrapper-header-desktop">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="container-menu">
            <div className="dropdown">
              <Link to="/our-projects" className="dropbtn">
                  Наши проекты <img src={vectorMenu} alt="" aria-hidden="true" />
              </Link>
              <div className="dropdown-content">
                <Link to="/projects/izumrudny">Изумрудный Village</Link>
                <Link to="/projects/iqclub">IQ CLUB</Link>
                <Link to="/projects/usadi">Усады</Link>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/houses" className="dropbtn">
                  Дома <img src={vectorMenu} alt="" aria-hidden="true" />
              </Link>
              <div className="dropdown-content">
                <Link to="/houses?floor=1">Одноэтажные</Link>
                <Link to="/houses?floor=2">Двухэтажные</Link>
              </div>
            </div>
            <Link to="/#mortgage">Ипотека</Link>
            <div className="dropdown">
              <button type="button" className="dropbtn" onClick={(e) => { e.preventDefault(); navigate("/#company"); }}>
                О компании <img src={vectorMenu} alt="" aria-hidden="true" />
              </button>
              <div className="dropdown-content">
                <Link to="/#team">Команда</Link>
                <Link to="/#contacts">Контакты</Link>
              </div>
            </div>
          </div>
          <div className="calling">
            <a className="phone" href="tel:+79625552525">
              <img src={phoneLogo} alt="Телефон" />
              +7 (962) 555-25-25
            </a>
            <button type="button" onClick={handleOpenModal}>Заказать звонок</button>
          </div>
        </div>
      </header>

      {/* Модалки */}
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        phone={phone}
        onPhoneChange={handlePhoneChange}
        phoneError={phoneError}
      />
      <SuccessModal isOpen={isModalOpen1} onClose={handleCloseModal1} />
    </>
  );
};

export default Header;
