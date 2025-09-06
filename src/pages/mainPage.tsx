import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import CompanySection from '../components/CompanySection';
import UniqueArchitecture from '../components/UniqueArchitecture';
import ImageSlider from '../components/ImageSlider';
import OurProjects from '../components/OurProjects';
import Houses from '../pages/housesTest';

function Main() {
  return (
    <Router>
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
              </React.Fragment>
            }
          />
          <Route path="/Houses" element={<Houses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;