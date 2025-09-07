import React from 'react';
import { teamData } from '../data/teamData';
import './css/TeamCarousel.css';

const TeamCarousel: React.FC = () => {
    // Удваиваем массив для бесконечной прокрутки
    const duplicatedData = [...teamData, ...teamData];

    return (
        <div className="carousel-wrapper">
            <div className="carousel-track">
                {duplicatedData.map((person, index) => (
                    <div className="carousel-card" key={index}>
                        <img src={person.image} alt={person.name} className="carousel-img" />
                        <h3 className="carousel-name">{person.name}</h3>
                        <p className="carousel-title">{person.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCarousel;
