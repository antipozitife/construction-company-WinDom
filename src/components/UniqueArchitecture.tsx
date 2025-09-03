import React from 'react';
import day from '../../img/UniqueArchitectureDay.svg';
import night from '../../img/UniqueArchitectureNight.svg';

const UniqueArchitecture = () => {
  return (
    <div className="uniqueArchitecture">
      <h1><span className="unique">УНИКАЛЬНАЯ </span><span className="architecture">АРХИТЕКТУРА</span></h1>

      <div className="unique-architecture-images">
        <img src={day} alt="ArchitectureDay" />
        <img src={night} alt="ArchitectureNight" />
      </div>

      <div className="architecture-description">
        <p>Мы не строим однотипных коробочных решений: дома из желтого или красного кирпича. Мы создаём </p> 
        <p className="orange-text-about-architecture">уникальные</p> 
        <p>, ни на что не похожие, </p>
        <p className="orange-text-about-architecture">запоминающиеся проекты.</p>
      </div>
    </div>
  );
};

export default UniqueArchitecture;
