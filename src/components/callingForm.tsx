import React from 'react';
import x from '../../img/x.svg'; // Настройте путь при необходимости
import pic from '../../img/answerIMG.jpg'; // Настройте путь при необходимости
import "./css/callingForm.css";
import { useAccessibleModal } from "../hooks/useAccessibleModal";

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
  const dialogRef = useAccessibleModal(isOpen, onClose);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
          <div className="window" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="callback-title" onMouseDown={(e) => e.stopPropagation()}>
            <button
              onClick={onClose}
              type="button"
              className="modal-close-btn"
              aria-label="Закрыть окно"
            >
              <img src={x} alt="Закрыть" />
            </button>
            <div className="window-content">
              <h2 id="callback-title">
                Оставьте свои данные, и наш менеджер перезвонит вам в течение 30
                минут
              </h2>
              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="callback-name">Имя *</label>
                  <input id="callback-name" name="name" type="text" autoComplete="name" required />
                </div>
                <div>
                  <label htmlFor="callback-phone">Телефон *</label>
                  <input
                    id="callback-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={onPhoneChange}
                    maxLength={12}
                    placeholder="+7XXXXXXXXXX"
                    required
                    autoComplete="tel"
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={phoneError ? "callback-phone-error" : undefined}
                  />
                  {phoneError && (
                  <div id="callback-phone-error" role="alert" style={{ color: "red", fontSize: "14px" }}>
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
