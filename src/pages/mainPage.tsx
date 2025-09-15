import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import CompanySection from '../components/CompanySection';
import UniqueArchitecture from '../components/UniqueArchitecture';
import ImageSlider from '../components/ImageSlider';
import OurProjects from '../components/OurProjects';
import Houses from './HousesPage';
import OurProjectsPage from './OurProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import Mortgage from '../components/Mortgage';
import OurTeam from '../components/OurTeam';
import Map from '../components/SalesOfficeMap';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

// Компонент для обработки прокрутки к секциям
const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="wrapper-header">
          <Header />
        </div>
        <Hero />
      </div>
      <Stats />
      <CompanySection id="company" />
      <div className="wrapper-unique-architecture">
        <UniqueArchitecture />
      </div>
      <ImageSlider />
      <OurProjects />
      <Mortgage id="mortgage" />
      <OurTeam id="team" />
      <Map id="contacts" />
      <Footer />
    </React.Fragment>
  );
};

function Main() {
  return (
    <Router>
      <ScrollToTop />
      <div className="Main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="/our-projects" element={<OurProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;