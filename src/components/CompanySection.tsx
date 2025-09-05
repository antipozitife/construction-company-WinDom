import React from "react";
import aboutUs from "../../img/img_about_us_main.svg";
import frame from "../../img/orange_frame.svg";
import SocialIcons from "./SocialIcons";

const CompanySection = () => {
  return (
    <div className="container">
      <div className="company-section">
        <div className="company-text">
          <h2>О КОМПАНИИ</h2>
          <p>
            Компания <span className="windom">Win Dom</span> основана в 2012
            году.
          </p>
          <p>
            Основным направлением девелопера является строительство загородных
            домов и таунхаусов "под ключ".
          </p>
          <p>
            Более 11 лет Win Dom работает на строительном рынке недвижимости
            Казани и Республики Татарстан и как подрядная организация и, как
            самостоятельный застройщик.
          </p>

          <SocialIcons />
        </div>

        <div className="images-container">
          <img src={aboutUs} alt="Загородный дом" className="company-image" />
          <img src={frame} className="orange-frame" />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
