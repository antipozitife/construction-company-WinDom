import React from 'react';
import x from '../../img/x.svg'; // Настройте путь при необходимости
import successfullyCheckmark from '../../img/successfullyCheckmark.svg'; 
import "./css/successModal.css";
import { useAccessibleModal } from "../hooks/useAccessibleModal";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useAccessibleModal(isOpen, onClose);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="window1" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="success-title" onMouseDown={(e) => e.stopPropagation()}>
        <div className="window1-content">
          <button
            onClick={onClose}
            type="button"
            className="modal-close-btn"
            aria-label="Закрыть окно"
          >
            <img src={x} alt="Закрыть" />
          </button>
          <img src={successfullyCheckmark} alt="" aria-hidden="true" />
          <h2 id="success-title">Демо-форма успешно проверена</h2>
          <p>В портфолио-версии данные не отправляются и не сохраняются.</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
