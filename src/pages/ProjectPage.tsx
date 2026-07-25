import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { houses } from '../data/housesForSlider';
import ImageSlider from '../components/ImageSliderUn';
import Header from '../components/Header';
import frame from "../../img/frameAbout.svg";
import './ProjectPage.css';
import Map from '../components/SalesOfficeMap';
import Footer from '../components/Footer';
import NotFoundPage from './NotFoundPage';

const ProjectPage = () => {
  const { projectId } = useParams(); 
  const project = projectsData.find((p) => p.id === projectId); 

  if (!project) {
    return <NotFoundPage />;
  }

  // ✅ Используем project.fullName для фильтрации домов
  const projectHouses = houses.filter(house => house.location === project.fullName);
  const imagesForSlider = projectHouses.map(house => house.image);

  return (
    <div className="projects-page">
      <div className="wrapperProject" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="wrapperProject-header">
          <Header />
        </div>
        <div className="heroProject">
          <p>{project.subtitle}</p>
          <h1>
            <span className="title1">{project.title1}</span>
            <span className="title2">{project.title2}</span>
          </h1>
        </div>
      </div>

      <div className='aboutProject'>
        <h2> О проекте</h2>

        <div className='aboutProjectContent'>
          <div className="images-container">
            <img src={project.imgAbout1} className="company-image first" alt={`Проект ${project.fullName}`} />

            <div className="zoom-frame">
              <img src={project.imgAbout1} alt="Увеличенный участок" />
            </div>

            <img src={frame} className="orange-frame" alt="" aria-hidden="true" />
          </div>

          <div className='text-container'>
            <div className="project-header-line">
              <span className="nameProject">{project.title1}</span>
              <span className="nameProject">{project.title2}</span>
              <span className="project-description">{project.description}</span>
            </div>
            <ul>
              <li><img src={project.IMGaboutList1} alt="" aria-hidden="true" /><span>{project.aboutList1}</span></li>
              <li><img src={project.IMGaboutList2} alt="" aria-hidden="true" /><span>{project.aboutList2}</span></li>
              <li><img src={project.IMGaboutList3} alt="" aria-hidden="true" /><span>{project.aboutList3}</span></li>
              <li><img src={project.IMGaboutList4} alt="" aria-hidden="true" /><span>{project.aboutList4}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <p className='builded'>Галерея <span className='orange'>построенных домов</span></p>

        {imagesForSlider.length > 0 ? (
          <ImageSlider images={imagesForSlider} />
        ) : (
          <p style={{ textAlign: "center" }}>Нет доступных домов для отображения.</p>
        )}

      <Map id="contacts" />
      <Footer />
    </div>
  );
};

export default ProjectPage;
