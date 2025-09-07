import React, { useState, useEffect } from "react";
import './css/Mortgage.css';
import { mortgageData } from '../data/mortgageData';
import FormModal from "./callingForm"; 
import SuccessModal from "./successModal";

const CompanySection = () => {
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
    <div className="containerMortgage" id='Mortgage'>
      <div className="intro-text">
        <h1>
          <span className='blackPartIntro'>Подберём решения </span>
          <span className="orangePartIntro">по ипотеке </span>
          <span className="blackPartIntro">уже сегодня</span>
        </h1>
        <p>Выберите подходящий вариант и наши специалисты подготовят для вас актуальные предложения</p>
      </div>
      <div className="mortgage-cards-containerMotgage">
        {mortgageData.map((mortgage, index) => (
          <div key={index} className="mortgage-card">
            <div className="mortgage-text">
              <h2 className="mortgage-title">{mortgage.title}</h2>
              <p className="mortgage-description">{mortgage.description}</p>
              <div className="mortgage-details">
                <div className="mortgage-column">
                  <span className="mortgage-value">{mortgage.procent}</span>
                  <span className="mortgage-label">Ставка по ипотеке</span>
                </div>
                <div className="mortgage-column">
                  <span className="mortgage-value">{mortgage.vznos}</span>
                  <span className="mortgage-label">Первоначальный взнос</span>
                </div>
              </div>
            <button onClick={handleOpenModal}>Заказать звонок</button>            </div>
            <img src={mortgage.image} alt={mortgage.title} className="mortgage-image" />
          </div>
        ))}
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
    </div>
  );
};

export default CompanySection;