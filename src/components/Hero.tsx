import React, { useState, useEffect } from "react";
import heroIMG from "../../img/heroIMG.svg";
import QuestionForm from "./questionForm"
import SuccessModal from "./successModal";
import { Link as ScrollLink } from "react-scroll";
import "./css/Hero.css";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen2] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [phone, setPhone] = useState("+7");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (isModalOpen1) {
      const timer = setTimeout(() => {
        setIsModalOpen1(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen1]);

  const handleOpenVideo = () => {
    setIsVideoOpen2(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen2(false);
  };

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
    setPhone("+7");
    setPhoneError("");
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  // Закрытие модального окна
  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
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
    setIsModalOpen2(false);
    setIsModalOpen1(true);
  };

  return (
    <div className="hero">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleOpenVideo();
        }}
      >
        <div className="watch-video">
          <div className="circle">
            <div className="triangle"></div>
          </div>
          <p>Смотреть видео</p>
        </div>
      </a>
      <h1>
        СТРОИТЕЛЬНАЯ КОМПАНИЯ{" "}
        <span>
          <span className="win">WIN</span>
          <span className="dom">DOM</span>
        </span>
      </h1>
      <p>Мы строим дома, коттеджные поселки и таунхаусы в Казани</p>
      <div className="hero-buttons">
        <ScrollLink to="OurProjects" smooth="linear" duration={500}>
          <button>Подробнее о проектах</button>
        </ScrollLink>
        <button onClick={handleOpenModal2}>Задать вопрос</button>
      </div>

      {isVideoOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-button" onClick={handleCloseVideo}>×</button>
            <iframe
              width="100%"
              height="100%"
              src="https://rutube.ru/play/embed/56ff1eaf4488c905a174902291f8794b"
              frameBorder="0"
              allow="fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Первая модалка: форма */}
      <QuestionForm
        isOpen={isModalOpen2}
        onClose={handleCloseModal2}
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

export default Hero;