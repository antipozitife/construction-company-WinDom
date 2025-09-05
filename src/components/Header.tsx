import React, { useState, useEffect } from "react";
import logo from "../../img/logo.svg";
import phoneLogo from "../../img/phoneLogo.svg";
import vectorMenu from "../../img/VectorMenu.svg";
import x from "../../img/x.svg";
import successfullyCheckmark from "../../img/successfullyCheckmark.svg";

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
        <a href="#">
          <img src={logo} alt="Логотип" />
        </a>
        <div className="container-menu">
          <div className="dropdown">
            <button className="dropbtn">
              Наши проекты <img src={vectorMenu} alt="Меню" />
            </button>
            <div className="dropdown-content">
              <a href="#">Изумрудный Village</a>
              <a href="#">IQ CLUB</a>
              <a href="#">Усады</a>
              <a href="#">Зимняя горка</a>
              <a href="#">Константиновка</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              Дома <img src={vectorMenu} alt="Меню" />
            </button>
            <div className="dropdown-content">
              <a href="#">Одноэтажные</a>
              <a href="#">Двухэтажные</a>
            </div>
          </div>
          <a href="#">Ипотека</a>
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
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="window" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              type="button"
              className="modal-close-btn"
            >
              <img src={x} alt="Закрыть" />
            </button>
            <div className="window-content">
              <h2>
                Оставьте свои данные и наш менеджер перезвонит вам в течении 30
                минут
              </h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Имя *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Телефон *</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={12}
                    placeholder="+7XXXXXXXXXX"
                    required
                  />
                  {phoneError && (
                    <div style={{ color: "red", fontSize: "14px" }}>
                      {phoneError}
                    </div>
                  )}
                </div>
                <button type="submit" className="submit-button">
                  Заказать звонок
                </button>
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>
                    Я согласен с политикой обработки персональных данных
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Вторая модалка: успешная отправка */}
      {isModalOpen1 && (
        <div className="modal-overlay" onClick={() => setIsModalOpen1(false)}>
          <div className="window1" onClick={(e) => e.stopPropagation()}>
            <div className="window1-content">
              <button
                onClick={handleCloseModal1}
                type="button"
                className="modal-close-btn"
              >
                <img src={x} alt="Закрыть" />
              </button>
              <img src={successfullyCheckmark} />
              <h2>Ваш запрос принят</h2>
              <p>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
