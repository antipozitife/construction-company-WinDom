import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Header from '../components/Header';
import frame from "../../img/frameAbout.svg";
import './ProjectPage.css';

const ProjectPage = () => {
  const { projectId } = useParams(); // получаем :projectId из URL
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Проект не найден</div>;
  }

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
                    <img src={project.imgAbout1} className="company-image" />
                    <img src={project.imgAbout1} className="company-image" />
                    <img src={frame} className="orange-frame" />
                </div>
                <div className='text-container'>
                    <span className='nameProject'>{project.title1}</span>
                    <span className='nameProject'>{project.title2} </span>
                    <span>{project.description}</span>
                    <ul>
                        <li>
                            <img src={project.IMGaboutList1}/>
                            <span>{project.aboutList1}</span>
                        </li>
                        <li>
                            <img src={project.IMGaboutList2}/>
                            <span>{project.aboutList2}</span>
                        </li>
                        <li>
                            <img src={project.IMGaboutList3}/>
                            <span>{project.aboutList3}</span>
                        </li>
                        <li>
                            <img src={project.IMGaboutList4}/>
                            <span>{project.aboutList4}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectPage;
