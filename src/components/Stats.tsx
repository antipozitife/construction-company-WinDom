import React from "react";
import line from "../../img/line.svg";

const Stats = () => {
  const stats = [
    { value: 10, label: "Лет успешного опыта продаж загородной недвижимости" },
    {
      value: 1051,
      label: "Га - площадь наших комфортных посёлков европейского класса",
    },
    { value: 5063, label: "Счастливых владельцев загородных домов" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="number-line">
            <h2>{stat.value}</h2>
            <img src={line} alt="Line" className="line-image" />
          </div>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
