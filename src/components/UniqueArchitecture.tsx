import React from "react";
import day from "../../img/UniqueArchitectureDay.jpg";
import night from "../../img/UniqueArchitectureNight.jpg";
import "./css/UniqueArchitecture.css";

const UniqueArchitecture = () => {
  return (
    <div className="uniqueArchitecture">
      <h2>
        <span className="unique">УНИКАЛЬНАЯ </span>
        <span className="architecture">АРХИТЕКТУРА</span>
      </h2>

      <div className="unique-architecture-images">
        <img src={day} alt="Архитектура дома днём" loading="lazy" />
        <img src={night} alt="Архитектура дома ночью" loading="lazy" />
      </div>

      <div className="architecture-description">
        <p>
          Мы не строим однотипных коробочных решений: дома из желтого или
          красного кирпича. Мы создаём{" "}
        </p>
        <p className="orange-text-about-architecture">уникальные</p>
        <p>, ни на что не похожие, </p>
        <p className="orange-text-about-architecture">
          запоминающиеся проекты.
        </p>
      </div>
    </div>
  );
};

export default UniqueArchitecture;
