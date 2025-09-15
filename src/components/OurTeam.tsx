import React, { useState, useEffect } from "react";
import TeamCarousel from './TeamCarousel';
import './css/OurTeam.css'

// Интерфейс пропсов для компонента TeamSection
interface TeamSectionProps {
  id?: string; // Необязательный пропс id
}

const TeamSection: React.FC<TeamSectionProps> = ({ id }) => {
  return (
    <div id={id}>
      <div className="containerTeam">
        <div className="intro-text">
          <h1>
            <span className="blackPart">Наша </span>
            <span className="orangePart">Команда </span>
          </h1>

          <h2>
            <span>Сотрудники WinDom - это профессионалы, сочетающие в себе энтузиазм и опыт, энергичные, творческие и увлеченные люди.</span>
            <span>Наша команда состоит из молодых профессионалов, готовых преодолевать сложности любого уровня. Успех отдельно взятого сотрудника - это составляющая часть успеха всей компании.</span>
          </h2>
        </div>
      </div>
      <TeamCarousel />
    </div>
  );
};

export default TeamSection;