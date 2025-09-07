import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import CompanySection from '../components/CompanySection';
import UniqueArchitecture from '../components/UniqueArchitecture';
import ImageSlider from '../components/ImageSlider';
import OurProjects from '../components/OurProjects';
import Houses from './HousesPage';
import ProjectPage from '../pages/ProjectPage'
import Mortgage from '../components/Mortgage'
import OurTeam from '../components/OurTeam'
import ScrollToTop from '../components/ScrollToTop';

function Main() {
  return (
    <Router>
      <ScrollToTop />
      <div className="Main">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <div className="wrapper">
                  <div className="wrapper-header">
                    <Header />
                  </div>
                  <Hero />
                </div>
                <Stats />
                <CompanySection />
                <div className="wrapper-unique-architecture">
                  <UniqueArchitecture />
                </div>
                <ImageSlider />
                <OurProjects />
                <Mortgage />
                <OurTeam />
              </React.Fragment>
            }
          />
          <Route path="/Houses" element={<Houses />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;