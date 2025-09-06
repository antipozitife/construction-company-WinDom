import React from 'react';
import x from '../../img/x.svg'; // Настройте путь при необходимости
import successfullyCheckmark from '../../img/successfullyCheckmark.svg'; 
import "./css/successModal.css";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="window1" onClick={(e) => e.stopPropagation()}>
        <div className="window1-content">
          <button
            onClick={onClose}
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
  );
};

export default SuccessModal;