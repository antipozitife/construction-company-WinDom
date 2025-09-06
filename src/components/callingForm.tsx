import React from 'react';
import x from '../../img/x.svg'; // Настройте путь при необходимости
import pic from '../../img/answerIMG.svg'; // Настройте путь при необходимости
import "./css/callingForm.css";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  phone: string;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneError: string | null;
}

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  phone,
  onPhoneChange,
  phoneError,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
          <div className="window" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={onClose}
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
              <form onSubmit={onSubmit}>
                <div>
                  <label>Имя *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Телефон *</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={onPhoneChange}
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
  );
};

export default FormModal;