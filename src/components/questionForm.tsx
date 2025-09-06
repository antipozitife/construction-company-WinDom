import React from 'react';
import x from '../../img/x.svg'; // Adjust path as needed
import pic from '../../img/answerIMG.svg'; // Adjust path as needed
import "./css/questionForm.css";

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
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="window2" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          type="button"
          className="modal-close-btn"
        >
          <img src={x} alt="Закрыть" />
        </button>
        <div className="window2-content">
          <img src={pic} />
          <div className="contactsForAnswers">
            <h2>Укажите контакты для связи и напишите вопрос</h2>
            <p>Наш менеджер свяжется с вами в ближайшее время</p>
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
  );
};

export default QuestionForm;