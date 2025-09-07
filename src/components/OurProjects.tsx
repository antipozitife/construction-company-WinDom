import React, { useState } from "react";
import { Link } from "react-router-dom";
import Map from "../../img/MapIMG.svg";
import house1 from "../../img/1floor.svg";
import house2 from "../../img/1floor(1).svg";
import house3 from "../../img/1floor(2).svg";
import house4 from "../../img/1floor(3).svg";
import house5 from "../../img/1floor(4).svg";
import house6 from "../../img/1floor(5).svg";
import house7 from "../../img/2floor.svg";
import house8 from "../../img/2floor(1).svg";
import house9 from "../../img/2floor(2).svg";
import house10 from "../../img/2floor(3).svg";
import house11 from "../../img/2floor(4).svg";
import house12 from "../../img/2floor(5).svg";
import house13 from "../../img/townhouse.svg";
import house14 from "../../img/townhouse(1).svg";
import house15 from "../../img/townhouse(2).svg";
import house16 from "../../img/townhouse(3).svg";
import house17 from "../../img/townhouse(4).svg";
import house18 from "../../img/townhouse(5).svg";
import vector from "../../img/chooseLocationVector.svg";
import location from "../../img/ph_map-pin-light.svg"
import "./css/OurProjects.css";

type Project = {
  id: number;
  location: "Изумрудный Village" | "IQ CLUB" | "Зимняя Горка" | "Усады Village";
  description: string;
  status: string;
  image: string;
  floors: number;
  type: "house" | "townhouse";
};

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "1floor" | "2floor" | "townhouse"
  >("all");

  const [selectedLocation, setSelectedLocation] = useState<
    "all" | "Изумрудный Village" | "IQ CLUB" | "Зимняя Горка" | "Усады Village"
  >("all");

  const projects: Project[] = [
    { id: 1, location: "Усады Village", description: "8 минут от метро Дубравная.", status: "Все дома сданы", image: house1, floors: 1, type: "house" },
    { id: 7, location: "Изумрудный Village", description: "Поселок в черте города.", status: "Все дома сданы", image: house2, floors: 1, type: "house" },
    { id: 3, location: "IQ CLUB", description: "Начало строительства", status: "Дома сдаются", image: house3, floors: 1, type: "house" },
    { id: 11, location: "IQ CLUB", description: "Начало строительства", status: "Все дома сданы", image: house4, floors: 1, type: "house" },
    { id: 4, location: "Усады Village", description: "8 минут от метро Дубравная.", status: "- I квартал 2026 года", image: house5, floors: 1, type: "house" },
    { id: 13, location: "Изумрудный Village", description: "Поселок в черте города.", status: "Дома сдаются", image: house6, floors: 1, type: "house" },
    { id: 10, location: "Усады Village", description: "8 минут от метро Дубравная.", status: "Все дома сданы", image: house7, floors: 2, type: "house" },
    { id: 14, location: "Изумрудный Village", description: "Поселок в черте города.", status: "Дома сдаются", image: house8, floors: 2, type: "house" },
    { id: 2, location: "IQ CLUB", description: "Начало строительства", status: "Планируется", image: house9, floors: 2, type: "house" },
    { id: 9, location: "IQ CLUB", description: "Начало строительства", status: "В продаже", image: house10, floors: 2, type: "house" },
    { id: 16, location: "Усады Village", description: "8 минут от метро Дубравная.", status: "Дома сдаются", image: house11, floors: 2, type: "house" },
    { id: 6, location: "Изумрудный Village", description: "Поселок в черте города.", status: "- II квартал 2026 года", image: house12, floors: 2, type: "house" },
    { id: 12, location: "Изумрудный Village", description: "Поселок в черте города.", status: "Все дома сданы", image: house13, floors: 2, type: "townhouse" },
    { id: 18, location: "Изумрудный Village", description: "Поселок в черте города.", status: "- IV квартал 2026 года", image: house14, floors: 2, type: "townhouse" },
    { id: 15, location: "IQ CLUB", description: "Начало строительства", status: "Дома сдаются", image: house15, floors: 2, type: "townhouse" },
    { id: 5, location: "IQ CLUB", description: "Начало строительства", status: "Все дома сданы", image: house16, floors: 2, type: "townhouse" },
    { id: 8, location: "Усады Village", description: "8 минут от метро Дубравная.", status: "Дома сдаются", image: house17, floors: 2, type: "townhouse" },
    { id: 17, location: "Усады Village", description: "8 минут от метро Дубравная.", status: "Все дома сданы", image: house18, floors: 2, type: "townhouse" },
  ];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "all" ||
      (selectedCategory === "1floor" && project.floors === 1 && project.type === "house") ||
      (selectedCategory === "2floor" && project.floors === 2 && project.type === "house") ||
      (selectedCategory === "townhouse" && project.type === "townhouse");

    const locationMatch =
      selectedLocation === "all" || project.location === selectedLocation;

    return categoryMatch && locationMatch;
  });

  const handleLocationSelect = (location: typeof selectedLocation) => {
    setSelectedLocation(location);
  };

  return (
    <div className="ourProjects" id="OurProjects">
      <h1>
        <span className="our">НАШИ </span>
        <span className="projects">ПРОЕКТЫ</span>
      </h1>

      {/* Фильтры */}
      <div className="filters">
        <button
          onClick={() => setSelectedCategory("1floor")}
          className={selectedCategory === "1floor" ? "active" : ""}
        >
          <p>Одноэтажные</p>
        </button>

        <button
          onClick={() => setSelectedCategory("2floor")}
          className={selectedCategory === "2floor" ? "active" : ""}
        >
          <p>Двухэтажные</p>
        </button>

        <button
          onClick={() => setSelectedCategory("townhouse")}
          className={selectedCategory === "townhouse" ? "active" : ""}
        >
          <p>Таунхаусы</p>
        </button>

        <button
          onClick={() => setSelectedCategory("all")}
          className={selectedCategory === "all" ? "active" : ""}
        >
          <p>Все дома</p>
        </button>
      </div>

      {/* Выбор локации */}
      <div className="location">
        <p>Коттеджные поселки и дома</p>
        <div className="dropdownLoc">
          <button className="dropbtnLoc">
            {selectedLocation === "all" ? "в Казани" : selectedLocation} <img src={vector} alt="Vector icon" />
          </button>
          <div className="dropdownLoc-content">
            <button onClick={() => handleLocationSelect("Изумрудный Village")}>в "Изумрудный Village"</button>
            <button onClick={() => handleLocationSelect("Усады Village")}>в "Усады Village"</button>
            <button onClick={() => handleLocationSelect("IQ CLUB")}>в "IQ CLUB"</button>
            <button onClick={() => handleLocationSelect("Зимняя Горка")}>в "Зимняя Горка"</button>
            <button onClick={() => handleLocationSelect("all")}>в Казани</button>
          </div>
        </div>
      </div>

      {/* Список проектов */}
      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.slice(0, 6).map((project) => (
            <Link
              key={project.id}
              to={`/houses/${project.id}`}
              className="project-card"
            >
              <h1>{project.location}</h1>
              <div className="houseDescription">
                <img src={location} />
                <span className="description">{project.description}</span>{" "}
                <span className="status">{project.status}</span>
              </div>
              <img src={project.image} alt={project.location || `Проект ${project.id}`} />
            </Link>
          ))
        ) : (
          <p>Нет проектов по выбранному фильтру.</p>
        )}
      </div>

      {/* Кнопка "Смотреть всё" */}
      <Link to="/Houses" className="view-all-button">
        <button>Смотреть всё</button>
      </Link>
    </div>
  );
};

export default OurProjects;
