import React, { useState, useEffect } from "react";
import heroIMG from "../../img/heroIMG.svg";
import x from "../../img/x.svg";
import pic from "../../img/answerIMG.svg";
import successfullyCheckmark from "../../img/successfullyCheckmark.svg";

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
        <button>Подробнее о проектах</button>
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
      {isModalOpen2 && (
        <div className="modal-overlay" onClick={handleCloseModal2}>
          <div className="window2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal2}
              type="button"
              className="modal-close-btn"
            >
              <img src={x} alt="Закрыть" />
            </button>
            <div className="window2-content">
              <img src={pic} />
              <div className="contactsForAnswers">
                <h2>Укажите контакты для связи и напишите вопрос </h2>
                <p>Наш менеджер свяжется с вами в ближайшее время</p>
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
                  <div>
                    <label>Комментарий *</label>
                    <input type="text" required />
                  </div>
                  <button type="submit" className="submit-button">
                    Задать вопрос
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
    </div>
  );
};

export default Hero;
