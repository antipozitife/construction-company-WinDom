import React from 'react';
import aboutUs from '../../img/img_about_us_main.svg'; // Предполагая, что это изображение

const CompanySection = () => {
  return (
    <div className="company-section">
      <div className="company-text">
        <h2>О КОМПАНИИ</h2>
        <p>Компания <span className="windom">Win Dom</span> основана в 2012 году.</p>
        <p>Основным направлением девелопера является строительство загородных домов и таунхаусов "под ключ".</p>
        {/* Добавьте больше */}
      </div>
      <img src={aboutUs} alt="Company" className="company-image" />
    </div>
  );
};

export default CompanySection;