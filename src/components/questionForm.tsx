import React from 'react';
import x from '../../img/x.svg'; // Adjust path as needed
import pic from '../../img/answerIMG.jpg'; // Adjust path as needed
import "./css/questionForm.css";
import { useAccessibleModal } from "../hooks/useAccessibleModal";

interface QuestionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  phone: string;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneError: string | null;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
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
      <div className="window2" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="question-title" onMouseDown={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          type="button"
          className="modal-close-btn"
          aria-label="Закрыть окно"
        >
          <img src={x} alt="Закрыть" />
        </button>
        <div className="window2-content">
          <img src={pic} alt="" aria-hidden="true" />
          <div className="contactsForAnswers">
            <h2 id="question-title">Укажите контакты для связи и напишите вопрос</h2>
            <p>Наш менеджер свяжется с вами в ближайшее время</p>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="question-name">Имя *</label>
                <input id="question-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="question-phone">Телефон *</label>
                <input
                  id="question-phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={onPhoneChange}
                  maxLength={12}
                  placeholder="+7XXXXXXXXXX"
                  required
                  autoComplete="tel"
                  aria-invalid={Boolean(phoneError)}
                  aria-describedby={phoneError ? "question-phone-error" : undefined}
                />
                {phoneError && (
                  <div id="question-phone-error" role="alert" style={{ color: "red", fontSize: "14px" }}>
                    {phoneError}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="question-comment">Комментарий *</label>
                <textarea id="question-comment" name="comment" required />
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
  );
};

export default QuestionForm;
